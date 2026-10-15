"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1719],{

/***/ 50869
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_08_oop_in_python_md_4f0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-08-oop-in-python-md-4f0.json
const site_docs_courses_ai_engineering_placement_01_python_programming_08_oop_in_python_md_4f0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/08-oop-in-python","title":"OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/08-oop-in-python.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/08-oop-in-python","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/08-oop-in-python","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"08-oop-in-python","slug":"/ai-engineering-placement/01-python-programming/08-oop-in-python","title":"OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods","sidebar_label":"OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods","sidebar_position":17},"sidebar":"placementSidebar","previous":{"title":"File I/O & Exceptions — Reading, Writing, Error Handling","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions"},"next":{"title":"Decorators & Generators — Higher-Order Functions, yield, itertools","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/09-decorators-and-generators"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/08-oop-in-python.md


const frontMatter = {
	id: '08-oop-in-python',
	slug: '/ai-engineering-placement/01-python-programming/08-oop-in-python',
	title: 'OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods',
	sidebar_label: 'OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods',
	sidebar_position: 17
};
const contentTitle = 'OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "8.1 Classes and Objects",
  "id": "81-classes-and-objects",
  "level": 2
}, {
  "value": "8.2 Inheritance",
  "id": "82-inheritance",
  "level": 2
}, {
  "value": "8.3 Polymorphism",
  "id": "83-polymorphism",
  "level": 2
}, {
  "value": "8.4 Encapsulation",
  "id": "84-encapsulation",
  "level": 2
}, {
  "value": "8.5 Dunder Methods",
  "id": "85-dunder-methods",
  "level": 2
}, {
  "value": "8.6 Advanced Topics",
  "id": "86-advanced-topics",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "8.7 Composition vs Inheritance",
  "id": "87-composition-vs-inheritance",
  "level": 2
}, {
  "value": "8.8 Protocols and Structural Typing",
  "id": "88-protocols-and-structural-typing",
  "level": 2
}, {
  "value": "8.9 Descriptors",
  "id": "89-descriptors",
  "level": 2
}, {
  "value": "8.10 Multiple Inheritance and MRO Deep Dive",
  "id": "810-multiple-inheritance-and-mro-deep-dive",
  "level": 2
}, {
  "value": "8.11 Common Pitfalls",
  "id": "811-common-pitfalls",
  "level": 2
}, {
  "value": "8.12 Design Patterns in Python",
  "id": "812-design-patterns-in-python",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
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
        id: "oop-in-python--classes-inheritance-polymorphism-dunder-methods",
        children: "OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define classes with attributes, methods, and constructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use inheritance, method overriding, and super()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply polymorphism through duck typing and abstract classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement encapsulation with properties and name mangling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override dunder methods for custom behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand dataclasses, class methods, and static methods"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding oop in python is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how oop in python works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "8.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes & Objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "init"
            }), ", self, attributes, methods"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "super(), MRO, multiple inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "duck typing, ABC, @abstractmethod"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@property, name mangling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dunder Methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "str"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "repr"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "eq"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "call"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Topics"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@classmethod, @staticmethod, dataclasses, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "slots"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[Classes] --> B[__init__ + self]\r\n    A --> C[Methods & Attributes]\r\n    D[Inheritance] --> E[super()]\r\n    D --> F[MRO]\r\n    G[Polymorphism] --> H[Duck Typing]\r\n    G --> I[ABC]\r\n    J[Dunder Methods] --> K[__str__, __eq__, ...]\r\n    L[Dataclasses] --> M[Auto __init__, __repr__, __eq__]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-classes-and-objects",
      children: "8.1 Classes and Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Dog:\r\n    species = \"Canis familiaris\"\r\n\r\n    def __init__(self, name: str, age: int):\r\n        self.name = name\r\n        self.age = age\r\n\r\n    def description(self):\r\n        return f\"{self.name} is {self.age} years old\"\r\n\r\n    def bark(self, sound=\"Woof\"):\r\n        return f\"{self.name} says {sound}\"\r\n\r\nbuddy = Dog(\"Buddy\", 3)\r\nprint(buddy.description())  # Buddy is 3 years old\r\nprint(buddy.bark())         # Buddy says Woof\r\nprint(Dog.species)          # Canis familiaris\r\nprint(buddy.species)        # Canis familiaris\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-inheritance",
      children: "8.2 Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Animal:\r\n    def __init__(self, name):\r\n        self.name = name\r\n    def speak(self):\r\n        raise NotImplementedError\r\n\r\nclass Cat(Animal):\r\n    def speak(self):\r\n        return f\"{self.name} says Meow\"\r\n\r\nclass Dog(Animal):\r\n    def speak(self):\r\n        return f\"{self.name} says Woof\"\r\n\r\nanimals = [Cat(\"Whiskers\"), Dog(\"Buddy\")]\r\nfor a in animals:\r\n    print(a.speak())\r\n\r\nclass Manager(Employee):\r\n    def __init__(self, first, last, pay, employees=None):\r\n        super().__init__(first, last, pay)\r\n        self.employees = employees or []\r\n\r\nclass A:\r\n    def method(self): return \"A\"\r\nclass B(A):\r\n    def method(self): return \"B\"\r\nclass C(A):\r\n    def method(self): return \"C\"\r\nclass D(B, C): pass\r\n\r\nd = D()\r\nprint(d.method())  # B (MRO: D -> B -> C -> A)\r\nprint(D.__mro__)   # (D, B, C, A, object)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-polymorphism",
      children: "8.3 Polymorphism"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Duck:\r\n    def quack(self): return \"Quack!\"\r\n    def fly(self): return \"Flap!\"\r\n\r\nclass Person:\r\n    def quack(self): return \"I'm quacking!\"\r\n    def fly(self): return \"I'm flying!\"\r\n\r\ndef make_it_quack(thing):\r\n    print(thing.quack())\r\n\r\nmake_it_quack(Duck())    # Quack!\r\nmake_it_quack(Person())  # I'm quacking!\r\n\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass Shape(ABC):\r\n    @abstractmethod\r\n    def area(self) -> float: pass\r\n\r\nclass Circle(Shape):\r\n    def __init__(self, radius): self.radius = radius\r\n    def area(self): return 3.14159 * self.radius ** 2\r\n\r\nc = Circle(5)\r\nprint(c.area())  # 78.53975\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "84-encapsulation",
      children: "8.4 Encapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class BankAccount:\r\n    def __init__(self, owner, balance=0):\r\n        self.owner = owner\r\n        self._balance = balance       # protected\r\n        self.__pin = \"1234\"           # name mangling\r\n\r\n    @property\r\n    def balance(self):\r\n        return self._balance\r\n\r\n    @balance.setter\r\n    def balance(self, amount):\r\n        if amount < 0:\r\n            raise ValueError(\"Negative balance\")\r\n        self._balance = amount\r\n\r\n    def deposit(self, amount):\r\n        if amount > 0:\r\n            self._balance += amount\r\n\r\naccount = BankAccount(\"Alice\", 1000)\r\nprint(account.balance)       # 1000\r\naccount.balance = 1500       # setter\r\nprint(account._balance)      # 1500 (convention says don't)\r\n\r\n## print(account.__pin)       # AttributeError\r\nprint(account._BankAccount__pin)  # \"1234\" (mangled name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "85-dunder-methods",
      children: "8.5 Dunder Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Book:\r\n    def __init__(self, title, author, pages):\r\n        self.title = title\r\n        self.author = author\r\n        self.pages = pages\r\n    def __str__(self):\r\n        return f\"'{self.title}' by {self.author}\"\r\n    def __repr__(self):\r\n        return f\"Book('{self.title}', '{self.author}', {self.pages})\"\r\n    def __len__(self): return self.pages\r\n    def __eq__(self, other):\r\n        return self.title == other.title and self.author == other.author\r\n    def __lt__(self, other): return self.pages < other.pages\r\n    def __call__(self): return f\"Reading '{self.title}'...\"\r\n\r\nb1 = Book(\"1984\", \"Orwell\", 328)\r\nb2 = Book(\"Brave New World\", \"Huxley\", 311)\r\nprint(str(b1))   # '1984' by Orwell\r\nprint(repr(b1))  # Book('1984', 'Orwell', 328)\r\nprint(len(b1))   # 328\r\nprint(b1 == b2)  # False\r\nprint(b1())      # Reading '1984'...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "86-advanced-topics",
      children: "8.6 Advanced Topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@classmethod\r\ndef from_string(cls, date_str):\r\n    year, month, day = map(int, date_str.split(\"-\"))\r\n    return cls(year, month, day)\r\n\r\n@staticmethod\r\ndef is_valid_date(year, month, day):\r\n    return 1 <= month <= 12 and 1 <= day <= 31\r\n\r\nfrom dataclasses import dataclass, field\r\n\r\n@dataclass(order=True)\r\nclass Person:\r\n    name: str\r\n    age: int\r\n    email: str = \"\"\r\n    tags: list = field(default_factory=list)\r\n\r\np1 = Person(\"Alice\", 30)\r\np2 = Person(\"Alice\", 30)\r\nprint(p1 == p2)  # True (auto __eq__)\r\nprint(p1)        # Person(name='Alice', age=30, email='')\r\n\r\nclass Point:\r\n    __slots__ = (\"x\", \"y\")\r\n    def __init__(self, x, y): self.x, self.y = x, y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class Dog {\r\n    species: string = \"Canis familiaris\";\r\n    constructor(public name: string, public age: number) {}\r\n    description(): string { return ${this.name} is  years old; }\r\n}\r\n\r\nabstract class Shape { abstract area(): number; }\r\nclass Circle extends Shape {\r\n    constructor(private radius: number) { super(); }\r\n    area(): number { return Math.PI * this.radius ** 2; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Classes define blueprints; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), " initializes; self is the instance reference"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class attributes shared; instance attributes per-object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inheritance: class Child(Parent); super() calls parent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MRO determines method lookup order in multiple inheritance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duck typing: if it has the method, call it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@property creates controlled access to attributes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dunder methods (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "str"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "eq"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "len"
        }), ") customize built-in behavior"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@classmethod receives cls; @staticmethod receives neither"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dataclasses auto-generate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repr"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "eq"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "slots"
        }), " reduces memory by eliminating ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dict"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@dataclass"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "init"
            }), " boilerplate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@classmethod from_xxx"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Complex ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "init"
            }), " params"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Getter/setter with logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct attribute access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@dataclass(frozen=True)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "setattr"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "slots"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Default ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "dict"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Must-implement interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ABC + @abstractmethod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "raise NotImplementedError"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Class vs instance attributes?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Class attributes shared across all instances (defined in class body). Instance attributes per-object (set in __init__). Modifying via instance creates a shadowing instance attribute."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How does super() work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns proxy that delegates to next class in MRO. Single inheritance: calls parent. Multiple inheritance: follows C3 linearization."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: Duck typing example?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "If object implements needed methods, type doesn't matter. Both Duck and Person with quack() work with make_it_quack(). No inheritance required."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: __str__ vs __repr__?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "__str__: human-readable, used by print/str(). __repr__: unambiguous, ideally recreates object, used by debugger. Fallback: __str__ uses __repr__ if missing."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: @classmethod vs @staticmethod?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "@classmethod receives cls (the class), used for alternative constructors. @staticmethod receives neither, used for utilities related to the class."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Name mangling?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Double underscore prefixes rename attribute to _ClassName__attr. Prevents accidental overriding in subclasses. Not truly private — still accessible with mangled name."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: Dataclass benefits?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Auto-generates __init__, __repr__, __eq__, __hash__. Supports annotations, defaults, field factories, frozen=True, order=True."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: What is MRO?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Method Resolution Order — the order Python searches for methods. Uses C3 linearization. View with Class.__mro__. D(B,C) -> B -> C -> A -> object."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: Purpose of __slots__?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Prevents __dict__ per instance, saving ~40-50% memory. Only listed attributes allowed. Trade-off: no dynamic attribute assignment."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: ABC vs duck typing?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ABC enforces interface — subclasses must implement methods. Duck typing is flexible — just call and trust. ABC for formal contracts; duck typing for Pythonic protocols."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": First parameter of instance methods? a) self b) this c) cls d) instance"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) self"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": Method called by print()? a) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repr"
      }), " b) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "str"
      }), " c) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "format"
      }), " d) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "display"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) __str__"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": How to make abstract class? a) inherit ABC b) @abstractmethod c) both d) raise NotImplementedError"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) both inherit ABC and use @abstractmethod"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": @classmethod receives? a) self b) cls c) instance d) nothing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) cls"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "slots"
      }), " do? a) speeds methods b) prevents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dict"
      }), " c) enables MRO d) auto ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "init"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s08-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) prevents __dict__ to save memory"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Rectangle class with width/height, area() and perimeter().\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Student dataclass with name, grades, average_grade().\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Vehicle hierarchy: Vehicle -> Car, Motorcycle, Truck with start/stop/fuel_efficiency.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Custom Vector class with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "add"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sub"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mul"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repr"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eq"
      }), ".\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement @property from scratch using descriptors.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — SimpleORM mapping dataclass attributes to columns with save/find/delete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "87-composition-vs-inheritance",
      children: "8.7 Composition vs Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Favor composition over inheritance for flexible designs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Inheritance approach (tight coupling)\r\nclass Engine:\r\n    def start(self): return \"Engine running\"\r\n\r\nclass Car(Engine):  # Car IS-A Engine -- questionable\r\n    def drive(self):\r\n        return f\"Driving: {self.start()}\"\r\n\r\n## Composition approach (loose coupling)\r\nclass Engine:\r\n    def start(self): return \"Engine running\"\r\n\r\nclass Wheels:\r\n    def rotate(self): return \"Wheels spinning\"\r\n\r\nclass Car:\r\n    def __init__(self):\r\n        self.engine = Engine()  # Car HAS-A Engine\r\n        self.wheels = Wheels()  # Car HAS-A Wheels\r\n\r\n    def drive(self):\r\n        return f\"{self.engine.start()}, {self.wheels.rotate()}\"\r\n\r\n## Mixin composition\r\nclass JSONMixin:\r\n    def to_json(self):\r\n        import json\r\n        return json.dumps(self.__dict__)\r\n\r\nclass LogMixin:\r\n    def log(self, msg):\r\n        print(f\"[LOG] {msg}\")\r\n\r\nclass User(JSONMixin, LogMixin):\r\n    def __init__(self, name):\r\n        self.name = name\r\n\r\nuser = User(\"Alice\")\r\nprint(user.to_json())  # {\"name\": \"Alice\"}\r\nuser.log(\"User created\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "88-protocols-and-structural-typing",
      children: "8.8 Protocols and Structural Typing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Protocol, runtime_checkable\r\n\r\n@runtime_checkable\r\nclass Iterable(Protocol):\r\n    def __iter__(self):\r\n        ...\r\n\r\nclass MyContainer:\r\n    def __init__(self, items):\r\n        self.items = items\r\n    def __iter__(self):\r\n        return iter(self.items)\r\n\r\ndef process(iterable: Iterable):\r\n    for item in iterable:\r\n        print(item)\r\n\r\nprocess(MyContainer([1, 2, 3]))  # OK\r\nprocess([4, 5, 6])               # OK -- list implements __iter__\r\nprint(isinstance([1, 2], Iterable))  # True (with @runtime_checkable)\r\n\r\n## Protocol for file-like objects\r\nclass Readable(Protocol):\r\n    def read(self) -> str: ...\r\n\r\nclass FileReader:\r\n    def read(self) -> str:\r\n        return \"file content\"\r\n\r\nclass StringReader:\r\n    def read(self) -> str:\r\n        return \"string content\"\r\n\r\ndef load_data(source: Readable):\r\n    return source.read()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "89-descriptors",
      children: "8.9 Descriptors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Descriptors control attribute access on another class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ValidatedAttribute:\r\n    def __init__(self, validator):\r\n        self.validator = validator\r\n        self.data = {}\r\n\r\n    def __get__(self, obj, objtype=None):\r\n        if obj is None:\r\n            return self\r\n        return self.data.get(id(obj))\r\n\r\n    def __set__(self, obj, value):\r\n        if not self.validator(value):\r\n            raise ValueError(f\"Invalid value: {value}\")\r\n        self.data[id(obj)] = value\r\n\r\n    def __delete__(self, obj):\r\n        del self.data[id(obj)]\r\n\r\ndef positive_number(value):\r\n    return isinstance(value, (int, float)) and value > 0\r\n\r\nclass Product:\r\n    price = ValidatedAttribute(positive_number)\r\n\r\n    def __init__(self, name, price):\r\n        self.name = name\r\n        self.price = price\r\n\r\np = Product(\"Widget\", 10.99)\r\nprint(p.price)  # 10.99\r\n\r\n## p.price = -5  # ValueError: Invalid value: -5\r\n\r\n## Property is implemented using descriptors\r\nclass Property:\r\n    def __init__(self, fget=None, fset=None):\r\n        self.fget = fget\r\n        self.fset = fset\r\n\r\n    def __get__(self, obj, objtype=None):\r\n        if obj is None:\r\n            return self\r\n        if self.fget is None:\r\n            raise AttributeError\r\n        return self.fget(obj)\r\n\r\n    def __set__(self, obj, value):\r\n        if self.fset is None:\r\n            raise AttributeError\r\n        self.fset(obj, value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "810-multiple-inheritance-and-mro-deep-dive",
      children: "8.10 Multiple Inheritance and MRO Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Diamond problem\r\nclass A:\r\n    def method(self): return \"A\"\r\n\r\nclass B(A):\r\n    def method(self): return \"B\"\r\n\r\nclass C(A):\r\n    def method(self): return \"C\"\r\n\r\nclass D(B, C):\r\n    pass\r\n\r\nd = D()\r\nprint(d.method())  # \"B\" (MRO: D -> B -> C -> A)\r\nprint(D.__mro__)\r\n\r\n## (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)\r\n\r\n## MRO follows C3 linearization:\r\n\r\n## 1. Children come before parents\r\n\r\n## 2. Order of bases is respected\r\n\r\n## 3. First occurrence of a class is kept\r\n\r\n## Cooperative multiple inheritance with super()\r\nclass Base:\r\n    def __init__(self, **kwargs):\r\n        print(f\"Base.__init__({kwargs})\")\r\n        super().__init__(**kwargs)\r\n\r\nclass NameMixin(Base):\r\n    def __init__(self, name=None, **kwargs):\r\n        print(f\"NameMixin.__init__(name={name})\")\r\n        super().__init__(**kwargs)\r\n        self.name = name\r\n\r\nclass AgeMixin(Base):\r\n    def __init__(self, age=None, **kwargs):\r\n        print(f\"AgeMixin.__init__(age={age})\")\r\n        super().__init__(**kwargs)\r\n        self.age = age\r\n\r\nclass Person(NameMixin, AgeMixin):\r\n    def __init__(self, **kwargs):\r\n        print(\"Person.__init__\")\r\n        super().__init__(**kwargs)\r\n\r\np = Person(name=\"Alice\", age=30)\r\n\r\n## Person.__init__\r\n\r\n## NameMixin.__init__(name=Alice)\r\n\r\n## AgeMixin.__init__(age=30)\r\n\r\n## Base.__init__({})\r\nprint(f\"{p.name} is {p.age}\")  # Alice is 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "811-common-pitfalls",
      children: "8.11 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Pitfall 1: Forgetting super() in __init__\r\nclass Parent:\r\n    def __init__(self):\r\n        self.value = \"parent\"\r\n\r\nclass Child(Parent):\r\n    def __init__(self):\r\n        # super().__init__()  # MISSING!\r\n        self.value = \"child\"\r\n\r\n## Pitfall 2: Mutable class attributes\r\nclass Dog:\r\n    tricks = []  # shared across instances!\r\n\r\n    def add_trick(self, trick):\r\n        self.tricks.append(trick)\r\n\r\nd1 = Dog()\r\nd2 = Dog()\r\nd1.add_trick(\"roll over\")\r\nprint(d2.tricks)  # ['roll over'] -- shared state!\r\n\r\nclass DogFixed:\r\n    def __init__(self):\r\n        self.tricks = []  # per-instance\r\n\r\n## Pitfall 3: Confusing __str__ and __repr__\r\nclass Point:\r\n    def __init__(self, x, y):\r\n        self.x, self.y = x, y\r\n    # Missing __repr__ makes debugging hard\r\n\r\n## Pitfall 4: Not using @abstractmethod properly\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass Shape(ABC):\r\n    @abstractmethod\r\n    def area(self): pass\r\n\r\n## Will error: s = Shape()  # Can't instantiate abstract class\r\n\r\n## Pitfall 5: Modifying __slots__ classes at runtime\r\nclass Fixed:\r\n    __slots__ = (\"x\", \"y\")\r\n\r\nf = Fixed()\r\nf.x = 1\r\n\r\n## f.z = 2  # AttributeError: 'Fixed' has no attribute 'z'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "812-design-patterns-in-python",
      children: "8.12 Design Patterns in Python"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Singleton pattern\r\nclass Singleton:\r\n    _instance = None\r\n\r\n    def __new__(cls, *args, **kwargs):\r\n        if cls._instance is None:\r\n            cls._instance = super().__new__(cls)\r\n        return cls._instance\r\n\r\ns1 = Singleton()\r\ns2 = Singleton()\r\nprint(s1 is s2)  # True\r\n\r\n## Factory pattern\r\nclass Animal:\r\n    def speak(self): pass\r\n\r\nclass Dog(Animal):\r\n    def speak(self): return \"Woof\"\r\n\r\nclass Cat(Animal):\r\n    def speak(self): return \"Meow\"\r\n\r\nclass AnimalFactory:\r\n    @staticmethod\r\n    def create(animal_type: str) -> Animal:\r\n        animals = {\"dog\": Dog, \"cat\": Cat}\r\n        return animals[animal_type]()\r\n\r\n## Observer pattern\r\nclass Subject:\r\n    def __init__(self):\r\n        self._observers = []\r\n\r\n    def attach(self, observer):\r\n        self._observers.append(observer)\r\n\r\n    def notify(self, message):\r\n        for observer in self._observers:\r\n            observer.update(message)\r\n\r\nclass Observer:\r\n    def update(self, message):\r\n        print(f\"Received: {message}\")\r\n\r\nsub = Subject()\r\nobs1 = Observer()\r\nobs2 = Observer()\r\nsub.attach(obs1)\r\nsub.attach(obs2)\r\nsub.notify(\"Event happened\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "placement-section",
      children: "Placement Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "google-style",
      children: "Google Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Classes, Inheritance, Polymorphism, Dunder Methods."
          }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Describe a production bug caused by misunderstanding this technique — Classes, Inheritance, Polymorphism, Dunder Methods. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Classes, Inheritance, Polymorphism, Dunder Methods from 10 users to 10 million?"
          }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Classes, Inheritance, Polymorphism, Dunder Methods."
          }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How does OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Classes, Inheritance, Polymorphism, Dunder Methods run faster on GPU hardware?"
          }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the smallest possible implementation of this technique — Classes, Inheritance, Polymorphism, Dunder Methods that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in production today?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 08 Oop In Python is ___. — Answer: O(n) for iteration, O(1) for dict lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 08 Oop In Python is ___. — Answer: empty input, None values, type mismatches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Classes, Inheritance, Polymorphism, Dunder Methods is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Classes, Inheritance, Polymorphism, Dunder Methods on an empty input?"
        }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output when the input is at the boundary value?"
        }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What does the implementation return when given invalid input types?"
        }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output for the sample input given in the chapter's Examples section?"
        }), " — Re-run the chapter's example code and compare against the documented output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the time complexity output when you profile the implementation at 10x input size?"
        }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "difficulty-level",
      children: "Difficulty Level"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Takes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read theory, run the chapter examples, solve the Easy exercises"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-5 sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete Medium exercises, explain OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods to someone else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1+ week"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always write a one-line example of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Fluent Python' by Luciano Ramalho — the definitive advanced Python book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Python Cookbook' by David Beazley — practical recipes for real problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real Python tutorials: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://realpython.com",
          children: "https://realpython.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python official docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3",
          children: "https://docs.python.org/3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PEP 8 style guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://peps.python.org/pep-0008",
          children: "https://peps.python.org/pep-0008"
        }), " in Python — Classes, Inheritance, Polymorphism, Dunder Methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 01 — builds the foundation for 08 Oop In Python"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 08 Oop In Python with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 08 Oop In Python fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 08 Oop In Python"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 08 Oop In Python"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 08 Oop In Python?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 08 Oop In Python?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 08 Oop In Python asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 08 Oop In Python?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production correctness means handling edge cases, not just the happy path."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview answers should start with the definition, then the example, then the trade-offs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "secrets"
        }), " module instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "random"
        }), " for cryptographic operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs with Pydantic before processing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subprocess.run()"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shell=False"
        }), " to prevent shell injection"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store secrets in environment variables or secret managers, never in source code"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin dependency versions in requirements.txt and scan with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip-audit"
        }), " for vulnerabilities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's GIL limits CPU parallelism — use multiprocessing for CPU-bound ML preprocessing, asyncio for I/O-bound API calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy vectorization replaces Python loops with C-level operations — 100-1000x speedup for array operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generators enable processing datasets larger than RAM by yielding one batch at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type hints with mypy catch shape mismatches in tensor operations before runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling with cProfile identifies bottlenecks before optimizing — never optimize without measuring first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "08 Oop In Python is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-08oopinpython-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Python is a high-level, dynamically-typed, interpreted language known for its readable syntax, extensive standard library, and dominant position in data science, ML, and backend development."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-08oopinpython-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common Python mistake: mutable default arguments. `def f(x=[])` shares the list across all calls. Use `def f(x=None): x = x or []` instead."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-08oopinpython-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "List comprehension: O(n). Dict lookup: O(1) average. Sorting: O(n log n). Generator: O(1) memory vs O(n) for list. String concatenation in loop: O(n^2) — use join() instead."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-08oopinpython-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Python is NOT the right choice when: (1) you need bare-metal performance (use C/Rust), (2) mobile app development, (3) real-time systems requiring microsecond latency."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-08oopinpython-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production Python stack: FastAPI for APIs, Pydantic for validation, SQLAlchemy for ORM, Celery for task queues, pytest for testing, ruff+black for linting, uv for package management."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ruff"
        }), " — extremely fast Python linter (replaces flake8, isort, pyupgrade)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "black"
        }), " — opinionated code formatter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mypy"
        }), " — static type checker"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pytest"
        }), " — testing framework with fixtures and parametrize"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "uv"
        }), " — fast Python package installer and resolver in Python — Classes, Inheritance, Polymorphism, Dunder Methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 08 Oop In Python pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mock-interview-section",
      children: "Mock Interview Section"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 1 — Screening (15 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the complexity of your example?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 2 — Coding (45 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the Medium exercise from this chapter under time pressure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State your assumptions, then implement with type hints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with edge cases: empty input, boundary values, invalid input."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Round 3 — Behavioral + System (30 min)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you debugged a OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods is used at scale?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What metrics would you monitor?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation rubric"
      }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optimized-implementation",
      children: "Optimized Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_08_oop_in_python(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 08 Oop In Python.\r\n\r\n    Key concepts: variables, functions, OOP, modules\r\n    Complexity: O(n) for iteration, O(1) for dict lookup\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 08 Oop In Python here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps the function signature stable so tests written against it stay valid."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handles the empty-input contract explicitly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for the edge cases before implementing the logic (test-first)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation-metrics",
      children: "Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concept recall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explain OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods without notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60-second explanation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code fluency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write the chapter example from memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No syntax errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle empty/invalid input in exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cases pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State time/space for the standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correct big-O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview readiness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Answer 5 Interview Q&A questions out loud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fluent, structured answers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter quiz score after 3 days"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instagram"
        }), " serves 2B users with a Python/Django backend, proving Python scales with the right architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dropbox"
        }), " uses Python for their desktop client and backend services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NASA"
        }), " uses Python for scientific computing and mission analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google"
        }), " uses Python extensively for internal tooling, ML pipelines, and YouTube's backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": demonstrate Pythonic code — list comprehensions, context managers, generators, and dataclasses show senior-level fluency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/01-python-programming/09-decorators-and-generators",
        children: "Decorators & Generators — Higher-Order Functions, yield, itertools"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
      }), "\n"]
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