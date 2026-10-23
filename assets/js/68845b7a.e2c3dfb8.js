"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[6648],{

/***/ 4386
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S0[Generator Functions]\r\n    S1[Generator Expressions]\r\n    S2[Lazy Evaluation]\r\n    S3[\"send(), throw(), and close()\"]\r\n    S4[yield from]\r\n    S5[itertools Module]\r\n    S6[Generator Performance]\r\n    S0 --> S1\r\n    S1 --> S2\r\n    S2 --> S3\r\n    S3 --> S4\r\n    S4 --> S5\r\n    S5 --> S6"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-generator-functions",
      children: "16.1 Generator Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Generators produce sequences lazily with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yield"
        }), " — each call advances to the next yield.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "def count_up_to(n: int):\r\n    \"\"\"Generate numbers from 1 to n.\"\"\"\r\n    i = 1\r\n    while i <= n:\r\n        yield i\r\n        i += 1\r\n\r\ncounter = count_up_to(5)\r\nprint(type(counter))  # <class 'generator'>\r\n\r\nfor num in counter:\r\n    print(num, end=\" \")  # 1 2 3 4 5\r\n\r\nprint()\r\n\r\n# Generators are single-use\r\nprint(list(counter))  # [] → exhausted\n"
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
        children: "# List comprehension → eager, creates full list\r\nsquares_list = [x ** 2 for x in range(10)]\r\nprint(type(squares_list))   # <class 'list'>\r\nprint(sum(squares_list))    # 285\r\n\r\n# Generator expression → lazy, produces values on demand\r\nsquares_gen = (x ** 2 for x in range(10))\r\nprint(type(squares_gen))    # <class 'generator'>\r\nprint(sum(squares_gen))     # 285\r\n\r\n# Memory comparison\r\nimport sys\r\nbig_list = [x for x in range(1000000)]\r\nbig_gen = (x for x in range(1000000))\r\nprint(sys.getsizeof(big_list))  # ~8 MB\r\nprint(sys.getsizeof(big_gen))   # ~200 bytes\n"
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
        children: "def read_large_file(file_path: str):\r\n    \"\"\"Read a large file line by line without loading it entirely.\"\"\"\r\n    with open(file_path) as f:\r\n        for line in f:\r\n            yield line.strip()\r\n\r\n# Process lines without loading the whole file\r\nlong_lines = (line for line in read_large_file(\"data.txt\") if len(line) > 100)\r\nfor line in long_lines:\r\n    pass  # process each long line\n"
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
        children: "def echo():\r\n    \"\"\"Echo received values.\"\"\"\r\n    while True:\r\n        received = yield\r\n        print(f\"Received: {received}\")\r\n\r\ngen = echo()\r\nnext(gen)           # advance to the first yield\r\ngen.send(\"hello\")   # Received: hello\r\ngen.send(42)        # Received: 42\r\ngen.close()         # stop the generator\n"
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
        children: "def running_average():\r\n    \"\"\"Compute running average of sent values.\"\"\"\r\n    total = 0.0\r\n    count = 0\r\n    average = 0.0\r\n    while True:\r\n        value = yield average\r\n        if value is not None:\r\n            total += value\r\n            count += 1\r\n            average = total / count\r\n\r\navg = running_average()\r\nnext(avg)               # prime the generator\r\nprint(avg.send(10))     # 10.0\r\nprint(avg.send(20))     # 15.0\r\nprint(avg.send(30))     # 20.0\r\navg.close()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "throw()"
      }), " raises an exception inside the generator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def gen():\r\n    try:\r\n        yield 1\r\n        yield 2\r\n        yield 3\r\n    except ValueError:\r\n        print(\"ValueError caught in generator\")\r\n\r\ng = gen()\r\nprint(next(g))    # 1\r\ng.throw(ValueError)  # ValueError caught in generator\n"
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
        children: "def chain(*iterables):\r\n    \"\"\"Chain multiple iterables into a single generator.\"\"\"\r\n    for iterable in iterables:\r\n        yield from iterable\r\n\r\nresult = list(chain([1, 2, 3], \"hello\", range(3)))\r\nprint(result)  # [1, 2, 3, 'h', 'e', 'l', 'l', 'o', 0, 1, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def chain_without(*iterables):\r\n    for iterable in iterables:\r\n        for item in iterable:\r\n            yield item\n"
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
        children: "def flatten(nested):\r\n    \"\"\"Recursively flatten nested sequences.\"\"\"\r\n    for item in nested:\r\n        if isinstance(item, (list, tuple)):\r\n            yield from flatten(item)\r\n        else:\r\n            yield item\r\n\r\nnested = [1, [2, [3, 4], 5], 6]\r\nprint(list(flatten(nested)))  # [1, 2, 3, 4, 5, 6]\n"
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
        children: "from itertools import count, cycle, repeat\r\n\r\n# count(start=0, step=1)\r\nfor i in count(10, 2.5):\r\n    if i > 20:\r\n        break\r\n    print(i, end=\" \")  # 10 12.5 15 17.5 20\r\nprint()\r\n\r\n# cycle(iterable)\r\ncolors = cycle([\"red\", \"green\", \"blue\"])\r\nfor _ in range(7):\r\n    print(next(colors), end=\" \")  # red green blue red green blue red\r\nprint()\r\n\r\n# repeat(object, times=None)\r\nfor val in repeat(\"hello\", 3):\r\n    print(val, end=\" \")  # hello hello hello\r\nprint()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1662-combinatoric-iterators",
      children: "16.6.2 Combinatoric Iterators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import permutations, combinations, combinations_with_replacement, product\r\n\r\nitems = [\"A\", \"B\", \"C\"]\r\n\r\n# Permutations → order matters, without replacement\r\nprint(list(permutations(items, 2)))\r\n# [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]\r\n\r\n# Combinations → order does not matter, without replacement\r\nprint(list(combinations(items, 2)))\r\n# [('A', 'B'), ('A', 'C'), ('B', 'C')]\r\n\r\n# Combinations with replacement\r\nprint(list(combinations_with_replacement(items, 2)))\r\n# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]\r\n\r\n# Cartesian product\r\nprint(list(product(items, repeat=2)))\r\n# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'B'), ('C', 'C')]\n"
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
        children: "from itertools import groupby\r\n\r\ndata = [(\"fruit\", \"apple\"), (\"fruit\", \"banana\"), (\"veg\", \"carrot\"), (\"fruit\", \"cherry\")]\r\n# groupby requires sorted input\r\nsorted_data = sorted(data, key=lambda x: x[0])\r\n\r\nfor key, group in groupby(sorted_data, key=lambda x: x[0]):\r\n    items = [item[1] for item in group]\r\n    print(f\"{key}: {items}\")\r\n# fruit: ['apple', 'banana', 'cherry']\r\n# veg: ['carrot']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1664-chain-zip-and-more",
      children: "16.6.4 chain, zip, and More"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from itertools import chain, zip_longest, islice, takewhile, dropwhile, accumulate\r\n\r\n# chain\r\nprint(list(chain([1, 2], [3, 4], [5])))  # [1, 2, 3, 4, 5]\r\n\r\n# zip_longest (pads shorter iterables)\r\na, b = [1, 2, 3], [10, 20]\r\nprint(list(zip_longest(a, b, fillvalue=0)))  # [(1, 10), (2, 20), (3, 0)]\r\n\r\n# islice → lazy slicing\r\nprint(list(islice(range(100), 10)))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\r\nprint(list(islice(range(100), 5, 15, 2)))  # [5, 7, 9, 11, 13]\r\n\r\n# takewhile → take while condition is true\r\nprint(list(takewhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [1, 3]\r\n\r\n# dropwhile → drop while condition is true, then yield all\r\nprint(list(dropwhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [7, 2, 9]\r\n\r\n# accumulate → running total (or other binary function)\r\nprint(list(accumulate([1, 2, 3, 4, 5])))  # [1, 3, 6, 10, 15]\r\nimport operator\r\nprint(list(accumulate([1, 2, 3, 4, 5], operator.mul)))  # [1, 2, 6, 24, 120]\n"
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
        children: "import time, sys\r\n\r\ndef squares_list(n: int) -> list:\r\n    return [x ** 2 for x in range(n)]\r\n\r\ndef squares_gen(n: int):\r\n    return (x ** 2 for x in range(n))\r\n\r\nn = 10_000_000\r\n# Memory\r\nprint(sys.getsizeof(squares_list(1000)))   # ~9 KB\r\nprint(sys.getsizeof(squares_gen(1000)))    # ~200 B\r\n\r\n# Time (summing)\r\nstart = time.time()\r\ntotal1 = sum(squares_list(n))\r\nt1 = time.time() - start\r\n\r\nstart = time.time()\r\ntotal2 = sum(squares_gen(n))\r\nt2 = time.time() - start\r\n\r\nprint(f\"List: {t1:.3f}s, Gen: {t2:.3f}s\")  # Generator often slightly slower\n"
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
        children: "def count_up_to(n):\r\n    i = 1\r\n    while i <= n:\r\n        yield i\r\n        i += 1\r\n\r\nsquares = (x**2 for x in range(10))\r\nfrom itertools import islice, chain\r\nlist(islice(range(100), 5))\n"
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
        children: "// TypeScript generator function\r\nfunction* fibonacci(): Generator<number> {\r\n  let a = 0, b = 1;\r\n  while (true) {\r\n    yield a;\r\n    [a, b] = [b, a + b];\r\n  }\r\n}\r\n\r\n// Consume with next()\r\nconst fibGen = fibonacci();\r\nconsole.log(fibGen.next().value);  // 0\r\nconsole.log(fibGen.next().value);  // 1\r\nconsole.log(fibGen.next().value);  // 1\r\nconsole.log(fibGen.next().value);  // 2\r\n\r\n// Helper to take first N values\r\nfunction take<T>(n: number, gen: Generator<T>): T[] {\r\n  const result: T[] = [];\r\n  for (let i = 0; i < n; i++) {\r\n    const next = gen.next();\r\n    if (next.done) break;\r\n    result.push(next.value);\r\n  }\r\n  return result;\r\n}\r\nconsole.log(take(10, fibonacci()));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\r\n\r\n// yield* delegation (equivalent to Python yield from)\r\nfunction* range(start: number, end: number): Generator<number> {\r\n  for (let i = start; i <= end; i++) yield i;\r\n}\r\n\r\nfunction* flattened(): Generator<number> {\r\n  yield* range(1, 3);\r\n  yield* range(10, 12);\r\n  yield* range(100, 102);\r\n}\r\nconsole.log(take(10, flattened()));  // [1, 2, 3, 10, 11, 12, 100, 101, 102]\r\n\r\n// Iterable protocol more common in TS than generators\r\nclass RangeIterable implements Iterable<number> {\r\n  constructor(private start: number, private end: number) {}\r\n\r\n  [Symbol.iterator](): Iterator<number> {\r\n    let current = this.start;\r\n    return {\r\n      next: (): IteratorResult<number> => {\r\n        if (current > this.end) return { done: true, value: undefined as any };\r\n        return { done: false, value: current++ };\r\n      }\r\n    };\r\n  }\r\n}\r\n\r\nfor (const n of new RangeIterable(1, 5)) console.log(n);  // 1, 2, 3, 4, 5\n"
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
        children: "# 1. Streaming log file reader (memory-safe for GB-sized files)\r\ndef follow_log(filepath: str):\r\n    \"\"\"Yield new lines as they're written to a log file.\"\"\"\r\n    with open(filepath, \"r\") as f:\r\n        f.seek(0, 2)  # Go to end of file\r\n        while True:\r\n            line = f.readline()\r\n            if line:\r\n                yield line.strip()\r\n            else:\r\n                import time\r\n                time.sleep(0.1)\r\n\r\n# 2. Infinite paginated API consumer\r\ndef fetch_all_pages(api_base: str, page_size: int = 100):\r\n    \"\"\"Yield items from a paginated API, one by one.\"\"\"\r\n    page = 1\r\n    while True:\r\n        import requests\r\n        response = requests.get(\r\n            f\"{api_base}?page={page}&size={page_size}\"\r\n        )\r\n        data = response.json()\r\n        if not data[\"items\"]:\r\n            break\r\n        for item in data[\"items\"]:\r\n            yield item\r\n        page += 1\r\n\r\n# 3. Sliding window over a sequence\r\ndef sliding_window(iterable, n: int):\r\n    \"\"\"Yield sliding windows of size n over an iterable.\"\"\"\r\n    from collections import deque\r\n    it = iter(iterable)\r\n    window = deque((next(it) for _ in range(n)), maxlen=n)\r\n    yield tuple(window)\r\n    for item in it:\r\n        window.append(item)\r\n        yield tuple(window)\r\n\r\nlist(sliding_window([1, 2, 3, 4, 5], 3))\r\n# [(1, 2, 3), (2, 3, 4), (3, 4, 5)]\r\n\r\n# 4. Lazy CSV reader (parse without loading all into memory)\r\ndef read_csv_lazy(filepath: str):\r\n    \"\"\"Yield rows from a CSV file as dicts, one at a time.\"\"\"\r\n    import csv\r\n    with open(filepath, newline=\"\") as f:\r\n        reader = csv.DictReader(f)\r\n        for row in reader:\r\n            yield row\r\n\r\n# 5. Generator-based state machine\r\ndef state_machine():\r\n    \"\"\"Yield state transitions based on received inputs.\"\"\"\r\n    state = \"idle\"\r\n    while True:\r\n        event = yield state\r\n        if state == \"idle\" and event == \"start\":\r\n            state = \"running\"\r\n        elif state == \"running\" and event == \"pause\":\r\n            state = \"paused\"\r\n        elif state == \"running\" and event == \"stop\":\r\n            state = \"stopped\"\r\n        elif state == \"paused\" and event == \"resume\":\r\n            state = \"running\"\r\n        elif state == \"paused\" and event == \"stop\":\r\n            state = \"stopped\"\r\n        elif state == \"stopped\" and event == \"reset\":\r\n            state = \"idle\"\r\n\r\nsm = state_machine()\r\nnext(sm)                      # Initialize\r\nprint(sm.send(\"start\"))       # running\r\nprint(sm.send(\"pause\"))       # paused\r\nprint(sm.send(\"resume\"))      # running\r\nprint(sm.send(\"stop\"))        # stopped\n"
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
        children: "// Chapter 16: TypeScript Generator Equivalents\r\n// Python: generator with yield → TypeScript: function* with yield\r\nfunction* fibonacci(): Generator<number, void, unknown> {\r\n  let a = 0, b = 1;\r\n  while (true) {\r\n    yield a;\r\n    [a, b] = [b, a + b];\r\n  }\r\n}\r\n\r\nconst fibGen = fibonacci();\r\nconsole.log(fibGen.next().value);  // 0\r\nconsole.log(fibGen.next().value);  // 1\r\nconsole.log(fibGen.next().value);  // 1\r\nconsole.log(fibGen.next().value);  // 2\r\nconsole.log(fibGen.next().value);  // 3\r\n\r\n// Python: generator expression (x*2 for x in range(5))\r\n// TypeScript: use an iterator or array methods (no native lazy evaluation)\r\nfunction* range(start: number, end: number): Generator<number> {\r\n  for (let i = start; i < end; i++) yield i;\r\n}\r\nconst doubled = Array.from(range(0, 5), (x) => x * 2);\r\nconsole.log(doubled);  // [0, 2, 4, 6, 8]\r\n\r\n// Python: yield from → TypeScript: yield* (delegation)\r\nfunction* concat<T>(...iters: Iterable<T>[]): Generator<T> {\r\n  for (const iter of iters) yield* iter;\r\n}\r\nconst combined = Array.from(concat([1, 2], [3, 4]));\r\nconsole.log(combined);  // [1, 2, 3, 4]\r\n\r\n// Python: itertools.islice → TypeScript: take from generator\r\nfunction* take<T>(gen: Generator<T>, count: number): Generator<T> {\r\n  for (let i = 0; i < count; i++) {\r\n    const next = gen.next();\r\n    if (next.done) return;\r\n    yield next.value;\r\n  }\r\n}\r\nconst first5 = Array.from(take(fibonacci(), 5));\r\nconsole.log(first5);  // [0, 1, 1, 2, 3]\r\n\r\n// Python: two-way communication with .send()\r\n// TypeScript: generators can receive values via yield expression\r\nfunction* accumulator(): Generator<number, void, number> {\r\n  let sum = 0;\r\n  while (true) {\r\n    sum += yield sum;  // receives value via .next(value)\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-iterable--iterator-protocol",
      children: "TypeScript Iterable & Iterator Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: custom iterator via __iter__/__next__ → TypeScript: Symbol.iterator\r\nclass CountDown implements Iterable<number> {\r\n  constructor(private start: number) {}\r\n  [Symbol.iterator](): Iterator<number> {\r\n    let count = this.start;\r\n    return {\r\n      next: (): IteratorResult<number> => {\r\n        if (count < 0) return { done: true, value: undefined as any };\r\n        return { done: false, value: count-- };\r\n      },\r\n    };\r\n  }\r\n}\r\nfor (const n of new CountDown(3)) {\r\n  console.log(n);  // 3, 2, 1, 0\r\n}\r\n\r\n// Python: itertools.chain → TypeScript: spread or flat\r\nconst combined2 = [...[1, 2], ...[3, 4]];  // [1, 2, 3, 4]\r\n// Python: list(itertools.chain([1, 2], [3, 4]))\r\n\r\n// Python: itertools.cycle → TypeScript: generator\r\nfunction* cycle<T>(items: T[]): Generator<T> {\r\n  while (true) {\r\n    for (const item of items) yield item;\r\n  }\r\n}\r\nconst colors = cycle([\"red\", \"green\", \"blue\"]);\r\nconsole.log(colors.next().value);  // red\r\nconsole.log(colors.next().value);  // green\r\nconsole.log(colors.next().value);  // blue\r\nconsole.log(colors.next().value);  // red (wraps around)\r\n\r\n// Python: itertools.accumulate → TypeScript: scan\r\nfunction* accumulate(iter: number[]): Generator<number> {\r\n  let sum = 0;\r\n  for (const n of iter) {\r\n    sum += n;\r\n    yield sum;\r\n  }\r\n}\r\nconsole.log(Array.from(accumulate([1, 2, 3, 4])));  // [1, 3, 6, 10]\r\n\r\n// Python: itertools.permutations → TypeScript: recursive generator\r\nfunction* permutations<T>(items: T[]): Generator<T[]> {\r\n  if (items.length <= 1) { yield items; return; }\r\n  for (let i = 0; i < items.length; i++) {\r\n    const rest = [...items.slice(0, i), ...items.slice(i + 1)];\r\n    for (const perm of permutations(rest)) {\r\n      yield [items[i], ...perm];\r\n    }\r\n  }\r\n}\r\nconsole.log(Array.from(permutations([1, 2, 3])));\r\n// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Fibonacci Generator (Python yield equivalent) ===\r\nfunction* fibonacciGen(n: number): Generator<number> {\r\n  let a = 0, b = 1;\r\n  for (let i = 0; i < n; i++) {\r\n    yield a;\r\n    [a, b] = [b, a + b];\r\n  }\r\n}\r\nconsole.log([...fibonacciGen(10)]); // [0,1,1,2,3,5,8,13,21,34]\r\n\r\n// === Range Generator ===\r\nfunction* rangeGen(start: number, end?: number, step = 1): Generator<number> {\r\n  if (end === undefined) { end = start; start = 0; }\r\n  for (let i = start; i < end; i += step) yield i;\r\n}\r\nconsole.log([...rangeGen(5)]);          // [0,1,2,3,4]\r\nconsole.log([...rangeGen(2, 10, 3)]);  // [2,5,8]\r\n\r\n// === Infinite Sequence Generator ===\r\nfunction* infiniteSequence(): Generator<number> {\r\n  let i = 0;\r\n  while (true) yield i++;\r\n}\r\nconst seq = infiniteSequence();\r\nconsole.log(seq.next().value); // 0\r\nconsole.log(seq.next().value); // 1\r\nconsole.log(seq.next().value); // 2\r\n\r\n// === Async Generator (Python async generator equivalent) ===\r\ntype AsyncGen<T> = AsyncGenerator<T>;\r\nasync function* asyncRange(start: number, end: number): AsyncGen<number> {\r\n  for (let i = start; i < end; i++) {\r\n    await new Promise((r) => setTimeout(r, 10));\r\n    yield i;\r\n  }\r\n}\r\nasync function collectAsync<T>(gen: AsyncGen<T>): Promise<T[]> {\r\n  const result: T[] = [];\r\n  for await (const val of gen) result.push(val);\r\n  return result;\r\n}\r\n// collectAsync(asyncRange(0, 5)).then(console.log); // [0,1,2,3,4]\r\n\r\n// === Pipeline with Generators (lazy transform) ===\r\nfunction* mapGen<T, U>(gen: Generator<T>, fn: (x: T) => U): Generator<U> {\r\n  for (const val of gen) yield fn(val);\r\n}\r\nfunction* filterGen<T>(gen: Generator<T>, pred: (x: T) => boolean): Generator<T> {\r\n  for (const val of gen) if (pred(val)) yield val;\r\n}\r\nconst numbers = rangeGen(0, 20);\r\nconst evens = filterGen(numbers, (x) => x % 2 === 0);\r\nconst doubled = mapGen(evens, (x) => x * 2);\r\nconsole.log([...doubled]); // [0,4,8,12,16,20,24,28,32,36]\r\n\r\n// === Take (limit generator) ===\r\nfunction* take<T>(gen: Generator<T>, n: number): Generator<T> {\r\n  let count = 0;\r\n  for (const val of gen) { if (count++ >= n) break; yield val; }\r\n}\r\nconst naturals = infiniteSequence();\r\nconsole.log([...take(naturals, 5)]); // [0,1,2,3,4]\r\n\r\n// === Cycle Generator ===\r\nfunction* cycle<T>(arr: T[]): Generator<T> {\r\n  while (true) { for (const val of arr) yield val; }\r\n}\r\nconsole.log([...take(cycle([\"A\", \"B\", \"C\"]), 7)]); // [A,B,C,A,B,C,A]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-generator--iterator-patterns",
      children: "TypeScript Generator & Iterator Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Generator Function (Python: def generator) ===\r\nfunction* count(start: number, end: number, step = 1): Generator<number> {\r\n  for (let i = start; i < end; i += step) yield i;\r\n}\r\nfor (const n of count(0, 5)) console.log(n); // 0, 1, 2, 3, 4\r\n\r\n// === Infinite Generator (Python: while True + yield) ===\r\nfunction* fibonacciSeq(): Generator<number> {\r\n  let a = 0, b = 1;\r\n  while (true) { yield a; [a, b] = [b, a + b]; }\r\n}\r\nconst fib = fibonacciSeq();\r\nfor (let i = 0; i < 10; i++) console.log(fib.next().value); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34\r\n\r\n// === Generator with return ===\r\nfunction* withReturn(): Generator<string, string> {\r\n  yield \"first\";\r\n  yield \"second\";\r\n  return \"done\";\r\n}\r\nconst gen = withReturn();\r\nconsole.log(gen.next()); // { value: \"first\", done: false }\r\nconsole.log(gen.next()); // { value: \"second\", done: false }\r\nconsole.log(gen.next()); // { value: \"done\", done: true }\r\n\r\n// === yield* (Python: yield from) ===\r\nfunction* inner(): Generator<number> {\r\n  yield 1; yield 2; yield 3;\r\n}\r\nfunction* outer(): Generator<number | string> {\r\n  yield* inner(); // Python: yield from inner()\r\n  yield \"done\";\r\n}\r\nconsole.log([...outer()]); // [1, 2, 3, \"done\"]\r\n\r\n// === Custom Iterable Class ===\r\nclass RangeIterable implements Iterable<number> {\r\n  constructor(private start: number, private end: number, private step = 1) {}\r\n  *[Symbol.iterator](): Generator<number> {\r\n    for (let i = this.start; i < this.end; i += this.step) yield i;\r\n  }\r\n}\r\nconsole.log([...new RangeIterable(2, 10, 2)]); // [2, 4, 6, 8]\r\n\r\n// === Lazy Sequence via Iterator Protocol ===\r\nclass LazySequence<T> {\r\n  private items: T[];\r\n  private operations: Array<(arr: T[]) => T[]> = [];\r\n  constructor(items: T[]) { this.items = [...items]; }\r\n  filter(pred: (x: T) => boolean): this {\r\n    this.operations.push(arr => arr.filter(pred));\r\n    return this;\r\n  }\r\n  map<R>(fn: (x: T) => R): LazySequence<R> {\r\n    const ops = this.operations;\r\n    const seq = new LazySequence<R>(this.items as any);\r\n    seq.operations = ops as any;\r\n    seq.operations.push(arr => arr.map(fn as any) as any);\r\n    return seq;\r\n  }\r\n  toArray(): T[] {\r\n    let result = [...this.items];\r\n    for (const op of this.operations) result = op(result);\r\n    return result;\r\n  }\r\n}\r\nconst seq = new LazySequence([1, 2, 3, 4, 5, 6]);\r\nconst result2 = seq.filter(x => x % 2 === 0).map(x => x * 10).toArray();\r\nconsole.log(result2); // [20, 40, 60]\r\n\r\n// === Infinite Generator with Take ===\r\nfunction* naturalNumbers(): Generator<number> {\r\n  let n = 1;\r\n  while (true) yield n++;\r\n}\r\nfunction take<T>(n: number, iterable: Iterable<T>): T[] {\r\n  const result: T[] = [];\r\n  const iterator = iterable[Symbol.iterator]();\r\n  for (let i = 0; i < n; i++) {\r\n    const next = iterator.next();\r\n    if (next.done) break;\r\n    result.push(next.value);\r\n  }\r\n  return result;\r\n}\r\nconsole.log(take(5, naturalNumbers())); // [1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-generator-pipeline-patterns",
      children: "TypeScript Generator Pipeline Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Composable Generator Pipeline ===\r\nclass GeneratorPipeline<T, R> {\r\n  constructor(private gen: () => Generator<T, R>) {}\r\n  map<U>(fn: (x: T) => U): GeneratorPipeline<U, R> {\r\n    const self = this.gen;\r\n    return new GeneratorPipeline(function* () {\r\n      const inner = self();\r\n      let result = inner.next();\r\n      while (!result.done) {\r\n        yield fn(result.value);\r\n        result = inner.next();\r\n      }\r\n      return result.value;\r\n    });\r\n  }\r\n  filter(pred: (x: T) => boolean): GeneratorPipeline<T, R> {\r\n    const self = this.gen;\r\n    return new GeneratorPipeline(function* () {\r\n      const inner = self();\r\n      let result = inner.next();\r\n      while (!result.done) {\r\n        if (pred(result.value)) yield result.value;\r\n        result = inner.next();\r\n      }\r\n      return result.value;\r\n    });\r\n  }\r\n  take(n: number): GeneratorPipeline<T, R> {\r\n    const self = this.gen;\r\n    return new GeneratorPipeline(function* () {\r\n      let count = 0;\r\n      const inner = self();\r\n      let result = inner.next();\r\n      while (!result.done && count < n) {\r\n        yield result.value;\r\n        count++;\r\n        result = inner.next();\r\n      }\r\n      return result.value;\r\n    });\r\n  }\r\n  reduce<A>(fn: (acc: A, x: T) => A, initial: A): A {\r\n    let acc = initial;\r\n    const inner = this.gen();\r\n    let result = inner.next();\r\n    while (!result.done) { acc = fn(acc, result.value); result = inner.next(); }\r\n    return acc;\r\n  }\r\n  toArray(): T[] {\r\n    const arr: T[] = [];\r\n    const inner = this.gen();\r\n    let result = inner.next();\r\n    while (!result.done) { arr.push(result.value); result = inner.next(); }\r\n    return arr;\r\n  }\r\n}\r\n\r\n// === Coroutine (two-way generator) ===\r\nfunction* coroutine<T, R>(): Generator<T | undefined, R, T> {\r\n  let value: T | undefined = yield;\r\n  while (value !== undefined) {\r\n    value = yield value;\r\n  }\r\n  return \"done\" as R;\r\n}\r\n\r\n// === Async Generator with Backpressure ===\r\nasync function* backpressureGenerator<T>(items: T[], batchSize: number): AsyncGenerator<T[]> {\r\n  for (let i = 0; i < items.length; i += batchSize) {\r\n    await new Promise(resolve => setImmediate(resolve));\r\n    yield items.slice(i, i + batchSize);\r\n  }\r\n}\r\n\r\n// === Event Emitter as Generator ===\r\nclass EventGenerator<T> {\r\n  private handlers = new Map<string, ((data: T) => void)[]>();\r\n  private buffer: T[] = [];\r\n  on(event: string, handler: (data: T) => void): void {\r\n    if (!this.handlers.has(event)) this.handlers.set(event, []);\r\n    this.handlers.get(event)!.push(handler);\r\n  }\r\n  emit(event: string, data: T): void {\r\n    this.handlers.get(event)?.forEach(h => h(data));\r\n    this.buffer.push(data);\r\n  }\r\n  async *stream(event: string): AsyncGenerator<T> {\r\n    while (true) {\r\n      if (this.buffer.length > 0) yield this.buffer.shift()!;\r\n      else yield await new Promise<T>(resolve => this.on(event, resolve));\r\n    }\r\n  }\r\n}\r\n\r\n// === Range Generator ===\r\nfunction* range2(start: number, end: number, step = 1): Generator<number> {\r\n  for (let i = start; i < end; i += step) yield i;\r\n}\r\n\r\nconst piped = new GeneratorPipeline(() => range2(0, Infinity))\r\n  .filter(x => x % 2 === 0)\r\n  .map(x => x * 10)\r\n  .take(5);\r\nconsole.log(piped.toArray()); // [0, 20, 40, 60, 80]\r\n\r\nconst reduced = new GeneratorPipeline(() => range2(1, 11))\r\n  .filter(x => x % 2 === 1)\r\n  .reduce((acc, x) => acc + x, 0);\r\nconsole.log(reduced); // 25 (1 + 3 + 5 + 7 + 9)\n"
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



/***/ }

}]);