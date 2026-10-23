"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[824],{

/***/ 9414
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_14_magic_methods_md_51a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-14-magic-methods-md-51a.json
const site_docs_courses_python_programming_14_magic_methods_md_51a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/14-magic-methods","title":"Chapter 14: Magic Methods","description":"Previous Decorators","source":"@site/docs/courses/python-programming/14-magic-methods.md","sourceDirName":"courses/python-programming","slug":"/python-programming/14-magic-methods","permalink":"/ai-engineering-journey/python-programming/14-magic-methods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-magic-methods","slug":"/python-programming/14-magic-methods","title":"Chapter 14: Magic Methods","sidebar_label":"Chapter 14: Magic Methods","sidebar_position":14},"sidebar":"course-python-programming","previous":{"title":"Chapter 13: Inheritance and Protocols","permalink":"/ai-engineering-journey/python-programming/13-inheritance"},"next":{"title":"Chapter 15: Decorators","permalink":"/ai-engineering-journey/python-programming/15-decorators"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/14-magic-methods.md


const frontMatter = {
	id: '14-magic-methods',
	slug: '/python-programming/14-magic-methods',
	title: 'Chapter 14: Magic Methods',
	sidebar_label: 'Chapter 14: Magic Methods',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Magic Methods';

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
  "value": "14.1 Introduction",
  "id": "141-introduction",
  "level": 2
}, {
  "value": "14.2 <strong>str</strong> and <strong>repr</strong>",
  "id": "142-str-and-repr",
  "level": 2
}, {
  "value": "14.3 <strong>eq</strong> and <strong>hash</strong>",
  "id": "143-eq-and-hash",
  "level": 2
}, {
  "value": "14.4 <strong>lt</strong>, <strong>le</strong>, <strong>gt</strong>, <strong>ge</strong>",
  "id": "144-lt-le-gt-ge",
  "level": 2
}, {
  "value": "14.5 <strong>getitem</strong>, <strong>setitem</strong>, <strong>delitem</strong>",
  "id": "145-getitem-setitem-delitem",
  "level": 2
}, {
  "value": "14.6 <strong>call</strong>",
  "id": "146-call",
  "level": 2
}, {
  "value": "14.7 <strong>enter</strong> and <strong>exit</strong> (Context Managers)",
  "id": "147-enter-and-exit-context-managers",
  "level": 2
}, {
  "value": "14.8 <strong>iter</strong> and <strong>next</strong>",
  "id": "148-iter-and-next",
  "level": 2
}, {
  "value": "14.9 <strong>len</strong> and <strong>bool</strong>",
  "id": "149-len-and-bool",
  "level": 2
}, {
  "value": "14.10 <strong>add</strong>, <strong>sub</strong>, <strong>mul</strong>, and Arithmetic",
  "id": "1410-add-sub-mul-and-arithmetic",
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
  "value": "More TypeScript Magic Method Equivalents",
  "id": "more-typescript-magic-method-equivalents",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Metaprogramming with Proxy",
  "id": "typescript-metaprogramming-with-proxy",
  "level": 3
}, {
  "value": "TypeScript Proxy-based Magic Patterns",
  "id": "typescript-proxy-based-magic-patterns",
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
  "value": "Python Magic Methods vs TypeScript Equivalents",
  "id": "python-magic-methods-vs-typescript-equivalents",
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
        id: "chapter-14-magic-methods",
        children: "Chapter 14: Magic Methods"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/13-inheritance",
          children: "Inheritance and Polymorphism"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/15-decorators",
          children: "Decorators"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement common magic methods for string representation, equality, hashing, and ordering"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make objects subscriptable with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__getitem__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__setitem__"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create callable objects with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__call__"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write context managers using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__enter__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__exit__"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build iterable objects with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__iter__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__next__"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__len__"
        }), " and other container methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/14-magic-methods.png",
        alt: "Magic Methods"
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
            children: "14.1 Introduction"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Magic methods (dunder methods) hook objects into Python language behaviours."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.2 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "str"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "repr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__repr__"
            }), " is for developers (unambiguous); ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__str__"
            }), " is for users (readable via print())."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.3 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "eq"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "hash"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Override ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__eq__"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__hash__"
            }), " together — if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__eq__"
            }), " changes, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__hash__"
            }), " must change too."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.4 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "lt"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "le"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "gt"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ge"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__enter__"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "__exit__"
            }), " implement context managers; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@contextmanager"
            }), " offers a generator-based alternative."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.5 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "getitem"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "setitem"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "delitem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__call__"
            }), " makes objects callable; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__getitem__"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "__setitem__"
            }), " make them subscriptable."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.6 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "call"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.7 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "enter"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "exit"
            }), " (Context Managers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.8 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "iter"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "next"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.9 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "len"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "bool"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["14.10 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "add"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "sub"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "mul"
            }), ", and Arithmetic"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S0[Introduction]\r\n    S1[__str__ and __repr__]\r\n    S2[__eq__ and __hash__]\r\n    S3[\"__lt__, __le__, __gt__, __ge__\"]\r\n    S4[\"__getitem__, __setitem__, __delitem__\"]\r\n    S5[__call__]\r\n    S6[\"__enter__ and __exit__ (Context Managers)\"]\r\n    S7[__iter__ and __next__]\r\n    S8[__len__ and __bool__]\r\n    S9[\"__add__, __sub__, __mul__, and Arithmetic\"]\r\n    S0 --> S1\r\n    S1 --> S2\r\n    S2 --> S3\r\n    S3 --> S4\r\n    S4 --> S5\r\n    S5 --> S6\r\n    S6 --> S7\r\n    S7 --> S8\r\n    S8 --> S9"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "141-introduction",
      children: "14.1 Introduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Magic methods (dunder methods) hook objects into Python language behaviours."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Magic methods (dunder methods) are special methods with double underscores that allow objects to define Python language behaviours. They are not meant to be called directly → Python calls them implicitly."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Point:\r\n    def __init__(self, x: float, y: float):\r\n        self.x = x\r\n        self.y = y\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Point({self.x}, {self.y})\"\r\n    \r\n    def __str__(self) -> str:\r\n        return f\"({self.x}, {self.y})\"\r\n\r\np = Point(3, 4)\r\nprint(repr(p))   # Point(3, 4)  → calls __repr__\r\nprint(str(p))    # (3, 4)       → calls __str__\r\nprint(p)         # (3, 4)       → calls __str__\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "142-str-and-repr",
      children: ["14.2 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "str"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repr"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__repr__"
        }), " is for developers (unambiguous); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__str__"
        }), " is for users (readable via print())."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "__repr__"
      }), " is for developers (unambiguous, used in debugging). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__str__"
      }), " is for users (readable, used by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "print()"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Fraction:\r\n    def __init__(self, num: int, den: int):\r\n        self.num = num\r\n        self.den = den\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Fraction({self.num}, {self.den})\"\r\n    \r\n    def __str__(self) -> str:\r\n        return f\"{self.num}/{self.den}\"\r\n\r\nf = Fraction(3, 4)\r\nprint([f, Fraction(1, 2)])  # [Fraction(3, 4), Fraction(1, 2)]  (uses __repr__)\r\nprint(f)                     # 3/4  (uses __str__)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__str__"
      }), " is not defined, Python falls back to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__repr__"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "143-eq-and-hash",
      children: ["14.3 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eq"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hash"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__eq__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__hash__"
        }), " together — if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__eq__"
        }), " changes, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__hash__"
        }), " must change too."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), " defines equality. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__hash__"
      }), " makes an object usable as a dict key or set member:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Person:\r\n    def __init__(self, name: str, ssn: str):\r\n        self.name = name\r\n        self.ssn = ssn\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Person({self.name}, ...)\"\r\n    \r\n    def __eq__(self, other) -> bool:\r\n        if not isinstance(other, Person):\r\n            return NotImplemented\r\n        return self.ssn == other.ssn\r\n    \r\n    def __hash__(self) -> int:\r\n        return hash(self.ssn)\r\n\r\np1 = Person(\"Alice\", \"123-45-6789\")\r\np2 = Person(\"Alice\", \"123-45-6789\")\r\np3 = Person(\"Bob\", \"987-65-4321\")\r\n\r\nprint(p1 == p2)       # True (same SSN)\r\nprint(p1 is p2)       # False (different objects)\r\nprint(p1 == p3)       # False\r\n\r\n# Can be used in sets and dicts\r\npeople = {p1, p2, p3}\r\nprint(len(people))    # 2 (p1 and p2 are equal)\r\n\r\nregistry = {p1: \"active\"}\r\nprint(registry[p2])   # \"active\" (same hash, same equality)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule"
      }), ": if you define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), ", define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__hash__"
      }), ". If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), " is defined but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__hash__"
      }), " is not, the object becomes unhashable (can't be used in sets or as dict keys). If a class defines ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), " but not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__hash__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__hash__"
      }), " is set to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "None"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "144-lt-le-gt-ge",
      children: ["14.4 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lt"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "le"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gt"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ge"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__enter__"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "__exit__"
        }), " implement context managers; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@contextmanager"
        }), " offers a generator-based alternative."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define ordering for sorting and comparison:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Product:\r\n    def __init__(self, name: str, price: float):\r\n        self.name = name\r\n        self.price = price\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Product({self.name}, ${self.price:.2f})\"\r\n    \r\n    def __lt__(self, other) -> bool:\r\n        if not isinstance(other, Product):\r\n            return NotImplemented\r\n        return self.price < other.price\r\n    \r\n    def __le__(self, other) -> bool:\r\n        if not isinstance(other, Product):\r\n            return NotImplemented\r\n        return self.price <= other.price\r\n\r\nproducts = [\r\n    Product(\"Chair\", 150),\r\n    Product(\"Desk\", 500),\r\n    Product(\"Lamp\", 80),\r\n]\r\nproducts.sort()\r\nprint(products)\r\n# [Product(Lamp, $80.00), Product(Chair, $150.00), Product(Desk, $500.00)]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@total_ordering"
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "functools"
      }), " reduces boilerplate → define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), " and one comparison method, and the rest are generated:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import total_ordering\r\n\r\n@total_ordering\r\nclass Student:\r\n    def __init__(self, name: str, grade: float):\r\n        self.name = name\r\n        self.grade = grade\r\n    \r\n    def __eq__(self, other) -> bool:\r\n        return self.grade == other.grade\r\n    \r\n    def __lt__(self, other) -> bool:\r\n        return self.grade < other.grade\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Student({self.name}, {self.grade})\"\r\n\r\ns1, s2, s3 = Student(\"Alice\", 85), Student(\"Bob\", 92), Student(\"Charlie\", 78)\r\nprint(s1 > s3)   # True (generated from __lt__)\r\nprint(s2 >= s1)  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "145-getitem-setitem-delitem",
      children: ["14.5 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "getitem"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "setitem"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delitem"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__call__"
        }), " makes objects callable; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__getitem__"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "__setitem__"
        }), " make them subscriptable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make objects subscriptable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SimpleDict:\r\n    def __init__(self):\r\n        self._data = {}\r\n    \r\n    def __getitem__(self, key):\r\n        return self._data[key]\r\n    \r\n    def __setitem__(self, key, value):\r\n        self._data[key] = value\r\n    \r\n    def __delitem__(self, key):\r\n        del self._data[key]\r\n    \r\n    def __contains__(self, key):\r\n        return key in self._data\r\n    \r\n    def __len__(self):\r\n        return len(self._data)\r\n\r\nd = SimpleDict()\r\nd[\"name\"] = \"Alice\"    # __setitem__\r\nprint(d[\"name\"])       # __getitem__  → Alice\r\nprint(\"name\" in d)     # __contains__ → True\r\nprint(len(d))           # __len__     → 1\r\ndel d[\"name\"]           # __delitem__\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "146-call",
      children: ["14.6 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "call"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make objects callable like functions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Adder:\r\n    def __init__(self, n: int):\r\n        self.n = n\r\n    \r\n    def __call__(self, x: int) -> int:\r\n        return self.n + x\r\n\r\nadd5 = Adder(5)\r\nprint(add5(10))    # 15\r\nprint(add5(3))     # 8\r\n\r\n# Practical: decorator factory\r\nclass CountCalls:\r\n    def __init__(self):\r\n        self.count = 0\r\n    \r\n    def __call__(self):\r\n        self.count += 1\r\n        return self.count\r\n\r\ncounter = CountCalls()\r\nprint(counter())   # 1\r\nprint(counter())   # 2\r\nprint(counter())   # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "147-enter-and-exit-context-managers",
      children: ["14.7 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enter"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exit"
      }), " (Context Managers)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context managers handle setup and teardown automatically with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "with"
      }), " statement:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ManagedFile:\r\n    def __init__(self, filename: str, mode: str = \"r\"):\r\n        self.filename = filename\r\n        self.mode = mode\r\n    \r\n    def __enter__(self):\r\n        self.file = open(self.filename, self.mode)\r\n        return self.file  # bound to 'as' variable\r\n    \r\n    def __exit__(self, exc_type, exc_val, exc_tb):\r\n        self.file.close()\r\n        # Return False to propagate exceptions, True to suppress\r\n        return False\r\n\r\n# Usage\r\nwith ManagedFile(\"test.txt\", \"w\") as f:\r\n    f.write(\"Hello, world!\")\r\n\r\n# The file is closed automatically after the block\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contextlib.contextmanager"
      }), " for simpler cases:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from contextlib import contextmanager\r\n\r\n@contextmanager\r\ndef managed_file(filename: str, mode: str = \"r\"):\r\n    f = open(filename, mode)\r\n    try:\r\n        yield f\r\n    finally:\r\n        f.close()\r\n\r\nwith managed_file(\"test.txt\") as f:\r\n    print(f.read())\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "148-iter-and-next",
      children: ["14.8 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iter"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "next"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make objects iterable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Range:\r\n    def __init__(self, start: int, end: int, step: int = 1):\r\n        self.start = start\r\n        self.end = end\r\n        self.step = step\r\n    \r\n    def __iter__(self):\r\n        self.current = self.start\r\n        return self\r\n    \r\n    def __next__(self):\r\n        if self.current >= self.end:\r\n            raise StopIteration\r\n        value = self.current\r\n        self.current += self.step\r\n        return value\r\n\r\nfor i in Range(0, 5):\r\n    print(i, end=\" \")  # 0 1 2 3 4\r\n\r\nprint()\r\n\r\n# Two-iterator protocol (iterable but not its own iterator)\r\nclass Squares:\r\n    def __init__(self, n: int):\r\n        self.n = n\r\n    \r\n    def __iter__(self):\r\n        return (i ** 2 for i in range(self.n))\r\n\r\ns = Squares(5)\r\nprint(list(s))   # [0, 1, 4, 9, 16]\r\nprint(list(s))   # [0, 1, 4, 9, 16]  (fresh iterator each time)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "149-len-and-bool",
      children: ["14.9 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "len"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bool"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Team:\r\n    def __init__(self, members: list[str]):\r\n        self.members = members\r\n    \r\n    def __len__(self) -> int:\r\n        return len(self.members)\r\n    \r\n    def __bool__(self) -> bool:\r\n        return len(self.members) > 0\r\n\r\nteam = Team([\"Alice\", \"Bob\", \"Charlie\"])\r\nprint(len(team))        # 3\r\nif team:\r\n    print(\"Team exists\")\r\n\r\nempty = Team([])\r\nprint(bool(empty))      # False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__bool__"
      }), " is not defined, Python falls back to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__len__"
      }), " (truthy if length > 0)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "1410-add-sub-mul-and-arithmetic",
      children: ["14.10 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "add"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sub"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mul"
      }), ", and Arithmetic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Vector:\r\n    def __init__(self, x: float, y: float):\r\n        self.x = x\r\n        self.y = y\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Vector({self.x}, {self.y})\"\r\n    \r\n    def __add__(self, other: \"Vector\") -> \"Vector\":\r\n        return Vector(self.x + other.x, self.y + other.y)\r\n    \r\n    def __sub__(self, other: \"Vector\") -> \"Vector\":\r\n        return Vector(self.x - other.x, self.y - other.y)\r\n    \r\n    def __mul__(self, scalar: float) -> \"Vector\":\r\n        return Vector(self.x * scalar, self.y * scalar)\r\n    \r\n    def __rmul__(self, scalar: float) -> \"Vector\":\r\n        return self * scalar  # commutativity\r\n    \r\n    def __abs__(self) -> float:\r\n        import math\r\n        return math.sqrt(self.x ** 2 + self.y ** 2)\r\n\r\nv1 = Vector(3, 4)\r\nv2 = Vector(1, 2)\r\nprint(v1 + v2)    # Vector(4, 6)\r\nprint(v1 - v2)    # Vector(2, 2)\r\nprint(v1 * 2)     # Vector(6, 8)\r\nprint(2 * v1)     # Vector(6, 8)  (reverse multiplication)\r\nprint(abs(v1))    # 5.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reflected operators"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "__radd__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__rsub__"
      }), ", etc.) are called when the left operand does not support the operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "init"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ClassName()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "str"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-friendly string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "print(), str()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "repr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer-friendly string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "repr(), debug"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "call"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callable objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "obj()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "enter"
            }), "/", (0,jsx_runtime.jsx)(_components.strong, {
              children: "exit"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "with statement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Point:\r\n    def __init__(self, x, y): self.x=x; self.y=y\r\n    def __repr__(self): return f\"Point({self.x},{self.y})\"\r\n    def __add__(self, o): return Point(self.x+o.x, self.y+o.y)\r\n    def __eq__(self, o): return self.x==o.x and self.y==o.y\n"
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
            children: "Context managers for DB connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callable models with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "call"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom iterable configuration parsers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Comparable version objects with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "lt"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14.4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the difference between ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "str"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repr"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "no difference"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "str"
        }), " for users, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repr"
        }), " for devs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "str"
        }), " for devs, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repr"
        }), " for users"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "both are for debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What must you do when overriding ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eq"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["also override ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hash"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["also override ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "str"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["call super().", (0,jsx_runtime.jsx)(_components.strong, {
          children: "eq"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nothing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enter"
      }), " return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "the context manager itself"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["any object bound to \"as\" ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "True/False"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "call"
      }), " do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates instances"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["makes instances callable ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deletes attributes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iterates over items"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What @total_ordering generates?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["all comparison methods ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repr"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "hash"
        }), " only"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "getter/setter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-magic-method-equivalents",
      children: "More TypeScript Magic Method Equivalents"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: __add__ → TypeScript: custom add method\r\nclass Vector2D {\r\n  constructor(public x: number, public y: number) {}\r\n  add(other: Vector2D): Vector2D {\r\n    return new Vector2D(this.x + other.x, this.y + other.y);\r\n  }\r\n  // Python: __repr__\r\n  toString(): string {\r\n    return `Vector2D(${this.x}, ${this.y})`;\r\n  }\r\n}\r\nconst v1 = new Vector2D(1, 2);\r\nconst v2 = new Vector2D(3, 4);\r\nconsole.log(v1.add(v2).toString());  // Vector2D(4, 6)\r\n\r\n// Python: __getitem__ / __setitem__ → TypeScript: Proxy\r\nconst handler: ProxyHandler<Record<string, unknown>> = {\r\n  get(target, prop: string) {\r\n    if (prop in target) return target[prop];\r\n    return `Key \"${prop}\" not found`;\r\n  },\r\n  set(target, prop: string, value) {\r\n    console.log(`Setting ${prop} to ${value}`);\r\n    target[prop] = value;\r\n    return true;\r\n  },\r\n};\r\nconst dict = new Proxy({}, handler);\r\ndict.name = \"Alice\";  // logs: Setting name to Alice\r\nconsole.log(dict.missing);  // Key \"missing\" not found\r\n\r\n// Python: __len__ → TypeScript: length property\r\nclass Collection<T> {\r\n  private items: T[] = [];\r\n  get length(): number { return this.items.length; }\r\n  add(item: T): void { this.items.push(item); }\r\n}\r\n\r\n// Python: __call__ → TypeScript: class with apply\r\nclass Adder {\r\n  constructor(private n: number) {}\r\n  apply(value: number): number {\r\n    return value + this.n;\r\n  }\r\n}\r\nconst add5 = new Adder(5);\r\nconsole.log(add5.apply(10));  // 15\r\n// Note: TypeScript doesn't support making instances directly callable\r\n\r\n// Python: __eq__ / __hash__ → TypeScript: custom equals\r\nclass Money {\r\n  constructor(public amount: number, public currency: string) {}\r\n  equals(other: Money): boolean {\r\n    return this.amount === other.amount && this.currency === other.currency;\r\n  }\r\n  hashCode(): string {\r\n    return `${this.amount}:${this.currency}`;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Proxy-Based Observable (Python __getattr__/__setattr__ pattern) ===\r\nfunction createObservable<T extends Record<string, unknown>>(target: T, onChange: (key: string, value: unknown) => void): T {\r\n  return new Proxy(target, {\r\n    get(obj, prop) {\r\n      if (prop === \"__isProxy\") return true;\r\n      return Reflect.get(obj, prop);\r\n    },\r\n    set(obj, prop, value) {\r\n      const old = obj[prop as string];\r\n      const result = Reflect.set(obj, prop, value);\r\n      if (old !== value) onChange(String(prop), value);\r\n      return result;\r\n    },\r\n  });\r\n}\r\nconst observed = createObservable({ x: 10, y: 20 }, (key, val) => console.log(`Changed: ${key} = ${val}`));\r\nobserved.x = 15; // \"Changed: x = 15\"\r\nobserved.y = 25; // \"Changed: y = 25\"\r\n\r\n// === Symbol.iterator Helper (Python __iter__ pattern) ===\r\nclass RangeIterator {\r\n  constructor(private start: number, private end: number, private step = 1) {}\r\n  *[Symbol.iterator](): Generator<number> {\r\n    for (let i = this.start; i < this.end; i += this.step) yield i;\r\n  }\r\n}\r\nconst r = new RangeIterator(1, 6, 2);\r\nconsole.log([...r]); // [1, 3, 5]\r\n\r\n// === toString Override Generator ===\r\nfunction autoToString<T extends Record<string, unknown>>(obj: T): string {\r\n  const entries = Object.entries(obj).map(([k, v]) => `${k}=${v}`).join(\", \");\r\n  return `${obj.constructor.name}(${entries})`;\r\n}\r\nclass User2 {\r\n  constructor(public name: string, public age: number) {}\r\n  toString(): string { return autoToString(this); }\r\n}\r\nconsole.log(new User2(\"Alice\", 30).toString()); // User2(name=Alice, age=30)\r\n\r\n// === ValueOf Equivalent ===\r\nclass Money {\r\n  constructor(private amount: number, private currency: string) {}\r\n  valueOf(): number { return this.amount; }\r\n  toString(): string { return `${this.amount} ${this.currency}`; }\r\n}\r\nconst m1 = new Money(10, \"USD\");\r\nconst m2 = new Money(5, \"USD\");\r\nconsole.log(m1.valueOf() + m2.valueOf()); // 15\r\n\r\n// === Python __getitem__ / __setitem__ via Proxy ===\r\nfunction createDictList<T>(items: T[] = []): { items: T[]; get(idx: number): T; set(idx: number, val: T): void; push(val: T): void } {\r\n  return {\r\n    items: [...items],\r\n    get(idx: number): T { return this.items[idx]; },\r\n    set(idx: number, val: T): void { if (idx < this.items.length) this.items[idx] = val; },\r\n    push(val: T): void { this.items.push(val); },\r\n  };\r\n}\r\nconst dl = createDictList<number>([1, 2, 3]);\r\nconsole.log(dl.get(1)); // 2\r\ndl.set(1, 99);\r\nconsole.log(dl.items);  // [1, 99, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-metaprogramming-with-proxy",
      children: "TypeScript Metaprogramming with Proxy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Property Access Logger (Python: __getattr__) ===\r\nfunction loggedObject<T extends object>(target: T): T {\r\n  return new Proxy(target, {\r\n    get(obj, prop) {\r\n      console.log(`Accessing ${String(prop)}`);\r\n      return Reflect.get(obj, prop);\r\n    },\r\n    set(obj, prop, value) {\r\n      console.log(`Setting ${String(prop)} = ${value}`);\r\n      return Reflect.set(obj, prop, value);\r\n    },\r\n  });\r\n}\r\n\r\n// === Negative Array Indexing (Python: arr[-1]) ===\r\nfunction negativeIndexArray<T>(arr: T[]): T[] {\r\n  return new Proxy(arr, {\r\n    get(target, prop) {\r\n      if (typeof prop === \"string\" && !isNaN(Number(prop))) {\r\n        const idx = Number(prop);\r\n        return idx < 0 ? target[target.length + idx] : target[idx];\r\n      }\r\n      return Reflect.get(target, prop);\r\n    },\r\n    set(target, prop, value) {\r\n      if (typeof prop === \"string\" && !isNaN(Number(prop))) {\r\n        const idx = Number(prop);\r\n        if (idx < 0) target[target.length + idx] = value as T;\r\n        else target[idx] = value as T;\r\n        return true;\r\n      }\r\n      return Reflect.set(target, prop, value);\r\n    },\r\n  });\r\n}\r\nconst arr = negativeIndexArray([10, 20, 30, 40, 50]);\r\nconsole.log(arr[-1]); // 50\r\nconsole.log(arr[-2]); // 40\r\n\r\n// === Method Missing Handler (Python: __getattr__ for methods) ===\r\nfunction dynamicMethods<T extends object>(target: T): T {\r\n  return new Proxy(target, {\r\n    get(obj, prop) {\r\n      if (prop in obj) return Reflect.get(obj, prop);\r\n      return (...args: unknown[]) => console.log(`Called dynamic method ${String(prop)}(${args.map(a => JSON.stringify(a)).join(\", \")})`);\r\n    },\r\n  });\r\n}\r\nconst dyn = dynamicMethods({ name: \"test\" });\r\nconsole.log(dyn.name); // \"test\"\r\n(dyn as any).unknownMethod(1, 2, 3); // \"Called dynamic method unknownMethod(1, 2, 3)\"\r\n\r\n// === Memoized Property (Python: @cached_property) ===\r\nfunction cachedProperty<T, K extends keyof T>(target: T, key: K, getter: () => T[K]): void {\r\n  let value: T[K] | undefined;\r\n  let initialized = false;\r\n  Object.defineProperty(target, key, {\r\n    get() {\r\n      if (!initialized) { value = getter(); initialized = true; }\r\n      return value;\r\n    },\r\n    configurable: true,\r\n    enumerable: true,\r\n  });\r\n}\r\n\r\n// === Auto-stringification (Python: __str__) ===\r\nfunction autoString<T extends object>(target: T): T {\r\n  return new Proxy(target, {\r\n    get(obj, prop) {\r\n      if (prop === \"toString\" || prop === Symbol.toPrimitive) {\r\n        return () => JSON.stringify(obj);\r\n      }\r\n      return Reflect.get(obj, prop);\r\n    },\r\n  });\r\n}\r\n\r\n// === Validation Proxy (Python: __setattr__ validation) ===\r\nfunction validatedObject<T extends object>(target: T, schema: Partial<Record<keyof T, (v: unknown) => boolean>>): T {\r\n  return new Proxy(target, {\r\n    set(obj, prop, value) {\r\n      const validator = schema[prop as keyof T];\r\n      if (validator && !validator(value)) throw new Error(`Invalid value for ${String(prop)}`);\r\n      return Reflect.set(obj, prop, value);\r\n    },\r\n  });\r\n}\r\n\r\n// === Default Values (Python: defaultdict pattern via __missing__) ===\r\nfunction withDefault<T extends object>(target: T, defaultFn: (key: string) => unknown): T {\r\n  return new Proxy(target, {\r\n    get(obj, prop) {\r\n      if (prop in obj) return Reflect.get(obj, prop);\r\n      const val = defaultFn(String(prop));\r\n      Reflect.set(obj, prop, val as any);\r\n      return val;\r\n    },\r\n  });\r\n}\r\n\r\n// === Read-only Wrapper ===\r\nfunction readonly<T extends object>(target: T): T {\r\n  return new Proxy(target, {\r\n    set: () => { throw new Error(\"Object is read-only\"); },\r\n    deleteProperty: () => { throw new Error(\"Object is read-only\"); },\r\n    defineProperty: () => { throw new Error(\"Object is read-only\"); },\r\n  });\r\n}\r\n\r\ninterface UserSchema { name: string; age: number; }\r\nconst user = validatedObject<UserSchema>({ name: \"Alice\", age: 30 }, {\r\n  age: (v) => typeof v === \"number\" && v >= 0 && v < 150,\r\n  name: (v) => typeof v === \"string\" && v.length > 0,\r\n});\r\nuser.age = 25; // OK\r\n// user.age = -5; // Throws Error\r\n\r\nconst defaults = withDefault({}, key => `default_${key}`);\r\nconsole.log((defaults as any).foo); // \"default_foo\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-proxy-based-magic-patterns",
      children: "TypeScript Proxy-based Magic Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Operator Overloading via Proxy ===\r\nfunction createOverloaded<T extends object>(target: T): T {\r\n  const handler: ProxyHandler<T> = {\r\n    get(target, prop, receiver) {\r\n      const val = Reflect.get(target, prop, receiver);\r\n      if (typeof val === \"function\") {\r\n        return function(...args: unknown[]) {\r\n          console.log(`[magic] ${String(prop)}(${args.map(a => JSON.stringify(a)).join(\", \")})`);\r\n          return val.apply(this, args);\r\n        };\r\n      }\r\n      return val;\r\n    },\r\n    set(target, prop, value) {\r\n      console.log(`[magic] set ${String(prop)} = ${JSON.stringify(value)}`);\r\n      return Reflect.set(target, prop, value);\r\n    },\r\n    has(target, prop) {\r\n      console.log(`[magic] contains ${String(prop)}`);\r\n      return prop in target;\r\n    },\r\n    deleteProperty(target, prop) {\r\n      console.log(`[magic] delete ${String(prop)}`);\r\n      return delete target[prop];\r\n    },\r\n    ownKeys(target) {\r\n      console.log(\"[magic] dir()\");\r\n      return Reflect.ownKeys(target);\r\n    },\r\n  };\r\n  return new Proxy(target, handler);\r\n}\r\nconst obj = createOverloaded({ x: 10, y: 20 });\r\n\"x\" in obj;           // logs: contains x\r\nobj.z = 30;           // logs: set z = 30\r\ndelete obj.y;         // logs: delete y\r\n\r\n// === Python-style __str__ / __repr__ via toString ===\r\nclass ReprMixin {\r\n  toString(): string { return `${this.constructor.name}(${JSON.stringify(this)})`; }\r\n  toJSON(): unknown { return { ...this, _type: this.constructor.name }; }\r\n}\r\n\r\n// === Python-style __len__, __getitem__ via Proxy ===\r\nfunction arrayLike<T>(items: T[]): T[] {\r\n  return new Proxy(items, {\r\n    get(target, prop) {\r\n      if (prop === \"__len__\") return target.length;\r\n      if (typeof prop === \"string\" && !isNaN(Number(prop))) {\r\n        const idx = Number(prop);\r\n        return idx < 0 ? target[target.length + idx] : target[idx];\r\n      }\r\n      return Reflect.get(target, prop);\r\n    },\r\n  });\r\n}\r\nconst seq = arrayLike([10, 20, 30, 40, 50]);\r\nconsole.log((seq as any)[\"-1\"]);  // 50 (Python-style negative index)\r\n\r\n// === Python-style __call__ via Proxy ===\r\nfunction makeCallable<T extends object>(obj: T, fn: (...args: unknown[]) => unknown): T {\r\n  const handler: ProxyHandler<T> = {\r\n    apply(target, thisArg, args) { return fn.apply(thisArg, args); },\r\n    get(target, prop) { return Reflect.get(target, prop); },\r\n  };\r\n  return new Proxy(obj, handler);\r\n}\r\n\r\n// === Python-style property descriptor via Object.defineProperty ===\r\nfunction defineProperty<T>(obj: T, key: keyof T, getter: () => unknown, setter?: (v: unknown) => void): void {\r\n  Object.defineProperty(obj, key, { get: getter, set: setter, enumerable: true, configurable: true });\r\n}\r\n\r\n// === Python-style __iter__ / __next__ ===\r\nclass Iterable<T> implements Iterable<T> {\r\n  constructor(private items: T[]) {}\r\n  [Symbol.iterator](): Iterator<T> {\r\n    let idx = 0;\r\n    const items = this.items;\r\n    return { next: () => ({ value: items[idx], done: idx++ >= items.length }) };\r\n  }\r\n}\r\nfor (const item of new Iterable([1, 2, 3])) console.log(item);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Magic methods hook into Python's built-in behaviours:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Methods"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Representation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__repr__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__str__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__format__"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__eq__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__hash__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__lt__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__le__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__gt__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__ge__"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__getitem__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__setitem__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__delitem__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__contains__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__len__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__bool__"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__call__"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Context manager"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__enter__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__exit__"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__iter__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__next__"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__add__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__sub__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__mul__"
            }), ", etc."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript doesn't have magic methods in the same sense, but has equivalents for several protocols:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// toString / toJSON (equivalent to __str__ / __repr__)\r\nclass Point {\r\n  constructor(public x: number, public y: number) {}\r\n\r\n  toString(): string {\r\n    return `Point(${this.x}, ${this.y})`;\r\n  }\r\n\r\n  toJSON(): object {\r\n    return { x: this.x, y: this.y, type: \"Point\" };\r\n  }\r\n}\r\n\r\n// ValueOf for primitive coercion\r\nclass Money {\r\n  constructor(public amount: number, public currency: string) {}\r\n\r\n  valueOf(): number {\r\n    return this.amount;\r\n  }\r\n}\r\nconst price = new Money(29.99, \"USD\");\r\nconsole.log(price + 10);  // 39.99 (uses valueOf)\r\n\r\n// Symbol.iterator for iteration (like __iter__)\r\nclass Range implements Iterable<number> {\r\n  constructor(private start: number, private end: number) {}\r\n\r\n  [Symbol.iterator](): Iterator<number> {\r\n    let current = this.start;\r\n    return {\r\n      next: (): IteratorResult<number> => {\r\n        if (current > this.end) return { done: true, value: undefined as any };\r\n        return { done: false, value: current++ };\r\n      }\r\n    };\r\n  }\r\n}\r\nfor (const n of new Range(1, 5)) console.log(n);  // 1, 2, 3, 4, 5\r\n\r\n// Custom getter/setter (like __getitem__ / __setitem__)\r\nclass FixedArray<T> {\r\n  private data: T[] = [];\r\n\r\n  constructor(private capacity: number) {}\r\n\r\n  get(index: number): T | undefined {\r\n    if (index < 0 || index >= this.capacity) throw new Error(\"Index out of bounds\");\r\n    return this.data[index];\r\n  }\r\n\r\n  set(index: number, value: T): void {\r\n    if (index < 0 || index >= this.capacity) throw new Error(\"Index out of bounds\");\r\n    this.data[index] = value;\r\n  }\r\n\r\n  get length(): number {\r\n    return this.capacity;\r\n  }\r\n}\r\n\r\n// Symbol.toPrimitive (like __int__ / __float__)\r\nclass Vector2D {\r\n  constructor(public x: number, public y: number) {}\r\n\r\n  [Symbol.toPrimitive](hint: string): number | string {\r\n    if (hint === \"number\") return Math.sqrt(this.x ** 2 + this.y ** 2);\r\n    return `(${this.x}, ${this.y})`;\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-magic-methods-vs-typescript-equivalents",
      children: "Python Magic Methods vs TypeScript Equivalents"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__str__"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__repr__"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toString()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__iter__"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__next__"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[Symbol.iterator]()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iteration protocol"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__getitem__"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__setitem__"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "get()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set()"
            }), " methods"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__len__"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "get length()"
            }), " property"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size query"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__enter__"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__exit__"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "using"
            }), " (TS 5.2+) / try-finally"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__call__"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "() =>"
            }), " function type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callable objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__eq__"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "equals()"
            }), " method or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "==="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__add__"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["method like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "add()"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), " overload"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why should ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__hash__"
        }), " be defined when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__eq__"
        }), " is overridden?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__str__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__repr__"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__enter__"
        }), " communicate its return value to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "as"
        }), " variable?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What must ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__exit__"
        }), " return to suppress an exception?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@total_ordering"
        }), " and what does it generate?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Matrix2D"
        }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__add__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__sub__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__mul__"
        }), " (scalar and matrix multiplication), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__repr__"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__eq__"
        }), ". Support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__getitem__"
        }), " with tuple keys: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "m[(row, col)]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Timer"
        }), " context manager using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__enter__"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__exit__"
        }), " that measures elapsed time. Print the duration when the block exits. Then reimplement it with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@contextmanager"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FixedArray"
        }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__len__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__getitem__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__setitem__"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__iter__"
        }), ". It should have a fixed capacity set at construction time. Raise ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IndexError"
        }), " for out-of-bounds access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a simple SQL query builder using magic methods. Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Query"
      }), " class that supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__and__"
      }), " (WHERE clause conjunction), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__or__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), " (field comparison), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__call__"
      }), " (execution). Define a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Field"
      }), " descriptor class with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__lt__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__gt__"
      }), " that produces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Comparison"
      }), " objects. Chain them: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Query().select(\"name\", \"age\").where((Field(\"age\") >= 18) & (Field(\"name\").contains(\"Al\")))"
      }), ". Generate a SQL string."]
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