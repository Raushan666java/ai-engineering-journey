"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29486],{

/***/ 40368
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_01_python_basics_md_ee6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-01-python-basics-md-ee6.json
const site_docs_courses_ai_engineering_placement_01_python_programming_01_python_basics_md_ee6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/01-python-basics","title":"Python Basics — Variables, Data Types, Operators","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/01-python-basics.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/01-python-basics","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/01-python-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"01-python-basics","slug":"/ai-engineering-placement/01-python-programming/01-python-basics","title":"Python Basics — Variables, Data Types, Operators","sidebar_label":"Python Basics — Variables, Data Types, Operators","sidebar_position":10},"sidebar":"placementSidebar","previous":{"title":"01 — Python for AI","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming"},"next":{"title":"Control Flow — Conditionals, Loops, and Iteration","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/02-control-flow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/01-python-basics.md


const frontMatter = {
	id: '01-python-basics',
	slug: '/ai-engineering-placement/01-python-programming/01-python-basics',
	title: 'Python Basics — Variables, Data Types, Operators',
	sidebar_label: 'Python Basics — Variables, Data Types, Operators',
	sidebar_position: 10
};
const contentTitle = 'Python Basics — Variables, Data Types, Operators';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "1.1 Setting Up Python",
  "id": "11-setting-up-python",
  "level": 2
}, {
  "value": "1.2 Variables and Dynamic Typing",
  "id": "12-variables-and-dynamic-typing",
  "level": 2
}, {
  "value": "1.3 Numeric Types",
  "id": "13-numeric-types",
  "level": 2
}, {
  "value": "1.4 Strings",
  "id": "14-strings",
  "level": 2
}, {
  "value": "1.5 Booleans and None",
  "id": "15-booleans-and-none",
  "level": 2
}, {
  "value": "1.6 Type Conversion",
  "id": "16-type-conversion",
  "level": 2
}, {
  "value": "1.7 Operators",
  "id": "17-operators",
  "level": 2
}, {
  "value": "1.8 PEP 8 and Code Style",
  "id": "18-pep-8-and-code-style",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "s[0] = &quot;H&quot;  # TypeError",
  "id": "s0--h---typeerror",
  "level": 2
}, {
  "value": "Mutable — list",
  "id": "mutable--list",
  "level": 2
}, {
  "value": "or — stops at first True-like value",
  "id": "or--stops-at-first-true-like-value",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Coding Standards",
  "id": "coding-standards",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Study Plan",
  "id": "study-plan",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Fine-Tuning Notes",
  "id": "fine-tuning-notes",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    class: "class",
    code: "code",
    details: "details",
    div: "div",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "python-basics--variables-data-types-operators",
        children: "Python Basics — Variables, Data Types, Operators"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up a Python development environment and execute code via REPL and scripts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declare variables and understand Python's dynamic typing and reference semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use all primitive data types: int, float, str, bool, bytes, None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply arithmetic, comparison, logical, and assignment operators correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand type conversion, type checking, and common type errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write clean Python following PEP 8 style guidelines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding python basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how python basics works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setting Up Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install, REPL, script mode, IDEs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables and Dynamic Typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment, type inference, naming conventions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, float, complex, arithmetic operators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "str, indexing, slicing, methods, f-strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Booleans and None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True/False, NoneType, truthiness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "implicit vs explicit, common pitfalls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "arithmetic, comparison, logical, assignment, identity, membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEP 8 and Code Style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naming, indentation, imports, line length"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Install Python] --> B[REPL Basics]\n    B --> C[Variables & Types]\n    C --> D[Numbers & Strings]\n    D --> E[Booleans & None]\n    E --> F[Operators]\n    F --> G[Type Conversion]\n    G --> H[PEP 8 Style]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-setting-up-python",
      children: "1.1 Setting Up Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is an interpreted, dynamically-typed, high-level programming language. It emphasizes readability and productivity, making it the dominant language for AI/ML engineering."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation"
      }), ": Download Python 3.11+ from python.org. Verify installation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "python --version\n\n## Python 3.11.9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two modes of execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REPL"
        }), " (Read-Eval-Print Loop): Interactive mode for experimentation. Type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python"
        }), " in terminal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Script mode"
        }), ": Save code in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".py"
        }), " files and run with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python filename.py"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## hello.py — Your first Python program\nprint(\"Hello, AI Engineering Journey!\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended IDEs"
      }), ": VS Code with Python extension, PyCharm Community Edition, or Cursor for AI-assisted development."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual environments"
      }), " isolate project dependencies:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python -m venv .venv\nsource .venv/bin/activate  # Linux/macOS\n.venv\\Scripts\\activate     # Windows\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-variables-and-dynamic-typing",
      children: "1.2 Variables and Dynamic Typing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python variables are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "references to objects"
      }), " in memory. Unlike statically-typed languages, a variable's type is inferred at runtime and can change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Dynamic typing — type is inferred from value\nname = \"Alice\"       # str\nage = 30             # int\npi = 3.14159         # float\nis_active = True     # bool\ndata = None          # NoneType\n\n## Reassignment changes type\ndata = 42            # Was NoneType, now int\ndata = \"now a str\"   # Now str\n\n## Multiple assignment\nx, y, z = 1, 2, 3\na = b = c = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Variable naming rules"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Letters, digits, underscores (cannot start with digit)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Case-sensitive (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Age"
        }), " ≠ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "age"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Avoid reserved keywords: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "def"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Convention: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snake_case"
        }), " for variables and functions, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPPER_SNAKE"
        }), " for constants"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Constants by convention (not enforced)\nMAX_RETRIES = 3\nDEFAULT_TIMEOUT = 30.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reference semantics"
      }), ": Variables hold references, not values. Assignment copies the reference, not the object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3]\nb = a              # b references same list\nb.append(4)        # Modifies the list a also sees\nprint(a)           # [1, 2, 3, 4]\n\n## Use copy() for a true copy\nc = a.copy()\nc.append(5)\nprint(a)           # [1, 2, 3, 4]\nprint(c)           # [1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-numeric-types",
      children: "1.3 Numeric Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python supports three numeric types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## int — arbitrary precision integers\ncount = 1_000_000          # Underscores for readability\nbinary = 0b1010            # 10 in decimal\noctal = 0o77               # 63 in decimal\nhex_val = 0xFF             # 255 in decimal\n\n## float — double-precision IEEE 754\nprice = 19.99\nscientific = 1.5e-3        # 0.0015\n\n## complex — real and imaginary parts\nz = 3 + 4j\nprint(z.real, z.imag)      # 3.0 4.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Arithmetic operators"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a, b = 10, 3\nprint(a + b)    # 13  — addition\nprint(a - b)    # 7   — subtraction\nprint(a * b)    # 30  — multiplication\nprint(a / b)    # 3.333... — float division\nprint(a // b)   # 3   — floor division\nprint(a % b)    # 1   — modulo\nprint(a ** b)   # 1000 — exponentiation\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Division behavior"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), " always returns float. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "//"
      }), " returns int (floor)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(5 / 2)    # 2.5\nprint(5 // 2)   # 2\nprint(-5 // 2)  # -3 (floor, not truncate toward zero)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating-point precision"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(0.1 + 0.2)          # 0.30000000000000004\nprint(round(0.1 + 0.2, 2))  # 0.3\n\n## Use Decimal for exact arithmetic\nfrom decimal import Decimal\nprint(Decimal('0.1') + Decimal('0.2'))  # 0.3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-strings",
      children: "1.4 Strings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strings are immutable sequences of Unicode characters."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## String creation\nsingle = 'Hello'\ndouble = \"World\"\nmultiline = \"\"\"This is a\nmulti-line string\"\"\"\nempty = \"\"\n\n## Indexing — 0-based\ns = \"Python\"\nprint(s[0])    # P\nprint(s[-1])   # n (last character)\nprint(s[0:3])  # Pyt (slice: start:end)\nprint(s[::2])  # Pto (slice: start:end:step)\n\n## Common string methods\ntext = \"  hello, world!  \"\nprint(text.strip())       # \"hello, world!\"\nprint(text.upper())       # \"  HELLO, WORLD!  \"\nprint(text.lower())       # \"  hello, world!  \"\nprint(text.replace(\"o\", \"0\"))  # \"  hell0, w0rld!  \"\nprint(text.split(\",\"))    # [\"  hello\", \" world!  \"]\nprint(\", \".join([\"a\", \"b\", \"c\"]))  # \"a, b, c\"\nprint(text.startswith(\"  hello\"))   # True\nprint(text.find(\"world\"))  # 9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "f-strings"
      }), " (Python 3.6+) — preferred string formatting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name = \"Alice\"\nage = 30\nprint(f\"{name} is {age} years old.\")\n\n## Alice is 30 years old.\n\n## Expressions inside f-strings\nprint(f\"{2 * 3 * 5 = }\")  # 2 * 3 * 5 = 30\n\n## Format specifiers\npi = 3.14159\nprint(f\"{pi:.2f}\")         # 3.14\nprint(f\"{pi:10.2f}\")       # \"      3.14\" (right-aligned in width 10)\nprint(f\"{pi:<10.2f}\")      # \"3.14      \" (left-aligned)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "String immutability"
      }), ": Strings cannot be modified in place."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"hello\"\n\n## s[0] = \"H\"  — TypeError!\n\n## Must create new string\ns = \"H\" + s[1:]  # \"Hello\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-booleans-and-none",
      children: "1.5 Booleans and None"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Booleans"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), "): Subclass of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "True"
      }), " = 1, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "False"
      }), " = 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "is_sunny = True\nis_raining = False\nprint(is_sunny + 2)   # 3 (True is 1)\n\n## Truthiness — values that evaluate to False:\n\n## False, None, 0, 0.0, \"\" (empty string), [] (empty list), {} (empty dict), set()\nprint(bool(0))        # False\nprint(bool(42))       # True\nprint(bool(\"\"))       # False\nprint(bool(\"text\"))   # True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "None"
      }), ": Python's null value. Singleton of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NoneType"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "result = None\nif result is None:\n    print(\"No result yet\")\n\n## Use is/is not for None comparison, not ==\nprint(None is None)   # True\nprint(None == 0)      # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-type-conversion",
      children: "1.6 Type Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implicit conversion"
      }), " (automatic):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(3 + 4.0)    # 7.0 — int promoted to float\nprint(True + 2)   # 3   — bool promoted to int\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Explicit conversion"
      }), " (type casting):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## To int\nprint(int(3.9))       # 3 (truncates)\nprint(int(\"42\"))      # 42\nprint(int(\"FF\", 16))  # 255 (base 16)\n\n## To float\nprint(float(3))       # 3.0\nprint(float(\"3.14\"))  # 3.14\n\n## To str\nprint(str(42))        # \"42\"\nprint(str(3.14))      # \"3.14\"\n\n## Conversion gotchas\n\n## int(\"3.14\")  — ValueError: invalid literal\n\n## float(\"3.14\") — works fine\n\n## int(\"0xFF\", 0) — uses base from prefix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-operators",
      children: "1.7 Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Arithmetic operators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "//"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison operators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">="
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(3 == 3.0)   # True (value comparison)\nprint(3 is 3.0)   # False (identity comparison)\nprint(\"a\" < \"b\")  # True (lexicographic)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logical operators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "and"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "not"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 5\nprint(x > 0 and x < 10)   # True\nprint(x > 0 or x < 0)     # True\nprint(not x > 10)         # True\n\n## Short-circuit evaluation\ndef get_value():\n    print(\"get_value called\")\n    return 42\n\n## If first condition is False, second is never evaluated\nresult = False and get_value()  # get_value NOT called\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Assignment operators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "//="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**="
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 10\nx += 5   # x = 15\nx *= 2   # x = 30\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Identity operators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is not"
      }), " — check object identity (memory address), not value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b)   # True (same value)\nprint(a is b)   # False (different objects)\n\n## Small integers are cached\nx = 256\ny = 256\nprint(x is y)   # True (CPython caches -5 to 256)\n\nx = 1000\ny = 1000\nprint(x is y)   # May be True or False — implementation dependent!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Membership operators"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "in"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "not in"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"a\" in \"hello\")      # False\nprint(3 in [1, 2, 3])      # True\nprint(\"key\" in {\"key\": 1}) # True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operator precedence"
      }), " (highest to lowest):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "**"
        }), " — exponentiation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "+x"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-x"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~x"
        }), " — unary operators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "//"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), " — multiplication/division"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), " — addition/subtraction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<<"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">>"
        }), " — bitwise shifts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " — bitwise AND"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "^"
        }), " — bitwise XOR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " — bitwise OR"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in"
        }), " — comparisons"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "not"
        }), " — logical NOT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "and"
        }), " — logical AND"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "or"
        }), " — logical OR"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Complex expression — use parentheses for clarity\nresult = (2 + 3) * 4 > 15 and not False\nprint(result)  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-pep-8-and-code-style",
      children: "1.8 PEP 8 and Code Style"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PEP 8 is Python's style guide. Key rules:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Incorrect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tabs or mixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max 79 characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ character lines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blank lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 before top-level def/class, 1 between methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inconsistent spacing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Imports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "one per line, stdlib → third-party → local"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wildcard imports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable naming"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "snake_case"
            }), " for functions/vars, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPPER_CASE"
            }), " for constants"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "camelCase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spaces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x = 1"
            }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x=1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "missing spaces around operators"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Good PEP 8 style\nimport os\nimport sys\n\nfrom typing import List, Optional\n\nMAX_RETRIES = 3\n\ndef calculate_mean(values: List[float]) -> Optional[float]:\n    if not values:\n        return None\n    return sum(values) / len(values)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "black"
      }), " for auto-formatting and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ruff"
      }), " for linting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install black ruff\nblack my_script.py\nruff check my_script.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript uses explicit type annotations rather than Python's dynamic typing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript — explicit types\nlet name: string = \"Alice\";\nlet age: number = 30;\nlet isActive: boolean = true;\n\n// TypeScript infers types in many cases\nlet message = \"Hello\";  // inferred as string\n\n// TypeScript uses === for strict equality, !== for strict inequality\nif (3 === 3) { console.log(\"strict equality\"); }\n\n// Template literals (similar to f-strings)\nconsole.log(`${name} is ${age} years old.`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of programming in Python like using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recipe book"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variables"
        }), " = Ingredients on your counter — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flour = \"2 cups\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "oven_temp = 350"
        }), ". You can reassign them anytime; the label stays the same but you can swap what's in the bowl."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Functions"
        }), " = Recipes — a named set of steps that takes inputs (ingredients) and produces an output (dish). ", (0,jsx_runtime.jsx)(_components.code, {
          children: "def bake_cake(flour, sugar, eggs)"
        }), " is a recipe card you can reuse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modules"
        }), " = Cookbook chapters — a file full of related recipes. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import baking"
        }), " gives you all the baking recipes in one organized package."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic typing"
        }), " = Using whatever ingredient is available — you don't need to declare \"I will only use flour here\"; you just pour in whatever you have."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This helps because Python's flexibility mirrors how a cook thinks — grab what you need, follow the steps, and don't worry about rigid containers. The trade-off is that you must be careful not to put salt in the cake by mistake."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's dynamic typing means variable types are inferred at runtime and can change; this gives flexibility but requires discipline with type hints"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Numbers include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " (arbitrary precision), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " (IEEE 754 double), and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "complex"
        }), "; beware of floating-point precision issues"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strings are immutable Unicode sequences with rich methods; f-strings are the preferred formatting approach"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " is Python's null singleton; always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " for None checks, never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operators follow standard precedence; use parentheses to make complex expressions readable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type conversion can be implicit (int → float) or explicit (str → int); explicit is safer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " checks object identity (memory address), not structural equality; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " for value comparison"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEP 8 defines Python's style: 4-space indentation, snake_case, 79-character lines, organized imports"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Short-circuit evaluation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "and"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "or"
        }), " stop evaluating once the result is determined"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference semantics mean assignment to mutable objects creates aliases, not copies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String formatting"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["f-strings: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f\"Hello {name}\""
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"Hello \" + name"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), " formatting"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "None check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if x is None:"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if x == None:"
            }), " with value comparison"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large numbers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1_000_000"
            }), " for readability"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1000000"
            }), " hard to read"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Division with integer result"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "//"
            }), " operator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int(a / b)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Decimal"
            }), " for financial/monetary"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), " for exact money"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isinstance(x, int)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type(x) == int"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Style"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "black"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ruff"
            }), " auto-format"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual formatting"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What is the difference between `is` and `==` in Python?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          }), " checks ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "object identity"
          }), " — whether two variables point to the same memory location. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " checks ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "value equality"
          }), " — whether the objects have the same value."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "a = [1, 2, 3]\nb = [1, 2, 3]\nc = a\nprint(a == b)  # True — same value\nprint(a is b)  # False — different objects\nprint(a is c)  # True — same object"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          }), " for: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "None"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "False"
          }), ", singletons. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " for everything else."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Python caches small integers (-5 to 256), so ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x is y"
          }), " may be True for integers in that range, but you should never rely on this behavior."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain Python's dynamic typing. How is it different from static typing?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dynamic typing means variable types are inferred at runtime and can change throughout execution:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "x = 42        # int\nx = \"hello\"   # now str — no error"
          })
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "In statically-typed languages (Java, TypeScript, C++), once a variable is declared with a type, it cannot hold values of a different type."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advantages"
          }), ": Faster prototyping, cleaner syntax, duck typing."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Disadvantages"
          }), ": Type errors surface at runtime, harder to refactor large codebases, less IDE support."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modern Python"
          }), ": Use type hints (", (0,jsx_runtime.jsx)(_components.code, {
            children: "def add(x: int, y: int) -> int:"
          }), ") and tools like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mypy"
          }), " to get static analysis benefits while keeping dynamic semantics."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between `//` and `/` in Python?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "/"
          }), " performs ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "true division"
          }), " — always returns a float:"]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "print(5 / 2)   # 2.5\nprint(4 / 2)   # 2.0"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "//"
          }), " performs ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "floor division"
          }), " — returns the floor of the quotient (rounds toward negative infinity):"]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "print(5 // 2)   # 2\nprint(-5 // 2)  # -3 (floor, not truncate toward zero)"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This differs from other languages (Java, C) where integer division truncates toward zero (", (0,jsx_runtime.jsx)(_components.code, {
            children: "-5/2 = -2"
          }), ")."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: What are f-strings and why are they preferred over other string formatting methods?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "f-strings (formatted string literals, Python 3.6+) allow inline expression evaluation:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "name = \"Alice\"\nage = 30\nprint(f\"{name} is {age} years old.\")"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advantages over other methods"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["vs ", (0,jsx_runtime.jsx)(_components.code, {
                children: "%"
              }), " formatting"]
            }), ": More readable, less error-prone with types"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["vs ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".format()"
              })]
            }), ": More concise, expressions inline"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            }), ": Fastest of all formatting methods (compiled at bytecode level)"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Limitations: Cannot be used with dynamic format strings or in logging (use lazy ", (0,jsx_runtime.jsx)(_components.code, {
            children: "%"
          }), " there)."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: How does Python handle memory management and garbage collection?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Python uses ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "reference counting"
          }), " as its primary memory management strategy, supplemented by a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "generational garbage collector"
          }), " for circular references."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reference counting"
          }), ": Each object maintains a count of references. When the count reaches zero, the object is deallocated immediately."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import sys\na = []\nprint(sys.getrefcount(a))  # 2 (a + argument)\nb = a\nprint(sys.getrefcount(a))  # 3\ndel b                       # reference count drops to 2"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Garbage collector"
          }), ": Handles circular references that reference counting can't resolve. Objects are tracked in three generations — newer objects are collected more frequently."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPython specifics"
          }), ": GIL (Global Interpreter Lock) prevents true parallel execution of Python bytecode. Memory is allocated from a private heap managed by the Python memory manager."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: What is the difference between mutable and immutable objects in Python?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Immutable objects"
          }), " cannot be changed after creation. Any \"modification\" creates a new object:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "str"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tuple"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frozenset"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bytes"
            })]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mutable objects"
          }), " can be modified in-place:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "list"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dict"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set"
            }), ", custom class instances"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Immutable — str\ns = \"hello\"\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "s0--h---typeerror",
              children: "s[0] = \"H\"  # TypeError"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "s = \"H\" + s[1:]  # creates new string"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "mutable--list",
              children: "Mutable — list"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lst = [1, 2, 3]\nlst[0] = 99  # modifies in place\nprint(lst)   # [99, 2, 3]"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview insight"
          }), ": This is why default arguments in functions should never be mutable:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["def bad_append(item, lst=[]):  # Default list is created ONCE\nlst.append(item)\nreturn lst", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "print(bad_append(1))  # [1]\nprint(bad_append(2))  # [1, 2] — same list!"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def good_append(item, lst=None):\nif lst is None:\nlst = []\nlst.append(item)\nreturn lst"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: Explain short-circuit evaluation in Python with examples.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Short-circuit evaluation means that ", (0,jsx_runtime.jsx)(_components.code, {
            children: "and"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "or"
          }), " stop evaluating expressions as soon as the result is determined:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# and — stops at first False-like value\ndef expensive():\n    print(\"expensive called\")\n    return True\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "print(False and expensive())  # False — expensive() NOT called\nprint(True and expensive())   # True — expensive() IS called"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "or--stops-at-first-true-like-value",
              children: "or — stops at first True-like value"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(True or expensive())    # True — expensive() NOT called\nprint(False or expensive())   # True — expensive() IS called"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Practical uses"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Guard conditions: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if user and user.is_active:"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default values: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name = input_name or \"default\""
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Conditional execution: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "debug and print(\"debug message\")"
            })]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What is the purpose of underscores in Python variable names?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Underscores have several conventions and special meanings in Python:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.table, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Pattern"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Meaning"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "_variable"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Internal/private convention (not enforced)"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "variable_"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Avoids conflict with reserved keyword: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "class_"
                })]
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "__variable"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Name mangling: becomes ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "_ClassName__variable"
                })]
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "__variable__"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Magic methods/dunder: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "__init__"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "__str__"
                })]
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "_"
                }), " (single)"]
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Throwaway variable: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "for _ in range(10):"
                })]
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "__"
                }), " (double)"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Name mangling for subclass-safe attributes"
              })]
            }), "\n    "]
          })]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: How do you handle floating-point precision issues in Python?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Floating-point numbers are stored in binary (IEEE 754), causing representation errors for decimal fractions:"
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "print(0.1 + 0.2)  # 0.30000000000000004"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Solutions"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Round for display"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "print(round(0.1 + 0.2, 2))  # 0.3"
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Use tolerance for comparison"
            }), ":\n        ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tolerance = 1e-9\nif abs(a - b) < tolerance:  # instead of a == b"
              })
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Decimal"
              })]
            }), " for financial calculations:\n        ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "from decimal import Decimal, ROUND_HALF_UP\nDecimal('0.1') + Decimal('0.2')  # Decimal('0.3')"
              })
            })]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Fraction"
              })]
            }), " for exact rational arithmetic:\n        ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "from fractions import Fraction\nFraction(1, 10) + Fraction(2, 10)  # Fraction(3, 10)"
              })
            })]
          }), "\n    "]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: What are the key PEP 8 rules every Python developer should follow?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "PEP 8 is Python's official style guide. Key rules:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Indentation"
            }), ": 4 spaces per level, no tabs"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Line length"
            }), ": Max 79 characters for code, 72 for docstrings"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Blank lines"
            }), ": 2 blank lines before top-level definitions, 1 between methods"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Imports"
            }), ": One per line, grouped: stdlib → third-party → local"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Naming"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "snake_case"
            }), " for functions/vars, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UPPER_CASE"
            }), " for constants, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PascalCase"
            }), " for classes"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Spaces"
            }), ": Around operators (", (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 1"
            }), "), after commas (", (0,jsx_runtime.jsx)(_components.code, {
              children: "func(a, b)"
            }), ")"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Docstrings"
            }), ": Triple quotes, descriptive, present tense"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Comparisons to None"
            }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "is not"
            }), ", never ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            })]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "black"
          }), " for auto-formatting and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ruff"
          }), " for linting to enforce PEP 8 automatically."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "print(3 * 2 ** 3)"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 18\nb) 24\nc) 216\nd) 12"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) 24"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Because ", (0,jsx_runtime.jsx)(_components.code, {
            children: "**"
          }), " has higher precedence than ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", so ", (0,jsx_runtime.jsx)(_components.code, {
            children: "2 ** 3 = 8"
          }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
            children: "3 * 8 = 24"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "print(type(3.0))"
      }), " output?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<class 'int'>"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<class 'float'>"
      }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<class 'double'>"
      }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<class 'number'>"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Answer: b) `", (0,jsx_runtime.jsx)(_components.class, {
              "'float'": "",
              children: "`"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "In Python, all decimal numbers are `float` type, regardless of having a fractional part."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which of these checks if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " is not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "None"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if x != None:"
      }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if x is not None:"
      }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if not x is None:"
      }), "\nd) Both b and c"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) Both b and c"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["While both are valid, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if x is not None:"
          }), " is the preferred idiom per PEP 8."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int(\"FF\", 16)"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) 255\nb) 15\nc) 16\nd) ValueError"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) 255"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The second argument specifies the base. Hexadecimal FF = 15*16 + 15 = 255."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "print(5 // -2)"
      }), " output?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) -2\nb) -3\nc) -2.5\nd) 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) -3"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Floor division rounds toward negative infinity, not toward zero. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-5/2 = -2.5"
          }), ", floor is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-3"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a program that converts Celsius to Fahrenheit and prints both values formatted to 1 decimal place."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Given a string, extract and print the first, last, and middle characters using slicing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a function that takes a list of numbers and returns a tuple of (min, max, mean, median). Handle empty lists gracefully."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Use short-circuit evaluation to safely access a nested dictionary: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data = {\"user\": {\"profile\": {\"name\": \"Alice\"}}}"
      }), ". Extract ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " without causing KeyError if any key is missing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Benchmark ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10 + 20"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Decimal('10') + Decimal('20')"
      }), " for 100,000 iterations. Report the time difference and explain why one is faster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core principle: Understand the fundamental concepts thoroughly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementation pattern: Practice with real code examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complexity: Know the time and space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Application: Know when to use this in production systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview: Frequently asked in technical interviews"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Edge cases: Consider common failure scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related concepts: Connect to broader system design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
              children: "safe_int(s)"
            }), " that converts a string to an integer without using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int()"
            }), ". Handle signs, whitespace, and invalid input."]
          }), " — The interviewer is testing character-by-character accumulation: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "result = result * 10 + digit"
          }), ", sign handling, and validation. Expected follow-up: overflow behavior and Unicode digits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.1 + 0.2 != 0.3"
            }), " in Python?"]
          }), " — Binary floating-point (IEEE 754) cannot represent 0.1 exactly. Show ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Decimal"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "round(x, n)"
          }), " as fixes. Follow-up: why ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.1 + 0.2 == 0.3"
          }), " evaluates to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "False"
          }), " but ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.5 + 0.25 == 0.75"
          }), " evaluates to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "print(type(True), True == 1, True + True)"
            }), "?"]
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bool"
          }), " is a subclass of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), "; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True == 1"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True + True == 2"
          }), ". Follow-up: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "isinstance(True, int)"
          }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Explain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " with an example where they disagree."]
          }), " — Use the integer caching range (-5 to 256) as the surprise case: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a = 1000; b = 1000; a is b"
          }), " may be ", (0,jsx_runtime.jsx)(_components.code, {
            children: "False"
          }), ", but ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a = 5; b = 5; a is b"
          }), " is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), ". Amazon tests whether you can explain implementation-dependent behavior without relying on it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a scenario where Python's dynamic typing caused a production bug. How would you prevent it?"
          }), " — Example: a service returned a string where an int was expected; arithmetic failed silently. Fix: type hints, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mypy"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "pyright"
          }), " in CI, and runtime validation with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pydantic"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "isinstance"
          }), " guards at API boundaries."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Compare Python's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " with Java's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " and C's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), "."]
          }), " — Python integers are arbitrary-precision objects; Java/C use fixed-width registers. Python ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sys.maxsize"
          }), " vs unlimited; memory overhead; performance trade-off. Follow-up: when would this matter in production? (IDs, counters, hashing, ML indexing.)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Write code that swaps two variables without a temporary variable."
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a, b = b, a"
          }), " (tuple packing/unpacking). Follow-up: how does Python evaluate the right-hand side first? (Tuple constructed, then unpacked.)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you store and compare 1 billion numeric values in Python with minimal memory?"
          }), " — Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "array.array"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "numpy"
          }), " with an appropriate dtype (", (0,jsx_runtime.jsx)(_components.code, {
            children: "float32"
          }), " = 4 GB, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int8"
          }), " = 1 GB) instead of Python lists of boxed objects. Follow-up: why does this matter for GPU workloads? (GPU expects contiguous typed memory; Python objects can't be copied directly to VRAM.)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Explain why ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float32"
            }), " is preferred for ML training pipelines even though ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float64"
            }), " is more precise."]
          }), " — Memory bandwidth, GPU throughput, and the fact that gradient noise dominates beyond float32 precision. Follow-up: mixed precision (float16/float32) and the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Decimal"
          }), " module's irrelevance in training."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write a one-liner to compute the average of a list of numbers, returning 0 for an empty list."
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "avg = (lambda xs: sum(xs) / len(xs) if xs else 0)(data)"
        }), " or the clean ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sum(data) / len(data) if data else 0"
        }), ". Follow-up: time and space complexity (O(n), O(1))."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List Python with measurable outcomes: \"Reduced ETL runtime by 40% by rewriting string parsing with efficient slicing and join operations.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention PEP 8 adherence, type hints, and tooling (black, ruff, mypy) — ATS systems and recruiters filter on these keywords."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quantify the scale you handled: \"Processed 10M+ records with pandas/numpy pipelines.\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show the Python badge in your skills section next to ML libraries (NumPy, PyTorch, scikit-learn)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a \"Python Projects\" line linking your GitHub, with 2–3 clean, documented repos."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warm up with 15 minutes of small Python snippets (f-strings, slicing, list comprehensions) before the interview."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rehearse the \"elevator pitch\" for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ", dynamic typing, and float precision — the three most common Python screening questions."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have a whiteboard-safe mental model: variables are name tags (references), not boxes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare two STAR stories about debugging a Python production issue."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Know the exact Python version on the system you will use (3.11+ features like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " union types, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "match"
        }), " statements)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " In Python, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 == True"
        }), " evaluates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "True"
        }), ". — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), " is a subclass of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "True"
        }), " has value 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float(\"3.14\")"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(\"3.14\")"
        }), " both succeed. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(\"3.14\")"
        }), " raises ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ValueError"
        }), " because int conversion of strings requires an integer literal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Slicing a string out of range raises an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IndexError"
        }), ". — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Slicing clamps to valid bounds; only direct indexing raises ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IndexError"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-7 // 2"
        }), " equals ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-3"
        }), ". — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Floor division rounds toward negative infinity, so ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-7 // 2 = -4"
        }), ". (The correct statement is False! This is the trick — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False"
        }), " is the answer.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Python variables hold references to objects, not copies of values. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Assignment binds a name to an object; mutation through one reference is visible through others."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The operator used for floor division is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//"
          })
        }), ", and the operator for exponentiation is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "**"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reference counting"
        }), " plus a generational ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "garbage collector"
        }), " for memory management."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The function ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "isinstance"
          })
        }), " checks an object's type against a type or tuple of types, and returns a boolean."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\"python\"[::-1]"
        }), " returns the string ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"nohtyp\""
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A variable that holds the absence of a value should be assigned ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "None"
          })
        }), ", and it should be compared with the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          })
        }), " operator."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " You are debugging a service that sometimes returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.30000000000000004"
          }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.3"
          }), " in an API response. Users see the raw float in their dashboards. — Diagnosis: binary float representation. Fix: round at the serialization boundary (", (0,jsx_runtime.jsx)(_components.code, {
            children: "round(value, 2)"
          }), ") or use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Decimal"
          }), " for money-like values; document that raw floats are never user-facing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate writes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if x == None:"
          }), " everywhere. Your code review must explain why this is risky. — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "__eq__"
          }), " and can be overridden, returning custom truthiness; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "None"
          }), " is a singleton, so ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          }), " is both faster and semantically correct. Require ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is None"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is not None"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A list of 10 million floats is consuming 280 MB of RAM in a batch job. Your manager wants it cut down. — Python lists box every float in a PyObject (28+ bytes each). Switch to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "array('d')"
          }), " (80 MB) or NumPy ", (0,jsx_runtime.jsx)(_components.code, {
            children: "float64"
          }), " (80 MB) / ", (0,jsx_runtime.jsx)(_components.code, {
            children: "float32"
          }), " (40 MB). This matters for AI data pipelines."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire writes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "s = s.replace(\"a\", \"b\"); s.upper()"
          }), " and is confused why ", (0,jsx_runtime.jsx)(_components.code, {
            children: "s"
          }), " is still lowercase. — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str"
          }), " methods return new strings; strings are immutable. They must reassign: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "s = s.replace(\"a\", \"b\").upper()"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "print(2 ** 3 ** 2)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Output:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "512"
          }), " — exponentiation is right-associative: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "2 ** (3 ** 2) = 2 ** 9"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Output:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[1, 2, 3, 4]"
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "b = a"
          }), " copies the reference, not the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "print(\"ab\" in \"abcabc\" and \"x\" not in \"abc\")\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Output:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), " — both sides are True."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "x = 5\nx += 2\nx *= 3\nprint(x)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Output:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "21"
          }), " — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "5 + 2 = 7"
          }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
            children: "7 * 3 = 21"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output?"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "print(bool([]), bool([0]), bool(\"0\"))\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Output:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "False True True"
          }), " — empty containers are falsy; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[0]"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"0\""
          }), " are non-empty so truthy."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1–2 weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, types, operators, strings, type conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2–4 weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference semantics, truthiness, f-strings, PEP 8 tooling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+ weeks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIL, memory management, type-hint ecosystems (mypy/pydantic), float precision in ML"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a, b = b, a"
        }), " for swaps; Python constructs a tuple on the right first, so no temp variable is needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chain comparisons: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if 0 <= score <= 100:"
        }), " is valid Python and reads naturally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "print(f\"{value:.2f}\")"
        }), " beats ", (0,jsx_runtime.jsx)(_components.code, {
          children: "round()"
        }), " for display; rounding for math vs display are different concerns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " for singletons (", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "True"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "False"
        }), "), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " for values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For big numbers, underscores improve readability: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1_000_000_000"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "str.isdigit()"
        }), " is not the same as \"can convert to int\" — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"²\""
        }), " is a digit but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(\"²\")"
        }), " fails. Use try/except for real validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type(x) is int"
        }), " over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type(x) == int"
        }), " if you must use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type()"
        }), ", but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isinstance()"
        }), " is the idiomatic choice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0x"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0o"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0b"
        }), " prefixes give you hex/octal/binary literals without helper functions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F-strings = Fast strings"
        }), ": remember the f prefix as \"fancy format\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The floor falls"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "//"
        }), " floors down toward negative infinity — \"the floor is below you, even for negatives.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          }), " = identity = ID"]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " compares the memory ID; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " compares the value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True is 1, False is 0"
        }), ": bool is just int in a trench coat."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutable vs Immutable — LIST-L-D-S-T"
        }), ": Lists, Dicts, Sets are mutable; Tuples and str are not."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "i-n-t-r-o string methods"
        }), ": ", (0,jsx_runtime.jsx)(_components.em, {
          children: "i"
        }), "mmutable ", (0,jsx_runtime.jsx)(_components.em, {
          children: "n"
        }), "ew ", (0,jsx_runtime.jsx)(_components.em, {
          children: "t"
        }), "his ", (0,jsx_runtime.jsx)(_components.em, {
          children: "r"
        }), "eturns ", (0,jsx_runtime.jsx)(_components.em, {
          children: "o"
        }), "bject — string methods always return new strings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/tutorial/introduction.html",
          children: "Python Official Tutorial — An Informal Introduction to Python"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://peps.python.org/pep-0008/",
          children: "PEP 8 — Style Guide for Python Code"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/reference/datamodel.html",
          children: "Python Data Model — Objects, Values and Types"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://realpython.com/python-variables/",
          children: "Real Python — Variables in Python"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/tutorial/floatingpoint.html",
          children: "Floating Point Arithmetic: Issues and Limitations (Python docs)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://automatetheboringstuff.com/2e/chapter1/",
          children: "Automate the Boring Stuff with Python — Chapter 1"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "02-control-flow — if/else, loops, and how booleans drive decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "03-strings-and-formatting — deeper string methods and formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "04-collections — lists, tuples, dicts, sets built on this chapter's reference semantics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "08-oop-in-python — classes where the mutable-default bug bites hardest"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript Parallel — explicit typing for comparison in mixed-codebases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why can't I modify a string in place?"
        }), " Strings are immutable for safety and hashability. Every operation returns a new string; memory sharing between copies is cheap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "x = 10; y = 10; x is y"
          }), " always True?"]
        }), " Only within the small-integer cache (-5 to 256) in CPython. Never rely on it — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["What's the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "float"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Decimal"
          }), "?"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " is fast, hardware-backed, and imprecise for decimal fractions. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Decimal"
        }), " is exact, slower, and configurable in precision — for money."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need type hints?"
        }), " Not to run code, but for maintainability, IDE support, and mypy/pyright checks in professional codebases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int(\"3.14\")"
          }), " fail?"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(str)"
        }), " parses an integer literal, not a numeric expression. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float(\"3.14\")"
        }), " then convert, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval"
        }), " is never the answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python is dynamically typed but strongly typed: type changes are allowed, implicit type coercion is not (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"5\" + 5"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All Python objects live on a private heap; variable names are just bindings in a namespace."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " on modern CPython is IEEE 754 double precision — 53 bits of mantissa."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "True"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "False"
        }), " are singletons; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " comparisons are the canonical check."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Everything in Python is an object, including functions and modules — keep this in mind for decorators and higher-order functions later."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python 3 removed the old ", (0,jsx_runtime.jsx)(_components.code, {
          children: "u"
        }), " prefix; all strings are Unicode by default."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python was created by Guido van Rossum in 1991, emphasizing readability after his experience with ABC."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python 2 (2000) introduced list comprehensions and the GC; Python 3 (2008) unified ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "long"
        }), " into arbitrary-precision ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " and made Unicode-first strings the default."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["f-strings arrived in Python 3.6 (2016) after years of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), " formatting and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".format()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEP 8 was written by Guido and Barry Warsaw in 2001, codifying the \"beautiful code\" philosophy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The GIL (Global Interpreter Lock) dates to Python's earliest CPython implementation and still shapes concurrency design today."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's rise to AI dominance came through NumPy (2006) and later TensorFlow/PyTorch, which exposed Python's typed-array gap that this chapter's numeric fundamentals address."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coding-standards",
      children: "Coding Standards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow PEP 8: 4-space indentation, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snake_case"
        }), " variables, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPPER_SNAKE"
        }), " constants, 79-char lines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer f-strings over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".format()"
        }), " unless lazily evaluating in logging."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use type hints on all public functions; run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mypy"
        }), " in CI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never compare with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "== None"
        }), "; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is None"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "black"
        }), " for formatting and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ruff"
        }), " for linting in every repo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Constants at module top: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAX_RETRIES = 3"
        }), " rather than magic numbers inline."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eval()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exec()"
        }), " on untrusted strings — arbitrary code execution risk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Be careful with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(input())"
        }), " — validate and bound-check numeric input; huge ints can cause DoS via expensive arithmetic."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't leak internal values via f-strings in logs or error messages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In web contexts, user-supplied strings must be escaped; Python string formatting does not auto-escape."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numeric overflow is not a risk in Python (arbitrary precision), but memory exhaustion from huge numbers or unbounded lists is."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Numeric types are the foundation of every model: features are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float32"
        }), " arrays, labels are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), ", text is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "str"
        }), " Unicode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understanding ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " precision explains why normalization and mixed precision (float16/float32) matter in training — gradients lose precision otherwise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), " truthiness drives masking and filtering operations in NumPy/PyTorch (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data[labels == 1]"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), " is the standard \"missing value\" sentinel; in ML pipelines it maps to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "np.nan"
        }), " handling before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fillna"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference semantics explain why two pandas DataFrames may silently share memory — a classic source of feature-leakage bugs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variables are name tags, not boxes"
        }), ": a sticky note tied to a balloon. Moving the tag doesn't copy the balloon; cutting the tag doesn't pop it (until no tags remain)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          })]
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " asks \"same recipe, same result?\" while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " asks \"same physical kitchen?\" Two cakes can taste identical but be baked in different kitchens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic typing"
        }), ": a drawer labeled \"things\" — you can put a spoon in, then later a fork. Strong typing means the fork won't turn into a spoon by itself."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutability"
        }), ": a printed newspaper. You can buy a new edition but you can't edit yesterday's print run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference counting"
        }), ": an apartment's door tags — when the last tag is removed, the janitor (GC) cleans the room."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Raushan666java/ai-engineering-journey",
          children: "Capstone: Build a Python Toolkit CLI"
        }), " — Chapter 1 of Module 1 feeds the \"Numeric Stats Toolkit\": a CLI that reads a CSV, computes stats with correct float handling, validates input, and follows PEP 8 with type hints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the difference between `is` and `==`?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          }), " compares object identity (memory address); ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " compares value. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is"
          }), " for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "None"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "False"
          }), "."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does `5 // 2` return, and what does `-5 // 2` return?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "5 // 2 = 2"
          }), "; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-5 // 2 = -3"
          }), " (floor division rounds toward negative infinity)."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Name four immutable types and four mutable types.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Immutable: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "float"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tuple"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bool"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bytes"
          }), ". Mutable: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "list"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dict"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set"
          }), ", custom class instances."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How do you create a constant in Python?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["By convention only: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MAX_RETRIES = 3"
          }), " (UPPER_SNAKE). Python does not enforce constants."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the output of `bool(\"False\")`?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "True"
          }), " — any non-empty string is truthy; only the empty string is falsy."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Why is `0.1 + 0.2` not exactly `0.3`?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IEEE 754 binary floats can't represent 0.1 exactly. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Decimal"
          }), " for exactness or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "round()"
          }), " for display."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does `s[::-1]` do?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns the reversed string — negative step slices from the end."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What happens when you assign a list to two variables and mutate one?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Both variables see the mutation — assignment copies references, not values. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".copy()"
          }), " for a shallow copy."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which operator has higher precedence: `**` or unary `-`?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "**"
          }), " binds tighter than unary minus on its left: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-2 ** 2 = -4"
          }), ", but ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(-2) ** 2 = 4"
          }), "."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p01-s01-flash10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How do you check whether a variable is an integer (but not a bool)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "isinstance(x, int) and not isinstance(x, bool)"
          }), " — since ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bool"
          }), " subclasses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), "."]
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "study-plan",
      children: "Study Plan"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Day"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup & REPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install Python, run 20 expressions in the REPL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reassignment, multiple assignment, naming rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All arithmetic operators, floor division, float precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing, slicing, methods, f-strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Booleans & None"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Truthiness table, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " difference"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit vs explicit, common ValueError cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence quiz + short-circuit evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEP 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format a messy script with black + ruff"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9–10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz, flashcards, 5 LeetCode-easy Python problems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/reference/lexical_analysis.html",
          children: "Python Language Reference — Lexical Analysis (literals)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.wikipedia.org/wiki/IEEE_754",
          children: "IEEE 754 Standard — Floating Point (Wikipedia overview)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/tutorial/",
          children: "Guido van Rossum, \"The Python Tutorial\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://peps.python.org/pep-0484/",
          children: "PEP 484 — Type Hints"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/c-api/typeobj.html",
          children: "CPython Internals — Objects and Types"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fine-tuning-notes",
      children: "Fine-Tuning Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter is the \"unfreeze\" layer: every later module (collections, OOP, numpy, pandas) assumes you can predict reference semantics and type behavior instantly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Budget 30 minutes of daily Python snippets (katas) before moving to Module 2 — spacing beats cramming."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When you reach numpy (Chapter 11), revisit this chapter: NumPy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float32"
        }), " vs Python ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " is the same precision lesson at scale."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python"
        }), " (python.org) — the interpreter itself"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "black"
        }), " — deterministic code formatter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ruff"
        }), " — fast Python linter (replaces flake8 + isort)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mypy / pyright"
        }), " — static type checkers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ipython"
        }), " — enhanced REPL for exploration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VS Code Python extension"
        }), " — debugging, intellisense, Jupyter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeError: unsupported operand"
        }), " — you mixed types; print ", (0,jsx_runtime.jsx)(_components.code, {
          children: "type(x)"
        }), " and check API boundaries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ValueError: invalid literal for int()"
        }), " — string is not an integer literal; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "try/except"
        }), " with a clear message."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wrong float output (0.30000000000000004)"
        }), " — display issue; use f-string precision ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{x:.2f}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"UnboundLocalError: local variable referenced before assignment\""
        }), " — you assigned in the function later; Python scoped it as local."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Surprising shared list mutation"
        }), " — you aliased a list; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".copy()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity check fails unexpectedly"
        }), " — comparing large ints with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), "; switch to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or VS Code breakpoints; log ", (0,jsx_runtime.jsx)(_components.code, {
          children: "repr()"
        }), " not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "str()"
        }), " to reveal type differences."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function that reverses a string without slicing."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), "? Give an example."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What will ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print(type(3/2))"
        }), " output and why?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fizzbuzz"
        }), " using a single expression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_palindrome"
        }), " handling non-alphanumeric characters and case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "min_max_mean"
        }), " function returning a tuple; handle empty input with an explicit contract."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time dynamic typing caused a bug. How did you harden the system?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you store 100M floats with low memory for a recommendation pipeline?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Your API returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.30000000000000004"
        }), "; how do you fix it for customers?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import Optional, Sequence\n\n\n@dataclass(frozen=True)\nclass Stats:\n    min: float\n    max: float\n    mean: float\n    median: float\n\n    def as_row(self) -> tuple:\n        return (self.min, self.max, self.mean, self.median)\n\n\ndef compute_stats(values: Sequence[float]) -> Optional[Stats]:\n    \"\"\"O(n log n) worst case for median; O(n) memory.\n    Uses explicit typing and is None-safe for empty input.\"\"\"\n    if not values:\n        return None\n    ordered = sorted(values)\n    n = len(ordered)\n    mid = n // 2\n    median = ordered[mid] if n % 2 else (ordered[mid - 1] + ordered[mid]) / 2\n    return Stats(min(ordered), max(ordered), sum(ordered) / n, median)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses a frozen dataclass for a typed, immutable result (no tuple confusion)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional"
        }), " return communicates the empty-input contract."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sorting dominates: O(n log n); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sum"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "min"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "max"
        }), " are single passes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trade-off: for streaming data, replace sorting with two heaps (O(log n) per insert)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python Software Foundation. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "The Python Tutorial"
        }), ". ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/tutorial/",
          children: "https://docs.python.org/3/tutorial/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["van Rossum, G. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "PEP 8 — Style Guide for Python Code"
        }), ". 2001."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IEEE Computer Society. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "IEEE 754-2019 — Floating-Point Arithmetic"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rossum, G., Hettinger, R. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "PEP 484 — Type Hints"
        }), ". 2014."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ramalho, L. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Fluent Python"
        }), " (2nd ed.), O'Reilly, 2022."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given code, name output types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator precedence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quiz on mixed expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predict shared-mutation outcomes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix float display bugs in 3 tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PEP 8 compliance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ruff check"
            }), " on your code"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 basic katas (reverse, fizzbuzz, stats)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 15 min"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ETL pipelines"
        }), ": DataFrames loaded as float64 are the default; converting to float32 halves memory in feature stores."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce pricing"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Decimal"
        }), " avoids ", (0,jsx_runtime.jsx)(_components.code, {
          children: "19.99 * 0.1"
        }), " rounding disasters in invoicing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limiting"
        }), ": Redis counters stored as ints; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(redis.get(\"hits\")) or 0"
        }), " is a classic safe-conversion idiom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML preprocessing"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "label == target"
        }), " comparisons become ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), " arrays used as masks; understanding truthiness prevents silent filtering bugs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI tools"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sys.argv"
        }), " strings → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int(sys.argv[1])"
        }), " with try/except is the universal entry-point pattern."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/01-python-programming/02-control-flow",
        children: "02 - Control Flow: if/else, Loops, and Comprehensions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " precision issues make it unsuitable for exact financial arithmetic without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Decimal"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fraction"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Arbitrary-precision ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " means no overflow errors — but unbounded operations can exhaust memory silently."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic typing removes compile-time safety; bugs surface at runtime, requiring type hints and mypy for large codebases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The GIL limits true parallelism for CPU-bound pure-Python code (mitigated by multiprocessing, NumPy C extensions, async I/O)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reference semantics cause subtle aliasing bugs; immutability is not enforced by the language (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals only — real AI work additionally requires NumPy/PyTorch tensor semantics, covered in Chapters 11–12."
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