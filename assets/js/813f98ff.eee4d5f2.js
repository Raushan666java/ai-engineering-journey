"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[33518],{

/***/ 89037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_08_runtime_env_md_813_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-08-runtime-env-md-813.json
const site_docs_courses_compiler_design_08_runtime_env_md_813_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/08-runtime-env","title":"Chapter 8: Runtime Environment","description":"? Previous Type Checking | Next Code Generation","source":"@site/docs/courses/compiler-design/08-runtime-env.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/08-runtime-env","permalink":"/ai-engineering-journey/compiler-design/08-runtime-env","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-runtime-env","slug":"/compiler-design/08-runtime-env","title":"Chapter 8: Runtime Environment","sidebar_label":"Chapter 8: Runtime Environment","sidebar_position":8},"sidebar":"course-compiler-design","previous":{"title":"Chapter 7: Type Checking","permalink":"/ai-engineering-journey/compiler-design/07-type-checking"},"next":{"title":"Chapter 9: Code Generation","permalink":"/ai-engineering-journey/compiler-design/09-code-gen"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/08-runtime-env.md


const frontMatter = {
	id: '08-runtime-env',
	slug: '/compiler-design/08-runtime-env',
	title: 'Chapter 8: Runtime Environment',
	sidebar_label: 'Chapter 8: Runtime Environment',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Runtime Environment';

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
  "value": "Activation Records",
  "id": "activation-records",
  "level": 3
}, {
  "value": "Calling Conventions",
  "id": "calling-conventions",
  "level": 3
}, {
  "value": "Complete TypeScript Activation Record Simulator",
  "id": "complete-typescript-activation-record-simulator",
  "level": 3
}, {
  "value": "Stack Allocation",
  "id": "stack-allocation",
  "level": 3
}, {
  "value": "Heap Allocation",
  "id": "heap-allocation",
  "level": 3
}, {
  "value": "Complete TypeScript Heap Simulator",
  "id": "complete-typescript-heap-simulator",
  "level": 3
}, {
  "value": "Static versus Dynamic Scoping",
  "id": "static-versus-dynamic-scoping",
  "level": 3
}, {
  "value": "Parameter Passing",
  "id": "parameter-passing",
  "level": 3
}, {
  "value": "Variable-Length Data",
  "id": "variable-length-data",
  "level": 3
}, {
  "value": "Garbage Collection",
  "id": "garbage-collection",
  "level": 3
}, {
  "value": "Reference Counting",
  "id": "reference-counting",
  "level": 4
}, {
  "value": "Mark-Sweep",
  "id": "mark-sweep",
  "level": 4
}, {
  "value": "Copying Collection",
  "id": "copying-collection",
  "level": 4
}, {
  "value": "Generational Collection",
  "id": "generational-collection",
  "level": 4
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
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
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "chapter-8-runtime-environment",
        children: "Chapter 8: Runtime Environment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/07-type-checking",
        children: "Chapter 7: Type Checking"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/09-code-gen",
        children: "Chapter 9: Code Generation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: design activation records for procedure invocations; allocate storage on the stack and heap; distinguish static scoping from dynamic scoping; implement call-by-value, call-by-reference, and call-by-name parameter passing; manage variable-length data on the stack and heap; compare garbage collection strategies including reference counting, mark-sweep, copying, and generational collection; implement a mark-sweep collector in TypeScript; and analyze the performance trade-offs of each GC strategy."
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
        href: "../../assets/images/lessons/compiler-design/08-runtime-env/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/08-runtime-env/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/08-runtime-env/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/08-runtime-env/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/08-runtime-env/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/08-runtime-env/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activation Records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frame layout for procedure calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every function call needs memory management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calling Conventions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Register vs stack argument passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABI compatibility between compilers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack Allocation vs Frame Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prologue/epilogue code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct function call and return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static vs Dynamic Scoping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time vs runtime name resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language semantics affect variable binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter Passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value vs reference vs name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls caller-callee data flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual and automatic allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports dynamic-lifetime objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated memory reclamation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents memory leaks in managed languages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Program] --> B[Procedure Invocation]\n    B --> C[Activation Record]\n    C --> D[Stack Allocation]\n    C --> E[Calling Convention]\n    D --> F[Heap Allocation]\n    E --> G{Scoping}\n    G -->|Static| H[Compile-Time Resolution]\n    G -->|Dynamic| I[Runtime Resolution]\n    F --> J{Memory Reclamation}\n    J -->|Manual| K[free/delete]\n    J -->|Automatic| L[Garbage Collection]\n    L --> M[Mark-Sweep / Copying / Generational]\n    style A fill:#e1f5fe\n    style M fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activation-records",
      children: "Activation Records"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "activation record"
      }), " (stack frame) is the storage area allocated for each procedure invocation. It typically contains:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actual parameters"
        }), ": evaluated arguments passed from the caller."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return value"
        }), ": storage for the function result (or a pointer to it)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control link"
        }), ": pointer to the previous activation (dynamic chain)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access link"
        }), ": pointer for nonlocal variable access in nested-scope languages (static chain)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Saved registers"
        }), ": machine register values that must be restored on return."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local variables"
        }), ": storage for variables declared in the procedure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temporaries"
        }), ": compiler-generated intermediate values."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler generates code that references fields within the activation record at fixed offsets from a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "frame pointer"
      }), " (FP). The stack pointer (SP) points to the current top of the stack. The FP provides a stable reference even as SP changes during expression evaluation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical activation record layout"
      }), " (high to low addresses):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------------------+\n| Arguments (caller frame)|\n+-----------------------+\n| Return address        |  ? pushed by CALL instruction\n+-----------------------+\n| Old frame pointer     |  ? FP points here\n+-----------------------+\n| Saved registers       |\n+-----------------------+\n| Local variables       |\n+-----------------------+\n| Temporaries           |  ? SP points here\n+-----------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calling-conventions",
      children: "Calling Conventions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "calling convention"
      }), " specifies how arguments are passed, how the stack is managed, and which registers must be preserved."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "x86-64 System V ABI"
      }), " (used by Linux, macOS):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First 6 integer arguments: RDI, RSI, RDX, RCX, R8, R9"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "First 8 floating-point arguments: XMM0?XMM7"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional arguments: pushed on the stack (right to left)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return value: RAX (integer) or XMM0 (float)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Callee-saved registers: RBX, RBP, R12?R15"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller-saved registers: RAX, RCX, RDX, RSI, RDI, R8?R11"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Call sequence"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller evaluates arguments, places in registers or pushes on stack."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Caller executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CALL"
        }), " instruction ? pushes return address."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Callee pushes old FP (", (0,jsx_runtime.jsx)(_components.code, {
          children: "PUSH RBP"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Callee sets FP to current SP (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MOV RBP, RSP"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Callee decrements SP for local variables (", (0,jsx_runtime.jsx)(_components.code, {
          children: "SUB RSP, N"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Callee saves callee-saved registers it will modify."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Body executes"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Callee restores saved registers."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Callee restores SP from FP (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MOV RSP, RBP"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Callee pops old FP (", (0,jsx_runtime.jsx)(_components.code, {
          children: "POP RBP"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Callee executes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RET"
        }), " ? pops return address and jumps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-activation-record-simulator",
      children: "Complete TypeScript Activation Record Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Activation record and runtime simulation\n\ninterface ActivationRecord {\n    name: string;\n    returnAddress: number;\n    controlLink: ActivationRecord | null;\n    accessLink: ActivationRecord | null;\n    locals: Map<string, any>;\n    arguments: any[];\n    returnValue: any;\n    depth: number;\n}\n\nclass RuntimeSimulator {\n    private stack: ActivationRecord[] = [];\n    private accessChain: ActivationRecord[] = []; // lexical nesting chain\n    private pc = 0; // program counter for address tracking\n    private output: string[] = [];\n\n    // Push a new activation\n    call(\n        name: string,\n        args: any[],\n        lexicalDepth: number,\n        body: (rt: RuntimeSimulator) => void\n    ): any {\n        const frame: ActivationRecord = {\n            name,\n            returnAddress: this.pc,\n            controlLink: this.stack.length > 0 ? this.stack[this.stack.length - 1] : null,\n            accessLink: null,\n            locals: new Map(),\n            arguments: args,\n            returnValue: undefined,\n            depth: lexicalDepth,\n        };\n\n        // Set access link for nested scope resolution\n        // Access link points to the closest enclosing activation of the lexically enclosing scope\n        if (lexicalDepth > 0) {\n            // Walk the stack to find the enclosing activation at depth-1\n            for (let i = this.stack.length - 1; i >= 0; i--) {\n                if (this.stack[i].depth === lexicalDepth - 1) {\n                    frame.accessLink = this.stack[i];\n                    break;\n                }\n            }\n        }\n\n        this.stack.push(frame);\n        this.output.push(`CALL ${name}(args=[${args}]) depth=${lexicalDepth}`);\n\n        // Execute function body\n        body(this);\n\n        const result = this.stack[this.stack.length - 1].returnValue;\n        this.output.push(`RETURN ${name} ? ${result}`);\n        this.stack.pop();\n        return result;\n    }\n\n    // Declare local variable\n    declareLocal(name: string, value: any): void {\n        const frame = this.stack[this.stack.length - 1];\n        if (frame) {\n            frame.locals.set(name, value);\n            this.output.push(`  LOCAL ${name} = ${value} in ${frame.name}`);\n        }\n    }\n\n    // Set local variable\n    setLocal(name: string, value: any): void {\n        const frame = this.stack[this.stack.length - 1];\n        if (frame && frame.locals.has(name)) {\n            frame.locals.set(name, value);\n        }\n    }\n\n    // Get local variable\n    getLocal(name: string): any {\n        const frame = this.stack[this.stack.length - 1];\n        return frame?.locals.get(name);\n    }\n\n    // Resolve name using static scoping (access links)\n    resolveStatic(name: string): { frame: number; value: any } | null {\n        // Search current frame first\n        for (let i = this.stack.length - 1; i >= 0; i--) {\n            const frame = this.stack[i];\n            if (frame.locals.has(name)) {\n                return { frame: i, value: frame.locals.get(name) };\n            }\n            // Follow access link chain (static scoping)\n            // In static scoping, we follow the lexical structure, not the call stack\n            let accessFrame = frame.accessLink;\n            while (accessFrame) {\n                if (accessFrame.locals.has(name)) {\n                    return { frame: this.stack.indexOf(accessFrame), value: accessFrame.locals.get(name) };\n                }\n                accessFrame = accessFrame.accessLink;\n            }\n        }\n        return null;\n    }\n\n    // Resolve name using dynamic scoping (call stack)\n    resolveDynamic(name: string): { frame: number; value: any } | null {\n        // Search call stack from top (most recent) to bottom\n        for (let i = this.stack.length - 1; i >= 0; i--) {\n            const frame = this.stack[i];\n            if (frame.locals.has(name)) {\n                return { frame: i, value: frame.locals.get(name) };\n            }\n        }\n        return null;\n    }\n\n    setReturnValue(val: any): void {\n        const frame = this.stack[this.stack.length - 1];\n        if (frame) {\n            frame.returnValue = val;\n        }\n    }\n\n    getOutput(): string[] {\n        return this.output;\n    }\n\n    printStack(): void {\n        console.log(\"\\nCurrent stack (top to bottom):\");\n        for (let i = this.stack.length - 1; i >= 0; i--) {\n            const f = this.stack[i];\n            const locals = [...f.locals.entries()]\n                .map(([k, v]) => `${k}=${v}`)\n                .join(\", \");\n            console.log(\n                `  [${i}] ${f.name}` +\n                ` depth=${f.depth}` +\n                ` locals={${locals}}` +\n                ` args=[${f.arguments}]` +\n                ` ret=${f.returnValue}`\n            );\n        }\n    }\n}\n\n// === Demo: Static scoping vs dynamic scoping ===\nconsole.log(\"=== Scoping Demo ===\");\nconst rt = new RuntimeSimulator();\n\n// Program structure with lexical nesting:\n// program (depth 0)\n//   x = 1\n//   procedure outer (depth 1)\n//     x = 2\n//     procedure inner (depth 2)\n//       print(x)\n//     inner calls print, which resolves x\n//   outer()\n\nrt.call(\"program\", [], 0, (rt) => {\n    rt.declareLocal(\"x\", 1);\n    rt.output.push(`[program] x = ${rt.getLocal(\"x\")}`);\n\n    rt.call(\"outer\", [], 1, (rt) => {\n        rt.declareLocal(\"x\", 2);\n        rt.output.push(`[outer] local x = ${rt.getLocal(\"x\")}`);\n\n        rt.call(\"inner\", [], 2, (rt) => {\n            // Static scoping: resolves to outer's x (depth 1), because inner is lexically inside outer\n            const staticRes = rt.resolveStatic(\"x\");\n            rt.output.push(`[inner] static scoping: x = ${staticRes?.value} (from frame ${staticRes?.frame})`);\n\n            // Dynamic scoping: resolves to outer's x (most recent on call stack)\n            const dynamicRes = rt.resolveDynamic(\"x\");\n            rt.output.push(`[inner] dynamic scoping: x = ${dynamicRes?.value} (from frame ${dynamicRes?.frame})`);\n\n            // Now call q that defines its own x\n            rt.call(\"q\", [], 1, (rt) => {\n                rt.declareLocal(\"x\", 3);\n                // Static: still resolves to outer's x (lexical depth 1)\n                const staticRes2 = rt.resolveStatic(\"x\");\n                rt.output.push(`[q] static scoping: x = ${staticRes2?.value} (from frame ${staticRes2?.frame})`);\n                // Dynamic: resolves to q's own x (top of stack)\n                const dynamicRes2 = rt.resolveDynamic(\"x\");\n                rt.output.push(`[q] dynamic scoping: x = ${dynamicRes2?.value} (from frame ${dynamicRes2?.frame})`);\n            });\n        });\n    });\n});\n\nconsole.log(\"\\nScoping trace:\");\nrt.getOutput().forEach(line => console.log(`  ${line}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stack-allocation",
      children: "Stack Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard function call sequence on x86-64:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-nasm",
        children: "; Caller side:\npush arg2          ; push arguments right-to-left\npush arg1\ncall function      ; push return address, jump to function\nadd rsp, 16        ; caller pops arguments after return\n\n; Callee side (prologue):\nfunction:\npush rbp           ; save old frame pointer\nmov rbp, rsp       ; set new frame pointer\nsub rsp, 48        ; allocate 48 bytes for locals/temps\npush rbx           ; save callee-saved registers (if used)\npush r12\n\n; ... function body ...\n\n; Callee side (epilogue):\npop r12            ; restore callee-saved registers\npop rbx\nmov rsp, rbp       ; restore stack pointer\npop rbp            ; restore frame pointer\nret                ; pop return address and jump\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This last-in-first-out discipline maps naturally to procedure call semantics. Each call pushes a new frame; each return pops it."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heap-allocation",
      children: "Heap Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Objects with lifetimes extending beyond the creating procedure require ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "heap allocation"
      }), ". The heap is a region of memory for arbitrary-size blocks allocated in any order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heap management strategies"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Free list"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Linked list of free blocks with explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, exact deallocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External fragmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Buddy system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split heap into power-of-two blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast coalescing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal fragmentation (~50% worst case)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slab allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache frequently-sized objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High throughput, low fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arena/Region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate in bump-pointer regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast allocation, no per-object free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed lifetime scope"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-heap-simulator",
      children: "Complete TypeScript Heap Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface HeapBlock {\n    id: number;\n    size: number;\n    free: boolean;\n    next: HeapBlock | null;\n    data: any;\n    refCount?: number; // for reference counting GC\n    markBit?: boolean; // for mark-sweep GC\n}\n\nclass Heap {\n    private blocks: HeapBlock[] = [];\n    private nextId = 0;\n    private totalSize = 0;\n    private freeList: HeapBlock | null = null;\n\n    constructor(private capacity: number) {\n        // Initialize as one big free block\n        const block: HeapBlock = {\n            id: this.nextId++,\n            size: capacity,\n            free: true,\n            next: null,\n            data: null,\n        };\n        this.blocks.push(block);\n        this.freeList = block;\n    }\n\n    // Allocate memory\n    malloc(size: number, data: any = null): number | null {\n        // First-fit search through free list\n        let prev: HeapBlock | null = null;\n        let curr = this.freeList;\n\n        while (curr) {\n            if (curr.free && curr.size >= size) {\n                // Splitting: if remaining space is large enough for a new block\n                const remaining = curr.size - size;\n                if (remaining > 16) {\n                    // Split into allocated block + free block\n                    curr.size = size;\n                    const newBlock: HeapBlock = {\n                        id: this.nextId++,\n                        size: remaining,\n                        free: true,\n                        next: curr.next,\n                        data: null,\n                    };\n                    curr.next = newBlock;\n                    this.blocks.push(newBlock);\n                }\n\n                curr.free = false;\n                curr.data = data;\n                this.totalSize += size;\n                return curr.id;\n            }\n            prev = curr;\n            curr = curr.next;\n        }\n\n        return null; // out of memory\n    }\n\n    // Free memory\n    free(id: number): void {\n        const block = this.blocks.find(b => b.id === id);\n        if (!block || block.free) return;\n\n        block.free = true;\n        block.data = null;\n        this.totalSize -= block.size;\n\n        // Coalesce adjacent free blocks\n        this.coalesce();\n    }\n\n    private coalesce(): void {\n        let curr = this.freeList;\n        while (curr && curr.next) {\n            if (curr.free && curr.next.free) {\n                curr.size += curr.next.size;\n                curr.next = curr.next.next;\n            } else {\n                curr = curr.next;\n            }\n        }\n    }\n\n    // Read block data\n    read(id: number): any {\n        const block = this.blocks.find(b => b.id === id);\n        return block?.data;\n    }\n\n    // Write block data\n    write(id: number, data: any): void {\n        const block = this.blocks.find(b => b.id === id);\n        if (block) block.data = data;\n    }\n\n    // Print heap layout\n    printHeap(): void {\n        console.log(\"\\nHeap layout:\");\n        let curr = this.freeList;\n        let blockNum = 0;\n        while (curr) {\n            const status = curr.free ? \"FREE\" : \"ALLOC\";\n            const dataStr = curr.data !== null ? ` data=${JSON.stringify(curr.data)}` : \"\";\n            console.log(\n                `  Block #${curr.id}: size=${curr.size} ${status}` +\n                dataStr\n            );\n            curr = curr.next;\n            blockNum++;\n            if (blockNum > 20) { console.log(\"  ... (truncated)\"); break; }\n        }\n        console.log(`  Total allocated: ${this.totalSize}/${this.capacity}`);\n    }\n\n    getStats(): { allocated: number; free: number; fragmentation: number } {\n        let freeSize = 0;\n        let freeBlocks = 0;\n        let maxFree = 0;\n        let curr = this.freeList;\n        while (curr) {\n            if (curr.free) {\n                freeSize += curr.size;\n                freeBlocks++;\n                if (curr.size > maxFree) maxFree = curr.size;\n            }\n            curr = curr.next;\n        }\n        return {\n            allocated: this.totalSize,\n            free: freeSize,\n            fragmentation: freeBlocks > 1 ? 1 - (maxFree / freeSize) : 0,\n        };\n    }\n}\n\n// === Heap Demo ===\nconsole.log(\"\\n=== Heap Management Demo ===\");\nconst heap = new Heap(1024);\nheap.printHeap();\n\nconst b1 = heap.malloc(64, \"hello\");\nconsole.log(`\\nAllocated block ${b1} (64 bytes)`);\n\nconst b2 = heap.malloc(128, \"world\");\nconsole.log(`Allocated block ${b2} (128 bytes)`);\n\nconst b3 = heap.malloc(256, { a: 1, b: 2 });\nconsole.log(`Allocated block ${b3} (256 bytes)`);\n\nheap.printHeap();\n\nconsole.log(`\\nFree block ${b2}...`);\nheap.free(b2!);\nheap.printHeap();\n\nconsole.log(`\\nAllocate 32 bytes...`);\nconst b4 = heap.malloc(32, \"new data\");\nheap.printHeap();\n\nconst stats = heap.getStats();\nconsole.log(`\\nHeap stats: allocated=${stats.allocated} free=${stats.free} frag=${stats.fragmentation.toFixed(3)}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-versus-dynamic-scoping",
      children: "Static versus Dynamic Scoping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static scoping"
      }), " (lexical scoping) resolves nonlocal variable references based on the program's textual structure. The binding is determined at compile time. In nested-procedure languages (Pascal, Ada), static scoping uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "access links"
      }), ": each activation record points to the enclosing lexical activation. A variable at nesting depth ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), " accessed from depth ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " requires following ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n-d"
      }), " access links."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic scoping"
      }), " resolves references based on the runtime call chain. A variable resolves to the most recent activation containing a variable of that name. Dynamic scoping appears in early Lisp and some scripting languages."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Scoping"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Scoping"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access links / display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call stack search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predictability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (textual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (call-dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access link ? display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear stack search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pascal, C, Java, ML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early Lisp, Emacs Lisp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parameter-passing",
      children: "Parameter Passing"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect on Caller"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Call by value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy argument value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C, Java primitives, C++ (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller's variable unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Call by reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass address of argument"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C++ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), ", Pascal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "var"
            }), ", C# ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ref"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller can be modified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Call by value-result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy in, copy back on return"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ada ", (0,jsx_runtime.jsx)(_components.code, {
              children: "in out"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modified only on return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Call by name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-evaluate argument on each use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algol 60, lazy evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects repeat per reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Call by need"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate once, cache result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Haskell, lazy functional languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effects once, pure semantics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function demoParameterPassing(): void {\n    // Call by value simulation\n    function byValue(x: number): void {\n        x = 100;\n    }\n    let a = 5;\n    byValue(a);\n    console.log(`Call by value: a = ${a}`); // 5 (unchanged)\n\n    // Call by reference simulation (TypeScript object)\n    function byReference(obj: { value: number }): void {\n        obj.value = 100;\n    }\n    const b = { value: 5 };\n    byReference(b);\n    console.log(`Call by reference: b.value = ${b.value}`); // 100 (modified)\n\n    // Call by name simulation (using thunks)\n    function byName(thunk: () => number): number {\n        const first = thunk();  // evaluated\n        const second = thunk(); // re-evaluated\n        return first + second;\n    }\n    let sideEffectCount = 0;\n    const result = byName(() => { sideEffectCount++; return 10; });\n    console.log(`Call by name: result=${result}, sideEffects=${sideEffectCount}`); // 20, 2\n}\ndemoParameterPassing();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variable-length-data",
      children: "Variable-Length Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three approaches handle data whose size is not known at compile time:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Descriptor on stack, data on heap"
        }), ": A fixed-size descriptor (pointer + length) sits on the stack; the actual data is heap-allocated. Used by C++ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::string"
        }), ", Java ", (0,jsx_runtime.jsx)(_components.code, {
          children: "String"
        }), ", Go slices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variable-length arrays (VLAs)"
        }), ": Allocated on the stack at runtime by adjusting SP dynamically. Supported by C99 (optional in C11). Risk: stack overflow for large VLAs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic data structures"
        }), ": Maintain capacity and size; grow on the heap when capacity is exceeded. Used by Java ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ArrayList"
        }), ", C++ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::vector"
        }), ", Rust ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Vec"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class DynamicArray {\n    private data: number[] = [];\n    private capacity: number;\n    private length = 0;\n\n    constructor(initialCapacity: number) {\n        this.capacity = initialCapacity;\n        this.data = new Array(initialCapacity).fill(0);\n    }\n\n    push(value: number): void {\n        if (this.length >= this.capacity) {\n            // Grow: double capacity\n            this.capacity *= 2;\n            const newData = new Array(this.capacity).fill(0);\n            for (let i = 0; i < this.length; i++) {\n                newData[i] = this.data[i];\n            }\n            this.data = newData;\n            console.log(`  Grow to capacity ${this.capacity}`);\n        }\n        this.data[this.length++] = value;\n    }\n\n    get(index: number): number { return this.data[index]; }\n    getLength(): number { return this.length; }\n    getCapacity(): number { return this.capacity; }\n}\n\nconsole.log(\"\\n=== Dynamic Array ===\");\nconst arr = new DynamicArray(4);\nfor (let i = 0; i < 10; i++) {\n    arr.push(i * 10);\n}\nconsole.log(`Final: length=${arr.getLength()} capacity=${arr.getCapacity()}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "garbage-collection",
      children: "Garbage Collection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Garbage collection reclaims heap memory that is no longer reachable from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "root set"
      }), " (globals, stack variables, registers)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reachability"
      }), ": An object is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "live"
      }), " if it is reachable from the root set through a chain of references. All other objects are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "garbage"
      }), " and their memory may be reclaimed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reference-counting",
      children: "Reference Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each object maintains a reference count. When a reference is created, the count increments; when destroyed, it decrements. When the count reaches zero, the object is freed (and may recursively decrement references in the freed object)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RefCountedObject {\n    refCount = 1; // start with one reference\n    children: RefCountedObject[] = [];\n\n    constructor(public name: string) {}\n\n    addRef(): void { this.refCount++; }\n    release(): void {\n        this.refCount--;\n        if (this.refCount === 0) {\n            console.log(`  FREE ${this.name} (refCount=0)`);\n            for (const child of this.children) {\n                child.release();\n            }\n            this.children = [];\n        }\n    }\n}\n\nconsole.log(\"\\n=== Reference Counting Demo ===\");\nconst root = new RefCountedObject(\"root\");\nconst child1 = new RefCountedObject(\"child1\");\nconst child2 = new RefCountedObject(\"child2\");\nroot.children.push(child1);\nroot.children.push(child2);\nchild1.addRef();  // child2 also references child1\nchild2.children.push(child1); // ? creates a cycle! child1 ? child2 ? child1\n\nconsole.log(\"Release root (should free root, but NOT child1/child2 due to cycle):\");\nroot.release();\nconsole.log(`child1 refCount = ${child1.refCount} (leaked!)`);\nconsole.log(`child2 refCount = ${child2.refCount} (leaked!)`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem"
      }), ": Cyclic data structures. If A references B and B references A, neither count reaches zero."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mark-sweep",
      children: "Mark-Sweep"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mark phase"
      }), " traces all reachable objects from the root set, setting a mark bit. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sweep phase"
      }), " scans the entire heap, reclaiming unmarked objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class MarkSweepCollector {\n    private objects: Map<number, {\n        id: number;\n        size: number;\n        children: number[];\n        marked: boolean;\n        data: any;\n    }> = new Map();\n\n    private nextId = 0;\n\n    alloc(size: number, data: any): number {\n        const id = this.nextId++;\n        this.objects.set(id, { id, size, children: [], marked: false, data });\n        return id;\n    }\n\n    addEdge(from: number, to: number): void {\n        const obj = this.objects.get(from);\n        if (obj && !obj.children.includes(to)) {\n            obj.children.push(to);\n        }\n    }\n\n    // Mark phase: DFS from roots\n    mark(roots: number[]): void {\n        // Unmark all\n        for (const [, obj] of this.objects) {\n            obj.marked = false;\n        }\n\n        // Mark from roots\n        const stack = [...roots];\n        while (stack.length > 0) {\n            const id = stack.pop()!;\n            const obj = this.objects.get(id);\n            if (!obj || obj.marked) continue;\n            obj.marked = true;\n            for (const child of obj.children) {\n                stack.push(child);\n            }\n        }\n    }\n\n    // Sweep phase: reclaim unmarked objects\n    sweep(): number {\n        let reclaimed = 0;\n        for (const [id, obj] of this.objects) {\n            if (!obj.marked) {\n                this.objects.delete(id);\n                reclaimed += obj.size;\n            }\n        }\n        return reclaimed;\n    }\n\n    collect(roots: number[]): number {\n        const before = this.objects.size;\n        this.mark(roots);\n        const reclaimed = this.sweep();\n        console.log(\n            `  GC: ${before} objects ? ${this.objects.size} objects, ` +\n            `reclaimed ${reclaimed} bytes`\n        );\n        return reclaimed;\n    }\n\n    printObjects(): void {\n        for (const [, obj] of this.objects) {\n            const status = obj.marked ? \"LIVE\" : \"DEAD\";\n            console.log(\n                `  [${status}] obj${obj.id} size=${obj.size} children=[${obj.children}]`\n            );\n        }\n    }\n}\n\n// === Mark-Sweep Demo ===\nconsole.log(\"\\n=== Mark-Sweep GC Demo ===\");\nconst gc = new MarkSweepCollector();\n\nconst r1 = gc.alloc(32, \"root1\");\nconst r2 = gc.alloc(32, \"root2\");\nconst a1 = gc.alloc(64, \"alive1\");\nconst a2 = gc.alloc(64, \"alive2\");\nconst dead1 = gc.alloc(128, \"dead1\");\nconst dead2 = gc.alloc(128, \"dead2\");\n\n// Build graph: r1 ? a1 ? a2, r2 ? a1\ngc.addEdge(r1, a1);\ngc.addEdge(a1, a2);\ngc.addEdge(r2, a1);\n\nconsole.log(\"Before GC:\");\ngc.printObjects();\n\nconsole.log(\"\\nAfter GC:\");\ngc.collect([r1, r2]);\ngc.printObjects();\n\n// Try to access dead objects\nconst deadRef = (gc as any).objects.get(dead1);\nconsole.log(`dead1 exists after GC: ${deadRef !== undefined}`); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "copying-collection",
      children: "Copying Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divides the heap into two semi-spaces (from-space and to-space). Objects are allocated in from-space. When from-space is full, live objects are copied to to-space, then the roles swap."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BEFORE (allocating in from-space):\n+-------------------+-------------------+\n|    from-space     |    to-space       |\n|  [obj1][obj2]...  |  [empty]          |\n+-------------------+-------------------+\n\nAFTER GC (live objects copied to to-space):\n+-------------------+-------------------+\n|    from-space     |    to-space       |\n|  [empty]          |  [obj1][obj2]...  |\n+-------------------+-------------------+\n\nAfter GC, to-space becomes the new from-space.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CopyingCollector {\n    private semiSpaceSize: number;\n    private fromSpace: (any | null)[] = [];\n    private toSpace: (any | null)[] = [];\n    private allocPtr = 0;\n    private forwarded = new Map<number, number>();\n\n    constructor(semiSpaceSize: number) {\n        this.semiSpaceSize = semiSpaceSize;\n        this.fromSpace = new Array(semiSpaceSize).fill(null);\n        this.toSpace = new Array(semiSpaceSize).fill(null);\n    }\n\n    alloc(size: number, data: any): number | null {\n        if (this.allocPtr + size > this.semiSpaceSize) {\n            console.log(\"  From-space full, triggering GC...\");\n            this.collect();\n        }\n        if (this.allocPtr + size > this.semiSpaceSize) {\n            return null; // out of memory even after GC\n        }\n        const addr = this.allocPtr;\n        this.fromSpace[addr] = { data, size, children: [] };\n        // Mark remaining slots as occupied\n        for (let i = 1; i < size; i++) {\n            this.fromSpace[addr + i] = \"occupied\";\n        }\n        this.allocPtr += size;\n        return addr;\n    }\n\n    addEdge(from: number, to: number): void {\n        if (this.fromSpace[from] && this.fromSpace[from] !== \"occupied\") {\n            const obj = this.fromSpace[from] as any;\n            if (!obj.children.includes(to)) {\n                obj.children.push(to);\n            }\n        }\n    }\n\n    copy(addr: number): number | null {\n        if (this.forwarded.has(addr)) {\n            return this.forwarded.get(addr)!;\n        }\n\n        const obj = this.fromSpace[addr];\n        if (!obj || obj === \"occupied\") return null;\n\n        // Find space in to-space\n        const newAddr = this.toSpace.length;\n        this.toSpace.push(obj);\n        // Extend to-space\n        for (let i = 1; i < obj.size; i++) {\n            this.toSpace.push(\"occupied\" as any);\n        }\n\n        this.forwarded.set(addr, newAddr);\n\n        // Copy children\n        obj.children = obj.children.map((childAddr: number) => this.copy(childAddr));\n\n        return newAddr;\n    }\n\n    collect(roots: number[]): void {\n        this.forwarded.clear();\n        this.toSpace = [];\n\n        for (const root of roots) {\n            this.copy(root);\n        }\n\n        this.fromSpace = this.toSpace;\n        this.toSpace = new Array(this.semiSpaceSize).fill(null);\n        this.allocPtr = this.fromSpace.length;\n    }\n\n    printState(): void {\n        const live = this.fromSpace.filter(o => o !== null && o !== \"occupied\").length;\n        const used = this.fromSpace.filter(o => o !== null).length;\n        console.log(\n            `  From-space: ${live} live objects, ` +\n            `${used}/${this.semiSpaceSize} slots used`\n        );\n    }\n}\n\nconsole.log(\"\\n=== Copying Collector Demo ===\");\nconst cc = new CopyingCollector(100);\nconst o1 = cc.alloc(10, \"object1\");\nconst o2 = cc.alloc(10, \"object2\");\nconst o3 = cc.alloc(10, \"object3\");\nif (o1 !== null && o2 !== null) cc.addEdge(o1, o2);\ncc.printState();\n\nconsole.log(\"\\nAfter collection with root [o1, o3]:\");\ncc.collect([o1!, o3!]);\ncc.printState();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "generational-collection",
      children: "Generational Collection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Exploits the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "weak generational hypothesis"
      }), ": most objects die young. The nursery (young generation) is collected frequently with a copying collector. Objects surviving multiple nursery collections are promoted to the older generation, collected less often (typically with mark-sweep or mark-compact)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class GenerationalCollector {\n    private nursery: (any | null)[] = [];\n    private tenured: (any | null)[] = [];\n    private nurseryPtr = 0;\n    private generations = new Map<number, number>(); // object id ? generation\n    private nurserySize: number;\n\n    constructor(nurserySize: number, private promotionThreshold: number) {\n        this.nurserySize = nurserySize;\n        this.nursery = new Array(nurserySize).fill(null);\n    }\n\n    alloc(size: number, data: any): number {\n        const id = this.generations.size;\n\n        if (this.nurseryPtr + size > this.nurserySize) {\n            this.minorGC();\n        }\n        if (this.nurseryPtr + size > this.nurserySize) {\n            // Try full GC\n            this.majorGC();\n        }\n        if (this.nurseryPtr + size > this.nurserySize) {\n            throw new Error(\"Out of memory\");\n        }\n\n        this.nursery[this.nurseryPtr] = { data, size, children: [], id };\n        this.generations.set(id, 0); // generation 0 = nursery\n        const addr = this.nurseryPtr;\n        this.nurseryPtr += size;\n        return id;\n    }\n\n    addEdge(from: number, to: number): void {\n        // Find object in nursery or tenured\n        const obj = this.findObj(from);\n        if (obj && !obj.children.includes(to)) {\n            obj.children.push(to);\n        }\n    }\n\n    private findObj(id: number): any {\n        for (const o of this.nursery) {\n            if (o && o !== \"occupied\" && o.id === id) return o;\n        }\n        for (const o of this.tenured) {\n            if (o && o !== \"occupied\" && o.id === id) return o;\n        }\n        return null;\n    }\n\n    minorGC(): void {\n        let promoted = 0;\n        const survivors: any[] = [];\n        const newNursery: (any | null)[] = [];\n\n        for (const obj of this.nursery) {\n            if (obj && obj !== \"occupied\") {\n                const gen = this.generations.get(obj.id) ?? 0;\n                if (gen >= this.promotionThreshold) {\n                    // Promote to tenured\n                    this.tenured.push(obj);\n                    promoted++;\n                } else {\n                    survivors.push(obj);\n                    this.generations.set(obj.id, gen + 1);\n                }\n            }\n        }\n\n        this.nursery = new Array(this.nurserySize).fill(null);\n        let ptr = 0;\n        for (const obj of survivors) {\n            obj.size = 1; // simplified\n            if (ptr < this.nurserySize) {\n                this.nursery[ptr] = obj;\n                ptr++;\n            }\n        }\n        this.nurseryPtr = ptr;\n\n        console.log(\n            `  Minor GC: ${survivors.length + promoted} survivors, ` +\n            `${promoted} promoted to tenured`\n        );\n    }\n\n    majorGC(): void {\n        console.log(\"  Major GC (full collection)...\");\n        // Simplified: just clear nursery, keep tenured\n        this.nursery = new Array(this.nurserySize).fill(null);\n        this.nurseryPtr = 0;\n    }\n\n    printState(): void {\n        const nurseryLive = this.nursery.filter(o => o !== null && o !== \"occupied\").length;\n        const tenuredLive = this.tenured.filter(o => o !== null && o !== \"occupied\").length;\n        console.log(\n            `  Nursery: ${nurseryLive} live, Tenured: ${tenuredLive} live`\n        );\n    }\n}\n\nconsole.log(\"\\n=== Generational Collector Demo ===\");\nconst genCollector = new GenerationalCollector(5, 3); // promote after 3 survivals\nconst ids: number[] = [];\n\nfor (let i = 0; i < 5; i++) {\n    ids.push(genCollector.alloc(1, `obj${i}`));\n    genCollector.printState();\n\n    if (i % 2 === 0 && ids.length > 1) {\n        genCollector.addEdge(ids[0], ids[i]);\n    }\n}\ngenCollector.printState();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "GC Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handles Cycles"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compacts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pause Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Overhead"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference Counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (per-object count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mark-Sweep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap-wide scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (one bit per object)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live-data scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2? (semi-space)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (nursery)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mark-Compact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two passes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime semantics for new languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory model defines language capability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C/C++ manual memory management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding heap vs stack prevents bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript V8 engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC design directly affects web app performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory profilers and leak detectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep knowledge yields better tooling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom allocators for game engines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable latency requires GC avoidance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Runtime organization manages program storage during execution. Activation records on the stack efficiently handle procedure calls. The heap accommodates dynamic data with longer lifetimes. Static scoping provides compile-time resolution of nonlocal references, while dynamic scoping uses the call chain. Parameter-passing mechanisms control caller-callee data flow. Garbage collection automates heap management; reference counting, mark-sweep, copying, and generational collection offer different trade-offs in throughput, pause time, and memory overhead. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RuntimeSimulator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Heap"
      }), ", and GC implementations demonstrate these concepts with working code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack is for procedure-lifetime data"
        }), ": Use stack allocation for values whose lifetime matches function scope. It is faster than heap and has zero fragmentation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap is for dynamic-lifetime data"
        }), ": Objects whose lifetime crosses procedure boundaries must live on the heap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frame pointer elimination is a trade-off"
        }), ": It saves register pressure but makes debugging harder. Use it only in optimized release builds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference counting is simple but leaky"
        }), ": It handles cycles poorly. Most production collectors use tracing (mark-sweep or generational) for correctness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generational collection wins in practice"
        }), ": The weak generational hypothesis holds for virtually all applications. Collect the nursery frequently and the tenured space rarely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// runtime env\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'runtime env', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// runtime env - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'runtime env' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary purpose of a frame pointer?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To point to the current top of the stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To provide a stable reference for accessing activation record fields while SP changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To store the return address of a function call"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To count the number of active frames"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which garbage collection strategy cannot reclaim cyclic data structures?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Mark-Sweep"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Copying collection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reference counting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Generational collection"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Call by name corresponds to which evaluation strategy in functional languages?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Strict evaluation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Eager evaluation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Lazy evaluation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Call by need"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In static scoping, how are nonlocal variable references resolved?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) By searching the call stack at runtime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) By following access links based on lexical nesting structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) By looking up the variable name in a global table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) By using the most recently defined value"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The weak generational hypothesis states that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All objects live forever"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Most objects die young"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Generations are irrelevant"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Older objects are collected first"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. C, 3. C, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List the typical fields of an activation record and the purpose of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish static scoping from dynamic scoping. Provide a code example that behaves differently under each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain call by value versus call by reference. When is each preferred?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare mark-sweep and copying garbage collection in throughput, fragmentation, and pause time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the weak generational hypothesis? How does generational collection exploit it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the problem of external fragmentation in heap allocation. How does a compacting collector solve it?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For nested Pascal-like procedures f and g with g calling f, draw the activation stack with access links. Show how f resolves a nonlocal variable declared in the outer scope."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulate reference counting on a circular list. Show why the cycle is not reclaimed and describe how a cycle-detection pass could help."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given 128 MB heap with 40 MB live data, compare collection costs: mark-sweep (mark 40 MB, sweep 128 MB); copying (two 64 MB semi-spaces, copy 40 MB); generational (8 MB nursery, 120 MB tenured, trace nursery: 8 MB ? 30% live = 2.4 MB). Which does the least work per cycle? Which has the lowest memory overhead?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write short functions in your language of choice demonstrating call-by-value and call-by-reference semantics."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Heap"
        }), " class, simulate allocation and deallocation of 5 blocks of varying sizes (16, 32, 64, 128, 256). Free every other block, then allocate a 48-byte block. Show the heap layout and measure fragmentation before and after."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a mark-sweep collector in TypeScript based on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MarkSweepCollector"
        }), " class from this chapter. Manage a simulated 64 KB heap with a free list, allocate blocks via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ", mark via stack-based DFS from the root set, and sweep by rebuilding the free list. Demonstrate by allocating a tree of objects, removing references to some subtrees, invoking the collector, and verifying reclamation by comparing the free list before and after collection. Print all free blocks with their addresses and sizes. Extend the implementation with a generational collector that partitions the heap into a nursery and tenured space, with objects promoted after 3 surviving minor collections."]
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