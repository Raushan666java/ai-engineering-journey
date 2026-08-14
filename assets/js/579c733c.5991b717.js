"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96703],{

/***/ 35196
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_07_templates_md_579_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-07-templates-md-579.json
const site_docs_courses_oop_cpp_07_templates_md_579_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/07-templates","title":"Chapter 7: Templates","description":"Previous 08-exceptions","source":"@site/docs/courses/oop-cpp/07-templates.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/07-templates","permalink":"/ai-engineering-journey/oop-cpp/07-templates","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-templates","slug":"/oop-cpp/07-templates","title":"Chapter 7: Templates","sidebar_label":"Chapter 7: Templates","sidebar_position":7},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 6: Operator Overloading","permalink":"/ai-engineering-journey/oop-cpp/06-operator-overloading"},"next":{"title":"Chapter 8: Exception Handling","permalink":"/ai-engineering-journey/oop-cpp/08-exceptions"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/07-templates.md


const frontMatter = {
	id: '07-templates',
	slug: '/oop-cpp/07-templates',
	title: 'Chapter 7: Templates',
	sidebar_label: 'Chapter 7: Templates',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Templates';

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
  "value": "7.1 Motivation → The Problem Templates Solve",
  "id": "71-motivation--the-problem-templates-solve",
  "level": 2
}, {
  "value": "Real-World Analogy: The Cookie Cutter",
  "id": "real-world-analogy-the-cookie-cutter",
  "level": 3
}, {
  "value": "Analogy: Blueprint and Buildings",
  "id": "analogy-blueprint-and-buildings",
  "level": 3
}, {
  "value": "The Problem: Code Duplication Without Templates",
  "id": "the-problem-code-duplication-without-templates",
  "level": 3
}, {
  "value": "The Solution: A Single Template",
  "id": "the-solution-a-single-template",
  "level": 3
}, {
  "value": "Numbered Steps of Template Processing",
  "id": "numbered-steps-of-template-processing",
  "level": 3
}, {
  "value": "Pseudocode of Template Expansion",
  "id": "pseudocode-of-template-expansion",
  "level": 3
}, {
  "value": "Complexity Analysis of the Template Approach",
  "id": "complexity-analysis-of-the-template-approach",
  "level": 3
}, {
  "value": "7.2 Function Templates",
  "id": "72-function-templates",
  "level": 2
}, {
  "value": "7.2.1 Basic Syntax",
  "id": "721-basic-syntax",
  "level": 3
}, {
  "value": "7.2.2 Type Deduction vs Explicit Specification",
  "id": "722-type-deduction-vs-explicit-specification",
  "level": 3
}, {
  "value": "7.2.3 Template Instantiation Process → Detailed Dry Run",
  "id": "723-template-instantiation-process--detailed-dry-run",
  "level": 3
}, {
  "value": "Dry Run: Multiple Instantiations",
  "id": "dry-run-multiple-instantiations",
  "level": 3
}, {
  "value": "Complexity Analysis of Template Instantiation",
  "id": "complexity-analysis-of-template-instantiation",
  "level": 3
}, {
  "value": "7.2.4 Function Template Overloading",
  "id": "724-function-template-overloading",
  "level": 3
}, {
  "value": "7.2.5 Function Template with Multiple Type Parameters",
  "id": "725-function-template-with-multiple-type-parameters",
  "level": 3
}, {
  "value": "7.2.6 Non-Type Template Parameters",
  "id": "726-non-type-template-parameters",
  "level": 3
}, {
  "value": "7.3 Class Templates",
  "id": "73-class-templates",
  "level": 2
}, {
  "value": "7.3.1 Basic Syntax",
  "id": "731-basic-syntax",
  "level": 3
}, {
  "value": "7.3.2 Member Functions Defined Outside the Class Body",
  "id": "732-member-functions-defined-outside-the-class-body",
  "level": 3
}, {
  "value": "7.3.3 Class Template Instantiation → Detailed Dry Run",
  "id": "733-class-template-instantiation--detailed-dry-run",
  "level": 3
}, {
  "value": "7.3.4 Class Template with Non-Type Parameters → Ring Buffer",
  "id": "734-class-template-with-non-type-parameters--ring-buffer",
  "level": 3
}, {
  "value": "7.3.5 Template Template Parameters",
  "id": "735-template-template-parameters",
  "level": 3
}, {
  "value": "7.3.6 Dependent Names and the <code>typename</code> Keyword",
  "id": "736-dependent-names-and-the-typename-keyword",
  "level": 3
}, {
  "value": "7.4 Template Specialization",
  "id": "74-template-specialization",
  "level": 2
}, {
  "value": "7.4.1 Full (Explicit) Specialization → Deep Dive",
  "id": "741-full-explicit-specialization--deep-dive",
  "level": 3
}, {
  "value": "7.4.2 Partial Specialization",
  "id": "742-partial-specialization",
  "level": 3
}, {
  "value": "7.4.3 Explicit vs Partial vs Full Specialization → Comparison Table",
  "id": "743-explicit-vs-partial-vs-full-specialization--comparison-table",
  "level": 3
}, {
  "value": "7.4.4 Full Specialization of Class Templates → Example",
  "id": "744-full-specialization-of-class-templates--example",
  "level": 3
}, {
  "value": "7.4.5 When to Specialize vs Overload (Function Templates)",
  "id": "745-when-to-specialize-vs-overload-function-templates",
  "level": 3
}, {
  "value": "7.4.6 Real-World Specialization: <code>std::vector&lt;bool&gt;</code>",
  "id": "746-real-world-specialization-stdvectorbool",
  "level": 3
}, {
  "value": "7.5 Variadic Templates (C++11)",
  "id": "75-variadic-templates-c11",
  "level": 2
}, {
  "value": "7.5.1 Basic Syntax",
  "id": "751-basic-syntax",
  "level": 3
}, {
  "value": "7.5.2 Recursive Variadic Approach (C++11/14)",
  "id": "752-recursive-variadic-approach-c1114",
  "level": 3
}, {
  "value": "7.5.3 Fold Expressions (C++17)",
  "id": "753-fold-expressions-c17",
  "level": 3
}, {
  "value": "7.5.4 Real-World Application: <code>std::tuple</code> Implementation",
  "id": "754-real-world-application-stdtuple-implementation",
  "level": 3
}, {
  "value": "7.6 SFINAE → Substitution Failure Is Not An Error",
  "id": "76-sfinae--substitution-failure-is-not-an-error",
  "level": 2
}, {
  "value": "7.6.1 Core Principle",
  "id": "761-core-principle",
  "level": 3
}, {
  "value": "7.6.2 <code>std::enable_if</code> → The Classic SFINAE Tool",
  "id": "762-stdenable_if--the-classic-sfinae-tool",
  "level": 3
}, {
  "value": "7.6.3 <code>void_t</code> Detection Idiom",
  "id": "763-void_t-detection-idiom",
  "level": 3
}, {
  "value": "7.6.4 <code>if constexpr</code> → The C++17 Alternative",
  "id": "764-if-constexpr--the-c17-alternative",
  "level": 3
}, {
  "value": "7.6.5 SFINAE vs Concepts (C++20)",
  "id": "765-sfinae-vs-concepts-c20",
  "level": 3
}, {
  "value": "7.7 Template Compilation Model",
  "id": "77-template-compilation-model",
  "level": 2
}, {
  "value": "7.7.1 The Inclusion Model",
  "id": "771-the-inclusion-model",
  "level": 3
}, {
  "value": "7.7.2 The ODR and Multiple Definitions",
  "id": "772-the-odr-and-multiple-definitions",
  "level": 3
}, {
  "value": "7.7.3 Explicit Instantiation → Hiding Template Definitions",
  "id": "773-explicit-instantiation--hiding-template-definitions",
  "level": 3
}, {
  "value": "7.7.4 The <code>export</code> Keyword (Historical)",
  "id": "774-the-export-keyword-historical",
  "level": 3
}, {
  "value": "7.7.5 Template Compilation Model → Comparison Table",
  "id": "775-template-compilation-model--comparison-table",
  "level": 3
}, {
  "value": "7.8 <code>typename</code> vs <code>class</code> → Detailed Comparison",
  "id": "78-typename-vs-class--detailed-comparison",
  "level": 2
}, {
  "value": "The Historical Distinction",
  "id": "the-historical-distinction",
  "level": 3
}, {
  "value": "The Practical Difference",
  "id": "the-practical-difference",
  "level": 3
}, {
  "value": "When <code>typename</code> Is Mandatory",
  "id": "when-typename-is-mandatory",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "Recommendation",
  "id": "recommendation",
  "level": 3
}, {
  "value": "7.9 Function Template vs Class Template → Comprehensive Comparison",
  "id": "79-function-template-vs-class-template--comprehensive-comparison",
  "level": 2
}, {
  "value": "7.10 Applications in Real Systems",
  "id": "710-applications-in-real-systems",
  "level": 2
}, {
  "value": "7.10.1 STL Containers → Template Architecture",
  "id": "7101-stl-containers--template-architecture",
  "level": 3
}, {
  "value": "7.10.2 <code>std::enable_if</code> and Type Traits → Memcpy Optimization",
  "id": "7102-stdenable_if-and-type-traits--memcpy-optimization",
  "level": 3
}, {
  "value": "7.10.3 CRTP → Curiously Recurring Template Pattern",
  "id": "7103-crtp--curiously-recurring-template-pattern",
  "level": 3
}, {
  "value": "7.10.4 Policy-Based Design",
  "id": "7104-policy-based-design",
  "level": 3
}, {
  "value": "7.10.5 Type Traits Library",
  "id": "7105-type-traits-library",
  "level": 3
}, {
  "value": "7.10.6 <code>std::enable_shared_from_this</code> → CRTP in the Standard Library",
  "id": "7106-stdenable_shared_from_this--crtp-in-the-standard-library",
  "level": 3
}, {
  "value": "7.11 Common Pitfalls and Best Practices",
  "id": "711-common-pitfalls-and-best-practices",
  "level": 2
}, {
  "value": "Pitfall 1: Forgetting <code>template</code> Keyword for Dependent Template Members",
  "id": "pitfall-1-forgetting-template-keyword-for-dependent-template-members",
  "level": 3
}, {
  "value": "Pitfall 2: Code Bloat from Many Template Instantiations",
  "id": "pitfall-2-code-bloat-from-many-template-instantiations",
  "level": 3
}, {
  "value": "Pitfall 3: Forgetting <code>typename</code> for Dependent Types",
  "id": "pitfall-3-forgetting-typename-for-dependent-types",
  "level": 3
}, {
  "value": "Pitfall 4: Non-Type Parameter with Runtime Value",
  "id": "pitfall-4-non-type-parameter-with-runtime-value",
  "level": 3
}, {
  "value": "Best Practice Checklist",
  "id": "best-practice-checklist",
  "level": 3
}, {
  "value": "7.12 Interview Corner",
  "id": "712-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between template instantiation and template specialization?",
  "id": "q1-what-is-the-difference-between-template-instantiation-and-template-specialization",
  "level": 3
}, {
  "value": "Q2: Why can&#39;t function templates be partially specialized?",
  "id": "q2-why-cant-function-templates-be-partially-specialized",
  "level": 3
}, {
  "value": "Q3: What is SFINAE and when would you use it?",
  "id": "q3-what-is-sfinae-and-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q4: What is the CRTP and why is it useful?",
  "id": "q4-what-is-the-crtp-and-why-is-it-useful",
  "level": 3
}, {
  "value": "Q5: Explain the difference between <code>typename</code> and <code>class</code> in templates.",
  "id": "q5-explain-the-difference-between-typename-and-class-in-templates",
  "level": 3
}, {
  "value": "Q6: How does <code>std::vector&lt;bool&gt;</code> specialization work and why is it controversial?",
  "id": "q6-how-does-stdvectorbool-specialization-work-and-why-is-it-controversial",
  "level": 3
}, {
  "value": "Q7: What is lazy instantiation and how does it affect template design?",
  "id": "q7-what-is-lazy-instantiation-and-how-does-it-affect-template-design",
  "level": 3
}, {
  "value": "7.13 Summary",
  "id": "713-summary",
  "level": 2
}, {
  "value": "7.14 Exercises",
  "id": "714-exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Code Problems",
  "id": "code-problems",
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
        id: "chapter-7-templates",
        children: "Chapter 7: Templates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/06-operator-overloading",
          children: "06-operator-overloading"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/08-exceptions",
          children: "08-exceptions"
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
        href: "../../assets/images/lessons/oop-cpp/07-templates/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/07-templates/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/07-templates/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/07-templates/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/07-templates/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/07-templates/visual-explanation.png",
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
        children: "Design type-agnostic function and class templates with full mastery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace template instantiation and specialization through dry runs and complexity analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply explicit, partial, and full specialization for type-specific optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy variadic templates with fold expressions for type-safe heterogeneous packs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exploit SFINAE for compile-time introspection and enable_if-based dispatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the template compilation model and its impact on project structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish typename vs class, template template parameters, and dependent name rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply template techniques in real systems: CRTP, policy-based design, type traits"
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
              children: "Function Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-parameterized function blueprints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write once, use with any type supporting the operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-parameterized class blueprints"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector<T>"
            }), " → the canonical example"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Instantiation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler stamping out concrete code per type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each instantiation is a distinct type with unique address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Specialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Providing type-specific implementations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full, partial, and explicit → each serves a different purpose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-Type Parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time constants as template arguments"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::array<T, N>"
            }), " → bounds checked at compile time"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variadic Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accept arbitrary number of type parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of tuples, perfect forwarding, fold expressions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SFINAE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution Failure Is Not An Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time type introspection without runtime cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template Template Parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Templates accepting other templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy-based design and container adaptors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curiously Recurring Template Pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static polymorphism without virtual dispatch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Function Templates] --> B[Class Templates]\n    B --> C[Template Instantiation]\n    C --> D[Specialization]\n    D --> E[Variadic Templates]\n    E --> F[SFINAE]\n    F --> G[Real-World Applications]\n    G --> H[CRTP & Policy Design]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-motivation--the-problem-templates-solve",
      children: "7.1 Motivation → The Problem Templates Solve"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-the-cookie-cutter",
      children: "Real-World Analogy: The Cookie Cutter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine a bakery that makes three types of cookies: chocolate chip, gingerbread, and sugar. Without a cookie cutter, the baker hand-shapes each cookie individually → exact same labor for every batch. With a single cookie cutter (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "template"
      }), "), the baker stamps out any dough type in seconds. The cutter is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "blueprint"
      }), "; each stamped cookie is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "instantiation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Dough (type)            →  Cookie Cutter (template)  →  Baked Cookie (instantiation)\nchocolate chip          →  shape<T>                   →  shape<chocolate_chip>\ngingerbread             →  shape<T>                   →  shape<gingerbread>\nsugar                   →  shape<T>                   →  shape<sugar>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The cutter never changes → only the dough. This is exactly what templates do: the algorithm structure stays fixed; the type parameter changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analogy-blueprint-and-buildings",
      children: "Analogy: Blueprint and Buildings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A house blueprint describes a structure without specifying the exact materials. The same blueprint can produce a brick house, a wooden house, or a concrete house. The blueprint is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "template"
      }), "; each constructed house is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "instantiation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Blueprint (template)    →  material = type parameter\nBlueprint for house<T>  →  house<brick>, house<wood>, house<concrete>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-problem-code-duplication-without-templates",
      children: "The Problem: Code Duplication Without Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strong typing forces repetition when the same logic applies to different types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int max_int(int a, int b) {\n    return (a > b) ? a : b;\n}\n\ndouble max_double(double a, double b) {\n    return (a > b) ? a : b;\n}\n\nstd::string max_string(const std::string& a, const std::string& b) {\n    return (a > b) ? a : b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every overload is identical except the type. This violates DRY (Don't Repeat Yourself), multiplies maintenance costs, and spreads bugs across N copies. If we find a bug in the comparison logic, we must fix it N times."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-solution-a-single-template",
      children: "The Solution: A Single Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nT max_of(T a, T b) {\n    return (a > b) ? a : b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-of-template-processing",
      children: "Numbered Steps of Template Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Write the template blueprint with type parameter T\nStep 2: Use the template with a concrete type (e.g., int)\nStep 3: Compiler sees the call max_of(3, 7)\nStep 4: Compiler deduces T = int from arguments\nStep 5: Compiler generates int max_of(int, int) concretely\nStep 6: Result is a regular function → same as hand-written\nStep 7: Linker resolves calls to the generated function\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-of-template-expansion",
      children: "Pseudocode of Template Expansion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION_TEMPLATE max_of<T>(a, b):\n    IF a > b THEN RETURN a ELSE RETURN b\n\n// When called with int arguments, compiler generates:\nFUNCTION max_of_int(a: int, b: int) -> int:\n    IF a > b THEN RETURN a ELSE RETURN b\n\n// When called with double arguments, compiler generates:\nFUNCTION max_of_double(a: double, b: double) -> double:\n    IF a > b THEN RETURN a ELSE RETURN b\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-the-template-approach",
      children: "Complexity Analysis of the Template Approach"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lines of Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maintenance Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Runtime Overhead"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type Safety"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Manual overloading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) types × body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → fix every copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → fix once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (zero-cost)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Macros (#define)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → debug nightmare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void* + casts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Templates provide the same runtime performance as hand-written overloads (zero-cost abstraction) with the maintenance of a single definition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-function-templates",
      children: "7.2 Function Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "721-basic-syntax",
      children: "7.2.1 Basic Syntax"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function template declaration begins with the keyword ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template"
      }), " followed by a comma-separated list of template parameters enclosed in angle brackets:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nT max_of(T a, T b) {\n    return (a > b) ? a : b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The template parameter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " acts as a placeholder for a concrete type. The compiler replaces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " with the actual type at the point of instantiation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template  ← keyword indicating a template declaration\n    <typename T>  ← template parameter list\n        typename ← keyword indicating T is a type parameter\n        T        ← the template parameter name\n    T max_of(T a, T b)  ← function signature using T\n        T        ← return type parameterized by T\n        T a, T b ← parameter types parameterized by T\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "722-type-deduction-vs-explicit-specification",
      children: "7.2.2 Type Deduction vs Explicit Specification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler can deduce ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " from the function arguments, or you can specify it explicitly:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\ntemplate <typename T>\nT max_of(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    // Type deduction from arguments\n    std::cout << max_of(3, 7) << \"\\n\";           // T = int,    output: 7\n    std::cout << max_of(3.14, 2.72) << \"\\n\";     // T = double, output: 3.14\n\n    // Explicit type specification\n    std::cout << max_of<double>(3, 2.72) << \"\\n\"; // T = double explicitly, output: 3\n\n    // Mixed types require explicit specification\n    // max_of(3, 2.72); // ERROR: conflicting deduction (int vs double)\n    std::cout << max_of<double>(3, 2.72) << \"\\n\"; // OK: explicit T = double\n\n    // Works with user-defined types too\n    std::string s1 = \"apple\", s2 = \"orange\";\n    std::cout << max_of(s1, s2) << \"\\n\";          // T = std::string, output: orange\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7\n3.14\n3\n3\norange\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "723-template-instantiation-process--detailed-dry-run",
      children: "7.2.3 Template Instantiation Process → Detailed Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the compiler encounters ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max_of(3, 7)"
      }), ", it performs the following steps:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────────────────────────┐\n│                    INSTANTIATION DRY RUN: max_of(3, 7)                          │\n├───────┬──────────────────────────────────┬───────────────────────────────────────┤\n│ Step  │ Action                           │ State                                 │\n├───────┼──────────────────────────────────┼───────────────────────────────────────┤\n│ 1     │ Parse call expression            │ max_of(3, 7)                          │\n│ 2     │ Check argument types             │ 3: int, 7: int                        │\n│ 3     │ Name lookup for max_of           │ Found template max_of<T>              │\n│ 4     │ Deduce T from argument types     │ T = int (both args are int)           │\n│ 5     │ Check template parameter count   │ 1 parameter, 1 provided ✓             │\n│ 6     │ Substitute T → int in signature  │ int max_of(int a, int b)              │\n│ 7     │ Check constraint (if any)        │ No concepts, unconditional ✓          │\n│ 8     │ Substitute T → int in body       │ return (a > b) ? a : b;               │\n│ 9     │ Type-check the body with T=int   │ int > int → bool, OK ✓               │\n│ 10    │ Generate object code             │ Machine instructions emitted          │\n│ 11    │ Store in object file             │ Symbol: int max_of(int, int)          │\n│ 12    │ (Link time) Merge duplicates     │ COMDAT folding if multiple TUs        │\n└───────┴──────────────────────────────────┴───────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-multiple-instantiations",
      children: "Dry Run: Multiple Instantiations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────────────────────────┐\n│               INSTANTIATION DRY RUN: max_of with 3 types                        │\n├──────────────┬─────────┬──────────┬──────────┬──────────┬───────────────────────┤\n│ Call         │ T       │ Return   │ Body after substitution │ Code generated?    │\n├──────────────┼─────────┼──────────┼─────────────────────────┼────────────────────┤\n│ max_of(3,7)  │ int     │ int      │ (a > b) ? a : b         │ Yes → int version  │\n│ max_of(3.14, │ double  │ double   │ (a > b) ? a : b         │ Yes → double vers. │\n│  2.72)       │         │          │                         │                     │\n│ max_of(s1,s2)│ string  │ string   │ (a > b) ? a : b         │ Yes → string vers. │\n└──────────────┴─────────┴──────────┴──────────┬──────────────┴────────────────────┤\n                                               │                                   │\n                         Each call generates a SEPARATE function with SEPARATE    │\n                         machine code. They share NO code at runtime.             │\n                         However, all three functions are IDENTICAL in structure  │\n                         at the source level.                                     │\n                         ─────────────────────────────────────────────────────────│\n                         Binary size impact: ~3× a single function                 │\n                         Optimization potential: linker may deduplicate identical │\n                         machine code if the types produce identical instructions │\n                         (e.g., int and long on many platforms)                   │\n└─────────────────────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-template-instantiation",
      children: "Complexity Analysis of Template Instantiation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One definition serves N types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compile-time cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N × S)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N = number of types, S = size of template"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generated code = hand-written quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary size (code bloat)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each type gets its own function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deduplication (linker)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) worst, often O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMDAT folding merges identical machine code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintenance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One definition to modify"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why binary bloat is usually acceptable:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only types that are actually used generate code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The linker deduplicates identical instantiations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code size increase is linear with the number of types, not exponential"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tradeoff (one definition vs N overloads) is overwhelmingly positive"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "724-function-template-overloading",
      children: "7.2.4 Function Template Overloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiple function templates (or a template and a non-template function) can coexist for the same name. Overload resolution follows a strict priority:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact match"
        }), " → non-template function wins over template"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template with exact deduction"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Promotion/conversion"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n\n// Non-template: exact match for const char*\nvoid max_of(const char* a, const char* b) {\n    std::cout << \"Non-template (C-string): \"\n              << (std::strcmp(a, b) > 0 ? a : b) << \"\\n\";\n}\n\n// Template: generic version\ntemplate <typename T>\nvoid max_of(T a, T b) {\n    std::cout << \"Template: \" << (a > b ? a : b) << \"\\n\";\n}\n\nint main() {\n    max_of(3, 7);           // template (int)\n    max_of(\"alpha\", \"beta\"); // non-template (const char*) wins by priority rule 1\n    max_of(3.14, 2.72);     // template (double)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Template: 7\nNon-template (C-string): beta\nTemplate: 3.14\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why the non-template wins for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const char*"
        }), ":"]
      }), " The non-template is an exact match. The template would deduce ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T = const char*"
      }), " and compare pointers (memory addresses), not string content. The non-template overload uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strcmp"
      }), " for lexicographic comparison → semantically correct."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "725-function-template-with-multiple-type-parameters",
      children: "7.2.5 Function Template with Multiple Type Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <typeinfo>\n\ntemplate <typename T, typename U>\nauto product(T a, U b) -> decltype(a * b) {\n    return a * b;\n}\n\nint main() {\n    auto r1 = product(3, 4.5);        // T=int, U=double, returns double\n    auto r2 = product(2.5, 3);        // T=double, U=int, returns double\n    auto r3 = product<int, double>(3, 4);\n\n    std::cout << r1 << \" \" << r2 << \" \" << r3 << \"\\n\";  // 13.5 7.5 12\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "13.5 7.5 12\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Trailing return type (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-> decltype(a * b)"
        }), "):"]
      }), " Required when the return type depends on the template parameters in a way that cannot be expressed before the parameter list. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " alone (C++14) also works:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T, typename U>\nauto product(T a, U b) {      // C++14: auto return type deduction\n    return a * b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "726-non-type-template-parameters",
      children: "7.2.6 Non-Type Template Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Template parameters need not be types. Non-type parameters accept compile-time constant values:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <array>\n\n// Non-type parameter: size_t N is a compile-time constant\ntemplate <typename T, size_t N>\nclass FixedArray {\nprivate:\n    T data_[N];\npublic:\n    constexpr size_t size() const { return N; }\n\n    T& operator[](size_t i) {\n        return data_[i];  // Bounds checking at compile time when i is constant\n    }\n\n    void fill(const T& value) {\n        for (size_t i = 0; i < N; ++i) data_[i] = value;\n    }\n};\n\nint main() {\n    FixedArray<int, 5> arr;\n    arr.fill(42);\n    for (size_t i = 0; i < arr.size(); ++i)\n        std::cout << arr[i] << \" \";\n    // Output: 42 42 42 42 42\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allowed non-type parameter types (growing with each standard):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "C++ Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Allowed Types"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integral types, enumerations, pointers, references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nullptr_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "auto (deduced non-type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point types, literal class types"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: FixedArray<int, 5> Instantiation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────────────────────────────┐\n│               INSTANTIATION DRY RUN: FixedArray<int, 5>                  │\n├────────┬─────────────────────────────────┬───────────────────────────────┤\n│ Step   │ Action                          │ Result                        │\n├────────┼─────────────────────────────────┼───────────────────────────────┤\n│ 1      │ Parse FixedArray<int, 5>        │ T = int, N = 5                │\n│ 2      │ Substitute T → int in body      │ int data_[5];                 │\n│ 3      │ Substitute N → 5 in body        │ size() returns 5              │\n│ 4      │ Generate class layout           │ sizeof = 5 * sizeof(int) = 20 │\n│ 5      │ Verify N > 0 (implicit)         │ 5 > 0 ✓                       │\n│ 6      │ Instantiate constructor         │ FixedArray() → default init   │\n│ 7      │ Instantiate size()              │ returns 5 (constexpr)         │\n│ 8      │ Instantiate fill()              │ loops 5 times                 │\n│ 9      │ Instantiate operator[]          │ bounds check? only if asked   │\n└────────┴─────────────────────────────────┴───────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory:"
        }), " sizeof(T) × N → deterministic and known at compile time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access:"
        }), " O(1) → direct indexing, same as raw array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety:"
        }), " Array bounds checked at compile time for constant indices → zero-cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Compare to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FixedArray"
        }), " allocates on stack (no heap), has no dynamic resizing overhead, and N is part of the type → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FixedArray<int, 5>"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FixedArray<int, 10>"
        }), " are different types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why N is part of the type:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "FixedArray<int, 5> arr5;\nFixedArray<int, 10> arr10;\n// arr5 = arr10;  // ERROR: different types\n// arr5 = arr10;  // Compiler error: no operator= from different type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables stronger type safety but prevents mixed-size assignments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-class-templates",
      children: "7.3 Class Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "731-basic-syntax",
      children: "7.3.1 Basic Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Class templates parameterize both data members and member functions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nclass Stack {\npublic:\n    void push(const T& value) {\n        data_.push_back(value);\n    }\n\n    void pop() {\n        if (!data_.empty()) data_.pop_back();\n    }\n\n    const T& top() const {\n        return data_.back();\n    }\n\n    bool empty() const { return data_.empty(); }\n    size_t size() const { return data_.size(); }\n\nprivate:\n    std::vector<T> data_;\n};\n\n// Usage:\nStack<int> int_stack;\nint_stack.push(42);\nStack<std::string> str_stack;\nstr_stack.push(\"hello\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "732-member-functions-defined-outside-the-class-body",
      children: "7.3.2 Member Functions Defined Outside the Class Body"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When member functions are defined outside the class, the template parameter must be repeated and the class scope must be qualified:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nclass Stack {\npublic:\n    void push(const T& value);\n    void pop();\n    const T& top() const;\n    bool empty() const;\n    size_t size() const;\nprivate:\n    std::vector<T> data_;\n};\n\n// Out-of-class definitions require full template syntax\ntemplate <typename T>\nvoid Stack<T>::push(const T& value) {\n    data_.push_back(value);\n}\n\ntemplate <typename T>\nvoid Stack<T>::pop() {\n    if (!data_.empty()) data_.pop_back();\n}\n\ntemplate <typename T>\nconst T& Stack<T>::top() const {\n    return data_.back();\n}\n\ntemplate <typename T>\nbool Stack<T>::empty() const {\n    return data_.empty();\n}\n\ntemplate <typename T>\nsize_t Stack<T>::size() const {\n    return data_.size();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "template <typename T>"
        }), " prefix is required:"]
      }), " Each out-of-class definition is itself a template. The compiler needs to know that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack<T>"
      }), " refers to a template (not a concrete class) and that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " is a template parameter (not an existing type)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Stack<T>::"
        }), " and not just ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Stack::"
        }), ":"]
      }), " Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<T>"
      }), ", the compiler would look for a concrete class named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack"
      }), " (not a class template), which does not exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "733-class-template-instantiation--detailed-dry-run",
      children: "7.3.3 Class Template Instantiation → Detailed Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int main() {\n    Stack<int> int_stack;\n    int_stack.push(42);\n\n    Stack<std::string> str_stack;\n    str_stack.push(\"hello\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────┐\n│               INSTANTIATION DRY RUN: Stack<int>                           │\n├────────┬──────────────────────────────────┬────────────────────────────────┤\n│ Step   │ Action                           │ Result                         │\n├────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 1      │ Parse Stack<int>                 │ T = int                        │\n│ 2      │ Substitute int for T in body     │ std::vector<int> data_;        │\n│ 3      │ Calculate class layout           │ sizeof(Stack<int>) resolved    │\n│ 4      │ Constructor generated            │ Stack<int>::Stack()            │\n│ 5      │ push(42) called                  │ push(const int&) needed        │\n│ 6      │ push template instantiated       │ void push(const int&) code gen │\n│ 7      │ Check push body validity         │ vector<int>::push_back(int) ✓  │\n│ 8      │ empty(), size(), top()           │ NOT instantiated (lazy)        │\n│        │ not called                       │ → no code generated            │\n└────────┴──────────────────────────────────┴────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌────────────────────────────────────────────────────────────────────────────┐\n│               INSTANTIATION DRY RUN: Stack<std::string>                   │\n├────────┬──────────────────────────────────┬────────────────────────────────┤\n│ Step   │ Action                           │ Result                         │\n├────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 1      │ Parse Stack<std::string>         │ T = std::string                │\n│ 2      │ Substitute string for T          │ std::vector<std::string> data_;│\n│ 3      │ Layout                           │ sizeof(Stack<string>) resolved │\n│ 4      │ push(\"hello\") instantiated       │ void push(const string&) code  │\n│ 5      │ copy semantics                   │ string copy constructor called │\n│ 6      │ empty, size, top                 │ NOT instantiated               │\n└────────┴──────────────────────────────────┴────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight: Lazy instantiation."
      }), " The compiler only generates member functions that are actually used. If you never call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack<int>::top()"
      }), ", no code is generated for it. This saves compile time and binary size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "push_back:"
        }), " Amortized O(1) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::vector"
        }), " grows geometrically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pop:"
        }), " O(1) → simply decrements size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "top:"
        }), " O(1) → direct reference to back element"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(N) where N is number of elements pushed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compile-time cost:"
        }), " Proportional to number of member functions actually used"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "734-class-template-with-non-type-parameters--ring-buffer",
      children: "7.3.4 Class Template with Non-Type Parameters → Ring Buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstddef>\n\ntemplate <typename T, std::size_t Capacity>\nclass RingBuffer {\npublic:\n    RingBuffer() : head_(0), tail_(0), full_(false) {}\n\n    bool push(const T& value) {\n        if (full_) return false;       // buffer full\n        data_[tail_] = value;\n        tail_ = (tail_ + 1) % Capacity;\n        full_ = (tail_ == head_);\n        return true;\n    }\n\n    bool pop(T& out) {\n        if (empty()) return false;     // buffer empty\n        out = data_[head_];\n        head_ = (head_ + 1) % Capacity;\n        full_ = false;\n        return true;\n    }\n\n    bool empty() const { return !full_ && (head_ == tail_); }\n    bool full()  const { return full_; }\n    std::size_t capacity() const { return Capacity; }\n\nprivate:\n    T data_[Capacity];\n    std::size_t head_, tail_;\n    bool full_;\n};\n\nint main() {\n    RingBuffer<int, 3> buf;\n    buf.push(10);\n    buf.push(20);\n    buf.push(30);\n\n    std::cout << \"Full: \" << buf.full() << \"\\n\";    // 1 (true)\n    std::cout << \"Push more: \" << buf.push(40) << \"\\n\"; // 0 (false, full)\n\n    int val;\n    buf.pop(val);\n    std::cout << \"Popped: \" << val << \"\\n\";          // 10\n    buf.push(40);\n    std::cout << \"Push 40: \" << buf.push(40) << \"\\n\"; // 1 (now space)\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Full: 1\nPush more: 0\nPopped: 10\nPush 40: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "735-template-template-parameters",
      children: "7.3.5 Template Template Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A template template parameter is a template that accepts another template as an argument. This enables writing code that works with any container type:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <deque>\n#include <list>\n#include <memory>\n\n// Template template parameter: Container is a template expecting <T, Allocator>\ntemplate <typename T,\n          template <typename, typename> class Container = std::vector>\nclass Adapter {\npublic:\n    void push(const T& val) { data_.push_back(val); }\n    void print() const {\n        for (const auto& v : data_) std::cout << v << \" \";\n        std::cout << \"\\n\";\n    }\nprivate:\n    Container<T, std::allocator<T>> data_;\n};\n\nint main() {\n    Adapter<int, std::vector> v_adapter;\n    v_adapter.push(1); v_adapter.push(2); v_adapter.push(3);\n    v_adapter.print();  // Output: 1 2 3\n\n    Adapter<int, std::deque> d_adapter;\n    d_adapter.push(10); d_adapter.push(20);\n    d_adapter.print();  // Output: 10 20\n\n    Adapter<int, std::list> l_adapter;\n    l_adapter.push(100);\n    l_adapter.print();  // Output: 100\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3\n10 20\n100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Syntax breakdown:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename T, template <typename, typename> class Container>\n         ↑                                    ↑\n       type param                      template template param\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The template template parameter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Container"
      }), " must match the signature of the expected template. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::deque"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::list"
      }), " all accept two template parameters (element type and allocator), so they match ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template <typename, typename> class"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++17 update:"
      }), " You can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " for template template parameters:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T, template <typename, typename> typename Container>\nclass Adapter { /* ... */ };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility cost:"
        }), " Compile-time only → no runtime cost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary size:"
        }), " O(N × M) where N = types used, M = containers used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance:"
        }), " One implementation works with any compatible container"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world use:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::stack"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::queue"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::priority_queue"
      }), " in the STL accept a template template parameter for the underlying container:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::stack<int> s1;                         // deque<int> by default\nstd::stack<int, std::vector<int>> s2;       // vector-based stack\nstd::stack<int, std::list<int>> s3;         // list-based stack\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "736-dependent-names-and-the-typename-keyword",
      children: ["7.3.6 Dependent Names and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a name in a template depends on a template parameter, the compiler cannot determine whether it names a type or a value until instantiation. You must disambiguate with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nclass Example {\npublic:\n    // T::value_type depends on T → could be a type or a static member\n    // Without typename, compiler assumes it's a value (variable/function)\n    using Type = typename T::value_type;  // typename required\n\n    void process() {\n        // If Nested is a type inside T, we need typename\n        typename T::Nested* ptr;          // typename required: declares pointer\n        // Without typename: multiplication T::Nested * ptr;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Rule:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " before any qualified name that depends on a template parameter and is intended to name a type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failure example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid func() {\n    T::value_type* p;  // ERROR: parsed as multiplication, not pointer declaration\n    // typename T::value_type* p;  // CORRECT: declares pointer p\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this rule exists:"
      }), " Before instantiation, the compiler does not know what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T::value_type"
      }), " is. It could be:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A nested type (", (0,jsx_runtime.jsx)(_components.code, {
          children: "typedef int value_type"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A static data member (", (0,jsx_runtime.jsx)(_components.code, {
          children: "static int value_type;"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A member function (", (0,jsx_runtime.jsx)(_components.code, {
          children: "void value_type();"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The C++ standard requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " to resolve the ambiguity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-template-specialization",
      children: "7.4 Template Specialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "741-full-explicit-specialization--deep-dive",
      children: "7.4.1 Full (Explicit) Specialization → Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Full specialization provides a completely different implementation for a specific template argument combination:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <string>\n\n// Primary template\ntemplate <typename T>\nconst char* describe(const T& value) {\n    return \"Unknown type\";\n}\n\n// Full specialization for int\ntemplate <>\nconst char* describe<int>(const int& value) {\n    return \"Integer type\";\n}\n\n// Full specialization for std::string\ntemplate <>\nconst char* describe<std::string>(const std::string& value) {\n    return value.c_str();\n}\n\nint main() {\n    std::cout << describe(42) << \"\\n\";               // Integer type\n    std::cout << describe(3.14) << \"\\n\";             // Unknown type\n    std::cout << describe(std::string(\"hello\")) << \"\\n\"; // hello\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Integer type\nUnknown type\nhello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: Full Specialization Selection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────────────────────────────┐\n│            FULL SPECIALIZATION RESOLUTION DRY RUN                        │\n├──────────────────────┬────────────────────────────────┬──────────────────┤\n│ Call                 │ Candidates                     │ Result            │\n├──────────────────────┼────────────────────────────────┼──────────────────┤\n│ describe(42)         │ primary<T> with T=int          │ generic available │\n│                      │ full spec for int              │ FULL match ✓     │\n│                      │ Full spec wins                 │ \"Integer type\"   │\n├──────────────────────┼────────────────────────────────┼──────────────────┤\n│ describe(3.14)       │ primary<T> with T=double       │ only option      │\n│                      │ (no spec for double)           │ \"Unknown type\"   │\n├──────────────────────┼────────────────────────────────┼──────────────────┤\n│ describe(\"hello\")    │ primary<T> with T=const char*  │ primary used     │\n│                      │ (no spec for const char*)      │ \"Unknown type\"   │\n├──────────────────────┼────────────────────────────────┼──────────────────┤\n│ describe(string)     │ primary<T> with T=string       │ generic available│\n│                      │ full spec for string            │ FULL match ✓    │\n│                      │ Full spec wins                 │ \"hello\"          │\n└──────────────────────┴────────────────────────────────┴──────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "742-partial-specialization",
      children: "7.4.2 Partial Specialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Partial specialization matches a subset of types rather than a single type. It is only allowed for class templates (and variable templates in C++14), NOT for function templates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\n// Primary template\ntemplate <typename T>\nstruct IsPointer {\n    static constexpr bool value = false;\n};\n\n// Partial specialization for T* (any pointer type)\ntemplate <typename T>\nstruct IsPointer<T*> {\n    static constexpr bool value = true;\n};\n\n// Partial specialization for const T* (pointer to const)\ntemplate <typename T>\nstruct IsPointer<const T*> {\n    static constexpr bool value = true;\n};\n\nint main() {\n    std::cout << \"int:       \" << IsPointer<int>::value << \"\\n\";        // 0\n    std::cout << \"int*:      \" << IsPointer<int*>::value << \"\\n\";       // 1\n    std::cout << \"const int*:\" << IsPointer<const int*>::value << \"\\n\"; // 1\n    std::cout << \"int&:      \" << IsPointer<int&>::value << \"\\n\";       // 0\n    std::cout << \"int**:     \" << IsPointer<int**>::value << \"\\n\";      // 1 (via T**)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int:       0\nint*:      1\nconst int*:1\nint&:      0\nint**:     1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run: Partial Specialization Matching"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────────────────────────────┐\n│             PARTIAL SPECIALIZATION MATCHING DRY RUN                     │\n├──────────────────┬─────────┬──────────────┬──────────────────┬───────────┤\n│ Type             │ Primary │ Partial<T*>   │ Partial<const T*>│ Selected  │\n├──────────────────┼─────────┼──────────────┼──────────────────┼───────────┤\n│ int              │ ✓       │ ✗             │ ✗                 │ Primary   │\n│ int*             │ ✓       │ ✓ (T=int)    │ ✗                 │ Part: T*  │\n│ const int*       │ ✓       │ ✗             │ ✓ (T=int)         │ Part: c T*│\n│ int&             │ ✓       │ ✗             │ ✗                 │ Primary   │\n│ int**            │ ✓       │ ✓ (T=int*)   │ ✗                 │ Part: T*  │\n│ int***           │ ✓       │ ✓ (T=int**)  │ ✗                 │ Part: T*  │\n│ vector<int>*     │ ✓       │ ✓ (T=vector) │ ✗                 │ Part: T*  │\n│ const char*      │ ✓       │ ✗             │ ✓ (T=char)        │ Part: c T*│\n└──────────────────┴─────────┴──────────────┴──────────────────┴───────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why partial specialization is NOT allowed for function templates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Function templates support overloading, which subsumes partial specialization. Overload resolution already handles \"more specialized\" vs \"less specialized\" templates. Using overloading instead keeps the language simpler:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Instead of (ILLEGAL):\n// template <typename T> void foo(T* ptr);         // partial spec of foo<T>\n\n// Use overloading (LEGAL and preferred):\ntemplate <typename T> void foo(T value);    // base\ntemplate <typename T> void foo(T* ptr);     // overload → not a specialization\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "743-explicit-vs-partial-vs-full-specialization--comparison-table",
      children: "7.4.3 Explicit vs Partial vs Full Specialization → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full (Explicit) Specialization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partial Specialization"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explicit Instantiation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <> struct C<int>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <T> struct C<T*>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template struct C<int>;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One specific type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A family of types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One specific type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Allowed for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function & Class templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class templates only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function & Class templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses primary template"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amount of code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete reimplementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial reimplementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forces compilation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overrides primary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (for that type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (for that family)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (uses primary)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "vector<bool>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "is_pointer<T*>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template code in .cpp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-specific optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Category optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hide definitions, reduce compile time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "744-full-specialization-of-class-templates--example",
      children: "7.4.4 Full Specialization of Class Templates → Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\n// Primary template: generic storage\ntemplate <typename T>\nclass Storage {\npublic:\n    explicit Storage(size_t size) : data_(size) {}\n    T& get(size_t i) { return data_[i]; }\n    size_t size() const { return data_.size(); }\nprivate:\n    std::vector<T> data_;\n};\n\n// Full specialization for bool: bit-packed storage\ntemplate <>\nclass Storage<bool> {\npublic:\n    explicit Storage(size_t size) : data_(size / 8 + 1, 0) {}\n\n    bool get(size_t i) const {\n        return (data_[i / 8] >> (i % 8)) & 1;\n    }\n\n    void set(size_t i, bool value) {\n        if (value)\n            data_[i / 8] |= (1 << (i % 8));\n        else\n            data_[i / 8] &= ~(1 << (i % 8));\n    }\n\n    size_t size() const { return data_.size() * 8; }\n\nprivate:\n    std::vector<unsigned char> data_;\n};\n\nint main() {\n    Storage<int> ints(10);\n    ints.get(0) = 42;\n\n    Storage<bool> bits(80);  // 80 bits = 10 bytes storage\n    bits.set(0, true);\n    bits.set(7, true);\n    std::cout << \"Bit 0: \" << bits.get(0) << \"\\n\";  // 1\n    std::cout << \"Bit 7: \" << bits.get(7) << \"\\n\";  // 1\n    std::cout << \"Bit 1: \" << bits.get(1) << \"\\n\";  // 0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bit 0: 1\nBit 7: 1\nBit 1: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "745-when-to-specialize-vs-overload-function-templates",
      children: "7.4.5 When to Specialize vs Overload (Function Templates)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " For function templates, prefer overloading over specialization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n\n// Primary template\ntemplate <typename T>\nvoid print(const T& val) {\n    std::cout << \"Generic: \" << val << \"\\n\";\n}\n\n// Overload → works for const char*\nvoid print(const char* val) {\n    std::cout << \"C-string: \" << val << \"\\n\";\n}\n\n// Specialization → works but fragile\ntemplate <>\nvoid print<int>(const int& val) {\n    std::cout << \"Specialized int: \" << val << \"\\n\";\n}\n\nint main() {\n    print(42);         // Specialized int: 42\n    print(3.14);       // Generic: 3.14\n    print(\"hello\");    // C-string: hello (overload wins)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why overloading beats specialization:"
      }), " Overload resolution is more intuitive. Specialization interacts badly with overloading → if new overloads are added, specializations may be silently ignored. Overloads participate in name lookup; specializations do not."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "746-real-world-specialization-stdvectorbool",
      children: ["7.4.6 Real-World Specialization: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<bool>"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most famous specialization in the C++ standard library:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "namespace std {\n    // Primary template: vector<T>\n    template <typename T, typename Alloc = allocator<T>>\n    class vector {\n        T* data_;\n        size_t size_, capacity_;\n    public:\n        T& operator[](size_t i) { return data_[i]; }\n        // ...\n    };\n\n    // Full specialization: vector<bool>\n    template <>\n    class vector<bool> {\n        unsigned char* bits_;  // Stores 8 bits per byte\n        size_t size_, capacity_;\n    public:\n        class reference {     // Proxy for bit access\n            unsigned char* byte_ptr_;\n            int bit_index_;\n        public:\n            reference& operator=(bool val) { /* set bit */ return *this; }\n            operator bool() const { /* read bit */ return result; }\n        };\n\n        reference operator[](size_t i);  // Returns proxy, not bool&\n        // ...\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "vector<bool>"
      }), " packs 8 booleans into each byte, saving 87.5% memory. But ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " returns a proxy object (not a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool&"
      }), ") because individual bits are not addressable → a notorious design tradeoff."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-variadic-templates-c11",
      children: "7.5 Variadic Templates (C++11)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "751-basic-syntax",
      children: "7.5.1 Basic Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Variadic templates accept an arbitrary number of template parameters:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\n// Template parameter pack: typename... Args\n// Function parameter pack: Args... args\n// Pack expansion: args...\n\ntemplate <typename... Args>\nvoid count_args(Args... args) {\n    // sizeof... gets the number of elements in the pack\n    std::cout << sizeof...(Args) << \" type parameters\\n\";\n    std::cout << sizeof...(args) << \" function arguments\\n\";\n}\n\nint main() {\n    count_args(1, 2, 3);        // 3 type parameters, 3 arguments\n    count_args(1, 2.0, \"hi\");   // 3 type parameters, 3 arguments\n    count_args();               // 0 type parameters, 0 arguments\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3 type parameters\n3 function arguments\n3 type parameters\n3 function arguments\n0 type parameters\n0 function arguments\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "752-recursive-variadic-approach-c1114",
      children: "7.5.2 Recursive Variadic Approach (C++11/14)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before fold expressions (C++17), variadic templates required recursion:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\n// Base case → no arguments: terminates recursion\nvoid print_all() {\n    std::cout << \"\\n\";\n}\n\n// Recursive case: process first argument, recurse on rest\ntemplate <typename First, typename... Rest>\nvoid print_all(const First& first, const Rest&... rest) {\n    std::cout << first << \" \";\n    print_all(rest...);   // recursive call with remaining args\n}\n\nint main() {\n    print_all(1, 3.14, \"hello\", 'c');\n    // Output: 1 3.14 hello c\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print_all(1, 3.14, \"hello\", 'c')"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────────────────────┐\n│            VARIADIC RECURSION DRY RUN                                        │\n├────────────┬────────────────────────────┬────────┬──────────┬───────────────┤\n│ Call Level │ Args Pack                  │ First  │ Output   │ Recurse With  │\n├────────────┼────────────────────────────┼────────┼──────────┼───────────────┤\n│ 1          │ (1, 3.14, \"hello\", 'c')    │ 1      │ \"1 \"     │ (3.14,\"hello\",'c') │\n│ 2          │ (3.14, \"hello\", 'c')       │ 3.14   │ \"3.14 \"  │ (\"hello\", 'c')     │\n│ 3          │ (\"hello\", 'c')             │ \"hello\"│ \"hello \" │ ('c')              │\n│ 4          │ ('c')                      │ 'c'    │ \"c \"     │ ()                 │\n│ 5          │ ()                         │ →      │ \"\\n\"     │ → base case        │\n└────────────┴────────────────────────────┴────────┴──────────┴──────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Instantiation tree for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print_all(1, 3.14, \"hello\", 'c')"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "print_all(int, double, const char*, char)           → uses cout << int\n  └─ print_all(double, const char*, char)           → uses cout << double\n       └─ print_all(const char*, char)               → uses cout << const char*\n            └─ print_all(char)                       → uses cout << char\n                 └─ print_all()                      → base case\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each level is a separate function template instantiation with a different signature. The compiler generates 5 distinct functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compile-time depth:"
        }), " O(N) → one template instantiation per argument"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runtime depth:"
        }), " O(N) → one function call per argument (tail recursion not guaranteed → there is work after the recursive call: printing the newline when the base case returns)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code bloat:"
        }), " O(N) → N distinct function instantiations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternative (fold expressions):"
        }), " O(1) instantiation → vastly better"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "753-fold-expressions-c17",
      children: "7.5.3 Fold Expressions (C++17)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fold expressions reduce variadic processing to a single operator application, eliminating recursion and its compile-time cost:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\n// Unary right fold: (... + args) expands to (a + (b + (c + ...)))\ntemplate <typename... Args>\nauto sum_unary_right(Args... args) {\n    return (... + args);  // empty pack is ill-formed for unary fold\n}\n\n// Binary right fold: (0 + ... + args) expands to (0 + (a + (b + ...)))\ntemplate <typename... Args>\nauto sum_binary_right(Args... args) {\n    return (0 + ... + args);  // empty pack returns 0 (identity element)\n}\n\n// Comma fold: printable any type\ntemplate <typename... Args>\nvoid print_all_fold(const Args&... args) {\n    ((std::cout << args << \" \"), ...);  // comma operator fold\n    std::cout << \"\\n\";\n}\n\n// Binary left fold for AND\ntemplate <typename... Args>\nbool all_true(Args... args) {\n    return (... && args);  // left fold: ((a && b) && c) ...\n}\n\nint main() {\n    std::cout << sum_unary_right(1, 2, 3, 4, 5) << \"\\n\";      // 15\n    std::cout << sum_binary_right() << \"\\n\";                   // 0 (empty pack OK)\n    std::cout << sum_binary_right(1, 2, 3) << \"\\n\";            // 6\n    print_all_fold(1, 3.14, \"hello\", 'c');                     // 1 3.14 hello c\n    std::cout << all_true(true, true, true) << \"\\n\";            // 1\n    std::cout << all_true(true, false, true) << \"\\n\";           // 0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "15\n0\n6\n1 3.14 hello c\n1\n0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fold Expression Expansion Examples:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expansion (4 args: a, b, c, d)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(... + args)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((a + b) + c) + d"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(args + ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + (b + (c + d))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(0 + ... + args)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(((0 + a) + b) + c) + d"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(args + ... + 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + (b + (c + (d + 0)))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(... && args)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((a && b) && c) && d"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "((cout << args), ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(cout << a), (cout << b), (cout << c), (cout << d)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "All foldable operators:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">="
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ","
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".*"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->*"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "754-real-world-application-stdtuple-implementation",
      children: ["7.5.4 Real-World Application: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::tuple"
      }), " Implementation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::tuple"
      }), " type uses variadic templates heavily:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\n// Forward declaration of Tuple\ntemplate <typename... Types>\nclass Tuple;\n\n// Base case: empty tuple\ntemplate <>\nclass Tuple<> {};\n\n// Recursive case: Head + Tail (inherits from Tuple<Tail...>)\ntemplate <typename Head, typename... Tail>\nclass Tuple<Head, Tail...> : private Tuple<Tail...> {\npublic:\n    Tuple() = default;\n    Tuple(const Head& head, const Tail&... tail)\n        : Tuple<Tail...>(tail...), head_(head) {}\n\n    Head& head() { return head_; }\n    const Head& head() const { return head_; }\n\n    Tuple<Tail...>& tail() { return *this; }\n    const Tuple<Tail...>& tail() const { return *this; }\n\nprivate:\n    Head head_;\n};\n\n// Helper: recursive get by index (specialization terminates at 0)\ntemplate <size_t Index, typename Head, typename... Tail>\nstruct GetHelper {\n    static auto& get(Tuple<Head, Tail...>& t) {\n        return GetHelper<Index - 1, Tail...>::get(t.tail());\n    }\n    static const auto& get(const Tuple<Head, Tail...>& t) {\n        return GetHelper<Index - 1, Tail...>::get(t.tail());\n    }\n};\n\ntemplate <typename Head, typename... Tail>\nstruct GetHelper<0, Head, Tail...> {\n    static Head& get(Tuple<Head, Tail...>& t) {\n        return t.head();\n    }\n    static const Head& get(const Tuple<Head, Tail...>& t) {\n        return t.head();\n    }\n};\n\ntemplate <size_t Index, typename... Types>\nauto& get(Tuple<Types...>& t) {\n    return GetHelper<Index, Types...>::get(t);\n}\n\nint main() {\n    Tuple<int, double, std::string> t(42, 3.14, \"hello\");\n    std::cout << \"0: \" << get<0>(t) << \"\\n\";  // 42\n    std::cout << \"1: \" << get<1>(t) << \"\\n\";  // 3.14\n    std::cout << \"2: \" << get<2>(t) << \"\\n\";  // hello\n\n    get<0>(t) = 100;\n    std::cout << \"Modified 0: \" << get<0>(t) << \"\\n\";  // 100\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0: 42\n1: 3.14\n2: hello\nModified 0: 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory layout of Tuple<int, double, string>:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────┐\n│ Tuple<int, double, string>                   │\n│ ├── int head_                               │\n│ └── Tuple<double, string> (base)            │\n│      ├── double head_                       │\n│      └── Tuple<string> (base)               │\n│           ├── string head_                  │\n│           └── Tuple<> (empty base)          │\n└─────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a classic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive inheritance"
      }), " pattern. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get<2>"
      }), " call resolves via:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "get<2>(t) → GetHelper<2, int, double, string>::get(t)\n          → GetHelper<1, double, string>::get(t.tail())\n          → GetHelper<0, string>::get(t.tail().tail())\n          → t.tail().tail().head()\n          → the string member\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-sfinae--substitution-failure-is-not-an-error",
      children: "7.6 SFINAE → Substitution Failure Is Not An Error"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "761-core-principle",
      children: "7.6.1 Core Principle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SFINAE is a C++ rule: when the compiler substitutes template arguments into a function template and the resulting type or expression is invalid, the compiler silently removes that candidate from overload resolution rather than emitting a compilation error."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                      Overload Resolution\n                              │\n                    ┌─────────┴──────────┐\n                    │                    │\n              Substitution Succeeds   Substitution Fails\n                    │                    │\n            Candidate Included     Candidate Removed (SFINAE)\n                    │                    │\n              Other candidates       Other candidates\n              still considered       still considered\n                    │                    │\n              Only if ALL fail →     Only if ALL fail →\n              Compilation Error     Compilation Error\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key rule:"
      }), " SFINAE applies ONLY to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "immediate context"
      }), " of a function template declaration (template parameters, function parameter types, return type). Errors in the function body are NOT SFINAE → they are hard errors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "762-stdenable_if--the-classic-sfinae-tool",
      children: ["7.6.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::enable_if"
      }), " → The Classic SFINAE Tool"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <type_traits>\n\n// Enabled only for integral types\ntemplate <typename T>\ntypename std::enable_if<std::is_integral<T>::value, bool>::type\nis_odd(T value) {\n    return value % 2 != 0;\n}\n\n// Enabled only for floating-point types\ntemplate <typename T>\ntypename std::enable_if<std::is_floating_point<T>::value, bool>::type\nis_odd(T value) {\n    int truncated = static_cast<int>(value);\n    return truncated % 2 != 0;\n}\n\nint main() {\n    std::cout << is_odd(5) << \"\\n\";       // uses integral version: 1\n    std::cout << is_odd(4.0) << \"\\n\";     // uses floating-point version: 0\n    std::cout << is_odd(7.3) << \"\\n\";     // uses floating-point version: 1\n    // is_odd(\"hello\"); // ERROR: no matching function (both removed by SFINAE)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1\n0\n1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["How ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable_if"
        }), " works (simplified implementation):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <bool Condition, typename T = void>\nstruct enable_if {};                      // Primary: no ::type when Condition is false\n\ntemplate <typename T>\nstruct enable_if<true, T> {               // Partial specialization: ::type exists when true\n    using type = T;\n};\n\n// C++14 alias template:\ntemplate <bool B, typename T = void>\nusing enable_if_t = typename enable_if<B, T>::type;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_odd(5)"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────────────────────────────────────────────────────────┐\n│                  SFINAE RESOLUTION DRY RUN                              │\n├──────────────┬──────────────────────────┬───────────────────────────────┤\n│ Step         │ Template 1 (integral)     │ Template 2 (floating)        │\n├──────────────┼──────────────────────────┼───────────────────────────────┤\n│ 1. T deduced │ T = int                  │ T = int (also considered)     │\n│ 2. condition │ is_integral<int> = true  │ is_floating_point<int> = false│\n│ 3. enable_if │ enable_if<true, bool>    │ enable_if<false, bool>        │\n│ 4. ::type    │ ::type = bool ✓          │ ::type does not EXIST ✗       │\n│ 5. SFINAE?   │ No → valid substitution  │ YES → removed from overload   │\n│              │                          │ set                           │\n│ 6. RESULT    │ Template 1 selected      │ →                             │\n└──────────────┴──────────────────────────┴───────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry Run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_odd(\"hello\")"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────┬──────────────────────────┬───────────────────────────────┐\n│ Step         │ Template 1 (integral)     │ Template 2 (floating)        │\n├──────────────┼──────────────────────────┼───────────────────────────────┤\n│ 1. T deduced │ T = const char*          │ T = const char*               │\n│ 2. condition │ is_integral<const char*> │ is_floating_point<const char*>│\n│              │ = false                  │ = false                       │\n│ 3. enable_if │ enable_if<false, bool>   │ enable_if<false, bool>        │\n│ 4. ::type    │ ::type does not EXIST ✗  │ ::type does not EXIST ✗       │\n│ 5. SFINAE?   │ YES → removed            │ YES → removed                 │\n│ 6. RESULT    │ No viable candidates     │ → compilation ERROR           │\n└──────────────┴──────────────────────────┴───────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "763-void_t-detection-idiom",
      children: ["7.6.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void_t"
      }), " Detection Idiom"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A powerful SFINAE pattern for detecting whether a type has a specific member:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <type_traits>\n#include <string>\n#include <utility>\n\n// void_t maps any type to void → used to trigger SFINAE\ntemplate <typename...>\nusing void_t = void;\n\n// Primary template: assumes no size() member\ntemplate <typename T, typename = void>\nstruct has_size : std::false_type {};\n\n// Partial specialization: enabled only if T::size() is valid\ntemplate <typename T>\nstruct has_size<T, void_t<decltype(std::declval<T>().size())>>\n    : std::true_type {};\n\n// C++17 variable template\ntemplate <typename T>\ninline constexpr bool has_size_v = has_size<T>::value;\n\nstruct MyType {\n    int size() const { return 0; }\n};\n\nstruct OtherType {\n    int length() const { return 0; }\n};\n\nint main() {\n    std::cout << \"vector<int>:    \" << has_size_v<std::vector<int>> << \"\\n\";   // 1\n    std::cout << \"string:         \" << has_size_v<std::string> << \"\\n\";        // 1\n    std::cout << \"int:            \" << has_size_v<int> << \"\\n\";                // 0\n    std::cout << \"double:         \" << has_size_v<double> << \"\\n\";             // 0\n    std::cout << \"MyType:         \" << has_size_v<MyType> << \"\\n\";             // 1\n    std::cout << \"OtherType:      \" << has_size_v<OtherType> << \"\\n\";          // 0\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "vector<int>:    1\nstring:         1\nint:            0\ndouble:         0\nMyType:         1\nOtherType:      0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step-by-step SFINAE resolution for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "has_size<int>"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Step 1: has_size<int> → no second argument, defaults to void\n          → Evaluate primary template: has_size<int, void>\n          → Inherits std::false_type\n\n  Step 2: Consider partial specialization:\n          has_size<int, void_t<decltype(std::declval<int>().size())>>\n          → Substitute T = int into the partial spec expression:\n          → void_t<decltype( int().size() )>\n          → int().size() is INVALID (int has no size() member)\n          → decltype fails → substitution failure\n          → SFINAE removes this candidate\n\n  Step 3: Only primary template remains: value = false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step-by-step for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "has_size<std::vector<int>>"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Step 1: Primary: has_size<vector<int>, void> → false_type\n\n  Step 2: Partial specialisation:\n          has_size<vector<int>, void_t<decltype(declval<vector<int>>().size())>>\n          → vector<int>().size() is VALID (returns size_t)\n          → decltype(size_t) = size_t\n          → void_t<size_t> = void\n          → Matches: has_size<vector<int>, void>\n\n  Step 3: Partial specialization is more specialized than primary → selected\n          → value = true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "void_t"
        }), " explanation:"]
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void_t"
      }), " converts any type(s) to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), ". Its purpose is to be used as a default template argument that is replaced by the SFINAE-checked expression. If the expression is valid, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void_t<...>"
      }), " = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " = the default, so the specialization matches. If invalid, substitution fails and SFINAE removes the specialization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "764-if-constexpr--the-c17-alternative",
      children: ["7.6.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if constexpr"
      }), " → The C++17 Alternative"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For many SFINAE use cases, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if constexpr"
      }), " provides a cleaner alternative:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <type_traits>\n\ntemplate <typename T>\nauto half(T value) {\n    if constexpr (std::is_integral_v<T>) {\n        return value / 2;              // integer division: 5/2 = 2\n    } else if constexpr (std::is_floating_point_v<T>) {\n        return value / 2.0;            // float division: 5.0/2 = 2.5\n    } else {\n        // This branch is DISCARDED at compile time, but must still compile\n        static_assert(std::is_same_v<T, void>, \"Unsupported type for half\");\n    }\n}\n\nint main() {\n    std::cout << half(5) << \"\\n\";          // 2\n    std::cout << half(5.0) << \"\\n\";        // 2.5\n    // half(\"hello\");                      // static_assert fires\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2\n2.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "if constexpr"
        }), " vs SFINAE → Comparison:"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SFINAE (enable_if)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "if constexpr"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor → nested template syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent → natural control flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inscrutable → pages of template backtrace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean → points to failing branch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When available"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++98/11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Can disable return types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (via ::type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (function must compile)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple overloads"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → each SFINAE guard = separate function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single function with branches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely hard → silent candidate removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straightforward → debugger steps through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type-level detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (void_t idiom)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (cannot make types disappear)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "765-sfinae-vs-concepts-c20",
      children: "7.6.5 SFINAE vs Concepts (C++20)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Concepts are the modern replacement for most SFINAE use cases:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++20 Concepts approach\n#include <iostream>\n#include <type_traits>\n#include <concepts>\n\ntemplate <typename T>\nconcept Integral = std::is_integral_v<T>;\n\ntemplate <typename T>\nconcept FloatingPoint = std::is_floating_point_v<T>;\n\ntemplate <Integral T>\nT half(T value) {\n    return value / 2;\n}\n\ntemplate <FloatingPoint T>\nT half(T value) {\n    return value / 2.0;\n}\n\nint main() {\n    std::cout << half(5) << \"\\n\";     // 2\n    std::cout << half(5.0) << \"\\n\";   // 2.5\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Concepts vs SFINAE → Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concepts (C++20)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SFINAE (C++11/17)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <Integral T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <typename T, enable_if_t<...>>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error messages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear → \"T does not satisfy Integral\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptic → template backtrace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → self-documenting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → nested boilerplate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct → concepts are named requirements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indirect → enable_if on return/param"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overload resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint-based ordering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable_if boolean trick"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Composability"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "concept C = A && B"
            }), " → natural"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual template nesting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++20 only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++98 onward"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-template-compilation-model",
      children: "7.7 Template Compilation Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "771-the-inclusion-model",
      children: "7.7.1 The Inclusion Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Templates must be visible at the point of instantiation. The compiler needs the full template definition to generate code for each concrete type. This is called the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inclusion model"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "header-only model"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// my_template.h → header file\n#ifndef MY_TEMPLATE_H\n#define MY_TEMPLATE_H\n\ntemplate <typename T>\nclass MyTemplate {\npublic:\n    T get() const { return value_; }\n    void set(const T& v) { value_ = v; }\nprivate:\n    T value_;\n};\n\n#endif\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────┐         ┌──────────────┐         ┌───────────┐\n│ my_main.cpp │ #include│my_template.h │         │ Compiler  │\n│ (T = int)   │────────→│ template def │────────→│ generates │\n│             │         │              │         │ MyTemplate│\n└─────────────┘         └──────────────┘         │ <int> code│\n                                                 └───────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why templates are defined in headers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The compiler needs the full definition to instantiate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate .cpp with template definition cannot be linked (no code generated until instantiation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each translation unit that uses the template gets a copy of the definition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "772-the-odr-and-multiple-definitions",
      children: "7.7.2 The ODR and Multiple Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The One Definition Rule (ODR) allows multiple identical definitions of inline functions and templates across translation units:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// a.cpp\n#include \"my_template.h\"\nvoid func_a() {\n    MyTemplate<int> obj;    // a.cpp generates MyTemplate<int> code\n}\n\n// b.cpp\n#include \"my_template.h\"\nvoid func_b() {\n    MyTemplate<int> obj;    // b.cpp also generates MyTemplate<int> code\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How duplicate instantiations are handled:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────┐    ┌───────────────────────┐\n│ a.cpp    │    │ MyTemplate<int> code  │──┐\n│ b.cpp    │    │ MyTemplate<int> code  │──┤\n│ c.cpp    │    │ (no MyTemplate use)   │  │\n└──────────┘    └───────────────────────┘  │\n                                           │  ┌──────────┐\n                                           ├──→│  Linker  │──→ One copy retained\n                                           │  └──────────┘\n                                           │\n                                           │  Other copies discarded\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The linker deduplicates identical template instantiations via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMDAT sections"
        }), " (Windows/Visual C++)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "linkonce sections"
        }), " (GCC/Clang)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is why templates do NOT increase binary size proportionally to the number of translation units."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "773-explicit-instantiation--hiding-template-definitions",
      children: "7.7.3 Explicit Instantiation → Hiding Template Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can keep template definitions in .cpp files by explicitly instantiating the types you need:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// my_template.cpp → contains both declaration and definition\ntemplate <typename T>\nclass MyTemplate {\npublic:\n    T get() const { return value_; }\n    void set(const T& v) { value_ = v; }\nprivate:\n    T value_;\n};\n\n// Explicit instantiations → only these types will be available for linking\ntemplate class MyTemplate<int>;\ntemplate class MyTemplate<double>;\n\n// my_template.h → just the declaration\ntemplate <typename T>\nclass MyTemplate {\npublic:\n    T get() const;\n    void set(const T& v);\nprivate:\n    T value_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include \"my_template.h\"\n\nint main() {\n    MyTemplate<int> obj;    // OK → linked to explicit instantiation in .cpp\n    obj.set(42);\n\n    // MyTemplate<char> obj2;  // LINKER ERROR → never explicitly instantiated\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use explicit instantiation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Library code"
        }), " that only needs to work with a known set of types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reducing compile time"
        }), " → precompile template instantiations for common types"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hiding implementation"
        }), " → distribute headers with declarations only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Controlling binary size"
        }), " → prevent template bloat from user-defined types"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "774-the-export-keyword-historical",
      children: ["7.7.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "export"
      }), " Keyword (Historical)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C++98 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "export"
      }), " to allow template definitions in separate files. It was removed in C++11 because compilers universally failed to implement it correctly. Only one compiler (Comeau C++) ever shipped a working implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Historical curiosity → never use this\nexport template <typename T>\nT max_of(T a, T b) {\n    return (a > b) ? a : b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " The inclusion model is the only practical compilation model for templates. Always define templates in headers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "775-template-compilation-model--comparison-table",
      children: "7.7.5 Template Compilation Model → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inclusion Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explicit Instantiation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Separate Model (export)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition location"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Header file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".cpp file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compile time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (each TU re-parses)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (precompiled)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potentially larger (duplicates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controlled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum (any type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (explicit types only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation hiding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (full source visible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for library stability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed from standard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "78-typename-vs-class--detailed-comparison",
      children: ["7.8 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " → Detailed Comparison"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In template parameter declarations, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " are interchangeable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T> void func(T);    // ✓\ntemplate <class T> void func(T);       // ✓ → identical meaning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-historical-distinction",
      children: "The Historical Distinction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When templates were first introduced to C++, only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " was available:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <class T> void func(T);       // Original C++ syntax (1990s)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Later, the committee recognized that template parameters need not be class types → they can be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "double"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enum"
      }), ", or any type. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " keyword was added (in C++98 itself, as part of the standard) to reflect this more accurately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-practical-difference",
      children: "The Practical Difference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "There is none → for template parameter declarations."
      }), " Both declare a type parameter:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <class T>     // T is ANY type (int, double, class, struct, union, etc.)\ntemplate <typename T>  // T is ANY type → identical meaning\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "when-typename-is-mandatory",
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " Is Mandatory"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " has a crucial SECOND use that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " cannot replace: disambiguating dependent names:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid func() {\n    typename T::iterator it;   // \"iterator is a type\" → typename REQUIRED\n    // T::iterator* it;        // Without typename: parsed as multiplication\n\n    typename std::vector<T>::const_iterator cit; // typename required (dependent)\n}\n\ntemplate <class T>\nvoid func2() {\n    typename T::iterator it;   // STILL typename, NOT class\n    // class T::iterator it;   // ERROR: 'class' cannot disambiguate here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " When accessing a nested type that depends on a template parameter, prefix with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " regardless of whether you used ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " in the template parameter list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typename"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "class"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template type parameter"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✓ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "template <typename T>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✓ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "template <class T>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disambiguate dependent names"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✓ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typename T::type"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (not allowed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template template param (pre-C++17)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✓ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "template<typename> class Cont"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template template param (C++17+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-documenting that T can be any type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗ (misleading name)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation",
      children: "Recommendation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern style guides (C++ Core Guidelines, Google Style, LLVM) prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " for most cases because it accurately describes what is allowed (any type). Reserve ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " only when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The parameter is expected to be a user-defined class type (as documentation hint)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Working with template template parameters in pre-C++17 code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "79-function-template-vs-class-template--comprehensive-comparison",
      children: "7.9 Function Template vs Class Template → Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function Template"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class Template"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <T> T max(T a, T b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <T> class Stack { ... };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instantiation trigger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Called with arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object declaration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type deduction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → T deduced from arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → T must be explicitly specified"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lazy instantiation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole function body (all or nothing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-member (only used members)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial specialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT allowed (use overloading)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template template params"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default arguments"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "template <T = int>"
            }), " (C++11)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <T = int>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-type parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <typename T, int N>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <typename T, int N>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can hold state (data members)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metaprogramming"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (no partial spec)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary vehicle for TMP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example in STL"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::find_if"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::array"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms operating on types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data structures holding types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Specialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only full (avoid → use overload instead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full and partial"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "710-applications-in-real-systems",
      children: "7.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7101-stl-containers--template-architecture",
      children: "7.10.1 STL Containers → Template Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every STL container is a class template. The container adaptors use template template parameters:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "namespace std {\n    // Container: class template\n    template <typename T, typename Alloc = allocator<T>>\n    class vector { /* ... */ };\n\n    template <typename T, typename Alloc = allocator<T>>\n    class list { /* ... */ };\n\n    // Container adaptor: accepts template template parameter\n    template <typename T, typename Container = deque<T>>\n    class stack {\n    public:\n        void push(const T& val) { c.push_back(val); }\n        void pop() { c.pop_back(); }\n        T& top() { return c.back(); }\n    private:\n        Container c;\n    };\n\n    // Usage with different underlying containers\n    stack<int> s1;                              // deque<int>\n    stack<int, vector<int>> s2;                 // vector<int>\n    stack<int, list<int>> s3;                   // list<int>\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "7102-stdenable_if-and-type-traits--memcpy-optimization",
      children: ["7.10.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::enable_if"
      }), " and Type Traits → Memcpy Optimization"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <type_traits>\n#include <cstring>\n#include <vector>\n#include <string>\n\n// For trivially copyable types: use memcpy (fast)\ntemplate <typename T>\nstd::enable_if_t<std::is_trivially_copyable_v<T>>\nfast_copy(T* dest, const T* src, size_t count) {\n    std::memcpy(dest, src, count * sizeof(T));\n    std::cout << \"memcpy path (\" << count << \" elements)\\n\";\n}\n\n// For non-trivially copyable types: element-wise copy\ntemplate <typename T>\nstd::enable_if_t<!std::is_trivially_copyable_v<T>>\nfast_copy(T* dest, const T* src, size_t count) {\n    for (size_t i = 0; i < count; ++i)\n        dest[i] = src[i];\n    std::cout << \"element-wise path (\" << count << \" elements)\\n\";\n}\n\nstruct Trivial {\n    int x, y;\n};\n\nstruct NonTrivial {\n    NonTrivial& operator=(const NonTrivial& other) {\n        x = other.x;\n        return *this;\n    }\n    int x;\n};\n\nint main() {\n    Trivial t1[100], t2[100];\n    fast_copy(t1, t2, 100);  // memcpy path → trivially copyable\n\n    NonTrivial nt1[100], nt2[100];\n    fast_copy(nt1, nt2, 100);  // element-wise path\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "memcpy path (100 elements)\nelement-wise path (100 elements)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trivially copyable path:"
        }), " O(N) but memcpy uses SIMD/vectorized instructions → ~10-100x faster than element-wise for large arrays"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-trivially copyable path:"
        }), " O(N) → operator= per element, preserves deep-copy semantics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Selection cost:"
        }), " Zero at runtime → entirely compile-time dispatch via SFINAE"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7103-crtp--curiously-recurring-template-pattern",
      children: "7.10.3 CRTP → Curiously Recurring Template Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CRTP is a technique where a class template accepts a derived class as its template argument, enabling static polymorphism:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\n// Base template → accepts Derived as template parameter\ntemplate <typename Derived>\nclass Shape {\npublic:\n    double area() const {\n        return static_cast<const Derived*>(this)->area_impl();\n    }\n\n    std::string name() const {\n        return static_cast<const Derived*>(this)->name_impl();\n    }\n};\n\n// Derived class passes ITSELF as template argument to base\nclass Circle : public Shape<Circle> {\npublic:\n    Circle(double radius) : radius_(radius) {}\n    double area_impl() const { return 3.14159 * radius_ * radius_; }\n    std::string name_impl() const { return \"Circle\"; }\nprivate:\n    double radius_;\n};\n\nclass Rectangle : public Shape<Rectangle> {\npublic:\n    Rectangle(double w, double h) : w_(w), h_(h) {}\n    double area_impl() const { return w_ * h_; }\n    std::string name_impl() const { return \"Rectangle\"; }\nprivate:\n    double w_, h_;\n};\n\n// Template function works with any Shape<T>\ntemplate <typename T>\nvoid print_area(const Shape<T>& shape) {\n    std::cout << shape.name() << \" area: \" << shape.area() << \"\\n\";\n}\n\nint main() {\n    Circle c(5.0);\n    Rectangle r(4.0, 3.0);\n    print_area(c);  // Circle  area: 78.5397\n    print_area(r);  // Rectangle area: 12\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Circle area: 78.5397\nRectangle area: 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRTP vs Virtual Functions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CRTP (Static Polymorphism)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Virtual Functions (Dynamic Polymorphism)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dispatch mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time via static_cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime via vtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero → inlined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vtable pointer + indirection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type erasure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → each T is a different type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → base pointer to any derived"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Container friendly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → must know T at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes → store base* in heterogenous container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code bloat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) instantiations (N types)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) → single vtable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virtual destructor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Templates, compile-time dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime polymorphism, plugins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world CRTP examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::enable_shared_from_this<T>"
        }), " → adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shared_from_this()"
        }), " to a class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::iterator"
        }), " (deprecated) → base for custom iterators"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boost.Operators → generates operator overloads from minimal set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eigen → matrix expression templates for zero-cost abstractions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microsoft ATL/WTL → window class hierarchies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7104-policy-based-design",
      children: "7.10.4 Policy-Based Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Policy-based design uses template parameters to inject behavioral policies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <mutex>\n\n// Threading policies\nstruct SingleThread {\n    void lock() {}\n    void unlock() {}\n};\n\nstruct MultiThread {\n    void lock() { mtx_.lock(); }\n    void unlock() { mtx_.unlock(); }\nprivate:\n    std::mutex mtx_;\n};\n\n// Logging policies\nstruct NoLogging {\n    void log(const std::string&) {}\n};\n\nstruct StdErrLogging {\n    void log(const std::string& msg) {\n        std::cerr << \"[LOG] \" << msg << \"\\n\";\n    }\n};\n\n// Thread-safe, optionally logging stack\ntemplate <typename T,\n          typename Threading = SingleThread,\n          typename Logging = NoLogging>\nclass PolicyStack : private Threading, private Logging {\npublic:\n    void push(const T& value) {\n        Threading::lock();\n        Logging::log(\"push called\");\n        data_[++top_] = value;\n        Threading::unlock();\n    }\n\n    T pop() {\n        Threading::lock();\n        Logging::log(\"pop called\");\n        T value = data_[top_--];\n        Threading::unlock();\n        return value;\n    }\n\n    bool empty() const { return top_ < 0; }\n\nprivate:\n    T data_[128];\n    int top_ = -1;\n};\n\nint main() {\n    // Single-threaded, no logging\n    PolicyStack<int> s1;\n    s1.push(42);\n\n    // Single-threaded, with logging\n    PolicyStack<int, SingleThread, StdErrLogging> s2;\n    s2.push(100);\n\n    // Multi-threaded, no logging\n    PolicyStack<int, MultiThread> s3;\n    s3.push(1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[LOG] push called\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runtime overhead:"
        }), " Zero → policy functions are inlined at compile time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compile-time cost:"
        }), " O(P × M) where P = policies, M = methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary size:"
        }), " Each policy combination creates a separate type → O(N × P)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility:"
        }), " N types × M threading × L logging = N×M×L combinations with zero runtime cost"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7105-type-traits-library",
      children: "7.10.5 Type Traits Library"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<type_traits>"
      }), " header is built entirely with templates and specialization:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <type_traits>\n\n// How is_integral works (simplified):\n// Primary template: not integral\ntemplate <typename T>\nstruct is_integral : std::false_type {};\n\n// Full specializations for integral types\ntemplate <> struct is_integral<int> : std::true_type {};\ntemplate <> struct is_integral<long> : std::true_type {};\ntemplate <> struct is_integral<short> : std::true_type {};\ntemplate <> struct is_integral<char> : std::true_type {};\ntemplate <> struct is_integral<bool> : std::true_type {};\ntemplate <> struct is_integral<unsigned int> : std::true_type {};\ntemplate <> struct is_integral<long long> : std::true_type {};\n\n// C++17 variable template\ntemplate <typename T>\ninline constexpr bool is_integral_v = is_integral<T>::value;\n\n// C++20 concept using type trait\ntemplate <typename T>\nconcept Integral = is_integral_v<T>;\n\ntemplate <Integral T>\nT next(T value) { return value + 1; }\n\nint main() {\n    static_assert(is_integral_v<int>);\n    static_assert(!is_integral_v<double>);\n\n    std::cout << next(5) << \"\\n\";    // 6\n    // std::cout << next(5.0);       // ERROR: double does not satisfy Integral\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "7106-stdenable_shared_from_this--crtp-in-the-standard-library",
      children: ["7.10.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::enable_shared_from_this"
      }), " → CRTP in the Standard Library"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n\n// CRTP base: Widget inherits from enable_shared_from_this<Widget>\nclass Widget : public std::enable_shared_from_this<Widget> {\npublic:\n    void process() {\n        // Get a shared_ptr to this without creating a second reference count\n        auto shared = shared_from_this();\n        std::cout << \"Processing widget, use_count: \"\n                  << shared.use_count() << \"\\n\";\n    }\n};\n\nint main() {\n    auto w = std::make_shared<Widget>();\n    w->process();  // Output: Processing widget, use_count: 2\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enable_shared_from_this<T>"
      }), " template stores a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "weak_ptr<T>"
      }), " when a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " owns the object. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_from_this()"
      }), " promotes that weak_ptr, producing a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shared_ptr"
      }), " that shares ownership with the existing one without increasing the reference count separately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "711-common-pitfalls-and-best-practices",
      children: "7.11 Common Pitfalls and Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "pitfall-1-forgetting-template-keyword-for-dependent-template-members",
      children: ["Pitfall 1: Forgetting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template"
      }), " Keyword for Dependent Template Members"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid func(T& container) {\n    // Error: need 'template' keyword\n    // container.template reserve<true>(10);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template"
      }), " keyword when calling a member function template on a dependent object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-2-code-bloat-from-many-template-instantiations",
      children: "Pitfall 2: Code Bloat from Many Template Instantiations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Each of these generates separate machine code:\nmy_swap(int, int);\nmy_swap(double, double);\nmy_swap(char, char);\nmy_swap(short, short);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      }), " For large functions, use templates as thin wrappers that call non-template implementations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "pitfall-3-forgetting-typename-for-dependent-types",
      children: ["Pitfall 3: Forgetting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " for Dependent Types"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid func() {\n    T::iterator* ptr;  // ERROR: parsed as multiplication\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fix:"
      }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " for dependent type names."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pitfall-4-non-type-parameter-with-runtime-value",
      children: "Pitfall 4: Non-Type Parameter with Runtime Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int n = 10;\nFixedArray<int, n> arr;  // ERROR: n must be compile-time constant\n\nconstexpr int N = 10;\nFixedArray<int, N> arr;  // OK: N is compile-time constant\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practice-checklist",
      children: "Best Practice Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define templates in headers"
        }), " → inclusion model is the only portable approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "typename"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "class"
          })]
        }), " for type parameters (C++ Core Guidelines)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer overloading over specialization"
        }), " for function templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if constexpr"
          })]
        }), " instead of SFINAE when possible (C++17)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Concepts"
        }), " instead of SFINAE when possible (C++20)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Be aware of lazy instantiation"
        }), " → don't put type-dependent code in unused branches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "static_assert"
          })]
        }), " for better error messages on invalid template arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRTP for static polymorphism"
        }), " when virtual dispatch is too expensive"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy-based design"
        }), " for compile-time customization of behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit instantiation"
        }), " to control binary size in library code"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "712-interview-corner",
      children: "7.12 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-template-instantiation-and-template-specialization",
      children: "Q1: What is the difference between template instantiation and template specialization?"
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
            children: "Instantiation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specialization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler generates concrete code from a template for a specific type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You provide an alternative implementation for a specific type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who does it"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmer explicitly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When the template is used with a new type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When the generic version is insufficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (no extra code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "template <> struct C<int> { ... };"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector<int>"
            }), " → instantiated from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vector<T>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector<bool>"
            }), " → full specialization"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Instantiation = automatic code generation per type. Specialization = programmer-provided override for specific types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-cant-function-templates-be-partially-specialized",
      children: "Q2: Why can't function templates be partially specialized?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Function templates already have overloading, which provides the same effect as partial specialization with clearer semantics:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Overloading gives the same effect as partial specialization would:\ntemplate <typename T> void foo(T);       // #1 → generic\ntemplate <typename T> void foo(T*);      // #2 → overload for pointers\ntemplate <typename T> void foo(const T*); // #3 → overload for const pointers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overload resolution selects the most specialized viable overload → the same behavior partial specialization would provide. Adding partial specialization to function templates would create confusing interactions with existing overload resolution rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For class templates, there is no overloading mechanism, so partial specialization fills a genuine need."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-sfinae-and-when-would-you-use-it",
      children: "Q3: What is SFINAE and when would you use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Substitution Failure Is Not An Error is a C++ rule that silently removes invalid template candidates during overload resolution rather than emitting a compilation error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable/disable function overloads"
        }), " based on type properties (", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable_if"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detect type capabilities"
        }), " → does it have ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".size()"
        }), "? Does it have a nested ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iterator"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Select optimal implementation"
        }), " → memcpy for trivially copyable, element-wise otherwise"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional compilation"
        }), " of class members via partial specialization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Only enabled for integral types\ntemplate <typename T>\nenable_if_t<is_integral_v<T>, T> half(T v) { return v / 2; }\n\n// Only enabled for floating-point types\ntemplate <typename T>\nenable_if_t<is_floating_point_v<T>, T> half(T v) { return v / 2.0; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-crtp-and-why-is-it-useful",
      children: "Q4: What is the CRTP and why is it useful?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Curiously Recurring Template Pattern is a technique where a derived class passes itself as a template argument to its base class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename Derived>\nclass Base {\n    void interface() {\n        static_cast<Derived*>(this)->implementation();\n    }\n};\n\nclass Derived : public Base<Derived> {\n    void implementation() { /* ... */ }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static polymorphism"
        }), " → same interface, zero virtual dispatch overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code reuse"
        }), " → inject behavior without virtual functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compile-time dispatch"
        }), " → can be fully inlined, unlike virtual calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No vtable overhead"
        }), " → no memory or performance cost for polymorphism"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world uses:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::enable_shared_from_this"
      }), ", Eigen expression templates, Boost.Operators, ATL/WTL, CRTP-based mixins."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-explain-the-difference-between-typename-and-class-in-templates",
      children: ["Q5: Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " in templates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In template parameter declarations, they are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "identical:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T> void func(T);  // OK\ntemplate <class T> void func(T);     // identical meaning\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " was the original keyword (from early C++). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " was added to emphasize that template parameters can be any type (int, double, enum → not just user-defined classes)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "practical difference"
      }), " is that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typename"
      }), " has a second mandatory role: disambiguating dependent names:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid func() {\n    typename T::iterator it;  // \"iterator is a type\" → typename REQUIRED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " cannot be used for this disambiguation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-how-does-stdvectorbool-specialization-work-and-why-is-it-controversial",
      children: ["Q6: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<bool>"
      }), " specialization work and why is it controversial?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<bool>"
      }), " is a full specialization of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector<T>"
      }), " that stores bits instead of bools → packing 8 booleans per byte."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <>\nclass vector<bool> {\n    unsigned char* bits_;  // 1 byte stores 8 bools\npublic:\n    class reference {     // Proxy → not bool&\n        unsigned char* byte_ptr_;\n        int bit_index_;\n    public:\n        reference& operator=(bool val);\n        operator bool() const;\n    };\n    reference operator[](size_t i);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Controversy:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto b = vec[0]"
      }), " gives a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reference"
      }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), "), breaking generic code. Templates that work with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vector<T>"
      }), " for every T ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!= bool"
      }), " break for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vector<bool>"
      }), ". This violates the principle that template specializations should provide the same interface as the primary template."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-lazy-instantiation-and-how-does-it-affect-template-design",
      children: "Q7: What is lazy instantiation and how does it affect template design?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Lazy instantiation means class template member functions are only instantiated when they are actually used:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nclass Example {\npublic:\n    void valid() {}\n    void invalid() { T::nonexistent(); }  // Error for most T\n};\n\nint main() {\n    Example<int> ex;\n    ex.valid();          // OK → only valid() is instantiated\n    // ex.invalid();     // If called: compilation error\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact on design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can write templates with type-specific member functions that only work for certain types, as long as they are never called with incompatible types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unused template members do not increase compile time or binary size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Errors in unused functions are never reported → only errors in used functions surface"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "713-summary",
      children: "7.13 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Templates are the heart of C++ generic programming. This chapter covered:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-parameterized algorithms"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::find_if"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-parameterized data structures"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::map"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template instantiation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler stamps out concrete code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-cost abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template specialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-specific overrides"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector<bool>"
            }), ", type traits"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-type parameters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::array<T, N>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variadic templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary parameter packs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::tuple"
            }), ", fold expressions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SFINAE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time introspection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enable_if"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void_t"
            }), " detection"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template template params"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Templates accepting templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container adaptors, policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static polymorphism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "enable_shared_from_this"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy-based design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread safety, logging policies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The template system is Turing-complete at compile time, enabling arbitrary compile-time computation (template metaprogramming). It is the foundation on which the STL, Boost, and most modern C++ libraries are built."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "714-exercises",
      children: "7.14 Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a template and a macro? Why are templates preferred?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does the compiler resolve ", (0,jsx_runtime.jsx)(_components.code, {
          children: "foo(3.14, 5)"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "foo"
        }), " is declared as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "template <typename T> T foo(T a, T b)"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can class templates be partially specialized but function templates cannot?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain lazy instantiation with a concrete example."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What problem does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typename"
        }), " keyword solve in template context?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does SFINAE differ from a compilation error? What are its limits?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast CRTP with virtual functions. When would you use each?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the inclusion model for templates. Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "export"
        }), " no longer in the standard?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-problems",
      children: "Code Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Function template → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find_max"
            }), ":"]
          }), "\nWrite a function template ", (0,jsx_runtime.jsx)(_components.code, {
            children: "find_max"
          }), " that accepts a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<T>"
          }), " and returns the maximum element. Test with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "double"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::string"
          }), " vectors. What complexity does your solution have?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Class template → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RingBuffer<T, N>"
            }), ":"]
          }), "\nImplement a fixed-size circular buffer using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::array<T, N>"
          }), ". Provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "push"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pop"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "front"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "back"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "size"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "empty"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "full"
          }), ". Ensure it works with non-default-constructible types. Use a dry run table to trace three push operations followed by two pops."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Variadic → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apply_all"
            }), ":"]
          }), "\nWrite a variadic function template ", (0,jsx_runtime.jsx)(_components.code, {
            children: "apply_all"
          }), " that accepts a callable and a parameter pack, then applies the callable to each argument. Use fold expressions (C++17)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["SFINAE → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is_container"
            }), ":"]
          }), "\nWrite a type trait ", (0,jsx_runtime.jsx)(_components.code, {
            children: "is_container<T>"
          }), " that detects whether ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T"
          }), " has ", (0,jsx_runtime.jsx)(_components.code, {
            children: "begin()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "end()"
          }), " member functions returning iterators. Test with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<int>"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::string"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int[5]"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["CRTP → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Comparable<T>"
            }), ":"]
          }), "\nImplement a CRTP base that provides ", (0,jsx_runtime.jsx)(_components.code, {
            children: "!="
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<="
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">="
          }), " operators from just ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<"
          }), ". Explain why this avoids virtual functions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Policy-based → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Serializer<T, Policy>"
            }), ":"]
          }), "\nWrite a JSON serialization policy and a binary serialization policy for a class template ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Serializer<T, Policy>"
          }), ". Demonstrate both."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compile-time type erasure:"
        }), "\nImplement a class template ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Any"
        }), " that can hold any type and a function template ", (0,jsx_runtime.jsx)(_components.code, {
          children: "any_cast<T>"
        }), " to retrieve it. Use a base class with virtual functions, a derived wrapper template, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeid"
        }), " for casting. Demonstrate holding ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::string"
        }), ", and a user-defined ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Point"
        }), " struct. What are the runtime costs?"]
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