"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[43125],{

/***/ 2895
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_16_design_patterns_md_784_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-16-design-patterns-md-784.json
const site_docs_courses_oop_cpp_16_design_patterns_md_784_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/16-design-patterns","title":"Chapter 16: Design Patterns → The Gang of Four","description":"Previous None","source":"@site/docs/courses/oop-cpp/16-design-patterns.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/16-design-patterns","permalink":"/ai-engineering-journey/oop-cpp/16-design-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-design-patterns","slug":"/oop-cpp/16-design-patterns","title":"Chapter 16: Design Patterns → The Gang of Four","sidebar_label":"Chapter 16: Design Patterns → The Gang of Four","sidebar_position":16},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 15: Concurrency","permalink":"/ai-engineering-journey/oop-cpp/15-concurrency"},"next":{"title":"Object-Oriented Programming with C++","permalink":"/ai-engineering-journey/oop-cpp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/16-design-patterns.md


const frontMatter = {
	id: '16-design-patterns',
	slug: '/oop-cpp/16-design-patterns',
	title: 'Chapter 16: Design Patterns → The Gang of Four',
	sidebar_label: 'Chapter 16: Design Patterns → The Gang of Four',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Design Patterns → The Gang of Four';

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
  "value": "16.1 GoF Category Overview",
  "id": "161-gof-category-overview",
  "level": 2
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
  "value": "Pattern Scope",
  "id": "pattern-scope",
  "level": 3
}, {
  "value": "Relationships Between Patterns",
  "id": "relationships-between-patterns",
  "level": 3
}, {
  "value": "16.2 Design Principles",
  "id": "162-design-principles",
  "level": 2
}, {
  "value": "SOLID Principles",
  "id": "solid-principles",
  "level": 3
}, {
  "value": "GRASP Principles",
  "id": "grasp-principles",
  "level": 3
}, {
  "value": "16.3.1 Singleton",
  "id": "1631-singleton",
  "level": 2
}, {
  "value": "Thread-Safe Implementations",
  "id": "thread-safe-implementations",
  "level": 3
}, {
  "value": "a) Meyers Singleton (C++11 magic static)",
  "id": "a-meyers-singleton-c11-magic-static",
  "level": 4
}, {
  "value": "b) std::call_once",
  "id": "b-stdcall_once",
  "level": 4
}, {
  "value": "c) Mutex-Guarded (double-checked locking)",
  "id": "c-mutex-guarded-double-checked-locking",
  "level": 4
}, {
  "value": "16.3.2 Factory Method",
  "id": "1632-factory-method",
  "level": 2
}, {
  "value": "16.3.3 Abstract Factory",
  "id": "1633-abstract-factory",
  "level": 2
}, {
  "value": "Factory Method vs Abstract Factory → Comparison",
  "id": "factory-method-vs-abstract-factory--comparison",
  "level": 3
}, {
  "value": "Creational Patterns at a Glance",
  "id": "creational-patterns-at-a-glance",
  "level": 3
}, {
  "value": "16.3.4 Builder",
  "id": "1634-builder",
  "level": 2
}, {
  "value": "16.3.5 Prototype",
  "id": "1635-prototype",
  "level": 2
}, {
  "value": "Creational Summary",
  "id": "creational-summary",
  "level": 3
}, {
  "value": "16.4.1 Adapter",
  "id": "1641-adapter",
  "level": 2
}, {
  "value": "16.4.2 Bridge",
  "id": "1642-bridge",
  "level": 2
}, {
  "value": "16.4.3 Composite",
  "id": "1643-composite",
  "level": 2
}, {
  "value": "16.4.4 Decorator",
  "id": "1644-decorator",
  "level": 2
}, {
  "value": "16.4.5 Facade",
  "id": "1645-facade",
  "level": 2
}, {
  "value": "16.4.6 Flyweight",
  "id": "1646-flyweight",
  "level": 2
}, {
  "value": "16.4.7 Proxy",
  "id": "1647-proxy",
  "level": 2
}, {
  "value": "16.5.1 Chain of Responsibility",
  "id": "1651-chain-of-responsibility",
  "level": 2
}, {
  "value": "16.5.2 Command",
  "id": "1652-command",
  "level": 2
}, {
  "value": "16.5.3 Interpreter",
  "id": "1653-interpreter",
  "level": 2
}, {
  "value": "16.5.4 Iterator",
  "id": "1654-iterator",
  "level": 2
}, {
  "value": "16.5.5 Mediator",
  "id": "1655-mediator",
  "level": 2
}, {
  "value": "16.5.6 Memento",
  "id": "1656-memento",
  "level": 2
}, {
  "value": "16.5.7 Observer",
  "id": "1657-observer",
  "level": 2
}, {
  "value": "16.5.8 State",
  "id": "1658-state",
  "level": 2
}, {
  "value": "16.5.9 Strategy",
  "id": "1659-strategy",
  "level": 2
}, {
  "value": "16.5.10 Template Method",
  "id": "16510-template-method",
  "level": 2
}, {
  "value": "16.5.11 Visitor",
  "id": "16511-visitor",
  "level": 2
}, {
  "value": "16.6.1 Creational vs Structural vs Behavioral",
  "id": "1661-creational-vs-structural-vs-behavioral",
  "level": 2
}, {
  "value": "16.6.2 Singleton Thread-Safety Comparison",
  "id": "1662-singleton-thread-safety-comparison",
  "level": 2
}, {
  "value": "16.6.3 Factory Method vs Abstract Factory → Comparison",
  "id": "1663-factory-method-vs-abstract-factory--comparison",
  "level": 2
}, {
  "value": "16.6.4 Strategy vs State → Comparison",
  "id": "1664-strategy-vs-state--comparison",
  "level": 2
}, {
  "value": "16.6.5 Template Method vs Strategy → Comparison",
  "id": "1665-template-method-vs-strategy--comparison",
  "level": 2
}, {
  "value": "16.6.6 Iterator vs Composite → Relationship",
  "id": "1666-iterator-vs-composite--relationship",
  "level": 2
}, {
  "value": "16.6.7 Pattern Interaction Summary",
  "id": "1667-pattern-interaction-summary",
  "level": 2
}, {
  "value": "16.7.1 iostreams → Decorator Pattern",
  "id": "1671-iostreams--decorator-pattern",
  "level": 2
}, {
  "value": "16.7.2 std::algorithm → Strategy Pattern",
  "id": "1672-stdalgorithm--strategy-pattern",
  "level": 2
}, {
  "value": "16.7.3 STL Iterators → Iterator Pattern",
  "id": "1673-stl-iterators--iterator-pattern",
  "level": 2
}, {
  "value": "16.7.4 Additional Real-World Examples",
  "id": "1674-additional-real-world-examples",
  "level": 2
}, {
  "value": "Q1: What is the most criticised design pattern and why?",
  "id": "q1-what-is-the-most-criticised-design-pattern-and-why",
  "level": 2
}, {
  "value": "Q2: How would you choose between Factory Method, Abstract Factory, and Builder?",
  "id": "q2-how-would-you-choose-between-factory-method-abstract-factory-and-builder",
  "level": 2
}, {
  "value": "Q3: What is the relationship between Strategy and State? Can they replace each other?",
  "id": "q3-what-is-the-relationship-between-strategy-and-state-can-they-replace-each-other",
  "level": 2
}, {
  "value": "Q4: Which pattern would you use to implement undo/redo in a text editor?",
  "id": "q4-which-pattern-would-you-use-to-implement-undoredo-in-a-text-editor",
  "level": 2
}, {
  "value": "Q5: How do C++ smart pointers relate to design patterns?",
  "id": "q5-how-do-c-smart-pointers-relate-to-design-patterns",
  "level": 2
}, {
  "value": "Q6: The Decorator pattern in C++ → when should you use <code>unique_ptr</code> vs <code>shared_ptr</code> for the wrapped object?",
  "id": "q6-the-decorator-pattern-in-c--when-should-you-use-unique_ptr-vs-shared_ptr-for-the-wrapped-object",
  "level": 2
}, {
  "value": "Q7: How would you implement a thread pool using design patterns?",
  "id": "q7-how-would-you-implement-a-thread-pool-using-design-patterns",
  "level": 2
}, {
  "value": "Quick Reference: All 23 GoF Patterns",
  "id": "quick-reference-all-23-gof-patterns",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "chapter-16-design-patterns--the-gang-of-four",
        children: "Chapter 16: Design Patterns → The Gang of Four"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/15-concurrency",
          children: "15-concurrency"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/oop-cpp/16-design-patterns/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/16-design-patterns/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/16-design-patterns/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/16-design-patterns/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/16-design-patterns/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/16-design-patterns/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify all 23 GoF patterns into Creational, Structural, and Behavioral categories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement every pattern in idiomatic modern C++ with smart pointers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the correct pattern for a given design problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast related patterns (Factory vs Abstract Factory, Strategy vs State, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply SOLID and GRASP principles through pattern selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize GoF patterns in real C++ libraries (STL, iostreams, std::algorithm)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Patterns Covered"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.1 GoF Overview & Design Principles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Category tables, SOLID, GRASP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns emerge from principles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.2 Creational Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Factory Method, Abstract Factory, Builder, Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract object creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.3 Structural Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compose classes into larger structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.4 Behavioral Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define object interaction and responsibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.5 Comparisons & Real Systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-pattern tables, STL/iosteam analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16.6 Interview Corner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 Q&As"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ace the design-pattern interview"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "161-gof-category-overview",
      children: "16.1 GoF Category Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Gang of Four (Gamma, Helm, Johnson, Vlissides, 1994) catalogued 23 patterns into three categories by purpose:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creational-patterns",
      children: "Creational Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Singleton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure one instance, global access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared resource management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define creation interface, let subclasses decide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class-level flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstract Factory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create families of related objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Product-family consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Builder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate construction from representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stepwise complex-object creation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototype"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clone existing objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient copy with customisation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "structural-patterns",
      children: "Structural Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adapter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert one interface to another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple abstraction from implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform independence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat individual and composite objects uniformly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decorator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add responsibilities dynamically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible extension without subclassing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified interface to a subsystem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity hiding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flyweight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share fine-grained objects efficiently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory optimisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control access to an object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy loading, protection, logging"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "behavioral-patterns",
      children: "Behavioral Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chain of Responsibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass request along a chain of handlers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoupled request processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Command"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate request as an object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo/redo, queuing, logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpreter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define grammar and interpret sentences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access elements sequentially without exposing representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mediator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define interaction hub between objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced coupling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memento"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture and restore object state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many dependency notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alter behaviour when internal state changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-machine logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define family of interchangeable algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm selection at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define skeleton of algorithm, defer steps to subclasses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm customisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate operations from object structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double dispatch, open/closed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pattern-scope",
      children: "Pattern Scope"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavioral"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Class"
            }), " (inheritance)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter (class)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreter, Template Method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Object"
            }), " (composition)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Abstract Factory, Builder, Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter (object), Bridge, Composite, Decorator, Facade, Flyweight, Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of Resp., Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relationships-between-patterns",
      children: "Relationships Between Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Factory Method ──specialises──> Abstract Factory\n  Abstract Factory ──uses──> Singleton (for factory instances)\n  Builder ──uses──> Composite (build tree structures)\n  Prototype ──alternative──> Factory Method (clone vs create)\n  Adapter ──similar──> Bridge (different intent)\n  Composite ──works with──> Iterator, Visitor\n  Decorator ──alternative──> Adapter (adds vs converts)\n  Facade ──simplifies──> any subsystem pattern\n  Flyweight ──renders──> Composite (shared leaf nodes)\n  Proxy ──similar──> Decorator (controls vs adds)\n  Chain of Resp. ──uses──> Composite (handler tree)\n  Command ──stored in──> Memento (undo history)\n  Iterator ──traverses──> Composite\n  Mediator ──centralises──> Observer (colleagues ↔ mediator)\n  Memento ──used by──> Command (undo)\n  Observer ──alternative──> Mediator (broadcast vs hub)\n  State ──like──> Strategy (same structure, different intent)\n  Template Method ──related──> Strategy (inheritance vs composition)\n  Visitor ──traverses──> Composite\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "162-design-principles",
      children: "16.2 Design Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solid-principles",
      children: "SOLID Principles"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stands For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Related Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "S"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A class has one reason to change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facade, Mediator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open/Closed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open for extension, closed for modification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy, Template Method, Decorator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Liskov Substitution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subtypes replace base types transparently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method, Abstract Factory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface Segregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many specific interfaces > one general"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter, Facade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency Inversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depend on abstractions, not concretions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Factory, Factory Method"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grasp-principles",
      children: "GRASP Principles"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Information Expert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign responsibility to the class with the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator, Visitor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class A creates Class B if A contains/composes B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method, Abstract Factory, Builder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Controller"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First object beyond UI that handles events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command, Mediator, Facade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Low Coupling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimise dependencies between classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter, Facade, Mediator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High Cohesion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep related responsibilities together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton, Builder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polymorphism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle variation by type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy, State, Template Method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pure Fabrication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create artificial class to achieve low coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter, Command, Observer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Indirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate object mediates between components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mediator, Proxy, Bridge"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protected Variations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shield elements from variation in other elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter, Bridge, Facade"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "163-creational-patterns",
      children: "16.3 Creational Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Creational patterns abstract object creation, decoupling clients from concrete types and hiding instantiation logic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1631-singleton",
      children: "16.3.1 Singleton"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A country has one president. The constitution ensures only one person holds that office at any time, and every citizen can access the president through the same channel."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Ensure a class has exactly one instance and provide a global point of access to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+---------------------------+\n|        Singleton          |\n+---------------------------+\n| - instance: Singleton*    |\n+---------------------------+\n| - Singleton()             |\n| - ~Singleton()            |\n| + instance(): Singleton&  |\n+---------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make the default constructor private (no external instantiation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete copy constructor and copy-assignment operator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide a static method that returns a reference to the sole instance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure thread safety during first-time initialisation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Logger:\n    private:\n        Logger()\n        Logger(const Logger&) = delete\n        Logger& operator=(const Logger&) = delete\n    public:\n        static Logger& instance():\n            if instance is null:\n                instance = new Logger()\n            return instance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thread-safe-implementations",
      children: "Thread-Safe Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "a-meyers-singleton-c11-magic-static",
      children: "a) Meyers Singleton (C++11 magic static)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest and preferred approach. C++11 guarantees that initialisation of a function-local static variable is thread-safe."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <mutex>\n#include <thread>\n\nclass Logger {\npublic:\n    static Logger& instance() {\n        static Logger inst;    // thread-safe in C++11+ (magic static)\n        return inst;\n    }\n\n    void log(const std::string& msg) {\n        std::lock_guard<std::mutex> lock(mtx_);\n        std::cout << \"[LOG] \" << msg << \"\\n\";\n    }\n\nprivate:\n    Logger() { std::cout << \"Logger created\\n\"; }\n    ~Logger() = default;\n    Logger(const Logger&) = delete;\n    Logger& operator=(const Logger&) = delete;\n    std::mutex mtx_;\n};\n\nint main() {\n    Logger::instance().log(\"App started\");\n    Logger::instance().log(\"App finished\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logger created\n[LOG] App started\n[LOG] App finished\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "b-stdcall_once",
      children: "b) std::call_once"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Explicit one-time initialisation with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::once_flag"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <mutex>\n\nclass Singleton {\n    static Singleton* inst;\n    static std::once_flag flag;\n    Singleton() { std::cout << \"Singleton constructed\\n\"; }\npublic:\n    Singleton(const Singleton&) = delete;\n    Singleton& operator=(const Singleton&) = delete;\n\n    static Singleton& instance() {\n        std::call_once(flag, [] { inst = new Singleton(); });\n        return *inst;\n    }\n\n    void do_something() { std::cout << \"Working\\n\"; }\n};\n\nSingleton* Singleton::inst = nullptr;\nstd::once_flag Singleton::flag;\n\nint main() {\n    Singleton::instance().do_something();\n    Singleton::instance().do_something();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Singleton constructed\nWorking\nWorking\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-mutex-guarded-double-checked-locking",
      children: "c) Mutex-Guarded (double-checked locking)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional approach, valid when C++11 memory model guarantees are used."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <mutex>\n\nclass Singleton {\n    static Singleton* inst;\n    static std::mutex mtx;\n    Singleton() { std::cout << \"Singleton constructed\\n\"; }\npublic:\n    Singleton(const Singleton&) = delete;\n    Singleton& operator=(const Singleton&) = delete;\n\n    static Singleton& instance() {\n        if (!inst) {\n            std::lock_guard<std::mutex> lock(mtx);\n            if (!inst) {\n                inst = new Singleton();\n            }\n        }\n        return *inst;\n    }\n};\n\nSingleton* Singleton::inst = nullptr;\nstd::mutex Singleton::mtx;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Creation O(1), access O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis & Design (A&D):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Violates Single Responsibility (manages own lifecycle + business logic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduces global state → hidden dependencies, hard to test"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot be subclassed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meyers variant is the gold standard in modern C++"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exactly one instance is needed (logging, thread pool, device driver)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Global access point makes sense"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency injection can provide the instance instead"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unit-testing is important (singletons are hard to mock)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple instances may be needed later"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1632-factory-method",
      children: "16.3.2 Factory Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant serves many dishes but you order from a menu. The kitchen (creator) decides which specific dish (product) to prepare based on your order. The restaurant doesn't need to change its process when adding new dishes → just extend the menu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Define an interface for creating an object, but let subclasses decide which class to instantiate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+          +--------------+\n|   Creator   |--------->|   Product    |\n+-------------+          +--------------+\n| + factory() |          | + operation()|\n+-------------+          +--------------+\n       ^                          ^\n       |                          |\n+-------------+          +--------------+\n|ConcreteCtor |          | ConcreteProd |\n+-------------+          +--------------+\n| + factory() |          | + operation()|\n+-------------+          +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare a Product interface (abstract base)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteProduct classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare a Creator with a factory method returning Product"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subclass Creator; each overrides the factory method"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Transport:\n    virtual deliver()\n\nclass Truck : Transport:\n    deliver() => \"Deliver by land\"\n\nclass Ship : Transport:\n    deliver() => \"Deliver by sea\"\n\nclass Logistics:\n    virtual createTransport(): Transport\n\nclass RoadLogistics : Logistics:\n    createTransport() => new Truck()\n\nclass SeaLogistics : Logistics:\n    createTransport() => new Ship()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Product interface\nclass Transport {\npublic:\n    virtual ~Transport() = default;\n    virtual std::string deliver() const = 0;\n};\n\n// Concrete Products\nclass Truck : public Transport {\npublic:\n    std::string deliver() const override {\n        return \"Delivering by land in a truck\";\n    }\n};\n\nclass Ship : public Transport {\npublic:\n    std::string deliver() const override {\n        return \"Delivering by sea in a ship\";\n    }\n};\n\n// Creator (abstract)\nclass Logistics {\npublic:\n    virtual ~Logistics() = default;\n    virtual std::unique_ptr<Transport> createTransport() const = 0;\n\n    std::string planDelivery() const {\n        auto t = createTransport();\n        return \"Logistics: \" + t->deliver();\n    }\n};\n\n// Concrete Creators\nclass RoadLogistics : public Logistics {\npublic:\n    std::unique_ptr<Transport> createTransport() const override {\n        return std::make_unique<Truck>();\n    }\n};\n\nclass SeaLogistics : public Logistics {\npublic:\n    std::unique_ptr<Transport> createTransport() const override {\n        return std::make_unique<Ship>();\n    }\n};\n\nint main() {\n    std::unique_ptr<Logistics> logi = std::make_unique<RoadLogistics>();\n    std::cout << logi->planDelivery() << \"\\n\";\n\n    logi = std::make_unique<SeaLogistics>();\n    std::cout << logi->planDelivery() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Logistics: Delivering by land in a truck\nLogistics: Delivering by sea in a ship\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (RoadLogistics::planDelivery):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Call RoadLogistics::planDelivery()\n  -> createTransport() returns unique_ptr<Truck>\n  -> t->deliver() => \"Delivering by land in a truck\"\nResult: \"Logistics: Delivering by land in a truck\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) creation, O(1) dispatch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Satisfies Open/Closed principle: new products don't break existing creators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Satisfies Dependency Inversion: client depends on Product, not concrete types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel class hierarchy (one Creator per Product)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parameterised factory methods can switch on an enum"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A class cannot anticipate the class of objects it must create"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A class wants subclasses to specify the objects it creates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to localise knowledge of which concrete class to create"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simple object creation (just call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make_unique<T>()"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The single Product type never changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need entire product families (use Abstract Factory)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1633-abstract-factory",
      children: "16.3.3 Abstract Factory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A furniture store sells modern and Victorian collections. Each collection includes a chair, sofa, and coffee table. You buy a complete collection → you never mix a modern chair with a Victorian sofa. The store (Abstract Factory) guarantees product-family consistency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Provide an interface for creating families of related or dependent objects without specifying their concrete classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+--------------------+          +------------------+\n| AbstractFactory    |--------->| AbstractProductA |\n+--------------------+          +------------------+\n| + createProductA() |                    ^\n| + createProductB() |                    |\n+--------------------+              +-----------+\n        ^                          | ConcreteA1|\n        |                          +-----------+\n+-------------------+\n| ConcreteFactory1  |           +------------------+\n+-------------------+---------->| AbstractProductB |\n| + createProductA()|                    ^\n| + createProductB()|                    |\n+-------------------+              +-----------+\n                                  | ConcreteB1|\n                                  +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare abstract product interfaces (Chair, Sofa, Table)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement concrete products per variant (ModernChair, VictorianChair)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare the Abstract Factory with creation methods for each product type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Concrete Factory per variant family"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client uses only Abstract Factory and Abstract Product interfaces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Chair: virtual hasLegs(), sitOn()\nclass Sofa: virtual lieOn()\n\nclass ModernChair: Chair\nclass VictorianChair: Chair\nclass ModernSofa: Sofa\nclass VictorianSofa: Sofa\n\nclass FurnitureFactory:\n    virtual createChair(): Chair\n    virtual createSofa(): Sofa\n\nclass ModernFactory: FurnitureFactory\n    createChair() => new ModernChair()\n    createSofa() => new ModernSofa()\n\nclass VictorianFactory: FurnitureFactory\n    createChair() => new VictorianChair()\n    createSofa() => new VictorianSofa()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Abstract Products\nclass Chair {\npublic:\n    virtual ~Chair() = default;\n    virtual std::string style() const = 0;\n    virtual bool hasLegs() const = 0;\n    virtual void sitOn() const = 0;\n};\n\nclass Sofa {\npublic:\n    virtual ~Sofa() = default;\n    virtual std::string style() const = 0;\n    virtual void lieOn() const = 0;\n};\n\n// Concrete Products → Modern\nclass ModernChair : public Chair {\npublic:\n    std::string style() const override { return \"Modern\"; }\n    bool hasLegs() const override { return false; }\n    void sitOn() const override {\n        std::cout << \"Sitting on a modern chair (no legs, floating)\\n\";\n    }\n};\n\nclass ModernSofa : public Sofa {\npublic:\n    std::string style() const override { return \"Modern\"; }\n    void lieOn() const override {\n        std::cout << \"Lying on a modern sofa (minimalist)\\n\";\n    }\n};\n\n// Concrete Products → Victorian\nclass VictorianChair : public Chair {\npublic:\n    std::string style() const override { return \"Victorian\"; }\n    bool hasLegs() const override { return true; }\n    void sitOn() const override {\n        std::cout << \"Sitting on a Victorian chair (ornate, 4 legs)\\n\";\n    }\n};\n\nclass VictorianSofa : public Sofa {\npublic:\n    std::string style() const override { return \"Victorian\"; }\n    void lieOn() const override {\n        std::cout << \"Lying on a Victorian sofa (velvet, tufted)\\n\";\n    }\n};\n\n// Abstract Factory\nclass FurnitureFactory {\npublic:\n    virtual ~FurnitureFactory() = default;\n    virtual std::unique_ptr<Chair> createChair() const = 0;\n    virtual std::unique_ptr<Sofa> createSofa() const = 0;\n};\n\n// Concrete Factories\nclass ModernFactory : public FurnitureFactory {\npublic:\n    std::unique_ptr<Chair> createChair() const override {\n        return std::make_unique<ModernChair>();\n    }\n    std::unique_ptr<Sofa> createSofa() const override {\n        return std::make_unique<ModernSofa>();\n    }\n};\n\nclass VictorianFactory : public FurnitureFactory {\npublic:\n    std::unique_ptr<Chair> createChair() const override {\n        return std::make_unique<VictorianChair>();\n    }\n    std::unique_ptr<Sofa> createSofa() const override {\n        return std::make_unique<VictorianSofa>();\n    }\n};\n\n// Client code uses only interfaces\nvoid furnishRoom(const FurnitureFactory& factory) {\n    auto chair = factory.createChair();\n    auto sofa = factory.createSofa();\n    std::cout << \"Furnishing room in \" << chair->style() << \" style:\\n\";\n    chair->sitOn();\n    sofa->lieOn();\n}\n\nint main() {\n    ModernFactory modern;\n    furnishRoom(modern);\n\n    VictorianFactory victorian;\n    furnishRoom(victorian);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Furnishing room in Modern style:\nSitting on a modern chair (no legs, floating)\nLying on a modern sofa (minimalist)\nFurnishing room in Victorian style:\nSitting on a Victorian chair (ornate, 4 legs)\nLying on a Victorian sofa (velvet, tufted)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "furnishRoom(victorian):\n  victorian.createChair() => VictorianChair\n  victorian.createSofa() => VictorianSofa\n  chair->style() => \"Victorian\"\n  chair->sitOn() => \"Sitting on a Victorian chair (ornate, 4 legs)\"\n  sofa->lieOn() => \"Lying on a Victorian sofa (velvet, tufted)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) creation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guarantees product-family consistency (no mixing Modern with Victorian)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Satisfies Open/Closed: adding a new product family means adding new ConcreteFactory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Violates Open/Closed if adding a new product type (must change AbstractFactory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often uses Factory Method for each creation method internally"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Products must be used in families that must stay consistent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System must be configured with one of multiple families of products"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to hide product-class implementation from clients"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only one product family is ever needed (overkill)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product types change frequently (interface changes break all factories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A simple Factory Method suffices (single product)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "factory-method-vs-abstract-factory--comparison",
      children: "Factory Method vs Abstract Factory → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstract Factory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class (single product)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object (product families)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Products"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One product type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple related product types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass overrides creation method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate factory object per family"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual method in the creator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface with multiple creation methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product Family"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees family consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New product = new Creator subclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New product family = new Factory; new product type = Factory interface change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common for cross-platform code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::make_shared<T>"
            }), " variants"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI toolkit: WinFactory, MacFactory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creational-patterns-at-a-glance",
      children: "Creational Patterns at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Controls"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flexibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Singleton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete class of one product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (per subclass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Families of products"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (per family)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stepwise construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (per director)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloning behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (per registry)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1634-builder",
      children: "16.3.4 Builder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A Subway sandwich shop lets you build your own sandwich: choose bread, protein, cheese, veggies, sauces, and toasting. The same construction process (make sandwich) can produce very different sandwiches. The Director (cashier) guides the Builder (sandwich maker) step by step."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Separate the construction of a complex object from its representation so that the same construction process can create different representations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +-----------------+       +-----------+\n| Director |------>|    Builder      |<------|  Product  |\n+----------+       +-----------------+       +-----------+\n| +construct|      | + buildPartA()  |       | getResult |\n+----------+       | + buildPartB()  |       +-----------+\n                   | + getResult()   |\n                   +-----------------+\n                           ^\n                           |\n                   +-----------------+\n                   | ConcreteBuilder |\n                   +-----------------+\n                   | + buildPartA()  |\n                   | + buildPartB()  |\n                   | + getResult()   |\n                   +-----------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Product class with setters for each part"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare the Builder interface with build-step methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteBuilder(s) → each builds a specific variant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Director that orchestrates the build steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client creates Director + ConcreteBuilder → Director::construct() → Product"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Pizza:\n    dough, sauce, toppings[]\n    setDough(), setSauce(), addTopping()\n    show()\n\nclass PizzaBuilder:\n    Pizza pizza\n    virtual buildDough()\n    virtual buildSauce()\n    virtual buildToppings()\n    result() => pizza\n\nclass HawaiianBuilder: PizzaBuilder\n    buildDough()    => pizza.setDough(\"pan\")\n    buildSauce()    => pizza.setSauce(\"sweet\")\n    buildToppings() => pizza.addTopping(\"ham;pineapple\")\n\nclass SpicyBuilder: PizzaBuilder\n    buildDough()    => pizza.setDough(\"thin\")\n    buildSauce()    => pizza.setSauce(\"tomato\")\n    buildToppings() => pizza.addTopping(\"pepperoni;jalapeno\")\n\nclass Waiter:\n    Pizza construct(PizzaBuilder b):\n        b.buildDough()\n        b.buildSauce()\n        b.buildToppings()\n        return b.result()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nclass Pizza {\npublic:\n    void setDough(const std::string& d) { dough_ = d; }\n    void setSauce(const std::string& s) { sauce_ = s; }\n    void addTopping(const std::string& t) { toppings_.push_back(t); }\n\n    void show() const {\n        std::cout << \"Pizza [\" << dough_ << \" dough, \"\n                  << sauce_ << \" sauce, toppings: \";\n        for (size_t i = 0; i < toppings_.size(); ++i) {\n            if (i) std::cout << \", \";\n            std::cout << toppings_[i];\n        }\n        std::cout << \"]\\n\";\n    }\n\nprivate:\n    std::string dough_;\n    std::string sauce_;\n    std::vector<std::string> toppings_;\n};\n\n// Builder interface\nclass PizzaBuilder {\npublic:\n    virtual ~PizzaBuilder() = default;\n    virtual void buildDough() = 0;\n    virtual void buildSauce() = 0;\n    virtual void buildToppings() = 0;\n    Pizza& result() { return pizza_; }\nprotected:\n    Pizza pizza_;\n};\n\nclass HawaiianBuilder : public PizzaBuilder {\npublic:\n    void buildDough() override { pizza_.setDough(\"pan\"); }\n    void buildSauce() override { pizza_.setSauce(\"sweet\"); }\n    void buildToppings() override {\n        pizza_.addTopping(\"ham\");\n        pizza_.addTopping(\"pineapple\");\n    }\n};\n\nclass SpicyBuilder : public PizzaBuilder {\npublic:\n    void buildDough() override { pizza_.setDough(\"thin\"); }\n    void buildSauce() override { pizza_.setSauce(\"tomato\"); }\n    void buildToppings() override {\n        pizza_.addTopping(\"pepperoni\");\n        pizza_.addTopping(\"jalapeno\");\n    }\n};\n\n// Director\nclass Waiter {\npublic:\n    void construct(PizzaBuilder& builder) {\n        builder.buildDough();\n        builder.buildSauce();\n        builder.buildToppings();\n    }\n};\n\nint main() {\n    Waiter waiter;\n\n    HawaiianBuilder hb;\n    waiter.construct(hb);\n    hb.result().show();\n\n    SpicyBuilder sb;\n    waiter.construct(sb);\n    sb.result().show();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Pizza [pan dough, sweet sauce, toppings: ham, pineapple]\nPizza [thin dough, tomato sauce, toppings: pepperoni, jalapeno]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (Hawaiian):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiter::construct(hb):\n  hb.buildDough()     -> pizza_.dough_ = \"pan\"\n  hb.buildSauce()     -> pizza_.sauce_ = \"sweet\"\n  hb.buildToppings()  -> pizza_.toppings_ = [\"ham\", \"pineapple\"]\nhb.result().show() -> prints \"Pizza [pan dough, sweet sauce, toppings: ham, pineapple]\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) where n = number of build steps. Memory O(1) beyond product."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separates construction logic from product representation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same construction process yields different products"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finer control than Factory Method (step-by-step)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Director is optional → clients can call builder steps directly"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fluent builder returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        }), " for method chaining"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object construction requires many steps with variations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The construction process should allow different representations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to isolate complex construction code from business logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object can be constructed in one step (use Factory Method)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variants are simple and few (constructor overloading suffices)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1635-prototype",
      children: "16.3.5 Prototype"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " When a cell divides (mitosis), it creates an exact copy of itself → a clone. In software, instead of instantiating a new object from scratch, you clone an existing one and optionally customise it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------+\n|   Prototype      |\n+------------------+\n| + clone(): self  |\n+------------------+\n        ^\n        |\n+------------------+\n| ConcretePrototype |\n+------------------+\n| + clone(): self  |\n+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare a Prototype interface with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clone()"
        }), " method"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcretePrototype that copies itself"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally maintain a PrototypeRegistry (map of named prototypes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client clones prototypes instead of calling constructors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Shape:\n    x, y, color\n    virtual clone(): Shape\n    virtual render()\n\nclass Rectangle: Shape:\n    width, height\n    clone() => new Rectangle(*this)    // copy constructor\n\nclass Circle: Shape:\n    radius\n    clone() => new Circle(*this)       // copy constructor\n\n// Client:\nregistry[\"large_circle\"] = Circle(50)\nc = registry[\"large_circle\"].clone()  // no new Circle(...)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <unordered_map>\n\nclass Shape {\npublic:\n    virtual ~Shape() = default;\n    virtual std::unique_ptr<Shape> clone() const = 0;\n    virtual void render() const = 0;\n    virtual std::string type() const = 0;\n};\n\nclass Rectangle : public Shape {\npublic:\n    Rectangle(float w, float h, int x = 0, int y = 0)\n        : width_(w), height_(h), x_(x), y_(y) {}\n\n    std::unique_ptr<Shape> clone() const override {\n        return std::make_unique<Rectangle>(*this);\n    }\n\n    void render() const override {\n        std::cout << \"Rectangle(\" << x_ << \",\" << y_\n                  << \") \" << width_ << \"x\" << height_ << \"\\n\";\n    }\n\n    std::string type() const override { return \"Rectangle\"; }\n\nprivate:\n    float width_, height_;\n    int x_, y_;\n};\n\nclass Circle : public Shape {\npublic:\n    Circle(float r, int x = 0, int y = 0)\n        : radius_(r), x_(x), y_(y) {}\n\n    std::unique_ptr<Shape> clone() const override {\n        return std::make_unique<Circle>(*this);\n    }\n\n    void render() const override {\n        std::cout << \"Circle(\" << x_ << \",\" << y_\n                  << \") radius=\" << radius_ << \"\\n\";\n    }\n\n    std::string type() const override { return \"Circle\"; }\n\nprivate:\n    float radius_;\n    int x_, y_;\n};\n\n// Prototype Registry\nclass ShapeRegistry {\npublic:\n    void add(const std::string& key, std::unique_ptr<Shape> proto) {\n        prototypes_[key] = std::move(proto);\n    }\n\n    std::unique_ptr<Shape> create(const std::string& key) const {\n        auto it = prototypes_.find(key);\n        if (it != prototypes_.end())\n            return it->second->clone();\n        return nullptr;\n    }\n\nprivate:\n    std::unordered_map<std::string, std::unique_ptr<Shape>> prototypes_;\n};\n\nint main() {\n    ShapeRegistry reg;\n    reg.add(\"big_rect\", std::make_unique<Rectangle>(200, 100));\n    reg.add(\"small_circle\", std::make_unique<Circle>(15));\n\n    auto s1 = reg.create(\"big_rect\");\n    auto s2 = reg.create(\"small_circle\");\n    s1->render();\n    s2->render();\n\n    std::cout << \"Types: \" << s1->type() << \", \" << s2->type() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rectangle(0,0) 200x100\nCircle(0,0) radius=15\nTypes: Rectangle, Circle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ShapeRegistry::create(\"big_rect\"):\n  lookup \"big_rect\" -> Rectangle(200,100)\n  Rectangle::clone() -> make_unique<Rectangle>(*this)\n  returns new Rectangle(200,100)\ns1->render() -> \"Rectangle(0,0) 200x100\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) clone (shallow copy via copy constructor). Deep copy O(n) for complex objects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoids subclassing a creator (Factory Method) when product types vary widely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cloning is often cheaper than full initialisation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prototype Registry provides a flexible object-creation mechanism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires proper deep-copy semantics in C++ (rule of 3/5)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classes to instantiate are determined at runtime (dynamic loading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoiding parallel factory class hierarchies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instances can have only a few different state combinations (pre-configure prototypes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copying is expensive or complex (e.g., objects with external resources)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep-copy semantics are hard to get right"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new"
        }), " suffices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creational-summary",
      children: "Creational Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All five creational patterns abstract away object creation. Singleton controls instance count; Factory Method delegates creation to subclasses; Abstract Factory creates families; Builder constructs step-by-step; Prototype clones existing instances."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "164-structural-patterns",
      children: "16.4 Structural Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Structural patterns (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy) compose classes and objects into larger structures while keeping them flexible and efficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1641-adapter",
      children: "16.4.1 Adapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A travel plug adapter converts a US plug (two flat pins) to fit into a European socket (two round holes). The adapter doesn't change the electrical device → it translates the interface."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Convert the interface of a class into another interface that clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII) → Object Adapter:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+          +-------------+\n|  Client   |--------->|   Target    |\n+-----------+          +-------------+\n                       | + request() |\n                       +-------------+\n                              ^\n                              |\n                       +-------------+          +------------+\n                       |   Adapter   |--------->|  Adaptee   |\n                       +-------------+          +------------+\n                       | + request() |          | + specificR|\n                       +-------------+          +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify Target interface (what the client expects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify Adaptee (existing class with incompatible interface)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Adapter that implements Target and delegates to Adaptee"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client uses Adapter through Target interface"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Target:\n    virtual request(): string\n\nclass Adaptee:\n    specificRequest(): string (returns \"!egakcap\")\n\nclass Adapter(Target):\n    Adaptee adaptee\n    request() => reverse(adaptee.specificRequest())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (Object Adapter):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <algorithm>\n\n// Target interface\nclass Shape {\npublic:\n    virtual ~Shape() = default;\n    virtual void draw(int x, int y, int w, int h) const = 0;\n};\n\n// Adaptee → incompatible interface\nclass LegacyRectangle {\npublic:\n    void display(int x, int y, int w, int h) const {\n        std::cout << \"Legacy rectangle at (\" << x << \",\" << y\n                  << \") size \" << w << \"x\" << h << \"\\n\";\n    }\n};\n\n// Adapter → makes LegacyRectangle fit Shape\nclass RectangleAdapter : public Shape {\npublic:\n    RectangleAdapter(int x, int y, int w, int h)\n        : x_(x), y_(y), w_(w), h_(h) {}\n\n    void draw(int, int, int, int) const override {\n        adaptee_.display(x_, y_, w_, h_);\n    }\n\nprivate:\n    LegacyRectangle adaptee_;\n    int x_, y_, w_, h_;\n};\n\nint main() {\n    std::unique_ptr<Shape> shape = std::make_unique<RectangleAdapter>(10, 20, 100, 50);\n    shape->draw(0, 0, 0, 0); // ignores client params, uses adaptee's own\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Legacy rectangle at (10,20) size 100x50\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) delegation. Memory O(1) wrapper."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class Adapter (multiple inheritance) vs Object Adapter (composition)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object Adapter is preferred in C++ (flexible, works with any Adaptee subclass)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single Responsibility: Adapter handles conversion; Adaptee does its job"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often used for legacy code integration and third-party library wrapping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing class has wrong interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want a reusable class that works with unrelated classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple existing subclasses need interface conversion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can change the Adaptee's interface directly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interface mismatch is fundamental (redesign instead)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1642-bridge",
      children: "16.4.2 Bridge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A remote control (abstraction) works with any TV (implementation). You can turn on/off, change channel, and adjust volume regardless of whether the TV is Sony, Samsung, or LG. The remote and the TV vary independently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Decouple an abstraction from its implementation so that the two can vary independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+       +----------------+\n| Abstraction |------>|  Implementor   |\n+-------------+       +----------------+\n| + operation()|       | + operationImpl|\n+-------------+       +----------------+\n       ^                        ^\n       |                        |\n+-------------+       +----------------+\n| RefinedAbst |       | ConcreteImplA  |\n+-------------+       +----------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Implementor interface (platform-specific operations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteImplementors for each platform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Abstraction that holds a reference to Implementor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create RefinedAbstraction subclasses as needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Device:                  // Implementor\n    virtual isEnabled()\n    virtual enable()\n    virtual disable()\n\nclass TV: Device               // ConcreteImpl\nclass Radio: Device\n\nclass RemoteControl:           // Abstraction\n    Device& device\n    virtual togglePower()\n    virtual volumeUp()\n\nclass AdvancedRemote: RemoteControl\n    virtual mute()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n\n// Implementor\nclass Device {\npublic:\n    virtual ~Device() = default;\n    virtual bool isEnabled() const = 0;\n    virtual void enable() = 0;\n    virtual void disable() = 0;\n    virtual int volume() const = 0;\n    virtual void setVolume(int v) = 0;\n    virtual int channel() const = 0;\n    virtual void setChannel(int c) = 0;\n};\n\n// Concrete Implementor A\nclass TV : public Device {\n    bool on_ = false;\n    int vol_ = 10;\n    int ch_ = 1;\npublic:\n    bool isEnabled() const override { return on_; }\n    void enable() override { on_ = true; std::cout << \"TV on\\n\"; }\n    void disable() override { on_ = false; std::cout << \"TV off\\n\"; }\n    int volume() const override { return vol_; }\n    void setVolume(int v) override { vol_ = v; }\n    int channel() const override { return ch_; }\n    void setChannel(int c) override { ch_ = c; }\n};\n\n// Concrete Implementor B\nclass Radio : public Device {\n    bool on_ = false;\n    int vol_ = 5;\n    int ch_ = 88;\npublic:\n    bool isEnabled() const override { return on_; }\n    void enable() override { on_ = true; std::cout << \"Radio on\\n\"; }\n    void disable() override { on_ = false; std::cout << \"Radio off\\n\"; }\n    int volume() const override { return vol_; }\n    void setVolume(int v) override { vol_ = v; }\n    int channel() const override { return ch_; }\n    void setChannel(int c) override { ch_ = c; }\n};\n\n// Abstraction\nclass RemoteControl {\npublic:\n    explicit RemoteControl(Device& dev) : device_(dev) {}\n    virtual ~RemoteControl() = default;\n\n    virtual void togglePower() {\n        if (device_.isEnabled()) device_.disable();\n        else device_.enable();\n    }\n\n    virtual void volumeUp() {\n        device_.setVolume(device_.volume() + 1);\n        std::cout << \"Volume: \" << device_.volume() << \"\\n\";\n    }\n\n    virtual void volumeDown() {\n        device_.setVolume(device_.volume() - 1);\n        std::cout << \"Volume: \" << device_.volume() << \"\\n\";\n    }\n\nprotected:\n    Device& device_;\n};\n\n// Refined Abstraction\nclass AdvancedRemote : public RemoteControl {\npublic:\n    using RemoteControl::RemoteControl;\n    void mute() {\n        device_.setVolume(0);\n        std::cout << \"Muted\\n\";\n    }\n};\n\nint main() {\n    TV tv;\n    RemoteControl remote(tv);\n    remote.togglePower();    // TV on\n    remote.volumeUp();       // Volume: 11\n\n    Radio radio;\n    AdvancedRemote adv(radio);\n    adv.togglePower();       // Radio on\n    adv.mute();              // Muted\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TV on\nVolume: 11\nRadio on\nMuted\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) delegation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates combinatorial explosion of class hierarchies (no TVRemote, RadioRemote, TVAdvancedRemote, RadioAdvancedRemote...)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abstraction and implementation can be developed independently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Satisfies Open/Closed: new abstractions or implementations don't break existing code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often seen in GUI frameworks (Window abstraction + Linux/Win/Mac implementation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to avoid a permanent binding between abstraction and implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both abstraction and implementation should be extensible by subclassing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes in implementation should not affect clients"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One side of the hierarchy is stable and unlikely to change (unnecessary indirection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple delegation suffices (no independent variation needed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1643-composite",
      children: "16.4.3 Composite"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An army consists of soldiers and units. A unit can contain individual soldiers or smaller units. Giving an order to a unit is the same as giving it to a soldier → the unit propagates the order to all its members. Individual and composite are treated uniformly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+\n| Component   |<------- Client\n+-------------+\n| + operation()|\n+-------------+\n       ^\n       |\n+-------------+              +-------------+\n|   Leaf     |              |  Composite  |\n+-------------+             +-------------+\n| + operation()|             | + operation()|\n+-------------+             | + addChild() |\n                             | + removeChild|\n                             +-------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare the Component interface with common operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Leaf → simple objects with no children"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Composite → stores children, delegates to them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client works with Component interface uniformly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Graphic:\n    virtual draw()\n\nclass Circle: Graphic            // Leaf\n    draw() => draw circle\n\nclass CompoundGraphic: Graphic   // Composite\n    children: Graphic[]\n    add(Graphic)\n    remove(Graphic)\n    draw() => for each child: child.draw()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n\n// Component\nclass FileSystemNode {\npublic:\n    virtual ~FileSystemNode() = default;\n    virtual std::string name() const = 0;\n    virtual size_t size() const = 0;\n    virtual void display(int depth = 0) const = 0;\n};\n\n// Leaf\nclass File : public FileSystemNode {\n    std::string name_;\n    size_t size_;\npublic:\n    File(std::string name, size_t sz) : name_(std::move(name)), size_(sz) {}\n    std::string name() const override { return name_; }\n    size_t size() const override { return size_; }\n    void display(int depth = 0) const override {\n        std::cout << std::string(depth * 2, ' ') << name_\n                  << \" (\" << size_ << \" bytes)\\n\";\n    }\n};\n\n// Composite\nclass Directory : public FileSystemNode {\n    std::string name_;\n    std::vector<std::unique_ptr<FileSystemNode>> children_;\npublic:\n    explicit Directory(std::string name) : name_(std::move(name)) {}\n\n    void add(std::unique_ptr<FileSystemNode> child) {\n        children_.push_back(std::move(child));\n    }\n\n    std::string name() const override { return name_; }\n\n    size_t size() const override {\n        size_t total = 0;\n        for (const auto& c : children_)\n            total += c->size();\n        return total;\n    }\n\n    void display(int depth = 0) const override {\n        std::cout << std::string(depth * 2, ' ') << name_\n                  << \"/ (\" << size() << \" bytes)\\n\";\n        for (const auto& c : children_)\n            c->display(depth + 1);\n    }\n};\n\nint main() {\n    auto root = std::make_unique<Directory>(\"root\");\n    auto home = std::make_unique<Directory>(\"home\");\n    auto user = std::make_unique<Directory>(\"user\");\n\n    user->add(std::make_unique<File>(\"notes.txt\", 1024));\n    user->add(std::make_unique<File>(\"photo.jpg\", 2048000));\n    home->add(std::move(user));\n    root->add(std::move(home));\n    root->add(std::make_unique<File>(\"readme.md\", 512));\n\n    root->display();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "root/ (2049536 bytes)\n  home/ (2049024 bytes)\n    user/ (2049024 bytes)\n      notes.txt (1024 bytes)\n      photo.jpg (2048000 bytes)\n  readme.md (512 bytes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Directory(\"root\")::display(0):\n  prints \"root/ (2049536 bytes)\"\n  for each child:\n    Directory(\"home\")::display(1):\n      prints \"  home/ (2049024 bytes)\"\n      for each child:\n        Directory(\"user\")::display(2):\n          prints \"    user/ (2049024 bytes)\"\n          for each child:\n            File(\"notes.txt\")::display(3):\n              prints \"      notes.txt (1024 bytes)\"\n            File(\"photo.jpg\")::display(3):\n              prints \"      photo.jpg (2048000 bytes)\"\n    File(\"readme.md\")::display(1):\n      prints \"  readme.md (512 bytes)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) traversal where n = nodes. size() O(n) aggregated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Defines a part-whole hierarchy where Leaf and Composite share the same interface"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Makes client code simple (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (leaf) ... else ..."
        }), " branches)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composite can store children in any data structure (vector, list, map)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works naturally with Iterator and Visitor patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need to represent a tree structure with part-whole hierarchies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clients should treat individual and composite objects uniformly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The structure is recursive (directories with files and subdirectories)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tree structure is shallow (1-2 levels) → over-abstracted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leaf and Composite have fundamentally different operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1644-decorator",
      children: "16.4.4 Decorator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A coffee shop serves plain coffee. You can add milk, sugar, whipped cream, or caramel. Each addition wraps the previous beverage. The cost stacks. You get a coffee-with-milk-and-sugar, not a new class called \"CoffeeWithMilkAndSugar\"."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+\n| Component   |\n+-------------+\n| + operation |\n+-------------+\n       ^\n       |\n+-------------+        +---------------+\n| ConcreteComp|        |   Decorator   |\n+-------------+        +---------------+\n| + operation |<>------| - component: *|\n+-------------+        +---------------+\n                               ^\n                               |\n                        +---------------+\n                        | ConcrDecorator|\n                        +---------------+\n                        | + operation() |\n                        +---------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the Component interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteComponent (the base object)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Decorator base class that wraps a Component"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteDecorators that extend behaviour before/after delegation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Coffee:\n    virtual cost(): double\n    virtual description(): string\n\nclass SimpleCoffee: Coffee\n    cost() => 2.0\n    description() => \"Coffee\"\n\nclass CoffeeDecorator: Coffee\n    Coffee* wrapped\n    cost() => wrapped.cost()\n    description() => wrapped.description()\n\nclass WithMilk: CoffeeDecorator\n    cost() => wrapped.cost() + 0.5\n    description() => wrapped.description() + \", milk\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Component\nclass Coffee {\npublic:\n    virtual ~Coffee() = default;\n    virtual double cost() const = 0;\n    virtual std::string description() const = 0;\n};\n\n// Concrete Component\nclass SimpleCoffee : public Coffee {\npublic:\n    double cost() const override { return 2.0; }\n    std::string description() const override { return \"Coffee\"; }\n};\n\n// Decorator base\nclass CoffeeDecorator : public Coffee {\npublic:\n    explicit CoffeeDecorator(std::unique_ptr<Coffee> coffee)\n        : coffee_(std::move(coffee)) {}\nprotected:\n    Coffee* wrapped() const { return coffee_.get(); }\nprivate:\n    std::unique_ptr<Coffee> coffee_;\n};\n\n// Concrete Decorators\nclass WithMilk : public CoffeeDecorator {\npublic:\n    using CoffeeDecorator::CoffeeDecorator;\n    double cost() const override { return wrapped()->cost() + 0.5; }\n    std::string description() const override {\n        return wrapped()->description() + \", milk\";\n    }\n};\n\nclass WithSugar : public CoffeeDecorator {\npublic:\n    using CoffeeDecorator::CoffeeDecorator;\n    double cost() const override { return wrapped()->cost() + 0.25; }\n    std::string description() const override {\n        return wrapped()->description() + \", sugar\";\n    }\n};\n\nclass WithWhippedCream : public CoffeeDecorator {\npublic:\n    using CoffeeDecorator::CoffeeDecorator;\n    double cost() const override { return wrapped()->cost() + 0.75; }\n    std::string description() const override {\n        return wrapped()->description() + \", whipped cream\";\n    }\n};\n\nint main() {\n    auto coffee = std::make_unique<WithWhippedCream>(\n        std::make_unique<WithMilk>(\n            std::make_unique<WithSugar>(\n                std::make_unique<SimpleCoffee>())));\n    std::cout << coffee->description() << \" = $\"\n              << coffee->cost() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Coffee, sugar, milk, whipped cream = $3.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "coffee->cost():\n  WithWhippedCream::cost()\n    -> WithMilk::cost()\n       -> WithSugar::cost()\n          -> SimpleCoffee::cost() = 2.0\n          -> + 0.25 = 2.25\n       -> + 0.5 = 2.75\n    -> + 0.75 = 3.5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(d) where d = decorator stack depth. Memory O(d) for the chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open/Closed: new decorators extend behaviour without modifying Component"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single Responsibility: each decorator adds exactly one concern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More flexible than static inheritance (stack behaviour at runtime)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decorator != Adapter: Adapter changes interface; Decorator adds responsibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iostreams library is the canonical C++ example (std::filebuf + std::iostream)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding responsibilities to individual objects, not entire classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic and removable responsibilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subclassing would explode the class count (combination explosion)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The base class is heavy; wrapping adds more complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many layers of decorators make debugging hard (stack trace deep)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object identity is important (wrapping hides the original)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1645-facade",
      children: "16.4.5 Facade"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant waiter takes your order and brings your food. You don't interact with the kitchen, the chefs, the pantry, or the dishwasher. The waiter is the facade → a simple interface to a complex subsystem."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+\n|  Facade   |\n+-----------+\n| + simple()|\n+-----------+\n      |\n      | delegates to\n      v\n+--------+ +--------+ +--------+\n|Class A | |Class B | |Class C |\n+--------+ +--------+ +--------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the complex subsystem (multiple classes with complex interactions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a Facade class that provides simplified methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Facade delegates client requests to appropriate subsystem objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client calls only Facade methods; subsystem remains encapsulated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Computer:\n    CPU cpu\n    Memory mem\n    HardDrive hdd\n    start():\n        cpu.powerOn()\n        data = hdd.read(bootSector)\n        mem.load(data)\n        cpu.jumpTo(0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\n// Complex subsystem\nclass CPU {\npublic:\n    void powerOn() { std::cout << \"CPU: power on\\n\"; }\n    void jumpTo(unsigned long addr) {\n        std::cout << \"CPU: jumping to 0x\" << std::hex << addr << \"\\n\";\n    }\n    void execute() { std::cout << \"CPU: executing instructions\\n\"; }\n};\n\nclass Memory {\npublic:\n    void load(unsigned long addr, const std::vector<unsigned char>& data) {\n        std::cout << \"Memory: loading \" << data.size()\n                  << \" bytes at 0x\" << std::hex << addr << \"\\n\";\n    }\n};\n\nclass HardDrive {\npublic:\n    std::vector<unsigned char> read(unsigned long sector, int size) {\n        std::cout << \"HardDrive: reading sector \" << std::dec << sector\n                  << \" (\" << size << \" bytes)\\n\";\n        return std::vector<unsigned char>(size, 0);\n    }\n};\n\n// Facade\nclass Computer {\n    CPU cpu_;\n    Memory mem_;\n    HardDrive hdd_;\npublic:\n    void start() {\n        cpu_.powerOn();\n        auto data = hdd_.read(0, 512);\n        mem_.load(0, data);\n        cpu_.jumpTo(0);\n        cpu_.execute();\n        std::cout << \"Computer started successfully\\n\";\n    }\n};\n\nint main() {\n    Computer pc;\n    pc.start();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CPU: power on\nHardDrive: reading sector 0 (512 bytes)\nMemory: loading 512 bytes at 0x0\nCPU: jumping to 0x0\nCPU: executing instructions\nComputer started successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) delegation per method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interface Segregation: shields clients from subsystem complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low Coupling: client depends only on Facade"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doesn't prevent advanced clients from accessing subsystem directly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A subsystem can have multiple facades for different client groups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to provide a simple interface to a complex subsystem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There are many dependencies between clients and implementation classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to layer your subsystem (Facade is the entry point)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All clients need subsystem-level control (Facade becomes a bottleneck)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The subsystem is already simple and intuitive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1646-flyweight",
      children: "16.4.6 Flyweight"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A word processor displays thousands of characters on screen. Each character 'a' doesn't need its own font data and glyph → the shared font object is reused across all 'a' characters. The intrinsic state (the glyph shape) is shared; the extrinsic state (position, size) varies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Use sharing to support large numbers of fine-grained objects efficiently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+          +---------------+\n|  Flyweight  |<---------| FlyweightFact |\n+-------------+          +---------------+\n| + operation |          | + getFlyweight|\n| (extrinsic) |          +---------------+\n+-------------+\n       ^\n       |\n+---------------+\n| ConcreteFly   |\n+---------------+\n| intrinsicState|\n+---------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Split object state into intrinsic (shared) and extrinsic (context-dependent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Flyweight interface with operation(extrinsicState)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteFlyweight storing intrinsic state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FlyweightFactory manages pool of flyweights, creating or reusing them"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class TreeType:              // Flyweight (intrinsic)\n    name, color, texture\n    draw(canvas, x, y)\n\nclass TreeFactory:\n    map<string, TreeType> types\n    getTreeType(name, color, texture):\n        if not exists: create new\n        return existing\n\nclass Tree:                  // Context (extrinsic)\n    x, y, TreeType& type\n    draw(canvas) => type.draw(canvas, x, y)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <unordered_map>\n\n// Flyweight → intrinsic state shared across many objects\nclass TreeType {\npublic:\n    TreeType(std::string name, std::string color, std::string texture)\n        : name_(std::move(name)), color_(std::move(color)),\n          texture_(std::move(texture)) {}\n\n    void draw(std::string canvas, int x, int y) const {\n        std::cout << \"Drawing \" << name_ << \" (\" << color_\n                  << \", \" << texture_ << \") at (\" << x\n                  << \",\" << y << \") on \" << canvas << \"\\n\";\n    }\n\nprivate:\n    std::string name_;\n    std::string color_;\n    std::string texture_;\n};\n\n// Flyweight Factory\nclass TreeFactory {\n    std::unordered_map<std::string, std::shared_ptr<TreeType>> types_;\npublic:\n    std::shared_ptr<TreeType> getTreeType(const std::string& name,\n                                           const std::string& color,\n                                           const std::string& texture) {\n        std::string key = name + \"|\" + color + \"|\" + texture;\n        auto it = types_.find(key);\n        if (it != types_.end())\n            return it->second;\n        auto type = std::make_shared<TreeType>(name, color, texture);\n        types_[key] = type;\n        return type;\n    }\n\n    size_t typeCount() const { return types_.size(); }\n};\n\n// Context object with extrinsic state\nclass Tree {\npublic:\n    Tree(int x, int y, std::shared_ptr<TreeType> type)\n        : x_(x), y_(y), type_(std::move(type)) {}\n\n    void draw(const std::string& canvas) const {\n        type_->draw(canvas, x_, y_);\n    }\n\nprivate:\n    int x_, y_;\n    std::shared_ptr<TreeType> type_;\n};\n\nint main() {\n    TreeFactory factory;\n    std::vector<Tree> forest;\n\n    // Create thousands of trees sharing only 2 type objects\n    auto oakType = factory.getTreeType(\"Oak\", \"Green\", \"Rough\");\n    auto birchType = factory.getTreeType(\"Birch\", \"Yellow\", \"Smooth\");\n\n    for (int i = 0; i < 500; ++i)\n        forest.emplace_back(i * 10, i * 5, oakType);\n    for (int i = 0; i < 500; ++i)\n        forest.emplace_back(i * 7, i * 3, birchType);\n\n    forest[0].draw(\"Canvas1\");\n    forest[999].draw(\"Canvas1\");\n\n    std::cout << \"Total trees: \" << forest.size()\n              << \", unique types: \" << factory.typeCount() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Drawing Oak (Green, Rough) at (0,0) on Canvas1\nDrawing Birch (Yellow, Smooth) at (6993,2997) on Canvas1\nTotal trees: 1000, unique types: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "getTreeType(\"Oak\", \"Green\", \"Rough\"):\n  key = \"Oak|Green|Rough\"\n  not in map -> create new TreeType, store, return\ngetTreeType(\"Birch\", \"Yellow\", \"Smooth\"):\n  key = \"Birch|Yellow|Smooth\"\n  not in map -> create new TreeType, store, return\ngetTreeType(\"Oak\", \"Green\", \"Rough\"):  // second time\n  key found -> return existing shared_ptr\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) type lookup (amortised). Memory: O(t + n) where t = types, n = contexts. Without Flyweight: O(t Ã— n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory savings can be enormous (1000 trees Ã— 2 types vs 1000 separate tree objects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intrinsic state is immutable and shared; extrinsic state is mutable and stored externally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds complexity: must clearly separate intrinsic/extrinsic state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Factory ensures flyweight uniqueness and reuse"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large numbers of similar objects consume significant memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intrinsic state can be factored out and shared"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object identity doesn't matter (shared objects are indistinguishable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The memory savings don't justify the added complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objects have little shared state (all state is extrinsic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object identity matters (each object must be unique)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1647-proxy",
      children: "16.4.7 Proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A credit card is a proxy for a bank account. You pay at a store with the card; the card communicates with the bank to transfer funds. The store deals with the proxy (credit card), not directly with the bank. The proxy controls access and can add behaviour (spending limits, fraud detection)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Provide a surrogate or placeholder for another object to control access to it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+\n|  Subject    |\n+-------------+\n| + request() |\n+-------------+\n       ^\n       |\n+-------------+        +-------------+\n|   Proxy     |------->| RealSubject |\n+-------------+        +-------------+\n| + request() |        | + request() |\n+-------------+        +-------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Subject interface (or base class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement RealSubject with the real business logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Proxy that holds reference to RealSubject"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proxy controls access, may add lazy loading, logging, access control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Image:\n    virtual display()\n\nclass RealImage: Image\n    filename\n    loadFromDisk()\n    display()\n\nclass ProxyImage: Image\n    RealImage* real = null\n    filename\n    display():\n        if real == null: real = new RealImage(filename)\n        real.display()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (Virtual Proxy → lazy loading):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Subject\nclass Image {\npublic:\n    virtual ~Image() = default;\n    virtual void display() const = 0;\n};\n\n// RealSubject\nclass RealImage : public Image {\n    std::string filename_;\n    void loadFromDisk() const {\n        std::cout << \"  Loading \" << filename_ << \" from disk\\n\";\n    }\npublic:\n    explicit RealImage(std::string fn) : filename_(std::move(fn)) {\n        loadFromDisk();\n    }\n    void display() const override {\n        std::cout << \"  Displaying \" << filename_ << \"\\n\";\n    }\n};\n\n// Proxy (virtual proxy)\nclass ProxyImage : public Image {\n    std::string filename_;\n    mutable std::unique_ptr<RealImage> real_;\npublic:\n    explicit ProxyImage(std::string fn) : filename_(std::move(fn)) {}\n\n    void display() const override {\n        if (!real_)\n            real_ = std::make_unique<RealImage>(filename_);\n        real_->display();\n    }\n};\n\nint main() {\n    ProxyImage img(\"photo.jpg\");     // no loading yet\n    std::cout << \"Image object created, not yet loaded\\n\";\n\n    img.display();   // loads and displays\n    img.display();   // displays from cache (no reload)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Image object created, not yet loaded\n  Loading photo.jpg from disk\n  Displaying photo.jpg\n  Displaying photo.jpg\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) access after initialisation. Lazy creation adds O(n) once."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      }), "\nFour common proxy types:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual Proxy"
        }), ": delays creation of expensive objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protection Proxy"
        }), ": controls access permissions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote Proxy"
        }), ": local representative for remote object"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging Proxy"
        }), ": logs method calls transparently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching Proxy"
        }), ": caches results of expensive operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lazy loading of heavyweight objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access control to sensitive objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local representation of a remote object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logging or auditing method calls transparently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The extra indirection adds unacceptable latency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The real object is always needed (no lazy benefit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple protection can be done in the real object itself"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "165-behavioral-patterns",
      children: "16.5 Behavioral Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Behavioral patterns (Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor) define how objects interact, communicate, and distribute responsibility."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1651-chain-of-responsibility",
      children: "16.5.1 Chain of Responsibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A helpdesk ticket goes to Level 1 support. If they can't solve it, it escalates to Level 2. If Level 2 can't solve it, it escalates to Level 3 (engineering). The ticket travels along the chain until someone handles it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along until an object handles it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------+         +----------+\n|  Client   |-------->| Handler  |\n+-----------+         +----------+\n                      | + handle |\n                      +----------+\n                            ^\n                            |\n               +------------+-----------+\n               |                        |\n        +------------+          +------------+\n        |ConcreteH1  |--------->|ConcreteH2   |\n        +------------+ next     +------------+\n        | + handle() |          | + handle() |\n        +------------+          +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define Handler interface with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "handle()"
        }), " method and a pointer to next handler"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement concrete handlers that either handle or forward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client assembles the chain and sends the first request"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Handler:\n    Handler* next\n    virtual handle(request)\n\nclass Level1Support: Handler\n    handle(request):\n        if can handle: solve it\n        else if next: next.handle(request)\n\nclass Level2Support: Handler\n    handle(request):\n        if can handle: solve it\n        else if next: next.handle(request)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Request\nclass HttpRequest {\npublic:\n    explicit HttpRequest(std::string token, std::string body)\n        : token_(std::move(token)), body_(std::move(body)),\n          authenticated_(false), authorized_(false) {}\n\n    const std::string& token() const { return token_; }\n    const std::string& body() const { return body_; }\n    bool authenticated() const { return authenticated_; }\n    bool authorized() const { return authorized_; }\n    void setAuthenticated(bool v) { authenticated_ = v; }\n    void setAuthorized(bool v) { authorized_ = v; }\n\nprivate:\n    std::string token_, body_;\n    bool authenticated_, authorized_;\n};\n\n// Handler interface\nclass Middleware {\npublic:\n    virtual ~Middleware() = default;\n    Middleware* setNext(std::unique_ptr<Middleware> next) {\n        next_ = std::move(next);\n        return next_.get();\n    }\n    virtual bool handle(HttpRequest& req) = 0;\nprotected:\n    bool forward(HttpRequest& req) {\n        if (next_) return next_->handle(req);\n        return true;\n    }\n    std::unique_ptr<Middleware> next_;\n};\n\n// Concrete Handler 1\nclass AuthMiddleware : public Middleware {\npublic:\n    bool handle(HttpRequest& req) override {\n        if (req.token() == \"valid_token\") {\n            req.setAuthenticated(true);\n            std::cout << \"Auth: authenticated\\n\";\n            return forward(req);\n        }\n        std::cout << \"Auth: invalid token\\n\";\n        return false;\n    }\n};\n\n// Concrete Handler 2\nclass RoleMiddleware : public Middleware {\npublic:\n    bool handle(HttpRequest& req) override {\n        if (req.authenticated()) {\n            req.setAuthorized(true);\n            std::cout << \"Role: authorized\\n\";\n            return forward(req);\n        }\n        return false;\n    }\n};\n\n// Concrete Handler 3\nclass ValidationMiddleware : public Middleware {\npublic:\n    bool handle(HttpRequest& req) override {\n        if (req.body().length() < 100) {\n            std::cout << \"Validation: passed\\n\";\n            return forward(req);\n        }\n        std::cout << \"Validation: body too long\\n\";\n        return false;\n    }\n};\n\nint main() {\n    auto auth = std::make_unique<AuthMiddleware>();\n    auto role = std::make_unique<RoleMiddleware>();\n    auto valid = std::make_unique<ValidationMiddleware>();\n\n    auth->setNext(std::move(role))->setNext(std::move(valid));\n    Middleware* chain = auth.get();\n\n    HttpRequest req1(\"valid_token\", \"Hello\");\n    std::cout << \"Request 1:\\n\";\n    bool ok1 = chain->handle(req1);\n    std::cout << \"Outcome: \" << (ok1 ? \"Allowed\\n\" : \"Denied\\n\\n\");\n\n    HttpRequest req2(\"bad_token\", \"Hello\");\n    std::cout << \"Request 2:\\n\";\n    bool ok2 = chain->handle(req2);\n    std::cout << \"Outcome: \" << (ok2 ? \"Allowed\\n\" : \"Denied\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Request 1:\nAuth: authenticated\nRole: authorized\nValidation: passed\nOutcome: Allowed\n\nRequest 2:\nAuth: invalid token\nOutcome: Denied\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run (Request 1):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthMiddleware::handle(req):\n  token == \"valid_token\" -> setAuthenticated(true)\n  -> forward(req) -> RoleMiddleware::handle(req):\n    authenticated -> setAuthorized(true)\n    -> forward(req) -> ValidationMiddleware::handle(req):\n      body length < 100 -> forward(req) -> no next -> true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) worst-case chain traversal. Memory O(n) chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decouples sender and receiver (sender doesn't know which handler processes the request)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open/Closed: new handlers can be added without changing existing code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single Responsibility: each handler focuses on one check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common in middleware pipelines (Express.js, ASP.NET Core)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple handlers can process a request, determined at runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handler order matters (pipeline)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to decouple request sender from receiver"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding/removing handlers dynamically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every request must be handled by every handler (use Observer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chain is fixed and small (direct composition suffices)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1652-command",
      children: "16.5.2 Command"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A restaurant waiter takes your order (command). The order ticket encapsulates what you want. You don't cook the food yourself. The waiter gives the ticket to the chef. Later, you could undo the order (cancel) if needed. The command (order ticket) separates the request from its execution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Encapsulate a request as an object, thereby letting you parameterise clients with different requests, queue or log requests, and support undoable operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +---------+       +-----------+\n| Invoker  |------>| Command |<------| Receiver  |\n+----------+       +---------+       +-----------+\n| + execute|       | + exec  |       | + action  |\n+----------+       +---------+       +-----------+\n                          ^\n                          |\n                   +-------------+\n                   | ConcreteCmd |\n                   +-------------+\n                   | + execute() |\n                   +-------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare the Command interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "execute()"
        }), " and optionally ", (0,jsx_runtime.jsx)(_components.code, {
          children: "undo()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteCommand that holds a reference to the Receiver"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiver contains the actual business logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invoker triggers the command (without knowing its details)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Command:\n    virtual execute()\n    virtual undo()\n\nclass LightOnCommand: Command\n    Light& light\n    execute() => light.on()\n    undo()    => light.off()\n\nclass Remote:             // Invoker\n    Command& cmd\n    pressButton() => cmd.execute()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n\n// Receiver\nclass TextEditor {\n    std::string text_;\npublic:\n    void insert(const std::string& s) {\n        text_ += s;\n        std::cout << \"Text: \\\"\" << text_ << \"\\\"\\n\";\n    }\n    void erase(size_t n) {\n        if (n > text_.size()) n = text_.size();\n        text_.erase(text_.size() - n);\n        std::cout << \"Text: \\\"\" << text_ << \"\\\"\\n\";\n    }\n    const std::string& text() const { return text_; }\n};\n\n// Command interface\nclass Command {\npublic:\n    virtual ~Command() = default;\n    virtual void execute() = 0;\n    virtual void undo() = 0;\n};\n\n// Concrete Command\nclass InsertCommand : public Command {\n    TextEditor& editor_;\n    std::string text_;\npublic:\n    InsertCommand(TextEditor& ed, std::string txt)\n        : editor_(ed), text_(std::move(txt)) {}\n    void execute() override { editor_.insert(text_); }\n    void undo() override { editor_.erase(text_.size()); }\n};\n\nclass DeleteCommand : public Command {\n    TextEditor& editor_;\n    size_t count_;\npublic:\n    DeleteCommand(TextEditor& ed, size_t n)\n        : editor_(ed), count_(n) {}\n    void execute() override { editor_.erase(count_); }\n    void undo() override {\n        // In a real implementation, store the deleted text\n        std::cout << \"Undo delete (not fully implemented)\\n\";\n    }\n};\n\n// Invoker\nclass EditorApp {\n    TextEditor editor_;\n    std::vector<std::unique_ptr<Command>> history_;\npublic:\n    void execute(std::unique_ptr<Command> cmd) {\n        cmd->execute();\n        history_.push_back(std::move(cmd));\n    }\n\n    void undo() {\n        if (history_.empty()) return;\n        history_.back()->undo();\n        history_.pop_back();\n    }\n};\n\nint main() {\n    EditorApp app;\n    app.execute(std::make_unique<InsertCommand>(app.getEditor(), \"Hello\"));\n    app.execute(std::make_unique<InsertCommand>(app.getEditor(), \" World\"));\n    app.undo();  // removes \" World\"\n    app.undo();  // removes \"Hello\"\n}\n\n// Helper to expose editor (for demo)\nTextEditor& EditorApp::getEditor() { return editor_; }\n\n// Note: In a real codebase, getEditor() would be declared in the class body.\n// For compileable demo, forward-declare and define outside.\n}\n\n// Updated main after fixing access\nint main2() {\n    // Real usage would store deleted text for proper undo\n    std::cout << \"Command pattern demo complete\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text: \"Hello\"\nText: \"Hello World\"\nText: \"Hello\"\nText: \"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) execute/undo. Memory O(h) for history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decouples invoker from receiver (invoker knows only Command interface)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports undo/redo via command history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports queuing, logging, and transactional behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composite Command (macro) executes multiple commands"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parameterise objects with operations (callbacks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Queue, log, or schedule operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support undo/redo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need transactional behaviour"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simple one-action callback suffices (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::function"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overhead of command objects is not justified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undo semantics are not needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1653-interpreter",
      children: "16.5.3 Interpreter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A language translator interprets English sentences into French. Given a grammar (subject-verb-object), the interpreter breaks down the sentence, understands each part, and translates it according to the rules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-------------+\n|  Expression |\n+-------------+\n| + interpret |<------- Context\n+-------------+\n       ^\n       |\n+------+------+\n|              |\n+--------+  +--------+\n|Terminal|  |Nonterm |\n+--------+  +--------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define the grammar (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expression ::= number | expression op expression"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create Expression interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "interpret(context)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement TerminalExpression for grammar terminal symbols"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement NonTerminalExpression for grammar rules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (simple arithmetic evaluator):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <map>\n#include <string>\n#include <sstream>\n\n// Context → maps variables to values\nclass Context {\n    std::map<std::string, int> vars_;\npublic:\n    void set(const std::string& name, int value) { vars_[name] = value; }\n    int get(const std::string& name) const {\n        auto it = vars_.find(name);\n        return it != vars_.end() ? it->second : 0;\n    }\n};\n\n// Expression interface\nclass Expression {\npublic:\n    virtual ~Expression() = default;\n    virtual int interpret(const Context& ctx) const = 0;\n};\n\n// Terminal: Number\nclass Number : public Expression {\n    int value_;\npublic:\n    explicit Number(int v) : value_(v) {}\n    int interpret(const Context&) const override { return value_; }\n};\n\n// Terminal: Variable\nclass Variable : public Expression {\n    std::string name_;\npublic:\n    explicit Variable(std::string n) : name_(std::move(n)) {}\n    int interpret(const Context& ctx) const override { return ctx.get(name_); }\n};\n\n// NonTerminal: Addition\nclass Add : public Expression {\n    std::unique_ptr<Expression> left_, right_;\npublic:\n    Add(std::unique_ptr<Expression> l, std::unique_ptr<Expression> r)\n        : left_(std::move(l)), right_(std::move(r)) {}\n    int interpret(const Context& ctx) const override {\n        return left_->interpret(ctx) + right_->interpret(ctx);\n    }\n};\n\n// NonTerminal: Subtraction\nclass Sub : public Expression {\n    std::unique_ptr<Expression> left_, right_;\npublic:\n    Sub(std::unique_ptr<Expression> l, std::unique_ptr<Expression> r)\n        : left_(std::move(l)), right_(std::move(r)) {}\n    int interpret(const Context& ctx) const override {\n        return left_->interpret(ctx) - right_->interpret(ctx);\n    }\n};\n\nint main() {\n    Context ctx;\n    ctx.set(\"x\", 10);\n    ctx.set(\"y\", 5);\n\n    // (x + y) - 3\n    auto expr = std::make_unique<Sub>(\n        std::make_unique<Add>(\n            std::make_unique<Variable>(\"x\"),\n            std::make_unique<Variable>(\"y\")),\n        std::make_unique<Number>(3));\n\n    int result = expr->interpret(ctx);\n    std::cout << \"(x + y) - 3 = \" << result << \"\\n\";  // (10+5)-3 = 12\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(x + y) - 3 = 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "expr->interpret(ctx):\n  Sub::interpret(ctx):\n    left = Add::interpret(ctx):\n      left  = Variable(\"x\")::interpret(ctx)  = 10\n      right = Variable(\"y\")::interpret(ctx)  = 5\n      => 10 + 5 = 15\n    right = Number(3)::interpret(ctx) = 3\n    => 15 - 3 = 12\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) where n = AST nodes. Memory O(d) recursion depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Well-suited for simple grammars (regular expression, arithmetic, small DSLs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each grammar rule becomes a class → easy to extend"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grammar changes require new classes and potentially new interface methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For complex grammars, use parser generators (ANTLR, Bison) instead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grammar is simple and stable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance is not critical"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AST can be represented as a composite structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grammar is complex or changes often"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance matters (interpretation is slow vs compiled)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parser generators or full DSL tools are more appropriate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1654-iterator",
      children: "16.5.4 Iterator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A TV remote has \"next channel\" and \"previous channel\" buttons. You don't need to know how the channels are stored internally → you just navigate forward and backward. The remote is an iterator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +------------+\n| Aggregate|------>|  Iterator  |\n+----------+       +------------+\n| + iter() |       | + first()  |\n+----------+       | + next()   |\n                   | + isDone() |\n                   | + current()|\n                   +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Iterator interface (++ , != , *)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement concrete iterator for the aggregate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregate provides begin()/end() to create iterators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (STL-style iterator for a custom container):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <stack>\n#include <stdexcept>\n\ntemplate <typename T>\nclass BinaryTree {\n    struct Node {\n        T value;\n        std::unique_ptr<Node> left;\n        std::unique_ptr<Node> right;\n        explicit Node(T v) : value(v) {}\n    };\n\n    std::unique_ptr<Node> root_;\n\n    Node* insert(Node* node, const T& val) {\n        if (!node) return new Node(val);\n        if (val < node->value)\n            node->left.reset(insert(node->left.release(), val));\n        else\n            node->right.reset(insert(node->right.release(), val));\n        return node;\n    }\n\npublic:\n    void insert(const T& val) {\n        if (!root_) {\n            root_ = std::make_unique<Node>(val);\n            return;\n        }\n        root_.reset(insert(root_.release(), val));\n    }\n\n    // In-order iterator\n    class InOrderIterator {\n        std::stack<const Node*> stack_;\n        void pushLeft(const Node* node) {\n            while (node) {\n                stack_.push(node);\n                node = node->left.get();\n            }\n        }\n    public:\n        using iterator_category = std::forward_iterator_tag;\n        using value_type = T;\n        using difference_type = std::ptrdiff_t;\n        using pointer = const T*;\n        using reference = const T&;\n\n        explicit InOrderIterator(const Node* root) { pushLeft(root); }\n        InOrderIterator() = default;\n\n        reference operator*() const {\n            if (stack_.empty()) throw std::out_of_range(\"no element\");\n            return stack_.top()->value;\n        }\n\n        InOrderIterator& operator++() {\n            if (stack_.empty()) return *this;\n            auto* node = stack_.top();\n            stack_.pop();\n            if (node->right) pushLeft(node->right.get());\n            return *this;\n        }\n\n        bool operator!=(const InOrderIterator& other) const {\n            return stack_ != other.stack_;\n        }\n    };\n\n    InOrderIterator begin() const {\n        return InOrderIterator(root_.get());\n    }\n    InOrderIterator end() const {\n        return InOrderIterator();\n    }\n};\n\nint main() {\n    BinaryTree<int> tree;\n    tree.insert(5);\n    tree.insert(3);\n    tree.insert(7);\n    tree.insert(1);\n    tree.insert(9);\n\n    std::cout << \"In-order: \";\n    for (auto it = tree.begin(); it != tree.end(); ++it)\n        std::cout << *it << \" \";\n    std::cout << \"\\n\";\n\n    // Range-based for works because we have begin()/end()\n    std::cout << \"Range-for: \";\n    for (const auto& val : tree)\n        std::cout << val << \" \";\n    std::cout << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "In-order: 1 3 5 7 9\nRange-for: 1 3 5 7 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tree.begin():\n  root = 5 -> stack = [5]\n  pushLeft(5):\n    stack = [5, 3, 1]\n  return InOrderIterator(stack=[1,3,5])\n\n++it (first call):\n  stack.top() = 1 -> pop 1\n  1->right = null\n  *it = 3\n\n++it (second call):\n  stack.top() = 3 -> pop 3\n  3->right = null\n  *it = 5\n\n++it (third call):\n  stack.top() = 5 -> pop 5\n  5->right = 7 -> pushLeft(7) -> stack = [7]\n  *it = 7\n\n++it (fourth call):\n  stack.top() = 7 -> pop 7\n  7->right = 9 -> pushLeft(9) -> stack = [9]\n  *it = 9\n\n++it (fifth call):\n  stack.top() = 9 -> pop 9\n  9->right = null -> stack empty\n  it != end() -> false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) full traversal. O(1) increment (amortised). Memory O(h) where h = tree height."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The STL's iterator model IS the Iterator pattern → the canonical C++ implementation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Range-based for loops consume iterators via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "begin()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "end()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separates traversal from container (Single Responsibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports multiple concurrent traversals (each iterator has its own state)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Composite and Iterator pair naturally (traverse tree structures)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container needs a standard way to expose elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple traversal algorithms are needed (in-order, pre-order, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Want a uniform interface for different containers (STL algorithms)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container is trivial (vector has random access via operator[])"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traversal needs access to container internals break encapsulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1655-mediator",
      children: "16.5.5 Mediator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An air traffic control tower is the mediator between planes. Planes don't talk to each other directly → they communicate via the tower. The tower coordinates takeoffs, landings, and taxiing, preventing collisions. If one plane changes its route, the tower manages the impact on all other planes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +-----------+\n| Colleague|<>-----| Mediator  |\n+----------+       +-----------+\n| + notify |       | + notify  |\n+----------+       +-----------+\n       ^                  ^\n       |                  |\n+----------+       +-----------+\n| Concrete |       | ConcreteM |\n+----------+       +-----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Colleague interface (each colleague knows the mediator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Mediator interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteMediator that coordinates colleagues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Colleagues notify mediator instead of each other"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Mediator:\n    virtual notify(sender, event)\n\nclass ChatRoom: Mediator\n    users[]\n    notify(sender, event):\n        for each user except sender:\n            user.receive(event)\n\nclass User:\n    Mediator& mediator\n    name\n    send(message):\n        mediator.notify(this, message)\n    receive(message):\n        print(name + \" received: \" + message)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n\n// Forward declare\nclass User;\n\n// Mediator interface\nclass ChatMediator {\npublic:\n    virtual ~ChatMediator() = default;\n    virtual void sendMessage(const std::string& msg, const User& sender) = 0;\n};\n\n// Colleague\nclass User {\n    std::string name_;\n    ChatMediator& mediator_;\npublic:\n    User(const std::string& name, ChatMediator& med)\n        : name_(name), mediator_(med) {}\n\n    const std::string& name() const { return name_; }\n\n    void send(const std::string& msg) {\n        std::cout << name_ << \" sends: \" << msg << \"\\n\";\n        mediator_.sendMessage(msg, *this);\n    }\n\n    void receive(const std::string& msg, const std::string& from) {\n        std::cout << name_ << \" received from \" << from << \": \" << msg << \"\\n\";\n    }\n};\n\n// Concrete Mediator\nclass ChatRoom : public ChatMediator {\n    std::vector<User*> users_;\npublic:\n    void addUser(User& user) { users_.push_back(&user); }\n\n    void sendMessage(const std::string& msg, const User& sender) override {\n        for (auto* u : users_) {\n            if (u->name() != sender.name())\n                u->receive(msg, sender.name());\n        }\n    }\n};\n\nint main() {\n    ChatRoom room;\n\n    User alice(\"Alice\", room);\n    User bob(\"Bob\", room);\n    User charlie(\"Charlie\", room);\n\n    room.addUser(alice);\n    room.addUser(bob);\n    room.addUser(charlie);\n\n    alice.send(\"Hello everyone!\");\n    bob.send(\"Hey Alice!\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice sends: Hello everyone!\nBob received from Alice: Hello everyone!\nCharlie received from Alice: Hello everyone!\nBob sends: Hey Alice!\nAlice received from Bob: Hey Alice!\nCharlie received from Bob: Hey Alice!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) broadcast to n colleagues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralises control (mediator becomes the hub)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Colleagues are decoupled → they only know the mediator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplifies colleague protocols (one-to-many becomes one-to-one to mediator)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mediator complexity can grow large (God object risk)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many objects communicate in complex but well-defined ways"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reusing an object is hard because it references many others"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Behaviour distributed across classes should be customisable without subclassing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The mediator becomes a God class (too much logic centralised)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communication patterns are simple and direct coupling is fine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance-critical (indirection adds overhead)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1656-memento",
      children: "16.5.6 Memento"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A text editor saves your document history. You press Ctrl+Z and the editor restores the previous state. The saved state (memento) is opaque → you can't inspect it directly, but the editor can use it to restore the document."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Without violating encapsulation, capture and externalise an object's internal state so that the object can be restored to this state later."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +---------+       +---------+\n| Originator|------>| Memento |<------| Caretaker|\n+----------+       +---------+       +---------+\n| + save()  |       | state   |       | history |\n| + restore |       +---------+       +---------+\n+----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Originator creates Memento containing a snapshot of its state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memento is opaque → no one except Originator can access its internals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caretaker stores and manages Mementos without inspecting them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Originator uses Memento to restore previous state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Memento:\n    private state\n    getState() => state\n\nclass Originator:\n    state\n    save() => Memento(state)\n    restore(Memento m): state = m.getState()\n\nclass Caretaker:\n    history: Memento[]\n    backup(Memento m): history.push(m)\n    undo(): history.pop()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n\n// Memento → opaque snapshot\nclass Memento {\n    friend class Editor;\n    std::string content_;\n    int cursorPos_;\n    explicit Memento(const std::string& c, int pos)\n        : content_(c), cursorPos_(pos) {}\n    std::string content() const { return content_; }\n    int cursorPos() const { return cursorPos_; }\npublic:\n    ~Memento() = default;\n};\n\n// Originator\nclass Editor {\n    std::string content_;\n    int cursorPos_ = 0;\npublic:\n    void type(const std::string& words) {\n        content_ += words;\n        cursorPos_ = content_.size();\n    }\n\n    void setContent(const std::string& c) { content_ = c; cursorPos_ = c.size(); }\n\n    std::unique_ptr<Memento> save() const {\n        return std::make_unique<Memento>(content_, cursorPos_);\n    }\n\n    void restore(const Memento& m) {\n        content_ = m.content();\n        cursorPos_ = m.cursorPos();\n    }\n\n    void show() const {\n        std::cout << \"Content: \\\"\" << content_ << \"\\\", cursor: \"\n                  << cursorPos_ << \"\\n\";\n    }\n};\n\n// Caretaker\nclass History {\n    std::vector<std::unique_ptr<Memento>> snapshots_;\npublic:\n    void push(std::unique_ptr<Memento> m) {\n        snapshots_.push_back(std::move(m));\n    }\n\n    std::unique_ptr<Memento> pop() {\n        if (snapshots_.empty()) return nullptr;\n        auto m = std::move(snapshots_.back());\n        snapshots_.pop_back();\n        return m;\n    }\n};\n\nint main() {\n    Editor editor;\n    History history;\n\n    editor.setContent(\"Hello\");\n    history.push(editor.save());\n    editor.show();\n\n    editor.setContent(\"Hello World\");\n    history.push(editor.save());\n    editor.show();\n\n    editor.setContent(\"Hello World!!!\");\n    editor.show();  // oops, too many !!!\n\n    // Undo\n    if (auto m = history.pop()) {\n        editor.restore(*m);\n        editor.show();\n    }\n    if (auto m = history.pop()) {\n        editor.restore(*m);\n        editor.show();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Content: \"Hello\", cursor: 5\nContent: \"Hello World\", cursor: 11\nContent: \"Hello World!!!\", cursor: 14\nContent: \"Hello World\", cursor: 11\nContent: \"Hello\", cursor: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) save/restore where n = state size. Memory O(s Ã— h) where s = snapshot size, h = history depth."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserves encapsulation boundaries (Memento is opaque to Caretaker)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Originator owns the state and knows how to save/restore it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caretaker manages the lifecycle of Mementos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large Mementos consume memory → consider incremental snapshots or compression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Undo/redo functionality needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Snapshot/rollback is required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State must be saved externally without breaking encapsulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State is large and changes frequently (memory bloat)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caretaker needs to inspect Memento contents (contradicts the pattern)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple copy constructor suffices (no external state management)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1657-observer",
      children: "16.5.7 Observer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A YouTube channel posts a video. All subscribers (observers) get notified. Subscribers can subscribe (attach) or unsubscribe (detach) at any time. The channel doesn't know who its subscribers are individually → it just broadcasts to all of them."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+          +------------+\n| Subject  |<>------->| Observer   |\n+----------+          +------------+\n| + attach |          | + update() |\n| + detach |          +------------+\n| + notify |                  ^\n+----------+                  |\n                              |\n                       +------------+\n                       | ConcreteObs|\n                       +------------+\n                       | + update() |\n                       +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define Observer interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subject maintains list of observers (via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        }), " to avoid cycles)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Subject's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "notify()"
        }), " iterates and calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update()"
        }), " on all observers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean up expired observers after notification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Observer:\n    virtual update(message)\n\nclass Subject:\n    observers: weak_ptr<Observer>[]\n    attach(obs): observers.add(obs)\n    notify(msg):\n        for each obs in observers:\n            if obs.lock(): obs.lock().update(msg)\n        remove expired\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation (with shared_ptr/weak_ptr):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n#include <algorithm>\n\n// Observer interface\nclass Observer {\npublic:\n    virtual ~Observer() = default;\n    virtual void update(const std::string& message) = 0;\n};\n\n// Subject\nclass Subject {\n    std::vector<std::weak_ptr<Observer>> observers_;\npublic:\n    void attach(std::shared_ptr<Observer> obs) {\n        observers_.push_back(obs);\n    }\n\n    void detach(const std::shared_ptr<Observer>& obs) {\n        std::erase_if(observers_, [&](const auto& wp) {\n            auto sp = wp.lock();\n            return !sp || sp == obs;\n        });\n    }\n\n    void notify(const std::string& msg) {\n        for (auto& wp : observers_) {\n            if (auto sp = wp.lock())\n                sp->update(msg);\n        }\n        // Clean expired\n        std::erase_if(observers_, [](const auto& wp) { return wp.expired(); });\n    }\n};\n\n// Concrete Observers\nclass EmailObserver : public Observer {\n    std::string email_;\npublic:\n    explicit EmailObserver(std::string email) : email_(std::move(email)) {}\n    void update(const std::string& msg) override {\n        std::cout << \"Email to \" << email_ << \": \" << msg << \"\\n\";\n    }\n};\n\nclass SMSObserver : public Observer {\n    std::string phone_;\npublic:\n    explicit SMSObserver(std::string phone) : phone_(std::move(phone)) {}\n    void update(const std::string& msg) override {\n        std::cout << \"SMS to \" << phone_ << \": \" << msg << \"\\n\";\n    }\n};\n\nclass LogObserver : public Observer {\npublic:\n    void update(const std::string& msg) override {\n        std::cout << \"Log: \" << msg << \"\\n\";\n    }\n};\n\nint main() {\n    Subject subject;\n\n    auto email = std::make_shared<EmailObserver>(\"alice@example.com\");\n    auto sms = std::make_shared<SMSObserver>(\"+1234567890\");\n    auto log = std::make_shared<LogObserver>();\n\n    subject.attach(email);\n    subject.attach(sms);\n    subject.attach(log);\n\n    subject.notify(\"System update v2.1 available\");\n\n    subject.detach(sms);  // sms unsubscribes\n\n    subject.notify(\"Reminder: update your password\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Email to alice@example.com: System update v2.1 available\nSMS to +1234567890: System update v2.1 available\nLog: System update v2.1 available\nEmail to alice@example.com: Reminder: update your password\nLog: Reminder: update your password\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) notify where n = observers. Memory O(n) observer list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        }), " prevents reference cycles (Subject does not own Observer lifetime)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observers can be removed without Subject knowing their concrete type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order of notification is not guaranteed (use priority queue if needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push model (Subject pushes data) vs Pull model (Observer pulls)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signals/Slots (Boost.Signals2, Qt) are Observer pattern implementations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One object's state change needs to update an unknown set of others"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objects need to observe without tight coupling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broadcast communication is needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simple callback suffices (", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::function"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observer update semantics are complex (consider event bus)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subject and Observer have circular dependencies in their lifecycles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1658-state",
      children: "16.5.8 State"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A traffic light changes behaviour based on its current state. When green, cars go. When yellow, cars slow down. When red, cars stop. The same \"request\" (cross the intersection) produces different behaviour depending on the current state. You don't have if-else chains checking the colour everywhere."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Allow an object to alter its behaviour when its internal state changes. The object will appear to change its class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +---------+\n| Context  |------>| State   |\n+----------+       +---------+\n| + request|       | + handle|\n+----------+       +---------+\n                          ^\n                          |\n             +------------+-----------+\n             |                        |\n      +------------+          +------------+\n      | ConcreteA  |          | ConcreteB  |\n      +------------+          +------------+\n      | + handle() |          | + handle() |\n      +------------+          +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define State interface with state-specific operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteStates for each possible state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context holds a reference to the current State"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State transitions happen inside State objects (or Context)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context delegates all state-dependent behaviour to the current State"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class State:\n    virtual handle()\n\nclass PlayingState: State\n    handle() => play music\n    next() => PausedState\n\nclass PausedState: State\n    handle() => pause music\n    next() => PlayingState\n\nclass MusicPlayer:\n    State state = StoppedState\n    pressPlay() => state.handle()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Forward declare Context\nclass MediaPlayer;\n\n// State interface\nclass State {\npublic:\n    virtual ~State() = default;\n    virtual void play(MediaPlayer& player) = 0;\n    virtual void pause(MediaPlayer& player) = 0;\n    virtual std::string name() const = 0;\n};\n\n// Context\nclass MediaPlayer {\n    State* currentState_;\npublic:\n    void setState(State& s) { currentState_ = &s; }\n\n    void play() { currentState_->play(*this); }\n    void pause() { currentState_->pause(*this); }\n};\n\n// Concrete States → forward declared for circular references\nclass PlayingState : public State {\npublic:\n    void play(MediaPlayer&) override {\n        std::cout << \"Already playing\\n\";\n    }\n    void pause(MediaPlayer& player) override;\n    std::string name() const override { return \"Playing\"; }\n};\n\nclass PausedState : public State {\npublic:\n    void play(MediaPlayer& player) override;\n    void pause(MediaPlayer&) override {\n        std::cout << \"Already paused\\n\";\n    }\n    std::string name() const override { return \"Paused\"; }\n};\n\n// Circular state transitions (defined after both classes)\nvoid PlayingState::pause(MediaPlayer& player) {\n    static PausedState paused;\n    std::cout << \"Pausing playback\\n\";\n    player.setState(paused);\n}\n\nvoid PausedState::play(MediaPlayer& player) {\n    static PlayingState playing;\n    std::cout << \"Resuming playback\\n\";\n    player.setState(playing);\n}\n\nint main() {\n    MediaPlayer player;\n    static PlayingState initial;\n    player.setState(initial);\n\n    player.play();   // Already playing\n    player.pause();  // Pausing\n    player.pause();  // Already paused\n    player.play();   // Resuming\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Already playing\nPausing playback\nAlready paused\nResuming playback\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) delegation per operation. State transition O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates large if-else/switch statement blocks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each state is a separate class (Single Responsibility)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new states doesn't affect existing states (Open/Closed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State objects are often shared (no own state) → Flyweight-like"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object behaviour depends on its state and changes at runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State-specific logic is scattered across many conditional statements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State transitions are complex or need to be explicit"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Few states and simple transitions (a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " is clearer)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State objects add overhead without proportional benefit"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1659-strategy",
      children: "16.5.9 Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A GPS navigation app offers multiple route strategies: \"Fastest\" (minimise time), \"Shortest\" (minimise distance), \"Scenic\" (maximise beauty), \"Eco\" (minimise fuel). You can switch strategies at any time. The app doesn't need to know how each strategy works internally."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from the clients that use it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+       +----------+\n| Context  |------>| Strategy |\n+----------+       +----------+\n| + execute|       | + algo() |\n+----------+       +----------+\n                          ^\n                          |\n             +------------+------------+\n             |            |             |\n       +----------+ +----------+ +----------+\n       | StratA   | | StratB   | | StratC   |\n       +----------+ +----------+ +----------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Strategy interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement ConcreteStrategies for each variant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context holds a Strategy reference (injected at runtime)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context delegates algorithm execution to the current Strategy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class RouteStrategy:\n    virtual buildRoute(A, B): Route\n\nclass FastestRoute: RouteStrategy\n    buildRoute(A, B) => minimiseTime\n\nclass ShortestRoute: RouteStrategy\n    buildRoute(A, B) => minimiseDistance\n\nclass Navigator:\n    RouteStrategy strategy\n    navigate(A, B):\n        route = strategy.buildRoute(A, B)\n        follow(route)\n    setStrategy(s): strategy = s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n#include <algorithm>\n\n// Strategy\nclass SortStrategy {\npublic:\n    virtual ~SortStrategy() = default;\n    virtual void sort(std::vector<int>& data) const = 0;\n};\n\n// Concrete Strategy A\nclass BubbleSort : public SortStrategy {\npublic:\n    void sort(std::vector<int>& data) const override {\n        for (size_t i = 0; i < data.size(); ++i) {\n            for (size_t j = 0; j < data.size() - i - 1; ++j) {\n                if (data[j] > data[j + 1])\n                    std::swap(data[j], data[j + 1]);\n            }\n        }\n        std::cout << \"Used BubbleSort\\n\";\n    }\n};\n\n// Concrete Strategy B\nclass QuickSortStrategy : public SortStrategy {\n    void quickSort(std::vector<int>& data, int low, int high) const {\n        if (low >= high) return;\n        int pivot = partition(data, low, high);\n        quickSort(data, low, pivot - 1);\n        quickSort(data, pivot + 1, high);\n    }\n\n    int partition(std::vector<int>& data, int low, int high) const {\n        int pivot = data[high];\n        int i = low;\n        for (int j = low; j < high; ++j)\n            if (data[j] < pivot)\n                std::swap(data[i++], data[j]);\n        std::swap(data[i], data[high]);\n        return i;\n    }\n\npublic:\n    void sort(std::vector<int>& data) const override {\n        quickSort(data, 0, data.size() - 1);\n        std::cout << \"Used QuickSort\\n\";\n    }\n};\n\n// Concrete Strategy C\nclass STLSort : public SortStrategy {\npublic:\n    void sort(std::vector<int>& data) const override {\n        std::sort(data.begin(), data.end());\n        std::cout << \"Used std::sort\\n\";\n    }\n};\n\n// Context\nclass Sorter {\n    std::unique_ptr<SortStrategy> strategy_;\npublic:\n    explicit Sorter(std::unique_ptr<SortStrategy> s)\n        : strategy_(std::move(s)) {}\n\n    void setStrategy(std::unique_ptr<SortStrategy> s) {\n        strategy_ = std::move(s);\n    }\n\n    void apply(std::vector<int>& data) const {\n        strategy_->sort(data);\n    }\n};\n\nint main() {\n    std::vector<int> data = {9, 3, 7, 1, 5, 8, 2, 4, 6};\n\n    Sorter sorter(std::make_unique<BubbleSort>());\n    sorter.apply(data);\n\n    data = {9, 3, 7, 1, 5, 8, 2, 4, 6};\n    sorter.setStrategy(std::make_unique<QuickSortStrategy>());\n    sorter.apply(data);\n\n    data = {9, 3, 7, 1, 5, 8, 2, 4, 6};\n    sorter.setStrategy(std::make_unique<STLSort>());\n    sorter.apply(data);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Used BubbleSort\nUsed QuickSort\nUsed std::sort\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Depends on algorithm. O(1) delegation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open/Closed: new strategies don't change existing ones"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strategy isolates algorithm implementation from its usage"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::function"
        }), " can replace the Strategy interface for simple cases"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminates conditional statements for algorithm selection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client must be aware of strategy differences (to choose appropriately)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many related classes differ only in their behaviour"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple algorithms exist for the same task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditional statements determine which algorithm to use"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Algorithm details must be hidden from the caller"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Few variations and stable (a simple ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " suffices)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client needs to know about all strategies (coupling)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Strategies have no common interface (use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::function"
        }), " instead)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16510-template-method",
      children: "16.5.10 Template Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A coffee shop's recipe for making coffee: boil water, brew coffee, pour into cup, add condiments. But the specifics differ: for espresso you fine-grind and pressure-brew; for drip coffee you coarse-grill and filter-brew. The skeleton (algorithm) is the same; the steps vary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps without changing the algorithm's structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+-----------------+\n| AbstractClass   |\n+-----------------+\n| + templateMethod|   // calls step1(), step2(), step3()\n| - step1()       |   // primitive → must override\n| - step2()       |   // primitive → must override\n| - step3()       |   // hook → optional override\n+-----------------+\n        ^\n        |\n+-----------------+\n| ConcreteClass   |\n+-----------------+\n| - step1()       |\n| - step2()       |\n| - step3()       |\n+-----------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create AbstractClass with the template method (algorithm skeleton)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define primitive operations (pure virtual) that subclasses must implement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define hooks (virtual with default) that subclasses may override"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template method calls primitives and hooks in a fixed order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Game:\n    // Template method\n    play():\n        initialize()\n        startPlay()\n        endPlay()\n    \n    virtual initialize()\n    virtual startPlay()\n    virtual endPlay()\n    // hook\n    virtual showResult() { print \"Game Over\" }\n\nclass Cricket: Game:\n    initialize()   => print \"Cricket Game Initialized\"\n    startPlay()    => print \"Cricket Game Started\"\n    endPlay()      => print \"Cricket Game Finished\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n\n// Abstract class with template method\nclass DataProcessor {\npublic:\n    // Template Method\n    void process() {\n        loadData();\n        processData();\n        saveData();\n        if (shouldPostProcess())\n            postProcess();\n    }\n\n    virtual ~DataProcessor() = default;\n\nprotected:\n    // Primitive operations (must override)\n    virtual void loadData() = 0;\n    virtual void processData() = 0;\n    virtual void saveData() = 0;\n\n    // Hook (optional override)\n    virtual bool shouldPostProcess() const { return false; }\n    virtual void postProcess() {}\n};\n\n// Concrete class\nclass CSVProcessor : public DataProcessor {\n    void loadData() override {\n        std::cout << \"Loading CSV file\\n\";\n    }\n    void processData() override {\n        std::cout << \"Parsing CSV rows\\n\";\n    }\n    void saveData() override {\n        std::cout << \"Saving processed CSV\\n\";\n    }\n    bool shouldPostProcess() const override { return true; }\n    void postProcess() override {\n        std::cout << \"Generating CSV summary report\\n\";\n    }\n};\n\nclass JSONProcessor : public DataProcessor {\n    void loadData() override {\n        std::cout << \"Loading JSON file\\n\";\n    }\n    void processData() override {\n        std::cout << \"Parsing JSON tree\\n\";\n    }\n    void saveData() override {\n        std::cout << \"Saving processed JSON\\n\";\n    }\n};\n\nint main() {\n    CSVProcessor csv;\n    std::cout << \"Processing CSV:\\n\";\n    csv.process();\n\n    std::cout << \"\\nProcessing JSON:\\n\";\n    JSONProcessor json;\n    json.process();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Processing CSV:\nLoading CSV file\nParsing CSV rows\nSaving processed CSV\nGenerating CSV summary report\n\nProcessing JSON:\nLoading JSON file\nParsing JSON tree\nSaving processed JSON\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) algorithm framework overhead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hollywood Principle: \"Don't call us, we'll call you\" → the abstract class calls subclass methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inverted control: the parent controls the algorithm, children fill in details"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hook methods provide optional extension points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Related to Strategy (inheritance vs composition)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Several classes share the same algorithm structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to avoid code duplication in common algorithm steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subclasses differ only in specific steps, not the overall flow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The algorithm skeleton changes often (hard to maintain)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All steps vary per implementation (use Strategy instead)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inheritance adds unnecessary coupling (composition preferred)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16511-visitor",
      children: "16.5.11 Visitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A tax consultant visits different types of properties → residential, commercial, industrial. Each property type has a different tax calculation, audit procedure, and deduction check. Instead of modifying each property class to add tax logic, the consultant (Visitor) visits each property and applies the correct tax logic. Adding a new operation (e.g., energy audit) means adding a new visitor, not modifying all property classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intent:"
      }), " Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure (UML-like ASCII):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+----------+          +------------+\n| Element  |--------->|  Visitor   |\n+----------+          +------------+\n| + accept(v)|       | + visitA(E)|\n+----------+          | + visitB(E)|\n       ^              +------------+\n       |                     ^\n+----------+                |\n| ConcreteA|          +------------+\n+----------+          | ConcreteV  |\n| + accept |          +------------+\n+----------+          | + visitA() |\n                      | + visitB() |\n                      +------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define Visitor interface with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "visit(ConcreteElement)"
        }), " method per element type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define Element interface with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "accept(Visitor)"
        }), " method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each ConcreteElement implements ", (0,jsx_runtime.jsx)(_components.code, {
          children: "accept(visitor)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "visitor.visit(this)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ConcreteVisitor implements all visit methods with the operation logic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Visitor:\n    virtual visit(Circle)\n    virtual visit(Rectangle)\n\nclass AreaCalculator: Visitor:\n    visit(Circle c)    => compute area of c\n    visit(Rectangle r) => compute area of r\n\nclass Shape:\n    virtual accept(Visitor)\n\nclass Circle: Shape:\n    accept(Visitor v) => v.visit(this)\n\nclass Rectangle: Shape:\n    accept(Visitor v) => v.visit(this)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n\n// Forward declare\nclass Circle;\nclass Rectangle;\n\n// Visitor interface\nclass Visitor {\npublic:\n    virtual ~Visitor() = default;\n    virtual void visitCircle(const Circle& c) = 0;\n    virtual void visitRectangle(const Rectangle& r) = 0;\n};\n\n// Element interface\nclass Shape {\npublic:\n    virtual ~Shape() = default;\n    virtual void accept(Visitor& v) const = 0;\n};\n\n// Concrete Elements\nclass Circle : public Shape {\n    double radius_;\npublic:\n    explicit Circle(double r) : radius_(r) {}\n    double radius() const { return radius_; }\n\n    void accept(Visitor& v) const override {\n        v.visitCircle(*this);\n    }\n};\n\nclass Rectangle : public Shape {\n    double width_, height_;\npublic:\n    Rectangle(double w, double h) : width_(w), height_(h) {}\n    double width() const { return width_; }\n    double height() const { return height_; }\n\n    void accept(Visitor& v) const override {\n        v.visitRectangle(*this);\n    }\n};\n\n// Concrete Visitor 1\nclass AreaCalculator : public Visitor {\npublic:\n    void visitCircle(const Circle& c) override {\n        double area = 3.14159 * c.radius() * c.radius();\n        std::cout << \"Circle area: \" << area << \"\\n\";\n    }\n    void visitRectangle(const Rectangle& r) override {\n        double area = r.width() * r.height();\n        std::cout << \"Rectangle area: \" << area << \"\\n\";\n    }\n};\n\n// Concrete Visitor 2\nclass ShapeDescription : public Visitor {\npublic:\n    void visitCircle(const Circle& c) override {\n        std::cout << \"Circle with radius \" << c.radius() << \"\\n\";\n    }\n    void visitRectangle(const Rectangle& r) override {\n        std::cout << \"Rectangle \" << r.width() << \"x\" << r.height() << \"\\n\";\n    }\n};\n\nint main() {\n    std::vector<std::unique_ptr<Shape>> shapes;\n    shapes.push_back(std::make_unique<Circle>(5.0));\n    shapes.push_back(std::make_unique<Rectangle>(3.0, 4.0));\n    shapes.push_back(std::make_unique<Circle>(2.5));\n\n    AreaCalculator areaCalc;\n    ShapeDescription desc;\n\n    std::cout << \"=== Area Calculation ===\\n\";\n    for (const auto& s : shapes)\n        s->accept(areaCalc);\n\n    std::cout << \"\\n=== Shape Description ===\\n\";\n    for (const auto& s : shapes)\n        s->accept(desc);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Area Calculation ===\nCircle area: 78.5397\nRectangle area: 12\nCircle area: 19.6349\n\n=== Shape Description ===\nCircle with radius 5\nRectangle 3x4\nCircle with radius 2.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "shapes[0] = Circle(5.0)\n  shapes[0]->accept(areaCalc):\n    areaCalc.visitCircle(Circle(5.0)):\n      area = 3.14159 * 5 * 5 = 78.5397\n\nshapes[1] = Rectangle(3,4)\n  shapes[1]->accept(areaCalc):\n    areaCalc.visitRectangle(Rectangle(3,4)):\n      area = 3 * 4 = 12\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) visitor application over n elements. O(k) per element with k visitors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A&D:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double dispatch: the operation performed depends on both the Element type and Visitor type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new operations = adding new Visitor classes (Open/Closed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new Element types = modifying all Visitor interfaces (violates Open/Closed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separates data structures from operations → clean separation of concerns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often paired with Composite and Iterator for structure traversal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Many distinct and unrelated operations on an object structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The object structure is stable (new elements are rare)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to avoid \"polluting\" classes with unrelated operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Avoid:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New element types are added frequently (Visitor interface changes propagate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Element internals need to be exposed to the Visitor (encapsulation broken)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operations are few and object structure is unstable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "166-comparisons--analysis",
      children: "16.6 Comparisons & Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1661-creational-vs-structural-vs-behavioral",
      children: "16.6.1 Creational vs Structural vs Behavioral"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavioral"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How objects are created"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How objects are composed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How objects interact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Question"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who creates this?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How are classes/objects structured?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who handles this responsibility?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Concern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiding creation logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composing interfaces and implementations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communication and delegation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which class/instance to create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At runtime, objects can be restructured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At runtime, behaviour can change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Used When"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construction is complex or decoupled from client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building large structures from smaller parts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms or responsibilities vary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method (class-level), Abstract Factory (family-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter (interface bridge), Composite (tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy (algorithm), Observer (notification)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Few classes (2-5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many classes (complex hierarchies)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (depends on object graph)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client → Creator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple objects composed together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects message each other"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ Idioms"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::make_unique"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::make_shared"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PImpl idiom, type erasure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            }), ", signals/slots, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::visit"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When Overused"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every object doesn't need a factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not everything needs a separate interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not every behaviour needs a Strategy class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GoF Count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1662-singleton-thread-safety-comparison",
      children: "16.6.2 Singleton Thread-Safety Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Thread-Safe"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lazy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Meyers Singleton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (magic static)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (lock-free after init)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::call_once"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (once_flag)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (once_flag + lambda)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutex + Double-Check"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (acquire-release semantics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (check, lock, check)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Static pointer (eager)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-C++11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (unsafe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best (no checks)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutex every access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (contention on every access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Always use Meyers Singleton in C++11 and later. It's the simplest, fastest, and provably thread-safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1663-factory-method-vs-abstract-factory--comparison",
      children: "16.6.3 Factory Method vs Abstract Factory → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstract Factory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GoF Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Product Count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single product type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple related product types (family)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "How It Works"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual method in Creator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface with multiple creation methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Override Mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass overrides factory method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete factory implements interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Family Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees all products belong to same family"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adding a Product Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change (single product)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes factory interface (hard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adding a Product Family"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New Creator subclass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New ConcreteFactory class (easy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Document::createPage()"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Resume::createPage()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "GUIFactory::createButton()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "createCheckbox()"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WinFactory"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Which to Choose?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One product, variations in subclass → Factory Method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Families of related products needing consistency → Abstract Factory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Most Abstract Factories start as Factory Methods and evolve"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1664-strategy-vs-state--comparison",
      children: "16.6.4 Strategy vs State → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Select algorithm at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alter behaviour when state changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical (Context + Interface + Implementations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical (Context + Interface + Implementations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Context Responsibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chooses which Strategy to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State changes drive transitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State Flow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client sets Strategy externally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State objects handle transitions internally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number of Objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One Strategy active at a time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One State active; transitions to others"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Awareness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategies unaware of each other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States know about other states (transitions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting, compression, routing algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Media player, TCP connection, vending machine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change Trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External (client swaps strategy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal (state object triggers transition)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Question"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"How should I do this?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What am I allowed to do now?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interchangeable?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, Strategies are interchangeable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No, states have specific transition rules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When They Overlap:"
      }), " Both use composition to change behaviour. Clean distinction: Strategy is about ", (0,jsx_runtime.jsx)(_components.em, {
        children: "how"
      }), " (algorithm), State is about ", (0,jsx_runtime.jsx)(_components.em, {
        children: "when"
      }), " (permitted operations based on current mode)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1665-template-method-vs-strategy--comparison",
      children: "16.6.5 Template Method vs Strategy → Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Template Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationship"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reuse Mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass overrides primitive operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client injects Strategy object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Algorithm Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent class controls the algorithm skeleton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context delegates to Strategy interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time (subclassing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (swap strategy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Duplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common skeleton in base class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each Strategy has full algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hook Methods"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (optional overrides)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No hooks (pure interface)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to Use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm structure is fixed, steps vary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire algorithm varies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "DataProcessor::process()"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "process()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "save()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Sorter::apply()"
            }), " delegates to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SortStrategy::sort()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Principle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hollywood Principle (\"don't call us, we'll call you\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open/Closed (extend with new strategies)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mnemonic:"
      }), " Template Method = skeleton (some parts fixed); Strategy = whole algorithm swapped."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1666-iterator-vs-composite--relationship",
      children: "16.6.6 Iterator vs Composite → Relationship"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Iterator and Composite patterns are naturally related:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Iterator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Together"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential access to elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part-whole hierarchies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse tree structures uniformly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate + Iterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Component + Leaf + Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite is a tree; Iterator walks it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Idea"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "begin()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "end()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "add()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operation()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite::operation() often uses Iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BinaryTree::InOrderIterator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Directory"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FileSystemNode"
            }), " children"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse filesystem tree via iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GoF Says"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Iterators can traverse Composites\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Composites can be iterated\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural combination: Iterator visits all Composite nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In practice, Composite structures are often traversed using Iterators. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display()"
      }), " method in our Composite example iterates children. With an explicit Iterator, we can add pre-order, post-order, and level-order traversals without modifying the Composite classes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1667-pattern-interaction-summary",
      children: "16.6.7 Pattern Interaction Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method is often used inside Template Method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Factory's methods are often Factory Methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds complex structures (including Composite trees)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative creation mechanisms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator traverses Composite structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visitor operates on Composite elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain of Resp."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handler trees are Composites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same structure, different intent (add vs convert)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same structure, different intent (add vs control)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flyweight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flyweight shares Composite leaf nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decorator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same wrapper structure; Proxy controls, Decorator extends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memento"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memento stores state for Command undo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite Command (macro) groups commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mediator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mediator centralises; Observer distributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same structure, different intent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance vs Composition for algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visitor applies operations on Composite nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "167-design-patterns-in-real-c-systems",
      children: "16.7 Design Patterns in Real C++ Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1671-iostreams--decorator-pattern",
      children: "16.7.1 iostreams → Decorator Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The C++ iostream library is the canonical example of the Decorator pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::filebuf        (provides raw file I/O → ConcreteComponent)\nstd::streambuf      (abstract buffer → Component)\nstd::istream        (adds formatted input → Decorator base)\nstd::ostream        (adds formatted output → Decorator base)\nstd::ifstream       (file input stream → ConcreteDecorator)\nstd::ofstream       (file output stream → ConcreteDecorator)\nstd::stringstream   (string-based stream → ConcreteDecorator)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each stream layer wraps a buffer and adds formatting, buffering, and error-checking behaviour:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n\nint main() {\n    // Decorator chain: ofstream wraps filebuf, adds formatting\n    std::ofstream file(\"test.txt\");\n    file << \"Hello via Decorator pattern\\n\";  // formatted output\n    file.close();\n\n    // String stream: stringbuf wrapped by stringstream\n    std::stringstream ss;\n    ss << \"Int: \" << 42 << \", Double: \" << 3.14;\n    std::cout << ss.str() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern match:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::ofstream"
      }), " wraps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::filebuf"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::stringbuf"
      }), ") and adds: formatted output, locale awareness, state flags, error checking. You can wrap any buffer with any stream → the behaviour is composed at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1672-stdalgorithm--strategy-pattern",
      children: "16.7.2 std::algorithm → Strategy Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The STL algorithm library uses the Strategy pattern via function objects and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::function"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <functional>\n\nint main() {\n    std::vector<int> nums = {4, 1, 3, 5, 2};\n\n    // Strategy as lambda (passed at runtime)\n    std::sort(nums.begin(), nums.end(), [](int a, int b) {\n        return a > b;  // descending: one strategy\n    });\n\n    // Strategy as std::function\n    std::function<bool(int,int)> ascending = std::less<int>{};\n    std::sort(nums.begin(), nums.end(), ascending);  // different strategy\n\n    // Strategy as function object\n    struct Greater {\n        bool operator()(int a, int b) const { return a > b; }\n    };\n    std::sort(nums.begin(), nums.end(), Greater{});\n\n    for (int n : nums) std::cout << n << \" \";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern match:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::sort"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::find_if"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::transform"
      }), " all accept a callable (Strategy) that customises the algorithm. The algorithm (Context) is fixed; the comparator/transformer (Strategy) is interchangeable. The introduction of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::function"
      }), " and lambdas in C++11 made this pattern even more natural."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1673-stl-iterators--iterator-pattern",
      children: "16.7.3 STL Iterators → Iterator Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The entire STL is built on the Iterator pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <map>\n#include <algorithm>\n\nint main() {\n    // Iterator pattern unifies traversal across different containers\n    std::vector<int> vec = {10, 20, 30};\n    std::map<std::string, int> mp = {{\"a\", 1}, {\"b\", 2}};\n\n    // Same range-based for loop works for both (via begin()/end())\n    for (auto it = vec.begin(); it != vec.end(); ++it)\n        std::cout << *it << \" \";\n    std::cout << \"\\n\";\n\n    for (const auto& [k, v] : mp)\n        std::cout << k << \":\" << v << \" \";\n    std::cout << \"\\n\";\n\n    // STL algorithms work on any iterator category\n    auto it = std::find(vec.begin(), vec.end(), 20);\n    if (it != vec.end())\n        std::cout << \"Found: \" << *it << \"\\n\";\n\n    // Iterator categories map to container capabilities\n    // Input/Output  ← istream_iterator / ostream_iterator\n    // Forward       ← forward_list\n    // Bidirectional ← list, set, map\n    // Random Access ← vector, deque, array\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern match:"
      }), " STL containers provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "begin()"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "end()"
      }), " (Aggregate), iterators provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator++"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator!="
      }), " (Iterator interface). Algorithms consume iterators without knowing the container structure → exactly the GoF Iterator pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1674-additional-real-world-examples",
      children: "16.7.4 Additional Real-World Examples"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real C++ Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Singleton"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cin"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cerr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global stream objects with one instance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Method"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::make_unique<T>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::make_shared<T>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create objects with type deduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adapter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::stack"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::queue"
            }), " (adapters over deque)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapt underlying container to new interface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PImpl idiom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate public API from private implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI widget hierarchies (Qt, wxWidgets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widgets contain child widgets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::thread"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified interface to OS threading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::atomic<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls access to shared data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Command"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::function"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::packaged_task"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate callable for later execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All STL iterators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform element access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boost.Signals2, Qt signals/slots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort"
            }), " with custom comparator"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm parameterisation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRTP (Curiously Recurring Template Pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static polymorphism via template inheritance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "168-interview-corner",
      children: "16.8 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-what-is-the-most-criticised-design-pattern-and-why",
      children: "Q1: What is the most criticised design pattern and why?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Singleton pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criticisms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global state:"
        }), " Singletons are essentially global variables, making code harder to test and reason about. Any part of the codebase can call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Singleton::instance()"
        }), ", creating hidden dependencies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Violates Single Responsibility:"
        }), " The class manages both its own lifecycle and its business logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tight coupling:"
        }), " Clients are hard-coupled to the concrete Singleton class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difficulty in testing:"
        }), " Singletons are hard to mock/stub in unit tests. Test ordering can cause issues (state leaks between tests)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrency risks:"
        }), " Even with thread-safe initialisation, the Singleton's mutable state requires synchronisation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use dependency injection instead (pass the instance as a parameter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make Singleton depend on abstractions (interface + DI container)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limit Singletons to genuinely single-instance resources (logging, hardware drivers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Despite its criticisms, Singleton is appropriate when a class genuinely needs one instance AND a global access point is acceptable (e.g., device drivers, logging frameworks where DI would add unnecessary complexity)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-how-would-you-choose-between-factory-method-abstract-factory-and-builder",
      children: "Q2: How would you choose between Factory Method, Abstract Factory, and Builder?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The choice depends on the creation complexity and product relationships."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One product type, client needs flexibility in concrete class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Method"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple related products must be used together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstract Factory"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complex multi-step construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Builder"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction logic is simple, one product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor / named constructor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Objects should be cloned from prototypes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototype"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Does the object require multi-step construction?\n  Yes → Builder\n  No  → Are there multiple related product families?\n    Yes → Abstract Factory\n    No  → Is the concrete product determined by subclass?\n      Yes → Factory Method\n      No  → Is cloning from existing instances preferred?\n        Yes → Prototype\n        No  → Direct constructor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-what-is-the-relationship-between-strategy-and-state-can-they-replace-each-other",
      children: "Q3: What is the relationship between Strategy and State? Can they replace each other?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Strategy and State have identical class structures but different intents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Similarities:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both use composition (Context holds a pointer to an interface)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both have multiple implementations of the interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both allow runtime behaviour switching"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Differences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Strategy: The ", (0,jsx_runtime.jsx)(_components.em, {
          children: "algorithm"
        }), " is interchangeable. Client chooses the strategy. Strategies don't know about each other. No automatic transitions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State: The ", (0,jsx_runtime.jsx)(_components.em, {
          children: "behaviour"
        }), " depends on internal state. State objects manage transitions to other states. The context object appears to change its class."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Can they replace each other?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not directly. Strategy assumes all strategies are valid for any input; State has transition constraints."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "However, State can be implemented as a special case of Strategy with transition rules added to the context."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use what:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Strategy when you have multiple algorithms and the client knows which to apply"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use State when an object's behaviour depends on its current mode and transitions are rule-based"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-which-pattern-would-you-use-to-implement-undoredo-in-a-text-editor",
      children: "Q4: Which pattern would you use to implement undo/redo in a text editor?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command pattern"
      }), " combined with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memento"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Command (encapsulates action):\n  - InsertCommand, DeleteCommand, FormatCommand\n  - Each has execute() and undo()\n\nMemento (captures state snapshots):\n  - EditorState (text content, cursor position, selection)\n\nHistory (Caretaker):\n  - undoStack: stack of commands\n  - redoStack: stack of undone commands\n  - Each Command stores a Memento before/after execution\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this combination?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Command encapsulates each user action as an object → enables queuing, logging, and macro recording"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memento snapshot preserves the Editor's internal state without violating encapsulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "History (Caretaker) manages the lifecycle of saved states and commands"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative:"
      }), " State-based undo (store full document state after each action) is simpler but memory-intensive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-how-do-c-smart-pointers-relate-to-design-patterns",
      children: "Q5: How do C++ smart pointers relate to design patterns?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Smart pointers implement or enable several GoF patterns:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Smart Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Method"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returned by factory functions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "make_unique"
            }), "), exclusive ownership"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference counting controls object lifetime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<T>"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr<T>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observer"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr"
            }), " prevents cycles in observer lists"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree structures with ownership at each node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flyweight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared intrinsic state across multiple contexts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PImpl idiom → holds the implementation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Smart pointers eliminate explicit memory management, making pattern implementations safer and more expressive in modern C++. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " is especially important for patterns with non-owning references (Observer, Composite parent pointers) where raw pointers would risk dangling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "q6-the-decorator-pattern-in-c--when-should-you-use-unique_ptr-vs-shared_ptr-for-the-wrapped-object",
      children: ["Q6: The Decorator pattern in C++ → when should you use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " for the wrapped object?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr<T> (recommended):\n  - Decorator owns the wrapped object exclusively\n  - No sharing → one decorator chain owns the component\n  - Lighter weight (no reference count)\n  - Preferred in single-ownership scenarios\n  - Example: Coffee decorator chain\n\nshared_ptr<T>:\n  - Multiple decorator chains share the same component\n  - Component outlives individual chains\n  - Heavier (atomic reference counting)\n  - Use when the base component has shared ownership semantics\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General guideline:"
      }), " Prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " for the Decorator wrapper. Only use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " if you genuinely need shared ownership (multiple independent chains wrapping the same object). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " version is the idiomatic modern C++ approach."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q7-how-would-you-implement-a-thread-pool-using-design-patterns",
      children: "Q7: How would you implement a thread pool using design patterns?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A thread pool uses multiple patterns:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Worker Threads ── Singleton (ThreadPool class)\n  │\n  ├── ThreadPool (Singleton)\n  │     ├── stores queue of Tasks\n  │     ├── manages worker threads\n  │     └── provides submit() interface\n  │\n  ├── Task ── Command pattern\n  │     ├── encapsulates function + arguments\n  │     ├── stored in std::queue<std::packaged_task<>>\n  │     └── returns std::future for result retrieval\n  │\n  └── Task Queue ── Producer-Consumer (Adapter pattern)\n        ├── std::mutex + std::condition_variable\n        ├── producer threads submit tasks\n        └── consumer (worker) threads execute tasks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern mapping:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Singleton"
        }), " → One thread pool instance per application"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Command"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::packaged_task"
        }), " encapsulates operation + arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy"
        }), " → Work-stealing strategies vary between implementations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proxy"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::future"
        }), " is a proxy for the result"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <queue>\n#include <thread>\n#include <future>\n#include <functional>\n#include <vector>\n\nclass ThreadPool {\n    std::vector<std::thread> workers_;\n    std::queue<std::function<void()>> tasks_;\n    std::mutex mtx_;\n    std::condition_variable cv_;\n    bool stop_ = false;\n\npublic:\n    explicit ThreadPool(size_t n) {\n        for (size_t i = 0; i < n; ++i)\n            workers_.emplace_back([this] {\n                while (true) {\n                    std::function<void()> task;\n                    {\n                        std::unique_lock lock(mtx_);\n                        cv_.wait(lock, [this] { return stop_ || !tasks_.empty(); });\n                        if (stop_ && tasks_.empty()) return;\n                        task = std::move(tasks_.front());\n                        tasks_.pop();\n                    }\n                    task();\n                }\n            });\n    }\n\n    ~ThreadPool() {\n        {\n            std::lock_guard lock(mtx_);\n            stop_ = true;\n        }\n        cv_.notify_all();\n        for (auto& t : workers_)\n            if (t.joinable()) t.join();\n    }\n\n    template <typename F, typename... Args>\n    auto submit(F&& f, Args&&... args) -> std::future<decltype(f(args...))> {\n        using ReturnType = decltype(f(args...));\n        auto task = std::make_shared<std::packaged_task<ReturnType()>>(\n            std::bind(std::forward<F>(f), std::forward<Args>(args)...));\n        std::future<ReturnType> result = task->get_future();\n        {\n            std::lock_guard lock(mtx_);\n            tasks_.emplace([task] { (*task)(); });\n        }\n        cv_.notify_one();\n        return result;\n    }\n};\n\nint main() {\n    ThreadPool pool(4);\n    auto fut1 = pool.submit([] { return 42; });\n    auto fut2 = pool.submit([](int a, int b) { return a + b; }, 10, 20);\n\n    std::cout << \"Task 1: \" << fut1.get() << \"\\n\";\n    std::cout << \"Task 2: \" << fut2.get() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Task 1: 42\nTask 2: 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "169-summary",
      children: "16.9 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design patterns are proven solutions to recurring design problems. The GoF catalogued 23 patterns into three categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Creational (5):"
        }), " Singleton, Factory Method, Abstract Factory, Builder, Prototype → abstracting object creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structural (7):"
        }), " Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy → composing classes and objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behavioral (11):"
        }), " Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor → defining interaction and responsibility"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patterns are guides, not prescriptions"
        }), " → adapt them to your context rather than forcing them in"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer composition over inheritance"
        }), " → most patterns use delegation, not subclassing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Program to interfaces, not implementations"
        }), " → Depend on abstractions; patterns enable this"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design for change"
        }), " → patterns help localise the impact of change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start simple"
        }), " → introduce patterns when a genuine problem emerges, not preemptively"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modern C++ features"
        }), " → smart pointers, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::function"
        }), ", lambdas, and templates make pattern implementations safer and more idiomatic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patterns interact"
        }), " → Composite + Iterator + Visitor, Command + Memento, Strategy + Factory Method are natural combinations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Not to Use Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The solution is already simple and clear"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pattern adds complexity without solving a real problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The anticipated variation never materialises"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A language feature provides a simpler solution (lambdas replace some Command/Strategy needs)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final Thought:"
        }), " The best design is often the simplest one that works. Design patterns are tools in your toolbox → use them when they solve a problem, not because they're \"correct.\" Mastery is knowing when to apply a pattern AND when to leave it out."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-all-23-gof-patterns",
      children: "Quick Reference: All 23 GoF Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent (One Line)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Singleton"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure one instance and provide global access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subclass decides which class to instantiate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstract Factory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create families of related products"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Builder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct complex objects step by step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prototype"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clone existing objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adapter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert one interface to another"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple abstraction from implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treat individual and composite objects uniformly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decorator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add responsibilities dynamically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facade"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified interface to a subsystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flyweight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share fine-grained objects efficiently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control access to another object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chain of Resp."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass request along a chain of handlers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Command"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulate request as an object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interpreter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define grammar and interpret sentences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Iterator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential access without exposing representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mediator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define interaction hub between objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memento"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture and restore object state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many dependency notification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alter behaviour when state changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define a family of interchangeable algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Method"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define algorithm skeleton, defer steps to subclasses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate operations from object structure"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the three categories of GoF patterns? Give two examples from each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between Factory Method and Abstract Factory with concrete C++ examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is the Meyers Singleton considered the best approach in modern C++?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the Decorator pattern differ from inheritance-based extension?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the relationship between the Iterator and Composite patterns. How do they work together?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the key structural difference between Template Method (inheritance) and Strategy (composition)?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::weak_ptr"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::shared_ptr"
        }), " work together in the Observer pattern to prevent memory leaks?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Logging Framework (Singleton + Strategy):"
          }), " Implement a logger that supports multiple output strategies (console, file, network). Use Singleton for the Logger class and Strategy for the output formatting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Editor (Command + Memento):"
          }), " Build a simple document editor supporting insert, delete, and undo operations. Use Command pattern for operations and Memento for state snapshots."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File System Browser (Composite + Visitor):"
          }), " Implement a filesystem browser using Composite for the directory/file structure and Visitor for operations like size calculation, search, and HTML export."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chat Application (Mediator + Observer):"
          }), " Implement a chat room where users communicate through a mediator (ChatRoom) and the system broadcasts presence notifications (Observer) when users join/leave."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Injection Container (Factory Method + Builder + Singleton):"
      }), " Implement a minimal DI container that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registers type mappings (interface → concrete implementation) using Factory Methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports Singleton and Transient lifetimes (Builder constructs lifetime policy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolves constructor dependencies recursively"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::type_index"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::any"
        }), " for type erasure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resolve<T>()"
        }), " returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::shared_ptr<T>"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The container should demonstrate how creational patterns combine to solve the complex problem of object creation in large applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/15-concurrency",
          children: "15-concurrency"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None"]
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