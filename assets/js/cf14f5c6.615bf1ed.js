"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[46415],{

/***/ 90183
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_06_lists_md_cf1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-06-lists-md-cf1.json
const site_docs_courses_python_programming_06_lists_md_cf1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/06-lists","title":"Chapter 6: Lists","description":"Previous Tuples and Sets","source":"@site/docs/courses/python-programming/06-lists.md","sourceDirName":"courses/python-programming","slug":"/python-programming/06-lists","permalink":"/ai-engineering-journey/python-programming/06-lists","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-lists","slug":"/python-programming/06-lists","title":"Chapter 6: Lists","sidebar_label":"Chapter 6: Lists","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Strings","permalink":"/ai-engineering-journey/python-programming/05-strings"},"next":{"title":"Chapter 7: Tuples and Sets","permalink":"/ai-engineering-journey/python-programming/07-tuples-sets"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/06-lists.md


const frontMatter = {
	id: '06-lists',
	slug: '/python-programming/06-lists',
	title: 'Chapter 6: Lists',
	sidebar_label: 'Chapter 6: Lists',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Lists';

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
  "value": "6.1 List Basics",
  "id": "61-list-basics",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "6.2 Indexing and Slicing",
  "id": "62-indexing-and-slicing",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-1",
  "level": 3
}, {
  "value": "6.3 List Methods",
  "id": "63-list-methods",
  "level": 2
}, {
  "value": "6.3.1 Adding Elements",
  "id": "631-adding-elements",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-2",
  "level": 3
}, {
  "value": "6.3.2 Removing Elements",
  "id": "632-removing-elements",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-3",
  "level": 3
}, {
  "value": "6.3.3 Searching and Counting",
  "id": "633-searching-and-counting",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-4",
  "level": 3
}, {
  "value": "6.3.4 Sorting and Reversing",
  "id": "634-sorting-and-reversing",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-5",
  "level": 3
}, {
  "value": "6.3.5 Copying",
  "id": "635-copying",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-6",
  "level": 3
}, {
  "value": "6.4 List Comprehensions",
  "id": "64-list-comprehensions",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-7",
  "level": 3
}, {
  "value": "6.5 Nested Lists and Matrices",
  "id": "65-nested-lists-and-matrices",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-8",
  "level": 3
}, {
  "value": "6.6 Shallow vs Deep Copy",
  "id": "66-shallow-vs-deep-copy",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-9",
  "level": 3
}, {
  "value": "6.7 List Operations and Performance",
  "id": "67-list-operations-and-performance",
  "level": 2
}, {
  "value": "6.8 Common Patterns",
  "id": "68-common-patterns",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-10",
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
  "value": "More TypeScript Array Patterns",
  "id": "more-typescript-array-patterns",
  "level": 3
}, {
  "value": "TypeScript Sorting &amp; Searching Patterns",
  "id": "typescript-sorting--searching-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Advanced Array Patterns",
  "id": "typescript-advanced-array-patterns",
  "level": 3
}, {
  "value": "TypeScript Array Transform &amp; Pipeline Patterns",
  "id": "typescript-array-transform--pipeline-patterns",
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
        id: "chapter-6-lists",
        children: "Chapter 6: Lists"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/05-strings",
          children: "Strings"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/07-tuples-sets",
          children: "Tuples and Sets"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and manipulate lists using all available methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index, slice, and traverse lists idiomatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use list comprehensions to create lists declaratively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work with nested lists and multidimensional structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish shallow and deep copying and select the appropriate copy strategy"
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
        href: "../../assets/images/lessons/python-programming/06-lists/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/06-lists/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/06-lists/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/06-lists/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/06-lists/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/06-lists/visual-explanation.png",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/06-lists.png",
        alt: "List Operations"
      })
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
            children: "6.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered, mutable, heterogeneous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing and Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slice assignment, insertion, shrinking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "append, extend, remove, pop, sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List Comprehensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative list construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix representation, transpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shallow vs Deep Copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy() vs deepcopy()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) append, O(n) insert(0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find all indices, dedup, partition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Basics] --> B[Indexing/Slicing]\n    B --> C[Methods]\n    C --> D[Comprehensions]\n    D --> E[Nested Lists]\n    E --> F[Copying]\n    F --> G[Performance]\n    G --> H[Patterns]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-list-basics",
      children: "6.1 List Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Lists are ordered, mutable collections that can hold mixed types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A list is an ordered, mutable collection of objects. Lists can contain mixed types and are resizable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "empty = []\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, \"hello\", 3.14, True, None]\nnested = [[1, 2], [3, 4], [5, 6]]\n\nprint(type(empty))          # <class 'list'>\nprint(len(numbers))         # 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lists are created with square brackets or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list()"
      }), " constructor:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from_range = list(range(5))       # [0, 1, 2, 3, 4]\nfrom_string = list(\"hello\")       # ['h', 'e', 'l', 'l', 'o']\nfrom_tuple = list((1, 2, 3))      # [1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: arrays (the list equivalent)\nconst empty: number[] = [];\nconst numbers: number[] = [1, 2, 3, 4, 5];\nconst mixed: (number | string | boolean)[] = [1, \"hello\", 3.14, true];\nconst nested: number[][] = [[1, 2], [3, 4], [5, 6]];\n\nconsole.log(Array.isArray(numbers));  // true\nconsole.log(numbers.length);          // 5\n\n// TypeScript uses Array() constructor:\nconst fromArray = Array.from({ length: 5 }, (_, i) => i);  // [0, 1, 2, 3, 4]\nconst fromString = Array.from(\"hello\");  // ['h', 'e', 'l', 'l', 'o']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Python[Python List]\n        P1[List: mutable, typed elements] --> P2[append\\(\\) / extend\\(\\)]\n        P2 --> P3[Supports mixed types]\n        P3 --> P4[list comprehension syntax]\n    end\n\n    subgraph TS[TypeScript Array]\n        T1[Array: mutable, typed elements] --> T2[push\\(\\) / concat\\(\\)]\n        T2 --> T3[Type-safe: number\\[\\] only numbers]\n        T3 --> T4[map\\(\\) / filter\\(\\) / reduce\\(\\)]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-indexing-and-slicing",
      children: "6.2 Indexing and Slicing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Slice assignment can replace, shrink, or insert elements of different lengths."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Indexing follows the same semantics as strings:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [10, 20, 30, 40, 50]\nprint(a[0])      # 10\nprint(a[-1])     # 50\nprint(a[1:4])    # [20, 30, 40]\nprint(a[:3])     # [10, 20, 30]\nprint(a[::2])    # [10, 30, 50]\nprint(a[::-1])   # [50, 40, 30, 20, 10]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assignment to a slice replaces that portion:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a[1:3] = [25, 35]\nprint(a)            # [10, 25, 35, 40, 50]\n\na[1:3] = [100]     # shrinking\nprint(a)            # [10, 100, 40, 50]\n\na[1:1] = [20, 30]  # inserting\nprint(a)            # [10, 20, 30, 100, 40, 50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-1",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: identical indexing and slicing via splice\nconst a: number[] = [10, 20, 30, 40, 50];\nconsole.log(a[0]);        // 10\nconsole.log(a.at(-1));    // 50  (Python-style negative index)\nconsole.log(a.slice(1, 4));   // [20, 30, 40]  (like Python slice)\nconsole.log(a.slice(0, 3));   // [10, 20, 30]\nconsole.log(a.slice(-1)[0]);  // 50\n\n// Slice assignment in TypeScript: use splice()\nconst b: number[] = [10, 20, 30, 40, 50];\nb.splice(1, 2, 25, 35);       // replace indices 1-2 with [25, 35]\nconsole.log(b);                // [10, 25, 35, 40, 50]\n\nb.splice(1, 2, 100);          // shrink\nconsole.log(b);                // [10, 100, 40, 50]\n\nb.splice(1, 0, 20, 30);       // insert (delete 0 elements)\nconsole.log(b);                // [10, 20, 30, 100, 40, 50]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a[i]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a.at(i)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[start:stop]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a.slice(start, stop)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[-1]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a.at(-1)"
            }), " (ES2022+)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slice assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[1:3] = [...]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a.splice(1, 2, ...)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step/stride"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[::2]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[::-1]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[...a].reverse()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-list-methods",
      children: "6.3 List Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " append() is O(1); insert(0) is O(n) -- use deque for fast left-side operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-adding-elements",
      children: "6.3.1 Adding Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "items = [1, 2, 3]\nitems.append(4)            # [1, 2, 3, 4]\nitems.extend([5, 6])       # [1, 2, 3, 4, 5, 6]\nitems.insert(0, 0)         # [0, 1, 2, 3, 4, 5, 6]\nitems.insert(3, 2.5)       # [0, 1, 2, 2.5, 3, 4, 5, 6]\nprint(items)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-2",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: push / concat / splice\nconst items: number[] = [1, 2, 3];\nitems.push(4);                 // [1, 2, 3, 4]  (like append)\nitems.push(5, 6);              // [1, 2, 3, 4, 5, 6]  (like extend)\nitems.splice(0, 0, 0);         // [0, 1, 2, 3, 4, 5, 6]  (like insert(0,0))\nitems.splice(3, 0, 2.5);       // [0, 1, 2, 2.5, 3, 4, 5, 6]\n\n// Unshift for left-side insert:\nitems.unshift(-1);             // [-1, 0, 1, 2, 2.5, ...]  (O(n) like Python)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-removing-elements",
      children: "6.3.2 Removing Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "items = [10, 20, 30, 20, 40]\nitems.remove(20)           # removes first occurrence: [10, 30, 20, 40]\npopped = items.pop()       # removes and returns last: 40, items = [10, 30, 20]\npopped_first = items.pop(0)  # removes and returns index 0: 10, items = [30, 20]\nitems.clear()              # []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-3",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: splice / pop / shift / filter for remove-by-value\nlet items: number[] = [10, 20, 30, 20, 40];\nconst index = items.indexOf(20);\nif (index > -1) items.splice(index, 1);  // remove first 20\n\nconst popped = items.pop();      // removes and returns last (like Python pop())\nconst shifted = items.shift();   // removes and returns first (like pop(0))\nitems.length = 0;                // clear (fastest)\n\n// Alternative remove-by-value with filter (creates new array):\nitems = [10, 20, 30, 20, 40];\nitems = items.filter(x => x !== 20);  // removes ALL 20s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "633-searching-and-counting",
      children: "6.3.3 Searching and Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3, 2, 4, 2, 5]\nprint(a.index(2))          # 1 (first index)\nprint(a.index(2, 2))       # 3 (start search at index 2)\nprint(a.count(2))          # 3\nprint(2 in a)              # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-4",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: indexOf / lastIndexOf / includes / filter\nconst a: number[] = [1, 2, 3, 2, 4, 2, 5];\nconsole.log(a.indexOf(2));       // 1 (like index)\nconsole.log(a.indexOf(2, 2));    // 3 (start at index 2)\nconsole.log(a.lastIndexOf(2));   // 5 (like rfind)\n\n// count equivalent:\nconsole.log(a.filter(x => x === 2).length);  // 3\n\n// includes (like Python 'in'):\nconsole.log(a.includes(2));  // true\nconsole.log(a.includes(6));  // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "634-sorting-and-reversing",
      children: "6.3.4 Sorting and Reversing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "nums = [3, 1, 4, 1, 5, 9, 2]\nnums.sort()                # in-place sort: [1, 1, 2, 3, 4, 5, 9]\nnums.sort(reverse=True)    # [9, 5, 4, 3, 2, 1, 1]\nnums.reverse()             # in-place reversal\n\nwords = [\"banana\", \"apple\", \"cherry\", \"date\"]\nwords.sort(key=len)        # ['date', 'apple', 'banana', 'cherry']\n\n# sorted() returns a new list\noriginal = [3, 1, 2]\nsorted_copy = sorted(original)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-5",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: sort() - mutates in place\nlet nums: number[] = [3, 1, 4, 1, 5, 9, 2];\nnums.sort((a, b) => a - b);          // ascending\nnums.sort((a, b) => b - a);          // descending\nnums.reverse();                       // in-place reversal\n\n// Custom key (by length):\nconst words: string[] = [\"banana\", \"apple\", \"cherry\", \"date\"];\nwords.sort((a, b) => a.length - b.length);\nconsole.log(words);  // ['date', 'apple', 'banana', 'cherry']\n\n// Non-mutating sort (toSorted, ES2023+):\nconst original: number[] = [3, 1, 2];\nconst sortedCopy = original.toSorted((a, b) => a - b);\nconsole.log(original, sortedCopy);  // [3, 1, 2] [1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "635-copying",
      children: "6.3.5 Copying"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = [1, 2, 3]\nb = a.copy()               # shallow copy (equivalent to a[:])\nb.append(4)\nprint(a)  # [1, 2, 3]  (unchanged)\nprint(b)  # [1, 2, 3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-6",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: spread operator for shallow copy\nconst a: number[] = [1, 2, 3];\nconst b = [...a];  // shallow copy (like a.copy())\nb.push(4);\nconsole.log(a);  // [1, 2, 3]\nconsole.log(b);  // [1, 2, 3, 4]\n\n// Alternative: slice() or Array.from()\nconst c = a.slice();  // also shallow copy\nconst d = Array.from(a);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-list-comprehensions",
      children: "6.4 List Comprehensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " List comprehensions are faster and more readable than manual for+append loops."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-7",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: .map() + .filter() for the same effect\n// Python: [x**2 for x in range(10)]\nconst squares: number[] = Array.from({ length: 10 }, (_, x) => x ** 2);\nconsole.log(squares);  // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n// Python: [x for x in range(20) if x % 2 == 0]\nconst evens: number[] = Array.from({ length: 20 }, (_, x) => x)\n    .filter(x => x % 2 === 0);\nconsole.log(evens);  // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n\n// Python: [(x, y) for x in range(3) for y in range(3)]\nconst pairs: [number, number][] = [];\nfor (let x = 0; x < 3; x++) {\n    for (let y = 0; y < 3; y++) {\n        pairs.push([x, y]);\n    }\n}\n\n// Python: [\"even\" if x % 2 == 0 else \"odd\" for x in range(5)]\nconst labels: string[] = Array.from({ length: 5 }, (_, x) =>\n    x % 2 === 0 ? \"even\" : \"odd\"\n);\nconsole.log(labels);  // ['even', 'odd', 'even', 'odd', 'even']\n\n// Flatten matrix (Python's [elem for row in matrix for elem in row])\nconst matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];\nconst flat: number[] = matrix.flat();\nconsole.log(flat);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[x**2 for x in range(n)]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Array.from({length:n}, (_,x)=>x**2)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "With filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[x for x in items if cond]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "items.filter(cond).map(x => x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[(x,y) for x in a for y in b]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested for loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[a if cond else b for x in items]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "items.map(x => cond ? a : b)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[e for row in m for e in row]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "m.flat()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-nested-lists-and-matrices",
      children: "6.5 Nested Lists and Matrices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use [[0]*3 for _ in range(3)] not [[0]*3]*3 to avoid shared row references."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\nprint(matrix[1][2])   # 6\n\n# Transpose\ntranspose = [[row[i] for row in matrix] for i in range(3)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-8",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: nested arrays (identical concept)\nconst matrix: number[][] = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n];\nconsole.log(matrix[1][2]);  // 6\n\n// Transpose:\nconst transpose: number[][] = matrix[0].map((_, i) =>\n    matrix.map(row => row[i])\n);\nconsole.log(transpose);  // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-shallow-vs-deep-copy",
      children: "6.6 Shallow vs Deep Copy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Shallow copies share nested objects; copy.deepcopy() creates fully independent copies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import copy\noriginal = [[1, 2], [3, 4]]\nshallow = original.copy()\nshallow[0][0] = 99\nprint(original[0][0])  # 99  (shared inner list)\n\ndeep = copy.deepcopy(original)\ndeep[0][0] = 99\nprint(original[0][0])   # 1  (independent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-9",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: structuredClone() for deep copy (ES2023+)\nconst original: number[][] = [[1, 2], [3, 4]];\nconst shallow = [...original];  // spread is shallow only\nshallow[0][0] = 99;\nconsole.log(original[0][0]);  // 99 (shared inner list)\n\n// Deep copy with structuredClone:\nconst deep = structuredClone(original);\ndeep[0][0] = 999;\nconsole.log(original[0][0]);  // 1 (independent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-list-operations-and-performance",
      children: "6.7 List Operations and Performance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index/assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pop (last)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pop (first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert/remove (middle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Search (", (0,jsx_runtime.jsx)(_components.code, {
              children: "in"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) for k elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For frequent insertions at the beginning, consider ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collections.deque"
      }), " (Python) or implementing a linked list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "68-common-patterns",
      children: "6.8 Common Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Combine enumerate() with comprehensions for index-based operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Find all indices of a value\ndef find_all(lst, value):\n    return [i for i, v in enumerate(lst) if v == value]\n\nprint(find_all([1, 2, 3, 2, 4, 2], 2))  # [1, 3, 5]\n\n# Remove duplicates while preserving order\ndef unique(seq):\n    seen = set()\n    return [x for x in seq if not (x in seen or seen.add(x))]\n\nprint(unique([3, 1, 2, 1, 3, 4, 2]))  # [3, 1, 2, 4]\n\n# Partition list by condition\nvalues = [1, 2, 3, 4, 5, 6]\nevens = [x for x in values if x % 2 == 0]\nodds = [x for x in values if x % 2 == 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-10",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Find all indices:\nfunction findAll<T>(lst: T[], value: T): number[] {\n    return lst.reduce<number[]>((indices, v, i) => {\n        if (v === value) indices.push(i);\n        return indices;\n    }, []);\n}\nconsole.log(findAll([1, 2, 3, 2, 4, 2], 2));  // [1, 3, 5]\n\n// Unique:\nconst unique = [...new Set([3, 1, 2, 1, 3, 4, 2])];\nconsole.log(unique);  // [3, 1, 2, 4]\n\n// Partition (filter twice or reduce):\nconst values: number[] = [1, 2, 3, 4, 5, 6];\nconst evens = values.filter(x => x % 2 === 0);\nconst odds = values.filter(x => x % 2 !== 0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "List creation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[0]*n"
            }), " creates n references to same 0 (OK for immutables)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[[0]*3]*3"
            }), " creates shared rows"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shallow copy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".copy()"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[:]"
            }), " for top-level copy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), " instead of copy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comprehension"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[expr for x in items if cond]"
            }), " replaces map+filter"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overly complex comprehensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "append()"
            }), " is O(1), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(0)"
            }), " is O(n)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(0)"
            }), " in loops"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TS"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TS uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".push()/.splice()/.map()/.filter()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using Python methods in TS code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tuple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "deque"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Append right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Append left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pop right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pop left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Create\nempty = []\nnums = [1, 2, 3]\nfrom_range = list(range(5))\n\n# Methods\nitems.append(x)\nitems.extend(iterable)\nitems.insert(i, x)\nitems.remove(x)\nitems.pop()\nitems.sort()\nitems.reverse()\nitems.copy()\n\n# Comprehensions\n[x**2 for x in range(10)]\n[x for x in items if x > 0]\n\n# Copy\nshallow = items.copy()\ndeep = copy.deepcopy(items)\n"
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
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix ops with nested lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter with comprehensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board as 2D lists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Scraping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storing parsed results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6.3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Time complexity of list.insert(0, x)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(log n)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) O(n) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n^2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[[0]*3 for _ in range(3)]"
      }), " create?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Shared rows"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) Independent rows ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Flat list"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Syntax error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which method removes and returns last element?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) remove()"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) pop() ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) delete()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) clear()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Output of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[x*2 for x in range(5) if x%2==0]"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) [0,4,8,12,16]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) [2,6,10,14,18]"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) [0,4,8] ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) [0,2,4,6,8]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which import for deepcopy()?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) import deepcopy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) import copy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) from sys import deepcopy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) import collections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 6: TypeScript Array Equivalents (Python lists)\n// Python: lst = [1, 2, 3]\nconst numbers: number[] = [1, 2, 3];\n// or: const numbers: Array<number> = [1, 2, 3];\n\n// Python: lst.append(x) → TypeScript: .push()\nnumbers.push(4);  // [1, 2, 3, 4]\n\n// Python: lst.pop() → TypeScript: .pop()\nconst last: number | undefined = numbers.pop();  // 4\n\n// Python: lst.insert(i, x) → TypeScript: .splice()\nnumbers.splice(0, 0, 0);  // [0, 1, 2, 3]  (insert at index 0)\n\n// Python: lst.remove(x) → TypeScript: indexOf + splice\nconst idx: number = numbers.indexOf(2);\nif (idx !== -1) numbers.splice(idx, 1);  // [0, 1, 3]\n\n// Python: slicing (lst[1:3]) → TypeScript: .slice()\nconst sliced: number[] = numbers.slice(1, 3);\n\n// Python: list comprehension [x*2 for x in range(5)]\nconst doubled: number[] = [0, 1, 2, 3, 4].map((x) => x * 2);\n// Equivalent: [0, 2, 4, 6, 8]\n\n// Python: filtered list [x for x in lst if x > 2]\nconst filtered: number[] = numbers.filter((x) => x > 2);\n\n// Python: sorted(lst) → TypeScript: .toSorted() (ES2023+)\nconst sorted: number[] = [3, 1, 2].toSorted((a, b) => a - b);\n\n// Python: lst.sort() → TypeScript: .sort()\nconst mutable: number[] = [3, 1, 2];\nmutable.sort((a, b) => a - b);  // mutates in place\n\n// Python: copy.deepcopy() → TypeScript: structuredClone()\nconst nested: number[][] = [[1, 2], [3, 4]];\nconst deepCopy: number[][] = structuredClone(nested);\ndeepCopy[0][0] = 99;\nconsole.log(nested[0][0]);  // 1 (original unchanged)\n\n// Python: len(lst) → TypeScript: .length\nconsole.log(numbers.length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-array-patterns",
      children: "More TypeScript Array Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: 2D list (matrix) → TypeScript: nested arrays\nconst matrix: number[][] = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9],\n];\n// Python: matrix[1][2] → TypeScript: matrix[1][2]\nconsole.log(matrix[1][2]);  // 6\n\n// Python: list flattening → TypeScript: flat()\nconst nested: number[][] = [[1, 2], [3, 4], [5]];\nconsole.log(nested.flat());  // [1, 2, 3, 4, 5]\n// Python: [item for sublist in nested for item in sublist]\n\n// Python: any() / all() → TypeScript: .some() / .every()\nconst nums: number[] = [1, 2, 3, 4, 5];\nconsole.log(nums.some((x) => x > 4));   // true (Python: any(x > 4 for x in nums))\nconsole.log(nums.every((x) => x > 0));  // true (Python: all(x > 0 for x in nums))\n\n// Python: enumerate with start → TypeScript: entries + map\nfor (const [i, val] of [\"a\", \"b\", \"c\"].entries()) {\n  console.log(`${i}: ${val}`);  // 0: a, 1: b, 2: c\n}\n\n// Python: reversed list → TypeScript: toReversed() (ES2023+)\nconsole.log([1, 2, 3].toReversed());  // [3, 2, 1]\n\n// Python: list.find() → TypeScript: .find()\nconst found = nums.find((x) => x > 3);  // 4 (first match)\nconsole.log(found);\n\n// Python: in operator for list → TypeScript: .includes()\nconsole.log(nums.includes(3));  // true (Python: 3 in nums)\n\n// Python: slice assignment → TypeScript: splice\nconst arr: number[] = [1, 2, 3, 4, 5];\narr.splice(1, 2, 99, 100);  // replaces 2 elements starting at index 1\nconsole.log(arr);  // [1, 99, 100, 4, 5]\n// Python: arr[1:3] = [99, 100]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-sorting--searching-patterns",
      children: "TypeScript Sorting & Searching Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: sorted with reverse → TypeScript: sort with comparator\nconst unsorted = [3, 1, 4, 1, 5, 9, 2, 6];\nunsorted.sort((a, b) => a - b);    // ascending [1, 1, 2, 3, 4, 5, 6, 9]\nunsorted.sort((a, b) => b - a);    // descending [9, 6, 5, 4, 3, 2, 1, 1]\n\n// Python: sorted with key=str.lower → TypeScript: sort with transform\nconst mixed = [\"Banana\", \"apple\", \"Cherry\"];\nmixed.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: \"base\" }));\nconsole.log(mixed);  // [\"apple\", \"Banana\", \"Cherry\"]\n\n// Python: binary search (bisect) → TypeScript: manual implementation\nfunction binarySearch<T>(sorted: T[], target: T): number {\n  let left = 0, right = sorted.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (sorted[mid] === target) return mid;\n    if (sorted[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;  // not found\n}\nconst sorted2 = [1, 3, 5, 7, 9, 11];\nconsole.log(binarySearch(sorted2, 7));   // 3\nconsole.log(binarySearch(sorted2, 4));   // -1\n\n// Python: list as stack → TypeScript: push/pop\nconst stack: number[] = [];\nstack.push(1); stack.push(2); stack.push(3);\nconsole.log(stack.pop());  // 3 (LIFO)\nconsole.log(stack.pop());  // 2\n\n// Python: list as queue (deque preferred) → TypeScript: push/shift\nconst queue2: number[] = [];\nqueue2.push(1); queue2.push(2); queue2.push(3);\nconsole.log(queue2.shift());  // 1 (FIFO)\n\n// Python: random.shuffle → TypeScript: Fisher-Yates\nfunction shuffle<T>(arr: T[]): T[] {\n  const result = [...arr];\n  for (let i = result.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [result[i], result[j]] = [result[j], result[i]];\n  }\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === List Operation Stats Tracker ===\nclass ListStats<T> {\n  private pushes = 0; private pops = 0; private shifts = 0; private unshifts = 0;\n  push(...items: T[]): number {\n    this.pushes += items.length;\n    return items.length;\n  }\n  pop(): T | undefined { this.pops++; return undefined; }\n  shift(): T | undefined { this.shifts++; return undefined; }\n  unshift(...items: T[]): number { this.unshifts += items.length; return items.length; }\n  report(): Record<string, number> {\n    return { pushes: this.pushes, pops: this.pops, shifts: this.shifts, unshifts: this.unshifts };\n  }\n}\nconst tracker = new ListStats<number>();\ntracker.push(1, 2, 3);\ntracker.pop();\nconsole.log(tracker.report());\n\n// === Sort Comparator Generator ===\ntype CompareFn<T> = (a: T, b: T) => number;\nfunction byField<T>(field: keyof T, desc = false): CompareFn<T> {\n  return (a, b) => (a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0) * (desc ? -1 : 1);\n}\nfunction byMultiple<T>(...fns: CompareFn<T>[]): CompareFn<T> {\n  return (a, b) => { for (const fn of fns) { const r = fn(a, b); if (r !== 0) return r; } return 0; };\n}\nconst users = [{ name: \"Alice\", age: 30 }, { name: \"Bob\", age: 25 }, { name: \"Alice\", age: 20 }];\nusers.sort(byMultiple(byField(\"name\"), byField(\"age\")));\nconsole.log(users);\n\n// === Chunk / Partition ===\nfunction chunk<T>(arr: T[], size: number): T[][] {\n  const result: T[][] = [];\n  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));\n  return result;\n}\nfunction partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]] {\n  return arr.reduce(([a, b], x) => (pred(x) ? [a.concat(x), b] : [a, b.concat(x)]), [[] as T[], [] as T[]]);\n}\nconsole.log(chunk([1, 2, 3, 4, 5], 2));\nconsole.log(partition([1, 2, 3, 4, 5], (x) => x % 2 === 0));\n\n// === Deduplicate ===\nfunction unique<T>(arr: T[]): T[] {\n  return [...new Set(arr)];\n}\nconsole.log(unique([1, 2, 2, 3, 1, 4]));\n\n// === Flatten (Python list flatten) ===\nfunction flatten<T>(arr: (T | T[])[]): T[] {\n  return arr.reduce<T[]>((acc, x) => acc.concat(Array.isArray(x) ? flatten(x) : x), []);\n}\nconsole.log(flatten([1, [2, [3, 4]], 5]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-array-patterns",
      children: "TypeScript Advanced Array Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Immutable List Operations ===\nfunction push<T>(arr: readonly T[], item: T): T[] { return [...arr, item]; }\nfunction pop<T>(arr: readonly T[]): { item: T | undefined; rest: T[] } {\n  return { item: arr[arr.length - 1], rest: arr.slice(0, -1) };\n}\nfunction removeAt<T>(arr: readonly T[], idx: number): T[] {\n  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];\n}\nfunction updateAt<T>(arr: readonly T[], idx: number, val: T): T[] {\n  return idx < 0 || idx >= arr.length ? [...arr] : Object.assign([...arr], { [idx]: val });\n}\nconst base = [1, 2, 3, 4, 5];\nconsole.log(push(base, 6));      // [1,2,3,4,5,6]\nconsole.log(pop(base));           // { item: 5, rest: [1,2,3,4] }\nconsole.log(removeAt(base, 2));   // [1,2,4,5]\nconsole.log(base);                // [1,2,3,4,5] (unchanged)\n\n// === Python-style Slice ===\nfunction slice<T>(arr: T[], start = 0, end = arr.length, step = 1): T[] {\n  const result: T[] = [];\n  if (step > 0) {\n    for (let i = start; i < end && i < arr.length; i += step) result.push(arr[i]);\n  } else {\n    for (let i = start; i > end && i >= 0; i += step) result.push(arr[i]);\n  }\n  return result;\n}\nconst items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\nconsole.log(slice(items, 2, 7));       // [2,3,4,5,6]\nconsole.log(slice(items, 0, 10, 2));   // [0,2,4,6,8]\n\n// === Python-style Array Methods ===\nfunction enumerate<T>(arr: T[]): [number, T][] { return arr.map((v, i) => [i, v]); }\nfunction zip<T, U>(a: T[], b: U[]): [T, U][] { return a.slice(0, Math.min(a.length, b.length)).map((v, i) => [v, b[i]]); }\nfunction chunk<T>(arr: T[], size: number): T[][] {\n  const result: T[][] = [];\n  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));\n  return result;\n}\nconsole.log(enumerate([\"a\",\"b\",\"c\"]));\nconsole.log(chunk([1,2,3,4,5,6,7], 3));\n\n// === Binary Search ===\nfunction binarySearch<T>(arr: T[], target: T): number {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >>> 1;\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -lo - 1;\n}\nconsole.log(binarySearch([1, 3, 5, 7, 9], 5));\n\n// === Performance Benchmark ===\nfunction benchListOps(size = 50000): Record<string, number> {\n  const arr: number[] = [];\n  const t1 = performance.now();\n  for (let i = 0; i < size; i++) arr.push(i);\n  const t2 = performance.now();\n  for (let i = 0; i < size; i++) arr[i] = i * 2;\n  const t3 = performance.now();\n  let sum = 0;\n  for (let i = 0; i < arr.length; i++) sum += arr[i];\n  const t4 = performance.now();\n  let sum2 = 0;\n  for (const v of arr) sum2 += v;\n  const t5 = performance.now();\n  return { pushMs: +(t2-t1).toFixed(2), indexLoopMs: +(t4-t3).toFixed(2), forOfMs: +(t5-t4).toFixed(2) };\n}\nconsole.log(benchListOps());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-array-transform--pipeline-patterns",
      children: "TypeScript Array Transform & Pipeline Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Array Monad (flatMap/bind) ===\nclass ArrayMonad<T> {\n  constructor(private items: T[]) {}\n  map<R>(fn: (x: T) => R): ArrayMonad<R> { return new ArrayMonad(this.items.map(fn)); }\n  flatMap<R>(fn: (x: T) => R[]): ArrayMonad<R> { return new ArrayMonad(this.items.flatMap(fn)); }\n  filter(pred: (x: T) => boolean): ArrayMonad<T> { return new ArrayMonad(this.items.filter(pred)); }\n  reduce<R>(fn: (acc: R, x: T) => R, init: R): R { return this.items.reduce(fn, init); }\n  toArray(): T[] { return [...this.items]; }\n  static of<T>(...items: T[]): ArrayMonad<T> { return new ArrayMonad(items); }\n}\nconst pipeResult = ArrayMonad.of(1, 2, 3, 4, 5)\n  .filter(x => x % 2 === 0)\n  .flatMap(x => [x, x * 10])\n  .map(x => `#${x}`);\nconsole.log(pipeResult.toArray()); // [\"#2\", \"#20\", \"#4\", \"#40\"]\n\n// === Partition & Group By ===\nfunction partition<T>(arr: T[], pred: (x: T) => boolean): [T[], T[]] {\n  const pass: T[] = [], fail: T[] = [];\n  for (const item of arr) (pred(item) ? pass : fail).push(item);\n  return [pass, fail];\n}\nfunction groupBy<T, K>(arr: T[], keyFn: (x: T) => K): Map<K, T[]> {\n  const map = new Map<K, T[]>();\n  for (const item of arr) {\n    const key = keyFn(item);\n    if (!map.has(key)) map.set(key, []);\n    map.get(key)!.push(item);\n  }\n  return map;\n}\n\n// === Window/Sliding Operations ===\nfunction slidingWindow<T>(arr: T[], windowSize: number): T[][] {\n  const result: T[][] = [];\n  for (let i = 0; i <= arr.length - windowSize; i++) result.push(arr.slice(i, i + windowSize));\n  return result;\n}\nfunction movingAverage(data: number[], window: number): number[] {\n  return slidingWindow(data, window).map(w => w.reduce((a, b) => a + b, 0) / window);\n}\n\n// === Zip & Unzip ===\nfunction zip2<A, B>(a: A[], b: B[]): [A, B][] { return a.map((x, i) => [x, b[i]]); }\nfunction zip3<A, B, C>(a: A[], b: B[], c: C[]): [A, B, C][] { return a.map((x, i) => [x, b[i], c[i]]); }\nfunction unzip<A, B>(pairs: [A, B][]): [A[], B[]] { return pairs.reduce(([a, b], [x, y]) => [a.concat(x), b.concat(y)], [[] as A[], [] as B[]]); }\n\n// === List Rotation ===\nfunction rotateLeft<T>(arr: T[], n: number): T[] { const i = n % arr.length; return [...arr.slice(i), ...arr.slice(0, i)]; }\nfunction rotateRight<T>(arr: T[], n: number): T[] { return rotateLeft(arr, arr.length - (n % arr.length)); }\n\nconsole.log(partition([1, 2, 3, 4, 5], x => x > 3)); // [[4, 5], [1, 2, 3]]\nconsole.log(movingAverage([1, 2, 3, 4, 5], 3)); // [2, 3, 4]\nconsole.log(rotateLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]\nconsole.log(zip2([\"a\", \"b\", \"c\"], [1, 2, 3])); // [[\"a\", 1], [\"b\", 2], [\"c\", 3]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lists are ordered, mutable, and heterogeneous."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indexing, slicing, and slice assignment are flexible."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Methods: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "append()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extend()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "insert()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pop()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sort()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reverse()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "copy()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["List comprehensions are preferred over manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "+", (0,jsx_runtime.jsx)(_components.code, {
          children: "append"
        }), " loops."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested lists require careful creation to avoid shared references."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "copy.deepcopy()"
        }), " creates fully independent copies of nested structures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".push()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".pop()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".splice()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".map()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".filter()"
        }), " for equivalent operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "structuredClone()"
        }), " is the equivalent of Python's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "copy.deepcopy()"
        }), "."]
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
          children: "append()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extend()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[0] * 3] * 3"
        }), " produce a matrix where changing one row affects all rows?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sorted(x)"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x.sort()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the time complexity of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list.insert(0, x)"
        }), " and why?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a shallow copy differ from a deep copy?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does Python's list comprehension differ from TypeScript's ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".map()"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".filter()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the TypeScript equivalent of Python's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "list.copy()"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rotate(lst, k)"
        }), " that rotates a list to the right by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "k"
        }), " positions using slicing: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rotate([1, 2, 3, 4, 5], 2)"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[4, 5, 1, 2, 3]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a list comprehension to generate the first 20 Fibonacci numbers. Then filter to keep only odd numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a Tic-Tac-Toe board as a 3x3 list of strings. Write functions to print the board, check if a player has won, and check if the board is full."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chunk(lst, n)"
        }), " that splits a list into sublists of size n. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chunk([1,2,3,4,5], 2)"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[[1,2],[3,4],[5]]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "running_sum(lst)"
        }), " that returns a new list where each element at index i is the sum of all elements from index 0 to i."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a sparse matrix as a list of lists, but optimise it using a dictionary mapping ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(row, col)"
      }), " indices to values (default 0). Support addition of two sparse matrices. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "copy.deepcopy"
      }), " to ensure operations do not mutate operands. Compare memory usage for a 1000x1000 matrix with 100 non-zero entries against a full 1000x1000 list-of-lists representation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rewrite the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rotate"
      }), " function from Application Problem 1 in TypeScript. Then write a TypeScript version of the sparse matrix challenge, using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "structuredClone()"
      }), " for deep copying. Compare the performance of Python's list comprehension vs TypeScript's ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".map()"
      }), " for the Fibonacci number generation."]
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