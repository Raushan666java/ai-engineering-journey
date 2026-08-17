"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[44735],{

/***/ 63431
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_04_inheritance_md_d55_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-04-inheritance-md-d55.json
const site_docs_courses_oop_cpp_04_inheritance_md_d55_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/04-inheritance","title":"Chapter 4: Inheritance","description":"Previous Polymorphism","source":"@site/docs/courses/oop-cpp/04-inheritance.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/04-inheritance","permalink":"/ai-engineering-journey/oop-cpp/04-inheritance","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-inheritance","slug":"/oop-cpp/04-inheritance","title":"Chapter 4: Inheritance","sidebar_label":"Chapter 4: Inheritance","sidebar_position":4},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 3: Constructors and Destructors","permalink":"/ai-engineering-journey/oop-cpp/03-constructors"},"next":{"title":"Chapter 5: Polymorphism","permalink":"/ai-engineering-journey/oop-cpp/05-polymorphism"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/04-inheritance.md


const frontMatter = {
	id: '04-inheritance',
	slug: '/oop-cpp/04-inheritance',
	title: 'Chapter 4: Inheritance',
	sidebar_label: 'Chapter 4: Inheritance',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Inheritance';

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
  "value": "4.1 Introduction to Inheritance",
  "id": "41-introduction-to-inheritance",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway",
  "level": 3
}, {
  "value": "Real-World Analogy: The Animal Kingdom",
  "id": "real-world-analogy-the-animal-kingdom",
  "level": 3
}, {
  "value": "Why Inheritance?",
  "id": "why-inheritance",
  "level": 3
}, {
  "value": "Numbered Steps to Model Inheritance",
  "id": "numbered-steps-to-model-inheritance",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "C++ Code",
  "id": "c-code",
  "level": 3
}, {
  "value": "4.2 Base and Derived Classes → Deep Dive",
  "id": "42-base-and-derived-classes--deep-dive",
  "level": 2
}, {
  "value": "Syntax and Semantics",
  "id": "syntax-and-semantics",
  "level": 3
}, {
  "value": "What Inheritance Actually Provides",
  "id": "what-inheritance-actually-provides",
  "level": 3
}, {
  "value": "Memory Layout of a Derived Object",
  "id": "memory-layout-of-a-derived-object",
  "level": 3
}, {
  "value": "Key Points",
  "id": "key-points",
  "level": 3
}, {
  "value": "4.3 Access Control in Inheritance",
  "id": "43-access-control-in-inheritance",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-1",
  "level": 3
}, {
  "value": "The Three Access Specifiers in Inheritance",
  "id": "the-three-access-specifiers-in-inheritance",
  "level": 3
}, {
  "value": "Complete Access Control Table",
  "id": "complete-access-control-table",
  "level": 3
}, {
  "value": "Comprehensive Demo",
  "id": "comprehensive-demo",
  "level": 3
}, {
  "value": "Access Specifier Comparison Table",
  "id": "access-specifier-comparison-table",
  "level": 3
}, {
  "value": "Runtime Type Identification with Different Inheritances",
  "id": "runtime-type-identification-with-different-inheritances",
  "level": 3
}, {
  "value": "4.4 Types of Inheritance → Complete Coverage",
  "id": "44-types-of-inheritance--complete-coverage",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-2",
  "level": 3
}, {
  "value": "Comprehensive Type Comparison Table",
  "id": "comprehensive-type-comparison-table",
  "level": 3
}, {
  "value": "4.4.1 Single Inheritance",
  "id": "441-single-inheritance",
  "level": 3
}, {
  "value": "4.4.2 Multilevel Inheritance",
  "id": "442-multilevel-inheritance",
  "level": 3
}, {
  "value": "4.4.3 Multiple Inheritance",
  "id": "443-multiple-inheritance",
  "level": 3
}, {
  "value": "4.4.4 Hierarchical Inheritance",
  "id": "444-hierarchical-inheritance",
  "level": 3
}, {
  "value": "4.5 Hybrid Inheritance and the Diamond Problem",
  "id": "45-hybrid-inheritance-and-the-diamond-problem",
  "level": 2
}, {
  "value": "4.5.1 Hybrid Inheritance",
  "id": "451-hybrid-inheritance",
  "level": 3
}, {
  "value": "4.5.2 The Diamond Problem → Without Virtual Inheritance",
  "id": "452-the-diamond-problem--without-virtual-inheritance",
  "level": 3
}, {
  "value": "4.5.3 Virtual Inheritance → The Solution",
  "id": "453-virtual-inheritance--the-solution",
  "level": 3
}, {
  "value": "4.5.4 Memory Layout with Virtual Inheritance",
  "id": "454-memory-layout-with-virtual-inheritance",
  "level": 3
}, {
  "value": "4.5.5 Virtual Base Initialisation Rules",
  "id": "455-virtual-base-initialisation-rules",
  "level": 3
}, {
  "value": "4.5.6 Virtual Inheritance with Non-Default Constructor",
  "id": "456-virtual-inheritance-with-non-default-constructor",
  "level": 3
}, {
  "value": "4.5.7 When Is Virtual Inheritance Needed?",
  "id": "457-when-is-virtual-inheritance-needed",
  "level": 3
}, {
  "value": "4.5.8 Performance Implications of Virtual Inheritance",
  "id": "458-performance-implications-of-virtual-inheritance",
  "level": 3
}, {
  "value": "4.6 Constructor and Destructor Order in Inheritance",
  "id": "46-constructor-and-destructor-order-in-inheritance",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-3",
  "level": 3
}, {
  "value": "4.6.1 Construction Order Rules",
  "id": "461-construction-order-rules",
  "level": 3
}, {
  "value": "4.6.2 Destruction Order Rules",
  "id": "462-destruction-order-rules",
  "level": 3
}, {
  "value": "4.6.3 Complete Demonstration → All Cases",
  "id": "463-complete-demonstration--all-cases",
  "level": 3
}, {
  "value": "4.6.4 Practical Consequences",
  "id": "464-practical-consequences",
  "level": 3
}, {
  "value": "4.6.5 Calling Virtual Functions in Constructor → Demonstration",
  "id": "465-calling-virtual-functions-in-constructor--demonstration",
  "level": 3
}, {
  "value": "4.7 IS-A vs HAS-A Relationship",
  "id": "47-is-a-vs-has-a-relationship",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-4",
  "level": 3
}, {
  "value": "4.7.1 Definitions",
  "id": "471-definitions",
  "level": 3
}, {
  "value": "4.7.2 Complete Comparison Table",
  "id": "472-complete-comparison-table",
  "level": 3
}, {
  "value": "4.7.3 Correct IS-A Example",
  "id": "473-correct-is-a-example",
  "level": 3
}, {
  "value": "4.7.4 Correct HAS-A Example",
  "id": "474-correct-has-a-example",
  "level": 3
}, {
  "value": "4.7.5 When Inheritance is WRONG (IS-A Mistake)",
  "id": "475-when-inheritance-is-wrong-is-a-mistake",
  "level": 3
}, {
  "value": "4.7.6 HAS-A over Private Inheritance",
  "id": "476-has-a-over-private-inheritance",
  "level": 3
}, {
  "value": "4.7.7 IS-A vs HAS-A Code Comparison",
  "id": "477-is-a-vs-has-a-code-comparison",
  "level": 3
}, {
  "value": "4.8 Upcasting and Downcasting",
  "id": "48-upcasting-and-downcasting",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-5",
  "level": 3
}, {
  "value": "4.8.1 Definitions",
  "id": "481-definitions",
  "level": 3
}, {
  "value": "4.8.2 Why Upcasting is Safe",
  "id": "482-why-upcasting-is-safe",
  "level": 3
}, {
  "value": "4.8.3 Why Downcasting is Dangerous",
  "id": "483-why-downcasting-is-dangerous",
  "level": 3
}, {
  "value": "4.8.4 Downcasting with dynamic_cast (Safe)",
  "id": "484-downcasting-with-dynamic_cast-safe",
  "level": 3
}, {
  "value": "4.8.5 Downcasting with static_cast (Unsafe)",
  "id": "485-downcasting-with-static_cast-unsafe",
  "level": 3
}, {
  "value": "4.8.6 Upcasting vs Downcasting → Complete Comparison",
  "id": "486-upcasting-vs-downcasting--complete-comparison",
  "level": 3
}, {
  "value": "4.8.7 Multiple Inheritance and Casting",
  "id": "487-multiple-inheritance-and-casting",
  "level": 3
}, {
  "value": "4.8.8 cross_cast Pattern",
  "id": "488-cross_cast-pattern",
  "level": 3
}, {
  "value": "4.8.9 Dynamic Cast Cost Analysis",
  "id": "489-dynamic-cast-cost-analysis",
  "level": 3
}, {
  "value": "4.9 Interview Corner",
  "id": "49-interview-corner",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-6",
  "level": 3
}, {
  "value": "Q1: What is the diamond problem and how does virtual inheritance solve it?",
  "id": "q1-what-is-the-diamond-problem-and-how-does-virtual-inheritance-solve-it",
  "level": 3
}, {
  "value": "Q2: What is object slicing and how do you prevent it?",
  "id": "q2-what-is-object-slicing-and-how-do-you-prevent-it",
  "level": 3
}, {
  "value": "Q3: Explain virtual inheritance memory layout. How does the compiler implement it?",
  "id": "q3-explain-virtual-inheritance-memory-layout-how-does-the-compiler-implement-it",
  "level": 3
}, {
  "value": "Q4: Can you call a virtual function from a constructor or destructor? What happens?",
  "id": "q4-can-you-call-a-virtual-function-from-a-constructor-or-destructor-what-happens",
  "level": 3
}, {
  "value": "Q5: What is the difference between <code>public</code>, <code>protected</code>, and <code>private</code> inheritance?",
  "id": "q5-what-is-the-difference-between-public-protected-and-private-inheritance",
  "level": 3
}, {
  "value": "Q6: What does the <code>final</code> specifier do in inheritance?",
  "id": "q6-what-does-the-final-specifier-do-in-inheritance",
  "level": 3
}, {
  "value": "Q7: Explain the Liskov Substitution Principle in the context of inheritance.",
  "id": "q7-explain-the-liskov-substitution-principle-in-the-context-of-inheritance",
  "level": 3
}, {
  "value": "Q8: How do you prevent a class from being inherited in C++?",
  "id": "q8-how-do-you-prevent-a-class-from-being-inherited-in-c",
  "level": 3
}, {
  "value": "Q9: What is the difference between early (static) binding and late (dynamic) binding in inheritance?",
  "id": "q9-what-is-the-difference-between-early-static-binding-and-late-dynamic-binding-in-inheritance",
  "level": 3
}, {
  "value": "Q10: What happens if a destructor is not virtual in a base class?",
  "id": "q10-what-happens-if-a-destructor-is-not-virtual-in-a-base-class",
  "level": 3
}, {
  "value": "4.10 Applications in Real Systems",
  "id": "410-applications-in-real-systems",
  "level": 2
}, {
  "value": "One-Sentence Takeaway",
  "id": "one-sentence-takeaway-7",
  "level": 3
}, {
  "value": "4.10.1 Qt Widget Hierarchy",
  "id": "4101-qt-widget-hierarchy",
  "level": 3
}, {
  "value": "4.10.2 C++ iostream Hierarchy",
  "id": "4102-c-iostream-hierarchy",
  "level": 3
}, {
  "value": "4.10.3 Exception Class Hierarchy",
  "id": "4103-exception-class-hierarchy",
  "level": 3
}, {
  "value": "4.10.4 Game Development Entity Hierarchy",
  "id": "4104-game-development-entity-hierarchy",
  "level": 3
}, {
  "value": "4.10.5 Device Driver Abstraction",
  "id": "4105-device-driver-abstraction",
  "level": 3
}, {
  "value": "4.11 Key Takeaways",
  "id": "411-key-takeaways",
  "level": 2
}, {
  "value": "Must-Remember Rules",
  "id": "must-remember-rules",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "Inheritance Design Checklist",
  "id": "inheritance-design-checklist",
  "level": 3
}, {
  "value": "Chapter Summary",
  "id": "chapter-summary",
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
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
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
        id: "chapter-4-inheritance",
        children: "Chapter 4: Inheritance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/03-constructors",
          children: "Constructors"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/05-polymorphism",
          children: "Polymorphism"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model is-a relationships using inheritance with correct access specifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control member visibility through all three inheritance access specifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement all five inheritance types: single, multilevel, multiple, hierarchical, hybrid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognise and resolve the diamond problem using virtual inheritance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand virtual base class memory layout and initialisation rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain construction and destruction order in complex class hierarchies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate IS-A from HAS-A and choose the correct relationship model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform safe upcasting and downcasting with static_cast and dynamic_cast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on slicing, virtual inheritance, and the diamond problem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Base and Derived Classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived class contains a base subobject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model is-a with public inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three specifiers control visibility propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use public for is-a, private for implementation reuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single / Multilevel / Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One base fans out or chains down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer shallow hierarchies; composition over deep chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A class inherits from multiple bases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful but increases complexity; use sparingly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merges shared base into single subobject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves diamond problem; virtual base init by most-derived"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction / Destruction Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base first, then members, then body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destruction is exact reverse of construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS-A vs HAS-A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance vs composition distinction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer composition unless true subtype relationship"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upcasting / Downcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base* = &derived (implicit); reverse needs cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dynamic_cast for polymorphic; static_cast when sure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Base & Derived Classes] --> B[Access Control]\n    B --> C[Inheritance Types]\n    C --> D[Multiple Inheritance]\n    D --> E[Virtual Inheritance / Diamond Problem]\n    E --> F[Construction & Destruction Order]\n    F --> G[IS-A vs HAS-A]\n    G --> H[Upcasting vs Downcasting]\n    H --> I[Interview Corner & Real-World Apps]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-introduction-to-inheritance",
      children: "4.1 Introduction to Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inheritance lets a derived class reuse and extend a base class's interface and implementation, forming an is-a relationship that models real-world hierarchies."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-animal-kingdom",
      children: "Real-World Analogy: The Animal Kingdom"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider the biological classification system:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         Animal\n        /      \\\n    Mammal     Bird\n    /    \\       \\\n  Dog   Cat     Eagle\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Animal"
        }), " (base): has a heartbeat, breathes, eats"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mammal"
        }), " (derived from Animal): has warm blood, gives birth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bird"
        }), " (derived from Animal): has feathers, lays eggs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dog"
        }), " (derived from Mammal): barks, chases cats"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cat"
        }), " (derived from Mammal): meows, purrs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eagle"
        }), " (derived from Bird): flies, hunts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dog is-an Animal"
      }), ". Everything an Animal can do, a Dog can do (plus more). This is the fundamental motivation for inheritance: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "code reuse + subtype polymorphism"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-inheritance",
      children: "Why Inheritance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Reuse"
        }), " → Write common functionality once in the base class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extensibility"
        }), " → Add new derived classes without modifying existing code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphism"
        }), " → Treat derived objects uniformly through base pointers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hierarchical Organization"
        }), " → Model real-world taxonomies naturally"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-to-model-inheritance",
      children: "Numbered Steps to Model Inheritance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the common base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All animals breathe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract shared members into base class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Animal { breathe(); }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify specialisations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dog barks, Cat meows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create derived classes using ", (0,jsx_runtime.jsx)(_components.code, {
              children: ": public Base"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Dog : public Animal {}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add specialised members to derived classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Dog::bark()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify is-a relationship holds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dog* can be assigned to Animal*"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS Animal\n    METHOD breathe()\n        PRINT \"Breathing...\"\n    END METHOD\nEND CLASS\n\nCLASS Dog INHERITS Animal\n    METHOD bark()\n        PRINT \"Woof!\"\n    END METHOD\nEND CLASS\n\nMAIN\n    Dog myDog\n    myDog.breathe()    // inherited from Animal\n    myDog.bark()       // defined in Dog\nEND MAIN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code",
      children: "C++ Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void breathe() {\n        cout << \"Breathing...\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Woof! Woof!\" << endl;\n    }\n};\n\nint main() {\n    Dog myDog;\n    myDog.breathe();   // Output: Breathing...\n    myDog.bark();      // Output: Woof! Woof!\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Breathing...\nWoof! Woof!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-base-and-derived-classes--deep-dive",
      children: "4.2 Base and Derived Classes → Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-and-semantics",
      children: "Syntax and Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\n    // base members\n};\n\nclass Derived : access-specifier Base {\n    // derived members\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "access-specifier"
      }), " controls how base class members are seen through the derived class. It is one of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-inheritance-actually-provides",
      children: "What Inheritance Actually Provides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), " inherits from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All data members"
        }), " of Base are present in every Derived object (subject to access control)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All member functions"
        }), " of Base are available on Derived objects (subject to access control)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A Base subobject"
        }), " exists inside every Derived object"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The derived pointer"
        }), " is implicitly convertible to a base pointer (upcasting)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-layout-of-a-derived-object",
      children: "Memory Layout of a Derived Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    int baseData;\n    Base() : baseData(100) {}\n};\n\nclass Derived : public Base {\npublic:\n    int derivedData;\n    Derived() : derivedData(200) {}\n};\n\nint main() {\n    Derived d;\n    cout << \"Size of Base:    \" << sizeof(Base) << \" bytes\" << endl;\n    cout << \"Size of Derived: \" << sizeof(Derived) << \" bytes\" << endl;\n    cout << \"Address of d:        \" << &d << endl;\n    cout << \"Address of d.baseData: \" << &d.baseData << endl;\n    cout << \"Address of d.derivedData: \" << &d.derivedData << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical, implementation-dependent):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Size of Base:    4 bytes\nSize of Derived: 8 bytes\nAddress of d:        0x7ffd1234\nAddress of d.baseData: 0x7ffd1234\nAddress of d.derivedData: 0x7ffd1238\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Base subobject sits at the beginning of the Derived object, followed by Derived's own members."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory Layout:\n+-------------------+  <-- &d, &d.baseData\n| Base subobject    |\n|   baseData = 100  |\n+-------------------+\n| Derived members   |\n|   derivedData=200 |\n+-------------------+  <-- &d + sizeof(Derived)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-points",
      children: "Key Points"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base subobject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every derived object contains a complete base object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived constructor calls base constructor before its own body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived can access public/protected but NOT private base members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived >= Base in size (always at least as large)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived* to Base* is automatic (upcast)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-access-control-in-inheritance",
      children: "4.3 Access Control in Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-1",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The inheritance access specifier determines the minimum access level of inherited members as seen through the derived class, controlling visibility propagation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-three-access-specifiers-in-inheritance",
      children: "The Three Access Specifiers in Inheritance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inheritance Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base's access levels are preserved in derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Models is-a relationship (most common)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base's public members become protected in derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare; implementation sharing within sub-hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base's public and protected become private in derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implemented-in-terms-of (prefer composition)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-access-control-table",
      children: "Complete Access Control Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This table shows how base class members (with their original access level) appear inside the derived class ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "and to outside code"
      }), " through the derived class:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Base Member Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inheritance Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access in Derived"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access Outside (via Derived)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Not accessible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-demo",
      children: "Comprehensive Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    int pub = 1;\nprotected:\n    int prot = 2;\nprivate:\n    int priv = 3;    // never accessible to derived classes\n};\n\nclass PubDerived : public Base {\npublic:\n    void show() {\n        cout << \"Public derived: pub=\" << pub     // OK: public\n             << \", prot=\" << prot                  // OK: protected\n             << endl;                              // priv: ERROR\n    }\n};\n\nclass ProtDerived : protected Base {\npublic:\n    void show() {\n        cout << \"Protected derived: pub=\" << pub   // became protected\n             << \", prot=\" << prot                  // still protected\n             << endl;\n    }\n};\n\nclass PrivDerived : private Base {\npublic:\n    void show() {\n        cout << \"Private derived: pub=\" << pub     // became private\n             << \", prot=\" << prot                  // became private\n             << endl;\n    }\n};\n\nint main() {\n    PubDerived pubd;\n    pubd.show();\n    cout << \"Outside: pubd.pub = \" << pubd.pub << endl;   // OK: public\n    \n    ProtDerived protd;\n    protd.show();\n    // cout << protd.pub;   // ERROR: pub is now protected\n    \n    PrivDerived privd;\n    privd.show();\n    // cout << privd.pub;   // ERROR: pub is now private\n    \n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Public derived: pub=1, prot=2\nOutside: pubd.pub = 1\nProtected derived: pub=1, prot=2\nPrivate derived: pub=1, prot=2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "access-specifier-comparison-table",
      children: "Access Specifier Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            }), " inheritance"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " inheritance"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), " inheritance"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Models is-a?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base pointers work?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+ of use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can further derive?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Protected access preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Further derived cannot access base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alternative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition (almost always better)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "runtime-type-identification-with-different-inheritances",
      children: "Runtime Type Identification with Different Inheritances"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { public: virtual ~Base() {} };\nclass Pub : public Base {};\nclass Priv : private Base {};  // Note: private inheritance\n\nint main() {\n    Pub p;\n    Base* bp = &p;             // OK: public inheritance\n    cout << \"Public: upcast works\" << endl;\n    \n    Priv pr;\n    // Base* bp2 = &pr;        // ERROR: private inheritance\n    cout << \"Private: upcast does NOT work\" << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Public: upcast works\nPrivate: upcast does NOT work\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "44-types-of-inheritance--complete-coverage",
      children: "4.4 Types of Inheritance → Complete Coverage"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-2",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++ supports five inheritance types: single, multilevel, multiple, hierarchical, and hybrid → each suited to different relationship structures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-type-comparison-table",
      children: "Comprehensive Type Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diagram"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base-to-Derived"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A -> B"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple specialisation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multilevel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A -> B -> C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1 chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layered abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A, B -> C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining independent traits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A -> B, C, D"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One base, many specialisations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple + Hierarchical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N:M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex real-world modelling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "441-single-inheritance",
      children: "4.4.1 Single Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " One derived class inherits from exactly one base class."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A Car is a Vehicle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    Vehicle\n       |\n       v\n      Car\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the base class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the derived class"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: ": public Base"
        }), " syntax"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add derived-specific members"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int year;\npublic:\n    Vehicle(string b, int y) : brand(b), year(y) {\n        cout << \"Vehicle constructor called\" << endl;\n    }\n    void display() {\n        cout << brand << \" (\" << year << \")\" << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprivate:\n    int doors;\npublic:\n    Car(string b, int y, int d) : Vehicle(b, y), doors(d) {\n        cout << \"Car constructor called\" << endl;\n    }\n    void honk() {\n        cout << \"Beep beep!\" << endl;\n    }\n    void showDetails() {\n        display();\n        cout << \"Doors: \" << doors << endl;\n    }\n};\n\nint main() {\n    Car myCar(\"Toyota\", 2022, 4);\n    myCar.showDetails();\n    myCar.honk();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Vehicle constructor called\nCar constructor called\nToyota (2022)\nDoors: 4\nBeep beep!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Car myCar(\"Toyota\", 2022, 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter Car constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call Vehicle(\"Toyota\", 2022)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Vehicle constructor called"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialise doors=4"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute Car constructor body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Car constructor called"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "myCar.showDetails()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Toyota (2022)"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Doors: 4"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "myCar.honk()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Beep beep!"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(1) for construction (no additional overhead over single class)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " Base size + derived members (no extra pointers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why:"
        }), " Single inheritance is the simplest form → the derived object layout is contiguous (base subobject followed by derived members)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "442-multilevel-inheritance",
      children: "4.4.2 Multilevel Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A chain of inheritance where a class derives from a derived class, forming A → B → C."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A Golden Retriever is a Dog is a Mammal is an Animal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   Animal\n     |\n   Mammal\n     |\n     Dog\n     |\n GoldenRetriever\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create base class (Animal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create intermediate derived class (Mammal : public Animal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create further derived class (Dog : public Mammal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat for additional levels"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string species;\npublic:\n    Animal(string s) : species(s) {\n        cout << \"Animal constructed: \" << species << endl;\n    }\n    void breathe() {\n        cout << species << \" breathes\" << endl;\n    }\n};\n\nclass Mammal : public Animal {\nprotected:\n    int bodyTemp;\npublic:\n    Mammal(string s, int t) : Animal(s), bodyTemp(t) {\n        cout << \"Mammal constructed: \" << species << endl;\n    }\n    void regulateTemp() {\n        cout << species << \" regulates body temp to \" << bodyTemp << \"C\" << endl;\n    }\n};\n\nclass Dog : public Mammal {\nprivate:\n    string breed;\npublic:\n    Dog(string b, int t, string br) : Mammal(b, t), breed(br) {\n        cout << \"Dog constructed: \" << breed << \" \" << species << endl;\n    }\n    void bark() {\n        cout << breed << \" says Woof!\" << endl;\n    }\n};\n\nint main() {\n    Dog dog(\"Canine\", 38, \"Golden Retriever\");\n    cout << \"---\" << endl;\n    dog.breathe();\n    dog.regulateTemp();\n    dog.bark();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Animal constructed: Canine\nMammal constructed: Canine\nDog constructed: Golden Retriever Canine\n---\nCanine breathes\nCanine regulates body temp to 38C\nGolden Retriever says Woof!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Constructor Call Chain Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constructor Called"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Dog(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enters Dog constructor, calls Mammal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Mammal(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enters Mammal constructor, calls Animal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Animal(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialises species = \"Canine\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Animal body executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"Animal constructed: Canine\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to Mammal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialises bodyTemp = 38"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mammal body executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"Mammal constructed: Canine\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to Dog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialises breed = \"Golden Retriever\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dog body executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"Dog constructed: Golden Retriever Canine\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Layout (A→B→C):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+------------------+\n| Animal subobject |\n|   species        |\n+------------------+\n| Mammal subobject |\n|   bodyTemp       |\n+------------------+\n| Dog members      |\n|   breed          |\n+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth:"
        }), " Each level adds one constructor call (O(depth) time for construction chain)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " Sum of all base members + own members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recommendation:"
        }), " Keep depth ≤ 3. Deeper chains increase coupling and make maintenance harder. Prefer composition for deep abstraction layers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "443-multiple-inheritance",
      children: "4.4.3 Multiple Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A derived class inherits from two or more base classes simultaneously."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A Smartphone is both a Camera AND a Phone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   Camera     Phone\n       \\       /\n        \\     /\n       Smartphone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create independent base classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all bases in the derived class declaration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each base constructor is called in declaration order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Camera {\nprotected:\n    int megapixels;\npublic:\n    Camera(int mp) : megapixels(mp) {\n        cout << \"Camera constructed: \" << mp << \"MP\" << endl;\n    }\n    void takePhoto() {\n        cout << \"Taking photo with \" << megapixels << \"MP camera\" << endl;\n    }\n};\n\nclass Phone {\nprotected:\n    string number;\npublic:\n    Phone(string n) : number(n) {\n        cout << \"Phone constructed: \" << n << endl;\n    }\n    void call(string contact) {\n        cout << \"Calling \" << contact << \" from \" << number << endl;\n    }\n};\n\nclass Smartphone : public Camera, public Phone {\nprivate:\n    string os;\npublic:\n    Smartphone(int mp, string n, string o)\n        : Camera(mp), Phone(n), os(o) {\n        cout << \"Smartphone constructed: \" << os << endl;\n    }\n    void browse(string site) {\n        cout << \"Browsing \" << site << \" on \" << os << endl;\n    }\n};\n\nint main() {\n    Smartphone iphone(48, \"555-0100\", \"iOS\");\n    cout << \"---\" << endl;\n    iphone.takePhoto();\n    iphone.call(\"Mom\");\n    iphone.browse(\"google.com\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera constructed: 48MP\nPhone constructed: 555-0100\nSmartphone constructed: iOS\n---\nTaking photo with 48MP camera\nCalling Mom from 555-0100\nBrowsing google.com on iOS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Layout:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "+--------------------+\n| Camera subobject   |\n|   megapixels       |\n+--------------------+\n| Phone subobject    |\n|   number           |\n+--------------------+\n| Smartphone members |\n|   os               |\n+--------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Base Construction Order:"
      }), " Constructors run in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "declaration order"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera"
      }), " then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Phone"
      }), "), NOT the initialiser list order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Declaration order: Camera, Phone\nclass Smartphone : public Camera, public Phone { ... };\n\n// Initialiser list order passed to constructor:\nSmartphone(int mp, string n, string o)\n    : Phone(n), Camera(mp), os(o) { }  // Camera still called FIRST\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(N) where N = number of bases (each constructor called once)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " Sum of all base sizes + derived members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why risky:"
        }), " Ambiguity when bases have same-named members; diamond problem requires virtual inheritance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potential Ambiguity:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class A { public: void f() {} };\nclass B { public: void f() {} };\nclass C : public A, public B {};\n\nint main() {\n    C c;\n    // c.f();    // ERROR: ambiguous\n    c.A::f();    // OK: explicit scope\n    c.B::f();    // OK: explicit scope\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "444-hierarchical-inheritance",
      children: "4.4.4 Hierarchical Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " One base class serves as parent to multiple derived classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Shape is the base for Circle, Rectangle, Triangle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "            Shape\n         /   |   \\\n        /    |    \\\n    Circle Rect  Triangle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create one base class with common functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create multiple derived classes, each inheriting from the same base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each derived class adds its own specialisation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string color;\npublic:\n    Shape(string c) : color(c) {\n        cout << \"Shape constructed: \" << color << endl;\n    }\n    virtual double area() const = 0;    // pure virtual\n    virtual void draw() const {\n        cout << \"Drawing a \" << color << \" shape\" << endl;\n    }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    double area() const override {\n        return M_PI * radius * radius;\n    }\n    void draw() const override {\n        cout << \"Drawing a \" << color << \" circle (r=\" << radius << \")\" << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\npublic:\n    Rectangle(string c, double w, double h) : Shape(c), width(w), height(h) {}\n    double area() const override {\n        return width * height;\n    }\n    void draw() const override {\n        cout << \"Drawing a \" << color << \" rectangle (\" << width << \"x\" << height << \")\" << endl;\n    }\n};\n\nclass Triangle : public Shape {\nprivate:\n    double base, height;\npublic:\n    Triangle(string c, double b, double h) : Shape(c), base(b), height(h) {}\n    double area() const override {\n        return 0.5 * base * height;\n    }\n    void draw() const override {\n        cout << \"Drawing a \" << color << \" triangle (base=\" << base << \")\" << endl;\n    }\n};\n\nint main() {\n    Circle c(\"Red\", 5.0);\n    Rectangle r(\"Blue\", 4.0, 6.0);\n    Triangle t(\"Green\", 3.0, 7.0);\n    \n    cout << \"---\" << endl;\n    c.draw();   cout << \"Area: \" << c.area() << endl;\n    r.draw();   cout << \"Area: \" << r.area() << endl;\n    t.draw();   cout << \"Area: \" << t.area() << endl;\n    \n    // Polymorphic behaviour via base pointer\n    Shape* shapes[] = { &c, &r, &t };\n    cout << \"\\nPolymorphic iteration:\" << endl;\n    for (Shape* s : shapes) {\n        s->draw();\n        cout << \"  Area: \" << s->area() << endl;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Shape constructed: Red\nShape constructed: Blue\nShape constructed: Green\n---\nDrawing a Red circle (r=5)\nArea: 78.5398\nDrawing a Blue rectangle (4x6)\nArea: 24\nDrawing a Green triangle (base=3)\nArea: 10.5\n\nPolymorphic iteration:\nDrawing a Red circle (r=5)\n  Area: 78.5398\nDrawing a Blue rectangle (4x6)\n  Area: 24\nDrawing a Green triangle (base=3)\n  Area: 10.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Layout (each derived independently):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Circle:               Rectangle:            Triangle:\n+---------------+     +---------------+     +---------------+\n| Shape subobj  |     | Shape subobj  |     | Shape subobj  |\n|   color       |     |   color       |     |   color       |\n+---------------+     +---------------+     +---------------+\n| Circle members |     | Rect members  |     | Tri members   |\n|   radius      |     |   width       |     |   base        |\n+---------------+     |   height      |     |   height      |\n                       +---------------+     +---------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " Each derived constructed independently (O(1) per object)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " Each object has its own copy of base members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why useful:"
        }), " Eliminates code duplication → shared functionality in Shape, specialised in each derived class"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-hybrid-inheritance-and-the-diamond-problem",
      children: "4.5 Hybrid Inheritance and the Diamond Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "451-hybrid-inheritance",
      children: "4.5.1 Hybrid Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " A combination of two or more inheritance types. The classic example combines multiple and hierarchical inheritance, creating a diamond shape."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A FlyingFish is a Fish AND is a Bird-like creature that can fly. But both Fish and Animal share a common ancestor: LivingBeing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "         LivingBeing\n         /         \\\n        /           \\\n      Fish         Bird\n        \\           /\n         \\         /\n         FlyingFish\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "452-the-diamond-problem--without-virtual-inheritance",
      children: "4.5.2 The Diamond Problem → Without Virtual Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Problem:"
      }), " When a class inherits from two classes that share a common ancestor, two copies of the ancestor's members exist → causing ambiguity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass A {\npublic:\n    int value;\n    A() : value(0) {\n        cout << \"A constructed\" << endl;\n    }\n};\n\nclass B : public A {\npublic:\n    B() {\n        cout << \"B constructed\" << endl;\n    }\n};\n\nclass C : public A {\npublic:\n    C() {\n        cout << \"C constructed\" << endl;\n    }\n};\n\nclass D : public B, public C {\npublic:\n    D() {\n        cout << \"D constructed\" << endl;\n    }\n};\n\nint main() {\n    D d;\n    // cout << d.value;     // ERROR: ambiguous → two copies of A::value\n    cout << \"d.B::value = \" << d.B::value << endl;   // OK, explicit scope\n    cout << \"d.C::value = \" << d.C::value << endl;   // OK, explicit scope\n    cout << \"Size of D: \" << sizeof(D) << \" bytes\" << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A constructed\nB constructed\nA constructed\nC constructed\nD constructed\nd.B::value = 0\nd.C::value = 0\nSize of D: 8 bytes    // two copies of A::value (4 + 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " \"A constructed\" appears ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "twice"
      }), " → D contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two separate A subobjects"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Layout without Virtual Inheritance:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Object D:\n+------------------+\n| B subobject      |\n|   +------------+ |\n|   | A (1st)    | |   <-- d.B::value\n|   |   value    | |\n|   +------------+ |\n+------------------+\n| C subobject      |\n|   +------------+ |\n|   | A (2nd)    | |   <-- d.C::value\n|   |   value    | |\n|   +------------+ |\n+------------------+\n| D members        |\n+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The two A subobjects are at different offsets, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d.value"
      }), " is ambiguous because the compiler cannot tell which ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " you mean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "453-virtual-inheritance--the-solution",
      children: "4.5.3 Virtual Inheritance → The Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual inheritance"
      }), " uses a pointer (vbase pointer) to share a single instance of the common base class among all classes in the hierarchy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass A {\npublic:\n    int value;\n    A() : value(0) {\n        cout << \"A constructed\" << endl;\n    }\n};\n\nclass B : virtual public A {\npublic:\n    B() {\n        cout << \"B constructed\" << endl;\n    }\n};\n\nclass C : virtual public A {\npublic:\n    C() {\n        cout << \"C constructed\" << endl;\n    }\n};\n\nclass D : public B, public C {\npublic:\n    D() {\n        cout << \"D constructed\" << endl;\n    }\n};\n\nint main() {\n    D d;\n    d.value = 42;             // OK: only one copy of A::value\n    cout << \"d.value = \" << d.value << endl;\n    cout << \"d.B::value = \" << d.B::value << endl;\n    cout << \"d.C::value = \" << d.C::value << endl;\n    cout << \"Size of D: \" << sizeof(D) << \" bytes\" << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A constructed\nB constructed\nC constructed\nD constructed\nd.value = 42\nd.B::value = 42\nd.C::value = 42\nSize of D: 16+ bytes    // varies by compiler; includes vbase pointers\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " \"A constructed\" appears only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "once"
      }), ". B and C now share the same A subobject."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "454-memory-layout-with-virtual-inheritance",
      children: "4.5.4 Memory Layout with Virtual Inheritance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When virtual inheritance is used, the compiler inserts a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual base pointer (vbptr)"
      }), " in each class that virtually inherits. This pointer points to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual base table (vbtable)"
      }), " that contains the offset to the shared base subobject."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Object D (with virtual inheritance):\n+------------------+\n| B vbase ptr      |  -->  vbtable for B: offset to A = 16 bytes\n+------------------+\n| B members        |\n+------------------+\n| C vbase ptr      |  -->  vbtable for C: offset to A = 8 bytes\n+------------------+\n| C members        |\n+------------------+\n| D members        |\n+------------------+\n| A subobject      |  <-- shared single copy\n|   value          |\n+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The A subobject is at the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "end"
      }), " of D's layout (implementation varies by compiler; GCC puts it at the end, MSVC at negative offsets). Both B and C access A through their vbptr + offset, ensuring they see the same instance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "455-virtual-base-initialisation-rules",
      children: "4.5.5 Virtual Base Initialisation Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The most-derived class is responsible for initialising all virtual bases"
      }), ", regardless of where they appear in the hierarchy. Intermediate classes' constructor calls to the virtual base are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ignored"
      }), " when they are part of a more-derived object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass A {\npublic:\n    int value;\n    A(int v) : value(v) {\n        cout << \"A(\" << value << \") constructed\" << endl;\n    }\n};\n\nclass B : virtual public A {\npublic:\n    B() : A(10) {     // will be ignored when B is part of D\n        cout << \"B constructed\" << endl;\n    }\n};\n\nclass C : virtual public A {\npublic:\n    C() : A(20) {     // will be ignored when C is part of D\n        cout << \"C constructed\" << endl;\n    }\n};\n\nclass D : public B, public C {\npublic:\n    D() : A(99), B(), C() {   // D initialises A directly\n        cout << \"D constructed\" << endl;\n    }\n};\n\nint main() {\n    D d;\n    cout << \"d.value = \" << d.value << endl;   // 99, not 10 or 20\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A(99) constructed\nB constructed\nC constructed\nD constructed\nd.value = 99\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A's initialiser"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual A init?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "D()"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "A(99)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D's init list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (most-derived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value = 99"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "B()"
            }), " attempts ", (0,jsx_runtime.jsx)(_components.code, {
              children: "A(10)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B's init list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No (ignored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skipped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "C()"
            }), " attempts ", (0,jsx_runtime.jsx)(_components.code, {
              children: "A(20)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C's init list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No (ignored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skipped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "B()"
            }), " body"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"B constructed\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "C()"
            }), " body"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"C constructed\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "D()"
            }), " body"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints \"D constructed\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "456-virtual-inheritance-with-non-default-constructor",
      children: "4.5.6 Virtual Inheritance with Non-Default Constructor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If A does NOT have a default constructor, the most-derived class ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " explicitly initialise A:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass A {\npublic:\n    int id;\n    A(int i) : id(i) {}    // no default constructor\n};\n\nclass B : virtual public A {\npublic:\n    B() : A(0) {}          // ignored when part of D, but needed for standalone B\n};\n\nclass C : virtual public A {\npublic:\n    C() : A(0) {}          // ignored when part of D, needed for standalone C\n};\n\nclass D : public B, public C {\npublic:\n    D() : A(999), B(), C() {}   // MUST initialise A → most-derived\n};\n\nint main() {\n    D d;\n    cout << \"d.id = \" << d.id << endl;   // 999\n    B b;\n    cout << \"b.id = \" << b.id << endl;   // 0 (B standalone, B initialises A)\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "d.id = 999\nb.id = 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "457-when-is-virtual-inheritance-needed",
      children: "4.5.7 When Is Virtual Inheritance Needed?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Virtual Inheritance Needed?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two bases with unrelated members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera + Phone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond shape, no common members used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared base has no data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond shape, common data members used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both bases use ancestor's data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond shape, virtual functions from ancestor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override resolution needs single vtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond shape, dynamic_cast to ancestor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast requires unique base subobject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mixin classes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Printable"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Serializable"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard pattern for mixins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "458-performance-implications-of-virtual-inheritance",
      children: "4.5.8 Performance Implications of Virtual Inheritance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Without Virtual"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Virtual"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of all base sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum + vbase pointers (8 bytes per virtual base)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect through vbptr (extra indirection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual base initialised first (extra check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May use thunk function for adjustment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache friendliness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (contiguous)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (extra indirection)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "46-constructor-and-destructor-order-in-inheritance",
      children: "4.6 Constructor and Destructor Order in Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-3",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construction proceeds from base to derived (virtual bases first, then regular bases, then members, then derived body); destruction is the exact reverse."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "461-construction-order-rules",
      children: "4.6.1 Construction Order Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a derived class object, constructors execute in this precise order:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual base classes"
        }), " → in depth-first, left-to-right order (most-derived initialises)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-virtual base classes"
        }), " → in declaration order (left to right)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Member objects"
        }), " → in declaration order (within the class)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived class constructor body"
        }), " → executes last"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "462-destruction-order-rules",
      children: "4.6.2 Destruction Order Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Destruction is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exact reverse"
      }), " of construction:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived class destructor body"
        }), " → executes first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Member objects"
        }), " → destroyed in reverse declaration order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-virtual base classes"
        }), " → destroyed in reverse declaration order"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual base classes"
        }), " → destroyed last"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "463-complete-demonstration--all-cases",
      children: "4.6.3 Complete Demonstration → All Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nstruct Member {\n    string name;\n    Member(string n) : name(n) {\n        cout << \"  Member \" << name << \" constructed\" << endl;\n    }\n    ~Member() {\n        cout << \"  Member \" << name << \" destroyed\" << endl;\n    }\n};\n\nstruct VB {\n    string name;\n    VB(string n) : name(n) {\n        cout << \"VB \" << name << \" constructed\" << endl;\n    }\n    ~VB() {\n        cout << \"VB \" << name << \" destroyed\" << endl;\n    }\n};\n\nstruct Base1 {\n    Base1() { cout << \"Base1 constructed\" << endl; }\n    ~Base1() { cout << \"Base1 destroyed\" << endl; }\n};\n\nstruct Base2 {\n    Base2() { cout << \"Base2 constructed\" << endl; }\n    ~Base2() { cout << \"Base2 destroyed\" << endl; }\n};\n\nstruct Derived : virtual public VB, public Base1, public Base2 {\n    Member m1, m2;\n    Derived() : VB(\"VirtualBase\"), Base1(), Base2(), m1(\"one\"), m2(\"two\") {\n        cout << \"Derived body constructed\" << endl;\n    }\n    ~Derived() {\n        cout << \"Derived body destroyed\" << endl;\n    }\n};\n\nint main() {\n    cout << \"Creating Derived object:\" << endl;\n    Derived d;\n    cout << \"\\nDestroying Derived object:\" << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Creating Derived object:\nVB VirtualBase constructed\nBase1 constructed\nBase2 constructed\n  Member one constructed\n  Member two constructed\nDerived body constructed\n\nDestroying Derived object:\nDerived body destroyed\n  Member two destroyed\n  Member one destroyed\nBase2 destroyed\nBase1 destroyed\nVB VirtualBase destroyed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table → Construction:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Runs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VB(\"VirtualBase\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "VB VirtualBase constructed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual base #1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base1()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base1 constructed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual base #2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base2()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base2 constructed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member #1 (in order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member(\"one\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Member one constructed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member #2 (in order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member(\"two\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Member two constructed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived::Derived()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Derived body constructed"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table → Destruction:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Runs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~Derived()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Derived body destroyed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member #2 (reverse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~Member(\"two\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Member two destroyed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member #1 (reverse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~Member(\"one\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Member one destroyed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual base #2 (reverse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~Base2()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base2 destroyed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual base #1 (reverse)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~Base1()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base1 destroyed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual base (last)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~VB()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "VB VirtualBase destroyed"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "464-practical-consequences",
      children: "4.6.4 Practical Consequences"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calling virtual function in constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override not active yet (base executes before derived is built)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't call virtual functions in constructors/destructors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throwing in constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object not fully constructed; destructor NOT called for this class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use RAII wrappers for cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member depends on base data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base not initialised until base constructor runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order is guaranteed: base before members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception in destructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack unwinding may call terminate()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never let exceptions escape destructors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "465-calling-virtual-functions-in-constructor--demonstration",
      children: "4.6.5 Calling Virtual Functions in Constructor → Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { print(); }    // calls Base::print, NOT Derived::print\n    virtual void print() { cout << \"Base::print\" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { print(); } // calls Derived::print\n    void print() override { cout << \"Derived::print\" << endl; }\n};\n\nint main() {\n    Derived d;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base::print\nDerived::print\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " During Base constructor execution, the Derived object doesn't exist yet → the vtable points to Base's virtual functions. The override is not active until the Derived component is being constructed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-is-a-vs-has-a-relationship",
      children: "4.7 IS-A vs HAS-A Relationship"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-4",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IS-A models inheritance (subtype polymorphism); HAS-A models composition (containment). Prefer HAS-A unless a true subtype relationship exists."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "471-definitions",
      children: "4.7.1 Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IS-A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A is a type of B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dog IS-A Animal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HAS-A"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A contains/uses B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition or aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Car HAS-A Engine"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "472-complete-comparison-table",
      children: "4.7.2 Complete Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IS-A (Inheritance)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HAS-A (Composition)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"is a kind of\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"has a\" / \"contains a\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++ syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class D : public B {}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class D { B member_; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (inherits interface + impl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weak (encapsulated member)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "White-box (inherits internals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Black-box (uses interface)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via base pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base + derived always together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can share, independent lifetimes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder (parent needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (mock dependencies)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weaker (derived accesses protected)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stronger (private member)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-3 levels max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 level (flat)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Future flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (swap implementation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True subtype, polymorphic behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functionality reuse, modular design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "473-correct-is-a-example",
      children: "4.7.3 Correct IS-A Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Bird {\npublic:\n    virtual void fly() {\n        cout << \"Bird flying\" << endl;\n    }\n    virtual ~Bird() {}\n};\n\nclass Sparrow : public Bird {\npublic:\n    void fly() override {\n        cout << \"Sparrow flying swiftly\" << endl;\n    }\n};\n\nvoid letItFly(Bird& b) {\n    b.fly();    // polymorphic → works for any Bird\n}\n\nint main() {\n    Sparrow s;\n    letItFly(s);    // Sparrow IS-A Bird\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sparrow flying swiftly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "474-correct-has-a-example",
      children: "4.7.4 Correct HAS-A Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Engine {\nprivate:\n    int horsepower;\npublic:\n    Engine(int hp) : horsepower(hp) {}\n    void start() {\n        cout << \"Engine (\" << horsepower << \"HP) started\" << endl;\n    }\n};\n\nclass Car {\nprivate:\n    Engine engine;        // Car HAS-A Engine\n    string model;\npublic:\n    Car(string m, int hp) : model(m), engine(hp) {}\n    void start() {\n        cout << model << \": \";\n        engine.start();   // delegates to engine\n    }\n};\n\nint main() {\n    Car myCar(\"Sedan\", 200);\n    myCar.start();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sedan: Engine (200HP) started\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "475-when-inheritance-is-wrong-is-a-mistake",
      children: "4.7.5 When Inheritance is WRONG (IS-A Mistake)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// BAD: A Square IS-NOT a Rectangle (mathematically yes, OOP no)\nclass Rectangle {\npublic:\n    virtual void setWidth(int w) { width_ = w; }\n    virtual void setHeight(int h) { height_ = h; }\n    virtual int area() const { return width_ * height_; }\n    virtual ~Rectangle() {}\nprivate:\n    int width_ = 0, height_ = 0;\n};\n\nclass Square : public Rectangle {\npublic:\n    void setWidth(int w) override {\n        Rectangle::setWidth(w);\n        Rectangle::setHeight(w);   // violates LSP → changes height!\n    }\n    void setHeight(int h) override {\n        Rectangle::setWidth(h);    // violates LSP → changes width!\n        Rectangle::setHeight(h);\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Liskov Substitution Principle (LSP) violation:"
      }), " A Square is NOT substitutable for a Rectangle because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setWidth"
      }), " on a Rectangle should only change width, but on a Square it changes both. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefer composition or a common abstract base."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "476-has-a-over-private-inheritance",
      children: "4.7.6 HAS-A over Private Inheritance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// AVOID: Private inheritance for reuse\nclass Engine {\npublic:\n    void start() { cout << \"Engine started\" << endl; }\n};\n\nclass Car : private Engine {   // implemented-in-terms-of\npublic:\n    void startCar() { start(); }   // wrapping\n};\n\n// PREFER: Composition instead\nclass CarBetter {\nprivate:\n    Engine engine_;    // HAS-A\npublic:\n    void startCar() { engine_.start(); }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Is it a true subtype?\n    ├── Yes → Public inheritance (IS-A)\n    └── No  → Does the class just need functionality?\n              ├── Yes → Composition (HAS-A)\n              └── No  → Neither; unrelated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "477-is-a-vs-has-a-code-comparison",
      children: "4.7.7 IS-A vs HAS-A Code Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// --- IS-A Example ---\nclass Employee {\nprotected:\n    string name;\n    int id;\npublic:\n    Employee(string n, int i) : name(n), id(i) {}\n    virtual double calculatePay() const = 0;\n    virtual ~Employee() {}\n};\n\nclass Manager : public Employee {       // IS-A\nprivate:\n    double salary;\npublic:\n    Manager(string n, int i, double s) : Employee(n, i), salary(s) {}\n    double calculatePay() const override {\n        return salary + 5000;           // bonus\n    }\n};\n\nclass Developer : public Employee {     // IS-A\nprivate:\n    double hourlyRate;\n    int hoursWorked;\npublic:\n    Developer(string n, int i, double hr, int hw)\n        : Employee(n, i), hourlyRate(hr), hoursWorked(hw) {}\n    double calculatePay() const override {\n        return hourlyRate * hoursWorked;\n    }\n};\n\n// --- HAS-A Example ---\nclass Department {\nprivate:\n    string name;\n    vector<Employee*> employees;        // HAS-A\npublic:\n    Department(string n) : name(n) {}\n    void addEmployee(Employee* e) {\n        employees.push_back(e);\n    }\n    double totalPayroll() const {\n        double total = 0;\n        for (Employee* e : employees)\n            total += e->calculatePay();\n        return total;\n    }\n};\n\nint main() {\n    Manager m(\"Alice\", 101, 80000);\n    Developer d(\"Bob\", 102, 100, 160);\n    \n    Department dept(\"Engineering\");\n    dept.addEmployee(&m);               // HAS-A relationship\n    dept.addEmployee(&d);\n    \n    cout << \"Total payroll for \" << \"Engineering: $\"\n         << dept.totalPayroll() << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Total payroll for Engineering: $101000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "48-upcasting-and-downcasting",
      children: "4.8 Upcasting and Downcasting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-5",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upcasting (derived → base) is always safe and implicit; downcasting (base → derived) requires explicit casting and runtime checks via dynamic_cast for polymorphic types."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "481-definitions",
      children: "4.8.1 Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Upcast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived* → Base*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Always safe (implicit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base* bp = &derived;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Downcast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base* → Derived*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Needs runtime check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Derived* dp = dynamic_cast<Derived*>(bp);"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "482-why-upcasting-is-safe",
      children: "4.8.2 Why Upcasting is Safe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Derived object contains a complete Base subobject at a known offset. Converting a Derived* to Base* just adjusts the pointer to point to that subobject → no data is lost."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived object:\n+----------------+  <-- derived ptr\n| Base subobject |  <-- base ptr (after upcast)\n+----------------+\n| Derived members|\n+----------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void baseFunc() { cout << \"Base function\" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    void derivedFunc() { cout << \"Derived function\" << endl; }\n};\n\nint main() {\n    Derived d;\n    Base* bp = &d;         // implicit upcast → always works\n    bp->baseFunc();        // OK\n    // bp->derivedFunc();  // ERROR: Base* cannot see Derived members\n    \n    // Upcast reference\n    Base& br = d;          // implicit upcast via reference\n    br.baseFunc();         // OK\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base function\nBase function\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "483-why-downcasting-is-dangerous",
      children: "4.8.3 Why Downcasting is Dangerous"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Downcasting is dangerous because a Base pointer might not point to a Derived object at all:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Base* bp1 = new Derived();   // actually points to Derived\nBase* bp2 = new Base();      // actually points to Base (no Derived!)\n\n// If we downcast bp2 to Derived*, we get undefined behaviour\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "484-downcasting-with-dynamic_cast-safe",
      children: "4.8.4 Downcasting with dynamic_cast (Safe)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " performs a runtime check and returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nullptr"
      }), " for pointers (or throws ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::bad_cast"
      }), " for references) if the cast is invalid. Requires at least one virtual function in the base class (RTTI)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() {}     // needed for dynamic_cast (RTTI)\n};\n\nclass Derived : public Base {\npublic:\n    void specificFunc() {\n        cout << \"Derived-specific function\" << endl;\n    }\n};\n\nclass Other : public Base {\npublic:\n    void otherFunc() {\n        cout << \"Other-specific function\" << endl;\n    }\n};\n\nint main() {\n    Base* arr[] = { new Derived(), new Other(), new Derived() };\n    \n    for (Base* bp : arr) {\n        // Safe downcast with dynamic_cast\n        Derived* dp = dynamic_cast<Derived*>(bp);\n        if (dp) {\n            cout << \"Downcast to Derived succeeded: \";\n            dp->specificFunc();\n        } else {\n            cout << \"Not a Derived object\" << endl;\n        }\n    }\n    \n    // Cleanup\n    for (Base* bp : arr) delete bp;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Downcast to Derived succeeded: Derived-specific function\nNot a Derived object\nDowncast to Derived succeeded: Derived-specific function\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "485-downcasting-with-static_cast-unsafe",
      children: "4.8.5 Downcasting with static_cast (Unsafe)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "static_cast<Derived*>(basePtr)"
      }), " performs no runtime check → the programmer guarantees correctness. Undefined behaviour if the pointer doesn't actually point to Derived."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Base* bp = new Base();\n// Derived* dp = static_cast<Derived*>(bp);  // Compiles, but UB!\n// dp->specificFunc();                        // CRASH → not actually a Derived\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "486-upcasting-vs-downcasting--complete-comparison",
      children: "4.8.6 Upcasting vs Downcasting → Complete Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Upcast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downcast (dynamic_cast)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downcast (static_cast)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived → Base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base → Derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base → Derived"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Always safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Checked at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Undefined if wrong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Implicit or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast<D*>(b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<D*>(b)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero cost (compile-time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime cost (RTTI check)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTTI needed?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (virtual function required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns on failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            }), " (pointer) / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bad_cast"
            }), " (ref)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behaviour"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe retrieval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When type is guaranteed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "487-multiple-inheritance-and-casting",
      children: "4.8.7 Multiple Inheritance and Casting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With multiple inheritance, upcasting involves pointer adjustment because the base subobject is not at offset 0:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass A {\npublic:\n    int a;\n    A() : a(1) { cout << \"A at \" << this << endl; }\n};\n\nclass B {\npublic:\n    int b;\n    B() : b(2) { cout << \"B at \" << this << endl; }\n};\n\nclass C : public A, public B {\npublic:\n    int c;\n    C() : c(3) { cout << \"C at \" << this << endl; }\n};\n\nint main() {\n    C c;\n    A* ap = &c;\n    B* bp = &c;     // pointer automatically adjusted!\n    \n    cout << \"&c = \" << &c << endl;\n    cout << \"ap = \" << ap << \" (offset from c: \"\n         << (long)((char*)ap - (char*)&c) << \")\" << endl;\n    cout << \"bp = \" << bp << \" (offset from c: \"\n         << (long)((char*)bp - (char*)&c) << \")\" << endl;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (typical):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A at 0x7ffd1230\nB at 0x7ffd1234\nC at 0x7ffd1230\n&c = 0x7ffd1230\nap = 0x7ffd1230 (offset from c: 0)\nbp = 0x7ffd1234 (offset from c: 4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler automatically adjusts the pointer when casting to B → the B subobject is at offset 4 within C."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "488-cross_cast-pattern",
      children: "4.8.8 cross_cast Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you need to cast across a hierarchy (sibling cast), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " handles this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base { public: virtual ~Base() {} };\nclass A : public Base {};\nclass B : public Base {};\nclass C : public A, public B {};  // inherits Base twice!\n\n// dynamic_cast can navigate the entire hierarchy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "489-dynamic-cast-cost-analysis",
      children: "4.8.9 Dynamic Cast Cost Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dynamic_cast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "static_cast"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime type check (RTTI lookup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50-200ns per cast (typical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0ns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vtable required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throwing form"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::bad_cast"
            }), " for references"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "49-interview-corner",
      children: "4.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-6",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These are the most commonly asked C++ inheritance interview questions, covering the diamond problem, object slicing, virtual inheritance, and best practices."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-diamond-problem-and-how-does-virtual-inheritance-solve-it",
      children: "Q1: What is the diamond problem and how does virtual inheritance solve it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The diamond problem occurs in multiple inheritance when a class inherits from two classes that share a common ancestor. Without virtual inheritance, the most-derived class contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two separate copies"
      }), " of the shared ancestor's members, causing ambiguity when trying to access them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Without virtual inheritance (problematic):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class A { public: int x; };\nclass B : public A {};\nclass C : public A {};\nclass D : public B, public C {};\n\n// D contains TWO copies of A::x\n// d.x is ambiguous\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "With virtual inheritance (solved):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class B : virtual public A {};\nclass C : virtual public A {};\nclass D : public B, public C {};\n\n// D contains ONE copy of A::x\n// d.x is unambiguous\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The compiler inserts ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual base pointers (vbptr)"
      }), " in B and C that point to a shared A subobject. The most-derived class (D) is responsible for initialising A, and the intermediate classes' constructor calls to A are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ignored"
      }), " when they are part of a more-derived object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory layout comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Without Virtual"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "With Virtual"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two separate A subobjects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One shared A subobject"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Larger size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra vbase pointers (8 bytes each)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct offset access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect through vbptr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguous member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unambiguous member access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-object-slicing-and-how-do-you-prevent-it",
      children: "Q2: What is object slicing and how do you prevent it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Object slicing occurs when a derived class object is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copied by value"
      }), " to a base class object. The derived-specific members are \"sliced off,\" losing data and behaviour."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void speak() {\n        cout << \"Base speaking\" << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    string extraData;     // will be sliced off\npublic:\n    Derived(string s) : extraData(s) {}\n    void speak() override {\n        cout << \"Derived speaking with data: \" << extraData << endl;\n    }\n};\n\nint main() {\n    Derived d(\"secret\");\n    \n    // SLICING HAPPENS HERE:\n    Base b = d;           // copy by value → slices!\n    b.speak();            // calls Base::speak, NOT Derived::speak\n    \n    // NO SLICING (correct):\n    Base* bp = &d;        // pointer → no slicing\n    bp->speak();          // calls Derived::speak (virtual dispatch)\n    \n    Base& br = d;         // reference → no slicing\n    br.speak();           // calls Derived::speak\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base speaking\nDerived speaking with data: secret\nDerived speaking with data: secret\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to prevent slicing:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use pointers/references"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always pass/return by pointer or reference, never by value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Make base class abstract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent instantiation of base with pure virtual functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete copy operations in base"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Base(const Base&) = delete;"
            }), " (drastic but effective)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            }), " for derived classes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents further derivation where slicing is a risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler warnings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-W slicing"
            }), " in GCC/Clang"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Container pitfall:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "vector<Base> vec;    // BAD: stores Base by value → slices!\nvec.push_back(d);    // slices d to Base\n\nvector<Base*> vec2;  // GOOD: stores pointers → no slicing\nvec2.push_back(&d);  // OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-explain-virtual-inheritance-memory-layout-how-does-the-compiler-implement-it",
      children: "Q3: Explain virtual inheritance memory layout. How does the compiler implement it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a class uses virtual inheritance, the compiler inserts a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual base pointer (vbptr)"
      }), " into the class layout. This pointer points to a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual base table (vbtable)"
      }), " that stores the offset from the derived class to the shared virtual base subobject."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory layout for standard single inheritance:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class B : virtual public A { int b; };\n\nObject B:\n+------------------+\n| vbptr (8 bytes)  |  --> vbtable: [ offset to A = 16 ]\n+------------------+\n| B::b (4 bytes)   |\n+------------------+\n| padding           |\n+------------------+\n| A subobject       |\n|   A members       |\n+------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory layout for diamond (D : B, C, both virtual A):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Object D:\n+------------------+\n| B vbptr          |  --> B's vbtable: [ offset to A = 24 ]\n+------------------+\n| B members        |\n+------------------+\n| C vbptr          |  --> C's vbtable: [ offset to A = 16 ]\n+------------------+\n| C members        |\n+------------------+\n| D members        |\n+------------------+\n| A subobject       |\n|   A members       |\n+------------------+  (single copy, shared by B and C)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accessing a virtual base member:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "d.A::x = 42;\n// Compiler translates to:\n// *(reinterpret_cast<int*>(reinterpret_cast<char*>(&d) + vbptr->offset_to_A))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compiler-specific differences:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Compiler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layout Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "vbptr Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCC/Clang"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Virtual base at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "end"
            }), " of object"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vbptr at start of each virtually-derived class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MSVC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Virtual base at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "negative offset"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vbptr before class data; vbtable entry is negative offset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follows target ABI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each virtual inheritance adds ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "8 bytes"
        }), " (vbptr) per intermediate class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each member access through virtual base adds ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one extra indirection"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construction: most-derived must check if virtual base already initialised (extra flag)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-can-you-call-a-virtual-function-from-a-constructor-or-destructor-what-happens",
      children: "Q4: Can you call a virtual function from a constructor or destructor? What happens?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Yes, you can call virtual functions from constructors and destructors, but they ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "do NOT dispatch to overrides in derived classes"
      }), ". The call resolves to the function version of the class currently being constructed/destroyed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " During base class construction, the derived portion doesn't exist yet → the vtable pointer (vptr) points to the base class's vtable, not the derived class's. The same applies during destruction in reverse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { print(); }           // calls Base::print\n    virtual void print() {\n        cout << \"Base::print\" << endl;\n    }\n    virtual ~Base() {}\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { print(); }        // calls Derived::print\n    void print() override {\n        cout << \"Derived::print\" << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base::print\nDerived::print\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice:"
      }), " Never rely on virtual dispatch in constructors or destructors. Prefer a separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "init()"
      }), " method called after construction if polymorphic behaviour is needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-what-is-the-difference-between-public-protected-and-private-inheritance",
      children: ["Q5: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " inheritance?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "public"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "protected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "private"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base public members become"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "protected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base protected members become"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "protected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "protected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "private"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base private members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inaccessible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Models is-a?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can upcast to base?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Implicitly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Only within derived hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency of use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subtype polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare; implementation sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implemented-in-terms-of"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use private inheritance (the only valid cases):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to inherit protected members but not expose the interface"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Need to override a virtual function but not expose the base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Empty base optimisation (EBO) for size optimisation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prefer composition over private inheritance"
      }), " in virtually all cases where you just need to reuse implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-what-does-the-final-specifier-do-in-inheritance",
      children: ["Q6: What does the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " specifier do in inheritance?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " can be applied to both classes and virtual functions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "final"
          }), " class:"]
        }), " Cannot be used as a base class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "final"
          }), " virtual function:"]
        }), " Cannot be overridden in derived classes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void f();\n    virtual void g();\n};\n\nclass Intermediate : public Base {\npublic:\n    void f() override final;    // f cannot be overridden further\n};\n\nclass Derived : public Intermediate {\npublic:\n    // void f() override;      // ERROR: f is final in Intermediate\n    void g() override;          // OK: g is not final\n};\n\nclass FinalClass final : public Base {\n    // This class cannot be inherited from\n};\n\n// class SubClass : public FinalClass {};  // ERROR: FinalClass is final\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Prevent further derivation of critical classes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design clarity:"
        }), " Intentional leaf class in hierarchy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Devirtualisation:"
        }), " Compiler can devirtualise calls on final classes (optimisation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API stability:"
        }), " Guarantee no further overrides in library interfaces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-the-liskov-substitution-principle-in-the-context-of-inheritance",
      children: "Q7: Explain the Liskov Substitution Principle in the context of inheritance."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Liskov Substitution Principle (LSP) states that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "objects of a derived class should be substitutable for objects of the base class without altering the correctness of the program"
      }), ". In other words, if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "D"
      }), " is a subtype of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), ", then any code using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " should work correctly when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " is replaced with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "D"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Violation → Classic Square/Rectangle:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Rectangle {\npublic:\n    virtual void setWidth(int w) { w_ = w; }\n    virtual void setHeight(int h) { h_ = h; }\n    int area() const { return w_ * h_; }\nprivate:\n    int w_ = 0, h_ = 0;\n};\n\nclass Square : public Rectangle {\npublic:\n    void setWidth(int w) override {\n        Rectangle::setWidth(w);\n        Rectangle::setHeight(w);   // LSP VIOLATION\n    }\n    void setHeight(int h) override {\n        Rectangle::setWidth(h);\n        Rectangle::setHeight(h);   // LSP VIOLATION\n    }\n};\n\nvoid resize(Rectangle& r) {\n    r.setWidth(5);\n    r.setHeight(10);\n    cout << \"Area: \" << r.area();   // Expects 50, gets 100 for Square\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to avoid LSP violations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't weaken base class invariants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't strengthen preconditions in derived classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Don't weaken postconditions in derived classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make base classes abstract if behaviour contract is complex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Favour composition over inheritance when behaviour differs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Correct approach → common abstract base:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Shape {\npublic:\n    virtual int area() const = 0;\n    virtual ~Shape() {}\n};\n\nclass Rectangle : public Shape {\npublic:\n    Rectangle(int w, int h) : w_(w), h_(h) {}\n    int area() const override { return w_ * h_; }\nprivate:\n    int w_, h_;\n};\n\nclass Square : public Shape {\npublic:\n    Square(int s) : side_(s) {}\n    int area() const override { return side_ * side_; }\nprivate:\n    int side_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-prevent-a-class-from-being-inherited-in-c",
      children: "Q8: How do you prevent a class from being inherited in C++?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Method 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), " specifier (C++11, preferred):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class FinalClass final {\n    // Cannot be inherited\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: Private constructor + friend (pre-C++11):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class NotInheritable {\nprivate:\n    NotInheritable() {}\npublic:\n    static NotInheritable* create() {\n        return new NotInheritable();\n    }\n    ~NotInheritable() {}\n};\n\n// class Derived : public NotInheritable {};  // ERROR: cannot access private constructor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 3: Virtual inheritance trick with a private virtual base:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Seal {\n    friend class Sealed;\n    Seal() {}\n};\n\nclass Sealed : virtual public Seal {\n    // Can be instantiated (Seal's constructor accessible via friendship)\n    // But cannot be further derived:\n    //   class Derived : public Sealed { ... };\n    //   Derived's constructor would need to call Seal() directly (bypassing Sealed),\n    //   but Seal's constructor is private to anyone who is not a friend of Seal.\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 4: Template-based (C++11, most robust):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nclass MakeFinal {\n    friend T;\nprivate:\n    MakeFinal() {}\n};\n\nclass SealedClass : virtual public MakeFinal<SealedClass> {\npublic:\n    SealedClass() {}\n};\n\n// class Derived : public SealedClass {};  // ERROR: cannot access MakeFinal constructor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-the-difference-between-early-static-binding-and-late-dynamic-binding-in-inheritance",
      children: "Q9: What is the difference between early (static) binding and late (dynamic) binding in inheritance?"
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
            children: "Early Binding (Static)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Late Binding (Dynamic)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resolution time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler knows exact type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vtable lookup via vptr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 indirection per call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual, static, template"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++ keyword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    void nonVirtual() { cout << \"Base::nonVirtual\" << endl; }\n    virtual void isVirtual() { cout << \"Base::isVirtual\" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    void nonVirtual() { cout << \"Derived::nonVirtual\" << endl; }   // hides\n    void isVirtual() override { cout << \"Derived::isVirtual\" << endl; }\n};\n\nint main() {\n    Derived d;\n    Base* bp = &d;\n    \n    bp->nonVirtual();    // Early binding: calls Base::nonVirtual\n    bp->isVirtual();     // Late binding: calls Derived::isVirtual\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base::nonVirtual\nDerived::isVirtual\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-happens-if-a-destructor-is-not-virtual-in-a-base-class",
      children: "Q10: What happens if a destructor is not virtual in a base class?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a base class destructor is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not virtual"
      }), ", deleting a derived object through a base pointer causes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behaviour"
      }), " → typically only the base destructor runs, and the derived part leaks resources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    ~Base() { cout << \"~Base\" << endl; }    // non-virtual!\n};\n\nclass Derived : public Base {\nprivate:\n    int* data = new int[100];               // resource\npublic:\n    ~Derived() {\n        cout << \"~Derived\" << endl;\n        delete[] data;                       // NEVER CALLED!\n    }\n};\n\nint main() {\n    Base* bp = new Derived();\n    delete bp;    // UB: calls only ~Base, not ~Derived\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~Base"
      }), " (Derived destructor never called → memory leak!)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix: make destructor virtual:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual ~Base() { cout << \"~Base\" << endl; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~Derived~Base"
      }), " (both called correctly)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " If a class has any virtual function, always make the destructor virtual. If a class is designed as a base class (even with no virtual functions), give it a virtual destructor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "410-applications-in-real-systems",
      children: "4.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "one-sentence-takeaway-7",
      children: "One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inheritance is the backbone of major C++ frameworks; understanding real-world hierarchies like Qt and iostream reveals how the concepts are applied at scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4101-qt-widget-hierarchy",
      children: "4.10.1 Qt Widget Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Qt, the widely-used C++ GUI framework, uses a deep inheritance tree:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QObject\n  |\n  +-- QWidget\n  |     |\n  |     +-- QFrame\n  |     |     |\n  |     |     +-- QLabel, QLCDNumber\n  |     |     +-- QSplitter\n  |     |     +-- QAbstractScrollArea\n  |     |           |\n  |     |           +-- QTextEdit, QPlainTextEdit\n  |     |           +-- QAbstractItemView\n  |     |                 |\n  |     |                 +-- QListView, QTableView, QTreeView\n  |     |\n  |     +-- QAbstractButton\n  |     |     |\n  |     |     +-- QPushButton, QRadioButton, QCheckBox\n  |     |     +-- QToolButton\n  |     |\n  |     +-- QComboBox\n  |     +-- QLineEdit\n  |     +-- QSlider, QDial\n  |\n  +-- QLayout              (abstract, not a widget)\n  |     +-- QHBoxLayout\n  |     +-- QVBoxLayout\n  |     +-- QGridLayout\n  |\n  +-- QTimer\n  +-- QStringListModel\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key inheritance features used:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual base for signals/slots:"
        }), " QObject provides the signal-slot mechanism via virtual functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overridden paintEvent():"
        }), " Each widget override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QWidget::paintEvent()"
        }), " to draw itself"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hierarchical ownership:"
        }), " QObject parent-child tree manages memory (deleting parent deletes children)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multilevel inheritance:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QPushButton"
        }), " inherits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QAbstractButton"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QWidget"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QObject"
        }), " → nothing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual destructor:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QObject"
        }), " has a virtual destructor, ensuring proper cleanup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Simplified illustration of Qt-style hierarchy\nclass QObject {\npublic:\n    virtual ~QObject() {}\n    void setParent(QObject* p) { parent_ = p; }\n    virtual const char* className() const { return \"QObject\"; }\nprivate:\n    QObject* parent_ = nullptr;\n};\n\nclass QWidget : public QObject {\npublic:\n    void setGeometry(int x, int y, int w, int h) {\n        x_ = x; y_ = y; w_ = w; h_ = h;\n    }\n    virtual void paintEvent() { /* default paint */ }\n    const char* className() const override { return \"QWidget\"; }\nprivate:\n    int x_ = 0, y_ = 0, w_ = 100, h_ = 100;\n};\n\nclass QAbstractButton : public QWidget {\npublic:\n    void setText(const char* t) { text_ = t; }\n    virtual void click() { /* emit clicked signal */ }\n    void paintEvent() override { /* draw button */ }\n    const char* className() const override { return \"QAbstractButton\"; }\nprivate:\n    const char* text_ = \"\";\n};\n\nclass QPushButton : public QAbstractButton {\npublic:\n    void paintEvent() override { /* draw push button */ }\n    const char* className() const override { return \"QPushButton\"; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4102-c-iostream-hierarchy",
      children: "4.10.2 C++ iostream Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard iostream library uses inheritance extensively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                      ios_base\n                          |\n                        ios\n                       /   \\\n                 istream   ostream\n                    |        |\n                    +--------+\n                        |\n                     iostream\n                    /        \\\n              fstream      stringstream\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breakdown:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inherits From"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios_base"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatting flags, locale, precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios_base"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error state, streambuf association"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Input operations (", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ostream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Output operations (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "put"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iostream"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "istream"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ostream"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional I/O (multiple inheritance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iostream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stringstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iostream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String-based I/O"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note the diamond:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iostream"
      }), " inherits from both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "istream"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ostream"
      }), ", which both inherit from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ios"
      }), ". This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "diamond"
      }), " that uses virtual inheritance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Simplified iostream layout\nclass ios : virtual public ios_base { /* ... */ };\nclass istream : virtual public ios { /* ... */ };\nclass ostream : virtual public ios { /* ... */ };\nclass iostream : public istream, public ostream { /* ... */ };\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ios"
      }), " is a virtual base of both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "istream"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ostream"
      }), ", ensuring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iostream"
      }), " has only one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ios"
      }), " and one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ios_base"
      }), " subobject."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why virtual inheritance here:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fstream"
        }), " should have exactly one format state (one ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ios_base"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fstream"
        }), " should have exactly one error state (one ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ios"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sync()"
        }), " once, not twice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consistent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tie()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rdbuf()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fill()"
        }), " across both input and output sides"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4103-exception-class-hierarchy",
      children: "4.10.3 Exception Class Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++ standard exception hierarchy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  exception\n      |\n  +---+---+\n  |       |\nlogic_error  runtime_error\n  |       |       |       |\ninvalid_argument  range_error\nout_of_range      overflow_error\nlength_error      underflow_error\ndomain_error      system_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid processAge(int age) {\n    if (age < 0)\n        throw invalid_argument(\"Age cannot be negative\");\n    if (age > 150)\n        throw out_of_range(\"Age exceeds reasonable limit\");\n    cout << \"Age \" << age << \" is valid\" << endl;\n}\n\nint main() {\n    try {\n        processAge(-5);\n    } catch (const invalid_argument& e) {\n        cout << \"Invalid argument: \" << e.what() << endl;\n    } catch (const out_of_range& e) {\n        cout << \"Out of range: \" << e.what() << endl;\n    } catch (const exception& e) {\n        cout << \"General exception: \" << e.what() << endl;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Invalid argument: Age cannot be negative\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4104-game-development-entity-hierarchy",
      children: "4.10.4 Game Development Entity Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Entity {\nprotected:\n    int id_;\n    int x_, y_;\n    int health_;\npublic:\n    Entity(int id, int x, int y, int hp)\n        : id_(id), x_(x), y_(y), health_(hp) {}\n    virtual void update(float deltaTime) = 0;\n    virtual void render() const {\n        cout << \"Entity \" << id_ << \" at (\" << x_ << \",\" << y_ << \")\" << endl;\n    }\n    virtual void takeDamage(int dmg) { health_ -= dmg; }\n    virtual ~Entity() {}\n};\n\nclass Player : public Entity {\nprivate:\n    int score_;\npublic:\n    Player(int id, int x, int y)\n        : Entity(id, x, y, 100), score_(0) {}\n    void update(float dt) override {\n        // Handle keyboard input, move, etc.\n        cout << \"Player updated (dt=\" << dt << \")\" << endl;\n    }\n    void render() const override {\n        cout << \"[P] \";\n        Entity::render();\n    }\n};\n\nclass Enemy : public Entity {\nprivate:\n    int damage_;\n    int chaseRange_;\npublic:\n    Enemy(int id, int x, int y, int dmg, int range)\n        : Entity(id, x, y, 50), damage_(dmg), chaseRange_(range) {}\n    void update(float dt) override {\n        // AI movement, attack logic\n        cout << \"Enemy updated (range=\" << chaseRange_ << \")\" << endl;\n    }\n    void render() const override {\n        cout << \"[E] \";\n        Entity::render();\n    }\n};\n\nclass Projectile : public Entity {\nprivate:\n    int speed_;\n    int direction_;\npublic:\n    Projectile(int id, int x, int y, int s, int d)\n        : Entity(id, x, y, 1), speed_(s), direction_(d) {}\n    void update(float dt) override {\n        x_ += speed_ * direction_ * dt;\n        cout << \"Projectile moved to (\" << x_ << \",\" << y_ << \")\" << endl;\n    }\n    void render() const override {\n        cout << \"[*] at (\" << x_ << \",\" << y_ << \")\" << endl;\n    }\n};\n\nint main() {\n    vector<unique_ptr<Entity>> entities;\n    entities.push_back(make_unique<Player>(0, 100, 100));\n    entities.push_back(make_unique<Enemy>(1, 500, 300, 10, 200));\n    entities.push_back(make_unique<Projectile>(2, 100, 100, 5, 1));\n    \n    for (auto& e : entities) {\n        e->update(0.016f);    // polymorphic update\n        e->render();\n        cout << \"---\" << endl;\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4105-device-driver-abstraction",
      children: "4.10.5 Device Driver Abstraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Device {\nprotected:\n    string name_;\n    bool opened_ = false;\npublic:\n    Device(const string& name) : name_(name) {}\n    virtual bool open() = 0;\n    virtual int read(char* buf, int size) = 0;\n    virtual int write(const char* buf, int size) = 0;\n    virtual bool close() = 0;\n    virtual ~Device() {}\n};\n\nclass USBDevice : public Device {\npublic:\n    USBDevice() : Device(\"USB Device\") {}\n    bool open() override {\n        cout << \"USB: opening device\" << endl;\n        opened_ = true;\n        return true;\n    }\n    int read(char* buf, int size) override {\n        cout << \"USB: reading \" << size << \" bytes\" << endl;\n        return size;\n    }\n    int write(const char* buf, int size) override {\n        cout << \"USB: writing \" << size << \" bytes\" << endl;\n        return size;\n    }\n    bool close() override {\n        cout << \"USB: closing device\" << endl;\n        opened_ = false;\n        return true;\n    }\n};\n\nclass NetworkDevice : public Device {\nprivate:\n    string ip_;\npublic:\n    NetworkDevice(const string& ip) : Device(\"Network\"), ip_(ip) {}\n    bool open() override {\n        cout << \"Network: connecting to \" << ip_ << endl;\n        opened_ = true;\n        return true;\n    }\n    int read(char* buf, int size) override {\n        cout << \"Network: receiving \" << size << \" bytes from \" << ip_ << endl;\n        return size;\n    }\n    int write(const char* buf, int size) override {\n        cout << \"Network: sending \" << size << \" bytes to \" << ip_ << endl;\n        return size;\n    }\n    bool close() override {\n        cout << \"Network: disconnecting from \" << ip_ << endl;\n        opened_ = false;\n        return true;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "411-key-takeaways",
      children: "4.11 Key Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "must-remember-rules",
      children: "Must-Remember Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public inheritance models IS-A"
        }), " → use it when a derived class truly is a kind of base class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make base destructors virtual"
        }), " when a class is intended as a base"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual inheritance for diamonds"
        }), " → ensures a single shared base subobject"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Most-derived initialises virtual bases"
        }), " → intermediate calls are ignored"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Construction order:"
        }), " virtual bases → non-virtual bases → members → body"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destruction order:"
        }), " exact reverse of construction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dynamic_cast"
        }), " for safe downcasting (requires RTTI / virtual functions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer composition over inheritance"
        }), " for code reuse (HAS-A over IS-A)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Final class"
        }), " prevents further inheritance; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "final function"
        }), " prevents further overriding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object slicing"
        }), " occurs when passing by value → use pointers or references"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual destructor in base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource leak on polymorphic delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always make destructor virtual in base classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calling virtual functions from constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No polymorphic dispatch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "init()"
            }), " pattern or two-phase construction"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deep inheritance chains (>3 levels)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fragile, hard to maintain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Favour composition; flatten hierarchy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring the diamond problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguous member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use virtual inheritance for shared bases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private inheritance when composition works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer a member object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object slicing in containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost derived data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use containers of pointers (smart pointers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance with conflicting interfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity, complex layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use explicit scope resolution or interfaces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inheritance-design-checklist",
      children: "Inheritance Design Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Is the relationship truly IS-A (LSP satisfied)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Does the base class have a virtual destructor?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Are virtual functions avoided in constructors/destructors?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Is the inheritance depth manageable (≤3 levels)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Are diamond-shaped hierarchies using virtual inheritance?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Is the most-derived class initialising virtual bases?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Is dynamic_cast needed? If yes, RTTI is enabled?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Are base class abstract where appropriate (pure virtual)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Is the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), " specifier applied to prevent unintended extension?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Could composition replace inheritance for any of the relationships?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-summary",
      children: "Chapter Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base & Derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IS-A relationship, base subobject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class D : public B {}"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access Control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visibility propagation via specifiers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), " inheritance"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 base, 1 derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Car : public Vehicle"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multilevel Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A → B → C chain"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class C : public B"
            }), " (B from A)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2+ unrelated bases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class C : public A, public B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 base, N derived"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class B, C, D : public A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid/Diamond"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined forms with shared ancestor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "B virtual A, C virtual A, D : B, C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single shared base subobject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class B : virtual public A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VB → Bases → Members → Body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain calls in initialiser list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Upcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived* → Base* (implicit safe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base* bp = &derived;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Downcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base* → Derived* (runtime check)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast<Derived*>(bp)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IS-A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class D : public B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HAS-A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class D { B member_; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diamond Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two copies of shared ancestor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Solved via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " inheritance"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which form of inheritance creates a diamond?\nA) Single inheritance\nB) Multilevel inheritance\nC) Multiple inheritance where bases share a common ancestor\nD) Hierarchical inheritance"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** When a class inherits from two classes that share a common ancestor, the diamond shape is created."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the correct construction order for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "D"
          }), " if ", (0,jsx_runtime.jsx)(_components.code, {
            children: "B"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "C"
          }), " virtually inherit ", (0,jsx_runtime.jsx)(_components.code, {
            children: "A"
          }), "?\nA) B, C, A, D\nB) A, B, C, D\nC) D, A, B, C\nD) A is constructed first regardless"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Virtual bases are constructed first (A), then non-virtual bases in declaration order (B, C), then D's body."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which statement about object slicing is true?\nA) Object slicing is prevented by virtual inheritance\nB) Object slicing occurs when passing by reference\nC) Object slicing occurs when a derived object is copied to a base by value\nD) Object slicing only happens with multiple inheritance"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Slicing happens on by-value copy → the derived portion is lost."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which cast is appropriate for safe downcasting?\nA) static_cast\nB) reinterpret_cast\nC) dynamic_cast\nD) const_cast"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** dynamic_cast performs a runtime check and returns nullptr on failure."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "final"
          }), " specifier on a class do?\nA) Makes all members const\nB) Prevents the class from being used as a base\nC) Forces all functions to be virtual\nD) Automatically generates a virtual destructor"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** `final` on a class means it cannot be inherited from."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In private inheritance, what happens to base public members?\nA) They become public\nB) They become protected\nC) They become private\nD) They become inaccessible"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** In private inheritance, all base public and protected members become private."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "True or False: A virtual function called from a base constructor will invoke the derived override.\nA) True\nB) False"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** False. During base construction, the derived portion doesn't exist, so the base version is called."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which is NOT a valid reason to use virtual inheritance?\nA) Resolving the diamond problem\nB) Reducing object size\nC) Sharing a common base in multiple inheritance\nD) Allowing the most-derived class to initialise the shared base"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Virtual inheritance increases object size due to vbase pointers."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between public and private inheritance? When would you use each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how virtual inheritance resolves the diamond problem at the memory layout level."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens if you delete a derived object through a base pointer whose destructor is not virtual?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can't virtual functions be safely called from constructors?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe three different ways to prevent object slicing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Media Player Hierarchy:"
          }), " Design a class hierarchy for media playback:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MediaFile"
            }), " (base): title, duration, pure virtual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "play()"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stop()"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AudioFile"
            }), " : MediaFile (add sample rate, bitrate)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "VideoFile"
            }), " : MediaFile (add resolution, frame rate)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AVFile"
            }), " : AudioFile, VideoFile (resolve diamond with virtual inheritance)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement all classes with constructors, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "displayInfo()"
          }), ", and demonstrate polymorphic playback."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Banking System:"
          }), " Create a banking hierarchy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Account"
            }), " (base): account number, balance, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deposit()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "withdraw()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getBalance()"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SavingsAccount"
            }), " : Account (interest rate, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "addInterest()"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CheckingAccount"
            }), " : Account (overdraft limit)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Show IS-A relationships, proper constructors with initialiser lists"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Employee Management:"
          }), " Implement:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Person"
            }), " (base): name, age, address"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Employee"
            }), " : Person (employee ID, salary, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "calculatePay()"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Manager"
            }), " : Employee (bonus percentage, department)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Intern"
            }), " : Employee (fixed stipend, duration)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate upcasting and virtual function dispatch"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Plugin Architecture:"
          }), " Design and implement a mini plugin system:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Plugin"
            }), " (abstract base): ", (0,jsx_runtime.jsx)(_components.code, {
              children: "initialize()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "execute()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shutdown()"
            }), ", plugin name"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "LoggingPlugin"
            }), " : Plugin (writes to log file)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "EncryptionPlugin"
            }), " : Plugin (encrypts/decrypts data with given algorithm)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ConfigPlugin"
            }), " : Plugin (reads/writes configuration)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "AdvancedLogger"
            }), " : LoggingPlugin (adds rotation, compression)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PluginManager"
          }), " class (HAS-A relationship with Plugin*) that loads, initialises, and runs all plugins polymorphically. Use virtual destructors throughout. Demonstrate that the manager works with any plugin type without knowing the concrete type."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proceed to:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/05-polymorphism",
          children: "Polymorphism"
        }), " to learn how virtual functions and dynamic dispatch enable runtime flexibility."]
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