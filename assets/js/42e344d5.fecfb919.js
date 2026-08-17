"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[48736],{

/***/ 31278
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_system_design_11_lld_design_patterns_md_42e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-system-design-11-lld-design-patterns-md-42e.json
const site_docs_courses_system_design_11_lld_design_patterns_md_42e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/system-design/11-lld-design-patterns","title":"Chapter 11: Low-Level Design: Design Patterns","description":"Previous 12 Lld Component Design","source":"@site/docs/courses/system-design/11-lld-design-patterns.md","sourceDirName":"courses/system-design","slug":"/system-design/11-lld-design-patterns","permalink":"/ai-engineering-journey/system-design/11-lld-design-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-lld-design-patterns","slug":"/system-design/11-lld-design-patterns","title":"Chapter 11: Low-Level Design: Design Patterns","sidebar_label":"Chapter 11: Low-Level Design: Design Patterns","sidebar_position":11},"sidebar":"course-system-design","previous":{"title":"Chapter 10: Low-Level Design: SOLID Principles and OOP","permalink":"/ai-engineering-journey/system-design/10-lld-solid-oop"},"next":{"title":"Chapter 12: Low-Level Design: Component and Class Design","permalink":"/ai-engineering-journey/system-design/12-lld-component-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/system-design/11-lld-design-patterns.md


const frontMatter = {
	id: '11-lld-design-patterns',
	slug: '/system-design/11-lld-design-patterns',
	title: 'Chapter 11: Low-Level Design: Design Patterns',
	sidebar_label: 'Chapter 11: Low-Level Design: Design Patterns',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: Low-Level Design: Design Patterns';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "What Are Design Patterns?",
  "id": "what-are-design-patterns",
  "level": 3
}, {
  "value": "Creational Patterns",
  "id": "creational-patterns",
  "level": 3
}, {
  "value": "Structural Patterns",
  "id": "structural-patterns",
  "level": 3
}, {
  "value": "Behavioral Patterns",
  "id": "behavioral-patterns",
  "level": 3
}, {
  "value": "Concurrency Patterns",
  "id": "concurrency-patterns",
  "level": 3
}, {
  "value": "Anti-Patterns",
  "id": "anti-patterns",
  "level": 3
}, {
  "value": "Pattern Comparison",
  "id": "pattern-comparison",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Factory Method — Document Creation",
  "id": "example-1-factory-method--document-creation",
  "level": 3
}, {
  "value": "Example 2: Decorator — Adding Compression and Encryption to a Data Stream",
  "id": "example-2-decorator--adding-compression-and-encryption-to-a-data-stream",
  "level": 3
}, {
  "value": "Example 3: Command Pattern — Undo in a Text Editor",
  "id": "example-3-command-pattern--undo-in-a-text-editor",
  "level": 3
}, {
  "value": "Example 4: Observer — Stock Price Notification",
  "id": "example-4-observer--stock-price-notification",
  "level": 3
}, {
  "value": "Example 5: State Pattern — Vending Machine",
  "id": "example-5-state-pattern--vending-machine",
  "level": 3
}, {
  "value": "Example 6: Producer-Consumer with Thread-Safe Queue",
  "id": "example-6-producer-consumer-with-thread-safe-queue",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
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
  "value": "TypeScript: Design Pattern Implementations",
  "id": "typescript-design-pattern-implementations",
  "level": 3
}, {
  "value": "Implementation: Design Patterns and Architecture",
  "id": "implementation-design-patterns-and-architecture",
  "level": 3
}, {
  "value": "TypeScript: SingletonRegistry, EventBus, and StrategyRouter",
  "id": "typescript-singletonregistry-eventbus-and-strategyrouter",
  "level": 3
}, {
  "value": "Mermaid: Design Pattern Taxonomy",
  "id": "mermaid-design-pattern-taxonomy",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Case Study",
  "id": "case-study",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "chapter-11-low-level-design-design-patterns",
        children: "Chapter 11: Low-Level Design: Design Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/10-lld-solid-oop",
          children: "10 Lld Solid Oop"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/system-design/12-lld-component-design",
          children: "12 Lld Component Design"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify design patterns into creational, structural, behavioral, and concurrency categories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement thread-safe Singleton with double-checked locking and understand its trade-offs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Decorator pattern to add cross-cutting concerns without modifying existing classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between the Observer and Mediator patterns for event-driven architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify anti-patterns (God Object, Spaghetti Code, Lava Flow) in legacy codebases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose among similar patterns (Factory vs Abstract Factory vs Builder) based on construction complexity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational, structural, behavioral design patterns with examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Factory, Observer, Strategy, Adapter, Decorator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creational"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Factory, Builder, Prototype"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structural"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter, Decorator, Proxy, Facade, Composite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavioral"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observer, Strategy, Command, Template, Iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used extensively in Java, C++, Python frameworks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Theory]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Theory is the foundation ? master it before moving to examples and exercises."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-are-design-patterns",
      children: "What Are Design Patterns?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it is frequently tested in system design interviews."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept ? it appears in nearly every system design interview. Understand both the how and the why."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " A common mistake is over-engineering. Always start simple and add complexity only when justified by requirements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Master this concept thoroughly ? it appears in nearly every system design interview.\nDesign patterns are reusable, battle-tested solutions to recurring design problems. They are not code templates but rather formalized best practices that provide a shared vocabulary for designers. The Gang of Four (GoF) book \"Design Patterns: Elements of Reusable Object-Oriented Software\" (1994) cataloged 23 patterns into three categories: Creational, Structural, and Behavioral."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pattern has four essential elements: a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "name"
      }), " (shared vocabulary), a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "problem"
      }), " (when to apply it), a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "solution"
      }), " (the abstraction and relationships), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "consequences"
      }), " (trade-offs and results)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/system-design/11-design-patterns.png",
        alt: "Design Patterns Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creational-patterns",
      children: "Creational Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid over-engineering. Start simple, measure, then optimize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Avoid premature optimization. Start simple, measure, then optimize. Over-engineering is the most common system design mistake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creational patterns abstract the instantiation process, making a system independent of how its objects are created, composed, and represented."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Singleton"
      }), " ensures a class has exactly one instance and provides a global access point. The challenge is thread safety. Double-checked locking (DCL) acquires a lock only when the instance is null, then checks again after acquiring the lock to avoid a race condition on first access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\n\nclass Singleton:\n    _instance = None\n    _lock = threading.Lock()\n\n    def __new__(cls):\n        if cls._instance is None:           # First check (no lock)\n            with cls._lock:                 # Acquire lock\n                if cls._instance is None:    # Second check (with lock)\n                    cls._instance = super().__new__(cls)\n        return cls._instance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Singleton is controversial. It introduces global state, making tests interdependent and hiding dependencies. Many modern frameworks use dependency injection containers instead, which manage object lifecycles without global state."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Factory Method"
      }), " defines an interface for creating an object but lets subclasses decide which class to instantiate. The creation logic is deferred to subclasses."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Abstract Factory"
      }), " provides an interface for creating families of related objects without specifying their concrete classes. A GUI toolkit might have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Button"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Slider"
      }), " families for Windows, macOS, and Linux themes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Builder"
      }), " separates the construction of a complex object from its representation, allowing the same construction process to produce different representations. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fluent interface"
      }), " chains method calls for readability:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class PizzaBuilder:\n    def __init__(self):\n        self._size = None\n        self._cheese = False\n        self._toppings = []\n\n    def set_size(self, size): self._size = size; return self\n    def add_cheese(self): self._cheese = True; return self\n    def add_topping(self, t): self._toppings.append(t); return self\n\n    def build(self) -> Pizza:\n        return Pizza(self._size, self._cheese, self._toppings)\n\npizza = PizzaBuilder().set_size(\"large\").add_cheese().add_topping(\"pepperoni\").build()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prototype"
      }), " creates new objects by cloning an existing instance (the prototype), avoiding costly construction. The prototype pattern is particularly useful when object creation is expensive and most instances are similar to an existing one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structural-patterns",
      children: "Structural Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Always articulate trade-offs clearly ? interviewers value reasoning over the \"right\" answer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Structural patterns concern class and object composition—how entities use each other to form larger structures."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Adapter"
      }), " converts the interface of a class into another interface that clients expect. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "class adapter"
      }), " uses multiple inheritance; an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object adapter"
      }), " uses composition. The object adapter is more flexible because it adapts not just a class but an entire hierarchy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decorator"
      }), " attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality. Python's function decorators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@decorator"
      }), ") are a language-level implementation of this pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import wraps\n\ndef log_calls(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__} with {args}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_calls\ndef compute(x: int) -> int:\n    return x * 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Facade"
      }), " provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use. The Facade does not encapsulate the subsystem—it merely provides a simplified interface."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proxy"
      }), " provides a surrogate or placeholder for another object to control access to it. Variants include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual proxy"
        }), ": delays expensive object creation until it is needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protection proxy"
        }), ": controls access permissions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote proxy"
        }), ": represents an object in a different address space."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Composite"
      }), " composes objects into tree structures to represent part-whole hierarchies. Clients treat individual objects and compositions uniformly through a common ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Component"
      }), " interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "behavioral-patterns",
      children: "Behavioral Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Behavioral patterns concern algorithms and the assignment of responsibilities between objects."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observer"
      }), " defines a one-to-many dependency between objects such that when one object changes state, all its dependents are notified and updated automatically. The publisher (subject) maintains a list of subscribers and broadcasts events to them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class EventBus:\n    def __init__(self):\n        self._subscribers = {}\n\n    def subscribe(self, event_type: str, callback):\n        self._subscribers.setdefault(event_type, []).append(callback)\n\n    def publish(self, event_type: str, data):\n        for callback in self._subscribers.get(event_type, []):\n            callback(data)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy"
      }), " defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from the clients that use it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Command"
      }), " encapsulates a request as an object, thereby letting consumers parameterize clients with different requests, queue or log requests, and support undoable operations. Each command implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute()"
      }), " and optional ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undo()"
      }), ". Commands can be stored in a history stack to support multi-level undo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "State"
      }), " allows an object to alter its behavior when its internal state changes. The object appears to change its class. Each state is a separate class implementing a common interface; transitions are handled within state classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Method"
      }), " defines the skeleton of an algorithm in a base class, deferring some steps to subclasses. Subclasses redefine certain steps without changing the algorithm's structure. It is one of the most common patterns—essentially \"Hollywood Principle\": don't call us, we'll call you."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain of Responsibility"
      }), " passes a request along a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain. Middleware pipelines in web frameworks (Express.js, ASP.NET Core) are textbook examples."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Iterator"
      }), " provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__iter__"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__next__"
      }), " protocols make any class iterable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mediator"
      }), " defines an object that encapsulates how a set of objects interact. It promotes loose coupling by keeping objects from referring to each other explicitly. An air traffic control tower is the real-world analogy—planes communicate through the tower, not directly with each other."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concurrency-patterns",
      children: "Concurrency Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Concurrency patterns address the complexities of coordinating multiple threads of execution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Producer-Consumer"
      }), ": One or more producer threads generate data and place it into a thread-safe queue; one or more consumer threads retrieve and process it. Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "queue.Queue"
      }), " handles the synchronization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reader-Writer Lock"
      }), ": Allows concurrent read access but exclusive write access. Multiple readers can hold the lock simultaneously; a writer must wait for all readers to release. Python's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threading.RLock"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "asyncio.Lock"
      }), " can be extended for this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Thread Pool"
      }), ": Pre-creates a pool of worker threads that reuse threads for multiple tasks, avoiding the overhead of thread creation and destruction. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "concurrent.futures.ThreadPoolExecutor"
      }), " in Python is a production-grade implementation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduler"
      }), ": Coordinates when and how tasks are executed. A priority-based scheduler orders tasks by their scheduled time. A work-stealing scheduler dynamically rebalances load across worker queues (used by Go's goroutine scheduler and Java's ForkJoinPool)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Object"
      }), ": Decouples method execution from method invocation to enhance concurrency and simplify synchronized access. Each object has its own thread of control and a queue of pending requests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anti-patterns",
      children: "Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Anti-patterns are common but ineffective solutions that appear attractive at first but create long-term maintenance problems."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "God Object"
      }), " (aka Blob): A single class that knows too much or does too much. Symptoms include hundreds of methods and fields across dozens of responsibilities. Resolution: decompose by SRP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spaghetti Code"
      }), ": Code with an unstructured, tangled control flow. Characterized by extensive use of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " (or its equivalents—deeply nested conditionals, exception-based control flow). Resolution: apply structured programming and extract methods."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy-Paste Programming"
      }), ": Duplicating code instead of abstracting common behavior. Leads to inconsistent fixes (fixed in one copy but not another). Resolution: extract duplicated logic into shared methods or classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lava Flow"
      }), ": Dead code, commented-out blocks, and abandoned experimental code left in the production codebase. Developers are afraid to remove it. Resolution: aggressively delete; source control preserves history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-comparison",
      children: "Pattern Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly one instance required; global access point acceptable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A class cannot anticipate the class of objects it must create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Families of related products must be created together"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construction has many steps and different representations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object creation is expensive; instances are similar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incompatible interfaces need to work together"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responsibilities must be added dynamically without subclassing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Facade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A simple interface to a complex subsystem is needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to an object must be controlled or deferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part-whole hierarchies must be treated uniformly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One object needs to broadcast state changes to many others"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm selection must vary independently from clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requests must be queued, logged, or undone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object behavior changes with internal state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm skeleton is fixed; steps vary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of Responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request processing should be dynamic and ordered"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mediator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-many communication needs central coordination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-factory-method--document-creation",
      children: "Example 1: Factory Method — Document Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A document editor creates different types of documents. The editor should not know the concrete document type at compile time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass Document(ABC):\n    @abstractmethod\n    def open(self): ...\n    @abstractmethod\n    def save(self): ...\n\nclass TextDocument(Document):\n    def open(self): print(\"Opening text document\")\n    def save(self): print(\"Saving text document\")\n\nclass SpreadsheetDocument(Document):\n    def open(self): print(\"Opening spreadsheet\")\n    def save(self): print(\"Saving spreadsheet\")\n\nclass Application(ABC):\n    @abstractmethod\n    def create_document(self) -> Document: ...\n\n    def new_document(self):\n        doc = self.create_document()\n        doc.open()\n        return doc\n\nclass TextEditor(Application):\n    def create_document(self) -> Document:\n        return TextDocument()\n\nclass SpreadsheetApp(Application):\n    def create_document(self) -> Document:\n        return SpreadsheetDocument()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-decorator--adding-compression-and-encryption-to-a-data-stream",
      children: "Example 2: Decorator — Adding Compression and Encryption to a Data Stream"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The base component reads/writes raw data. Decorators add compression and encryption without modifying the base class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass DataSource(ABC):\n    @abstractmethod\n    def write(self, data: str): ...\n    @abstractmethod\n    def read(self) -> str: ...\n\nclass FileDataSource(DataSource):\n    def __init__(self, path: str):\n        self._path = path\n\n    def write(self, data: str):\n        with open(self._path, 'w') as f:\n            f.write(data)\n\n    def read(self) -> str:\n        with open(self._path, 'r') as f:\n            return f.read()\n\nclass DataSourceDecorator(DataSource):\n    def __init__(self, source: DataSource):\n        self._wraps = source\n\n    def write(self, data: str):\n        self._wraps.write(data)\n\n    def read(self) -> str:\n        return self._wraps.read()\n\nclass CompressionDecorator(DataSourceDecorator):\n    def write(self, data: str):\n        compressed = f\"[COMPRESSED]{data}[/COMPRESSED]\"\n        super().write(compressed)\n\n    def read(self) -> str:\n        raw = super().read()\n        return raw.replace(\"[COMPRESSED]\", \"\").replace(\"[/COMPRESSED]\", \"\")\n\nclass EncryptionDecorator(DataSourceDecorator):\n    def write(self, data: str):\n        encrypted = f\"[ENCRYPTED]{data}[/ENCRYPTED]\"\n        super().write(encrypted)\n\n    def read(self) -> str:\n        raw = super().read()\n        return raw.replace(\"[ENCRYPTED]\", \"\").replace(\"[/ENCRYPTED]\", \"\")\n\n# Usage — compose decorators at runtime\nsource = FileDataSource(\"data.txt\")\nsource = CompressionDecorator(source)\nsource = EncryptionDecorator(source)\nsource.write(\"Hello World\")\nprint(source.read())  # Hello World\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decorators can be stacked in any order, providing enormous flexibility at composition time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-command-pattern--undo-in-a-text-editor",
      children: "Example 3: Command Pattern — Undo in a Text Editor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each operation is a command object that knows how to execute and undo itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass Command(ABC):\n    @abstractmethod\n    def execute(self): ...\n    @abstractmethod\n    def undo(self): ...\n\nclass InsertTextCommand(Command):\n    def __init__(self, buffer: list, text: str, pos: int):\n        self._buffer = buffer\n        self._text = text\n        self._pos = pos\n\n    def execute(self):\n        self._buffer.insert(self._pos, self._text)\n\n    def undo(self):\n        self._buffer.pop(self._pos)\n\nclass DeleteTextCommand(Command):\n    def __init__(self, buffer: list, pos: int):\n        self._buffer = buffer\n        self._pos = pos\n        self._deleted = None\n\n    def execute(self):\n        self._deleted = self._buffer.pop(self._pos)\n\n    def undo(self):\n        self._buffer.insert(self._pos, self._deleted)\n\nclass Editor:\n    def __init__(self):\n        self._buffer = []\n        self._history = []\n\n    def execute(self, cmd: Command):\n        cmd.execute()\n        self._history.append(cmd)\n\n    def undo(self):\n        if self._history:\n            cmd = self._history.pop()\n            cmd.undo()\n\n# Usage\neditor = Editor()\neditor.execute(InsertTextCommand(editor._buffer, \"Hello\", 0))\neditor.execute(InsertTextCommand(editor._buffer, \"World\", 1))\neditor.undo()  # Removes \"World\"\nprint(editor._buffer)  # ['Hello']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-observer--stock-price-notification",
      children: "Example 4: Observer — Stock Price Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple displays observe stock price changes without the stock exchange knowing about them."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class StockExchange:\n    def __init__(self):\n        self._observers = []\n        self._price = 0.0\n\n    def attach(self, observer):\n        self._observers.append(observer)\n\n    def detach(self, observer):\n        self._observers.remove(observer)\n\n    def _notify(self):\n        for obs in self._observers:\n            obs.update(self._price)\n\n    def set_price(self, price: float):\n        self._price = price\n        self._notify()\n\nclass Display:\n    def update(self, price: float):\n        print(f\"Display: Stock price is now ${price:.2f}\")\n\nclass AlertSystem:\n    def update(self, price: float):\n        if price > 150:\n            print(f\"Alert: Price threshold exceeded! ${price:.2f}\")\n\n# Usage\nexchange = StockExchange()\nexchange.attach(Display())\nexchange.attach(AlertSystem())\nexchange.set_price(155.0)\n# Output:\n# Display: Stock price is now $155.00\n# Alert: Price threshold exceeded! $155.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-state-pattern--vending-machine",
      children: "Example 5: State Pattern — Vending Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A vending machine behaves differently based on whether it is idle, has money inserted, or is dispensing a product."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from abc import ABC, abstractmethod\n\nclass VendingMachineState(ABC):\n    @abstractmethod\n    def insert_money(self, amount: float): ...\n    @abstractmethod\n    def select_product(self, code: str): ...\n    @abstractmethod\n    def dispense(self): ...\n\nclass IdleState(VendingMachineState):\n    def __init__(self, machine):\n        self._machine = machine\n\n    def insert_money(self, amount: float):\n        self._machine.balance = amount\n        self._machine.set_state(self._machine.has_money_state)\n        print(f\"Inserted ${amount}\")\n\n    def select_product(self, code: str):\n        print(\"Insert money first\")\n\n    def dispense(self):\n        print(\"Insert money first\")\n\nclass HasMoneyState(VendingMachineState):\n    def __init__(self, machine):\n        self._machine = machine\n\n    def insert_money(self, amount: float):\n        self._machine.balance += amount\n        print(f\"Balance: ${self._machine.balance}\")\n\n    def select_product(self, code: str):\n        product = self._machine.products.get(code)\n        if product and product.price <= self._machine.balance:\n            self._machine.selected = product\n            self._machine.set_state(self._machine.dispensing_state)\n            print(f\"Selected {product.name}\")\n        else:\n            print(\"Insufficient funds or invalid code\")\n\n    def dispense(self):\n        print(\"Select product first\")\n\nclass DispensingState(VendingMachineState):\n    def __init__(self, machine):\n        self._machine = machine\n\n    def insert_money(self, amount: float):\n        print(\"Please collect your product first\")\n\n    def select_product(self, code: str):\n        print(\"Please collect your product first\")\n\n    def dispense(self):\n        product = self._machine.selected\n        self._machine.balance -= product.price\n        print(f\"Dispensing {product.name}\")\n        self._machine.set_state(self._machine.idle_state)\n\nclass Product:\n    def __init__(self, name: str, price: float):\n        self.name = name\n        self.price = price\n\nclass VendingMachine:\n    def __init__(self):\n        self.idle_state = IdleState(self)\n        self.has_money_state = HasMoneyState(self)\n        self.dispensing_state = DispensingState(self)\n        self.state = self.idle_state\n        self.balance = 0.0\n        self.selected = None\n        self.products = {\"A1\": Product(\"Soda\", 1.50), \"B2\": Product(\"Chips\", 2.00)}\n\n    def set_state(self, state: VendingMachineState):\n        self.state = state\n\n    def insert_money(self, amount): self.state.insert_money(amount)\n    def select_product(self, code): self.state.select_product(code)\n    def dispense(self): self.state.dispense()\n\n# Usage\nvm = VendingMachine()\nvm.insert_money(2.00)\nvm.select_product(\"A1\")\nvm.dispense()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The state pattern eliminates the messy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if state == IDLE"
      }), " conditionals. Each state encapsulates its own behavior, and transitions are explicit in the state methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-producer-consumer-with-thread-safe-queue",
      children: "Example 6: Producer-Consumer with Thread-Safe Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Trade-offs are the heart of system design. Always be ready to explain why you chose X over Y."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport queue\nimport time\nimport random\n\ndef producer(q: queue.Queue, items: int):\n    for i in range(items):\n        item = f\"item-{i}\"\n        q.put(item)\n        print(f\"Produced {item}\")\n        time.sleep(random.uniform(0.1, 0.3))\n\ndef consumer(q: queue.Queue, name: str):\n    while True:\n        item = q.get()\n        if item is None:  # Poison pill signals shutdown\n            q.task_done()\n            break\n        print(f\"{name} consumed {item}\")\n        q.task_done()\n        time.sleep(random.uniform(0.2, 0.5))\n\nq = queue.Queue(maxsize=5)\nprod = threading.Thread(target=producer, args=(q, 10))\ncons = [threading.Thread(target=consumer, args=(q, f\"Consumer-{i}\")) for i in range(2)]\n\nfor c in cons: c.start()\nprod.start()\nprod.join()\n\nq.join()  # Wait for all items to be processed\nfor _ in cons: q.put(None)  # Send poison pills\nfor c in cons: c.join()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core topic in Chapter 11: Low-Level Design: Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concept for system design"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential concept from Chapter 11: Low-Level Design: Design Patterns"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relevant across design scenarios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requirements-driven decisions"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which pattern category does Singleton belong to?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) Structural, B) Behavioral, C) Creational, D) Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C) Creational"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does the Decorator pattern add behavior differently than subclassing?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) At compile time via inheritance, B) Dynamically at runtime by wrapping objects, C) By modifying the original class, D) By using global state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) Dynamically at runtime by wrapping objects with additional responsibilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the Command pattern, what enables undo functionality?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) The execute method, B) The history stack storing executed commands with undo logic, C) The Strategy interface, D) The Observer notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) The history stack storing executed commands, each implementing execute() and undo()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What distinguishes the State pattern from the Strategy pattern?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) State changes behavior based on internal state; Strategy allows interchangeable algorithms, B) They are identical, C) State is for concurrency, D) Strategy is for object creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) State pattern changes behavior based on internal state transitions; Strategy pattern allows client to select interchangeable algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the poison pill pattern in Producer-Consumer?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A) A malicious message, B) A special sentinel message that signals consumers to shut down, C) A message that causes errors, D) A high-priority message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B) A special sentinel message placed on the queue that causes consumers to exit their processing loop gracefully"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-design-pattern-implementations",
      children: "TypeScript: Design Pattern Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Singleton ---\nclass ConfigManager {\n  private static instance: ConfigManager;\n  private settings = new Map<string, string>();\n  private constructor() {}\n  static getInstance(): ConfigManager {\n    if (!ConfigManager.instance) ConfigManager.instance = new ConfigManager();\n    return ConfigManager.instance;\n  }\n  set(key: string, value: string): void { this.settings.set(key, value); }\n  get(key: string): string | undefined { return this.settings.get(key); }\n}\n\n// --- Factory Method ---\ninterface DatabaseConnection { query(sql: string): any[]; }\nclass MySQLConnection implements DatabaseConnection {\n  query(sql: string): any[] { return [`MySQL result for: ${sql}`]; }\n}\nclass PostgresConnection implements DatabaseConnection {\n  query(sql: string): any[] { return [`Postgres result for: ${sql}`]; }\n}\nabstract class DatabaseFactory { abstract createConnection(): DatabaseConnection; }\nclass MySQLFactory extends DatabaseFactory {\n  createConnection(): DatabaseConnection { return new MySQLConnection(); }\n}\nclass PostgresFactory extends DatabaseFactory {\n  createConnection(): DatabaseConnection { return new PostgresConnection(); }\n}\n\n// --- Observer ---\ninterface Observer { update(event: string, data: any): void; }\nclass EventBus {\n  private subscribers = new Map<string, Observer[]>();\n  subscribe(event: string, observer: Observer): void {\n    if (!this.subscribers.has(event)) this.subscribers.set(event, []);\n    this.subscribers.get(event)!.push(observer);\n  }\n  publish(event: string, data: any): void {\n    for (const obs of this.subscribers.get(event) ?? []) obs.update(event, data);\n  }\n}\n\n// --- Strategy ---\ninterface CompressionStrategy { compress(data: string): string; }\nclass GzipCompression implements CompressionStrategy {\n  compress(data: string): string { return `gzip(${data.slice(0, 10)}...)`; }\n}\nclass SnappyCompression implements CompressionStrategy {\n  compress(data: string): string { return `snappy(${data.slice(0, 10)}...)`; }\n}\nclass Compressor {\n  constructor(private strategy: CompressionStrategy) {}\n  setStrategy(s: CompressionStrategy): void { this.strategy = s; }\n  compress(data: string): string { return this.strategy.compress(data); }\n}\n\n// --- Decorator ---\ninterface DataSource { write(data: string): void; read(): string; }\nclass FileDataSource implements DataSource {\n  private data = \"\";\n  write(data: string): void { this.data = data; }\n  read(): string { return this.data; }\n}\nclass EncryptionDecorator implements DataSource {\n  constructor(private wrapper: DataSource) {}\n  write(data: string): void { this.wrapper.write(`encrypted(${data})`); }\n  read(): string { const d = this.wrapper.read(); return d.startsWith(\"encrypted(\") ? d.slice(10, -1) : d; }\n}\nclass CompressionDecorator implements DataSource {\n  constructor(private wrapper: DataSource) {}\n  write(data: string): void { this.wrapper.write(`compressed(${data})`); }\n  read(): string { const d = this.wrapper.read(); return d.startsWith(\"compressed(\") ? d.slice(11, -1) : d; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-design-patterns-and-architecture",
      children: "Implementation: Design Patterns and Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "abstract class Creator { abstract factoryMethod(): Product; operation(): string { return `Creator: ${this.factoryMethod().operation()}`; } }\nclass ConcreteCreatorA extends Creator { factoryMethod(): Product { return new ConcreteProductA(); } }\nclass ConcreteCreatorB extends Creator { factoryMethod(): Product { return new ConcreteProductB(); } }\ninterface Product { operation(): string; }\nclass ConcreteProductA implements Product { operation(): string { return \"Product A\"; } }\nclass ConcreteProductB implements Product { operation(): string { return \"Product B\"; } }\nclass BuilderPattern { private parts: string[] = []; add(part: string): this { this.parts.push(part); return this; } build(): string { const r = this.parts.join(\" -> \"); this.parts = []; return r; } }\nclass SingletonClass { private static instance: SingletonClass; private constructor() { this.data = Math.random(); } readonly data: number; static getInstance(): SingletonClass { if (!SingletonClass.instance) SingletonClass.instance = new SingletonClass(); return SingletonClass.instance; } }\nclass ObserverPattern { private subs = new Map<string, Set<(data: any) => void>>();\n  subscribe(event: string, cb: (data: any) => void): void { if (!this.subs.has(event)) this.subs.set(event, new Set()); this.subs.get(event)!.add(cb); }\n  emit(event: string, data: any): void { this.subs.get(event)?.forEach(cb => cb(data)); }\n  unsubscribe(event: string, cb: (data: any) => void): void { this.subs.get(event)?.delete(cb); }\n}\nclass StrategyPattern { constructor(private fn: (a: number) => number) {} execute(value: number): number { return this.fn(value); } setStrategy(fn: (a: number) => number): void { this.fn = fn; } }\nclass DecoratorPattern { operation(): string { return \"base\"; } }\nclass DecoratedA extends DecoratorPattern { constructor(private comp: DecoratorPattern) { super(); } operation(): string { return `A(${this.comp.operation()})`; } }\nclass FacadePattern { private sub1 = new SubSystemA(); private sub2 = new SubSystemB(); execute(): string { return `${this.sub1.prepare()} -> ${this.sub2.finalize()}`; } }\nclass SubSystemA { prepare(): string { return \"SubA ready\"; } }\nclass SubSystemB { finalize(): string { return \"SubB done\"; } }\nclass CommandPattern { private history: string[] = []; execute(cmd: string): void { this.history.push(cmd); } undo(): string | undefined { return this.history.pop(); } getHistory(): string[] { return [...this.history]; } }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld design patterns\n// distributed-systems-scalability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'lld design patterns', data: { topic: 'distributed-systems-scalability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lld design patterns - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'system-design demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'system-design', chapter: 'lld design patterns' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('system-design'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-singletonregistry-eventbus-and-strategyrouter",
      children: "TypeScript: SingletonRegistry, EventBus, and StrategyRouter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SingletonRegistry {\n  private static instances = new Map<string, any>();\n  private static locks = new Map<string, boolean>();\n  private static creating = new Map<string, boolean>();\n\n  static getInstance<T>(key: string, factory: () => T): T {\n    if (this.instances.has(key)) return this.instances.get(key) as T;\n\n    if (!this.creating.get(key)) {\n      this.creating.set(key, true);\n      const instance = factory();\n      this.instances.set(key, instance);\n      this.creating.set(key, false);\n      return instance;\n    }\n\n    while (this.creating.get(key)) {\n      // spin-wait for concurrent creation\n    }\n    return this.instances.get(key) as T;\n  }\n\n  static register<T>(key: string, instance: T): void {\n    if (!this.instances.has(key)) {\n      this.instances.set(key, instance);\n    }\n  }\n\n  static clear(): void {\n    this.instances.clear();\n    this.creating.clear();\n  }\n\n  static getKeys(): string[] {\n    return [...this.instances.keys()];\n  }\n}\n\nclass EventBus {\n  private handlers = new Map<string, Set<{ handler: (event: any) => void; async: boolean }>>();\n  private history = new Map<string, any[]>();\n\n  on<T>(event: string, handler: (event: T) => void): void {\n    if (!this.handlers.has(event)) this.handlers.set(event, new Set());\n    this.handlers.get(event)!.add({ handler, async: false });\n  }\n\n  asyncOn<T>(event: string, handler: (event: T) => void): void {\n    if (!this.handlers.has(event)) this.handlers.set(event, new Set());\n    this.handlers.get(event)!.add({ handler, async: true });\n  }\n\n  emit<T>(event: string, data: T): void {\n    const handlers = this.handlers.get(event);\n    if (!handlers) return;\n    if (!this.history.has(event)) this.history.set(event, []);\n    this.history.get(event)!.push(data);\n\n    for (const entry of handlers) {\n      if (entry.async) {\n        setTimeout(() => entry.handler(data), 0);\n      } else {\n        entry.handler(data);\n      }\n    }\n  }\n\n  off(event: string, handler: (event: any) => void): void {\n    const handlers = this.handlers.get(event);\n    if (!handlers) return;\n    for (const entry of handlers) {\n      if (entry.handler === handler) {\n        handlers.delete(entry);\n        return;\n      }\n    }\n  }\n\n  getHistory(event: string): any[] {\n    return [...(this.history.get(event) ?? [])];\n  }\n\n  clearHistory(event?: string): void {\n    if (event) this.history.delete(event);\n    else this.history.clear();\n  }\n}\n\nclass StrategyRouter {\n  private strategies = new Map<string, (payload: any) => any>();\n  private defaultStrategy: ((payload: any) => any) | null = null;\n\n  register(method: string, handler: (payload: any) => any): void {\n    this.strategies.set(method.toLowerCase(), handler);\n  }\n\n  setDefault(handler: (payload: any) => any): void {\n    this.defaultStrategy = handler;\n  }\n\n  route(method: string, payload: any): any {\n    const handler = this.strategies.get(method.toLowerCase());\n    if (!handler) {\n      if (this.defaultStrategy) return this.defaultStrategy(payload);\n      throw new Error(`No strategy registered for method: ${method}`);\n    }\n    return handler(payload);\n  }\n\n  hasStrategy(method: string): boolean {\n    return this.strategies.has(method.toLowerCase());\n  }\n\n  getRegisteredMethods(): string[] {\n    return [...this.strategies.keys()];\n  }\n}\n\n// Usage example for StrategyRouter\nconst paymentRouter = new StrategyRouter();\npaymentRouter.register(\"credit_card\", (p: any) => ({ status: \"paid\", method: \"credit_card\", id: p.orderId }));\npaymentRouter.register(\"paypal\", (p: any) => ({ status: \"paid\", method: \"paypal\", id: p.orderId }));\npaymentRouter.register(\"crypto\", (p: any) => ({ status: \"paid\", method: \"crypto\", id: p.orderId }));\npaymentRouter.setDefault((p: any) => ({ status: \"rejected\", method: \"unknown\", id: p.orderId }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-design-pattern-taxonomy",
      children: "Mermaid: Design Pattern Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    classDef creational fill#e1f5fe,stroke:#0288d1,stroke-width:2px\n    classDef structural fill#e8f5e9,stroke:#2e7d32,stroke-width:2px\n    classDef behavioral fill#fff3e0,stroke:#e65100,stroke-width:2px\n    classDef concurrency fill#fce4ec,stroke:#c62828,stroke-width:2px\n\n    subgraph \"Design Pattern Taxonomy\"\n        DP[\"Gang of Four<br/>Design Patterns\"]:::creational\n    end\n\n    subgraph \"Creational Patterns\"\n        C1[\"Singleton<br/>One instance, global access\"]:::creational\n        C2[\"Factory Method<br/>Deferred creation to subclass\"]:::creational\n        C3[\"Abstract Factory<br/>Product families\"]:::creational\n        C4[\"Builder<br/>Stepwise construction\"]:::creational\n        C5[\"Prototype<br/>Clone existing\"]:::creational\n    end\n\n    subgraph \"Structural Patterns\"\n        S1[\"Adapter<br/>Interface translation\"]:::structural\n        S2[\"Decorator<br/>Dynamic responsibility\"]:::structural\n        S3[\"Facade<br/>Simplified interface\"]:::structural\n        S4[\"Proxy<br/>Controlled access\"]:::structural\n        S5[\"Composite<br/>Tree structure\"]:::structural\n        S6[\"Bridge<br/>Abstraction vs implementation\"]:::structural\n    end\n\n    subgraph \"Behavioral Patterns\"\n        B1[\"Observer<br/>One-to-many notification\"]:::behavioral\n        B2[\"Strategy<br/>Interchangeable algorithms\"]:::behavioral\n        B3[\"Command<br/>Undoable operations\"]:::behavioral\n        B4[\"State<br/>State-driven behavior\"]:::behavioral\n        B5[\"Template Method<br/>Algorithm skeleton\"]:::behavioral\n        B6[\"Chain of Resp.<br/>Dynamic dispatch\"]:::behavioral\n        B7[\"Mediator<br/>Central coordination\"]:::behavioral\n        B8[\"Iterator<br/>Sequential access\"]:::behavioral\n    end\n\n    subgraph \"Concurrency Patterns\"\n        CC1[\"Producer-Consumer<br/>Buffered work\"]:::concurrency\n        CC2[\"Thread Pool<br/>Worker reuse\"]:::concurrency\n        CC3[\"Reader-Writer Lock<br/>Concurrent reads\"]:::concurrency\n        CC4[\"Active Object<br/>Decoupled execution\"]:::concurrency\n    end\n\n    DP --> C1 & C2 & C3 & C4 & C5\n    DP --> S1 & S2 & S3 & S4 & S5 & S6\n    DP --> B1 & B2 & B3 & B4 & B5 & B6 & B7 & B8\n    DP --> CC1 & CC2 & CC3 & CC4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creational patterns abstract object creation to make systems independent of how objects are built"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Singleton sparingly (prefer DI containers); use Factory Method when a class cannot anticipate the concrete type it needs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structural patterns compose objects to form larger structures without tight coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Decorator for adding cross-cutting concerns (logging, caching, compression); use Adapter to integrate incompatible interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral patterns manage algorithms and responsibility distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Observer for broadcast notifications; use Strategy for interchangeable algorithms; use Command for undoable operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Singleton pattern introduces global state and testability problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace Singleton with dependency injection containers that manage object lifecycles with injection scopes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The Decorator pattern is more flexible than subclassing for adding behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack decorators at runtime for different combinations (compression + encryption + logging) without class explosion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "The State pattern eliminates complex if/else chains tied to object state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each state is a separate class with its own behavior; transitions are explicit in state methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anti-patterns (God Object, Spaghetti, Lava Flow) indicate design decay over time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply SRP aggressively; set CI gates on complexity metrics; aggressively delete dead code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-study",
      children: "Case Study"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E-Commerce Checkout Framework Using Design Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A team building a white-label e-commerce platform needed a checkout framework that could be customized for each merchant (100+ merchants with different payment methods, shipping rules, tax calculations, and discount strategies). The initial implementation used a monolithic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckoutService"
      }), " with 40+ configuration flags and massive if/else chains — adding a new merchant required 2-3 weeks and frequently broke existing merchants."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The team redesigned the framework using design patterns. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy Pattern"
      }), ": Tax calculation was extracted into a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TaxStrategy"
      }), " interface with implementations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "USTax"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EUVATax"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CanadaGST"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ZeroTax"
      }), "). A new country required only a new strategy class. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decorator Pattern"
      }), ": Order total calculation used decorators — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BaseOrderTotal"
      }), " wrapped by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DiscountDecorator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ShippingDecorator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TaxDecorator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GiftWrapDecorator"
      }), ". Merchants composed their decorator chain at configuration time. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Observer Pattern"
      }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderEventBus"
      }), " published events (", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderPlaced"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentReceived"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderShipped"
      }), "). Downstream services (Inventory, Analytics, Email, Fraud Detection) subscribed independently — adding a new subscriber required zero changes to the order flow. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command Pattern"
      }), ": Each checkout step (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ValidateCart"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReserveInventory"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProcessPayment"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SendConfirmation"
      }), ") was a Command with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undo()"
      }), ". A failure in any step triggered a compensating rollback of previous steps (Saga pattern). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Factory Method"
      }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PaymentGatewayFactory"
      }), " created gateway-specific handlers — each payment method (Stripe, PayPal, Braintree, Klarna) had its own factory subclass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The result: new merchant onboarding dropped from 2-3 weeks to 2-3 days. The checkout flow handled 10,000 orders/hour with 99.99% success rate. The codebase grew by only 15% while supporting 5x more merchants. The team attributed the success to pattern-based design — each pattern solved a specific dimension of variability, and patterns composed cleanly without tight coupling between dimensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creational patterns abstract object creation: Singleton (single instance), Factory Method (deferred creation), Abstract Factory (product families), Builder (stepwise construction), Prototype (cloning)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structural patterns compose objects: Adapter (interface translation), Decorator (dynamic responsibility), Facade (simplified interface), Proxy (controlled access), Composite (uniform tree handling)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Behavioral patterns manage algorithms and responsibility: Observer (one-to-many notification), Strategy (interchangeable algorithms), Command (undoable operations), State (state-driven behavior), Template Method (algorithm skeleton), Chain of Responsibility (dynamic dispatch)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concurrency patterns address thread safety: Producer-Consumer (buffered work distribution), Reader-Writer Lock (concurrent reads), Thread Pool (worker reuse)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anti-patterns to avoid: God Object, Spaghetti Code, Copy-Paste Programming, Lava Flow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pattern selection depends on the problem characteristics: use Strategy for interchangeable algorithms, State for state-dependent behavior, Command for undoable operations, and Observer for broadcast notifications."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 1"
      }), "\nSingleton is considered an anti-pattern because it introduces global state, makes unit tests interdependent (tests share the singleton state), hides dependencies (classes call `Singleton.getInstance()` instead of receiving dependencies via constructor), and violates SRP (manages its own lifecycle + business logic). Alternatives: Dependency Injection containers (manage object scope per request/session), module-level instances (Python modules are natural singletons), or passing shared state explicitly through constructor parameters.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 2"
      }), "\n**Class adapter** uses multiple inheritance: the adapter inherits both the target interface and the adaptee class. It adapts a specific class and cannot adapt its subclasses. **Object adapter** uses composition: the adapter holds a reference to the adaptee object and delegates calls. It can adapt the adaptee class and all its subclasses. Choose class adapter when you need to override adaptee behavior. Choose object adapter when you need flexibility (most common) — it's the recommended approach in the GoF book.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 3"
      }), "\nThe history stack stores executed Command objects. Each command implements both `execute()` and `undo()`. For undo: pop the last command from the history stack and call its `undo()` method. For redo: push the undone command onto a redo stack and call `execute()`. A command must store enough state to reverse its effect — typically the \"before\" state (deleted text, old values, previous positions) captured during `execute()` and used during `undo()`. For example, a `DeleteTextCommand` stores the deleted text and its position.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 4"
      }), "\n**Observer** allows one-to-many broadcast where any number of subscribers can receive events from a subject. Communication is indirect but subscribers know about the subject (or at least the event type). **Mediator** centralizes many-to-many communication — objects communicate through the mediator instead of directly with each other. Choose Mediator when: (a) you have complex inter-object dependencies that create a \"spaghetti\" of direct connections, (b) you need to control or coordinate interactions centrally, (c) the set of interacting objects changes frequently. Example: Air traffic control (mediator) vs. social media followers (observer).\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Review Question 5"
      }), "\nThe poison pill is a special sentinel message placed on the queue after all real work items. When a consumer receives the poison pill, it knows to shut down gracefully — finish processing current item, release resources, and exit the loop. It is preferable to forcefully stopping threads because: (a) graceful shutdown — the consumer can complete in-flight work, (b) no resource leaks — files, connections, locks are properly released, (c) predictable — all items before the poison pill are guaranteed processed, (d) no thread interruption exceptions or corrupted state. Each consumer gets its own poison pill.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 1: Thread-Safe Singleton"
      }), "\n```python\n# Module-level singleton (Python modules are singletons)\n# logger.py\nimport logging\n_logger = logging.getLogger(\"app\")\ndef get_logger(): return _logger\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "double-checked-locking",
        children: "Double-checked locking"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class ThreadSafeSingleton:\n_instance = None\n_lock = threading.Lock()\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new"
        }), "(cls):\nif cls._instance is None:\nwith cls._lock:\nif cls._instance is None:\ncls._instance = super().", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new"
        }), "(cls)\nreturn cls._instance"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Module-level is simpler and always thread-safe (import lock), but is eagerly loaded (import time). DCL is lazy (created on first use) but requires careful implementation.\n</details>\n\n<details>\n<summary>Solution for Application Problem 2: Discount Strategy</summary>\n```python\nfrom abc import ABC, abstractmethod\nclass DiscountStrategy(ABC):\n    @abstractmethod\n    def apply(self, total: float) -> float: ...\n\nclass RegularDiscount(DiscountStrategy):\n    def apply(self, total): return total\n\nclass VIPDiscount(DiscountStrategy):\n    def apply(self, total): return total * 0.85\n\nclass EmployeeDiscount(DiscountStrategy):\n    def apply(self, total): return total * 0.70\n\nclass Order:\n    def __init__(self, total: float, strategy: DiscountStrategy):\n        self.total = total\n        self._strategy = strategy\n    def calculate_total(self): return self._strategy.apply(self.total)\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Adding a new discount type (e.g., SeasonalDiscount) requires only a new class — no modification to Order (OCP)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution for Application Problem 3: Middleware Chain"
      }), "\n```python\nfrom abc import ABC, abstractmethod\nclass Middleware(ABC):\n    def __init__(self):\n        self._next = None\n    def set_next(self, middleware): self._next = middleware; return self._next\n    def handle(self, request):\n        if self._next: return self._next.handle(request)\n        return True\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class AuthMiddleware(Middleware):\ndef handle(self, request):\nif not request.get(\"token\"): return False\nprint(f\"Auth passed for {request['token']}\")\nreturn super().handle(request)"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "class LoggingMiddleware(Middleware):\ndef handle(self, request):\nprint(f\"Request: {request}\")\nreturn super().handle(request)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["class RateLimitMiddleware(Middleware):\ndef ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(self, max_requests=10):\nsuper().", (0,jsx_runtime.jsx)(_components.strong, {
          children: "init"
        }), "(); self._count = 0; self._max = max_requests\ndef handle(self, request):\nself._count += 1\nif self._count > self._max: return False\nreturn super().handle(request)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
        id: "build-chain",
        children: "Build chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "auth = AuthMiddleware()\nlogging = LoggingMiddleware()\nrate = RateLimitMiddleware(100)\nauth.set_next(logging).set_next(rate)\nresult = auth.handle({\"token\": \"abc123\", \"path\": \"/api/data\"})"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "</details>\n\n### Challenge Problem\n<details>\n<summary>Solution: Pattern-Based Logging Framework</summary>\n```python\nimport threading, json, queue, time\nfrom abc import ABC, abstractmethod\n\n# Singleton\nclass LoggerCore:\n    _instance = None; _lock = threading.Lock()\n    def __new__(cls):\n        if cls._instance is None:\n            with cls._lock:\n                if cls._instance is None:\n                    cls._instance = super().__new__(cls)\n                    cls._instance._initialized = False\n        return cls._instance\n\n    def configure(self, formatter, appenders, level, buffer_size=10):\n        if not self._initialized:\n            self._formatter = formatter; self._appenders = appenders\n            self._level = level; self._queue = queue.Queue(maxsize=buffer_size)\n            self._flush_thread = threading.Thread(target=self._flush_loop, daemon=True)\n            self._flush_thread.start(); self._initialized = True\n\n    def log(self, level, msg):\n        if level >= self._level:\n            entry = self._formatter.format(level, msg)\n            self._queue.put(entry)  # Command pattern: deferred write\n\n    def _flush_loop(self):\n        while True:\n            try:\n                entry = self._queue.get(timeout=1)\n                for a in self._appenders:\n                    a.append(entry)  # Observer pattern: broadcast\n            except queue.Empty:\n                pass\n\n# Strategy\nclass Formatter(ABC):\n    @abstractmethod\n    def format(self, level, msg): ...\n\nclass JsonFormatter(Formatter):\n    def format(self, level, msg): return json.dumps({\"level\": level, \"msg\": msg, \"time\": time.time()})\n\n# Observer: appenders\nclass Appender(ABC):\n    @abstractmethod\n    def append(self, entry): ...\n\nclass FileAppender(Appender):\n    def __init__(self, path): self.path = path\n    def append(self, entry):\n        with open(self.path, 'a') as f: f.write(entry + '\\n')\n\n# Chain of Responsibility for level filtering\nclass LevelFilter:\n    def __init__(self, min_level): self._min = min_level\n    def filter(self, level): return level >= self._min\n\n# Builder\nclass LoggerBuilder:\n    def __init__(self): self._formatter = None; self._appenders = []; self._level = 0\n    def with_json(self): self._formatter = JsonFormatter(); return self\n    def with_file(self, path): self._appenders.append(FileAppender(path)); return self\n    def with_level(self, level): self._level = level; return self\n    def build(self):\n        core = LoggerCore()\n        core.configure(self._formatter, self._appenders, self._level)\n        return core\n\n# Usage\nlogger = LoggerBuilder().with_json().with_file(\"log.json\").with_level(2).build()\nfor i in range(10): logger.log(2, f\"Message {i}\")\ntime.sleep(2)  # Let flush complete\n"
        })
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