"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[26648],{

/***/ 64386
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_16_generators_md_688_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-16-generators-md-688.json
const site_docs_courses_python_programming_16_generators_md_688_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/16-generators","title":"Chapter 16: Generators and itertools","description":"Previous Exceptions and File I/O","source":"@site/docs/courses/python-programming/16-generators.md","sourceDirName":"courses/python-programming","slug":"/python-programming/16-generators","permalink":"/ai-engineering-journey/python-programming/16-generators","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-generators","slug":"/python-programming/16-generators","title":"Chapter 16: Generators and itertools","sidebar_label":"Chapter 16: Generators and itertools","sidebar_position":16},"sidebar":"course-python-programming","previous":{"title":"Chapter 15: Decorators","permalink":"/ai-engineering-journey/python-programming/15-decorators"},"next":{"title":"Chapter 17: Exceptions and File I/O","permalink":"/ai-engineering-journey/python-programming/17-exceptions-files"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/16-generators.md


const frontMatter = {
	id: '16-generators',
	slug: '/python-programming/16-generators',
	title: 'Chapter 16: Generators and itertools',
	sidebar_label: 'Chapter 16: Generators and itertools',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Generators and itertools';

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
  "value": "16.1 Generator Functions",
  "id": "161-generator-functions",
  "level": 2
}, {
  "value": "16.2 Generator Expressions",
  "id": "162-generator-expressions",
  "level": 2
}, {
  "value": "16.3 Lazy Evaluation",
  "id": "163-lazy-evaluation",
  "level": 2
}, {
  "value": "16.4 send(), throw(), and close()",
  "id": "164-send-throw-and-close",
  "level": 2
}, {
  "value": "16.5 yield from",
  "id": "165-yield-from",
  "level": 2
}, {
  "value": "16.5.1 Flatten Nested Sequences",
  "id": "1651-flatten-nested-sequences",
  "level": 3
}, {
  "value": "16.6 itertools Module",
  "id": "166-itertools-module",
  "level": 2
}, {
  "value": "16.6.1 Infinite Iterators",
  "id": "1661-infinite-iterators",
  "level": 3
}, {
  "value": "16.6.2 Combinatoric Iterators",
  "id": "1662-combinatoric-iterators",
  "level": 3
}, {
  "value": "16.6.3 groupby",
  "id": "1663-groupby",
  "level": 3
}, {
  "value": "16.6.4 chain, zip, and More",
  "id": "1664-chain-zip-and-more",
  "level": 3
}, {
  "value": "16.7 Generator Performance",
  "id": "167-generator-performance",
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
  "value": "Python vs TypeScript Generators",
  "id": "python-vs-typescript-generators",
  "level": 3
}, {
  "value": "Practical Generator Applications",
  "id": "practical-generator-applications",
  "level": 3
}, {
  "value": "When NOT to Use Generators",
  "id": "when-not-to-use-generators",
  "level": 3
}, {
  "value": "TypeScript Iterable &amp; Iterator Protocol",
  "id": "typescript-iterable--iterator-protocol",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Generator &amp; Iterator Patterns",
  "id": "typescript-generator--iterator-patterns",
  "level": 3
}, {
  "value": "TypeScript Generator Pipeline Patterns",
  "id": "typescript-generator-pipeline-patterns",
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
        id: "chapter-16-generators-and-itertools",
        children: "Chapter 16: Generators and itertools"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/15-decorators",
          children: "Decorators"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/17-exceptions-files",
          children: "Exceptions and File I/O"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write generator functions using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use generator expressions for memory-efficient iteration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Communicate with generators using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throw()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "close()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delegate to subgenerators with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield from"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools"
        }), " module for efficient iteration patterns"]
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
        href: "../../assets/images/lessons/python-programming/16-generators/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/16-generators/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/16-generators/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/16-generators/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/16-generators/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/16-generators/visual-explanation.png",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/16-generators.png",
        alt: "Generators and itertools"
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
            children: "16.1 Generator Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generators produce sequences lazily with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "yield"
            }), " — each call advances to the next yield."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.2 Generator Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generator expressions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "(x for x in items)"
            }), ") are lazy alternatives to list comprehensions."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.3 Lazy Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy evaluation saves memory by computing values on demand rather than storing them all."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.4 send(), throw(), and close()"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "send()"
            }), " enables two-way communication; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "yield from"
            }), " delegates to subgenerators."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.5 yield from"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "itertools"
            }), " provides efficient building blocks: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chain"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cycle"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groupby"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "product"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.6 itertools Module"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.7 Generator Performance"
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
        children: "flowchart LR\n    S0[Generator Functions]\n    S1[Generator Expressions]\n    S2[Lazy Evaluation]\n    S3[send(), throw(), and close()]\n    S4[yield from]\n    S5[itertools Module]\n    S6[Generator Performance]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-generator-functions",
      children: "16.1 Generator Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Generators produce sequences lazily with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield"
        }), " — each call advances to the next yield.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Generators are single-use — once exhausted, they raise StopIteration on further calls. Create a new generator for a fresh iteration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A generator function contains ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " and returns a generator iterator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def count_up_to(n: int):\n    \"\"\"Generate numbers from 1 to n.\"\"\"\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\ncounter = count_up_to(5)\nprint(type(counter))  # <class 'generator'>\n\nfor num in counter:\n    print(num, end=\" \")  # 1 2 3 4 5\n\nprint()\n\n# Generators are single-use\nprint(list(counter))  # [] → exhausted\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key differences from regular functions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calling a generator function returns a generator object → it does not execute the function."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execution starts when the generator's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__next__()"
        }), " is called."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "yield"
        }), " suspends execution and returns a value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The generator raises ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StopIteration"
        }), " when it completes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "162-generator-expressions",
      children: "16.2 Generator Expressions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Generator expressions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "(x for x in items)"
        }), ") are lazy alternatives to list comprehensions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generator expressions are like list comprehensions but lazy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# List comprehension → eager, creates full list\nsquares_list = [x ** 2 for x in range(10)]\nprint(type(squares_list))   # <class 'list'>\nprint(sum(squares_list))    # 285\n\n# Generator expression → lazy, produces values on demand\nsquares_gen = (x ** 2 for x in range(10))\nprint(type(squares_gen))    # <class 'generator'>\nprint(sum(squares_gen))     # 285\n\n# Memory comparison\nimport sys\nbig_list = [x for x in range(1000000)]\nbig_gen = (x for x in range(1000000))\nprint(sys.getsizeof(big_list))  # ~8 MB\nprint(sys.getsizeof(big_gen))   # ~200 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generator expressions are memory-efficient for large sequences because they produce one value at a time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "163-lazy-evaluation",
      children: "16.3 Lazy Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Lazy evaluation saves memory by computing values on demand rather than storing them all."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generators enable processing of data streams larger than available memory:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def read_large_file(file_path: str):\n    \"\"\"Read a large file line by line without loading it entirely.\"\"\"\n    with open(file_path) as f:\n        for line in f:\n            yield line.strip()\n\n# Process lines without loading the whole file\nlong_lines = (line for line in read_large_file(\"data.txt\") if len(line) > 100)\nfor line in long_lines:\n    pass  # process each long line\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "164-send-throw-and-close",
      children: "16.4 send(), throw(), and close()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), " enables two-way communication; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield from"
        }), " delegates to subgenerators."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generators can receive values via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def echo():\n    \"\"\"Echo received values.\"\"\"\n    while True:\n        received = yield\n        print(f\"Received: {received}\")\n\ngen = echo()\nnext(gen)           # advance to the first yield\ngen.send(\"hello\")   # Received: hello\ngen.send(42)        # Received: 42\ngen.close()         # stop the generator\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Combining ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send()"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " to create coroutines:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def running_average():\n    \"\"\"Compute running average of sent values.\"\"\"\n    total = 0.0\n    count = 0\n    average = 0.0\n    while True:\n        value = yield average\n        if value is not None:\n            total += value\n            count += 1\n            average = total / count\n\navg = running_average()\nnext(avg)               # prime the generator\nprint(avg.send(10))     # 10.0\nprint(avg.send(20))     # 15.0\nprint(avg.send(30))     # 20.0\navg.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "throw()"
      }), " raises an exception inside the generator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def gen():\n    try:\n        yield 1\n        yield 2\n        yield 3\n    except ValueError:\n        print(\"ValueError caught in generator\")\n\ng = gen()\nprint(next(g))    # 1\ng.throw(ValueError)  # ValueError caught in generator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "165-yield-from",
      children: "16.5 yield from"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools"
        }), " provides efficient building blocks: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cycle"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "groupby"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "product"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), " delegates to a subgenerator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def chain(*iterables):\n    \"\"\"Chain multiple iterables into a single generator.\"\"\"\n    for iterable in iterables:\n        yield from iterable\n\nresult = list(chain([1, 2, 3], \"hello\", range(3)))\nprint(result)  # [1, 2, 3, 'h', 'e', 'l', 'l', 'o', 0, 1, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def chain_without(*iterables):\n    for iterable in iterables:\n        for item in iterable:\n            yield item\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), " is more concise and correctly handles ", (0,jsx_runtime.jsx)(_components.code, {
        children: "send()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "throw()"
      }), " propagation to the subgenerator."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1651-flatten-nested-sequences",
      children: "16.5.1 Flatten Nested Sequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def flatten(nested):\n    \"\"\"Recursively flatten nested sequences.\"\"\"\n    for item in nested:\n        if isinstance(item, (list, tuple)):\n            yield from flatten(item)\n        else:\n            yield item\n\nnested = [1, [2, [3, 4], 5], 6]\nprint(list(flatten(nested)))  # [1, 2, 3, 4, 5, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "166-itertools-module",
      children: "16.6 itertools Module"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1661-infinite-iterators",
      children: "16.6.1 Infinite Iterators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import count, cycle, repeat\n\n# count(start=0, step=1)\nfor i in count(10, 2.5):\n    if i > 20:\n        break\n    print(i, end=\" \")  # 10 12.5 15 17.5 20\nprint()\n\n# cycle(iterable)\ncolors = cycle([\"red\", \"green\", \"blue\"])\nfor _ in range(7):\n    print(next(colors), end=\" \")  # red green blue red green blue red\nprint()\n\n# repeat(object, times=None)\nfor val in repeat(\"hello\", 3):\n    print(val, end=\" \")  # hello hello hello\nprint()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1662-combinatoric-iterators",
      children: "16.6.2 Combinatoric Iterators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import permutations, combinations, combinations_with_replacement, product\n\nitems = [\"A\", \"B\", \"C\"]\n\n# Permutations → order matters, without replacement\nprint(list(permutations(items, 2)))\n# [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]\n\n# Combinations → order does not matter, without replacement\nprint(list(combinations(items, 2)))\n# [('A', 'B'), ('A', 'C'), ('B', 'C')]\n\n# Combinations with replacement\nprint(list(combinations_with_replacement(items, 2)))\n# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]\n\n# Cartesian product\nprint(list(product(items, repeat=2)))\n# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'B'), ('C', 'C')]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1663-groupby",
      children: "16.6.3 groupby"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "groupby"
      }), " groups consecutive elements by a key function:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import groupby\n\ndata = [(\"fruit\", \"apple\"), (\"fruit\", \"banana\"), (\"veg\", \"carrot\"), (\"fruit\", \"cherry\")]\n# groupby requires sorted input\nsorted_data = sorted(data, key=lambda x: x[0])\n\nfor key, group in groupby(sorted_data, key=lambda x: x[0]):\n    items = [item[1] for item in group]\n    print(f\"{key}: {items}\")\n# fruit: ['apple', 'banana', 'cherry']\n# veg: ['carrot']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1664-chain-zip-and-more",
      children: "16.6.4 chain, zip, and More"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import chain, zip_longest, islice, takewhile, dropwhile, accumulate\n\n# chain\nprint(list(chain([1, 2], [3, 4], [5])))  # [1, 2, 3, 4, 5]\n\n# zip_longest (pads shorter iterables)\na, b = [1, 2, 3], [10, 20]\nprint(list(zip_longest(a, b, fillvalue=0)))  # [(1, 10), (2, 20), (3, 0)]\n\n# islice → lazy slicing\nprint(list(islice(range(100), 10)))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(list(islice(range(100), 5, 15, 2)))  # [5, 7, 9, 11, 13]\n\n# takewhile → take while condition is true\nprint(list(takewhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [1, 3]\n\n# dropwhile → drop while condition is true, then yield all\nprint(list(dropwhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [7, 2, 9]\n\n# accumulate → running total (or other binary function)\nprint(list(accumulate([1, 2, 3, 4, 5])))  # [1, 3, 6, 10, 15]\nimport operator\nprint(list(accumulate([1, 2, 3, 4, 5], operator.mul)))  # [1, 2, 6, 24, 120]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "167-generator-performance",
      children: "16.7 Generator Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generators are memory-efficient but not always faster:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time, sys\n\ndef squares_list(n: int) -> list:\n    return [x ** 2 for x in range(n)]\n\ndef squares_gen(n: int):\n    return (x ** 2 for x in range(n))\n\nn = 10_000_000\n# Memory\nprint(sys.getsizeof(squares_list(1000)))   # ~9 KB\nprint(sys.getsizeof(squares_gen(1000)))    # ~200 B\n\n# Time (summing)\nstart = time.time()\ntotal1 = sum(squares_list(n))\nt1 = time.time() - start\n\nstart = time.time()\ntotal2 = sum(squares_gen(n))\nt2 = time.time() - start\n\nprint(f\"List: {t1:.3f}s, Gen: {t2:.3f}s\")  # Generator often slightly slower\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Generator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "def with yield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[x for x in items]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for all items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (single-use)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large/infinite sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small/known sequences"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nsquares = (x**2 for x in range(10))\nfrom itertools import islice, chain\nlist(islice(range(100), 5))\n"
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
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy loading large datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming API responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processing large log files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline data streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16.1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What keyword makes a function a generator?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "return"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["yield ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "await"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "async"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the main advantage of generator expressions?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "faster execution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["memory efficiency ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "easier syntax"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "better debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does send() do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stops the generator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["sends a value into the generator ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates a new generator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exhausts the generator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What does yield from do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates a new generator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["delegates to a subgenerator ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stops iteration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "raises StopIteration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which itertools function produces Cartesian product?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "combinations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["product ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "permutations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "chain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript uses generator functions with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "function*"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript generator function\nfunction* fibonacci(): Generator<number> {\n  let a = 0, b = 1;\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\n// Consume with next()\nconst fibGen = fibonacci();\nconsole.log(fibGen.next().value);  // 0\nconsole.log(fibGen.next().value);  // 1\nconsole.log(fibGen.next().value);  // 1\nconsole.log(fibGen.next().value);  // 2\n\n// Helper to take first N values\nfunction take<T>(n: number, gen: Generator<T>): T[] {\n  const result: T[] = [];\n  for (let i = 0; i < n; i++) {\n    const next = gen.next();\n    if (next.done) break;\n    result.push(next.value);\n  }\n  return result;\n}\nconsole.log(take(10, fibonacci()));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n\n// yield* delegation (equivalent to Python yield from)\nfunction* range(start: number, end: number): Generator<number> {\n  for (let i = start; i <= end; i++) yield i;\n}\n\nfunction* flattened(): Generator<number> {\n  yield* range(1, 3);\n  yield* range(10, 12);\n  yield* range(100, 102);\n}\nconsole.log(take(10, flattened()));  // [1, 2, 3, 10, 11, 12, 100, 101, 102]\n\n// Iterable protocol more common in TS than generators\nclass RangeIterable implements Iterable<number> {\n  constructor(private start: number, private end: number) {}\n\n  [Symbol.iterator](): Iterator<number> {\n    let current = this.start;\n    return {\n      next: (): IteratorResult<number> => {\n        if (current > this.end) return { done: true, value: undefined as any };\n        return { done: false, value: current++ };\n      }\n    };\n  }\n}\n\nfor (const n of new RangeIterable(1, 5)) console.log(n);  // 1, 2, 3, 4, 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-generators",
      children: "Python vs TypeScript Generators"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def gen(): yield x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "function* gen(): yield x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "yield from subgen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "yield* subgen()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Send values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gen.send(value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gen.next(value)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gen.throw(Exception)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gen.throw(error)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(x for x in items)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common utility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "itertools.chain"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "islice"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "take()"
            }), " function"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy by default"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "range()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "map()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "filter()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".map()"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: ".filter()"
            }), " on arrays (eager)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-generator-applications",
      children: "Practical Generator Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generators shine in real-world scenarios where memory efficiency and lazy evaluation matter:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 1. Streaming log file reader (memory-safe for GB-sized files)\ndef follow_log(filepath: str):\n    \"\"\"Yield new lines as they're written to a log file.\"\"\"\n    with open(filepath, \"r\") as f:\n        f.seek(0, 2)  # Go to end of file\n        while True:\n            line = f.readline()\n            if line:\n                yield line.strip()\n            else:\n                import time\n                time.sleep(0.1)\n\n# 2. Infinite paginated API consumer\ndef fetch_all_pages(api_base: str, page_size: int = 100):\n    \"\"\"Yield items from a paginated API, one by one.\"\"\"\n    page = 1\n    while True:\n        import requests\n        response = requests.get(\n            f\"{api_base}?page={page}&size={page_size}\"\n        )\n        data = response.json()\n        if not data[\"items\"]:\n            break\n        for item in data[\"items\"]:\n            yield item\n        page += 1\n\n# 3. Sliding window over a sequence\ndef sliding_window(iterable, n: int):\n    \"\"\"Yield sliding windows of size n over an iterable.\"\"\"\n    from collections import deque\n    it = iter(iterable)\n    window = deque((next(it) for _ in range(n)), maxlen=n)\n    yield tuple(window)\n    for item in it:\n        window.append(item)\n        yield tuple(window)\n\nlist(sliding_window([1, 2, 3, 4, 5], 3))\n# [(1, 2, 3), (2, 3, 4), (3, 4, 5)]\n\n# 4. Lazy CSV reader (parse without loading all into memory)\ndef read_csv_lazy(filepath: str):\n    \"\"\"Yield rows from a CSV file as dicts, one at a time.\"\"\"\n    import csv\n    with open(filepath, newline=\"\") as f:\n        reader = csv.DictReader(f)\n        for row in reader:\n            yield row\n\n# 5. Generator-based state machine\ndef state_machine():\n    \"\"\"Yield state transitions based on received inputs.\"\"\"\n    state = \"idle\"\n    while True:\n        event = yield state\n        if state == \"idle\" and event == \"start\":\n            state = \"running\"\n        elif state == \"running\" and event == \"pause\":\n            state = \"paused\"\n        elif state == \"running\" and event == \"stop\":\n            state = \"stopped\"\n        elif state == \"paused\" and event == \"resume\":\n            state = \"running\"\n        elif state == \"paused\" and event == \"stop\":\n            state = \"stopped\"\n        elif state == \"stopped\" and event == \"reset\":\n            state = \"idle\"\n\nsm = state_machine()\nnext(sm)                      # Initialize\nprint(sm.send(\"start\"))       # running\nprint(sm.send(\"pause\"))       # paused\nprint(sm.send(\"resume\"))      # running\nprint(sm.send(\"stop\"))        # stopped\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-not-to-use-generators",
      children: "When NOT to Use Generators"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Instead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need random access by index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List or tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generators don't support indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple passes over data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generators are single-use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small fixed dataset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List comprehension"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead of generator protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "concurrent.futures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generators are single-threaded"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 16: TypeScript Generator Equivalents\n// Python: generator with yield → TypeScript: function* with yield\nfunction* fibonacci(): Generator<number, void, unknown> {\n  let a = 0, b = 1;\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fibGen = fibonacci();\nconsole.log(fibGen.next().value);  // 0\nconsole.log(fibGen.next().value);  // 1\nconsole.log(fibGen.next().value);  // 1\nconsole.log(fibGen.next().value);  // 2\nconsole.log(fibGen.next().value);  // 3\n\n// Python: generator expression (x*2 for x in range(5))\n// TypeScript: use an iterator or array methods (no native lazy evaluation)\nfunction* range(start: number, end: number): Generator<number> {\n  for (let i = start; i < end; i++) yield i;\n}\nconst doubled = Array.from(range(0, 5), (x) => x * 2);\nconsole.log(doubled);  // [0, 2, 4, 6, 8]\n\n// Python: yield from → TypeScript: yield* (delegation)\nfunction* concat<T>(...iters: Iterable<T>[]): Generator<T> {\n  for (const iter of iters) yield* iter;\n}\nconst combined = Array.from(concat([1, 2], [3, 4]));\nconsole.log(combined);  // [1, 2, 3, 4]\n\n// Python: itertools.islice → TypeScript: take from generator\nfunction* take<T>(gen: Generator<T>, count: number): Generator<T> {\n  for (let i = 0; i < count; i++) {\n    const next = gen.next();\n    if (next.done) return;\n    yield next.value;\n  }\n}\nconst first5 = Array.from(take(fibonacci(), 5));\nconsole.log(first5);  // [0, 1, 1, 2, 3]\n\n// Python: two-way communication with .send()\n// TypeScript: generators can receive values via yield expression\nfunction* accumulator(): Generator<number, void, number> {\n  let sum = 0;\n  while (true) {\n    sum += yield sum;  // receives value via .next(value)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-iterable--iterator-protocol",
      children: "TypeScript Iterable & Iterator Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: custom iterator via __iter__/__next__ → TypeScript: Symbol.iterator\nclass CountDown implements Iterable<number> {\n  constructor(private start: number) {}\n  [Symbol.iterator](): Iterator<number> {\n    let count = this.start;\n    return {\n      next: (): IteratorResult<number> => {\n        if (count < 0) return { done: true, value: undefined as any };\n        return { done: false, value: count-- };\n      },\n    };\n  }\n}\nfor (const n of new CountDown(3)) {\n  console.log(n);  // 3, 2, 1, 0\n}\n\n// Python: itertools.chain → TypeScript: spread or flat\nconst combined2 = [...[1, 2], ...[3, 4]];  // [1, 2, 3, 4]\n// Python: list(itertools.chain([1, 2], [3, 4]))\n\n// Python: itertools.cycle → TypeScript: generator\nfunction* cycle<T>(items: T[]): Generator<T> {\n  while (true) {\n    for (const item of items) yield item;\n  }\n}\nconst colors = cycle([\"red\", \"green\", \"blue\"]);\nconsole.log(colors.next().value);  // red\nconsole.log(colors.next().value);  // green\nconsole.log(colors.next().value);  // blue\nconsole.log(colors.next().value);  // red (wraps around)\n\n// Python: itertools.accumulate → TypeScript: scan\nfunction* accumulate(iter: number[]): Generator<number> {\n  let sum = 0;\n  for (const n of iter) {\n    sum += n;\n    yield sum;\n  }\n}\nconsole.log(Array.from(accumulate([1, 2, 3, 4])));  // [1, 3, 6, 10]\n\n// Python: itertools.permutations → TypeScript: recursive generator\nfunction* permutations<T>(items: T[]): Generator<T[]> {\n  if (items.length <= 1) { yield items; return; }\n  for (let i = 0; i < items.length; i++) {\n    const rest = [...items.slice(0, i), ...items.slice(i + 1)];\n    for (const perm of permutations(rest)) {\n      yield [items[i], ...perm];\n    }\n  }\n}\nconsole.log(Array.from(permutations([1, 2, 3])));\n// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Fibonacci Generator (Python yield equivalent) ===\nfunction* fibonacciGen(n: number): Generator<number> {\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\nconsole.log([...fibonacciGen(10)]); // [0,1,1,2,3,5,8,13,21,34]\n\n// === Range Generator ===\nfunction* rangeGen(start: number, end?: number, step = 1): Generator<number> {\n  if (end === undefined) { end = start; start = 0; }\n  for (let i = start; i < end; i += step) yield i;\n}\nconsole.log([...rangeGen(5)]);          // [0,1,2,3,4]\nconsole.log([...rangeGen(2, 10, 3)]);  // [2,5,8]\n\n// === Infinite Sequence Generator ===\nfunction* infiniteSequence(): Generator<number> {\n  let i = 0;\n  while (true) yield i++;\n}\nconst seq = infiniteSequence();\nconsole.log(seq.next().value); // 0\nconsole.log(seq.next().value); // 1\nconsole.log(seq.next().value); // 2\n\n// === Async Generator (Python async generator equivalent) ===\ntype AsyncGen<T> = AsyncGenerator<T>;\nasync function* asyncRange(start: number, end: number): AsyncGen<number> {\n  for (let i = start; i < end; i++) {\n    await new Promise((r) => setTimeout(r, 10));\n    yield i;\n  }\n}\nasync function collectAsync<T>(gen: AsyncGen<T>): Promise<T[]> {\n  const result: T[] = [];\n  for await (const val of gen) result.push(val);\n  return result;\n}\n// collectAsync(asyncRange(0, 5)).then(console.log); // [0,1,2,3,4]\n\n// === Pipeline with Generators (lazy transform) ===\nfunction* mapGen<T, U>(gen: Generator<T>, fn: (x: T) => U): Generator<U> {\n  for (const val of gen) yield fn(val);\n}\nfunction* filterGen<T>(gen: Generator<T>, pred: (x: T) => boolean): Generator<T> {\n  for (const val of gen) if (pred(val)) yield val;\n}\nconst numbers = rangeGen(0, 20);\nconst evens = filterGen(numbers, (x) => x % 2 === 0);\nconst doubled = mapGen(evens, (x) => x * 2);\nconsole.log([...doubled]); // [0,4,8,12,16,20,24,28,32,36]\n\n// === Take (limit generator) ===\nfunction* take<T>(gen: Generator<T>, n: number): Generator<T> {\n  let count = 0;\n  for (const val of gen) { if (count++ >= n) break; yield val; }\n}\nconst naturals = infiniteSequence();\nconsole.log([...take(naturals, 5)]); // [0,1,2,3,4]\n\n// === Cycle Generator ===\nfunction* cycle<T>(arr: T[]): Generator<T> {\n  while (true) { for (const val of arr) yield val; }\n}\nconsole.log([...take(cycle([\"A\", \"B\", \"C\"]), 7)]); // [A,B,C,A,B,C,A]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-generator--iterator-patterns",
      children: "TypeScript Generator & Iterator Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Generator Function (Python: def generator) ===\nfunction* count(start: number, end: number, step = 1): Generator<number> {\n  for (let i = start; i < end; i += step) yield i;\n}\nfor (const n of count(0, 5)) console.log(n); // 0, 1, 2, 3, 4\n\n// === Infinite Generator (Python: while True + yield) ===\nfunction* fibonacciSeq(): Generator<number> {\n  let a = 0, b = 1;\n  while (true) { yield a; [a, b] = [b, a + b]; }\n}\nconst fib = fibonacciSeq();\nfor (let i = 0; i < 10; i++) console.log(fib.next().value); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34\n\n// === Generator with return ===\nfunction* withReturn(): Generator<string, string> {\n  yield \"first\";\n  yield \"second\";\n  return \"done\";\n}\nconst gen = withReturn();\nconsole.log(gen.next()); // { value: \"first\", done: false }\nconsole.log(gen.next()); // { value: \"second\", done: false }\nconsole.log(gen.next()); // { value: \"done\", done: true }\n\n// === yield* (Python: yield from) ===\nfunction* inner(): Generator<number> {\n  yield 1; yield 2; yield 3;\n}\nfunction* outer(): Generator<number | string> {\n  yield* inner(); // Python: yield from inner()\n  yield \"done\";\n}\nconsole.log([...outer()]); // [1, 2, 3, \"done\"]\n\n// === Custom Iterable Class ===\nclass RangeIterable implements Iterable<number> {\n  constructor(private start: number, private end: number, private step = 1) {}\n  *[Symbol.iterator](): Generator<number> {\n    for (let i = this.start; i < this.end; i += this.step) yield i;\n  }\n}\nconsole.log([...new RangeIterable(2, 10, 2)]); // [2, 4, 6, 8]\n\n// === Lazy Sequence via Iterator Protocol ===\nclass LazySequence<T> {\n  private items: T[];\n  private operations: Array<(arr: T[]) => T[]> = [];\n  constructor(items: T[]) { this.items = [...items]; }\n  filter(pred: (x: T) => boolean): this {\n    this.operations.push(arr => arr.filter(pred));\n    return this;\n  }\n  map<R>(fn: (x: T) => R): LazySequence<R> {\n    const ops = this.operations;\n    const seq = new LazySequence<R>(this.items as any);\n    seq.operations = ops as any;\n    seq.operations.push(arr => arr.map(fn as any) as any);\n    return seq;\n  }\n  toArray(): T[] {\n    let result = [...this.items];\n    for (const op of this.operations) result = op(result);\n    return result;\n  }\n}\nconst seq = new LazySequence([1, 2, 3, 4, 5, 6]);\nconst result2 = seq.filter(x => x % 2 === 0).map(x => x * 10).toArray();\nconsole.log(result2); // [20, 40, 60]\n\n// === Infinite Generator with Take ===\nfunction* naturalNumbers(): Generator<number> {\n  let n = 1;\n  while (true) yield n++;\n}\nfunction take<T>(n: number, iterable: Iterable<T>): T[] {\n  const result: T[] = [];\n  const iterator = iterable[Symbol.iterator]();\n  for (let i = 0; i < n; i++) {\n    const next = iterator.next();\n    if (next.done) break;\n    result.push(next.value);\n  }\n  return result;\n}\nconsole.log(take(5, naturalNumbers())); // [1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-generator-pipeline-patterns",
      children: "TypeScript Generator Pipeline Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Composable Generator Pipeline ===\nclass GeneratorPipeline<T, R> {\n  constructor(private gen: () => Generator<T, R>) {}\n  map<U>(fn: (x: T) => U): GeneratorPipeline<U, R> {\n    const self = this.gen;\n    return new GeneratorPipeline(function* () {\n      const inner = self();\n      let result = inner.next();\n      while (!result.done) {\n        yield fn(result.value);\n        result = inner.next();\n      }\n      return result.value;\n    });\n  }\n  filter(pred: (x: T) => boolean): GeneratorPipeline<T, R> {\n    const self = this.gen;\n    return new GeneratorPipeline(function* () {\n      const inner = self();\n      let result = inner.next();\n      while (!result.done) {\n        if (pred(result.value)) yield result.value;\n        result = inner.next();\n      }\n      return result.value;\n    });\n  }\n  take(n: number): GeneratorPipeline<T, R> {\n    const self = this.gen;\n    return new GeneratorPipeline(function* () {\n      let count = 0;\n      const inner = self();\n      let result = inner.next();\n      while (!result.done && count < n) {\n        yield result.value;\n        count++;\n        result = inner.next();\n      }\n      return result.value;\n    });\n  }\n  reduce<A>(fn: (acc: A, x: T) => A, initial: A): A {\n    let acc = initial;\n    const inner = this.gen();\n    let result = inner.next();\n    while (!result.done) { acc = fn(acc, result.value); result = inner.next(); }\n    return acc;\n  }\n  toArray(): T[] {\n    const arr: T[] = [];\n    const inner = this.gen();\n    let result = inner.next();\n    while (!result.done) { arr.push(result.value); result = inner.next(); }\n    return arr;\n  }\n}\n\n// === Coroutine (two-way generator) ===\nfunction* coroutine<T, R>(): Generator<T | undefined, R, T> {\n  let value: T | undefined = yield;\n  while (value !== undefined) {\n    value = yield value;\n  }\n  return \"done\" as R;\n}\n\n// === Async Generator with Backpressure ===\nasync function* backpressureGenerator<T>(items: T[], batchSize: number): AsyncGenerator<T[]> {\n  for (let i = 0; i < items.length; i += batchSize) {\n    await new Promise(resolve => setImmediate(resolve));\n    yield items.slice(i, i + batchSize);\n  }\n}\n\n// === Event Emitter as Generator ===\nclass EventGenerator<T> {\n  private handlers = new Map<string, ((data: T) => void)[]>();\n  private buffer: T[] = [];\n  on(event: string, handler: (data: T) => void): void {\n    if (!this.handlers.has(event)) this.handlers.set(event, []);\n    this.handlers.get(event)!.push(handler);\n  }\n  emit(event: string, data: T): void {\n    this.handlers.get(event)?.forEach(h => h(data));\n    this.buffer.push(data);\n  }\n  async *stream(event: string): AsyncGenerator<T> {\n    while (true) {\n      if (this.buffer.length > 0) yield this.buffer.shift()!;\n      else yield await new Promise<T>(resolve => this.on(event, resolve));\n    }\n  }\n}\n\n// === Range Generator ===\nfunction* range2(start: number, end: number, step = 1): Generator<number> {\n  for (let i = start; i < end; i += step) yield i;\n}\n\nconst piped = new GeneratorPipeline(() => range2(0, Infinity))\n  .filter(x => x % 2 === 0)\n  .map(x => x * 10)\n  .take(5);\nconsole.log(piped.toArray()); // [0, 20, 40, 60, 80]\n\nconst reduced = new GeneratorPipeline(() => range2(1, 11))\n  .filter(x => x % 2 === 1)\n  .reduce((acc, x) => acc + x, 0);\nconsole.log(reduced); // 25 (1 + 3 + 5 + 7 + 9)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generators use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield"
        }), " to produce sequences lazily."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generator expressions are lazy alternatives to list comprehensions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), " enables two-way communication; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throw()"
        }), " injects exceptions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "yield from"
        }), " delegates to subgenerators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "itertools"
        }), " provides efficient building blocks: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cycle"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "groupby"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "permutations"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "combinations"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "product"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "islice"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "accumulate"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a generator differ from a regular function in terms of execution?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the primary advantage of a generator expression over a list comprehension?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "next()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield from"
        }), " do?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools.permutations"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools.combinations"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a generator ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fibonacci()"
        }), " that yields Fibonacci numbers indefinitely. Use it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools.islice"
        }), " to get the first 20 numbers. Then find the first Fibonacci number greater than 10,000."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools.groupby"
        }), " to group a list of words by their first letter. Sort the list first. Print each letter group."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chunked(iterable, n)"
        }), " that yields chunks of size n from an iterable. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield from"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "itertools.islice"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a generator-based data pipeline for processing sensor readings. Start with a generator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read_sensors()"
      }), " that yields random (timestamp, value) pairs. Pipe through generators: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter_outliers"
      }), " (removes values more than 3 standard deviations from rolling mean), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "smooth"
      }), " (moving average over window of 5), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scale"
      }), " (normalize to 0-1 range), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aggregate"
      }), " (yields average of every 10 readings). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), " where appropriate. Test the pipeline with 100 sensor readings."]
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