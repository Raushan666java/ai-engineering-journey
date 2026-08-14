"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40103],{

/***/ 96925
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_04_loops_md_704_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-04-loops-md-704.json
const site_docs_courses_python_programming_04_loops_md_704_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/04-loops","title":"Chapter 4: Loops and Iteration","description":"Previous Strings","source":"@site/docs/courses/python-programming/04-loops.md","sourceDirName":"courses/python-programming","slug":"/python-programming/04-loops","permalink":"/ai-engineering-journey/python-programming/04-loops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-loops","slug":"/python-programming/04-loops","title":"Chapter 4: Loops and Iteration","sidebar_label":"Chapter 4: Loops and Iteration","sidebar_position":4},"sidebar":"course-python-programming","previous":{"title":"Chapter 3: Control Flow","permalink":"/ai-engineering-journey/python-programming/03-control-flow"},"next":{"title":"Chapter 5: Strings","permalink":"/ai-engineering-journey/python-programming/05-strings"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/04-loops.md


const frontMatter = {
	id: '04-loops',
	slug: '/python-programming/04-loops',
	title: 'Chapter 4: Loops and Iteration',
	sidebar_label: 'Chapter 4: Loops and Iteration',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Loops and Iteration';

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
  "value": "4.1 The for Loop",
  "id": "41-the-for-loop",
  "level": 2
}, {
  "value": "4.1.1 range()",
  "id": "411-range",
  "level": 3
}, {
  "value": "4.1.2 Iterating Over Sequences",
  "id": "412-iterating-over-sequences",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "4.2 The while Loop",
  "id": "42-the-while-loop",
  "level": 2
}, {
  "value": "4.2.1 When to Use while vs for",
  "id": "421-when-to-use-while-vs-for",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-1",
  "level": 3
}, {
  "value": "4.3 break and continue",
  "id": "43-break-and-continue",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-2",
  "level": 3
}, {
  "value": "4.4 The else Clause on Loops",
  "id": "44-the-else-clause-on-loops",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-3",
  "level": 3
}, {
  "value": "4.5 enumerate()",
  "id": "45-enumerate",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-4",
  "level": 3
}, {
  "value": "4.6 zip()",
  "id": "46-zip",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-5",
  "level": 3
}, {
  "value": "4.7 reversed()",
  "id": "47-reversed",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-6",
  "level": 3
}, {
  "value": "4.8 sorted()",
  "id": "48-sorted",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-7",
  "level": 3
}, {
  "value": "Loop Utilities Comparison",
  "id": "loop-utilities-comparison",
  "level": 3
}, {
  "value": "4.9 Nested Loops",
  "id": "49-nested-loops",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-8",
  "level": 3
}, {
  "value": "4.10 Loop Idioms",
  "id": "410-loop-idioms",
  "level": 2
}, {
  "value": "Looping Over a Copy",
  "id": "looping-over-a-copy",
  "level": 3
}, {
  "value": "Looping Over Slices",
  "id": "looping-over-slices",
  "level": 3
}, {
  "value": "Tracking Index Without enumerate",
  "id": "tracking-index-without-enumerate",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-9",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Loop &amp; Iteration Patterns",
  "id": "typescript-loop--iteration-patterns",
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
  "value": "TypeScript Challenge",
  "id": "typescript-challenge",
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
        id: "chapter-4-loops-and-iteration",
        children: "Chapter 4: Loops and Iteration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/03-control-flow",
          children: "Control Flow"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/05-strings",
          children: "Strings"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " loops over ranges and iterables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " loops with proper termination conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control loop flow with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " clauses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enumerate"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zip"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reversed"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sorted"
        }), " for idiomatic iteration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the appropriate loop construct for a given problem"
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
        href: "../../assets/images/lessons/python-programming/04-loops/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/04-loops/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/04-loops/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/04-loops/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/04-loops/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/04-loops/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/04-loops.png",
        alt: "Loops and Iteration"
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
            children: "4.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating over iterables, range()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "while Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition-based repetition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "break and continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop control statements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "else on Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes when no break occurred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enumerate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index-value pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zip()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reversed()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sorted()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-dimensional iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop Idioms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe removal, slices, chunking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[for Loop] --> B[range]\n    A --> C[Iterables]\n    D[while Loop] --> E[Condition]\n    F[break/continue] --> G[Loop Control]\n    H[enumerate] --> I[Index-Value Pairs]\n    J[zip] --> K[Parallel Iteration]\n    L[reversed/sorted] --> M[Ordering]\n    N[Nested Loops] --> O[Matrix Iteration]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-the-for-loop",
      children: "4.1 The for Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " for iterates over any iterable; use range() for numeric sequences."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop iterates over any iterable (sequences, iterators, generators):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "apple\nbanana\ncherry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "411-range",
      children: "4.1.1 range()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "range()"
      }), " function generates arithmetic progressions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for i in range(5):           # 0, 1, 2, 3, 4\n    print(i, end=\" \")        # 0 1 2 3 4\n\nprint()\n\nfor i in range(2, 7):        # 2, 3, 4, 5, 6\n    print(i, end=\" \")        # 2 3 4 5 6\n\nprint()\n\nfor i in range(0, 10, 2):    # 0, 2, 4, 6, 8\n    print(i, end=\" \")        # 0 2 4 6 8\n\nprint()\n\nfor i in range(10, 0, -1):   # 10, 9, ..., 1\n    print(i, end=\" \")        # 10 9 8 7 6 5 4 3 2 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "range()"
      }), " is lazy -- it produces values on demand, not as a list. Cast to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list()"
      }), " to see all values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "412-iterating-over-sequences",
      children: "4.1.2 Iterating Over Sequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "word = \"hello\"\nfor char in word:\n    print(char.upper(), end=\" \")  # H E L L O\n\nprint()\n\nnumbers = [10, 20, 30]\nfor value in numbers:\n    print(value * 2, end=\" \")     # 20 40 60\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Never modify a list while iterating over it -- iterate over items[:] (a copy) instead.\nModifying a list while iterating over it is dangerous:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# BAD -- skips elements\nnumbers = [1, 2, 3, 4, 5]\nfor n in numbers:\n    if n % 2 == 0:\n        numbers.remove(n)\nprint(numbers)  # [1, 3, 5]  (works here by luck, fails in general)\n\n# CORRECT -- iterate over a copy\nnumbers = [1, 2, 3, 4, 5]\nfor n in numbers[:]:\n    if n % 2 == 0:\n        numbers.remove(n)\nprint(numbers)  # [1, 3, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: for-of loop (like Python's for-in)\nconst fruits: string[] = [\"apple\", \"banana\", \"cherry\"];\nfor (const fruit of fruits) {\n    console.log(fruit);\n}\n\n// TypeScript: traditional for loop (like range)\nfor (let i = 0; i < 5; i++) {\n    console.log(i);  // 0 1 2 3 4\n}\n\n// TypeScript: forEach method (functional style)\nfruits.forEach((fruit) => console.log(fruit));\n\n// TypeScript does NOT have range(); use for(let i=0; i<n; i++)\n// Python's range(start, stop, step):\nfor (let i = 0; i < 10; i += 2) {\n    console.log(i);  // 0 2 4 6 8\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Python[Python for Loop]\n        P1[for item in iterable:] --> P2[Get next item]\n        P2 --> P3{More items?}\n        P3 -->|Yes| P4[Execute body]\n        P4 --> P2\n        P3 -->|No| P5[Exit loop]\n    end\n\n    subgraph TS[TypeScript for Loop]\n        T1[for let i=0; i<n; i++] --> T2{Condition true?}\n        T2 -->|Yes| T3[Execute body]\n        T3 --> T4[Increment]\n        T4 --> T2\n        T2 -->|No| T5[Exit loop]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-the-while-loop",
      children: "4.2 The while Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " while repeats until a condition is false -- ensure termination or use break."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop repeats as long as a condition is truthy:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "count = 0\nwhile count < 5:\n    print(count, end=\" \")\n    count += 1\n# 0 1 2 3 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ensure the condition eventually becomes falsy, or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Infinite loop -- ensure termination\ntotal = 0\nwhile True:\n    n = int(input(\"Enter a number (0 to quit): \"))\n    if n == 0:\n        break\n    total += n\nprint(f\"Total: {total}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "421-when-to-use-while-vs-for",
      children: "4.2.1 When to Use while vs for"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " when the number of iterations is known or you are iterating over a collection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " when the loop depends on a condition that changes inside the body."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# while is natural for convergence algorithms\nx = 1.0\nwhile abs(x ** 2 - 2) > 1e-10:\n    x = (x + 2 / x) / 2   # Newton's method for sqrt(2)\nprint(f\"sqrt(2) ~ {x}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-1",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: while loop (identical to Python)\nlet count: number = 0;\nwhile (count < 5) {\n    console.log(count);  // 0 1 2 3 4\n    count++;\n}\n\n// Infinite loop with break (identical)\nlet total: number = 0;\nwhile (true) {\n    // prompt doesn't work in Node.js without readline\n    // But the pattern is identical\n    break;\n}\n\n// Convergence algorithm (identical)\nlet x: number = 1.0;\nwhile (Math.abs(x ** 2 - 2) > 1e-10) {\n    x = (x + 2 / x) / 2;\n}\nconsole.log(`sqrt(2) ~ ${x}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop is nearly identical between Python and TypeScript. The key difference is the loop syntax -- Python uses a colon and indentation, TypeScript uses parentheses and curly braces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-break-and-continue",
      children: "4.3 break and continue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " break exits the innermost loop; continue skips to the next iteration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " terminates the loop immediately:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for i in range(100):\n    if i * i > 50:\n        break\n    print(i, i * i)\n# Prints up to i=7 (7*7=49)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), " skips the rest of the current iteration and moves to the next:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for i in range(10):\n    if i % 2 == 0:\n        continue\n    print(i, end=\" \")   # 1 3 5 7 9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " To break out of nested loops, use a flag or wrap in a function and return. Python lacks labeled break.\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " apply only to the innermost loop:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for i in range(3):\n    for j in range(3):\n        if j == 1:\n            break       # breaks inner loop only\n        print(f\"({i},{j})\", end=\" \")\n    print()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-2",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: break and continue (identical behavior)\nfor (let i = 0; i < 100; i++) {\n    if (i * i > 50) break;\n    console.log(i, i * i);\n}\n\nfor (let i = 0; i < 10; i++) {\n    if (i % 2 === 0) continue;\n    console.log(i);   // 1 3 5 7 9\n}\n\n// TypeScript also has labeled break (Python does not)\nouter: for (let i = 0; i < 3; i++) {\n    inner: for (let j = 0; j < 3; j++) {\n        if (j === 1) break outer;  // breaks BOTH loops!\n        console.log(i, j);\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Labeled break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (outer/inner labels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript has labeled break"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-the-else-clause-on-loops",
      children: "4.4 The else Clause on Loops"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The else block runs only if the loop completed without hitting break."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The else clause is Python-unique. Use it for search loops where code runs only if no match was found.\nThe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " clause executes when the loop terminates normally (without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), "):"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Prime number check\nn = 17\nfor i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n        print(f\"{n} is divisible by {i}\")\n        break\nelse:\n    print(f\"{n} is prime\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " clause also works with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loops:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "x = 256\nwhile x > 1:\n    if x % 2 != 0:\n        print(f\"{x} is not a power of two\")\n        break\n    x //= 2\nelse:\n    print(\"Input is a power of two\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-3",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: NO else clause on loops\n// Must use a flag variable instead:\nfunction isPrime(n: number): boolean {\n    for (let i = 2; i <= Math.sqrt(n); i++) {\n        if (n % i === 0) {\n            return false;  // like break + else executed\n        }\n    }\n    return true;  // like else clause\n}\n\n// Flag approach for the else clause:\nfunction checkPowerOfTwo(x: number): boolean {\n    while (x > 1) {\n        if (x % 2 !== 0) {\n            return false;  // break from success path\n        }\n        x = Math.floor(x / 2);\n    }\n    return true;  // no break occurred\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " on loops is unique. In TypeScript and most other languages, you use a flag variable or early return from a function to achieve the same effect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-enumerate",
      children: "4.5 enumerate()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " enumerate() yields (index, value) pairs -- avoid manual counter variables."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "enumerate()"
      }), " yields pairs of (index, value) from an iterable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "colors = [\"red\", \"green\", \"blue\"]\nfor i, color in enumerate(colors):\n    print(f\"{i}: {color}\")\n# 0: red\n# 1: green\n# 2: blue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Specify a custom start index:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for i, color in enumerate(colors, start=1):\n    print(f\"{i}. {color}\")\n# 1. red\n# 2. green\n# 3. blue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-4",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: entries() on arrays\nconst colors: string[] = [\"red\", \"green\", \"blue\"];\nfor (const [i, color] of colors.entries()) {\n    console.log(`${i}: ${color}`);\n}\n\n// Traditional for loop:\nfor (let i = 0; i < colors.length; i++) {\n    console.log(`${i}: ${colors[i]}`);\n}\n\n// forEach with index:\ncolors.forEach((color, i) => {\n    console.log(`${i}: ${color}`);\n});\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Index-value pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enumerate(iterable)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iterable.entries()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enumerate(iterable, start=N)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (add offset)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructuring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for i, val in enumerate(x):"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (const [i, val] of x.entries())"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-zip",
      children: "4.6 zip()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " zip() pairs elements from multiple iterables, stopping at the shortest one."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "zip()"
      }), " aggregates multiple iterables element-wise:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "names = [\"Alice\", \"Bob\", \"Charlie\"]\nscores = [85, 92, 78]\ngrades = [\"A\", \"A\", \"B\"]\n\nfor name, score, grade in zip(names, scores, grades):\n    print(f\"{name}: {score} ({grade})\")\n# Alice: 85 (A)\n# Bob: 92 (A)\n# Charlie: 78 (B)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "zip()"
      }), " stops at the shortest iterable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3, 4]\nb = [10, 20, 30]\nprint(list(zip(a, b)))          # [(1, 10), (2, 20), (3, 30)]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "itertools.zip_longest()"
      }), " for unequal lengths:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import zip_longest\nprint(list(zip_longest(a, b, fillvalue=0)))\n# [(1, 10), (2, 20), (3, 30), (4, 0)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unzipping uses the star operator:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "pairs = [(1, 10), (2, 20), (3, 30)]\nfirst, second = zip(*pairs)\nprint(list(first))   # [1, 2, 3]\nprint(list(second))  # [10, 20, 30]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-5",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: NO built-in zip() in older versions\n// Manual implementation or use lodash\nfunction zip<T, U>(a: T[], b: U[]): [T, U][] {\n    const len = Math.min(a.length, b.length);\n    return Array.from({ length: len }, (_, i) => [a[i], b[i]]);\n}\n\nconst names: string[] = [\"Alice\", \"Bob\", \"Charlie\"];\nconst scores: number[] = [85, 92, 78];\nconst zipped = zip(names, scores);\n// [[\"Alice\", 85], [\"Bob\", 92], [\"Charlie\", 78]]\n\n// forEach with index (manual approach):\nnames.forEach((name, i) => {\n    if (i < scores.length) {\n        console.log(`${name}: ${scores[i]}`);\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-reversed",
      children: "4.7 reversed()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " reversed() returns a reverse iterator without copying the sequence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "reversed()"
      }), " returns a reverse iterator over a sequence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for c in reversed(\"hello\"):\n    print(c, end=\"\")   # olleh\nprint()\n\nfor n in reversed([1, 2, 3]):\n    print(n, end=\" \")  # 3 2 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-6",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: reverse() on arrays (mutates) or manual loop\n// Option 1: reverse() - but this MUTATES the array\nconst nums: number[] = [1, 2, 3];\nconst reversed = [...nums].reverse();  // copy first to avoid mutation\nconsole.log(reversed);  // [3, 2, 1]\n\n// Option 2: manual reverse iteration\nfor (let i = nums.length - 1; i >= 0; i--) {\n    console.log(nums[i]);  // 3 2 1\n}\n\n// Strings can be reversed:\nconst str: string = \"hello\";\nconsole.log(str.split(\"\").reverse().join(\"\"));  // \"olleh\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-sorted",
      children: "4.8 sorted()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " sorted() returns a new sorted list; the original iterable is unchanged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sorted()"
      }), " returns a new sorted list from an iterable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "nums = [3, 1, 4, 1, 5, 9, 2]\nfor n in sorted(nums):\n    print(n, end=\" \")      # 1 1 2 3 4 5 9\nprint()\n\nfor n in sorted(nums, reverse=True):\n    print(n, end=\" \")      # 9 5 4 3 2 1 1\nprint()\n\n# Custom key\nwords = [\"banana\", \"apple\", \"cherry\", \"date\"]\nfor w in sorted(words, key=len):\n    print(w, end=\" \")      # date apple banana cherry\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sorted()"
      }), " returns a new list; the original iterable is unchanged."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-7",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: toSorted() - non-mutating (ES2023+)\nconst nums: number[] = [3, 1, 4, 1, 5, 9, 2];\nconst sorted = nums.toSorted((a, b) => a - b);\nconsole.log(sorted);  // [1, 1, 2, 3, 4, 5, 9]\n\n// Custom key (sort by length)\nconst words: string[] = [\"banana\", \"apple\", \"cherry\", \"date\"];\nwords.sort((a, b) => a.length - b.length);\n// Note: sort() MUTATES the array in TypeScript!\nconsole.log(words);  // [\"date\", \"apple\", \"banana\", \"cherry\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-utilities-comparison",
      children: "Loop Utilities Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "range(start, stop, step)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (let i=0; i<n; i++)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index-value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enumerate(iter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iter.entries()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "zip(a, b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual or library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reversed(seq)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[...arr].reverse()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sorted(iter, key=func)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr.toSorted(compare)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-nested-loops",
      children: "4.9 Nested Loops"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Nested loops multiply complexity -- use comprehensions for matrix operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for i in range(3):\n    for j in range(3):\n        print(f\"({i},{j})\", end=\" \")\n    print()\n# (0,0) (0,1) (0,2)\n# (1,0) (1,1) (1,2)\n# (2,0) (2,1) (2,2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nested loops multiply iterations -- O(n*m) complexity. For matrix operations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ntranspose = [[row[i] for row in matrix] for i in range(3)]\nprint(transpose)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-8",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: nested loops (identical structure)\nfor (let i = 0; i < 3; i++) {\n    for (let j = 0; j < 3; j++) {\n        console.log(`(${i},${j})`);\n    }\n}\n\n// Matrix transpose (identical logic)\nconst matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];\nconst transpose: number[][] = matrix[0].map((_, i) =>\n    matrix.map(row => row[i])\n);\nconsole.log(transpose);  // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410-loop-idioms",
      children: "4.10 Loop Idioms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Iterate over a copy when modifying a collection during iteration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "looping-over-a-copy",
      children: "Looping Over a Copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Safe removal during iteration\nitems = [1, 2, 3, 4, 5]\nfor item in items[:]:  # iterate over a shallow copy\n    if item % 2 == 0:\n        items.remove(item)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "looping-over-slices",
      children: "Looping Over Slices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "data = [10, 20, 30, 40, 50]\nfor chunk in [data[i:i+2] for i in range(0, len(data), 2)]:\n    print(chunk)\n# [10, 20]\n# [30, 40]\n# [50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tracking-index-without-enumerate",
      children: "Tracking Index Without enumerate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "i = 0\nfor fruit in fruits:\n    print(i, fruit)\n    i += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enumerate()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-9",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: filter instead of remove during iteration\nconst items: number[] = [1, 2, 3, 4, 5];\nconst filtered = items.filter(x => x % 2 !== 0);  // [1, 3, 5]\n\n// Chunking:\nconst data: number[] = [10, 20, 30, 40, 50];\nconst chunks: number[][] = [];\nfor (let i = 0; i < data.length; i += 2) {\n    chunks.push(data.slice(i, i + 2));\n}\nconsole.log(chunks);  // [[10, 20], [30, 40], [50]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Mistake"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "for vs while"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for iterates collections; while runs until condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using while when for is more natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "range()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy, use list() to materialise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting range stops before stop value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modify during iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterate over a copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing items from list during for loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "else clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs only if no break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing else with \"always\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enumerate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid manual counters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Writing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i = 0; i += 1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS has labeled break; Python has else; both have for-of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expecting TS range() helper"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "for Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "while Loop"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known iterations / iterable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of iterable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition becomes false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (finite iterable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Else clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for x in items:"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "while condition:"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# for loop\nfor i in range(5):\n    print(i)\n\n# while loop\nwhile x > 0:\n    x -= 1\n\n# break/continue/else\nfor n in numbers:\n    if n < 0: break\nelse:\n    print(\"All non-negative\")\n\n# enumerate\nfor i, val in enumerate(items):\n    print(i, val)\n\n# zip\nfor a, b in zip(list1, list2):\n    print(a, b)\n\n# reversed / sorted\nfor x in reversed(seq): pass\nfor x in sorted(seq, key=len): pass\n"
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
            children: "Data Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch iteration with zip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading lines until EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newton's method convergence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.2.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game loop with break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " When does a loop's else clause execute?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Always"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Only if break was called"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) Only if no break was called ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Never"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What does zip(['a', 'b'], [1, 2, 3]) return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) [('a',1), ('b',2), (None,3)]"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) [('a',1), ('b',2)] ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) [['a',1], ['b',2]]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is enumerate(['a','b','c'], start=1)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) [(0,'a'),(1,'b'),(2,'c')]"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) [(1,'a'),(2,'b'),(3,'c')] ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) [1,2,3]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) {'a':1,'b':2,'c':3}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which loop is best for Newton's method?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) for loop"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) while loop ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) List comprehension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) enumerate()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is wrong with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for n in nums: nums.remove(n)"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Nothing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) It skips elements ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It crashes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It reverses the list"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 4: TypeScript Loop Equivalents\n// Python: for x in iterable\nconst items: string[] = [\"apple\", \"banana\", \"cherry\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// Python: for i in range(5)\nfor (let i = 0; i < 5; i++) {\n  console.log(i);  // 0, 1, 2, 3, 4\n}\n\n// Python: enumerate() → TypeScript: entries()\nfor (const [index, value] of items.entries()) {\n  console.log(`${index}: ${value}`);\n}\n\n// Python: zip() → TypeScript: manual or utility\nconst names: string[] = [\"Alice\", \"Bob\", \"Charlie\"];\nconst scores: number[] = [92, 85, 78];\nfor (let i = 0; i < names.length && i < scores.length; i++) {\n  console.log(`${names[i]}: ${scores[i]}`);\n}\n// Python equivalent: for name, score in zip(names, scores):\n\n// Python: while loop\nlet n: number = 10;\nwhile (n > 0) {\n  console.log(n);\n  n--;\n}\n\n// Python: break / continue work identically\nfor (const item of items) {\n  if (item === \"banana\") continue;\n  if (item === \"cherry\") break;\n  console.log(item);  // \"apple\" only\n}\n\n// Python: for/else (no TypeScript equivalent)\n// TypeScript workaround with a flag:\nlet found = false;\nfor (const name of names) {\n  if (name === \"Alice\") { found = true; break; }\n}\nif (!found) console.log(\"Not found\");\n// Python: for name in names: ... else: print(\"Not found\")\n\n// Python: reversed() → TypeScript: reverse() or manual loop\nfor (let i = items.length - 1; i >= 0; i--) {\n  console.log(items[i]);  // cherry, banana, apple\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Loop Performance Benchmark ===\nfunction benchmarkLoop(name: string, fn: () => void, iterations = 100000): { name: string; ms: number; ops: number } {\n  const start = performance.now();\n  for (let i = 0; i < iterations; i++) fn();\n  const ms = performance.now() - start;\n  return { name, ms: Math.round(ms * 100) / 100, ops: Math.round(iterations / (ms / 1000)) };\n}\nconst arr = Array.from({ length: 1000 }, (_, i) => i);\nconst forLoop = () => { let s = 0; for (let i = 0; i < arr.length; i++) s += arr[i]; };\nconst forOfLoop = () => { let s = 0; for (const x of arr) s += x; };\nconst forEachLoop = () => { let s = 0; arr.forEach((x) => { s += x; }); };\nconsole.log(benchmarkLoop(\"for\", forLoop));\nconsole.log(benchmarkLoop(\"for-of\", forOfLoop));\nconsole.log(benchmarkLoop(\"forEach\", forEachLoop));\n\n// === Infinite Loop Detector ===\nfunction detectInfinite(condition: string, body: string, maxIter = 1000): string {\n  return `let _guard = 0;\\nwhile (${condition}) {\\n  if (_guard++ > ${maxIter}) throw new Error(\"Infinite loop detected\");\\n${body}\\n}`;\n}\nconsole.log(detectInfinite(\"true\", \"console.log('running')\"));\n\n// === Range Function (Python-like) ===\nfunction range(start: number, end?: number, step = 1): number[] {\n  if (end === undefined) { end = start; start = 0; }\n  const result: number[] = [];\n  for (let i = start; i < end; i += step) result.push(i);\n  return result;\n}\nconsole.log(range(5));        // [0, 1, 2, 3, 4]\nconsole.log(range(2, 8, 2));  // [2, 4, 6]\n\n// === Zip Function (Python-like) ===\nfunction zip<T, U>(a: T[], b: U[]): [T, U][] {\n  return a.slice(0, Math.min(a.length, b.length)).map((v, i) => [v, b[i]]);\n}\nconsole.log(zip([\"a\", \"b\", \"c\"], [1, 2])); // [[\"a\", 1], [\"b\", 2]]\n\n// === Enumerate in TS ===\nfunction enumerate<T>(arr: T[]): [number, T][] {\n  return arr.map((v, i) => [i, v]);\n}\nconsole.log(enumerate([\"x\", \"y\", \"z\"])); // [[0, \"x\"], [1, \"y\"], [2, \"z\"]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-loop--iteration-patterns",
      children: "TypeScript Loop & Iteration Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === For-of (Python: for x in iterable) ===\nconst items = [10, 20, 30, 40, 50];\nfor (const item of items) console.log(item);\n\n// === For-in (Python: for key in dict) vs Object.keys ===\nconst dict = { a: 1, b: 2, c: 3 };\nfor (const key in dict) console.log(key, dict[key]);\n// Better: Object.entries\nfor (const [key, value] of Object.entries(dict)) console.log(key, value);\n\n// === Array methods (Python: for with enumerate) ===\nitems.forEach((item, index) => console.log(`[${index}] = ${item}`));\nconst doubled = items.map(x => x * 2);\nconst evens = items.filter(x => x % 2 === 0);\nconst sum = items.reduce((acc, x) => acc + x, 0);\nconst firstEven = items.find(x => x % 2 === 0);\nconst allPositive = items.every(x => x > 0);\nconst someOver30 = items.some(x => x > 30);\n\n// === Generator equivalents with Iterator ===\nclass RangeIterator implements Iterable<number> {\n  constructor(private start: number, private end: number, private step = 1) {}\n  *[Symbol.iterator](): Generator<number> {\n    for (let i = this.start; i < this.end; i += this.step) yield i;\n  }\n}\nfor (const n of new RangeIterator(0, 10, 2)) console.log(n); // 0, 2, 4, 6, 8\n\n// === Infinite sequence ===\nfunction* fibonacci(): Generator<number> {\n  let a = 0, b = 1;\n  while (true) { yield a; [a, b] = [b, a + b]; }\n}\nconst fib = fibonacci();\nfor (let i = 0; i < 10; i++) console.log(fib.next().value);\n\n// === Enumerate (Python: enumerate) ===\nfunction enumerate2<T>(arr: T[]): [number, T][] {\n  return arr.map((v, i) => [i, v]);\n}\nfor (const [idx, val] of enumerate2([\"a\", \"b\", \"c\"])) console.log(idx, val);\n\n// === Zip (Python: zip) ===\nfunction zip2<T, U>(a: T[], b: U[]): [T, U][] {\n  return a.slice(0, Math.min(a.length, b.length)).map((v, i) => [v, b[i]]);\n}\nfor (const [n, l] of zip2([1, 2, 3], [\"a\", \"b\", \"c\"])) console.log(n, l);\n\n// === While loop ===\nlet i = 0;\nwhile (i < 5) { console.log(i++); }\n\n// === Do-while (no Python equivalent) ===\nlet j = 0;\ndo { console.log(j++); } while (j < 5);\n\n// === Nested loops with labels ===\nouter: for (let r = 0; r < 3; r++) {\n  for (let c = 0; c < 3; c++) {\n    if (r === 1 && c === 1) break outer;\n    console.log(`[${r},${c}]`);\n  }\n}\n\n// === Loop performance ===\nconst big = Array.from({ length: 1000000 }, (_, i) => i);\nconsole.time(\"for\");\nlet sum2 = 0;\nfor (let i = 0; i < big.length; i++) sum2 += big[i];\nconsole.timeEnd(\"for\");\n\nconsole.time(\"for-of\");\nlet sum3 = 0;\nfor (const v of big) sum3 += v;\nconsole.timeEnd(\"for-of\");\n\nconsole.time(\"forEach\");\nlet sum4 = 0;\nbig.forEach(v => sum4 += v);\nconsole.timeEnd(\"forEach\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " loops iterate over iterables; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " loops run until a condition is falsy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " exits; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " skips to next iteration."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " on loops runs only if no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " occurred."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enumerate()"
        }), " yields index-value pairs; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zip()"
        }), " merges iterables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "reversed()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sorted()"
        }), " return iterators and sorted lists respectively."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid modifying a collection while iterating over it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript has labeled break; Python has else clauses on loops. Both have for-of iteration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript lacks range() and zip() natively, requiring manual for loops or utility functions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " loops?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When does a loop's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " clause execute?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zip(['a', 'b', 'c'], [1, 2])"
        }), " return?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is modifying a list during iteration problematic?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enumerate"
        }), " differ from manually incrementing a counter?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does TypeScript's labeled break differ from Python's loop control?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the TypeScript equivalent of Python's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "range(5)"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that prints the multiplication table (1-12) using nested loops, formatted in aligned columns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Collatz conjecture: for a given starting integer n, repeatedly compute n/2 if even, 3n+1 if odd, counting how many steps to reach 1. Use a while loop and print each step."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given two lists of student names and scores, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zip"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enumerate"
        }), " to print a ranked leaderboard sorted by score descending."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a Python function that finds the first duplicate in a list. Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " pattern instead of a flag variable. Return the duplicate value or None."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a script that reads integers from the user until they enter 0, then prints the sum, average, minimum, and maximum. Use a while loop with break."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a simple text-based inventory management system. Start with an inventory of items (dict mapping names to quantities). Repeatedly prompt the user for commands: \"add X N\", \"remove X N\", \"list\", or \"quit\". Use a while loop with break. Handle invalid items, insufficient quantity, and non-numeric counts gracefully. Use membership operators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "in"
      }), ") to validate items before modification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement the Collatz conjecture from Application Problem 2 in TypeScript. Add a performance comparison -- time how long it takes Python vs TypeScript to compute the Collatz sequence for n = 1,000,000. Which is faster and why?"
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