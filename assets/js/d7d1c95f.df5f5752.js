"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7652],{

/***/ 99400
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    S0[Classes and Instances]\n    S1[Instance Methods vs Class Attributes]\n    S2[@classmethod and @staticmethod]\n    S3[@property Decorator]\n    S4[__slots__]\n    S5[Name Mangling]\n    S6[@dataclass]\n    S7[Method Types Summary]\n    S8[Class as a Callable]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n    S6 --> S7\n    S7 --> S8\n"
      })
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
        children: "class Dog:\n    \"\"\"A simple Dog class.\"\"\"\n    species = \"Canis familiaris\"  # class attribute\n    \n    def __init__(self, name: str, age: int):\n        \"\"\"Constructor → initialises instance attributes.\"\"\"\n        self.name = name\n        self.age = age\n    \n    def bark(self) -> str:\n        \"\"\"Instance method.\"\"\"\n        return f\"{self.name} says Woof!\"\n\n# Creating instances\nbuddy = Dog(\"Buddy\", 3)\nmax_dog = Dog(\"Max\", 5)\n\nprint(buddy.name)      # Buddy\nprint(buddy.species)   # Canis familiaris (class attribute)\nprint(buddy.bark())    # Buddy says Woof!\nprint(max_dog.bark())  # Max says Woof!\n"
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
        children: "class Counter:\n    count = 0  # class attribute\n    \n    def __init__(self):\n        self.value = 0  # instance attribute\n        Counter.count += 1\n\nc1 = Counter()\nc2 = Counter()\nprint(Counter.count)   # 2\nprint(c1.value)        # 0\n\n# Modify class attribute via class\nCounter.count = 10\nprint(c2.count)       # 10\n"
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
        children: "class Date:\n    def __init__(self, year: int, month: int, day: int):\n        self.year = year\n        self.month = month\n        self.day = day\n    \n    @classmethod\n    def from_string(cls, date_str: str) -> \"Date\":\n        \"\"\"Alternative constructor → parses 'YYYY-MM-DD'.\"\"\"\n        year, month, day = map(int, date_str.split(\"-\"))\n        return cls(year, month, day)\n    \n    @classmethod\n    def today(cls) -> \"Date\":\n        \"\"\"Alternative constructor → returns today's date.\"\"\"\n        from datetime import date\n        d = date.today()\n        return cls(d.year, d.month, d.day)\n    \n    @staticmethod\n    def is_valid(date_str: str) -> bool:\n        \"\"\"Validate a date string without creating an instance.\"\"\"\n        try:\n            year, month, day = map(int, date_str.split(\"-\"))\n            return 1 <= month <= 12 and 1 <= day <= 31\n        except (ValueError, AttributeError):\n            return False\n    \n    def __repr__(self) -> str:\n        return f\"Date({self.year}, {self.month}, {self.day})\"\n\nd = Date.from_string(\"2025-03-15\")\nprint(d)                      # Date(2025, 3, 15)\nprint(Date.is_valid(\"invalid\"))  # False\n"
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
        children: "class Circle:\n    def __init__(self, radius: float):\n        self._radius = radius\n    \n    @property\n    def radius(self) -> float:\n        \"\"\"Getter → called when accessing circle.radius.\"\"\"\n        return self._radius\n    \n    @radius.setter\n    def radius(self, value: float):\n        \"\"\"Setter → called when assigning to circle.radius.\"\"\"\n        if value < 0:\n            raise ValueError(\"Radius cannot be negative\")\n        self._radius = value\n    \n    @property\n    def area(self) -> float:\n        \"\"\"Read-only computed property.\"\"\"\n        import math\n        return math.pi * self._radius ** 2\n    \n    @property\n    def diameter(self) -> float:\n        return self._radius * 2\n\nc = Circle(5)\nprint(c.radius)    # 5 (uses getter)\nc.radius = 7       # uses setter\nprint(c.area)      # 153.938...\n# c.radius = -1    # ValueError\n"
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
        children: "class Point:\n    __slots__ = (\"x\", \"y\")  # only 'x' and 'y' are allowed\n    \n    def __init__(self, x: float, y: float):\n        self.x = x\n        self.y = y\n\np = Point(3, 4)\nprint(p.x, p.y)     # 3 4\n# p.z = 5            # AttributeError: 'Point' object has no attribute 'z'\n"
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
        children: "# Memory comparison\nimport sys\n\nclass WithoutSlots:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nclass WithSlots:\n    __slots__ = (\"x\", \"y\")\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nwos = WithoutSlots(1, 2)\nws = WithSlots(1, 2)\n\nprint(sys.getsizeof(wos))   # larger (has __dict__)\nprint(sys.getsizeof(ws))    # smaller (no __dict__)\n"
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
        }), " undefined\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: "class MyClass:\n    def __init__(self):\n        self.__secret = 42\n    \n    def get_secret(self):\n        return self.__secret\n\nobj = MyClass()\nprint(obj.get_secret())  # 42\n# print(obj.__secret)     # AttributeError\nprint(obj._MyClass__secret)  # 42 (name mangling is visible)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Name mangling is designed to avoid attribute collisions in subclasses, not to enforce privacy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class SubClass(MyClass):\n    def __init__(self):\n        super().__init__()\n        self.__secret = 99  # this is _SubClass__secret\n\nobj2 = SubClass()\nprint(obj2.get_secret())        # 42 (from parent)\nprint(obj2._SubClass__secret)   # 99\n"
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
        children: "from dataclasses import dataclass, field\n\n@dataclass\nclass Person:\n    name: str\n    age: int\n    email: str = \"\"                     # default value\n    tags: list[str] = field(default_factory=list)  # mutable default\n    \n    @property\n    def is_adult(self) -> bool:\n        return self.age >= 18\n\np1 = Person(\"Alice\", 30, \"alice@example.com\")\np2 = Person(\"Alice\", 30, \"alice@example.com\")\nprint(p1)                # Person(name='Alice', age=30, email='alice@example.com', tags=[])\nprint(p1 == p2)          # True\nprint(p1.is_adult)       # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1271-dataclass-parameters",
      children: "12.7.1 dataclass Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@dataclass(order=True, frozen=True, slots=True)\nclass Point:\n    x: float\n    y: float\n\np = Point(3, 4)\n# p.x = 5   # AttributeError if frozen=True\n"
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
        children: "@dataclass\nclass Employee(Person):\n    employee_id: str\n    department: str = \"Engineering\"\n\ne = Employee(\"Bob\", 25, \"bob@example.com\", \"E1234\")\nprint(e)  # Employee(name='Bob', age=25, email='bob@example.com', tags=[], employee_id='E1234', department='Engineering')\n"
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
        children: "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __call__(self, scale: float = 1.0) -> tuple:\n        \"\"\"Make instances callable.\"\"\"\n        return (self.x * scale, self.y * scale)\n\nv = Vector(3, 4)\nprint(v())       # (3, 4)\nprint(v(2))      # (6, 8)\n"
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
        children: "class Dog:\n    species = \"Canis\"\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return f\"{self.name} says Woof!\"\n\nbuddy = Dog(\"Buddy\")\nprint(buddy.bark())\n"
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
        children: "class BankAccount {\n  // TypeScript: visibility modifiers and type annotations\n  private _balance: number;\n  static interestRate: number = 0.05;\n  readonly accountNumber: string;\n\n  // Constructor with parameter property (shorthand)\n  constructor(\n    public owner: string,\n    initialBalance: number = 0,\n    public readonly bankName: string = \"Default Bank\"\n  ) {\n    this._balance = initialBalance;\n    this.accountNumber = `ACC-${Date.now()}`;\n  }\n\n  // Getter (like @property)\n  get balance(): number {\n    return this._balance;\n  }\n\n  // Setter\n  set balance(amount: number) {\n    if (amount < 0) throw new Error(\"Balance cannot be negative\");\n    this._balance = amount;\n  }\n\n  deposit(amount: number): void {\n    if (amount <= 0) throw new Error(\"Amount must be positive\");\n    this._balance += amount;\n  }\n\n  withdraw(amount: number): boolean {\n    if (amount > this._balance) return false;\n    this._balance -= amount;\n    return true;\n  }\n\n  // Static method (like @classmethod but no cls context)\n  static createDefault(owner: string): BankAccount {\n    return new BankAccount(owner, 100);\n  }\n}\n\n// Usage\nconst acc = new BankAccount(\"Alice\", 500);\nacc.deposit(200);\nconsole.log(acc.balance);  // 700 (uses getter)\nconsole.log(BankAccount.interestRate);  // 0.05\n\n// TypeScript property decorator (Python @property equivalent)\n// Built-in get/set in TypeScript classes as shown above\n\n// Data class equivalent (like @dataclass)\ninterface Book {\n  title: string;\n  author: string;\n  readonly isbn: string;\n}\n\n// Or use a class with constructor shorthand\nclass BookClass {\n  constructor(\n    public title: string,\n    public author: string,\n    public readonly isbn: string,\n    public year: number\n  ) {}\n}\n"
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
        children: "# 1. Favor composition over inheritance\n# Instead of: class Car(Engine, Wheels, Body)\nclass Engine:\n    def start(self): ...\n    def stop(self): ...\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()  # composition\n        self._speed = 0\n\n    def start(self):\n        self.engine.start()\n        self._speed = 0\n\n# 2. Single Responsibility Principle\n# A class should have one reason to change\nclass Invoice:\n    \"\"\"Handles invoice data only.\"\"\"\n\nclass InvoicePrinter:\n    \"\"\"Handles invoice formatting and printing.\"\"\"\n\nclass InvoiceRepository:\n    \"\"\"Handles invoice persistence.\"\"\"\n\n# 3. Encapsulate what varies\nclass PaymentProcessor:\n    def process(self, amount: float, method: str):\n        if method == \"credit_card\":\n            self._process_credit(amount)\n        elif method == \"paypal\":\n            self._process_paypal(amount)\n        elif method == \"crypto\":\n            self._process_crypto(amount)\n\n    def _process_credit(self, amount): ...\n    def _process_paypal(self, amount): ...\n    def _process_crypto(self, amount): ...\n\n# 4. Use @dataclass for data containers\nfrom dataclasses import dataclass, field\n\n@dataclass\nclass Address:\n    street: str\n    city: str\n    zip_code: str\n    country: str = \"US\"  # default\n\n@dataclass\nclass Customer:\n    name: str\n    email: str\n    address: Address\n    orders: list = field(default_factory=list)\n    active: bool = True\n\n# 5. Define clear interfaces with abstract base classes\nfrom abc import ABC, abstractmethod\n\nclass Repository(ABC):\n    @abstractmethod\n    def save(self, entity): ...\n    @abstractmethod\n    def find_by_id(self, id): ...\n    @abstractmethod\n    def delete(self, id): ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 12: TypeScript Class Equivalents\n// Python: class with __init__ → TypeScript: class with constructor\nclass BankAccount {\n  private _balance: number;\n  static interestRate: number = 0.05;\n\n  constructor(public owner: string, initialBalance: number = 0) {\n    this._balance = initialBalance;\n  }\n\n  // Python: @property → TypeScript: getter\n  get balance(): number {\n    return this._balance;\n  }\n\n  // Python: @property.setter → TypeScript: setter\n  set balance(amount: number) {\n    if (amount < 0) throw new Error(\"Balance cannot be negative\");\n    this._balance = amount;\n  }\n\n  // Python: classmethod → TypeScript: static method\n  static setInterestRate(rate: number): void {\n    BankAccount.interestRate = rate;\n  }\n\n  deposit(amount: number): void {\n    if (amount <= 0) throw new Error(\"Amount must be positive\");\n    this._balance += amount;\n  }\n\n  withdraw(amount: number): boolean {\n    if (amount > this._balance) return false;\n    this._balance -= amount;\n    return true;\n  }\n}\n\n// Usage\nconst acc = new BankAccount(\"Alice\", 1000);\nacc.deposit(500);\nconsole.log(acc.balance);  // 1500\n\n// Python: @dataclass → TypeScript: class with constructor shorthand\nclass Address {\n  constructor(\n    public street: string,\n    public city: string,\n    public zip: string,\n    public country: string = \"US\"\n  ) {}\n}\n\n// Python: @staticmethod → TypeScript: static method\nclass MathUtils {\n  static clamp(value: number, min: number, max: number): number {\n    return Math.max(min, Math.min(max, value));\n  }\n}\nconsole.log(MathUtils.clamp(150, 0, 100));  // 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-oop-patterns",
      children: "More TypeScript OOP Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: @property for computed attributes → TypeScript: getter\nclass Circle {\n  constructor(public radius: number) {}\n  get area(): number { return Math.PI * this.radius ** 2; }\n  get circumference(): number { return 2 * Math.PI * this.radius; }\n}\nconst c = new Circle(5);\nconsole.log(c.area);  // 78.54 (computed, not stored)\n\n// Python: @staticmethod → TypeScript: static method\nclass StringUtils {\n  static isEmpty(s: string | null | undefined): boolean {\n    return s == null || s.trim().length === 0;\n  }\n}\nconsole.log(StringUtils.isEmpty(\"\"));   // true\nconsole.log(StringUtils.isEmpty(\"a\"));  // false\n\n// Python: @classmethod → TypeScript: static factory method\nclass Temperature {\n  private constructor(public kelvin: number) {}\n  static fromCelsius(c: number): Temperature {\n    return new Temperature(c + 273.15);\n  }\n  static fromFahrenheit(f: number): Temperature {\n    return new Temperature(((f - 32) * 5) / 9 + 273.15);\n  }\n  get celsius(): number { return this.kelvin - 273.15; }\n}\nconst boiling = Temperature.fromCelsius(100);\nconsole.log(boiling.celsius);  // 100\n\n// Python: __slots__ → TypeScript: class with known properties\nclass Point {\n  constructor(\n    public x: number,\n    public y: number\n  ) {}\n  // TypeScript enforces property names at compile time\n  // (Point has only x, y — no dynamic properties possible)\n}\n\n// Python: dataclass frozen=True → TypeScript: readonly\nclass ImmutablePoint {\n  constructor(\n    readonly x: number,\n    readonly y: number\n  ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Class Diagram Generator (text-based) ===\ninterface ClassInfo {\n  name: string;\n  properties: { name: string; type: string; access: \"public\" | \"private\" | \"protected\" }[];\n  methods: { name: string; params: string; returnType: string; access: \"public\" | \"private\" | \"protected\" }[];\n  extends?: string;\n  implements?: string[];\n}\nfunction generateClassDiagram(cls: ClassInfo): string {\n  const lines = [`class ${cls.name}${cls.extends ? ` extends ${cls.extends}` : \"\"}${cls.implements ? ` implements ${cls.implements.join(\", \")}` : \"\"} {`];\n  for (const p of cls.properties) {\n    lines.push(`  ${p.access === \"private\" ? \"-\" : p.access === \"protected\" ? \"#\" : \"+\"} ${p.name}: ${p.type}`);\n  }\n  lines.push(\"  \" + \"---\".repeat(8));\n  for (const m of cls.methods) {\n    lines.push(`  ${m.access === \"private\" ? \"-\" : p.access === \"protected\" ? \"#\" : \"+\"} ${m.name}(${m.params}): ${m.returnType}`);\n  }\n  lines.push(\"}\");\n  return lines.join(\"\\n\");\n}\nconst userClass: ClassInfo = {\n  name: \"User\",\n  properties: [{ name: \"id\", type: \"number\", access: \"private\" }, { name: \"name\", type: \"string\", access: \"public\" }],\n  methods: [{ name: \"getId\", params: \"\", returnType: \"number\", access: \"public\" }, { name: \"setName\", params: \"name: string\", returnType: \"void\", access: \"public\" }],\n};\nconsole.log(generateClassDiagram(userClass));\n\n// === Method Chain Validator ===\nfunction isChainable(cls: object): boolean {\n  const proto = Object.getPrototypeOf(cls);\n  const methods = Object.getOwnPropertyNames(proto).filter((n) => n !== \"constructor\" && typeof proto[n] === \"function\");\n  return methods.every((m) => proto[m]() === undefined || proto[m]() !== undefined);\n}\nclass ChainBuilder {\n  private value = 0;\n  add(n: number): this { this.value += n; return this; }\n  multiply(n: number): this { this.value *= n; return this; }\n  result(): number { return this.value; }\n}\nconsole.log(isChainable(new ChainBuilder())); // true\n\n// === Access Modifier Checker ===\nclass VisibilityChecker {\n  static check(obj: object): { public: string[]; private: string[]; protected: string[] } {\n    const all = Object.getOwnPropertyNames(obj);\n    return {\n      public: all.filter((k) => !k.startsWith(\"_\")),\n      private: all.filter((k) => k.startsWith(\"_\") && !k.startsWith(\"__\")),\n      protected: all.filter((k) => k.startsWith(\"__\")),\n    };\n  }\n}\nclass Demo {\n  public x = 1; private y = 2; protected z = 3;\n}\nconsole.log(VisibilityChecker.check(new Demo()));\n\n// === Static Factory Pattern ===\nclass ConfigBuilder {\n  private constructor(private config: Record<string, unknown>) {}\n  static fromEnv(): ConfigBuilder { return new ConfigBuilder({ NODE_ENV: process.env.NODE_ENV ?? \"development\" }); }\n  static defaults(): ConfigBuilder { return new ConfigBuilder({ host: \"localhost\", port: 3000 }); }\n  build(): Record<string, unknown> { return { ...this.config }; }\n}\nconsole.log(ConfigBuilder.defaults().build());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-oop-patterns",
      children: "TypeScript OOP Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Class with access modifiers (Python: public, _protected, __private) ===\nclass Person {\n  constructor(\n    public name: string,      // Python: self.name = name\n    private age: number,       // Python: self.__age = age\n    protected id: string       // Python: self._id = id\n  ) {}\n  greet(): string { return `Hi, I'm ${this.name}, ${this.age}`; }\n  getAge(): number { return this.age; }\n}\nconst p = new Person(\"Alice\", 30, \"A001\");\nconsole.log(p.greet());       // Hi, I'm Alice, 30\n// p.age  // Error: Property 'age' is private\n\n// === Python @property in TypeScript ===\nclass Temperature {\n  constructor(private _celsius: number) {}\n  get celsius(): number { return this._celsius; }\n  set celsius(v: number) {\n    if (v < -273.15) throw new Error(\"Below absolute zero\");\n    this._celsius = v;\n  }\n  get fahrenheit(): number { return this._celsius * 9 / 5 + 32; }\n  set fahrenheit(v: number) { this._celsius = (v - 32) * 5 / 9; }\n}\nconst t = new Temperature(0);\nconsole.log(t.fahrenheit);    // 32\nt.celsius = 100;\nconsole.log(t.fahrenheit);    // 212\n\n// === Static members (Python: @staticmethod, @classmethod) ===\nclass MathUtils {\n  static PI = 3.14159;\n  static add(a: number, b: number): number { return a + b; }\n  static createDefault(): MathUtils { return new MathUtils(); }\n}\nconsole.log(MathUtils.PI);\nconsole.log(MathUtils.add(3, 4));\n\n// === Abstract class (Python: ABC) ===\nabstract class Shape {\n  abstract area(): number;\n  abstract perimeter(): number;\n  describe(): string { return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`; }\n}\nclass Circle extends Shape {\n  constructor(private radius: number) { super(); }\n  area(): number { return Math.PI * this.radius ** 2; }\n  perimeter(): number { return 2 * Math.PI * this.radius; }\n}\nclass Rectangle extends Shape {\n  constructor(private w: number, private h: number) { super(); }\n  area(): number { return this.w * this.h; }\n  perimeter(): number { return 2 * (this.w + this.h); }\n}\nconst shapes: Shape[] = [new Circle(5), new Rectangle(3, 4)];\nshapes.forEach(s => console.log(s.describe()));\n\n// === Interface (Python: Protocol) ===\ninterface Flyable { fly(): string; }\ninterface Swimmable { swim(): string; }\nclass Duck implements Flyable, Swimmable {\n  fly(): string { return \"Duck flying\"; }\n  swim(): string { return \"Duck swimming\"; }\n}\n\n// === Method Overloading (Python: @singledispatch) ===\nclass Display {\n  render(value: string): string;\n  render(value: number): string;\n  render(value: boolean): string;\n  render(value: string | number | boolean): string {\n    if (typeof value === \"string\") return `String: ${value}`;\n    if (typeof value === \"number\") return `Number: ${value}`;\n    return `Boolean: ${value}`;\n  }\n}\n\n// === Builder Pattern ===\nclass UserBuilder {\n  private user: { name: string; age?: number; email?: string } = { name: \"\" };\n  setName(name: string): this { this.user.name = name; return this; }\n  setAge(age: number): this { this.user.age = age; return this; }\n  setEmail(email: string): this { this.user.email = email; return this; }\n  build(): { name: string; age?: number; email?: string } { return { ...this.user }; }\n}\nconst user = new UserBuilder().setName(\"Bob\").setAge(25).setEmail(\"bob@x.com\").build();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-oop-design-patterns",
      children: "TypeScript OOP Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Abstract Factory ===\ninterface Button { click(): string; }\ninterface Checkbox { toggle(): string; }\nclass WinButton implements Button { click(): string { return \"Windows button clicked\"; } }\nclass MacButton implements Button { click(): string { return \"Mac button clicked\"; } }\nclass WinCheckbox implements Checkbox { toggle(): string { return \"Windows checkbox toggled\"; } }\nclass MacCheckbox implements Checkbox { toggle(): string { return \"Mac checkbox toggled\"; } }\ninterface GUIFactory2 { createButton(): Button; createCheckbox(): Checkbox; }\nclass WinFactory2 implements GUIFactory2 {\n  createButton(): Button { return new WinButton(); }\n  createCheckbox(): Checkbox { return new WinCheckbox(); }\n}\nclass MacFactory2 implements GUIFactory2 {\n  createButton(): Button { return new MacButton(); }\n  createCheckbox(): Checkbox { return new MacCheckbox(); }\n}\n\n// === Observer Pattern ===\ninterface Observer<T> { update(data: T): void; }\nclass Observable<T> {\n  private observers: Observer<T>[] = [];\n  subscribe(obs: Observer<T>): void { this.observers.push(obs); }\n  unsubscribe(obs: Observer<T>): void { this.observers = this.observers.filter(o => o !== obs); }\n  notify(data: T): void { for (const obs of this.observers) obs.update(data); }\n}\nclass ConsoleObserver implements Observer<string> { update(data: string): void { console.log(`Received: ${data}`); } }\n\n// === Strategy Pattern ===\ninterface SortStrategy { sort<T>(items: T[]): T[]; }\nclass BubbleSort implements SortStrategy { sort<T>(items: T[]): T[] { const arr = [...items]; for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr.length - i - 1; j++) if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; return arr; } }\nclass QuickSort implements SortStrategy { sort<T>(items: T[]): T[] { if (items.length <= 1) return items; const pivot = items[0]; const left = items.slice(1).filter(x => x < pivot); const right = items.slice(1).filter(x => x >= pivot); return [...this.sort(left), pivot, ...this.sort(right)]; } }\nclass Sorter { constructor(private strategy: SortStrategy) {} setStrategy(s: SortStrategy): void { this.strategy = s; } sort<T>(items: T[]): T[] { return this.strategy.sort(items); } }\n\n// === Singleton ===\nclass Singleton {\n  private static instance: Singleton;\n  private constructor(public readonly id: string) {}\n  static getInstance(): Singleton { if (!Singleton.instance) Singleton.instance = new Singleton(\"unique\"); return Singleton.instance; }\n}\n\n// === Composite ===\ninterface Component { operation(): string; }\nclass Leaf implements Component { constructor(private name: string) {} operation(): string { return this.name; } }\nclass Composite implements Component {\n  private children: Component[] = [];\n  add(c: Component): void { this.children.push(c); }\n  operation(): string { return this.children.map(c => c.operation()).join(\" + \"); }\n}\n\n// === Proxy (Lazy Initialization) ===\nclass ExpensiveResource {\n  constructor() { console.log(\"Loading expensive resource...\"); }\n  getData(): string { return \"expensive data\"; }\n}\nclass LazyProxy implements ExpensiveResource {\n  private real: ExpensiveResource | null = null;\n  getData(): string {\n    if (!this.real) this.real = new ExpensiveResource();\n    return this.real.getData();\n  }\n}\n\nconst factory = new WinFactory2();\nconst btn = factory.createButton();\nconsole.log(btn.click()); // \"Windows button clicked\"\n\nconst observable = new Observable<string>();\nconst obs = new ConsoleObserver();\nobservable.subscribe(obs);\nobservable.notify(\"Hello observers!\"); // \"Received: Hello observers!\"\n\nconst sorter = new Sorter(new BubbleSort());\nconsole.log(sorter.sort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]\nsorter.setStrategy(new QuickSort());\nconsole.log(sorter.sort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]\n"
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