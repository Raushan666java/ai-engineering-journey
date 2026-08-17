"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85042],{

/***/ 26639
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_operating_systems_15_shell_scripting_md_3f0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-operating-systems-15-shell-scripting-md-3f0.json
const site_docs_courses_operating_systems_15_shell_scripting_md_3f0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/operating-systems/15-shell-scripting","title":"Chapter 15: Shell Scripting","description":"---","source":"@site/docs/courses/operating-systems/15-shell-scripting.md","sourceDirName":"courses/operating-systems","slug":"/operating-systems/15-shell-scripting","permalink":"/ai-engineering-journey/operating-systems/15-shell-scripting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-shell-scripting","slug":"/operating-systems/15-shell-scripting","title":"Chapter 15: Shell Scripting","sidebar_label":"Chapter 15: Shell Scripting","sidebar_position":15},"sidebar":"course-operating-systems","previous":{"title":"Chapter 14: Linux Kernel Internals","permalink":"/ai-engineering-journey/operating-systems/14-linux-kernel"},"next":{"title":"Chapter 16: Security","permalink":"/ai-engineering-journey/operating-systems/16-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/operating-systems/15-shell-scripting.md


const frontMatter = {
	id: '15-shell-scripting',
	slug: '/operating-systems/15-shell-scripting',
	title: 'Chapter 15: Shell Scripting',
	sidebar_label: 'Chapter 15: Shell Scripting',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Shell Scripting';

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
  "value": "Section 1: Shell Basics",
  "id": "section-1-shell-basics",
  "level": 2
}, {
  "value": "What is a Shell?",
  "id": "what-is-a-shell",
  "level": 3
}, {
  "value": "The Shebang (#!)",
  "id": "the-shebang-",
  "level": 3
}, {
  "value": "Common Unix Shells",
  "id": "common-unix-shells",
  "level": 3
}, {
  "value": "Shell Features Comparison",
  "id": "shell-features-comparison",
  "level": 3
}, {
  "value": "Shell Basics — Complexity &amp; Edge Cases",
  "id": "shell-basics--complexity--edge-cases",
  "level": 3
}, {
  "value": "Section 2: Variables",
  "id": "section-2-variables",
  "level": 2
}, {
  "value": "Variable Basics",
  "id": "variable-basics",
  "level": 3
}, {
  "value": "Variable Types and Operations",
  "id": "variable-types-and-operations",
  "level": 3
}, {
  "value": "Special Variables Reference",
  "id": "special-variables-reference",
  "level": 3
}, {
  "value": "Variables — Complexity &amp; A&amp;D",
  "id": "variables--complexity--ad",
  "level": 3
}, {
  "value": "Section 3: Operators",
  "id": "section-3-operators",
  "level": 2
}, {
  "value": "Arithmetic Operators",
  "id": "arithmetic-operators",
  "level": 3
}, {
  "value": "Comparison Operators",
  "id": "comparison-operators",
  "level": 3
}, {
  "value": "Logical Operators",
  "id": "logical-operators",
  "level": 3
}, {
  "value": "Operators — Complexity &amp; A&amp;D",
  "id": "operators--complexity--ad",
  "level": 3
}, {
  "value": "Section 4: Conditionals",
  "id": "section-4-conditionals",
  "level": 2
}, {
  "value": "if/then/elif/else",
  "id": "ifthenelifelse",
  "level": 3
}, {
  "value": "case Statement",
  "id": "case-statement",
  "level": 3
}, {
  "value": "Conditional — Complexity &amp; A&amp;D",
  "id": "conditional--complexity--ad",
  "level": 3
}, {
  "value": "Section 5: Loops",
  "id": "section-5-loops",
  "level": 2
}, {
  "value": "for Loop",
  "id": "for-loop",
  "level": 3
}, {
  "value": "while and until Loops",
  "id": "while-and-until-loops",
  "level": 3
}, {
  "value": "Loop Control: break and continue",
  "id": "loop-control-break-and-continue",
  "level": 3
}, {
  "value": "Loops — Complexity &amp; A&amp;D",
  "id": "loops--complexity--ad",
  "level": 3
}, {
  "value": "Section 6: Functions",
  "id": "section-6-functions",
  "level": 2
}, {
  "value": "Function Definition and Invocation",
  "id": "function-definition-and-invocation",
  "level": 3
}, {
  "value": "Variable Scope in Functions",
  "id": "variable-scope-in-functions",
  "level": 3
}, {
  "value": "Functions — Complexity &amp; A&amp;D",
  "id": "functions--complexity--ad",
  "level": 3
}, {
  "value": "Section 7: I/O Redirection",
  "id": "section-7-io-redirection",
  "level": 2
}, {
  "value": "File Descriptors",
  "id": "file-descriptors",
  "level": 3
}, {
  "value": "Redirection Operators",
  "id": "redirection-operators",
  "level": 3
}, {
  "value": "Named Pipes (FIFOs)",
  "id": "named-pipes-fifos",
  "level": 3
}, {
  "value": "I/O Redirection — Complexity &amp; A&amp;D",
  "id": "io-redirection--complexity--ad",
  "level": 3
}, {
  "value": "Section 8: Pipes and Pipelines",
  "id": "section-8-pipes-and-pipelines",
  "level": 2
}, {
  "value": "Basic Pipes",
  "id": "basic-pipes",
  "level": 3
}, {
  "value": "Pipeline Characteristics and Pitfalls",
  "id": "pipeline-characteristics-and-pitfalls",
  "level": 3
}, {
  "value": "Pipes — Complexity &amp; A&amp;D",
  "id": "pipes--complexity--ad",
  "level": 3
}, {
  "value": "Section 9: Filters",
  "id": "section-9-filters",
  "level": 2
}, {
  "value": "Common Filter Commands",
  "id": "common-filter-commands",
  "level": 3
}, {
  "value": "Filters — Complexity &amp; A&amp;D",
  "id": "filters--complexity--ad",
  "level": 3
}, {
  "value": "Section 10: Process Substitution",
  "id": "section-10-process-substitution",
  "level": 2
}, {
  "value": "Process Substitution (Bash/Zsh)",
  "id": "process-substitution-bashzsh",
  "level": 3
}, {
  "value": "Process Substitution — Complexity &amp; A&amp;D",
  "id": "process-substitution--complexity--ad",
  "level": 3
}, {
  "value": "Section 11: Job Control",
  "id": "section-11-job-control",
  "level": 2
}, {
  "value": "Background and Foreground Processes",
  "id": "background-and-foreground-processes",
  "level": 3
}, {
  "value": "Job Control Commands",
  "id": "job-control-commands",
  "level": 3
}, {
  "value": "Parallel Job Execution Pattern",
  "id": "parallel-job-execution-pattern",
  "level": 3
}, {
  "value": "Job Control — Complexity &amp; A&amp;D",
  "id": "job-control--complexity--ad",
  "level": 3
}, {
  "value": "Section 12: Signal Handling",
  "id": "section-12-signal-handling",
  "level": 2
}, {
  "value": "Signal Concepts",
  "id": "signal-concepts",
  "level": 3
}, {
  "value": "The trap Command",
  "id": "the-trap-command",
  "level": 3
}, {
  "value": "Shell Script Timeout Pattern",
  "id": "shell-script-timeout-pattern",
  "level": 3
}, {
  "value": "Signal Handling — Complexity &amp; A&amp;D",
  "id": "signal-handling--complexity--ad",
  "level": 3
}, {
  "value": "Section 13: Regular Expressions",
  "id": "section-13-regular-expressions",
  "level": 2
}, {
  "value": "Regex in Shell Scripting",
  "id": "regex-in-shell-scripting",
  "level": 3
}, {
  "value": "Basic vs Extended Regex",
  "id": "basic-vs-extended-regex",
  "level": 3
}, {
  "value": "Common Regex Patterns",
  "id": "common-regex-patterns",
  "level": 3
}, {
  "value": "Regex in grep",
  "id": "regex-in-grep",
  "level": 3
}, {
  "value": "Regex in sed",
  "id": "regex-in-sed",
  "level": 3
}, {
  "value": "Regex in awk",
  "id": "regex-in-awk",
  "level": 3
}, {
  "value": "Regex in Bash [[ ]] with =~",
  "id": "regex-in-bash---with-",
  "level": 3
}, {
  "value": "Regex — Complexity &amp; A&amp;D",
  "id": "regex--complexity--ad",
  "level": 3
}, {
  "value": "Section 14: sed — Stream Editor",
  "id": "section-14-sed--stream-editor",
  "level": 2
}, {
  "value": "sed Core Concepts",
  "id": "sed-core-concepts",
  "level": 3
}, {
  "value": "sed Commands Reference",
  "id": "sed-commands-reference",
  "level": 3
}, {
  "value": "sed Use Cases",
  "id": "sed-use-cases",
  "level": 3
}, {
  "value": "Section 15: awk — Pattern Scanning and Processing",
  "id": "section-15-awk--pattern-scanning-and-processing",
  "level": 2
}, {
  "value": "awk Core Concepts",
  "id": "awk-core-concepts",
  "level": 3
}, {
  "value": "awk Built-in Variables",
  "id": "awk-built-in-variables",
  "level": 3
}, {
  "value": "awk One-Liners",
  "id": "awk-one-liners",
  "level": 3
}, {
  "value": "awk — Complexity &amp; A&amp;D",
  "id": "awk--complexity--ad",
  "level": 3
}, {
  "value": "Section 16: grep/sed/awk — Putting It All Together",
  "id": "section-16-grepsedawk--putting-it-all-together",
  "level": 2
}, {
  "value": "Pattern-Based Text Processing Ecosystem",
  "id": "pattern-based-text-processing-ecosystem",
  "level": 3
}, {
  "value": "Integrated Examples",
  "id": "integrated-examples",
  "level": 3
}, {
  "value": "grep/sed/awk — Usage Decision Matrix",
  "id": "grepsedawk--usage-decision-matrix",
  "level": 3
}, {
  "value": "Section 17: Interview Corner",
  "id": "section-17-interview-corner",
  "level": 2
}, {
  "value": "Subshell vs Current Shell",
  "id": "subshell-vs-current-shell",
  "level": 3
}, {
  "value": "$@ vs $*",
  "id": "-vs-",
  "level": 3
}, {
  "value": "Exit Code Handling",
  "id": "exit-code-handling",
  "level": 3
}, {
  "value": "Debugging Shell Scripts",
  "id": "debugging-shell-scripts",
  "level": 3
}, {
  "value": "Advanced Debugging — The xtrace PS4 Prompt",
  "id": "advanced-debugging--the-xtrace-ps4-prompt",
  "level": 3
}, {
  "value": "Interview Corner — Complexity &amp; A&amp;D",
  "id": "interview-corner--complexity--ad",
  "level": 3
}, {
  "value": "Section 18: Applications in Real Systems",
  "id": "section-18-applications-in-real-systems",
  "level": 2
}, {
  "value": "CI/CD Scripts (GitHub Actions / GitLab CI)",
  "id": "cicd-scripts-github-actions--gitlab-ci",
  "level": 3
}, {
  "value": "System Administration Scripts",
  "id": "system-administration-scripts",
  "level": 3
}, {
  "value": "Docker Entrypoint Script",
  "id": "docker-entrypoint-script",
  "level": 3
}, {
  "value": "Log Rotation Script",
  "id": "log-rotation-script",
  "level": 3
}, {
  "value": "Database Backup Script",
  "id": "database-backup-script",
  "level": 3
}, {
  "value": "Section 19: Writing Robust Shell Scripts (Best Practices)",
  "id": "section-19-writing-robust-shell-scripts-best-practices",
  "level": 2
}, {
  "value": "The Safety Trifecta",
  "id": "the-safety-trifecta",
  "level": 3
}, {
  "value": "Error Handling Patterns",
  "id": "error-handling-patterns",
  "level": 3
}, {
  "value": "Input Validation",
  "id": "input-validation",
  "level": 3
}, {
  "value": "Section 20: Edge Cases Reference",
  "id": "section-20-edge-cases-reference",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "TypeScript Implementation — Shell Interpreter Simulator",
  "id": "typescript-implementation--shell-interpreter-simulator",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
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
        id: "chapter-15-shell-scripting",
        children: "Chapter 15: Shell Scripting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["<< ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/operating-systems/14-linux-kernel",
          children: "The Linux Kernel"
        })]
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/operating-systems/16-security",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next: Security"
        })
      }), " >>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the role of the shell as both a command interpreter and scripting language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write shell scripts with variables, conditionals, loops, and functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use pipes and redirection to combine commands into pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage processes: background execution, job control, signals, and process substitution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use common text-processing utilities: grep, sed, awk, cut, sort, uniq"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug and write robust shell scripts with proper error handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shell Basics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command interpreter; Linux default is Bash (Bourne Again SHell)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined, environment, positional parameters; $? for exit status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conditionals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if-then-else, case; test command [ ] and [[ ]]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Loops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for, while, until; iterating over files and command output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable code blocks; local variables with local keyword"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Script Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exit, return, break, continue, error handling with trap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O Redirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin/stdout/stderr manipulation; here-docs, here-strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text Processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grep, sed, awk, sort, uniq, cut, wc, head, tail"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.div, {
      className: "mermaid",
      children: "\nflowchart LR\n    A[Shell & Bash Basics] --> B[Variables & Parameters]\n    B --> C[Conditionals]\n    B --> D[Loops]\n    C --> E[Functions]\n    D --> E\n    E --> F[I/O Redirection & Pipes]\n    F --> G[Text Processing: grep/sed/awk]\n    G --> H[Job Control & Signals]\n    H --> I[Process Substitution]\n    I --> J[Error Handling & Debugging]\n    J --> K[Real-World Scripts]\n    K --> L[Interview Corner]\n    L --> M[Summary]\n"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/operating-systems/15-shell-scripting.png",
        alt: "Shell Scripting"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-1-shell-basics",
      children: "Section 1: Shell Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-shell",
      children: "What is a Shell?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shell"
      }), " is a command-line interpreter that provides an interface between the user and the operating system kernel. It operates in two modes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive mode"
        }), ": Reads commands from the terminal, executes them, and displays results in real time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Script mode"
        }), ": Reads commands from a file (script) and executes them sequentially without user interaction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A shell is like a restaurant waiter. In interactive mode, you tell the waiter each dish one at a time, and they bring it immediately. In script mode, you hand the waiter a written order card with multiple items, and they execute the entire sequence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-shebang-",
      children: "The Shebang (#!)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every script starts with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shebang"
      }), " — a magic byte sequence that tells the kernel which interpreter to execute the file with:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Script Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel reads the first line of the script file"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detects ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#!"
        }), " magic bytes (0x23 0x21)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extracts the interpreter path (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/bin/bash"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Invokes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/bin/bash /path/to/script arg1 arg2 ..."
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bash reads and executes script commands line by line"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function execute_script(path):\n    first_line = read_first_line(path)\n    if first_line starts_with \"#!\":\n        interpreter = extract_path(first_line)\n        args = extract_arguments(first_line)\n        fork_and_exec(interpreter, path + args)\n    else:\n        fork_and_exec(\"/bin/sh\", path)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Script Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Component          | State / Action\n1    | Shebang detected   | #!/bin/bash found at line 1\n2    | Kernel reads       | Interpreter = /bin/bash\n3    | Fork + Exec        | PID=1234 created, bash loaded\n4    | Script loaded      | 50 commands read into memory\n5    | Command 1 runs     | echo \"Hello\" → stdout\n6    | Command 2 runs     | ls -la → stdout\n7    | Exit               | exit code 0 returned to parent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-unix-shells",
      children: "Common Unix Shells"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Shell"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bourne (sh)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/bin/sh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original Unix shell, minimal features, POSIX-compliant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/bin/bash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bourne Again SHell — de facto standard, advanced features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zsh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/bin/zsh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended Bash, powerful tab-completion, theming, oh-my-zsh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/usr/bin/fish"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-friendly, auto-suggestions, web-based config, Sane defaults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "/bin/dash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight, fast, Debian /bin/sh default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shell-features-comparison",
      children: "Shell Features Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sh (Bourne)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bash"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zsh"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fish"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shebang"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#!/bin/sh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#!/bin/bash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#!/bin/zsh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#!/usr/bin/fish"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr=(1 2 3)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (1-indexed!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (1-indexed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Associative Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "declare -A"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[[ ]] extended test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Globbing qualifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "*.txt(om)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-correction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tab completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful + fuzzy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prompt theming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PS1 + plugins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "oh-my-zsh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scripting ecosystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive UX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Selection Guide"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#!/bin/sh"
        }), " for maximum portability (POSIX-only features)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#!/bin/bash"
        }), " for scripts needing arrays, [[ ]], or process substitution"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Zsh for interactive daily driving; Fish for beginners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never use Zsh/Fish for shared scripts — they may not be installed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shell-basics--complexity--edge-cases",
      children: "Shell Basics — Complexity & Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = number of commands in script (sequential execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra beyond script size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why O(n)?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each command is executed linearly; no recursion or nested iteration in basic execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Shebang missing"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Falls back to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/bin/sh"
            }), " or current shell; behavior may differ"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: No execute permission"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "chmod +x script.sh"
            }), " required or invoke as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bash script.sh"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Carriage returns"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Windows line endings (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\r\\n"
            }), ") break shebang — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dos2unix"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: BOM marker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTF-8 BOM at file start corrupts shebang detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ubiquitous on Unix systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak data structures (no native hash maps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Glue language — ties tools together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for CPU-intensive work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No compilation needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-prone quoting rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful one-liners"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging is primitive (set -x)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent — Running a System Command"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import subprocess, sys\n\n# Equivalent to: ./script.sh arg1 arg2\nresult = subprocess.run(\n    [\"bash\", \"script.sh\", \"arg1\", \"arg2\"],\n    capture_output=True, text=True\n)\nprint(result.stdout)\nprint(f\"Exit code: {result.returncode}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-2-variables",
      children: "Section 2: Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variable-basics",
      children: "Variable Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Variables store data for use throughout the script."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Variables are like labeled storage bins in a warehouse. You write a label (name) on the bin and put a value inside. You can retrieve the value by referring to the label, change what's inside, or pass the entire bin to another worker."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Variable Expansion"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parser encounters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$name"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${name}"
        }), " in the command line"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shell looks up ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " in the variable table (hash map)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If found, replaces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$name"
        }), " with its value (text substitution)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If not found, replaces with empty string (or error with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set -u"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performs word splitting on the expanded result"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performs glob expansion on the resulting words"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executes the final command"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function expand_variable(var_name, shell_state):\n    if var_name in shell_state.variables:\n        return shell_state.variables[var_name]\n    else if set_u_enabled:\n        raise UnboundVariableError(var_name)\n    else:\n        return \"\"   # silently empty\n\nfunction assign_variable(name, value, shell_state):\n    if readonly_flag(name, shell_state):\n        raise ReadonlyError(name)\n    shell_state.variables[name] = value\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Variable Assignment and Expansion"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Code                   | state[\"name\"] | state[\"count\"] | Output\n1    | name=\"Alice\"          | \"Alice\"       | unset          |\n2    | count=10              | \"Alice\"       | \"10\"           |\n3    | echo \"Hello $name\"    | \"Alice\"       | \"10\"           | Hello Alice\n4    | sum=$((count + 5))    | \"Alice\"       | \"10\"           |\n5    | echo $sum             | \"Alice\"       | \"10\"           | 15\n6    | echo \"count=$count\"   | \"Alice\"       | \"10\"           | count=10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variable-types-and-operations",
      children: "Variable Types and Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# --- Assignment (NO spaces around =) ---\nname=\"Alice\"\ncount=10\ngreeting=\"Hello, $name!\"   # Variable expansion in double quotes\nliteral='Hello, $name!'    # Single quotes: literal $name\n\n# --- Read-only variable ---\nreadonly pi=3.14159\n# pi=3.14  # ERROR: readonly variable\n\n# --- Environment variables ---\nexport PATH=\"$PATH:/custom/bin\"\nexport APP_ENV=\"production\"\n\n# --- Command substitution (two syntaxes) ---\ntoday=$(date +%Y-%m-%d)       # Modern syntax (preferred)\nalso_today=`date +%Y-%m-%d`   # Legacy backtick syntax\n\n# --- Arithmetic ---\nsum=$((count + 5))\nproduct=$((4 * 7))\nmod=$((17 % 3))\n\n# --- Variable expansion modifiers ---\nfilename=\"photo.jpg\"\necho \"${filename%.jpg}.png\"   # photo.png (remove suffix)\necho \"${filename#photo}\"      # .jpg (remove prefix)\necho \"${filename:0:5}\"        # photo (substring, offset 0 length 5)\n\n# --- Default values ---\necho \"${username:-guest}\"     # Use \"guest\" if username is unset/null\necho \"${username:=guest}\"     # Assign \"guest\" to username if unset\necho \"${username:?Error: username required}\"  # Error exit if unset\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash variables.sh\nHello, Alice!\nHello, $name!\nphoto.png\n.jpg\nphoto\nguest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "special-variables-reference",
      children: "Special Variables Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "echo \"Script name:  $0\"       # ./script.sh\necho \"First arg:    $1\"       # first positional parameter\necho \"Second arg:   $2\"       # second positional parameter\necho \"All args (\\$@): $@\"     # \"arg1 arg2 arg3\" (individual words)\necho \"All args (\\$*): $*\"     # \"arg1 arg2 arg3\" (single word)\necho \"Args count:   $#\"       # 3\necho \"Exit code:    $?\"       # 0 (success) or nonzero\necho \"PID:          $$\"       # 1234 (current script PID)\necho \"Last BG PID:  $!\"       # 1235 (last background process PID)\necho \"Options flag: $-\"       # hB (current shell option flags)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variables--complexity--ad",
      children: "Variables — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — hash map insertion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expansion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(v) where v = value length (string copy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Command Substitution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + s) — fork + n commands + s output reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why O(1) assignment?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell uses hash table for variable storage; average O(1) lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Spaces in values"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "name=John Doe"
            }), " sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name=John"
            }), " and tries to run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Doe"
            }), " — QUOTE!"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Unset variable"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set -u"
            }), ": fatal error. Without: expands to empty string"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Export scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exported vars go to child processes only; parent unaffected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Readonly override"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attempting to modify readonly var kills script (cannot trap)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D Table"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic typing (no type declarations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All values are strings (even numbers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy interpolation in strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No native boolean type (use 0/1 or \"true\"/\"false\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful modifier syntax (%, #, :)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifiers are easy to forget or confuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Indirect expansion (", (0,jsx_runtime.jsx)(_components.code, {
              children: "${!var}"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No structured data beyond arrays"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\n\n# --- Assignment ---\nname = \"Alice\"\ncount = 10\n\n# --- String interpolation ---\ngreeting = f\"Hello, {name}!\"\n\n# --- Environment variables ---\nos.environ[\"APP_ENV\"] = \"production\"\n\n# --- Command substitution equivalent ---\nimport subprocess\ntoday = subprocess.run(\n    [\"date\", \"+%Y-%m-%d\"],\n    capture_output=True, text=True\n).stdout.strip()\n\n# --- Default values ---\nusername = os.environ.get(\"username\", \"guest\")\n\n# --- Substring ---\nfilename = \"photo.jpg\"\nprint(filename[:-4] + \".png\")  # photo.png\nprint(filename[:5])            # photo\n\n# --- Special variables equivalent ---\nimport sys\nscript_name = sys.argv[0]\nfirst_arg = sys.argv[1] if len(sys.argv) > 1 else None\nargs_count = len(sys.argv) - 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-3-operators",
      children: "Section 3: Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arithmetic-operators",
      children: "Arithmetic Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\na=10\nb=3\n\n# Integer arithmetic with $(( ))\necho $((a + b))    # 13  Addition\necho $((a - b))    # 7   Subtraction\necho $((a * b))    # 30  Multiplication\necho $((a / b))    # 3   Integer division (truncates)\necho $((a % b))    # 1   Modulus\necho $((a ** b))   # 1000  Exponentiation (Bash 4+)\n\n# Increment/decrement\necho $((a++))      # 10 (post-increment)\necho $((++a))      # 12 (pre-increment after post)\necho $((a--))      # 12 (post-decrement)\n\n# Compound assignment\n((a += 5))   # a = a + 5\n((a *= 2))   # a = a * 2\n((a -= 3))   # a = a - 3\n\n# Bitwise operators\necho $((a & b))    # AND    → bitwise\necho $((a | b))    # OR     → bitwise\necho $((a ^ b))    # XOR    → bitwise\necho $((a << 1))   # Left shift\necho $((a >> 1))   # Right shift\necho $((~a))       # Bitwise NOT\n\n# Using let (older syntax)\nlet sum=a+b\nlet count++\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Arithmetic operators are like a calculator's button panel. Each button performs a specific mathematical transformation on the displayed value. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$(( ))"
      }), " syntax is like locking the calculator into \"math mode\" so the shell knows to interpret symbols as operations rather than literal text."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Arithmetic Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Expression      | a | b | Result | Note\n1    | a=10           | 10| ? |        | Assignment\n2    | b=3            | 10| 3 |        | Assignment\n3    | $((a + b))     | 10| 3 | 13     | Addition\n4    | $((a / b))     | 10| 3 | 3      | Truncation!\n5    | $((a % b))     | 10| 3 | 1      | Remainder\n6    | $((a ** 2))    | 10| 3 | 100    | Exponentiation\n7    | ((a += 5))     | 15| 3 |        | Compound, no output\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Division by zero: causes fatal error, script terminates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Floating point: NOT supported - use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bc"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "awk"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overflow: Bash uses 64-bit signed integers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Leading zeros: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "08"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "09"
        }), " cause errors in some contexts (treated as octal)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-operators",
      children: "Comparison Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Integer comparison in [ ]\n# -eq, -ne, -lt, -le, -gt, -ge\n[ \"$a\" -eq \"$b\" ]   # Equal\n[ \"$a\" -ne \"$b\" ]   # Not equal\n[ \"$a\" -lt \"$b\" ]   # Less than\n[ \"$a\" -le \"$b\" ]   # Less than or equal\n[ \"$a\" -gt \"$b\" ]   # Greater than\n[ \"$a\" -ge \"$b\" ]   # Greater than or equal\n\n# String comparison in [ ]\n[ \"$a\" = \"$b\" ]     # Equal (single = for POSIX)\n[ \"$a\" != \"$b\" ]    # Not equal\n[ -z \"$a\" ]         # True if a is empty (zero length)\n[ -n \"$a\" ]         # True if a is non-empty\n\n# Integer comparison in (( )) — C-style\n(( a == b ))        # Equal\n(( a != b ))        # Not equal\n(( a < b ))         # Less than\n(( a <= b ))        # Less than or equal\n(( a > b ))         # Greater than\n(( a >= b ))        # Greater than or equal\n\n# String comparison in [[ ]] — pattern matching\n[[ \"$a\" == \"$b\" ]]   # Equal\n[[ \"$a\" != \"$b\" ]]   # Not equal\n[[ \"$a\" < \"$b\" ]]    # Lexicographic less than\n[[ \"$a\" > \"$b\" ]]    # Lexicographic greater than\n[[ \"$a\" == foo* ]]   # Glob pattern match\n[[ \"$a\" =~ ^foo ]]   # Regex match (Bash 3+)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Comparison operators are like a quality inspection station. Each part (variable) is measured against a specification (the value being compared). The operator determines what kind of measurement check is performed: \"is this exactly equal?\", \"is it larger?\", \"does it match the pattern template?\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logical-operators",
      children: "Logical Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# AND\n[ \"$a\" -gt 0 ] && [ \"$b\" -lt 10 ]    # In separate [ ]\n[[ \"$a\" -gt 0 && \"$b\" -lt 10 ]]      # In [[ ]] (single test)\n(( a > 0 && b < 10 ))                # In (( ))\n\n# OR\n[ \"$a\" -gt 0 ] || [ \"$b\" -lt 10 ]\n\n# NOT\n[ ! -f \"$file\" ]                     # True if file does NOT exist\n\n# Ternary-like behavior with && and ||\n[ -f \"$file\" ] && echo \"exists\" || echo \"missing\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operators--complexity--ad",
      children: "Operators — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arithmetic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — integer ops are constant time on CPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "String Comparison"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(n,m)) — character-by-character comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Regex Match (=~)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * p) worst case where p = pattern complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Floating point"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "$(( ))"
            }), " truncates — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bc -l"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "awk"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Octal confusion"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "08"
            }), " is invalid octal — force base 10 with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10#08"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: [[ vs [ speed]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[[ is built-in (no fork); [ is external on some shells"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-4-conditionals",
      children: "Section 4: Conditionals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ifthenelifelse",
      children: "if/then/elif/else"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A conditional is like an airport baggage sorting system. Each bag (the value being tested) travels down a conveyor belt (the script). At each junction (if statement), a sensor checks a property of the bag (file exists? string equals?). Based on the sensor reading, the bag is diverted to a specific chute (then/elif/else branch)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — if Statement Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shell evaluates the test command (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[ ... ]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[ ... ]]"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(( ... ))"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If exit code is 0 (success/true), execute the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "then"
        }), " block"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If exit code is non-zero (failure/false), skip to next ", (0,jsx_runtime.jsx)(_components.code, {
          children: "elif"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At ", (0,jsx_runtime.jsx)(_components.code, {
          children: "elif"
        }), ", evaluate a second test condition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no condition matches, execute the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " block"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Continue after the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fi"
        }), " marker"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function evaluate_if(conditions, shell_state):\n    for (test_cmd, block) in zip(conditions, blocks):\n        exit_code = execute_and_get_exit_code(test_cmd)\n        if exit_code == 0:       # true\n            execute_block(block)\n            return\n    # Optional else\n    if else_block exists:\n        execute_block(else_block)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — File Check Conditional"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Code                          | $?  | file exists? | Action\n1    | if [ -f /etc/hosts ]         |     |              | Evaluate test\n2    | test /etc/hosts exists        | 0   | yes          | Test returns 0\n3    | then echo \"found\"             |     |              | Execute then block\n4    | Output: \"found\"               |     |              |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Basic if/then/elif/else\nif [ \"$1\" = \"start\" ]; then\n    echo \"Starting...\"\nelif [ \"$1\" = \"stop\" ]; then\n    echo \"Stopping...\"\nelif [ \"$1\" = \"restart\" ]; then\n    echo \"Restarting...\"\n    $0 stop\n    $0 start\nelse\n    echo \"Usage: $0 {start|stop|restart}\"\n    exit 1\nfi\n\n# File tests\nif [ -f /etc/passwd ]; then\n    echo \"Password file exists\"\nfi\n\nif [ -d /tmp ]; then\n    echo \"/tmp is a directory\"\nfi\n\n# Logical combination\nif [ -f \"$file\" ] && [ -r \"$file\" ]; then\n    echo \"File exists and is readable\"\nfi\n\n# [[ ]] — extended test (Bash-only)\nif [[ \"$name\" == A* ]]; then\n    echo \"Name starts with A\"\nfi\n\nif [[ \"$response\" =~ ^[Yy](es)?$ ]]; then\n    echo \"User confirmed\"\nfi\n\n# (( )) — arithmetic test\nif (( a > 10 )); then\n    echo \"a is greater than 10\"\nfi\n\n# Testing command success\nif grep -q \"error\" logfile; then\n    echo \"Errors found!\"\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash conditionals.sh start\nStarting...\n\n$ bash conditionals.sh restart\nStopping...\nStarting...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-statement",
      children: "case Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\ncase \"$1\" in\n    start|begin)\n        echo \"Starting...\"\n        echo \"Service launched\"\n        ;;\n    stop|end)\n        echo \"Stopping...\"\n        ;;\n    restart)\n        $0 stop\n        $0 start\n        ;;\n    --verbose|-v)\n        echo \"Verbose mode\"\n        ;;\n    [0-9][0-9])\n        echo \"Two-digit number: $1\"\n        ;;\n    *)\n        echo \"Unknown: $1\"\n        exit 1\n        ;;\nesac\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "case"
      }), " statement is like a hotel room key card dispenser. You insert a card (the value), and depending on which floor number is encoded, it activates only that floor's button on the elevator. No if-else chain needed — direct matching."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — case Statement"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Code                     | $1    | Matches? | Action\n1    | case \"$1\" in             | start |          | Evaluate\n2    | start|begin)             | start | YES      | Match found\n3    | echo \"Starting...\"       |       |          | Execute block\n4    | ;;                       |       |          | Break out of case\n5    | Output: \"Starting...\"    |       |          |\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditional--complexity--ad",
      children: "Conditional — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "if/elif chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = number of conditions (sequential evaluation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "case statement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) average where m = pattern count (linear scan, optimized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern match (==)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) glob match on string length n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Regex match (=~)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*p) worst case regex backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why case over if?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More readable for multi-way branches; supports pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Missing then"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Syntax error — each ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), " needs a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "then"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Space in [ ]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[$a=$b]"
            }), " is wrong; must be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[ \"$a\" = \"$b\" ]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Forgotten fi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell reports \"unexpected end of file\" at end of script"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Empty string test"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[ \"$var\" = \"\" ]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[ -z \"$var\" ]"
            }), " — both check emptiness"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\n\naction = sys.argv[1] if len(sys.argv) > 1 else \"\"\n\n# Equivalent to case statement\nmatch action:\n    case \"start\" | \"begin\":\n        print(\"Starting...\")\n    case \"stop\" | \"end\":\n        print(\"Stopping...\")\n    case \"restart\":\n        subprocess.run([sys.argv[0], \"stop\"])\n        subprocess.run([sys.argv[0], \"start\"])\n    case _:\n        print(f\"Unknown: {action}\")\n        sys.exit(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-5-loops",
      children: "Section 5: Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-loop",
      children: "for Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop is like a factory conveyor belt where each item passes under a sensor that performs the same operation. The belt runs once per item, processes it, and moves on. When the belt is empty (no more items), it stops automatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — for Loop"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct the list of words to iterate over (brace expansion, glob, or explicit list, command output)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign the first word to the loop variable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the loop body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign the next word to the loop variable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat steps 3-4 until no words remain"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Continue after the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "done"
        }), " marker"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function for_loop(word_list, body_function, shell_state):\n    for word in word_list:\n        shell_state.variables[\"loop_var\"] = word\n        exit_code = body_function(word, shell_state)\n        if exit_code != 0:\n            return exit_code\n    return 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — for Loop with Range"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | i   | Condition      | Body Output\n1    | 0   | i=0            |\n2    | 0   | Loop body      | \"Number: 0\"\n3    | 1   | i++ → i=1      |\n4    | 1   | Loop body      | \"Number: 1\"\n5    | 2   | i++ → i=2      |\n...  | ... | ...            | ...\n6    | 9   | Loop body      | \"Number: 9\"\n7    | 10  | 10 < 10 false  | Loop exits\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# for loop over explicit list\nfor color in red green blue yellow; do\n    echo \"Color: $color\"\ndone\n\n# for loop over brace expansion\nfor i in {1..5}; do\n    echo \"Number: $i\"\ndone\n\n# for loop with step (Bash 4+)\nfor i in {1..10..2}; do\n    echo \"Odd: $i\"\ndone\n\n# for loop over glob results (files)\nfor file in *.txt; do\n    echo \"Text file: $file\"\n    wc -l \"$file\"\ndone\n\n# for loop over command output\nfor user in $(cut -d: -f1 /etc/passwd); do\n    echo \"User: $user\"\ndone\n\n# C-style for loop\nfor ((i=0; i<10; i++)); do\n    echo \"i = $i\"\ndone\n\n# For loop with array\nfruits=(\"apple\" \"banana\" \"cherry\")\nfor fruit in \"${fruits[@]}\"; do\n    echo \"Fruit: $fruit\"\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash forloop.sh\nColor: red\nColor: green\nColor: blue\nColor: yellow\nNumber: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5\nOdd: 1\nOdd: 3\nOdd: 5\nOdd: 7\nOdd: 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "while-and-until-loops",
      children: "while and until Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# while loop — runs while condition is true\ncount=0\nwhile [ $count -lt 5 ]; do\n    echo \"Count: $count\"\n    count=$((count + 1))\ndone\n\n# Reading a file line by line (idiomatic)\nwhile IFS= read -r line; do\n    echo \"Line: $line\"\ndone < \"input.txt\"\n\n# Infinite loop with break\nwhile true; do\n    read -p \"Enter input (q to quit): \" input\n    [ \"$input\" = \"q\" ] && break\n    echo \"You said: $input\"\ndone\n\n# until loop — runs until condition becomes true\ncount=10\nuntil [ $count -eq 0 ]; do\n    echo \"Countdown: $count\"\n    count=$((count - 1))\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy (while)"
      }), ": A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop is a bouncer at a club door checking IDs. While each person has a valid ID (condition is true), they're allowed in (the body executes). The first person without ID stops the process entirely."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — while Loop with Counter"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | count | Condition: count < 5 | Output        | Action\n1    | 0     | 0 < 5 = TRUE         | \"Count: 0\"    | Enter body\n2    | 1     | 1 < 5 = TRUE         | \"Count: 1\"    | count++\n3    | 2     | 2 < 5 = TRUE         | \"Count: 2\"    | count++\n4    | 3     | 3 < 5 = TRUE         | \"Count: 3\"    | count++\n5    | 4     | 4 < 5 = TRUE         | \"Count: 4\"    | count++\n6    | 5     | 5 < 5 = FALSE        |               | Exit loop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-control-break-and-continue",
      children: "Loop Control: break and continue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "for i in {1..10}; do\n    if [ $i -eq 5 ]; then\n        break      # Exit loop entirely when i=5\n    fi\n    echo \"i = $i\"\ndone\n# Output: i=1, i=2, i=3, i=4\n\nfor i in {1..10}; do\n    if [ $((i % 2)) -eq 0 ]; then\n        continue   # Skip even numbers\n    fi\n    echo \"Odd: $i\"\ndone\n# Output: Odd: 1, 3, 5, 7, 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loops--complexity--ad",
      children: "Loops — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "for over list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * b) where n = items, b = body complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "while/until"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(t * b) where t = iterations until termination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reading file line by line"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(l) where l = lines (one read per line)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Word splitting"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for x in $(cat file)"
            }), " splits on IFS, not lines — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read -r"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Edge: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "for file in $(ls)"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEVER — breaks with spaces, newlines, special chars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: IFS= read -r"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves leading/trailing whitespace and backslashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Empty loop body"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "; done"
            }), " works but semicolons or newline before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "done"
            }), " required"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Off-by-one"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "while [ $i -le 10 ]"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-lt"
            }), " — careful with boundary"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# for loop over list\nfor color in [\"red\", \"green\", \"blue\"]:\n    print(f\"Color: {color}\")\n\n# for loop with range\nfor i in range(1, 11):\n    print(f\"Number: {i}\")\n\n# Step range\nfor i in range(1, 11, 2):\n    print(f\"Odd: {i}\")\n\n# Glob equivalent\nimport glob\nfor file in glob.glob(\"*.txt\"):\n    print(f\"Text file: {file}\")\n\n# while loop\ncount = 0\nwhile count < 5:\n    print(f\"Count: {count}\")\n    count += 1\n\n# Reading file line by line\nwith open(\"input.txt\") as f:\n    for line in f:\n        print(f\"Line: {line.rstrip()}\")\n\n# break and continue\nfor i in range(1, 11):\n    if i == 5:\n        break\n    print(f\"i = {i}\")\n\nfor i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(f\"Odd: {i}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-6-functions",
      children: "Section 6: Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "function-definition-and-invocation",
      children: "Function Definition and Invocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A function is like a recipe card in a kitchen. The card lists ingredients (parameters) and instructions (body). A cook (the script) can use the same card repeatedly with different ingredients without rewriting the steps. Some cards produce a finished dish (return value), others just perform actions (void functions)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Function Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Function definition is read and stored in memory (not executed yet)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When called, positional parameters ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$2"
        }), ", ... are set to the arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$0"
        }), " remains the script name (not the function name)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "local"
        }), " variables are created in a new scope"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Body commands are executed sequentially"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " sets exit code and exits function (optional)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Original positional parameters are restored"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function define_function(name, body, shell_state):\n    shell_state.functions[name] = body\n\nfunction call_function(name, args, shell_state):\n    if name not in shell_state.functions:\n        raise CommandNotFoundError(name)\n    saved_params = shell_state.positional_params\n    shell_state.positional_params = args\n    push_new_scope()\n    exit_code = execute_block(shell_state.functions[name])\n    pop_scope()\n    shell_state.positional_params = saved_params\n    return exit_code\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Function Call"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Code                      | $1      | Local name | Output\n1    | greet() { ... }            |         |            | Function stored\n2    | greet \"World\"              | \"World\" |            | Call with arg\n3    | local name=\"$1\"            | \"World\" | \"World\"    | Local var created\n4    | echo \"Hello, $name!\"       | \"World\" | \"World\"    | \n5    | Output:                    |         |            | Hello, World!\n6    | Function returns           |         |            | Scope restored\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Function definition (two syntaxes)\ngreet() {\n    local name=\"$1\"        # local variable — scoped to function\n    echo \"Hello, $name!\"\n}\n\nfunction error_exit {\n    echo \"ERROR: $1\" >&2\n    exit 1\n}\n\n# Functions returning exit codes\nis_even() {\n    [ $(( $1 % 2 )) -eq 0 ]\n    return $?              # return is optional; last exit code used\n}\n\nis_even_number() {\n    local num=$1\n    if [ $((num % 2)) -eq 0 ]; then\n        return 0           # 0 = success/true in shell\n    else\n        return 1           # non-zero = failure/false\n    fi\n}\n\n# Function with output capture (stdout as \"return value\")\nget_date() {\n    echo \"$(date +%Y-%m-%d)\"\n}\n\n# Calling functions\ngreet \"World\"\nerror_exit \"Critical failure\"   # This will terminate the script\n\nif is_even 42; then\n    echo \"42 is even\"\nfi\n\ntoday=$(get_date)\necho \"Today is $today\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash functions.sh\nHello, World!\nERROR: Critical failure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variable-scope-in-functions",
      children: "Variable Scope in Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\nglobal_var=\"I am global\"\n\nmy_func() {\n    local local_var=\"I am local\"\n    global_var=\"Modified by function\"   # Modifies global\n    echo \"Inside: local_var=$local_var\"\n    echo \"Inside: global_var=$global_var\"\n}\n\nmy_func\necho \"Outside: global_var=$global_var\"\necho \"Outside: local_var=$local_var\"    # Empty — scope lost\n\n# Output:\n# Inside: local_var=I am local\n# Inside: global_var=Modified by function\n# Outside: global_var=Modified by function\n# Outside: local_var=\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functions--complexity--ad",
      children: "Functions — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — stored in shell function table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Call overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — scope push/pop and param shift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return value"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only integers 0-255 via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            }), "; strings via stdout capture"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Missing return"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit code is from last executed command"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Return vs exit"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            }), " exits function; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exit"
            }), " kills the entire script"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: local keyword"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not POSIX — use subshell ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(...)"
            }), " for portable local scope"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Recursion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported but stack depth limited (~10k in Bash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Function name collision"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Functions shadow external commands — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls() { echo \"noop\"; }"
            }), " breaks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def greet(name):\n    \"\"\"Function with parameter and local scope\"\"\"\n    message = f\"Hello, {name}!\"\n    print(message)\n\ndef is_even(num):\n    \"\"\"Return boolean from function\"\"\"\n    return num % 2 == 0\n\ndef get_date():\n    \"\"\"Return string from function\"\"\"\n    from datetime import date\n    return date.today().isoformat()\n\n# Calling functions\ngreet(\"World\")\n\nif is_even(42):\n    print(\"42 is even\")\n\ntoday = get_date()\nprint(f\"Today is {today}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-7-io-redirection",
      children: "Section 7: I/O Redirection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-descriptors",
      children: "File Descriptors"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Number"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": File descriptors are like colored pipes in a factory. The white pipe (stdin) brings raw materials in. The green pipe (stdout) sends finished products out. The red pipe (stderr) sends waste and error alerts. Redirection is a valve that re-routes material between pipes or to/from storage tanks (files)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Output Redirection"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shell opens (or creates) the target file"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">"
        }), ", the file is truncated to zero length"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">>"
        }), ", the file is opened for append"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File descriptor 1 (stdout) is dup2'd to the opened file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The command executes; all stdout output goes to the file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The original stdout is restored after the command"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function redirect_output(file_path, mode, command_function):\n    if mode == \"overwrite\":\n        fd = open(file_path, O_WRONLY|O_CREAT|O_TRUNC, 0644)\n    elif mode == \"append\":\n        fd = open(file_path, O_WRONLY|O_CREAT|O_APPEND, 0644)\n    saved_stdout = dup(1)        # Save original stdout\n    dup2(fd, 1)                  # Replace stdout with file\n    execute_command(command_function)\n    dup2(saved_stdout, 1)        # Restore stdout\n    close(fd)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Redirection"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Operation           | FD 0 (stdin) | FD 1 (stdout) | FD 2 (stderr)\n1    | Default state       | keyboard     | screen        | screen\n2    | command > out.txt   | keyboard     | out.txt       | screen\n3    | echo \"hello\" runs   | keyboard     | \"hello\"→file | screen\n4    | After command       | keyboard     | screen        | screen\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "redirection-operators",
      children: "Redirection Operators"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd > file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout → file (overwrite)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd >> file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout → file (append)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd < file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin ← file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Here-document"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd << EOF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin ← inline text until delimiter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Here-string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd <<< \"text\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdin ← single string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stderr redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd 2> file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr → file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2>>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append stderr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd 2>> file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr → file (append)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd &> file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout + stderr → file (Bash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternate both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd >& file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout + stderr → file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2>&1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge stderr→stdout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd 2>&1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr → same as stdout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1>&2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge stdout→stderr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd 1>&2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout → same as stderr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">/dev/null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discard stdout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd >/dev/null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout → void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2>/dev/null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discard stderr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd 2>/dev/null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stderr → void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&>/dev/null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discard both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cmd &>/dev/null"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stdout + stderr → void"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Output redirection\nls > files.txt                 # stdout to file (overwrite)\necho \"new line\" >> files.txt   # stdout to file (append)\n\n# Input redirection\nsort < unsorted.txt            # stdin from file\ntr 'a-z' 'A-Z' < input.txt    # Transform stdin from file\n\n# Here document — inline multi-line input\ncat << EOF\nThis is a multi-line\n\"here document\" that\npreserves whitespace.\nEOF\n\n# Here document with indentation (<<-)\ncat <<- END\n    This text is indented with tabs\n    The <<- strips leading tabs.\nEND\n\n# Here string — single-line input\ngrep \"error\" <<< \"line 1: error found\nline 2: ok\"\n\n# Discard output to /dev/null\ncommand > /dev/null         # Suppress stdout only\ncommand 2> /dev/null        # Suppress stderr only\ncommand &> /dev/null        # Suppress both stdout and stderr\n\n# File descriptor manipulation\ncommand 2>&1                # Merge stderr into stdout stream\ncommand 2>&1 | less         # Both stdout and stderr through pager\n\n# Redirect to stdout/stderr explicitly\necho \"Error occurred\" >&2   # Write to stderr\n\n# Exec with redirection — redirect for the rest of the script\nexec > logfile 2>&1         # All subsequent output to logfile\necho \"This goes to logfile\"\necho \"So does this error\" >&2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash heredoc.sh\nThis is a multi-line\n\"here document\" that\npreserves whitespace.\n\n$ grep \"error\" <<< \"test line\"\n(no output — no match)\n\n$ grep \"error\" <<< \"this line has an error\"\nthis line has an error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "named-pipes-fifos",
      children: "Named Pipes (FIFOs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A named pipe is a filesystem entry that acts as a pipe between processes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Create a named pipe\nmkfifo mypipe\n\n# Reader in background\ncat mypipe &\n\n# Writer\necho \"Hello through pipe\" > mypipe\n\n# Cleanup\nwait\nrm mypipe\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A named pipe is like a physical mail slot between two rooms. Process A drops a letter (data) into the slot. Process B retrieves it from the other side. Unlike a regular pipe (which is a temporary tube), a named pipe persists in the wall — anyone who knows the slot's location can use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "io-redirection--complexity--ad",
      children: "I/O Redirection — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) system call (dup2) — constant overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Here-document"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = document size (written to temp file first)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pipe overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b) buffer copy between processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Edge: ", (0,jsx_runtime.jsx)(_components.code, {
                children: ">"
              }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
                children: ">>"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncation vs append — choose carefully for logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Edge: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "&>"
              }), " portability"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not POSIX — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "2>&1"
            }), " for maximum portability"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Here-doc delimiter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be on its own line with no trailing whitespace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Here-doc quoting"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<< 'EOF'"
            }), " prevents variable expansion; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<< EOF"
            }), " expands"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: clobber prevention"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "set -o noclobber"
            }), " prevents ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            }), " from overwriting existing files"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: stdout buffering"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Output may be buffered in pipes — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stdbuf"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unbuffer"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Output redirection\nwith open(\"files.txt\", \"w\") as f:\n    import subprocess\n    subprocess.run([\"ls\"], stdout=f)\n\n# Append\nwith open(\"files.txt\", \"a\") as f:\n    f.write(\"new line\\n\")\n\n# Input redirection\nwith open(\"unsorted.txt\") as f:\n    lines = sorted(f.readlines())\n\n# Here-document equivalent\ntext = \"\"\"\nThis is a multi-line\ndocument that\npreserves whitespace.\n\"\"\"\nprint(text)\n\n# stderr redirect\nimport sys\nprint(\"Error occurred\", file=sys.stderr)\n\n# Discard output\nsubprocess.run([\"command\"], stdout=subprocess.DEVNULL)\n\n# Merge stderr into stdout\nresult = subprocess.run(\n    [\"command\"],\n    capture_output=True, text=True,\n    stderr=subprocess.STDOUT\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-8-pipes-and-pipelines",
      children: "Section 8: Pipes and Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-pipes",
      children: "Basic Pipes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pipes connect the standard output of one command to the standard input of another:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Syntax: cmd1 | cmd2 | cmd3\nps aux | grep firefox\ncat access.log | grep \"404\" | wc -l\nsort data.txt | uniq -c | sort -rn | head -10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A pipe is like an assembly line in a car factory. Station 1 (ps aux) builds the chassis. Station 2 (grep) installs specific parts. Station 3 (wc -l) counts the completed cars. Each station receives the output of the previous one as its input, operating simultaneously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Pipeline Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shell creates a pipe (in-memory buffer with two file descriptors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forks a process for each command in the pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each command, connects its stdin to the pipe's read end (except first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each command, connects its stdout to the pipe's write end (except last)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All processes run in parallel, not sequentially"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pipe buffer (typically 64KB on Linux) holds data between producer and consumer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shell waits for all processes in the pipeline to finish"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function execute_pipeline(commands):\n    n = len(commands)\n    pipes = [create_pipe() for _ in range(n-1)]\n    \n    for i in range(n):\n        pid = fork()\n        if pid == 0:                    # Child\n            if i > 0:                   # Not first: read from prev pipe\n                dup2(pipes[i-1].read_fd, STDIN_FILENO)\n            if i < n-1:                 # Not last: write to next pipe\n                dup2(pipes[i].write_fd, STDOUT_FILENO)\n            close_all_pipe_fds()\n            exec(commands[i])\n        \n    close_all_pipe_fds()\n    for i in range(n):                  # Parent waits\n        waitpid(children[i])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Pipeline: grep \"error\" log.txt | wc -l"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Component          | Action\n1    | Shell              | Creates pipe with fd[0] (read) and fd[1] (write)\n2    | Fork grep          | PID=100: stdout → pipe write end\n3    | Fork wc            | PID=101: stdin ← pipe read end\n4    | grep \"error\" runs | Reads log.txt, writes matching lines to pipe\n5    | wc -l runs         | Reads lines from pipe, counts them\n6    | grep exits         | Pipe write end closes\n7    | wc finishes        | Reads EOF, prints count, exits\n8    | Shell prints       | Output: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Pipeline examples with analysis\necho \"=== Top 10 CPU-consuming processes ===\"\nps aux --sort=-%cpu | head -11\n\necho \"=== HTTP 404 count ===\"\ncat access.log | grep \" 404 \" | wc -l\n\necho \"=== Most frequent IPs ===\"\nawk '{print $1}' access.log | sort | uniq -c | sort -rn | head -5\n\necho \"=== Sorted file sizes ===\"\nls -l | awk '{print $5, $9}' | sort -rn\n\necho \"=== Pipeline with stderr merge ===\"\nfind / -name \"*.conf\" 2>&1 | head -5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash pipelines.sh\n=== Top 10 CPU-consuming processes ===\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.3  56780  6780 ?        Ss   10:00   0:02 systemd\n...\n\n=== HTTP 404 count ===\n42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pipeline-characteristics-and-pitfalls",
      children: "Pipeline Characteristics and Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Exit code of pipeline is exit code of LAST command\nfalse | true    # Exit code = 0 (true's exit code)\nset -o pipefail # Makes pipeline fail if ANY command fails\nfalse | true    # Exit code = 1 (with pipefail)\n\n# Midnight commander pattern: tee to see intermediate output\necho \"data\" | tee /tmp/debug.txt | wc -c\n\n# Multiple input streams\n{ echo \"header\"; cat data.txt; echo \"footer\"; } | wc -l\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pipes--complexity--ad",
      children: "Pipes — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel — all commands run simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffer size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64KB default pipe capacity on Linux"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(max(t1, t2, ..., tn)) — dominated by slowest command"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(buf) — buffered between processes, not entire dataset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: pipefail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without it, pipe exit code is from last command only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: SIGPIPE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If reader closes pipe, writer gets SIGPIPE (exit 141)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Broken pipe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Large data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipes avoid temp files — use for streaming large datasets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-9-filters",
      children: "Section 9: Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters are commands that read stdin and write to stdout, designed for use in pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-filter-commands",
      children: "Common Filter Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# head / tail — select portions of input\nhead -n 20 file.txt          # First 20 lines\ntail -n 20 file.txt          # Last 20 lines\ntail -f /var/log/syslog      # Follow growing file\nhead -n -5 file.txt          # All except last 5 lines\ntail -n +5 file.txt          # All from line 5 onwards\n\n# sort — order lines\nsort file.txt                # Alphabetical\nsort -n file.txt             # Numeric\nsort -r file.txt             # Reverse\nsort -u file.txt             # Unique (same as sort | uniq)\nsort -t: -k3 -n /etc/passwd # Sort by field 3, colon-separated\nsort -k2,2 -k1,1 file.txt   # Sort by field 2, then field 1\n\n# uniq — remove/find duplicates (requires sorted input)\nuniq file.txt                # Remove adjacent duplicates\nuniq -c file.txt             # Count occurrences\nuniq -d file.txt             # Only duplicates\nuniq -u file.txt             # Only unique lines\n\n# cut — extract columns\ncut -d: -f1,3 /etc/passwd    # Fields 1 and 3 (colon-separated)\ncut -c1-10 file.txt          # Characters 1-10\ncut -f2-4 data.tsv           # Fields 2-4 (tab-separated default)\n\n# wc — word count\nwc -l file.txt               # Lines\nwc -w file.txt               # Words\nwc -c file.txt               # Characters (bytes)\nwc -m file.txt               # Characters (multi-byte aware)\n\n# tr — translate/delete characters\ntr 'a-z' 'A-Z' < file.txt   # Uppercase\ntr -d ' ' < file.txt         # Delete spaces\ntr -s ' ' < file.txt         # Squeeze repeated spaces\ntr '\\n' ' ' < file.txt       # Replace newlines with spaces\n\n# tee — split output (T-junction)\necho \"data\" | tee file.txt | wc -c    # Write to file AND pipe\ncmd | tee -a log.txt                   # Append to log\n\n# nl — number lines\nnl file.txt                  # Number non-empty lines\nnl -ba file.txt              # Number all lines (including blank)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Filters are like a water treatment plant. Each filter stage handles one specific transformation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sort"
      }), " arranges molecules by size, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "uniq -c"
      }), " counts each type, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cut"
      }), " extracts specific chemical components, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tr"
      }), " converts elements, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wc"
      }), " measures total volume."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ cat data.txt\napple\nbanana\napple\ncherry\nbanana\n\n$ sort data.txt | uniq -c | sort -rn\n   2 banana\n   2 apple\n   1 cherry\n\n$ cut -d: -f1 /etc/passwd | head -3\nroot\ndaemon\nbin\n\n$ echo \"hello world\" | tr 'a-z' 'A-Z'\nHELLO WORLD\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filters--complexity--ad",
      children: "Filters — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "head / tail"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(n, k)) — reads only needed lines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) — merge sort implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "uniq"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — single pass, requires pre-sorted input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cut"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — linear scan per line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "wc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — single pass character/line counting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "tr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — character-by-character translation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "tee"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — stream copy to file and stdout simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why sort needs O(n log n)?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison-based ordering; best possible for comparison sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: sort memory (large files)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses external merge sort with temp files for > memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: uniq needs sorting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without sort, only ADJACENT duplicates removed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: cut delimiter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default is tab, not space. For spaces, use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "awk"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: tr limitations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with single characters only, not strings or patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-10-process-substitution",
      children: "Section 10: Process Substitution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-substitution-bashzsh",
      children: "Process Substitution (Bash/Zsh)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Process substitution feeds the output (or input) of a command as if it were a file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Syntax: <(command) for output, >(command) for input\ndiff <(ls dir1) <(ls dir2)\ngrep \"error\" <(tail -100 logfile)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Process substitution is like a translator who listens to a speech and produces a transcript in real time. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<(command)"
      }), " creates a virtual transcript file from the ongoing speech. Other tools can read this \"file\" as if it were a regular document, without ever saving it to disk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Process Substitution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shell executes the command inside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<( )"
        }), " in a subshell"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shell creates a named pipe (FIFO) or /dev/fd entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The command's stdout is connected to this pipe"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A filename like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/dev/fd/63"
        }), " is substituted in place of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<(command)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The outer command opens this file (the pipe) for reading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data flows from inner command to outer command through the pipe"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function process_substitution(command_str):\n    pipe_fds = create_pipe()\n    if os_type == \"Linux\":\n        # Use /dev/fd/N trick — symlink to pipe fd\n        result = link_to_fd(pipe_fds.read_fd)\n    else:\n        # Fallback: named pipe\n        temp_path = \"/tmp/psub.$$\"\n        mkfifo(temp_path)\n        background_fork → command_str > temp_path\n        result = temp_path\n    \n    return result   # Returns \"path\" that can be used as file arg\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — diff <(ls dir1) <(ls dir2)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Component              | Action\n1    | Shell                  | Evaluates <(ls dir1) → /dev/fd/63\n2    | Shell                  | Evaluates <(ls dir2) → /dev/fd/64\n3    | Fork ls dir1           | PID=100, stdout=63\n4    | Fork ls dir2           | PID=101, stdout=64\n5    | diff reads /dev/fd/63  | Gets listing of dir1\n6    | diff reads /dev/fd/64  | Gets listing of dir2\n7    | ls processes exit      | Pipes close\n8    | diff prints differences | Output to terminal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Compare two directory listings\ndiff <(ls dir1) <(ls dir2)\n\n# Search across multiple files as if one stream\ngrep \"TODO\" <(cat src/*.js) <(cat lib/*.js)\n\n# Process substitution for input to while loop\nwhile IFS= read -r line; do\n    echo \"Remote: $line\"\ndone < <(ssh user@host \"ls /tmp\")\n\n# Using >() for output process substitution\nls -l > >(grep \".txt\" > txt_files.txt) 2>&1\n\n# Complex: diff sorted files without temp files\ndiff <(sort file1.txt) <(sort file2.txt)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "process-substitution--complexity--ad",
      children: "Process Substitution — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) pipe creation + fork per substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data flow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming — no temp file needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not POSIX — Bash/Zsh only; not in /bin/sh"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: /dev/fd on Linux"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works natively; macOS has /dev/fd but may behave differently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Named pipe fallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some systems emulate with temp FIFOs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Multiple reads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data is consumed once (pipe behavior) — can't re-read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Background process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner command runs in background implicitly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import subprocess\n\n# Equivalent to diff <(ls dir1) <(ls dir2)\nresult1 = subprocess.run([\"ls\", \"dir1\"], capture_output=True, text=True)\nresult2 = subprocess.run([\"ls\", \"dir2\"], capture_output=True, text=True)\n\nimport difflib\ndiff = difflib.unified_diff(\n    result1.stdout.splitlines(),\n    result2.stdout.splitlines()\n)\nprint(\"\\n\".join(diff))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-11-job-control",
      children: "Section 11: Job Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "background-and-foreground-processes",
      children: "Background and Foreground Processes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Job control is like a busy chef multitasking in a kitchen. The chef starts boiling water (background — doesn't need attention), then starts chopping vegetables (foreground — needs active attention). The chef can pause chopping (Ctrl+Z) to check the boiling water, then resume chopping. Each active task is a \"job\" the chef tracks."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Background Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shell parses command with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " suffix"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forks a child process (the job)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Job runs in a separate process group"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shell does NOT call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waitpid"
        }), " immediately — returns prompt"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Job continues running in background"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When job finishes, shell prints notification before next prompt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function start_background_job(command):\n    pid = fork()\n    if pid == 0:                         # Child\n        setpgid(0, 0)                    # New process group\n        set_signal(SIGINT, SIG_IGN)      # Ignore Ctrl+C\n        exec(command)\n    # Parent\n    job_id = next_available_job_number()\n    jobs_table[job_id] = {\n        pid: pid,\n        command: command,\n        state: \"Running\",\n        pgid: pid\n    }\n    print_job_info(job_id, pid, command)\n    return prompt()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Job Control"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | User Action          | Shell State               | Output\n1    | sleep 30 &           | Job [1] running (PID 100) | [1] 100\n2    | sleep 60 &           | Job [2] running (PID 101) | [2] 101\n3    | jobs                 | Both running              | [1]- Running sleep 30\n     |                      |                           | [2]+ Running sleep 60\n4    | fg %2                | Job [2] in foreground     | (waits for sleep 60)\n5    | Ctrl+Z               | Job [2] suspended         | [2]+ Stopped sleep 60\n6    | bg %2                | Job [2] running (bg)      | [2] sleep 60 &\n7    | kill %1              | Job [1] terminated        | [1] Terminated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Start a background job\nsleep 30 &\necho \"Background PID: $!\"\n\n# Start multiple jobs\nsleep 60 &\nfind / -name \"*.conf\" > /tmp/conffiles.txt 2>/dev/null &\n\n# List all background jobs\njobs\n# Output: [1]  Running                 sleep 30 &\n#         [2]-  Running                 find / -name \"*.conf\" &>/dev/null &\n\n# Bring specific job to foreground\nfg %1               # Brings job 1 to foreground\n\n# Suspend foreground job with Ctrl+Z\n# [1]+  Stopped                 sleep 30\n\n# Resume suspended job in background\nbg %1\n\n# Terminate a job\nkill %1             # Sends SIGTERM to job 1\nkill -9 %2          # Sends SIGKILL to job 2 (force kill)\n\n# Wait for all background jobs to finish\nwait\n\n# Wait for specific job\nwait %1\n\n# Run immune to hangups\nnohup long_running_command &\n\n# Disown — remove job from shell's job table\ndisown %1           # Job continues running, but shell no longer tracks it\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "job-control-commands",
      children: "Job Control Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
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
              children: "command &"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start in background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep 10 &"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jobs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List background jobs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "jobs -l"
            }), " (show PIDs)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fg %n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bring job n to foreground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fg %1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bg %n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resume suspended job in background"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bg %1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kill %n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send signal to job"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kill -TERM %1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "wait %n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for job to finish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "wait %1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "disown %n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove from job table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "disown"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nohup cmd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run immune to hangups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nohup script.sh &"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+Z"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspend foreground job"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(suspend)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate foreground job"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(terminate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parallel-job-execution-pattern",
      children: "Parallel Job Execution Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Run N jobs in parallel with max concurrency\n\nMAX_JOBS=4\ntask_completed() {\n    echo \"Task $1 completed\"\n}\n\n# Launch jobs with concurrency control\nfor i in {1..20}; do\n    # Wait if we already have MAX_JOBS running\n    while [ \"$(jobs -r | wc -l)\" -ge \"$MAX_JOBS\" ]; do\n        sleep 1\n    done\n    \n    # Launch the task\n    (sleep $((RANDOM % 5)); task_completed $i) &\ndone\n\n# Wait for all remaining jobs\nwait\necho \"All tasks completed\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "job-control--complexity--ad",
      children: "Job Control — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fork overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — process creation cost (~us on modern kernels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel scheduler overhead for background processes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel speedup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to N× where N = CPU cores (limited by I/O vs CPU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Zombie processes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unwaited children become zombies — always ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Orphaned jobs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When shell exits, background children get SIGHUP (use nohup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Job number limit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shell-specific limit on tracked jobs (default 1000 in Bash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Race condition"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "wait"
            }), " may miss jobs that finish before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait"
            }), " is reached"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Edge: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "jobs -r"
              }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
                children: "jobs -s"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-r"
            }), " = running, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-s"
            }), " = stopped; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-r"
            }), " for active process count"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-12-signal-handling",
      children: "Section 12: Signal Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signal-concepts",
      children: "Signal Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Signals are software interrupts sent to processes to notify them of events:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Number"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+C — interrupt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGQUIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+\\ — quit with core"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGKILL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force kill (cannot be caught)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTERM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful termination (default for kill)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSTOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+Z (cannot be caught)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTSTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+Z (can be caught)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGHUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hangup — terminal closed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPIPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broken pipe — write to closed pipe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGUSR1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGUSR2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom purpose"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": Signals are like phone calls to a process. SIGTERM is a polite call saying \"please wrap up and close.\" SIGKILL is a SWAT team kicking down the door — no warning, no cleanup. SIGINT (Ctrl+C) is an urgent interruption. SIGTSTP (Ctrl+Z) is \"put that on hold.\" SIGHUP is the landlord evicting you because the building is closing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-trap-command",
      children: "The trap Command"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Cleanup function for graceful termination\ncleanup() {\n    echo \"Cleaning up...\"\n    rm -f /tmp/temp_$$\n    echo \"Done. Exiting.\"\n    exit 0\n}\n\n# Register trap for specific signals\ntrap cleanup SIGINT SIGTERM\n\n# Ignore Ctrl+C completely\ntrap '' SIGINT\n\n# Reset signal handling to default\ntrap - SIGINT\n\n# Trap with multiple signals and custom message\ntrap 'echo \"Error at line $LINENO\"; exit 1' ERR\n\n# Trap script exit (always runs)\ntrap 'echo \"Script finished at $(date)\"' EXIT\n\n# Trap debug — runs before every command\ntrap 'echo \"DEBUG: about to run: $BASH_COMMAND\"' DEBUG\n\n# Main loop\necho \"Running. PID: $$\"\nwhile true; do\n    echo \"Working...\"\n    sleep 2\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — Signal Delivery"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A signal is generated (Ctrl+C → SIGINT sent to foreground process group)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kernel checks process signal disposition (default / ignore / handler)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If handler registered, kernel interrupts process execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process saves context and runs signal handler"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handler executes (e.g., cleans temp files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process returns from handler and resumes normal execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If signal is SIGKILL or SIGSTOP, process cannot intercept"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function deliver_signal(pid, signal_number):\n    pcb = get_process_control_block(pid)\n    \n    if signal_number in {SIGKILL, SIGSTOP}:\n        # Cannot be caught or ignored\n        handle_default(signal_number, pcb)\n        return\n    \n    disposition = pcb.signal_dispositions[signal_number]\n    \n    if disposition == DEFAULT:\n        handle_default(signal_number, pcb)   # Terminate/stop/ignore\n    elif disposition == IGNORE:\n        return                                # Do nothing\n    elif disposition == HANDLER:\n        push_signal_frame(pcb.stack)          # Save context\n        set_pc(pcb, handler_address)          # Jump to handler\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trap on SIGINT"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Event              | Signal | Handler? | Action\n1    | User presses Ctrl+C | SIGINT | cleanup  | Kernel checks disposition\n2    | Kernel routes       | SIGINT | cleanup  | Process interrupted\n3    | cleanup() runs      |        |          | rm -f /tmp/temp_1234\n4    | exit 0 called       |        |          | Script terminates cleanly\n5    | Parent notified     |        |          | Exit code 0 reported\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shell-script-timeout-pattern",
      children: "Shell Script Timeout Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Run a command with timeout\ntimeout_cmd() {\n    local timeout=$1\n    local cmd=\"$2\"\n    \n    # Execute command in background\n    eval \"$cmd\" &\n    local cmd_pid=$!\n    \n    # Wait with timeout\n    local waited=0\n    while [ $waited -lt $timeout ]; do\n        if ! kill -0 $cmd_pid 2>/dev/null; then\n            wait $cmd_pid\n            return $?\n        fi\n        sleep 1\n        waited=$((waited + 1))\n    done\n    \n    # Timeout reached — kill the command\n    kill $cmd_pid 2>/dev/null\n    echo \"TIMEOUT: $cmd exceeded ${timeout}s\" >&2\n    return 124\n}\n\ntimeout_cmd 5 \"sleep 10\"\necho \"Exit code: $?\"   # 124\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signal-handling--complexity--ad",
      children: "Signal Handling — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handler registration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — signal table entry update"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal delivery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — kernel interrupt mechanism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handler execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(h) where h = handler complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Re-entrancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal handler may interrupt itself — use reentrant functions only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Race condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between checking and acting on volatile state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Foreground-only signals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIGINT, SIGTSTP only affect foreground process group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: trap '' vs trap -"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "trap ''"
            }), " = ignore; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "trap -"
            }), " = reset to default"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Background job signals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Background jobs may ignore SIGINT by default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import signal\nimport sys\nimport os\nimport time\n\ndef cleanup_handler(signum, frame):\n    \"\"\"Clean up and exit\"\"\"\n    print(f\"Received signal {signum}\")\n    try:\n        os.remove(f\"/tmp/temp_{os.getpid()}\")\n    except FileNotFoundError:\n        pass\n    print(\"Cleaned up. Exiting.\")\n    sys.exit(0)\n\n# Register signal handlers\nsignal.signal(signal.SIGINT, cleanup_handler)   # Ctrl+C\nsignal.signal(signal.SIGTERM, cleanup_handler)  # kill\n\n# Ignore a signal\nsignal.signal(signal.SIGHUP, signal.SIG_IGN)\n\n# Timeout pattern\nimport subprocess\ntry:\n    result = subprocess.run(\n        [\"sleep\", \"10\"],\n        timeout=5\n    )\nexcept subprocess.TimeoutExpired:\n    print(\"TIMEOUT: command exceeded 5s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-13-regular-expressions",
      children: "Section 13: Regular Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex-in-shell-scripting",
      children: "Regex in Shell Scripting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Regular expressions are patterns that describe text. They are used with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grep -E"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sed"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "awk"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[[ =~ ]]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": A regex is like a stencil for a spray-painting assembly line. The stencil has holes (the pattern) cut in specific shapes. When a text passes under the stencil, only the parts matching the hole shapes get sprayed (matched). Complex patterns like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[A-Z]+"
      }), " are stencils that match any sequence of capital letters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-vs-extended-regex",
      children: "Basic vs Extended Regex"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Basic (BRE)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extended (ERE)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Literal character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Any character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero or more"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One or more"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero or one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alternation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "|"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\\("
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "("
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bracket expr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[abc]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[abc]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start anchor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End anchor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Word boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\b"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-regex-patterns",
      children: "Common Regex Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Matches"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Match"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^[A-Z].*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line starting with capital letter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Hello world"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[0-9]+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One or more digits"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "8675309"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user@example.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https?://[^ ]+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://example.com"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^[ \\t]*$"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blank line (space or tab only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "192.168.1.1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^[^,]+,"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First field in CSV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "field1,"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[aeiou]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any vowel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "e"
            }), " in \"hello\""]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex-in-grep",
      children: "Regex in grep"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Extended regex (−E)\ngrep -E '^[A-Z]' file.txt          # Lines starting with capital letter\ngrep -E '(error|fail)' log.txt     # Lines with \"error\" or \"fail\"\ngrep -E '^.{10,20}$' file.txt      # Lines 10-20 characters long\ngrep -E 'https?://' urls.txt       # Lines with http:// or https://\n\n# Perl-compatible regex (grep -P) — GNU grep\ngrep -P '\\b\\d{3}\\b' file.txt       # Exactly 3-digit numbers\n\n# Regex with context\ngrep -E 'ERROR' -A 2 -B 1 log.txt  # ERROR + 2 lines after + 1 line before\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex-in-sed",
      children: "Regex in sed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# sed with extended regex (-E)\nsed -E 's/[0-9]+/NUM/g' file.txt       # Replace all numbers with \"NUM\"\nsed -E 's/^[ \\t]+//' file.txt          # Strip leading whitespace\nsed -E 's/[ \\t]+$//' file.txt          # Strip trailing whitespace\nsed -E 's/^.*(\".*\").*$/\\1/' file.txt   # Extract first quoted string\nsed -E '/^#|^$/d' config.sh            # Delete comments and blank lines\nsed -E 's/([a-z]+)@([a-z]+)/\\1 at \\2/' # Replace @ with \"at\" in emails\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — sed Substitution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Input line                 | Pattern    | Replacement | Output\n1    | \"error: file not found\"    | s/error/ERROR/ |          | \"ERROR: file not found\"\n2    | \"warning: error in module\" | s/error/ERROR/ |          | \"warning: ERROR in module\"\n3    | \"all ok\"                   | s/error/ERROR/ |          | \"all ok\" (no change)\n4    | \"error error error\"        | s/error/ERROR/g |         | \"ERROR ERROR ERROR\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex-in-awk",
      children: "Regex in awk"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# awk regex matching\nawk '/^[0-9]/ { print NR, $0 }' file.txt   # Lines starting with digit\nawk '$1 ~ /^[A-Z]/ { print }' file.txt     # Field 1 starts with capital\nawk '$1 !~ /^#/ { print }' file.conf       # Lines not starting with #\n\n# Field matching with regex\nawk -F: '$1 ~ /^root/ { print $0 }' /etc/passwd\nawk '$3 ~ /^1/ { print $1, $3 }' data.txt  # Field 3 starts with \"1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex-in-bash---with-",
      children: "Regex in Bash [[ ]] with =~"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Bash regex matching with =~\nif [[ \"$email\" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$ ]]; then\n    echo \"Valid email\"\nfi\n\n# Captured groups with BASH_REMATCH\nif [[ \"Error: file not found\" =~ ^([A-Za-z]+):\\ (.+)$ ]]; then\n    echo \"Type: ${BASH_REMATCH[1]}\"    # \"Error\"\n    echo \"Message: ${BASH_REMATCH[2]}\" # \"file not found\"\nfi\n\n# Regex in case statement (extglob required)\nshopt -s extglob\ncase \"$input\" in\n    +([0-9])) echo \"Number\" ;;\n    +([a-z])) echo \"Lowercase word\" ;;\n    *) echo \"Other\" ;;\nesac\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex--complexity--ad",
      children: "Regex — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BRE matching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) with Thompson NFA — linear in input length"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ERE matching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) generally, but backtracking can reach O(2^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perl-compatible (PCRE)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) with backtracking optimizations; catastrophic on bad patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Why catastrophic?"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(a+)+b"
            }), " on \"aaaaac\" → backtracking explosion in nested quantifiers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: ^ and $ anchors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without anchors, regex matches anywhere in line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Greedy vs lazy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".*"
            }), " is greedy (matches as much as possible); ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".*?"
            }), " is lazy (some engines)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Backslash hell"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In shell, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\"
            }), " needs doubling in double quotes and tripling in regex"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: locale issues"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[a-z]"
            }), " order differs by locale — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[a-zA-Z]"
            }), " for stability"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-14-sed--stream-editor",
      children: "Section 14: sed — Stream Editor"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sed-core-concepts",
      children: "sed Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sed"
      }), " is like an automated document editing conveyor belt. Each line of a file passes under an editing head that applies programmed transformations. The head can substitute text, delete lines, insert new text, or print selective sections. Multiple editing heads can be chained, and each operation can be restricted to specific lines matching address patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — sed Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read next line from input into the pattern space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply address match (if specified): does line match the address?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If address matches (or no address), apply the command"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-n"
        }), " flag, print pattern space to output"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear pattern space (or hold if using hold space)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until input exhausted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function sed_execute(commands, input_stream):\n    for each line in input_stream:\n        pattern_space = line\n        \n        for (address, command) in commands:\n            if address == null or line_matches_address(pattern_space, address):\n                pattern_space = apply_command(command, pattern_space)\n        \n        if not suppress_default_print:\n            output(pattern_space)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — sed 's/cat/DOG/'"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Input line         | Pattern space before | Substitution        | Pattern space after | Output\n1    | \"the cat sat\"      | \"the cat sat\"       | cat→DOG             | \"the DOG sat\"       | \"the DOG sat\"\n2    | \"caterpillar\"      | \"caterpillar\"       | cat→DOG             | \"DOGerpillar\"       | \"DOGerpillar\"\n3    | \"dog and cat\"      | \"dog and cat\"       | cat→DOG             | \"dog and DOG\"       | \"dog and DOG\"\n4    | \"no match here\"    | \"no match here\"     | cat→?               | \"no match here\"     | \"no match here\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sed-commands-reference",
      children: "sed Commands Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# ==================== SUBSTITUTION ====================\nsed 's/old/new/' file              # Replace FIRST occurrence per line\nsed 's/old/new/g' file             # Replace ALL occurrences per line\nsed 's/old/new/2' file             # Replace SECOND occurrence per line\nsed 's/old/new/g' file > newfile   # Write to new file\nsed -i 's/old/new/g' file          # In-place edit (modify file)\nsed -i.bak 's/old/new/g' file      # In-place with .bak backup\n\n# ==================== ADDRESSING ====================\nsed '3s/old/new/' file             # Line 3 only\nsed '10,20s/old/new/' file         # Lines 10-20\nsed '10,+5s/old/new/' file         # Line 10 through line 15\nsed '5,$s/old/new/' file           # Line 5 to end of file\nsed '/pattern/s/old/new/' file     # Lines matching /pattern/\nsed '/start/,/stop/s/old/new/' file # Range between patterns\n\n# ==================== DELETION ====================\nsed '/^#/d' file                   # Delete comment lines\nsed '/^$/d' file                   # Delete empty lines\nsed '1d' file                      # Delete first line\nsed '$d' file                      # Delete last line\nsed '3,5d' file                    # Delete lines 3-5\nsed '/^#/d; /^$/d' file           # Delete comments AND blank lines\n\n# ==================== PRINT ====================\nsed -n '5,10p' file                # Print lines 5-10 only (-n suppresses auto-print)\nsed -n '/error/p' file             # Print lines containing \"error\"\nsed -n '1~2p' file                 # Print odd-numbered lines (1, 3, 5, ...)\n\n# ==================== MULTI-COMMAND ====================\nsed -e 's/foo/bar/' -e 's/baz/qux/' file   # Multiple -e expressions\nsed 's/foo/bar/; s/baz/qux/' file           # Semicolon separated\n\n# ==================== HOLD SPACE ====================\nsed -n 'G; h' file                 # Double-space output\n\n# ==================== ADVANCED ====================\n# Transform XML-like tags to attributes\nsed -E 's/<([^>]+)>([^<]*)<\\/\\1>/\\1=\\2/' tags.txt\n\n# Uppercase first character of each word\nsed 's/\\b\\(.\\)/\\u\\1/g' text.txt\n\n# Insert line before/after match\nsed '/pattern/i\\Inserted before' file     # i = insert before\nsed '/pattern/a\\Inserted after' file      # a = append after\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sed-use-cases",
      children: "sed Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Strip HTML tags\nsed -E 's/<[^>]*>//g' index.html > plaintext.txt\n\n# Remove trailing whitespace\nsed -i 's/[ \\t]*$//' *.py\n\n# Join all lines\nsed ':a; N; $!ba; s/\\n/ /g' file.txt\n\n# Print sections between markers\nsed -n '/# BEGIN CONFIG/,/# END CONFIG/p' config.sh\n\n# Replace but only in lines NOT matching a pattern\nsed '/important/!s/foo/bar/' file.txt\n\n# Convert CSV to tab-separated\nsed 's/,/\\t/g' data.csv\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-15-awk--pattern-scanning-and-processing",
      children: "Section 15: awk — Pattern Scanning and Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "awk-core-concepts",
      children: "awk Core Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy"
      }), ": awk is a miniature spreadsheet for text. Each line is a row, and each word/field is a cell. You can filter rows (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$3 > 50"
      }), "), transform cells (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$1 = toupper($1)"
      }), "), compute totals (sum of column 2), and format reports — all in a compact language."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps — awk Execution"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute BEGIN block (if present) — runs once before any input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read next line from input"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Split line into fields ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$2"
        }), ", ..., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$NF"
        }), " based on field separator (FS)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the pattern (condition): if true, execute the action block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no pattern but action block exists, execute for every line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no action block but pattern exists, print matching lines (default action)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat from step 2 until input exhausted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute END block (if present) — runs once after all input"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function awk_execute(patterns_actions, input_streams):\n    execute_blocks(patterns_actions.BEGIN)\n    \n    for stream in input_streams:\n        for line in stream:\n            NR += 1\n            $0 = line\n            fields = split(line, FS)\n            NF = len(fields)\n            $1, $2, ..., $NF = fields\n            \n            for (pattern, action) in patterns_actions:\n                if evaluate_pattern(pattern):\n                    result = execute_action(action)\n                    if \"next\" command: break\n    \n    execute_blocks(patterns_actions.END)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — awk '$3 > 50 { print $1 }'"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | Input line          | $1    | $2  | $3   | $3 > 50? | Output\n1    | \"Alice 30 45\"      | Alice | 30  | 45   | FALSE    |\n2    | \"Bob 25 60\"        | Bob   | 25  | 60   | TRUE     | Bob\n3    | \"Charlie 35 42\"    | Charlie| 35  | 42   | FALSE    |\n4    | \"Diana 28 75\"      | Diana | 28  | 75   | TRUE     | Diana\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "awk-built-in-variables",
      children: "awk Built-in Variables"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current record (line) number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of fields in current record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 for empty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire current record"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$1..$NF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual fields"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field separator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "space/tab (whitespace)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OFS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output field separator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record separator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ORS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output record separator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FILENAME"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current input file name"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FNR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record number within current file"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# ==================== BASIC FIELD EXTRACTION ====================\nawk '{ print $1, $3 }' file.txt              # Print fields 1 and 3\nawk -F: '{ print $1, $6 }' /etc/passwd      # With custom field separator\nawk '{ print NR, NF, $0 }' file.txt          # Line number, field count, whole line\n\n# ==================== PATTERN MATCHING ====================\nawk '/error/ { print $0 }' log.txt           # Lines containing \"error\"\nawk '$3 > 50 { print $1, $3 }' data.txt      # Conditional on field value\nawk '$1 ~ /^A/ { print }' names.txt          # Field 1 starts with 'A'\n\n# ==================== BEGIN AND END ====================\nawk 'BEGIN { sum=0 } { sum += $1 } END { print \"Total:\", sum }' numbers.txt\nawk 'BEGIN { print \"=== REPORT ===\" }\n     { print NR \": \" $0 }\n     END { print \"=== END ===\" }' file.txt\n\n# ==================== COMPUTATIONS ====================\nawk '{ sum += $1; count++ } END { print \"Average:\", sum/count }' data.txt\nawk 'NR>1 { print $2 - prev } { prev = $2 }' timeseries.txt\n\n# ==================== FORMATTING ====================\nawk '{ printf \"%-15s %5d %8.2f\\n\", $1, $2, $3 }' file.txt\n\n# ==================== ARRAYS (ASSOCIATIVE) ====================\nawk '{ count[$1]++ } END { for (k in count) print k, count[k] }' log.txt\nawk '!seen[$0]++' file.txt                   # Remove duplicates (order-preserving)\n\n# ==================== MULTI-FILE ====================\nawk 'FNR==1 { print \"=== \" FILENAME \" ===\" } 1' *.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "awk-one-liners",
      children: "awk One-Liners"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Print every line that is a prime number (simple heuristic)\nawk '{ for(i=2;i<=$1/2;i++) if($1%i==0) next } $1>1' numbers.txt\n\n# Transpose a matrix\nawk '{ for(i=1;i<=NF;i++) a[i,NR]=$i; max=NF } END { for(i=1;i<=max;i++) { for(j=1;j<=NR;j++) printf \"%s \", a[i,j]; print \"\" } }'\n\n# Running total\nawk '{ print $0, total+=$NF }' data.txt\n\n# Group by month and sum\nawk -F'[- ]' '{ sum[$2] += $NF } END { for (m in sum) print m, sum[m] }' sales.csv\n\n# Cross-tabulation\nawk '{ ct[$1][$2]++ } END { for (i in ct) for (j in ct[i]) print i, j, ct[i][j] }' pairs.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "awk--complexity--ad",
      children: "awk — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n * f) — n = lines, f = operations per line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory (assoc arrays)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = unique keys in array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk does NOT sort — pipe to sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Field separator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default is whitespace (any run of spaces/tabs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Empty fields"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ":a::b:"
            }), " with -F: → 4 fields, $2 and $3 are empty"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Missing END block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final processing not possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Gawk extensions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sorted_in"
            }), " for sorted array traversal (gawk-specific)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Equivalent"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# awk '{ sum += $1 } END { print sum }' numbers.txt\nwith open(\"numbers.txt\") as f:\n    total = sum(int(line.split()[0]) for line in f if line.strip())\n    print(total)\n\n# awk -F: '{ print $1, $6 }' /etc/passwd\nwith open(\"/etc/passwd\") as f:\n    for line in f:\n        fields = line.strip().split(\":\")\n        print(fields[0], fields[5])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-16-grepsedawk--putting-it-all-together",
      children: "Section 16: grep/sed/awk — Putting It All Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-based-text-processing-ecosystem",
      children: "Pattern-Based Text Processing Ecosystem"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "grep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding lines that match a pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Which log lines contain ERROR?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforming text (substitute, delete, insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Replace all IPs with xxx.xxx.xxx.xxx\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "awk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Field-oriented processing and computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Sum column 3 grouped by column 1\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Arrange by timestamp\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uniq"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Count unique visitors\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integrated-examples",
      children: "Integrated Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Composite: find top 10 error-producing IPs from nginx log\ngrep \" 500 \" access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10\n\n# Composite: find large files modified in last week\nfind /tmp -type f -mtime -7 | xargs ls -l | awk '$5 > 1000000 { print $5, $NF }'\n\n# Composite: CSV to HTML table conversion\nawk -F, 'BEGIN {\n    print \"<table>\";\n    print \"<tr><th>\" $0 \"</th></tr>\"\n}\nNR==1 {\n    print \"<tr>\";\n    for(i=1;i<=NF;i++) printf \"<th>%s</th>\", $i;\n    print \"</tr>\";\n    next\n}\n{\n    print \"<tr>\";\n    for(i=1;i<=NF;i++) printf \"<td>%s</td>\", $i;\n    print \"</tr>\";\n}\nEND { print \"</table>\" }' data.csv\n\n# Report: disk usage by directory type with awk\ndu -sh /*/ 2>/dev/null | sort -rh | head -10 | awk '\nBEGIN { printf \"%-30s %s\\n\", \"Directory\", \"Size\"; print \"---\" }\n{ printf \"%-30s %s\\n\", $2, $1 }'\n\n# Log summary by hour\ncat access.log | awk '{ print substr($4, 2, 3) }' | sort | uniq -c | sort -rn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grepsedawk--usage-decision-matrix",
      children: "grep/sed/awk — Usage Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "grep"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "awk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find lines containing \"error\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "grep is optimized for search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replace foo → bar in file"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "sed is the stream editor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sum column 3 by column 1"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk has associative arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete lines 5-10"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "sed has line addressing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print unique field values"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk can track seen values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count word frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk associative arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove HTML tags"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "sed regex substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extract first field of every line"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk field splitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find duplicates across fields"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "YES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "awk multi-key arrays"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-17-interview-corner",
      children: "Section 17: Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subshell-vs-current-shell",
      children: "Subshell vs Current Shell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Current shell execution: variables persist\nvar=\"original\"\n. ./sub_script.sh    # Source — runs in current shell\n# OR\nsource ./sub_script.sh  # Same as above\n\n# Subshell execution: changes are isolated\nvar=\"original\"\n( var=\"modified\"; echo \"Inside: $var\" )   # Subshell\necho \"Outside: $var\"     # Still \"original\" — subshell can't affect parent!\n\n# Command grouping in current shell\n{ var=\"modified\"; echo \"Inside: $var\"; }  # Same shell\necho \"Outside: $var\"     # Now \"modified\" — no subshell!\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Subshell ", (0,jsx_runtime.jsx)(_components.code, {
              children: "( )"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Current Shell ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ }"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Sourcing ", (0,jsx_runtime.jsx)(_components.code, {
              children: ". file"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable changes persist?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directory changes persist?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fork overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fork"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fork"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated side effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load functions/config"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-vs-",
      children: "$@ vs $*"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# script: args_test.sh\n\necho \"Using \\$@:\"\nfor arg in \"$@\"; do\n    echo \"  [$arg]\"\ndone\n\necho \"Using \\$*:\"\nfor arg in $*; do\n    echo \"  [$arg]\"\ndone\n\necho \"Using \\\"\\$*\\\":\"\nfor arg in \"$*\"; do\n    echo \"  [$arg]\"\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Input/Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ bash args_test.sh \"file name.txt\" \"another arg\" third\nUsing $@:\n  [file name.txt]\n  [another arg]\n  [third]\nUsing $*:\n  [file]\n  [name.txt]\n  [another]\n  [arg]\n  [third]\nUsing \"$*\":\n  [file name.txt another arg third]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Difference"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\"$@\""
        }), " preserves argument boundaries — each quoted arg stays together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$*"
        }), " without quotes — all args split by IFS (space)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "\"$*\""
        }), " — all args concatenated into one string with first IFS character"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exit-code-handling",
      children: "Exit Code Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Always check exit codes\ngrep \"error\" log.txt\nif [ $? -ne 0 ]; then\n    echo \"No errors found (or grep failed)\"\nfi\n\n# Idiomatic: check directly\nif grep -q \"error\" log.txt; then\n    echo \"Errors found\"\nfi\n\n# Exit code ranges\n# 0     = success\n# 1     = general error\n# 2     = misuse of shell builtin\n# 126   = command not executable\n# 127   = command not found\n# 128   = invalid exit argument\n# 128+N = killed by signal N (e.g., 130 = Ctrl+C = 128+2)\n# 255   = exit status out of range\n\n# Capture and use exit code\ncmd=\"grep 'something' nonexistent.txt\"\nif ! eval \"$cmd\"; then\n    echo \"Command failed: $?\"\nfi\n\n# Exit code of pipe (without pipefail)\nfalse | true\necho $?    # 0 (exit of last command = true)\n\n# With pipefail\nset -o pipefail\nfalse | true\necho $?    # 1 (exit of first failing command = false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugging-shell-scripts",
      children: "Debugging Shell Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Debugging techniques\n\n# 1. Syntax checking (no execution)\n# bash -n script.sh\n\n# 2. Trace execution (prints each command before running)\n# bash -x script.sh\n# Or within script:\nset -x   # Enable tracing\n# ... code to trace ...\nset +x   # Disable tracing\n\n# 3. Verbose mode (prints input lines as read)\n# bash -v script.sh\n\n# 4. Combined debugging\n# bash -vx script.sh\n\n# 5. Debug with line numbers and function calls\ndebug() {\n    echo \"DEBUG: $BASH_SOURCE:$LINENO $FUNCNAME: $*\" >&2\n}\n\nmy_function() {\n    debug \"entering with args: $*\"\n    local result=$(( $1 + $2 ))\n    debug \"computed: $result\"\n    echo $result\n}\n\n# 6. Using trap for debugging\ntrap 'echo \"ERROR at $LINENO: $BASH_COMMAND\"' ERR\n\n# 7. Assertions\nassert() {\n    if [ $? -ne 0 ]; then\n        echo \"Assertion failed at $LINENO: $1\" >&2\n        exit 1\n    fi\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-debugging--the-xtrace-ps4-prompt",
      children: "Advanced Debugging — The xtrace PS4 Prompt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Customize the xtrace prompt (PS4) for better debugging\nexport PS4='+(${BASH_SOURCE}:${LINENO}): ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'\n\nset -x\nmy_func() {\n    local x=10\n    echo $x\n}\nmy_func\nset +x\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sample Output"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+(script.sh:7): my_func(): local x=10\n+(script.sh:8): my_func(): echo 10\n10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-corner--complexity--ad",
      children: "Interview Corner — Complexity & A&D"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subshell"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fork + exec: O(1) but expensive for tightly-looping scripts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source (.)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No fork — O(1) constant cost regardless of file size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "$@ vs $"
            }), "*"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$@ preserves IFS splits; $* joins; critical for filenames with spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exit code 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT boolean false — 0 = success in shell!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Edge: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "exit 256"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraps to 0! Valid range is 0-255"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Edge: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "set -e"
              }), " gotcha"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits on ANY unchecked failure — can be surprising with grep no-match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edge: Debugging fork"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "set -x"
            }), " in subshell only traces that subshell"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-18-applications-in-real-systems",
      children: "Section 18: Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-scripts-github-actions--gitlab-ci",
      children: "CI/CD Scripts (GitHub Actions / GitLab CI)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Example: CI build script\n\nset -euo pipefail\n\n# Environment validation\ncheck_env() {\n    local required_vars=(\"NODE_VERSION\" \"BUILD_DIR\" \"DEPLOY_KEY\")\n    for var in \"${required_vars[@]}\"; do\n        if [ -z \"${!var:-}\" ]; then\n            echo \"Error: $var is not set\" >&2\n            exit 1\n        fi\n    done\n}\n\nbuild_project() {\n    echo \"=== Installing dependencies ===\"\n    npm ci --frozen-lockfile\n    \n    echo \"=== Running linter ===\"\n    npm run lint\n    \n    echo \"=== Running tests ===\"\n    npm run test:ci\n    \n    echo \"=== Building ===\"\n    npm run build\n    \n    echo \"=== Running integration tests ===\"\n    npm run test:e2e\n}\n\ndeploy() {\n    local branch=\"${CI_COMMIT_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}\"\n    \n    case \"$branch\" in\n        main|master)\n            echo \"Deploying to production...\"\n            rsync -avz --delete build/ user@prod:/var/www/app/\n            ;;\n        develop)\n            echo \"Deploying to staging...\"\n            rsync -avz build/ user@staging:/var/www/app/\n            ;;\n        *)\n            echo \"Branch $branch: no deployment configured\"\n            ;;\n    esac\n}\n\n# Main\ncheck_env\nbuild_project\ndeploy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-administration-scripts",
      children: "System Administration Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Example: System health check\n\nset -euo pipefail\n\nREPORT_FILE=\"/tmp/health_report_$(date +%Y%m%d_%H%M%S).txt\"\n\ncheck_disk() {\n    local threshold=80\n    echo \"=== DISK USAGE ===\"\n    df -h | awk -v thr=$threshold 'NR>1 {\n        use = $5 + 0\n        if (use >= thr) print \"WARNING: \" $6 \" at \" $5 \" usage\"\n    }'\n}\n\ncheck_memory() {\n    echo \"=== MEMORY ===\"\n    free -h\n    local mem_avail=$(free | awk '/Mem:/ {print $7}')\n    local mem_total=$(free | awk '/Mem:/ {print $2}')\n    local mem_pct=$((100 * (mem_total - mem_avail) / mem_total))\n    if [ $mem_pct -gt 90 ]; then\n        echo \"WARNING: Memory usage at ${mem_pct}%\"\n    fi\n}\n\ncheck_processes() {\n    echo \"=== TOP PROCESSES ===\"\n    ps aux --sort=-%mem | head -6\n}\n\ncheck_failed_services() {\n    echo \"=== FAILED SERVICES ===\"\n    systemctl --failed --no-legend | awk '{print $1}' || true\n}\n\ncheck_logs() {\n    echo \"=== RECENT ERRORS ===\"\n    journalctl -p err -n 20 --no-pager 2>/dev/null || true\n}\n\nsend_alert() {\n    if [ -s \"$REPORT_FILE\" ]; then\n        mail -s \"Health Report: $(hostname)\" admin@example.com < \"$REPORT_FILE\"\n    fi\n}\n\n# Main\n{\n    echo \"Health Report: $(hostname) at $(date)\"\n    echo \"=================================\"\n    check_disk\n    check_memory\n    check_processes\n    check_failed_services\n    check_logs\n} > \"$REPORT_FILE\"\n\ncat \"$REPORT_FILE\"\n[ $# -eq 0 ] || send_alert   # Send email if any arg given\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-entrypoint-script",
      children: "Docker Entrypoint Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Example: Docker entrypoint with signal forwarding\n\nset -euo pipefail\n\n# Forward SIGTERM to child processes\ncleanup() {\n    echo \"Received SIGTERM, shutting down...\"\n    kill -TERM \"$child_pid\" 2>/dev/null\n    wait \"$child_pid\"\n    exit 0\n}\ntrap cleanup SIGTERM SIGINT\n\n# Initialize application\ninit_app() {\n    echo \"=== Initializing application ===\"\n    \n    # Check required environment variables\n    : \"${DB_HOST:?Required}\"\n    : \"${DB_PORT:=5432}\"\n    : \"${APP_ENV:=production}\"\n    \n    # Wait for dependencies\n    echo \"Waiting for database at $DB_HOST:$DB_PORT...\"\n    while ! nc -z \"$DB_HOST\" \"$DB_PORT\" 2>/dev/null; do\n        sleep 1\n    done\n    echo \"Database ready\"\n    \n    # Run migrations\n    if [ \"${RUN_MIGRATIONS:-false}\" = \"true\" ]; then\n        echo \"Running database migrations...\"\n        npm run migrate\n    fi\n    \n    echo \"=== Application initialized ===\"\n}\n\n# Execute command\nif [ $# -eq 0 ]; then\n    # Default command\n    init_app\n    echo \"Starting application server...\"\n    exec node server.js  &\nelse\n    # User-specified command\n    exec \"$@\"\nfi\n\nchild_pid=$!\nwait \"$child_pid\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log-rotation-script",
      children: "Log Rotation Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Example: Log rotation with compression and retention\n\nLOG_DIR=\"/var/log/myapp\"\nRETENTION_DAYS=30\nMAX_SIZE_MB=100\n\nrotate_logs() {\n    local log_file=\"$1\"\n    local base=\"${log_file%.*}\"\n    \n    if [ ! -f \"$log_file\" ]; then\n        return\n    fi\n    \n    # Check file size\n    local size=$(stat -f%z \"$log_file\" 2>/dev/null || stat -c%s \"$log_file\" 2>/dev/null)\n    local max_bytes=$((MAX_SIZE_MB * 1024 * 1024))\n    \n    if [ \"$size\" -lt \"$max_bytes\" ]; then\n        return  # No rotation needed\n    fi\n    \n    # Compress current log\n    gzip -c \"$log_file\" > \"${base}_$(date +%Y%m%d_%H%M%S).log.gz\"\n    \n    # Truncate original (don't delete — writing process needs fd)\n    : > \"$log_file\"\n    \n    echo \"Rotated: $log_file ($((size / 1024 / 1024)) MB)\"\n}\n\ncleanup_old_logs() {\n    find \"$LOG_DIR\" -name \"*.gz\" -mtime +$RETENTION_DAYS -delete\n}\n\n# Find and rotate all log files\nfind \"$LOG_DIR\" -name \"*.log\" -type f | while IFS= read -r logfile; do\n    rotate_logs \"$logfile\"\ndone\n\ncleanup_old_logs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-backup-script",
      children: "Database Backup Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Example: Automated database backup with verification\n\nDB_NAME=\"${1:?Usage: $0 <database_name>}\"\nBACKUP_DIR=\"/var/backups/mysql\"\nTIMESTAMP=$(date +%Y%m%d_%H%M%S)\nBACKUP_FILE=\"${BACKUP_DIR}/${DB_NAME}_${TIMESTAMP}.sql.gz\"\nRETENTION_COUNT=14\n\n# Ensure backup directory exists\nmkdir -p \"$BACKUP_DIR\"\n\n# Perform backup\necho \"Backing up $DB_NAME...\"\nif mysqldump --single-transaction --routines --triggers \"$DB_NAME\" | gzip > \"$BACKUP_FILE\"; then\n    local size=$(stat -f%z \"$BACKUP_FILE\" 2>/dev/null || stat -c%s \"$BACKUP_FILE\" 2>/dev/null)\n    echo \"Backup created: $BACKUP_FILE ($((size / 1024 / 1024)) MB)\"\nelse\n    echo \"Backup FAILED for $DB_NAME\" >&2\n    rm -f \"$BACKUP_FILE\"\n    exit 1\nfi\n\n# Verify backup integrity\necho \"Verifying backup integrity...\"\ngunzip -t \"$BACKUP_FILE\"\nif [ $? -eq 0 ]; then\n    echo \"Integrity check passed\"\nelse\n    echo \"Integrity check FAILED\" >&2\n    exit 1\nfi\n\n# Remove old backups\nls -t \"${BACKUP_DIR}/${DB_NAME}_\"*.sql.gz 2>/dev/null | tail -n +$((RETENTION_COUNT + 1)) | while IFS= read -r old; do\n    echo \"Removing old backup: $old\"\n    rm -f \"$old\"\ndone\n\necho \"Backup completed successfully\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-19-writing-robust-shell-scripts-best-practices",
      children: "Section 19: Writing Robust Shell Scripts (Best Practices)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-safety-trifecta",
      children: "The Safety Trifecta"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# The holy trinity of safe scripting\nset -euo pipefail\n\n# What each does:\n# -e:  Exit immediately if any command exits with non-zero status\n# -u:  Treat unset variable as an error (exit immediately)\n# -o pipefail: Fail pipeline if any command fails, not just last\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling-patterns",
      children: "Error Handling Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\nset -euo pipefail\n\n# Validate arguments\nif [ $# -ne 2 ]; then\n    echo \"Usage: $0 <input_file> <output_file>\" >&2\n    exit 1\nfi\n\nINPUT_FILE=\"$1\"\nOUTPUT_FILE=\"$2\"\n\n# Check prerequisites\nfor cmd in awk sed grep curl; do\n    if ! command -v \"$cmd\" &> /dev/null; then\n        echo \"Error: $cmd is not installed\" >&2\n        exit 1\n    fi\ndone\n\n# Check input file\nif [ ! -r \"$INPUT_FILE\" ]; then\n    echo \"Error: Cannot read $INPUT_FILE\" >&2\n    exit 1\nfi\n\n# Safe temp file with cleanup\nTEMP_FILE=$(mktemp /tmp/script_XXXXXX)\ntrap 'rm -f \"$TEMP_FILE\"' EXIT\n\n# Main function pattern\nmain() {\n    echo \"Processing $INPUT_FILE...\"\n    # ... main logic ...\n    echo \"Done. Output written to $OUTPUT_FILE\"\n}\n\nmain\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input-validation",
      children: "Input Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n\n# Integer validation\nvalidate_integer() {\n    local value=$1\n    local name=$2\n    if ! [[ \"$value\" =~ ^[0-9]+$ ]]; then\n        echo \"Error: $name must be an integer, got '$value'\" >&2\n        exit 1\n    fi\n}\n\n# File validation\nvalidate_file() {\n    local path=$1\n    local name=$2\n    if [ ! -f \"$path\" ]; then\n        echo \"Error: $name '$path' not found\" >&2\n        exit 1\n    fi\n    if [ ! -r \"$path\" ]; then\n        echo \"Error: $name '$path' not readable\" >&2\n        exit 1\n    fi\n}\n\nvalidate_integer \"$1\" \"port\"\nvalidate_file \"$2\" \"config\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "section-20-edge-cases-reference",
      children: "Section 20: Edge Cases Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filename with spaces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for f in $(ls)"
            }), " splits on spaces"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for f in *"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty variable"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rm -rf $var"
            }), " with var=\"\" → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rm -rf /"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rm -rf \"${var:?}\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Newline in filename"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "while read line"
            }), " stops at newline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "read -d ''"
            }), " with null delimiter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quoting in [ ]"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[ $var = \"\" ]"
            }), " fails if var is empty"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[ \"$var\" = \"\" ]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double-escape in sed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sed \"s/$var/.../\""
            }), " breaks if var has /"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use `"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test command vs [ vs [["
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[ ]"
            }), " is a command, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[[ ]]"
            }), " is keyword"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[[ ]]"
            }), " in Bash"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exit code inversion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "! grep ..."
            }), " negates exit code"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if ! grep -q ...; then"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IFS and read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default IFS strips whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IFS= read -r line"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brace expansion order"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{1..10}"
            }), " is expanded before variable expansion"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use C-style ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for ((i=1;i<=n;i++))"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPIPE in pipelines"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "head"
            }), " closes pipe early"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writer gets SIGPIPE exit 141"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Here-doc delimiter spacing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "EOF "
            }), " (trailing space) breaks match"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "EOF"
            }), " at column 0, no trailing whitespace"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array init with command output"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr=($(cmd))"
            }), " splits on IFS"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "readarray -t arr < <(cmd)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function shadowing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ls() { ... }"
            }), " breaks all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls"
            }), " calls"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid naming functions after commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set -e unexpected exit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "grep"
            }), " returning 1 (no match) exits script"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefix with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            }), " or use `"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The shell is both an interactive command interpreter and script interpreter"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Shebang (", (0,jsx_runtime.jsx)(_components.code, {
          children: "#!/bin/bash"
        }), ") specifies the interpreter for scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Variables use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$name"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${name}"
        }), " for expansion; arithmetic with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$((...))"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Conditionals: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "case"
        }), "; loops: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "until"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pipes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), ") connect commands into powerful pipelines"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Redirection controls stdin/stdout/stderr (", (0,jsx_runtime.jsx)(_components.code, {
          children: ">"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Job control: background (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), "), foreground, suspend, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nohup"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "grep"
        }), " for pattern matching, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sed"
        }), " for stream editing, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "awk"
        }), " for field processing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "trap"
        }), " handles signals; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set -euo pipefail"
        }), " for robust scripts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Named pipes (FIFOs) allow inter-process communication through the filesystem"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Process substitution (", (0,jsx_runtime.jsx)(_components.code, {
          children: "<()"
        }), ") treats command output as a file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$@"
        }), " preserves argument boundaries; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$*"
        }), " concatenates them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subshells ", (0,jsx_runtime.jsx)(_components.code, {
          children: "( )"
        }), " isolate changes; sourcing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ". file"
        }), " executes in current shell"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Debug with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "set -x"
        }), ", syntax check with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bash -n"
        }), ", trace with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bash -v"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation--shell-interpreter-simulator",
      children: "TypeScript Implementation — Shell Interpreter Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * ShellSimulator: A minimal Unix shell interpreter in TypeScript\n * demonstrating command parsing, execution, pipes, and redirection\n * as the kernel would handle them.\n */\ninterface Command {\n  program: string;\n  args: string[];\n  redirectInput?: string;   // < file\n  redirectOutput?: string;  // > file\n  redirectAppend?: string;  // >> file\n  pipeTo?: Command;         // | next command\n}\n\nclass ShellParser {\n  /** Parse a command line into a Command AST */\n  parse(line: string): Command | null {\n    line = line.trim();\n    if (!line || line.startsWith('#')) return null;\n\n    // Handle pipes (split on |)\n    const pipeParts = line.split('|').map(s => s.trim());\n    if (pipeParts.length > 1) {\n      const first = this.parseSingle(pipeParts[0]);\n      let current = first;\n      for (let i = 1; i < pipeParts.length; i++) {\n        current!.pipeTo = this.parseSingle(pipeParts[i]);\n        current = current!.pipeTo;\n      }\n      return first;\n    }\n    return this.parseSingle(line);\n  }\n\n  private parseSingle(part: string): Command {\n    const cmd: Command = { program: '', args: [] };\n    const tokens: string[] = [];\n    let current = '';\n    let inQuote: string | null = null;\n\n    // Tokenize respecting quotes\n    for (const ch of part) {\n      if (inQuote) {\n        if (ch === inQuote) inQuote = null;\n        else current += ch;\n      } else if (ch === '\"' || ch === \"'\") {\n        inQuote = ch;\n      } else if (ch === ' ') {\n        if (current) { tokens.push(current); current = ''; }\n      } else {\n        current += ch;\n      }\n    }\n    if (current) tokens.push(current);\n\n    // Identify redirection operators and program\n    for (let i = 0; i < tokens.length; i++) {\n      if (tokens[i] === '<') cmd.redirectInput = tokens[++i];\n      else if (tokens[i] === '>') cmd.redirectOutput = tokens[++i];\n      else if (tokens[i] === '>>') cmd.redirectAppend = tokens[++i];\n      else if (!cmd.program) { cmd.program = tokens[i]; }\n      else cmd.args.push(tokens[i]);\n    }\n    return cmd;\n  }\n}\n\n/** Execute a command AST (simulated — prints what the kernel would do) */\nclass ShellExecutor {\n  private fileSystem: Map<string, string> = new Map();\n\n  constructor() {\n    // Simulate some files\n    this.fileSystem.set('/bin/echo', 'builtin');\n    this.fileSystem.set('/bin/ls', 'builtin');\n    this.fileSystem.set('/bin/cat', 'builtin');\n    this.fileSystem.set('/tmp/data.txt', 'hello world\\nline 2\\nline 3');\n  }\n\n  execute(ast: Command): number {\n    if (!ast) return 0;\n\n    console.log(`[KERNEL] fork+exec: ${ast.program} ${ast.args.join(' ')}`);\n\n    // Handle redirections\n    if (ast.redirectInput) {\n      const content = this.fileSystem.get(ast.redirectInput);\n      console.log(`[KERNEL] fd 0 (stdin) redirected from ${ast.redirectInput}`);\n      console.log(`[DATA] Input contains: ${content ? content.substring(0, 40) : '(empty)'}`);\n    }\n    if (ast.redirectOutput) {\n      console.log(`[KERNEL] fd 1 (stdout) redirected to ${ast.redirectOutput}`);\n    }\n    if (ast.redirectAppend) {\n      console.log(`[KERNEL] fd 1 (stdout) appended to ${ast.redirectAppend}`);\n    }\n\n    // Handle pipe\n    if (ast.pipeTo) {\n      console.log(`[KERNEL] pipe() created — fd[0] for reading, fd[1] for writing`);\n      console.log(`[KERNEL] stdout of ${ast.program} → pipe fd[1]`);\n      console.log(`[KERNEL] pipe fd[0] → stdin of ${ast.pipeTo.program}`);\n      this.execute(ast.pipeTo);\n    }\n\n    // Simulate command execution\n    switch (ast.program) {\n      case 'echo': console.log(`  [stdout] ${ast.args.join(' ')}`); break;\n      case 'ls':   console.log(`  [stdout] file1.txt  file2.txt  script.sh`); break;\n      case 'cat':\n        if (ast.redirectInput) {\n          const content = this.fileSystem.get(ast.redirectInput);\n          console.log(`  [stdout] ${content || '(file not found)'}`);\n        }\n        break;\n      default:\n        console.log(`  [KERNEL] exec failed: ${ast.program}: not found`);\n        return 127;\n    }\n    return 0;\n  }\n\n  runCommand(line: string): void {\n    console.log(`\\n$ ${line}`);\n    const parser = new ShellParser();\n    const ast = parser.parse(line);\n    if (ast) this.execute(ast);\n  }\n}\n\n// Example usage\nconst shell = new ShellExecutor();\nshell.runCommand('echo \"Hello, World\"');\nshell.runCommand('cat < /tmp/data.txt');\nshell.runCommand('ls -la | grep txt');\nshell.runCommand('echo \"log entry\" >> /var/log/app.log');\nshell.runCommand('unknown_command');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit status of last command (0=success, nonzero=failure)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$0, $1, ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positional parameters: script name, first arg, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$@"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All arguments as separate words (use \"$@\" to preserve quoting)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$#"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of positional parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "stdin/stdout/stderr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard input (0), output (1), error (2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shebang"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#!/bin/bash — tells kernel to use Bash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process ID ($$ = current script, $! = last background)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EOF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-of-file; here-document delimiter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Server"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Embedded System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smartphone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process log rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch file processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditionals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check disk usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test exit codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common admin tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable pipeline stages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Utility library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data transform"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert on failures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assertions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log errors + skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Redirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firmware flashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File export"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signal Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graceful restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connection draining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Watchdog timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App lifecycle"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Purpose of shebang (#!/bin/bash)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Specify interpreter"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Add comments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Set env vars"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Define author"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does $? represent?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) All arguments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Exit status of last command"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) PID of script"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Script name"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why quote variables (\"$var\") in Bash?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Make read-only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Prevent word splitting and globbing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Improve performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Declare arrays"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between $@ and $*?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) $@ is faster; $* is slower"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) $@ preserves argument boundaries; $* concatenates them"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) $@ counts arguments; $* lists them"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No difference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set -euo pipefail"
          }), " protect against?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Unset variables, unchecked errors, partial pipeline failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Syntax errors only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Slow performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) File permission issues"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which signal cannot be caught or ignored?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) SIGINT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) SIGTERM"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) SIGKILL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) SIGHUP"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(cmd)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{ cmd; }"
          }), " in Bash?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) (cmd) runs in a subshell; { cmd; } runs in the current shell"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) (cmd) is faster; { cmd; } is slower"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) (cmd) outputs to file; { cmd; } outputs to screen"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) No difference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "2>&1"
          }), " do?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Redirects stdout to stderr"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Redirects stderr to stdout"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Redirects both to /dev/null"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Creates a new file descriptor"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In awk, what does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NR"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NF"
          }), " represent?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) NR = line count, NF = file count"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) NR = record number, NF = field count"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) NR = new record, NF = next field"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) NR = name reference, NF = number format"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is process substitution ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<()"
          }), "?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Replaces text in a file"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Feeds command output as a file argument"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Submits a process to the background"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Replaces one process with another"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "set -x"
          }), " do in a Bash script?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Exit on errors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Print commands and their arguments as they execute"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Export all variables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Enable extended globbing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[ ]"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[[ ]]"
          }), " in Bash?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) No difference"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["b) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[ ]"
            }), " is a POSIX test command; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[[ ]]"
            }), " is a Bash keyword with more features"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["c) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[[ ]]"
            }), " is faster"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["d) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[ ]"
            }), " works only with numbers"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trap"
          }), " command do in Bash?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Trace command execution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Set a handler for when a signal is received"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Trap errors in a pipeline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Capture command output into a variable"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Which statement about ", (0,jsx_runtime.jsx)(_components.code, {
            children: "read -r"
          }), " is correct?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) -r makes read return immediately without waiting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) -r disables backslash escape interpretation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) -r reads from a file instead of stdin"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) -r reads only raw binary data"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "exec 3<> /dev/tcp/host/port"
          }), " in Bash?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Execute a command on a remote host"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Open a bidirectional TCP connection on file descriptor 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Redirect stderr to a network socket"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It is invalid syntax in Bash"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers"
      }), ": 1-a, 2-b, 3-b, 4-b, 5-a, 6-c, 7-a, 8-b, 9-b, 10-b, 11-b, 12-b, 13-b, 14-b, 15-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a script that lists all files in the current directory, sorted by size (largest first). Include the file size and name in the output."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a script that renames all ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".txt"
        }), " files in a directory to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".bak"
        }), " extension."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a script that counts the number of files in a directory, broken down by extension (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".txt: 5"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".jpg: 12"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".md: 3"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a script that monitors a log file (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tail -f"
        }), ") for lines containing \"ERROR\" and sends an email alert (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mail"
        }), " or write to a file) if more than 10 errors appear in 60 seconds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a script that takes a directory path and creates a dated backup: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backup_project_2026-06-09_1430.tar.gz"
        }), ". The script should keep only the last 7 backups and delete older ones."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write an Apache/nginx log analyzer that generates an HTML report with tables showing top IPs, top URLs, response code distribution, and a simple line chart using inline SVG."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a shell script that implements a simple ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pipeline scheduler"
        }), ": given a file listing commands and their estimated run times, schedule them across N parallel workers. Use job control (", (0,jsx_runtime.jsx)(_components.code, {
          children: "wait -n"
        }), ", background processes) to execute up to N tasks in parallel. Report completion times."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a script that performs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fuzzy file search"
        }), ". Given a partial filename, search the entire filesystem and show matches. Use a fast find strategy: search home directory first, then common locations (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/var/log"
        }), "), and only if not found search ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/usr"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/opt"
        }), ". Show the search path and time taken."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "shell-based REPL"
        }), " calculator that supports variables, arithmetic, and a history command. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read -e"
        }), " (readline) for line editing, store history in a file, and support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), " operators with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$((...))"
        }), " evaluation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shell pipeline latency benchmark"
          }), ": Write a script that measures the latency of a pipeline by piping 1 million lines through ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cat | grep | sort | uniq | wc -l"
          }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "time"
          }), " to measure real, user, and sys time. Run 5 times and report average, min, and max. Explain where the time goes (context switches, buffer copies, process scheduling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-modifying script"
          }), ": Write a Bash script that reads its own source code, adds a comment with the current timestamp to the end of the file, and then re-executes itself. Be careful to avoid infinite loops. Use this to demonstrate how scripts can modify themselves."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parallel SSH executor"
          }), ": Write a script that takes a list of hostnames and a command, then executes the command on all hosts in parallel using background SSH processes. Collect stdout and stderr from each host separately. Show which hosts succeeded and which failed. Use a timeout of 30 seconds per host."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interactive menu system"
          }), ": Write a Bash script that displays an interactive menu using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "select"
          }), ". Options should include: show disk usage, show memory info, show network connections, show running processes, show system uptime, show logged-in users. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "case"
          }), " for handling each selection. Add a confirmation prompt for destructive actions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV to Markdown table converter"
          }), ": Write a Bash script that reads a CSV file from stdin and outputs a Markdown-formatted table. Support: header detection (first row), column alignment (left/right/center), quoted fields with commas inside them, and empty fields. Benchmark against a Python implementation using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pandas"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recursive dependency resolver"
          }), ": Write a Bash script that simulates a package manager dependency resolver. Given a file listing packages and their dependencies (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "openssl: zlib,ca-certificates"
          }), "), compute the full dependency closure in topological order. Detect circular dependencies and report them. Use associative arrays."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Log rotation with compression"
          }), ": Write a script that rotates log files: when a log file exceeds a configurable max size (e.g., 100 MB), compress it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "gzip"
          }), ", rename with timestamp suffix, and keep only the last N rotated logs. Support: daily rotation at midnight (using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cron"
          }), "), size-based rotation, and manual rotation via signal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regex-based log summarizer"
          }), ": Write a Bash script using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "grep"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sed"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "awk"
          }), " that takes an Apache access log and produces: number of requests per hour, top 10 IP addresses by request count, top 10 URLs by request count, HTTP status code distribution (2xx, 3xx, 4xx, 5xx), and average response size by endpoint. Output as a formatted table."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Markov chain text generator in Bash"
          }), ": Write a Bash script that generates random text using a Markov chain approach. Read a text file, build a frequency table of word triplets, then generate text by picking the next word based on the previous two. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "awk"
          }), " for the frequency table and sorting. Compare output quality with input text."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bash-based unit test framework"
          }), ": Design and implement a minimal unit test framework in Bash. Support: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "assert_eq"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "assert_ne"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "assert_true"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "assert_false"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "describe"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "it"
          }), " blocks, test setup/teardown functions, and a summary report with pass/fail counts and execution time. Write tests for the framework itself (self-testing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Environment migration script"
          }), ": Write a script that migrates a development environment configuration: export all environment variables (filtering out sensitive ones), installed package list, aliases, functions, and shell options from one machine. The script should generate a \"restore\" script that can recreate the environment on another machine."]
        }), "\n"]
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