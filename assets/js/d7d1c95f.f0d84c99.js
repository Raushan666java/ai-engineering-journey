"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7652],{

/***/ 9400
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_12_oop_md_d7d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-12-oop-md-d7d.json
const site_docs_courses_python_programming_12_oop_md_d7d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/12-oop","title":"Chapter 12: Object-Oriented Programming","description":"Previous Inheritance and Polymorphism","source":"@site/docs/courses/python-programming/12-oop.md","sourceDirName":"courses/python-programming","slug":"/python-programming/12-oop","permalink":"/ai-engineering-journey/python-programming/12-oop","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-oop","slug":"/python-programming/12-oop","title":"Chapter 12: Object-Oriented Programming","sidebar_label":"Chapter 12: Object-Oriented Programming","sidebar_position":12},"sidebar":"course-python-programming","previous":{"title":"Chapter 11: Modules and Packages","permalink":"/ai-engineering-journey/python-programming/11-modules"},"next":{"title":"Chapter 13: Inheritance and Protocols","permalink":"/ai-engineering-journey/python-programming/13-inheritance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/python-programming/12-oop.md


const frontMatter = {
	id: '12-oop',
	slug: '/python-programming/12-oop',
	title: 'Chapter 12: Object-Oriented Programming',
	sidebar_label: 'Chapter 12: Object-Oriented Programming',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Object-Oriented Programming';

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
  "value": "12.1 Classes and Instances",
  "id": "121-classes-and-instances",
  "level": 2
}, {
  "value": "12.2 Instance Methods vs Class Attributes",
  "id": "122-instance-methods-vs-class-attributes",
  "level": 2
}, {
  "value": "12.3 @classmethod and @staticmethod",
  "id": "123-classmethod-and-staticmethod",
  "level": 2
}, {
  "value": "12.4 @property Decorator",
  "id": "124-property-decorator",
  "level": 2
}, {
  "value": "12.5 <strong>slots</strong>",
  "id": "125-slots",
  "level": 2
}, {
  "value": "12.6 Name Mangling",
  "id": "126-name-mangling",
  "level": 2
}, {
  "value": "12.7 @dataclass",
  "id": "127-dataclass",
  "level": 2
}, {
  "value": "12.7.1 dataclass Parameters",
  "id": "1271-dataclass-parameters",
  "level": 3
}, {
  "value": "12.7.2 Inheritance with dataclass",
  "id": "1272-inheritance-with-dataclass",
  "level": 3
}, {
  "value": "12.8 Method Types Summary",
  "id": "128-method-types-summary",
  "level": 2
}, {
  "value": "12.9 Class as a Callable",
  "id": "129-class-as-a-callable",
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
  "value": "Python vs TypeScript OOP",
  "id": "python-vs-typescript-oop",
  "level": 3
}, {
  "value": "OOP Design Best Practices",
  "id": "oop-design-best-practices",
  "level": 3
}, {
  "value": "More TypeScript OOP Patterns",
  "id": "more-typescript-oop-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript OOP Patterns",
  "id": "typescript-oop-patterns",
  "level": 3
}, {
  "value": "TypeScript OOP Design Patterns",
  "id": "typescript-oop-design-patterns",
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
        id: "chapter-12-object-oriented-programming",
        children: "Chapter 12: Object-Oriented Programming"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/11-modules",
          children: "Modules and Packages"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/13-inheritance",
          children: "Inheritance and Polymorphism"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define classes with instance and class attributes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement constructors and methods"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@classmethod"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@staticmethod"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@property"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optimise memory with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__slots__"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write data classes with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@dataclass"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand name mangling for attribute protection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/12-oop.png",
        alt: "Python OOP"
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
            children: "12.1 Classes and Instances"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A class is a blueprint; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__"
            }), " initialises instance state."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.2 Instance Methods vs Class Attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@classmethod"
            }), " receives ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cls"
            }), " for alternative constructors; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@staticmethod"
            }), " receives nothing."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.3 @classmethod and @staticmethod"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@property"
            }), " controls attribute access with getter/setter/deleter — validation without breaking the API."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.4 @property Decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "__slots__"
            }), " saves memory by replacing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__dict__"
            }), " with a fixed array."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["12.5 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "slots"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@dataclass"
            }), " auto-generates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__repr__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__eq__"
            }), ", and more."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.6 Name Mangling"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.7 @dataclass"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.8 Method Types Summary"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12.9 Class as a Callable"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    S0[Classes and Instances]\r\n    S1[Instance Methods vs Class Attributes]\r\n    S2[\"@classmethod and @staticmethod\"]\r\n    S3[\"@property Decorator\"]\r\n    S4[__slots__]\r\n    S5[Name Mangling]\r\n    S6[\"@dataclass\"]\r\n    S7[Method Types Summary]\r\n    S8[Class as a Callable]\r\n    S0 --> S1\r\n    S1 --> S2\r\n    S2 --> S3\r\n    S3 --> S4\r\n    S4 --> S5\r\n    S5 --> S6\r\n    S6 --> S7\r\n    S7 --> S8"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "121-classes-and-instances",
      children: "12.1 Classes and Instances"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A class is a blueprint; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__"
        }), " initialises instance state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class is a blueprint for creating objects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Dog:\r\n    \"\"\"A simple Dog class.\"\"\"\r\n    species = \"Canis familiaris\"  # class attribute\r\n    \r\n    def __init__(self, name: str, age: int):\r\n        \"\"\"Constructor → initialises instance attributes.\"\"\"\r\n        self.name = name\r\n        self.age = age\r\n    \r\n    def bark(self) -> str:\r\n        \"\"\"Instance method.\"\"\"\r\n        return f\"{self.name} says Woof!\"\r\n\r\n# Creating instances\r\nbuddy = Dog(\"Buddy\", 3)\r\nmax_dog = Dog(\"Max\", 5)\r\n\r\nprint(buddy.name)      # Buddy\r\nprint(buddy.species)   # Canis familiaris (class attribute)\r\nprint(buddy.bark())    # Buddy says Woof!\r\nprint(max_dog.bark())  # Max says Woof!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "self"
      }), " is a convention (not a keyword) referring to the instance. Every instance method receives ", (0,jsx_runtime.jsx)(_components.code, {
        children: "self"
      }), " as the first argument."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-instance-methods-vs-class-attributes",
      children: "12.2 Instance Methods vs Class Attributes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@classmethod"
        }), " receives ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cls"
        }), " for alternative constructors; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@staticmethod"
        }), " receives nothing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instance attributes belong to each object; class attributes are shared:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Counter:\r\n    count = 0  # class attribute\r\n    \r\n    def __init__(self):\r\n        self.value = 0  # instance attribute\r\n        Counter.count += 1\r\n\r\nc1 = Counter()\r\nc2 = Counter()\r\nprint(Counter.count)   # 2\r\nprint(c1.value)        # 0\r\n\r\n# Modify class attribute via class\r\nCounter.count = 10\r\nprint(c2.count)       # 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attribute lookup order: instance → class → parent classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-classmethod-and-staticmethod",
      children: "12.3 @classmethod and @staticmethod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@property"
        }), " controls attribute access with getter/setter/deleter — validation without breaking the API."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance method"
        }), ": receives ", (0,jsx_runtime.jsx)(_components.code, {
          children: "self"
        }), ", can access instance and class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class method"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@classmethod"
        }), "): receives ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cls"
        }), ", can access class but not instance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static method"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@staticmethod"
        }), "): receives nothing special, like a regular function inside the class."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Date:\r\n    def __init__(self, year: int, month: int, day: int):\r\n        self.year = year\r\n        self.month = month\r\n        self.day = day\r\n    \r\n    @classmethod\r\n    def from_string(cls, date_str: str) -> \"Date\":\r\n        \"\"\"Alternative constructor → parses 'YYYY-MM-DD'.\"\"\"\r\n        year, month, day = map(int, date_str.split(\"-\"))\r\n        return cls(year, month, day)\r\n    \r\n    @classmethod\r\n    def today(cls) -> \"Date\":\r\n        \"\"\"Alternative constructor → returns today's date.\"\"\"\r\n        from datetime import date\r\n        d = date.today()\r\n        return cls(d.year, d.month, d.day)\r\n    \r\n    @staticmethod\r\n    def is_valid(date_str: str) -> bool:\r\n        \"\"\"Validate a date string without creating an instance.\"\"\"\r\n        try:\r\n            year, month, day = map(int, date_str.split(\"-\"))\r\n            return 1 <= month <= 12 and 1 <= day <= 31\r\n        except (ValueError, AttributeError):\r\n            return False\r\n    \r\n    def __repr__(self) -> str:\r\n        return f\"Date({self.year}, {self.month}, {self.day})\"\r\n\r\nd = Date.from_string(\"2025-03-15\")\r\nprint(d)                      # Date(2025, 3, 15)\r\nprint(Date.is_valid(\"invalid\"))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-property-decorator",
      children: "12.4 @property Decorator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__slots__"
        }), " saves memory by replacing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__dict__"
        }), " with a fixed array."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties control attribute access with getter, setter, and deleter methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Circle:\r\n    def __init__(self, radius: float):\r\n        self._radius = radius\r\n    \r\n    @property\r\n    def radius(self) -> float:\r\n        \"\"\"Getter → called when accessing circle.radius.\"\"\"\r\n        return self._radius\r\n    \r\n    @radius.setter\r\n    def radius(self, value: float):\r\n        \"\"\"Setter → called when assigning to circle.radius.\"\"\"\r\n        if value < 0:\r\n            raise ValueError(\"Radius cannot be negative\")\r\n        self._radius = value\r\n    \r\n    @property\r\n    def area(self) -> float:\r\n        \"\"\"Read-only computed property.\"\"\"\r\n        import math\r\n        return math.pi * self._radius ** 2\r\n    \r\n    @property\r\n    def diameter(self) -> float:\r\n        return self._radius * 2\r\n\r\nc = Circle(5)\r\nprint(c.radius)    # 5 (uses getter)\r\nc.radius = 7       # uses setter\r\nprint(c.area)      # 153.938...\r\n# c.radius = -1    # ValueError\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties allow you to add validation or computed values without changing the public interface."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "125-slots",
      children: ["12.5 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "slots"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@dataclass"
        }), " auto-generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__repr__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__eq__"
        }), ", and more."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "__slots__"
      }), " restricts the attributes a class can have, saving memory:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Point:\r\n    __slots__ = (\"x\", \"y\")  # only 'x' and 'y' are allowed\r\n    \r\n    def __init__(self, x: float, y: float):\r\n        self.x = x\r\n        self.y = y\r\n\r\np = Point(3, 4)\r\nprint(p.x, p.y)     # 3 4\r\n# p.z = 5            # AttributeError: 'Point' object has no attribute 'z'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__slots__"
      }), ", each instance has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__dict__"
      }), " attribute dictionary (significant memory overhead). With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__slots__"
      }), ", attributes are stored in a fixed array:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Memory comparison\r\nimport sys\r\n\r\nclass WithoutSlots:\r\n    def __init__(self, x, y):\r\n        self.x = x\r\n        self.y = y\r\n\r\nclass WithSlots:\r\n    __slots__ = (\"x\", \"y\")\r\n    def __init__(self, x, y):\r\n        self.x = x\r\n        self.y = y\r\n\r\nwos = WithoutSlots(1, 2)\r\nws = WithSlots(1, 2)\r\n\r\nprint(sys.getsizeof(wos))   # larger (has __dict__)\r\nprint(sys.getsizeof(ws))    # smaller (no __dict__)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__slots__"
      }), " for classes with many instances (millions). For most cases, the convenience of dynamic attributes outweighs the memory savings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-name-mangling",
      children: "12.6 Name Mangling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined\r\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Name mangling (", (0,jsx_runtime.jsx)(_components.code, {
          children: "__attr"
        }), ") prevents subclass collisions — it is not true privacy. Single underscore ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_attr"
        }), " signals \"internal use.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Names starting with double underscore (but not ending with double underscore) are mangled to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_ClassName__name"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class MyClass:\r\n    def __init__(self):\r\n        self.__secret = 42\r\n    \r\n    def get_secret(self):\r\n        return self.__secret\r\n\r\nobj = MyClass()\r\nprint(obj.get_secret())  # 42\r\n# print(obj.__secret)     # AttributeError\r\nprint(obj._MyClass__secret)  # 42 (name mangling is visible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Name mangling is designed to avoid attribute collisions in subclasses, not to enforce privacy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SubClass(MyClass):\r\n    def __init__(self):\r\n        super().__init__()\r\n        self.__secret = 99  # this is _SubClass__secret\r\n\r\nobj2 = SubClass()\r\nprint(obj2.get_secret())        # 42 (from parent)\r\nprint(obj2._SubClass__secret)   # 99\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Single underscore (", (0,jsx_runtime.jsx)(_components.code, {
        children: "_secret"
      }), ") is a convention meaning \"internal use\" → no language enforcement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-dataclass",
      children: "12.7 @dataclass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@dataclass"
      }), " decorator (Python 3.7+) auto-generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__init__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__repr__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__eq__"
      }), ", and more:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\r\n\r\n@dataclass\r\nclass Person:\r\n    name: str\r\n    age: int\r\n    email: str = \"\"                     # default value\r\n    tags: list[str] = field(default_factory=list)  # mutable default\r\n    \r\n    @property\r\n    def is_adult(self) -> bool:\r\n        return self.age >= 18\r\n\r\np1 = Person(\"Alice\", 30, \"alice@example.com\")\r\np2 = Person(\"Alice\", 30, \"alice@example.com\")\r\nprint(p1)                # Person(name='Alice', age=30, email='alice@example.com', tags=[])\r\nprint(p1 == p2)          # True\r\nprint(p1.is_adult)       # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1271-dataclass-parameters",
      children: "12.7.1 dataclass Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass(order=True, frozen=True, slots=True)\r\nclass Point:\r\n    x: float\r\n    y: float\r\n\r\np = Point(3, 4)\r\n# p.x = 5   # AttributeError if frozen=True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "order=True"
        }), ": generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__lt__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__le__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__gt__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__ge__"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frozen=True"
        }), ": instances are immutable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "__setattr__"
        }), " raises)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "slots=True"
        }), " (3.10+): generates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__slots__"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1272-inheritance-with-dataclass",
      children: "12.7.2 Inheritance with dataclass"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass\r\nclass Employee(Person):\r\n    employee_id: str\r\n    department: str = \"Engineering\"\r\n\r\ne = Employee(\"Bob\", 25, \"bob@example.com\", \"E1234\")\r\nprint(e)  # Employee(name='Bob', age=25, email='bob@example.com', tags=[], employee_id='E1234', department='Engineering')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fields from the parent come first, then child fields."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-method-types-summary",
      children: "12.8 Method Types Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decorator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "First Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Access Instance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Access Class"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "self"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@classmethod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@staticmethod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (unless passed explicitly)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@property"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "self"
            }), " (on getter)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "129-class-as-a-callable",
      children: "12.9 Class as a Callable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A class is callable → calling it creates a new instance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Vector:\r\n    def __init__(self, x, y):\r\n        self.x = x\r\n        self.y = y\r\n    \r\n    def __call__(self, scale: float = 1.0) -> tuple:\r\n        \"\"\"Make instances callable.\"\"\"\r\n        return (self.x * scale, self.y * scale)\r\n\r\nv = Vector(3, 4)\r\nprint(v())       # (3, 4)\r\nprint(v(2))      # (6, 8)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decorator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "First Param"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "self"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@classmethod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@staticmethod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "self (getter)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class Dog:\r\n    species = \"Canis\"\r\n    def __init__(self, name):\r\n        self.name = name\r\n    def bark(self):\r\n        return f\"{self.name} says Woof!\"\r\n\r\nbuddy = Dog(\"Buddy\")\r\nprint(buddy.bark())\n"
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
            children: "Models in Django/Flask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom data containers with dataclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration objects with validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton pattern with class decorators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12.1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the first parameter of an instance method?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cls"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["self ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "instance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "this"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What does @classmethod receive as first argument?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "self"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["cls ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "instance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "class"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does @property allow you to do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "define class methods"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["control attribute access with getter/setter ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "create static methods"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["auto-generate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "slots"
      }), " primarily used for?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["memory optimisation ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "name mangling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "property definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "class inheritance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does @dataclass auto-generate?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), " only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repr"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "eq"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@property"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "slots"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript supports classes with a similar but distinct syntax. TypeScript adds visibility modifiers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), ") and parameter properties:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class BankAccount {\r\n  // TypeScript: visibility modifiers and type annotations\r\n  private _balance: number;\r\n  static interestRate: number = 0.05;\r\n  readonly accountNumber: string;\r\n\r\n  // Constructor with parameter property (shorthand)\r\n  constructor(\r\n    public owner: string,\r\n    initialBalance: number = 0,\r\n    public readonly bankName: string = \"Default Bank\"\r\n  ) {\r\n    this._balance = initialBalance;\r\n    this.accountNumber = `ACC-${Date.now()}`;\r\n  }\r\n\r\n  // Getter (like @property)\r\n  get balance(): number {\r\n    return this._balance;\r\n  }\r\n\r\n  // Setter\r\n  set balance(amount: number) {\r\n    if (amount < 0) throw new Error(\"Balance cannot be negative\");\r\n    this._balance = amount;\r\n  }\r\n\r\n  deposit(amount: number): void {\r\n    if (amount <= 0) throw new Error(\"Amount must be positive\");\r\n    this._balance += amount;\r\n  }\r\n\r\n  withdraw(amount: number): boolean {\r\n    if (amount > this._balance) return false;\r\n    this._balance -= amount;\r\n    return true;\r\n  }\r\n\r\n  // Static method (like @classmethod but no cls context)\r\n  static createDefault(owner: string): BankAccount {\r\n    return new BankAccount(owner, 100);\r\n  }\r\n}\r\n\r\n// Usage\r\nconst acc = new BankAccount(\"Alice\", 500);\r\nacc.deposit(200);\r\nconsole.log(acc.balance);  // 700 (uses getter)\r\nconsole.log(BankAccount.interestRate);  // 0.05\r\n\r\n// TypeScript property decorator (Python @property equivalent)\r\n// Built-in get/set in TypeScript classes as shown above\r\n\r\n// Data class equivalent (like @dataclass)\r\ninterface Book {\r\n  title: string;\r\n  author: string;\r\n  readonly isbn: string;\r\n}\r\n\r\n// Or use a class with constructor shorthand\r\nclass BookClass {\r\n  constructor(\r\n    public title: string,\r\n    public author: string,\r\n    public readonly isbn: string,\r\n    public year: number\r\n  ) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-oop",
      children: "Python vs TypeScript OOP"
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
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__init__"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "constructor()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance reference"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "self"
            }), " (explicit)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " (implicit)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visibility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Convention ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Properties"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@property"
            }), " decorator"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "get"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "set"
            }), " keywords"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@staticmethod"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@classmethod"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " keyword"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@dataclass"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "interface"
            }), " or constructor shorthand"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ABC"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@abstractmethod"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "abstract class"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "abstract"
            }), " methods"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oop-design-best-practices",
      children: "OOP Design Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# 1. Favor composition over inheritance\r\n# Instead of: class Car(Engine, Wheels, Body)\r\nclass Engine:\r\n    def start(self): ...\r\n    def stop(self): ...\r\n\r\nclass Car:\r\n    def __init__(self):\r\n        self.engine = Engine()  # composition\r\n        self._speed = 0\r\n\r\n    def start(self):\r\n        self.engine.start()\r\n        self._speed = 0\r\n\r\n# 2. Single Responsibility Principle\r\n# A class should have one reason to change\r\nclass Invoice:\r\n    \"\"\"Handles invoice data only.\"\"\"\r\n\r\nclass InvoicePrinter:\r\n    \"\"\"Handles invoice formatting and printing.\"\"\"\r\n\r\nclass InvoiceRepository:\r\n    \"\"\"Handles invoice persistence.\"\"\"\r\n\r\n# 3. Encapsulate what varies\r\nclass PaymentProcessor:\r\n    def process(self, amount: float, method: str):\r\n        if method == \"credit_card\":\r\n            self._process_credit(amount)\r\n        elif method == \"paypal\":\r\n            self._process_paypal(amount)\r\n        elif method == \"crypto\":\r\n            self._process_crypto(amount)\r\n\r\n    def _process_credit(self, amount): ...\r\n    def _process_paypal(self, amount): ...\r\n    def _process_crypto(self, amount): ...\r\n\r\n# 4. Use @dataclass for data containers\r\nfrom dataclasses import dataclass, field\r\n\r\n@dataclass\r\nclass Address:\r\n    street: str\r\n    city: str\r\n    zip_code: str\r\n    country: str = \"US\"  # default\r\n\r\n@dataclass\r\nclass Customer:\r\n    name: str\r\n    email: str\r\n    address: Address\r\n    orders: list = field(default_factory=list)\r\n    active: bool = True\r\n\r\n# 5. Define clear interfaces with abstract base classes\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass Repository(ABC):\r\n    @abstractmethod\r\n    def save(self, entity): ...\r\n    @abstractmethod\r\n    def find_by_id(self, id): ...\r\n    @abstractmethod\r\n    def delete(self, id): ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 12: TypeScript Class Equivalents\r\n// Python: class with __init__ → TypeScript: class with constructor\r\nclass BankAccount {\r\n  private _balance: number;\r\n  static interestRate: number = 0.05;\r\n\r\n  constructor(public owner: string, initialBalance: number = 0) {\r\n    this._balance = initialBalance;\r\n  }\r\n\r\n  // Python: @property → TypeScript: getter\r\n  get balance(): number {\r\n    return this._balance;\r\n  }\r\n\r\n  // Python: @property.setter → TypeScript: setter\r\n  set balance(amount: number) {\r\n    if (amount < 0) throw new Error(\"Balance cannot be negative\");\r\n    this._balance = amount;\r\n  }\r\n\r\n  // Python: classmethod → TypeScript: static method\r\n  static setInterestRate(rate: number): void {\r\n    BankAccount.interestRate = rate;\r\n  }\r\n\r\n  deposit(amount: number): void {\r\n    if (amount <= 0) throw new Error(\"Amount must be positive\");\r\n    this._balance += amount;\r\n  }\r\n\r\n  withdraw(amount: number): boolean {\r\n    if (amount > this._balance) return false;\r\n    this._balance -= amount;\r\n    return true;\r\n  }\r\n}\r\n\r\n// Usage\r\nconst acc = new BankAccount(\"Alice\", 1000);\r\nacc.deposit(500);\r\nconsole.log(acc.balance);  // 1500\r\n\r\n// Python: @dataclass → TypeScript: class with constructor shorthand\r\nclass Address {\r\n  constructor(\r\n    public street: string,\r\n    public city: string,\r\n    public zip: string,\r\n    public country: string = \"US\"\r\n  ) {}\r\n}\r\n\r\n// Python: @staticmethod → TypeScript: static method\r\nclass MathUtils {\r\n  static clamp(value: number, min: number, max: number): number {\r\n    return Math.max(min, Math.min(max, value));\r\n  }\r\n}\r\nconsole.log(MathUtils.clamp(150, 0, 100));  // 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-oop-patterns",
      children: "More TypeScript OOP Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: @property for computed attributes → TypeScript: getter\r\nclass Circle {\r\n  constructor(public radius: number) {}\r\n  get area(): number { return Math.PI * this.radius ** 2; }\r\n  get circumference(): number { return 2 * Math.PI * this.radius; }\r\n}\r\nconst c = new Circle(5);\r\nconsole.log(c.area);  // 78.54 (computed, not stored)\r\n\r\n// Python: @staticmethod → TypeScript: static method\r\nclass StringUtils {\r\n  static isEmpty(s: string | null | undefined): boolean {\r\n    return s == null || s.trim().length === 0;\r\n  }\r\n}\r\nconsole.log(StringUtils.isEmpty(\"\"));   // true\r\nconsole.log(StringUtils.isEmpty(\"a\"));  // false\r\n\r\n// Python: @classmethod → TypeScript: static factory method\r\nclass Temperature {\r\n  private constructor(public kelvin: number) {}\r\n  static fromCelsius(c: number): Temperature {\r\n    return new Temperature(c + 273.15);\r\n  }\r\n  static fromFahrenheit(f: number): Temperature {\r\n    return new Temperature(((f - 32) * 5) / 9 + 273.15);\r\n  }\r\n  get celsius(): number { return this.kelvin - 273.15; }\r\n}\r\nconst boiling = Temperature.fromCelsius(100);\r\nconsole.log(boiling.celsius);  // 100\r\n\r\n// Python: __slots__ → TypeScript: class with known properties\r\nclass Point {\r\n  constructor(\r\n    public x: number,\r\n    public y: number\r\n  ) {}\r\n  // TypeScript enforces property names at compile time\r\n  // (Point has only x, y — no dynamic properties possible)\r\n}\r\n\r\n// Python: dataclass frozen=True → TypeScript: readonly\r\nclass ImmutablePoint {\r\n  constructor(\r\n    readonly x: number,\r\n    readonly y: number\r\n  ) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Class Diagram Generator (text-based) ===\r\ninterface ClassInfo {\r\n  name: string;\r\n  properties: { name: string; type: string; access: \"public\" | \"private\" | \"protected\" }[];\r\n  methods: { name: string; params: string; returnType: string; access: \"public\" | \"private\" | \"protected\" }[];\r\n  extends?: string;\r\n  implements?: string[];\r\n}\r\nfunction generateClassDiagram(cls: ClassInfo): string {\r\n  const lines = [`class ${cls.name}${cls.extends ? ` extends ${cls.extends}` : \"\"}${cls.implements ? ` implements ${cls.implements.join(\", \")}` : \"\"} {`];\r\n  for (const p of cls.properties) {\r\n    lines.push(`  ${p.access === \"private\" ? \"-\" : p.access === \"protected\" ? \"#\" : \"+\"} ${p.name}: ${p.type}`);\r\n  }\r\n  lines.push(\"  \" + \"---\".repeat(8));\r\n  for (const m of cls.methods) {\r\n    lines.push(`  ${m.access === \"private\" ? \"-\" : p.access === \"protected\" ? \"#\" : \"+\"} ${m.name}(${m.params}): ${m.returnType}`);\r\n  }\r\n  lines.push(\"}\");\r\n  return lines.join(\"\\n\");\r\n}\r\nconst userClass: ClassInfo = {\r\n  name: \"User\",\r\n  properties: [{ name: \"id\", type: \"number\", access: \"private\" }, { name: \"name\", type: \"string\", access: \"public\" }],\r\n  methods: [{ name: \"getId\", params: \"\", returnType: \"number\", access: \"public\" }, { name: \"setName\", params: \"name: string\", returnType: \"void\", access: \"public\" }],\r\n};\r\nconsole.log(generateClassDiagram(userClass));\r\n\r\n// === Method Chain Validator ===\r\nfunction isChainable(cls: object): boolean {\r\n  const proto = Object.getPrototypeOf(cls);\r\n  const methods = Object.getOwnPropertyNames(proto).filter((n) => n !== \"constructor\" && typeof proto[n] === \"function\");\r\n  return methods.every((m) => proto[m]() === undefined || proto[m]() !== undefined);\r\n}\r\nclass ChainBuilder {\r\n  private value = 0;\r\n  add(n: number): this { this.value += n; return this; }\r\n  multiply(n: number): this { this.value *= n; return this; }\r\n  result(): number { return this.value; }\r\n}\r\nconsole.log(isChainable(new ChainBuilder())); // true\r\n\r\n// === Access Modifier Checker ===\r\nclass VisibilityChecker {\r\n  static check(obj: object): { public: string[]; private: string[]; protected: string[] } {\r\n    const all = Object.getOwnPropertyNames(obj);\r\n    return {\r\n      public: all.filter((k) => !k.startsWith(\"_\")),\r\n      private: all.filter((k) => k.startsWith(\"_\") && !k.startsWith(\"__\")),\r\n      protected: all.filter((k) => k.startsWith(\"__\")),\r\n    };\r\n  }\r\n}\r\nclass Demo {\r\n  public x = 1; private y = 2; protected z = 3;\r\n}\r\nconsole.log(VisibilityChecker.check(new Demo()));\r\n\r\n// === Static Factory Pattern ===\r\nclass ConfigBuilder {\r\n  private constructor(private config: Record<string, unknown>) {}\r\n  static fromEnv(): ConfigBuilder { return new ConfigBuilder({ NODE_ENV: process.env.NODE_ENV ?? \"development\" }); }\r\n  static defaults(): ConfigBuilder { return new ConfigBuilder({ host: \"localhost\", port: 3000 }); }\r\n  build(): Record<string, unknown> { return { ...this.config }; }\r\n}\r\nconsole.log(ConfigBuilder.defaults().build());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-oop-patterns",
      children: "TypeScript OOP Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Class with access modifiers (Python: public, _protected, __private) ===\r\nclass Person {\r\n  constructor(\r\n    public name: string,      // Python: self.name = name\r\n    private age: number,       // Python: self.__age = age\r\n    protected id: string       // Python: self._id = id\r\n  ) {}\r\n  greet(): string { return `Hi, I'm ${this.name}, ${this.age}`; }\r\n  getAge(): number { return this.age; }\r\n}\r\nconst p = new Person(\"Alice\", 30, \"A001\");\r\nconsole.log(p.greet());       // Hi, I'm Alice, 30\r\n// p.age  // Error: Property 'age' is private\r\n\r\n// === Python @property in TypeScript ===\r\nclass Temperature {\r\n  constructor(private _celsius: number) {}\r\n  get celsius(): number { return this._celsius; }\r\n  set celsius(v: number) {\r\n    if (v < -273.15) throw new Error(\"Below absolute zero\");\r\n    this._celsius = v;\r\n  }\r\n  get fahrenheit(): number { return this._celsius * 9 / 5 + 32; }\r\n  set fahrenheit(v: number) { this._celsius = (v - 32) * 5 / 9; }\r\n}\r\nconst t = new Temperature(0);\r\nconsole.log(t.fahrenheit);    // 32\r\nt.celsius = 100;\r\nconsole.log(t.fahrenheit);    // 212\r\n\r\n// === Static members (Python: @staticmethod, @classmethod) ===\r\nclass MathUtils {\r\n  static PI = 3.14159;\r\n  static add(a: number, b: number): number { return a + b; }\r\n  static createDefault(): MathUtils { return new MathUtils(); }\r\n}\r\nconsole.log(MathUtils.PI);\r\nconsole.log(MathUtils.add(3, 4));\r\n\r\n// === Abstract class (Python: ABC) ===\r\nabstract class Shape {\r\n  abstract area(): number;\r\n  abstract perimeter(): number;\r\n  describe(): string { return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`; }\r\n}\r\nclass Circle extends Shape {\r\n  constructor(private radius: number) { super(); }\r\n  area(): number { return Math.PI * this.radius ** 2; }\r\n  perimeter(): number { return 2 * Math.PI * this.radius; }\r\n}\r\nclass Rectangle extends Shape {\r\n  constructor(private w: number, private h: number) { super(); }\r\n  area(): number { return this.w * this.h; }\r\n  perimeter(): number { return 2 * (this.w + this.h); }\r\n}\r\nconst shapes: Shape[] = [new Circle(5), new Rectangle(3, 4)];\r\nshapes.forEach(s => console.log(s.describe()));\r\n\r\n// === Interface (Python: Protocol) ===\r\ninterface Flyable { fly(): string; }\r\ninterface Swimmable { swim(): string; }\r\nclass Duck implements Flyable, Swimmable {\r\n  fly(): string { return \"Duck flying\"; }\r\n  swim(): string { return \"Duck swimming\"; }\r\n}\r\n\r\n// === Method Overloading (Python: @singledispatch) ===\r\nclass Display {\r\n  render(value: string): string;\r\n  render(value: number): string;\r\n  render(value: boolean): string;\r\n  render(value: string | number | boolean): string {\r\n    if (typeof value === \"string\") return `String: ${value}`;\r\n    if (typeof value === \"number\") return `Number: ${value}`;\r\n    return `Boolean: ${value}`;\r\n  }\r\n}\r\n\r\n// === Builder Pattern ===\r\nclass UserBuilder {\r\n  private user: { name: string; age?: number; email?: string } = { name: \"\" };\r\n  setName(name: string): this { this.user.name = name; return this; }\r\n  setAge(age: number): this { this.user.age = age; return this; }\r\n  setEmail(email: string): this { this.user.email = email; return this; }\r\n  build(): { name: string; age?: number; email?: string } { return { ...this.user }; }\r\n}\r\nconst user = new UserBuilder().setName(\"Bob\").setAge(25).setEmail(\"bob@x.com\").build();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-oop-design-patterns",
      children: "TypeScript OOP Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Abstract Factory ===\r\ninterface Button { click(): string; }\r\ninterface Checkbox { toggle(): string; }\r\nclass WinButton implements Button { click(): string { return \"Windows button clicked\"; } }\r\nclass MacButton implements Button { click(): string { return \"Mac button clicked\"; } }\r\nclass WinCheckbox implements Checkbox { toggle(): string { return \"Windows checkbox toggled\"; } }\r\nclass MacCheckbox implements Checkbox { toggle(): string { return \"Mac checkbox toggled\"; } }\r\ninterface GUIFactory2 { createButton(): Button; createCheckbox(): Checkbox; }\r\nclass WinFactory2 implements GUIFactory2 {\r\n  createButton(): Button { return new WinButton(); }\r\n  createCheckbox(): Checkbox { return new WinCheckbox(); }\r\n}\r\nclass MacFactory2 implements GUIFactory2 {\r\n  createButton(): Button { return new MacButton(); }\r\n  createCheckbox(): Checkbox { return new MacCheckbox(); }\r\n}\r\n\r\n// === Observer Pattern ===\r\ninterface Observer<T> { update(data: T): void; }\r\nclass Observable<T> {\r\n  private observers: Observer<T>[] = [];\r\n  subscribe(obs: Observer<T>): void { this.observers.push(obs); }\r\n  unsubscribe(obs: Observer<T>): void { this.observers = this.observers.filter(o => o !== obs); }\r\n  notify(data: T): void { for (const obs of this.observers) obs.update(data); }\r\n}\r\nclass ConsoleObserver implements Observer<string> { update(data: string): void { console.log(`Received: ${data}`); } }\r\n\r\n// === Strategy Pattern ===\r\ninterface SortStrategy { sort<T>(items: T[]): T[]; }\r\nclass BubbleSort implements SortStrategy { sort<T>(items: T[]): T[] { const arr = [...items]; for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr.length - i - 1; j++) if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; return arr; } }\r\nclass QuickSort implements SortStrategy { sort<T>(items: T[]): T[] { if (items.length <= 1) return items; const pivot = items[0]; const left = items.slice(1).filter(x => x < pivot); const right = items.slice(1).filter(x => x >= pivot); return [...this.sort(left), pivot, ...this.sort(right)]; } }\r\nclass Sorter { constructor(private strategy: SortStrategy) {} setStrategy(s: SortStrategy): void { this.strategy = s; } sort<T>(items: T[]): T[] { return this.strategy.sort(items); } }\r\n\r\n// === Singleton ===\r\nclass Singleton {\r\n  private static instance: Singleton;\r\n  private constructor(public readonly id: string) {}\r\n  static getInstance(): Singleton { if (!Singleton.instance) Singleton.instance = new Singleton(\"unique\"); return Singleton.instance; }\r\n}\r\n\r\n// === Composite ===\r\ninterface Component { operation(): string; }\r\nclass Leaf implements Component { constructor(private name: string) {} operation(): string { return this.name; } }\r\nclass Composite implements Component {\r\n  private children: Component[] = [];\r\n  add(c: Component): void { this.children.push(c); }\r\n  operation(): string { return this.children.map(c => c.operation()).join(\" + \"); }\r\n}\r\n\r\n// === Proxy (Lazy Initialization) ===\r\nclass ExpensiveResource {\r\n  constructor() { console.log(\"Loading expensive resource...\"); }\r\n  getData(): string { return \"expensive data\"; }\r\n}\r\nclass LazyProxy implements ExpensiveResource {\r\n  private real: ExpensiveResource | null = null;\r\n  getData(): string {\r\n    if (!this.real) this.real = new ExpensiveResource();\r\n    return this.real.getData();\r\n  }\r\n}\r\n\r\nconst factory = new WinFactory2();\r\nconst btn = factory.createButton();\r\nconsole.log(btn.click()); // \"Windows button clicked\"\r\n\r\nconst observable = new Observable<string>();\r\nconst obs = new ConsoleObserver();\r\nobservable.subscribe(obs);\r\nobservable.notify(\"Hello observers!\"); // \"Received: Hello observers!\"\r\n\r\nconst sorter = new Sorter(new BubbleSort());\r\nconsole.log(sorter.sort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]\r\nsorter.setStrategy(new QuickSort());\r\nconsole.log(sorter.sort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Classes define blueprints; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__init__"
        }), " initialises instances."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "self"
        }), " refers to the instance; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cls"
        }), " refers to the class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@classmethod"
        }), ": alternative constructors. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@staticmethod"
        }), ": utility functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@property"
        }), ": computed attributes with getter/setter/deleter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "__slots__"
        }), ": memory optimisation; disallows dynamic attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Name mangling (", (0,jsx_runtime.jsx)(_components.code, {
          children: "__attr__"
        }), "): prevents subclass attribute collisions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@dataclass"
        }), ": auto-generates boilerplate for data-oriented classes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a class attribute and an instance attribute?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@classmethod"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@staticmethod"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__slots__"
        }), " and what trade-off does it introduce?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does name mangling work and what problem does it solve?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What boilerplate does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@dataclass"
        }), " automatically generate?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BankAccount"
        }), " class with balance tracking, deposit, withdraw, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@property"
        }), " for balance (read-only). Include a class attribute ", (0,jsx_runtime.jsx)(_components.code, {
          children: "interest_rate"
        }), " and a class method to change it. Prevent overdraft."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Temperature"
        }), " class that stores a value in Kelvin internally but provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@property"
        }), " getters/setters for Celsius, Fahrenheit, and Kelvin. Validate that absolute zero cannot be crossed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@dataclass"
        }), " for a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Book"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "author"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isbn"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "year"
        }), ". Add a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@property"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "age"
        }), " (current year minus year). Make the class sortable by year."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a simple ORM-style class using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__slots__"
      }), " and descriptors. Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Field"
      }), " descriptor that validates types and constraints. Then create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Model"
      }), " base class that uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__init_subclass__"
      }), " to detect ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Field"
      }), " descriptors and auto-generate table definition strings. Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "save()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "load()"
      }), " methods that serialize/deserialize to a JSON file. Demonstrate with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "User"
      }), " model subclass."]
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