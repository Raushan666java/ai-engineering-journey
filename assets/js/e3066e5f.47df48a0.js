"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[68475],{

/***/ 76576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_02_classes_objects_md_e30_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-02-classes-objects-md-e30.json
const site_docs_courses_oop_cpp_02_classes_objects_md_e30_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/02-classes-objects","title":"Chapter 2: Classes and Objects","description":"Previous Constructors","source":"@site/docs/courses/oop-cpp/02-classes-objects.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/02-classes-objects","permalink":"/ai-engineering-journey/oop-cpp/02-classes-objects","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-classes-objects","slug":"/oop-cpp/02-classes-objects","title":"Chapter 2: Classes and Objects","sidebar_label":"Chapter 2: Classes and Objects","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"Chapter 1: Introduction to Object-Oriented Programming","permalink":"/ai-engineering-journey/oop-cpp/01-introduction"},"next":{"title":"Chapter 3: Constructors and Destructors","permalink":"/ai-engineering-journey/oop-cpp/03-constructors"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/02-classes-objects.md


const frontMatter = {
	id: '02-classes-objects',
	slug: '/oop-cpp/02-classes-objects',
	title: 'Chapter 2: Classes and Objects',
	sidebar_label: 'Chapter 2: Classes and Objects',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Classes and Objects';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Topic Flowchart",
  "id": "topic-flowchart",
  "level": 2
}, {
  "value": "2.1 The Class Concept — Blueprint and Instance",
  "id": "21-the-class-concept--blueprint-and-instance",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Step-by-Step Process",
  "id": "step-by-step-process",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 3
}, {
  "value": "Memory Layout of an Object",
  "id": "memory-layout-of-an-object",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "2.2 Access Specifiers",
  "id": "22-access-specifiers",
  "level": 2
}, {
  "value": "Overview Table",
  "id": "overview-table",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Detailed Explanation",
  "id": "detailed-explanation",
  "level": 3
}, {
  "value": "Code Demonstration",
  "id": "code-demonstration",
  "level": 3
}, {
  "value": "The Principle of Least Privilege",
  "id": "the-principle-of-least-privilege",
  "level": 3
}, {
  "value": "class vs struct — Extended Comparison",
  "id": "class-vs-struct--extended-comparison",
  "level": 3
}, {
  "value": "2.3 Member Functions",
  "id": "23-member-functions",
  "level": 2
}, {
  "value": "Syntax Variations",
  "id": "syntax-variations",
  "level": 3
}, {
  "value": "Types of Member Functions",
  "id": "types-of-member-functions",
  "level": 3
}, {
  "value": "Inline Member Functions",
  "id": "inline-member-functions",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "2.4 The <code>this</code> Pointer",
  "id": "24-the-this-pointer",
  "level": 2
}, {
  "value": "What Is <code>this</code>?",
  "id": "what-is-this",
  "level": 3
}, {
  "value": "Implicit vs Explicit Usage",
  "id": "implicit-vs-explicit-usage",
  "level": 3
}, {
  "value": "Method Chaining with <code>*this</code>",
  "id": "method-chaining-with-this",
  "level": 3
}, {
  "value": "Common <code>this</code> Use Cases",
  "id": "common-this-use-cases",
  "level": 3
}, {
  "value": "Compare Objects — Identity Check",
  "id": "compare-objects--identity-check",
  "level": 3
}, {
  "value": "2.5 Static Members",
  "id": "25-static-members",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Static Data Members",
  "id": "static-data-members",
  "level": 3
}, {
  "value": "Dry Run — Static Variable Increment",
  "id": "dry-run--static-variable-increment",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 3
}, {
  "value": "Static Member Functions",
  "id": "static-member-functions",
  "level": 3
}, {
  "value": "static vs Non-static — Comparison Table",
  "id": "static-vs-non-static--comparison-table",
  "level": 3
}, {
  "value": "Complexity Analysis of Static Members",
  "id": "complexity-analysis-of-static-members",
  "level": 3
}, {
  "value": "2.6 Friend Functions",
  "id": "26-friend-functions",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "What Is a Friend Function?",
  "id": "what-is-a-friend-function",
  "level": 3
}, {
  "value": "Friend Function with Two Classes",
  "id": "friend-function-with-two-classes",
  "level": 3
}, {
  "value": "Friend Class",
  "id": "friend-class",
  "level": 3
}, {
  "value": "Dry Run — Friend Function Access",
  "id": "dry-run--friend-function-access",
  "level": 3
}, {
  "value": "Important Rules of Friendship",
  "id": "important-rules-of-friendship",
  "level": 3
}, {
  "value": "friend Function vs Member Function — Comparison",
  "id": "friend-function-vs-member-function--comparison",
  "level": 3
}, {
  "value": "2.7 Nested Classes",
  "id": "27-nested-classes",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Syntax and Access Rules",
  "id": "syntax-and-access-rules",
  "level": 3
}, {
  "value": "Nested Class Access Rules",
  "id": "nested-class-access-rules",
  "level": 3
}, {
  "value": "Visibility Hierarchy",
  "id": "visibility-hierarchy",
  "level": 3
}, {
  "value": "2.8 <code>const</code> Member Functions — Deep Dive",
  "id": "28-const-member-functions--deep-dive",
  "level": 2
}, {
  "value": "The Core Concept",
  "id": "the-core-concept",
  "level": 3
}, {
  "value": "What <code>const</code> Actually Does",
  "id": "what-const-actually-does",
  "level": 3
}, {
  "value": "Why const-Correctness Matters",
  "id": "why-const-correctness-matters",
  "level": 3
}, {
  "value": "const and Non-const Overloads",
  "id": "const-and-non-const-overloads",
  "level": 3
}, {
  "value": "What <code>const</code> Does NOT Guarantee",
  "id": "what-const-does-not-guarantee",
  "level": 3
}, {
  "value": "The <code>mutable</code> Keyword",
  "id": "the-mutable-keyword",
  "level": 3
}, {
  "value": "Mutable — Dry Run",
  "id": "mutable--dry-run",
  "level": 3
}, {
  "value": "const Correctness Rules Summary",
  "id": "const-correctness-rules-summary",
  "level": 3
}, {
  "value": "Complexity Analysis of const Member Functions",
  "id": "complexity-analysis-of-const-member-functions",
  "level": 3
}, {
  "value": "2.9 Advanced Topics — Putting It All Together",
  "id": "29-advanced-topics--putting-it-all-together",
  "level": 2
}, {
  "value": "Logger with Static Counter and Friend Access",
  "id": "logger-with-static-counter-and-friend-access",
  "level": 3
}, {
  "value": "2.10 Interview Corner",
  "id": "210-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the <code>this</code> pointer. When must you use it explicitly?",
  "id": "q1-explain-the-this-pointer-when-must-you-use-it-explicitly",
  "level": 3
}, {
  "value": "Q2: What is the difference between <code>class</code> and <code>struct</code> in C++? Are they identical?",
  "id": "q2-what-is-the-difference-between-class-and-struct-in-c-are-they-identical",
  "level": 3
}, {
  "value": "Q3: Can a <code>const</code> member function modify an object? Explain with <code>mutable</code>.",
  "id": "q3-can-a-const-member-function-modify-an-object-explain-with-mutable",
  "level": 3
}, {
  "value": "Q4: How do static members work? Can static member functions access non-static members?",
  "id": "q4-how-do-static-members-work-can-static-member-functions-access-non-static-members",
  "level": 3
}, {
  "value": "Q5: Friend functions vs member functions — when to use each?",
  "id": "q5-friend-functions-vs-member-functions--when-to-use-each",
  "level": 3
}, {
  "value": "Q6: What is the size of an empty class in C++? Why?",
  "id": "q6-what-is-the-size-of-an-empty-class-in-c-why",
  "level": 3
}, {
  "value": "Q7: Can you call a virtual function from a constructor or destructor? What about from a const member function?",
  "id": "q7-can-you-call-a-virtual-function-from-a-constructor-or-destructor-what-about-from-a-const-member-function",
  "level": 3
}, {
  "value": "Q8: What is the difference between <code>private</code> inheritance and composition?",
  "id": "q8-what-is-the-difference-between-private-inheritance-and-composition",
  "level": 3
}, {
  "value": "2.11 Applications in Real Systems",
  "id": "211-applications-in-real-systems",
  "level": 2
}, {
  "value": "1. <code>std::string</code> — A Well-Designed Class",
  "id": "1-stdstring--a-well-designed-class",
  "level": 3
}, {
  "value": "2. GUI Widget Hierarchy (Qt-inspired)",
  "id": "2-gui-widget-hierarchy-qt-inspired",
  "level": 3
}, {
  "value": "3. Smart Pointer (std::unique_ptr Internals)",
  "id": "3-smart-pointer-stdunique_ptr-internals",
  "level": 3
}, {
  "value": "4. Embedded Systems Register Map",
  "id": "4-embedded-systems-register-map",
  "level": 3
}, {
  "value": "2.12 Summary — Key Takeaways",
  "id": "212-summary--key-takeaways",
  "level": 2
}, {
  "value": "2.13 Chapter Exercises",
  "id": "213-chapter-exercises",
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
        id: "chapter-2-classes-and-objects",
        children: "Chapter 2: Classes and Objects"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/01-introduction",
          children: "Introduction"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/03-constructors",
          children: "Constructors"
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
        href: "../../assets/images/lessons/oop-cpp/02-classes-objects/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/02-classes-objects/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/02-classes-objects/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/02-classes-objects/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/02-classes-objects/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/02-classes-objects/visual-explanation.png",
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
        children: "Define a class with data members and member functions using correct syntax"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply access specifiers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protected"
        }), ") to enforce encapsulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Distinguish between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct"
        }), " in C++ and choose appropriately"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " pointer explicitly for disambiguation and method chaining"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " member functions and explain const-correctness"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and access static members with proper out-of-class definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write friend functions and friend classes for controlled external access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design nested classes for information hiding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze complexity of member function calls and object operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "topic-flowchart",
      children: "Topic Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"🏛️ Class Concept<br/>Blueprint & Instance\"] --> B[\"🔐 Access Specifiers<br/>public / private / protected\"]\n    B --> C[\"📦 Member Functions<br/>Defined inside / outside\"]\n    C --> D[\"👉 this Pointer<br/>Implicit self-reference\"]\n    D --> E[\"🔒 const Member Functions<br/>Read-only guarantee\"]\n    E --> F[\"📊 Static Members<br/>Class-level data & functions\"]\n    F --> G[\"🤝 Friend Functions/Classes<br/>Controlled external access\"]\n    G --> H[\"📁 Nested Classes<br/>Scoped type definitions\"]\n    H --> I[\"🔄 mutable Keyword<br/>Exceptional modification in const\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-the-class-concept--blueprint-and-instance",
      children: "2.1 The Class Concept — Blueprint and Instance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "building blueprint"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architectural drawing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            }), " definition"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical structure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "object"
            }), " (instance)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rooms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doors/Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public member functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Electrical closet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor function"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A single blueprint can produce hundreds of identical buildings. Each building is independent — if you change the wallpaper in one building, the others are unaffected. Similarly, a class defines the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "structure and behavior"
      }), ", while each object has its ", (0,jsx_runtime.jsx)(_components.em, {
        children: "own copy"
      }), " of the data members."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-process",
      children: "Step-by-Step Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the entity"
        }), " — What real-world thing are you modeling? (Bank account, Employee, Student)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "List attributes"
        }), " — What data describes this entity? (balance, name, age)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "List behaviors"
        }), " — What operations can this entity perform? (deposit, withdraw, getName)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose visibility"
        }), " — Which data should be hidden (private) and which exposed (public)?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write the class definition"
        }), " — Combine attributes and behaviors into a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), " block"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instantiate objects"
        }), " — Create concrete instances in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the objects"
        }), " — Call member functions to interact with the objects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS BankAccount\n    PRIVATE:\n        string ownerName\n        double balance\n    \n    PUBLIC:\n        FUNCTION deposit(amount):\n            IF amount > 0 THEN\n                balance = balance + amount\n            END IF\n        END FUNCTION\n        \n        FUNCTION withdraw(amount):\n            IF amount > 0 AND amount <= balance THEN\n                balance = balance - amount\n                RETURN true\n            END IF\n            RETURN false\n        END FUNCTION\n        \n        FUNCTION getBalance():\n            RETURN balance\n        END FUNCTION\nEND CLASS\n\nFUNCTION main():\n    CREATE acc AS BankAccount\n    CALL acc.deposit(1000)\n    CALL acc.withdraw(250)\n    PRINT acc.getBalance()    // Output: 750\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass BankAccount {\nprivate:\n    std::string owner_name_;\n    double      balance_;\n\npublic:\n    // Constructor\n    BankAccount(const std::string& name, double initial_balance = 0.0)\n        : owner_name_(name), balance_(initial_balance) {}\n\n    void deposit(double amount) {\n        if (amount > 0) {\n            balance_ += amount;\n        }\n    }\n\n    bool withdraw(double amount) {\n        if (amount > 0 && amount <= balance_) {\n            balance_ -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    double get_balance() const {\n        return balance_;\n    }\n\n    std::string get_owner() const {\n        return owner_name_;\n    }\n};\n\nint main() {\n    BankAccount acc(\"Alice\", 500.0);\n    acc.deposit(1000.0);\n    std::cout << \"Owner: \" << acc.get_owner() << \"\\n\";\n    std::cout << \"Balance: $\" << acc.get_balance() << \"\\n\"; // $1500\n\n    if (acc.withdraw(250.0)) {\n        std::cout << \"Withdrew $250\\n\";\n    }\n    std::cout << \"Balance: $\" << acc.get_balance() << \"\\n\"; // $1250\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Owner: Alice\nBalance: $1500\nWithdrew $250\nBalance: $1250\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-layout-of-an-object",
      children: "Memory Layout of an Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an object is created, memory is allocated for all its ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-static"
      }), " data members. Member functions are stored once in the code segment and shared by all objects — they receive the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " pointer to know which object they're operating on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack (for object acc):\n+----------------------------+\n| owner_name_: \"Alice\"       |  ← 32 bytes (std::string)\n| balance_: 1250.0           |  ← 8 bytes (double)\n+----------------------------+\nTotal size: ~40 bytes (platform-dependent)\n\nCode Segment (shared):\n+----------------------------+\n| BankAccount::deposit()     |\n| BankAccount::withdraw()    |\n| BankAccount::get_balance() |\n| BankAccount::get_owner()   |\n+----------------------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Insight:"
      }), " Member functions do NOT occupy space in each object. Only data members contribute to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(ClassName)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object creation (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack pointer adjustment, constructor runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object creation (heap ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocation + constructor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access a data member via object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct offset from object base address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call a member function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer resolved at compile time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(ClassName)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum of member sizes + padding (compile-time constant)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity:"
      }), " O(n) where n = number of objects × size of each object. Each object is independent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-access-specifiers",
      children: "2.2 Access Specifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overview-table",
      children: "Overview Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Inside Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Derived Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Outside (Any Code)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: ["Default for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: ["Default for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "struct"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Default"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "house"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public"
        }), " — The front door, mailbox, doorbell. Anyone on the street can access these."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private"
        }), " — The master bedroom, safe, electrical panel. Only family members (the class itself) can access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protected"
        }), " — The guest bedroom, backyard. Family members (class) and extended family (derived classes) can access, but strangers cannot."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-explanation",
      children: "Detailed Explanation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        })
      }), " members are the implementation details. They can only be accessed by member functions and friend functions/classes of the same class. This is the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "strongest"
      }), " form of encapsulation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "protected"
        })
      }), " members are like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " with one relaxation: derived classes can access them. This supports controlled inheritance but still prevents external access."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        })
      }), " members form the interface contract. Once published, changing them can break all client code. Therefore, public interfaces should be designed carefully."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-demonstration",
      children: "Code Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass House {\nprivate:\n    double safe_deposit_;       // Only House can access\n\nprotected:\n    double guest_room_value_;   // House and derived classes can access\n\npublic:\n    std::string address_;       // Anyone can access\n\n    House(const std::string& addr, double safe_val, double guest_val)\n        : address_(addr), safe_deposit_(safe_val), guest_room_value_(guest_val) {}\n\n    // Private access is allowed inside the class\n    double get_total_wealth() const {\n        return safe_deposit_ + guest_room_value_;\n    }\n\n    // Public getter for private member\n    double get_safe_deposit() const {\n        return safe_deposit_;\n    }\n};\n\nclass Mansion : public House {\npublic:\n    Mansion(const std::string& addr, double safe_val, double guest_val)\n        : House(addr, safe_val, guest_val) {}\n\n    void show_guest_room() {\n        // ✅ OK: derived class can access protected member\n        std::cout << \"Guest room worth: $\" << guest_room_value_ << \"\\n\";\n    }\n\n    void try_show_safe() {\n        // ❌ ERROR: private member is not accessible\n        // std::cout << safe_deposit_;   // Would NOT compile\n    }\n};\n\nint main() {\n    House h(\"123 Main St\", 100000.0, 50000.0);\n\n    // Public access OK\n    std::cout << \"Address: \" << h.address_ << \"\\n\";\n\n    // Protected access ❌\n    // std::cout << h.guest_room_value_;  // ERROR: not accessible\n\n    // Private access ❌\n    // std::cout << h.safe_deposit_;      // ERROR: not accessible\n\n    // ✅ OK via public member function\n    std::cout << \"Total wealth: $\" << h.get_total_wealth() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Address: 123 Main St\nTotal wealth: $150000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-principle-of-least-privilege",
      children: "The Principle of Least Privilege"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Data members should almost always be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Helper/utility functions should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only the absolute minimum interface should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "protected"
        }), " only when you know derived classes will need direct access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Don't expose data members as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "public"
        }), " \"temporarily\" — it's very hard to make them private later without breaking all callers. Always start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), " and relax only when necessary."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class-vs-struct--extended-comparison",
      children: "class vs struct — Extended Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class ClassExample {\n    int x_;     // private by default\n};\n\nstruct StructExample {\n    int x_;     // public by default\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The only technical difference is the default access specifier:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types with invariants and private state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain data aggregates (POD types)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brace initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not possible with private members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with all-public members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BankAccount"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::pair"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Point"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Rectangle"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// struct for plain data — brace initialization works\nstruct Point {\n    double x;\n    double y;\n};\n\n// class for types with invariants\nclass Circle {\nprivate:\n    Point center_;\n    double radius_;\npublic:\n    Circle(double cx, double cy, double r) : center_{cx, cy}, radius_(r) {\n        if (r < 0) throw std::invalid_argument(\"Negative radius\");\n    }\n    double area() const { return 3.14159 * radius_ * radius_; }\n};\n\nint main() {\n    Point p = {3.0, 4.0};               // ✅ brace init for struct\n    // Circle c = {0, 0, 5};            // ❌ cannot brace-init class with private members\n    Circle c(0, 0, 5);                  // ✅ use constructor\n    std::cout << \"Area: \" << c.area() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Area: 78.5397\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-member-functions",
      children: "2.3 Member Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Member functions (also called ", (0,jsx_runtime.jsx)(_components.em, {
        children: "methods"
      }), ") are functions that belong to a class. They have direct access to all members (public, protected, private) of the class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-variations",
      children: "Syntax Variations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Demo {\nprivate:\n    int value_;\n\npublic:\n    // 1. Defined inside the class (implicitly inline)\n    void set_value(int v) {\n        value_ = v;\n    }\n\n    // 2. Declared inside, defined outside\n    int get_value() const;\n};\n\n// Definition outside the class\nint Demo::get_value() const {\n    return value_;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-member-functions",
      children: "Types of Member Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " Available?"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Can Access Static Members?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Can Access Non-static Members?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-static, non-const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-static, const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes (const*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes (read-only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inline-member-functions",
      children: "Inline Member Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Small functions (1-3 lines) defined inside the class body are implicitly ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inline"
      }), ". The compiler may expand them at the call site, eliminating function call overhead:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class FastMath {\npublic:\n    // Implicitly inline — compiler may expand this\n    int square(int x) { return x * x; }\n\n    // Not inline — defined outside\n    int cube(int x);\n};\n\nint FastMath::cube(int x) {\n    return x * x * x;   // Not implicitly inline\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to inline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Tiny getters/setters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Simple computations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Large functions (bloats code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Virtual functions (inlining is complex with vtable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
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
            children: "Non-inline member function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Standard call + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " parameter push"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inline member function expansion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No call overhead — code substituted directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual member function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra indirection through vtable (one extra pointer dereference)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static member function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as regular function call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space overhead of member function:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-virtual: 0 bytes per object (code is shared)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtual: 8 bytes per object (vtable pointer) on 64-bit systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "24-the-this-pointer",
      children: ["2.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " Pointer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "what-is-this",
      children: ["What Is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " is a keyword that evaluates to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "address of the current object"
      }), " inside a non-static member function. It's an implicit parameter that the compiler passes to every non-static member function call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "obj.member_function(args)\n    →  compiler translates to:  member_function(&obj, args)\n    →  inside:                  this = &obj\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implicit-vs-explicit-usage",
      children: "Implicit vs Explicit Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Example {\nprivate:\n    int value_;\npublic:\n    // ❌ Ambiguous — compiler thinks value is the parameter\n    void set_value_ambiguous(int value) {\n        value = value;   // Self-assignment! No effect\n    }\n\n    // ✅ Explicit this to disambiguate\n    void set_value(int value) {\n        this->value_ = value;   // this->value_ is the member\n    }\n\n    // ✅ Implicit this — member accessed without qualification\n    int get_value() const {\n        return value_;   // compiler treats as this->value_\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "method-chaining-with-this",
      children: ["Method Chaining with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " from mutator functions enables fluent interfaces:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass QueryBuilder {\nprivate:\n    std::string query_;\npublic:\n    QueryBuilder& select(const std::string& cols) {\n        query_ += \"SELECT \" + cols + \" \";\n        return *this;\n    }\n\n    QueryBuilder& from(const std::string& table) {\n        query_ += \"FROM \" + table + \" \";\n        return *this;\n    }\n\n    QueryBuilder& where(const std::string& condition) {\n        query_ += \"WHERE \" + condition + \" \";\n        return *this;\n    }\n\n    std::string build() const {\n        return query_ + \";\";\n    }\n};\n\nint main() {\n    QueryBuilder qb;\n    std::string sql = qb.select(\"name, age\")\n                        .from(\"users\")\n                        .where(\"age > 18\")\n                        .build();\n    std::cout << sql << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT name, age FROM users WHERE age > 18 ;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative without chaining:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "QueryBuilder qb;\nqb.select(\"name, age\");\nqb.from(\"users\");\nqb.where(\"age > 18\");\nstd::string sql = qb.build();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The chained version is more concise and readable, especially for builder patterns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "common-this-use-cases",
      children: ["Common ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " Use Cases"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disambiguate parameter from member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "this->member_ = member_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter shadows member"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Method chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return *this;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return reference to current object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass self to another function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "some_func(this);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External function needs object's address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compare objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (this == &other)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity check (same object?)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CRTP (Curiously Recurring Template Pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<Derived*>(this)->f()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static polymorphism"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compare-objects--identity-check",
      children: "Compare Objects — Identity Check"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Person {\nprivate:\n    std::string name_;\n    int age_;\npublic:\n    Person(const std::string& name, int age) : name_(name), age_(age) {}\n\n    bool is_same_person(const Person& other) const {\n        return this == &other;   // Address comparison\n    }\n\n    bool is_equal(const Person& other) const {\n        return name_ == other.name_ && age_ == other.age_;   // Value comparison\n    }\n};\n\nint main() {\n    Person a(\"Alice\", 30);\n    Person b(\"Alice\", 30);\n    Person& c = a;\n\n    std::cout << std::boolalpha;\n    std::cout << \"a is same as b: \" << a.is_same_person(b) << \"\\n\";  // false\n    std::cout << \"a equals b: \" << a.is_equal(b) << \"\\n\";            // true\n    std::cout << \"a is same as c: \" << a.is_same_person(c) << \"\\n\";  // true\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a is same as b: false\na equals b: true\na is same as c: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-static-members",
      children: "2.5 Static Members"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "company's break room"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each employee has their own desk (non-static member — per-object)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The break room fridge is shared by all employees (static member — per-class)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If someone puts food in the fridge, everyone can see it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If someone quits, the fridge stays — it doesn't belong to any single employee"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-data-members",
      children: "Static Data Members"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Employee {\nprivate:\n    std::string name_;\n    int id_;\n    static int next_id_;             // Declaration — shared by ALL employees\n    static inline int company_code_ = 1001;  // C++17 inline init — no .cpp needed\n\npublic:\n    Employee(const std::string& name) : name_(name) {\n        id_ = next_id_++;            // Each new employee gets a unique ID\n    }\n\n    int get_id() const { return id_; }\n    static int get_next_id() { return next_id_; }\n\n    static void set_company_code(int code) {\n        company_code_ = code;\n    }\n};\n\n// Definition in exactly ONE translation unit (pre-C++17 style)\nint Employee::next_id_ = 1000;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--static-variable-increment",
      children: "Dry Run — Static Variable Increment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's trace what happens as we create Employee objects:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial State:\n    next_id_ = 1000\n\nStep 1: Employee e1(\"Alice\")\n    id_ = next_id_++ → id_ = 1000, next_id_ = 1001\n    Object e1: { name_ = \"Alice\", id_ = 1000 }\n\nStep 2: Employee e2(\"Bob\")\n    id_ = next_id_++ → id_ = 1001, next_id_ = 1002\n    Object e2: { name_ = \"Bob\", id_ = 1001 }\n\nStep 3: Employee e3(\"Charlie\")\n    id_ = next_id_++ → id_ = 1002, next_id_ = 1003\n    Object e3: { name_ = \"Charlie\", id_ = 1002 }\n\nStatic Variable next_id_ now = 1003 (shared across all instances)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "e1.id_"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "e2.id_"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "e3.id_"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "next_id_ (static)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Employee e1(\"Alice\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1000"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1001"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Employee e2(\"Bob\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1002"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Employee e3(\"Charlie\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1003"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Employee::get_next_id()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1003"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "e1.get_next_id()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["Also returns ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1003"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-member-functions",
      children: "Static Member Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static member functions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Have ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " pointer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can only access ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "static"
        }), " data members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can be called on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "class"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ClassName::func()"
        }), ") or on an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "object"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "obj.func()"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cannot be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtual"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class MathUtils {\npublic:\n    static int add(int a, int b) { return a + b; }\n    static int multiply(int a, int b) { return a * b; }\n};\n\nint main() {\n    // Called on the class\n    std::cout << MathUtils::add(5, 3) << \"\\n\";        // 8\n    std::cout << MathUtils::multiply(4, 7) << \"\\n\";   // 28\n\n    MathUtils m;\n    // Also called on an object (though class-name is preferred)\n    std::cout << m.add(1, 2) << \"\\n\";                 // 3\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "static-vs-non-static--comparison-table",
      children: "static vs Non-static — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "static Member"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Non-static Member"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Belongs to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Object (instance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "One for the entire class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "One per object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ Not available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Available"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to static members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to non-static members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Static (program lifetime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Automatic (object lifetime)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Called on"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ClassName::member"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "obj.member"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "obj.member"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initialization"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["Outside class (pre-C++17) or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "inline"
            }), " (C++17)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Inside constructor or initializer list"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-static-members",
      children: "Complexity Analysis of Static Members"
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
            children: "Access static data member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory access (fixed address, no object needed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call static member function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Regular function call, no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " push"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access non-static member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset from object base address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compare: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "e1.get_id()"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Employee::get_next_id()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static call is slightly faster (one fewer parameter)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why static members exist:"
      }), " They model class-level concepts — counters, factories, configuration constants, singletons — that logically belong to the type, not to any particular instance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-friend-functions",
      children: "2.6 Friend Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "doctor"
      }), " and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pharmacy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The doctor (class) has your private medical records (private data)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The doctor can give a ", (0,jsx_runtime.jsx)(_components.em, {
          children: "prescription"
        }), " (friend declaration) to a specific pharmacy (friend function)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pharmacy can now access your records ONLY because the doctor authorized it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The pharmacy doesn't become part of the doctor's office — it's an external entity with special permission"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-friend-function",
      children: "What Is a Friend Function?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "friend function"
      }), " is a non-member function that has access to all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), " members of a class. Friendship is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "granted"
      }), " by the class, not taken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass BankAccount {\nprivate:\n    std::string owner_;\n    double balance_;\n\npublic:\n    BankAccount(const std::string& owner, double balance)\n        : owner_(owner), balance_(balance) {}\n\n    // Grant friendship to an external function\n    friend void display_account(const BankAccount& acc);\n};\n\n// Friend function definition — can access private members\nvoid display_account(const BankAccount& acc) {\n    std::cout << \"Owner: \" << acc.owner_ << \"\\n\";       // ✅ private\n    std::cout << \"Balance: $\" << acc.balance_ << \"\\n\";  // ✅ private\n}\n\nint main() {\n    BankAccount acc(\"Alice\", 5000.0);\n    display_account(acc);    // ✅ friend function can access private data\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Owner: Alice\nBalance: $5000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friend-function-with-two-classes",
      children: "Friend Function with Two Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the most powerful uses of friend functions is operating on objects of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two different classes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Rectangle;  // Forward declaration\n\nclass Square {\nprivate:\n    double side_;\npublic:\n    Square(double s) : side_(s) {}\n    friend double max_area(const Square& sq, const Rectangle& rect);\n};\n\nclass Rectangle {\nprivate:\n    double width_;\n    double height_;\npublic:\n    Rectangle(double w, double h) : width_(w), height_(h) {}\n    friend double max_area(const Square& sq, const Rectangle& rect);\n};\n\n// Friend function accessing private data of BOTH classes\ndouble max_area(const Square& sq, const Rectangle& rect) {\n    double sq_area = sq.side_ * sq.side_;               // ✅ Square::side_ (private)\n    double rect_area = rect.width_ * rect.height_;       // ✅ Rectangle::width_, height_ (private)\n    return (sq_area > rect_area) ? sq_area : rect_area;\n}\n\nint main() {\n    Square sq(5.0);\n    Rectangle rect(3.0, 10.0);\n    std::cout << \"Max area: \" << max_area(sq, rect) << \"\\n\";  // 30.0 (rectangle)\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Max area: 30\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friend-class",
      children: "Friend Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A complete class can be declared as a friend, giving all its member functions access:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nclass Employee {\nprivate:\n    std::string name_;\n    double salary_;\n\npublic:\n    Employee(const std::string& name, double salary)\n        : name_(name), salary_(salary) {}\n\n    friend class PayrollSystem;  // Entire PayrollSystem class is a friend\n};\n\nclass PayrollSystem {\nprivate:\n    double total_payroll_;\npublic:\n    PayrollSystem() : total_payroll_(0.0) {}\n\n    void process_salary(Employee& emp) {\n        // ✅ Can access private salary_ because PayrollSystem is a friend\n        total_payroll_ += emp.salary_;\n\n        // Apply tax deduction\n        emp.salary_ *= 0.8;  // 20% tax\n    }\n\n    void display_payslip(const Employee& emp) {\n        // ✅ Can access private name_ and salary_\n        std::cout << \"Employee: \" << emp.name_\n                  << \", Net Salary: $\" << emp.salary_ << \"\\n\";\n    }\n\n    double get_total_payroll() const { return total_payroll_; }\n};\n\nint main() {\n    Employee alice(\"Alice\", 50000);\n    Employee bob(\"Bob\", 60000);\n\n    PayrollSystem payroll;\n    payroll.process_salary(alice);\n    payroll.process_salary(bob);\n\n    payroll.display_payslip(alice);\n    payroll.display_payslip(bob);\n    std::cout << \"Total company payroll: $\" << payroll.get_total_payroll() << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Employee: Alice, Net Salary: $40000\nEmployee: Bob, Net Salary: $48000\nTotal company payroll: $110000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--friend-function-access",
      children: "Dry Run — Friend Function Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_area(sq, rect)"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sq.side_ = 5.0"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rect.width_ = 3.0"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rect.height_ = 10.0"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code Executed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Square::side_"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rectangle::width_"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Rectangle::height_"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sq_area = sq.side_ * sq.side_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.0 (read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "sq_area = 25.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rect_area = rect.width_ * rect.height_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.0 (read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10.0 (read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "rect_area = 30.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return sq_area > rect_area ? sq_area : rect_area"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["30.0 > 25.0 → return ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "30.0"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observation:"
      }), " Without friendship, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_area()"
      }), " could only access public members. With friendship, it reads private members of both classes directly, avoiding the need for public getters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "important-rules-of-friendship",
      children: "Important Rules of Friendship"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Friendship is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "granted"
            }), ", not taken"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The class decides who its friends are; friend functions don't declare themselves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Friendship is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not mutual"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If class A is a friend of class B, class B is NOT automatically a friend of class A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Friendship is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not inherited"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If class A is a friend of class B, a class derived from A is NOT a friend of B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Friendship is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not transitive"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If A is a friend of B, and B is a friend of C, A is NOT a friend of C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Friend declaration can be anywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually placed at the top of the class (in the private section)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of friends is unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "But too many friends weakens encapsulation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "friend-function-vs-member-function--comparison",
      children: "friend Function vs Member Function — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "friend Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Member Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to private members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes (if declared friend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Called with object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "func(obj)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "obj.func()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes (if non-static)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes (it's a regular function)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric binary ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Natural"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["❌ Needs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const&"
            }), " for left operand"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation impact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Moderate (controlled breach)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "None (inside the class)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Override in derived class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "❌ Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "✅ Yes (if virtual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Not inherited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Inherited normally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use friend over member:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary operators"
        }), " where the left operand is not of your class (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator<<(std::ostream&, const Class&)"
        }), " must be a friend or non-member)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric operations"
        }), " between two different classes (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max_area(Square, Rectangle)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "When the function doesn't logically belong to the class"
        }), " but needs private access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Complex {\nprivate:\n    double real_;\n    double imag_;\npublic:\n    Complex(double r, double i) : real_(r), imag_(i) {}\n\n    // Member function — left operand must be Complex\n    Complex operator+(const Complex& other) const {\n        return Complex(real_ + other.real_, imag_ + other.imag_);\n    }\n\n    // Friend — can handle non-Complex left operand\n    friend Complex operator*(double scalar, const Complex& c) {\n        return Complex(scalar * c.real_, scalar * c.imag_);\n    }\n\n    // Friend for output stream\n    friend std::ostream& operator<<(std::ostream& os, const Complex& c) {\n        os << c.real_ << \" + \" << c.imag_ << \"i\";\n        return os;\n    }\n};\n\nint main() {\n    Complex a(3.0, 4.0);\n    Complex b(1.0, 2.0);\n    std::cout << \"a + b = \" << (a + b) << \"\\n\";       // member\n    std::cout << \"5 * a = \" << (5.0 * a) << \"\\n\";     // friend (scalar first!)\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b = 4 + 6i\n5 * a = 15 + 20i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-nested-classes",
      children: "2.7 Nested Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nested class"
      }), " is a class defined inside another class. It's scoped within the enclosing class and can access its private members (if the enclosing class grants access)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "car"
      }), " has an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "engine"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The engine is part of the car (nested)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The engine doesn't exist independently outside the context of the car"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The engine can access the car's internal systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "But from outside the car, you talk about \"Car::Engine\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-and-access-rules",
      children: "Syntax and Access Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass Car {\nprivate:\n    std::string model_;\n    int fuel_level_;  // 0-100\n\npublic:\n    Car(const std::string& model, int fuel)\n        : model_(model), fuel_level_(fuel) {}\n\n    // Nested class\n    class Engine {\n    private:\n        int horsepower_;\n        bool is_running_;\n    public:\n        Engine(int hp) : horsepower_(hp), is_running_(false) {}\n\n        void start() {\n            is_running_ = true;\n            std::cout << \"Engine (\" << horsepower_ << \" HP) started\\n\";\n        }\n        void stop() {\n            is_running_ = false;\n            std::cout << \"Engine stopped\\n\";\n        }\n        int get_horsepower() const { return horsepower_; }\n        bool running() const { return is_running_; }\n    };\n\n    // Use the nested class\n    Engine engine_;\n\n    void drive() {\n        engine_.start();\n        std::cout << model_ << \" is driving\\n\";\n    }\n};\n\nint main() {\n    Car my_car(\"Tesla Model 3\", 80);\n    // Access nested class type\n    Car::Engine motor(450);  // ✅ Nested class used outside\n\n    my_car.drive();\n    motor.stop();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Engine (450 HP) started\nTesla Model 3 is driving\nEngine stopped\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nested-class-access-rules",
      children: "Nested Class Access Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enclosing class → nested class member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use nested class name or object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested class → enclosing class private"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["❌ By default, cannot access enclosing class's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " or private members"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested class → enclosing class private (if granted friend)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External scope"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Referred to as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "OuterClass::NestedClass"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Nested class can be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes — hidden from external code entirely"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Outer {\nprivate:\n    int secret_;\n\n    // Private nested class — invisible outside Outer\n    class InternalHelper {\n    public:\n        void do_work(Outer& o) {\n            // ❌ Cannot access Outer::secret_ by default\n            // Need friendship\n        }\n    };\n\npublic:\n    class PublicNested {\n    public:\n        void show(const Outer& o) {\n            // ❌ Also cannot access secret_\n        }\n    };\n};\n\n// main() can use PublicNested but NOT InternalHelper\nint main() {\n    Outer::PublicNested pn;   // ✅ OK\n    // Outer::InternalHelper ih;  // ❌ ERROR: private\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visibility-hierarchy",
      children: "Visibility Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Outer {\npublic:\n    class PublicNested {};       // Accessible everywhere\nprotected:\n    class ProtectedNested {};    // Accessible in Outer and derived classes\nprivate:\n    class PrivateNested {};      // Accessible only inside Outer\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "28-const-member-functions--deep-dive",
      children: ["2.8 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " Member Functions — Deep Dive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-core-concept",
      children: "The Core Concept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " member function promises ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not to modify the object's logical state"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " keyword is placed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "after"
      }), " the parameter list:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Widget {\npublic:\n    int get_value() const;   // Const member function\n    void set_value(int v);   // Non-const member function\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "what-const-actually-does",
      children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " Actually Does"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void func() const"
      }), ", the compiler treats ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const Widget* const"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Without const:  this  is  Widget* const      (pointer is const, object is mutable)\n// With const:     this  is  const Widget* const (pointer is const, object is const too)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This means inside a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " member function:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ You can ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "read"
        }), " all data members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ You cannot ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "write"
        }), " to any data member"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ You cannot call non-", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " member functions on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ You can call other ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " member functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ You can ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "write"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " members (they don't belong to the object)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ You can ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "write"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mutable"
        }), " members (special exception)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-const-correctness-matters",
      children: "Why const-Correctness Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Student {\nprivate:\n    std::string name_;\n    double gpa_;\npublic:\n    Student(const std::string& name, double gpa) : name_(name), gpa_(gpa) {}\n\n    // Read access — const\n    std::string get_name() const { return name_; }\n    double get_gpa() const { return gpa_; }\n\n    // Write access — non-const\n    void set_gpa(double gpa) { gpa_ = gpa; }\n};\n\nvoid print_student(const Student& s) {\n    // s is a const reference — can ONLY call const functions\n    std::cout << s.get_name() << \": \" << s.get_gpa() << \"\\n\";  // ✅ OK\n    // s.set_gpa(4.0);  // ❌ ERROR: cannot call non-const on const reference\n}\n\nint main() {\n    Student s(\"Alice\", 3.8);\n    print_student(s);       // ✅ OK — const ref binds to non-const object\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "const-and-non-const-overloads",
      children: "const and Non-const Overloads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can provide ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "both"
      }), " versions — the compiler selects the right one based on whether the object is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nclass Matrix2x2 {\nprivate:\n    int data_[4];  // [0,0], [0,1], [1,0], [1,1]\npublic:\n    Matrix2x2(int a, int b, int c, int d) : data_{a, b, c, d} {}\n\n    // Non-const: returns reference — allows modification\n    int& operator()(int row, int col) {\n        std::cout << \"non-const operator() called\\n\";\n        return data_[row * 2 + col];\n    }\n\n    // Const: returns const reference — read-only\n    const int& operator()(int row, int col) const {\n        std::cout << \"const operator() called\\n\";\n        return data_[row * 2 + col];\n    }\n};\n\nvoid inspect(const Matrix2x2& m) {\n    std::cout << m(0, 0) << \"\\n\";  // calls const version\n}\n\nint main() {\n    Matrix2x2 m(1, 2, 3, 4);\n\n    // Non-const object can call both\n    m(0, 0) = 10;               // calls non-const → modifies\n    std::cout << m(0, 0) << \"\\n\"; // calls non-const (non-const object, read)\n\n    const Matrix2x2 cm(5, 6, 7, 8);\n    // cm(0, 0) = 99;           // ❌ ERROR: const object, returns const ref\n    std::cout << cm(0, 0) << \"\\n\"; // calls const version\n\n    inspect(m);                  // calls const version\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "non-const operator() called\nnon-const operator() called\n10\nconst operator() called\n5\nconst operator() called\n1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "what-const-does-not-guarantee",
      children: ["What ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " Does NOT Guarantee"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Common Misconception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reality"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"const function guarantees thread safety\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No — mutable members can be modified, causing data races"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"const function makes all members const\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["❌ No — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            }), " members bypass const"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"const function is enforced at runtime\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No — compile-time enforcement only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"const object can call any function\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No — can only call const member functions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "the-mutable-keyword",
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " allows a data member to be modified even inside a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " member function. Use it for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching"
        }), " — Lazily computed values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutexes"
        }), " — Thread synchronization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference counting"
        }), " — Internal bookkeeping"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging"
        }), " — Debug counters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass CachedData {\nprivate:\n    std::string raw_data_;\n    mutable bool cache_valid_;   // Can be modified in const functions\n    mutable std::string cache_;\n    mutable int access_count_;   // Track read frequency\n\npublic:\n    CachedData(const std::string& data)\n        : raw_data_(data), cache_valid_(false), access_count_(0) {}\n\n    // const member function — but modifies cache\n    std::string get_processed() const {\n        ++access_count_;  // ✅ OK — mutable\n        if (!cache_valid_) {\n            // Expensive computation\n            cache_ = \"[[PROCESSED]] \" + raw_data_ + \" [[END]]\";\n            cache_valid_ = true;   // ✅ OK — mutable\n        }\n        return cache_;\n    }\n\n    int get_access_count() const {\n        return access_count_;  // ✅ OK — mutable\n    }\n\n    // Force cache refresh\n    void refresh() {\n        cache_valid_ = false;  // Non-const — naturally modifies\n    }\n};\n\nint main() {\n    const CachedData cd(\"Hello World\");  // const object\n\n    std::cout << cd.get_processed() << \"\\n\";  // Computes and caches\n    std::cout << cd.get_processed() << \"\\n\";  // Uses cache\n    std::cout << \"Accessed \" << cd.get_access_count() << \" times\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[[PROCESSED]] Hello World [[END]]\n[[PROCESSED]] Hello World [[END]]\nAccessed 2 times\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mutable--dry-run",
      children: "Mutable — Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Counter {\nprivate:\n    mutable int debug_count_;\n    int value_;\npublic:\n    Counter() : debug_count_(0), value_(0) {}\n    int get_value() const {\n        ++debug_count_;    // ✅ mutable\n        return value_;\n    }\n    void increment() { ++value_; }\n};\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "debug_count_ (mutable)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "value_"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Counter c;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.increment()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.get_value()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.get_value()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const Counter& ref = c;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ref.get_value()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ref.get_value()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observation:"
      }), " Even through a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " reference, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "debug_count_"
      }), " (mutable) increments. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get_value()"
      }), " function is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), ", but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " provides the exception."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "const-correctness-rules-summary",
      children: "const Correctness Rules Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Rules {\nprivate:\n    int normal_;\n    mutable int mutable_;\n    static int static_;\npublic:\n    // const function: can read normal_, read/write mutable_, read/write static_\n    int reader() const {\n        // normal_ = 5;        // ❌ ERROR\n        mutable_ = 5;          // ✅\n        static_ = 5;           // ✅ (static doesn't belong to object)\n        return normal_;\n    }\n\n    // non-const function: read/write everything\n    void writer() {\n        normal_ = 5;           // ✅\n        mutable_ = 5;          // ✅\n        static_ = 5;           // ✅\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-const-member-functions",
      children: "Complexity Analysis of const Member Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adding ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " to a function"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — no runtime cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time check only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calling a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " function"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as non-const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No extra instructions generated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mutable member access in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as normal access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compiler checking ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " violations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans function body for writes to non-mutable members"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " Zero overhead — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " is purely a compile-time concept."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-advanced-topics--putting-it-all-together",
      children: "2.9 Advanced Topics — Putting It All Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logger-with-static-counter-and-friend-access",
      children: "Logger with Static Counter and Friend Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nclass Logger {\nprivate:\n    static inline int log_count_ = 0;\n    static inline std::string app_name_ = \"DefaultApp\";\n    mutable int local_index_;\n    std::vector<std::string> local_logs_;\n\npublic:\n    Logger() : local_index_(0) {}\n\n    static void set_app_name(const std::string& name) {\n        app_name_ = name;\n    }\n\n    void log(const std::string& msg) {\n        ++log_count_;\n        local_logs_.push_back(\"[\" + app_name_ + \"][\" + std::to_string(log_count_) + \"] \" + msg);\n    }\n\n    void show_logs() const {\n        ++local_index_;  // mutable\n        std::cout << \"=== Logs (view \" << local_index_ << \") ===\\n\";\n        for (const auto& entry : local_logs_) {\n            std::cout << entry << \"\\n\";\n        }\n    }\n\n    static int get_log_count() { return log_count_; }\n\n    friend void emergency_dump(const Logger& l);\n};\n\nvoid emergency_dump(const Logger& l) {\n    std::cout << \"EMERGENCY — \" << l.local_logs_.size() << \" entries\\n\";\n    for (const auto& entry : l.local_logs_) {\n        std::cout << \"[EMERGENCY] \" << entry << \"\\n\";\n    }\n}\n\nint main() {\n    Logger::set_app_name(\"MyApp\");\n\n    Logger l1, l2;\n    l1.log(\"User logged in\");\n    l1.log(\"File opened\");\n    l2.log(\"System initialized\");\n\n    l1.show_logs();\n    std::cout << \"Total logs: \" << Logger::get_log_count() << \"\\n\";\n\n    emergency_dump(l1);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Logs (view 1) ===\n[MyApp][1] User logged in\n[MyApp][2] File opened\n=== Logs (view 2) ===\n[MyApp][1] User logged in\n[MyApp][2] File opened\nTotal logs: 3\nEMERGENCY — 2 entries\n[EMERGENCY] [MyApp][1] User logged in\n[EMERGENCY] [MyApp][2] File opened\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-interview-corner",
      children: "2.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q1-explain-the-this-pointer-when-must-you-use-it-explicitly",
      children: ["Q1: Explain the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " pointer. When must you use it explicitly?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " pointer is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implicit parameter"
      }), " available in all non-static member functions. It holds the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "address of the object"
      }), " on which the function was called. Its type is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassName*"
      }), " in non-const functions and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const ClassName*"
      }), " in const functions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this->"
      }), " explicitly in these scenarios:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Parameter name shadows member name:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "void set_id(int id) { this->id = id; }  // this->id is the member; id is the parameter\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Return the current object for method chaining:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "Builder& add(int x) { /* ... */ return *this; }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pass the current object to an external function:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "void register_self(Container& c) { c.add(this); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Compare object identity (same object?):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "bool is_me(const MyClass& other) const { return this == &other; }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolve name in derived class with shadowing:"
          }), "\nIf a derived class declares a function that hides a base class member, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "this->"
          }), " can help resolve (though ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Base::"
          }), " is cleaner)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common interview follow-up:"
      }), " \"What is the type of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " inside a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " member function of class ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Foo"
      }), "?\" → Answer: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const Foo*"
      }), " (pointer to const Foo). The object cannot be modified through this pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q2-what-is-the-difference-between-class-and-struct-in-c-are-they-identical",
      children: ["Q2: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "struct"
      }), " in C++? Are they identical?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "struct"
      }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "almost identical"
      }), " — the C++ standard treats them the same way. There are only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two"
      }), " differences:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "struct"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class C { int x; };    // x is PRIVATE\nstruct S { int x; };    // x is PUBLIC\n\nclass DerivedC : C { };     // inheritance is PRIVATE\nstruct DerivedS : S { };    // inheritance is PUBLIC\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convention"
      }), " (not enforced by the compiler):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct"
        }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "plain data aggregates"
        }), " — no invariants, all members public, no private data, no virtual functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "types with invariants"
        }), " — private data, public interface, constructors enforce validity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// struct — plain data, no invariants\nstruct Point { double x; double y; };\n\n// class — invariant: balance_ must never be negative\nclass BankAccount {\nprivate:\n    double balance_;\npublic:\n    void deposit(double amt) { if (amt > 0) balance_ += amt; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trick question:"
      }), " \"Can you have a class with all public members and a struct with private members?\" → Yes, absolutely. The only difference is the default."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-can-a-const-member-function-modify-an-object-explain-with-mutable",
      children: ["Q3: Can a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " member function modify an object? Explain with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " member function ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot"
      }), " modify the object's data members. The compiler treats ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), ", making all direct writes to non-static members illegal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "However"
      }), ", there are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three exceptions"
      }), " where modification is possible:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mutable"
            }), " data members"]
          }), " — explicitly designed for modification in const contexts:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "class Cache {\n    mutable bool dirty_;\n    mutable std::string cached_;\npublic:\n    std::string get_data() const {\n        if (dirty_) { cached_ = compute(); dirty_ = false; }\n        return cached_;\n    }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Static data members"
          }), " — they don't belong to the object:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "class Logger {\n    static inline int call_count_ = 0;\npublic:\n    void log() const {\n        ++call_count_;  // OK — static, not part of *this\n    }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Data members accessed through a pointer/reference"
          }), " (shallow const):"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "class Wrapper {\n    int* ptr_;\npublic:\n    void set_ptr_value(int v) const {\n        *ptr_ = v;  // OK — the pointed-to memory is not const\n        // ptr_ = nullptr;  // ❌ ERROR: ptr_ itself is const\n    }\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview insight:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " qualifier provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bitwise const"
      }), " (the object's bits don't change) by default, but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mutable"
      }), " enables ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logical const"
      }), " (the object's observable state appears unchanged, even if internal bits change). Caching and mutexes are the canonical use cases for logical const."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-static-members-work-can-static-member-functions-access-non-static-members",
      children: "Q4: How do static members work? Can static member functions access non-static members?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static data members:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One copy exists for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "entire class"
        }), ", shared by all objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must be defined outside the class (pre-C++17) or declared ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inline"
        }), " (C++17+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stored in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "data segment"
        }), " (not on stack or heap), existing for program lifetime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can be accessed via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ClassName::member"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "object.member"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static member functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Belong to the class, not to any instance"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Have ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["no ", (0,jsx_runtime.jsx)(_components.code, {
            children: "this"
          }), " pointer"]
        }), " — this is the critical point"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot access non-static members"
        }), " directly (because there's no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " to resolve which object's member)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Demo {\n    int x_;              // non-static — belongs to objects\n    static int count_;   // static — belongs to class\npublic:\n    static void s_func() {\n        // count_ = 5;      // ✅ OK — count_ is static\n        // x_ = 5;          // ❌ ERROR — which x_? No this pointer!\n    }\n    void ns_func() {\n        x_ = 5;             // ✅ OK — this->x_\n        count_ = 5;         // ✅ OK — Demo::count_\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why the restriction makes sense:"
      }), " If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s_func()"
      }), " could access ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x_"
      }), ", which object's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x_"
      }), " would it modify? Static functions can be called without any object existing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Demo::s_func();  // No Demo object exists — accessing x_ would be impossible\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common interview question:"
      }), " \"Can a non-static member function access a static member?\" → Yes. Non-static functions have ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), ", but they also have access to the class scope, so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassName::static_member"
      }), " works perfectly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-friend-functions-vs-member-functions--when-to-use-each",
      children: "Q5: Friend functions vs member functions — when to use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose Member Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose Friend Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Left operand is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " class"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Awkward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left operand is NOT this class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Can't work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric binary operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Loses symmetry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator<<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator>>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["❌ Left is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ostream"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Needs virtual dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Needs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            }), " pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Needs private access of ONE class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Also yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Needs private access of MULTIPLE classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Can't"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Perfect"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " If the function operates primarily on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " object, make it a member. If it operates symmetrically on two or more objects (or the first argument isn't your class), make it a friend or free function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Rational {\n    int num_, den_;\npublic:\n    Rational(int n, int d = 1) : num_(n), den_(d) {}\n\n    // Member: left operand is Rational\n    Rational operator+(const Rational& r) const {\n        return Rational(num_ * r.den_ + r.num_ * den_, den_ * r.den_);\n    }\n\n    // Friend: left operand is int — cannot be a member\n    friend Rational operator+(int lhs, const Rational& rhs) {\n        return Rational(lhs * rhs.den_ + rhs.num_, rhs.den_);\n    }\n\n    // Friend: output stream — first argument is ostream\n    friend std::ostream& operator<<(std::ostream& os, const Rational& r) {\n        os << r.num_ << \"/\" << r.den_;\n        return os;\n    }\n};\n\nint main() {\n    Rational r(3, 4);\n    std::cout << r << \"\\n\";          // 3/4\n    std::cout << (r + Rational(1,2)) << \"\\n\";  // 5/4 — member\n    std::cout << (2 + r) << \"\\n\";    // 11/4 — friend\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3/4\n5/4\n11/4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-size-of-an-empty-class-in-c-why",
      children: "Q6: What is the size of an empty class in C++? Why?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An empty class has a size of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1 byte"
      }), " (not 0)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Empty {};\nstd::cout << sizeof(Empty);  // Output: 1 (on most compilers)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 1 byte?"
      }), " The C++ standard requires that different objects must have different addresses. If the size were 0, then:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Empty a, b;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), " would occupy the same address, violating the uniqueness requirement. So the compiler inserts a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dummy byte"
      }), " to ensure each object has a unique address."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " When an empty class is used as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "base class"
      }), ", the empty base optimization (EBO) can eliminate this byte:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {};\nclass Derived : Base {\n    int x;\n};\n// sizeof(Derived) == sizeof(int)  // Empty base doesn't add size\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " \"Can you have a zero-size array?\" → No, C++ forbids zero-size arrays. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int arr[0];"
      }), " is a compiler error (though some compilers allow it as an extension for GCC's struct hack)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-can-you-call-a-virtual-function-from-a-constructor-or-destructor-what-about-from-a-const-member-function",
      children: "Q7: Can you call a virtual function from a constructor or destructor? What about from a const member function?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "From a constructor/destructor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YES, you can call a virtual function, but it does NOT behave polymorphically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["During construction, the vtable points to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "currently-being-constructed"
        }), " class, not the most derived class"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During destruction, the vtable reverts as each destructor completes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    Base() { print(); }     // Calls Base::print(), NOT Derived::print()\n    virtual void print() const { std::cout << \"Base\\n\"; }\n};\nclass Derived : public Base {\npublic:\n    Derived() : Base() { print(); }  // Calls Derived::print()\n    void print() const override { std::cout << \"Derived\\n\"; }\n};\nint main() {\n    Derived d;\n    // Output:\n    //   Base       (from Base constructor)\n    //   Derived    (from Derived constructor)\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "From a const member function:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YES, you can call a virtual function"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " qualifier affects ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), ", not the vtable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["However, the called virtual function must itself be callable through the const pointer — it must be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " compatible"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q8-what-is-the-difference-between-private-inheritance-and-composition",
      children: ["Q8: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " inheritance and composition?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a classic \"prefer composition over inheritance\" question."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Private Inheritance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Composition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Is-implemented-in-terms-of\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Has-a\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to protected members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can override virtual functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tight coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Weak"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reusability of component"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Restricted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Independent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interface exposure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base interface is hidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only exposed members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred when"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need protected access or virtual override"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everything else"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Composition — \"has a\"\nclass Engine { public: void start(); };\nclass Car {\n    Engine engine_;  // Car HAS-A Engine\npublic:\n    void drive() { engine_.start(); }\n};\n\n// Private inheritance — \"is implemented in terms of\"\nclass Timer { public: virtual void on_tick(); };\nclass Stopwatch : private Timer {\n    // Stopwatch is implemented in terms of Timer\n    void on_tick() override { /* ... */ }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Prefer composition. Use private inheritance only when you need to access ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), " members or override ", (0,jsx_runtime.jsx)(_components.code, {
        children: "virtual"
      }), " functions of the base class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-applications-in-real-systems",
      children: "2.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1-stdstring--a-well-designed-class",
      children: ["1. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), " — A Well-Designed Class"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The C++ Standard Library ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), " is a textbook example of class design:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Simplified model of std::string's class design\nclass string {\nprivate:\n    char* data_;        // Dynamic array of characters\n    size_t size_;       // Current length\n    size_t capacity_;   // Allocated capacity\n    // ...\npublic:\n    // Const member functions — safe for const objects\n    size_t size() const noexcept;\n    const char* c_str() const noexcept;\n    const char& at(size_t pos) const;   // const overload\n    char& at(size_t pos);                // non-const overload\n\n    // Static member\n    static const size_t npos = -1;       // Sentinel for \"not found\"\n\n    // Friend: operator<< needs access to private data_\n    friend std::ostream& operator<<(std::ostream& os, const string& s);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Design lessons from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::string"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All read-only operations (", (0,jsx_runtime.jsx)(_components.code, {
          children: "size()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c_str()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator[] const"
        }), ") are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provides both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and non-", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator[]"
        }), " overloads"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " constant ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npos"
        }), " for class-level sentinel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Friend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator<<"
        }), " for output functionality"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hides dynamic memory management behind a clean interface"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-gui-widget-hierarchy-qt-inspired",
      children: "2. GUI Widget Hierarchy (Qt-inspired)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\n// Base class for all GUI widgets\nclass Widget {\nprivate:\n    int x_, y_, width_, height_;\n    bool visible_;\n    static inline int widget_count_ = 0;\n\nprotected:\n    std::string id_;\n\npublic:\n    Widget(const std::string& id, int x, int y, int w, int h)\n        : id_(id), x_(x), y_(y), width_(w), height_(h), visible_(true) {\n        ++widget_count_;\n    }\n\n    virtual ~Widget() { --widget_count_; }\n\n    // Const getters\n    int get_x() const { return x_; }\n    int get_y() const { return y_; }\n    int get_width() const { return width_; }\n    int get_height() const { return height_; }\n    std::string get_id() const { return id_; }\n\n    // Non-const setters with chaining\n    Widget& move(int x, int y) { x_ = x; y_ = y; return *this; }\n    Widget& resize(int w, int h) { width_ = w; height_ = h; return *this; }\n    Widget& show() { visible_ = true; return *this; }\n    Widget& hide() { visible_ = false; return *this; }\n    bool is_visible() const { return visible_; }\n\n    // Static member for global tracking\n    static int get_widget_count() { return widget_count_; }\n\n    // Pure virtual interface\n    virtual void draw() const = 0;\n\n    // Friend for debugging\n    friend std::ostream& operator<<(std::ostream& os, const Widget& w) {\n        os << \"Widget[\" << w.id_ << \"] at (\" << w.x_ << \",\" << w.y_\n           << \") size \" << w.width_ << \"x\" << w.height_;\n        return os;\n    }\n};\n\nint Widget::widget_count_ = 0;\n\n// Concrete widget: Button\nclass Button : public Widget {\nprivate:\n    std::string label_;\n    mutable bool hovered_;  // Tracks hover state for rendering\n\npublic:\n    Button(const std::string& id, const std::string& label, int x, int y, int w, int h)\n        : Widget(id, x, y, w, h), label_(label), hovered_(false) {}\n\n    void set_label(const std::string& label) { label_ = label; }\n    std::string get_label() const { return label_; }\n\n    void draw() const override {\n        // hovered_ can be modified even though draw() is const\n        // (This would normally be updated by the event loop, but demonstrates mutable)\n        std::cout << \"[\" << (hovered_ ? \"HOVERED\" : \"NORMAL\") << \"] \"\n                  << label_ << \"\\n\";\n    }\n\n    // Mutable modifier for event system\n    void set_hovered(bool h) const { hovered_ = h; }\n};\n\n// Concrete widget: TextBox\nclass TextBox : public Widget {\nprivate:\n    std::string text_;\npublic:\n    TextBox(const std::string& id, int x, int y, int w, int h)\n        : Widget(id, x, y, w, h) {}\n\n    void set_text(const std::string& t) { text_ = t; }\n    std::string get_text() const { return text_; }\n\n    void draw() const override {\n        std::cout << \"[TEXTBOX] \" << text_ << \"\\n\";\n    }\n};\n\nint main() {\n    auto* btn = new Button(\"btn1\", \"Click Me\", 10, 10, 100, 30);\n    auto* txt = new TextBox(\"txt1\", 10, 50, 200, 30);\n\n    txt->set_text(\"Hello, World!\");\n\n    std::vector<Widget*> widgets = {btn, txt};\n    for (const auto& w : widgets) {\n        w->draw();\n    }\n\n    std::cout << \"Active widgets: \" << Widget::get_widget_count() << \"\\n\";\n\n    // Method chaining\n    btn->move(20, 20).resize(120, 40).show();\n\n    std::cout << *btn << \"\\n\";  // Friend operator<<\n\n    delete btn;\n    delete txt;\n    std::cout << \"Widgets remaining: \" << Widget::get_widget_count() << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[NORMAL] Click Me\n[TEXTBOX] Hello, World!\nActive widgets: 2\nWidget[btn1] at (20,20) size 120x40\nWidgets remaining: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design patterns demonstrated:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation"
        }), " — Private position/size data with controlled access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static member"
        }), " — Global widget count tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutable"
        }), " — Hover state in const draw function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Const correctness"
        }), " — All getters marked const"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method chaining"
        }), " — Fluent interface for property setting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Friend function"
        }), " — operator<< for debugging output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Polymorphism"
        }), " — Virtual draw() for different widget types"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-smart-pointer-stdunique_ptr-internals",
      children: "3. Smart Pointer (std::unique_ptr Internals)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The standard library ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::unique_ptr"
      }), " uses a static member approach for the deleter and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " pointer for ownership transfer:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nclass UniquePtr {\nprivate:\n    T* ptr_;\npublic:\n    explicit UniquePtr(T* p = nullptr) : ptr_(p) {}\n    ~UniquePtr() { delete ptr_; }\n\n    // Move semantics — transfer ownership\n    UniquePtr(UniquePtr&& other) noexcept : ptr_(other.ptr_) {\n        other.ptr_ = nullptr;      // Transfer via this->ptr_ = other.ptr_ then other.ptr_ = null\n    }\n\n    T& operator*() const { return *ptr_; }\n    T* operator->() const { return ptr_; }\n    T* get() const { return ptr_; }\n\n    // Release ownership\n    T* release() {\n        T* temp = ptr_;\n        ptr_ = nullptr;\n        return temp;\n    }\n\n    // Reset to new pointer\n    void reset(T* p = nullptr) {\n        delete ptr_;\n        ptr_ = p;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-embedded-systems-register-map",
      children: "4. Embedded Systems Register Map"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In embedded systems, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "struct"
      }), " is used to map hardware registers:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Hardware register map for a UART peripheral\nstruct UARTRegisters {\n    volatile uint32_t DR;        // Data Register      (offset 0x00)\n    volatile uint32_t SR;        // Status Register     (offset 0x04)\n    volatile uint32_t CR;        // Control Register    (offset 0x08)\n    static constexpr uint32_t SR_TXE = 1 << 7;   // Transmit empty flag\n    static constexpr uint32_t SR_RXNE = 1 << 5;  // Receive not empty\n};\n\n// Memory-mapped UART at fixed address\nvolatile UARTRegisters* const uart1 =\n    reinterpret_cast<UARTRegisters*>(0x40011000);\n\nvoid send_char(char c) {\n    while (!(uart1->SR & UARTRegisters::SR_TXE)) { /* wait */ }\n    uart1->DR = c;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "struct"
      }), " for the register map (public by default) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static constexpr"
      }), " for bit-field flags — perfectly matching the embedded domain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "212-summary--key-takeaways",
      children: "2.12 Summary — Key Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Core Idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blueprint for objects; encapsulates data + behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Name { /* members */ };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Specifiers"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Control visibility: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "private"
            }), " (class only), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " (+derived), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "public"
            }), " (everyone)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three sections in class body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Member Functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions operating on object's data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void func() const;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "this"
              }), " Pointer"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit address of current object; enables disambiguation and chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return *this;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "const"
              }), " Member Function"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise not to modify object's logical state; enables const-correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void get() const { }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mutable"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception to const — allows modification in const functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mutable int counter_;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Static Members"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Belong to class, not instance; one copy shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static int count_;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Friend Function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External function granted private access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "friend void f(Class&);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Friend Class"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire class granted private access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "friend class Other;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested Class"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class defined inside another class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class Outer { class Inner {}; };"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "213-chapter-exercises",
      children: "2.13 Chapter Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default access specifier for members of a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), "? For a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why should data members generally be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "private"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In what scenarios must you explicitly use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this->"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " member function and a non-const one? Can a const function ever modify data?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does a static member function differ from a non-static one in terms of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " and member access?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mutable"
        }), " do? Give two legitimate use cases."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can a friend function be inherited? Can friendship be transitive?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the size of an empty class? Why isn't it zero?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do nested classes scope differently from standalone classes?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct"
        }), " preferred over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class"
        }), " for plain data aggregates?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "coding-problems",
      children: "Coding Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 1:"
      }), " Design a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class Book"
      }), " with private members ", (0,jsx_runtime.jsx)(_components.code, {
        children: "title_"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "author_"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isbn_"
      }), " (string), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "available_"
      }), " (bool). Provide:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constructor that initializes all members"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " getters for all members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "borrow()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return_book()"
        }), " that change availability"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A static counter tracking total books created"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 2:"
      }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class Vector2D"
      }), " with private ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x_"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y_"
      }), " (double). Provide:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " member functions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "magnitude()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dot_product(const Vector2D&)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Friend function: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator*(double, const Vector2D&)"
        }), " for scalar multiplication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and non-const ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator[]"
        }), " for element access"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Method chaining for setters"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A static utility function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "distance(const Vector2D&, const Vector2D&)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 3:"
      }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class Stack"
      }), " using a private ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<int>"
      }), ". Provide:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "push(int)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pop()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "top() const"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "empty() const"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size() const"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A nested ", (0,jsx_runtime.jsx)(_components.code, {
          children: "class Iterator"
        }), " for range-based iteration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and non-const versions of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "top()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A static member tracking total stacks in existence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 4:"
      }), " Design a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class Temperature"
      }), " that internally stores Celsius but can be constructed from Fahrenheit or Kelvin via static factory methods:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Temperature {\n    double celsius_;\n    Temperature(double c) : celsius_(c) {}\npublic:\n    static Temperature from_fahrenheit(double f);\n    static Temperature from_kelvin(double k);\n    double to_celsius() const;\n    double to_fahrenheit() const;\n    double to_kelvin() const;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 5:"
      }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class Matrix"
      }), " with private 2D array storage. Provide:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " and non-const ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator()"
        }), " for element access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " member for determinant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mutable"
        }), " member for cache validation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "static"
        }), " member for a zero matrix constant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Friend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator<<"
        }), " for pretty printing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem 6:"
      }), " Design a mini ORM (Object-Relational Mapping) system using classes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Field {\n    std::string name_;\n    std::string type_;\n    bool is_primary_key_;\n    mutable bool accessed_;  // Track query patterns\npublic:\n    Field(const std::string& name, const std::string& type, bool pk = false);\n    std::string get_name() const;\n    std::string get_type() const;\n    bool is_primary_key() const;\n    void mark_accessed() const;  // mutable modifies\n};\n\nclass Table {\n    std::string name_;\n    std::vector<Field> fields_;\n    static inline int table_count_ = 0;\npublic:\n    Table(const std::string& name);\n    Table& add_field(const std::string& name, const std::string& type, bool pk = false);\n    const Field& get_field(const std::string& name) const;\n    std::string generate_create_sql() const;\n    static int get_table_count();\n    friend std::ostream& operator<<(std::ostream& os, const Table& t);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement all member functions and demonstrate creating a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "users"
      }), " table with fields ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " (int, PK), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), " (varchar), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "email"
      }), " (varchar). Generate and print the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE TABLE"
      }), " SQL statement."]
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