"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76782],{

/***/ 2739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_01_introduction_md_b04_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-01-introduction-md-b04.json
const site_docs_courses_oop_cpp_01_introduction_md_b04_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/01-introduction","title":"Chapter 1: Introduction to Object-Oriented Programming","description":"Previous Classes and Objects","source":"@site/docs/courses/oop-cpp/01-introduction.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/01-introduction","permalink":"/ai-engineering-journey/oop-cpp/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/oop-cpp/01-introduction","title":"Chapter 1: Introduction to Object-Oriented Programming","sidebar_label":"Chapter 1: Introduction to Object-Oriented Programming","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Object-Oriented Programming with C++","permalink":"/ai-engineering-journey/oop-cpp"},"next":{"title":"Chapter 2: Classes and Objects","permalink":"/ai-engineering-journey/oop-cpp/02-classes-objects"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/oop-cpp/01-introduction',
	title: 'Chapter 1: Introduction to Object-Oriented Programming',
	sidebar_label: 'Chapter 1: Introduction to Object-Oriented Programming',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Object-Oriented Programming';

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
  "value": "1.1 What is Object-Oriented Programming?",
  "id": "11-what-is-object-oriented-programming",
  "level": 2
}, {
  "value": "1.1.1 The Core Idea",
  "id": "111-the-core-idea",
  "level": 3
}, {
  "value": "1.1.2 The Three Dimensions of an Object",
  "id": "112-the-three-dimensions-of-an-object",
  "level": 3
}, {
  "value": "1.2 Procedural Programming vs OOP",
  "id": "12-procedural-programming-vs-oop",
  "level": 2
}, {
  "value": "1.2.1 Procedural Style → Data and Functions Are Separate",
  "id": "121-procedural-style--data-and-functions-are-separate",
  "level": 3
}, {
  "value": "1.2.2 OOP Style → Data and Behaviour Are United",
  "id": "122-oop-style--data-and-behaviour-are-united",
  "level": 3
}, {
  "value": "1.2.3 Deep Comparison Table",
  "id": "123-deep-comparison-table",
  "level": 3
}, {
  "value": "1.2.4 When Each Approach Shines",
  "id": "124-when-each-approach-shines",
  "level": 3
}, {
  "value": "1.3 Class vs Object",
  "id": "13-class-vs-object",
  "level": 2
}, {
  "value": "1.3.1 The Blueprint Analogy",
  "id": "131-the-blueprint-analogy",
  "level": 3
}, {
  "value": "1.3.2 Why Distinguish?",
  "id": "132-why-distinguish",
  "level": 3
}, {
  "value": "1.3.3 Class vs Object Comparison Table",
  "id": "133-class-vs-object-comparison-table",
  "level": 3
}, {
  "value": "1.3.4 Visualising Class vs Object in Memory",
  "id": "134-visualising-class-vs-object-in-memory",
  "level": 3
}, {
  "value": "1.4 History of OOP → A Timeline",
  "id": "14-history-of-oop--a-timeline",
  "level": 2
}, {
  "value": "Key Observations from the Timeline",
  "id": "key-observations-from-the-timeline",
  "level": 3
}, {
  "value": "1.5 Real-World Analogies with C++ Code",
  "id": "15-real-world-analogies-with-c-code",
  "level": 2
}, {
  "value": "Analogy 1: The Car Blueprint (Class) and Actual Cars (Objects)",
  "id": "analogy-1-the-car-blueprint-class-and-actual-cars-objects",
  "level": 3
}, {
  "value": "Analogy 2: Restaurant Kitchen → Chef, Orders, and Plates",
  "id": "analogy-2-restaurant-kitchen--chef-orders-and-plates",
  "level": 3
}, {
  "value": "Analogy 3: ATM Machine → State, Behaviour, Encapsulation",
  "id": "analogy-3-atm-machine--state-behaviour-encapsulation",
  "level": 3
}, {
  "value": "1.6 The Four Pillars of OOP → Overview",
  "id": "16-the-four-pillars-of-oop--overview",
  "level": 2
}, {
  "value": "Detailed Exploration of Each Pillar (Sections 1.6.1–1.6.4)",
  "id": "detailed-exploration-of-each-pillar-sections-161164",
  "level": 3
}, {
  "value": "1.6.1 Encapsulation → The First Pillar",
  "id": "161-encapsulation--the-first-pillar",
  "level": 3
}, {
  "value": "1.6.2 Inheritance → The Second Pillar",
  "id": "162-inheritance--the-second-pillar",
  "level": 3
}, {
  "value": "1.6.3 Polymorphism → The Third Pillar",
  "id": "163-polymorphism--the-third-pillar",
  "level": 3
}, {
  "value": "1.6.4 Abstraction → The Fourth Pillar",
  "id": "164-abstraction--the-fourth-pillar",
  "level": 3
}, {
  "value": "1.7 Message Passing",
  "id": "17-message-passing",
  "level": 2
}, {
  "value": "1.7.1 What is Message Passing?",
  "id": "171-what-is-message-passing",
  "level": 3
}, {
  "value": "1.7.2 Anatomy of a Message",
  "id": "172-anatomy-of-a-message",
  "level": 3
}, {
  "value": "1.7.3 Message Passing Example: Coffee Machine Simulation",
  "id": "173-message-passing-example-coffee-machine-simulation",
  "level": 3
}, {
  "value": "1.7.4 Message Passing vs Function Calls",
  "id": "174-message-passing-vs-function-calls",
  "level": 3
}, {
  "value": "1.7.5 Comparing Object Interaction Patterns",
  "id": "175-comparing-object-interaction-patterns",
  "level": 3
}, {
  "value": "1.8 Benefits of OOP",
  "id": "18-benefits-of-oop",
  "level": 2
}, {
  "value": "1.8.1 The Seven Key Benefits",
  "id": "181-the-seven-key-benefits",
  "level": 3
}, {
  "value": "1.8.2 Empirical Advantages → What Studies Show",
  "id": "182-empirical-advantages--what-studies-show",
  "level": 3
}, {
  "value": "1.8.3 When OOP Benefits Are Moderate (Not Magic)",
  "id": "183-when-oop-benefits-are-moderate-not-magic",
  "level": 3
}, {
  "value": "1.8.4 Complexity Analysis of OOP Benefits",
  "id": "184-complexity-analysis-of-oop-benefits",
  "level": 3
}, {
  "value": "1.9 Applications of OOP in Real Systems",
  "id": "19-applications-of-oop-in-real-systems",
  "level": 2
}, {
  "value": "1.9.1 GUI Frameworks (Qt, wxWidgets, MFC)",
  "id": "191-gui-frameworks-qt-wxwidgets-mfc",
  "level": 3
}, {
  "value": "1.9.2 Game Engines (Unity, Unreal Engine)",
  "id": "192-game-engines-unity-unreal-engine",
  "level": 3
}, {
  "value": "1.9.3 Operating System Design",
  "id": "193-operating-system-design",
  "level": 3
}, {
  "value": "1.9.4 Other Real-World Applications of OOP",
  "id": "194-other-real-world-applications-of-oop",
  "level": 3
}, {
  "value": "1.10 Interview Corner",
  "id": "110-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between a class and an object? Explain with a real-world analogy.",
  "id": "q1-what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy",
  "level": 3
}, {
  "value": "Q2: Explain the four pillars of OOP with a single real-world scenario.",
  "id": "q2-explain-the-four-pillars-of-oop-with-a-single-real-world-scenario",
  "level": 3
}, {
  "value": "Q3: How does C++ implement polymorphism? Explain the virtual table mechanism.",
  "id": "q3-how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism",
  "level": 3
}, {
  "value": "Q4: What is the difference between abstraction and encapsulation? Many beginners confuse them.",
  "id": "q4-what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them",
  "level": 3
}, {
  "value": "Q5: What is the difference between &quot;is-a&quot; and &quot;has-a&quot; relationships? When should you use each?",
  "id": "q5-what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each",
  "level": 3
}, {
  "value": "Q6: Can you have OOP without inheritance? Explain.",
  "id": "q6-can-you-have-oop-without-inheritance-explain",
  "level": 3
}, {
  "value": "Q7: What is the diamond problem in inheritance, and how does C++ solve it?",
  "id": "q7-what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it",
  "level": 3
}, {
  "value": "Q8: What is the difference between early binding and late binding?",
  "id": "q8-what-is-the-difference-between-early-binding-and-late-binding",
  "level": 3
}, {
  "value": "Q9: What is the difference between public, protected, and private inheritance in C++?",
  "id": "q9-what-is-the-difference-between-public-protected-and-private-inheritance-in-c",
  "level": 3
}, {
  "value": "Q10: What is a pure virtual function? Why would you use one?",
  "id": "q10-what-is-a-pure-virtual-function-why-would-you-use-one",
  "level": 3
}, {
  "value": "1.11 Common OOP Mistakes and Anti-Patterns",
  "id": "111-common-oop-mistakes-and-anti-patterns",
  "level": 2
}, {
  "value": "1.11.1 God Object",
  "id": "1111-god-object",
  "level": 3
}, {
  "value": "1.11.2 Deep Inheritance Hierarchy",
  "id": "1112-deep-inheritance-hierarchy",
  "level": 3
}, {
  "value": "1.11.3 Ignoring the Liskov Substitution Principle (LSP)",
  "id": "1113-ignoring-the-liskov-substitution-principle-lsp",
  "level": 3
}, {
  "value": "1.11.4 Using Inheritance for Code Reuse Only",
  "id": "1114-using-inheritance-for-code-reuse-only",
  "level": 3
}, {
  "value": "1.12 Chapter Summary",
  "id": "112-chapter-summary",
  "level": 2
}, {
  "value": "Key Design Guidelines",
  "id": "key-design-guidelines",
  "level": 3
}, {
  "value": "OOP is Not a Silver Bullet",
  "id": "oop-is-not-a-silver-bullet",
  "level": 3
}, {
  "value": "1.13 Chapter Quiz",
  "id": "113-chapter-quiz",
  "level": 2
}, {
  "value": "1.14 Exercises",
  "id": "114-exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Coding Problems",
  "id": "coding-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "1.15 References and Further Reading",
  "id": "115-references-and-further-reading",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "chapter-1-introduction-to-object-oriented-programming",
        children: "Chapter 1: Introduction to Object-Oriented Programming"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/02-classes-objects",
          children: "Classes and Objects"
        })]
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
        href: "../../assets/images/lessons/oop-cpp/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/01-introduction/visual-explanation.png",
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
        children: "Define OOP and contrast it with procedural programming across 10+ dimensions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and explain the four pillars: encapsulation, inheritance, polymorphism, abstraction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between a class and an object with precise terminology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model real-world entities as objects with state, behaviour, and identity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain message passing and its role in object collaboration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the historical evolution of OOP from Simula-67 to modern languages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement basic OOP constructs in C++ with compilable examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyse the complexity and trade-offs of OOP design decisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect OOP concepts to real-world systems (GUI, games, OS, frameworks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What is OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programming paradigm that groups data + behaviour into objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model real-world entities directly in code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural vs OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedures operate on separate data; objects unite them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP reduces coupling for large systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class vs Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class = blueprint, Object = instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One class can produce millions of objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle data + methods; hide internal state"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " data with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public:"
            }), " getters/setters"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child class acquires parent properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse code; model is-a relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One interface, many implementations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write generic code that works with any derived type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide complexity; expose only essentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate interface from implementation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Message Passing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects communicate by sending/receiving messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose coupling through method calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Benefits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusability, maintainability, scalability, security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP dominates enterprise software"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[What is OOP] --> B[Procedural vs OOP]\n    B --> C[Class vs Object]\n    C --> D[Encapsulation]\n    D --> E[Inheritance]\n    E --> F[Polymorphism]\n    F --> G[Abstraction]\n    G --> H[Message Passing]\n    H --> I[Benefits & Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-what-is-object-oriented-programming",
      children: "1.1 What is Object-Oriented Programming?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " OOP is a programming paradigm that organises code around objects→bundles of data (attributes) and behaviour (methods)→rather than around functions and logic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-the-core-idea",
      children: "1.1.1 The Core Idea"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object-Oriented Programming (OOP) is a paradigm that models software as a collection of interacting objects rather than as a sequence of procedures. Each object represents a real-world entity→a user, a bank account, a GUI button, a game character→and holds both the data describing that entity and the operations that can be performed on it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In procedural programming, the unit of organisation is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function"
      }), ". Data flows into a function, gets transformed, and flows out. In OOP, the unit of organisation is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object"
      }), "→a self-contained unit that owns its data and exposes a controlled set of operations."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Procedural Thinking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OOP Thinking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"I need to compute a salary\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compute_salary(emp_id, hours, rate)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ask ", (0,jsx_runtime.jsx)(_components.code, {
              children: "employee.computeSalary()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"I need to save a record\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "save_to_db(record_struct, table_name)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ask ", (0,jsx_runtime.jsx)(_components.code, {
              children: "record.save()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"I need to draw a shape\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Switch on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shape_type"
            }), " in a big function"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ask ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shape.draw()"
            }), " → each shape knows how"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-the-three-dimensions-of-an-object",
      children: "1.1.2 The Three Dimensions of an Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every object has three essential dimensions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity"
        }), " → a unique handle that distinguishes this object from all others (its memory address or a unique ID)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State"
        }), " → the data stored inside the object (member variables)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behaviour"
        }), " → the operations the object can perform (member functions / methods)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass BankAccount {\nprivate:\n    std::string accountId;      // Identity\n    double balance;              // State\n\npublic:\n    BankAccount(std::string id, double initialBal)\n        : accountId(id), balance(initialBal) {}\n\n    void deposit(double amount) {           // Behaviour\n        if (amount > 0) balance += amount;\n    }\n\n    bool withdraw(double amount) {          // Behaviour\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    double getBalance() const { return balance; }\n    std::string getId() const { return accountId; }\n};\n\nint main() {\n    BankAccount acc1(\"A001\", 1000.0);\n    BankAccount acc2(\"A002\", 500.0);\n\n    acc1.deposit(250.0);\n    acc2.withdraw(100.0);\n\n    std::cout << acc1.getId() << \" balance: \" << acc1.getBalance() << \"\\n\";\n    std::cout << acc2.getId() << \" balance: \" << acc2.getBalance() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A001 balance: 1250\nA002 balance: 400\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run / Walkthrough:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "acc1 State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "acc2 State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BankAccount acc1(\"A001\", 1000.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor runs; accountId=\"A001\", balance=1000.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A001, 1000.0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BankAccount acc2(\"A002\", 500.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor runs; accountId=\"A002\", balance=500.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A001, 1000.0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A002, 500.0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "acc1.deposit(250.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "balance = 1000.0 + 250.0 = 1250.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A001, 1250.0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A002, 500.0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "acc2.withdraw(100.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100.0 <= 500.0 → true; balance = 500.0 - 100.0 = 400.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A001, 1250.0}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{A002, 400.0}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "acc1.getBalance()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 1250.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "acc2.getBalance()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 400.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String copy dominates, but fixed per call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deposit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single double addition and bounds check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "withdraw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One comparison + one subtraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getBalance"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getId"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct member access (inlined by compiler)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object creation (heap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocation is constant-time amortised"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-procedural-programming-vs-oop",
      children: "1.2 Procedural Programming vs OOP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Procedural code separates data from behaviour; OOP unites them→making large systems easier to reason about, extend, and maintain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-procedural-style--data-and-functions-are-separate",
      children: "1.2.1 Procedural Style → Data and Functions Are Separate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In procedural programming, data structures (structs) hold only data, and functions operate on those structures. The programmer must remember which function works with which struct."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Procedural approach → data and functions are separate\n\n#include <iostream>\n#include <string>\n\nstruct Account {\n    std::string id;\n    double balance;\n};\n\nvoid deposit(Account* acc, double amount) {\n    if (amount > 0 && acc != nullptr) {\n        acc->balance += amount;\n    }\n}\n\nbool withdraw(Account* acc, double amount) {\n    if (acc == nullptr) return false;\n    if (amount > 0 && amount <= acc->balance) {\n        acc->balance -= amount;\n        return true;\n    }\n    return false;\n}\n\nvoid print(const Account* acc) {\n    if (acc) {\n        std::cout << acc->id << \": \" << acc->balance << \"\\n\";\n    }\n}\n\nint main() {\n    Account a1{\"A001\", 1000.0};\n    Account a2{\"A002\", 500.0};\n\n    deposit(&a1, 250.0);\n    withdraw(&a2, 100.0);\n\n    print(&a1);\n    print(&a2);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A001: 1250\nA002: 400\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems with this approach as systems grow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No ownership"
        }), " → any function can modify any field of any struct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scattered logic"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deposit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withdraw"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print"
        }), " all live independently; nothing groups them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy to misuse"
        }), " → passing a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nullptr"
        }), " or the wrong struct type compiles fine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor scalability"
        }), " → adding a new account type (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SavingsAccount"
        }), ") requires editing all functions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-oop-style--data-and-behaviour-are-united",
      children: "1.2.2 OOP Style → Data and Behaviour Are United"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same logic in OOP style (as shown in §1.1.2) groups data and behaviour inside the class. The object protects its data and exposes only intentional operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-deep-comparison-table",
      children: "1.2.3 Deep Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Procedural Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object-Oriented Programming"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unit of organisation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects (classes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data ownership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data is passed around; no owner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each object owns its data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions (hide implementation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes + interfaces (hide data + implementation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reusability unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions, libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes, inheritance hierarchies, templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global variables + local state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-object state (encapsulated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coupling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (functions depend on struct layouts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (objects communicate through interfaces)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cohesion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (related data & functions are scattered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (data + methods co-located)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security / data hiding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (all fields accessible)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected:"
            }), " access specifiers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extensibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modify existing functions or add new ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add new classes via inheritance without touching existing code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code reuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-paste or shared libraries (loose)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance, composition, polymorphism (tight + flexible)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder (mock data separately from functions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (mock objects / dependency injection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mental model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"The computer executes steps on data\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Objects send messages to each other\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best suited for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small to medium programs, algorithms, embedded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large enterprise systems, GUI, games, frameworks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world mapping"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak (no natural mapping to entities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (each real entity = one object)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions share global data (race-prone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects can own private state (easier to isolate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-when-each-approach-shines",
      children: "1.2.4 When Each Approach Shines"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Procedural"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use OOP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write a 50-line data-crunching script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decent but overkill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build a GUI with 200 buttons, windows, dialogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Painful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Natural fit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a physics engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Core algorithms are functional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some OOP for entities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design a banking system with 50 account types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintenance nightmare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Inheritance handles this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write firmware for a microcontroller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (limited resources)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needle in a haystack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Build a web framework (e.g., Spring, ASP.NET)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Framework design demands OOP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-class-vs-object",
      children: "1.3 Class vs Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A class is the blueprint; an object is the house built from that blueprint."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-the-blueprint-analogy",
      children: "1.3.1 The Blueprint Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "class"
      }), " is a compile-time concept→it defines the structure (which data members exist) and the behaviour (which methods exist) but occupies no runtime memory by itself. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object"
      }), " is a runtime entity→a concrete instance of a class that has its own memory, its own copy of member variables, and a distinct identity."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined type / template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete instance of a class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero bytes at runtime (just a type descriptor in the compiled binary)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Occupies ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(ClassName)"
            }), " bytes on stack or heap"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Existence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One class definition per program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero to millions of objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No state (defines variable types, not values)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds actual values for each member"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Creation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Written by the programmer in source"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Created via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), " or stack declaration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destruction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never destroyed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Destroyed via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            }), " or scope exit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint for a car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The actual car on the road"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ keyword"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "struct"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable name of the class type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-why-distinguish",
      children: "1.3.2 Why Distinguish?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass Car {\npublic:\n    std::string model;\n    int year;\n\n    Car(std::string m, int y) : model(m), year(y) {}\n\n    void honk() const {\n        std::cout << model << \" says Beep!\\n\";\n    }\n};\n\nint main() {\n    // 'Car' is the class (blueprint)\n    // 'myCar' and 'yourCar' are objects (instances)\n    Car myCar(\"Toyota Camry\", 2022);\n    Car yourCar(\"Honda Accord\", 2023);\n\n    myCar.honk();    // Toyota Camry says Beep!\n    yourCar.honk();  // Honda Accord says Beep!\n\n    std::cout << \"Size of Car class (per object): \" << sizeof(Car) << \" bytes\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Toyota Camry says Beep!\nHonda Accord says Beep!\nSize of Car class (per object): 40 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-class-vs-object-comparison-table",
      children: "1.3.3 Class vs Object Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Defined at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time (source code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never (just type info)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, on declaration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can have data values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (declares member types only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (each object stores its own values)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can invoke methods"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No (you cannot call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Car::honk()"
            }), " without an object)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "myCar.honk()"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be passed as parameter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As a type parameter (templates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As a value, pointer, or reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exists in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack or heap at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly 1 per translation unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N (as many as you create)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access specifiers matter at"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time access checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same rules apply to the instance"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-visualising-class-vs-object-in-memory",
      children: "1.3.4 Visualising Class vs Object in Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS (compile time)                OBJECTS (runtime)\n+---------------------+            +-----------------------+\n|   class Car         |            | myCar (stack, addr 0x1000) |\n|  - model : string   |            |  model: \"Toyota Camry\" |\n|  - year  : int      |  =====>    |  year : 2022           |\n|  + honk()           |  instantiate|-----------------------|\n|  + Car(m, y)        |            | yourCar (stack, addr 0x1030)|\n+---------------------+            |  model: \"Honda Accord\"|\n                                   |  year : 2023           |\n                                   +-----------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-history-of-oop--a-timeline",
      children: "1.4 History of OOP → A Timeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " OOP evolved over five decades from simulation languages to the dominant paradigm in enterprise, web, and systems programming."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Figure(s)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Significance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1962"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Simula I"
            }), " invented at Norwegian Computing Center"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ole-Johan Dahl, Kristen Nygaard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First language with classes, objects, inheritance, dynamic binding. Designed for simulation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1967"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Simula 67"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dahl, Nygaard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Formalised class, subclass, virtual methods, and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " reference. Considered the first true OOP language."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1972"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smalltalk-72"
            }), " at Xerox PARC"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alan Kay, Dan Ingalls, Adele Goldberg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure OOP language where \"everything is an object.\" Introduced the term \"OOP.\" MVC pattern born here."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1980"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smalltalk-80"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kay, Ingalls, Goldberg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully-reflective OOP with IDE, debugger, inspector. Influenced Java, Python, Ruby."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1979"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C++"
            }), " (initially \"C with Classes\")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bjarne Stroustrup at Bell Labs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added classes, inheritance, strong typing to C. First widely-used hybrid (procedural + OOP) language."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1983"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C++"
            }), " named and released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stroustrup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added virtual functions, operator overloading, references."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1985"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ 1.0"
            }), " commercial release"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stroustrup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First commercial C++ compiler (Cfront). OOP reachable to systems programmers."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1986"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Objective-C"
            }), " created"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brad Cox, Tom Love at Stepstone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smalltalk-style OOP added to C. Later became the foundation for iOS/macOS."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1986"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eiffel language released"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bertrand Meyer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Introduced Design by Contract (DbC). Pure OOP with rigorous type system."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1991"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Python"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guido van Rossum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-paradigm with first-class OOP support. Classes, inheritance, duck typing."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1995"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 1.0"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "James Gosling at Sun Microsystems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Write once, run anywhere.\" Pure OOP (primitives excepted). Became the dominant enterprise OOP language."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1995"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Ruby"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yukihiro Matsumoto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure OOP. Everything is an object, including numbers. Influenced by Smalltalk, Perl, Lisp."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2000"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C# 1.0"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anders Hejlsberg at Microsoft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java-like OOP with component-oriented features. Properties, events, delegates."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2000"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PHP 4"
            }), " adds OOP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zend Technologies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes and objects introduced to the web scripting world."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2005"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PHP 5"
            }), " major OOP overhaul"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zend"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Real OOP with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            }), ", interfaces, exceptions."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2011"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C++11"
            }), " → modern C++"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C++ Committee"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Major OOP enhancements: move semantics, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), ", lambdas, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            }), ". Modern C++ idiom established."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2014"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Swift 1.0"
            }), " released"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple (Chris Lattner)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol-oriented + OOP. Protocols (interfaces) as primary abstraction mechanism."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2020s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP influence absorbed by all mainstream languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Community"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even functional languages (Scala, Kotlin) include classes; OOP patterns ubiquitous in frameworks."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-observations-from-the-timeline",
      children: "Key Observations from the Timeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OOP started with simulation"
        }), " → Dahl and Nygaard needed to model real-world entities (ships, queues, cargo). Objects were the natural unit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smalltalk defined the vision"
        }), " → Alan Kay coined \"object-oriented programming\" and imagined a world of communicating objects (inspired by biological cells and computers on the ARPANET)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C++ made OOP practical for systems programming"
        }), " → Stroustrup's hybrid approach let programmers choose when to use OOP, enabling gradual adoption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java made OOP mainstream"
        }), " → Sun's marketing and the web boom catapulted OOP to the dominant paradigm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modern languages are multi-paradigm"
        }), " → Pure OOP is rare now; most languages mix OOP, functional, and procedural styles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-real-world-analogies-with-c-code",
      children: "1.5 Real-World Analogies with C++ Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analogy-1-the-car-blueprint-class-and-actual-cars-objects",
      children: "Analogy 1: The Car Blueprint (Class) and Actual Cars (Objects)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Real World"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint for a car"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Car { ... };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "An actual car on the road"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Car myCar;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Car's colour, speed, fuel level"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Member variables (", (0,jsx_runtime.jsx)(_components.code, {
              children: "color_"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "speed_"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fuel_"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accelerate, brake, turn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Member functions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "accelerate()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "brake()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "turn()"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Press the gas pedal = message"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Method call: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "myCar.accelerate(10)"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass Car {\nprivate:\n    std::string color_;\n    int speed_;       // km/h\n    int fuel_;        // litres\n\npublic:\n    Car(std::string color, int fuel)\n        : color_(color), speed_(0), fuel_(fuel) {}\n\n    void accelerate(int amount) {\n        if (fuel_ <= 0) {\n            std::cout << \"Out of fuel!\\n\";\n            return;\n        }\n        speed_ += amount;\n        fuel_ -= 1;  // burn 1 litre per acceleration\n        std::cout << color_ << \" car accelerates to \" << speed_ << \" km/h\\n\";\n    }\n\n    void brake() {\n        speed_ = 0;\n        std::cout << color_ << \" car stopped.\\n\";\n    }\n\n    int getSpeed() const { return speed_; }\n    int getFuel() const { return fuel_; }\n};\n\nint main() {\n    Car redCar(\"Red\", 10);    // Blueprint → object (red car with 10L fuel)\n    Car blueCar(\"Blue\", 5);   // Blueprint → object (blue car with 5L fuel)\n\n    redCar.accelerate(20);    // Send \"accelerate\" message to redCar\n    redCar.accelerate(10);    // Send \"accelerate\" message again\n    blueCar.accelerate(30);   // Send \"accelerate\" message to blueCar\n\n    std::cout << \"Red car speed: \" << redCar.getSpeed() << \" km/h\\n\";\n    std::cout << \"Blue car fuel: \" << blueCar.getFuel() << \" L\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Red car accelerates to 20 km/h\nRed car accelerates to 30 km/h\nBlue car accelerates to 30 km/h\nRed car speed: 30 km/h\nBlue car fuel: 4 L\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run / Step-by-Step:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "redCar state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "blueCar state"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Car redCar(\"Red\", 10)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color=Red, speed=0, fuel=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Car blueCar(\"Blue\", 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "as above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "color=Blue, speed=0, fuel=5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "redCar.accelerate(20)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "speed=0+20=20, fuel=10-1=9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "speed=20, fuel=9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "redCar.accelerate(10)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "speed=20+10=30, fuel=9-1=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "speed=30, fuel=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unchanged"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "blueCar.accelerate(30)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "speed=0+30=30, fuel=5-1=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "speed=30, fuel=4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "redCar.getSpeed()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analogy-2-restaurant-kitchen--chef-orders-and-plates",
      children: "Analogy 2: Restaurant Kitchen → Chef, Orders, and Plates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This analogy models ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object collaboration"
      }), " (message passing)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Real World"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Chef { ... };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Order { ... };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plate of food"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Plate { ... };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chef receives order"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Chef.cook(order)"
            }), " → message passing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order has items"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Order::items_"
            }), " → member data"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nclass Order {\npublic:\n    std::vector<std::string> items;\n    int tableNumber;\n\n    Order(std::vector<std::string> i, int t) : items(i), tableNumber(t) {}\n};\n\nclass Plate {\npublic:\n    std::string food;\n    int tableNumber;\n\n    Plate(std::string f, int t) : food(f), tableNumber(t) {}\n};\n\nclass Chef {\nprivate:\n    std::string name_;\n\npublic:\n    Chef(std::string name) : name_(name) {}\n\n    Plate cook(const Order& order) {\n        std::cout << name_ << \" is cooking for table \" << order.tableNumber << \"\\n\";\n        std::string combined;\n        for (const auto& item : order.items) {\n            combined += item + \" \";\n        }\n        return Plate(combined, order.tableNumber);\n    }\n};\n\nclass Waiter {\nprivate:\n    Chef& chef_;\n\npublic:\n    Waiter(Chef& chef) : chef_(chef) {}\n\n    void serve(const Order& order) {\n        std::cout << \"Waiter delivers order to chef...\\n\";\n        Plate plate = chef_.cook(order);   // Message passing: Waiter → Chef\n        std::cout << \"Serving \\\"\" << plate.food\n                  << \"\\\" to table \" << plate.tableNumber << \"\\n\";\n    }\n};\n\nint main() {\n    Chef chef(\"Gordon\");\n    Waiter waiter(chef);\n\n    Order order({\"Steak\", \"Fries\", \"Salad\"}, 7);\n\n    waiter.serve(order);  // Waiter sends message to Chef via serve()\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Waiter delivers order to chef...\nGordon is cooking for table 7\nServing \"Steak Fries Salad \" to table 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Objects and their interactions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Waiter] --serve(order)--> [Chef] --cook(order)--> returns Plate\n    |                                                |\n    |              Message Passing Chain             |\n    +------------------------------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analogy-3-atm-machine--state-behaviour-encapsulation",
      children: "Analogy 3: ATM Machine → State, Behaviour, Encapsulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass ATM {\nprivate:\n    std::string location_;\n    double cashAvailable_;\n    bool isOnline_;\n\npublic:\n    ATM(std::string loc, double initialCash)\n        : location_(loc), cashAvailable_(initialCash), isOnline_(true) {}\n\n    bool dispenseCash(double amount) {\n        if (!isOnline_) {\n            std::cout << \"ATM offline.\\n\";\n            return false;\n        }\n        if (amount > cashAvailable_) {\n            std::cout << \"Insufficient cash in ATM.\\n\";\n            return false;\n        }\n        cashAvailable_ -= amount;\n        std::cout << \"Dispensed $\" << amount << \" from \" << location_ << \"\\n\";\n        return true;\n    }\n\n    double getCashLevel() const { return cashAvailable_; }\n    bool isOnline() const { return isOnline_; }\n    void setOnline(bool status) { isOnline_ = status; }\n};\n\nint main() {\n    ATM atm(\"Main Street Branch\", 10000.0);\n\n    atm.dispenseCash(2000.0);   // Customer withdraws\n    atm.dispenseCash(9000.0);   // Another withdrawal → may fail\n    atm.dispenseCash(500.0);    // After cash runs low\n\n    std::cout << \"Remaining cash: $\" << atm.getCashLevel() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dispensed $2000 from Main Street Branch\nDispensed $9000 from Main Street Branch\nInsufficient cash in ATM.\nRemaining cash: $800\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis of ATM Example:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dispenseCash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant-time checks and subtraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getCashLevel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct field access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String copy + double assignment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-the-four-pillars-of-oop--overview",
      children: "1.6 The Four Pillars of OOP → Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Encapsulation hides data, inheritance reuses code, polymorphism swaps behaviour, abstraction simplifies interfaces → together they enable scalable, maintainable software."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pillar"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Analogy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encapsulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bundle data + methods; hide internal state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A pill capsule contains medicine but hides its chemical composition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " members + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public:"
            }), " methods"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data protection, controlled access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create new classes from existing ones"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child inherits parent's DNA but has unique traits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Derived : public Base { }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code reuse, is-a relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polymorphism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One interface, many implementations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A \"play\" button works on DVD, Spotify, YouTube differently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions + overriding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensibility, generic code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide complexity; expose only what's needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Driving a car: you use steering wheel + pedals, not the engine internals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure virtual classes / interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce cognitive load, decouple usage from implementation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-exploration-of-each-pillar-sections-161164",
      children: "Detailed Exploration of Each Pillar (Sections 1.6.1–1.6.4)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "161-encapsulation--the-first-pillar",
      children: "1.6.1 Encapsulation → The First Pillar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Encapsulation wraps data and functions into a single unit and restricts direct access to an object's internal state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Without encapsulation, any part of the program could modify any data structure, leading to unpredictable states and impossible-to-track bugs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered mechanism in C++:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare member variables in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private:"
        }), " section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public:"
        }), " getter and setter methods for controlled access."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement validation logic inside setters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep implementation details hidden; expose only the interface."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users interact with the object through its public API only."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass Employee {\nprivate:\n    std::string name_;\n    int age_;\n    double salary_;\n\npublic:\n    Employee(std::string name, int age, double salary)\n        : name_(name), age_(age), salary_(salary) {}\n\n    // Getter → controlled read access\n    std::string getName() const { return name_; }\n    int getAge() const { return age_; }\n    double getSalary() const { return salary_; }\n\n    // Setter with validation → controlled write access\n    void setAge(int age) {\n        if (age >= 18 && age <= 90) {\n            age_ = age;\n        } else {\n            std::cout << \"Invalid age: \" << age << \"\\n\";\n        }\n    }\n\n    void setSalary(double salary) {\n        if (salary >= 0) {\n            salary_ = salary;\n        } else {\n            std::cout << \"Salary cannot be negative.\\n\";\n        }\n    }\n\n    void giveRaise(double percent) {\n        if (percent > 0) {\n            salary_ *= (1.0 + percent / 100.0);\n        }\n    }\n};\n\nint main() {\n    Employee emp(\"Alice\", 30, 50000.0);\n\n    // emp.salary_ = 100000;   // ERROR: salary_ is private\n    emp.giveRaise(10.0);       // 10% raise through public API\n\n    std::cout << emp.getName() << \" earns $\"\n              << emp.getSalary() << \"\\n\";\n\n    emp.setAge(150);           // Invalid → will be rejected\n    std::cout << \"Age remains: \" << emp.getAge() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice earns $55000\nInvalid age: 150\nAge remains: 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "giveRaise"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Calculation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "giveRaise(10.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "percent = 10.0 > 0 → true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enters if-block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "salary_ *= (1.0 + 10.0/100.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "salary_ = 50000.0 * 1.10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "salary_ = 55000.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "salary_ now 55000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why encapsulation works for large teams:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contract"
        }), ": the public API is the contract; as long as it stays stable, internal changes don't break callers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit"
        }), ": every state change goes through a method that can log, validate, or reject."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactoring"
        }), ": rename a private field without touching any external code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "162-inheritance--the-second-pillar",
      children: "1.6.2 Inheritance → The Second Pillar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Inheritance lets a class acquire properties and behaviour from a parent class, establishing an is-a relationship."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Without inheritance, every new class must be written from scratch. With inheritance, you build hierarchies that mirror real-world taxonomies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered mechanism in C++:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify a base class with common attributes and behaviour."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define derived classes that ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":"
        }), " inherit from the base."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Specify access specifier: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        }), " inheritance (most common)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unique members in derived classes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally override (redefine) base class methods."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass Animal {                               // Base class\nprotected:\n    std::string name_;\n    int age_;\n\npublic:\n    Animal(std::string name, int age)\n        : name_(name), age_(age) {}\n\n    void eat() const {\n        std::cout << name_ << \" is eating.\\n\";\n    }\n\n    void sleep() const {\n        std::cout << name_ << \" is sleeping.\\n\";\n    }\n\n    virtual void sound() const {             // Virtual → can be overridden\n        std::cout << name_ << \" makes a sound.\\n\";\n    }\n\n    std::string getName() const { return name_; }\n};\n\nclass Dog : public Animal {                  // Derived class → Dog is an Animal\npublic:\n    Dog(std::string name, int age)\n        : Animal(name, age) {}              // Call base constructor\n\n    void sound() const override {            // Override base behaviour\n        std::cout << name_ << \" barks: Woof! Woof!\\n\";\n    }\n\n    void fetch() const {                     // Unique to Dog\n        std::cout << name_ << \" is fetching the ball.\\n\";\n    }\n};\n\nclass Cat : public Animal {                  // Another derived class\npublic:\n    Cat(std::string name, int age)\n        : Animal(name, age) {}\n\n    void sound() const override {\n        std::cout << name_ << \" meows: Meow!\\n\";\n    }\n\n    void purr() const {\n        std::cout << name_ << \" is purring.\\n\";\n    }\n};\n\nint main() {\n    Dog dog(\"Buddy\", 3);\n    Cat cat(\"Whiskers\", 2);\n\n    dog.eat();                               // Inherited from Animal\n    dog.sound();                             // Overridden in Dog\n    dog.fetch();                             // Unique to Dog\n\n    cat.sleep();                             // Inherited\n    cat.sound();                             // Overridden in Cat\n    cat.purr();                              // Unique to Cat\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Buddy is eating.\nBuddy barks: Woof! Woof!\nBuddy is fetching the ball.\nWhiskers is sleeping.\nWhiskers meows: Meow!\nWhiskers is purring.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inheritance Hierarchy Diagram:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "            +---------+\n            | Animal  |  (base class)\n            +---------+\n           /           \\\n     +-------+       +-------+\n     |  Dog  |       |  Cat  |  (derived classes)\n     +-------+       +-------+\n     + fetch()       + purr()\n     + sound() ovr.  + sound() ovr.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base class method call via derived object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct dispatch (non-virtual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual method call (overridden)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V-table lookup (constant, ~2 extra instructions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor chain (base → derived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear in depth of hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory per object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(Base) + sizeof(Derived members)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base sub-object stored first in memory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What is inherited and what is not:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Member type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inherited?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public member functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessible through derived object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protected member variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accessible inside derived class methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private member variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ Not directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exist in memory but inaccessible by name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ Not inherited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be called explicitly from derived ctor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ Yes (virtual recommended)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically called in reverse order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Friend functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ Not inherited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Friendship is not transitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ Not inherited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler-generated if not user-defined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "163-polymorphism--the-third-pillar",
      children: "1.6.3 Polymorphism → The Third Pillar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Polymorphism lets one interface work with multiple types → the same function call behaves differently depending on the object's actual type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Etymology:"
      }), " From Greek ", (0,jsx_runtime.jsx)(_components.em, {
        children: "polys"
      }), " (many) + ", (0,jsx_runtime.jsx)(_components.em, {
        children: "morphē"
      }), " (form) = \"many forms.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Without polymorphism, every type check requires explicit conditional logic. With polymorphism, adding a new type requires zero changes to existing code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered mechanism in C++:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare a virtual function in the base class using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtual"
        }), " keyword."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Override the function in derived classes using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "override"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use pointers or references to the base class to refer to derived objects."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Call the virtual function → the compiler dispatches to the correct override at runtime."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This is called ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dynamic dispatch"
        }), " and uses a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v-table"
        }), " (virtual method table)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <memory>\n\nclass Shape {\npublic:\n    virtual double area() const = 0;        // Pure virtual → abstract\n    virtual void draw() const = 0;\n    virtual ~Shape() = default;             // Virtual destructor for safe deletion\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius_;\npublic:\n    Circle(double r) : radius_(r) {}\n    double area() const override {\n        return 3.14159 * radius_ * radius_;\n    }\n    void draw() const override {\n        std::cout << \"  ( ) \\n\";\n        std::cout << \" (   )  Circle\\n\";\n        std::cout << \"  ( )  radius=\" << radius_ << \"\\n\";\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width_, height_;\npublic:\n    Rectangle(double w, double h) : width_(w), height_(h) {}\n    double area() const override {\n        return width_ * height_;\n    }\n    void draw() const override {\n        std::cout << \" +------+\\n\";\n        std::cout << \" |      | Rectangle\\n\";\n        std::cout << \" +------+ w=\" << width_ << \" h=\" << height_ << \"\\n\";\n    }\n};\n\nclass Triangle : public Shape {\nprivate:\n    double base_, height_;\npublic:\n    Triangle(double b, double h) : base_(b), height_(h) {}\n    double area() const override {\n        return 0.5 * base_ * height_;\n    }\n    void draw() const override {\n        std::cout << \"   /\\\\  \\n\";\n        std::cout << \"  /  \\\\  Triangle\\n\";\n        std::cout << \" /____\\\\ base=\" << base_ << \" h=\" << height_ << \"\\n\";\n    }\n};\n\nvoid printShapeInfo(const Shape& s) {       // Works with ANY Shape\n    s.draw();\n    std::cout << \"   Area: \" << s.area() << \"\\n\\n\";\n}\n\nint main() {\n    Circle c(5.0);\n    Rectangle r(4.0, 6.0);\n    Triangle t(3.0, 8.0);\n\n    // Polymorphic calls through base class reference\n    printShapeInfo(c);    // Circle passed as const Shape&\n    printShapeInfo(r);    // Rectangle passed as const Shape&\n    printShapeInfo(t);    // Triangle passed as const Shape&\n\n    // Polymorphic container\n    std::vector<std::unique_ptr<Shape>> shapes;\n    shapes.push_back(std::make_unique<Circle>(2.5));\n    shapes.push_back(std::make_unique<Rectangle>(3.0, 5.0));\n    shapes.push_back(std::make_unique<Triangle>(6.0, 4.0));\n\n    std::cout << \"--- Polymorphic container ---\\n\";\n    double totalArea = 0.0;\n    for (const auto& shape : shapes) {\n        totalArea += shape->area();\n    }\n    std::cout << \"Total area of all shapes: \" << totalArea << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  ( ) \n (   )  Circle\n  ( )  radius=5\n   Area: 78.5397\n\n +------+\n |      | Rectangle\n +------+ w=4 h=6\n   Area: 24\n\n   /\\  \n  /  \\  Triangle\n /____\\ base=3 h=8\n   Area: 12\n\n--- Polymorphic container ---\nTotal area of all shapes: 46.3988\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How the Virtual Table (v-table) Works:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory layout for Circle object c:\n\n  +---------------------+\n  | vptr  → [Circle vtable]  |\n  |   ┌──────────────┐  |\n  |   │ Circle::area()│  |\n  |   │ Circle::draw()│  |\n  |   │ ~Circle()     │  |\n  |   └──────────────┘  |\n  | radius_ = 5.0       |\n  +---------------------+\n\nAt compile time:\n  printShapeInfo(c) compiles to:\n    Load c.vptr\n    Jump to vptr[0]  (index for area())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps of Dynamic Dispatch:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler sees ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s.area()"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const Shape&"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler doesn't know which ", (0,jsx_runtime.jsx)(_components.code, {
          children: "area()"
        }), " to call at compile time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At runtime, the program reads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s"
        }), "'s v-pointer (hidden first field)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The v-pointer points to the actual class's v-table (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Circle"
        }), "'s v-table)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The v-table contains function pointers; slot 0 is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "area()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The program jumps to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Circle::area()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Rectangle::area()"
        }), " etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis of Virtual Dispatch:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1-2 CPU cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct jump to known address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3-5 CPU cycles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two indirections: vptr → vtable → function address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual call → wrong type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caught before execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual call → wrong type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always dispatched to correct override"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Branch misprediction (if-else chain)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10-20 cycles per mispredict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual dispatch avoids branches entirely"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Polymorphism eliminates conditionals:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// WITHOUT polymorphism: every new shape requires editing this function\ndouble totalAreaProcedural(const std::vector<ShapeType>& shapes) {\n    double total = 0;\n    for (auto& s : shapes) {\n        if (s.type == CIRCLE)      total += circleArea(s.r);\n        else if (s.type == RECT)   total += rectArea(s.w, s.h);\n        else if (s.type == TRI)    total += triArea(s.b, s.h);\n        // Adding Pentagon means adding another else-if\n    }\n    return total;\n}\n\n// WITH polymorphism: adding Pentagon requires zero changes here\ndouble totalAreaOOP(const std::vector<Shape*>& shapes) {\n    double total = 0;\n    for (auto* s : shapes)\n        total += s->area();          // No if-else needed\n    return total;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "164-abstraction--the-fourth-pillar",
      children: "1.6.4 Abstraction → The Fourth Pillar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Abstraction separates what something does from how it does it, letting users work with high-level concepts without managing low-level details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why it matters:"
      }), " Without abstraction, every user of a component must understand its full internal complexity. With abstraction, complex systems become accessible and interchangeable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Abstraction vs Encapsulation (critical distinction):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstraction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiding data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hiding complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mechanism"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " fields + public methods"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure virtual classes / interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Who can access this data?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What does this component do?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access specifiers (private/protected/public)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract base classes with pure virtual functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATM hides its cash cassette"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATM hides how it counts bills, logs transactions, communicates with bank"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered mechanism in C++:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare an abstract base class with at least one ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pure virtual function"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "= 0"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The abstract class defines the interface but provides no implementation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derived classes must implement all pure virtual functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users write code against the abstract interface."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concrete implementations can be swapped without changing user code."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <memory>\n\nclass Database {                        // Abstract interface\npublic:\n    virtual bool connect(const std::string& url) = 0;\n    virtual void execute(const std::string& sql) = 0;\n    virtual std::string query(const std::string& sql) = 0;\n    virtual ~Database() = default;\n};\n\nclass MySQLDatabase : public Database {\npublic:\n    bool connect(const std::string& url) override {\n        std::cout << \"Connecting to MySQL at \" << url << \"\\n\";\n        return true;\n    }\n    void execute(const std::string& sql) override {\n        std::cout << \"MySQL executing: \" << sql << \"\\n\";\n    }\n    std::string query(const std::string& sql) override {\n        std::cout << \"MySQL querying: \" << sql << \"\\n\";\n        return \"[MySQL result set]\";\n    }\n};\n\nclass PostgresDatabase : public Database {\npublic:\n    bool connect(const std::string& url) override {\n        std::cout << \"Connecting to PostgreSQL at \" << url << \"\\n\";\n        return true;\n    }\n    void execute(const std::string& sql) override {\n        std::cout << \"PostgreSQL executing: \" << sql << \"\\n\";\n    }\n    std::string query(const std::string& sql) override {\n        std::cout << \"PostgreSQL querying: \" << sql << \"\\n\";\n        return \"[PostgreSQL result set]\";\n    }\n};\n\nclass ReportGenerator {                 // Works with ANY Database\nprivate:\n    Database& db_;\npublic:\n    ReportGenerator(Database& db) : db_(db) {}\n\n    void generateSalesReport() {\n        db_.connect(\"localhost:3306\");\n        db_.execute(\"CREATE TEMP TABLE sales AS SELECT * FROM orders\");\n        std::string result = db_.query(\"SELECT SUM(total) FROM sales\");\n        std::cout << \"Sales report: \" << result << \"\\n\";\n    }\n};\n\nint main() {\n    MySQLDatabase mySQLDb;\n    PostgresDatabase pgDb;\n\n    ReportGenerator report1(mySQLDb);\n    report1.generateSalesReport();\n    std::cout << \"---\\n\";\n\n    ReportGenerator report2(pgDb);      // Same code, different database\n    report2.generateSalesReport();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Connecting to MySQL at localhost:3306\nMySQL executing: CREATE TEMP TABLE sales AS SELECT * FROM orders\nMySQL querying: SELECT SUM(total) FROM sales\nSales report: [MySQL result set]\n---\nConnecting to PostgreSQL at localhost:3306\nPostgreSQL executing: CREATE TEMP TABLE sales AS SELECT * FROM orders\nPostgreSQL querying: SELECT SUM(total) FROM sales\nSales report: [PostgreSQL result set]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReportGenerator"
      }), " has zero idea which database it is using. The abstraction (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      }), " interface) decouples the report logic from the database implementation. Adding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SQLiteDatabase"
      }), " requires:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One new class implementing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Database"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zero changes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReportGenerator"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Advantage:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Without Abstraction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Abstraction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ReportGeneratorMySQL"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReportGeneratorPostgres"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReportGeneratorSQLite"
            }), " → 3 independent classes"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReportGenerator"
            }), " + 3 database implementations"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adding a new DB: write new report generator + test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding a new DB: write DB adapter only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixing a report bug: fix N versions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixing a report bug: fix one place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-message-passing",
      children: "1.7 Message Passing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Objects collaborate by sending messages (calling methods) to each other → the fundamental mechanism of interaction in an object-oriented system."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "171-what-is-message-passing",
      children: "1.7.1 What is Message Passing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Message passing is the process by which objects communicate. In OOP, one object sends a message to another object, and the receiving object decides how to respond (or if to respond at all). In C++, message passing is implemented as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "method calls"
      }), " on an object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decoupling"
        }), " → the sender does not need to know how the receiver fulfils the request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation"
        }), " → the receiver's internal state is never directly exposed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphism"
        }), " → different receivers can respond to the same message differently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Late binding"
        }), " → which ", (0,jsx_runtime.jsx)(_components.code, {
          children: "respondTo"
        }), " is called can be determined at runtime."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "172-anatomy-of-a-message",
      children: "1.7.2 Anatomy of a Message"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sender.message(arguments)\n   |       |       |\n   |       |       +-- Data passed with the message\n   |       +-- Message name (method selector)\n   +-- Object that receives the message\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "173-message-passing-example-coffee-machine-simulation",
      children: "1.7.3 Message Passing Example: Coffee Machine Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass CoffeeMachine {\nprivate:\n    int waterLevel_;    // ml\n    int beanLevel_;     // grams\n    bool isOn_;\n\npublic:\n    CoffeeMachine() : waterLevel_(1000), beanLevel_(500), isOn_(false) {}\n\n    void turnOn() {\n        isOn_ = true;\n        std::cout << \"Coffee machine ON.\\n\";\n    }\n\n    void turnOff() {\n        isOn_ = false;\n        std::cout << \"Coffee machine OFF.\\n\";\n    }\n\n    std::string brew(const std::string& type) {\n        if (!isOn_) return \"Machine is off!\";\n        if (waterLevel_ < 200) return \"Not enough water!\";\n        if (beanLevel_ < 20) return \"Not enough beans!\";\n\n        waterLevel_ -= 200;\n        beanLevel_  -= 20;\n\n        return \"Here is your \" + type + \"! ☕\";\n    }\n\n    int getWaterLevel() const { return waterLevel_; }\n    int getBeanLevel() const { return beanLevel_; }\n};\n\nclass Person {\nprivate:\n    std::string name_;\n\npublic:\n    Person(std::string name) : name_(name) {}\n\n    void makeCoffee(CoffeeMachine& machine, const std::string& type) {\n        std::cout << name_ << \" asks for \" << type << \"\\n\";\n\n        // Message passing: Person sends \"brew\" message to CoffeeMachine\n        std::string result = machine.brew(type);\n\n        std::cout << \"CoffeeMachine: \" << result << \"\\n\";\n    }\n\n    void refillMachine(CoffeeMachine& machine) {\n        std::cout << name_ << \" refills the machine.\\n\";\n        // In real OOP, this would go through a public interface\n        // Here, we'd ideally call machine.refill() → illustrating the need\n        // for proper encapsulation of refill logic\n    }\n};\n\nint main() {\n    CoffeeMachine machine;\n    Person alice(\"Alice\");\n    Person bob(\"Bob\");\n\n    alice.makeCoffee(machine, \"Espresso\");   // Message: Person → CoffeeMachine\n    machine.turnOn();                         // Message: main → CoffeeMachine\n\n    alice.makeCoffee(machine, \"Latte\");      // Message: Person → CoffeeMachine\n    bob.makeCoffee(machine, \"Cappuccino\");   // Message: Person → CoffeeMachine\n\n    std::cout << \"\\nWater left: \" << machine.getWaterLevel() << \" ml\\n\";\n    std::cout << \"Beans left: \" << machine.getBeanLevel() << \" g\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice asks for Espresso\nCoffeeMachine: Machine is off!\nAlice asks for Latte\nCoffeeMachine: Here is your Latte! ☕\nBob asks for Cappuccino\nCoffeeMachine: Here is your Cappuccino! ☕\n\nWater left: 600 ml\nBeans left: 460 g\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message Passing Diagram:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "main()                         CoffeeMachine\n  |                                |\n  |--turnOn()--------------------->|  (message: turn on)\n  |                                |\nAlice()                         CoffeeMachine\n  |                                |\n  |--makeCoffee(machine, \"Latte\")  |\n  |    |                           |\n  |    |--brew(\"Latte\")----------->|  (message: brew coffee)\n  |    |                           |-- waterLevel_ -= 200\n  |    |                           |-- beanLevel_ -= 20\n  |    |<-- \"Here is your Latte!\"--|  (reply)\n  |    |                           |\n  |                                |\nBob()                           CoffeeMachine\n  |                                |\n  |--makeCoffee(machine, \"Capp\")   |\n  |    |--brew(\"Cappuccino\")------>|  (message: brew coffee)\n  |    |<-- \"Here is your Capp!\"---|  (reply)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "174-message-passing-vs-function-calls",
      children: "1.7.4 Message Passing vs Function Calls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pure Procedural Function Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OOP Message Passing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who decides what happens?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The function implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The receiving object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Which function runs?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determined by the function name at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determined by the receiver's type at compile or run time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function receives data as parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object can access its own private state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caller is in control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receiver is in control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polymorphism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (if-else or switch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (virtual dispatch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Execute steps 1-5 on this data\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Please do what you do with this\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "175-comparing-object-interaction-patterns",
      children: "1.7.5 Comparing Object Interaction Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direct message"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "obj.method()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "account.deposit(100)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chained message"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "obj1.getObj2().method()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "car.getEngine().start()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delegation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object forwards message to helper"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printer.print(doc)"
            }), " internally calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spooler.queue(doc)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Callback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object A passes a function for Object B to call later"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "button.onClick(handler)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Observer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object notifies all registered observers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "subject.notifyObservers(event)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-benefits-of-oop",
      children: "1.8 Benefits of OOP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " OOP reduces complexity in large systems through encapsulation, reuse, and clear modelling of real-world entities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-the-seven-key-benefits",
      children: "1.8.1 The Seven Key Benefits"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modularity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each object is a self-contained unit. Debug, test, and modify one object without affecting others."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate class per file; each class has a single responsibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reusability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write once, use many times. Inheritance and composition let you reuse tested code."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inheritance (", (0,jsx_runtime.jsx)(_components.code, {
              children: "class D : public B"
            }), "), composition (member objects), templates"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintainability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-encapsulated objects are easy to change. Internal changes don't ripple to callers."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Encapsulation (", (0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " data, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public:"
            }), " API)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP systems grow by adding new classes, not by modifying existing code."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open/Closed Principle: classes open for extension, closed for modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private members cannot be accessed from outside. Controlled access prevents invalid states."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " methods"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Code mirrors real-world structure. A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BankAccount"
            }), " object is more intuitive than a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "struct Account"
            }), " + 20 functions."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class names map to domain concepts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each class can be tested independently. Mock objects replace real dependencies for isolated tests."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency injection, virtual interfaces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-empirical-advantages--what-studies-show",
      children: "1.8.2 Empirical Advantages → What Studies Show"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect density"
        }), ": OOP projects show 30-50% fewer defects compared to procedural projects of equivalent size (Capers Jones, \"Applied Software Measurement\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Productivity"
        }), ": Reuse through inheritance can improve programmer productivity by 20-40% after the first release (Boehm, \"Software Engineering Economics\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Change impact"
        }), ": Encapsulation reduces the ripple effect of changes: a change to a private field affects exactly one class, not every function that touches a struct."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time to market"
        }), ": Frameworks (which are OOP-based) reduce development time by 50-70% for standard applications."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-when-oop-benefits-are-moderate-not-magic",
      children: "1.8.3 When OOP Benefits Are Moderate (Not Magic)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Claim"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reality"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"OOP makes everything reusable\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse requires deliberate design (interfaces, dependency injection). Naive OOP creates rigid hierarchies."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"OOP is always more maintainable\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor OOP (deep inheritance, god classes) is harder to maintain than clean procedural code."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"OOP is the only modern paradigm\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functional programming excels at data transformation; OOP excels at stateful entities. Modern languages mix both."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Inheritance is always the right reuse mechanism\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition (\"has-a\") is often better than inheritance (\"is-a\"). Prefer composition over inheritance in most cases."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "184-complexity-analysis-of-oop-benefits",
      children: "1.8.4 Complexity Analysis of OOP Benefits"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How it reduces complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurable metric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces coupling → fewer modules affected per change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower Coupling Between Objects (CBO) metric"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates duplicate code → one base class replaces N copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher reuse ratio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates conditional branches → no switch-on-type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower cyclomatic complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces cognitive load → programmer sees interface, not implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer concepts to hold in working memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modularity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolates failure → bug in one class doesn't crash others"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller Mean Time to Repair (MTTR)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-applications-of-oop-in-real-systems",
      children: "1.9 Applications of OOP in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every major software system you interact with → from your phone's UI to the video game you played last night → is built on OOP principles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "191-gui-frameworks-qt-wxwidgets-mfc",
      children: "1.9.1 GUI Frameworks (Qt, wxWidgets, MFC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GUI frameworks are perhaps the strongest argument for OOP. Every visual element is an object."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "GUI Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OOP Concept Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Window"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "QMainWindow"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "QWidget"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base class (inheritance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "QPushButton"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inheritance from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "QWidget"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "QLineEdit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance + encapsulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event handler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void onClick()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism (virtual slots)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layout manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "QVBoxLayout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Simplified Qt-like OOP GUI structure\n#include <iostream>\n#include <string>\n#include <vector>\n\nclass Widget {                              // Abstract base for ALL UI elements\nprotected:\n    int x_, y_, width_, height_;\n    bool visible_;\npublic:\n    Widget(int x, int y, int w, int h)\n        : x_(x), y_(y), width_(w), height_(h), visible_(true) {}\n    virtual void draw() const = 0;          // Polymorphic drawing\n    virtual void onClick(int mx, int my) {  // Default: no-op\n        std::cout << \"Widget clicked at (\" << mx << \",\" << my << \")\\n\";\n    }\n    void setVisible(bool v) { visible_ = v; }\n    bool isVisible() const { return visible_; }\n    virtual ~Widget() = default;\n};\n\nclass Button : public Widget {              // Inheritance\nprivate:\n    std::string label_;\npublic:\n    Button(int x, int y, int w, int h, std::string label)\n        : Widget(x, y, w, h), label_(label) {}\n    void draw() const override {\n        std::cout << \"[ \" << label_ << \" ]  at (\" << x_ << \",\" << y_ << \")\\n\";\n    }\n    void onClick(int mx, int my) override {\n        std::cout << \"Button '\" << label_ << \"' pressed!\\n\";\n        // Execute callback, submit form, etc.\n    }\n};\n\nclass TextBox : public Widget {\nprivate:\n    std::string text_;\npublic:\n    TextBox(int x, int y, int w, int h)\n        : Widget(x, y, w, h) {}\n    void draw() const override {\n        std::cout << \"| \" << text_ << \" | at (\" << x_ << \",\" << y_ << \")\\n\";\n    }\n    void setText(const std::string& t) { text_ = t; }\n    std::string getText() const { return text_; }\n};\n\nclass Window {                               // Composition: Window HAS Widgets\nprivate:\n    std::string title_;\n    std::vector<Widget*> widgets_;\npublic:\n    Window(std::string title) : title_(title) {}\n\n    void addWidget(Widget* w) {\n        widgets_.push_back(w);\n    }\n\n    void render() {\n        std::cout << \"\\n+==== \" << title_ << \" ====+\\n\";\n        for (const auto& w : widgets_) {\n            if (w->isVisible()) {\n                w->draw();                  // Polymorphic call!\n            }\n        }\n        std::cout << \"+====================+\\n\";\n    }\n\n    void handleClick(int mx, int my) {\n        for (auto& w : widgets_) {\n            if (mx >= w->x_ && mx <= w->x_ + w->width_ &&\n                my >= w->y_ && my <= w->y_ + w->height_) {\n                w->onClick(mx, my);         // Polymorphic dispatch\n            }\n        }\n    }\n};\n\nint main() {\n    Button btn1(10, 10, 80, 30, \"Submit\");\n    Button btn2(100, 10, 60, 30, \"Cancel\");\n    TextBox tb(10, 50, 200, 25);\n    tb.setText(\"Hello OOP\");\n\n    Window win(\"My App\");\n    win.addWidget(&btn1);\n    win.addWidget(&btn2);\n    win.addWidget(&tb);\n\n    win.render();\n\n    std::cout << \"\\nUser clicks at (15, 15):\\n\";\n    win.handleClick(15, 15);\n\n    std::cout << \"\\nUser clicks at (110, 15):\\n\";\n    win.handleClick(110, 15);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+==== My App ====+\n[ Submit ]  at (10,10)\n[ Cancel ]  at (100,10)\n| Hello OOP | at (10,50)\n+====================+\n\nUser clicks at (15, 15):\nButton 'Submit' pressed!\n\nUser clicks at (110, 15):\nButton 'Cancel' pressed!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OOP principles demonstrated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inheritance"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Button"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TextBox"
        }), " both inherit from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Widget"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphism"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "w->draw()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "w->onClick()"
        }), " dispatch to the correct subclass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation"
        }), ": Each widget hides its internal state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composition"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Window"
        }), " contains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Widget*"
        }), " objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Abstraction"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Widget"
        }), " defines the interface; subclasses implement details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "192-game-engines-unity-unreal-engine",
      children: "1.9.2 Game Engines (Unity, Unreal Engine)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Games are inherently object-oriented: every entity in a game world is an object with state and behaviour."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Game Entity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OOP Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Player"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Player : public Character"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enemy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Enemy : public Character"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weapon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Weapon : public Item"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collision detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "entity->onCollide(other)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism + message passing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (entity : entities) entity->update()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game state"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Player::health_"
            }), " (private + getter)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <memory>\n\nclass GameObject {                          // Base class for ALL game objects\nprotected:\n    std::string name_;\n    int x_, y_;\n    int health_;\n\npublic:\n    GameObject(std::string name, int x, int y, int hp)\n        : name_(name), x_(x), y_(y), health_(hp) {}\n\n    virtual void update() {                 // Called every frame → polymorphic\n        std::cout << name_ << \" at (\" << x_ << \",\" << y_ << \")\\n\";\n    }\n\n    virtual void onCollision(GameObject* other) {\n        std::cout << name_ << \" collided with \" << other->getName() << \"\\n\";\n    }\n\n    void takeDamage(int dmg) {\n        health_ -= dmg;\n        std::cout << name_ << \" takes \" << dmg << \" damage. HP: \" << health_ << \"\\n\";\n        if (health_ <= 0) {\n            std::cout << name_ << \" destroyed!\\n\";\n        }\n    }\n\n    std::string getName() const { return name_; }\n    int getX() const { return x_; }\n    int getY() const { return y_; }\n    int getHealth() const { return health_; }\n    bool isAlive() const { return health_ > 0; }\n\n    virtual ~GameObject() = default;\n};\n\nclass Player : public GameObject {\nprivate:\n    int score_;\npublic:\n    Player(std::string name, int x, int y)\n        : GameObject(name, x, y, 100), score_(0) {}\n\n    void move(int dx, int dy) {\n        x_ += dx; y_ += dy;\n        std::cout << name_ << \" moves to (\" << x_ << \",\" << y_ << \")\\n\";\n    }\n\n    void update() override {\n        std::cout << \"Player \" << name_ << \" HP:\" << health_\n                  << \" Score:\" << score_ << \"\\n\";\n    }\n\n    void addScore(int points) { score_ += points; }\n};\n\nclass Enemy : public GameObject {\nprivate:\n    std::string type_;\npublic:\n    Enemy(std::string name, int x, int y, std::string type, int hp)\n        : GameObject(name, x, y, hp), type_(type) {}\n\n    void update() override {\n        x_ += (rand() % 3) - 1;             // Random patrol\n        y_ += (rand() % 3) - 1;\n        std::cout << type_ << \" \" << name_ << \" patrols to (\"\n                  << x_ << \",\" << y_ << \")\\n\";\n    }\n\n    void onCollision(GameObject* other) override {\n        if (dynamic_cast<Player*>(other)) {\n            std::cout << type_ << \" attacks \" << other->getName() << \"!\\n\";\n            other->takeDamage(10);\n        }\n    }\n};\n\nclass Coin : public GameObject {\npublic:\n    Coin(int x, int y) : GameObject(\"Coin\", x, y, 1) {}\n\n    void onCollision(GameObject* other) override {\n        Player* p = dynamic_cast<Player*>(other);\n        if (p) {\n            p->addScore(100);\n            health_ = 0;                    // Coin collected\n            std::cout << \"Coin collected! +100 points\\n\";\n        }\n    }\n\n    void update() override {\n        // Coins just sparkle → no movement\n        std::cout << \"Coin sparkles at (\" << x_ << \",\" << y_ << \")\\n\";\n    }\n};\n\nclass GameEngine {\nprivate:\n    std::vector<std::unique_ptr<GameObject>> objects_;\n    int frame_ = 0;\n\npublic:\n    void addObject(std::unique_ptr<GameObject> obj) {\n        objects_.push_back(std::move(obj));\n    }\n\n    void update() {\n        std::cout << \"\\n=== Frame \" << frame_++ << \" ===\\n\";\n        for (auto& obj : objects_) {\n            if (obj->isAlive()) {\n                obj->update();              // Polymorphic update\n            }\n        }\n        // Simple collision detection (every pair)\n        for (size_t i = 0; i < objects_.size(); ++i) {\n            for (size_t j = i + 1; j < objects_.size(); ++j) {\n                if (objects_[i]->isAlive() && objects_[j]->isAlive()) {\n                    int dx = abs(objects_[i]->getX() - objects_[j]->getX());\n                    int dy = abs(objects_[i]->getY() - objects_[j]->getY());\n                    if (dx <= 1 && dy <= 1) {\n                        objects_[i]->onCollision(objects_[j].get());\n                        objects_[j]->onCollision(objects_[i].get());\n                    }\n                }\n            }\n        }\n    }\n};\n\nint main() {\n    srand(42);\n    GameEngine engine;\n\n    engine.addObject(std::make_unique<Player>(\"Hero\", 5, 5));\n    engine.addObject(std::make_unique<Enemy>(\"Goblin-1\", 4, 4, \"Goblin\", 30));\n    engine.addObject(std::make_unique<Enemy>(\"Orc-1\", 8, 8, \"Orc\", 60));\n    engine.addObject(std::make_unique<Coin>(5, 6));\n    engine.addObject(std::make_unique<Coin>(7, 7));\n\n    for (int i = 0; i < 5; ++i) {\n        engine.update();\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (representative → varies with rand):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Frame 0 ===\nPlayer Hero HP:100 Score:0\nGoblin Goblin-1 patrols to (4,4)\nOrc Orc-1 patrols to (8,8)\nCoin sparkles at (5,6)\nCoin sparkles at (7,7)\nGoblin-1 collided with Hero\nGoblin attacks Hero!\nHero takes 10 damage. HP: 90\nHero collided with Goblin-1\n...\n\n=== Frame 1 ===\nPlayer Hero HP:90 Score:0\n...\nCoin collected! +100 points\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OOP in game engines → key takeaway:"
      }), " The game loop (", (0,jsx_runtime.jsx)(_components.code, {
        children: "for each object: update()"
      }), ") is the signature OOP pattern → it treats all objects uniformly through a polymorphic interface. Adding a new entity type (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PowerUp"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Boss"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Door"
      }), ") requires zero changes to the game loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "193-operating-system-design",
      children: "1.9.3 Operating System Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operating systems use OOP extensively for abstracting hardware resources."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "OS Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OOP Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device drivers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interface + implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class USBDriver : public Driver"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract base + concrete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Ext4FS : public FileSystem"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process scheduler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic scheduling"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class Scheduler"
            }), " with virtual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "schedule()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MemoryManager"
            }), " hides page tables internally"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nclass FileSystem {                          // Abstract interface for all file systems\npublic:\n    virtual bool mount(const std::string& device) = 0;\n    virtual void unmount() = 0;\n    virtual std::string readFile(const std::string& path) = 0;\n    virtual void writeFile(const std::string& path, const std::string& data) = 0;\n    virtual std::vector<std::string> listDir(const std::string& path) = 0;\n    virtual ~FileSystem() = default;\n};\n\nclass Ext4FS : public FileSystem {\nprivate:\n    std::string device_;\n    bool mounted_ = false;\n    // Internal: inode tables, block groups, journal → all hidden\n\npublic:\n    bool mount(const std::string& device) override {\n        device_ = device;\n        mounted_ = true;\n        std::cout << \"Ext4: Mounted \" << device << \" (journal replayed)\\n\";\n        return true;\n    }\n\n    void unmount() override {\n        std::cout << \"Ext4: Unmounting \" << device_ << \" (journal committed)\\n\";\n        mounted_ = false;\n    }\n\n    std::string readFile(const std::string& path) override {\n        if (!mounted_) return \"ERROR: Not mounted\";\n        std::cout << \"Ext4: Reading \" << path << \" (inode lookup, block read)\\n\";\n        return \"[Data from \" + path + \"]\";\n    }\n\n    void writeFile(const std::string& path, const std::string& data) override {\n        if (!mounted_) return;\n        std::cout << \"Ext4: Writing \" << data.size() << \" bytes to \"\n                  << path << \" (block allocation, journal entry)\\n\";\n    }\n\n    std::vector<std::string> listDir(const std::string& path) override {\n        if (!mounted_) return {};\n        std::cout << \"Ext4: Listing \" << path << \" (directory entry scan)\\n\";\n        return {\"file1.txt\", \"file2.txt\", \"subdir/\"};\n    }\n};\n\nclass NTFS : public FileSystem {\nprivate:\n    std::string device_;\n    bool mounted_ = false;\n    // Internal: MFT, clusters, USN journal → all hidden\n\npublic:\n    bool mount(const std::string& device) override {\n        device_ = device;\n        mounted_ = true;\n        std::cout << \"NTFS: Mounted \" << device_ << \" (MFT parsed)\\n\";\n        return true;\n    }\n\n    void unmount() override {\n        std::cout << \"NTFS: Unmounting \" << device_ << \" ($LogFile flushed)\\n\";\n        mounted_ = false;\n    }\n\n    std::string readFile(const std::string& path) override {\n        if (!mounted_) return \"ERROR: Not mounted\";\n        std::cout << \"NTFS: Reading \" << path << \" (MFT record lookup)\\n\";\n        return \"[Data from \" + path + \"]\";\n    }\n\n    void writeFile(const std::string& path, const std::string& data) override {\n        if (!mounted_) return;\n        std::cout << \"NTFS: Writing \" << data.size() << \" bytes to \"\n                  << path << \" (cluster allocation, $LogFile)\\n\";\n    }\n\n    std::vector<std::string> listDir(const std::string& path) override {\n        if (!mounted_) return {};\n        std::cout << \"NTFS: Listing \" << path << \" (B-tree index scan)\\n\";\n        return {\"boot.ini\", \"pagefile.sys\", \"Users/\"};\n    }\n};\n\nclass VFS {                                 // Virtual File System → the OS layer\nprivate:\n    FileSystem* mountedFS_ = nullptr;\n\npublic:\n    void mount(FileSystem* fs, const std::string& device) {\n        mountedFS_ = fs;\n        mountedFS_->mount(device);\n    }\n\n    void unmount() {\n        if (mountedFS_) mountedFS_->unmount();\n    }\n\n    void readUserFile(const std::string& path) {\n        if (!mountedFS_) {\n            std::cout << \"VFS: No filesystem mounted.\\n\";\n            return;\n        }\n        std::string data = mountedFS_->readFile(path);\n        std::cout << \"VFS: User read -> \" << data << \"\\n\";\n    }\n\n    void writeUserFile(const std::string& path, const std::string& data) {\n        if (!mountedFS_) {\n            std::cout << \"VFS: No filesystem mounted.\\n\";\n            return;\n        }\n        mountedFS_->writeFile(path, data);\n    }\n};\n\nint main() {\n    VFS vfs;\n\n    Ext4FS ext4;\n    NTFS  ntfs;\n\n    std::cout << \"--- Mounting Ext4 ---\\n\";\n    vfs.mount(&ext4, \"/dev/sda1\");\n    vfs.readUserFile(\"/home/user/doc.txt\");\n    vfs.writeUserFile(\"/home/user/doc.txt\", \"Hello OOP!\");\n    vfs.unmount();\n\n    std::cout << \"\\n--- Mounting NTFS ---\\n\";\n    vfs.mount(&ntfs, \"\\\\\\\\.\\\\C:\");\n    vfs.readUserFile(\"\\\\Users\\\\Admin\\\\doc.txt\");\n    vfs.unmount();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--- Mounting Ext4 ---\nExt4: Mounted /dev/sda1 (journal replayed)\nExt4: Reading /home/user/doc.txt (inode lookup, block read)\nVFS: User read -> [Data from /home/user/doc.txt]\nExt4: Writing 8 bytes to /home/user/doc.txt (block allocation, journal entry)\nExt4: Unmounting /dev/sda1 (journal committed)\n\n--- Mounting NTFS ---\nNTFS: Mounted \\\\.\\C: (MFT parsed)\nNTFS: Reading \\Users\\Admin\\doc.txt (MFT record lookup)\nVFS: User read -> [Data from \\Users\\Admin\\doc.txt]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The power of the abstraction:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VFS"
      }), " never knows which filesystem it is using. Same code, completely different internal implementations. Linux's VFS layer works exactly this way → it's why you can ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mount"
      }), " ext4, NTFS, FAT32, or XFS with the same system calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "194-other-real-world-applications-of-oop",
      children: "1.9.4 Other Real-World Applications of OOP"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OOP Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Web Frameworks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, models, views as objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ASP.NET MVC, Spring, Django, Ruby on Rails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Drivers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract connection/query interfaces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["JDBC (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Connection"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Statement"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ResultSet"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UI Component Libraries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Widget hierarchies with polymorphic rendering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qt, wxWidgets, FLTK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compilers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AST nodes as polymorphic objects"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class Expr"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class BinaryExpr"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class NumberExpr"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol abstractions, socket wrappers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class TCPSocket : public Socket"
            }), ", Boost.Asio"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graphics Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shapes, textures, shaders as objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenSceneGraph, OGRE3D"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Financial Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account, trade, order as objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloomberg, FIX protocol handlers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Medical Imaging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image, filter, segmentation as objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ITK, VTK (The Insight Toolkit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Robotics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor, actuator, controller abstractions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROS (Robot Operating System) nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "110-interview-corner",
      children: "1.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Common OOP interview questions with detailed answers and code examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-a-class-and-an-object-explain-with-a-real-world-analogy",
      children: "Q1: What is the difference between a class and an object? Explain with a real-world analogy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "class"
      }), " is a blueprint or template that defines the structure (member variables) and behaviour (member functions) that objects of that type will have. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object"
      }), " is a concrete instance of a class → it has its own memory, its own copy of member variables, and its own identity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A class is like the blueprint for a house. The blueprint defines how many rooms, where the doors are, and the roof shape → but it is not a house. The house built from that blueprint is the object. You can build 100 identical houses from one blueprint, each occupying different land, having different occupants, and existing independently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class House {                               // Blueprint (class)\npublic:\n    int rooms;\n    bool hasGarage;\n    House(int r, bool g) : rooms(r), hasGarage(g) {}\n};\n\nint main() {\n    House h1(3, true);                      // Object 1\n    House h2(4, false);                     // Object 2 → separate instance\n    House h3(2, true);                      // Object 3\n    // One class, three objects\n    return 0;\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time / runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time concept"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime entity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero bytes at runtime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(ClassName)"
            }), " bytes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds actual values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count per program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to N instances"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-four-pillars-of-oop-with-a-single-real-world-scenario",
      children: "Q2: Explain the four pillars of OOP with a single real-world scenario."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "smartphone"
      }), " as the unifying analogy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Abstraction"
        }), ": You interact with the phone through a touchscreen with icons. You don't see the CPU registers, memory buses, or radio firmware. The OS abstracts all that complexity behind a simple interface."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation"
        }), ": The phone's battery is sealed inside the case. You can charge it (public method) but you can't directly touch the lithium-ion cells (private data). The phone ensures you don't short-circuit the battery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inheritance"
        }), ": \"All iPhones have a screen, a battery, and a processor\" (base class). The iPhone 15, 15 Pro, and 15 Pro Max inherit these features but add their own (Pro has telephoto lens, Pro Max has larger battery)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphism"
        }), ": When you plug in a USB-C charger, the phone doesn't care whether it's a 20W Apple charger, a 65W laptop charger, or a 5W bedside charger. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "charge()"
        }), " method works the same way regardless of the actual charger type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class SmartPhone {                          // Abstraction: simplified interface\npublic:\n    virtual void charge(int watts) = 0;\n    virtual void takePhoto() = 0;\n    virtual void installApp(std::string name) = 0;\n};\n\nclass iPhone : public SmartPhone {          // Inheritance\nprivate:\n    int batteryLevel_ = 0;                  // Encapsulation\npublic:\n    void charge(int watts) override {       // Polymorphism\n        batteryLevel_ = std::min(100, batteryLevel_ + watts / 5);\n    }\n    void takePhoto() override { /* ... */ }\n    void installApp(std::string name) override { /* ... */ }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-c-implement-polymorphism-explain-the-virtual-table-mechanism",
      children: "Q3: How does C++ implement polymorphism? Explain the virtual table mechanism."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C++ implements runtime polymorphism through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual functions"
      }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual table (v-table)"
      }), " mechanism."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When a class declares a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtual"
        }), " function, the compiler creates a hidden array called the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v-table"
        }), " for that class."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The v-table contains function pointers → one per virtual function → pointing to the most-derived override."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each object of a class with virtual functions has a hidden pointer (the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v-pointer"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vptr"
        }), ") added as its first member (usually)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When a virtual function is called through a base class pointer or reference, the compiler generates code that:\na. Reads the object's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vptr"
        }), "\nb. Looks up the function address from the v-table at the correct index\nc. Jumps to that address"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void foo() { std::cout << \"Base::foo\\n\"; }\n    virtual void bar() { std::cout << \"Base::bar\\n\"; }\n    void nonVirtual() { std::cout << \"Base::nonVirtual\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    void foo() override { std::cout << \"Derived::foo\\n\"; }\n};\n\n// Memory layout of Derived object:\n// [ vptr ] -> points to Derived vtable\n// [ base members ]\n// [ derived members ]\n//\n// Derived vtable:\n// [0] -> Derived::foo\n// [1] -> Base::bar    (not overridden)\n//\n// Calling:\n// Base* p = new Derived();\n// p->foo();    // vptr → vtable[0] → Derived::foo  (5 CPU cycles)\n// p->bar();    // vptr → vtable[1] → Base::bar     (5 CPU cycles)\n// p->nonVirtual(); // compiled to direct call: Base::nonVirtual (1-2 CPU cycles)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not always virtual?"
      }), " Non-virtual calls are resolved at compile time (static dispatch) → the compiler emits a direct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "call"
      }), " instruction. Virtual calls require two indirections (object → v-table → function) which prevents inlining and adds ~3 extra CPU cycles plus a cache miss potential."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-abstraction-and-encapsulation-many-beginners-confuse-them",
      children: "Q4: What is the difference between abstraction and encapsulation? Many beginners confuse them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstraction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hiding ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "data"
            }), " (implementation details)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hiding ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "complexity"
            }), " (how something works)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mechanism"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Access specifiers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected:"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure virtual functions / interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Who can access this?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What does this do?\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A pill capsule hides its chemical ingredients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The label \"Take 1 daily\" hides the metabolic pathway"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " member variables with public getters"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Abstract class with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual void doSomething() = 0"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Can you have one without the other?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Encapsulation without abstraction: A class with all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), " data but no inheritance hierarchy. It's encapsulated but still exposes full complexity."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Abstraction without encapsulation: An interface is abstract. But if the concrete class exposes all its internal data publicly, it's abstract but not encapsulated."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best practice"
        }), ": Both together → abstract interfaces that hide complexity ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and"
        }), " encapsulated implementations that protect data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// ABSTRACT but NOT encapsulated\nclass BadAccount {\npublic:\n    virtual double getBalance() = 0;\n    double balance;   // PUBLIC! Anyone can set this to anything\n};\n\n// ENCAPSULATED but NOT abstract\nclass GoodAccount {\nprivate:\n    double balance_;\npublic:\n    double getBalance() const { return balance_; }\n    void deposit(double amt) { if (amt > 0) balance_ += amt; }\n    // No virtual functions, no inheritance → concrete but protected\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-is-a-and-has-a-relationships-when-should-you-use-each",
      children: "Q5: What is the difference between \"is-a\" and \"has-a\" relationships? When should you use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "is-a"
            }), " (inheritance)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Dog IS AN Animal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Dog : public Animal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Student"
            }), " is a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Person"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "has-a"
            }), " (composition)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Car HAS AN Engine"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Member variable: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Engine engine_;"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Car"
            }), " has a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SteeringWheel"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision rule:"
      }), " Ask yourself \"Is X a type of Y?\" If yes, use inheritance. If X merely contains or uses Y, use composition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// is-a: Inheritance\nclass Animal { public: virtual void eat() = 0; };\nclass Dog : public Animal {\n    void eat() override { /* chew */ }\n};\n// Dog IS an Animal → correct use of inheritance\n\n// has-a: Composition\nclass Engine {\npublic:\n    void start() { /* ignite fuel */ }\n};\nclass Car {\nprivate:\n    Engine engine_;          // Car HAS an Engine\n    SteeringWheel wheel_;    // Car HAS a SteeringWheel\npublic:\n    void start() { engine_.start(); }\n};\n// Car HAS an Engine → correct use of composition\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why \"prefer composition over inheritance\"?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fragile base class problem"
        }), ": Changes to the base class can break derived classes in unexpected ways."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tight coupling"
        }), ": Inheritance creates the strongest coupling in OOP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation leakage"
        }), ": Derived classes may need to know about base class internals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rigid hierarchies"
        }), ": Deep inheritance trees are hard to refactor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Composition is more flexible"
        }), ": You can swap components at runtime (", (0,jsx_runtime.jsx)(_components.code, {
          children: "car.setEngine(new ElectricEngine())"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Composition gives you runtime flexibility\nclass GasEngine { public: void run() { std::cout << \"Vroom\\n\"; } };\nclass ElectricEngine { public: void run() { std::cout << \"Whir\\n\"; } };\n\nclass Car {\nprivate:\n    GasEngine* engine_;    // Pointer to engine\npublic:\n    Car(GasEngine* e) : engine_(e) {}\n    void drive() { engine_->run(); }\n};\n\nint main() {\n    GasEngine gas;\n    ElectricEngine electric;  // Want to use this? Can't without changing Car.\n    Car myCar(&gas);\n    myCar.drive();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For true flexibility, abstract the engine:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Engine { public: virtual void run() = 0; };\nclass Car {\nprivate:\n    Engine* engine_;\npublic:\n    Car(Engine* e) : engine_(e) {}\n    void drive() { engine_->run(); }\n};\n// Now you can swap ANY engine at runtime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-can-you-have-oop-without-inheritance-explain",
      children: "Q6: Can you have OOP without inheritance? Explain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes. Encapsulation + polymorphism can exist without inheritance through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile-time polymorphism"
      }), " (templates / generics) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "duck typing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In C++, templates provide polymorphism without a common base class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// No inheritance → yet each type behaves polymorphically\ntemplate <typename T>\nvoid process(T& obj) {\n    obj.doWork();    // Any type that has doWork() works\n}\n\nclass A {\npublic:\n    void doWork() { std::cout << \"A working\\n\"; }\n};\n\nclass B {\npublic:\n    void doWork() { std::cout << \"B working\\n\"; }\n};\n\nint main() {\n    A a; B b;\n    process(a);     // Works → A has doWork()\n    process(b);     // Works → B has doWork()\n    // No inheritance anywhere in this code!\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "static polymorphism"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile-time polymorphism"
      }), ". It is more efficient (no v-table, no runtime overhead) but less flexible (types must be known at compile time)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alan Kay, who coined the term \"object-oriented programming,\" considered ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "message passing"
      }), " to be more fundamental than inheritance. In his view, OOP is about encapsulated objects communicating → whether or not they share a type hierarchy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-diamond-problem-in-inheritance-and-how-does-c-solve-it",
      children: "Q7: What is the diamond problem in inheritance, and how does C++ solve it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "diamond problem"
      }), " occurs when a class inherits from two classes that both inherit from the same base class, creating ambiguity:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   Animal\n  /      \\\nMammal   Bird\n  \\      /\n   Bat\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Bat"
      }), " inherits ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Animal"
      }), " data twice (once through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mammal"
      }), ", once through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bird"
      }), "), leading to ambiguity → which ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Animal::age"
      }), " are we referring to?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Animal { public: int age; };\nclass Mammal : public Animal {};\nclass Bird : public Animal {};\nclass Bat : public Mammal, public Bird {};  // Two copies of Animal\n\nint main() {\n    Bat bat;\n    bat.age = 5;        // ERROR: ambiguous → which Animal::age?\n    bat.Mammal::age = 5; // OK → explicitly specify path\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ solution:"
      }), " Virtual inheritance via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "virtual"
      }), " keyword:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Animal { public: int age; };\nclass Mammal : virtual public Animal {};   // Virtual inheritance\nclass Bird   : virtual public Animal {};\nclass Bat    : public Mammal, public Bird {};\n// Now Bat has only ONE shared copy of Animal\n\nint main() {\n    Bat bat;\n    bat.age = 5;        // OK → only one Animal subobject\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trade-off:"
      }), " Virtual inheritance adds runtime overhead (extra pointer indirection) and should only be used when the diamond pattern is genuinely needed. Most OOP designs avoid it through composition or single-inheritance hierarchies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-difference-between-early-binding-and-late-binding",
      children: "Q8: What is the difference between early binding and late binding?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Early Binding (Static Dispatch)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Late Binding (Dynamic Dispatch)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When resolved"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual functions, function overloading, templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (direct call, can be inlined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower (v-table lookup, cannot inline)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less flexible → function determined by static type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More flexible → function determined by dynamic type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical, known types at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensibility, polymorphic behaviour needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Shape {\npublic:\n    void drawEarly()  { std::cout << \"Shape\\n\"; }         // Early binding\n    virtual void drawLate() { std::cout << \"Shape\\n\"; }   // Late binding\n};\n\nclass Circle : public Shape {\npublic:\n    void drawEarly()  { std::cout << \"Circle\\n\"; }\n    void drawLate() override { std::cout << \"Circle\\n\"; }\n};\n\nint main() {\n    Shape* s = new Circle();\n    s->drawEarly();     // \"Shape\"   → early binding uses Shape::drawEarly\n    s->drawLate();      // \"Circle\"  → late binding uses Circle::drawLate\n    delete s;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-difference-between-public-protected-and-private-inheritance-in-c",
      children: "Q9: What is the difference between public, protected, and private inheritance in C++?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inheritance type"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Base ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            }), " members become"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Base ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " members become"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Base ", (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), " members"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            }), " in derived"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " in derived"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " in derived"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " in derived"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), " in derived"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), " in derived"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not accessible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:    int pub;\nprotected: int prot;\nprivate:   int priv;\n};\n\nclass PubDerived : public Base {\n    // pub is public, prot is protected, priv is inaccessible\n};\n\nclass ProtDerived : protected Base {\n    // pub is protected, prot is protected, priv is inaccessible\n    void f() { pub = 1; prot = 1; }  // OK → both accessible here\n};\n\nclass PrivDerived : private Base {\n    // pub is private, prot is private, priv is inaccessible\n};\n\nint main() {\n    PubDerived  pd;  pd.pub = 1;      // OK → pub is public\n    ProtDerived pod; // pod.pub = 1;  // ERROR → pub is now protected\n    PrivDerived prd; // prd.pub = 1;  // ERROR → pub is now private\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " 99% of inheritance in practice is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " inheritance is used for \"implemented-in-terms-of\" (composition alternative). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), " inheritance is rare."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-a-pure-virtual-function-why-would-you-use-one",
      children: "Q10: What is a pure virtual function? Why would you use one?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pure virtual function"
      }), " is a virtual function declared with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "= 0"
      }), ". It has no implementation in the base class and forces all concrete derived classes to provide an implementation. A class containing at least one pure virtual function is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract"
      }), " → you cannot instantiate it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Shape {                           // Abstract class\npublic:\n    virtual double area() const = 0;    // Pure virtual\n    virtual void draw() const = 0;\n};\n\n// Shape s;  // ERROR: cannot instantiate abstract class\n\nclass Circle : public Shape {\n    double r_;\npublic:\n    Circle(double r) : r_(r) {}\n    double area() const override { return 3.14159 * r_ * r_; }\n    void draw() const override { /* ... */ }\n};\n// Circle is concrete → can instantiate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why use pure virtual functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define an interface"
        }), " → specify WHAT but not HOW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Force implementation"
        }), " → derived classes must provide behaviour or remain abstract."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphic base"
        }), " → enables runtime polymorphism through base class pointers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design tool"
        }), " → the abstract class communicates \"this is a contract, not a default.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prevent instantiation"
        }), " → some classes exist purely to be base classes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Shape"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Animal"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-common-oop-mistakes-and-anti-patterns",
      children: "1.11 Common OOP Mistakes and Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-god-object",
      children: "1.11.1 God Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A single class that knows too much or does too much."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Bad: God class → does everything\nclass Application {\npublic:\n    void handleUserInput();\n    void processPayment();\n    void renderGraphics();\n    void sendEmail();\n    void generateReport();\n    void manageDatabase();\n    void authenticateUser();\n    void playSound();\n    void compressVideo();\n    // 50+ more methods...\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Split into focused classes (Single Responsibility Principle)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-deep-inheritance-hierarchy",
      children: "1.11.2 Deep Inheritance Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class A {};\nclass B : public A {};\nclass C : public B {};\nclass D : public C {};\nclass E : public D {};\nclass F : public E {};  // 6 levels deep → WHY?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems:"
      }), " Fragile base class, hard to understand, tight coupling, hard to test."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Max 3-4 levels of inheritance. Prefer composition after that."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1113-ignoring-the-liskov-substitution-principle-lsp",
      children: "1.11.3 Ignoring the Liskov Substitution Principle (LSP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Derived classes must be substitutable for their base classes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// LSP violation: Square is NOT a good substitute for Rectangle\nclass Rectangle {\npublic:\n    virtual void setWidth(int w)  { width_ = w; }\n    virtual void setHeight(int h) { height_ = h; }\n    int area() const { return width_ * height_; }\nprotected:\n    int width_ = 0, height_ = 0;\n};\n\nclass Square : public Rectangle {\npublic:\n    void setWidth(int w) override {\n        width_ = height_ = w;    // Breaks expectations\n    }\n    void setHeight(int h) override {\n        width_ = height_ = h;    // Breaks expectations\n    }\n};\n\nvoid process(Rectangle& r) {\n    r.setWidth(5);\n    r.setHeight(4);\n    std::cout << \"Area = \" << r.area() << \"\\n\";  // Expects 20\n}\n\nint main() {\n    Rectangle r;\n    process(r);     // Area = 20  ✓\n    Square s;\n    process(s);     // Area = 16  ✗ (called with Square, gets 16 not 20!)\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1114-using-inheritance-for-code-reuse-only",
      children: "1.11.4 Using Inheritance for Code Reuse Only"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just because two classes share some code doesn't mean one should inherit from the other."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Wrong: using inheritance just to reuse code\nclass DatabaseManager {\npublic:\n    void connect();\n    void executeQuery();\n    void disconnect();\n};\n\nclass UserService : public DatabaseManager {\n    // Reusing DatabaseManager code... but UserService IS NOT a DatabaseManager\n    // UserService HAS-A database connection\n};\n\n// Correct: composition\nclass UserService {\nprivate:\n    DatabaseManager db_;    // HAS-A relationship\npublic:\n    void saveUser() { db_.connect(); /* ... */ }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-chapter-summary",
      children: "1.12 Chapter Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object-Oriented Programming is a paradigm that organises code around objects→bundles of data and behaviour→rather than around functions and logic. This chapter introduced the foundational concepts:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class vs Object"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint vs instance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            }), " keyword vs variable declaration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP vs Procedural"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP unites data + behaviour; procedural separates them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method calls vs function calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encapsulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data hiding + controlled access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private:"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected:"
            }), " specifiers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"is-a\" relationships enable code reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class D : public B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Polymorphism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One interface, multiple implementations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions + overriding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate interface from implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure virtual classes / interfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message Passing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects collaborate through method calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "obj.method(args)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Benefits"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modularity, reusability, maintainability, scalability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All of the above working together"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-design-guidelines",
      children: "Key Design Guidelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer composition over inheritance"
        }), " → \"has-a\" is more flexible than \"is-a\" in most scenarios."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep inheritance shallow"
        }), " → 3-4 levels maximum; deep hierarchies are brittle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use abstraction at module boundaries"
        }), " → program to interfaces, not implementations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulate aggressively"
        }), " → make member variables private, provide getters only when needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design for polymorphism"
        }), " → write functions that accept base class references, not concrete types."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow the Liskov Substitution Principle"
        }), " → derived classes should be replaceable for their base."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single Responsibility"
        }), " → each class should have exactly one reason to change."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Favour composition for behaviour reuse"
        }), " → strategy pattern over deep inheritance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oop-is-not-a-silver-bullet",
      children: "OOP is Not a Silver Bullet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OOP excels at modelling complex systems with many interacting entities. But for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data-heavy transformation pipelines"
        }), ": functional programming often works better."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small scripts"
        }), ": procedural code is simpler and faster to write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance-critical hot paths"
        }), ": careful procedural code can be faster (no v-table, no indirection)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrent systems"
        }), ": functional purity avoids shared mutable state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The best programmers are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multi-paradigm"
      }), " → they choose the right tool for the job."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-chapter-quiz",
      children: "1.13 Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following best describes a class?\nA) A runtime entity that holds data and behaviour\nB) A blueprint that defines the structure of objects\nC) A function that operates on data structures\nD) A memory segment that stores variables"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** A class is a compile-time blueprint. An object is the runtime instance."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which pillar of OOP is primarily responsible for data hiding?\nA) Inheritance\nB) Polymorphism\nC) Encapsulation\nD) Abstraction"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Encapsulation bundles data with methods and restricts direct access via access specifiers."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "virtual"
          }), " keyword in C++ enable?\nA) Function overloading\nB) Operator overloading\nC) Runtime polymorphism (dynamic dispatch)\nD) Template instantiation"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Virtual functions enable late binding through the v-table mechanism."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which relationship is correctly modelled with inheritance?\nA) A Car HAS AN Engine\nB) A Department HAS Employees\nC) A Circle IS A Shape\nD) A Student HAS A Name"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** \"is-a\" relationships use inheritance; \"has-a\" relationships use composition."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What problem does the Liskov Substitution Principle address?\nA) Memory leaks in derived classes\nB) Derived classes that break base class contracts\nC) Diamond inheritance ambiguity\nD) Compilation order of multiple base classes"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** LSP states derived classes must be substitutable for their base. The Square-Rectangle problem is the classic example."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a benefit of OOP?\nA) Modularity\nB) Reusability\nC) Automatic parallelisation\nD) Maintainability"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** OOP does not automatically parallelise code. Concurrency requires explicit design."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between early binding and late binding?\nA) Early binding is faster; late binding is more flexible\nB) Early binding works with classes; late binding works with structs\nC) Early binding is used in Java; late binding is used in C++\nD) There is no difference"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** Early binding (non-virtual) resolves at compile time; late binding (virtual) resolves at runtime."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A pure virtual function is declared with:\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "virtual void f() {}"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "void f() = 0;"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "virtual void f() = 0;"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "abstract void f();"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** `virtual void f() = 0;` declares a pure virtual function, making the class abstract."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the diamond problem in C++?\nA) Circular dependency between two classes\nB) A class inheriting from two classes with a common ancestor\nC) An object that takes too much memory\nD) Two functions with the same name and parameters"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The diamond problem occurs with multiple inheritance where a class inherits from two classes sharing a common base, creating duplicate base sub-objects."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Which inheritance type changes public members to private in the derived class?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "public"
          }), " inheritance\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "protected"
          }), " inheritance\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "private"
          }), " inheritance\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "virtual"
          }), " inheritance"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** In `private` inheritance, all base members become private in the derived class."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-exercises",
      children: "1.14 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define OOP in your own words. What problem does it solve that procedural programming does not?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List and explain the four pillars of OOP. Give a real-world example for each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a class and an object? Why is this distinction important?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain message passing. How is it different from a regular function call?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the v-table? How does C++ use it to implement polymorphism?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is \"composition over inheritance\" a recommended guideline? Give an example where inheritance is wrong but composition is right."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between abstraction and encapsulation? Can you have one without the other?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do OOP concepts appear in GUI frameworks? Give a concrete example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the Liskov Substitution Principle? Show a violation with code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the benefits and drawbacks of using OOP?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-problems",
      children: "Coding Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a Library System"
          }), ": Create classes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Book"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Member"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Librarian"
          }), ". Use encapsulation (private ISBN, public borrow/return), inheritance (", (0,jsx_runtime.jsx)(_components.code, {
            children: "Member"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PremiumMember"
          }), " with extra borrowing limit), and polymorphism (a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "displayInfo()"
          }), " virtual method)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shape Hierarchy"
          }), ": Build an abstract ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Shape"
          }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "area()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "perimeter()"
          }), ". Derive ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Circle"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Rectangle"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Triangle"
          }), ". Demonstrate polymorphism by storing pointers to all shapes in a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "vector<Shape*>"
          }), " and computing total area."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vehicle System"
          }), ": Model ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Vehicle"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Car"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Bike"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Truck"
          }), ". Add a pure virtual ", (0,jsx_runtime.jsx)(_components.code, {
            children: "move()"
          }), ". Demonstrate message passing by modelling a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Driver"
          }), " object that sends ", (0,jsx_runtime.jsx)(_components.code, {
            children: "drive(Vehicle*)"
          }), " messages."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement Encapsulation Bug"
          }), ": Write a class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BankAccount"
          }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "public"
          }), " balance that gets corrupted. Fix it by making balance ", (0,jsx_runtime.jsx)(_components.code, {
            children: "private"
          }), " and providing validated deposit/withdraw methods. Show the before and after."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Game Entity Prototype"
          }), ": Implement a mini OOP game where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Entity"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Player"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Enemy"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Projectile"
          }), ". Each has ", (0,jsx_runtime.jsx)(_components.code, {
            children: "update()"
          }), " (polymorphic) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "render()"
          }), ". The game loop stores all entities in a single polymorphic container."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Refactor Procedural to OOP"
          }), ": Take the procedural ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Account"
          }), " code from §1.2.1 and refactor it to OOP. Add at least two new account types (SavingsAccount, CheckingAccount) using inheritance. Demonstrate polymorphism in a single loop."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a Messaging System"
          }), ": Model a simplified email system with classes ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Message"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Inbox"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "User"
          }), ". Demonstrate message passing where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "User"
          }), " sends a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Message"
          }), " to another ", (0,jsx_runtime.jsx)(_components.code, {
            children: "User"
          }), ", and the receiving ", (0,jsx_runtime.jsx)(_components.code, {
            children: "User"
          }), "'s ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Inbox"
          }), " stores it. Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SpamFilter"
          }), " as a polymorphic component."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-references-and-further-reading",
      children: "1.15 References and Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stroustrup, B. \"The C++ Programming Language\" (4th Edition). Addison-Wesley, 2013."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gamma, E. et al. \"Design Patterns: Elements of Reusable Object-Oriented Software.\" Addison-Wesley, 1994."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meyer, B. \"Object-Oriented Software Construction\" (2nd Edition). Prentice Hall, 1997."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kay, A. \"The Early History of Smalltalk.\" History of Programming Languages II, ACM, 1996."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dahl, O.-J. & Nygaard, K. \"SIMULA: An ALGOL-Based Simulation Language.\" Communications of the ACM, 1966."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Martin, R. C. \"Clean Architecture: A Craftsman's Guide to Software Structure and Design.\" Prentice Hall, 2017."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C++ Standard → ISO/IEC 14882:2020 (C++20). Sections 11 (Classes), 12 (Derived classes), 13 (Member access control), 14 (Virtual functions)."
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