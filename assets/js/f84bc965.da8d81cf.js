"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[160],{

/***/ 8364
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_11_modules_md_f84_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-11-modules-md-f84.json
const site_docs_courses_python_programming_11_modules_md_f84_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/11-modules","title":"Chapter 11: Modules and Packages","description":"Previous Object-Oriented Programming","source":"@site/docs/courses/python-programming/11-modules.md","sourceDirName":"courses/python-programming","slug":"/python-programming/11-modules","permalink":"/ai-engineering-journey/python-programming/11-modules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-modules","slug":"/python-programming/11-modules","title":"Chapter 11: Modules and Packages","sidebar_label":"Chapter 11: Modules and Packages","sidebar_position":11},"sidebar":"course-python-programming","previous":{"title":"Chapter 10: Lambda and Functional Programming","permalink":"/ai-engineering-journey/python-programming/10-lambda"},"next":{"title":"Chapter 12: Object-Oriented Programming","permalink":"/ai-engineering-journey/python-programming/12-oop"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/11-modules.md


const frontMatter = {
	id: '11-modules',
	slug: '/python-programming/11-modules',
	title: 'Chapter 11: Modules and Packages',
	sidebar_label: 'Chapter 11: Modules and Packages',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Modules and Packages';

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
  "value": "11.1 Module Basics",
  "id": "111-module-basics",
  "level": 2
}, {
  "value": "11.2 Import Mechanisms",
  "id": "112-import-mechanisms",
  "level": 2
}, {
  "value": "11.2.1 Basic Import",
  "id": "1121-basic-import",
  "level": 3
}, {
  "value": "11.2.2 Import with Alias",
  "id": "1122-import-with-alias",
  "level": 3
}, {
  "value": "11.2.3 Import Specific Names",
  "id": "1123-import-specific-names",
  "level": 3
}, {
  "value": "11.2.4 Import All Names",
  "id": "1124-import-all-names",
  "level": 3
}, {
  "value": "11.2.5 Import with Alias for Specific Names",
  "id": "1125-import-with-alias-for-specific-names",
  "level": 3
}, {
  "value": "11.3 if <strong>name</strong> == &quot;<strong>main</strong>&quot;",
  "id": "113-if-name--main",
  "level": 2
}, {
  "value": "11.4 Packages",
  "id": "114-packages",
  "level": 2
}, {
  "value": "11.5 Absolute vs Relative Imports",
  "id": "115-absolute-vs-relative-imports",
  "level": 2
}, {
  "value": "11.5.1 Absolute Imports",
  "id": "1151-absolute-imports",
  "level": 3
}, {
  "value": "11.5.2 Relative Imports",
  "id": "1152-relative-imports",
  "level": 3
}, {
  "value": "11.6 sys.path and Module Search",
  "id": "116-syspath-and-module-search",
  "level": 2
}, {
  "value": "11.7 Third-Party Packages with pip",
  "id": "117-third-party-packages-with-pip",
  "level": 2
}, {
  "value": "requirements.txt",
  "id": "requirementstxt",
  "level": 3
}, {
  "value": "Common Commands",
  "id": "common-commands",
  "level": 3
}, {
  "value": "11.8 Wheel vs Source Distribution",
  "id": "118-wheel-vs-source-distribution",
  "level": 2
}, {
  "value": "11.9 Creating a Distributable Package",
  "id": "119-creating-a-distributable-package",
  "level": 2
}, {
  "value": "11.10 Module Recursion and Circular Imports",
  "id": "1110-module-recursion-and-circular-imports",
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
  "value": "TypeScript Package Management &amp; Module Resolution",
  "id": "typescript-package-management--module-resolution",
  "level": 3
}, {
  "value": "TypeScript Module Re-export &amp; Namespace Patterns",
  "id": "typescript-module-re-export--namespace-patterns",
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
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "TypeScript Module Bundler Simulation",
  "id": "typescript-module-bundler-simulation",
  "level": 3
}, {
  "value": "TypeScript Practical Applications",
  "id": "typescript-practical-applications",
  "level": 3
}, {
  "value": "TypeScript Module System vs Python",
  "id": "typescript-module-system-vs-python",
  "level": 3
}, {
  "value": "Publishing a Package to PyPI",
  "id": "publishing-a-package-to-pypi",
  "level": 3
}, {
  "value": "Python Package Ecosystem",
  "id": "python-package-ecosystem",
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
        id: "chapter-11-modules-and-packages",
        children: "Chapter 11: Modules and Packages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/10-lambda",
          children: "Lambda and Functional Programming"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/12-oop",
          children: "Object-Oriented Programming"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and import modules using various import mechanisms"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if __name__ == \"__main__\""
        }), " guard correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Organise code into packages with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish absolute and relative imports"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sys.path"
        }), " and third-party dependencies with pip"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build and distribute packages using setuptools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/11-modules.png",
        alt: "Modules and Packages"
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
            children: "11.1 Module Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A module is a ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".py"
            }), " file; importing it executes top-level code once, then caches in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sys.modules"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.2 Import Mechanisms"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if __name__ == \"__main__\""
            }), " guard lets a file serve both as module and script."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["11.3 if ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "name"
            }), " == \"", (0,jsx_runtime.jsx)(_components.strong, {
              children: "main"
            }), "\""]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Packages are directories with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__.py"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__.py"
            }), " controls what ", (0,jsx_runtime.jsx)(_components.code, {
              children: "import package"
            }), " exposes."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.4 Packages"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Absolute imports use full paths; relative imports use dots (", (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".."
            }), ") and only work inside packages."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.5 Absolute vs Relative Imports"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "pip installs from PyPI; wheels install faster than source distributions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.6 sys.path and Module Search"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.7 Third-Party Packages with pip"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.8 Wheel vs Source Distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.9 Creating a Distributable Package"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.10 Module Recursion and Circular Imports"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S0[Module Basics]\r\n    S1[Import Mechanisms]\r\n    S2[\"if __name__ == #quot;__main__#quot;\"]\r\n    S3[Packages]\r\n    S4[Absolute vs Relative Imports]\r\n    S5[sys.path and Module Search]\r\n    S6[Third-Party Packages with pip]\r\n    S7[Wheel vs Source Distribution]\r\n    S8[Creating a Distributable Package]\r\n    S9[Module Recursion and Circular Imports]\r\n    S0 --> S1\r\n    S1 --> S2\r\n    S2 --> S3\r\n    S3 --> S4\r\n    S4 --> S5\r\n    S5 --> S6\r\n    S6 --> S7\r\n    S7 --> S8\r\n    S8 --> S9"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-module-basics",
      children: "11.1 Module Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A module is a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".py"
        }), " file; importing it executes top-level code once, then caches in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sys.modules"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A module is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".py"
      }), " file containing Python definitions and statements. The filename (without ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".py"
      }), ") is the module name:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# mymodule.py\r\ndef greet(name):\r\n    return f\"Hello, {name}!\"\r\n\r\nPI = 3.14159\r\n\r\nclass Circle:\r\n    def __init__(self, radius):\r\n        self.radius = radius\r\n\r\nprint(\"mymodule loaded\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Import it in another file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# main.py\r\nimport mymodule\r\n\r\nprint(mymodule.greet(\"Alice\"))   # Hello, Alice!\r\nprint(mymodule.PI)               # 3.14159\r\ncircle = mymodule.Circle(5)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a module is imported, Python executes all of its code. Subsequent imports use a cached version from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sys.modules"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import mymodule  # prints \"mymodule loaded\"\r\nimport mymodule  # no output → already cached\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-import-mechanisms",
      children: "11.2 Import Mechanisms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if __name__ == \"__main__\""
        }), " guard lets a file serve both as module and script.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "from module import *"
        }), " — it pollutes the namespace and can silently override existing names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1121-basic-import",
      children: "11.2.1 Basic Import"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math            # imports the module object\r\nprint(math.sqrt(16))   # 4.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1122-import-with-alias",
      children: "11.2.2 Import with Alias"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\r\nprint(np.array([1, 2, 3]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1123-import-specific-names",
      children: "11.2.3 Import Specific Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from math import sqrt, pi\r\nprint(sqrt(25))   # 5.0\r\nprint(pi)         # 3.14159\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1124-import-all-names",
      children: "11.2.4 Import All Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from math import *   # imports all public names (discouraged)\r\nprint(sin(0))        # 0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
        children: "import *"
      }), " because it pollutes the namespace and can silently override existing names."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1125-import-with-alias-for-specific-names",
      children: "11.2.5 Import with Alias for Specific Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from math import sqrt as square_root\r\nprint(square_root(9))  # 3.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "113-if-name--main",
      children: ["11.3 if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " == \"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "main"
      }), "\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Packages are directories with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__.py"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__.py"
        }), " controls what ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import package"
        }), " exposes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__name__"
      }), " variable is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"__main__\""
      }), " when the file is executed directly, and the module name when imported:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# calculator.py\r\ndef add(a, b):\r\n    return a + b\r\n\r\ndef subtract(a, b):\r\n    return a - b\r\n\r\nif __name__ == \"__main__\":\r\n    # Test code → runs only when executed directly\r\n    print(add(2, 3))       # 5\r\n    print(subtract(10, 4)) # 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# main.py\r\nimport calculator         # does NOT run the test block\r\nprint(calculator.add(5, 3))  # 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guard allows a file to serve both as a reusable module and as a standalone script."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-packages",
      children: "11.4 Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Absolute imports use full paths; relative imports use dots (", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".."
        }), ") and only work inside packages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A package is a directory containing an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__init__.py"
      }), " file (possibly empty) and submodules:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mypackage/\r\n    __init__.py\r\n    math_ops.py\r\n    string_ops.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# mypackage/__init__.py\r\nfrom .math_ops import add, subtract\r\nfrom .string_ops import uppercase\r\n\r\n# mypackage/math_ops.py\r\ndef add(a, b): return a + b\r\ndef subtract(a, b): return a - b\r\n\r\n# mypackage/string_ops.py\r\ndef uppercase(s): return s.upper()\r\ndef reverse(s): return s[::-1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import mypackage\r\nprint(mypackage.add(3, 4))       # 7\r\nprint(mypackage.uppercase(\"hi\")) # HI\r\n\r\nfrom mypackage import math_ops\r\nprint(math_ops.subtract(10, 3))  # 7\r\n\r\nfrom mypackage.math_ops import add\r\nprint(add(1, 2))                # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Python 3.3+, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__init__.py"
      }), " is optional for namespace packages (used for splitting a package across directories). However, explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__init__.py"
      }), " is still recommended for regular packages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-absolute-vs-relative-imports",
      children: "11.5 Absolute vs Relative Imports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " pip installs from PyPI; wheels install faster than source distributions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1151-absolute-imports",
      children: "11.5.1 Absolute Imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Absolute imports use the full path from the project root or from a package root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from package.submodule import function\r\n\r\n# Examples\r\nimport os\r\nfrom collections import OrderedDict\r\nfrom myproject.utils.helpers import format_date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Absolute imports are explicit and unambiguous."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1152-relative-imports",
      children: "11.5.2 Relative Imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Relative imports use dots to indicate the current package:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Inside mypackage/math_ops.py\r\nfrom . import config              # sibling module\r\nfrom .string_ops import reverse   # sibling\r\nfrom .. import parent_module      # parent package\r\nfrom ..other import something     # sibling of parent\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), " → current package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".."
        }), " → parent package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        }), " → grandparent package"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Relative imports cannot be used in scripts executed directly (only in modules within a package)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-syspath-and-module-search",
      children: "11.6 sys.path and Module Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python searches for modules in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sys.path"
      }), ", which includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The directory containing the script (or current directory in interactive mode)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Directories in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PYTHONPATH"
        }), " environment variable"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard library directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Site-packages directories (third-party packages)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\r\nfor path in sys.path:\r\n    print(path)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modify ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sys.path"
      }), " to add custom search paths:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\r\nsys.path.append(\"/path/to/my/modules\")\r\n\r\nimport mymodule  # now found\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is fragile → prefer installing modules properly or using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PYTHONPATH"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "117-third-party-packages-with-pip",
      children: "11.7 Third-Party Packages with pip"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install requests\r\npip install \"requests>=2.28,<3.0\"\r\npip install numpy pandas matplotlib\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirementstxt",
      children: "requirements.txt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "requests==2.31.0\r\nnumpy>=1.24,<2.0\r\npandas>=2.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install -r requirements.txt\r\npip freeze > requirements.txt  # snapshot current environment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-commands",
      children: "Common Commands"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "pip install <pkg>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install package"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip install -e ."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install current package in editable mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip uninstall <pkg>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove package"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List installed packages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip show <pkg>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify dependencies are compatible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "118-wheel-vs-source-distribution",
      children: "11.8 Wheel vs Source Distribution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source distribution (sdist)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".tar.gz"
        }), " containing source code; requires a build step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wheel"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".whl"
        }), " containing pre-built files; installs without compilation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Build distributions\r\npython -m pip install build\r\npython -m build\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This creates both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist/mypackage-1.0.0.tar.gz"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dist/mypackage-1.0.0-py3-none-any.whl"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prioritise wheel packages → they install faster and avoid build-time dependency issues."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "119-creating-a-distributable-package",
      children: "11.9 Creating a Distributable Package"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Project structure for distribution:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "myproject/\r\n    pyproject.toml\r\n    README.md\r\n    src/\r\n        myproject/\r\n            __init__.py\r\n            core.py\r\n            utils.py\r\n    tests/\r\n        test_core.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Minimal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pyproject.toml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-toml",
        children: "[build-system]\r\nrequires = [\"setuptools>=61.0\"]\r\nbuild-backend = \"setuptools.build_meta\"\r\n\r\n[project]\r\nname = \"myproject\"\r\nversion = \"0.1.0\"\r\ndescription = \"My awesome project\"\r\nrequires-python = \">=3.10\"\r\ndependencies = [\r\n    \"requests>=2.28\",\r\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install in editable mode during development:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install -e .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This makes the package importable and reflects local changes immediately."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1110-module-recursion-and-circular-imports",
      children: "11.10 Module Recursion and Circular Imports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A circular import occurs when two modules import each other:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# a.py\r\nimport b\r\nX = \"from a\"\r\n\r\n# b.py\r\nimport a\r\nY = \"from b\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This can cause ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ImportError"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AttributeError"
      }), ". Solutions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restructure code to remove the cycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move the import inside the function (lazy import):"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# b.py\r\ndef get_x():\r\n    import a  # imported only when called\r\n    return a.X\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a shared third module for common dependencies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lazy imports are a workaround, not a design → restructure to eliminate cycles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Import Style"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "import math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access via math.sqrt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selective import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "from math import sqrt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use sqrt directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aliased import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "import numpy as np"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortened name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "from math import *"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discouraged — namespace pollution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# module.py\r\ndef greet(name):\r\n    return f\"Hello, {name}\"\r\n\r\nif __name__ == \"__main__\":\r\n    print(greet(\"World\"))\r\n\r\n# main.py\r\nimport module\r\nprint(module.greet(\"Alice\"))\n"
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
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modularizing Flask/FastAPI routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable data-loading modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Packaging tools with pyproject.toml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splitting pipelines into packages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " equal when a file is run directly?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "module"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "main"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "file"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "direct"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is a package in Python?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a .py file"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a directory with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), ".py ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a zip file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a GitHub repo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which import is a relative import?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import os"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["from . import sibling ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import numpy as np"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "from math import pi"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What does sys.path contain?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["module search paths ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "environment variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python bytecode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "installed packages"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Why are wheels preferred?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "smaller file size"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["no build step needed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "faster execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "better security"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-package-management--module-resolution",
      children: "TypeScript Package Management & Module Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: pip install requests → TypeScript: bun add express\r\n// package.json dependencies:\r\n{\r\n  \"dependencies\": {\r\n    \"express\": \"^4.18.0\",\r\n    \"zod\": \"^3.22.0\"\r\n  },\r\n  \"devDependencies\": {\r\n    \"typescript\": \"^5.7.0\",\r\n    \"vitest\": \"^1.0.0\",\r\n    \"@types/node\": \"^20.0.0\"\r\n  }\r\n}\r\n\r\n// Python: from module import → TypeScript: dynamic imports\r\nasync function loadPlugin(name: string): Promise<unknown> {\r\n  const mod = await import(`./plugins/${name}.js`);\r\n  return mod.default;\r\n}\r\n// Python: importlib.import_module(f\"plugins.{name}\")\r\n\r\n// Python: __init__.py re-exports → TypeScript: barrel exports\r\n// index.ts (barrel file)\r\nexport { add, subtract } from \"./math.js\";\r\nexport type { User, Config } from \"./types.js\";\r\n\r\n// Python: sys.path → TypeScript: tsconfig paths\r\n// tsconfig.json:\r\n// {\r\n//   \"compilerOptions\": {\r\n//     \"paths\": {\r\n//       \"@utils/*\": [\"./src/utils/*\"],\r\n//       \"@models/*\": [\"./src/models/*\"]\r\n//     }\r\n//   }\r\n// }\r\n// Usage: import { format } from \"@utils/format\";\r\n\r\n// Python: circular imports → TypeScript: same problem\r\n// Solution: extract shared types to a separate file, or use lazy imports\r\n\r\n// Python: if __name__ == \"__main__\" → TypeScript\r\n// Top-level await in modules (Node.js ESM + Bun)\r\nconst isMain = process.argv[1]?.endsWith(\"script.ts\");\r\nif (isMain) {\r\n  console.log(\"Running as main script\");\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-module-re-export--namespace-patterns",
      children: "TypeScript Module Re-export & Namespace Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: from package import * → TypeScript: namespace re-export\r\n// utils/index.ts — barrel file\r\nexport { formatDate } from \"./date.js\";\r\nexport { validateEmail, sanitize } from \"./validation.js\";\r\nexport type { User, Config } from \"./types.js\";\r\n\r\n// Python: package with __init__.py → TypeScript: index.ts convention\r\n// src/\r\n//   index.ts          (re-exports from modules below)\r\n//   math.ts\r\n//   validation.ts\r\n//   types.ts\r\n\r\n// Python: namespace packages → TypeScript: module augmentation\r\n// Extending an existing module\r\ndeclare module \"./math.js\" {\r\n  export function factorial(n: number): number;\r\n}\r\n\r\n// Python: sys.modules caching → TypeScript: module-level singletons\r\n// TypeScript modules are cached after first import (same as Python)\r\nlet instance: Database | null = null;\r\nexport function getDatabase(): Database {\r\n  if (!instance) instance = new Database();\r\n  return instance;\r\n}\r\n\r\n// Python: importlib.reload → TypeScript: no direct equivalent\r\n// Workaround for hot-reloading: dynamic import() with cache busting\r\nasync function hotReload(modulePath: string): Promise<unknown> {\r\n  const url = new URL(modulePath, import.meta.url);\r\n  url.searchParams.set(\"t\", Date.now().toString());\r\n  return await import(url.href);\r\n}\r\n\r\n// Python: module docstring → TypeScript: top-level JSDoc\r\n/**\r\n * @module utils\r\n * Utility functions for the application.\r\n * @packageDocumentation\r\n */\r\n\r\n// Python: __all__ → TypeScript: explicit exports\r\n// In Python: __all__ = [\"func1\", \"func2\"]\r\n// In TypeScript: only exported names are visible:\r\nexport { func1, func2 };  // private names are not exported\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Re-Export Aggregator ===\r\n// Simulates collecting all exports from multiple modules\r\ninterface ModuleExports {\r\n  module: string;\r\n  exports: string[];\r\n}\r\nfunction aggregateExports(modules: ModuleExports[]): { all: string[]; byModule: ModuleExports[] } {\r\n  const all = [...new Set(modules.flatMap((m) => m.exports))];\r\n  return { all, byModule: modules };\r\n}\r\nconst mods = [\r\n  { module: \"utils\", exports: [\"add\", \"subtract\", \"multiply\"] },\r\n  { module: \"strings\", exports: [\"capitalize\", \"reverse\", \"add\"] },\r\n];\r\nconsole.log(aggregateExports(mods)); // { all: [\"add\",\"subtract\",\"multiply\",\"capitalize\",\"reverse\"], ... }\r\n\r\n// === Barrel File Generator ===\r\nfunction generateBarrel(modules: string[]): string {\r\n  return modules.map((m) => `export * from './${m}';`).join(\"\\n\");\r\n}\r\nconsole.log(generateBarrel([\"math\", \"strings\", \"types\"]));\r\n// export * from './math';\r\n// export * from './strings';\r\n// export * from './types';\r\n\r\n// === Circular Dependency Checker ===\r\ntype DepGraph = Record<string, string[]>;\r\nfunction findCircularDeps(graph: DepGraph): string[][] {\r\n  const cycles: string[][] = [];\r\n  const visited = new Set<string>();\r\n  const inStack = new Set<string>();\r\n  function dfs(node: string, path: string[]): void {\r\n    if (inStack.has(node)) {\r\n      const idx = path.indexOf(node);\r\n      cycles.push(path.slice(idx));\r\n      return;\r\n    }\r\n    if (visited.has(node)) return;\r\n    visited.add(node);\r\n    inStack.add(node);\r\n    for (const dep of graph[node] ?? []) {\r\n      dfs(dep, [...path, node]);\r\n    }\r\n    inStack.delete(node);\r\n  }\r\n  for (const node of Object.keys(graph)) dfs(node, []);\r\n  return cycles;\r\n}\r\nconst deps: DepGraph = {\r\n  a: [\"b\", \"c\"],\r\n  b: [\"d\"],\r\n  c: [\"a\"],    // c → a → c (circular)\r\n  d: [\"e\"],\r\n  e: [\"b\"],    // e → b → d → e (circular)\r\n};\r\nconsole.log(findCircularDeps(deps)); // [[\"c\",\"a\"], [\"b\",\"d\",\"e\"]]\r\n\r\n// === Module Import Optimizer ===\r\nfunction optimizeImports(imports: string[]): string[] {\r\n  return [...new Set(imports)].sort();\r\n}\r\nconsole.log(optimizeImports([\"fs\", \"path\", \"fs\", \"os\"])); // [\"fs\", \"os\", \"path\"]\r\n\r\n// === Dynamic Import Wrapper (Python __import__ equivalent) ===\r\nasync function dynamicImport(moduleName: string): Promise<Record<string, unknown>> {\r\n  try {\r\n    return await import(moduleName);\r\n  } catch {\r\n    console.warn(`Module '${moduleName}' not found`);\r\n    return {};\r\n  }\r\n}\r\n// dynamicImport(\"fs\").then((m) => console.log(Object.keys(m)));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modules are ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".py"
        }), " files; packages are directories with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Import styles: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import m"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "from m import n"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import m as alias"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "if __name__ == \"__main__\""
        }), " guards script-only code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relative imports use dots; absolute imports use full paths."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sys.path"
        }), " controls module search order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pip installs from PyPI; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " to pin dependencies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wheels are preferred over source distributions for faster installation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circular imports indicate design issues."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript uses ES modules with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "import"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "export"
      }), " statements as the standard module system:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: named exports vs default exports\r\n\r\n// math.ts -- module file\r\nexport function add(a: number, b: number): number {\r\n  return a + b;\r\n}\r\nexport const PI: number = 3.14159;\r\nexport default class Calculator {\r\n  sum(...nums: number[]): number {\r\n    return nums.reduce((a, b) => a + b, 0);\r\n  }\r\n}\r\n\r\n// app.ts -- consumer file\r\nimport Calculator, { add, PI } from \"./math.js\";\r\nimport * as math from \"./math.js\";  // namespace import\r\n\r\n// Equivalent Python:\r\n// from math import add, PI\r\n// from math import Calculator\r\n// import math as m\r\n\r\n// TypeScript entry point check\r\n// Python: if __name__ == \"__main__\":\r\n// TypeScript: Not needed -- top-level code runs when file is executed directly\r\n// $ bun run app.ts  # or ts-node app.ts\r\n\r\n// Conditional execution pattern in Node\r\nif (require.main === module) {\r\n  console.log(add(2, 3));\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-module-bundler-simulation",
      children: "TypeScript Module Bundler Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Module Resolution System ===\r\ninterface ModuleInfo { name: string; path: string; exports: string[]; imports: string[]; }\r\nclass ModuleRegistry {\r\n  private modules = new Map<string, ModuleInfo>();\r\n  register(info: ModuleInfo): void { this.modules.set(info.name, info); }\r\n  resolve(name: string): ModuleInfo | undefined { return this.modules.get(name); }\r\n  getDependencyGraph(): Map<string, string[]> {\r\n    const graph = new Map<string, string[]>();\r\n    for (const [name, info] of this.modules) {\r\n      graph.set(name, info.imports.map(i => {\r\n        const mod = [...this.modules.values()].find(m => m.exports.includes(i));\r\n        return mod?.name ?? \"unknown\";\r\n      }));\r\n    }\r\n    return graph;\r\n  }\r\n  getCircularDependencies(): string[][] {\r\n    const cycles: string[][] = [];\r\n    const visited = new Set<string>();\r\n    const inStack = new Set<string>();\r\n    const dfs = (name: string, path: string[]) => {\r\n      if (inStack.has(name)) { cycles.push(path.slice(path.indexOf(name))); return; }\r\n      if (visited.has(name)) return;\r\n      visited.add(name); inStack.add(name);\r\n      const mod = this.modules.get(name);\r\n      if (mod) {\r\n        for (const imp of mod.imports) {\r\n          const dep = [...this.modules.values()].find(m => m.exports.includes(imp));\r\n          if (dep) dfs(dep.name, [...path, dep.name]);\r\n        }\r\n      }\r\n      inStack.delete(name);\r\n    };\r\n    for (const name of this.modules.keys()) dfs(name, [name]);\r\n    return cycles;\r\n  }\r\n  getBundleOrder(): string[] {\r\n    const visited = new Set<string>();\r\n    const order: string[] = [];\r\n    const dfs = (name: string): void => {\r\n      if (visited.has(name)) return;\r\n      visited.add(name);\r\n      const mod = this.modules.get(name);\r\n      if (mod) {\r\n        for (const imp of mod.imports) {\r\n          const dep = [...this.modules.values()].find(m => m.exports.includes(imp));\r\n          if (dep) dfs(dep.name);\r\n        }\r\n      }\r\n      order.push(name);\r\n    };\r\n    for (const name of this.modules.keys()) dfs(name);\r\n    return order;\r\n  }\r\n}\r\n\r\n// === Tree-shaking Simulation ===\r\ninterface Export { name: string; used: boolean; }\r\nclass TreeShaker {\r\n  private exports = new Map<string, Export[]>();\r\n  addModule(name: string, exports: string[]): void {\r\n    this.exports.set(name, exports.map(e => ({ name: e, used: false })));\r\n  }\r\n  markUsed(moduleName: string, exportName: string): void {\r\n    this.exports.get(moduleName)?.find(e => e.name === exportName);\r\n  }\r\n  getUnusedExports(): { module: string; unused: string[] }[] {\r\n    const result: { module: string; unused: string[] }[] = [];\r\n    for (const [mod, exports] of this.exports) {\r\n      const unused = exports.filter(e => !e.used).map(e => e.name);\r\n      if (unused.length > 0) result.push({ module: mod, unused });\r\n    }\r\n    return result;\r\n  }\r\n  getShrinkPercentage(): number {\r\n    let total = 0, used = 0;\r\n    for (const exports of this.exports.values()) {\r\n      total += exports.length;\r\n      used += exports.filter(e => e.used).length;\r\n    }\r\n    return total > 0 ? Math.round((1 - used / total) * 100) : 0;\r\n  }\r\n}\r\n\r\n// === Lazy Module Loader ===\r\nclass LazyLoader {\r\n  private loaded = new Set<string>();\r\n  private pending = new Map<string, () => Promise<void>>();\r\n  register(name: string, loader: () => Promise<void>): void { this.pending.set(name, loader); }\r\n  async load(name: string): Promise<void> {\r\n    if (this.loaded.has(name)) return;\r\n    const loader = this.pending.get(name);\r\n    if (loader) { await loader(); this.loaded.add(name); this.pending.delete(name); }\r\n  }\r\n  async loadAll(): Promise<void> {\r\n    await Promise.all([...this.pending.keys()].map(n => this.load(n)));\r\n  }\r\n}\r\n\r\nconst reg = new ModuleRegistry();\r\nreg.register({ name: \"utils\", path: \"./utils.ts\", exports: [\"add\", \"multiply\"], imports: [] });\r\nreg.register({ name: \"main\", path: \"./main.ts\", exports: [\"run\"], imports: [\"add\"] });\r\nconsole.log(reg.getBundleOrder()); // [\"utils\", \"main\"] or [\"main\", \"utils\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-practical-applications",
      children: "TypeScript Practical Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Cross-Platform Path Resolution ===\r\nimport { resolve, basename, dirname, extname, join, normalize } from \"path\";\r\nimport { existsSync, readFileSync, writeFileSync, readdirSync } from \"fs\";\r\n\r\ninterface PythonPackage {\r\n  name: string;\r\n  version: string;\r\n  path: string;\r\n  dependencies: Record<string, string>;\r\n}\r\n\r\nfunction resolvePythonImport(name: string, searchPaths: string[]): string | null {\r\n  for (const base of searchPaths) {\r\n    const candidates = [\r\n      join(base, `${name}.py`),\r\n      join(base, name, \"__init__.py\"),\r\n      join(base, `${name}.pyw`),\r\n    ];\r\n    for (const c of candidates) {\r\n      if (existsSync(c)) return c;\r\n    }\r\n  }\r\n  return null;\r\n}\r\n\r\n// === Module Dependency Graph Builder ===\r\ninterface Edge { from: string; to: string; type: \"import\" | \"from-import\" | \"re-export\"; }\r\nfunction buildDependencyGraph(rootDir: string): { nodes: Set<string>; edges: Edge[] } {\r\n  const nodes = new Set<string>();\r\n  const edges: Edge[] = [];\r\n  const files = readdirSync(rootDir).filter(f => f.endsWith(\".py\") || f.endsWith(\".ts\"));\r\n  for (const file of files) {\r\n    const content = readFileSync(join(rootDir, file), \"utf-8\");\r\n    nodes.add(file);\r\n    const importRegex = /^(?:import|from)\\s+(\\S+)/gm;\r\n    let match;\r\n    while ((match = importRegex.exec(content)) !== null) {\r\n      const target = match[1].split(\".\")[0];\r\n      const type = match[0].startsWith(\"import\") ? \"import\" : \"from-import\";\r\n      edges.push({ from: file, to: `${target}.py`, type });\r\n    }\r\n  }\r\n  return { nodes, edges };\r\n}\r\n\r\n// === Entry Point Detection ===\r\nfunction findEntryPoints(rootDir: string): string[] {\r\n  const entries: string[] = [];\r\n  const files = readdirSync(rootDir).filter(f => f.endsWith(\".py\"));\r\n  for (const file of files) {\r\n    const content = readFileSync(join(rootDir, file), \"utf-8\");\r\n    if (content.includes('if __name__ == \"__main__\"') || content.includes(\"if __name__ == '__main__'\")) {\r\n      entries.push(file);\r\n    }\r\n  }\r\n  return entries;\r\n}\r\n\r\n// === Virtual Environment Utils ===\r\nfunction getSitePackagesPaths(venvPath: string): string[] {\r\n  const sitePackages = join(venvPath, \"Lib\", \"site-packages\");\r\n  if (!existsSync(sitePackages)) return [];\r\n  return readdirSync(sitePackages)\r\n    .filter(f => f.endsWith(\".dist-info\") || f.endsWith(\".pth\"))\r\n    .map(f => join(sitePackages, f));\r\n}\r\n\r\nconsole.log(\"Entry points:\", findEntryPoints(\".\"));\r\nconsole.log(\"Module graph:\", JSON.stringify(buildDependencyGraph(\".\"), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-module-system-vs-python",
      children: "TypeScript Module System vs Python"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "def foo()"
            }), " in module"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "export default class/function"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named export"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "def foo()"
            }), " (all names exported)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "export function foo()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Import"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "import module"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "import * as mod from \"./mod\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Selective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "from mod import foo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "import { foo } from \"./mod\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aliasing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "import mod as m"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "import * as m from \"./mod\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Re-export"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "from .sub import foo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "export { foo } from \"./sub\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "index.ts"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            }), " exports"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publishing-a-package-to-pypi",
      children: "Publishing a Package to PyPI"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Project directory] --> B[pyproject.toml]\r\n    B --> C[Build: python -m build]\r\n    C --> D[.whl + .tar.gz]\r\n    D --> E[Upload: twine upload dist/*]\r\n    E --> F[PyPI]\r\n    F --> G[pip install your-package]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# pyproject.toml (modern standard)\r\n\"\"\"\r\n[build-system]\r\nrequires = [\"setuptools>=68\", \"wheel\"]\r\nbuild-backend = \"setuptools.backends._legacy:_Backend\"\r\n\r\n[project]\r\nname = \"example-package\"\r\nversion = \"0.1.0\"\r\ndescription = \"A minimal Python package\"\r\nrequires-python = \">=3.8\"\r\ndependencies = [\r\n    \"requests>=2.28\",\r\n]\r\n\"\"\"\r\n\r\n# Build and publish commands:\r\n# $ python -m build          # Creates dist/*.whl and dist/*.tar.gz\r\n# $ twine check dist/*       # Verify distributions\r\n# $ twine upload dist/*      # Upload to PyPI\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-package-ecosystem",
      children: "Python Package Ecosystem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Common package categories\r\ndata_science = [\"numpy\", \"pandas\", \"matplotlib\", \"scipy\", \"scikit-learn\"]\r\nweb_dev = [\"fastapi\", \"uvicorn\", \"django\", \"flask\", \"requests\"]\r\ntesting = [\"pytest\", \"unittest\", \"coverage\", \"tox\", \"mock\"]\r\nasync = [\"httpx\", \"aiohttp\", \"asyncio\", \"asyncpg\"]\r\ndevops = [\"ansible\", \"fabric\", \"invoke\", \"docker-py\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if __name__ == \"__main__\""
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between absolute and relative imports?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "from module import *"
        }), " discouraged?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What goes into a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " file?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a wheel and a source distribution?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a package ", (0,jsx_runtime.jsx)(_components.code, {
          children: "geometry"
        }), " with submodules ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shapes"
        }), " (Circle, Rectangle, Triangle classes with area methods) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "utils"
        }), " (a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "distance"
        }), " function). Write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__.py"
        }), " to expose the main classes at the package level. Write a script that uses the package."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Take an existing script and refactor it into a package with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), " and proper module structure. Install it in editable mode and verify imports work."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split a module with circular imports into three modules (a shared base, and two modules that import the base but not each other)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a plugin system using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "importlib"
      }), ". Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PluginManager"
      }), " that scans a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plugins/"
      }), " directory for modules with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register()"
      }), " function, calls it, and stores the result. Load plugins dynamically using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "importlib.import_module()"
      }), ". Support enabling and disabling plugins at runtime. Demonstrate with at least two plugins that register different handlers."]
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