"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92471],{

/***/ 22762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_02_variables_datatypes_md_4fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-02-variables-datatypes-md-4fd.json
const site_docs_courses_c_programming_02_variables_datatypes_md_4fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/02-variables-datatypes","title":"Chapter 2: Variables and Data Types","description":"Previous Operators","source":"@site/docs/courses/c-programming/02-variables-datatypes.md","sourceDirName":"courses/c-programming","slug":"/c-programming/02-variables-datatypes","permalink":"/ai-engineering-journey/c-programming/02-variables-datatypes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-variables-datatypes","slug":"/c-programming/02-variables-datatypes","title":"Chapter 2: Variables and Data Types","sidebar_label":"Chapter 2: Variables and Data Types","sidebar_position":2},"sidebar":"course-c-programming","previous":{"title":"Chapter 1: Introduction to C","permalink":"/ai-engineering-journey/c-programming/01-introduction"},"next":{"title":"Chapter 3: Operators in C --- In-Depth Reference","permalink":"/ai-engineering-journey/c-programming/03-operators"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/02-variables-datatypes.md


const frontMatter = {
	id: '02-variables-datatypes',
	slug: '/c-programming/02-variables-datatypes',
	title: 'Chapter 2: Variables and Data Types',
	sidebar_label: 'Chapter 2: Variables and Data Types',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Variables and Data Types';

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
  "level": 3
}, {
  "value": "2.1 Variables in C",
  "id": "21-variables-in-c",
  "level": 2
}, {
  "value": "Real-World Analogy — Parking Lot",
  "id": "real-world-analogy--parking-lot",
  "level": 3
}, {
  "value": "2.1.1 Declaration vs Definition vs Initialization",
  "id": "211-declaration-vs-definition-vs-initialization",
  "level": 3
}, {
  "value": "2.1.2 Initialization Strategies",
  "id": "212-initialization-strategies",
  "level": 3
}, {
  "value": "2.1.3 Edge Cases in Variable Usage",
  "id": "213-edge-cases-in-variable-usage",
  "level": 3
}, {
  "value": "2.2 Variable Naming Rules",
  "id": "22-variable-naming-rules",
  "level": 2
}, {
  "value": "Real-World Analogy — License Plates",
  "id": "real-world-analogy--license-plates",
  "level": 3
}, {
  "value": "2.2.1 The Rules",
  "id": "221-the-rules",
  "level": 3
}, {
  "value": "2.2.2 Valid vs Invalid Identifiers",
  "id": "222-valid-vs-invalid-identifiers",
  "level": 3
}, {
  "value": "2.2.3 C Keywords (Cannot Be Used as Identifiers)",
  "id": "223-c-keywords-cannot-be-used-as-identifiers",
  "level": 3
}, {
  "value": "2.2.4 Naming Conventions",
  "id": "224-naming-conventions",
  "level": 3
}, {
  "value": "2.3 Fundamental Data Types",
  "id": "23-fundamental-data-types",
  "level": 2
}, {
  "value": "Real-World Analogy — Parking Lot Spot Sizes",
  "id": "real-world-analogy--parking-lot-spot-sizes",
  "level": 3
}, {
  "value": "2.3.1 Complete Data Type Reference",
  "id": "231-complete-data-type-reference",
  "level": 3
}, {
  "value": "2.3.2 The <code>void</code> Type",
  "id": "232-the-void-type",
  "level": 3
}, {
  "value": "2.3.3 The <code>char</code> Type in Depth",
  "id": "233-the-char-type-in-depth",
  "level": 3
}, {
  "value": "2.3.4 Signed vs Unsigned char",
  "id": "234-signed-vs-unsigned-char",
  "level": 3
}, {
  "value": "2.3.5 Edge Cases for Data Types",
  "id": "235-edge-cases-for-data-types",
  "level": 3
}, {
  "value": "2.3.6 Advantages and Disadvantages of Data Types",
  "id": "236-advantages-and-disadvantages-of-data-types",
  "level": 3
}, {
  "value": "2.3.7 Complexity",
  "id": "237-complexity",
  "level": 3
}, {
  "value": "2.4 Type Modifiers",
  "id": "24-type-modifiers",
  "level": 2
}, {
  "value": "Real-World Analogy — Parking Lot Modifier Signs",
  "id": "real-world-analogy--parking-lot-modifier-signs",
  "level": 3
}, {
  "value": "2.4.1 Modifier Combinations",
  "id": "241-modifier-combinations",
  "level": 3
}, {
  "value": "2.4.2 Valid and Invalid Combinations",
  "id": "242-valid-and-invalid-combinations",
  "level": 3
}, {
  "value": "2.4.3 Type Modifier Comparison Table",
  "id": "243-type-modifier-comparison-table",
  "level": 3
}, {
  "value": "2.4.4 long double",
  "id": "244-long-double",
  "level": 3
}, {
  "value": "2.4.5 Edge Cases for Type Modifiers",
  "id": "245-edge-cases-for-type-modifiers",
  "level": 3
}, {
  "value": "2.5 The <code>sizeof</code> Operator",
  "id": "25-the-sizeof-operator",
  "level": 2
}, {
  "value": "2.6 Storage Classes",
  "id": "26-storage-classes",
  "level": 2
}, {
  "value": "Real-World Analogy — Storage Lockers",
  "id": "real-world-analogy--storage-lockers",
  "level": 3
}, {
  "value": "2.6.1 Storage Class Comparison",
  "id": "261-storage-class-comparison",
  "level": 3
}, {
  "value": "2.6.2 <code>auto</code> — The Default",
  "id": "262-auto--the-default",
  "level": 3
}, {
  "value": "2.6.3 <code>register</code> — Hint to the Compiler",
  "id": "263-register--hint-to-the-compiler",
  "level": 3
}, {
  "value": "2.6.4 <code>static</code> — Persistent Lifetime, Controlled Scope",
  "id": "264-static--persistent-lifetime-controlled-scope",
  "level": 3
}, {
  "value": "2.6.5 <code>extern</code> — Cross-File Visibility",
  "id": "265-extern--cross-file-visibility",
  "level": 3
}, {
  "value": "2.6.6 <code>typedef</code> — Type Aliases",
  "id": "266-typedef--type-aliases",
  "level": 3
}, {
  "value": "2.6.7 Advantages and Disadvantages of Storage Classes",
  "id": "267-advantages-and-disadvantages-of-storage-classes",
  "level": 3
}, {
  "value": "2.6.8 Edge Cases",
  "id": "268-edge-cases",
  "level": 3
}, {
  "value": "2.7 Constants",
  "id": "27-constants",
  "level": 2
}, {
  "value": "Real-World Analogy — Unchangeable Signs",
  "id": "real-world-analogy--unchangeable-signs",
  "level": 3
}, {
  "value": "2.7.1 The <code>const</code> Qualifier",
  "id": "271-the-const-qualifier",
  "level": 3
}, {
  "value": "2.7.2 <code>#define</code> Constants (Symbolic/Macro Constants)",
  "id": "272-define-constants-symbolicmacro-constants",
  "level": 3
}, {
  "value": "2.7.3 <code>enum</code> Constants",
  "id": "273-enum-constants",
  "level": 3
}, {
  "value": "2.7.4 const vs #define vs enum — Comparison",
  "id": "274-const-vs-define-vs-enum--comparison",
  "level": 3
}, {
  "value": "2.7.5 Integer Literal Suffixes",
  "id": "275-integer-literal-suffixes",
  "level": 3
}, {
  "value": "2.7.6 Edge Cases for Constants",
  "id": "276-edge-cases-for-constants",
  "level": 3
}, {
  "value": "2.8 Formatted Output with <code>printf</code>",
  "id": "28-formatted-output-with-printf",
  "level": 2
}, {
  "value": "Real-World Analogy — Label Maker",
  "id": "real-world-analogy--label-maker",
  "level": 3
}, {
  "value": "2.8.1 Format Specifier Reference",
  "id": "281-format-specifier-reference",
  "level": 3
}, {
  "value": "2.8.2 Width, Precision, and Flags",
  "id": "282-width-precision-and-flags",
  "level": 3
}, {
  "value": "2.8.3 Common printf Pitfalls",
  "id": "283-common-printf-pitfalls",
  "level": 3
}, {
  "value": "2.9 Formatted Input with <code>scanf</code>",
  "id": "29-formatted-input-with-scanf",
  "level": 2
}, {
  "value": "Real-World Analogy — Barcode Scanner",
  "id": "real-world-analogy--barcode-scanner",
  "level": 3
}, {
  "value": "2.9.1 scanf Basics",
  "id": "291-scanf-basics",
  "level": 3
}, {
  "value": "2.9.2 The Newline Gotcha with <code>%c</code>",
  "id": "292-the-newline-gotcha-with-c",
  "level": 3
}, {
  "value": "2.9.3 Input Validation",
  "id": "293-input-validation",
  "level": 3
}, {
  "value": "2.10 Type Conversion",
  "id": "210-type-conversion",
  "level": 2
}, {
  "value": "Real-World Analogy — Currency Exchange",
  "id": "real-world-analogy--currency-exchange",
  "level": 3
}, {
  "value": "2.10.1 Implicit Conversion (Type Promotion)",
  "id": "2101-implicit-conversion-type-promotion",
  "level": 3
}, {
  "value": "2.10.2 Integer Promotion Rules",
  "id": "2102-integer-promotion-rules",
  "level": 3
}, {
  "value": "2.10.3 Usual Arithmetic Conversions (Step-by-Step)",
  "id": "2103-usual-arithmetic-conversions-step-by-step",
  "level": 3
}, {
  "value": "2.10.4 Explicit Conversion (Casting)",
  "id": "2104-explicit-conversion-casting",
  "level": 3
}, {
  "value": "2.10.5 Implicit vs Explicit Conversion Comparison",
  "id": "2105-implicit-vs-explicit-conversion-comparison",
  "level": 3
}, {
  "value": "2.10.6 Surprising Conversion Edge Cases",
  "id": "2106-surprising-conversion-edge-cases",
  "level": 3
}, {
  "value": "2.10.7 Precision Loss Examples",
  "id": "2107-precision-loss-examples",
  "level": 3
}, {
  "value": "2.11 Scope and Lifetime",
  "id": "211-scope-and-lifetime",
  "level": 2
}, {
  "value": "Real-World Analogy — Building Access",
  "id": "real-world-analogy--building-access",
  "level": 3
}, {
  "value": "2.11.1 Scope Types",
  "id": "2111-scope-types",
  "level": 3
}, {
  "value": "2.11.2 Scope Comparison Table",
  "id": "2112-scope-comparison-table",
  "level": 3
}, {
  "value": "2.11.3 Lifetime Types",
  "id": "2113-lifetime-types",
  "level": 3
}, {
  "value": "Comparison Tables",
  "id": "comparison-tables",
  "level": 2
}, {
  "value": "A. Data Types — Complete Reference",
  "id": "a-data-types--complete-reference",
  "level": 3
}, {
  "value": "B. Type Modifiers Comparison",
  "id": "b-type-modifiers-comparison",
  "level": 3
}, {
  "value": "C. Storage Classes Comparison",
  "id": "c-storage-classes-comparison",
  "level": 3
}, {
  "value": "D. Implicit vs Explicit Conversion",
  "id": "d-implicit-vs-explicit-conversion",
  "level": 3
}, {
  "value": "E. const vs #define vs enum",
  "id": "e-const-vs-define-vs-enum",
  "level": 3
}, {
  "value": "F. Scope Comparison",
  "id": "f-scope-comparison",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Q1: What does sizeof return? Is it a function or an operator?",
  "id": "q1-what-does-sizeof-return-is-it-a-function-or-an-operator",
  "level": 3
}, {
  "value": "Q2: Explain the difference between static and global variables.",
  "id": "q2-explain-the-difference-between-static-and-global-variables",
  "level": 3
}, {
  "value": "Q3: What is the difference between auto and register storage classes?",
  "id": "q3-what-is-the-difference-between-auto-and-register-storage-classes",
  "level": 3
}, {
  "value": "Q4: When should I use const vs #define?",
  "id": "q4-when-should-i-use-const-vs-define",
  "level": 3
}, {
  "value": "Q5: Explain extern usage in multi-file projects.",
  "id": "q5-explain-extern-usage-in-multi-file-projects",
  "level": 3
}, {
  "value": "Q6: What is the output of sizeof(void)?",
  "id": "q6-what-is-the-output-of-sizeofvoid",
  "level": 3
}, {
  "value": "Q7: Explain integer promotion with an example.",
  "id": "q7-explain-integer-promotion-with-an-example",
  "level": 3
}, {
  "value": "Q8: Difference between int and long on 32-bit vs 64-bit.",
  "id": "q8-difference-between-int-and-long-on-32-bit-vs-64-bit",
  "level": 3
}, {
  "value": "Q9: What happens when unsigned int wraps past zero?",
  "id": "q9-what-happens-when-unsigned-int-wraps-past-zero",
  "level": 3
}, {
  "value": "Q10: Can const variables be used as array sizes?",
  "id": "q10-can-const-variables-be-used-as-array-sizes",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Linux Kernel Coding Style",
  "id": "linux-kernel-coding-style",
  "level": 3
}, {
  "value": "Embedded Systems Type Choices",
  "id": "embedded-systems-type-choices",
  "level": 3
}, {
  "value": "Financial Applications",
  "id": "financial-applications",
  "level": 3
}, {
  "value": "Network Protocols",
  "id": "network-protocols",
  "level": 3
}, {
  "value": "Graphics Programming",
  "id": "graphics-programming",
  "level": 3
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
        id: "chapter-2-variables-and-data-types",
        children: "Chapter 2: Variables and Data Types"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/01-introduction",
          children: "Introduction to C"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/03-operators",
          children: "Operators"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between variable declaration, definition, and initialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare and initialize variables of all fundamental C types with correct format specifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand type modifiers (short, long, signed, unsigned) and their combinatorial matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master implicit type promotion rules and explicit casting with precision-aware strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare storage classes (auto, register, static, extern, typedef) by lifetime, scope, and use case"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate const, #define, and enum with type safety analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use sizeof for portable code and diagnose common edge cases (overflow, underflow, truncation)"
      }), "\n"]
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
        href: "../../assets/images/lessons/c-programming/02-variables-datatypes/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/02-variables-datatypes/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/02-variables-datatypes/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/02-variables-datatypes/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/02-variables-datatypes/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/02-variables-datatypes/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Variable Declarations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must declare type before use; identifiers are case-sensitive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use descriptive names like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "student_count"
            }), " over cryptic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char, int, float, double with short/long/unsigned modifiers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Match type to data range — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " for integers, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " for decimals"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Modifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "short/long/signed/unsigned combine with integer types in a matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose combination that fits your value domain exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluated at compile time, returns size in bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(type)"
            }), " not hardcoded byte counts for portability"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "auto/register/static/extern/typedef control lifetime, scope, linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static local preserves state; extern shares across files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "const vs #define vs enum — type-checked, textual, or integral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer const for type safety; enum for related integer constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I/O Formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printf and scanf use format specifiers (%d, %f, %c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mismatched specifiers cause UB — always match type to specifier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit promotion and explicit casting follow strict rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast explicitly when mixing types to avoid precision loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope and Lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block, file, function, and prototype scope govern visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declare variables in the narrowest scope possible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"2.1 Variables\"] --> B[\"2.2 Naming Rules\"]\n    B --> C[\"2.3 Data Types\"]\n    C --> D[\"2.4 Type Modifiers\"]\n    D --> E[\"2.5 sizeof\"]\n    E --> F[\"2.6 Storage Classes\"]\n    F --> G[\"2.7 Constants\"]\n    G --> H[\"2.8 printf\"]\n    H --> I[\"2.9 scanf\"]\n    I --> J[\"2.10 Type Conversion\"]\n    J --> K[\"2.11 Scope & Lifetime\"]\n    K --> L[\"Comparison Tables\"]\n    L --> M[\"Interview Corner\"]\n    M --> N[\"Applications\"]\n    N --> O[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-variables-in-c",
      children: "2.1 Variables in C"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch02-datatypes-operators.png",
        alt: "C Data Types and Operators Overview"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "variable"
      }), " is a named storage location in memory that holds a value of a specific type. Think of it as a labeled box on a shelf — the label is the variable name, the box size is determined by the type, and the contents are the value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--parking-lot",
      children: "Real-World Analogy — Parking Lot"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parking Lot Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Variable name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parking spot number (A7, B12)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spot size (compact, sedan, SUV, truck)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vehicle parked in the spot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserving a spot with a specific size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actually constructing the spot with concrete lines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parking the first vehicle in the spot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty spot with unknown debris — using it is dangerous"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "211-declaration-vs-definition-vs-initialization",
      children: "2.1.1 Declaration vs Definition vs Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These three terms are often conflated but are technically distinct in C:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Allocated?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Declaration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Introduces name and type to compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (tentative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern int x;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates storage for the variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assigns first value at definition time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 10;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Declaration"
        }), ": The compiler learns about the variable's name and type. For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extern"
        }), " declarations, no storage is allocated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Definition"
        }), ": Storage is reserved in memory (on stack for locals, in data segment for globals/statics)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization"
        }), ": The memory location is filled with a specific value at the moment of definition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nextern int global_x;    // Declaration only — no storage (definition elsewhere)\n\nint global_y = 42;      // Definition + initialization\n\nint global_z;           // Definition (tentative — zero-initialized)\n\nint main(void)\n{\n    int a;              // Definition (automatic storage — NOT initialized)\n    int b = 10;         // Definition + initialization\n    static int c;       // Definition (static storage — zero-initialized)\n\n    // printf(\"%d\\n\", a);  // UB — 'a' is uninitialized (contains garbage)\n    printf(\"%d\\n\", b);     // 10\n    printf(\"%d\\n\", c);     // 0  (static variables are zero-initialized)\n    printf(\"%d\\n\", global_z); // 0 (tentative definition → zero)\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10\n0\n0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "212-initialization-strategies",
      children: "2.1.2 Initialization Strategies"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic C style"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment after definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; x = 5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two steps — value may be indeterminate between them"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple declarations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a = 1, b = 2, c = 3;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All initialized in one statement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized (DANGER)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains garbage — reading is undefined behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Variable Lifecycle:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step  | Variable | Operation        | Stack Address | Value    | Notes\n------+----------+------------------+---------------+----------+-----------------------\n1     | x        | int x;           | 0x7FFD0010   | [garbage]| Definition, no init\n2     | x        | x = 5;           | 0x7FFD0010   | 5        | Assignment\n3     | y        | int y = 10;      | 0x7FFD0014   | 10       | Definition + init\n4     | x        | x = x + y;       | 0x7FFD0010   | 15       | Read x(5)+y(10), write\n5     | z        | { int z = 20; }  | 0x7FFD0018   | 20       | Block scope, then destroyed\n6     | x        | return x;        | 0x7FFD0010   | 15       | After z is gone\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Variable declaration, definition, and initialization all operate in O(1) time — they are compile-time or single-instruction operations at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "213-edge-cases-in-variable-usage",
      children: "2.1.3 Edge Cases in Variable Usage"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; printf(\"%d\", x);"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Undefined behavior"
            }), " — may print garbage, crash, or appear to work"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tentative definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; int x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed in file scope (merged into one definition)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Redeclaration conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; double x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error — conflicting types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shadowing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; { int x = 5; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner x shadows outer x; outer is inaccessible inside block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing semicolon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error (expected ';')"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint shadow_demo(void)\n{\n    int x = 10;\n    printf(\"Outer x: %d\\n\", x);     // 10\n\n    {\n        int x = 20;                  // shadows outer x\n        printf(\"Inner x: %d\\n\", x);  // 20\n    }\n    // inner x is destroyed here\n\n    printf(\"Outer x again: %d\\n\", x); // 10\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Outer x: 10\nInner x: 20\nOuter x again: 10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A variable is a named memory location — declare its type, define its storage, initialize before use.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Declaration ≠ Definition. Declaration tells the compiler the type; definition allocates storage. Uninitialized variables are undefined behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-variable-naming-rules",
      children: "2.2 Variable Naming Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--license-plates",
      children: "Real-World Analogy — License Plates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just as license plates must follow DMV rules (letters, numbers, no special characters, unique within the system), C identifiers must follow grammatical rules enforced by the compiler."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "221-the-rules",
      children: "2.2.1 The Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1:"
      }), " May contain letters (a–z, A–Z), digits (0–9), and underscores (", (0,jsx_runtime.jsx)(_components.code, {
        children: "_"
      }), ").\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2:"
      }), " Must begin with a letter or underscore (not a digit).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3:"
      }), " Are case-sensitive — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Count"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COUNT"
      }), " are three distinct variables.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 4:"
      }), " Must not be a C keyword (", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), ", etc.).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 5:"
      }), " Must not reuse the same name in the same scope with conflicting type.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 6:"
      }), " Implementation reserves identifiers beginning with underscore + capital letter or double underscore."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "222-valid-vs-invalid-identifiers",
      children: "2.2.2 Valid vs Invalid Identifiers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Identifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "student_age"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Letters and underscore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_temperature"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valid but reserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leading underscore conventionally reserved for library implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "count2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Letter followed by digit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2nd_place"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Begins with a digit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "my-var"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyphen is not allowed (minus operator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved keyword"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "total$amount"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dollar sign not allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "__internal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technically yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "But reserved for compiler — undefined behavior to use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "snake_case_name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convention for C variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "camelCaseName"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less common in C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "223-c-keywords-cannot-be-used-as-identifiers",
      children: "2.2.3 C Keywords (Cannot Be Used as Identifiers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto        double      int         struct      break       else\nlong        switch      case        enum        register    typedef\nchar        extern      return      union       const       float\nshort       unsigned    continue    for         signed      void\ndefault     goto        sizeof      volatile    do          if\nwhile       static      inline      restrict   _Bool       _Complex\n_Imaginary  _Atomic     _Alignas    _Alignof    _Static_assert\n_Noreturn   _Thread_local\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "224-naming-conventions",
      children: "2.2.4 Naming Conventions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Convention"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "snake_case"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "student_count"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "max_value"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most C code (Linux kernel, glibc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPPER_SNAKE_CASE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MAX_BUFFER_SIZE"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PI"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Macro constants (#define)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hungarian notation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "iCount"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "szName"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy Windows code (avoid in modern C)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single letters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "j"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "k"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop counters only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Descriptive short"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fd"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "len"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "buf"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accepted for well-known abbreviations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice:"
      }), " Prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "snake_case"
      }), " for variables and functions. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UPPER_SNAKE_CASE"
      }), " only for macros."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int student_count = 30;          // descriptive snake_case\n    int i;                           // acceptable for loop counter\n\n    for (i = 0; i < student_count; i++)\n        printf(\"Student %d\\n\", i + 1);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Identifiers follow letter/underscore/digit rules, are case-sensitive, and must not collide with keywords.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " N/A (compile-time enforcement)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-fundamental-data-types",
      children: "2.3 Fundamental Data Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--parking-lot-spot-sizes",
      children: "Real-World Analogy — Parking Lot Spot Sizes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Motorcycle spot — 1 byte, small footprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact car spot — 2 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sedan spot — 4 bytes, the standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUV spot — 4 or 8 bytes (platform dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended truck spot — 8 bytes, guaranteed large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact with rounded edges — 4 bytes, less precise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Premium sedan — 8 bytes, high precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Luxury extended — 10/16 bytes, maximum precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty lot — no vehicles, used for structure only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C provides a small set of fundamental (built-in) types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "231-complete-data-type-reference",
      children: "2.3.1 Complete Data Type Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (typical)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range (typical)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Precision"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 byte"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−128 to 127 or 0 to 255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%hd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−32,768 to 32,767"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%i"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2³¹ to 2³¹−1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%ld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2³¹ to 2³¹−1 or −2⁶³ to 2⁶³−1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2⁶³ to 2⁶³−1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "±1.2×10⁻³⁸ to ±3.4×10³⁸"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7 decimal digits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "±2.3×10⁻³⁰⁸ to ±1.7×10³⁰⁸"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 decimal digits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/16 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%Lf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~18+ decimal digits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 bytes (incomplete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "232-the-void-type",
      children: ["2.3.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " Type"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " is a special type with several distinct uses:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function returning nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void func(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No return value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function with no parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicitly no parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generic pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void *ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to untyped memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discarded expression result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(void)expr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicitly ignore the value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid print_message(void)      // returns nothing, takes no parameters\n{\n    printf(\"Hello from void function\\n\");\n}\n\nint main(void)\n{\n    print_message();\n\n    int x = 42;\n    (void)x;                  // suppress \"unused variable\" warning\n\n    void *generic = &x;       // void pointer can hold any address\n    int *ip = (int *)generic; // must cast back to use\n    printf(\"Value via void*: %d\\n\", *ip);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hello from void function\nValue via void*: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " You cannot declare a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void"
        }), " variable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "void v;"
        }), " is a compiler error) — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void"
        }), " is an incomplete type."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "233-the-char-type-in-depth",
      children: ["2.3.3 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), " Type in Depth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Characters in C are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integers"
      }), " under the hood. Each character maps to an ASCII value:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    char letter = 'A';\n    printf(\"'%c' has ASCII value %d\\n\", letter, letter);   // 'A' = 65\n\n    // Characters can participate in arithmetic:\n    char next = letter + 1;    // 'B' = 66\n    printf(\"Next: %c (%d)\\n\", next, next);\n\n    // Lowercase conversion via arithmetic:\n    char upper = 'M';\n    char lower = upper + 32;   // ASCII 'a' - 'A' = 97 - 65 = 32\n    printf(\"Lowercase of %c is %c\\n\", upper, lower);       // m\n\n    // Digit character to integer:\n    char digit_char = '7';\n    int digit_value = digit_char - '0';                     // 7\n    printf(\"Digit '%c' as integer: %d\\n\", digit_char, digit_value);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "'A' has ASCII value 65\nNext: B (66)\nLowercase of M is m\nDigit '7' as integer: 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "234-signed-vs-unsigned-char",
      children: "2.3.4 Signed vs Unsigned char"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), " can be signed or unsigned depending on the platform. For explicit intent:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    signed char sc = -50;      // guaranteed range: -128 to 127\n    unsigned char uc = 200;    // guaranteed range: 0 to 255\n\n    printf(\"signed char: %d\\n\", sc);    // -50\n    printf(\"unsigned char: %u\\n\", uc);  // 200\n\n    // Common pitfall: assigning out-of-range value\n    signed char overflow = 200;          // implementation-defined (likely wraps to -56)\n    printf(\"Overflow: %d\\n\", overflow);  // -56 (on two's complement systems)\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "signed char: -50\nunsigned char: 200\nOverflow: -56\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "235-edge-cases-for-data-types",
      children: "2.3.5 Edge Cases for Data Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char signedness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char c = 200;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined if char is signed (wraps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int overflow (signed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = INT_MAX + 1;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int overflow (unsigned)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned x = UINT_MAX + 1;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-defined: wraps to 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float f = 3.14159265358979;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncated to ~7 significant digits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "double to float truncation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float f = 3.14159265358979;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision loss from 15 to ~7 digits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 1 / 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (may crash)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void v;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Choose the smallest type that can represent your data range; use signed for general math, unsigned for bit patterns and sizes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "236-advantages-and-disadvantages-of-data-types",
      children: "2.3.6 Advantages and Disadvantages of Data Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong typing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches type mismatches at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verbose declarations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable memory layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent sizes (except char)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple integer sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-efficient code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must track range limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision choice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float is easy to lose precision with"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic programming without templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type safety, must cast manually"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "237-complexity",
      children: "2.3.7 Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All fundamental type operations (load, store, arithmetic) are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(1)"
      }), " — single CPU instructions. Type checking happens at compile time with zero runtime cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-type-modifiers",
      children: "2.4 Type Modifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--parking-lot-modifier-signs",
      children: "Real-World Analogy — Parking Lot Modifier Signs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Modifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Compact only\" — smaller spot, limits vehicle size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Oversize vehicle\" — extended spot for larger vehicles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Any vehicle allowed\" — includes positive and negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Positive only\" — doubles capacity in one direction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid — cannot be both (you cannot be compact and extended)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "241-modifier-combinations",
      children: "2.4.1 Modifier Combinations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Type modifiers ", (0,jsx_runtime.jsx)(_components.code, {
        children: "short"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "long"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "signed"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned"
      }), " can be combined with integer types in specific ways:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Equivalent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−32,768 to 32,767"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−32,768 to 32,767"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed short int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−32,768 to 32,767"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned short int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to 65,535"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2³¹ to 2³¹−1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2³¹ to 2³¹−1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to 4,294,967,295"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to 4,294,967,295"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to platform max"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−2⁶³ to 2⁶³−1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 to 2⁶⁴−1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "242-valid-and-invalid-combinations",
      children: "2.4.2 Valid and Invalid Combinations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    short s = 100;               // valid: short int\n    long l = 100000L;            // valid: long int\n    long long ll = 10000000000LL; // valid: 8 bytes guaranteed\n    unsigned u = 4000000000U;    // valid: unsigned int\n    unsigned long ul = 4000000000UL; // valid\n    unsigned long long ull = 100000000000ULL; // valid\n\n    // long short x;             // INVALID: cannot combine short and long\n    // signed unsigned y;        // INVALID: cannot combine signed and unsigned\n    // short long z;             // INVALID: conflicting modifiers\n\n    printf(\"short:        %hd\\n\", s);\n    printf(\"long:         %ld\\n\", l);\n    printf(\"long long:    %lld\\n\", ll);\n    printf(\"unsigned:     %u\\n\", u);\n    printf(\"unsigned long:%lu\\n\", ul);\n    printf(\"unsigned LL:  %llu\\n\", ull);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "short:        100\nlong:         100000\nlong long:    10000000000\nunsigned:     4000000000\nunsigned long:4000000000\nunsigned LL:  100000000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "243-type-modifier-comparison-table",
      children: "2.4.3 Type Modifier Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Modifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applies To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect on Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect on Range"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimizes (≥2 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increases (≥4 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees ≥8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest integer range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char, int types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both negative and positive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char, int types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubles positive max, no negative"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "244-long-double",
      children: "2.4.4 long double"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "long double"
      }), " is available on some platforms with extended precision:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    long double ld = 3.14159265358979323846L; // L suffix for long double\n    printf(\"long double value: %.20Lf\\n\", ld);\n    printf(\"sizeof(long double): %zu bytes\\n\", sizeof(long double));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (x86 with 80-bit extended precision):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "long double value: 3.14159265358979323846\nsizeof(long double): 10 bytes (or 16 with padding)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "245-edge-cases-for-type-modifiers",
      children: "2.4.5 Edge Cases for Type Modifiers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "short overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short s = 32767 + 1;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior (signed overflow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned wrap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned u = 0; u--;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-defined: wraps to UINT_MAX"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long long overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long ll = LLONG_MAX + 1;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned underflow in loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (unsigned i = 5; i >= 0; i--)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Infinite loop! ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i >= 0"
            }), " is always true"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit sign change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (-1 < (unsigned)1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False! −1 converts to UINT_MAX"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Infinite Unsigned Loop — Classic Bug:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    // BUG: unsigned loop variable with >= 0 condition\n    for (unsigned i = 5; i >= 0; i--)   // INFINITE LOOP\n    {\n        printf(\"%u \", i);\n        if (i == 0) break;              // forced exit\n    }\n    printf(\"\\n\");\n\n    // CORRECT: use signed or different condition\n    for (int i = 5; i >= 0; i--)\n        printf(\"%d \", i);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5 4 3 2 1 0\n5 4 3 2 1 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Type modifiers customize integer range — short saves memory, long extends range, unsigned doubles positive capacity.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(1) — modifiers only affect compile-time type selection, not runtime performance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "25-the-sizeof-operator",
      children: ["2.5 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " Operator"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " yields the size (in bytes) of a type or expression. It is evaluated at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile time"
      }), " (except for variable-length arrays)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    printf(\"char:        %zu byte\\n\", sizeof(char));\n    printf(\"short:       %zu bytes\\n\", sizeof(short));\n    printf(\"int:         %zu bytes\\n\", sizeof(int));\n    printf(\"long:        %zu bytes\\n\", sizeof(long));\n    printf(\"long long:   %zu bytes\\n\", sizeof(long long));\n    printf(\"float:       %zu bytes\\n\", sizeof(float));\n    printf(\"double:      %zu bytes\\n\", sizeof(double));\n    printf(\"long double: %zu bytes\\n\", sizeof(long double));\n\n    int x = 42;\n    printf(\"Variable x:  %zu bytes\\n\", sizeof x);   // parentheses optional for variables\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (64-bit system):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char:        1 byte\nshort:       2 bytes\nint:         4 bytes\nlong:        8 bytes\nlong long:   8 bytes\nfloat:       4 bytes\ndouble:      8 bytes\nlong double: 16 bytes\nVariable x:  4 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size_t"
        }), " (unsigned integer type), printed with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%zu"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(char)"
        }), " is always 1 by definition in the C standard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " on an expression does not evaluate the expression."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For arrays, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " returns total bytes (= element count × element size)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[10];\n    printf(\"sizeof(arr):  %zu bytes\\n\", sizeof(arr));      // 40 (10 * 4)\n    printf(\"sizeof(arr[0]): %zu bytes\\n\", sizeof(arr[0])); // 4\n    printf(\"Array length: %zu\\n\", sizeof(arr) / sizeof(arr[0])); // 10\n\n    // sizeof does NOT evaluate its operand:\n    int x = 5;\n    size_t sz = sizeof(x++);   // x++ is NOT evaluated\n    printf(\"x = %d (still 5!)\\n\", x);   // 5, not 6\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr):  40 bytes\nsizeof(arr[0]): 4 bytes\nArray length: 10\nx = 5 (still 5!)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " is a compile-time operator that returns type size in bytes; use it for portable code.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(array) / sizeof(array[0])"
        }), " to get element count — but this breaks when the array decays to a pointer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-storage-classes",
      children: "2.6 Storage Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--storage-lockers",
      children: "Real-World Analogy — Storage Lockers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Storage Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary rental locker — created on entry, destroyed on exit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Valet key holder — fast access but limited capacity (hint only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " (local)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal permanent locker — retains contents between visits, but only you see it"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " (global)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Company filing cabinet — visible to everyone in the department (file)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Department-shared folder — defined in one file, visible in others"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label maker — creates a new nickname for an existing type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "261-storage-class-comparison",
      children: "2.6.1 Storage Class Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Initialization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage (uninitialized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage (uninitialized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU register (hint)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (file for globals)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-initialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static (global)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File (internal linkage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-initialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program (external linkage)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-initialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data segment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typedef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (compile-time alias)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope of definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "262-auto--the-default",
      children: ["2.6.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " — The Default"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every local variable is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " by default. Explicit use of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " is rare in modern C."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    auto int x = 42;    // 'auto' is redundant here\n    int y = 100;         // same as auto int y = 100\n\n    printf(\"x = %d, y = %d\\n\", x, y);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 42, y = 100\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "263-register--hint-to-the-compiler",
      children: ["2.6.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register"
      }), " — Hint to the Compiler"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suggests the variable be stored in a CPU register for fast access. Modern compilers largely ignore this hint."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    register int counter;\n    // int *p = &counter;   // ERROR: cannot take address of register variable\n\n    for (counter = 0; counter < 1000; counter++)\n        printf(\"%d \", counter);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key constraints:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cannot take address of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " variable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " operator not allowed)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compiler may or may not honor the hint (usually ignores it with modern optimizers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primarily useful in embedded systems with limited registers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "264-static--persistent-lifetime-controlled-scope",
      children: ["2.6.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), " — Persistent Lifetime, Controlled Scope"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Local static:"
      }), " Variable persists across function calls but is visible only inside the function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint counter(void)\n{\n    static int count = 0;   // initialized once, retains value across calls\n    return ++count;\n}\n\nint main(void)\n{\n    printf(\"%d\\n\", counter());  // 1\n    printf(\"%d\\n\", counter());  // 2\n    printf(\"%d\\n\", counter());  // 3\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1\n2\n3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Static Local Variable:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Call  | Access | count (before) | Operation | count (after) | Return\n------+--------+----------------+-----------+---------------+--------\n1     | Read   | 0              | ++count   | 1             | 1\n2     | Read   | 1              | ++count   | 2             | 2\n3     | Read   | 2              | ++count   | 3             | 3\n4     | Read   | 3              | ++count   | 4             | 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File-static (internal linkage):"
      }), " Limits visibility to the current translation unit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// File: helper.c\nstatic int internal_counter = 0;   // visible only in this file\n\nstatic void helper_function(void)  // visible only in this file\n{\n    internal_counter++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "265-extern--cross-file-visibility",
      children: ["2.6.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extern"
      }), " — Cross-File Visibility"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Declares a variable or function defined in another file."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// File: global.h  (declaration)\nextern int shared_counter;\nextern void increment(void);\n\n// File: global.c  (definition)\n#include \"global.h\"\nint shared_counter = 0;     // actual storage allocated here\n\nvoid increment(void)\n{\n    shared_counter++;\n}\n\n// File: main.c\n#include <stdio.h>\n#include \"global.h\"\n\nint main(void)\n{\n    printf(\"Initial: %d\\n\", shared_counter);  // 0\n    increment();\n    increment();\n    printf(\"After 2 increments: %d\\n\", shared_counter);  // 2\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial: 0\nAfter 2 increments: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — extern variable sharing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step | File      | Operation              | shared_counter Value\n-----+-----------+------------------------+---------------------\n1    | global.c  | int shared_counter = 0 | 0\n2    | main.c    | printf reads           | 0\n3    | main.c    | increment()            | 1\n4    | main.c    | increment()            | 2\n5    | main.c    | printf reads           | 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "266-typedef--type-aliases",
      children: ["2.6.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef"
      }), " — Type Aliases"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates an alias for an existing type. Improves readability and portability."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef unsigned long ulong;      // alias: ulong = unsigned long\ntypedef unsigned char byte;       // alias: byte = unsigned char\ntypedef int* int_ptr;             // alias: int_ptr = int*\n\nint main(void)\n{\n    ulong big = 4000000000UL;\n    byte data = 0xFF;\n    int x = 42;\n    int_ptr p = &x;\n\n    printf(\"ulong: %lu\\n\", big);\n    printf(\"byte: %u\\n\", data);\n    printf(\"pointer value: %d\\n\", *p);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ulong: 4000000000\nbyte: 255\npointer value: 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "267-advantages-and-disadvantages-of-storage-classes",
      children: "2.6.7 Advantages and Disadvantages of Storage Classes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "auto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple default, automatic cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No persistence, uninitialized by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential speed (hint)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot take address, often ignored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves state, encapsulates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumes memory for program duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static (file)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information hiding, reduces namespace pollution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less flexible than dynamic linking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables modular programming across files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global state — harder to reason about threading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improves readability, platform abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can obscure the underlying type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "268-edge-cases",
      children: "2.6.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static in header"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static int x;"
            }), " in header"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each .c file gets its own copy — usually wrong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extern with definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern int x = 5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Treated as definition despite extern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple extern declarations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern int x; extern int x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed — declarations can repeat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "register int*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "register int *p;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed, but cannot take p's address either"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef inside block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f() { typedef int T; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typedef scoped to the block"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n// DANGER: static in header — each file gets its own copy\n// static int file_specific = 0;\n\nint main(void)\n{\n    // extern with initializer = definition\n    // extern int trouble = 5;  // This actually defines `trouble`\n    // int trouble = 10;        // ERROR: redefinition\n\n    printf(\"Storage classes control visibility and lifetime\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Storage classes define a variable's lifetime (how long it lives) and scope (who can see it).\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(1) — storage class is a compile-time attribute, no runtime cost for auto/static/extern."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-constants",
      children: "2.7 Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--unchangeable-signs",
      children: "Real-World Analogy — Unchangeable Signs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " variable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Painted sign on a building — cannot be changed, but is physically present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " macro"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Billboard template — replaced textually before construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            }), " constant"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parking lot section numbers — sequential, related, integral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer literal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed limit sign — value written directly in the code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "271-the-const-qualifier",
      children: ["2.7.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " Qualifier"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), "-qualified variable cannot be modified after initialization. The compiler enforces this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    const double PI = 3.14159265358979;\n    const int MAX_USERS = 1000;\n\n    // PI = 3.0;                // COMPILER ERROR: cannot modify const\n    // MAX_USERS = 500;        // COMPILER ERROR\n\n    printf(\"PI = %.15f\\n\", PI);\n    printf(\"Max users = %d\\n\", MAX_USERS);\n\n    // const must be initialized at definition\n    // const int UNINIT;        // COMPILER ERROR\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Properties of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type-checked by the compiler."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Has a memory address (can use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&const_var"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must be initialized when defined."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can be used with pointers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int *p"
        }), " (pointer to const int) vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int * const p"
        }), " (const pointer to int)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "272-define-constants-symbolicmacro-constants",
      children: ["2.7.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " Constants (Symbolic/Macro Constants)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " is a preprocessor directive — it performs textual substitution before compilation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define PI 3.14159\n#define MAX_STUDENTS 100\n#define SQUARE(x) ((x) * (x))     // function-like macro\n#define AREA_OF_CIRCLE(r) (PI * (r) * (r))\n\nint main(void)\n{\n    printf(\"PI = %.5f\\n\", PI);                    // 3.14159\n    printf(\"Max students = %d\\n\", MAX_STUDENTS);  // 100\n    printf(\"Square of 5 = %d\\n\", SQUARE(5));      // 25\n    printf(\"Area r=3 = %.5f\\n\", AREA_OF_CIRCLE(3)); // 28.27431\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PI = 3.14159\nMax students = 100\nSquare of 5 = 25\nArea r=3 = 28.27431\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Properties of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No type checking (textual substitution)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No memory address (preprocessor replaces before compiler sees it)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No scope — effective from point of definition to end of file (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#undef"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can define macros with parameters (function-like macros)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Caution: Parenthesize macro parameters to avoid operator precedence bugs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define BAD_SQUARE(x) x * x     // WITHOUT parentheses\n// BAD_SQUARE(1+2) expands to 1+2 * 1+2 = 1+2+2 = 5 (not 9!)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "273-enum-constants",
      children: ["2.7.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enum"
      }), " Constants"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "enum"
      }), " defines a set of named integer constants, typically used for related values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nenum weekdays {\n    MONDAY,       // 0 (default, increments by 1)\n    TUESDAY,      // 1\n    WEDNESDAY,    // 2\n    THURSDAY,     // 3\n    FRIDAY,       // 4\n    SATURDAY,     // 5\n    SUNDAY        // 6\n};\n\nenum status {\n    SUCCESS = 0,\n    ERR_NOT_FOUND = -1,\n    ERR_PERMISSION = -2,\n    ERR_TIMEOUT = -3\n};\n\nint main(void)\n{\n    enum weekdays today = WEDNESDAY;\n    printf(\"Today is day %d\\n\", today);           // 2\n\n    enum status result = SUCCESS;\n    printf(\"Status: %d\\n\", result);                // 0\n\n    enum weekdays next = (today + 1) % 7;\n    printf(\"Next day number: %d\\n\", next);         // 3\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Today is day 2\nStatus: 0\nNext day number: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "274-const-vs-define-vs-enum--comparison",
      children: "2.7.4 const vs #define vs enum — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (compiler)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (preprocessor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (int type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (textual replacement)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (compile-time constant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can take address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (& operator)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File scope (until #undef)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enclosing scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not visible (replaced)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Suitable for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Typed constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Macros, conditional compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related integer constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static or stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (inlined)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be used in switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if integer expression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (C89), Yes (C99+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (C only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define DEBUG 1\n\nenum error_codes { OK = 0, WARN = 1, ERROR = 2, FATAL = 3 };\n\nconst double TAX_RATE = 0.08;\n\nint main(void)\n{\n#if DEBUG\n    printf(\"Debug mode active\\n\");\n#endif\n\n    enum error_codes code = WARN;\n    printf(\"Error code: %d\\n\", code);\n    printf(\"Tax rate: %.2f\\n\", TAX_RATE);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "275-integer-literal-suffixes",
      children: "2.7.5 Integer Literal Suffixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 42;\n    unsigned u = 42U;\n    long l = 42L;\n    unsigned long ul = 42UL;\n    long long ll = 42LL;\n    unsigned long long ull = 42ULL;\n\n    printf(\"int:          %d\\n\", x);\n    printf(\"unsigned:     %u\\n\", u);\n    printf(\"long:         %ld\\n\", l);\n    printf(\"unsigned long:%lu\\n\", ul);\n    printf(\"long long:    %lld\\n\", ll);\n    printf(\"unsigned LL:  %llu\\n\", ull);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "276-edge-cases-for-constants",
      children: "2.7.6 Edge Cases for Constants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const pointer to const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int * const p = &x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neither pointer nor value can change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "#define without value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define FLAG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defined empty — used with #ifdef"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enum without name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum { A, B, C };"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous enum — just the constants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const with union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const union { int x; float f; } u;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire union is const"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer literal overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 2147483648;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined (wraps or warns)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " for type-checked immutability, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), " for macros and conditional compilation, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enum"
        }), " for related integer constant sets.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(1) — constants are resolved at compile time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "28-formatted-output-with-printf",
      children: ["2.8 Formatted Output with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--label-maker",
      children: "Real-World Analogy — Label Maker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "printf is like a label maker that takes objects and prints them onto labels according to your format template. The format string specifies the layout, and each argument fills a slot."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "281-format-specifier-reference",
      children: "2.8.1 Format Specifier Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%i"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed decimal int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", -42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%u"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned decimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%u\", 42U)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float/double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%f\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.140000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%.2f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 decimal places"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%.2f\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%e"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%E"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scientific notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%e\", 314.0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.140000e+02"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%g"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%G"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter of %f/%e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%g\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%c\", 65)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String (null-terminated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", \"hello\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%p\", &x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x7ffd1234"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%x"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%X"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned hex (lower/upper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%x\", 255)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ff"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%o"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned octal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%o\", 8)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%zu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%zu\", sizeof(int))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%ld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%ld\", 42L)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long long int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%lld\", 42LL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%Lf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%Lf\", 3.14L)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.140000"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "282-width-precision-and-flags",
      children: "2.8.2 Width, Precision, and Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int n = 42;\n    double pi = 3.1415926535;\n\n    printf(\"Default:      '%d'\\n\", n);\n    printf(\"Width 10:     '%10d'\\n\", n);\n    printf(\"Left-align:   '%-10d'\\n\", n);\n    printf(\"Zero-padded:  '%010d'\\n\", n);\n    printf(\"Plus sign:    '%+d'\\n\", n);\n    printf(\"Space:        '% d'\\n\", n);\n\n    printf(\"\\nPrecision:\\n\");\n    printf(\"3 decimals:   '%.3f'\\n\", pi);\n    printf(\"10 width, 3:  '%10.3f'\\n\", pi);\n    printf(\"String width: '%10s'\\n\", \"hi\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Default:      '42'\nWidth 10:     '        42'\nLeft-align:   '42        '\nZero-padded:  '0000000042'\nPlus sign:    '+42'\nSpace:        ' 42'\n\nPrecision:\n3 decimals:   '3.142'\n10 width, 3:  '     3.142'\nString width: '        hi'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "283-common-printf-pitfalls",
      children: "2.8.3 Common printf Pitfalls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Consequence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong specifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%f\", 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d %d\", 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Extra arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", 1, 2, 3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra args ignored (but wasteful)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%s with non-string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash (dereferences address 42)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%% to print %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete specifier — may crash"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " printf format specifiers control output layout; always match the specifier to the argument type.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(n) where n is output length."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "29-formatted-input-with-scanf",
      children: ["2.9 Formatted Input with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scanf"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--barcode-scanner",
      children: "Real-World Analogy — Barcode Scanner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scanf is like a barcode scanner that reads formatted input and decodes it into typed variables. It needs to know the target location (address) to write the result."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "291-scanf-basics",
      children: "2.9.1 scanf Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int age;\n    float height;\n    char initial;\n\n    printf(\"Enter age, height, first initial: \");\n    int items = scanf(\"%d %f %c\", &age, &height, &initial);\n\n    if (items == 3)\n        printf(\"Read: Age=%d, Height=%.1f, Initial=%c\\n\", age, height, initial);\n    else\n        printf(\"Failed to read all 3 items (got %d)\\n\", items);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always pass the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "address"
        }), " of the variable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&var"
        }), ") for non-array types."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Returns the number of items successfully read (important for error checking)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input whitespace (spaces, tabs, newlines) is automatically skipped for most specifiers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "292-the-newline-gotcha-with-c",
      children: ["2.9.2 The Newline Gotcha with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%c"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%c"
      }), " specifier reads any character, including whitespace. This causes a common issue:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int number;\n    char letter;\n\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &number);\n\n    printf(\"Enter a letter: \");\n    scanf(\"%c\", &letter);    // BUG: reads the newline left from previous input\n\n    printf(\"Number: %d, Letter: '%c' (ASCII %d)\\n\", number, letter, letter);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Add a space before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%c"
      }), " to skip whitespace:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "    scanf(\" %c\", &letter);   // space before %c skips any whitespace\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "293-input-validation",
      children: "2.9.3 Input Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int value;\n    int result;\n\n    printf(\"Enter an integer: \");\n    result = scanf(\"%d\", &value);\n\n    if (result == 1)\n        printf(\"You entered: %d\\n\", value);\n    else if (result == 0)\n        printf(\"Invalid input — not an integer\\n\");\n    else\n        printf(\"End of file reached\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " scanf reads formatted input using addresses; always check the return value and watch for the newline-char gotcha.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(n) where n is input length."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "210-type-conversion",
      children: "2.10 Type Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--currency-exchange",
      children: "Real-World Analogy — Currency Exchange"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Conversion Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit promotion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchanging USD to EUR — the bank automatically converts the smaller denomination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force-converting a violin case into a suitcase — you override the system"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer promotion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1.50 -> 150 cents — converting to a more precise unit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Truncation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cutting a 2x4 board to 1.8m — you lose the fractional part"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2101-implicit-conversion-type-promotion",
      children: "2.10.1 Implicit Conversion (Type Promotion)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When operands of different types appear in an expression, C promotes the smaller type to the larger type using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "usual arithmetic conversions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 5;\n    double b = 2.5;\n    double result = a + b;   // a (int) is promoted to 5.0 (double)\n    printf(\"5 + 2.5 = %.1f\\n\", result);   // 7.5\n\n    int i = 3;\n    double d = 1.5;\n    double r = i / 2;        // integer division first! 3/2 = 1 (NOT 1.5)\n    printf(\"3/2 = %.1f\\n\", r);             // 1.0 (wrong if you expected 1.5)\n\n    double r2 = i / 2.0;     // 2.0 is double -> i promoted to double -> 1.5\n    printf(\"3/2.0 = %.1f\\n\", r2);          // 1.5\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5 + 2.5 = 7.5\n3/2 = 1.0\n3/2.0 = 1.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2102-integer-promotion-rules",
      children: "2.10.2 Integer Promotion Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In any expression, types smaller than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "short"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Bool"
      }), ") are promoted to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    char c1 = 100, c2 = 100;\n    char result_char = c1 + c2;   // c1 and c2 are promoted to int, sum = 200\n    // 200 is out of range for signed char (-128..127) -> wraps to -56\n\n    printf(\"c1 + c2 = %d\\n\", c1 + c2);        // 200 (int)\n    printf(\"result_char = %d\\n\", result_char); // -56 if char is signed\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (signed char system):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "c1 + c2 = 200\nresult_char = -56\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2103-usual-arithmetic-conversions-step-by-step",
      children: "2.10.3 Usual Arithmetic Conversions (Step-by-Step)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When binary operators have different types, this decision tree is followed:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If either operand is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long double"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long double"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else if either is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else if either is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "integer promotion"
        }), " is performed on both operands, then:\na. If both have same type after promotion, no further conversion.\nb. If one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned long long"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned long long"
        }), ".\nc. If one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long long"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long long"
        }), ".\nd. If one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned long"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned long"
        }), ".\ne. If one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long"
        }), ".\nf. If one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned int"
        }), ", the other converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned int"
        }), ".\ng. Otherwise, both are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Usual Arithmetic Conversion:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Expression: int a + unsigned int b\n  Step 1: Not float/double -> go to integer promotion\n  Step 2: Both already int/unsigned\n  Step 3: int vs unsigned int -> int converts to unsigned int (rule f)\n  Result: unsigned int\n\nExpression: int a * double b\n  Step 1: Not long double\n  Step 2: double found -> int a converts to double\n  Result: double\n\nExpression: short s + char c\n  Step 1: Not float/double -> go to integer promotion\n  Step 2: short -> int, char -> int\n  Step 3: Both int -> no further conversion\n  Result: int\n\nExpression: long l + unsigned int ui\n  Step 1: Not float/double -> integer promotion\n  Step 2: long + unsigned int\n  Step 3: If long can represent all unsigned int values -> ui converts to long\n          Otherwise -> both convert to unsigned long\n  Result: long or unsigned long (platform-dependent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2104-explicit-conversion-casting",
      children: "2.10.4 Explicit Conversion (Casting)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    double x = 10.8;\n    int truncated = (int)x;               // 10 — fractional part discarded\n    int rounded = (int)(x + 0.5);         // 11 — manual rounding\n\n    int numerator = 7;\n    int denominator = 3;\n    double q1 = (double)numerator / denominator;   // 2.333333\n    double q2 = (double)(numerator / denominator); // 2.0 (cast happens AFTER division)\n\n    printf(\"Truncated: %d\\n\", truncated);\n    printf(\"Rounded: %d\\n\", rounded);\n    printf(\"Cast before division: %f\\n\", q1);\n    printf(\"Cast after division: %f\\n\", q2);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Truncated: 10\nRounded: 11\nCast before division: 2.333333\nCast after division: 2.000000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2105-implicit-vs-explicit-conversion-comparison",
      children: "2.10.5 Implicit vs Explicit Conversion Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implicit Conversion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explicit Cast"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic by compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)expression"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be unintentional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit programmer intent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can lose data silently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warning when narrowing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clearly visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe promotions (int to double)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When data loss is intended"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexpected truncation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still possible to misuse"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2106-surprising-conversion-edge-cases",
      children: "2.10.6 Surprising Conversion Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Signed to unsigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(unsigned int)-1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4294967295 (UINT_MAX)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned to signed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(int)4000000000U"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float to int truncation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(int)3.999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (truncated, not rounded)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double to float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(float)3.14159265358979"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative to unsigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-1 < 1U"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (false!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char to int (signed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char c = 200; int i = c;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = -56 if char is signed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Division before cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(double)(3/2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0 (integer division first)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-1 < 1U"
        }), " Trap:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int signed_val = -1;\n    unsigned int unsigned_val = 1;\n\n    if (signed_val < unsigned_val)\n        printf(\"-1 < 1U is TRUE\\n\");\n    else\n        printf(\"-1 < 1U is FALSE (surprise!)\\n\");\n\n    // Fix: cast explicitly\n    if (signed_val < (int)unsigned_val)\n        printf(\"After cast: -1 < 1 is TRUE\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-1 < 1U is FALSE (surprise!)\nAfter cast: -1 < 1 is TRUE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2107-precision-loss-examples",
      children: "2.10.7 Precision Loss Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    double precise = 3.14159265358979323846;\n    float approximate = (float)precise;\n    printf(\"double: %.15f\\n\", precise);      // 3.141592653589793\n    printf(\"float:  %.15f\\n\", approximate);  // 3.141592741012573 (loss!)\n\n    int big = 123456789;\n    float f = (float)big;\n    printf(\"int:    %d\\n\", big);              // 123456789\n    printf(\"float:  %.0f\\n\", f);             // 123456792 (different!)\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "double: 3.141592653589793\nfloat:  3.141592741012573\nint:    123456789\nfloat:  123456792\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Implicit conversion promotes smaller to larger types; explicit cast forces conversion but watch for truncation and signed-to-unsigned surprises.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(1) — conversions are single CPU instructions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-scope-and-lifetime",
      children: "2.11 Scope and Lifetime"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy--building-access",
      children: "Real-World Analogy — Building Access"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hotel room — accessible only inside that room, destroyed on checkout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building lobby — accessible anywhere in the building"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meeting room — only during the meeting (goto labels)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory listing — valid only during the function declaration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2111-scope-types",
      children: "2.11.1 Scope Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint file_scope_var = 10;        // File scope — visible from here to end of file\n\nstatic int file_static_var = 20; // File scope but internal linkage\n\nvoid example_function(int param)  // param has function prototype scope\n{\n    auto int block_var = 30;     // Block scope (function body)\n\n    if (param > 0)\n    {\n        int inner_block = 40;    // Block scope (inside if)\n        printf(\"Inner: %d\\n\", inner_block);\n    }\n\n    for (int i = 0; i < 5; i++)  // i has block scope (C99+)\n    {\n        printf(\"%d \", i);\n    }\n}\n\nint main(void)\n{\n    printf(\"File scope: %d\\n\", file_scope_var);\n    example_function(1);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2112-scope-comparison-table",
      children: "2.11.2 Scope Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword / Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside the enclosing braces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Until ", (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 5;"
            }), " inside a function"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outside any function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From declaration to file end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program duration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int global;"
            }), " at top level"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labels only (goto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside the whole function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function duration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "label:"
            }), " anywhere in function"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inside the prototype only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype evaluation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int x);"
            }), " — x matters only here"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2113-lifetime-types",
      children: "2.11.3 Lifetime Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Variables"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From block entry to block exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local variables (auto)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program start to program end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global, static local, file-static"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "From malloc() to free()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap memory (future chapters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Thread (C11)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread creation to thread destruction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_Thread_local"
            }), " variables"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint global;                     // Static lifetime, file scope\n\nvoid demo_lifetime(void)\n{\n    static int static_local = 0;  // Static lifetime, block scope\n    int auto_local = 0;           // Automatic lifetime, block scope\n\n    static_local++;\n    auto_local++;\n\n    printf(\"static: %d, auto: %d\\n\", static_local, auto_local);\n}\n\nint main(void)\n{\n    demo_lifetime();  // static: 1, auto: 1\n    demo_lifetime();  // static: 2, auto: 1\n    demo_lifetime();  // static: 3, auto: 1\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static: 1, auto: 1\nstatic: 2, auto: 1\nstatic: 3, auto: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Scope determines where a name is visible; lifetime determines how long the storage exists.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity:"
        }), " O(1) — scope and lifetime are compile-time attributes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-tables",
      children: "Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-data-types--complete-reference",
      children: "A. Data Types — Complete Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (bytes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Max"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-128 or 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127 or 255"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%c"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%hhd"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Characters, small counters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed char"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%hhd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small signed values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned char"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%hhu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes, RGB channels (0-255)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-32,768"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32,767"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%hd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small integers, memory-critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65,535"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%hu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small positive values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2^31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^31-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose integer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^32-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%u"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit masks, sizes, indices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%ld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large integers (platform-dependent)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large unsigned values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2^63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^63-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large integers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2^64-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%llu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max range unsigned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+/-1.2e-38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+/-3.4e+38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7 digits precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+/-2.3e-308"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+/-1.7e+308"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 digits precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long double"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%Lf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum precision"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-type-modifiers-comparison",
      children: "B. Type Modifiers Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Modifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base Types"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rank (small to large)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, char (C99+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced size (>=2 bytes for short)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "short int < int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, double"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased size (>=4 bytes for long)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int < long < long long"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased size (>=8 bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char, int types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow negative values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "char, int types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only non-negative, double top range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Combinatorial Validity Matrix:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "double"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "float"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "short"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "signed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unsigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "short signed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "long unsigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-storage-classes-comparison",
      children: "C. Storage Classes Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linkage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Init"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address Available?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static (local)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Static (file)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File (visible everywhere)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typedef"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d-implicit-vs-explicit-conversion",
      children: "D. Implicit vs Explicit Conversion"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implicit Conversion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explicit Cast"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler automatically"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Programmer writes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safety warning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silence (compiler assumes intentional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May generate warning on narrowing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller -> larger (safe)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any direction (potentially unsafe)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precision loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible but silent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler may warn for narrowing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code clarity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicitly visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept for safe promotions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for all narrowing conversions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "e-const-vs-define-vs-enum",
      children: "E. const vs #define vs enum"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Introduced in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89 (K&R)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (textual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (data section)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (preprocessor)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (compile-time)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File (until #undef)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enclosing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (&const_var)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can initialize array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C99+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (int expression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "f-scope-comparison",
      children: "F. Scope Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scope Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where Declared"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visible In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Duration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inside ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ }"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within those braces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outside any function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current file from declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire function (labels only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function duration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function param list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within prototype parentheses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prototype evaluation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-does-sizeof-return-is-it-a-function-or-an-operator",
      children: "Q1: What does sizeof return? Is it a function or an operator?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " sizeof is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "operator"
      }), ", not a function. It is evaluated at compile time (except VLA) and returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size_t"
      }), " (unsigned integer type). Parentheses are required for types (", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(int)"
      }), ") but optional for expressions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof x"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 5;\nprintf(\"%zu\\n\", sizeof x);     // OK: sizeof operator on expression\nprintf(\"%zu\\n\", sizeof int);   // ERROR: parentheses required for type\nprintf(\"%zu\\n\", sizeof(int));  // OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-difference-between-static-and-global-variables",
      children: "Q2: Explain the difference between static and global variables."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Global Variable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static (File-scope)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire program (all files)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current file only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linkage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int x;"
            }), " at file scope"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "static int x;"
            }), " at file scope"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared state across files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Module-private state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// file1.c\nint global = 1;          // visible in file2.c with 'extern int global;'\nstatic int hidden = 2;   // visible ONLY in file1.c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-auto-and-register-storage-classes",
      children: "Q3: What is the difference between auto and register storage classes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Both have block scope and automatic lifetime. Key differences:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " suggests storage in a CPU register for faster access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cannot take the address"
        }), " of a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " variable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modern compilers largely ignore ", (0,jsx_runtime.jsx)(_components.code, {
          children: "register"
        }), " (they are smarter about register allocation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void example(void)\n{\n    register int fast = 100;   // hint (usually ignored)\n    // int *p = &fast;         // COMPILER ERROR\n\n    auto int normal = 100;     // same as 'int normal = 100;'\n    int *q = &normal;          // OK\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-when-should-i-use-const-vs-define",
      children: "Q4: When should I use const vs #define?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type-checked constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array sizes (C89)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macros with parameters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " (but prefer inline functions)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Related integer constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional compilation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " (with #ifdef)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point constants"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " (type-safe)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger visibility needed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-explain-extern-usage-in-multi-file-projects",
      children: "Q5: Explain extern usage in multi-file projects."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extern"
      }), " declares a variable or function defined in another file. It does NOT allocate storage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// File: config.h\nextern int debug_level;       // declaration — no storage\nextern void set_debug(int);   // function declaration\n\n// File: config.c\n#include \"config.h\"\nint debug_level = 0;           // definition — storage allocated\nvoid set_debug(int level) {    // definition\n    debug_level = level;\n}\n\n// File: main.c\n#include \"config.h\"\nint main(void) {\n    set_debug(3);\n    printf(\"Debug: %d\\n\", debug_level);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-output-of-sizeofvoid",
      children: "Q6: What is the output of sizeof(void)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(void)"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compiler error"
      }), " in standard C. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " is an incomplete type that cannot be completed — it has no size. However, GCC as an extension defines ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(void) == 1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-integer-promotion-with-an-example",
      children: "Q7: Explain integer promotion with an example."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "short"
      }), " is used in an expression, it is promoted to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char c = 200;     // assuming signed char: actual value is -56\nif (c == 200)     // false! c is promoted to int(-56) before comparison\n    printf(\"This won't print if char is signed\\n\");\n\n// Fix:\nunsigned char uc = 200;\nif (uc == 200)    // true — uc is promoted to int(200)\n    printf(\"This will print\\n\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-difference-between-int-and-long-on-32-bit-vs-64-bit",
      children: "Q8: Difference between int and long on 32-bit vs 64-bit."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit (Windows/Linux)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit (Linux/Unix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit (Windows)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "long long"
      }), " for guaranteed 8 bytes across all platforms."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-happens-when-unsigned-int-wraps-past-zero",
      children: "Q9: What happens when unsigned int wraps past zero?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Unsigned arithmetic wraps around modulo 2^n. This is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "well-defined"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "unsigned int u = 0;\nu--;                    // u becomes UINT_MAX (4294967295)\nprintf(\"%u\\n\", u);      // 4294967295\n\nu = UINT_MAX;\nu++;                    // u becomes 0\nprintf(\"%u\\n\", u);      // 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Signed integer overflow is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-can-const-variables-be-used-as-array-sizes",
      children: "Q10: Can const variables be used as array sizes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In C89, no — array sizes must be compile-time constant expressions. In C99+, yes (VLA or const-qualified types):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "const int SIZE = 10;\nint arr[SIZE];           // VLA in C99 (may be rejected in strict C89)\n// Better alternative for C89:\n#define SIZE 10\nint arr2[SIZE];          // works in all C standards\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linux-kernel-coding-style",
      children: "Linux Kernel Coding Style"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Linux kernel has strict type guidelines:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Linux kernel coding style examples:\n// Use size_t for sizes and counts\nsize_t num_pages = total_size >> PAGE_SHIFT;\n\n// Use ssize_t for signed return values (error-capable)\nssize_t bytes_read = read_file(fd, buf, len);\n\n// Use unsigned for bit flags\nunsigned int flags = GFP_KERNEL;\n\n// Use u8, u16, u32, u64 for fixed-width types\nu32 ip_address;\nu64 timestamp_ns;\n\n// Use bool for boolean values\nbool is_valid = true;\n\n// Avoid plain int for hardware-defined widths\n// WRONG: int reg_value = readl(REG_ADDR);\nu32 reg_value = readl(REG_ADDR);  // hardware register is exactly 32 bits\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedded-systems-type-choices",
      children: "Embedded Systems Type Choices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdint.h>\n#include <stdio.h>\n\nint main(void)\n{\n    // Fixed-width types from <stdint.h>\n    uint8_t  byte_val;         // exactly 8 bits, unsigned\n    int16_t  sensor_reading;   // exactly 16 bits, signed\n    uint32_t timestamp_ms;     // exactly 32 bits for timing\n    uint64_t mac_address;      // exactly 64 bits\n\n    // When memory is at a premium:\n    uint8_t led_status;        // 0 or 1\n    uint8_t menu_selection;    // 0-255 items\n\n    // When precision matters (no floating point):\n    int32_t accum;             // sensor accumulator\n    int32_t average = accum / 100;  // integer arithmetic only\n\n    printf(\"Use stdint.h types for portable embedded code\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "financial-applications",
      children: "Financial Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    // NEVER use float for money — use double or integer cents\n    // float has only ~7 digits of precision\n\n    double account_balance = 1234567.89;   // ~15 digits\n    long long cents = 123456789LL;         // exact integer cents\n\n    long long dollars = 12345;\n    int cents_part = 67;\n    double total = dollars + cents_part / 100.0;\n\n    printf(\"Balance: $%.2f\\n\", total);\n    printf(\"Cents: %lld\\n\", cents);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-protocols",
      children: "Network Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdint.h>\n\nstruct ipv4_header {\n    uint8_t  version_ihl;\n    uint8_t  dscp_ecn;\n    uint16_t total_length;\n    uint16_t identification;\n    uint16_t flags_fragment_offset;\n    uint8_t  ttl;\n    uint8_t  protocol;\n    uint16_t header_checksum;\n    uint32_t source_address;\n    uint32_t destination_address;\n};\n\nint main(void)\n{\n    struct ipv4_header hdr;\n    printf(\"IPv4 header size: %zu bytes\\n\", sizeof(hdr));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "graphics-programming",
      children: "Graphics Programming"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nstruct pixel {\n    unsigned char r;  // red\n    unsigned char g;  // green\n    unsigned char b;  // blue\n    unsigned char a;  // alpha (transparency)\n};\n\nint main(void)\n{\n    struct pixel p = { 255, 128, 64, 255 };\n    printf(\"RGBA: (%u, %u, %u, %u)\\n\", p.r, p.g, p.b, p.a);\n\n    unsigned int packed = (p.r << 24) | (p.g << 16) | (p.b << 8) | p.a;\n    printf(\"Packed: 0x%08X\\n\", packed);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declare variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type name;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int age;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declare + initialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type name = value;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double pi = 3.14;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const type name = value;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int MAX = 100;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symbolic constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define NAME value"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define PI 3.14159"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enum constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum { A, B, C };"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enum { MON, TUE };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)expression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(double)a / b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static type name;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static int counter;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%spec\", var)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%spec\", &var)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%d\", &x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(type)"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof expr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(int)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C Type Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded sensors"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned char"
            }), " for 8-bit ADC readings"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match to hardware register width"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Financial calculations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " for high-precision currency"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 decimal digits sufficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database IDs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long long"
            }), " for primary keys"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64-bit range for billions of records"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graphics (RGB)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned char"
            }), " for color channels"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0-255 per channel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System timestamps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            }), " for epoch time"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network protocols"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "uint32_t"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uint16_t"
            }), " from <stdint.h>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact-width, platform-independent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linux kernel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "size_t"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ssize_t"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u32"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "u64"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convention, portability, clarity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop counters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest native type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flags/bitmasks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uint32_t"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char *"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char[]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null-terminated by convention"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(char)"
        }), " return on any standards-compliant C implementation?\nA) 1 byte\nB) 2 bytes\nC) 4 bytes\nD) Implementation-defined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** `sizeof(char)` is always 1 byte by definition."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%d\", (int)3.9)"
        }), "?\nA) 3\nB) 4\nC) 3.9\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** The cast truncates the fractional part, producing 3."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which format specifier is correct for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size_t"
        }), "?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%d"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%u"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%zu"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%ld"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `%zu` is the correct format specifier for size_t."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x; printf(\"%d\", x);"
        }), "?\nA) 0\nB) Garbage value\nC) Undefined behavior (anything may happen)\nD) Compiler error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Undefined behavior — uninitialized local variable."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned u = 0; u--; printf(\"%u\", u);"
        }), " print?\nA) -1\nB) 0\nC) 4294967295\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** 4294967295 (UINT_MAX). Unsigned wrap is well-defined."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int x = 5;"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define x 5"
        }), "?\nA) No difference\nB) const has type checking; #define is textual substitution\nC) #define is faster\nD) const uses less memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** const provides type-checked immutability; #define is preprocessor text substitution."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-1 < 1U"
        }), " evaluate to?\nA) True (1)\nB) False (0)\nC) Undefined behavior\nD) Depends on platform"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>**B)** False (0). The -1 is converted to unsigned, becoming UINT_MAX (4294967295), so 4294967295 < 1 is false.\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "8",
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Which storage class preserves a variable's value across function calls?\nA) auto\nB) register\nC) static\nD) extern"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** static local variables retain their value between function invocations."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "9",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%zu\", sizeof(void));"
            }), "?\nA) 0\nB) 1\nC) 4\nD) Compiler error in standard C"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** Compiler error — void is an incomplete type (GCC extension gives 1)."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "10",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char c = 200;"
            }), " (signed char system), what is the value of c?\nA) 200\nB) -56\nC) Implementation-defined\nD) Undefined behavior"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** -56, because 200 - 256 = -56. Implementation-defined behavior (wrapping on two's complement)."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "summary",
          children: "Summary"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C variables must be declared with a type before use; identifiers follow specific naming rules and are case-sensitive."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Declaration"
            }), " introduces the name; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "definition"
            }), " allocates storage; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "initialization"
            }), " assigns the first value."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Fundamental types include ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            }), " modifiers."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type modifiers"
            }), " (short/long/signed/unsigned) adjust range and size, combining in a specific matrix."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage classes"
            }), " (auto/register/static/extern/typedef) control lifetime, scope, and linkage."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            }), " provide three different mechanisms for constants with different trade-offs."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " returns the byte size of a type or expression (compile-time, result type is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size_t"
            }), ", printed with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%zu"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf"
            }), " use format specifiers (", (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%c"
            }), ", etc.) for formatted output and input."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["C performs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "implicit type promotion"
            }), " (smaller -> larger) and allows ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "explicit casting"
            }), " with the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)"
            }), " syntax."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mixed-type comparisons can have surprising results (e.g., -1 < 1U is false)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            }), " (block/file/function/prototype) and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "lifetime"
            }), " (automatic/static/allocated) govern variable accessibility."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Using uninitialized variables invokes ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "undefined behavior"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unsigned integer wrap is well-defined; signed integer overflow is undefined behavior."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "exercises",
          children: "Exercises"
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "review-questions",
          children: "Review Questions"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), "? When would you choose one over the other?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Explain the output of: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char c = 'A'; printf(\"%d\", c + 3);"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What happens if you use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            }), " to print an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " value? Why?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const int MAX = 100;"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define MAX 100"
            }), "? When would you use each?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Why must ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf"
            }), " use the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), " operator for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), " variables but not for strings?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " local variables?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            }), " keyword do? Can you take its address?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What is integer promotion and why does it matter?"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", (int)(3.9 + 0.5));"
            }), "? Why?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Explain why ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-1 < 1U"
            }), " evaluates to false."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "application-problems",
          children: "Application Problems"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Type Sizes"
              }), ": Write a program that declares ", (0,jsx_runtime.jsx)(_components.code, {
                children: "short"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "int"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long long"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "float"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "double"
              }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long double"
              }), " variables, initializes them with appropriate values, and prints each using the correct format specifier and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sizeof"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Temperature Conversion"
              }), ": Write a program that reads a temperature in Fahrenheit from the user and converts it to Celsius: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "C = (F - 32) * 5 / 9"
              }), ". Ensure the division uses floating-point arithmetic."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Digit Separator"
              }), ": Write a program that reads a five-digit integer from the user and prints each digit separated by three spaces. (Hint: use division and modulus.)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Overflow Demonstration"
              }), ": Write a program that demonstrates implicit integer overflow by adding 1 to the maximum value of an ", (0,jsx_runtime.jsx)(_components.code, {
                children: "unsigned int"
              }), " and printing the result. Then do the same with a signed ", (0,jsx_runtime.jsx)(_components.code, {
                children: "int"
              }), " and observe the difference."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Storage Class Counter"
              }), ": Write a function that uses a ", (0,jsx_runtime.jsx)(_components.code, {
                children: "static"
              }), " local variable to count how many times it has been called. Call it 10 times and print the counter each time."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Character Arithmetic"
              }), ": Write a program that reads a lowercase letter and prints the corresponding uppercase letter using ASCII arithmetic (not toupper)."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "challenge-problems",
          children: "Challenge Problems"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Change Calculator"
              }), ": Write a program that reads an amount in cents (integer) and breaks it down into dollars, quarters, dimes, nickels, and pennies. Use only integer arithmetic. Example: 267 cents -> 2 dollars, 2 quarters, 1 dime, 1 nickel, 2 pennies. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "const"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "#define"
              }), " for the coin values."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Implicit Conversion Explorer"
              }), ": Write a program that tests every combination of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "char"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "short"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "int"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long long"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "float"
              }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "double"
              }), " in arithmetic operations. Print the resulting type and value for each combination. Identify which conversions lose precision."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Type Sizes Across Systems"
              }), ": Write a program that prints ", (0,jsx_runtime.jsx)(_components.code, {
                children: "sizeof"
              }), " all fundamental types. Compare the output when compiled as 32-bit vs 64-bit. Document which sizes change."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
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