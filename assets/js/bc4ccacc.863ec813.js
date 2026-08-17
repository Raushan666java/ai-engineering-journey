"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90811],{

/***/ 81414
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_07_tuples_sets_md_bc4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-07-tuples-sets-md-bc4.json
const site_docs_courses_python_programming_07_tuples_sets_md_bc4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/07-tuples-sets","title":"Chapter 7: Tuples and Sets","description":"Previous Dictionaries","source":"@site/docs/courses/python-programming/07-tuples-sets.md","sourceDirName":"courses/python-programming","slug":"/python-programming/07-tuples-sets","permalink":"/ai-engineering-journey/python-programming/07-tuples-sets","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-tuples-sets","slug":"/python-programming/07-tuples-sets","title":"Chapter 7: Tuples and Sets","sidebar_label":"Chapter 7: Tuples and Sets","sidebar_position":7},"sidebar":"course-python-programming","previous":{"title":"Chapter 6: Lists","permalink":"/ai-engineering-journey/python-programming/06-lists"},"next":{"title":"Chapter 8: Dictionaries","permalink":"/ai-engineering-journey/python-programming/08-dictionaries"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/07-tuples-sets.md


const frontMatter = {
	id: '07-tuples-sets',
	slug: '/python-programming/07-tuples-sets',
	title: 'Chapter 7: Tuples and Sets',
	sidebar_label: 'Chapter 7: Tuples and Sets',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Tuples and Sets';

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
  "value": "7.1 Tuples",
  "id": "71-tuples",
  "level": 2
}, {
  "value": "7.1.1 Tuple Operations",
  "id": "711-tuple-operations",
  "level": 3
}, {
  "value": "7.1.2 Why Use Tuples?",
  "id": "712-why-use-tuples",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "7.2 Tuple Unpacking",
  "id": "72-tuple-unpacking",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-1",
  "level": 3
}, {
  "value": "7.3 namedtuple",
  "id": "73-namedtuple",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-2",
  "level": 3
}, {
  "value": "7.4 Sets",
  "id": "74-sets",
  "level": 2
}, {
  "value": "7.4.1 Creating Sets",
  "id": "741-creating-sets",
  "level": 3
}, {
  "value": "7.4.2 Set Methods",
  "id": "742-set-methods",
  "level": 3
}, {
  "value": "7.4.3 Set Operations",
  "id": "743-set-operations",
  "level": 3
}, {
  "value": "7.4.4 Set Comprehensions",
  "id": "744-set-comprehensions",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-3",
  "level": 3
}, {
  "value": "7.5 frozenset",
  "id": "75-frozenset",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-4",
  "level": 3
}, {
  "value": "7.6 Choosing Between Data Structures",
  "id": "76-choosing-between-data-structures",
  "level": 2
}, {
  "value": "7.7 Practical Patterns",
  "id": "77-practical-patterns",
  "level": 2
}, {
  "value": "7.7.1 Removing Duplicates",
  "id": "771-removing-duplicates",
  "level": 3
}, {
  "value": "7.7.2 Finding Common Elements",
  "id": "772-finding-common-elements",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-5",
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
  "value": "TypeScript Advanced Set &amp; Tuple Patterns",
  "id": "typescript-advanced-set--tuple-patterns",
  "level": 3
}, {
  "value": "TypeScript Collection Operations",
  "id": "typescript-collection-operations",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Advanced Collection Patterns",
  "id": "typescript-advanced-collection-patterns",
  "level": 3
}, {
  "value": "TypeScript Advanced Collection Patterns",
  "id": "typescript-advanced-collection-patterns-1",
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
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways-1",
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
        id: "chapter-7-tuples-and-sets",
        children: "Chapter 7: Tuples and Sets"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/06-lists",
          children: "Lists"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/08-dictionaries",
          children: "Dictionaries"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and use tuples for immutable sequences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unpack tuples into variables with the star operator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "namedtuple"
        }), " for lightweight data objects"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform set operations including union, intersection, difference, and symmetric difference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between sets, frozensets, and other collections based on requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write set comprehensions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/07-tuples-sets.png",
        alt: "Tuples and Sets"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tuples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable ordered sequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unpacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star operator, extended unpacking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "namedtuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight data objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unordered unique elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "frozenset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable hashable sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List vs tuple vs set vs frozenset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication, common elements"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Tuples] --> B[Immutable Sequences]\n    B --> C[Unpacking]\n    C --> D[namedtuple]\n    E[Sets] --> F[Unique Elements]\n    F --> G[Set Operations]\n    G --> H[frozenset]\n    H --> I[Choosing Collections]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-tuples",
      children: "7.1 Tuples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tuples are immutable sequences created with commas -- use them for fixed data and dict keys.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use tuples as dictionary keys -- they are hashable. Lists cannot be dict keys."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A tuple is an ordered, immutable sequence of objects. Tuples are created with parentheses or just commas:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "empty = ()\nsingle = (42,)          # trailing comma required for single-element tuple\ncoordinates = (3, 4)\nwithout_parens = 3, 4   # tuple packing\nprint(type(without_parens))  # <class 'tuple'>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "711-tuple-operations",
      children: "7.1.1 Tuple Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tuples support indexing, slicing, concatenation, and repetition:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "t = (0, 1, 2, 3, 4, 5)\nprint(t[0])      # 0\nprint(t[-1])     # 5\nprint(t[2:4])    # (2, 3)\nprint(t[::-1])   # (5, 4, 3, 2, 1, 0)\nprint(t + (6,))  # (0, 1, 2, 3, 4, 5, 6)\nprint(t * 2)     # (0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5)\nprint(3 in t)    # True\nprint(len(t))    # 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tuples are immutable -- attempting to modify one raises ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeError"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "t[0] = 10  # TypeError: 'tuple' object does not support item assignment\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "712-why-use-tuples",
      children: "7.1.2 Why Use Tuples?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tuples are used where immutability matters:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dictionary keys (lists cannot be keys)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return values from functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Representing fixed collections like coordinates, RGB values, database records"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def min_max(lst):\n    return min(lst), max(lst)  # returns a tuple\n\nresult = min_max([3, 1, 4, 1, 5, 9])\nprint(result)   # (1, 9)\nprint(type(result))  # <class 'tuple'>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: tuples are typed arrays with fixed lengths\n// Declared with [type, type, ...] syntax:\nconst point: [number, number] = [3, 4];\nconsole.log(point[0]);  // 3\nconsole.log(point[1]);  // 4\n\n// TypeScript tuples are NOT immutable by default\n// Use readonly for immutability:\nconst readonlyPoint: readonly [number, number] = [3, 4];\n// readonlyPoint[0] = 10;  // Error\n\n// Destructuring (like Python unpacking):\nconst [x, y] = point;\nconsole.log(x, y);  // 3 4\n\n// Named tuple type for readability:\ntype Point = readonly [number, number];\nfunction minMax(lst: number[]): [number, number] {\n    return [Math.min(...lst), Math.max(...lst)];\n}\nconst result = minMax([3, 1, 4, 1, 5, 9]);\nconsole.log(result);  // [1, 9]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Python[Python Tuples]\n        P1[\"t = (1, 2, 3)\"] --> P2[Immutable, hashable]\n        P2 --> P3[Can be dict keys]\n        P3 --> P4[Unpacking: a, b = t]\n    end\n\n    subgraph TS[TypeScript Tuples]\n        T1[\"const t: [number, number] = [1, 2]\"] --> T2[Fixed-length array]\n        T2 --> T3[\"readonly for immutability\"]\n        T3 --> T4[\"Destructuring: const [a, b] = t\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-tuple-unpacking",
      children: "7.2 Tuple Unpacking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Extended unpacking with * captures remaining elements into a list."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unpacking assigns tuple elements to variables in one statement:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "point = (10, 20)\nx, y = point\nprint(x, y)     # 10 20\n\n# Swapping values\na, b = 1, 2\na, b = b, a\nprint(a, b)     # 2 1\n\n# Extended unpacking with *\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(first)    # 1\nprint(middle)   # [2, 3, 4]\nprint(last)     # 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The star operator collects remaining elements. Only one starred expression is allowed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "head, *tail = range(5)\nprint(head)  # 0\nprint(tail)  # [1, 2, 3, 4]\n\n*_, last = [10, 20, 30, 40, 50]\nprint(last)  # 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-1",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: destructuring (same concept, different syntax)\nconst point: [number, number] = [10, 20];\nconst [x, y] = point;\nconsole.log(x, y);  // 10 20\n\n// Swapping (requires temp or array)\nlet a = 1, b = 2;\n[a, b] = [b, a];   // same swap technique in TS!\nconsole.log(a, b);  // 2 1\n\n// Rest/spread for extended unpacking (ES2018+):\nconst [first, ...middle] = [1, 2, 3, 4, 5];\nconsole.log(first);   // 1\nconsole.log(middle);  // [2, 3, 4]\n\n// The rest element must be at the end (no *middle in middle)\nconst [, , ...rest] = [10, 20, 30, 40, 50];\nconsole.log(rest);  // [30, 40, 50]\n"
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
            children: "Basic unpacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x, y = (1, 2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const [x, y] = [1, 2]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a, b = b, a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[a, b] = [b, a]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "first, *rest = lst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const [first, ...rest] = lst"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*_, last = lst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const [_, , last] = lst"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested unpacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(a, (b, c)) = pair"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const [a, [b, c]] = pair"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-namedtuple",
      children: "7.3 namedtuple"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " namedtuple creates tuple subclasses with named fields -- more readable than bare tuples."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "namedtuple"
      }), " creates tuple subclasses with named fields:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import namedtuple\n\nPoint = namedtuple(\"Point\", [\"x\", \"y\"])\np = Point(3, 4)\nprint(p.x, p.y)   # 3 4\nprint(p[0], p[1])  # 3 4 (still works as tuple)\nx, y = p           # unpacking works\nprint(p)           # Point(x=3, y=4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Named fields improve code readability compared to bare tuples:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# With namedtuple -- self-documenting\nEmployee = namedtuple(\"Employee\", [\"name\", \"age\", \"department\", \"salary\"])\nemp = Employee(\"Alice\", 30, \"Engineering\", 95000)\nprint(emp.department)  # Engineering\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(p._asdict())   # {'x': 3, 'y': 4}\np2 = p._replace(x=5)  # returns new namedtuple\nprint(p2)            # Point(x=5, y=4)\nprint(p._fields)     # ('x', 'y')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-2",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: interfaces/classes for the namedtuple equivalent\ninterface Point {\n    readonly x: number;\n    readonly y: number;\n}\n\n// Simple object literal (most common):\nconst p: Point = { x: 3, y: 4 };\nconsole.log(p.x, p.y);  // 3 4\n\n// Interface with methods:\ninterface Employee {\n    readonly name: string;\n    readonly age: number;\n    readonly department: string;\n    readonly salary: number;\n}\n\nconst emp: Employee = {\n    name: \"Alice\",\n    age: 30,\n    department: \"Engineering\",\n    salary: 95000\n};\nconsole.log(emp.department);  // Engineering\n\n// Python's namedtuple is between a tuple and a class\n// TypeScript has explicit interfaces/classes instead\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-sets",
      children: "7.4 Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Sets provide O(1) membership testing and powerful algebra: union, intersection, difference."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Sets are unordered -- never rely on element position. Use dict.fromkeys() if order matters.\nA set is an unordered collection of unique, hashable elements:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "empty = set()      # not {} (that's an empty dict)\nnumbers = {1, 2, 3, 4, 5}\nmixed = {1, \"hello\", (1, 2)}  # tuples are hashable\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-creating-sets",
      children: "7.4.1 Creating Sets"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from_list = set([1, 2, 3, 2, 1])   # {1, 2, 3} -- duplicates removed\nfrom_string = set(\"hello\")          # {'h', 'e', 'l', 'o'} -- unordered\nfrom_generator = set(x ** 2 for x in range(5))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-set-methods",
      children: "7.4.2 Set Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = {1, 2, 3, 4, 5}\ns.add(6)             # {1, 2, 3, 4, 5, 6}\ns.discard(3)         # {1, 2, 4, 5, 6} -- no error if missing\ns.remove(2)          # {1, 4, 5, 6}     -- KeyError if missing\npopped = s.pop()     # removes and returns an arbitrary element\ns.clear()            # set()\n\nprint(len({1, 2, 3}))           # 3\nprint(2 in {1, 2, 3})           # True (O(1) on average)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-set-operations",
      children: "7.4.3 Set Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "a = {1, 2, 3, 4, 5}\nb = {4, 5, 6, 7, 8}\n\nprint(a | b)   # Union:        {1, 2, 3, 4, 5, 6, 7, 8}\nprint(a & b)   # Intersection: {4, 5}\nprint(a - b)   # Difference:   {1, 2, 3}\nprint(a ^ b)   # Symmetric diff: {1, 2, 3, 6, 7, 8}\n\n# Comparison\nprint({1, 2} <= {1, 2, 3})    # subset: True\nprint({1, 2, 3} >= {1, 2})    # superset: True\nprint({1, 2}.isdisjoint({3}))  # True (no common elements)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "744-set-comprehensions",
      children: "7.4.4 Set Comprehensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "squares = {x ** 2 for x in range(10)}\neven_squares = {x ** 2 for x in range(20) if x % 2 == 0}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-3",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Set class (ES2015+)\nconst empty = new Set<number>();\nconst numbers = new Set([1, 2, 3, 4, 5]);\n\n// Methods:\nnumbers.add(6);              // add\nnumbers.delete(3);           // discard (returns boolean - no error if missing)\n// numbers.delete(3);        // remove equivalent\n// No direct pop equivalent - get first value with next()\nnumbers.clear();\n\n// Membership testing:\nconsole.log(numbers.has(2));  // true (like Python's `in`)\nconsole.log(numbers.size);    // 3  (like Python's len())\n\n// Set operations (no built-in -- manual):\nconst a = new Set([1, 2, 3, 4, 5]);\nconst b = new Set([4, 5, 6, 7, 8]);\n\n// Union:\nconst union = new Set([...a, ...b]);\nconsole.log(union);  // {1, 2, 3, 4, 5, 6, 7, 8}\n\n// Intersection:\nconst intersection = new Set([...a].filter(x => b.has(x)));\nconsole.log(intersection);  // {4, 5}\n\n// Difference:\nconst difference = new Set([...a].filter(x => !b.has(x)));\nconsole.log(difference);  // {1, 2, 3}\n\n// Symmetric difference:\nconst symDiff = new Set([...a].filter(x => !b.has(x))\n    .concat([...b].filter(x => !a.has(x))));\nconsole.log(symDiff);  // {1, 2, 3, 6, 7, 8}\n\n// Comparison:\nconsole.log([1, 2].every(x => a.has(x)));  // subset check\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{1, 2, 3}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new Set([1, 2, 3])"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.add(x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.add(x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s.discard(x)"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "s.remove(x)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.delete(x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x in s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.has(x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "len(s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.size"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a | b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new Set([...a, ...b])"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a & b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new Set([...a].filter(x => b.has(x)))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a - b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new Set([...a].filter(x => !b.has(x)))"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-frozenset",
      children: "7.5 frozenset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " frozenset is an immutable, hashable set that can serve as dictionary keys."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "fs = frozenset([1, 2, 3, 3, 2])\nprint(fs)         # frozenset({1, 2, 3})\nprint(fs | frozenset([3, 4]))  # frozenset({1, 2, 3, 4})\n\nd = {frozenset({1, 2}): \"value\"}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-4",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: no direct frozenset equivalent\n// Use ReadonlySet<number> for a read-only view:\nconst fs: ReadonlySet<number> = new Set([1, 2, 3]);\n// fs.add(4);  // Error: Property 'add' does not exist on type 'ReadonlySet'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-choosing-between-data-structures",
      children: "7.6 Choosing Between Data Structures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tuple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "frozenset"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hashable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) avg"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-practical-patterns",
      children: "7.7 Practical Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use dict.fromkeys(seq) for ordered deduplication or set() when order does not matter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "771-removing-duplicates",
      children: "7.7.1 Removing Duplicates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "items = [3, 1, 2, 1, 3, 4, 2]\nunique_items = list(set(items))\nprint(unique_items)  # [1, 2, 3, 4] (but order lost)\n\n# Preserve order (Python 3.7+)\nunique_ordered = list(dict.fromkeys(items))\nprint(unique_ordered)  # [3, 1, 2, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "772-finding-common-elements",
      children: "7.7.2 Finding Common Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def common_elements(lst1, lst2):\n    return list(set(lst1) & set(lst2))\n\nprint(common_elements([1, 2, 3, 4], [3, 4, 5, 6]))  # [3, 4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-5",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Deduplicate with Set:\nconst items: number[] = [3, 1, 2, 1, 3, 4, 2];\nconst uniqueItems = [...new Set(items)];\nconsole.log(uniqueItems);  // [3, 1, 2, 4]\n\n// Preserve order (Set iteration is insertion-order in JS):\nconsole.log(uniqueItems);  // [3, 1, 2, 4] (order maintained)\n\n// Common elements:\nfunction commonElements<T>(lst1: T[], lst2: T[]): T[] {\n    const set2 = new Set(lst2);\n    return [...new Set(lst1)].filter(x => set2.has(x));\n}\nconsole.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));  // [3, 4]\n"
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
            children: "Tuples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable, hashable, for fixed data"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(42)"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(42,)"
            }), " for single-element tuple"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unpacking"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), " captures into list"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting only one starred expression allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "namedtuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named fields + tuple compatibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using bare tuples when namedtuple clarifies intent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) membership, deduplication, algebra"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Creating ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set()"
            }), " for empty set"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frozenset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hashable immutable set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using mutable set as dict key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS has tuples (arrays) and Set class, no frozenset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Expecting Python's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "|"
            }), " operator syntax in TS"]
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
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tuple"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Set"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "frozenset"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hashable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
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
        children: "# Tuple\nt = (1, 2, 3)\nx, y, z = t\nfirst, *rest = t\n\n# namedtuple\nfrom collections import namedtuple\nPoint = namedtuple(\"Point\", [\"x\", \"y\"])\np = Point(3, 4)\nprint(p.x, p.y)\n\n# Set\ns = {1, 2, 3}\ns.add(4)\ns.discard(1)\n\n# Set operations\na | b  # union\na & b  # intersection\na - b  # difference\na ^ b  # symmetric diff\n\n# frozenset\nfs = frozenset([1, 2, 3])\n"
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
            children: "Data Cleaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplication with sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.7.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency with sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named fields with namedtuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return multiple values as tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " How to create a single-element tuple?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) (42)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) (42,) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) tuple(42)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) [42]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What membership test time does a set offer?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(log n)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) O(1) average ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n^2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a - b"
      }), " do with two sets?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Union"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Intersection"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) Difference ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Symmetric diff"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which can be a dictionary key?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) List"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Set"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C) Tuple ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Dictionary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Difference between s.discard(x) and s.remove(x)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) discard raises if missing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) remove raises if missing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Same thing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) discard works on lists"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 7: TypeScript Tuple & Set Equivalents\n// Python: tuple literal → TypeScript: readonly array\nconst point: readonly [number, number] = [3, 4];\nconsole.log(point[0], point[1]);  // 3 4\n\n// Python: tuple unpacking → TypeScript: destructuring\nconst [x, y] = point;\nconsole.log(x, y);  // 3 4\n\n// Python: namedtuple → TypeScript: class or interface\ninterface Student {\n  name: string;\n  id: number;\n  grades: number[];\n}\nconst alice: Student = { name: \"Alice\", id: 1, grades: [90, 85, 92] };\n// Python equivalent: Student = namedtuple(\"Student\", [\"name\", \"id\", \"grades\"])\n\n// Python: rest unpacking (first, *rest = items) → TypeScript: rest\nconst items: number[] = [1, 2, 3, 4, 5];\nconst [first, ...rest] = items;\nconsole.log(first);  // 1\nconsole.log(rest);   // [2, 3, 4, 5]\n\n// Python: set literal → TypeScript: Set\nconst setA: Set<number> = new Set([1, 2, 3, 4]);\nconst setB: Set<number> = new Set([3, 4, 5, 6]);\n\n// Python: membership (x in s) → TypeScript: .has()\nconsole.log(setA.has(2));  // true  (Python: 2 in setA)\n\n// Python: set operations must be implemented manually\n// union: A | B\nconst union = new Set([...setA, ...setB]);\nconsole.log(union);  // Set {1, 2, 3, 4, 5, 6}\n\n// intersection: A & B\nconst intersection = new Set([...setA].filter((x) => setB.has(x)));\nconsole.log(intersection);  // Set {3, 4}\n\n// difference: A - B\nconst difference = new Set([...setA].filter((x) => !setB.has(x)));\nconsole.log(difference);  // Set {1, 2}\n\n// symmetric difference: A ^ B\nconst symmetricDiff = new Set(\n  [...setA].filter((x) => !setB.has(x)).concat(\n    [...setB].filter((x) => !setA.has(x))\n  )\n);\n\n// Python: frozenset → TypeScript: no direct equivalent\n// Use ReadonlySet<T> type or wrap in a frozen object\nconst frozen: ReadonlySet<number> = new Set([1, 2, 3]);\n// frozen.add(4);  // TypeScript prevents mutation at compile time\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-set--tuple-patterns",
      children: "TypeScript Advanced Set & Tuple Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: Jaccard similarity → TypeScript implementation\nfunction jaccardSimilarity<T>(a: Set<T>, b: Set<T>): number {\n  const intersection = new Set([...a].filter((x) => b.has(x)));\n  const union = new Set([...a, ...b]);\n  return intersection.size / union.size;\n}\nconst set1 = new Set([1, 2, 3, 4]);\nconst set2 = new Set([3, 4, 5, 6]);\nconsole.log(jaccardSimilarity(set1, set2));  // 0.333...\n\n// Python: frozenset as dict key → TypeScript: Map with tuple keys\nconst cache = new Map<string, number>();\nconst makeKey = (...args: unknown[]): string => JSON.stringify(args);\ncache.set(makeKey(1, 2, 3), 42);\nconsole.log(cache.get(makeKey(1, 2, 3)));  // 42\n\n// Python: namedtuple for data → TypeScript: readonly tuple\ntype Color = readonly [number, number, number, number];  // RGBA\nconst red: Color = [255, 0, 0, 255];\n// red[0] = 0;  // TypeScript error: Cannot assign to readonly\n\n// Python: set comprehension → TypeScript: Set from array methods\nconst squares = new Set([1, 2, 3, 4, 5].map((x) => x * x));\nconsole.log(squares);  // Set {1, 4, 9, 16, 25}\n\n// Python: tuple as record → TypeScript: discriminated union\ntype Status = [\"success\", string] | [\"error\", Error];\nfunction handleResult(result: Status): void {\n  if (result[0] === \"success\") {\n    console.log(`OK: ${result[1]}`);  // TypeScript narrows the type\n  } else {\n    console.error(`FAIL: ${result[1].message}`);\n  }\n}\n\n// Python: multiple return as tuple → TypeScript: destructured return\nfunction minMax(values: number[]): [number, number] {\n  let min = Infinity, max = -Infinity;\n  for (const v of values) { if (v < min) min = v; if (v > max) max = v; }\n  return [min, max];\n}\nconst [min, max] = minMax([3, 1, 4, 1, 5]);\nconsole.log(min, max);  // 1, 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-collection-operations",
      children: "TypeScript Collection Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: set as membership filter → TypeScript: Set.has\nfunction removeDuplicates<T>(items: T[]): T[] {\n  return [...new Set(items)];\n}\nconsole.log(removeDuplicates([1, 2, 2, 3, 3, 3]));  // [1, 2, 3]\n\n// Python: set operations on strings → TypeScript: Set from string\nconst vowels = new Set(\"aeiou\".split(\"\"));\nconst word = \"typescript\";\nconst foundVowels = word.split(\"\").filter((c) => vowels.has(c));\nconsole.log(foundVowels);  // [\"e\", \"i\"]\n\n// Python: tuple as dict key → TypeScript: Map with composite key\nconst distances = new Map<string, number>();\nconst coordKey = (x: number, y: number): string => `${x},${y}`;\ndistances.set(coordKey(0, 0), 0);\ndistances.set(coordKey(0, 1), 1);\nconsole.log(distances.get(coordKey(0, 1)));  // 1\n\n// Python: collections.Counter from set difference\nfunction commonElements<T>(a: T[], b: T[]): T[] {\n  const setB = new Set(b);\n  return a.filter((x) => setB.has(x));\n}\n\n// Python: tuple swap → TypeScript: destructuring swap\nlet x2 = 10, y2 = 20;\n[x2, y2] = [y2, x2];  // swap (same as Python)\n\n// Python: sorted(set) → TypeScript: sort with Set\nfunction uniqueSorted(items: number[]): number[] {\n  return [...new Set(items)].sort((a, b) => a - b);\n}\nconsole.log(uniqueSorted([4, 2, 4, 1, 3, 2]));  // [1, 2, 3, 4]\n\n// Python: tuple return unpacking in function call\nfunction polarToCartesian(r: number, theta: number): [number, number] {\n  return [r * Math.cos(theta), r * Math.sin(theta)];\n}\n// Use spread to pass tuple as multiple arguments\nfunction distance(x: number, y: number): number {\n  return Math.sqrt(x ** 2 + y ** 2);\n}\nconst [x3, y3] = polarToCartesian(1, Math.PI / 4);\nconsole.log(x3, y3);  // 0.707..., 0.707...\n\n// Python: chain set comparisons → TypeScript: Set subset check\nfunction isSubset<T>(subset: Set<T>, superset: Set<T>): boolean {\n  return [...subset].every((x) => superset.has(x));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Set Theory Operations ===\nclass SetOps<T> {\n  static union<T>(a: Set<T>, b: Set<T>): Set<T> { return new Set([...a, ...b]); }\n  static intersection<T>(a: Set<T>, b: Set<T>): Set<T> { return new Set([...a].filter((x) => b.has(x))); }\n  static difference<T>(a: Set<T>, b: Set<T>): Set<T> { return new Set([...a].filter((x) => !b.has(x))); }\n  static symmetricDifference<T>(a: Set<T>, b: Set<T>): Set<T> {\n    return SetOps.difference(SetOps.union(a, b), SetOps.intersection(a, b));\n  }\n  static isSubset<T>(a: Set<T>, b: Set<T>): boolean { return [...a].every((x) => b.has(x)); }\n  static isSuperset<T>(a: Set<T>, b: Set<T>): boolean { return SetOps.isSubset(b, a); }\n  static jaccard<T>(a: Set<T>, b: Set<T>): number {\n    const inter = SetOps.intersection(a, b).size;\n    const union = SetOps.union(a, b).size;\n    return union === 0 ? 0 : inter / union;\n  }\n}\nconst s1 = new Set([1, 2, 3, 4]);\nconst s2 = new Set([3, 4, 5, 6]);\nconsole.log([...SetOps.union(s1, s2)]);           // [1,2,3,4,5,6]\nconsole.log([...SetOps.intersection(s1, s2)]);    // [3,4]\nconsole.log([...SetOps.difference(s1, s2)]);      // [1,2]\nconsole.log(SetOps.jaccard(s1, s2));              // 0.333...\n\n// === Tuple Destructuring Helper ===\nfunction swap<T, U>(pair: readonly [T, U]): [U, T] {\n  return [pair[1], pair[0]];\n}\nfunction splitHead<T>(list: T[]): [T, T[]] {\n  const [head, ...rest] = list;\n  return [head, rest];\n}\nconsole.log(swap([1, \"hello\"] as const));  // [\"hello\", 1]\nconsole.log(splitHead([1, 2, 3, 4]));      // [1, [2, 3, 4]]\n\n// === Readonly Checker ===\ntype DeepReadonly<T> = {\n  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];\n};\ninterface Point { x: number; y: number; }\ntype ImmutablePoint = DeepReadonly<Point>;\nconst p: ImmutablePoint = { x: 10, y: 20 };\n// p.x = 5; // Error: readonly\n\n// === Named Tuple (Python namedtuple equivalent) ===\nclass NamedTuple {\n  static create<T extends Record<string, unknown>>(schema: T, values: Partial<T>): T & { _fields: string[] } {\n    const fields = Object.keys(schema);\n    const instance = { ...schema, ...values, _fields: fields };\n    return instance as T & { _fields: string[] };\n  }\n}\nconst Student = NamedTuple.create({ name: \"\", id: 0, gpa: 0.0 }, { name: \"Alice\", id: 101, gpa: 3.8 });\nconsole.log(Student.name, Student.id, Student.gpa);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-collection-patterns",
      children: "TypeScript Advanced Collection Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Python-style Tuple Implementation ===\nclass PyTuple<T> {\n  private readonly items: readonly T[];\n  constructor(...items: T[]) { this.items = Object.freeze([...items]); }\n  get length(): number { return this.items.length; }\n  at(index: number): T {\n    if (index < 0) index = this.items.length + index;\n    if (index < 0 || index >= this.items.length) throw new Error(\"Index out of range\");\n    return this.items[index];\n  }\n  slice(start?: number, end?: number): PyTuple<T> { return new PyTuple(...this.items.slice(start, end)); }\n  concat<U>(other: PyTuple<U>): PyTuple<T | U> { return new PyTuple(...this.items, ...other.items); }\n  includes(item: T): boolean { return this.items.includes(item); }\n  indexOf(item: T): number { return this.items.indexOf(item); }\n  count(item: T): number { return this.items.filter(i => i === item).length; }\n  [Symbol.iterator](): Iterator<T> { return this.items[Symbol.iterator](); }\n}\nconst t = new PyTuple(1, \"hello\", true);\nconsole.log(t.at(0), t.at(-1));\n\n// === Python-style Set Operations ===\nfunction setUnion<T>(a: Set<T>, b: Set<T>): Set<T> { return new Set([...a, ...b]); }\nfunction setIntersection<T>(a: Set<T>, b: Set<T>): Set<T> { return new Set([...a].filter(x => b.has(x))); }\nfunction setDifference<T>(a: Set<T>, b: Set<T>): Set<T> { return new Set([...a].filter(x => !b.has(x))); }\nfunction setSymmetricDiff<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x))));\n}\nfunction setIsSubset<T>(a: Set<T>, b: Set<T>): boolean { return [...a].every(x => b.has(x)); }\nfunction isDisjoint<T>(a: Set<T>, b: Set<T>): boolean { return ![...a].some(x => b.has(x)); }\n\nconst A = new Set([1, 2, 3, 4]);\nconst B = new Set([3, 4, 5, 6]);\nconsole.log([...setUnion(A, B)]);\nconsole.log([...setIntersection(A, B)]);\n\n// === FrozenSet Equivalent ===\nclass FrozenSet<T> {\n  private readonly items: Set<T>;\n  constructor(items: Iterable<T>) { this.items = new Set(items); }\n  has(value: T): boolean { return this.items.has(value); }\n  get size(): number { return this.items.size; }\n  union(other: FrozenSet<T>): FrozenSet<T> { return new FrozenSet(setUnion(this.items, other.items)); }\n  intersection(other: FrozenSet<T>): FrozenSet<T> { return new FrozenSet(setIntersection(this.items, other.items)); }\n  [Symbol.iterator](): Iterator<T> { return this.items[Symbol.iterator](); }\n}\n\n// === DefaultSet ===\nclass DefaultSet<K, V> {\n  private map = new Map<K, Set<V>>();\n  add(key: K, value: V): void {\n    if (!this.map.has(key)) this.map.set(key, new Set());\n    this.map.get(key)!.add(value);\n  }\n  has(key: K, value: V): boolean { return this.map.get(key)?.has(value) ?? false; }\n}\n\n// === Performance Benchmark ===\nfunction benchSetVsArray(size = 10000): Record<string, number> {\n  const arr = Array.from({ length: size }, (_, i) => i);\n  const set = new Set(arr);\n  const searchItems = [0, size / 2, size - 1, -1];\n  const t1 = performance.now();\n  for (const item of searchItems) arr.includes(item);\n  const arrTime = performance.now() - t1;\n  const t2 = performance.now();\n  for (const item of searchItems) set.has(item);\n  const setTime = performance.now() - t2;\n  return { arraySearchMs: +arrTime.toFixed(3), setSearchMs: +setTime.toFixed(3), ratio: +(arrTime / setTime).toFixed(1) };\n}\nconsole.log(benchSetVsArray());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-collection-patterns-1",
      children: "TypeScript Advanced Collection Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Multiset (Python: collections.Counter) ===\nclass Counter2<T> {\n  private counts = new Map<T, number>();\n  add(item: T): void { this.counts.set(item, (this.counts.get(item) ?? 0) + 1); }\n  remove(item: T): boolean {\n    const c = this.counts.get(item);\n    if (!c) return false;\n    if (c === 1) this.counts.delete(item); else this.counts.set(item, c - 1);\n    return true;\n  }\n  get(item: T): number { return this.counts.get(item) ?? 0; }\n  entries(): [T, number][] { return [...this.counts.entries()]; }\n  mostCommon(n?: number): [T, number][] {\n    const sorted = [...this.counts.entries()].sort((a, b) => b[1] - a[1]);\n    return n ? sorted.slice(0, n) : sorted;\n  }\n  total(): number { return [...this.counts.values()].reduce((a, b) => a + b, 0); }\n}\n\n// === Ordered Set (Python: ordered-set) ===\nclass OrderedSet<T> {\n  private items = new Map<T, number>();\n  private order: T[] = [];\n  add(value: T): void {\n    if (!this.items.has(value)) { this.items.set(value, this.order.length); this.order.push(value); }\n  }\n  has(value: T): boolean { return this.items.has(value); }\n  delete(value: T): void {\n    const idx = this.items.get(value);\n    if (idx !== undefined) { this.order.splice(idx, 1); this.items.delete(value); }\n  }\n  values(): T[] { return [...this.order]; }\n  intersection(other: OrderedSet<T>): OrderedSet<T> {\n    const r = new OrderedSet<T>();\n    for (const v of this.order) if (other.has(v)) r.add(v);\n    return r;\n  }\n}\n\n// === Trie (prefix tree) ===\nclass Trie {\n  private children = new Map<string, Trie>();\n  private isEnd = false;\n  insert(word: string): void {\n    let node: Trie = this;\n    for (const ch of word) {\n      if (!node.children.has(ch)) node.children.set(ch, new Trie());\n      node = node.children.get(ch)!;\n    }\n    node.isEnd = true;\n  }\n  search(word: string): boolean {\n    let node: Trie = this;\n    for (const ch of word) { if (!node.children.has(ch)) return false; node = node.children.get(ch)!; }\n    return node.isEnd;\n  }\n  startsWith(prefix: string): string[] {\n    let node: Trie = this;\n    for (const ch of prefix) { if (!node.children.has(ch)) return []; node = node.children.get(ch)!; }\n    const results: string[] = [];\n    const dfs = (n: Trie, path: string) => {\n      if (n.isEnd) results.push(path);\n      for (const [ch, child] of n.children) dfs(child, path + ch);\n    };\n    dfs(node, prefix);\n    return results;\n  }\n}\n\n// === LRU Set (bounded) ===\nclass BoundedSet<T> {\n  private items = new Set<T>();\n  constructor(private maxSize: number) {}\n  add(value: T): void {\n    if (this.items.size >= this.maxSize) this.items.delete(this.items.values().next().value);\n    this.items.add(value);\n  }\n  has(value: T): boolean { return this.items.has(value); }\n}\n\nconst ctr = new Counter2<string>();\nctr.add(\"a\"); ctr.add(\"b\"); ctr.add(\"a\"); ctr.add(\"a\"); ctr.add(\"b\");\nconsole.log(ctr.mostCommon()); // [[\"a\", 3], [\"b\", 2]]\n\nconst trie = new Trie();\ntrie.insert(\"hello\"); trie.insert(\"help\"); trie.insert(\"world\");\nconsole.log(trie.startsWith(\"hel\")); // [\"hello\", \"help\"]\nconsole.log(trie.search(\"help\"));   // true\nconsole.log(trie.search(\"he\"));     // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tuples are immutable sequences; sorted by stability and hashability."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tuple unpacking with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " provides flexible destructuring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "namedtuple"
        }), " creates lightweight, readable data containers."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sets provide O(1) membership testing and powerful set algebra."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frozenset"
        }), " when an immutable, hashable set is needed."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set comprehension syntax mirrors list comprehension."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript has tuples (readonly arrays) and Set class; no namedtuple or frozenset equivalents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript requires manual implementation of set operations like union and intersection."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(42)"
        }), " not create a tuple? How do you fix it?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the time complexity of membership testing (", (0,jsx_runtime.jsx)(_components.code, {
          children: "in"
        }), ") for a list vs a set?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is a practical use case for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frozenset"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "namedtuple"
        }), " differ from regular tuples?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s.discard(x)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s.remove(x)"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does TypeScript model tuples differently from Python?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What TypeScript type acts like Python's frozenset?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_elements_preserving_order(seq)"
        }), " that returns a list of unique elements in the order they first appear. Use a set for tracking seen elements."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given two lists of email addresses, find the intersection (people in both lists), the symmetric difference (people in exactly one list), and list each clearly."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "namedtuple"
        }), " called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Student"
        }), " with fields ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grades"
        }), " (a list). Create a list of students. Compute the average grade for each student and print a report sorted by average descending."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jaccard_similarity(set1, set2)"
        }), " that computes the Jaccard index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|A & B| / |A | B|"
        }), ". Test with two sets and ensure it handles empty sets correctly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use tuple unpacking to implement a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "split_list(lst)"
        }), " that returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(first_half, second_half)"
        }), " for any list, splitting at the midpoint."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement a simple spell checker. Load a dictionary of English words into a set. Accept a sentence and flag any word not in the dictionary. For each misspelled word, suggest corrections by generating candidate words that differ by one edit (insertion, deletion, substitution). Use set operations to find which candidates are in the dictionary. Test with sample sentences containing deliberate misspellings."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rewrite the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jaccard_similarity"
      }), " function in TypeScript. Implement union, intersection, and difference as separate helper functions that operate on TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Set<T>"
      }), ". Then compare TypeScript's Set performance vs Python's set for 10,000-element operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways-1",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tuple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "readonly [T, U]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS tuples are typed; Python tuples are not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "namedtuple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define a class or interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS has no structural equivalent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "set"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Set<T>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Similar API (", (0,jsx_runtime.jsx)(_components.code, {
              children: "add"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "has"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "frozenset"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReadonlySet<T>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in frozen set in TS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "set"
            }), " operations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual loops or 3rd-party library"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TS has no built-in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "union"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "intersection"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tuple unpacking"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Destructuring ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[a, b] = tuple"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same concept, different syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return a tuple and unpack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same pattern"
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