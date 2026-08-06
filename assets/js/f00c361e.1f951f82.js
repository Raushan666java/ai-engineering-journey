"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[45795],{

/***/ 3611
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_14_typescript_md_f00_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-14-typescript-md-f00.json
const site_docs_courses_web_development_14_typescript_md_f00_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/14-typescript","title":"Chapter 14: TypeScript","description":"Previous 15-nextjs","source":"@site/docs/courses/web-development/14-typescript.md","sourceDirName":"courses/web-development","slug":"/web-development/14-typescript","permalink":"/ai-engineering-journey/web-development/14-typescript","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-typescript","slug":"/web-development/14-typescript","title":"Chapter 14: TypeScript","sidebar_label":"Chapter 14: TypeScript","sidebar_position":14},"sidebar":"coursesSidebar","previous":{"title":"Chapter 13: Web Security","permalink":"/ai-engineering-journey/web-development/13-security"},"next":{"title":"Chapter 15: Next.js","permalink":"/ai-engineering-journey/web-development/15-nextjs"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/14-typescript.md


const frontMatter = {
	id: '14-typescript',
	slug: '/web-development/14-typescript',
	title: 'Chapter 14: TypeScript',
	sidebar_label: 'Chapter 14: TypeScript',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: TypeScript';

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
  "value": "14.1 Setting Up TypeScript",
  "id": "141-setting-up-typescript",
  "level": 2
}, {
  "value": "14.2 Basic Types",
  "id": "142-basic-types",
  "level": 2
}, {
  "value": "14.2 Interfaces vs Types",
  "id": "142-interfaces-vs-types",
  "level": 2
}, {
  "value": "14.3 Generics",
  "id": "143-generics",
  "level": 2
}, {
  "value": "14.4 Utility Types",
  "id": "144-utility-types",
  "level": 2
}, {
  "value": "14.5 Type Narrowing",
  "id": "145-type-narrowing",
  "level": 2
}, {
  "value": "14.6 TypeScript with React",
  "id": "146-typescript-with-react",
  "level": 2
}, {
  "value": "14.7 Conditional Types and Template Literal Types",
  "id": "147-conditional-types-and-template-literal-types",
  "level": 2
}, {
  "value": "Branded Types and Nominal Typing",
  "id": "branded-types-and-nominal-typing",
  "level": 3
}, {
  "value": "satisfies Operator Deep Dive",
  "id": "satisfies-operator-deep-dive",
  "level": 3
}, {
  "value": "14.9 TypeScript with Express",
  "id": "149-typescript-with-express",
  "level": 2
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
  "value": "TypeScript: Type Guard Generator &amp; Utility Type Builder",
  "id": "typescript-type-guard-generator--utility-type-builder",
  "level": 3
}, {
  "value": "TypeScript Implementation: Type Mapper, Interface-to-Class Transformer, Generic Constraint Checker",
  "id": "typescript-implementation-type-mapper-interface-to-class-transformer-generic-constraint-checker",
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
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-14-typescript",
        children: "Chapter 14: TypeScript"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/13-security",
          children: "13-security"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/15-nextjs",
          children: "15-nextjs"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " TypeScript adds static type checking with interfaces, types, generics, and utility types on top of JavaScript."]
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
        href: "../../assets/images/lessons/web-development/14-typescript/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/14-typescript/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/14-typescript/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/14-typescript/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/14-typescript/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/14-typescript/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Interfaces support declaration merging and extension; type aliases support unions and computed properties."]
      }), "\n"]
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
            children: "Basic Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primitives, tuples, unions, and object types form the foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use `string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interfaces vs Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interfaces extend and merge; types compose via intersections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use interfaces for public API shapes, types for unions, computed types, and mapped types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters that capture type relationships between inputs and outputs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extends"
            }), " constraints to restrict generic type parameters while preserving flexibility"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility Types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Partial"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Pick"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Omit"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Record"
            }), " transform existing types"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compose utility types for derived types that stay in sync with the source type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Narrowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript narrows union types through control flow analysis"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use discriminated unions with a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kind"
            }), " property for exhaustive switch-case narrowing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React with TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type props, state, hooks, and components for end-to-end type safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define an interface for every component's props — even simple ones"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Generics create reusable components that work with any type while preserving type safety."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[Basic Types & Primitives]\n    B[Interfaces vs Type Aliases]\n    A --> B\n    C[Generics & Constraints]\n    B --> C\n    D[Utility Types]\n    C --> D\n    E[Type Narrowing & Guards]\n    D --> E\n    F[Discriminated Unions]\n    E --> F\n    G[React Components with TS]\n    F --> G\n    H[Express with TS]\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use TypeScript types, interfaces, and generics effectively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between types, interfaces, and type aliases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply utility types and type narrowing patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write type-safe React components and API routes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure TypeScript for strict mode"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-setting-up-typescript",
      children: "14.1 Setting Up TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize TypeScript in a project\nnpm install typescript --save-dev\nnpx tsc --init\n\n# Key tsconfig.json options for strict mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"bundler\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true,\n    \"forceConsistentCasingInFileNames\": true,\n    \"outDir\": \"./dist\",\n    \"rootDir\": \"./src\",\n    \"declaration\": true,\n    \"declarationMap\": true,\n    \"sourceMap\": true,\n    \"noUncheckedIndexedAccess\": true\n  },\n  \"include\": [\"src/**/*\"],\n  \"exclude\": [\"node_modules\", \"dist\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Compile and run\n// npx tsc --noEmit    # Type-check only\n// npx tsc             # Compile to JavaScript\n// npx tsx src/index.ts # Run directly (tsx = TypeScript Execute)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-basic-types",
      children: "14.2 Basic Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Utility types like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Partial"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pick"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Omit"
        }), " derive new types from existing ones without duplication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/14-typescript.png",
        alt: "TypeScript Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Primitive types\nlet name: string = \"Alice\";\nlet age: number = 30;\nlet isActive: boolean = true;\nlet id: string | number = \"abc123\"; // Union type\n\n// Arrays and Tuples\nlet scores: number[] = [95, 87, 92];\nlet pair: [string, number] = [\"Alice\", 30]; // Tuple\nlet optional: [string, number?] = [\"Alice\"]; // Optional element\n\n// Object types\ninterface User {\n  readonly id: string; // Read-only property\n  name: string;\n  email: string;\n  age?: number; // Optional property\n}\n\n// Type aliases\ntype Point = {\n  x: number;\n  y: number;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "142-interfaces-vs-types",
      children: "14.2 Interfaces vs Types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Type narrowing through typeof, instanceof, and discriminated unions refines types within control flow branches."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Interfaces - extendable, declaration merging\ninterface Animal {\n  name: string;\n}\ninterface Bear extends Animal {\n  honey: boolean;\n}\ninterface Animal {\n  legs: number; // Declaration merging\n}\n// Result: Animal has name AND legs\n\n// Types - closed, computed properties\ntype AnimalType = { name: string };\ntype BearType = AnimalType & { honey: boolean }; // Intersection\n// Cannot reopen type: Type 'BearType' is already defined\n\n// When to use each:\n// Interface: Public API shapes, objects that will be extended\n// Type: Union types, computed types, mapped types\ntype Status = \"active\" | \"inactive\" | \"pending\";\ntype Stringify<T> = { [K in keyof T]: string };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "143-generics",
      children: "14.3 Generics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " TypeScript integrates with React and Express for full-stack type safety from database to UI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Generic function\nfunction first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst num = first([1, 2, 3]); // number\nconst str = first([\"a\", \"b\"]); // string\n\n// Generic interface\ninterface Repository<T extends { id: string }> {\n  getById(id: string): Promise<T | null>;\n  create(data: Omit<T, \"id\">): Promise<T>;\n  update(id: string, data: Partial<T>): Promise<T>;\n  delete(id: string): Promise<void>;\n}\n\n// Generic constraints\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { name: \"Alice\", age: 30 };\ngetProperty(user, \"name\"); // string\ngetProperty(user, \"age\"); // number\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "144-utility-types",
      children: "14.4 Utility Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface User {\n  id: string;\n  name: string;\n  email: string;\n  role: \"admin\" | \"user\";\n  createdAt: Date;\n}\n\n// Partial - all properties optional\ntype UpdateUser = Partial<User>;\n\n// Required - all properties required\ntype CompleteUser = Required<User>;\n\n// Pick - select specific properties\ntype UserSummary = Pick<User, \"id\" | \"name\" | \"email\">;\n\n// Omit - exclude properties\ntype CreateUser = Omit<User, \"id\" | \"createdAt\">;\n\n// Record - key-value map\ntype UserMap = Record<string, User>;\n\n// Extract - union member filtering\ntype AdminOnly = Extract<User[\"role\"], \"admin\">;\n\n// Exclude - remove from union\ntype NonAdmin = Exclude<User[\"role\"], \"admin\">;\n\n// Readonly\ntype ImmutableUser = Readonly<User>;\n\n// ReturnType\ntype CreateUserReturn = ReturnType<typeof createUser>;\n\n// Awaited - unwrap promises\ntype UserData = Awaited<ReturnType<typeof fetchUser>>;\n\n// NonNullable\ntype Maybe = string | null | undefined;\ntype Definitely = NonNullable<Maybe>; // string\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "145-type-narrowing",
      children: "14.5 Type Narrowing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Type guards\nfunction isString(value: unknown): value is string {\n  return typeof value === \"string\";\n}\n\nfunction process(value: string | number) {\n  if (isString(value)) {\n    return value.toUpperCase(); // TypeScript knows this is string\n  }\n  return value.toFixed(2); // TypeScript knows this is number\n}\n\n// Discriminated unions\ntype Shape =\n  | { kind: \"circle\"; radius: number }\n  | { kind: \"rectangle\"; width: number; height: number }\n  | { kind: \"triangle\"; base: number; height: number };\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case \"circle\":\n      return Math.PI * shape.radius ** 2;\n    case \"rectangle\":\n      return shape.width * shape.height;\n    case \"triangle\":\n      return (shape.base * shape.height) / 2;\n  }\n}\n\n// Assertion functions\nfunction assertIsDefined<T>(value: T): asserts value is NonNullable<T> {\n  if (value === null || value === undefined) {\n    throw new Error(\"Value must be defined\");\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "146-typescript-with-react",
      children: "14.6 TypeScript with React"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { useState, useCallback, FC, ReactNode } from \"react\";\n\n// Component props\ninterface ButtonProps {\n  variant?: \"primary\" | \"secondary\" | \"danger\";\n  size?: \"sm\" | \"md\" | \"lg\";\n  disabled?: boolean;\n  children: ReactNode;\n  onClick: () => void;\n}\n\nconst Button: FC<ButtonProps> = ({\n  variant = \"primary\",\n  size = \"md\",\n  disabled = false,\n  children,\n  onClick,\n}) => {\n  return (\n    <button\n      onClick={onClick}\n      disabled={disabled}\n      className={`btn btn-${variant} btn-${size}`}\n    >\n      {children}\n    </button>\n  );\n};\n\n// Generic component\ninterface ListProps<T> {\n  items: T[];\n  renderItem: (item: T) => ReactNode;\n}\n\nfunction List<T>({ items, renderItem }: ListProps<T>) {\n  return <ul>{items.map(renderItem)}</ul>;\n}\n\n// Usage\n<List items={users} renderItem={(user) => <li>{user.name}</li>} />;\n\n// Custom hook with types\nfunction useLocalStorage<T>(key: string, initial: T): [T, (value: T) => void] {\n  const [stored, setStored] = useState<T>(() => {\n    try {\n      const item = localStorage.getItem(key);\n      return item ? JSON.parse(item) : initial;\n    } catch {\n      return initial;\n    }\n  });\n\n  const setValue = useCallback(\n    (value: T) => {\n      setStored(value);\n      localStorage.setItem(key, JSON.stringify(value));\n    },\n    [key]\n  );\n\n  return [stored, setValue];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "147-conditional-types-and-template-literal-types",
      children: "14.7 Conditional Types and Template Literal Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Conditional types select a type based on a condition\ntype IsString<T> = T extends string ? \"yes\" : \"no\";\ntype A = IsString<string>;  // \"yes\"\ntype B = IsString<number>;  // \"no\"\n\n// Filter types from a union\ntype ExtractStrings<T> = T extends string ? T : never;\ntype StringsOnly = ExtractStrings<string | number | boolean>; // string\n\n// Infer return type\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\ntype Result1 = Unwrap<Promise<string>>; // string\ntype Result2 = Unwrap<number>; // number\n\n// Template literal types (TS 4.1+)\ntype EventName = `on${Capitalize<string>}`;\ntype ClickEvent = `onClick`; // Valid\n\ntype HttpMethod = \"GET\" | \"POST\" | \"PUT\" | \"DELETE\";\ntype ApiEndpoint = `/api/${string}`;\ntype FullRoute = `${HttpMethod} ${ApiEndpoint}`;\n// \"GET /api/users\" | \"POST /api/users\" | ...\n\n// Mapping with template literals\ntype CSSProperty = \"margin\" | \"padding\";\ntype CSSDirection = \"top\" | \"right\" | \"bottom\" | \"left\";\ntype CSSKey = `${CSSProperty}-${CSSDirection}`;\n// \"margin-top\" | \"margin-right\" | \"margin-bottom\" | \"margin-left\" | ...\n\n// Parsing URL params\ntype ExtractParam<S extends string> =\n  S extends `${string}[${infer Param}]${string}` ? Param : never;\ntype Param = ExtractParam<\"/api/users/[userId]\">; // \"userId\"\n\n// Mapped types with key remapping\ntype Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\ntype UserGetters = Getters<{ name: string; age: number }>;\n// { getName: () => string; getAge: () => number }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branded-types-and-nominal-typing",
      children: "Branded Types and Nominal Typing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript uses structural typing, but branded types simulate nominal typing for type safety."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Branded type pattern\ntype Brand<K, T> = K & { __brand: T };\n\ntype UserId = Brand<string, \"UserId\">;\ntype PostId = Brand<string, \"PostId\">;\ntype Email = Brand<string, \"Email\">;\n\nfunction getUser(id: UserId) {\n  return prisma.user.findUnique({ where: { id } });\n}\n\nfunction getPost(id: PostId) {\n  return prisma.post.findUnique({ where: { id } });\n}\n\n// TypeScript error: Argument of type 'string' is not assignable to parameter of type 'UserId'\nconst id: string = \"abc123\";\n// getUser(id); // Error!\n\n// Must create branded type explicitly\nconst userId = \"abc123\" as UserId;\ngetUser(userId); // OK\n\n// Flavoring (weak brand) — only structural check, no runtime cost\ntype Flavor<T, F> = T & { __flavor?: F };\ntype Meters = Flavor<number, \"meters\">;\ntype Seconds = Flavor<number, \"seconds\">;\n\nfunction travel(distance: Meters, time: Seconds): Meters {\n  return (distance / (time as number)) as Meters;\n}\n\ntravel(100 as Meters, 9.58 as Seconds);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "satisfies-operator-deep-dive",
      children: "satisfies Operator Deep Dive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "satisfies"
      }), " operator (TS 4.9+) checks type compatibility without altering inference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Without satisfies — type widening loses literal info\nconst palette1: Record<string, string | string[]> = {\n  red: [\"255\", \"0\", \"0\"],\n  green: \"#00ff00\",\n};\npalette1.red.map(Number); // Error: string | string[] may not have .map\n\n// With satisfies — checks type but keeps narrow inference\nconst palette2 = {\n  red: [\"255\", \"0\", \"0\"],\n  green: \"#00ff00\",\n} satisfies Record<string, string | string[]>;\n\npalette2.red.map(Number); // OK — inferred as string[]\npalette2.green.toUpperCase(); // OK — inferred as string\n\n// Useful for connecting objects to types without losing precision\ntype Color = \"red\" | \"green\" | \"blue\";\ntype ColorMap = Record<Color, { hex: string; rgb: [number, number, number] }>;\n\nconst colors = {\n  red: { hex: \"#ff0000\", rgb: [255, 0, 0] as const },\n  green: { hex: \"#00ff00\", rgb: [0, 255, 0] as const },\n  blue: { hex: \"#0000ff\", rgb: [0, 0, 255] as const },\n} satisfies ColorMap;\n\ncolors.red.rgb; // Inferred as readonly [255, 0, 0], not number[]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "149-typescript-with-express",
      children: "14.9 TypeScript with Express"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import express, { Request, Response, NextFunction, RequestHandler } from \"express\";\nimport { z } from \"zod\";\n\ninterface AuthenticatedRequest extends Request {\n  user?: {\n    id: string;\n    role: \"admin\" | \"user\";\n  };\n}\n\n// Typed request handler\ntype AsyncHandler = (\n  req: AuthenticatedRequest,\n  res: Response,\n  next: NextFunction\n) => Promise<void>;\n\nfunction asyncHandler(fn: AsyncHandler): RequestHandler {\n  return (req, res, next) => Promise.resolve(fn(req as AuthenticatedRequest, res, next)).catch(next);\n}\n\n// Typed router\nconst router = express.Router();\n\nconst createUserSchema = z.object({\n  name: z.string(),\n  email: z.string().email(),\n});\n\nrouter.post(\n  \"/users\",\n  asyncHandler(async (req, res) => {\n    const data = createUserSchema.parse(req.body);\n    const user = await createUser(data);\n    res.status(201).json({ data: user });\n  })\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "satisfies"
        }), " operator (TS 4.9+) to check that a value matches a type without changing its inferred type: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const palette = { red: [255,0,0] } satisfies Record<string, number[]>"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "any"
        }), " disables type checking entirely. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unknown"
        }), " instead when you cannot know the type — it forces type narrowing before use."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!REMEMBER]\nEnable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strict: true"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tsconfig.json"
        }), " — it enables ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strictNullChecks"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noImplicitAny"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strictFunctionTypes"
        }), ", and other critical checks in one flag."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Interface vs Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extendable, declaration merging, object shapes only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unions, intersections, computed/mapped types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "type"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "interface"
            }), " for React Props"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convention — both work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convention — both work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "any"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unknown"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disables all type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forces narrowing before use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "as"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "satisfies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type assertion — overrides inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type check — preserves inference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "as const"
            }), " object"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime value, reverse mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const object with literal union type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Primitive Types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "number"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "bigint"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "symbol"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "any"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "unknown"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "never"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Utility Types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Partial<T>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Required<T>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Pick<T,K>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Omit<T,K>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Record<K,V>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Readonly<T>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReturnType<T>"
            }), ",", (0,jsx_runtime.jsx)(_components.code, {
              children: "Awaited<T>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Narrowing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "typeof"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "instanceof"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in"
            }), ", discriminated unions, type predicates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tsconfig Strict"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strict: true"
            }), " enables ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strictNullChecks"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "noImplicitAny"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strictFunctionTypes"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strictBindCallApply"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React Types"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FC<Props>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactNode"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactElement"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RefObject<T>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Dispatch<SetStateAction<T>>"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "React SPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed props, state, and context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time error catching for UI components"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Express API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed request handlers, Zod validation types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end type safety from DB to API response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monorepo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared types package consumed by frontend and backend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single source of truth for data shapes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generics for reusable transformers and validators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe data transformations without casts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Library/ SDK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Published types for external consumers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent developer experience for API consumers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. When should you use an interface over a type alias?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Always — interfaces are better"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) For object shapes that may be extended or merged"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) For union types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) For computed types"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) Interfaces support declaration merging and extension (", (0,jsx_runtime.jsx)(_components.code, {
              children: "extends"
            }), "), making them ideal for public API shapes that may be extended later. Types are better for unions, intersections, and computed types."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q2. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pick<User, 'id' | 'name'>"
        }), " produce?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A type with all User properties except id and name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A type with only id and name from User"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A type that makes id and name optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A type identical to User"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Pick"
            }), " creates a type containing only the specified keys from the source type. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Omit"
            }), " does the inverse — it excludes the specified keys."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3. How do discriminated unions improve type safety?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) They combine multiple types into one"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) A literal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kind"
        }), " property lets TypeScript narrow the type within each branch"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) They replace switch statements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) They add runtime type checking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) Discriminated unions use a literal property (like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kind"
            }), ") to distinguish between union members. TypeScript narrows the type within each branch of a switch, ensuring only valid properties are accessed."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q4. What does enabling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strict: true"
        }), " in tsconfig do?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Only enables strictNullChecks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Enables all strict type-checking options including strictNullChecks, noImplicitAny, and strictFunctionTypes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Makes all properties readonly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Disables type checking for JavaScript files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strict: true"
            }), " is a convenience flag that enables all strict type-checking family options — critical for catching null reference errors, implicit anys, and function type mismatches at compile time."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-type-guard-generator--utility-type-builder",
      children: "TypeScript: Type Guard Generator & Utility Type Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TypeGuardGenerator {\n  static isString(val: unknown): val is string { return typeof val === \"string\"; }\n  static isNumber(val: unknown): val is number { return typeof val === \"number\" && !isNaN(val); }\n  static isBoolean(val: unknown): val is boolean { return typeof val === \"boolean\"; }\n  static isObject<T extends Record<string, unknown>>(val: unknown, shape: Record<keyof T, (v: unknown) => boolean>): val is T {\n    if (typeof val !== \"object\" || val === null) return false;\n    return Object.entries(shape).every(([key, check]) => check((val as Record<string, unknown>)[key]));\n  }\n  static isArrayOf<T>(val: unknown, check: (v: unknown) => v is T): val is T[] {\n    return Array.isArray(val) && val.every(check);\n  }\n  static isNullable<T>(val: unknown, check: (v: unknown) => v is T): val is T | null | undefined {\n    return val == null || check(val);\n  }\n}\n\nclass UtilityTypeBuilder {\n  static deepPartial<T>(obj: T): Partial<T> {\n    if (typeof obj !== \"object\" || obj === null) return obj;\n    const result: Record<string, any> = {};\n    for (const [k, v] of Object.entries(obj))\n      result[k] = typeof v === \"object\" ? UtilityTypeBuilder.deepPartial(v) : v;\n    return result as Partial<T>;\n  }\n  static pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {\n    const result = {} as Pick<T, K>;\n    keys.forEach(k => result[k] = obj[k]);\n    return result;\n  }\n}\n\nclass DiscriminatedUnionDemo {\n  static process(event: { kind: string; data: unknown }): string {\n    switch (event.kind) {\n      case \"click\": return `Clicked at ${JSON.stringify(event.data)}`;\n      case \"focus\": return `Focused on ${event.data}`;\n      case \"scroll\": return `Scrolled to position ${event.data}`;\n      default: return `Unknown event: ${event.kind}`;\n    }\n  }\n}\n\nconsole.log(\"isNumber:\", TypeGuardGenerator.isNumber(42));\nconsole.log(\"Pick:\", UtilityTypeBuilder.pick({ a: 1, b: 2, c: 3 }, \"a\", \"c\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-type-mapper-interface-to-class-transformer-generic-constraint-checker",
      children: "TypeScript Implementation: Type Mapper, Interface-to-Class Transformer, Generic Constraint Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class TypeScriptTypeMapper {\n    static mapJSToTS(type: string): string {\n        const map: Record<string, string> = {\n            \"number\": \"number\", \"string\": \"string\", \"boolean\": \"boolean\",\n            \"undefined\": \"undefined\", \"null\": \"null\", \"object\": \"Record<string, any>\",\n            \"function\": \"Function\", \"symbol\": \"symbol\", \"bigint\": \"bigint\",\n            \"array\": \"any[]\", \"promise\": \"Promise<any>\", \"date\": \"Date\",\n            \"map\": \"Map<any, any>\", \"set\": \"Set<any>\", \"regexp\": \"RegExp\",\n            \"error\": \"Error\", \"buffer\": \"Buffer\",\n        };\n        return map[type.toLowerCase()] || \"unknown\";\n    }\n\n    static inferFromValue(value: any): string {\n        if (value === null) return \"null\";\n        if (value === undefined) return \"undefined\";\n        if (Array.isArray(value)) {\n            if (value.length === 0) return \"unknown[]\";\n            const elementTypes = [...new Set(value.map(v => this.inferFromValue(v)))];\n            return elementTypes.length === 1 ? `${elementTypes[0]}[]` : `(${elementTypes.join(\" | \")})[]`;\n        }\n        if (typeof value === \"object\") {\n            const keys = Object.keys(value);\n            if (keys.length === 0) return \"Record<string, unknown>\";\n            const props = keys.map(k => `${k}: ${this.inferFromValue(value[k])}`).join(\"; \");\n            return `{ ${props} }`;\n        }\n        return this.mapJSToTS(typeof value);\n    }\n\n    static generateInterface(name: string, obj: Record<string, any>): string {\n        const props = Object.entries(obj).map(([key, value]) => {\n            const tsType = this.inferFromValue(value);\n            const optional = value === null || value === undefined ? \"?\" : \"\";\n            return `  ${key}${optional}: ${tsType};`;\n        });\n        return `interface ${name} {\\n${props.join(\"\\n\")}\\n}`;\n    }\n}\n\nclass InterfaceToClassTransformer {\n    static transform(interfaceCode: string, className?: string): string {\n        const nameMatch = interfaceCode.match(/interface\\s+(\\w+)/);\n        if (!nameMatch) return interfaceCode;\n        const name = className || nameMatch[1];\n\n        const props: { name: string; type: string; optional: boolean }[] = [];\n        const propPattern = /^\\s+(\\w+)(\\??):\\s*([^;]+);/gm;\n        let match;\n        while ((match = propPattern.exec(interfaceCode)) !== null) {\n            props.push({ name: match[1], optional: match[2] === \"?\", type: match[3].trim() });\n        }\n\n        const fields = props.map(p => `  private _${p.name}${p.optional ? \"?\" : \"\"}: ${p.type};`).join(\"\\n\");\n        const constructor = `  constructor(data: ${name}) {\\n    ${props.map(p => `this._${p.name} = data.${p.name};`).join(\"\\n    \")}\\n  }`;\n        const getters = props.map(p =>\n            `  get ${p.name}(): ${p.type} { return this._${p.name}; }` +\n            (p.optional ? \"\" : `\\n  set ${p.name}(value: ${p.type}) { this._${p.name} = value; }`)\n        ).join(\"\\n\\n\");\n\n        return `class ${name} {\\n${fields}\\n\\n${constructor}\\n\\n${getters}\\n}`;\n    }\n}\n\nclass GenericConstraintChecker {\n    static validate<T extends Record<string, any>>(obj: T, constraint: { keys?: string[]; types?: Record<string, string> }): { valid: boolean; errors: string[] } {\n        const errors: string[] = [];\n\n        if (constraint.keys) {\n            for (const key of constraint.keys) {\n                if (!(key in obj)) errors.push(`Missing required key: \"${key}\"`);\n            }\n        }\n\n        if (constraint.types) {\n            for (const [key, expectedType] of Object.entries(constraint.types)) {\n                if (key in obj) {\n                    const actual = typeof obj[key];\n                    if (actual !== expectedType) {\n                        errors.push(`Key \"${key}\" expected ${expectedType}, got ${actual}`);\n                    }\n                }\n            }\n        }\n\n        return { valid: errors.length === 0, errors };\n    }\n\n    static ensureExtends<T, U extends T>(): string { return \"Constraint satisfied at compile time\"; }\n}\n\nclass UtilityTypeBuilder {\n    static pick<T extends Record<string, any>, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {\n        const result = {} as Pick<T, K>;\n        for (const key of keys) result[key] = obj[key];\n        return result;\n    }\n\n    static omit<T extends Record<string, any>, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {\n        const result = { ...obj };\n        for (const key of keys) delete result[key];\n        return result;\n    }\n\n    static partial<T extends Record<string, any>>(obj: T): Partial<T> {\n        return { ...obj };\n    }\n\n    static readonly<T extends Record<string, any>>(obj: T): Readonly<T> {\n        return Object.freeze({ ...obj });\n    }\n\n    static record<K extends string | number | symbol, V>(keys: K[], value: V): Record<K, V> {\n        return keys.reduce((acc, k) => ({ ...acc, [k]: value }), {} as Record<K, V>);\n    }\n}\n\n// Demo\nconst userObj = { id: 1, name: \"Alice\", email: \"alice@example.com\", roles: [\"admin\"], metadata: { lastLogin: \"2026-01-01\" } };\nconsole.log(TypeScriptTypeMapper.generateInterface(\"User\", userObj));\nconst interfaceCode = \"interface Person { name: string; age: number; email?: string; }\";\nconsole.log(\"Class:\\n\", InterfaceToClassTransformer.transform(interfaceCode, \"Person\"));\nconsole.log(\"Pick:\", JSON.stringify(UtilityTypeBuilder.pick(userObj, \"id\", \"name\")));\nconsole.log(\"Constraint:\", JSON.stringify(GenericConstraintChecker.validate(userObj, { keys: [\"id\", \"name\", \"email\"], types: { id: \"number\", name: \"string\" } })));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// typescript\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'typescript', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript adds static type checking to JavaScript, catching errors at compile time. Generics enable reusable, type-safe components. Utility types transform existing types. Type narrowing and discriminated unions make code safer. TypeScript integrates seamlessly with React and Express for end-to-end type safety."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When should you use an interface instead of a type alias?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do generics improve code reusability?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a discriminated union and when is it useful?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Convert a JavaScript React project to TypeScript"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a generic API client with typed responses"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a type-safe event emitter using generics"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a type-safe event emitter using generics where each event name maps to its payload type: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "emit(\"userLogin\", { userId: string })"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Build a conditional type that extracts the resolved value type from a nested ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promise"
          }), " type: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DeepUnwrap<Promise<Promise<string>>>"
          }), " should produce ", (0,jsx_runtime.jsx)(_components.code, {
            children: "string"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a branded type system for a banking app with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AccountId"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TransactionId"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Currency"
          }), " branded types. Write functions that accept only the correct branded types at compile time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "satisfies"
          }), "-based configuration validator that checks a config object against a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Record<string, string | number | boolean>"
          }), " type while preserving the literal types of each property for autocomplete."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a type-safe ORM-like query builder using TypeScript generics, template literal types, and mapped types. Support typed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "where"
      }), " clauses, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "select"
      }), " projections, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "join"
      }), " inference, and return types that match the query structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Enable ", (0,jsx_runtime.jsx)(_components.code, {
            children: "strict: true"
          })]
        }), " — it activates strictNullChecks, noImplicitAny, and other critical checks in one flag."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "interface"
          }), " for public APIs"]
        }), " — interfaces support declaration merging and extension, making them ideal for library consumers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unknown"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "any"
          })]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unknown"
        }), " forces type narrowing before use, preventing runtime errors. Reserve ", (0,jsx_runtime.jsx)(_components.code, {
          children: "any"
        }), " for migration scenarios only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Leverage ", (0,jsx_runtime.jsx)(_components.code, {
            children: "satisfies"
          })]
        }), " — the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "satisfies"
        }), " operator (TS 4.9+) checks type compatibility without changing the inferred type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compose utility types"
        }), " — chain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Partial"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pick"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Omit"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Record"
        }), " to derive types that stay in sync with their source."]
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