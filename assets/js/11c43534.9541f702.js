"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77745],{

/***/ 90860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_05_polymorphism_md_11c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-05-polymorphism-md-11c.json
const site_docs_courses_oop_cpp_05_polymorphism_md_11c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/05-polymorphism","title":"Chapter 5: Polymorphism","description":"Previous Operator Overloading","source":"@site/docs/courses/oop-cpp/05-polymorphism.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/05-polymorphism","permalink":"/ai-engineering-journey/oop-cpp/05-polymorphism","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-polymorphism","slug":"/oop-cpp/05-polymorphism","title":"Chapter 5: Polymorphism","sidebar_label":"Chapter 5: Polymorphism","sidebar_position":5},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 4: Inheritance","permalink":"/ai-engineering-journey/oop-cpp/04-inheritance"},"next":{"title":"Chapter 6: Operator Overloading","permalink":"/ai-engineering-journey/oop-cpp/06-operator-overloading"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/05-polymorphism.md


const frontMatter = {
	id: '05-polymorphism',
	slug: '/oop-cpp/05-polymorphism',
	title: 'Chapter 5: Polymorphism',
	sidebar_label: 'Chapter 5: Polymorphism',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Polymorphism';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "5.0 The Polymorphism Problem — A Real-World Analogy",
  "id": "50-the-polymorphism-problem--a-real-world-analogy",
  "level": 2
}, {
  "value": "5.1 Two Flavours of Polymorphism",
  "id": "51-two-flavours-of-polymorphism",
  "level": 2
}, {
  "value": "5.2 Function Overloading",
  "id": "52-function-overloading",
  "level": 2
}, {
  "value": "5.2.1 What Is Function Overloading?",
  "id": "521-what-is-function-overloading",
  "level": 3
}, {
  "value": "5.2.2 Function Overloading — Numbered Steps",
  "id": "522-function-overloading--numbered-steps",
  "level": 3
}, {
  "value": "5.2.3 C++ Code — Function Overloading",
  "id": "523-c-code--function-overloading",
  "level": 3
}, {
  "value": "5.2.4 Complexity Analysis",
  "id": "524-complexity-analysis",
  "level": 3
}, {
  "value": "5.3 Function Overloading Rules",
  "id": "53-function-overloading-rules",
  "level": 2
}, {
  "value": "5.3.1 Allowed Overloads",
  "id": "531-allowed-overloads",
  "level": 3
}, {
  "value": "5.3.2 NOT Allowed — These Do NOT Overload",
  "id": "532-not-allowed--these-do-not-overload",
  "level": 3
}, {
  "value": "5.3.3 Overload Resolution Ranking",
  "id": "533-overload-resolution-ranking",
  "level": 3
}, {
  "value": "5.4 Operator Overloading — Guidelines",
  "id": "54-operator-overloading--guidelines",
  "level": 2
}, {
  "value": "5.4.1 What Is Operator Overloading?",
  "id": "541-what-is-operator-overloading",
  "level": 3
}, {
  "value": "5.4.2 Which Operators Can Be Overloaded?",
  "id": "542-which-operators-can-be-overloaded",
  "level": 3
}, {
  "value": "5.4.3 Operators That CANNOT Be Overloaded",
  "id": "543-operators-that-cannot-be-overloaded",
  "level": 3
}, {
  "value": "5.4.4 Operator Overloading Guidelines (The Golden Rules)",
  "id": "544-operator-overloading-guidelines-the-golden-rules",
  "level": 3
}, {
  "value": "5.4.5 Code — Complex Number with Operator Overloading",
  "id": "545-code--complex-number-with-operator-overloading",
  "level": 3
}, {
  "value": "5.4.6 Operator Overloading — Complexity",
  "id": "546-operator-overloading--complexity",
  "level": 3
}, {
  "value": "5.5 Overloading vs Overriding — Critical Distinction",
  "id": "55-overloading-vs-overriding--critical-distinction",
  "level": 2
}, {
  "value": "5.6 Virtual Functions",
  "id": "56-virtual-functions",
  "level": 2
}, {
  "value": "5.6.1 The Problem Virtual Functions Solve",
  "id": "561-the-problem-virtual-functions-solve",
  "level": 3
}, {
  "value": "5.6.2 Real-World Analogy — The Shape Drawer",
  "id": "562-real-world-analogy--the-shape-drawer",
  "level": 3
}, {
  "value": "5.6.3 Virtual Functions — Numbered Steps",
  "id": "563-virtual-functions--numbered-steps",
  "level": 3
}, {
  "value": "5.6.4 Pseudocode — Virtual Dispatch",
  "id": "564-pseudocode--virtual-dispatch",
  "level": 3
}, {
  "value": "5.6.5 C++ Code — Complete Virtual Function Example",
  "id": "565-c-code--complete-virtual-function-example",
  "level": 3
}, {
  "value": "5.7 The <code>override</code> Specifier",
  "id": "57-the-override-specifier",
  "level": 2
}, {
  "value": "5.7.1 Why <code>override</code>?",
  "id": "571-why-override",
  "level": 3
}, {
  "value": "5.7.2 <code>override</code> — Rules",
  "id": "572-override--rules",
  "level": 3
}, {
  "value": "5.8 The <code>final</code> Specifier",
  "id": "58-the-final-specifier",
  "level": 2
}, {
  "value": "5.8.1 What <code>final</code> Does",
  "id": "581-what-final-does",
  "level": 3
}, {
  "value": "5.8.2 <code>final</code> — Benefits",
  "id": "582-final--benefits",
  "level": 3
}, {
  "value": "5.9 The vtable and vptr Mechanism — Deep Dive",
  "id": "59-the-vtable-and-vptr-mechanism--deep-dive",
  "level": 2
}, {
  "value": "5.9.1 What Is the vtable?",
  "id": "591-what-is-the-vtable",
  "level": 3
}, {
  "value": "5.9.2 What Is the vptr?",
  "id": "592-what-is-the-vptr",
  "level": 3
}, {
  "value": "5.9.3 vtable/vptr — Numbered Steps",
  "id": "593-vtablevptr--numbered-steps",
  "level": 3
}, {
  "value": "5.9.4 Memory Layout — ASCII Visualization",
  "id": "594-memory-layout--ascii-visualization",
  "level": 3
}, {
  "value": "5.9.5 Vtable Dispatch — Detailed Trace",
  "id": "595-vtable-dispatch--detailed-trace",
  "level": 3
}, {
  "value": "5.9.6 Vtable During Construction — The Trap",
  "id": "596-vtable-during-construction--the-trap",
  "level": 3
}, {
  "value": "5.9.7 vtable Complexity Analysis",
  "id": "597-vtable-complexity-analysis",
  "level": 3
}, {
  "value": "5.10 Pure Virtual Functions and Abstract Classes",
  "id": "510-pure-virtual-functions-and-abstract-classes",
  "level": 2
}, {
  "value": "5.10.1 What Is a Pure Virtual Function?",
  "id": "5101-what-is-a-pure-virtual-function",
  "level": 3
}, {
  "value": "5.10.2 Real-World Analogy — The USB Standard",
  "id": "5102-real-world-analogy--the-usb-standard",
  "level": 3
}, {
  "value": "5.10.3 Pure Virtual Functions — Numbered Steps",
  "id": "5103-pure-virtual-functions--numbered-steps",
  "level": 3
}, {
  "value": "5.10.4 Pseudocode",
  "id": "5104-pseudocode",
  "level": 3
}, {
  "value": "5.10.5 C++ Code — Abstract Shape",
  "id": "5105-c-code--abstract-shape",
  "level": 3
}, {
  "value": "5.10.6 Pure Virtual Functions with Bodies",
  "id": "5106-pure-virtual-functions-with-bodies",
  "level": 3
}, {
  "value": "5.11 Virtual Destructors",
  "id": "511-virtual-destructors",
  "level": 2
}, {
  "value": "5.11.1 The Problem",
  "id": "5111-the-problem",
  "level": 3
}, {
  "value": "5.11.2 The Fix",
  "id": "5112-the-fix",
  "level": 3
}, {
  "value": "5.11.3 Virtual Destructors — Numbered Steps",
  "id": "5113-virtual-destructors--numbered-steps",
  "level": 3
}, {
  "value": "5.11.4 Rules of Thumb",
  "id": "5114-rules-of-thumb",
  "level": 3
}, {
  "value": "5.12 Runtime Type Identification (RTTI)",
  "id": "512-runtime-type-identification-rtti",
  "level": 2
}, {
  "value": "5.12.1 <code>dynamic_cast</code>",
  "id": "5121-dynamic_cast",
  "level": 3
}, {
  "value": "5.12.2 <code>typeid</code>",
  "id": "5122-typeid",
  "level": 3
}, {
  "value": "5.12.3 Code — RTTI in Action",
  "id": "5123-code--rtti-in-action",
  "level": 3
}, {
  "value": "5.12.4 <code>dynamic_cast</code> — Performance Cost",
  "id": "5124-dynamic_cast--performance-cost",
  "level": 3
}, {
  "value": "5.13 <code>dynamic_cast</code> vs <code>static_cast</code> Comparison",
  "id": "513-dynamic_cast-vs-static_cast-comparison",
  "level": 2
}, {
  "value": "5.14 Abstract Class vs Interface Comparison",
  "id": "514-abstract-class-vs-interface-comparison",
  "level": 2
}, {
  "value": "5.14.1 The &quot;Interface&quot; Concept in C++",
  "id": "5141-the-interface-concept-in-c",
  "level": 3
}, {
  "value": "5.14.2 Comparison Table",
  "id": "5142-comparison-table",
  "level": 3
}, {
  "value": "5.14.3 Example — Pure Interface",
  "id": "5143-example--pure-interface",
  "level": 3
}, {
  "value": "5.15 Object Slicing",
  "id": "515-object-slicing",
  "level": 2
}, {
  "value": "5.15.1 What Is Object Slicing?",
  "id": "5151-what-is-object-slicing",
  "level": 3
}, {
  "value": "5.15.2 Why Slicing Happens",
  "id": "5152-why-slicing-happens",
  "level": 3
}, {
  "value": "5.16 Compile-time vs Run-time Polymorphism",
  "id": "516-compile-time-vs-run-time-polymorphism",
  "level": 2
}, {
  "value": "5.17 <code>virtual</code> vs <code>override</code> vs <code>final</code>",
  "id": "517-virtual-vs-override-vs-final",
  "level": 2
}, {
  "value": "Combination Rules",
  "id": "combination-rules",
  "level": 3
}, {
  "value": "5.18 Abstract Class vs Interface — Detailed Table",
  "id": "518-abstract-class-vs-interface--detailed-table",
  "level": 2
}, {
  "value": "Q1: What happens if you call a virtual function from a constructor? Why?",
  "id": "q1-what-happens-if-you-call-a-virtual-function-from-a-constructor-why",
  "level": 2
}, {
  "value": "Q2: How does the compiler implement virtual function dispatch? Draw the vtable layout.",
  "id": "q2-how-does-the-compiler-implement-virtual-function-dispatch-draw-the-vtable-layout",
  "level": 2
}, {
  "value": "Q3: What is object slicing and how do you prevent it?",
  "id": "q3-what-is-object-slicing-and-how-do-you-prevent-it",
  "level": 2
}, {
  "value": "Q4: What is the cost of having virtual functions? When would you NOT use them?",
  "id": "q4-what-is-the-cost-of-having-virtual-functions-when-would-you-not-use-them",
  "level": 2
}, {
  "value": "Q5: Can a pure virtual function have a body? Why would you give it one?",
  "id": "q5-can-a-pure-virtual-function-have-a-body-why-would-you-give-it-one",
  "level": 2
}, {
  "value": "Q6: What is the difference between early binding and late binding?",
  "id": "q6-what-is-the-difference-between-early-binding-and-late-binding",
  "level": 2
}, {
  "value": "Q7: Explain the <code>final</code> specifier. How does it help the compiler optimise?",
  "id": "q7-explain-the-final-specifier-how-does-it-help-the-compiler-optimise",
  "level": 2
}, {
  "value": "Q8: How does <code>dynamic_cast</code> work internally?",
  "id": "q8-how-does-dynamic_cast-work-internally",
  "level": 2
}, {
  "value": "5.19 Plugin Architectures",
  "id": "519-plugin-architectures",
  "level": 2
}, {
  "value": "5.20 Device Drivers (Operating Systems)",
  "id": "520-device-drivers-operating-systems",
  "level": 2
}, {
  "value": "5.21 Game Engines",
  "id": "521-game-engines",
  "level": 2
}, {
  "value": "5.22 GUI Frameworks",
  "id": "522-gui-frameworks",
  "level": 2
}, {
  "value": "5.23 Testing and Mocking",
  "id": "523-testing-and-mocking",
  "level": 2
}, {
  "value": "5.24 The Template Method Pattern",
  "id": "524-the-template-method-pattern",
  "level": 2
}, {
  "value": "Quick Reference Card",
  "id": "quick-reference-card",
  "level": 2
}, {
  "value": "Chapter Summary",
  "id": "chapter-summary",
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
}, {
  "value": "Cross-Chapter References",
  "id": "cross-chapter-references",
  "level": 2
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
        id: "chapter-5-polymorphism",
        children: "Chapter 5: Polymorphism"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/04-inheritance",
          children: "Inheritance"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/06-operator-overloading",
          children: "Operator Overloading"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        href: "../../assets/images/lessons/oop-cpp/05-polymorphism/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/05-polymorphism/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/05-polymorphism/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/05-polymorphism/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/05-polymorphism/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/05-polymorphism/visual-explanation.png",
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
        children: "Distinguish compile-time polymorphism from run-time polymorphism and select the right mechanism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply function overloading rules to resolve ambiguous calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design operator overloads following C++ guidelines and best practices"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement virtual functions with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "override"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "final"
        }), " specifiers correctly"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Draw the vtable/vptr memory layout and explain dispatch cost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design abstract base classes with pure virtual functions as interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why virtual destructors are mandatory in polymorphic hierarchies"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dynamic_cast"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeid"
        }), " judiciously, understanding their costs"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on vtable dispatch, object slicing, and RTTI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "50-the-polymorphism-problem--a-real-world-analogy",
      children: "5.0 The Polymorphism Problem — A Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — The Universal Remote"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You have a universal remote with a single \"Play\" button. Point it at a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DVD Player"
      }), ", and it starts spinning the disc. Point it at a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Streaming Stick"
      }), ", and it buffers Netflix. Point it at a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Game Console"
      }), ", and it launches the game. The same button press ", (0,jsx_runtime.jsx)(_components.em, {
        children: "behaves differently"
      }), " depending on the device."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is polymorphism: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one interface, many implementations"
      }), ". The remote doesn't need to know ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what"
      }), " it's talking to — it just sends \"Play\". Each device provides its own behaviour. If you invent a new device tomorrow, the remote works without any modification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In C++, polymorphism is the ability of objects of different types to respond to the same function call in type-specific ways. It is the third pillar of OOP."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-two-flavours-of-polymorphism",
      children: "5.1 Two Flavours of Polymorphism"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flavour"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Also Called"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flexibility"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compile-time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static binding, early binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before the program runs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function/operator overloading, templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest — zero runtime overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower — types must be known at compile time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run-time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic binding, late binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "While the program executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions via vtable/vptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower — one indirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher — types can be determined at runtime"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We study both in this chapter, starting with compile-time."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "part-i--compile-time-polymorphism",
      children: "PART I — COMPILE-TIME POLYMORPHISM"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-function-overloading",
      children: "5.2 Function Overloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "521-what-is-function-overloading",
      children: "5.2.1 What Is Function Overloading?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function overloading"
      }), " means defining multiple functions with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same name"
      }), " but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different parameter lists"
      }), " (different number, types, or order of parameters). The compiler selects the correct function at compile time based on the arguments passed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — The Coffee Machine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A coffee machine has one button labelled \"Brew\". But:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you place a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cup"
        }), " under the spout → it brews 200 ml."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you place a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "travel mug"
        }), " → it brews 400 ml."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If you place a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "thermos"
        }), " → it brews 800 ml."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same command (\"Brew\"), different behaviour based on ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what you give it"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "522-function-overloading--numbered-steps",
      children: "5.2.2 Function Overloading — Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler sees the function call and collects the argument types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler builds a candidate set of all functions with the matching name."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler filters to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "viable functions"
        }), " — those callable with the given arguments (allowing implicit conversions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler ranks viable functions by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "conversion sequence quality"
        }), " (exact match > promotion > standard conversion > user-defined conversion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If exactly one best match exists → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "selected"
        }), ". If none or more than one → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "compile error"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION print(Int n)        → print integer\nFUNCTION print(Double d)     → print double\nFUNCTION print(String s)     → print string\nFUNCTION print(Int n, Int base) → print integer in given base\n\nCALL print(42)           → Step 5: match #1 selected\nCALL print(3.14)         → Step 5: match #2 selected\nCALL print(\"hello\")      → Step 5: match #3 selected\nCALL print(255, 16)      → Step 5: match #4 selected (two ints)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "523-c-code--function-overloading",
      children: "5.2.3 C++ Code — Function Overloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nvoid print(int i) {\n    std::cout << \"Integer: \" << i << '\\n';\n}\n\nvoid print(double d) {\n    std::cout << \"Double: \" << d << '\\n';\n}\n\nvoid print(const std::string& s) {\n    std::cout << \"String: \" << s << '\\n';\n}\n\nvoid print(int i, int base) {\n    std::cout << \"Integer \" << i << \" in base \" << base << \" → \";\n    if (base == 16) std::cout << std::hex << i;\n    else if (base == 8) std::cout << std::oct << i;\n    else std::cout << std::dec << i;\n    std::cout << '\\n';\n}\n\nint main() {\n    print(42);                    // Integer: 42\n    print(3.14159);               // Double: 3.14159\n    print(\"hello\"s);              // String: hello\n    print(255, 16);               // Integer 255 in base 16 → ff\n    print('A');                   // Integer: 65 (char promotes to int)\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Integer: 42\nDouble: 3.14159\nString: hello\nInteger 255 in base 16 → ff\nInteger: 65\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Overload Resolution:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Candidates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Viable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Match"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(42)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "print(int)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "print(double)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "print(string)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "print(int,int)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1, #2, #3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(int)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exact match for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1, #2, #3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(double)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exact match for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(\"hello\"s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1, #2, #3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(string)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exact match for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(255, 16)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(int,int)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only match with 2 params"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print('A')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1, #2, #3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "print(int)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " is a promotion, beats ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (standard conversion)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "524-complexity-analysis",
      children: "5.2.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overload resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) candidates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler examines N overloads once per call; no runtime cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Call to selected function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct function call — resolved at link time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N²) in worst case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler must check every pair for best-match uniqueness"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-function-overloading-rules",
      children: "5.3 Function Overloading Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-allowed-overloads",
      children: "5.3.1 Allowed Overloads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A function can be overloaded if its signature differs in any of:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allowed?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(int, int)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type of parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(double)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order of parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int, double)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(double, int)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Const/volatile on pointer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int*)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(const int*)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference qualifier"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f() &"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f() &&"
            }), " (C++11)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "532-not-allowed--these-do-not-overload",
      children: "5.3.2 NOT Allowed — These Do NOT Overload"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attempt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Fails"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same name, same params, different return type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return type is NOT part of the signature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same name, same params, different in name only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter names are irrelevant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(const int)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-level const is stripped — they are the same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(int&)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(x)"
            }), " — both viable; ambiguity unless exact distinction"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "533-overload-resolution-ranking",
      children: "5.3.3 Overload Resolution Ranking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler ranks viable functions by conversion quality:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact match"
        }), " — no conversion needed (or trivial: array-to-pointer, function-to-pointer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Promotion"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard conversion"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", derived* → base*"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User-defined conversion"
        }), " — via conversion operator or single-argument constructor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ellipsis"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        }), ") — last resort, match via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "..."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code — Resolution Ranking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nvoid g(int)    { std::cout << \"int\\n\"; }\nvoid g(short)  { std::cout << \"short\\n\"; }\nvoid g(long)   { std::cout << \"long\\n\"; }\n\nint main() {\n    int i = 5;\n    short s = 5;\n    long l = 5;\n    char c = 'A';\n\n    g(i);    // exact match → g(int)\n    g(s);    // exact match → g(short)\n    g(l);    // exact match → g(long)\n    g(c);    // promotion → g(int) — char promotes to int, not short/long\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int\nshort\nlong\nint\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Viable Functions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conversions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Match"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(i)"
            }), " where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(int)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "g(short)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "g(long)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1: exact, #2: standard (int→short), #3: standard (int→long)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(int)"
            }), " — exact"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(s)"
            }), " where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "s"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1: promotion (short→int), #2: exact, #3: standard (short→long)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(short)"
            }), " — exact"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(c)"
            }), " where ", (0,jsx_runtime.jsx)(_components.code, {
              children: "c"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#1: promotion (char→int), #2: promotion (char→short), #3: promotion (char→long)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "g(int)"
            }), " — promotion to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " preferred over ", (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            }), " because ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " can represent all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), " values"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-operator-overloading--guidelines",
      children: "5.4 Operator Overloading — Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-what-is-operator-overloading",
      children: "5.4.1 What Is Operator Overloading?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operator overloading allows user-defined types to use C++ operators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), ", etc.) with natural syntax. It is a form of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile-time polymorphism"
      }), " — the compiler selects the correct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator@"
      }), " function based on operand types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — The Matrix Calculator"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A basic calculator adds numbers: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2 + 3 = 5"
      }), ". But a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "matrix calculator"
      }), " overloads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " so that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "matrixA + matrixB"
      }), " performs element-wise addition. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " symbol ", (0,jsx_runtime.jsx)(_components.em, {
        children: "means different things"
      }), " depending on what it operates on — just like function overloading."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-which-operators-can-be-overloaded",
      children: "5.4.2 Which Operators Can Be Overloaded?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overloadable?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+ - * / %"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Most"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`& ^"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~ << >>`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "= += -= *="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Most"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "== != < > <= >="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "* ->"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<< >>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ As friends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NEW/DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new new[] delete delete[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "543-operators-that-cannot-be-overloaded",
      children: "5.4.3 Operators That CANNOT Be Overloaded"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why Not?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "::"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot change fundamental scoping rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Would break class member access semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer-to-member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same reason"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Would complicate short-circuit rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size-of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operates on types, not values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typeid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type identification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTTI must remain reliable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor runs before the compiler"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "544-operator-overloading-guidelines-the-golden-rules",
      children: "5.4.4 Operator Overloading Guidelines (The Golden Rules)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve natural semantics."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator+"
        }), " should add, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator=="
        }), " should compare equality. Never make ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " do subtraction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preserve expected arity and precedence."
        }), " You cannot change precedence, associativity, or arity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide compound assignment from the arithmetic version."
        }), " Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+="
        }), " then implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " in terms of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+="
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return by value for arithmetic, by reference for assignment."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T operator+(const T&, const T&)"
            }), " — returns new object by value"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T& operator+=(const T&)"
            }), " — modifies and returns *this by reference"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make binary operators non-member friends"
        }), " when the left operand should support conversions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">>"
          }), " for I/O MUST be non-member functions"]
        }), " — the left operand is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::ostream&"
        }), ", not your class."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "545-code--complex-number-with-operator-overloading",
      children: "5.4.5 Code — Complex Number with Operator Overloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Complex {\npublic:\n    Complex(double r = 0, double i = 0) : re_(r), im_(i) {}\n\n    Complex& operator+=(const Complex& rhs) {\n        re_ += rhs.re_;\n        im_ += rhs.im_;\n        return *this;\n    }\n\n    Complex& operator*=(const Complex& rhs) {\n        double r = re_ * rhs.re_ - im_ * rhs.im_;\n        double i = re_ * rhs.im_ + im_ * rhs.re_;\n        re_ = r;\n        im_ = i;\n        return *this;\n    }\n\n    double real() const { return re_; }\n    double imag() const { return im_; }\n\nprivate:\n    double re_, im_;\n};\n\nComplex operator+(Complex lhs, const Complex& rhs) {\n    return lhs += rhs;\n}\n\nComplex operator*(Complex lhs, const Complex& rhs) {\n    return lhs *= rhs;\n}\n\nstd::ostream& operator<<(std::ostream& os, const Complex& c) {\n    os << '(' << c.real() << \" + \" << c.imag() << \"i)\";\n    return os;\n}\n\nint main() {\n    Complex a(3, 4);\n    Complex b(1, 2);\n\n    std::cout << \"a = \" << a << '\\n';\n    std::cout << \"b = \" << b << '\\n';\n    std::cout << \"a + b = \" << (a + b) << '\\n';\n    std::cout << \"a * b = \" << (a * b) << '\\n';\n\n    Complex c = 5 + a;\n    std::cout << \"5 + a = \" << c << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a = (3 + 4i)\nb = (1 + 2i)\na + b = (4 + 6i)\na * b = (-5 + 10i)\n5 + a = (8 + 4i)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "546-operator-overloading--complexity",
      children: "5.4.6 Operator Overloading — Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct field arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator+"
            }), " (copy + add)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One copy, one compound op"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per field"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct stream insertion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-overloading-vs-overriding--critical-distinction",
      children: "5.5 Overloading vs Overriding — Critical Distinction"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Overloading"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Overriding"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same class (or global)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base class → derived class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run-time (virtual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must match exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " keyword"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required in base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            }), " keyword"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended in derived"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can differ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be covariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "f(int)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(double)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Base::f()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Derived::f()"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "part-ii--run-time-polymorphism",
      children: "PART II — RUN-TIME POLYMORPHISM"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-virtual-functions",
      children: "5.6 Virtual Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "561-the-problem-virtual-functions-solve",
      children: "5.6.1 The Problem Virtual Functions Solve"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without virtual functions, calling a function through a base pointer always invokes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "base class version"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    void speak() { std::cout << \"Base\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    void speak() { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Base* p = new Derived();\n    p->speak();   // \"Base\" — NOT what we want!\n    delete p;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not polymorphic"
      }), ". The compiler sees a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base*"
      }), " and calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base::speak()"
      }), ". The object is actually a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), ", but the function call ignores this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adding the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "virtual"
      }), " keyword changes everything:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void speak() { std::cout << \"Base\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    void speak() override { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Base* p = new Derived();\n    p->speak();   // \"Derived\" — runtime dispatch!\n    delete p;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "562-real-world-analogy--the-shape-drawer",
      children: "5.6.2 Real-World Analogy — The Shape Drawer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A graphic editor has a list of shapes. When you click \"Render All\", the editor calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "draw()"
      }), " on each shape. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Circle"
      }), " draws an arc. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Square"
      }), " draws four lines. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Triangle"
      }), " draws three lines. The editor does not care what each shape is — it just says \"draw yourself\". Each shape ", (0,jsx_runtime.jsx)(_components.em, {
        children: "knows"
      }), " how to draw itself."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Editor: \"Shape #1, draw()\"   → Circle draws ○\nEditor: \"Shape #2, draw()\"   → Square draws □\nEditor: \"Shape #3, draw()\"   → Triangle draws △\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "563-virtual-functions--numbered-steps",
      children: "5.6.3 Virtual Functions — Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Base class declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtual void f();"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derived class overrides with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void f() override;"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caller holds a base pointer/reference to a derived object."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Caller invokes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr->f();"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler generates code that reads the object's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vptr"
        }), " (at offset 0 in most implementations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler follows vptr to the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vtable"
        }), " (a static table of function pointers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler indexes into the vtable at a fixed offset (known for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler calls the function pointer found at that slot — this is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "most-derived override"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Derived"
        }), " did not override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f"
        }), ", the vtable slot points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Base::f"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "564-pseudocode--virtual-dispatch",
      children: "5.6.4 Pseudocode — Virtual Dispatch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS Shape\n  VIRTUAL draw()     → prints \"Shape\"\n  VIRTUAL area()     → returns 0\n\nCLASS Circle EXTENDS Shape\n  OVERRIDE draw()    → prints \"Circle\"\n  OVERRIDE area()    → returns π·r²\n\nCLASS Square EXTENDS Shape\n  OVERRIDE draw()    → prints \"Square\"\n  OVERRIDE area()    → returns side²\n\nFUNCTION render(Shape& s)\n  s.draw()           ← runtime dispatch\n  PRINT s.area()    ← runtime dispatch\n\nFUNCTION main()\n  Circle c\n  Square sq\n  render(c)   → circle, 3.14\n  render(sq)  → square, 4.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "565-c-code--complete-virtual-function-example",
      children: "5.6.5 C++ Code — Complete Virtual Function Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <memory>\n\nclass Shape {\npublic:\n    virtual double area() const { return 0; }\n    virtual void draw() const { std::cout << \"Unknown shape\\n\"; }\n    virtual ~Shape() = default;\n};\n\nclass Circle : public Shape {\npublic:\n    Circle(double r) : r_(r) {}\n    double area() const override { return 3.14159 * r_ * r_; }\n    void draw() const override { std::cout << \"Circle(r=\" << r_ << \")\\n\"; }\nprivate:\n    double r_;\n};\n\nclass Square : public Shape {\npublic:\n    Square(double s) : side_(s) {}\n    double area() const override { return side_ * side_; }\n    void draw() const override { std::cout << \"Square(side=\" << side_ << \")\\n\"; }\nprivate:\n    double side_;\n};\n\nclass Triangle : public Shape {\npublic:\n    Triangle(double b, double h) : base_(b), height_(h) {}\n    double area() const override { return 0.5 * base_ * height_; }\n    void draw() const override { std::cout << \"Triangle(base=\" << base_\n                                          << \", height=\" << height_ << \")\\n\"; }\nprivate:\n    double base_, height_;\n};\n\nvoid render(const Shape& s) {\n    s.draw();\n    std::cout << \"  Area: \" << s.area() << '\\n';\n}\n\nint main() {\n    std::vector<std::unique_ptr<Shape>> shapes;\n    shapes.push_back(std::make_unique<Circle>(1.0));\n    shapes.push_back(std::make_unique<Square>(2.0));\n    shapes.push_back(std::make_unique<Triangle>(3.0, 4.0));\n\n    for (const auto& s : shapes)\n        render(*s);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Circle(r=1)\n  Area: 3.14159\nSquare(side=2)\n  Area: 4\nTriangle(base=3, height=4)\n  Area: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run — Virtual Dispatch for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shapes[0]->draw()"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "shapes[0]"
            }), " is a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<Shape>"
            }), " pointing to a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Circle"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "render(*s)"
            }), " passes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Circle"
            }), " as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const Shape&"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s.draw()"
            }), " is called — compiler generates vptr lookup"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object at offset 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vptr → Circle's vtable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Index ", (0,jsx_runtime.jsx)(_components.code, {
              children: "draw"
            }), " slot → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Circle::draw"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vtable slot 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Circle::draw()"
            }), " executes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code section"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Output: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Circle(r=1)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Console"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "57-the-override-specifier",
      children: ["5.7 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "override"
      }), " Specifier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "571-why-override",
      children: ["5.7.1 Why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "override"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before C++11, if you attempted to override a virtual function but mistyped the signature, you silently created a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new function"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void draw() const;\n};\n\nclass Derived : public Base {\npublic:\n    void draw() /* missing const! */ { }  // NEW function, not override\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "override"
      }), " specifier (C++11) causes the compiler to verify that a base class virtual with the matching signature actually exists:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Derived : public Base {\npublic:\n    void draw() override { }  // ERROR: does not override anything\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compiler error:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "error: 'Derived::draw' marked 'override' but does not override any member functions\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "572-override--rules",
      children: ["5.7.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "override"
      }), " — Rules"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Placement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After the parameter list (and after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Override implies virtual — base function must be virtual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must match exactly, OR be covariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be different from base (public → private override is legal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optional but recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Omission is not an error, but is a missed safety check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "58-the-final-specifier",
      children: ["5.8 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " Specifier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "581-what-final-does",
      children: ["5.8.1 What ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " Does"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " prevents further overriding of a virtual function, or prevents a class from being used as a base:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void f();\n    virtual void g();\n};\n\nclass Derived : public Base {\npublic:\n    void f() final;  // OK — override, prevents further overrides\n};\n\nclass GrandChild : public Derived {\npublic:\n    void f() override;  // ERROR: Derived::f is final\n    void g() override;  // OK — g is not final\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Class-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Sealed final { };  // Cannot be inherited\nclass Fail : public Sealed { };  // ERROR\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "582-final--benefits",
      children: ["5.8.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " — Benefits"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design intent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communicates \"this behaviour is definitive\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Devirtualisation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler can devirtualise calls to final functions — inline them"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents unintended subclass interference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "59-the-vtable-and-vptr-mechanism--deep-dive",
      children: "5.9 The vtable and vptr Mechanism — Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "591-what-is-the-vtable",
      children: "5.9.1 What Is the vtable?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vtable"
      }), " (virtual table) is a compiler-generated array of function pointers. Each class that has (or inherits) virtual functions has exactly one vtable, stored in static memory (read-only data segment)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "592-what-is-the-vptr",
      children: "5.9.2 What Is the vptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vptr"
      }), " (virtual pointer) is a hidden pointer member inside each object of a polymorphic class. It points to the class's vtable. The vptr is typically at offset 0 in the object layout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "593-vtablevptr--numbered-steps",
      children: "5.9.3 vtable/vptr — Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler encounters a class with any virtual function."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler generates a static vtable for that class containing pointers to all virtual functions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler adds a hidden vptr member to the class (usually at offset 0)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler generates constructor code that initialises the vptr to the class's vtable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a hierarchy, the base class constructor sets vptr → base vtable."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When the derived class constructor runs, it ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "updates"
        }), " vptr → derived vtable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A virtual function call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr->f()"
        }), " compiles to: read vptr → follow to vtable → index to slot → indirect call."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "594-memory-layout--ascii-visualization",
      children: "5.9.4 Memory Layout — ASCII Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLASS HIERARCHY:\n    Shape (virtual: draw, area)\n      ↑\n    Circle (overrides: draw, area)\n      ↑\n    ThinCircle (overrides: draw only)\n\nMEMORY LAYOUT (64-bit):\n\n    Shape's vtable (static):\n    ┌─────────────────────────┐\n    │  [0]: typeinfo*         │  ← for typeid\n    │  [1]: Shape::draw()     │\n    │  [2]: Shape::area()     │\n    │  [3]: Shape::~Shape()   │\n    └─────────────────────────┘\n\n    Circle's vtable (static):\n    ┌─────────────────────────┐\n    │  [0]: typeinfo*         │\n    │  [1]: Circle::draw()    │  ← overrides Shape::draw\n    │  [2]: Circle::area()    │  ← overrides Shape::area\n    │  [3]: Circle::~Circle() │\n    └─────────────────────────┘\n\n    ThinCircle's vtable (static):\n    ┌─────────────────────────┐\n    │  [0]: typeinfo*         │\n    │  [1]: ThinCircle::draw()│  ← overrides Circle::draw\n    │  [2]: Circle::area()    │  ← inherited, not overridden\n    │  [3]: ThinCircle::~TC() │\n    └─────────────────────────┘\n\n    Object layout (Circle on heap):\n    ┌───────────────────┐\n    │  vptr  ──────────────→ Circle's vtable\n    ├───────────────────┤\n    │  double r_        │  ← data member\n    └───────────────────┘\n                          Size: 16 bytes (8 vptr + 8 double)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "595-vtable-dispatch--detailed-trace",
      children: "5.9.5 Vtable Dispatch — Detailed Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Shape* s = new Circle(5.0);\ns->draw();   // How does the compiler execute this?\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assembly-level trace (conceptual):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mov rax, [s]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load the address of the Circle object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mov rbx, [rax]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read the vptr (first 8 bytes) → address of Circle's vtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mov rcx, [rbx + 8]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read vtable slot 1 (offset 8 bytes on 64-bit) → Circle::draw"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "call rcx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect call to Circle::draw"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cost breakdown per virtual call:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cost Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cycles (approx)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load object address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load vptr from object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3-4 cycles (L1 cache hit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index vtable + load fn ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3-4 cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect branch prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10-15 cycles if mispredicted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total (cold cache)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~15-25 cycles"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total (hot cache)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~5-10 cycles"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "~1-2 cycles"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Virtual calls are not expensive per se (~5 ns on modern hardware). The real cost is that the compiler ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot inline"
      }), " across the indirection, losing optimisation opportunities that may be 10-100x more significant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "596-vtable-during-construction--the-trap",
      children: "5.9.6 Vtable During Construction — The Trap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Base {\npublic:\n    Base() { std::cout << \"Base ctor: \"; speak(); }\n    virtual void speak() { std::cout << \"Base\\n\"; }\n    virtual ~Base() = default;\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { std::cout << \"Derived ctor: \"; speak(); }\n    void speak() override { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Derived d;\n    std::cout << \"After ctor: \";\n    d.speak();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base ctor: Base\nDerived ctor: Derived\nAfter ctor: Derived\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Explanation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["During ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Base"
        }), "'s constructor, the vptr points to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Base's vtable"
        }), " (Derived not yet constructed)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "speak()"
        }), " dispatches to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Base::speak()"
        }), " — not Derived's version."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Derived"
        }), "'s constructor begins, vptr is updated to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived's vtable"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After construction completes, all calls go to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Derived::speak()"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Never call virtual functions in constructors or destructors expecting dispatch to the most-derived class."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "597-vtable-complexity-analysis",
      children: "5.9.7 vtable Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-class vtable memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V) where V = number of virtual functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One function pointer per virtual function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Per-object vptr memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes (64-bit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One hidden pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual call overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 loads + 1 indirect call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vptr→vtable→function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual call (devirtualised)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler resolves to direct call when type is known"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor vptr setup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pointer write per constructor level"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "510-pure-virtual-functions-and-abstract-classes",
      children: "5.10 Pure Virtual Functions and Abstract Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5101-what-is-a-pure-virtual-function",
      children: "5.10.1 What Is a Pure Virtual Function?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pure virtual function is a virtual function that has ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no implementation"
      }), " in the declaring class. It is declared with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "= 0"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "virtual void draw() const = 0;  // Pure virtual\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Any class containing at least one pure virtual function is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract"
      }), " — you cannot instantiate it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5102-real-world-analogy--the-usb-standard",
      children: "5.10.2 Real-World Analogy — The USB Standard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The USB specification defines what every USB device must do:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transfer data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive power"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Respond to enumeration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But the USB specification itself ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "is not a device"
      }), ". Intel cannot sell you a \"USB\". They sell you a USB ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "keyboard"
      }), ", a USB ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mouse"
      }), ", a USB ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flash drive"
      }), ". Each concrete device implements the USB standard in its own way."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In C++: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USBDevice"
      }), " is the abstract class. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Keyboard"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mouse"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FlashDrive"
      }), " are concrete derived classes. You cannot create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USBDevice"
      }), " object, but you can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "USBDevice*"
      }), " pointers to refer to any concrete device."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5103-pure-virtual-functions--numbered-steps",
      children: "5.10.3 Pure Virtual Functions — Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Designer identifies a behaviour that every derived type must provide."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Base class declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtual void doit() = 0;"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base cannot be instantiated — compile-time enforcement."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every concrete derived class ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " override ", (0,jsx_runtime.jsx)(_components.code, {
          children: "doit()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a derived class does NOT override all pure virtuals, it too is abstract."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5104-pseudocode",
      children: "5.10.4 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ABSTRACT CLASS Vehicle\n  PURE VIRTUAL void startEngine()\n  PURE VIRTUAL void drive()\n  CONCRETE void refuel() { /* common logic */ }\n\nCLASS Car EXTENDS Vehicle\n  OVERRIDE void startEngine() → \"turn key\"\n  OVERRIDE void drive()       → \"steer wheels\"\n\nCLASS Bike EXTENDS Vehicle\n  OVERRIDE void startEngine() → \"kick pedal\"\n  OVERRIDE void drive()       → \"balance on two\"\n\nVehicle* v = new Car()  // OK\nVehicle* w = new Vehicle()  // ERROR: abstract\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5105-c-code--abstract-shape",
      children: "5.10.5 C++ Code — Abstract Shape"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cmath>\n\nclass Shape {\npublic:\n    virtual double area() const = 0;\n    virtual void describe() const = 0;\n    virtual ~Shape() = default;\n\n    void printArea() const {\n        std::cout << \"Area: \" << area() << '\\n';\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    Circle(double r) : radius_(r) {}\n    double area() const override {\n        return M_PI * radius_ * radius_;\n    }\n    void describe() const override {\n        std::cout << \"Circle(radius=\" << radius_ << \")\";\n    }\nprivate:\n    double radius_;\n};\n\nclass Rectangle : public Shape {\npublic:\n    Rectangle(double w, double h) : width_(w), height_(h) {}\n    double area() const override {\n        return width_ * height_;\n    }\n    void describe() const override {\n        std::cout << \"Rectangle(\" << width_ << \"×\" << height_ << \")\";\n    }\nprivate:\n    double width_, height_;\n};\n\nint main() {\n    // Shape s;  // ERROR: cannot instantiate abstract class\n\n    Circle c(5);\n    Rectangle r(3, 4);\n\n    Shape* shapes[] = { &c, &r };\n\n    for (auto s : shapes) {\n        s->describe();\n        std::cout << \" → \";\n        s->printArea();\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Circle(radius=5) → Area: 78.5398\nRectangle(3×4) → Area: 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5106-pure-virtual-functions-with-bodies",
      children: "5.10.6 Pure Virtual Functions with Bodies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++ allows a pure virtual function to have a body:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Shape {\npublic:\n    virtual void draw() const = 0;\n};\n\nvoid Shape::draw() const {\n    std::cout << \"Generic shape (unimplemented)\\n\";\n}\n\nclass Circle : public Shape {\npublic:\n    void draw() const override {\n        Shape::draw();\n        std::cout << \"Then draw circle\\n\";\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is useful when you want to provide a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "default implementation"
      }), " that derived classes can optionally call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "511-virtual-destructors",
      children: "5.11 Virtual Destructors"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5111-the-problem",
      children: "5.11.1 The Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you delete a derived object through a base pointer, the destructor resolution follows virtual dispatch. If the base destructor is NOT virtual, the derived destructor never runs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    ~Base() { std::cout << \"~Base\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    int* big_data = new int[1000];\n    ~Derived() {\n        std::cout << \"~Derived (freeing 1000 ints)\\n\";\n        delete[] big_data;\n    }\n};\n\nint main() {\n    Base* p = new Derived();\n    delete p;   // UNDEFINED BEHAVIOUR — only ~Base runs\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (if you're \"lucky\"):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "~Base\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reality:"
      }), " This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behaviour"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), " destructor never runs — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "big_data"
      }), " leaks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5112-the-fix",
      children: "5.11.2 The Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make the base destructor virtual:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual ~Base() = default;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int main() {\n    Base* p = new Derived();\n    delete p;   // OK: ~Derived() runs, then ~Base()\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "~Derived (freeing 1000 ints)\n~Base\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5113-virtual-destructors--numbered-steps",
      children: "5.11.3 Virtual Destructors — Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "delete p;"
        }), " triggers the destructor call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compiler reads vptr from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*p"
        }), " (virtual dispatch)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vptr points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Derived"
        }), "'s vtable → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Derived::~Derived()"
        }), " is called."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Derived"
        }), " destructor body executes (frees resources, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After body, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Derived"
        }), " destructor implicitly calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Base::~Base()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Base"
        }), " destructor body executes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Memory deallocation happens (via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator delete"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5114-rules-of-thumb",
      children: "5.11.4 Rules of Thumb"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Situation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommendation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class has any virtual function"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Make destructor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class is designed as a base"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Make destructor either ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protected"
            }), " non-virtual"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class is not designed as a base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leave destructor non-virtual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++11+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual ~T() = default;"
            }), " over ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual ~T() {}"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "512-runtime-type-identification-rtti",
      children: "5.12 Runtime Type Identification (RTTI)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "5121-dynamic_cast",
      children: ["5.12.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " performs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "safe downcast"
      }), " at runtime. It returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nullptr"
      }), " for pointers (or throws ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::bad_cast"
      }), " for references) if the cast fails:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void process(Shape& s) {\n    Circle* c = dynamic_cast<Circle*>(&s);\n    if (c) {\n        std::cout << \"Casting to Circle: radius = \" << c->radius() << '\\n';\n    } else {\n        std::cout << \"Not a Circle\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy — The Airport Security Line"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Everyone in the security line is a \"Passenger\". Most are \"Economy\". Some are \"FirstClass\". You can ask: \"Are you a FirstClass passenger?\" If yes, you can give them the lounge key. If no, they stay in the general queue."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " is that question — \"Are you really this type?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "5122-typeid",
      children: ["5.12.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeid"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "typeid"
      }), " returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const std::type_info&"
      }), " that identifies the dynamic type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <typeinfo>\n\nvoid identify(const Shape& s) {\n    std::cout << \"Type: \" << typeid(s).name() << '\\n';\n    if (typeid(s) == typeid(Circle)) {\n        std::cout << \"It's exactly a Circle\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5123-code--rtti-in-action",
      children: "5.12.3 Code — RTTI in Action"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <typeinfo>\n\nclass Animal {\npublic:\n    virtual void sound() const = 0;\n    virtual ~Animal() = default;\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() const override { std::cout << \"Woof!\\n\"; }\n    void fetch() const { std::cout << \"Fetching stick...\\n\"; }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() const override { std::cout << \"Meow!\\n\"; }\n    void purr() const { std::cout << \"Purring...\\n\"; }\n};\n\nvoid interact(Animal& a) {\n    a.sound();\n\n    Dog* dog = dynamic_cast<Dog*>(&a);\n    if (dog) dog->fetch();\n\n    Cat* cat = dynamic_cast<Cat*>(&a);\n    if (cat) cat->purr();\n\n    std::cout << \"  (typeid: \" << typeid(a).name() << \")\\n\\n\";\n}\n\nint main() {\n    Dog d;\n    Cat c;\n    interact(d);\n    interact(c);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (name may vary by compiler):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Woof!\nFetching stick...\n  (typeid: class Dog)\n\nMeow!\nPurring...\n  (typeid: class Cat)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "5124-dynamic_cast--performance-cost",
      children: ["5.12.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " — Performance Cost"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast<T*>(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must walk the class hierarchy to verify cast validity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast<T&>(r)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(depth)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same walk, but throws on failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typeid(*p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads typeinfo from vtable slot 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just index and call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "513-dynamic_cast-vs-static_cast-comparison",
      children: ["5.13 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static_cast"
      }), " Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No runtime check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (walk hierarchy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero (compile-time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Downcast"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            }), "/throws if wrong"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UB if wrong type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (across siblings)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Requires virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (at least one virtual in base)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTTI required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use when"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You MUST check type at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You KNOW the type statically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "514-abstract-class-vs-interface-comparison",
      children: "5.14 Abstract Class vs Interface Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5141-the-interface-concept-in-c",
      children: "5.14.1 The \"Interface\" Concept in C++"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike Java/C#, C++ has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "interface"
      }), " keyword. The equivalent is a class with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all pure virtual functions"
      }), " and no data members."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5142-comparison-table",
      children: "5.14.2 Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstract Class (Mixed)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pure Interface (All-Pure)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concrete functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constructors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (called by derived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually not needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access specifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually public only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed and common"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++ keyword"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["None (just ", (0,jsx_runtime.jsx)(_components.code, {
              children: "= 0"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["None (just ", (0,jsx_runtime.jsx)(_components.code, {
              children: "= 0"
            }), " on all)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Share common state + behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define pure contract"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5143-example--pure-interface",
      children: "5.14.3 Example — Pure Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class ILogger {\npublic:\n    virtual void logInfo(const std::string& msg) = 0;\n    virtual void logWarning(const std::string& msg) = 0;\n    virtual void logError(const std::string& msg) = 0;\n    virtual ~ILogger() = default;\n};\n\nclass ConsoleLogger : public ILogger {\npublic:\n    void logInfo(const std::string& msg) override {\n        std::cout << \"[INFO] \" << msg << '\\n';\n    }\n    void logWarning(const std::string& msg) override {\n        std::cout << \"[WARN] \" << msg << '\\n';\n    }\n    void logError(const std::string& msg) override {\n        std::cout << \"[ERROR] \" << msg << '\\n';\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "515-object-slicing",
      children: "5.15 Object Slicing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5151-what-is-object-slicing",
      children: "5.15.1 What Is Object Slicing?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you assign a derived object to a base object ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "by value"
      }), ", the derived part is \"sliced off\":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Base {\npublic:\n    virtual void identify() const { std::cout << \"Base\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    void identify() const override { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Derived d;\n    Base b = d;       // SLICING! d's derived part is gone\n    b.identify();     // \"Base\" — NOT polymorphic\n    Base& br = d;     // No slice — reference\n    br.identify();    // \"Derived\" — polymorphic\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base\nDerived\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5152-why-slicing-happens",
      children: "5.15.2 Why Slicing Happens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you copy a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), " into a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base"
      }), ", the compiler:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allocates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(Base)"
        }), " bytes (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(Derived)"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copies only the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Base"
        }), " sub-object."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The vptr is set to Base's vtable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      }), " Make base classes non-copyable, or only work with pointers/references."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "part-iii--comparison-tables",
      children: "PART III — COMPARISON TABLES"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "516-compile-time-vs-run-time-polymorphism",
      children: "5.16 Compile-time vs Run-time Polymorphism"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compile-time Polymorphism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Run-time Polymorphism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When resolved"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At run time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function/operator overloading, templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual functions via vtable/vptr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest — direct call, inlineable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5-25 ns extra per call, not inlineable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vptr per object + vtable per class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict — types checked at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime checked via RTTI if needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types must be known at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types can be loaded from DLLs at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coupling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duck-typed (templates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler catches mismatches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime crashes if vtable corrupted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic algorithms, math libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin systems, GUI frameworks, game engines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort(it, it)"
            }), " works on any container"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Shape::draw()"
            }), " dispatched for any shape"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ features"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Overloading, templates, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "constexpr"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "517-virtual-vs-override-vs-final",
      children: ["5.17 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "virtual"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "override"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Does"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base class only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks a function for dynamic dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual void draw() const;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived class only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifies a virtual function is actually overridden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void draw() const override;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived class or class name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents further overrides (function) or inheritance (class)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void draw() final;"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class Sealed final {};"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "combination-rules",
      children: "Combination Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Combination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Validity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " alone"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base function eligible for override"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base function that cannot be overridden further"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            }), " alone"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived override (implies virtual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derived override that cannot be overridden further"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ (redundant)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler may warn; override already implies virtual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            }), " alone (function)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be used with override or virtual"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "518-abstract-class-vs-interface--detailed-table",
      children: "5.18 Abstract Class vs Interface — Detailed Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface (All-Pure)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data members"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have member variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should not have data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concrete functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have implemented functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only pure virtuals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constructors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has constructors (called by derived)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typically none"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destructor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be virtual (if polymorphic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must be virtual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access specifiers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can mix public/protected/private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public only (by convention)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple inheritance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible but can cause diamond issues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe and common"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ declaration"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mix of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual"
            }), " and concrete"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All functions ", (0,jsx_runtime.jsx)(_components.code, {
              children: "= 0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related classes sharing state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrelated classes sharing a contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Shape"
            }), " with common ", (0,jsx_runtime.jsx)(_components.code, {
              children: "color()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Serializable"
            }), " interface"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "part-iv--interview-corner",
      children: "PART IV — INTERVIEW CORNER"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q1-what-happens-if-you-call-a-virtual-function-from-a-constructor-why",
      children: "Q1: What happens if you call a virtual function from a constructor? Why?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The virtual function resolves to the version of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "currently-constructing class"
      }), ", not the most-derived class. This happens because the vptr is updated as each constructor in the hierarchy runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Base {\npublic:\n    Base() { std::cout << \"Base ctor → \"; speak(); }\n    virtual void speak() { std::cout << \"Base\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { std::cout << \"Derived ctor → \"; speak(); }\n    void speak() override { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Derived d;\n    d.speak();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Base ctor → Base\nDerived ctor → Derived\nDerived\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why:"
      }), " During ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base()"
      }), " construction, the vptr points to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base"
      }), "'s vtable — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), " hasn't been constructed yet. Calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "speak()"
      }), " dispatches to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Base::speak()"
      }), ". After ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), "'s constructor body runs, vptr is updated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q2-how-does-the-compiler-implement-virtual-function-dispatch-draw-the-vtable-layout",
      children: "Q2: How does the compiler implement virtual function dispatch? Draw the vtable layout."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The compiler uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vtable"
      }), " (per class) and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vptr"
      }), " (per object)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ASCII diagram:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "For: class Base { virtual void f(); virtual void g(); };\n     class Derived : Base { void f() override; };\n\nBase vtable:                     Derived vtable:\n┌──────────────────┐            ┌──────────────────┐\n│ typeinfo*         │            │ typeinfo*         │\n│ Base::f()         │            │ Derived::f()      │\n│ Base::g()         │            │ Base::g()         │\n└──────────────────┘            └──────────────────┘\n       ▲                                ▲\n       │                                │\nObject of type Base:            Object of type Derived:\n┌──────────────────┐            ┌──────────────────┐\n│ vptr ──────────────┘            │ vptr ──────────────┘\n│ data members      │            │ data members      │\n└──────────────────┘            └──────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dispatch of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr->f()"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load vptr from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), " (offset 0)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load function pointer from vtable slot 1 (offset 8)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indirect call"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q3-what-is-object-slicing-and-how-do-you-prevent-it",
      children: "Q3: What is object slicing and how do you prevent it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Object slicing occurs when a derived object is assigned to a base object ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "by value"
      }), ", losing the derived part."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void who() { std::cout << \"Base\\n\"; }\n};\n\nclass Derived : public Base {\npublic:\n    void who() override { std::cout << \"Derived\\n\"; }\n};\n\nint main() {\n    Derived d;\n    Base b = d;   // Sliced!\n    b.who();      // \"Base\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete base copy operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Base(const Base&) = delete;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use pointers/references"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Base& ref = d;"
            }), " — no slice"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Make base abstract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't instantiate, can't slice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use smart pointers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<Base>"
            }), " — always by pointer"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q4-what-is-the-cost-of-having-virtual-functions-when-would-you-not-use-them",
      children: "Q4: What is the cost of having virtual functions? When would you NOT use them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The costs are:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes vptr per object + vtable (one per class)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 indirect loads + 1 indirect call per virtual dispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimisation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler cannot inline virtual calls (generally)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vtable setup code in every constructor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When NOT to use virtual functions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small, frequently-created objects"
        }), " (e.g., a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Point3D"
        }), " struct used millions of times) — the vptr doubles memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tight loops"
        }), " — virtual dispatch prevents inlining and SIMD vectorisation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embedded systems"
        }), " — RTTI and vtable overhead may exceed memory budget."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "When compile-time polymorphism suffices"
        }), " — templates are faster and type-safe."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q5-can-a-pure-virtual-function-have-a-body-why-would-you-give-it-one",
      children: "Q5: Can a pure virtual function have a body? Why would you give it one?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Yes, a pure virtual function CAN have a body in C++. You provide it outside the class definition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Drawable {\npublic:\n    virtual void draw() const = 0;\n};\n\nvoid Drawable::draw() const {\n    std::cout << \"Base draw (fallback)\\n\";\n}\n\nclass Circle : public Drawable {\npublic:\n    void draw() const override {\n        Drawable::draw();\n        std::cout << \"Drawing circle\\n\";\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why you'd do this:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "default behaviour"
        }), " that derived classes can optionally call."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce that derived classes MUST override, but give them a base implementation to reuse."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Common in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Method"
        }), " design pattern."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "q6-what-is-the-difference-between-early-binding-and-late-binding",
      children: "Q6: What is the difference between early binding and late binding?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Early Binding (static)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Late Binding (dynamic)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vtable dispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly slower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inlining"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generally not"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Determined by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static type of pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic type of object"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Base* p = new Derived();\np->nonVirtual();  // Early binding → Base::nonVirtual\np->virtualFunc(); // Late binding  → Derived::virtualFunc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "q7-explain-the-final-specifier-how-does-it-help-the-compiler-optimise",
      children: ["Q7: Explain the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " specifier. How does it help the compiler optimise?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " on a virtual function prevents further overrides. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " on a class prevents inheritance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Base {\npublic:\n    virtual void f();\n};\n\nclass Derived final : public Base {\npublic:\n    void f() override;\n};\n\n// class GrandChild : public Derived { }; // ERROR: Derived is final\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimisation benefit:"
      }), " When the compiler sees a call to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived::f()"
      }), " and knows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Derived"
      }), " is final, it knows no further override exists. It can ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "devirtualise"
      }), " the call — turning the virtual dispatch into a direct call, which can then be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inlined"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void call(Derived& d) {\n    d.f();  // Devirtualised → direct call → inlineable\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "q8-how-does-dynamic_cast-work-internally",
      children: ["Q8: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " work internally?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), " uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "runtime type information"
      }), " stored in the vtable. Each vtable's first entry (slot 0) points to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeinfo"
      }), " structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Internal steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read object's vptr → vtable."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read vtable[0] → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeinfo*"
        }), " for the object's dynamic type."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if the dynamic type is the target type or a descendant of it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If yes: return the appropriate pointer (adjust offset for multiple/virtual inheritance)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no: return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nullptr"
        }), " (pointer) or throw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::bad_cast"
        }), " (reference)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time complexity:"
      }), " O(depth of hierarchy) — each level requires a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeinfo"
      }), " comparison."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "part-v--applications-in-real-systems",
      children: "PART V — APPLICATIONS IN REAL SYSTEMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "519-plugin-architectures",
      children: "5.19 Plugin Architectures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a plugin system, the main application defines an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract interface"
      }), " that all plugins must implement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// plugin_interface.h\nclass IPlugin {\npublic:\n    virtual std::string name() const = 0;\n    virtual void execute() = 0;\n    virtual ~IPlugin() = default;\n};\n\nusing create_plugin_t = IPlugin* (*)();\n\n// main.cpp — loads plugins dynamically\n#include <iostream>\n#include <vector>\n#include <memory>\n#ifdef _WIN32\n#include <windows.h>\n#else\n#include <dlfcn.h>\n#endif\n\nstd::vector<std::unique_ptr<IPlugin>> loadPlugins() {\n    std::vector<std::unique_ptr<IPlugin>> plugins;\n    #ifdef _WIN32\n    HMODULE handle = LoadLibrary(\"my_plugin.dll\");\n    auto factory = reinterpret_cast<create_plugin_t>(\n        GetProcAddress(handle, \"createPlugin\"));\n    #else\n    void* handle = dlopen(\"my_plugin.so\", RTLD_LAZY);\n    auto factory = reinterpret_cast<create_plugin_t>(\n        dlsym(handle, \"createPlugin\"));\n    #endif\n    if (factory)\n        plugins.push_back(std::unique_ptr<IPlugin>(factory()));\n    return plugins;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key polymorphic concepts:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPlugin"
      }), " as abstract base, factory returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPlugin*"
      }), ", virtual dispatch ensures ", (0,jsx_runtime.jsx)(_components.code, {
        children: "execute()"
      }), " calls the correct implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "520-device-drivers-operating-systems",
      children: "5.20 Device Drivers (Operating Systems)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Abstract class:   Driver\n  │\n  ├── USBDriver\n  │     ├── KeyboardDriver\n  │     ├── MouseDriver\n  │     └── FlashDriveDriver\n  │\n  ├── PCIeDriver\n  │     ├── NetworkCardDriver\n  │     └── GraphicsCardDriver\n  │\n  └── VirtIODriver\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Driver {\npublic:\n    virtual bool init() = 0;\n    virtual bool read(void* buffer, size_t size) = 0;\n    virtual bool write(const void* data, size_t size) = 0;\n    virtual void interruptHandler(int irq) = 0;\n    virtual ~Driver() = default;\n};\n\nclass USBKeyboardDriver : public Driver {\npublic:\n    bool init() override {\n        std::cout << \"Initialising USB keyboard...\\n\";\n        return true;\n    }\n    bool read(void* buffer, size_t size) override {\n        std::cout << \"USB keyboard: read \" << size << \" bytes\\n\";\n        return true;\n    }\n    bool write(const void* data, size_t size) override {\n        std::cout << \"USB keyboard: set LEDs\\n\";\n        return true;\n    }\n    void interruptHandler(int irq) override {\n        std::cout << \"USB keyboard interrupt\\n\";\n    }\n};\n\nvoid handleInterrupts(std::vector<Driver*>& drivers, int irq) {\n    for (auto* d : drivers)\n        d->interruptHandler(irq);  // Virtual dispatch\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "521-game-engines",
      children: "5.21 Game Engines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class GameObject {\npublic:\n    virtual void update(float deltaTime) = 0;\n    virtual void render() const = 0;\n    virtual void onCollision(GameObject* other) = 0;\n    virtual ~GameObject() = default;\n\n    Vector2 position{}, velocity{};\n    bool active = true;\n};\n\nclass Player : public GameObject {\npublic:\n    void update(float dt) override { /* Handle keyboard input */ }\n    void render() const override { /* Draw player sprite */ }\n    void onCollision(GameObject* other) override { /* Die, lose health */ }\n};\n\nclass Enemy : public GameObject {\npublic:\n    void update(float dt) override { /* AI pathfinding */ }\n    void render() const override { /* Draw enemy sprite */ }\n    void onCollision(GameObject* other) override { /* Damage player */ }\n};\n\nstd::vector<std::unique_ptr<GameObject>> entities;\n\nvoid gameLoop(float dt) {\n    for (auto& e : entities) {\n        if (e->active) e->update(dt);  // Polymorphic dispatch\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "522-gui-frameworks",
      children: "5.22 GUI Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Widget {\npublic:\n    virtual void paintEvent() { /* default: fill background */ }\n    virtual void mousePressEvent(int x, int y) { /* default: ignore */ }\n    virtual void keyPressEvent(int key) { /* default: ignore */ }\n    virtual ~Widget() = default;\n};\n\nclass Button : public Widget {\npublic:\n    void paintEvent() override {\n        // Draw rounded rectangle with label\n    }\n    void mousePressEvent(int x, int y) override {\n        // Check if click is inside bounds → emit clicked()\n    }\n};\n\nclass TextBox : public Widget {\npublic:\n    void paintEvent() override {\n        // Draw cursor, text, selection highlight\n    }\n    void keyPressEvent(int key) override {\n        // Insert character, handle backspace, move cursor\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "523-testing-and-mocking",
      children: "5.23 Testing and Mocking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class IDatabase {\npublic:\n    virtual std::vector<User> getUsers() = 0;\n    virtual bool saveUser(const User&) = 0;\n    virtual ~IDatabase() = default;\n};\n\nclass PostgresDatabase : public IDatabase {\npublic:\n    std::vector<User> getUsers() override { /* SQL query */ }\n    bool saveUser(const User&) override { /* INSERT */ }\n};\n\nclass MockDatabase : public IDatabase {\npublic:\n    std::vector<User> getUsers() override {\n        calledGetUsers_ = true;\n        return testUsers_;\n    }\n    bool saveUser(const User& u) override {\n        savedUsers_.push_back(u);\n        return true;\n    }\n    bool calledGetUsers_ = false;\n    std::vector<User> savedUsers_;\n    std::vector<User> testUsers_{User{\"Alice\"}, User{\"Bob\"}};\n};\n\nUserService svc(&mock);  // Dependency injection via interface\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "524-the-template-method-pattern",
      children: "5.24 The Template Method Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class DataProcessor {\npublic:\n    void process() {\n        readData();\n        if (validate()) {\n            transform();\n            save();\n        } else {\n            onValidationFailed();\n        }\n    }\n    virtual ~DataProcessor() = default;\n\nprotected:\n    virtual void readData() = 0;\n    virtual bool validate() { return true; }\n    virtual void transform() = 0;\n    virtual void save() = 0;\n    virtual void onValidationFailed() {\n        std::cerr << \"Validation failed\\n\";\n    }\n};\n\nclass CSVProcessor : public DataProcessor {\nprotected:\n    void readData() override { std::cout << \"Reading CSV file\\n\"; }\n    bool validate() override { std::cout << \"Validating CSV columns\\n\"; return true; }\n    void transform() override { std::cout << \"Transforming CSV rows\\n\"; }\n    void save() override { std::cout << \"Saving to CSV output\\n\"; }\n};\n\nint main() {\n    CSVProcessor csv;\n    csv.process();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reading CSV file\nValidating CSV columns\nTransforming CSV rows\nSaving to CSV output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-card",
      children: "Quick Reference Card"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual void f();"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables runtime dispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Override"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() override;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler checks base virtual exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pure virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual void f() = 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes class abstract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final (function)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() final;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops further overriding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final (class)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class C final {};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops inheritance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual destructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "virtual ~C() = default;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for polymorphic delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Downcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast<T*>(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe, returns nullptr on fail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typeid(*p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns dynamic type info"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-virtual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f();"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static binding only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-summary",
      children: "Chapter Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Polymorphism"
          }), " lets one interface serve many implementations — compile-time (overloading, templates) and run-time (virtual functions)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Function overloading"
          }), " resolves at compile time based on parameter types. The compiler ranks viable functions by conversion quality."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Operator overloading"
          }), " brings natural syntax to user-defined types. Follow the Golden Rules: preserve semantics, return by value for arithmetic, by reference for assignment."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Virtual functions"
          }), " enable runtime dispatch via the vtable/vptr mechanism. Each polymorphic object carries an 8-byte vptr; each virtual call goes through 2 loads + 1 indirect call."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "override"
            })
          }), " catches signature mismatches at compile time. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "final"
            })
          }), " prevents further overrides and enables devirtualisation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pure virtual functions"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "= 0"
          }), ") create abstract classes — interfaces that derived classes must implement."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Virtual destructors"
          }), " are mandatory in polymorphic base classes. Without them, deleting through a base pointer causes undefined behaviour."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RTTI"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "dynamic_cast"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "typeid"
          }), ") provides runtime type introspection but should be used sparingly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Object slicing"
          }), " happens when derived objects are copied by value to base objects — always use pointers/references for polymorphic types."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-world applications"
          }), " include plugin systems, device drivers, game engines, GUI frameworks, and test mocking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Draw the memory layout of a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Circle"
          }), " object that inherits from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Shape"
          }), " (with virtual ", (0,jsx_runtime.jsx)(_components.code, {
            children: "draw()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "area()"
          }), "). Label the vptr, vtable slots, and data members."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain in detail why calling a virtual function inside a constructor does NOT dispatch to the most-derived class."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between function overloading and function overriding? Give an example of each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Why does C++ not allow overloading based only on return type? What ambiguity would arise?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When would you choose ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::variant"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::visit"
          }), " over virtual functions? When would you choose virtual functions?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Design a polymorphic ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MediaPlayer"
          }), " hierarchy. Create an abstract ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Media"
          }), " class with pure virtual ", (0,jsx_runtime.jsx)(_components.code, {
            children: "play()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pause()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "stop()"
          }), ". Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "AudioMedia"
          }), " (plays MP3 files) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VideoMedia"
          }), " (plays MP4 files with subtitles). Demonstrate polymorphic behaviour through a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MediaPlayer"
          }), " class that holds a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Media*"
          }), " and delegates to it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Logger"
          }), " framework with an abstract ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ILogger"
          }), " interface and concrete ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConsoleLogger"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FileLogger"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NullLogger"
          }), " (discards all messages). Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LoggerFactory"
          }), " that creates the appropriate logger from a config string. Demonstrate that client code never knows which concrete logger it's using."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a program that demonstrates object slicing. Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Base"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Derived"
          }), " class where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Derived"
          }), " adds a data member and a virtual function override. Show: (a) slicing with assignment, (b) slicing with pass-by-value, (c) that references/pointers avoid slicing. Explain each output."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement a Minimal Plugin System"
        }), " (100-150 lines):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Define an abstract ", (0,jsx_runtime.jsx)(_components.code, {
              children: "class Filter"
            }), " with pure virtual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::string apply(const std::string&)"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UpperCaseFilter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LowerCaseFilter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReverseFilter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Rot13Filter"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FilterPipeline"
            }), " that holds a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector<std::unique_ptr<Filter>>"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pipeline reads a config string like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"uppercase|reverse|rot13\""
            }), " and creates the corresponding filter chain."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pipeline applies all filters sequentially to input text."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add a new ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RemoveSpacesFilter"
            }), " without modifying any existing code — proving OCP (Open-Closed Principle)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-chapter-references",
      children: "Cross-Chapter References"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Related Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance — how derived classes relate to base classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/oop-cpp/04-inheritance",
              children: "04-inheritance.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator overloading — deep dive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/oop-cpp/06-operator-overloading",
              children: "06-operator-overloading.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Templates — compile-time polymorphism (CRTP, SFINAE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/oop-cpp/07-templates",
              children: "07-templates.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Smart pointers — managing polymorphic objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/oop-cpp/12-smart-pointers",
              children: "12-smart-pointers.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design patterns — Factory, Strategy, Template Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/oop-cpp/16-design-patterns",
              children: "16-design-patterns.md"
            })
          })]
        })]
      })]
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