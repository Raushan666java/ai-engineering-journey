"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8808],{

/***/ 4242
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_13_inheritance_md_672_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-13-inheritance-md-672.json
const site_docs_courses_python_programming_13_inheritance_md_672_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/13-inheritance","title":"Chapter 13: Inheritance and Protocols","description":"Previous Magic Methods and Operator Overloading","source":"@site/docs/courses/python-programming/13-inheritance.md","sourceDirName":"courses/python-programming","slug":"/python-programming/13-inheritance","permalink":"/ai-engineering-journey/python-programming/13-inheritance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-inheritance","slug":"/python-programming/13-inheritance","title":"Chapter 13: Inheritance and Protocols","sidebar_label":"Chapter 13: Inheritance and Protocols","sidebar_position":13},"sidebar":"course-python-programming","previous":{"title":"Chapter 12: Object-Oriented Programming","permalink":"/ai-engineering-journey/python-programming/12-oop"},"next":{"title":"Chapter 14: Magic Methods","permalink":"/ai-engineering-journey/python-programming/14-magic-methods"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/13-inheritance.md


const frontMatter = {
	id: '13-inheritance',
	slug: '/python-programming/13-inheritance',
	title: 'Chapter 13: Inheritance and Protocols',
	sidebar_label: 'Chapter 13: Inheritance and Protocols',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Inheritance and Protocols';

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
  "value": "13.1 Basic Inheritance",
  "id": "131-basic-inheritance",
  "level": 2
}, {
  "value": "13.2 super()",
  "id": "132-super",
  "level": 2
}, {
  "value": "13.3 Method Resolution Order (MRO)",
  "id": "133-method-resolution-order-mro",
  "level": 2
}, {
  "value": "13.4 Multiple Inheritance",
  "id": "134-multiple-inheritance",
  "level": 2
}, {
  "value": "13.5 Mixins",
  "id": "135-mixins",
  "level": 2
}, {
  "value": "13.6 Abstract Base Classes (ABCs)",
  "id": "136-abstract-base-classes-abcs",
  "level": 2
}, {
  "value": "13.6.1 Abstract Properties",
  "id": "1361-abstract-properties",
  "level": 3
}, {
  "value": "13.6.2 Virtual Subclasses",
  "id": "1362-virtual-subclasses",
  "level": 3
}, {
  "value": "13.7 isinstance and issubclass",
  "id": "137-isinstance-and-issubclass",
  "level": 2
}, {
  "value": "13.8 Structural Subtyping (Protocols)",
  "id": "138-structural-subtyping-protocols",
  "level": 2
}, {
  "value": "13.9 Composition over Inheritance",
  "id": "139-composition-over-inheritance",
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
  "value": "Python vs TypeScript Inheritance",
  "id": "python-vs-typescript-inheritance",
  "level": 3
}, {
  "value": "TypeScript Advanced Inheritance &amp; Composition Patterns",
  "id": "typescript-advanced-inheritance--composition-patterns",
  "level": 3
}, {
  "value": "TypeScript Generic Constraints &amp; Mixin Patterns",
  "id": "typescript-generic-constraints--mixin-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Inheritance &amp; Composition Patterns",
  "id": "typescript-inheritance--composition-patterns",
  "level": 3
}, {
  "value": "TypeScript Advanced Type Relationships",
  "id": "typescript-advanced-type-relationships",
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
        id: "chapter-13-inheritance-and-protocols",
        children: "Chapter 13: Inheritance and Protocols"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/12-oop",
          children: "Object-Oriented Programming"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/14-magic-methods",
          children: "Magic Methods and Operator Overloading"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create class hierarchies using inheritance"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super()"
        }), " to delegate to parent classes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand MRO and C3 linearization for multiple inheritance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply mixin classes for reusable behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define abstract base classes and enforce interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use structural subtyping (protocols) for duck typing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/13-inheritance.png",
        alt: "Inheritance and Protocols"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "13.1 Basic Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inheritance creates an \"is-a\" relationship; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "super()"
            }), " delegates to the next class in MRO."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.2 super()"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "MRO (C3 linearization) determines method lookup order: child before parent, base-order preserved."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.3 Method Resolution Order (MRO)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mixins provide focused, reusable behaviour and should avoid ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.4 Multiple Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ABCs enforce interface contracts via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@abstractmethod"
            }), " — cannot be instantiated directly."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.5 Mixins"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocols (PEP 544) provide structural subtyping: any object with the right methods satisfies the protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.6 Abstract Base Classes (ABCs)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.7 isinstance and issubclass"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.8 Structural Subtyping (Protocols)"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13.9 Composition over Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S0[Basic Inheritance]\r\n    S1[\"super()\"]\r\n    S2[\"Method Resolution Order (MRO)\"]\r\n    S3[Multiple Inheritance]\r\n    S4[Mixins]\r\n    S5[\"Abstract Base Classes (ABCs)\"]\r\n    S6[isinstance and issubclass]\r\n    S7[\"Structural Subtyping (Protocols)\"]\r\n    S8[Composition over Inheritance]\r\n    S0 --> S1\r\n    S1 --> S2\r\n    S2 --> S3\r\n    S3 --> S4\r\n    S4 --> S5\r\n    S5 --> S6\r\n    S6 --> S7\r\n    S7 --> S8"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-basic-inheritance",
      children: "13.1 Basic Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Inheritance creates an \"is-a\" relationship; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super()"
        }), " delegates to the next class in MRO."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A subclass inherits all attributes and methods from its parent:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Animal:\r\n    def __init__(self, name: str):\r\n        self.name = name\r\n    \r\n    def speak(self) -> str:\r\n        return \"...\"\r\n    \r\n    def move(self) -> str:\r\n        return f\"{self.name} moves\"\r\n\r\nclass Dog(Animal):\r\n    def speak(self) -> str:\r\n        return \"Woof!\"\r\n\r\nclass Cat(Animal):\r\n    def speak(self) -> str:\r\n        return \"Meow!\"\r\n\r\nanimals = [Dog(\"Buddy\"), Cat(\"Whiskers\"), Animal(\"Generic\")]\r\nfor a in animals:\r\n    print(f\"{a.name}: {a.speak()}\")\r\n# Buddy: Woof!\r\n# Whiskers: Meow!\r\n# Generic: ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-super",
      children: "13.2 super()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " MRO (C3 linearization) determines method lookup order: child before parent, base-order preserved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "super()"
      }), " delegates method calls to the parent class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Vehicle:\r\n    def __init__(self, brand: str, model: str):\r\n        self.brand = brand\r\n        self.model = model\r\n    \r\n    def description(self) -> str:\r\n        return f\"{self.brand} {self.model}\"\r\n\r\nclass Car(Vehicle):\r\n    def __init__(self, brand: str, model: str, doors: int):\r\n        super().__init__(brand, model)  # call parent constructor\r\n        self.doors = doors\r\n    \r\n    def description(self) -> str:\r\n        return f\"{super().description()} ({self.doors} doors)\"\r\n\r\ncar = Car(\"Toyota\", \"Camry\", 4)\r\nprint(car.description())  # Toyota Camry (4 doors)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "super()"
      }), " works even in multiple inheritance, following the MRO (discussed below)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-method-resolution-order-mro",
      children: "13.3 Method Resolution Order (MRO)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Mixins provide focused, reusable behaviour and should avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MRO determines the order in which classes are searched for methods. Python uses the C3 linearization algorithm:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class A:\r\n    def method(self): return \"A\"\r\n\r\nclass B(A):\r\n    def method(self): return \"B\"\r\n\r\nclass C(A):\r\n    def method(self): return \"C\"\r\n\r\nclass D(B, C):\r\n    pass\r\n\r\nd = D()\r\nprint(d.method())  # B\r\nprint(D.__mro__)\r\n# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The MRO for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "D(B, C)"
      }), " is computed as: D → B → C → A → object. Python uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mro()"
      }), " to inspect:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "for cls in D.__mro__:\r\n    print(cls.__name__, end=\" -> \")\r\n# D -> B -> C -> A -> object ->\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C3 linearization ensures:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A subclass is always checked before its parent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The order of base classes in the class definition is preserved."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency is maintained (no contradictory ordering)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-multiple-inheritance",
      children: "13.4 Multiple Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ABCs enforce interface contracts via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@abstractmethod"
        }), " — cannot be instantiated directly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python supports multiple inheritance directly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Flyer:\r\n    def fly(self) -> str:\r\n        return \"Flying\"\r\n    \r\n    def move(self) -> str:\r\n        return \"Flying through the air\"\r\n\r\nclass Swimmer:\r\n    def swim(self) -> str:\r\n        return \"Swimming\"\r\n    \r\n    def move(self) -> str:\r\n        return \"Swimming through water\"\r\n\r\nclass Duck(Flyer, Swimmer):\r\n    def move(self) -> str:\r\n        return \"Walking on land\"\r\n\r\nduck = Duck()\r\nprint(duck.fly())     # Flying\r\nprint(duck.swim())    # Swimming\r\nprint(duck.move())    # Walking on land  (own method wins)\r\n\r\nclass Penguin(Swimmer, Flyer):\r\n    pass\r\n\r\npenguin = Penguin()\r\nprint(penguin.move())  # Swimming through water (Swimmer first in MRO)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-mixins",
      children: "13.5 Mixins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Protocols (PEP 544) provide structural subtyping: any object with the right methods satisfies the protocol."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mixins are small classes that provide reusable behaviour without defining a complete interface:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class JSONMixin:\r\n    def to_json(self) -> str:\r\n        import json\r\n        return json.dumps(self.__dict__)\r\n    \r\n    @classmethod\r\n    def from_json(cls, json_str: str):\r\n        import json\r\n        data = json.loads(json_str)\r\n        return cls(**data)\r\n\r\nclass LogMixin:\r\n    def log(self, message: str) -> None:\r\n        print(f\"[{self.__class__.__name__}] {message}\")\r\n\r\nclass User(JSONMixin, LogMixin):\r\n    def __init__(self, name: str, email: str):\r\n        self.name = name\r\n        self.email = email\r\n\r\nuser = User(\"Alice\", \"alice@example.com\")\r\nprint(user.to_json())        # {\"name\": \"Alice\", \"email\": \"alice@example.com\"}\r\nuser.log(\"User created\")     # [User] User created\r\n\r\n# Reconstruct from JSON\r\nuser2 = User.from_json('{\"name\": \"Bob\", \"email\": \"bob@example.com\"}')\r\nprint(user2.name)            # Bob\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mixins should:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Not contain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__"
        }), " (or call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super().__init__()"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Be narrowly focused on one behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have names ending in \"Mixin\" or describing the behaviour"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-abstract-base-classes-abcs",
      children: "13.6 Abstract Base Classes (ABCs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ABCs define interfaces that subclasses must implement:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\r\n\r\nclass Shape(ABC):\r\n    @abstractmethod\r\n    def area(self) -> float:\r\n        pass\r\n    \r\n    @abstractmethod\r\n    def perimeter(self) -> float:\r\n        pass\r\n    \r\n    def description(self) -> str:\r\n        return f\"{self.__class__.__name__} (area={self.area():.2f})\"\r\n\r\nclass Circle(Shape):\r\n    def __init__(self, radius: float):\r\n        self.radius = radius\r\n    \r\n    def area(self) -> float:\r\n        import math\r\n        return math.pi * self.radius ** 2\r\n    \r\n    def perimeter(self) -> float:\r\n        import math\r\n        return 2 * math.pi * self.radius\r\n\r\nclass Rectangle(Shape):\r\n    def __init__(self, width: float, height: float):\r\n        self.width = width\r\n        self.height = height\r\n    \r\n    def area(self) -> float:\r\n        return self.width * self.height\r\n    \r\n    def perimeter(self) -> float:\r\n        return 2 * (self.width + self.height)\r\n\r\n# shape = Shape()  # TypeError → can't instantiate abstract class\r\ncircle = Circle(5)\r\nprint(circle.description())  # Circle (area=78.54)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1361-abstract-properties",
      children: "13.6.1 Abstract Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class DataSource(ABC):\r\n    @property\r\n    @abstractmethod\r\n    def connection_string(self) -> str:\r\n        pass\r\n\r\nclass PostgresSource(DataSource):\r\n    @property\r\n    def connection_string(self) -> str:\r\n        return \"postgresql://localhost:5432/db\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1362-virtual-subclasses",
      children: "13.6.2 Virtual Subclasses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ABCs can register unrelated classes as virtual subclasses using ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".register()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections.abc import Sequence\r\n\r\nclass MyList:\r\n    def __init__(self, items):\r\n        self._items = items\r\n    \r\n    def __getitem__(self, index):\r\n        return self._items[index]\r\n    \r\n    def __len__(self):\r\n        return len(self._items)\r\n\r\nSequence.register(MyList)\r\n\r\nml = MyList([1, 2, 3])\r\nprint(isinstance(ml, Sequence))  # True\r\nprint(issubclass(MyList, Sequence))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-isinstance-and-issubclass",
      children: "13.7 isinstance and issubclass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Animal: pass\r\nclass Dog(Animal): pass\r\n\r\nd = Dog()\r\nprint(isinstance(d, Dog))       # True\r\nprint(isinstance(d, Animal))    # True\r\nprint(isinstance(d, object))    # True (everything is an object)\r\nprint(issubclass(Dog, Animal))  # True\r\nprint(issubclass(Dog, object))  # True\r\nprint(issubclass(bool, int))    # True (bool is a subclass of int)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-structural-subtyping-protocols",
      children: "13.8 Structural Subtyping (Protocols)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PEP 544 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Protocol"
      }), " in Python 3.8 for structural subtyping (static duck typing):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Protocol\r\n\r\nclass Drawable(Protocol):\r\n    def draw(self) -> str:\r\n        ...\r\n\r\nclass Circle:\r\n    def draw(self) -> str:\r\n        return \"Drawing circle\"\r\n\r\nclass Square:\r\n    def draw(self) -> str:\r\n        return \"Drawing square\"\r\n    \r\n    def extra_method(self):\r\n        pass  # extra methods don't break the protocol\r\n\r\ndef render(obj: Drawable) -> None:\r\n    print(obj.draw())\r\n\r\nrender(Circle())  # Drawing circle\r\nrender(Square())  # Drawing square\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Protocols check that an object has the required methods with compatible signatures at static type-checking time. At runtime, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isinstance"
      }), " checks with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@runtime_checkable"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Protocol, runtime_checkable\r\n\r\n@runtime_checkable\r\nclass Named(Protocol):\r\n    name: str\r\n\r\nclass Person:\r\n    def __init__(self):\r\n        self.name = \"Alice\"\r\n\r\nprint(isinstance(Person(), Named))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Protocols enable duck typing with static safety → objects satisfy a protocol if they have the right methods, regardless of inheritance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "139-composition-over-inheritance",
      children: "13.9 Composition over Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Favour composition over inheritance — it allows different implementations to be injected without changing the class hierarchy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prefer composition over inheritance for code reuse:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Inheritance (less flexible)\r\nclass Logger:\r\n    def log(self, msg): print(msg)\r\n\r\nclass App(Logger):\r\n    def run(self):\r\n        self.log(\"App started\")\r\n\r\n# Composition (more flexible)\r\nclass Logger:\r\n    def log(self, msg): print(msg)\r\n\r\nclass App:\r\n    def __init__(self, logger: Logger):\r\n        self.logger = logger\r\n    \r\n    def run(self):\r\n        self.logger.log(\"App started\")\r\n\r\napp = App(Logger())\r\napp.run()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Composition allows different logger implementations (file, database, cloud) to be injected without changing the class hierarchy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flexibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isinstance checks class tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigid hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ABC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isinstance checks ABC tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforced interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static type checker only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duck typing with safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime via injected object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum flexibility"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Animal:\r\n    def speak(self): return \"...\"\r\nclass Dog(Animal):\r\n    def speak(self): return \"Woof!\"\r\n\r\nfor a in [Dog(), Animal()]:\r\n    print(a.speak())\n"
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
            children: "Class-based views inheriting from generic views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom transformers inheriting sklearn base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin systems with ABC interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixin-based logging/timestamp behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What does super() do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "creates a new instance"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["delegates to parent in MRO ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["calls ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), " only"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "returns the class name"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What algorithm does Python use for MRO?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DFS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BFS"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C3 linearization ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topological sort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is a mixin?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a base class with abstract methods"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a focused reusable behaviour class ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a protocol interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a composition pattern"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What prevents ABC instantiation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@abstractmethod ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@staticmethod"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Composition is preferred over inheritance because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "it is faster"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["it is more flexible ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "it uses less memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "it is simpler"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript supports inheritance with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extends"
      }), " and interfaces for contract enforcement:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Base class\r\nabstract class Shape3D {\r\n  constructor(protected name: string) {}\r\n\r\n  abstract volume(): number;       // like @abstractmethod\r\n  abstract surfaceArea(): number;  // like @abstractmethod\r\n\r\n  describe(): string {\r\n    return `${this.name}: volume=${this.volume()}, area=${this.surfaceArea()}`;\r\n  }\r\n}\r\n\r\n// Single inheritance with extends\r\nclass Sphere extends Shape3D {\r\n  constructor(name: string, public radius: number) {\r\n    super(name);\r\n  }\r\n\r\n  volume(): number {\r\n    return (4 / 3) * Math.PI * this.radius ** 3;\r\n  }\r\n\r\n  surfaceArea(): number {\r\n    return 4 * Math.PI * this.radius ** 2;\r\n  }\r\n}\r\n\r\n// Mixin pattern in TypeScript (using interfaces)\r\ninterface TimestampMixin {\r\n  createdAt: Date;\r\n  updatedAt: Date;\r\n}\r\n\r\n// Apply mixin via class expression\r\nfunction applyTimestamp<TBase extends new (...args: any[]) => object>(\r\n  Base: TBase\r\n) {\r\n  return class extends Base implements TimestampMixin {\r\n    createdAt = new Date();\r\n    updatedAt = new Date();\r\n\r\n    touch(): void {\r\n      this.updatedAt = new Date();\r\n    }\r\n  };\r\n}\r\n\r\nclass Note {\r\n  constructor(public content: string) {}\r\n}\r\n\r\nconst TimestampedNote = applyTimestamp(Note);\r\nconst note = new TimestampedNote(\"Hello\");\r\nconsole.log(note.createdAt);  // Date object\r\n\r\n// Interface-based contract (like Protocol)\r\ninterface Playable {\r\n  play(): void;\r\n  duration: number;\r\n}\r\n\r\nclass MusicTrack implements Playable {\r\n  duration: number;\r\n  constructor(public title: string, duration: number) {\r\n    this.duration = duration;\r\n  }\r\n  play(): void {\r\n    console.log(`Playing ${this.title}`);\r\n  }\r\n}\r\n\r\nfunction playAll(items: Playable[]): void {\r\n  items.forEach(item => item.play());\r\n  // TypeScript guarantees type safety at compile time\r\n  // Python Protocol checks at runtime with isinstance()\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-inheritance",
      children: "Python vs TypeScript Inheritance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Base class call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "super().__init__()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "super()"
            }), " or omit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract method"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ABC"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@abstractmethod"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "abstract"
            }), " keyword + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "abstract class"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use mixins or interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interface"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Protocol"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ABC"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "interface"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "abstract class"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Method override"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Automatic (explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            }), " keyword optional)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "super() in MRO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C3 linearization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single chain (no multiple inheritance)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-inheritance--composition-patterns",
      children: "TypeScript Advanced Inheritance & Composition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: diamond problem (MRO) → TypeScript: no multiple inheritance\r\n// but mixins via interface merging\r\ninterface Loggable {\r\n  log(message: string): void;\r\n}\r\n\r\ninterface Timestamped {\r\n  readonly createdAt: Date;\r\n}\r\n\r\n// TypeScript: implements multiple interfaces (not multiple classes)\r\nclass Entity implements Loggable, Timestamped {\r\n  readonly createdAt: Date = new Date();\r\n  log(message: string): void {\r\n    console.log(`[${this.createdAt.toISOString()}] ${message}`);\r\n  }\r\n}\r\n\r\n// Python: super().__init__() → TypeScript: super()\r\nclass Animal {\r\n  constructor(public name: string) {}\r\n  speak(): void { console.log(\"...\"); }\r\n}\r\n\r\nclass Dog extends Animal {\r\n  constructor(name: string, public breed: string) {\r\n    super(name);  // Equivalent: super().__init__(name)\r\n  }\r\n  override speak(): void {\r\n    console.log(`${this.name} barks!`);\r\n  }\r\n}\r\n\r\n// Python: abstractmethod → TypeScript: abstract class\r\nabstract class Shape {\r\n  abstract area(): number;\r\n  abstract perimeter(): number;\r\n  description(): string {\r\n    return `${this.constructor.name} with area ${this.area()}`;\r\n  }\r\n}\r\n\r\nclass Circle extends Shape {\r\n  constructor(public radius: number) { super(); }\r\n  area(): number { return Math.PI * this.radius ** 2; }\r\n  perimeter(): number { return 2 * Math.PI * this.radius; }\r\n}\r\n\r\n// Python: Protocol → TypeScript: interface\r\ninterface Flyable {\r\n  fly(): void;\r\n}\r\nclass Bird implements Flyable {\r\n  fly(): void { console.log(\"Flapping wings\"); }\r\n}\r\nclass Airplane implements Flyable {\r\n  fly(): void { console.log(\"Jet engines\"); }\r\n}\r\n// Both satisfy Flyable without extending a common base\r\n\r\n// Python: composition over inheritance\r\nclass Engine {\r\n  start(): void { console.log(\"Engine started\"); }\r\n}\r\nclass Car {\r\n  private engine = new Engine();  // composition\r\n  start(): void { this.engine.start(); }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-generic-constraints--mixin-patterns",
      children: "TypeScript Generic Constraints & Mixin Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: generic types → TypeScript: generics with constraints\r\ninterface HasId {\r\n  id: number;\r\n}\r\nclass Repository<T extends HasId> {\r\n  private items: Map<number, T> = new Map();\r\n  save(item: T): void { this.items.set(item.id, item); }\r\n  findById(id: number): T | undefined { return this.items.get(id); }\r\n  delete(id: number): boolean { return this.items.delete(id); }\r\n  findAll(): T[] { return [...this.items.values()]; }\r\n}\r\n\r\n// Python: Mixin pattern → TypeScript: mixin function\r\ntype GConstructor<T = {}> = new (...args: any[]) => T;\r\nfunction Timestamped<TBase extends GConstructor>(Base: TBase) {\r\n  return class extends Base {\r\n    readonly createdAt = new Date();\r\n    get age(): number {\r\n      return Date.now() - this.createdAt.getTime();\r\n    }\r\n  };\r\n}\r\nclass BasicEntity {\r\n  constructor(public id: number) {}\r\n}\r\nconst TimestampedEntity = Timestamped(BasicEntity);\r\nconst entity = new TimestampedEntity(1);\r\nconsole.log(entity.createdAt);  // current date/time\r\n\r\n// Python: Protocol → TypeScript: structural typing\r\ninterface Drawable {\r\n  draw(): void;\r\n}\r\nclass Canvas {\r\n  render(...shapes: Drawable[]): void {\r\n    shapes.forEach((s) => s.draw());  // any Drawable works\r\n  }\r\n}\r\n\r\n// Python: isinstance check with ABC → TypeScript: instanceof\r\nfunction handle(shape: unknown): void {\r\n  if (shape instanceof Circle) {\r\n    console.log(`Circle with radius ${shape.radius}`);\r\n  } else if (shape instanceof Rectangle) {\r\n    console.log(`Rectangle ${shape.width}x${shape.height}`);\r\n  }\r\n}\r\n\r\n// Python: MRO (C3 linearization) → TypeScript: chain of super() calls\r\n// TypeScript: single inheritance chain — no MRO complexities\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Diamond Problem Detector ===\r\ninterface InheritanceNode {\r\n  name: string;\r\n  parents: string[];\r\n}\r\nfunction detectDiamond(graph: InheritanceNode[]): string[][] {\r\n  const diamonds: string[][] = [];\r\n  const nameMap = new Map(graph.map((n) => [n.name, n]));\r\n  for (const node of graph) {\r\n    if (node.parents.length < 2) continue;\r\n    for (let i = 0; i < node.parents.length; i++) {\r\n      for (let j = i + 1; j < node.parents.length; j++) {\r\n        const ancestorsI = allAncestors(node.parents[i], nameMap);\r\n        const ancestorsJ = allAncestors(node.parents[j], nameMap);\r\n        const shared = ancestorsI.filter((a) => ancestorsJ.includes(a));\r\n        for (const s of shared) diamonds.push([node.name, node.parents[i], node.parents[j], s]);\r\n      }\r\n    }\r\n  }\r\n  return diamonds;\r\n}\r\nfunction allAncestors(name: string, map: Map<string, InheritanceNode>): string[] {\r\n  const result: string[] = [];\r\n  const queue = [name];\r\n  while (queue.length > 0) {\r\n    const current = queue.shift()!;\r\n    if (current !== name) result.push(current);\r\n    const node = map.get(current);\r\n    if (node) queue.push(...node.parents);\r\n  }\r\n  return result;\r\n}\r\nconsole.log(detectDiamond([\r\n  { name: \"D\", parents: [\"B\", \"C\"] },\r\n  { name: \"B\", parents: [\"A\"] },\r\n  { name: \"C\", parents: [\"A\"] },\r\n]));\r\n\r\n// === Abstract Class Implementer ===\r\nabstract class AbstractTemplate {\r\n  abstract step1(): void;\r\n  abstract step2(): void;\r\n  execute(): void { this.step1(); this.step2(); }\r\n}\r\nclass ConcreteImpl extends AbstractTemplate {\r\n  step1(): void { console.log(\"Step 1 done\"); }\r\n  step2(): void { console.log(\"Step 2 done\"); }\r\n}\r\nnew ConcreteImpl().execute();\r\n\r\n// === Mixin Combiner ===\r\ntype Ctor<T = {}> = new (...args: any[]) => T;\r\nfunction Timestamped2<TBase extends Ctor>(Base: TBase) {\r\n  return class extends Base { createdAt = new Date(); updatedAt = new Date(); };\r\n}\r\nfunction Named2<TBase extends Ctor>(Base: TBase) {\r\n  return class extends Base { name = \"Unnamed\"; setName(n: string): void { this.name = n; } };\r\n}\r\nclass Empty {}\r\nconst TimestampedNamed = Timestamped2(Named2(Empty));\r\nconst obj = new TimestampedNamed();\r\nconsole.log(obj.createdAt, obj.name);\r\n\r\n// === Instanceof Pattern (Python isinstance equivalent) ===\r\nclass Animal {}\r\nclass Dog extends Animal { bark(): string { return \"Woof!\"; } }\r\nclass Cat extends Animal { meow(): string { return \"Meow!\"; } }\r\nfunction handleAnimal(a: Animal): string {\r\n  if (a instanceof Dog) return a.bark();\r\n  if (a instanceof Cat) return a.meow();\r\n  return \"Unknown animal\";\r\n}\r\nconsole.log(handleAnimal(new Dog()));   // Woof!\r\nconsole.log(handleAnimal(new Cat()));   // Meow!\r\n\r\n// === Property Override Check ===\r\nclass Shape { readonly kind = \"shape\"; }\r\nclass Circle2 extends Shape { readonly kind = \"circle\"; }\r\nconsole.log(new Circle2().kind); // \"circle\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-inheritance--composition-patterns",
      children: "TypeScript Inheritance & Composition Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Class Inheritance (Python: class Child(Parent)) ===\r\nclass Animal {\r\n  constructor(public name: string) {}\r\n  speak(): string { return `${this.name} makes a sound`; }\r\n}\r\nclass Dog extends Animal {\r\n  constructor(name: string, public breed: string) {\r\n    super(name); // Python: super().__init__(name)\r\n  }\r\n  speak(): string { return `${this.name} barks`; }  // Override\r\n  fetch(): string { return `${this.name} fetches`; }\r\n}\r\nconst dog = new Dog(\"Rex\", \"Labrador\");\r\nconsole.log(dog.speak());   // Rex barks\r\nconsole.log(dog.fetch());   // Rex fetches\r\n\r\n// === Method Override with super ===\r\nclass BaseLogger {\r\n  log(level: string, msg: string): void { console.log(`[${level}] ${msg}`); }\r\n}\r\nclass DetailedLogger extends BaseLogger {\r\n  log(level: string, msg: string): void {\r\n    super.log(level, msg); // Python: super().log(level, msg)\r\n    console.log(`Timestamp: ${new Date().toISOString()}`);\r\n  }\r\n}\r\n\r\n// === Protected Members ===\r\nclass Vehicle {\r\n  constructor(protected speed: number) {}\r\n  accelerate(amount: number): void { this.speed += amount; }\r\n}\r\nclass Car extends Vehicle {\r\n  constructor(speed: number, private fuel: number) { super(speed); }\r\n  boost(): void {\r\n    super.accelerate(50); // Access parent method\r\n    this.fuel -= 10;      // Access own member\r\n  }\r\n  getSpeed(): number { return this.speed; } // Access protected member\r\n}\r\n\r\n// === Composition over Inheritance ===\r\ninterface Engine { start(): string; stop(): string; }\r\nclass ElectricEngine implements Engine {\r\n  start(): string { return \"Electric motor whirring\"; }\r\n  stop(): string { return \"Motor silent\"; }\r\n}\r\nclass CombustionEngine implements Engine {\r\n  start(): string { return \"Engine roaring\"; }\r\n  stop(): string { return \"Engine sputtering\"; }\r\n}\r\nclass Car2 {\r\n  constructor(private engine: Engine, private model: string) {}\r\n  start(): string { return `${this.model}: ${this.engine.start()}`; }\r\n  stop(): string { return `${this.model}: ${this.engine.stop()}`; }\r\n}\r\nconst ev = new Car2(new ElectricEngine(), \"Tesla\");\r\nconsole.log(ev.start());\r\n\r\n// === Mixins (Python: multiple inheritance) ===\r\ntype Constructor<T = {}> = new (...args: any[]) => T;\r\nfunction Timestamped<T extends Constructor>(Base: T) {\r\n  return class extends Base {\r\n    timestamp = new Date();\r\n    getAge(): number { return Date.now() - this.timestamp.getTime(); }\r\n  };\r\n}\r\nfunction Loggable<T extends Constructor>(Base: T) {\r\n  return class extends Base {\r\n    log(msg: string): void { console.log(`[${new Date().toISOString()}] ${msg}`); }\r\n  };\r\n}\r\nclass SimpleService { constructor(public name: string) {} }\r\nconst EnhancedService = Timestamped(Loggable(SimpleService));\r\nconst service = new EnhancedService(\"MyApp\");\r\nservice.log(\"Service started\");\r\n\r\n// === Interface Extension ===\r\ninterface Basic { name: string; }\r\ninterface Detailed extends Basic { age: number; email?: string; }\r\nconst user: Detailed = { name: \"Alice\", age: 30 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-type-relationships",
      children: "TypeScript Advanced Type Relationships"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === F-bounded Polymorphism (Python: Self) ===\r\ninterface Comparable<T> { compareTo(other: T): number; }\r\nclass NumericValue implements Comparable<NumericValue> {\r\n  constructor(public value: number) {}\r\n  compareTo(other: NumericValue): number { return this.value - other.value; }\r\n}\r\n\r\n// === Visitor Pattern (Python: singledispatch alternative) ===\r\ninterface Visitable { accept(visitor: Visitor): string; }\r\ninterface Visitor {\r\n  visitCircle(c: Circle2): string;\r\n  visitSquare(s: Square2): string;\r\n}\r\nclass Circle2 implements Visitable {\r\n  constructor(public radius: number) {}\r\n  accept(visitor: Visitor): string { return visitor.visitCircle(this); }\r\n}\r\nclass Square2 implements Visitable {\r\n  constructor(public side: number) {}\r\n  accept(visitor: Visitor): string { return visitor.visitSquare(this); }\r\n}\r\nclass AreaVisitor implements Visitor {\r\n  visitCircle(c: Circle2): string { return `Circle area: ${Math.PI * c.radius ** 2}`; }\r\n  visitSquare(s: Square2): string { return `Square area: ${s.side ** 2}`; }\r\n}\r\n\r\n// === Phantom Type (Python: type hints without runtime effect) ===\r\nclass Phantom<Tag extends string> {\r\n  constructor(public value: string) {}\r\n  static create<T extends string>(val: string): Phantom<T> { return new Phantom<T>(val); }\r\n}\r\ntype Meters = Phantom<\"meters\">;\r\ntype Feet = Phantom<\"feet\">;\r\nfunction convertToFeet(m: Meters): Feet { const val = parseFloat(m.value) * 3.281; return Phantom.create<\"feet\">(val.toFixed(2)); }\r\n\r\n// === Type-safe Builder with Inheritance ===\r\nabstract class Builder<T> {\r\n  protected config: Partial<T> = {};\r\n  abstract build(): T;\r\n}\r\nclass CarBuilder extends Builder<{ engine: string; wheels: number; color: string }> {\r\n  setEngine(engine: string): this { this.config.engine = engine; return this; }\r\n  setWheels(n: number): this { this.config.wheels = n; return this; }\r\n  setColor(color: string): this { this.config.color = color; return this; }\r\n  build(): { engine: string; wheels: number; color: string } {\r\n    if (!this.config.engine || !this.config.wheels || !this.config.color) throw new Error(\"Missing config\");\r\n    return this.config as any;\r\n  }\r\n}\r\n\r\n// === Dependent Types via Declaration Merging ===\r\ninterface User { name: string; age?: number; }\r\ndeclare module \"./user\" {\r\n  interface User { email?: string; }\r\n}\r\n\r\n// === Template Method Pattern ===\r\nabstract class DataProcessor {\r\n  process(): string[] {\r\n    const data = this.loadData();\r\n    const cleaned = this.cleanData(data);\r\n    const transformed = this.transformData(cleaned);\r\n    return this.outputData(transformed);\r\n  }\r\n  protected abstract loadData(): string[];\r\n  protected cleanData(data: string[]): string[] { return data.filter(x => x.trim().length > 0); }\r\n  protected abstract transformData(data: string[]): string[];\r\n  protected outputData(data: string[]): string[] { return data.map(x => x.toUpperCase()); }\r\n}\r\nclass CSVProcessor extends DataProcessor {\r\n  protected loadData(): string[] { return [\"a\", \"b\", \"c\"]; }\r\n  protected transformData(data: string[]): string[] { return data.map(x => `${x}_processed`); }\r\n}\r\n\r\n// === Polymorphic Serialization ===\r\ninterface Serializable { serialize(): string; }\r\nabstract class Entity implements Serializable {\r\n  constructor(public id: number) {}\r\n  abstract serialize(): string;\r\n  static deserialize<T extends Entity>(this: new (...args: any[]) => T, data: string): T {\r\n    return JSON.parse(data);\r\n  }\r\n}\r\n\r\nconst shapes: Visitable[] = [new Circle2(5), new Square2(4)];\r\nconst visitor = new AreaVisitor();\r\nshapes.forEach(s => console.log(s.accept(visitor)));\r\n\r\nconst car = new CarBuilder().setEngine(\"V8\").setWheels(4).setColor(\"red\").build();\r\nconsole.log(car); // { engine: \"V8\", wheels: 4, color: \"red\" }\r\n\r\nconst csvProc = new CSVProcessor();\r\nconsole.log(csvProc.process()); // [\"A_PROCESSED\", \"B_PROCESSED\", \"C_PROCESSED\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "super()"
        }), " delegates to the next class in the MRO."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MRO follows C3 linearization: child before parent, base order preserved."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple inheritance is supported; use mixins for focused behaviour."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ABCs with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@abstractmethod"
        }), " enforce interface contracts."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocols provide structural subtyping for static duck typing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composition is generally more flexible than inheritance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super()"
        }), " work in a multiple-inheritance diamond pattern?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the MRO and how does C3 linearization compute it?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When should you use an ABC vs a Protocol?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a mixin and what conventions do mixins follow?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is composition sometimes preferred over inheritance?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a class hierarchy for geometric solids: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Shape3D"
        }), " (abstract) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Sphere"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cuboid"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Cylinder"
        }), ". Each must implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volume()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "surface_area()"
        }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super().__init__()"
        }), " for common attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement mixins ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TimestampMixin"
        }), " (adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated_at"
        }), " timestamps) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SerializableMixin"
        }), " (adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "to_dict"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "from_dict"
        }), "). Use them with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Note"
        }), " class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Playable"
        }), " Protocol with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "play()"
        }), " method. Create classes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MusicTrack"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VideoClip"
        }), " that satisfy it. Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "play_all(playables: list[Playable])"
        }), " and test it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design a composable validation system. Define an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abstractmethod"
      }), " base class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validator"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate(value) -> bool"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error_message(value) -> str"
      }), ". Create concrete validators: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NonEmpty"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MinLength(n)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MaxLength(n)"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MatchesRegex(pattern)"
      }), ". Then create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompositeValidator"
      }), " that takes multiple validators and passes only if all pass. Use mixins or protocols to allow validators to be combined with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " operator."]
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