"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8672],{

/***/ 2359
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_01_introduction_md_ac4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-01-introduction-md-ac4.json
const site_docs_courses_python_programming_01_introduction_md_ac4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/01-introduction","title":"Chapter 1: Introduction to Python","description":"Learning Objectives","source":"@site/docs/courses/python-programming/01-introduction.md","sourceDirName":"courses/python-programming","slug":"/python-programming/01-introduction","permalink":"/ai-engineering-journey/python-programming/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/python-programming/01-introduction","title":"Chapter 1: Introduction to Python","sidebar_label":"Chapter 1: Introduction to Python","sidebar_position":1},"sidebar":"course-python-programming","next":{"title":"Chapter 2: Variables, Types, and Operators","permalink":"/ai-engineering-journey/python-programming/02-variables"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/python-programming/01-introduction',
	title: 'Chapter 1: Introduction to Python',
	sidebar_label: 'Chapter 1: Introduction to Python',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Python';

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
  "value": "1.1 A Brief History of Python",
  "id": "11-a-brief-history-of-python",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "More on Python&#39;s Design Philosophy",
  "id": "more-on-pythons-design-philosophy",
  "level": 3
}, {
  "value": "Python vs. Other Languages: Philosophy Comparison",
  "id": "python-vs-other-languages-philosophy-comparison",
  "level": 3
}, {
  "value": "1.2 Installing Python",
  "id": "12-installing-python",
  "level": 2
}, {
  "value": "1.2.1 Official Distribution",
  "id": "121-official-distribution",
  "level": 3
}, {
  "value": "1.2.2 Alternative Distributions",
  "id": "122-alternative-distributions",
  "level": 3
}, {
  "value": "1.3 The Python REPL",
  "id": "13-the-python-repl",
  "level": 2
}, {
  "value": "1.4 First Program",
  "id": "14-first-program",
  "level": 2
}, {
  "value": "1.5 Indentation and Block Structure",
  "id": "15-indentation-and-block-structure",
  "level": 2
}, {
  "value": "1.6 Comments",
  "id": "16-comments",
  "level": 2
}, {
  "value": "1.7 Integrated Development Environments",
  "id": "17-integrated-development-environments",
  "level": 2
}, {
  "value": "1.8 Virtual Environments",
  "id": "18-virtual-environments",
  "level": 2
}, {
  "value": "1.8.1 venv (Built-in)",
  "id": "181-venv-built-in",
  "level": 3
}, {
  "value": "1.8.2 Conda Environments",
  "id": "182-conda-environments",
  "level": 3
}, {
  "value": "1.9 pip: The Package Installer",
  "id": "19-pip-the-package-installer",
  "level": 2
}, {
  "value": "1.10 Running Python Scripts",
  "id": "110-running-python-scripts",
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
  "value": "TypeScript Equivalent: First Program",
  "id": "typescript-equivalent-first-program",
  "level": 2
}, {
  "value": "Python vs TypeScript: Ecosystem Comparison",
  "id": "python-vs-typescript-ecosystem-comparison",
  "level": 3
}, {
  "value": "Python Execution Model",
  "id": "python-execution-model",
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
  "value": "Python IDEs and Tools",
  "id": "python-ides-and-tools",
  "level": 3
}, {
  "value": "Python Community and Resources",
  "id": "python-community-and-resources",
  "level": 3
}, {
  "value": "Python Version History",
  "id": "python-version-history",
  "level": 3
}, {
  "value": "TypeScript Development Environment",
  "id": "typescript-development-environment",
  "level": 3
}, {
  "value": "Python → TypeScript Quick Reference",
  "id": "python--typescript-quick-reference",
  "level": 3
}, {
  "value": "Python vs TypeScript: Hello World Comparison",
  "id": "python-vs-typescript-hello-world-comparison",
  "level": 3
}, {
  "value": "Python vs TypeScript: Key Architectural Differences",
  "id": "python-vs-typescript-key-architectural-differences",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
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
}, {
  "value": "TypeScript Practical Applications",
  "id": "typescript-practical-applications",
  "level": 3
}, {
  "value": "TypeScript Data Structures &amp; Algorithms Primer",
  "id": "typescript-data-structures--algorithms-primer",
  "level": 3
}, {
  "value": "TypeScript Challenge",
  "id": "typescript-challenge",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    mermaid: "mermaid",
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
        id: "chapter-1-introduction-to-python",
        children: "Chapter 1: Introduction to Python"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summarise the history and design philosophy of Python"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install Python and configure a development environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute Python code using the interactive REPL and script files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write syntactically correct Python with proper indentation and comments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and manage virtual environments with venv and conda"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install third-party packages using pip"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/01-introduction.png",
        alt: "Python Ecosystem"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "History of Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guido van Rossum, Python 2 vs 3, Zen of Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installing Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Official distribution, Anaconda, Miniconda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-Eval-Print Loop, interactive experimentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hello.py, print(), bytecode compilation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block structure, four spaces, PEP 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-line, inline, docstrings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDEs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PyCharm, VS Code, IDLE, Jupyter Lab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Environments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "venv, conda, isolation patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package installation, requirements.txt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running Scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-m flag, -c flag, -i flag"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[History] --> B[Installation]\r\n    B --> C[REPL]\r\n    C --> D[First Program]\r\n    D --> E[Indentation]\r\n    E --> F[Comments]\r\n    F --> G[IDE Setup]\r\n    G --> H[Virtual Envs]\r\n    H --> I[pip Packages]\r\n    I --> J[Running Scripts]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-a-brief-history-of-python",
      children: "1.1 A Brief History of Python"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python was created by Guido van Rossum in 1991; the Zen of Python drives its philosophy of readability and simplicity.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import this"
        }), " in a Python REPL to read the Zen of Python -- it is a fun way to internalise Pythonic thinking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python was conceived in the late 1980s by Guido van Rossum at Centrum Wiskunde & Informatica in the Netherlands as a successor to the ABC language. The first public release, Python 0.9.0, appeared in 1991 and already included exception handling, functions, and the core data types list, dict, and str."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python 2.0 was released in 2000, introducing list comprehensions and garbage collection. Python 3.0 (2008) was a major, backward-incompatible revision that cleaned up language inconsistencies. Python 2 reached end-of-life on January 1, 2020. All modern development uses Python 3. The language is now maintained by the Python Software Foundation and follows PEP 8 (style guide) and PEP 572 (walrus operator) among hundreds of enhancement proposals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The design philosophy is captured in The Zen of Python (PEP 20), which emphasises readability, simplicity, and explicitness over implicit behaviour."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript (and JavaScript) share Python's multi-paradigm nature but with static typing and a C-family syntax:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: compiled to JavaScript, static typing\r\nconst greeting: string = \"Hello, World!\";\r\nconsole.log(greeting);\r\n\r\n// TypeScript runs on Node.js or in the browser\r\n// Equivalent of python --version:\r\n// $ node --version\r\n// $ tsc --version\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While Python uses indentation for blocks, TypeScript uses curly braces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{}"
      }), ". Both support REPL environments -- Python has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python"
      }), ", TypeScript has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "node"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ts-node"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-on-pythons-design-philosophy",
      children: "More on Python's Design Philosophy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Zen of Python (PEP 20) includes aphorisms that guide language design:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aphorism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beautiful is better than ugly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readability matters; code is read more often than written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit is better than implicit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear code beats magic; imports should be explicit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple is better than complex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer simple solutions; avoid over-engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flat is better than nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shallow hierarchies are easier to understand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "There should be one obvious way to do it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python values consistency over flexibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# The Zen of Python in action\r\nimport this  # Displays all 19 aphorisms\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-other-languages-philosophy-comparison",
      children: "Python vs. Other Languages: Philosophy Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Philosophy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Syntax"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readability, simplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic (optional hints)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability at scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static (fully typed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curly braces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WORA (write once, run anywhere)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curly braces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Go"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplicity, fast compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curly braces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ruby"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer happiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "do"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "end"
            }), " + indentation"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-installing-python",
      children: "1.2 Installing Python"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Install Python from python.org or use Anaconda for data-science workflows.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Always check \"Add Python to PATH\" during Windows installation -- it is the most common setup mistake for beginners."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-official-distribution",
      children: "1.2.1 Official Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download the latest installer from python.org. Verify the installation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python --version\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On Windows, ensure \"Add Python to PATH\" is checked during installation. On macOS, consider using Homebrew: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "brew install python@3.12"
      }), ". On Linux, use the system package manager: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo apt install python3 python3-pip"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-alternative-distributions",
      children: "1.2.2 Alternative Distributions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anaconda and Miniconda bundle Python with data-science libraries and the conda package manager. These are popular in scientific computing but are heavier than the official distribution."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Miniconda installation\r\n# Download from docs.conda.io, then:\r\nconda --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-the-python-repl",
      children: "1.3 The Python REPL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The REPL provides instant feedback for learning and experimentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Read-Eval-Print Loop (REPL) is an interactive environment for experimenting with Python. Start it by typing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python3"
      }), ") in a terminal:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Type python in terminal] --> B[REPL Starts]\r\n    B --> C[\"Read: Parse Input\"]\r\n    C --> D[\"Eval: Execute Expression\"]\r\n    D --> E[\"Print: Display Result\"]\r\n    E --> B\r\n    B -.-> F[\"Type exit\\(\\)\"]\r\n    F --> G[REPL Terminates]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python REPL in action:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "Python 3.12.0 (main, Oct  2 2023, 12:22:05)\r\n[Clang 15.0.0] on darwin\r\nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\r\n>>> 2 + 2\r\n4\r\n>>> print(\"Hello, world!\")\r\nHello, world!\r\n>>> exit()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The REPL evaluates expressions immediately. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exit()"
      }), " or Ctrl+D (Unix) / Ctrl+Z + Enter (Windows) to quit. The underscore ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_"
      }), " holds the last evaluated result in interactive mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: ">>> 42 * 3\r\n126\r\n>>> _ * 2\r\n252\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-first-program",
      children: "1.4 First Program"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A .py file is compiled to bytecode and executed by the Python Virtual Machine."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a file named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.py"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# hello.py\r\nprint(\"Hello, world!\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Execute it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python hello.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "print()"
      }), " function outputs its argument to the terminal followed by a newline. Unlike many compiled languages, Python is interpreted: the source file is compiled to bytecode (.pyc files stored in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__pycache__/"
      }), ") automatically, then executed by the Python Virtual Machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-indentation-and-block-structure",
      children: "1.5 Indentation and Block Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Consistent four-space indentation is mandatory to define blocks in Python.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " PEP 8 recommends four spaces per indentation level. Configure your editor to insert spaces when you press Tab to avoid TabError."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python uses indentation (typically four spaces) to delimit blocks rather than curly braces or keywords. Consistent indentation is mandatory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 10\r\nif x > 5:\r\n    print(\"x is greater than 5\")\r\n    print(\"This is still inside the if block\")\r\nprint(\"This is outside the if block\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mixing tabs and spaces is an error (PEP 8 recommends spaces only). The standard indentation width is four spaces. Most editors can be configured to insert spaces when the Tab key is pressed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# This will cause IndentationError\r\nif True:\r\n    print(\"indented with one tab\")\r\n    print(\"indented with four spaces\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-comments",
      children: "1.6 Comments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Comments use # for single lines; triple-quoted strings serve as docstrings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Comments explain code to human readers and are ignored by the interpreter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# This is a single-line comment\r\n\r\nx = 5  # inline comment\r\n\r\n\"\"\"\r\nMulti-line string literals used as docstrings\r\n(or simply multi-line comments when not assigned\r\nto anything). These are parsed but not executed.\r\n\"\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triple-quoted strings at the top of a module, class, or function become docstrings accessible via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "help()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-integrated-development-environments",
      children: "1.7 Integrated Development Environments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " VS Code with the Python extension is recommended for this course."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IDE / Editor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PyCharm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-featured, refactoring, debugging, Django support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VS Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight, Python extension, Jupyter notebook integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in, minimal, sufficient for learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jupyter Lab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cell-based execution, great for data exploration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VS Code with the Python extension (by Microsoft) is recommended for this course. Install it and configure the Python interpreter path:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "// .vscode/settings.json\r\n{\r\n    \"python.defaultInterpreterPath\": \".venv/bin/python\",\r\n    \"editor.formatOnSave\": true\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-virtual-environments",
      children: "1.8 Virtual Environments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " venv isolates project dependencies; conda adds non-Python package support."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Virtual environments isolate project dependencies so that different projects can use different package versions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-venv-built-in",
      children: "1.8.1 venv (Built-in)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create a virtual environment\r\npython -m venv .venv\r\n\r\n# Activate (Unix/macOS)\r\nsource .venv/bin/activate\r\n\r\n# Activate (Windows)\r\n.venv\\Scripts\\activate\r\n\r\n# Deactivate\r\ndeactivate\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once activated, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install"
      }), " places packages inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".venv/"
      }), " rather than the global site-packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-conda-environments",
      children: "1.8.2 Conda Environments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "conda create --name myenv python=3.12\r\nconda activate myenv\r\nconda install numpy pandas\r\nconda deactivate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conda environments can mix Python and non-Python dependencies (e.g., CUDA, C libraries). They are heavier but more powerful for data-science workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-pip-the-package-installer",
      children: "1.9 pip: The Package Installer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " pip installs from PyPI; requirements.txt pins exact versions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pip installs packages from the Python Package Index (PyPI, pypi.org):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install requests        # latest version\r\npip install requests==2.31.0  # specific version\r\npip install \"requests>=2.28\"   # version constraint\r\npip list                     # show installed packages\r\npip freeze > requirements.txt  # export dependencies\r\npip install -r requirements.txt  # install from file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common commands:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pip install --upgrade pip"
        }), " -- upgrade pip itself"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pip show <package>"
        }), " -- package metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pip uninstall <package>"
        }), " -- remove a package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pip cache purge"
        }), " -- reclaim disk space"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "110-running-python-scripts",
      children: "1.10 Running Python Scripts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python supports running modules with -m, inline code with -c, and post-execution REPL with -i."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Beyond ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python script.py"
      }), ", Python supports several invocation modes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run module as script\r\npython -m http.server 8000\r\n\r\n# Execute a string\r\npython -c \"print(sum(range(10)))\"\r\n\r\n# Interactive mode after executing a script\r\npython -i script.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-m"
      }), " flag runs a library module as a script. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-c"
      }), " flag executes the given string. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-i"
      }), " flag drops into the REPL after the script finishes, which is useful for debugging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Other Languages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block delimiters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indentation (4 spaces)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curly braces {} (C/Java/JS)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pip + venv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "npm (Node), cargo (Rust)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Execution model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreted + bytecode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiled (C/Rust) or JIT (Java)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The REPL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Built-in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python"
            }), " command"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate tools (irb, node -i)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Hello world\r\nprint(\"Hello, world!\")\r\n\r\n# Check version\r\nimport sys; print(sys.version)\r\n\r\n# Create venv\r\npython -m venv .venv\r\n\r\n# Install package\r\npip install requests\r\n\r\n# Run module\r\npython -m http.server 8000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevant Section"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running Flask/Django apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jupyter notebooks in conda envs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.8.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script shebang and execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements.txt for build reproducibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.9"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-equivalent-first-program",
      children: "TypeScript Equivalent: First Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since this course has TypeScript examples elsewhere, here is how the same concepts look in TypeScript:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Hello world equivalent\r\nconsole.log(\"Hello, world!\");\r\n\r\n// Indentation in TypeScript (uses braces, not indentation)\r\nconst x: number = 10;\r\nif (x > 5) {\r\n  console.log(\"x is greater than 5\"); // inside block\r\n}\r\nconsole.log(\"This is outside the if block\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-ecosystem-comparison",
      children: "Python vs TypeScript: Ecosystem Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "npm / yarn / bun"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual env"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "venv / conda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "node_modules (local)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "node"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ts-node"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Style guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEP 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESLint + Prettier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (gradual via type hints)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static (compiled)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (interpreted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tsc / esbuild / bun"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pyproject.toml / setup.py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tsconfig.json"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".py file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".ts file (compiled to .js)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Run script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python script.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bun run script.ts"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip install requests"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bun add express"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-execution-model",
      children: "Python Execution Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Source Code .py] --> B[Compiler]\r\n    B --> C[Bytecode .pyc]\r\n    C --> D[Python Virtual Machine]\r\n    D --> E[Output]\r\n\r\n    F[Source Code .ts] --> G[TypeScript Compiler tsc]\r\n    G --> H[JavaScript .js]\r\n    H --> I[Node.js / Bun Runtime]\r\n    I --> J[Output]\r\n\r\n    A -.->|Different| F\r\n    C -.->|Different| H"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python compiles source code to platform-independent bytecode (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pyc"
      }), " files in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__pycache__/"
      }), "), which the Python Virtual Machine executes. TypeScript compiles to JavaScript, which then runs in a JS runtime (Node.js, Bun, or browser). Both use intermediate representations, but Python's VM is part of the runtime itself, while TypeScript targets an existing JS engine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Running and packaging\r\n// $ bun run hello.ts       (like python hello.py)\r\n// $ bun add express        (like pip install requests)\r\n\r\n// TypeScript REPL (like Python's python command)\r\n// $ node\r\n// > console.log(\"Hello\")\r\n// Hello\r\n// > .exit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Python Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Mistake"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "python"
            }), " starts interactive shell"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forgetting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            }), " or Ctrl+D to quit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 spaces, mandatory for blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixing tabs and spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Environments"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "python -m venv .venv"
            }), " isolates packages"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installing globally instead of in env"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pip"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pip freeze > requirements.txt"
            }), " to lock deps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not pinning versions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docstrings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"\"\"triple quotes\"\"\""
            }), " for documentation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing with comments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TypeScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic typing vs static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python catches type errors at runtime"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What does the REPL acronym stand for?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read-Eval-Print-Loop ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read-Execute-Parse-Loop"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run-Evaluate-Parse-Load"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive-Execution-Programming-Language"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which command creates a virtual environment named .venv?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python venv .venv"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "python -m venv .venv"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "pip venv .venv"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "conda venv .venv"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What indentation width does PEP 8 recommend?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 spaces"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["4 spaces ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 tab"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "8 spaces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which file does pip use to export dependencies?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "package.json"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["requirements.txt ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pipfile"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pyproject.toml"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python -m http.server 8000"
      }), " do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installs http package"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Starts web server on port 8000 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Downloads from port 8000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks if port 8000 is open"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-ides-and-tools",
      children: "Python IDEs and Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right editor significantly impacts productivity:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VS Code + Python extension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Editor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General Python development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PyCharm (Community/Professional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full IDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large projects, Django, data science"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jupyter Lab / Notebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive notebook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data analysis, exploration, teaching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thonny"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner IDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning Python for the first time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in IDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick tests, no installation needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python's built-in debugger\r\nimport pdb\r\n\r\ndef buggy_function(x):\r\n    result = []\r\n    for i in range(x):\r\n        pdb.set_trace()  # Execution pauses here for inspection\r\n        result.append(i ** 2)\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-community-and-resources",
      children: "Python Community and Resources"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Python ecosystem thrives on community contributions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PyPI"
        }), " (Python Package Index): Over 500,000 packages available via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PSF"
        }), " (Python Software Foundation): Non-profit that manages Python development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PEPs"
        }), " (Python Enhancement Proposals): Design documents for language evolution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Core contributors"
        }), ": Thousands of developers worldwide submit improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conferences"
        }), ": PyCon (global), EuroPython, PyData for data science"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Find documentation for any module\r\nimport math\r\nhelp(math)  # Displays full documentation\r\n\r\n# List all attributes of a module\r\nprint([m for m in dir(math) if not m.startswith('_')])\r\n# ['acos', 'acosh', 'asin', 'asinh', 'atan', ...]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-version-history",
      children: "Python Version History"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Features"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last of Python 2 line (EOL 2020)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "async"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "await"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typing"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@"
            }), " matrix mul"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f-strings, underscore in numeric literals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dataclasses"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "breakpoint()"
            }), ", dict ordering"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Walrus operator ", (0,jsx_runtime.jsx)(_components.code, {
              children: ":="
            }), ", positional-only params"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dict"
            }), " merge ", (0,jsx_runtime.jsx)(_components.code, {
              children: "|"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "str.removeprefix"
            }), ", generic types"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2021"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pattern matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "match/case"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X | Y"
            }), " types"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2022"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exception groups, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Self"
            }), " type, faster runtime"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Type parameter syntax, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@override"
            }), ", perf improvements"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-threaded CPython, JIT compiler, improved error messages"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python 2 reached end-of-life on January 1, 2020. All modern Python development uses Python 3.x. The 3.10+ series introduced structural pattern matching (", (0,jsx_runtime.jsx)(_components.code, {
        children: "match/case"
      }), "), and 3.13 begins experimenting with a JIT compiler for performance improvements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Python version\r\npython --version\r\n# Python 3.13.1\r\n\r\n# Check TypeScript version\r\ntsc --version\r\n# Version 5.7.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript version info\r\nconst version: string = process.version;\r\nconsole.log(`Node.js version: ${version}`);\r\n// Node.js v22.0.0\r\n\r\n// TypeScript: static typing example\r\nfunction greet(name: string, age: number): string {\r\n  return `Hello, ${name}! You are ${age} years old.`;\r\n}\r\n// Python equivalent: def greet(name, age): return f\"Hello, {name}! ...\"\r\n\r\n// TypeScript: arrays and methods\r\nconst languages: string[] = [\"Python\", \"TypeScript\", \"JavaScript\"];\r\nlanguages.push(\"Rust\");\r\nconsole.log(languages.length);  // 4\r\n\r\n// TypeScript: BigInt for large integers (Python int is arbitrary precision)\r\nconst big: bigint = 2n ** 100n;\r\nconsole.log(big.toString());\r\n\r\n// TypeScript: module system\r\nimport { createServer } from \"node:http\";\r\nconst server = createServer((req, res) => {\r\n  res.writeHead(200, { \"Content-Type\": \"text/plain\" });\r\n  res.end(\"Hello from TypeScript!\\n\");\r\n});\r\nserver.listen(3000);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-development-environment",
      children: "TypeScript Development Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// package.json — project setup\r\n{\r\n  \"name\": \"ts-project\",\r\n  \"version\": \"1.0.0\",\r\n  \"type\": \"module\",\r\n  \"scripts\": {\r\n    \"dev\": \"bun run --watch src/index.ts\",\r\n    \"build\": \"tsc\",\r\n    \"start\": \"node dist/index.js\"\r\n  },\r\n  \"devDependencies\": {\r\n    \"typescript\": \"^5.7.0\"\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// tsconfig.json — TypeScript compiler configuration\r\n{\r\n  \"compilerOptions\": {\r\n    \"target\": \"ES2023\",\r\n    \"module\": \"NodeNext\",\r\n    \"moduleResolution\": \"NodeNext\",\r\n    \"strict\": true,\r\n    \"outDir\": \"./dist\",\r\n    \"rootDir\": \"./src\",\r\n    \"esModuleInterop\": true,\r\n    \"forceConsistentCasingInFileNames\": true,\r\n    \"skipLibCheck\": true\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python--typescript-quick-reference",
      children: "Python → TypeScript Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Python Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Difference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "venv"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "conda"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "node_modules"
            }), " / Bun workspaces"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python isolates interpreters; Node has global vs local packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip install"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm install"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bun add"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same concept, different registries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "requirements.txt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS pins exact versions in lockfile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python script.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bun run script.ts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS compiles (or transpiles via Bun) before execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPL"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "node"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bun"
            }), " shell"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both provide interactive read-eval-print loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PyPI"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm"
            }), " registry"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both are public package registries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-hello-world-comparison",
      children: "Python vs TypeScript: Hello World Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript Hello World with type safety\r\nfunction hello(name: string): string {\r\n  return `Hello, ${name}! Welcome to TypeScript.`;\r\n}\r\n\r\n// Python: def hello(name): return f\"Hello, {name}! Welcome to Python.\"\r\nconsole.log(hello(\"Developer\"));\r\n\r\n// TypeScript type checking catches errors at compile time\r\nconst greeting: string = hello(\"World\");\r\n// const age: number = greeting;  // TypeScript error: Type 'string' not assignable to 'number'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-key-architectural-differences",
      children: "Python vs TypeScript: Key Architectural Differences"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Execution model: Interpreted (Python) vs Compiled (TypeScript → JavaScript)\r\n// Python: python script.py  (interpreted line by line)\r\n// TypeScript: tsc → node dist/script.js  (compiled, then run)\r\n// Bun: bun run script.ts  (transpiled and run JIT)\r\n\r\n// Type safety: Dynamic (Python) vs Static (TypeScript)\r\n// Python: x = 42; x = \"hello\"  (perfectly valid)\r\n// TypeScript: let x: number = 42; x = \"hello\";  // Compile error\r\n\r\n// Block structure: Indentation (Python) vs Braces (TypeScript)\r\n// Python:\r\n//   if True:\r\n//       print(\"hello\")\r\n// TypeScript:\r\n//   if (true) {\r\n//     console.log(\"hello\");\r\n//   }\r\n\r\n// TypeScript: Union types (not available in Python type hints)\r\ntype Result = { status: \"success\"; data: string } | { status: \"error\"; message: string };\r\nfunction handleResult(r: Result): string {\r\n  if (r.status === \"success\") return `Data: ${r.data}`;\r\n  return `Error: ${r.message}`;\r\n}\r\n// Python: Union types via typing.Union but no discriminated union narrowing\r\n\r\n// TypeScript: Generics (compile-time) vs Python generics (runtime hints)\r\nfunction identity<T>(value: T): T { return value; }\r\nconst num = identity<number>(42);    // type: number\r\nconst str = identity<string>(\"hi\");  // type: string\r\n\r\n// TypeScript: Optional chaining (Python: no equivalent)\r\nconst user2: { address?: { city?: string } } = {};\r\nconst city2 = user2?.address?.city ?? \"Unknown\";\r\n// Python: getattr(getattr(user, \"address\", None), \"city\", \"Unknown\") or try/except\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Python vs TypeScript Syntax Equivalency Table ===\r\ntype SyntaxEntry = {\r\n  python: string;\r\n  typescript: string;\r\n  notes: string;\r\n};\r\nconst syntaxTable: SyntaxEntry[] = [\r\n  { python: \"print(x)\", typescript: \"console.log(x)\", notes: \"Console output\" },\r\n  { python: \"def f(x):\", typescript: \"function f(x):\", notes: \"Function definition\" },\r\n  { python: \"if x > 0:\", typescript: \"if (x > 0) {\", notes: \"Blocks use indentation vs braces\" },\r\n  { python: \"x if cond else y\", typescript: \"cond ? x : y\", notes: \"Ternary order differs\" },\r\n  { python: \"x is None\", typescript: \"x === null || x === undefined\", notes: \"None vs null/undefined\" },\r\n  { python: \"len(lst)\", typescript: \"lst.length\", notes: \"Function vs property\" },\r\n  { python: \"lst.append(x)\", typescript: \"lst.push(x)\", notes: \"Add to end\" },\r\n  { python: \"not x\", typescript: \"!x\", notes: \"Logical negation\" },\r\n  { python: \"x and y\", typescript: \"x && y\", notes: \"Logical AND\" },\r\n  { python: \"x or y\", typescript: \"x || y\", notes: \"Logical OR\" },\r\n  { python: \"range(n)\", typescript: \"[...Array(n).keys()]\", notes: \"Range generation\" },\r\n  { python: \"for i, v in enumerate(lst):\", typescript: \"lst.forEach((v, i) => {})\", notes: \"Indexed iteration\" },\r\n  { python: \"x in lst\", typescript: \"lst.includes(x)\", notes: \"Membership test\" },\r\n  { python: '\"\".join(lst)', typescript: \"lst.join('')\", notes: \"Join strings\" },\r\n  { python: \"import math\", typescript: \"import * as math from 'math'\", notes: \"Module import\" },\r\n  { python: \"class A:\", typescript: \"class A {}\", notes: \"Class definition\" },\r\n  { python: \"try/except\", typescript: \"try/catch\", notes: \"Exception handling\" },\r\n  { python: \"with open(f) as fh:\", typescript: \"No direct equivalent\", notes: \"Context manager\" },\r\n];\r\nfunction lookupSyntax(python: string): string {\r\n  return syntaxTable.find((e) => e.python === python)?.typescript ?? \"Not found\";\r\n}\r\nconsole.log(lookupSyntax(\"print(x)\"));\r\n\r\n// === Environment Setup Checker ===\r\ninterface EnvRequirement {\r\n  tool: string;\r\n  command: string;\r\n  required: boolean;\r\n}\r\nconst envReqs: EnvRequirement[] = [\r\n  { tool: \"Python 3.10+\", command: \"python --version\", required: true },\r\n  { tool: \"pip\", command: \"pip --version\", required: true },\r\n  { tool: \"venv\", command: \"python -m venv --help\", required: true },\r\n  { tool: \"Node.js 18+\", command: \"node --version\", required: false },\r\n  { tool: \"TypeScript\", command: \"npx tsc --version\", required: false },\r\n];\r\nfunction checkSetup(reqs: EnvRequirement[]): { ok: boolean; missing: string[] } {\r\n  const missing = reqs.filter((r) => r.required).map((r) => r.tool);\r\n  return { ok: missing.length === 0, missing };\r\n}\r\nconsole.log(checkSetup(envReqs));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python is an interpreted, dynamically typed language emphasising readability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The REPL provides interactive experimentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indentation (four spaces) defines block structure."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "venv"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "conda"
        }), " provide environment isolation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pip"
        }), " manages third-party packages from PyPI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does REPL stand for and what is its purpose?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does Python use indentation instead of braces?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "venv"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "conda"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do you check which packages are installed in the current environment?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m http.server 8000"
        }), " do?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does Python's execution model differ from TypeScript's compilation model?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__pycache__"
        }), " directory?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install Python 3.10 or later. Create a virtual environment named ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".venv"
        }), " and activate it. Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip list"
        }), " to show the baseline packages."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a script that prints your name, age, and favourite programming language. Execute it from the terminal."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the REPL to compute the factorial of 10 (hint: use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math.factorial"
        }), " after importing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math"
        }), "). Use the underscore variable to double the result."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a Python script that demonstrates three different comment styles (single-line, inline, and docstring). Run the script and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "help()"
        }), " on a function to verify the docstring appears."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript version of your Python script from problem 2. Compare the syntax differences -- how does TypeScript declare types? How does it print output?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a script that creates a virtual environment, installs the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requests"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pandas"
      }), " packages, generates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requirements.txt"
      }), " file, then deactivates and removes the environment using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subprocess.run"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "os.system"
      }), ". Verify each step with print statements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-practical-applications",
      children: "TypeScript Practical Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Python ↔ TypeScript Syntax Equivalence Table ===\r\nconst equivTable = [\r\n  { python: \"print('hello')\", ts: \"console.log('hello')\", note: \"Console output\" },\r\n  { python: \"len(list)\", ts: \"list.length\", note: \"Length property\" },\r\n  { python: \"None\", ts: \"null\", note: \"Null value\" },\r\n  { python: \"True / False\", ts: \"true / false\", note: \"Boolean literals\" },\r\n  { python: \"def f(x):\", ts: \"function f(x: type): type\", note: \"Function definition with types\" },\r\n  { python: \"if __name__ == '__main__':\", ts: \"if (require.main === module)\", note: \"Entry point\" },\r\n  { python: \"str(42)\", ts: \"String(42)\", note: \"Convert to string\" },\r\n  { python: \"# comment\", ts: \"// comment\", note: \"Single-line comment\" },\r\n  { python: \"'''doc'''\", ts: \"/** doc */\", note: \"Documentation comment\" },\r\n  { python: \"pass\", ts: \"{} // empty block\", note: \"No-op placeholder\" },\r\n  { python: \"lambda x: x*2\", ts: \"(x: number) => x * 2\", note: \"Anonymous function\" },\r\n  { python: \"range(5)\", ts: \"[...Array(5).keys()]\", note: \"Number range\" },\r\n  { python: \"isinstance(x, int)\", ts: \"typeof x === 'number'\", note: \"Type check\" },\r\n  { python: \"...\", ts: \"/* empty */\", note: \"Ellipsis / placeholder\" },\r\n  { python: \"raise Exception()\", ts: \"throw new Error()\", note: \"Exception throwing\" },\r\n  { python: \"try/except/finally\", ts: \"try/catch/finally\", note: \"Exception handling\" },\r\n  { python: \"with open(f) as fh:\", ts: \"// Manual try/finally\", note: \"Resource management\" },\r\n  { python: \"for x in iterable:\", ts: \"for (const x of iterable)\", note: \"Iteration\" },\r\n  { python: \"a, b = b, a\", ts: \"[a, b] = [b, a]\", note: \"Swap via destructuring\" },\r\n  { python: \"dict.keys()\", ts: \"Object.keys(dict)\", note: \"Key enumeration\" },\r\n  { python: \"set.add(x)\", ts: \"set.add(x)\", note: \"Set insertion\" },\r\n  { python: \"list.append(x)\", ts: \"array.push(x)\", note: \"List/array append\" },\r\n  { python: \"list.pop()\", ts: \"array.pop()\", note: \"Pop last element\" },\r\n  { python: \"sorted(list)\", ts: \"[...array].sort()\", note: \"Sorted copy\" },\r\n  { python: \"reversed(list)\", ts: \"[...array].reverse()\", note: \"Reversed copy\" },\r\n  { python: \"enumerate(list)\", ts: \"array.entries()\", note: \"Indexed iteration\" },\r\n  { python: \"zip(a, b)\", ts: \"a.map((_, i) => [a[i], b[i]])\", note: \"Parallel iteration\" },\r\n  { python: \"any(list)\", ts: \"array.some(Boolean)\", note: \"Any true\" },\r\n  { python: \"all(list)\", ts: \"array.every(Boolean)\", note: \"All true\" },\r\n  { python: \"sum(list)\", ts: \"array.reduce((a,b)=>a+b, 0)\", note: \"Summation\" },\r\n];\r\nequivTable.forEach(e => console.log(`${e.python.padEnd(25)} → ${e.ts.padEnd(35)} # ${e.note}`));\r\n\r\n// === Python Interop Pattern: Config Parser in Both ===\r\ninterface PythonConfig {\r\n  version: string;\r\n  dependencies: Record<string, string>;\r\n  scripts: Record<string, string>;\r\n}\r\nfunction parsePythonCfg(raw: string): PythonConfig {\r\n  const lines = raw.split(\"\\n\").filter(l => l.trim() && !l.startsWith(\"#\"));\r\n  const cfg: PythonConfig = { version: \"\", dependencies: {}, scripts: {} };\r\n  let section = \"\";\r\n  for (const line of lines) {\r\n    if (line.startsWith(\"[\")) { section = line.match(/\\[(.+)\\]/)![1]; continue; }\r\n    const [k, ...v] = line.split(\"=\").map(s => s.trim());\r\n    const val = v.join(\"=\");\r\n    if (section === \"metadata\") cfg.version ??= val;\r\n    else if (section === \"dependencies\") cfg.dependencies[k] = val;\r\n    else if (section === \"scripts\") cfg.scripts[k] = val;\r\n  }\r\n  return cfg;\r\n}\r\nconsole.log(parsePythonCfg(\"[metadata]\\nversion=1.0\\n[dependencies]\\nrequests=2.28\\n[scripts]\\ntest=pytest\"));\r\n\r\n// === Execution Time Benchmark ===\r\nfunction bench(fn: () => void, label: string, iterations = 10000): number {\r\n  const start = performance.now();\r\n  for (let i = 0; i < iterations; i++) fn();\r\n  return performance.now() - start;\r\n}\r\nconst arr = Array.from({ length: 1000 }, (_, i) => i);\r\nconst listComp = bench(() => { const r: number[] = []; for (const x of arr) if (x % 2 === 0) r.push(x * 2); return r; }, \"list comprehension\");\r\nconst filterMap = bench(() => arr.filter(x => x % 2 === 0).map(x => x * 2), \"filter+map\");\r\nconsole.log(`list comp: ${listComp.toFixed(2)}ms, filter+map: ${filterMap.toFixed(2)}ms`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-data-structures--algorithms-primer",
      children: "TypeScript Data Structures & Algorithms Primer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Stack (Python: list as stack) ===\r\nclass Stack<T> {\r\n  private items: T[] = [];\r\n  push(item: T): void { this.items.push(item); }\r\n  pop(): T | undefined { return this.items.pop(); }\r\n  peek(): T | undefined { return this.items[this.items.length - 1]; }\r\n  get length(): number { return this.items.length; }\r\n}\r\nconst stack = new Stack<number>();\r\nstack.push(1); stack.push(2); stack.push(3);\r\nconsole.log(stack.pop());  // 3\r\nconsole.log(stack.peek()); // 2\r\n\r\n// === Queue (Python: deque) ===\r\nclass Queue<T> {\r\n  private items: T[] = [];\r\n  enqueue(item: T): void { this.items.push(item); }\r\n  dequeue(): T | undefined { return this.items.shift(); }\r\n  get length(): number { return this.items.length; }\r\n}\r\n\r\n// === Linked List (Python: manual implementation) ===\r\nclass ListNode<T> { constructor(public value: T, public next: ListNode<T> | null = null) {} }\r\nclass LinkedList<T> {\r\n  private head: ListNode<T> | null = null;\r\n  append(value: T): void {\r\n    if (!this.head) { this.head = new ListNode(value); return; }\r\n    let current = this.head;\r\n    while (current.next) current = current.next;\r\n    current.next = new ListNode(value);\r\n  }\r\n  toArray(): T[] {\r\n    const result: T[] = [];\r\n    let current = this.head;\r\n    while (current) { result.push(current.value); current = current.next; }\r\n    return result;\r\n  }\r\n}\r\n\r\n// === Binary Search Tree (Python: BST) ===\r\nclass BSTNode { constructor(public value: number, public left: BSTNode | null = null, public right: BSTNode | null = null) {} }\r\nclass BST {\r\n  private root: BSTNode | null = null;\r\n  insert(value: number): void {\r\n    const newNode = new BSTNode(value);\r\n    if (!this.root) { this.root = newNode; return; }\r\n    let current = this.root;\r\n    while (true) {\r\n      if (value < current.value) {\r\n        if (!current.left) { current.left = newNode; return; }\r\n        current = current.left;\r\n      } else {\r\n        if (!current.right) { current.right = newNode; return; }\r\n        current = current.right;\r\n      }\r\n    }\r\n  }\r\n  inOrder(): number[] {\r\n    const result: number[] = [];\r\n    function traverse(node: BSTNode | null): void {\r\n      if (!node) return;\r\n      traverse(node.left);\r\n      result.push(node.value);\r\n      traverse(node.right);\r\n    }\r\n    traverse(this.root);\r\n    return result;\r\n  }\r\n  search(value: number): boolean {\r\n    let current = this.root;\r\n    while (current) {\r\n      if (value === current.value) return true;\r\n      current = value < current.value ? current.left : current.right;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\r\n// === Graph (Python: adjacency list) ===\r\nclass Graph {\r\n  private adj = new Map<string, string[]>();\r\n  addVertex(v: string): void { if (!this.adj.has(v)) this.adj.set(v, []); }\r\n  addEdge(v1: string, v2: string): void {\r\n    this.adj.get(v1)?.push(v2);\r\n    this.adj.get(v2)?.push(v1);\r\n  }\r\n  bfs(start: string): string[] {\r\n    const visited = new Set<string>();\r\n    const queue = [start];\r\n    const result: string[] = [];\r\n    while (queue.length > 0) {\r\n      const v = queue.shift()!;\r\n      if (visited.has(v)) continue;\r\n      visited.add(v);\r\n      result.push(v);\r\n      for (const neighbor of this.adj.get(v) ?? []) {\r\n        if (!visited.has(neighbor)) queue.push(neighbor);\r\n      }\r\n    }\r\n    return result;\r\n  }\r\n  dfs(start: string): string[] {\r\n    const visited = new Set<string>();\r\n    const result: string[] = [];\r\n    const dfs_rec = (v: string): void => {\r\n      if (visited.has(v)) return;\r\n      visited.add(v);\r\n      result.push(v);\r\n      for (const n of this.adj.get(v) ?? []) dfs_rec(n);\r\n    };\r\n    dfs_rec(start);\r\n    return result;\r\n  }\r\n}\r\n\r\n// === Hash Table (Python: dict) ===\r\nclass SimpleHashTable<K, V> {\r\n  private buckets = new Map<number, [K, V][]>();\r\n  private hash(key: K): number {\r\n    const str = String(key);\r\n    let hash = 0;\r\n    for (let i = 0; i < str.length; i++) { hash = (hash << 5) - hash + str.charCodeAt(i); hash |= 0; }\r\n    return Math.abs(hash);\r\n  }\r\n  set(key: K, value: V): void {\r\n    const h = this.hash(key);\r\n    if (!this.buckets.has(h)) this.buckets.set(h, []);\r\n    const bucket = this.buckets.get(h)!;\r\n    const existing = bucket.find(([k]) => k === key);\r\n    if (existing) existing[1] = value;\r\n    else bucket.push([key, value]);\r\n  }\r\n  get(key: K): V | undefined { return this.buckets.get(this.hash(key))?.find(([k]) => k === key)?.[1]; }\r\n}\r\n\r\nconst bst = new BST();\r\n[5, 3, 7, 2, 4, 6, 8].forEach(v => bst.insert(v));\r\nconsole.log(bst.inOrder());  // [2, 3, 4, 5, 6, 7, 8]\r\nconsole.log(bst.search(4));  // true\r\nconsole.log(bst.search(9));  // false\r\n\r\nconst g = new Graph();\r\n[\"A\",\"B\",\"C\",\"D\",\"E\"].forEach(v => g.addVertex(v));\r\ng.addEdge(\"A\",\"B\"); g.addEdge(\"A\",\"C\"); g.addEdge(\"B\",\"D\"); g.addEdge(\"C\",\"E\");\r\nconsole.log(g.bfs(\"A\")); // [\"A\",\"B\",\"C\",\"D\",\"E\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create both a Python script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "compare.py"
      }), ") and a TypeScript script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "compare.ts"
      }), ") that each:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Print the language name and version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a list/array of 5 items and print each with its index"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a function that takes two numbers and returns their sum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call the function with test values and print the result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run both and note the differences in syntax, execution, and output."
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



/***/ }

}]);