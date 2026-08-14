"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20022],{

/***/ 90066
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_12_smart_pointers_md_756_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-12-smart-pointers-md-756.json
const site_docs_courses_oop_cpp_12_smart_pointers_md_756_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/12-smart-pointers","title":"Chapter 12: Smart Pointers","description":"Previous 13-move-semantics","source":"@site/docs/courses/oop-cpp/12-smart-pointers.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/12-smart-pointers","permalink":"/ai-engineering-journey/oop-cpp/12-smart-pointers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"12-smart-pointers","slug":"/oop-cpp/12-smart-pointers","title":"Chapter 12: Smart Pointers","sidebar_label":"Chapter 12: Smart Pointers","sidebar_position":12},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 11: File I/O","permalink":"/ai-engineering-journey/oop-cpp/11-file-io"},"next":{"title":"Chapter 13: Move Semantics","permalink":"/ai-engineering-journey/oop-cpp/13-move-semantics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/12-smart-pointers.md


const frontMatter = {
	id: '12-smart-pointers',
	slug: '/oop-cpp/12-smart-pointers',
	title: 'Chapter 12: Smart Pointers',
	sidebar_label: 'Chapter 12: Smart Pointers',
	sidebar_position: 12
};
const contentTitle = 'Chapter 12: Smart Pointers';

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
  "value": "12.1 The Problem with Raw <code>new</code>/<code>delete</code>",
  "id": "121-the-problem-with-raw-newdelete",
  "level": 2
}, {
  "value": "12.2 std::unique_ptr — Exclusive Ownership",
  "id": "122-stdunique_ptr--exclusive-ownership",
  "level": 2
}, {
  "value": "12.2.1 What Is unique_ptr?",
  "id": "1221-what-is-unique_ptr",
  "level": 3
}, {
  "value": "12.2.2 Template Signature",
  "id": "1222-template-signature",
  "level": 3
}, {
  "value": "12.2.3 Construction and Basic Usage",
  "id": "1223-construction-and-basic-usage",
  "level": 3
}, {
  "value": "12.2.4 Move-Only Semantics",
  "id": "1224-move-only-semantics",
  "level": 3
}, {
  "value": "12.2.5 unique_ptr with Arrays",
  "id": "1225-unique_ptr-with-arrays",
  "level": 3
}, {
  "value": "12.2.6 Returning unique_ptr from Functions",
  "id": "1226-returning-unique_ptr-from-functions",
  "level": 3
}, {
  "value": "12.2.7 unique_ptr in Containers",
  "id": "1227-unique_ptr-in-containers",
  "level": 3
}, {
  "value": "12.2.8 Performance Characteristics of unique_ptr",
  "id": "1228-performance-characteristics-of-unique_ptr",
  "level": 3
}, {
  "value": "12.2.9 Edge Cases with unique_ptr",
  "id": "1229-edge-cases-with-unique_ptr",
  "level": 3
}, {
  "value": "12.3 std::shared_ptr — Shared Ownership",
  "id": "123-stdshared_ptr--shared-ownership",
  "level": 2
}, {
  "value": "12.3.1 What Is shared_ptr?",
  "id": "1231-what-is-shared_ptr",
  "level": 3
}, {
  "value": "12.3.2 Control Block Architecture",
  "id": "1232-control-block-architecture",
  "level": 3
}, {
  "value": "12.3.3 Construction and Basic Usage",
  "id": "1233-construction-and-basic-usage",
  "level": 3
}, {
  "value": "12.3.4 Reference Counting Dry Run",
  "id": "1234-reference-counting-dry-run",
  "level": 3
}, {
  "value": "12.3.5 Key Member Functions",
  "id": "1235-key-member-functions",
  "level": 3
}, {
  "value": "12.3.6 Thread Safety",
  "id": "1236-thread-safety",
  "level": 3
}, {
  "value": "12.3.7 shared_ptr with Custom Deleter",
  "id": "1237-shared_ptr-with-custom-deleter",
  "level": 3
}, {
  "value": "12.4 std::weak_ptr — Non-Owning Observer",
  "id": "124-stdweak_ptr--non-owning-observer",
  "level": 2
}, {
  "value": "12.4.1 What Is weak_ptr?",
  "id": "1241-what-is-weak_ptr",
  "level": 3
}, {
  "value": "12.4.2 Construction and Locking",
  "id": "1242-construction-and-locking",
  "level": 3
}, {
  "value": "12.4.3 weak_ptr Lock Dry Run",
  "id": "1243-weak_ptr-lock-dry-run",
  "level": 3
}, {
  "value": "12.4.4 weak_ptr Properties",
  "id": "1244-weak_ptr-properties",
  "level": 3
}, {
  "value": "12.5 Circular References — The shared_ptr Trap",
  "id": "125-circular-references--the-shared_ptr-trap",
  "level": 2
}, {
  "value": "12.5.1 The Problem",
  "id": "1251-the-problem",
  "level": 3
}, {
  "value": "12.5.2 The Leak Demonstration",
  "id": "1252-the-leak-demonstration",
  "level": 3
}, {
  "value": "12.5.3 Reference Count Dry Run for the Cycle",
  "id": "1253-reference-count-dry-run-for-the-cycle",
  "level": 3
}, {
  "value": "12.5.4 The Fix: weak_ptr",
  "id": "1254-the-fix-weak_ptr",
  "level": 3
}, {
  "value": "12.5.5 General Rule for Cycle Avoidance",
  "id": "1255-general-rule-for-cycle-avoidance",
  "level": 3
}, {
  "value": "12.6 enable_shared_from_this",
  "id": "126-enable_shared_from_this",
  "level": 2
}, {
  "value": "12.6.1 The Problem",
  "id": "1261-the-problem",
  "level": 3
}, {
  "value": "12.6.2 The Solution",
  "id": "1262-the-solution",
  "level": 3
}, {
  "value": "12.6.3 Important Rules",
  "id": "1263-important-rules",
  "level": 3
}, {
  "value": "12.6.4 Real-World Use: Asynchronous Callbacks",
  "id": "1264-real-world-use-asynchronous-callbacks",
  "level": 3
}, {
  "value": "12.7 std::auto_ptr — The Deprecated Forefather",
  "id": "127-stdauto_ptr--the-deprecated-forefather",
  "level": 2
}, {
  "value": "12.7.1 History",
  "id": "1271-history",
  "level": 3
}, {
  "value": "12.7.2 Why auto_ptr Failed",
  "id": "1272-why-auto_ptr-failed",
  "level": 3
}, {
  "value": "12.7.3 auto_ptr vs unique_ptr",
  "id": "1273-auto_ptr-vs-unique_ptr",
  "level": 3
}, {
  "value": "12.8 Custom Deleters — Beyond Memory",
  "id": "128-custom-deleters--beyond-memory",
  "level": 2
}, {
  "value": "12.8.1 Motivation",
  "id": "1281-motivation",
  "level": 3
}, {
  "value": "12.8.2 unique_ptr with Custom Deleter",
  "id": "1282-unique_ptr-with-custom-deleter",
  "level": 3
}, {
  "value": "12.8.3 shared_ptr with Custom Deleter",
  "id": "1283-shared_ptr-with-custom-deleter",
  "level": 3
}, {
  "value": "12.8.4 Custom Deleter Use Cases",
  "id": "1284-custom-deleter-use-cases",
  "level": 3
}, {
  "value": "12.8.5 The &quot;Wrapper&quot; Pattern for C APIs",
  "id": "1285-the-wrapper-pattern-for-c-apis",
  "level": 3
}, {
  "value": "12.9 make_shared vs Direct new — Performance Deep Dive",
  "id": "129-make_shared-vs-direct-new--performance-deep-dive",
  "level": 2
}, {
  "value": "12.9.1 Single vs Double Allocation",
  "id": "1291-single-vs-double-allocation",
  "level": 3
}, {
  "value": "12.9.2 Performance Comparison Table",
  "id": "1292-performance-comparison-table",
  "level": 3
}, {
  "value": "12.9.3 The Memory Trade-Off",
  "id": "1293-the-memory-trade-off",
  "level": 3
}, {
  "value": "12.10 make_unique — The Modern Factory",
  "id": "1210-make_unique--the-modern-factory",
  "level": 2
}, {
  "value": "12.10.1 Why make_unique Was Late to C++",
  "id": "12101-why-make_unique-was-late-to-c",
  "level": 3
}, {
  "value": "12.10.2 Exception Safety",
  "id": "12102-exception-safety",
  "level": 3
}, {
  "value": "12.10.3 Implementation (for reference)",
  "id": "12103-implementation-for-reference",
  "level": 3
}, {
  "value": "12.11 Pointer Casts with Smart Pointers",
  "id": "1211-pointer-casts-with-smart-pointers",
  "level": 2
}, {
  "value": "12.11.1 static_pointer_cast",
  "id": "12111-static_pointer_cast",
  "level": 3
}, {
  "value": "12.11.2 dynamic_pointer_cast",
  "id": "12112-dynamic_pointer_cast",
  "level": 3
}, {
  "value": "12.11.3 const_pointer_cast",
  "id": "12113-const_pointer_cast",
  "level": 3
}, {
  "value": "12.11.4 Cast Behaviour Table",
  "id": "12114-cast-behaviour-table",
  "level": 3
}, {
  "value": "12.12 std::owner_less",
  "id": "1212-stdowner_less",
  "level": 2
}, {
  "value": "12.12.1 Motivation",
  "id": "12121-motivation",
  "level": 3
}, {
  "value": "12.12.2 Aliasing Constructor and owner_less",
  "id": "12122-aliasing-constructor-and-owner_less",
  "level": 3
}, {
  "value": "12.13 Comparison Table: Raw vs Unique vs Shared vs Weak",
  "id": "1213-comparison-table-raw-vs-unique-vs-shared-vs-weak",
  "level": 2
}, {
  "value": "Selection Decision Tree",
  "id": "selection-decision-tree",
  "level": 3
}, {
  "value": "12.14 Axis &amp; Dimension Tables",
  "id": "1214-axis--dimension-tables",
  "level": 2
}, {
  "value": "Ownership Spectrum",
  "id": "ownership-spectrum",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Memory Layout Comparison",
  "id": "memory-layout-comparison",
  "level": 3
}, {
  "value": "shared_ptr Control Block Structure (Typical libstdc++ Layout)",
  "id": "shared_ptr-control-block-structure-typical-libstdc-layout",
  "level": 3
}, {
  "value": "12.15 C++17 and C++20 Enhancements",
  "id": "1215-c17-and-c20-enhancements",
  "level": 2
}, {
  "value": "C++17",
  "id": "c17",
  "level": 3
}, {
  "value": "C++20",
  "id": "c20",
  "level": 3
}, {
  "value": "12.16 Edge Cases and Pitfalls",
  "id": "1216-edge-cases-and-pitfalls",
  "level": 2
}, {
  "value": "12.16.1 Using .get() After Move",
  "id": "12161-using-get-after-move",
  "level": 3
}, {
  "value": "12.16.2 Creating shared_ptr from Raw Pointer Twice",
  "id": "12162-creating-shared_ptr-from-raw-pointer-twice",
  "level": 3
}, {
  "value": "12.16.3 shared_ptr to this Without enable_shared_from_this",
  "id": "12163-shared_ptr-to-this-without-enable_shared_from_this",
  "level": 3
}, {
  "value": "12.16.4 weak_ptr::lock() on Expired Object",
  "id": "12164-weak_ptrlock-on-expired-object",
  "level": 3
}, {
  "value": "12.16.5 Mixing make_shared and Placement new",
  "id": "12165-mixing-make_shared-and-placement-new",
  "level": 3
}, {
  "value": "12.16.6 Using shared_ptr with Objects on Stack",
  "id": "12166-using-shared_ptr-with-objects-on-stack",
  "level": 3
}, {
  "value": "12.16.7 shared_ptr with Incomplete Types",
  "id": "12167-shared_ptr-with-incomplete-types",
  "level": 3
}, {
  "value": "12.17 Interview Corner",
  "id": "1217-interview-corner",
  "level": 2
}, {
  "value": "Q1: When would you choose unique_ptr over shared_ptr?",
  "id": "q1-when-would-you-choose-unique_ptr-over-shared_ptr",
  "level": 3
}, {
  "value": "Q2: How does shared_ptr know when to delete the object?",
  "id": "q2-how-does-shared_ptr-know-when-to-delete-the-object",
  "level": 3
}, {
  "value": "Q3: What is the difference between reset() and release() on unique_ptr?",
  "id": "q3-what-is-the-difference-between-reset-and-release-on-unique_ptr",
  "level": 3
}, {
  "value": "Q4: How does weak_ptr::lock() prevent dangling access?",
  "id": "q4-how-does-weak_ptrlock-prevent-dangling-access",
  "level": 3
}, {
  "value": "Q5: Explain the N+1 allocation problem with shared_ptr(new T) vs make_shared.",
  "id": "q5-explain-the-n1-allocation-problem-with-shared_ptrnew-t-vs-make_shared",
  "level": 3
}, {
  "value": "Q6: What is the aliasing constructor of shared_ptr?",
  "id": "q6-what-is-the-aliasing-constructor-of-shared_ptr",
  "level": 3
}, {
  "value": "Q7: How does enable_shared_from_this work internally?",
  "id": "q7-how-does-enable_shared_from_this-work-internally",
  "level": 3
}, {
  "value": "Q8: Can you use unique_ptr with STL containers? What about shared_ptr?",
  "id": "q8-can-you-use-unique_ptr-with-stl-containers-what-about-shared_ptr",
  "level": 3
}, {
  "value": "12.18 Real Systems",
  "id": "1218-real-systems",
  "level": 2
}, {
  "value": "12.18.1 Chromium / Blink Engine",
  "id": "12181-chromium--blink-engine",
  "level": 3
}, {
  "value": "12.18.2 LLVM / Clang",
  "id": "12182-llvm--clang",
  "level": 3
}, {
  "value": "12.18.3 Boost.Asio (Networking)",
  "id": "12183-boostasio-networking",
  "level": 3
}, {
  "value": "12.18.4 Game Engines (Unreal Engine, Unity)",
  "id": "12184-game-engines-unreal-engine-unity",
  "level": 3
}, {
  "value": "12.18.5 C++ Standard Library Implementation (libstdc++)",
  "id": "12185-c-standard-library-implementation-libstdc",
  "level": 3
}, {
  "value": "12.19 Best Practices Checklist",
  "id": "1219-best-practices-checklist",
  "level": 2
}, {
  "value": "12.20 Summary",
  "id": "1220-summary",
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
  "value": "Further Reading",
  "id": "further-reading",
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
        id: "chapter-12-smart-pointers",
        children: "Chapter 12: Smart Pointers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/11-file-io",
          children: "11-file-io"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/13-move-semantics",
          children: "13-move-semantics"
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
        href: "../../assets/images/lessons/oop-cpp/12-smart-pointers/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/12-smart-pointers/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/12-smart-pointers/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/12-smart-pointers/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/12-smart-pointers/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/12-smart-pointers/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manage dynamic memory using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " for exclusive ownership"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " for shared ownership with reference counting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Break circular references with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create smart pointers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make_unique"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make_shared"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement custom deleters for non-memory resources"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable_shared_from_this"
        }), " safely"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply pointer casts with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static_pointer_cast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dynamic_pointer_cast"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose and fix circular reference memory leaks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the correct smart pointer type based on ownership semantics"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Raw new/delete Problems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual ownership management is error-prone and leaky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use smart pointers as the default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "unique_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive ownership, move-only, zero overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default choice for dynamic allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "shared_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference-counted shared ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only when ownership is truly shared"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "make_unique/make_shared"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred factories, exception-safe and efficient"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer over raw ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "weak_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-owning observer that locks to shared ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks reference cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Deleters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extend smart pointers beyond memory resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for files, sockets, other resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "enable_shared_from_this"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe extraction of shared_ptr from this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for async callbacks in shared ownership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pointer Casts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static_pointer_cast, dynamic_pointer_cast, const_pointer_cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe navigation of inheritance hierarchies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control Block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared metadata for shared_ptr/weak_ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single allocation for object + control block"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Raw new/delete Problems] --> B[unique_ptr]\n    A --> C[shared_ptr]\n    B --> D[make_unique]\n    C --> E[make_shared]\n    C --> F[weak_ptr]\n    F --> G[Circular References]\n    C --> H[enable_shared_from_this]\n    B --> I[Custom Deleters]\n    C --> I\n    C --> J[Control Block Layout]\n    H --> K[owner_less]\n    C --> L[Pointer Casts]\n    B --> L\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "121-the-problem-with-raw-newdelete",
      children: ["12.1 The Problem with Raw ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manual memory management in C++ introduces four categories of defects:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Defect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Leak"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), " without matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process consumes memory until OOM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Double Delete"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            }), " called twice on same pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (heap corruption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use-After-Free"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dereferencing pointer after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (crash or data corruption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exception Unsafe"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exception between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leak even with correct code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Library Book Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raw pointer is a paper slip with the book's shelf location. If you lose the slip (forget to delete), the book stays checked out forever (memory leak). If you return the book twice (double delete), the librarian gets confused (heap corruption). If you try to read the book after returning it (use-after-free), you might find someone else's book at that shelf."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smart pointers are like a self-returning library system — books get returned automatically when you're done, no matter how you leave."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// PROBLEM: Exception-unsafe raw pointer\nvoid processRaw() {\n    int* ptr = new int(42);\n    riskyOperation();        // may throw — ptr leaks!\n    delete ptr;\n}\n\n// SOLUTION: Smart pointer is RAII-safe\nvoid processSmart() {\n    auto ptr = std::make_unique<int>(42);\n    riskyOperation();        // may throw — unique_ptr destructor still runs\n}                            // memory freed automatically\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Order of Volatility & Defect Severity:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection Timing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (usually crash immediately)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use-after-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (crash or silent corruption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (gradual degradation, OOM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception unsafe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (depends on control flow)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart pointers eliminate all four categories by encoding ownership semantics into the type system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "122-stdunique_ptr--exclusive-ownership",
      children: "12.2 std::unique_ptr — Exclusive Ownership"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1221-what-is-unique_ptr",
      children: "12.2.1 What Is unique_ptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr<T>"
      }), " is a move-only smart pointer that owns a dynamically allocated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " exclusively. When the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " goes out of scope, the owned object is destroyed. It has zero overhead over a raw pointer — the same size, the same performance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Library Card:"
      }), "\nA library card is a unique credential. Only one person can hold a specific card at a time. If you want to give your card to someone else, you must surrender it (move). You cannot photocopy it (copy). When you leave the library, the card is returned to the desk (automatic cleanup)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — House Key:"
      }), "\nYou have the only key to a house. You can hand the key to someone else (move), but now you no longer have it. You cannot duplicate the key (copy). When the last person with the key leaves town, the house is automatically sold (destructor runs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1222-template-signature",
      children: "12.2.2 Template Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template<typename T, typename Deleter = std::default_delete<T>>\nclass unique_ptr {\n    // ...\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " — the managed type (may be incomplete at point of declaration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Deleter"
        }), " — callable that destroys the object (default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1223-construction-and-basic-usage",
      children: "12.2.3 Construction and Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <iostream>\n\nclass Resource {\npublic:\n    Resource(int id) : id_(id) {\n        std::cout << \"Resource(\" << id_ << \") acquired\\n\";\n    }\n    ~Resource() {\n        std::cout << \"Resource(\" << id_ << \") released\\n\";\n    }\n    void work() const {\n        std::cout << \"Resource(\" << id_ << \") working\\n\";\n    }\nprivate:\n    int id_;\n};\n\nint main() {\n    // Construction via new (works in C++11)\n    std::unique_ptr<Resource> ptr1(new Resource(1));\n\n    // Construction via make_unique (preferred, C++14+)\n    auto ptr2 = std::make_unique<Resource>(2);\n\n    // Arrow and dereference operators\n    ptr1->work();     // operator->\n    (*ptr1).work();   // operator*\n\n    // Boolean conversion — check if non-null\n    if (ptr1) {\n        std::cout << \"ptr1 owns a Resource\\n\";\n    }\n\n    // get() — access raw pointer (non-owning)\n    Resource* raw = ptr1.get();\n\n    // release() — relinquish ownership, return raw pointer\n    Resource* taken = ptr2.release();  // ptr2 is now null\n    delete taken;                       // must delete manually now\n\n    // reset() — delete current object, optionally take new one\n    ptr1.reset(new Resource(3));        // old Resource(1) destroyed\n    ptr1.reset();                       // Resource(3) destroyed, ptr1 null\n\n    // swap()\n    auto a = std::make_unique<Resource>(10);\n    auto b = std::make_unique<Resource>(20);\n    a.swap(b);                          // a owns 20, b owns 10\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Resource(1) acquired\nResource(2) acquired\nResource(1) working\nResource(1) working\nptr1 owns a Resource\nResource(2) released\nResource(1) released\nResource(3) acquired\nResource(3) released\nResource(10) acquired\nResource(20) acquired\nResource(20) released\nResource(10) released\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1224-move-only-semantics",
      children: "12.2.4 Move-Only Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto src = std::make_unique<int>(42);\n\n// auto dst = src;          // ERROR: copy disabled\nauto dst = std::move(src);  // OK: transfer ownership\n\n// src is now null\nif (!src) {\n    std::cout << \"src is empty after move\\n\";\n}\n\nstd::cout << *dst << '\\n';  // 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Move Operation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "src state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dst state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto src = make_unique<int>(42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns int(42)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto dst = std::move(src)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns int(42)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dst"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*dst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int(42) readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dst"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "end of scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dst destroyed, int freed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1225-unique_ptr-with-arrays",
      children: "12.2.5 unique_ptr with Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++11 provides a partial specialization for arrays:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Array form — calls delete[] automatically\nstd::unique_ptr<int[]> arr(new int[5]{1, 2, 3, 4, 5});\n\n// C++17: make_unique for arrays\nauto arr2 = std::make_unique<int[]>(100);\narr2[0] = 42;\n\n// No pointer arithmetic on unique_ptr itself\n// int* raw = arr2 + 1;   // ERROR: no operator+\nint* raw = arr2.get() + 1;  // OK: use get()\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " does NOT have a built-in array specialization — you must provide a custom deleter if managing arrays with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1226-returning-unique_ptr-from-functions",
      children: "12.2.6 Returning unique_ptr from Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::unique_ptr<Resource> createResource(int id) {\n    return std::make_unique<Resource>(id);\n    // Implicit move — no std::move needed (named RVO applies)\n}\n\nint main() {\n    auto res = createResource(42);   // ownership transferred to caller\n    res->work();\n}   // Resource destroyed here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This pattern is essential for factory functions — ownership flows naturally from callee to caller."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1227-unique_ptr-in-containers",
      children: "12.2.7 unique_ptr in Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <memory>\n\nint main() {\n    std::vector<std::unique_ptr<int>> vec;\n    vec.push_back(std::make_unique<int>(1));\n    vec.push_back(std::make_unique<int>(2));\n\n    // vec.push_back(copy) would fail — must move\n    auto ptr = std::make_unique<int>(3);\n    vec.push_back(std::move(ptr));\n\n    for (const auto& p : vec) {\n        std::cout << *p << ' ';\n    }\n    std::cout << '\\n';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1228-performance-characteristics-of-unique_ptr",
      children: "12.2.8 Performance Characteristics of unique_ptr"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "unique_ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(void*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(void*)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construction (make)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One indirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One indirection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer copy + null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1:1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One delete (if non-null)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Deleter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-dependent size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " with default deleter is literally as fast as a raw pointer — the optimizer inlines everything."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1229-edge-cases-with-unique_ptr",
      children: "12.2.9 Edge Cases with unique_ptr"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<T>(nullptr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid, empty state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move from null unique_ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target becomes null, source stays null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reset(nullptr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe, no-op if already null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "release()"
            }), " on null"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom deleter with null object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleter still called (must handle null)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " is incomplete type"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration OK, but destructor must see complete type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "123-stdshared_ptr--shared-ownership",
      children: "12.3 std::shared_ptr — Shared Ownership"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1231-what-is-shared_ptr",
      children: "12.3.1 What Is shared_ptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr<T>"
      }), " implements shared ownership via reference counting. Multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " instances can own the same object. The object is destroyed when the last owning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " is destroyed. Copying increments the reference count; destruction decrements it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Netflix Account:"
      }), "\nA Netflix account (the managed object) is shared by a family. Each family member who logs in increments the \"active user\" count. When a member logs out, the count decrements. The account is cancelled (destroyed) only when the last member logs out. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " is like a guest pass — they can watch only if someone else is currently paying for the account (the object still exists)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Condo Timeshare:"
      }), "\nMultiple people own shares in a condo. Each person has a key (shared_ptr). The condo exists as long as at least one owner holds a key. When the last owner sells their share, the condo is sold off (destroyed). A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " is like a visitor who can stay only while at least one owner is present."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1232-control-block-architecture",
      children: "12.3.2 Control Block Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), ", the implementation allocates a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "control block"
      }), " — a separate metadata structure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────┐\n│     shared_ptr<T> p1     │\n│  ┌────────────────────┐  │\n│  │ T* ptr  ────────────────►┌──────────┐\n│  │ ControlBlock* cb ───────►│   T obj  │\n│  └────────────────────┘  │  └──────────┘\n└──────────────────────────┘\n                            │  Control Block       │\n┌──────────────────────────┐  ┌──────────────────┐ │\n│     shared_ptr<T> p2     │  │ ref_count: 2     │ │\n│  ┌────────────────────┐  │  │ weak_count: 0    │ │\n│  │ T* ptr  ────────────────►│ deleter (opt)    │ │\n│  │ ControlBlock* cb ───────►│ allocator (opt)  │ │\n│  └────────────────────┘  │  └──────────────────┘ │\n└──────────────────────────┘                        │\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make_shared"
      }), ", the object and control block are allocated in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single memory block"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────┐\n│  Single Allocation (make_shared)         │\n│  ┌──────────────────┬──────────────────┐ │\n│  │ Control Block    │   T object       │ │\n│  │ ref_count: 2     │                  │ │\n│  │ weak_count: 0    │                  │ │\n│  └──────────────────┴──────────────────┘ │\n└──────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Control Block Fields:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Atomic?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ref_count"
            }), " (use_count)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Number of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr"
            }), " owners"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_count"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Number of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr"
            }), " observers + 1 if ref_count > 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deleter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom deleter function pointer/object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (type-erased)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allocator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (type-erased)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1233-construction-and-basic-usage",
      children: "12.3.3 Construction and Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <iostream>\n\nclass SharedResource {\npublic:\n    SharedResource(const std::string& name) : name_(name) {\n        std::cout << \"SharedResource(\" << name_ << \") created\\n\";\n    }\n    ~SharedResource() {\n        std::cout << \"SharedResource(\" << name_ << \") destroyed\\n\";\n    }\n    void use() const {\n        std::cout << \"Using \" << name_ << \"\\n\";\n    }\nprivate:\n    std::string name_;\n};\n\nint main() {\n    // Preferred: single allocation for object + control block\n    auto p1 = std::make_shared<SharedResource>(\"DataCache\");\n    std::cout << \"use_count: \" << p1.use_count() << \"\\n\";  // 1\n\n    {\n        auto p2 = p1;   // copy: ref_count becomes 2\n        auto p3 = p1;   // copy: ref_count becomes 3\n        std::cout << \"use_count: \" << p1.use_count() << \"\\n\";  // 3\n\n        p2->use();\n    }   // p2, p3 destroyed: ref_count back to 1\n\n    std::cout << \"use_count: \" << p1.use_count() << \"\\n\";  // 1\n    p1.reset();     // ref_count becomes 0: object destroyed\n    std::cout << \"Object should be gone now\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SharedResource(DataCache) created\nuse_count: 1\nuse_count: 3\nUsing DataCache\nuse_count: 1\nSharedResource(DataCache) destroyed\nObject should be gone now\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1234-reference-counting-dry-run",
      children: "12.3.4 Reference Counting Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider this code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto a = std::make_shared<int>(100);  // Step 1\nauto b = a;                            // Step 2\nauto c = a;                            // Step 3\nb.reset();                             // Step 4\nauto d = c;                            // Step 5\nc.reset();                             // Step 6\nd.reset();                             // Step 7\na.reset();                             // Step 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ref_count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object Alive?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a = make_shared<int>(100)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b = a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c = a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b.reset()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d = c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.reset()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d.reset()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a.reset()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No — freed"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1235-key-member-functions",
      children: "12.3.5 Key Member Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "use_count()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns current reference count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For debugging only; racy in production"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "use_count() == 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated in C++17, removed in C++20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns raw pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-owning access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reset()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrements count, releases if last"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replaces ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p = nullptr"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reset(p)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Decrements count, takes ownership of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old object may be destroyed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "swap(other)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchanges managed objects and control blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1236-thread-safety",
      children: "12.3.6 Thread Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control block"
        }), " (ref count, weak count): Thread-safe (atomic operations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Managed object"
        }), ": NOT thread-safe — accessing the same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " from multiple threads without synchronization is a data race"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The shared_ptr itself"
        }), ": NOT thread-safe — concurrent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reset()"
        }), " and dereference on the same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " object is UB"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto sp = std::make_shared<int>(42);\n\n// Thread A:\nstd::shared_ptr<int> copy = sp;   // OK: copying shared_ptr is thread-safe\n                                   // (atomic increment of control block)\n\n// Thread B:\nsp.reset();                        // Race if A is also using sp!\n                                   // Use a mutex or atomic<shared_ptr>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Multiple threads can read/write ", (0,jsx_runtime.jsx)(_components.em, {
        children: "different"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " objects pointing to the same managed object safely. Multiple threads reading/writing the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "same"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " object must synchronize."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1237-shared_ptr-with-custom-deleter",
      children: "12.3.7 shared_ptr with Custom Deleter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), ", the deleter is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " part of the template signature — it is type-erased (stored in the control block):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Custom deleter type does NOT appear in the type\nauto logDeleter = [](int* p) {\n    std::cout << \"Deleting int with value \" << *p << \"\\n\";\n    delete p;\n};\n\nstd::shared_ptr<int> p(new int(42), logDeleter);\n// Type is still shared_ptr<int>, not shared_ptr<int, decltype(deleter)>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This means you can put ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr<T>"
      }), " with different deleters into the same container:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<std::shared_ptr<FILE>> files;\nfiles.push_back({fopen(\"a.txt\", \"r\"), &fclose});\nfiles.push_back({fopen(\"b.txt\", \"r\"), &fclose});\n// All same type — vector works\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "124-stdweak_ptr--non-owning-observer",
      children: "12.4 std::weak_ptr — Non-Owning Observer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1241-what-is-weak_ptr",
      children: "12.4.1 What Is weak_ptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr<T>"
      }), " holds a non-owning \"weak reference\" to an object managed by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), ". It does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " increment the reference count. To access the object, you must ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lock()"
      }), " it, which returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nullptr"
      }), " if the object has been destroyed)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — GPS Coordinates of a House:"
      }), "\nA GPS coordinate (weak_ptr) tells you where a house is, but it doesn't give you ownership. You can visit the house only if someone still owns it (lock succeeds). If the house has been demolished (object destroyed), the GPS leads to an empty lot (lock returns null)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Movie Ticket Stub:"
      }), "\nA movie ticket stub (weak_ptr) lets you re-enter the theater only if the movie is still playing (object alive). Once the movie ends (object destroyed), the stub is worthless. The stub never counts toward the audience size (doesn't increment ref count)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1242-construction-and-locking",
      children: "12.4.2 Construction and Locking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <iostream>\n\nint main() {\n    auto sp = std::make_shared<std::string>(\"Hello, World!\");\n    std::weak_ptr<std::string> wp = sp;   // ref_count unchanged\n\n    std::cout << \"use_count after weak_ptr creation: \"\n              << sp.use_count() << \"\\n\";   // still 1\n\n    // lock() returns a shared_ptr (or null if expired)\n    if (auto locked = wp.lock()) {\n        std::cout << \"Accessible: \" << *locked << \"\\n\";\n    }\n\n    sp.reset();   // destroy the string\n\n    // expired() checks if object is gone\n    std::cout << \"Expired: \" << wp.expired() << \"\\n\";  // 1 (true)\n\n    if (auto locked = wp.lock()) {\n        std::cout << \"This never prints\\n\";\n    } else {\n        std::cout << \"Object has been destroyed\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "use_count after weak_ptr creation: 1\nAccessible: Hello, World!\nExpired: 1\nObject has been destroyed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1243-weak_ptr-lock-dry-run",
      children: "12.4.3 weak_ptr Lock Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto sp = std::make_shared<int>(42);   // Step 1\nstd::weak_ptr<int> wp = sp;            // Step 2\nauto locked1 = wp.lock();               // Step 3\nsp.reset();                              // Step 4\nauto locked2 = wp.lock();               // Step 5\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ref_count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "weak_count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "locked1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "locked2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "make_shared<int>(42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "wp = sp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "locked1 = wp.lock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sp.reset()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destroyed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "locked2 = wp.lock()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "null"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The control block survives as long as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_count > 0"
      }), ", even after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ref_count"
      }), " hits 0. This allows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr::lock()"
      }), " to return null safely rather than dangling."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1244-weak_ptr-properties",
      children: "12.4.4 weak_ptr Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increments ref_count?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents object destruction?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can access object directly?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (must lock)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-safe lock?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (atomic)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size of two raw pointers on typical implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break cycles, caches, observers, timers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "125-circular-references--the-shared_ptr-trap",
      children: "12.5 Circular References — The shared_ptr Trap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1251-the-problem",
      children: "12.5.1 The Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When two objects hold ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " to each other, neither's reference count can reach zero — they form a cycle that leaks memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Two People Holding Each Other's Keys:"
      }), "\nAlice and Bob each hold a key to the other's apartment. Neither can leave town because each believes someone else needs their apartment. They're stuck forever — the apartments can never be vacated."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy — Clinging Toddlers:"
      }), "\nTwo toddlers each grab the other's shirt and won't let go. Neither can go home (be destroyed) because each is holding the other. A parent (weak_ptr) would let one go without getting trapped."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1252-the-leak-demonstration",
      children: "12.5.2 The Leak Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <iostream>\n\nstruct Node {\n    std::shared_ptr<Node> next;\n    int value;\n\n    explicit Node(int v) : value(v) {\n        std::cout << \"Node(\" << value << \") created\\n\";\n    }\n    ~Node() {\n        std::cout << \"Node(\" << value << \") destroyed\\n\";\n    }\n};\n\nint main() {\n    std::cout << \"=== Creating cycle ===\\n\";\n    {\n        auto a = std::make_shared<Node>(1);\n        auto b = std::make_shared<Node>(2);\n\n        std::cout << \"a use_count: \" << a.use_count() << \"\\n\";  // 1\n        std::cout << \"b use_count: \" << b.use_count() << \"\\n\";  // 1\n\n        a->next = b;    // a holds shared_ptr to b\n        b->next = a;    // b holds shared_ptr to a — CYCLE!\n\n        std::cout << \"a use_count: \" << a.use_count() << \"\\n\";  // 2\n        std::cout << \"b use_count: \" << b.use_count() << \"\\n\";  // 2\n    }   // a and b go out of scope, but ref counts never reach 0\n    std::cout << \"=== After scope (neither Node destroyed) ===\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Creating cycle ===\nNode(1) created\nNode(2) created\na use_count: 1\nb use_count: 1\na use_count: 2\nb use_count: 2\n=== After scope (neither Node destroyed) ===\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Node(1) destroyed\" and \"Node(2) destroyed\" never print."
      }), " The program leaks memory silently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1253-reference-count-dry-run-for-the-cycle",
      children: "12.5.3 Reference Count Dry Run for the Cycle"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a.ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b.ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a->next"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b->next"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a = make_shared<Node>(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b = make_shared<Node>(2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a->next = b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b->next = a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " out of scope"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2→", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a's copy released"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            }), " out of scope"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2→", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "owns b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b's copy released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a alive via b->next"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b alive via a->next"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both counts stuck at 1 — neither object can be freed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1254-the-fix-weak_ptr",
      children: "12.5.4 The Fix: weak_ptr"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " for the back-reference to break the cycle:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct NodeFixed {\n    std::shared_ptr<NodeFixed> next;\n    std::weak_ptr<NodeFixed> prev;   // BACK-REFERENCE IS WEAK\n    int value;\n\n    explicit NodeFixed(int v) : value(v) {\n        std::cout << \"NodeFixed(\" << value << \") created\\n\";\n    }\n    ~NodeFixed() {\n        std::cout << \"NodeFixed(\" << value << \") destroyed\\n\";\n    }\n};\n\nint main() {\n    {\n        auto a = std::make_shared<NodeFixed>(1);\n        auto b = std::make_shared<NodeFixed>(2);\n\n        a->next = b;\n        b->prev = a;         // weak_ptr — ref_count NOT incremented\n\n        std::cout << \"a use_count: \" << a.use_count() << \"\\n\";  // 1\n        std::cout << \"b use_count: \" << b.use_count() << \"\\n\";  // 2\n\n        // Access via prev safely\n        if (auto prev = b->prev.lock()) {\n            std::cout << \"b's prev has value: \" << prev->value << \"\\n\";\n        }\n    }   // b destroyed first (ref 2→1→0), then a (ref 1→0)\n    std::cout << \"=== Both Nodes freed ===\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NodeFixed(1) created\nNodeFixed(2) created\na use_count: 1\nb use_count: 2\nb's prev has value: 1\nNodeFixed(2) destroyed\nNodeFixed(1) destroyed\n=== Both Nodes freed ===\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1255-general-rule-for-cycle-avoidance",
      children: "12.5.5 General Rule for Cycle Avoidance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In any ownership hierarchy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parent → Child:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " (owning direction)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Child → Parent:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        }), " or raw pointer (non-owning back-reference)"]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Relationship"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owning Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree: parent → children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent owns children"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<Child>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree: child → parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child observes parent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr<Parent>"
            }), " or raw pointer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph: bidirectional edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External container owns nodes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<Node>"
            }), " inside container"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG: node → dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node owns dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<Dep>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG: reverse lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional back-reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr<Node>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache: key → value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache owns values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<Value>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache: eviction callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timed access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr<Value>"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "126-enable_shared_from_this",
      children: "12.6 enable_shared_from_this"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1261-the-problem",
      children: "12.6.1 The Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sometimes an object needs to obtain a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " to itself (", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), "). But simply doing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr<T>(this)"
      }), " creates a second, independent control block — leading to double deletion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// DANGEROUS: Never do this\nstruct Bad : std::enable_shared_from_this<Bad> {\n    std::shared_ptr<Bad> getShared() {\n        return std::shared_ptr<Bad>(this);  // NEW control block!\n    }\n};\n\nint main() {\n    auto p1 = std::make_shared<Bad>();\n    auto p2 = p1->getShared();   // Two independent control blocks!\n    // Both think ref_count is 1 — double delete on destruction\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1262-the-solution",
      children: "12.6.2 The Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inherit from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::enable_shared_from_this<T>"
      }), ", then call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_from_this()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <iostream>\n\nstruct Good : std::enable_shared_from_this<Good> {\n    int value = 42;\n\n    std::shared_ptr<Good> getShared() {\n        return shared_from_this();  // Uses EXISTING control block\n    }\n\n    ~Good() {\n        std::cout << \"Good destroyed\\n\";\n    }\n};\n\nint main() {\n    auto p1 = std::make_shared<Good>();\n    std::cout << \"use_count: \" << p1.use_count() << \"\\n\";  // 1\n\n    auto p2 = p1->getShared();\n    std::cout << \"use_count: \" << p1.use_count() << \"\\n\";  // 2\n\n    // p1 and p2 share the SAME control block — single delete\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "use_count: 1\nuse_count: 2\nGood destroyed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1263-important-rules",
      children: "12.6.3 Important Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Must be managed by shared_ptr first"
        }), " — calling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_from_this()"
        }), " on an object not yet owned by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " throws ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::bad_weak_ptr"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Publicly inherit"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable_shared_from_this<T>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The CRTP pattern:"
        }), " You pass the derived class as the template parameter"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Manager : std::enable_shared_from_this<Manager> {\n    void spawnTask() {\n        // Capture shared_from_this in a lambda for async work\n        auto self = shared_from_this();\n        std::thread([self] {\n            self->doWork();  // Keeps Manager alive during thread execution\n        }).detach();\n    }\n    void doWork() { /* ... */ }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1264-real-world-use-asynchronous-callbacks",
      children: "12.6.4 Real-World Use: Asynchronous Callbacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class DownloadManager : public std::enable_shared_from_this<DownloadManager> {\npublic:\n    void startDownload(const std::string& url) {\n        auto self = shared_from_this();  // prevent deletion during async\n        http_client_.get(url, [self](Response res) {\n            self->onDownloadComplete(res);\n        });\n    }\n\n    void onDownloadComplete(const Response& res) {\n        std::cout << \"Downloaded \" << res.size << \" bytes\\n\";\n    }\n};\n\nint main() {\n    auto mgr = std::make_shared<DownloadManager>();\n    mgr->startDownload(\"https://example.com/file\");\n    // mgr could be reset elsewhere, but the lambda keeps it alive\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "127-stdauto_ptr--the-deprecated-forefather",
      children: "12.7 std::auto_ptr — The Deprecated Forefather"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1271-history",
      children: "12.7.1 History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "auto_ptr"
      }), " was C++98's first attempt at a smart pointer. It attempted \"copy semantics\" by transferring ownership on copy — a design that broke fundamental expectations. Deprecated in C++11, removed in C++17."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1272-why-auto_ptr-failed",
      children: "12.7.2 Why auto_ptr Failed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++98 — auto_ptr (DO NOT USE)\nstd::auto_ptr<int> p1(new int(42));\nstd::auto_ptr<int> p2 = p1;   // p1 is silently NULLIFIED!\n\n// This violates the principle of least surprise\n// p1 and p2 are not equivalent after \"copy\"\n\n// Breaking containers:\nstd::vector<std::auto_ptr<int>> vec;\nvec.push_back(std::auto_ptr<int>(new int(1)));\nvec.push_back(std::auto_ptr<int>(new int(2)));\n// std::sort(vec.begin(), vec.end());  // UB! sort copies elements\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1273-auto_ptr-vs-unique_ptr",
      children: "12.7.3 auto_ptr vs unique_ptr"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "auto_ptr (C++98)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "unique_ptr (C++11+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silently nullifies source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy deleted (compile error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via copy (confusing)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move"
            }), " (explicit)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (partial specialization)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom deleter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container compatible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (broken by sort, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (move-aware)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed in C++17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current standard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Moral:"
      }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " — never ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto_ptr"
      }), ". If you see ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto_ptr"
      }), " in legacy code, it's a bug waiting to happen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "128-custom-deleters--beyond-memory",
      children: "12.8 Custom Deleters — Beyond Memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1281-motivation",
      children: "12.8.1 Motivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart pointers manage more than heap memory: file handles, sockets, database connections, mutex locks, and any resource with acquire/release semantics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1282-unique_ptr-with-custom-deleter",
      children: "12.8.2 unique_ptr with Custom Deleter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The deleter is part of the type signature, increasing the size of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <cstdio>\n#include <iostream>\n\n// Custom deleter as a function\nvoid fileCloser(std::FILE* fp) {\n    if (fp) {\n        std::fclose(fp);\n        std::cout << \"File closed\\n\";\n    }\n}\n\nint main() {\n    // Function pointer deleter — sizeof(unique_ptr) = 2 pointers\n    std::unique_ptr<std::FILE, decltype(&fileCloser)>\n        fp1(std::fopen(\"test.txt\", \"w\"), &fileCloser);\n\n    // Lambda deleter — sizeof(unique_ptr) = 1 pointer (stateless lambda)\n    auto lambdaDeleter = [](std::FILE* fp) {\n        if (fp) {\n            std::fclose(fp);\n            std::cout << \"Lambda file closer\\n\";\n        }\n    };\n    std::unique_ptr<std::FILE, decltype(lambdaDeleter)>\n        fp2(std::fopen(\"test2.txt\", \"w\"), lambdaDeleter);\n\n    // Mutable lambda with state — sizeof includes the state\n    int closeCount = 0;\n    auto countingDeleter = [&closeCount](std::FILE* fp) mutable {\n        if (fp) {\n            std::fclose(fp);\n            ++closeCount;\n            std::cout << \"Closed file #\" << closeCount << \"\\n\";\n        }\n    };\n    // Stateful deleter increases unique_ptr size\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1283-shared_ptr-with-custom-deleter",
      children: "12.8.3 shared_ptr with Custom Deleter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The deleter is type-erased in the control block — not part of the type:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// All of these are shared_ptr<FILE> — same type!\nstd::shared_ptr<FILE> sp1(fopen(\"a.txt\", \"r\"), &fclose);\nstd::shared_ptr<FILE> sp2(fopen(\"b.txt\", \"r\"), [](FILE* f) {\n    std::cout << \"Custom close\\n\";\n    fclose(f);\n});\n\n// Put in same vector:\nstd::vector<std::shared_ptr<FILE>> files;\nfiles.push_back(sp1);\nfiles.push_back(sp2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1284-custom-deleter-use-cases",
      children: "12.8.4 Custom Deleter Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Acquire"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deleter"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&fclose"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX file descriptor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "open()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&close"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Socket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "socket()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&close"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX mutex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_lock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pthread_mutex_unlock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlock lambda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windows HANDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CreateFile()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CloseHandle()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&CloseHandle"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "malloc'd memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&free"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MyMalloc()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MyFree()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&MyFree"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite connection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sqlite3_open()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sqlite3_close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&sqlite3_close"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1285-the-wrapper-pattern-for-c-apis",
      children: "12.8.5 The \"Wrapper\" Pattern for C APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// POSIX file descriptor wrapper\nstruct FdDeleter {\n    void operator()(int* fd) {\n        if (fd && *fd >= 0) {\n            ::close(*fd);\n            std::cout << \"FD \" << *fd << \" closed\\n\";\n        }\n        delete fd;\n    }\n};\n\nusing unique_fd = std::unique_ptr<int, FdDeleter>;\n\nunique_fd createSocket() {\n    int sock = ::socket(AF_INET, SOCK_STREAM, 0);\n    if (sock < 0) return nullptr;\n    return unique_fd(new int(sock));\n}\n\n// Usage:\nauto sock = createSocket();\n// Automatically closes when sock goes out of scope\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "129-make_shared-vs-direct-new--performance-deep-dive",
      children: "12.9 make_shared vs Direct new — Performance Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1291-single-vs-double-allocation",
      children: "12.9.1 Single vs Double Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Version 1: make_shared — SINGLE allocation\nauto p1 = std::make_shared<MyClass>(args);\n// Memory layout:\n// [ control block | MyClass object ]\n// One call to operator new\n\n// Version 2: shared_ptr(new T) — TWO allocations\nstd::shared_ptr<MyClass> p2(new MyClass(args));\n// Allocation 1: new MyClass(args)\n// Allocation 2: internal allocation for control block\n// Two calls to operator new\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1292-performance-comparison-table",
      children: "12.9.2 Performance Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "make_shared"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr(new T)"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache locality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (object + control block adjacent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (separate memory locations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of leak (rare, but possible)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom deleter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control block persists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until last weak_ptr destroyed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until last weak_ptr destroyed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory footprint"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["~", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(T) + sizeof(ControlBlock)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same total, but fragmented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object stays in same block as control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object can be freed independently"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1293-the-memory-trade-off",
      children: "12.9.3 The Memory Trade-Off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "make_shared"
      }), " has one downside: the object's memory cannot be freed until the last ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " dies, because the object and control block occupy the same allocation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto sp = std::make_shared<LargeObject>(1000);\nstd::weak_ptr<LargeObject> wp = sp;\nsp.reset();  // Object destructor runs, but memory stays allocated\n// LargeObject's memory NOT reclaimed until wp dies\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr(new T)"
      }), ", after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sp.reset()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto sp = std::shared_ptr<LargeObject>(new LargeObject(1000));\nstd::weak_ptr<LargeObject> wp = sp;\nsp.reset();  // Object destructor runs, memory freed\n// Only the small control block stays allocated\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make_shared"
      }), " by default. If profiling shows that large objects stay alive via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " after all owners release, switch to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr(new T)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1210-make_unique--the-modern-factory",
      children: "12.10 make_unique — The Modern Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12101-why-make_unique-was-late-to-c",
      children: "12.10.1 Why make_unique Was Late to C++"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::make_unique"
      }), " was accidentally omitted from C++11. It was added as a DR (defect report) in C++14. Herb Sutter's famous GotW #89 article pushed for its inclusion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12102-exception-safety",
      children: "12.10.2 Exception Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// RISKY: Potential leak\nvoid f(std::unique_ptr<A> a, std::unique_ptr<B> b);\n\nf(std::unique_ptr<A>(new A), std::unique_ptr<B>(new B));\n// Evaluation order is unspecified!\n// Scenario: new A succeeds, new B throws → A leaks\n\n// SAFE: No leak possible\nf(std::make_unique<A>(), std::make_unique<B>());\n// Each temporary is a full-expression — no leak window\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12103-implementation-for-reference",
      children: "12.10.3 Implementation (for reference)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template<typename T, typename... Args>\nstd::unique_ptr<T> make_unique(Args&&... args) {\n    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1211-pointer-casts-with-smart-pointers",
      children: "12.11 Pointer Casts with Smart Pointers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Raw pointer casts (", (0,jsx_runtime.jsx)(_components.code, {
        children: "static_cast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const_cast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reinterpret_cast"
      }), ") do not work directly with smart pointers. The standard library provides cast counterparts that operate on smart pointers:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Raw Cast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Smart Pointer Cast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<T*>(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_pointer_cast<T>(sp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downcast/upcast (no runtime check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast<T*>(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_pointer_cast<T>(sp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic downcast (runtime check)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const_cast<T*>(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const_pointer_cast<T>(sp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove/add const"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reinterpret_cast<T*>(p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not provided for smart pointers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12111-static_pointer_cast",
      children: "12.11.1 static_pointer_cast"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Base {\n    virtual ~Base() = default;\n    virtual const char* name() const { return \"Base\"; }\n};\n\nstruct Derived : Base {\n    const char* name() const override { return \"Derived\"; }\n    void derivedOnly() { std::cout << \"Derived-specific\\n\"; }\n};\n\nint main() {\n    auto derived = std::make_shared<Derived>();\n\n    // Upcast (implicit conversion already works, but explicit is fine)\n    std::shared_ptr<Base> base = derived;  // implicit upcast\n\n    // Downcast via static_pointer_cast\n    auto downcasted = std::static_pointer_cast<Derived>(base);\n    downcasted->derivedOnly();\n\n    std::cout << \"use_count: \" << derived.use_count() << \"\\n\";  // 3\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12112-dynamic_pointer_cast",
      children: "12.11.2 dynamic_pointer_cast"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Animal {\n    virtual ~Animal() = default;\n    virtual const char* sound() const = 0;\n};\n\nstruct Dog : Animal {\n    const char* sound() const override { return \"Woof\"; }\n    void fetch() { std::cout << \"Fetching stick\\n\"; }\n};\n\nstruct Cat : Animal {\n    const char* sound() const override { return \"Meow\"; }\n};\n\nvoid playWith(std::shared_ptr<Animal> animal) {\n    if (auto dog = std::dynamic_pointer_cast<Dog>(animal)) {\n        dog->fetch();   // Safe: dog is non-null if original was Dog\n    } else {\n        std::cout << \"Not a dog, can't fetch\\n\";\n    }\n}\n\nint main() {\n    playWith(std::make_shared<Dog>());  // \"Fetching stick\"\n    playWith(std::make_shared<Cat>());  // \"Not a dog, can't fetch\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fetching stick\nNot a dog, can't fetch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12113-const_pointer_cast",
      children: "12.11.3 const_pointer_cast"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void legacyApi(char* str);   // Takes non-const but doesn't modify\n\nint main() {\n    auto constStr = std::make_shared<const std::string>(\"Hello\");\n\n    // Remove const for legacy API\n    auto mutableStr = std::const_pointer_cast<std::string>(constStr);\n    legacyApi(&(*mutableStr));\n\n    // Original ref_count now 2 — both shared_ptrs point to same object\n    std::cout << constStr.use_count() << \"\\n\";  // 2\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " Only use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const_pointer_cast"
      }), " when you are certain the callee does not modify the object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12114-cast-behaviour-table",
      children: "12.11.4 Cast Behaviour Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Cast"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Null Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type Mismatch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_pointer_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behaviour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_pointer_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime (vtable lookup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const_pointer_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1212-stdowner_less",
      children: "12.12 std::owner_less"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "owner_less"
      }), " allows comparing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " by ownership (control block address) rather than by the managed object's value. This enables using smart pointers as keys in ordered associative containers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::set"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::map"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12121-motivation",
      children: "12.12.1 Motivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::shared_ptr<int> a(new int(42));\nstd::shared_ptr<int> b(a);            // same ownership group\n\n// std::less compares by get() — the raw pointer value\n// std::owner_less compares by control block address\n\nstd::set<std::shared_ptr<int>> valSet;\nvalSet.insert(a);   // uses std::less<shared_ptr<int>> — compares *a\nvalSet.insert(b);   // if *a == *b, might not insert\n\nstd::set<std::shared_ptr<int>, std::owner_less<std::shared_ptr<int>>> ownerSet;\nownerSet.insert(a);   // uses owner_less — compares control blocks\nownerSet.insert(b);   // a and b share a control block — won't insert duplicate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12122-aliasing-constructor-and-owner_less",
      children: "12.12.2 Aliasing Constructor and owner_less"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The aliasing constructor creates two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " pointing to different objects but sharing a control block — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "owner_less"
      }), " correctly identifies them as the same ownership group:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Data { int id; };\nstruct Metadata { std::string info; };\n\nauto data = std::make_shared<Data>(42);\n// Aliasing constructor: points to a member but shares ownership\nstd::shared_ptr<Metadata> meta(data, reinterpret_cast<Metadata*>(data.get()));\n// meta shares control block with data\n\n// owner_less reports them as equivalent (same control block)\nstd::owner_less<std::shared_ptr<void>> less;\nstd::cout << less(data, meta) << \"\\n\";  // 0 (not less)\nstd::cout << less(meta, data) << \"\\n\";  // 0 (not less)\n// They are !less(a,b) && !less(b,a) — equivalent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1213-comparison-table-raw-vs-unique-vs-shared-vs-weak",
      children: "12.13 Comparison Table: Raw vs Unique vs Shared vs Weak"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ownership"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None declared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destroys object?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (manual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (on destroy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (last owner)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copyable?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (move only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (inc ref)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Movable?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can be null?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dereference safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Null check via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (p)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (p)"
            }), " + expired check"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lock()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread-safe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control block only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lock()"
            }), " atomic"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Size (typical)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 or 16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 or 16 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (default deleter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control block allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Control block ref"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom deleter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-erased"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Array support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (partial spec)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (custom deleter needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-owning observe, legacy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default owning pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Genuinely shared ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break cycles, cache"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selection-decision-tree",
      children: "Selection Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Q: Do I need dynamic allocation?\n├── No → Use stack/value types (preferred)\n└── Yes → Q: Is ownership exclusive?\n    ├── Yes → use unique_ptr (default)\n    └── No → Q: Is the ownership truly shared?\n        ├── Yes → Q: Are there back-references that could cycle?\n        │   ├── Yes → use shared_ptr + weak_ptr for back-refs\n        │   └── No → use shared_ptr\n        └── No → Q: Do I just need to observe without owning?\n            ├── Yes → Q: Can the object disappear?\n            │   ├── Yes → weak_ptr (lock- check)\n            │   └── No → raw pointer (if lifetime guaranteed)\n            └── [rethink ownership design]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1214-axis--dimension-tables",
      children: "12.14 Axis & Dimension Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ownership-spectrum",
      children: "Ownership Spectrum"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "unique_ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "shared_ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "weak_ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw ptr"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ownership strength"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (single)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (shared)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifetime control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (collaborative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (observer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Responsibility clarity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safe for containers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (move)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (no RAII)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dangling protection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (owns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (owns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (lock check)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "unique_ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "shared_ptr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "weak_ptr"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default construct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Construct from raw ptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + alloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "make_"
            }), " factory"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + alloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + alloc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy construct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deleted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (atomic inc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (atomic inc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move construct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (delete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (atomic dec + maybe delete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (dec weak)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lock()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (atomic inc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reset()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "use_count()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-layout-comparison",
      children: "Memory Layout Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contains"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<int>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr<int, deleter>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 or 16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address + possibly deleter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<int>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of int + address of control block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr<int>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of int + address of control block"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shared_ptr-control-block-structure-typical-libstdc-layout",
      children: "shared_ptr Control Block Structure (Typical libstdc++ Layout)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Offset  │ Field                   │ Size  │ Description\n────────┼─────────────────────────┼───────┼─────────────────────────\n0       │ ref_count               │ 4-8   │ Strong reference count\n4/8     │ weak_count              │ 4-8   │ Weak reference count\n8/16    │ deleter (type-erased)   │ var   │ Custom deleter (if any)\nvar     │ allocator (type-erased) │ var   │ Custom allocator (if any)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make_shared"
      }), ", the managed object is appended immediately after the control block (or before it, depending on implementation), inside the same allocation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1215-c17-and-c20-enhancements",
      children: "12.15 C++17 and C++20 Enhancements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c17",
      children: "C++17"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr<T[]>"
        }), " partial specialization for arrays (NOTE: not the same as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr<T[]>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dynamic_pointer_cast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static_pointer_cast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const_pointer_cast"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        }), " (returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c20",
      children: "C++20"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::make_shared"
        }), " for arrays: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto p = std::make_shared<int[]>(10);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::atomic<std::shared_ptr<T>>"
        }), " — atomic operations on shared_ptr itself"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::to_address"
        }), " — generic way to get raw address from fancy pointers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1216-edge-cases-and-pitfalls",
      children: "12.16 Edge Cases and Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12161-using-get-after-move",
      children: "12.16.1 Using .get() After Move"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto p = std::make_unique<int>(42);\nint* raw = p.get();\nauto moved = std::move(p);\n// raw is dangling! p.get() is nullptr, but raw still points to old memory\n// Don't use raw after ownership transfer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12162-creating-shared_ptr-from-raw-pointer-twice",
      children: "12.16.2 Creating shared_ptr from Raw Pointer Twice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int* raw = new int(42);\nstd::shared_ptr<int> sp1(raw);\nstd::shared_ptr<int> sp2(raw);  // UNDEFINED BEHAVIOUR!\n// Two independent control blocks — double delete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12163-shared_ptr-to-this-without-enable_shared_from_this",
      children: "12.16.3 shared_ptr to this Without enable_shared_from_this"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct BadExample {\n    std::shared_ptr<BadExample> getShared() {\n        return std::shared_ptr<BadExample>(this);  // BUG: new control block\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12164-weak_ptrlock-on-expired-object",
      children: "12.16.4 weak_ptr::lock() on Expired Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto sp = std::make_shared<int>(42);\nstd::weak_ptr<int> wp = sp;\nsp.reset();\nauto locked = wp.lock();   // locked is nullptr — safe, not UB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12165-mixing-make_shared-and-placement-new",
      children: "12.16.5 Mixing make_shared and Placement new"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// ERROR: make_shared controls allocation — can't use placement new\n// auto p = std::make_shared<MyClass>(new (buffer) MyClass(args));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12166-using-shared_ptr-with-objects-on-stack",
      children: "12.16.6 Using shared_ptr with Objects on Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int x = 42;\n// std::shared_ptr<int> sp(&x);  // UB: delete called on stack object!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12167-shared_ptr-with-incomplete-types",
      children: "12.16.7 shared_ptr with Incomplete Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct ForwardDeclared;            // incomplete\n\nstruct Holder {\n    std::shared_ptr<ForwardDeclared> ptr;  // OK: declaration only\n    // ~Holder() requires complete type for destruction\n};\n\n// Header must include definition before Holder's destructor is instantiated\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1217-interview-corner",
      children: "12.17 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-when-would-you-choose-unique_ptr-over-shared_ptr",
      children: "Q1: When would you choose unique_ptr over shared_ptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " is the default choice for dynamic allocation. Choose it when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ownership is clearly exclusive — one owner at all times"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero overhead is required (same size/speed as raw pointer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The resource lifetime maps to a single scope or object lifetime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want to express ownership semantics in APIs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " is for genuinely shared ownership where the last owner is unknown at compile time. Overuse of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " signals unclear ownership design."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Tip:"
      }), " \"I use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), " by default and only reach for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " when I have a proven need for shared ownership. This follows the 'prefer unique_ptr' guideline from the C++ Core Guidelines.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-shared_ptr-know-when-to-delete-the-object",
      children: "Q2: How does shared_ptr know when to delete the object?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " maintains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reference count"
      }), " in the control block. Every copy increments this count atomically. Every destruction decrements it. When the count reaches zero, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " calls the deleter (by default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      }), ") on the managed object, then may free the control block (if no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " references remain)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Simplified conceptual model\ntemplate<typename T>\nclass shared_ptr {\n    T* ptr_;\n    ControlBlock* cb_;\n\n    ~shared_ptr() {\n        if (--cb_->ref_count == 0) {\n            delete ptr_;                 // destroy managed object\n            if (cb_->weak_count == 0) {\n                delete cb_;              // free control block\n            }\n        }\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-reset-and-release-on-unique_ptr",
      children: "Q3: What is the difference between reset() and release() on unique_ptr?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "reset()"
        }), ": Destroys the currently owned object (calls deleter), then optionally takes ownership of a new pointer. After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reset()"
        }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " may be null or own a new object."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "release()"
        }), ": Relinquishes ownership ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "without"
        }), " destroying the object. Returns the raw pointer. After ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release()"
        }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " is null and the caller is responsible for deleting the returned pointer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto p = std::make_unique<int>(42);\np.reset(new int(10));     // old 42 destroyed, now owns 10\nint* raw = p.release();   // no destruction, p is null\ndelete raw;               // caller must delete\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-does-weak_ptrlock-prevent-dangling-access",
      children: "Q4: How does weak_ptr::lock() prevent dangling access?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lock()"
      }), " atomically checks the reference count in the control block. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ref_count > 0"
      }), " (object still alive), it atomically increments the count and returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " to the object. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ref_count == 0"
      }), ", it returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nullptr"
      }), ". The control block itself cannot be freed while any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " exists (the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_count"
      }), " prevents it), so accessing the control block is always safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Conceptual model\nshared_ptr<T> lock() {\n    // Atomically check and increment — prevents races\n    if (cb_->ref_count.load() > 0) {\n        cb_->ref_count.fetch_add(1);\n        return shared_ptr<T>(ptr_, cb_);  // share control block\n    }\n    return nullptr;  // object gone, safe null\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-the-n1-allocation-problem-with-shared_ptrnew-t-vs-make_shared",
      children: "Q5: Explain the N+1 allocation problem with shared_ptr(new T) vs make_shared."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr<T>(new T)"
      }), " performs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two"
      }), " allocations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "new T"
        }), " for the managed object"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal allocation for the control block"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::make_shared<T>(args)"
      }), " performs ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one"
      }), " allocation for both object and control block together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "make_shared"
        }), " is faster (one ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), " instead of two)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "make_shared"
        }), " has better cache locality (object and control block adjacent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "make_shared"
        }), " is exception-safe (no leak window between allocation and shared_ptr construction)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Downside:"
        }), " With ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make_shared"
        }), ", the object's memory isn't freed until the last ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        }), " dies, because object and control block share the same allocation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Two allocations\nstd::shared_ptr<LargeObj> p(new LargeObj(args));\n\n// One allocation — but LargeObj memory tied to control block lifetime\nauto p = std::make_shared<LargeObj>(args);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-aliasing-constructor-of-shared_ptr",
      children: "Q6: What is the aliasing constructor of shared_ptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The aliasing constructor creates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " that points to one object but shares ownership of another:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct BigObj { int x; int y; };\nauto owner = std::make_shared<BigObj>(10, 20);\nstd::shared_ptr<int> alias(owner, &owner->x);  // points to x, owns BigObj\n// alias.use_count() == owner.use_count() — same control block\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is used to point to sub-objects while keeping the parent alive. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "owner_less"
      }), " treats aliased shared_ptrs as equivalent because they share a control block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-does-enable_shared_from_this-work-internally",
      children: "Q7: How does enable_shared_from_this work internally?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enable_shared_from_this<T>"
      }), " holds a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr<T>"
      }), " member. When a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr<T>"
      }), " is constructed for an object that inherits from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enable_shared_from_this<T>"
      }), ", the constructor detects this via SFINAE or a detection idiom, and initializes the internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " with the newly created control block. Later, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_from_this()"
      }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr::lock()"
      }), " on this internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), ", returning a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " that shares the original control block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template<typename T>\nclass enable_shared_from_this {\n    mutable std::weak_ptr<T> weak_this_;\n\nprotected:\n    shared_ptr<T> shared_from_this() {\n        return weak_this_.lock();  // shares the original control block\n    }\n};\n\n// In shared_ptr constructor:\ntemplate<typename T>\ntemplate<typename U>\nshared_ptr<U>::shared_ptr(U* ptr) {\n    // ... allocate control block ...\n    if constexpr (inherits_from_enable_shared_from_this<U>) {\n        ptr->weak_this_ = *this;  // Initialize the internal weak_ptr\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-can-you-use-unique_ptr-with-stl-containers-what-about-shared_ptr",
      children: "Q8: Can you use unique_ptr with STL containers? What about shared_ptr?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Yes for both, but with different semantics:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " in containers: The container must support move semantics (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::vector"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::deque"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::list"
        }), "). Operations that require copying (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::sort"
        }), " on pre-C++17) won't compile. C++20 makes most container operations work with move-only types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<std::unique_ptr<int>> vec;\nvec.push_back(std::make_unique<int>(1));\nvec.push_back(std::make_unique<int>(2));\n// C++20: std::ranges::sort(vec);  // OK — uses move\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " in containers: Works normally since ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), " is copyable. This is the most common way to manage shared objects."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<std::shared_ptr<Texture>> textureCache;\ntextureCache.push_back(std::make_shared<Texture>(\"hero.png\"));\nauto copy = textureCache[0];  // ref_count becomes 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1218-real-systems",
      children: "12.18 Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12181-chromium--blink-engine",
      children: "12.18.1 Chromium / Blink Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chromium uses a custom smart pointer hierarchy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "scoped_refptr"
      }), " for reference-counted objects, similar to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), ") extensively in the Blink rendering engine. DOM nodes use reference counting because a node can be referenced from JavaScript, the DOM tree, and event handlers simultaneously. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WeakPtr"
      }), " (Chromium's equivalent) breaks cycles between JavaScript and DOM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12182-llvm--clang",
      children: "12.18.2 LLVM / Clang"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LLVM uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::unique_ptr"
      }), " extensively for ownership of AST nodes, passes, and analysis results. Each translation unit creates a unique AST that is exclusively owned — perfect for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_ptr"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " is rare; LLVM prefers explicit ownership models."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12183-boostasio-networking",
      children: "12.18.3 Boost.Asio (Networking)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boost.Asio uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " for session objects and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enable_shared_from_this"
      }), " for async completion handlers. A typical TCP session:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Session : public std::enable_shared_from_this<Session> {\n    tcp::socket socket_;\n    std::array<char, 1024> data_;\npublic:\n    void start() {\n        do_read();\n    }\n    void do_read() {\n        auto self = shared_from_this();\n        socket_.async_read_some(boost::asio::buffer(data_),\n            [self](error_code ec, size_t len) {\n                self->handle_read(ec, len);\n            });\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_from_this()"
      }), " call ensures the session stays alive during asynchronous operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12184-game-engines-unreal-engine-unity",
      children: "12.18.4 Game Engines (Unreal Engine, Unity)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TSharedPtr"
        }), " (Unreal's version of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), ") for assets shared across multiple game objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TWeakPtr"
        }), " for transient references (e.g., AI targets that may die)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "TUniquePtr"
        }), " for exclusive ownership of subsystems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12185-c-standard-library-implementation-libstdc",
      children: "12.18.5 C++ Standard Library Implementation (libstdc++)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The GNU libstdc++ implementation uses a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Sp_counted_base"
      }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__gnu_cxx::__atomic_add"
      }), " for reference counting. The control block is a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Sp_counted_ptr"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Sp_counted_deleter"
      }), " derived from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Sp_counted_base"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1219-best-practices-checklist",
      children: "12.19 Best Practices Checklist"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reasoning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr"
            }), " over ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clearer ownership, better performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "make_unique"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "make_shared"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception safety, single allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Never use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto_ptr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broken copy semantics, removed in C++17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr"
            }), " for back-references"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks circular reference cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lock()"
            }), " before using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check object is still alive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enable_shared_from_this"
            }), " for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids double control block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pass smart pointers by value to transfer, by reference to observe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear ownership semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Never create two ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr"
            }), " from the same raw pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Never use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get()"
            }), " to create another smart pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Circumvents ownership tracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use custom deleters for non-memory resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extends RAII to all resources"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1220-summary",
      children: "12.20 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart pointers are the cornerstone of modern C++ resource management:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Trait"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclusive ownership (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move-only, zero overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared ownership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference counting, control block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-owning observation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock-based safe access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto_ptr"
            }), " (deprecated)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(nothing — removed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broken copy semantics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Always prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make_unique"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "make_shared"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr"
      }), " to break cycles. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enable_shared_from_this"
      }), " for async callbacks. Smart pointers eliminate entire categories of memory bugs while imposing minimal cognitive overhead once ownership semantics are clear."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["\"A pointer is either ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_ptr"
        }), ". If it's not, prove why.\" — C++ Core Guidelines"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why can't ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::shared_ptr"
        }), " be created from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " directly? What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable_shared_from_this"
        }), " do differently?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw the memory layout after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto p = std::make_shared<int>(42); auto q = p;"
        }), ". Where are the int, the control block, and the stack variables?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens to the reference count when a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weak_ptr"
        }), " is copied? When it's destroyed?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto_ptr"
        }), " fail with STL containers but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unique_ptr"
        }), " works?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Describe a real-world scenario where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make_shared"
        }), "'s single-allocation advantage becomes a memory problem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unique Ownership Chain:"
          }), " Implement a singly-linked list where each ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Node"
          }), " owns its ", (0,jsx_runtime.jsx)(_components.code, {
            children: "next"
          }), " via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unique_ptr"
          }), ". Provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "push_front"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pop_front"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "reverse()"
          }), " that operates in O(n) time. Explain why iterating with a raw pointer (", (0,jsx_runtime.jsx)(_components.code, {
            children: "Node*"
          }), ") through the list doesn't violate ownership."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Observer Pattern with weak_ptr:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "class Subject"
          }), " that maintains ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<std::weak_ptr<Observer>> observers"
          }), ". Each ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Observer"
          }), " registers by providing a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shared_ptr<Observer>"
          }), ". Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "notify()"
          }), ", which locks each weak_ptr and calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "update()"
          }), " on alive observers, automatically removing expired ones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Binary Tree with Parent Pointers:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "class TreeNode"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unique_ptr<TreeNode> left"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unique_ptr<TreeNode> right"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "weak_ptr<TreeNode> parent"
          }), ". Provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "insert(int value)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "find(int value)"
          }), " that returns a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shared_ptr<TreeNode>"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Particle System with Shared Ownership:"
        }), " Implement a particle system where:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ParticleEngine"
            }), " owns all particles via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr<Particle>"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Each particle has a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "weak_ptr<Particle>"
            }), " to its \"emitter\" (another particle that spawned it)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ParticleEmitter"
            }), " objects hold ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shared_ptr"
            }), " to their active particles"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update()"
            }), " that: updates all particle positions, removes dead particles (engine resets shared_ptrs), and spawns child particles from emitters"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate that circular references between particles don't leak"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#r-resource-management",
          children: "C++ Core Guidelines: Smart pointer rules (R.20-R.37)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://herbsutter.com/2013/06/05/gotw-91-solution-smart-pointer-parameters/",
          children: "Herb Sutter: GotW #89 — Smart Pointer Parameters"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.cppreference.com/w/cpp/memory/shared_ptr",
          children: "cppreference: std::shared_ptr"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.cppreference.com/w/cpp/memory/unique_ptr",
          children: "cppreference: std::unique_ptr"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.cppreference.com/w/cpp/memory/weak_ptr",
          children: "cppreference: std::weak_ptr"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://en.cppreference.com/w/cpp/memory/enable_shared_from_this",
          children: "cppreference: std::enable_shared_from_this"
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