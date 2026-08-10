"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[57714],{

/***/ 79586
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_01_introduction_md_48d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-01-introduction-md-48d.json
const site_docs_courses_compiler_design_01_introduction_md_48d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/01-introduction","title":"Chapter 1: Introduction to Compiler Design","description":"? Prerequisite Chapter 2: Lexical Analysis","source":"@site/docs/courses/compiler-design/01-introduction.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/01-introduction","permalink":"/ai-engineering-journey/compiler-design/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/compiler-design/01-introduction","title":"Chapter 1: Introduction to Compiler Design","sidebar_label":"Chapter 1: Introduction to Compiler Design","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Compiler Design — Complete Course Textbook","permalink":"/ai-engineering-journey/compiler-design"},"next":{"title":"Chapter 2: Lexical Analysis","permalink":"/ai-engineering-journey/compiler-design/02-lexical"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/compiler-design/01-introduction',
	title: 'Chapter 1: Introduction to Compiler Design',
	sidebar_label: 'Chapter 1: Introduction to Compiler Design',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Compiler Design';

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
  "level": 3
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "The Analysis-Synthesis Model",
  "id": "the-analysis-synthesis-model",
  "level": 3
}, {
  "value": "Phases of Compilation",
  "id": "phases-of-compilation",
  "level": 3
}, {
  "value": "Symbol Table Management",
  "id": "symbol-table-management",
  "level": 3
}, {
  "value": "Interpreters vs Compilers vs JIT",
  "id": "interpreters-vs-compilers-vs-jit",
  "level": 3
}, {
  "value": "Bootstrapping and Cross-Compilation",
  "id": "bootstrapping-and-cross-compilation",
  "level": 3
}, {
  "value": "Compiler Construction Tools",
  "id": "compiler-construction-tools",
  "level": 3
}, {
  "value": "The Role of Formal Language Theory",
  "id": "the-role-of-formal-language-theory",
  "level": 3
}, {
  "value": "The Evolution of Compiler Architecture",
  "id": "the-evolution-of-compiler-architecture",
  "level": 3
}, {
  "value": "TypeScript CompilerPipeline: A Complete Phase Simulator",
  "id": "typescript-compilerpipeline-a-complete-phase-simulator",
  "level": 3
}, {
  "value": "Error Handling Strategies",
  "id": "error-handling-strategies",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
        id: "chapter-1-introduction-to-compiler-design",
        children: "Chapter 1: Introduction to Compiler Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "? Prerequisite:"
      }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/02-lexical",
        children: "Chapter 2: Lexical Analysis"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: describe the analysis-synthesis model of compilation; enumerate and explain the principal phases of a compiler with their input/output representations; distinguish between compilers, interpreters, and JIT compilers with concrete performance analysis; implement a symbol table in TypeScript; construct T-diagrams for bootstrapping scenarios; explain cross-compilation, JIT vs AOT trade-offs; and identify appropriate compiler construction tools for each phase."
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
        href: "../../assets/images/lessons/compiler-design/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/01-introduction/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Analysis-Synthesis Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Front end/back end division and the N+M architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phases of Compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed phase-by-phase walkthrough of a complete program"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symbol Table Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-table-based storage with scope handling in TypeScript"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreters vs Compilers vs JIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance analysis and trade-off quantification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler Construction Tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lex, Yacc, LLVM, and automatic code-generator generators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Role of Formal Language Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chomsky hierarchy and language classification in compilation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Evolution of Compiler Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From monoliths through IR to LLVM's three-phase design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bootstrapping and Cross-Compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T-diagrams, self-hosting compilers, retargeting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Source Program] --> B[Lexical Analyzer]\n    B --> C[Syntax Analyzer]\n    C --> D[Semantic Analyzer]\n    D --> E[IR Generator]\n    E --> F[Optimizer]\n    F --> G[Code Generator]\n    G --> H[Target Program]\n    B --> I[Token Stream]\n    C --> J[Parse Tree]\n    D --> K[Annotated AST]\n    E --> L[Three-Address Code]\n    F --> M[Optimized IR]\n\n    subgraph FrontEnd\n        B\n        C\n        D\n    end\n    subgraph BackEnd\n        F\n        G\n    end\n    subgraph IR_Bridge\n        E\n    end\n    style FrontEnd fill:#e3f2fd\n    style BackEnd fill:#fff3e0\n    style IR_Bridge fill:#e8f5e9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-analysis-synthesis-model",
      children: "The Analysis-Synthesis Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compiler"
      }), " is a program that reads a program written in a source language and translates it into an equivalent program in a target language. This translation process is conventionally partitioned into two broad components: the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "analysis phase"
      }), " (front end) and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "synthesis phase"
      }), " (back end). Analysis decomposes the source program into a structured intermediate representation, exposing its grammatical structure and semantic content. Synthesis constructs the desired target program from this intermediate representation, typically performing resource-conscious transformations such as register allocation and instruction selection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The rationale for this division is modularity. The front end depends only on the source language and is largely independent of the target architecture. The back end depends on the target architecture and is largely independent of the source language. A compiler writer may combine N front ends with M back ends to support N source languages on M target machines, incurring ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "N + M"
      }), " development efforts rather than ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "N ? M"
      }), ". This architecture is prominently realized in the GNU Compiler Collection (GCC) and the LLVM Compiler Infrastructure, where language-specific front ends (C, C++, Fortran, Rust, Swift) share common back ends (x86, ARM, RISC-V, WebAssembly)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The N+M model is the central architectural insight in compiler design ? it reduces the implementation problem from N?M to N+M."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When designing a new language, always plan for an intermediate representation. A well-designed IR lets you target multiple architectures with minimal additional effort."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phases-of-compilation",
      children: "Phases of Compilation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A compiler operates as a pipeline of phases, each transforming one representation of the program into another. We walk through each phase using a concrete program:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Source program to compile:\n// result = (a + b) * (c + d) - e / f;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lexical analysis (scanning)"
      }), " reads the stream of characters and groups them into meaningful sequences called lexemes, to which it assigns tokens. A token is a pair comprising a token name and an optional attribute value. For our example, the scanner produces:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "id(result)   =   (   id(a)   +   id(b)   )   *   (   id(c)   +   id(d)   )   -   id(e)   /   id(f)   ;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scanner discards whitespace and comments."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax analysis (parsing)"
      }), " imposes hierarchical grammatical structure on the token stream. Using a context-free grammar, the parser constructs a parse tree that makes explicit the nesting and precedence relationships:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    assign[\"=\"] --> id_result[\"id(result)\"]\n    assign --> minus[\"-\"]\n    minus --> times[\"*\"]\n    times --> plus1[\"+\"]\n    plus1 --> id_a[\"id(a)\"]\n    plus1 --> id_b[\"id(b)\"]\n    times --> plus2[\"+\"]\n    plus2 --> id_c[\"id(c)\"]\n    plus2 --> id_d[\"id(d)\"]\n    minus --> divide[\"/\"]\n    divide --> id_e[\"id(e)\"]\n    divide --> id_f[\"id(f)\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic analysis"
      }), " augments the parse tree with type information. It determines that all identifiers are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float"
      }), ", so no implicit conversions are needed. It also resolves each identifier to its declaration via the symbol table and checks that the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), " operators are defined for float operands."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intermediate code generation"
      }), " translates the annotated parse tree into three-address code (TAC):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "t1 = a + b\nt2 = c + d\nt3 = t1 * t2\nt4 = e / f\nt5 = t3 - t4\nresult = t5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Code optimization"
      }), " improves the IR. If any operands are compile-time constants, constant folding applies. If common subexpressions exist across basic blocks, CSE eliminates redundant computation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Code generation"
      }), " maps TAC to target assembly. On x86-64 with floating-point registers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-nasm",
        children: "movss   xmm0, [a]\naddss   xmm0, [b]\nmovss   xmm1, [c]\naddss   xmm1, [d]\nmulss   xmm0, xmm1\nmovss   xmm1, [e]\ndivss   xmm1, [f]\nsubss   xmm0, xmm1\nmovss   [result], xmm0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "symbol-table-management",
      children: "Symbol Table Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The symbol table is a data structure maintained throughout compilation that stores information about identifiers. Each entry contains the identifier's name, type, scope level, memory location, and possibly other attributes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a complete TypeScript implementation of a scope-aware symbol table:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SymbolAttributes {\n    type: string;\n    kind: \"variable\" | \"function\" | \"parameter\";\n    scopeLevel: number;\n    offset: number;\n    isInitialized: boolean;\n}\n\nclass SymbolTable {\n    private scopes: Map<string, SymbolAttributes>[] = [];\n    private currentOffset = 0;\n\n    constructor() {\n        this.enterScope(); // global scope\n    }\n\n    enterScope(): void {\n        this.scopes.unshift(new Map());\n    }\n\n    exitScope(): Map<string, SymbolAttributes> {\n        const scope = this.scopes.shift();\n        if (!scope) throw new Error(\"No scope to exit\");\n        return scope;\n    }\n\n    declare(\n        name: string,\n        type: string,\n        kind: SymbolAttributes[\"kind\"]\n    ): boolean {\n        const current = this.scopes[0];\n        if (current.has(name)) return false; // already declared in current scope\n        current.set(name, {\n            type,\n            kind,\n            scopeLevel: this.scopes.length - 1,\n            offset: this.currentOffset++,\n            isInitialized: false,\n        });\n        return true;\n    }\n\n    lookup(name: string): SymbolAttributes | undefined {\n        for (const scope of this.scopes) {\n            const entry = scope.get(name);\n            if (entry) return entry;\n        }\n        return undefined;\n    }\n\n    isDeclaredInCurrentScope(name: string): boolean {\n        return this.scopes[0].has(name);\n    }\n\n    markInitialized(name: string): void {\n        const entry = this.lookup(name);\n        if (entry) entry.isInitialized = true;\n    }\n\n    getCurrentOffset(): number {\n        return this.currentOffset;\n    }\n}\n\n// Usage example\nconst symtab = new SymbolTable();\nsymtab.declare(\"x\", \"int\", \"variable\");\nsymtab.declare(\"printf\", \"(int)?int\", \"function\");\n\nsymtab.enterScope(); // block scope\nsymtab.declare(\"x\", \"float\", \"variable\"); // shadows outer x\nconsole.log(symtab.lookup(\"x\")?.type); // \"float\"\nsymtab.exitScope();\n\nconsole.log(symtab.lookup(\"x\")?.type); // \"int\" (restored)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interpreters-vs-compilers-vs-jit",
      children: "Interpreters vs Compilers vs JIT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interpreter"
      }), " performs the operations specified by the source program directly without first producing a target-language translation. Pure interpretation reanalyzes each statement on every encounter. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compiler"
      }), " translates the entire program ahead of time (AOT). A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "just-in-time (JIT) compiler"
      }), " translates intermediate code to native machine code at runtime, caching compiled code for repeated execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance analysis model:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "N"
        }), " = number of statement executions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "C_compile"
        }), " = cost of compiling once (AOT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "C_interpret"
        }), " = cost of interpreting one statement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "C_jit_compile"
        }), " = cost of JIT compiling a method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "C_jit_exec"
        }), " = cost of executing a JIT-compiled statement"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total costs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AOT compiler"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "C_compile + N ? C_machine"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interpreter"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "N ? C_interpret"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JIT compiler"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "C_jit_compile + N ? C_jit_exec"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Typical ratios: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C_interpret ? 10-50 ? C_machine"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C_jit_exec ? 1.5-3 ? C_machine"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C_jit_compile ? 0.1-0.5 ? C_compile"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Break-even analysis"
      }), ": A JIT beats interpretation when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C_jit_compile / (C_interpret - C_jit_exec) < N"
      }), ". For a method executing 10,000+ iterations, JIT almost always wins. JIT beats AOT when startup time matters and total execution is bounded ? the JIT compiles only hot paths while AOT compiles everything."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern virtual machine implementations for Java (HotSpot) and .NET (RyuJIT) employ JIT compilation, combining portability with performance approaching AOT. JIT systems may also employ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adaptive optimization"
      }), ", where frequently executed methods are recompiled at higher optimization levels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bootstrapping-and-cross-compilation",
      children: "Bootstrapping and Cross-Compilation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bootstrapping"
      }), " is the process of writing a compiler in the source language it compiles. A T-diagram visualizes this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph T-Diagram for Pascal Compiler\n        A[\"Pascal Source\"] --> B[\"Pascal Compiler (in Pascal)\"]\n        B --> C[\"Machine Code\"]\n    end\n    subgraph Bootstrap Step 1\n        D[\"Pascal Source\"] --> E[\"Pascal Compiler (in Pascal)\"]\n        E --> F[\"Pascal Compiler (in Machine Code)\"]\n    end\n    subgraph Bootstrap Step 2\n        G[\"Pascal Source\"] --> H[\"Pascal Compiler (in Machine Code)\"]\n        H --> I[\"Optimized Pascal Compiler (in Machine Code)\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T-diagram"
      }), " is a three-cornered notation: the top corner is the source language, the left corner is the implementation language, and the right corner is the target language. For a compiler ", (0,jsx_runtime.jsx)(_components.code, {
        children: "C"
      }), " that translates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " and is written in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    S ? T\n   /     \\\n  L       L\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-compilation"
      }), " occurs when the compiler runs on one platform (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "host"
      }), ") but produces code for a different platform (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "target"
      }), "). Cross-compilers are essential for embedded systems where the target device cannot host a compiler (e.g., compiling ARM firmware on an x86 machine)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-hosting"
      }), ": A compiler is self-hosting when it can compile its own source code. GCC achieved self-hosting in 1992. The bootstrap sequence for a new language typically starts with a minimal compiler in an existing language, then uses that to compile a more complete version, repeatedly until the full compiler is self-hosting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compiler-construction-tools",
      children: "Compiler Construction Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A variety of specialized tools automate the construction of compiler components:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lex / Flex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA-based scanner in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yacc / Bison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG with actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LALR(1) parser in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ANTLR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parsing + SDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grammar with actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LL(*) parser in Java/TS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LLVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR + optimization + codegen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLVM IR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine code (multi-target)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCCTS / SableCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parser generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grammar specification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java/C# parser"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic code-generator generators"
      }), " accept a description of the target machine's instruction set and produce instruction-selection routines based on tree-pattern matching. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data-flow analysis frameworks"
      }), " provide iterative solvers for reaching-definitions, live-variable, and available-expressions problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-role-of-formal-language-theory",
      children: "The Role of Formal Language Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal language theory provides the mathematical foundation for compilation."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automaton"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compiler Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regular (Type 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[a-zA-Z_][a-zA-Z0-9_]*"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context-free (Type 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushdown automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG for expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context-sensitive (Type 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear bounded automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursively enumerable (Type 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turing machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization / evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full program behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chomsky hierarchy"
      }), " situates these language classes within a broader theory of computation, establishing the limits of what each compiler phase can and cannot express. Regular languages describe tokens; context-free languages describe nesting structure. Context-sensitive properties like \"declare before use\" and type consistency require semantic analysis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-evolution-of-compiler-architecture",
      children: "The Evolution of Compiler Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Early compilers in the 1950s and 1960s (FORTRAN I, 1957) were monolithic programs that translated directly from source to machine code without an explicit intermediate representation. The introduction of intermediate languages, attributed grammars, and formal parsing algorithms in the 1970s led to modern modular structure."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Today, compilers like LLVM employ a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three-phase architecture"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Front end"
        }), ": language-specific, produces LLVM IR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimizer"
        }), ": shared, performs passes on LLVM IR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Back end"
        }), ": target-specific, generates machine code"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This design enables a single optimizer and back end to serve many languages, dramatically reducing implementation effort. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clang"
      }), " front end (C/C++/Objective-C) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rustc"
      }), " (Rust) both target LLVM IR, sharing optimization and code generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-compilerpipeline-a-complete-phase-simulator",
      children: "TypeScript CompilerPipeline: A Complete Phase Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface Token {\n    type: string;\n    lexeme: string;\n    line: number;\n    column: number;\n}\n\ninterface ASTNode {\n    kind: string;\n    children: ASTNode[];\n    value?: string;\n}\n\ninterface TACInstruction {\n    op: string;\n    arg1?: string;\n    arg2?: string;\n    result?: string;\n}\n\nclass CompilerPipeline {\n    private source: string;\n    private tokens: Token[] = [];\n    private ast: ASTNode | null = null;\n    private tac: TACInstruction[] = [];\n\n    constructor(source: string) {\n        this.source = source;\n    }\n\n    /** Phase 1: Lexical Analysis */\n    lex(): Token[] {\n        const tokenSpec: [RegExp, string][] = [\n            [/^\\s+/, null!],\n            [/^\\/\\/.*/, null!],\n            [/^[a-zA-Z_]\\w*/, \"ID\"],\n            [/^\\d+(\\.\\d+)?/, \"NUMBER\"],\n            [/^[+\\-*/=();{}]/, \"OP\"],\n        ];\n        let pos = 0;\n        let line = 1, col = 1;\n        while (pos < this.source.length) {\n            let matched = false;\n            for (const [pattern, type] of tokenSpec) {\n                const match = this.source.slice(pos).match(pattern);\n                if (match) {\n                    if (type !== null) {\n                        this.tokens.push({\n                            type,\n                            lexeme: match[0],\n                            line,\n                            column: col,\n                        });\n                    }\n                    const lines = match[0].split(\"\\n\");\n                    line += lines.length - 1;\n                    col = lines.length > 1 ? lines[lines.length - 1].length + 1 : col + match[0].length;\n                    pos += match[0].length;\n                    matched = true;\n                    break;\n                }\n            }\n            if (!matched) throw new Error(`Unexpected char '${source[pos]}' at ${line}:${col}`);\n        }\n        this.tokens.push({ type: \"EOF\", lexeme: \"\", line, column: col });\n        return this.tokens;\n    }\n\n    /** Phase 2: Syntax Analysis (recursive descent) */\n    parse(): ASTNode {\n        let idx = 0;\n        const peek = () => this.tokens[idx];\n        const consume = (expected?: string): Token => {\n            const tok = peek();\n            if (expected && tok.type !== expected)\n                throw new Error(`Expected ${expected} got ${tok.type} at ${tok.line}:${tok.column}`);\n            idx++;\n            return tok;\n        };\n\n        const parseExpr = (): ASTNode => {\n            let node = parseTerm();\n            while (peek().lexeme === \"+\" || peek().lexeme === \"-\") {\n                const op = consume().lexeme;\n                node = { kind: \"BinOp\", children: [node, parseTerm()], value: op };\n            }\n            return node;\n        };\n\n        const parseTerm = (): ASTNode => {\n            let node = parseFactor();\n            while (peek().lexeme === \"*\" || peek().lexeme === \"/\") {\n                const op = consume().lexeme;\n                node = { kind: \"BinOp\", children: [node, parseFactor()], value: op };\n            }\n            return node;\n        };\n\n        const parseFactor = (): ASTNode => {\n            if (peek().lexeme === \"(\") {\n                consume(\"OP\");\n                const node = parseExpr();\n                consume(\"OP\"); // )\n                return node;\n            }\n            const tok = consume(\"ID\");\n            return { kind: \"Ident\", children: [], value: tok.lexeme };\n        };\n\n        this.ast = parseExpr();\n        return this.ast;\n    }\n\n    /** Phase 3: IR Generation */\n    generateIR(): TACInstruction[] {\n        let tempCount = 0;\n        const newTemp = () => `t${++tempCount}`;\n\n        const emit = (op: string, arg1?: string, arg2?: string): string => {\n            const result = newTemp();\n            this.tac.push({ op, arg1, arg2, result });\n            return result;\n        };\n\n        const codegen = (node: ASTNode): string => {\n            if (node.kind === \"Ident\") return node.value!;\n            if (node.kind === \"BinOp\") {\n                const left = codegen(node.children[0]);\n                const right = codegen(node.children[1]);\n                return emit(node.value!, left, right);\n            }\n            throw new Error(`Unknown node ${node.kind}`);\n        };\n\n        codegen(this.ast!);\n        return this.tac;\n    }\n\n    /** Phase 4: Optimization (constant folding) */\n    optimize(): TACInstruction[] {\n        for (const inst of this.tac) {\n            const a1 = parseFloat(inst.arg1 ?? \"\");\n            const a2 = parseFloat(inst.arg2 ?? \"\");\n            if (!isNaN(a1) && !isNaN(a2)) {\n                let result: number;\n                switch (inst.op) {\n                    case \"+\": result = a1 + a2; break;\n                    case \"-\": result = a1 - a2; break;\n                    case \"*\": result = a1 * a2; break;\n                    case \"/\": result = a1 / a2; break;\n                    default: continue;\n                }\n                inst.op = \"copy\";\n                inst.arg1 = String(result);\n                inst.arg2 = undefined;\n            }\n        }\n        return this.tac;\n    }\n\n    /** Phase 5: Code Generation (to stack VM) */\n    generateAssembly(): string[] {\n        const asm: string[] = [];\n        for (const inst of this.tac) {\n            if (inst.op === \"copy\") {\n                asm.push(`  PUSH ${inst.arg1}`);\n            } else if ([\"+\", \"-\", \"*\", \"/\"].includes(inst.op)) {\n                asm.push(`  PUSH ${inst.arg1}`);\n                asm.push(`  PUSH ${inst.arg2}`);\n                asm.push(`  ${inst.op === \"+\" ? \"ADD\" : inst.op === \"-\" ? \"SUB\" : inst.op === \"*\" ? \"MUL\" : \"DIV\"}`);\n            }\n        }\n        return asm;\n    }\n\n    run(): void {\n        console.log(\"Source:\", this.source);\n        console.log(\"Phase 1 - Tokens:\", this.lex());\n        console.log(\"Phase 2 - AST:\", JSON.stringify(this.parse(), null, 2));\n        console.log(\"Phase 3 - TAC:\", this.generateIR());\n        console.log(\"Phase 4 - Optimized:\", this.optimize());\n        console.log(\"Phase 5 - Assembly:\");\n        this.generateAssembly().forEach(l => console.log(l));\n    }\n}\n\n// Demo\nconst pipeline = new CompilerPipeline(\"a+b*c\");\npipeline.run();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling-strategies",
      children: "Error Handling Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compilers must handle errors gracefully, reporting them clearly without crashing. Four major strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Panic mode"
        }), ": On error, discard input tokens until a synchronizing token (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: ";"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "}"
        }), ") is found. Simple and prevents cascading errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phrase-level recovery"
        }), ": Insert, delete, or replace tokens to complete the current construct (e.g., insert a missing semicolon)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error productions"
        }), ": Augment the grammar with productions that deliberately match common mistakes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stmt ? error ;"
        }), "), associating recovery actions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global correction"
        }), ": Find the minimal edit distance to a valid program (expensive, used in some IDEs)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript implementation of lexical error recovery:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class ErrorRecoveringLexer {\n    private source: string;\n    private pos = 0;\n    private errors: string[] = [];\n    private tokens: Token[] = [];\n\n    constructor(source: string) { this.source = source; }\n\n    scan(): Token[] {\n        while (this.pos < this.source.length) {\n            try {\n                const token = this.scanToken();\n                if (token) this.tokens.push(token);\n            } catch (e: any) {\n                this.errors.push(e.message);\n                this.pos++; // skip one character and continue\n            }\n        }\n        return this.tokens;\n    }\n\n    private scanToken(): Token | null {\n        // Skip whitespace\n        while (this.pos < this.source.length && /\\s/.test(this.source[this.pos]))\n            this.pos++;\n        if (this.pos >= this.source.length) return null;\n        const ch = this.source[this.pos];\n        if (/[a-zA-Z_]/.test(ch)) return this.scanWord();\n        if (/[0-9]/.test(ch)) return this.scanNumber();\n        if (\"+-*/=();{}\".includes(ch)) return { type: \"OP\", lexeme: this.source[this.pos++], line: 0, column: 0 };\n        throw new Error(`Unrecognized character '${ch}' at position ${this.pos}`);\n    }\n\n    private scanWord(): Token {\n        const start = this.pos;\n        while (this.pos < this.source.length && /[a-zA-Z0-9_]/.test(this.source[this.pos])) this.pos++;\n        return { type: \"ID\", lexeme: this.source.slice(start, this.pos), line: 0, column: start };\n    }\n\n    private scanNumber(): Token {\n        const start = this.pos;\n        while (this.pos < this.source.length && /[0-9.]/.test(this.source[this.pos])) this.pos++;\n        return { type: \"NUMBER\", lexeme: this.source.slice(start, this.pos), line: 0, column: start };\n    }\n\n    getErrors(): string[] { return this.errors; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compilers translate source programs into target programs through a sequence of phases organized into front end (analysis) and back end (synthesis). Lexical analysis, syntax analysis, semantic analysis, intermediate code generation, optimization, and code generation each transform one representation into another. Interpreters offer flexibility at the cost of execution speed, while JIT compilers attempt to bridge the gap. Specialized tools automate the construction of scanners, parsers, and other compiler components. The modern three-phase architecture with a shared IR enables efficient retargeting across source languages and target machines. Bootstrapping and T-diagrams illustrate how compilers can be self-hosting, and careful error handling strategies ensure robustness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always design the IR first"
        }), ": The intermediate representation is the most consequential architectural decision. A well-designed IR (like LLVM's) enables multi-language, multi-target compilation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope management in the symbol table"
        }), ": Use a stack of scopes with enter/exit operations. Always test deeply nested scopes with shadowed identifiers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with a working interpreter"
        }), ": For a new language, build an interpreter first. It gives you instant feedback and is much faster to implement than a full compiler."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Leverage existing tools"
        }), ": Use Lex/Flex, Yacc/Bison, or ANTLR for the front end. Focus your effort on optimization and code generation where tool support is weaker."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error recovery is a feature"
        }), ": A compiler that crashes on the first error is frustrating. Implement panic-mode recovery early ? it costs little but dramatically improves usability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan for self-hosting"
        }), ": Even if you never self-host, designing the language to be compilable in itself leads to cleaner semantics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'introduction', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// introduction - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'introduction' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following best describes the relationship between the front end and back end of a compiler?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The front end generates target code; the back end analyzes source code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The front end analyzes source code; the back end synthesizes target code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Both front end and back end perform optimization equally"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The front end is machine-dependent; the back end is language-dependent"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the N+M model, how many components are needed for 3 front ends and 4 back ends?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 7"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 12"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 9"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a phase of compilation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Lexical analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Syntax analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Memory management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Code generation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a T-diagram, what does the left corner represent?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The source language"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The target language"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The implementation language"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The intermediate representation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary advantage of JIT compilation over AOT compilation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) JIT always produces faster code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) JIT compiles only hot paths, reducing startup time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) JIT requires no runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) JIT eliminates all runtime overhead"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. A, 3. C, 4. C, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the principal phases of a compiler and describe the output of each phase."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the motivation for separating a compiler into front end and back end?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast compilers and interpreters. Under what circumstances is each approach preferable?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name three compiler construction tools and state which phase each tool supports."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What role do regular and context-free languages play in compiler design?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consider the source statement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "total = (price + tax) * quantity"
        }), ". Trace the output that each compiler phase would produce. Assume standard operator precedence and floating-point arithmetic."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A compiler has three front ends (C, C++, Java) and two back ends (x86-64, ARM64). How many compiler implementations are required under the N+M model?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify which of the following tasks are performed by the front end and which by the back end: type checking, register allocation, lexical analysis, peephole optimization, intermediate code generation, instruction selection, symbol table management."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompilerPipeline"
        }), " class to handle subtraction and division correctly. Add a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parseStmt"
        }), " method that handles assignment statements (", (0,jsx_runtime.jsx)(_components.code, {
          children: "id = expr;"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw T-diagrams for the following bootstrap scenario: (a) A Pascal-to-C compiler written in Pascal. (b) Using the output of (a) to compile a better Pascal compiler written in C."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a minimal two-phase compiler for arithmetic expressions composed of integers, addition, and multiplication. The front end should convert the expression into postfix notation. The back end should evaluate the postfix expression using a stack machine. Implement both phases in TypeScript and demonstrate correct translation and evaluation. Extend your implementation to support subtraction and division, handling the error condition of division by zero with a meaningful error message. Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompilerPipeline"
        }), " pattern from this chapter as your starting point."]
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