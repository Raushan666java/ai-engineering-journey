"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[29448],{

/***/ 52350
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_08_dictionaries_md_caa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-08-dictionaries-md-caa.json
const site_docs_courses_python_programming_08_dictionaries_md_caa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/08-dictionaries","title":"Chapter 8: Dictionaries","description":"Previous Functions","source":"@site/docs/courses/python-programming/08-dictionaries.md","sourceDirName":"courses/python-programming","slug":"/python-programming/08-dictionaries","permalink":"/ai-engineering-journey/python-programming/08-dictionaries","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-dictionaries","slug":"/python-programming/08-dictionaries","title":"Chapter 8: Dictionaries","sidebar_label":"Chapter 8: Dictionaries","sidebar_position":8},"sidebar":"course-python-programming","previous":{"title":"Chapter 7: Tuples and Sets","permalink":"/ai-engineering-journey/python-programming/07-tuples-sets"},"next":{"title":"Chapter 9: Functions","permalink":"/ai-engineering-journey/python-programming/09-functions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/08-dictionaries.md


const frontMatter = {
	id: '08-dictionaries',
	slug: '/python-programming/08-dictionaries',
	title: 'Chapter 8: Dictionaries',
	sidebar_label: 'Chapter 8: Dictionaries',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Dictionaries';

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
  "value": "8.1 Dictionary Basics",
  "id": "81-dictionary-basics",
  "level": 2
}, {
  "value": "8.2 Basic Operations",
  "id": "82-basic-operations",
  "level": 2
}, {
  "value": "8.3 Iteration",
  "id": "83-iteration",
  "level": 2
}, {
  "value": "8.4 Dictionary Comprehensions",
  "id": "84-dictionary-comprehensions",
  "level": 2
}, {
  "value": "8.5 defaultdict",
  "id": "85-defaultdict",
  "level": 2
}, {
  "value": "8.6 Counter",
  "id": "86-counter",
  "level": 2
}, {
  "value": "8.7 OrderedDict",
  "id": "87-ordereddict",
  "level": 2
}, {
  "value": "8.8 Dict Views",
  "id": "88-dict-views",
  "level": 2
}, {
  "value": "8.9 Merging Dictionaries",
  "id": "89-merging-dictionaries",
  "level": 2
}, {
  "value": "8.10 JSON Conversion",
  "id": "810-json-conversion",
  "level": 2
}, {
  "value": "8.11 Memory and Performance",
  "id": "811-memory-and-performance",
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
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Key Differences",
  "id": "key-differences",
  "level": 3
}, {
  "value": "Dict Performance and Internals",
  "id": "dict-performance-and-internals",
  "level": 3
}, {
  "value": "Real-World Dict Patterns",
  "id": "real-world-dict-patterns",
  "level": 3
}, {
  "value": "Dict vs Other Data Structures",
  "id": "dict-vs-other-data-structures",
  "level": 3
}, {
  "value": "TypeScript Map &amp; Advanced Dictionary Patterns",
  "id": "typescript-map--advanced-dictionary-patterns",
  "level": 3
}, {
  "value": "TypeScript Dictionary Performance &amp; Edge Cases",
  "id": "typescript-dictionary-performance--edge-cases",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Advanced Dictionary Patterns",
  "id": "typescript-advanced-dictionary-patterns",
  "level": 3
}, {
  "value": "TypeScript Advanced Map Operations",
  "id": "typescript-advanced-map-operations",
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
        id: "chapter-8-dictionaries",
        children: "Chapter 8: Dictionaries"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/07-tuples-sets",
          children: "Tuples and Sets"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/09-functions",
          children: "Functions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and manipulate dictionaries using multiple construction techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use dictionary comprehensions to build dicts declaratively"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply specialised dict types: defaultdict, Counter, OrderedDict"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work with dict views for efficient iteration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge dictionaries using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " operator"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert between dictionaries and JSON"
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
        href: "../../assets/images/lessons/python-programming/08-dictionaries/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/08-dictionaries/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/08-dictionaries/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/08-dictionaries/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/08-dictionaries/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/08-dictionaries/visual-explanation.png",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/08-dictionaries.png",
        alt: "Dictionaries"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "8.1 Dictionary Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learn multiple ways to construct dictionaries and the hashable-key constraint."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2 Basic Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Master get/set/delete ops: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".get()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".update()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".pop()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "del"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3 Iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dict views (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".keys()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".values()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".items()"
            }), ") are dynamic and support set operations."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4 Dictionary Comprehensions"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "defaultdict"
            }), " auto-creates missing entries; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Counter"
            }), " tallies hashable objects."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5 defaultdict"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "The `"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6 Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.7 OrderedDict"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.8 Dict Views"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.9 Merging Dictionaries"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.10 JSON Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.11 Memory and Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    S0[Dictionary Basics]\n    S1[Basic Operations]\n    S2[Iteration]\n    S3[Dictionary Comprehensions]\n    S4[defaultdict]\n    S5[Counter]\n    S6[OrderedDict]\n    S7[Dict Views]\n    S8[Merging Dictionaries]\n    S9[JSON Conversion]\n    S10[Memory and Performance]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n    S6 --> S7\n    S7 --> S8\n    S8 --> S9\n    S9 --> S10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-dictionary-basics",
      children: "8.1 Dictionary Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Learn multiple ways to construct dictionaries and the hashable-key constraint."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A dictionary maps keys to values. Keys must be hashable (immutable types). Dictionaries maintain insertion order (Python 3.7+):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "empty = {}\nages = {\"Alice\": 30, \"Bob\": 25, \"Charlie\": 35}\n\n# dict() constructor\nkwargs = dict(name=\"Alice\", age=30)          # keyword args\npairs = dict([(\"a\", 1), (\"b\", 2)])           # iterable of pairs\nzipped = dict(zip([\"x\", \"y\"], [10, 20]))     # from two sequences\nprint(kwargs)   # {'name': 'Alice', 'age': 30}\nprint(zipped)   # {'x': 10, 'y': 20}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-basic-operations",
      children: "8.2 Basic Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Master get/set/delete ops: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[]"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".get()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".update()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".pop()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "del"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "d = {\"a\": 1, \"b\": 2, \"c\": 3}\n\n# Access\nprint(d[\"a\"])            # 1 → raises KeyError if missing\nprint(d.get(\"x\", 0))     # 0 → safe access with default\nprint(d.get(\"a\"))        # 1\n\n# Modification\nd[\"d\"] = 4               # add or update\nd.update({\"e\": 5, \"f\": 6})  # bulk update\nprint(d)\n\n# Deletion\ndel d[\"f\"]               # raises KeyError if missing\npopped = d.pop(\"e\")      # returns value, raises KeyError if missing\nd.pop(\"x\", None)         # safe pop with default\nlast = d.popitem()       # removes and returns (key, value) in LIFO order\n\n# Membership\nprint(\"a\" in d)          # True → checks keys only\nprint(1 in d)            # False\n\n# Length\nprint(len(d))            # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-iteration",
      children: "8.3 Iteration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Dict views (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".keys()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".values()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".items()"
        }), ") are dynamic and support set operations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "d = {\"name\": \"Alice\", \"age\": 30, \"city\": \"NYC\"}\n\nfor key in d:                         # keys (default)\n    print(key, end=\" \")               # name age city\nprint()\n\nfor key in d.keys():                  # explicit keys\n    print(key, end=\" \")\nprint()\n\nfor value in d.values():              # values\n    print(value, end=\" \")             # Alice 30 NYC\nprint()\n\nfor key, value in d.items():          # key-value pairs\n    print(f\"{key}={value}\", end=\" \")  # name=Alice age=30 city=NYC\nprint()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-dictionary-comprehensions",
      children: "8.4 Dictionary Comprehensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "defaultdict"
        }), " auto-creates missing entries; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Counter"
        }), " tallies hashable objects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "squares = {x: x ** 2 for x in range(10)}\nprint(squares)\n# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}\n\n# With condition\neven_squares = {x: x ** 2 for x in range(10) if x % 2 == 0}\nprint(even_squares)   # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}\n\n# Swapping keys and values\noriginal = {\"a\": 1, \"b\": 2, \"c\": 3}\ninverted = {v: k for k, v in original.items()}\nprint(inverted)        # {1: 'a', 2: 'b', 3: 'c'}\n\n# Transforming values\nprices = {\"apple\": 0.5, \"banana\": 0.75, \"cherry\": 1.5}\nwith_tax = {item: price * 1.2 for item, price in prices.items()}\nprint(with_tax)\n# {'apple': 0.6, 'banana': 0.9, 'cherry': 1.8}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-defaultdict",
      children: "8.5 defaultdict"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " operator merges dicts concisely; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "json.dumps"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "json.loads"
        }), " bridge dicts and JSON."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "defaultdict"
      }), " provides default values for missing keys:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\n# List factory → group items\nwords = [\"apple\", \"banana\", \"apricot\", \"blueberry\", \"cherry\"]\nby_first = defaultdict(list)\nfor word in words:\n    by_first[word[0]].append(word)\nprint(dict(by_first))\n# {'a': ['apple', 'apricot'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}\n\n# Int factory → counting\ncounter = defaultdict(int)\nfor c in \"hello world\":\n    counter[c] += 1\nprint(dict(counter))\n# {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}\n\n# Set factory → collecting unique values\nadjacency = defaultdict(set)\nedges = [(1, 2), (1, 3), (2, 3), (2, 4)]\nfor a, b in edges:\n    adjacency[a].add(b)\n    adjacency[b].add(a)\nprint({k: list(v) for k, v in adjacency.items()})\n# {1: [2, 3], 2: [1, 3, 4], 3: [1, 2], 4: [2]}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-counter",
      children: "8.6 Counter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Counter"
      }), " counts hashable objects:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\n\n# Basic counting\ncnt = Counter(\"mississippi\")\nprint(cnt)   # Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})\n\n# Most common\nprint(cnt.most_common(2))   # [('i', 4), ('s', 4)]\n\n# Counter operations\nc1 = Counter(a=3, b=1, c=2)\nc2 = Counter(a=1, b=2, d=3)\n\nprint(c1 + c2)              # Counter({'a': 4, 'b': 3, 'd': 3, 'c': 2})\nprint(c1 - c2)              # Counter({'a': 2, 'c': 2})  (no negatives)\nprint(c1 & c2)              # Counter({'a': 1, 'b': 1})    intersection (min)\nprint(c1 | c2)              # Counter({'a': 3, 'd': 3, 'c': 2, 'b': 2})  union (max)\n\n# Elements\nprint(list(c1.elements()))  # ['a', 'a', 'a', 'b', 'c', 'c']\n\n# Access with default\nprint(cnt[\"z\"])             # 0 (no KeyError)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-ordereddict",
      children: "8.7 OrderedDict"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "OrderedDict"
      }), " maintains insertion order (redundant in Python 3.7+ for regular dicts) but provides extra methods:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import OrderedDict\n\nod = OrderedDict()\nod[\"z\"] = 1\nod[\"a\"] = 2\nod[\"m\"] = 3\nprint(od)  # OrderedDict([('z', 1), ('a', 2), ('m', 3)])\n\n# Move to end/beginning\nod.move_to_end(\"z\")                    # move 'z' to end\nprint(od)  # OrderedDict([('a', 2), ('m', 3), ('z', 1)])\nod.move_to_end(\"z\", last=False)        # move to beginning\nprint(od)  # OrderedDict([('z', 1), ('a', 2), ('m', 3)])\n\n# Pop item from either end\nprint(od.popitem(last=True))   # ('m', 3)   LIFO\nprint(od.popitem(last=False))  # ('z', 1)   FIFO\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-dict-views",
      children: "8.8 Dict Views"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Methods ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".keys()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".values()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".items()"
      }), " return dynamic views that reflect dict changes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "d = {\"a\": 1, \"b\": 2}\nkeys = d.keys()\nvalues = d.values()\n\nprint(list(keys))     # ['a', 'b']\nd[\"c\"] = 3\nprint(list(keys))     # ['a', 'b', 'c']  (view updated automatically)\n\n# Set-like operations on keys\nother = {\"b\": 20, \"c\": 30, \"d\": 40}\nprint(d.keys() & other.keys())    # {'b', 'c'}   intersection\nprint(d.keys() - other.keys())    # {'a'}         difference\nprint(d.keys() | other.keys())    # {'a', 'b', 'c', 'd'}  union\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-merging-dictionaries",
      children: "8.9 Merging Dictionaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python 3.9+ provides the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|"
      }), " operator for merging:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "d1 = {\"a\": 1, \"b\": 2}\nd2 = {\"b\": 3, \"c\": 4}\n\nmerged = d1 | d2          # right side wins conflicts\nprint(merged)             # {'a': 1, 'b': 3, 'c': 4}\n\nd1 |= d2                  # in-place merge (modifies d1)\nprint(d1)                 # {'a': 1, 'b': 3, 'c': 4}\n\n# Older approaches (still useful for compatibility)\ncopy_merge = {**d1, **d2}\nprint(copy_merge)\n\nmerge_with_update = d1.copy()\nmerge_with_update.update(d2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "810-json-conversion",
      children: "8.10 JSON Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import json\n\ndata = {\n    \"name\": \"Alice\",\n    \"age\": 30,\n    \"pets\": [\"cat\", \"dog\"],\n    \"address\": {\"city\": \"NYC\", \"zip\": 10001},\n    \"is_student\": False\n}\n\n# Python dict -> JSON string\njson_str = json.dumps(data, indent=2)\nprint(json_str)\n# {\n#   \"name\": \"Alice\",\n#   \"age\": 30,\n#   ...\n# }\n\n# JSON string -> Python dict\nparsed = json.loads(json_str)\nprint(parsed[\"name\"])       # Alice\n\n# File I/O\nwith open(\"data.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\nwith open(\"data.json\", \"r\") as f:\n    loaded = json.load(f)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON keys must be strings. Python dict keys are automatically converted:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "d = {1: \"one\", True: \"true\"}\nprint(json.dumps(d))   # {\"1\": \"true\"}  → True is a subclass of int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "811-memory-and-performance",
      children: "8.11 Memory and Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dictionaries use hash tables: O(1) average for get, set, delete, membership."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keys must be hashable (immutable). Lists, dicts, and sets cannot be keys."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The hash table grows when it reaches about two-thirds capacity; resizing is amortised O(1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For small dicts, the overhead of the hash table may exceed the data itself."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "defaultdict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default missing key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KeyError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping / auto-init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting hashable objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion order (3.7+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Views,"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always has a default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "d = {\"a\": 1, \"b\": 2}\nd.get(\"x\", 0)      # 0\nd.keys() & {\"b\":3}.keys()  # {\"b\"}\nfrom collections import defaultdict, Counter\nCounter(\"mississippi\").most_common(2)\n"
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
            children: "JSON API response parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Word frequency with Counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config file as nested dict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grouping log entries by date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What type can be used as a dict key?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dicts"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["tuples ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which method safely accesses a key with a default?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d[key]"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["d.get(key) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d.fetch(key)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "d.pop(key)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does Counter.most_common(2) return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 most common values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 most common keys"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["2 most common (key,count) pairs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "first 2 items"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the time complexity of dict lookup?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["O(1) average ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n^2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which operator merges two dicts in Python 3.9+?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "+"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["| ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "&"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "merge()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Map<K, V>"
      }), " for general dictionary semantics and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Record<K, V>"
      }), " (plain objects) for string-keyed mappings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript Map (ordered, any key type)\nconst scores: Map<string, number> = new Map([\n  [\"Alice\", 95],\n  [\"Bob\", 87],\n  [\"Charlie\", 92]\n]);\nscores.set(\"Diana\", 88);\nconsole.log(scores.get(\"Alice\"));  // 95\nconsole.log(scores.has(\"Eve\"));    // false\n\n// Iteration equivalent to dict.items()\nfor (const [name, score] of scores) {\n  console.log(`${name}: ${score}`);\n}\n\n// TypeScript Record (string keys via plain object)\ntype Inventory = Record<string, number>;\nconst stock: Inventory = {\n  apples: 5,\n  bananas: 3\n};\nstock[\"cherries\"] = 10;\n\n// Default value pattern (Python dict.get equivalent)\nfunction getScore(map: Map<string, number>, key: string): number {\n  return map.get(key) ?? 0;  // nullish coalescing\n}\n\n// Map iteration methods\nscores.keys();     // like dict.keys()\nscores.values();   // like dict.values()\nscores.entries();  // like dict.items()\n\n// Object.keys/values/entries for Record types\nconst names = Object.keys(stock);     // [\"apples\", \"bananas\", \"cherries\"]\nconst counts = Object.values(stock);  // [5, 3, 10]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-differences",
      children: "Key Differences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python dict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript Map"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript Record"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any immutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string (or number)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (3.7+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion (own props)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Literal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{k: v}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new Map()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{k: v}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "len(d)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "map.size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Object.keys(r).length"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing key"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "d.get(k)"
            }), " or raise"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".get(k)"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "r.k ?? default"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "del d[k]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".delete(k)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "delete r.k"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d.clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reassign or loop delete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dict-performance-and-internals",
      children: "Dict Performance and Internals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Key] --> B[hash function]\n    B --> C[hash value]\n    C --> D[table index]\n    D --> E{Slot occupied?}\n    E -->|No| F[Store key-value]\n    E -->|Yes, key match| G[Overwrite value]\n    E -->|Yes, key mismatch| H[Open addressing]\n    H --> D\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python dictionaries use a hash table with open addressing. Keys are hashed, and the hash determines the slot. On collision, Python probes the next available slot. Load factor (ratio of filled slots) triggers resizing at ~2/3 capacity to maintain O(1) average lookup."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Memory usage comparison\nimport sys\n\nd = dict(zip(range(1000), range(1000)))\nprint(f\"Dict size: {sys.getsizeof(d)} bytes\")  # ~41KB for 1000 items\n\n# Key distribution matters\n# Strings, tuples of strings, and integers are most efficient\n# Custom objects need good __hash__ implementation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-dict-patterns",
      children: "Real-World Dict Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Caching / memoization\ncache: dict[str, int] = {}\n\ndef expensive_compute(n: int) -> int:\n    key = str(n)\n    if key not in cache:\n        cache[key] = sum(i * i for i in range(n))\n    return cache[key]\n\n# Configuration with nested dicts\nconfig = {\n    \"database\": {\n        \"host\": \"localhost\",\n        \"port\": 5432,\n        \"credentials\": {\n            \"user\": \"admin\",\n            \"password\": \"${DB_PASSWORD}\"  # placeholder pattern\n        }\n    },\n    \"logging\": {\n        \"level\": \"INFO\",\n        \"file\": \"/var/log/app.log\"\n    }\n}\n\n# Graph represented as adjacency dict\ngraph: dict[str, list[str]] = {\n    \"A\": [\"B\", \"C\"],\n    \"B\": [\"A\", \"D\", \"E\"],\n    \"C\": [\"A\", \"F\"],\n    \"D\": [\"B\"],\n    \"E\": [\"B\", \"F\"],\n    \"F\": [\"C\", \"E\"]\n}\n\n# BFS traversal\nfrom collections import deque\ndef bfs(graph: dict, start: str) -> list[str]:\n    visited = set()\n    queue = deque([start])\n    result = []\n    while queue:\n        node = queue.popleft()\n        if node not in visited:\n            visited.add(node)\n            result.append(node)\n            queue.extend(neighbor for neighbor in graph[node]\n                        if neighbor not in visited)\n    return result\n\nprint(bfs(graph, \"A\"))  # ['A', 'B', 'C', 'D', 'E', 'F']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dict-vs-other-data-structures",
      children: "Dict vs Other Data Structures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Need"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key-value mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{\"name\": \"Alice\", \"age\": 30}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered key-value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OrderedDict"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintains explicit order (rarely needed since 3.7+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "defaultdict"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dd[\"missing\"]"
            }), " returns a default"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Counter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Counter(\"abracadabra\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple keys same value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dict"
            }), " of lists"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "defaultdict(list)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bi-directional map"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Two dicts or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bidict"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup by key or value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LRU cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "functools.lru_cache"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache with max size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# LRU cache using dict (manual implementation)\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.cache: dict = {}\n        self.order: list = []\n\n    def get(self, key):\n        if key in self.cache:\n            self.order.remove(key)\n            self.order.append(key)\n            return self.cache[key]\n        return -1\n\n    def put(self, key, value):\n        if key in self.cache:\n            self.order.remove(key)\n        elif len(self.cache) >= self.capacity:\n            oldest = self.order.pop(0)\n            del self.cache[oldest]\n        self.cache[key] = value\n        self.order.append(key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 8: TypeScript Dictionary/Map Equivalents\n// Python: dict literal → TypeScript: object or Map\nconst user: Record<string, string | number> = {\n  name: \"Alice\",\n  email: \"alice@example.com\",\n  age: 30,\n};\n// Equivalent Python: user = {\"name\": \"Alice\", \"email\": \"alice@example.com\", \"age\": 30}\n\n// Python: d[key] → TypeScript: bracket or dot notation\nconsole.log(user[\"name\"]);  // \"Alice\"\nconsole.log(user.name);     // \"Alice\" (if key is a valid identifier)\n\n// Python: d.get(key, default) → TypeScript: ?? operator\nconst city: string = (user.city as string) ?? \"Unknown\";\n// Equivalent Python: user.get(\"city\", \"Unknown\")\n\n// Python: key in d → TypeScript: \"key\" in obj\nconsole.log(\"name\" in user);  // true\n\n// Python: d.keys() / d.values() / d.items() → TypeScript: Object.keys/values/entries\nconsole.log(Object.keys(user));    // [\"name\", \"email\", \"age\"]\nconsole.log(Object.values(user));  // [\"Alice\", \"alice@example.com\", 30]\nconsole.log(Object.entries(user)); // [[\"name\",\"Alice\"],[\"email\",\"alice@example.com\"],[\"age\",30]]\n\n// Python: dict comprehension → TypeScript: Object.fromEntries + map\nconst keys: string[] = [\"a\", \"b\", \"c\"];\nconst dict: Record<string, number> = Object.fromEntries(\n  keys.map((k, i) => [k, i])\n);\nconsole.log(dict);  // {a: 0, b: 1, c: 2}\n\n// Python: defaultdict(list) → TypeScript: manual or Map with default\nconst groups: Map<string, number[]> = new Map();\nconst addToGroup = (key: string, value: number): void => {\n  if (!groups.has(key)) groups.set(key, []);\n  groups.get(key)!.push(value);\n};\naddToGroup(\"even\", 2);\naddToGroup(\"odd\", 1);\n\n// Python: Counter → TypeScript: manual reduce\nconst items: string[] = [\"a\", \"b\", \"a\", \"c\", \"a\", \"b\"];\nconst counter: Record<string, number> = items.reduce((acc, item) => {\n  acc[item] = (acc[item] ?? 0) + 1;\n  return acc;\n}, {} as Record<string, number>);\nconsole.log(counter);  // {a: 3, b: 2, c: 1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-map--advanced-dictionary-patterns",
      children: "TypeScript Map & Advanced Dictionary Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: dict merge (|) → TypeScript: spread\nconst defaults: Record<string, number> = { timeout: 30, retries: 3 };\nconst overrides: Record<string, number> = { timeout: 60 };\nconst config = { ...defaults, ...overrides };\nconsole.log(config);  // { timeout: 60, retries: 3 }\n// Python: {**defaults, **overrides} or defaults | overrides\n\n// Python: defaultdict(int) → TypeScript: Map with default\nfunction defaultDict<K, V>(factory: () => V): Map<K, V> {\n  const map = new Map<K, V>();\n  return new Proxy(map as any, {\n    get(target: any, prop: string) {\n      if (prop === \"get\") {\n        return (key: K) => {\n          if (!target.has(key)) target.set(key, factory());\n          return target.get(key);\n        };\n      }\n      return target[prop];\n    },\n  }) as Map<K, V>;\n}\n\n// Python: Counter.most_common() → TypeScript\nfunction mostCommon<T>(items: T[], n: number): [T, number][] {\n  const counts = new Map<T, number>();\n  for (const item of items) {\n    counts.set(item, (counts.get(item) ?? 0) + 1);\n  }\n  return [...counts.entries()]\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, n);\n}\nconst fruits = [\"apple\", \"banana\", \"apple\", \"orange\", \"banana\", \"apple\"];\nconsole.log(mostCommon(fruits, 2));  // [[\"apple\", 3], [\"banana\", 2]]\n\n// Python: dict comprehension with condition\nconst squares2: Record<number, number> = {};\nfor (let i = 1; i <= 5; i++) {\n  if (i % 2 === 0) squares2[i] = i * i;\n}\nconsole.log(squares2);  // {2: 4, 4: 16}\n\n// Python: deep_merge → TypeScript: recursive merge\nfunction deepMerge<T extends Record<string, any>>(a: T, b: Partial<T>): T {\n  const result = { ...a };\n  for (const key of Object.keys(b)) {\n    if (b[key] && typeof b[key] === \"object\" && !Array.isArray(b[key])) {\n      result[key] = deepMerge(result[key] ?? {}, b[key]);\n    } else {\n      result[key] = b[key] ?? result[key];\n    }\n  }\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-dictionary-performance--edge-cases",
      children: "TypeScript Dictionary Performance & Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: dict.get with sentinel → TypeScript: Map.get with undefined\nconst phoneBook = new Map<string, string>([\n  [\"Alice\", \"555-0100\"],\n  [\"Bob\", \"555-0101\"],\n]);\nconsole.log(phoneBook.get(\"Charlie\") ?? \"Not found\");  // \"Not found\"\n\n// Python: dict.setdefault → TypeScript: Map custom get-or-set\nfunction getOrSet<K, V>(map: Map<K, V>, key: K, factory: () => V): V {\n  if (!map.has(key)) map.set(key, factory());\n  return map.get(key)!;\n}\n\n// Python: OrderedDict (insertion order preserved in Python 3.7+)\n// TypeScript Map also preserves insertion order\nconst ordered = new Map<string, number>();\nordered.set(\"first\", 1);\nordered.set(\"second\", 2);\nordered.set(\"third\", 3);\nfor (const [k, v] of ordered) {\n  console.log(k, v);  // first 1, second 2, third 3\n}\n\n// Python: dict.fromkeys → TypeScript: Object.fromEntries\nconst keys2 = [\"x\", \"y\", \"z\"];\nconst fromKeys = Object.fromEntries(keys2.map((k) => [k, 0]));\nconsole.log(fromKeys);  // {x: 0, y: 0, z: 0}\n\n// Python: nested dict get → TypeScript: optional chaining\ninterface DeepConfig {\n  database?: { connection?: { host?: string; port?: number } };\n}\nconst cfg: DeepConfig = {};\nconst host = cfg.database?.connection?.host ?? \"localhost\";\n// Python: cfg.get(\"database\", {}).get(\"connection\", {}).get(\"host\", \"localhost\")\n\n// Python: dict popitem → TypeScript: Map iteration + delete\nfunction popFirst<K, V>(map: Map<K, V>): [K, V] | undefined {\n  const entry = map.entries().next().value;\n  if (entry) map.delete(entry[0]);\n  return entry;\n}\n\n// Python: dict comprehensions with condition\nconst evens: Record<number, boolean> = {};\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) evens[i] = true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Map vs Object Performance Test ===\nfunction benchMapVsObj(ops = 100000): Record<string, number> {\n  const obj: Record<number, number> = {};\n  const map = new Map<number, number>();\n  const start1 = performance.now();\n  for (let i = 0; i < ops; i++) obj[i] = i * 2;\n  const objSet = performance.now() - start1;\n  const start2 = performance.now();\n  for (let i = 0; i < ops; i++) map.set(i, i * 2);\n  const mapSet = performance.now() - start2;\n  const start3 = performance.now();\n  for (let i = 0; i < ops; i++) { const _ = obj[i]; }\n  const objGet = performance.now() - start3;\n  const start4 = performance.now();\n  for (let i = 0; i < ops; i++) { const _ = map.get(i); }\n  const mapGet = performance.now() - start4;\n  return { objSetMs: Math.round(objSet), mapSetMs: Math.round(mapSet), objGetMs: Math.round(objGet), mapGetMs: Math.round(mapGet) };\n}\nconsole.log(benchMapVsObj());\n\n// === Deep Merge (Python dict merge equivalent) ===\nfunction deepMerge<T extends Record<string, unknown>>(target: T, ...sources: Partial<T>[]): T {\n  const result = { ...target };\n  for (const src of sources) {\n    for (const key of Object.keys(src) as (keyof T)[]) {\n      const val = src[key];\n      if (val !== null && typeof val === \"object\" && !Array.isArray(val)) {\n        result[key] = deepMerge(result[key] as Record<string, unknown> ?? {}, val as Record<string, unknown>) as T[keyof T];\n      } else if (val !== undefined) {\n        result[key] = val;\n      }\n    }\n  }\n  return result;\n}\nconst merged = deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 });\nconsole.log(merged); // { a: 1, b: { c: 2, d: 3 }, e: 4 }\n\n// === Key Transformation Pipeline ===\nfunction transformKeys<T>(obj: Record<string, T>, fn: (k: string) => string): Record<string, T> {\n  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k), v]));\n}\nfunction camelToSnake(k: string): string { return k.replace(/([A-Z])/g, \"_$1\").toLowerCase(); }\nfunction snakeToCamel(k: string): string { return k.replace(/_([a-z])/g, (_, c) => c.toUpperCase()); }\nconst camelObj = { firstName: \"Alice\", lastName: \"Smith\" };\nconsole.log(transformKeys(camelObj, camelToSnake));  // { first_name: \"Alice\", last_name: \"Smith\" }\n\n// === Safe Get with Path (Python dict get equiv) ===\nfunction getIn<T>(obj: unknown, path: string[], fallback?: T): T | undefined {\n  let current: unknown = obj;\n  for (const key of path) {\n    if (current === null || current === undefined || typeof current !== \"object\") return fallback;\n    current = (current as Record<string, unknown>)[key];\n  }\n  return (current as T) ?? fallback;\n}\nconst data = { user: { address: { city: \"Paris\" } } };\nconsole.log(getIn(data, [\"user\", \"address\", \"city\"]));  // Paris\nconsole.log(getIn(data, [\"user\", \"phone\"]));             // undefined\n\n// === Default Dict (Python defaultdict equivalent) ===\nclass DefaultDict<K, V> {\n  private dict = new Map<K, V>();\n  constructor(private factory: () => V) {}\n  get(key: K): V { if (!this.dict.has(key)) this.dict.set(key, this.factory()); return this.dict.get(key)!; }\n  set(key: K, value: V): void { this.dict.set(key, value); }\n  entries(): [K, V][] { return [...this.dict.entries()]; }\n}\nconst dd = new DefaultDict<string, number[]>(() => []);\ndd.get(\"a\").push(1, 2, 3);\ndd.get(\"b\").push(4);\nconsole.log(dd.entries()); // [[\"a\", [1,2,3]], [\"b\", [4]]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-dictionary-patterns",
      children: "TypeScript Advanced Dictionary Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Python dict methods mapped to TypeScript ===\nconst pyDict = { name: \"Alice\", age: 30, city: \"Paris\" };\n\n// Python: d.keys() → Object.keys()\nconsole.log(Object.keys(pyDict));     // [\"name\", \"age\", \"city\"]\n// Python: d.values() → Object.values()\nconsole.log(Object.values(pyDict));   // [\"Alice\", 30, \"Paris\"]\n// Python: d.items() → Object.entries()\nconsole.log(Object.entries(pyDict));  // [[\"name\",\"Alice\"],[\"age\",30],[\"city\",\"Paris\"]]\n\n// Python: d.get(k, default) → ?? or ||\nconst score = { alice: 95, bob: 87 };\nconsole.log(score.alice ?? 0);        // 95\nconsole.log(score.charlie ?? 0);      // 0\n\n// Python: d.update() → Object.assign()\nconst defaults = { theme: \"light\", lang: \"en\" };\nconst userPrefs = { theme: \"dark\" };\nconst merged = Object.assign({}, defaults, userPrefs);\nconsole.log(merged);                  // { theme: \"dark\", lang: \"en\" }\n\n// Python: dict comprehension → Object.fromEntries()\nconst nums = [1, 2, 3, 4, 5];\nconst squares = Object.fromEntries(nums.map(n => [n, n * n]));\nconsole.log(squares);                 // {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n// Python: dict.pop(k) → delete + rest\nconst { age: _, ...rest } = pyDict;\nconsole.log(rest);                    // { name: \"Alice\", city: \"Paris\" }\n\n// Python: dict.setdefault → custom helper\nfunction setDefault<K, V>(map: Map<K, V>, key: K, factory: () => V): V {\n  if (!map.has(key)) map.set(key, factory());\n  return map.get(key)!;\n}\nconst groups = new Map<string, number[]>();\nsetDefault(groups, \"evens\", () => []).push(2, 4, 6);\nconsole.log([...groups.entries()]);   // [[\"evens\", [2,4,6]]]\n\n// Python: collections.Counter\nfunction counter2<T>(items: T[]): Map<T, number> {\n  const c = new Map<T, number>();\n  for (const item of items) c.set(item, (c.get(item) ?? 0) + 1);\n  return c;\n}\nconsole.log([...counter2([\"a\",\"b\",\"a\",\"c\",\"b\",\"a\"])]);\n\n// Python: dict merge | operator\nconst a = { x: 1, y: 2 };\nconst b = { y: 3, z: 4 };\nconsole.log({ ...a, ...b });          // { x: 1, y: 3, z: 4 }\n\n// Python: defaultdict(list)\nclass DefaultDict2<K, V> {\n  private map = new Map<K, V>();\n  constructor(private factory: () => V) {}\n  get(key: K): V {\n    if (!this.map.has(key)) this.map.set(key, this.factory());\n    return this.map.get(key)!;\n  }\n  entries(): [K, V][] { return [...this.map.entries()]; }\n}\nconst dd = new DefaultDict2<string, number[]>(() => []);\ndd.get(\"a\").push(1); dd.get(\"a\").push(2); dd.get(\"b\").push(3);\nconsole.log(dd.entries());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-map-operations",
      children: "TypeScript Advanced Map Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Bi-directional Map (Python: bidict) ===\nclass BiMap<K, V> {\n  private keyToVal = new Map<K, V>();\n  private valToKey = new Map<V, K>();\n  set(key: K, value: V): void {\n    this.keyToVal.set(key, value);\n    this.valToKey.set(value, key);\n  }\n  get(key: K): V | undefined { return this.keyToVal.get(key); }\n  getKey(value: V): K | undefined { return this.valToKey.get(value); }\n  delete(key: K): void {\n    const val = this.keyToVal.get(key);\n    if (val !== undefined) { this.keyToVal.delete(key); this.valToKey.delete(val); }\n  }\n  get size(): number { return this.keyToVal.size; }\n}\n\n// === LRU Cache (Python: OrderedDict + lru_cache) ===\nclass LRUCache2<K, V> {\n  private cache = new Map<K, V>();\n  constructor(private maxSize: number) {}\n  get(key: K): V | undefined {\n    if (!this.cache.has(key)) return undefined;\n    const val = this.cache.get(key)!;\n    this.cache.delete(key);\n    this.cache.set(key, val);\n    return val;\n  }\n  set(key: K, value: V): void {\n    if (this.cache.has(key)) this.cache.delete(key);\n    if (this.cache.size >= this.maxSize) {\n      const oldest = this.cache.keys().next().value;\n      if (oldest !== undefined) this.cache.delete(oldest);\n    }\n    this.cache.set(key, value);\n  }\n  entries(): [K, V][] { return [...this.cache.entries()]; }\n}\n\n// === MultiMap (Python: dict of lists) ===\nclass MultiMap<K, V> {\n  private map = new Map<K, V[]>();\n  add(key: K, value: V): void {\n    if (!this.map.has(key)) this.map.set(key, []);\n    this.map.get(key)!.push(value);\n  }\n  get(key: K): V[] { return [...(this.map.get(key) ?? [])]; }\n  has(key: K): boolean { return this.map.has(key); }\n  keys(): K[] { return [...this.map.keys()]; }\n}\n\n// === Deep Get/Set for Nested Dicts ===\nfunction deepGet<T>(obj: Record<string, any>, path: string, defaultValue?: T): T | undefined {\n  const keys = path.split(\".\");\n  let current: any = obj;\n  for (const key of keys) {\n    if (current === null || current === undefined || typeof current !== \"object\") return defaultValue;\n    current = current[key];\n  }\n  return (current === undefined ? defaultValue : current) as T;\n}\nfunction deepSet(obj: Record<string, any>, path: string, value: unknown): void {\n  const keys = path.split(\".\");\n  let current = obj;\n  for (let i = 0; i < keys.length - 1; i++) {\n    if (!(keys[i] in current)) current[keys[i]] = {};\n    current = current[keys[i]];\n  }\n  current[keys[keys.length - 1]] = value;\n}\n\n// === Immutable Dict Update ===\nfunction updateDict<K extends string | number | symbol, V>(obj: Record<K, V>, updates: Partial<Record<K, V>>): Record<K, V> {\n  return { ...obj, ...updates };\n}\nfunction omitKeys<K extends string | number | symbol, V>(obj: Record<K, V>, ...keys: K[]): Partial<Record<K, V>> {\n  const result = { ...obj };\n  for (const key of keys) delete result[key];\n  return result;\n}\nfunction pickKeys<K extends string | number | symbol, V>(obj: Record<K, V>, ...keys: K[]): Partial<Record<K, V>> {\n  const result: Partial<Record<K, V>> = {};\n  for (const key of keys) if (key in obj) result[key] = obj[key];\n  return result;\n}\n\nconst bimap = new BiMap<number, string>();\nbimap.set(1, \"one\"); bimap.set(2, \"two\");\nconsole.log(bimap.getKey(\"one\")); // 1\nconsole.log(bimap.get(2)); // \"two\"\n\nconst lru2 = new LRUCache2<string, number>(3);\nlru2.set(\"a\", 1); lru2.set(\"b\", 2); lru2.set(\"c\", 3); lru2.get(\"a\"); lru2.set(\"d\", 4);\nconsole.log(lru2.entries()); // [[\"c\", 3], [\"a\", 1], [\"d\", 4]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dictionaries map hashable keys to values; insertion order is preserved (3.7+)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Safe access with ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".get()"
        }), "; bulk update with ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".update()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dict comprehensions provide declarative construction."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "defaultdict"
        }), " handles missing keys; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Counter"
        }), " counts hashable objects."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Views are dynamic and support set-like operations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " operator merges dicts (3.9+)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "json.dumps()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "json.loads()"
        }), " convert between dicts and JSON."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why must dictionary keys be hashable?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d.get(k)"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d[k]"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the time complexity of membership testing in a dict?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "defaultdict"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Counter"
        }), " differ?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " operator do when applied to two dicts?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that reads a text file, counts word frequencies, and prints the 10 most common words. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Counter"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "most_common"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "defaultdict"
        }), " to invert a dictionary: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{\"a\": 1, \"b\": 2, \"c\": 1}"
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{1: ['a', 'c'], 2: ['b']}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deep_merge(d1, d2)"
        }), " that recursively merges two dictionaries. For nested dict values, recurse; for non-dict values, prefer the second dict's value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a simple in-memory key-value store with transaction support. Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "begin()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "commit()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rollback()"
      }), " methods. During a transaction, all writes go to a staging dict. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "commit()"
      }), " flattens staging into the main store and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rollback()"
      }), " discards it. Support nested transactions (stack of staging dicts). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "copy.deepcopy"
      }), " to snapshot values for rollback safety."]
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