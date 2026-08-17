"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[47305],{

/***/ 99769
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_13_move_semantics_md_937_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-13-move-semantics-md-937.json
const site_docs_courses_oop_cpp_13_move_semantics_md_937_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/13-move-semantics","title":"Chapter 13: Move Semantics","description":"Previous 14-lambdas","source":"@site/docs/courses/oop-cpp/13-move-semantics.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/13-move-semantics","permalink":"/ai-engineering-journey/oop-cpp/13-move-semantics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-move-semantics","slug":"/oop-cpp/13-move-semantics","title":"Chapter 13: Move Semantics","sidebar_label":"Chapter 13: Move Semantics","sidebar_position":13},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 12: Smart Pointers","permalink":"/ai-engineering-journey/oop-cpp/12-smart-pointers"},"next":{"title":"Chapter 14: Lambdas (Deep Dive)","permalink":"/ai-engineering-journey/oop-cpp/14-lambdas"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/13-move-semantics.md


const frontMatter = {
	id: '13-move-semantics',
	slug: '/oop-cpp/13-move-semantics',
	title: 'Chapter 13: Move Semantics',
	sidebar_label: 'Chapter 13: Move Semantics',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Move Semantics';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "13.0 Real-World Analogy: The Library Book",
  "id": "130-real-world-analogy-the-library-book",
  "level": 2
}, {
  "value": "13.1 Value Categories: The Five-Way Taxonomy",
  "id": "131-value-categories-the-five-way-taxonomy",
  "level": 2
}, {
  "value": "13.1.1 Historical Context",
  "id": "1311-historical-context",
  "level": 3
}, {
  "value": "13.1.2 The Taxonomy Diagram",
  "id": "1312-the-taxonomy-diagram",
  "level": 3
}, {
  "value": "13.1.3 Category Definitions",
  "id": "1313-category-definitions",
  "level": 3
}, {
  "value": "13.1.4 Examples of Each Category",
  "id": "1314-examples-of-each-category",
  "level": 3
}, {
  "value": "13.1.5 How Value Categories Determine Overload Resolution",
  "id": "1315-how-value-categories-determine-overload-resolution",
  "level": 3
}, {
  "value": "13.1.6 Category Membership Rules",
  "id": "1316-category-membership-rules",
  "level": 3
}, {
  "value": "13.1.7 Dry Run: Category Identification",
  "id": "1317-dry-run-category-identification",
  "level": 3
}, {
  "value": "13.2 Rvalue References (T&amp;&amp;)",
  "id": "132-rvalue-references-t",
  "level": 2
}, {
  "value": "13.2.1 Definition and Syntax",
  "id": "1321-definition-and-syntax",
  "level": 3
}, {
  "value": "13.2.2 Critical Rule: Named Rvalue References Are Lvalues",
  "id": "1322-critical-rule-named-rvalue-references-are-lvalues",
  "level": 3
}, {
  "value": "13.2.3 Rvalue Reference Binds to Temporaries",
  "id": "1323-rvalue-reference-binds-to-temporaries",
  "level": 3
}, {
  "value": "13.2.4 Lifetime Extension",
  "id": "1324-lifetime-extension",
  "level": 3
}, {
  "value": "13.2.5 Overload Resolution with &amp;&amp;",
  "id": "1325-overload-resolution-with-",
  "level": 3
}, {
  "value": "13.3 Move Constructor",
  "id": "133-move-constructor",
  "level": 2
}, {
  "value": "13.3.1 Syntax and Definition",
  "id": "1331-syntax-and-definition",
  "level": 3
}, {
  "value": "13.3.2 Core Example: DynamicBuffer",
  "id": "1332-core-example-dynamicbuffer",
  "level": 3
}, {
  "value": "13.3.3 Move Constructor Execution: Step-by-Step",
  "id": "1333-move-constructor-execution-step-by-step",
  "level": 3
}, {
  "value": "13.3.4 Default Move Constructor",
  "id": "1334-default-move-constructor",
  "level": 3
}, {
  "value": "13.3.5 Move Constructor is Not Generated When",
  "id": "1335-move-constructor-is-not-generated-when",
  "level": 3
}, {
  "value": "13.3.6 Delegating to Member Move Constructors",
  "id": "1336-delegating-to-member-move-constructors",
  "level": 3
}, {
  "value": "13.4 Move Assignment Operator",
  "id": "134-move-assignment-operator",
  "level": 2
}, {
  "value": "13.4.1 Syntax and Definition",
  "id": "1341-syntax-and-definition",
  "level": 3
}, {
  "value": "13.4.2 Self-Assignment and Exception Safety",
  "id": "1342-self-assignment-and-exception-safety",
  "level": 3
}, {
  "value": "13.4.3 Move Assignment Execution Trace",
  "id": "1343-move-assignment-execution-trace",
  "level": 3
}, {
  "value": "13.5 The noexcept Guarantee for Move Operations",
  "id": "135-the-noexcept-guarantee-for-move-operations",
  "level": 2
}, {
  "value": "13.5.1 Why noexcept Matters",
  "id": "1351-why-noexcept-matters",
  "level": 3
}, {
  "value": "13.5.2 Vector Reallocation: The Critical Case",
  "id": "1352-vector-reallocation-the-critical-case",
  "level": 3
}, {
  "value": "13.5.3 std::move_if_noexcept",
  "id": "1353-stdmove_if_noexcept",
  "level": 3
}, {
  "value": "13.5.4 Demonstration: noexcept vs Non-noexcept",
  "id": "1354-demonstration-noexcept-vs-non-noexcept",
  "level": 3
}, {
  "value": "13.5.5 When NOT to Mark noexcept",
  "id": "1355-when-not-to-mark-noexcept",
  "level": 3
}, {
  "value": "13.6 std::move → The Unconditional Cast",
  "id": "136-stdmove--the-unconditional-cast",
  "level": 2
}, {
  "value": "13.6.1 What std::move Actually Does",
  "id": "1361-what-stdmove-actually-does",
  "level": 3
}, {
  "value": "13.6.2 Reference Implementation",
  "id": "1362-reference-implementation",
  "level": 3
}, {
  "value": "13.6.3 Usage Patterns",
  "id": "1363-usage-patterns",
  "level": 3
}, {
  "value": "13.6.4 Common Misconceptions",
  "id": "1364-common-misconceptions",
  "level": 3
}, {
  "value": "13.6.5 When NOT to Use std::move",
  "id": "1365-when-not-to-use-stdmove",
  "level": 3
}, {
  "value": "13.6.6 std::move vs Return Value Optimization",
  "id": "1366-stdmove-vs-return-value-optimization",
  "level": 3
}, {
  "value": "13.7 std::forward → The Conditional Cast",
  "id": "137-stdforward--the-conditional-cast",
  "level": 2
}, {
  "value": "13.7.1 Purpose",
  "id": "1371-purpose",
  "level": 3
}, {
  "value": "13.7.2 Reference Implementation",
  "id": "1372-reference-implementation",
  "level": 3
}, {
  "value": "13.7.3 Key: Two Overloads",
  "id": "1373-key-two-overloads",
  "level": 3
}, {
  "value": "13.7.4 How Forward Preserves Category",
  "id": "1374-how-forward-preserves-category",
  "level": 3
}, {
  "value": "13.7.5 Forwarding Reference Deduction Table",
  "id": "1375-forwarding-reference-deduction-table",
  "level": 3
}, {
  "value": "13.8 Forwarding References (Universal References)",
  "id": "138-forwarding-references-universal-references",
  "level": 2
}, {
  "value": "13.8.1 The &quot;Universal Reference&quot; Pattern",
  "id": "1381-the-universal-reference-pattern",
  "level": 3
}, {
  "value": "13.8.2 Forwarding Reference vs Rvalue Reference",
  "id": "1382-forwarding-reference-vs-rvalue-reference",
  "level": 3
}, {
  "value": "13.8.3 auto&amp;&amp; is Also a Forwarding Reference",
  "id": "1383-auto-is-also-a-forwarding-reference",
  "level": 3
}, {
  "value": "13.8.4 When T&amp;&amp; is NOT a Forwarding Reference",
  "id": "1384-when-t-is-not-a-forwarding-reference",
  "level": 3
}, {
  "value": "13.8.5 Practical Pattern: std::make_unique",
  "id": "1385-practical-pattern-stdmake_unique",
  "level": 3
}, {
  "value": "13.9 Reference Collapsing Rules",
  "id": "139-reference-collapsing-rules",
  "level": 2
}, {
  "value": "13.9.1 The Four Scenarios",
  "id": "1391-the-four-scenarios",
  "level": 3
}, {
  "value": "13.9.2 Reference Collapsing Table",
  "id": "1392-reference-collapsing-table",
  "level": 3
}, {
  "value": "13.9.3 Where Reference Collapsing Happens",
  "id": "1393-where-reference-collapsing-happens",
  "level": 3
}, {
  "value": "13.9.4 Reference Collapsing in typedef / using",
  "id": "1394-reference-collapsing-in-typedef--using",
  "level": 3
}, {
  "value": "13.9.5 Reference Collapsing in decltype",
  "id": "1395-reference-collapsing-in-decltype",
  "level": 3
}, {
  "value": "13.9.6 Why Reference Collapsing Enables Perfect Forwarding",
  "id": "1396-why-reference-collapsing-enables-perfect-forwarding",
  "level": 3
}, {
  "value": "13.10 Perfect Forwarding Pattern",
  "id": "1310-perfect-forwarding-pattern",
  "level": 2
}, {
  "value": "13.10.1 Definition",
  "id": "13101-definition",
  "level": 3
}, {
  "value": "13.10.2 The Problem: Loss of Value Category",
  "id": "13102-the-problem-loss-of-value-category",
  "level": 3
}, {
  "value": "13.10.3 The Solution: Forwarding Reference + std::forward",
  "id": "13103-the-solution-forwarding-reference--stdforward",
  "level": 3
}, {
  "value": "13.10.4 Variadic Perfect Forwarding",
  "id": "13104-variadic-perfect-forwarding",
  "level": 3
}, {
  "value": "13.10.5 Common Patterns Using Perfect Forwarding",
  "id": "13105-common-patterns-using-perfect-forwarding",
  "level": 3
}, {
  "value": "13.10.6 Perfect Forwarding Failure Cases",
  "id": "13106-perfect-forwarding-failure-cases",
  "level": 3
}, {
  "value": "13.11 The Rule of Five",
  "id": "1311-the-rule-of-five",
  "level": 2
}, {
  "value": "13.11.1 From Rule of Three to Rule of Five",
  "id": "13111-from-rule-of-three-to-rule-of-five",
  "level": 3
}, {
  "value": "13.11.2 The Five Special Member Functions",
  "id": "13112-the-five-special-member-functions",
  "level": 3
}, {
  "value": "13.11.3 Complete Rule of Five Example",
  "id": "13113-complete-rule-of-five-example",
  "level": 3
}, {
  "value": "13.11.4 Rule of Zero",
  "id": "13114-rule-of-zero",
  "level": 3
}, {
  "value": "13.11.5 Rule of Five Decision Table",
  "id": "13115-rule-of-five-decision-table",
  "level": 3
}, {
  "value": "13.11.6 =default and =delete",
  "id": "13116-default-and-delete",
  "level": 3
}, {
  "value": "13.12 std::move vs std::forward: Side-by-Side Comparison",
  "id": "1312-stdmove-vs-stdforward-side-by-side-comparison",
  "level": 2
}, {
  "value": "13.12.1 Detailed Comparison Table",
  "id": "13121-detailed-comparison-table",
  "level": 3
}, {
  "value": "13.12.2 Concrete Behavioral Difference",
  "id": "13122-concrete-behavioral-difference",
  "level": 3
}, {
  "value": "13.13 Performance Analysis: Move vs Copy",
  "id": "1313-performance-analysis-move-vs-copy",
  "level": 2
}, {
  "value": "13.13.1 Complexity Comparison",
  "id": "13131-complexity-comparison",
  "level": 3
}, {
  "value": "13.13.2 Detailed Performance Benchmark",
  "id": "13132-detailed-performance-benchmark",
  "level": 3
}, {
  "value": "13.13.3 Dry Run Trace: Copy vs Move for std::string",
  "id": "13133-dry-run-trace-copy-vs-move-for-stdstring",
  "level": 3
}, {
  "value": "13.13.4 Move Semantics Benefits → Performance Comparison",
  "id": "13134-move-semantics-benefits--performance-comparison",
  "level": 3
}, {
  "value": "13.14 Edge Cases and Gotchas",
  "id": "1314-edge-cases-and-gotchas",
  "level": 2
}, {
  "value": "13.14.1 Moving from Const Objects",
  "id": "13141-moving-from-const-objects",
  "level": 3
}, {
  "value": "13.14.2 Moving from a Base Class",
  "id": "13142-moving-from-a-base-class",
  "level": 3
}, {
  "value": "13.14.3 Mixed Move and Copy in Containers",
  "id": "13143-mixed-move-and-copy-in-containers",
  "level": 3
}, {
  "value": "13.14.4 Move Operations on Primitive Types",
  "id": "13144-move-operations-on-primitive-types",
  "level": 3
}, {
  "value": "13.14.5 std::move on auto&amp;&amp; Return",
  "id": "13145-stdmove-on-auto-return",
  "level": 3
}, {
  "value": "13.14.6 Move in Return Statement: The Pitfall",
  "id": "13146-move-in-return-statement-the-pitfall",
  "level": 3
}, {
  "value": "13.14.7 Self-Move Assignment",
  "id": "13147-self-move-assignment",
  "level": 3
}, {
  "value": "13.15 Move-Only Types and RAII",
  "id": "1315-move-only-types-and-raii",
  "level": 2
}, {
  "value": "13.15.1 What Are Move-Only Types?",
  "id": "13151-what-are-move-only-types",
  "level": 3
}, {
  "value": "13.15.2 Examples of Move-Only Types",
  "id": "13152-examples-of-move-only-types",
  "level": 3
}, {
  "value": "13.15.3 Implementing a Move-Only Type",
  "id": "13153-implementing-a-move-only-type",
  "level": 3
}, {
  "value": "13.16 Real-World Applications",
  "id": "1316-real-world-applications",
  "level": 2
}, {
  "value": "13.16.1 Standard Library Containers",
  "id": "13161-standard-library-containers",
  "level": 3
}, {
  "value": "13.16.2 std::swap Optimized with Move",
  "id": "13162-stdswap-optimized-with-move",
  "level": 3
}, {
  "value": "13.16.3 Move Semantics in Multithreading",
  "id": "13163-move-semantics-in-multithreading",
  "level": 3
}, {
  "value": "13.16.4 Move Semantics in DirectX / OpenGL Handles",
  "id": "13164-move-semantics-in-directx--opengl-handles",
  "level": 3
}, {
  "value": "13.16.5 Move Semantics in Parsers and Compilers",
  "id": "13165-move-semantics-in-parsers-and-compilers",
  "level": 3
}, {
  "value": "13.16.6 Network Buffers",
  "id": "13166-network-buffers",
  "level": 3
}, {
  "value": "13.17 Comparison Tables",
  "id": "1317-comparison-tables",
  "level": 2
}, {
  "value": "13.17.1 Value Categories Deep Comparison",
  "id": "13171-value-categories-deep-comparison",
  "level": 3
}, {
  "value": "13.17.2 std::move vs std::forward Detailed Table",
  "id": "13172-stdmove-vs-stdforward-detailed-table",
  "level": 3
}, {
  "value": "13.17.3 Rule of Five → Member Function Summary",
  "id": "13173-rule-of-five--member-function-summary",
  "level": 3
}, {
  "value": "13.17.4 Reference Collapsing Summary Table",
  "id": "13174-reference-collapsing-summary-table",
  "level": 3
}, {
  "value": "13.17.5 Move Semantics Benefits → Performance Comparison",
  "id": "13175-move-semantics-benefits--performance-comparison",
  "level": 3
}, {
  "value": "13.18 Interview Corner",
  "id": "1318-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is std::move and does it actually move anything?",
  "id": "q1-what-is-stdmove-and-does-it-actually-move-anything",
  "level": 3
}, {
  "value": "Q2: Explain perfect forwarding. Why do we need std::forward instead of std::move?",
  "id": "q2-explain-perfect-forwarding-why-do-we-need-stdforward-instead-of-stdmove",
  "level": 3
}, {
  "value": "Q3: What is the difference between T&amp;&amp; in template context and non-template context?",
  "id": "q3-what-is-the-difference-between-t-in-template-context-and-non-template-context",
  "level": 3
}, {
  "value": "Q4: Why should move constructors be noexcept? What happens if they aren&#39;t?",
  "id": "q4-why-should-move-constructors-be-noexcept-what-happens-if-they-arent",
  "level": 3
}, {
  "value": "Q5: What are the reference collapsing rules and why are they important?",
  "id": "q5-what-are-the-reference-collapsing-rules-and-why-are-they-important",
  "level": 3
}, {
  "value": "Q6: What is the difference between a prvalue and an xvalue?",
  "id": "q6-what-is-the-difference-between-a-prvalue-and-an-xvalue",
  "level": 3
}, {
  "value": "Q7: What is the Rule of Five? When should I apply it?",
  "id": "q7-what-is-the-rule-of-five-when-should-i-apply-it",
  "level": 3
}, {
  "value": "Q8: What is the output of this code and why?",
  "id": "q8-what-is-the-output-of-this-code-and-why",
  "level": 3
}, {
  "value": "13.19 Chapter Quiz",
  "id": "1319-chapter-quiz",
  "level": 2
}, {
  "value": "Multiple Choice",
  "id": "multiple-choice",
  "level": 3
}, {
  "value": "True or False",
  "id": "true-or-false",
  "level": 3
}, {
  "value": "13.20 Summary",
  "id": "1320-summary",
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
}, {
  "value": "Real-World Mini-Projects",
  "id": "real-world-mini-projects",
  "level": 3
}, {
  "value": "End of Chapter 13",
  "id": "end-of-chapter-13",
  "level": 2
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
        id: "chapter-13-move-semantics",
        children: "Chapter 13: Move Semantics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/12-smart-pointers",
          children: "12-smart-pointers"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/14-lambdas",
          children: "14-lambdas"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish the five value categories (lvalue, prvalue, xvalue, glvalue, rvalue) and explain their hierarchical relationship"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement noexcept move constructors and move assignment operators for resource-managing classes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain what std::move actually does (cast, not move) and use it correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply std::forward and perfect forwarding in template code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand forwarding references (T&& in deduced context) vs rvalue references (T&& in concrete context)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply reference collapsing rules (T& & → T&, T&& && → T&&, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Rule of Five for classes that manage resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why noexcept enables move optimizations in std::vector reallocation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze move-vs-copy performance with complexity guarantees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions about move semantics, forwarding, and value categories"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before studying this chapter, students should be familiar with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 03 (Constructors):"
        }), " Copy constructor, copy assignment operator, destructor, Rule of Three"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 07 (Templates):"
        }), " Function templates, template argument deduction, variadic templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 06 (Operator Overloading):"
        }), " Reference semantics, operator overloading basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chapter 12 (Smart Pointers):"
        }), " RAII pattern, ownership semantics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Value Categories"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue = has identity; prvalue = no identity, pure temporary; xvalue = has identity but expiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knowing the category tells you whether a move is legal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rvalue References (&&)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type&& binds only to rvalues (prvalues and xvalues)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of move semantics → enables resource pilfering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move Constructor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pilfers resources from an expiring source object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source left in valid-but-unspecified state (typically empty/null)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Move Assignment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Releases current resources, then pilfers from source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must handle self-assignment and exception safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "noexcept enables move-based reallocation in std::vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always mark move ops as noexcept or vector will copy instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::move"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional cast to rvalue reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does NOT move anything → it just enables the move"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "std::forward"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional cast → rvalue only if original was rvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves value category through template forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forwarding Reference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T&& in deduced context; binds to both lvalues and rvalues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must use std::forward, not std::move"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reference Collapsing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T& & → T&, T&& && → T&&, T& && → T&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explains why T&& works for both categories in templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rule of Five"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add move ctor + move assign to Rule of Three"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If you manage resources, implement all five or =delete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Value Categories] --> B[Rvalue References &&]\n    B --> C[Move Constructor]\n    B --> D[Move Assignment]\n    C --> E[noexcept Guarantee]\n    D --> E\n    E --> F[std::move - Unconditional Cast]\n    F --> G[Forwarding References T&&]\n    G --> H[Reference Collapsing]\n    G --> I[std::forward - Conditional Cast]\n    I --> J[Perfect Forwarding Pattern]\n    J --> K[Rule of Five]\n    K --> L[Performance & Real Systems]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "130-real-world-analogy-the-library-book",
      children: "13.0 Real-World Analogy: The Library Book"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before diving into C++ syntax, consider this real-world analogy for move semantics."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "An lvalue is like a book on the library shelf."
      }), " It has a permanent location (identity). You can take it, read it, put it back, and someone else can find it later."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "An rvalue is like a newspaper in the recycling bin."
      }), " It has no permanent home. Once someone picks it up, it will be destroyed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Copying"
      }), " means photocopying every page of a book → expensive in time and memory."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Moving"
      }), " means transferring ownership. If you know a book is about to be thrown away, instead of photocopying it, you just take the pages. The original becomes empty (valid but unspecified)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "COPY:    [Book A: 500 pages] --photocopy--> [Book B: 500 pages]\n         Cost: O(n) time, O(n) memory allocation\n\nMOVE:    [Book A: 500 pages] --steal pages--> [Book B: 500 pages]\n         [Book A: empty shell]\n         Cost: O(1) pointer swap, zero allocation\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "std::move"
      }), " is like putting a \"FREE\" sticker on a library book → it doesn't move the book, it just declares that the book is available for taking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "std::forward"
      }), " is like an automated sorting machine: if a package arrives as priority, it stays priority; if it arrives as standard, it stays standard. The machine preserves the original shipping category."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-value-categories-the-five-way-taxonomy",
      children: "13.1 Value Categories: The Five-Way Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1311-historical-context",
      children: "13.1.1 Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++98 had two value categories: lvalue (expressions with identity/address) and rvalue (everything else, typically temporaries). C++11 introduced a refined five-category taxonomy to support move semantics while preserving backward compatibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1312-the-taxonomy-diagram",
      children: "13.1.2 The Taxonomy Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every expression in C++ belongs to exactly one of five value categories:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "              expression\n             /          \\\n          glvalue      rvalue\n         /       \\    /      \\\n      lvalue     xvalue  prvalue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1313-category-definitions",
      children: "13.1.3 Category Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Has Identity?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Be Moved?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "lvalue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "locator value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An expression that has an identity (addressable). Represents a named object, function, or dereferenced pointer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "prvalue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pure rvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An expression that has no identity. Used to initialize objects. Temporaries and literals."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "xvalue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "expiring value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An expression that has an identity but whose resources can be reused because it is about to expire."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "glvalue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "generalized lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union of lvalue and xvalue. Any expression that has identity."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "rvalue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union of prvalue and xvalue. Any expression whose resources can be reused."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1314-examples-of-each-category",
      children: "13.1.4 Examples of Each Category"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nint global = 42;\n\nint& get_lvalue() { return global; }\nint get_prvalue() { return 42; }\nint&& get_xvalue() { return std::move(global); }\n\nint main() {\n    // ---- lvalues ----\n    int x = 10;                 // x is an lvalue (named variable)\n    int* p = &x;                // &x takes address of lvalue\n    ++x;                        // ++x is an lvalue (returns x&)\n    int& ref = x;               // ref binds to lvalue\n    int arr[3] = {1,2,3};\n    arr[0] = 5;                 // arr[0] is an lvalue\n    std::string s = \"hello\";\n    s[0] = 'H';                 // s[0] is an lvalue (returns char&)\n    get_lvalue() = 99;          // function returning int& is lvalue\n\n    // ---- prvalues ----\n    int y = 42;                 // 42 is a prvalue (literal)\n    int z = x + y;              // x + y is a prvalue (temporary result)\n    int w = ++x + 5;            // 5 is a prvalue\n    std::string t = s + \"!\";    // s + \"!\" is a prvalue\n    int a = 10;\n    int* q = &a;                // &a is a prvalue (address is temporary)\n\n    // ---- xvalues ----\n    int&& rref = std::move(x);  // std::move(x) is an xvalue\n    std::string u = std::move(s); // std::move(s) is an xvalue\n    int&& rref2 = static_cast<int&&>(global); // static_cast<T&&> is xvalue\n\n    // ---- glvalues (lvalue or xvalue) ----\n    // x is an lvalue, which is a glvalue\n    // std::move(x) is an xvalue, which is also a glvalue\n\n    // ---- rvalues (prvalue or xvalue) ----\n    // 42 is a prvalue, which is an rvalue\n    // std::move(x) is an xvalue, which is also an rvalue\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1315-how-value-categories-determine-overload-resolution",
      children: "13.1.5 How Value Categories Determine Overload Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nvoid foo(int& x)  { std::cout << \"lvalue\\n\"; }\nvoid foo(int&& x) { std::cout << \"rvalue\\n\"; }\n\nint main() {\n    int a = 10;\n    foo(a);              // lvalue → calls foo(int&)\n    foo(20);             // prvalue → calls foo(int&&)\n    foo(std::move(a));   // xvalue → calls foo(int&&)\n\n    // const matters:\n    const int b = 30;\n    // foo(b);           // ERROR: int& cannot bind to const int\n    // In practice you'd need void foo(const int&) overload too\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "lvalue\nrvalue\nrvalue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1316-category-membership-rules",
      children: "13.1.6 Category Membership Rules"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Named variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String literal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"hello\""
            }), " (has persistent storage)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array subscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue (if array is lvalue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function call returning T&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get_ref()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member access (object lvalue)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "obj.member"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Literal (except string)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Post-increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x++"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address-of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lambda expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[](int x){ return x; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function call returning T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "get_val()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enum constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Color::Red"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::move(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(obj)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "static_cast<T&&>(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<int&&>(x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member access on xvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(obj).member"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1317-dry-run-category-identification",
      children: "13.1.7 Dry Run: Category Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::string make_string() { return \"temporary\"; }\n\nint main() {\n    std::string s = \"hello\";   // \"hello\" is lvalue (string literal)\n    std::string t = s;         // s is lvalue → copy construction\n    std::string u = make_string(); // make_string() is prvalue → move construction\n    std::string v = std::move(s); // std::move(s) is xvalue → move construction\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step trace:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"hello\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String literals have static storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-initializes s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named variable with identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-constructs t (O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "make_string()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return value is temporary, no identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move-constructs u (O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Has identity (s), but cast to &&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move-constructs v (O(1))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-rvalue-references-t",
      children: "13.2 Rvalue References (T&&)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1321-definition-and-syntax",
      children: "13.2.1 Definition and Syntax"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rvalue reference"
      }), " is declared with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), " (where T is a concrete type, not a template parameter). It binds exclusively to rvalues (prvalues and xvalues)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int&& rref = 42;         // binds to prvalue literal\nint&& rref2 = std::move(x); // binds to xvalue\n// int&& rref3 = x;      // ERROR: cannot bind lvalue to rvalue reference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1322-critical-rule-named-rvalue-references-are-lvalues",
      children: "13.2.2 Critical Rule: Named Rvalue References Are Lvalues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once an rvalue reference has a name, it is an lvalue inside its scope. This prevents accidental double moves."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void process(int&& x) {\n    // x is a named rvalue reference → x is an lvalue here\n    consume(x);              // calls lvalue version! (x is not moved)\n    consume(std::move(x));   // calls rvalue version (explicit cast)\n}\n\nvoid consume(int& x)  { std::cout << \"lvalue\\n\"; }\nvoid consume(int&& x) { std::cout << \"rvalue\\n\"; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this matters:"
      }), " Without this rule, passing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " to another function would silently move from it, leaving it in an unspecified state. The programmer must explicitly say ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move(x)"
      }), " to transfer resources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1323-rvalue-reference-binds-to-temporaries",
      children: "13.2.3 Rvalue Reference Binds to Temporaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nvoid take_ownership(int&& x) {\n    std::cout << \"Took ownership of: \" << x << '\\n';\n}\n\nint main() {\n    take_ownership(42);            // prvalue literal\n    take_ownership(10 + 20);       // prvalue expression\n    int a = 100;\n    take_ownership(std::move(a));  // xvalue\n    // take_ownership(a);          // ERROR: cannot bind lvalue to &&\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1324-lifetime-extension",
      children: "13.2.4 Lifetime Extension"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Binding a temporary to an rvalue reference extends its lifetime to match the reference's scope → similar to const lvalue references but with move semantics available."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nstd::string make() {\n    return std::string(1000, 'x');\n}\n\nint main() {\n    // Temporary string's lifetime extended\n    std::string&& ref = make();\n    std::cout << ref.size() << '\\n';  // 1000 → still alive\n    // ref goes out of scope; temporary destroyed here\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1325-overload-resolution-with-",
      children: "13.2.5 Overload Resolution with &&"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Argument"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "int& (lvalue ref)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "const int& (const lvalue ref)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "int&& (rvalue ref)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (exact)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (conversion)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const lvalue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rvalue int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (conversion → binds!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓ (exact → preferred)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The compiler prefers int&& for rvalues over const int&, enabling move semantics."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-move-constructor",
      children: "13.3 Move Constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1331-syntax-and-definition",
      children: "13.3.1 Syntax and Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The move constructor takes an rvalue reference to the same type and transfers ownership of resources from the source to the newly constructed object."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class_name(class_name&& other) noexcept\n    : member1(std::move(other.member1))\n    , member2(std::move(other.member2))\n{\n    // Leave other in valid-but-unspecified state\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1332-core-example-dynamicbuffer",
      children: "13.3.2 Core Example: DynamicBuffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n#include <algorithm>\n\nclass DynamicBuffer {\npublic:\n    // Default constructor\n    DynamicBuffer() : data_(nullptr), size_(0), capacity_(0) {\n        std::cout << \"Default constructed\\n\";\n    }\n\n    // Parameterized constructor\n    explicit DynamicBuffer(size_t size)\n        : data_(new char[size]), size_(size), capacity_(size) {\n        std::fill(data_, data_ + size_, 0);\n        std::cout << \"Constructed with size \" << size << '\\n';\n    }\n\n    // Destructor\n    ~DynamicBuffer() {\n        delete[] data_;\n        std::cout << \"Destroyed\\n\";\n    }\n\n    // --- Copy Constructor (deep copy, O(n)) ---\n    DynamicBuffer(const DynamicBuffer& other)\n        : data_(new char[other.capacity_])\n        , size_(other.size_)\n        , capacity_(other.capacity_) {\n        std::copy(other.data_, other.data_ + capacity_, data_);\n        std::cout << \"Copy constructed (\" << size_ << \" elements)\\n\";\n    }\n\n    // --- Move Constructor (pointer swap, O(1)) ---\n    DynamicBuffer(DynamicBuffer&& other) noexcept\n        : data_(other.data_)\n        , size_(other.size_)\n        , capacity_(other.capacity_) {\n        // Leave other in valid-but-unspecified state\n        other.data_ = nullptr;\n        other.size_ = 0;\n        other.capacity_ = 0;\n        std::cout << \"Move constructed (\" << size_ << \" elements)\\n\";\n    }\n\n    // Copy assignment\n    DynamicBuffer& operator=(const DynamicBuffer& other) {\n        if (this != &other) {\n            delete[] data_;\n            capacity_ = other.capacity_;\n            size_ = other.size_;\n            data_ = new char[capacity_];\n            std::copy(other.data_, other.data_ + capacity_, data_);\n            std::cout << \"Copy assigned\\n\";\n        }\n        return *this;\n    }\n\n    // Move assignment\n    DynamicBuffer& operator=(DynamicBuffer&& other) noexcept {\n        if (this != &other) {\n            delete[] data_;                          // release current\n            data_ = other.data_;                     // steal pointer\n            size_ = other.size_;\n            capacity_ = other.capacity_;\n            other.data_ = nullptr;                   // null out source\n            other.size_ = 0;\n            other.capacity_ = 0;\n            std::cout << \"Move assigned\\n\";\n        }\n        return *this;\n    }\n\n    size_t size() const { return size_; }\n    size_t capacity() const { return capacity_; }\n\nprivate:\n    char* data_;\n    size_t size_;\n    size_t capacity_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1333-move-constructor-execution-step-by-step",
      children: "13.3.3 Move Constructor Execution: Step-by-Step"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receive source as rvalue reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DynamicBuffer(DynamicBuffer&& other)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "other"
            }), " holds ptr to heap memory"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steal the pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "data_ = other.data_"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "other"
            }), " point to same memory"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steal size/capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size_ = other.size_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size info copied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null the source pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "other.data_ = nullptr"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "other"
            }), " no longer owns the memory"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero the source sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "other.size_ = 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "other"
            }), " is in valid-but-unspecified state"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New object owns resources; source is empty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical invariant:"
      }), " After the move, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "other"
      }), " must be destructible and assignable. Its destructor will call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete[] nullptr"
      }), ", which is safe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1334-default-move-constructor",
      children: "13.3.4 Default Move Constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a class does not declare a move constructor, and all of the following are true:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user-declared copy constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user-declared copy assignment operator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user-declared move assignment operator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user-declared destructor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then the compiler ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implicitly declares"
      }), " a default move constructor that does member-wise move."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Point {\n    int x, y;\n    // Compiler generates: Point(Point&&) = default;\n    // Equivalent to member-wise std::move:\n    //   this->x = std::move(other.x);\n    //   this->y = std::move(other.y);\n};\n\nstruct Container {\n    std::string name;\n    std::vector<int> data;\n    // Compiler generates: Container(Container&&) = default;\n    // Calls std::move on string and vector → both have real move ctors\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1335-move-constructor-is-not-generated-when",
      children: "13.3.5 Move Constructor is Not Generated When"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The implicitly declared move constructor is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deleted"
      }), " (not generated) if any of the following are true:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A non-static data member or direct base cannot be moved (no accessible move ctor, and copy ctor is not trivial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The destructor is user-declared (C++11 rule; relaxed in C++23 with DR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A non-static data member or direct base has a deleted or inaccessible move constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A non-static data member is const-qualified (const members cannot be moved from)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct MovableButDeleted {\n    std::mutex mtx;  // mutex is not movable and not copyable\n    // Move constructor is deleted\n    // Copy constructor is also deleted\n};\n\nstruct ConstMember {\n    const int id;\n    std::string name;\n    // Const member prevents move generation\n    // Copy constructor works fine\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1336-delegating-to-member-move-constructors",
      children: "13.3.6 Delegating to Member Move Constructors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Manager {\npublic:\n    // Move constructor: delegates to member moves\n    Manager(Manager&& other) noexcept\n        : name_(std::move(other.name_))\n        , buffer_(std::move(other.buffer_))\n        , id_(other.id_)  // int → trivial move (just copy)\n    {\n        other.id_ = -1;  // mark source as invalid\n    }\n\nprivate:\n    std::string name_;\n    DynamicBuffer buffer_;\n    int id_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-move-assignment-operator",
      children: "13.4 Move Assignment Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1341-syntax-and-definition",
      children: "13.4.1 Syntax and Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class_name& operator=(class_name&& other) noexcept {\n    if (this != &other) {  // self-assignment guard\n        // 1. Release current resources\n        // 2. Steal resources from other\n        // 3. Set other to valid-but-unspecified state\n    }\n    return *this;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1342-self-assignment-and-exception-safety",
      children: "13.4.2 Self-Assignment and Exception Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Self-assignment in move assignment is unlikely (why would you write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = std::move(x)"
      }), "?) but can happen through aliasing:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void swap(DynamicBuffer& a, DynamicBuffer& b) {\n    DynamicBuffer tmp = std::move(a);\n    a = std::move(b);\n    b = std::move(tmp);  // tmp and b could reference same data?\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-assignment guard pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Buffer& operator=(Buffer&& other) noexcept {\n    // Guard: check if we're assigning to ourselves\n    if (this == &other) return *this;\n\n    // Release, steal, clear\n    delete[] data_;\n    data_ = other.data_;\n    size_ = other.size_;\n    other.data_ = nullptr;\n    other.size_ = 0;\n    return *this;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative: Copy-and-Swap (moves instead of copies with rvalue):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Buffer& operator=(Buffer other) noexcept {\n    // If argument is lvalue: copy-constructed (deep copy)\n    // If argument is rvalue: move-constructed (cheap)\n    swap(*this, other);\n    return *this;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1343-move-assignment-execution-trace",
      children: "13.4.3 Move Assignment Execution Trace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "buf1"
      }), " holds 1000 elements and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "buf2"
      }), " holds 500 elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "DynamicBuffer buf1(1000);\nDynamicBuffer buf2(500);\nbuf2 = std::move(buf1);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "buf1 state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "buf2 state"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=0x1000, size=1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=0x2000, size=500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (this != &other)"
            }), " → true (0x2000 != 0x1000)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "delete[] data_"
            }), " (releases buf2's old buffer at 0x2000)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=0x2000 (freed!)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "data_ = other.data_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=0x1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size_ = other.size_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_=1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_=1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "other.data_ = nullptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=nullptr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "other.size_ = 0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=nullptr, size=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "data_=0x1000, size=1000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(1) → constant time regardless of buffer size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-the-noexcept-guarantee-for-move-operations",
      children: "13.5 The noexcept Guarantee for Move Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1351-why-noexcept-matters",
      children: "13.5.1 Why noexcept Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noexcept"
      }), " specifier on move operations tells both the compiler and the standard library that the operation will never throw. This enables critical optimizations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1352-vector-reallocation-the-critical-case",
      children: "13.5.2 Vector Reallocation: The Critical Case"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " grows beyond its capacity, it must:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate new memory (may throw std::bad_alloc → unavoidable)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move or copy"
        }), " existing elements to new memory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destroy old elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deallocate old memory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The decision: move or copy during reallocation?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<MyClass> v;\nv.reserve(1);         // capacity = 1\nv.push_back(MyClass{}); // first element, no reallocation needed\n\nv.push_back(MyClass{}); // capacity exceeded! Must reallocate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If move constructor is noexcept:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector moves elements → fast O(1) pointer swaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If a move throws mid-reallocation, the source elements are already modified → data loss!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If move constructor is NOT noexcept:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vector copies elements instead → slow O(n) deep copies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If copy throws, old memory is intact → strong exception guarantee preserved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1353-stdmove_if_noexcept",
      children: "13.5.3 std::move_if_noexcept"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The standard library implements this check via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move_if_noexcept"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\ntypename std::conditional<\n    std::is_nothrow_move_constructible<T>::value ||\n    !std::is_copy_constructible<T>::value,\n    T&&,          // move (safe or forced)\n    const T&      // copy (safe fallback)\n>::type move_if_noexcept(T& x) noexcept;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In vector reallocation (simplified):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid vector<T>::reallocate(size_t new_cap) {\n    T* new_data = static_cast<T*>(::operator new(new_cap * sizeof(T)));\n\n    for (size_t i = 0; i < size_; ++i) {\n        // Uses move_if_noexcept internally\n        new (new_data + i) T(std::move_if_noexcept(old_data_[i]));\n    }\n\n    // Destroy old and swap pointers\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1354-demonstration-noexcept-vs-non-noexcept",
      children: "13.5.4 Demonstration: noexcept vs Non-noexcept"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nstruct ThrowMove {\n    ThrowMove() = default;\n    ThrowMove(ThrowMove&&) /* NOT noexcept */ {\n        // Simulate work\n    }\n    ThrowMove(const ThrowMove&) {\n        std::cout << \"COPY\\n\";\n    }\n};\n\nstruct SafeMove {\n    SafeMove() = default;\n    SafeMove(SafeMove&&) noexcept {\n        // Simulate work\n    }\n    SafeMove(const SafeMove&) {\n        std::cout << \"COPY\\n\";\n    }\n};\n\nint main() {\n    std::vector<ThrowMove> tv;\n    tv.reserve(1);\n    tv.emplace_back();\n    std::cout << \"ThrowMove reallocation:\\n\";\n    tv.emplace_back();  // reallocation → copies! (move not noexcept)\n\n    std::vector<SafeMove> sv;\n    sv.reserve(1);\n    sv.emplace_back();\n    std::cout << \"SafeMove reallocation:\\n\";\n    sv.emplace_back();  // reallocation → moves (noexcept)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ThrowMove reallocation:\nCOPY\n\nSafeMove reallocation:\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Observation:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ThrowMove"
      }), " vector emitted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COPY"
      }), " during reallocation because the move constructor lacked noexcept, forcing the vector to use the copy constructor as a safe fallback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1355-when-not-to-mark-noexcept",
      children: "13.5.5 When NOT to Mark noexcept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exceptionally, do not mark move operations noexcept if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The move operation can genuinely throw (e.g., acquiring a system resource that can fail)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The class is never used with standard containers that require noexcept for optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are moving a container whose allocator might throw on move"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-stdmove--the-unconditional-cast",
      children: "13.6 std::move → The Unconditional Cast"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1361-what-stdmove-actually-does",
      children: "13.6.1 What std::move Actually Does"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "std::move does NOT move anything."
      }), " It is an unconditional cast to an rvalue reference. The \"move\" happens when a move constructor or move assignment operator receives the rvalue reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1362-reference-implementation",
      children: "13.6.2 Reference Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\ntypename std::remove_reference<T>::type&&\nmove(T&& t) noexcept {\n    return static_cast<typename std::remove_reference<T>::type&&>(t);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1363-usage-patterns",
      children: "13.6.3 Usage Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\nint main() {\n    // Pattern 1: Enable move into another object\n    std::string s1 = \"hello world with a very long string\";\n    std::string s2 = std::move(s1);\n    std::cout << \"s2 = \" << s2 << '\\n';\n    std::cout << \"s1 = \" << s1 << '\\n';  // valid but unspecified (typically empty)\n\n    // Pattern 2: Pass named object to a function that takes &&\n    std::vector<int> v1 = {1, 2, 3, 4, 5};\n    std::vector<int> v2 = std::move(v1);\n    std::cout << \"v2 size: \" << v2.size() << '\\n';\n    std::cout << \"v1 size: \" << v1.size() << '\\n';  // 0\n\n    // Pattern 3: Insert into containers without copy\n    std::vector<std::string> words;\n    std::string word = \"very_long_string_expensive_to_copy\";\n    words.push_back(std::move(word));\n    // word is now empty; vector owns the string memory\n    std::cout << \"word size: \" << word.size() << '\\n';  // 0\n    std::cout << \"words[0]: \" << words[0] << '\\n';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1364-common-misconceptions",
      children: "13.6.4 Common Misconceptions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Misconception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Truth"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"std::move moves the object\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → it only casts to &&. The move happens in the move constructor/assignment."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"After std::move, the object is empty\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not guaranteed → the object is in a valid-but-unspecified state. Typically it's empty, but the class decides."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"You must use std::move on return values\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → the compiler applies RVO and implicit move automatically for local variables returned by value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"std::move destroys the object\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → the destructor still runs when the object goes out of scope."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"std::move is always beneficial\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No → for trivially copyable types (int, double), copying is as fast as moving."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1365-when-not-to-use-stdmove",
      children: "13.6.5 When NOT to Use std::move"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// BAD: RVO prevents the copy anyway; std::move inhibits it\nstd::string make() {\n    std::string s = \"hello\";\n    return std::move(s);  // prevents NRVO! Use just: return s;\n}\n\n// BAD: On const objects (casts const away poorly)\nconst std::string cs = \"hello\";\nstd::string dest = std::move(cs);  // calls copy ctor, not move!\n\n// BAD: On trivially copyable types\nint x = 42;\nint y = std::move(x);  // same as int y = x; → no benefit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1366-stdmove-vs-return-value-optimization",
      children: "13.6.6 std::move vs Return Value Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\n// Case 1: Return local variable → RVO/NRVO applies\nstd::string make_string_rvo() {\n    std::string s = \"very long string\";\n    return s;  // NRVO: constructs directly in caller's storage\n}\n\n// Case 2: Explicit std::move → PREVENTS NRVO!\nstd::string make_string_move() {\n    std::string s = \"very long string\";\n    return std::move(s);  // forces move, but NRVO would have been better!\n}\n\n// Case 3: Return from different branches → implicit move\nstd::string make_string_conditional(bool flag) {\n    std::string a = \"first option\";\n    std::string b = \"second option\";\n    if (flag) return a;\n    return b;             // implicit move (C++11) or NRVO (C++17)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " Do NOT use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return std::move(local)"
      }), " → it inhibits copy elision. Just use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return local;"
      }), " and the compiler applies RVO, or at minimum an implicit move."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-stdforward--the-conditional-cast",
      children: "13.7 std::forward → The Conditional Cast"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1371-purpose",
      children: "13.7.1 Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward"
      }), " conditionally casts its argument to an rvalue reference → only if the argument was originally an rvalue. It \"forwards\" the value category of the argument through a template function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1372-reference-implementation",
      children: "13.7.2 Reference Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "/// Overload 1: For lvalue references (T is deduced as T&)\ntemplate <typename T>\nconstexpr T&& forward(typename std::remove_reference<T>::type& t) noexcept {\n    return static_cast<T&&>(t);\n    // If T = int&:  int& && → int& (reference collapsing)\n    // If T = int&&: int&& && → int&&\n}\n\n/// Overload 2: For rvalue references\ntemplate <typename T>\nconstexpr T&& forward(typename std::remove_reference<T>::type&& t) noexcept {\n    static_assert(!std::is_lvalue_reference<T>::value,\n                  \"Cannot forward an rvalue as an lvalue\");\n    return static_cast<T&&>(t);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1373-key-two-overloads",
      children: "13.7.3 Key: Two Overloads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key to understanding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward"
      }), " is that it has two overloads:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lvalue overload"
        }), " (takes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Type&"
        }), "): When the original argument was an lvalue, T deduces as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T& &&"
        }), " collapses to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        }), " → returns lvalue reference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rvalue overload"
        }), " (takes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Type&&"
        }), "): When the original argument was an rvalue, T deduces as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&&"
        }), " stays ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&&"
        }), " → returns rvalue reference."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1374-how-forward-preserves-category",
      children: "13.7.4 How Forward Preserves Category"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <utility>\n\nvoid inner(int& x)  { std::cout << \"lvalue: \" << x << '\\n'; }\nvoid inner(int&& x) { std::cout << \"rvalue: \" << x << '\\n'; }\n\ntemplate <typename T>\nvoid outer(T&& x) {\n    inner(std::forward<T>(x));  // preserves category\n}\n\nint main() {\n    int a = 10;\n    outer(a);          // T = int& → std::forward<int&>(a) → lvalue\n    outer(20);         // T = int  → std::forward<int>(a) → rvalue\n    outer(std::move(a)); // T = int  → std::forward<int>(a) → rvalue\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "lvalue: 10\nrvalue: 20\nrvalue: 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1375-forwarding-reference-deduction-table",
      children: "13.7.5 Forwarding Reference Deduction Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid f(T&& x);  // forwarding reference\n\nint a = 42;\nconst int b = 42;\nint& ref = a;\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T Deduced"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type of x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::forward<T>(x) returns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(a)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            }), " (collapsed from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int& &&"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            }), " (lvalue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const int&"
            }), " (const lvalue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            }), " (no collapse)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            }), " (rvalue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(std::move(a))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            }), " (rvalue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(ref)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            }), " (lvalue)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-forwarding-references-universal-references",
      children: "13.8 Forwarding References (Universal References)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1381-the-universal-reference-pattern",
      children: "13.8.1 The \"Universal Reference\" Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forwarding reference"
      }), " (originally called \"universal reference\" by Scott Meyers) is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deduced"
      }), " template parameter. It can bind to both lvalues and rvalues, preserving the original value category through reference collapsing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1382-forwarding-reference-vs-rvalue-reference",
      children: "13.8.2 Forwarding Reference vs Rvalue Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// FORWARDING REFERENCE: T&& in deduced context\ntemplate <typename T>\nvoid f(T&& x);   // T is deduced → forwarding reference\n\n// RVALUE REFERENCE: T&& in non-deduced context\ntemplate <typename T>\nclass Wrapper {\n    void g(T&& x);  // T is known (from class) → rvalue reference\n};\n\n// Also rvalue reference (no template deduction):\nvoid h(int&& x);   // concrete type → rvalue reference\nauto&& ref = 42;   // auto&& is a forwarding reference (auto is deduced)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1383-auto-is-also-a-forwarding-reference",
      children: "13.8.3 auto&& is Also a Forwarding Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nint main() {\n    int x = 10;\n\n    // auto&& is a forwarding reference\n    auto&& r1 = x;         // auto = int& → int& && collapses to int&\n    auto&& r2 = 20;        // auto = int → int&&\n\n    // Practical use: range-based for with forwarding reference\n    std::vector<std::string> words = {\"hello\", \"world\"};\n\n    // Wants to modify elements: auto&\n    for (auto& w : words) { /* modify w */ }\n\n    // Wants to move elements out: auto&&\n    for (auto&& w : words) {\n        std::string dest = std::move(w);  // steal from each element\n    }\n\n    // Generic lambda with auto&&\n    auto lambda = [](auto&& x) {\n        return std::forward<decltype(x)>(x);  // perfect forwarding\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1384-when-t-is-not-a-forwarding-reference",
      children: "13.8.4 When T&& is NOT a Forwarding Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// CASE 1: Template parameter is not deduced (known from class)\ntemplate <typename T>\nclass Container {\n    void push_back(T&& x);  // rvalue reference, NOT forwarding reference\n};\n\n// CASE 2: Template parameter is fixed before && is seen\ntemplate <typename T>\nvoid g(std::vector<T>&& v);  // rvalue reference to vector<T>\n\n// CASE 3: const-qualified\ntemplate <typename T>\nvoid h(const T&& x);  // rvalue reference (const prohibits forwarding)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1385-practical-pattern-stdmake_unique",
      children: "13.8.5 Practical Pattern: std::make_unique"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <memory>\n#include <string>\n#include <vector>\n\ntemplate <typename T, typename... Args>\nstd::unique_ptr<T> make_unique(Args&&... args) {\n    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));\n}\n\nstruct Person {\n    Person(std::string name, int age, std::vector<int> scores)\n        : name_(std::move(name)), age_(age), scores_(std::move(scores)) {}\nprivate:\n    std::string name_;\n    int age_;\n    std::vector<int> scores_;\n};\n\nint main() {\n    auto p = make_unique<Person>(\n        \"Alice\", 30, std::vector<int>{95, 87, 92}\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "139-reference-collapsing-rules",
      children: "13.9 Reference Collapsing Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1391-the-four-scenarios",
      children: "13.9.1 The Four Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference collapsing determines what happens when a reference to a reference appears (which only happens through template instantiation, typedefs, or decltype)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Rule: & wins over &&\n\nOriginal Type        Collapsed To\nT&  &               T&            (lvalue ref to lvalue ref → lvalue ref)\nT&  &&              T&            (rvalue ref to lvalue ref → lvalue ref)\nT&& &               T&            (lvalue ref to rvalue ref → lvalue ref)\nT&& &&              T&&           (rvalue ref to rvalue ref → rvalue ref)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory aid:"
      }), " \"& squashes && → if either is &, the result is &.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1392-reference-collapsing-table",
      children: "13.9.2 Reference Collapsing Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Combined"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collapsed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int& &"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double lvalue reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int& &&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rvalue ref to lvalue ref ⇒ lvalue reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&& &"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lvalue ref to rvalue ref ⇒ lvalue reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&& &&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double rvalue reference ⇒ rvalue reference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1393-where-reference-collapsing-happens",
      children: "13.9.3 Where Reference Collapsing Happens"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\ntemplate <typename T>\nvoid f(T&& x);\n\nint main() {\n    int a = 0;\n\n    // T = int& (deduced from lvalue)\n    // f<int&> instantiation: void f(int& && x);\n    // Collapsing: int& && → int&\n    // Result: void f(int& x);\n    f(a);\n\n    // T = int (deduced from rvalue)\n    // f<int> instantiation: void f(int&& x);\n    f(42);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1394-reference-collapsing-in-typedef--using",
      children: "13.9.4 Reference Collapsing in typedef / using"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nint main() {\n    using LRef = int&;   // lvalue reference to int\n\n    // Reference collapsing with nested typedefs:\n    using LRef2 = LRef&;   // int& & → int& (collapsed)\n    using RRef2 = LRef&&;  // int& && → int& (collapsed)\n\n    // With auto&& (forwarding reference):\n    int i = 10;\n    auto&& r1 = i;   // int& && → int& (lvalue reference)\n    auto&& r2 = 20;  // int&& (rvalue reference)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1395-reference-collapsing-in-decltype",
      children: "13.9.5 Reference Collapsing in decltype"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int a = 10;\nint& b = a;\n\ndecltype((a)) x;  // int& (parenthesized name is an lvalue expression)\ndecltype((b)) y;  // int& (b is already int&)\ndecltype(std::move(a)) z; // int&& (std::move returns int&&)\n\n// Reference collapsing in decltype context:\nusing T1 = decltype(x)&;   // int& & → int&\nusing T2 = decltype(z)&;   // int&& & → int&\nusing T3 = decltype(z)&&;  // int&& && → int&&\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1396-why-reference-collapsing-enables-perfect-forwarding",
      children: "13.9.6 Why Reference Collapsing Enables Perfect Forwarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference collapsing is the mechanism that makes forwarding references work:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid wrapper(T&& arg) {\n    foo(std::forward<T>(arg));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wrapper(a)"
      }), " is called with an lvalue ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T deduces as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int&"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parameter type: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int& &&"
        }), " → collapses to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int&"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::forward<int&>(arg)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static_cast<int&>(arg)"
        }), " → returns lvalue reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo"
        }), " receives an lvalue"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wrapper(42)"
      }), " is called with an rvalue ", (0,jsx_runtime.jsx)(_components.code, {
        children: "42"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T deduces as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parameter type: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int&&"
        }), " (no collapsing needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "std::forward<int>(arg)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static_cast<int&&>(arg)"
        }), " → returns rvalue reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo"
        }), " receives an rvalue"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1310-perfect-forwarding-pattern",
      children: "13.10 Perfect Forwarding Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13101-definition",
      children: "13.10.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Perfect forwarding is the technique of passing arguments through one or more layers of function calls while preserving each argument's value category (lvalue or rvalue). It uses forwarding references (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), ") and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13102-the-problem-loss-of-value-category",
      children: "13.10.2 The Problem: Loss of Value Category"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without perfect forwarding, value category information is lost:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nvoid sink(std::string&& s) {\n    std::cout << \"rvalue: \" << s << '\\n';\n}\n\nvoid sink(const std::string& s) {\n    std::cout << \"lvalue: \" << s << '\\n';\n}\n\n// BAD: Always passes lvalue (because arg has a name)\ntemplate <typename T>\nvoid bad_wrapper(T arg) {\n    sink(arg);  // arg is always an lvalue (named parameter)\n}\n\n// WORSE: Explicit && means rvalue only → can't accept lvalues!\nvoid worse_wrapper(std::string&& arg) {\n    sink(std::move(arg));  // forces rvalue, but only accepts rvalues\n}\n\nint main() {\n    std::string s = \"hello\";\n    bad_wrapper(s);               // lvalue → copy then pass lvalue\n    bad_wrapper(std::move(s));    // also copied into function!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13103-the-solution-forwarding-reference--stdforward",
      children: "13.10.3 The Solution: Forwarding Reference + std::forward"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <utility>\n\nvoid inner(const std::string& s) { std::cout << \"lvalue: \" << s << '\\n'; }\nvoid inner(std::string&& s)      { std::cout << \"rvalue: \" << s << '\\n'; }\n\n// GOOD: Perfect forwarding preserves category\ntemplate <typename T>\nvoid perfect_wrapper(T&& arg) {\n    inner(std::forward<T>(arg));  // preserves original value category\n}\n\nint main() {\n    std::string s = \"hello\";\n    perfect_wrapper(s);              // T = string& → forward<string&> → lvalue\n    perfect_wrapper(std::move(s));   // T = string → forward<string> → rvalue\n    perfect_wrapper(std::string(\"direct\")); // prvalue → rvalue\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "lvalue: hello\nrvalue: hello\nrvalue: direct\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13104-variadic-perfect-forwarding",
      children: "13.10.4 Variadic Perfect Forwarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The full power of perfect forwarding emerges with variadic templates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <string>\n#include <vector>\n#include <tuple>\n\n// ---- Factory Function (like std::make_shared) ----\ntemplate <typename T, typename... Args>\nstd::shared_ptr<T> make_shared(Args&&... args) {\n    return std::shared_ptr<T>(\n        new T(std::forward<Args>(args)...)\n    );\n}\n\n// ---- Emplace Back (like std::vector::emplace_back) ----\ntemplate <typename T, typename... Args>\nvoid emplace_back(std::vector<T>& vec, Args&&... args) {\n    if (vec.size() == vec.capacity())\n        throw std::bad_alloc();\n    ::new (static_cast<void*>(std::addressof(vec[vec.size()])))\n        T(std::forward<Args>(args)...);\n}\n\n// ---- Tuple-like Factory ----\ntemplate <typename... Args>\nauto make_tuple(Args&&... args) {\n    return std::tuple<std::decay_t<Args>...>(\n        std::forward<Args>(args)...\n    );\n}\n\n// ---- Delegate Constructor ----\nclass Widget {\npublic:\n    template <typename... Args>\n    Widget(Args&&... args)\n        : Widget(std::forward<Args>(args)...)  // delegating to another constructor\n    {\n        std::cout << \"Forwarding constructor\\n\";\n    }\n\n    Widget(int x) : value_(x) {\n        std::cout << \"int constructor: \" << x << '\\n';\n    }\n\n    Widget(const std::string& s) : value_(0), name_(s) {\n        std::cout << \"string constructor: \" << s << '\\n';\n    }\n\n    Widget(std::string&& s) : value_(0), name_(std::move(s)) {\n        std::cout << \"string move constructor: \" << name_ << '\\n';\n    }\n\nprivate:\n    int value_ = 0;\n    std::string name_;\n};\n\nint main() {\n    // Factory function\n    auto p = make_shared<std::vector<int>>(10, 5);\n    std::cout << \"Vector size: \" << p->size() << '\\n';\n\n    // Tuple factory → lvalue and rvalue mixed\n    std::string name = \"Alice\";\n    auto t = make_tuple(name, 30, std::string(\"extra\"));\n\n    // Delegating constructor\n    Widget w1(42);\n    Widget w2(std::string(\"temp\"));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13105-common-patterns-using-perfect-forwarding",
      children: "13.10.5 Common Patterns Using Perfect Forwarding"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Snippet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "make_unique<T>(std::forward<Args>(args)...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct T from forwarded args"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emplace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "container.emplace_back(std::forward<Args>(args)...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place construct element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delegate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Widget(std::forward<Args>(args)...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to another ctor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "invoke(std::forward<F>(f), std::forward<Args>(args)...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callable wrapper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tuple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::tuple<Decay_t<Args>...>(std::forward<Args>(args)...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture values"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13106-perfect-forwarding-failure-cases",
      children: "13.10.6 Perfect Forwarding Failure Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Case 1: Braced initializer lists cannot be deduced\ntemplate <typename... Args>\nvoid f(Args&&... args);\n// f({1, 2, 3});  // ERROR: braced-init-list has no type\n\n// Case 2: 0 and nullptr as NULL pointer\nf(0);   // T = int, not pointer type\nf(nullptr); // T = std::nullptr_t (correct)\n\n// Case 3: Overloaded function names\nvoid g(int);\nvoid g(double);\n// f(g);  // ERROR: which overload?\nf(static_cast<void(*)(int)>(g));  // OK → disambiguate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1311-the-rule-of-five",
      children: "13.11 The Rule of Five"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13111-from-rule-of-three-to-rule-of-five",
      children: "13.11.1 From Rule of Three to Rule of Five"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In C++98, the Rule of Three stated: if you define any of the destructor, copy constructor, or copy assignment operator, you likely need all three."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C++11 adds two more: move constructor and move assignment operator, making the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of Five"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13112-the-five-special-member-functions",
      children: "13.11.2 The Five Special Member Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Resource {\npublic:\n    // 1. Default Constructor (optional → not always needed)\n    Resource() = default;\n\n    // 2. Destructor\n    ~Resource();\n\n    // 3. Copy Constructor\n    Resource(const Resource& other);\n\n    // 4. Copy Assignment Operator\n    Resource& operator=(const Resource& other);\n\n    // 5. Move Constructor\n    Resource(Resource&& other) noexcept;\n\n    // 6. Move Assignment Operator\n    Resource& operator=(Resource&& other) noexcept;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13113-complete-rule-of-five-example",
      children: "13.11.3 Complete Rule of Five Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <algorithm>\n#include <cstring>\n\nclass IntArray {\npublic:\n    // Default constructor\n    IntArray() : data_(nullptr), size_(0) {\n        std::cout << \"Default ctor\\n\";\n    }\n\n    // Parameterized constructor\n    explicit IntArray(size_t size)\n        : data_(new int[size]()), size_(size) {\n        std::cout << \"Param ctor (\" << size << \")\\n\";\n    }\n\n    // --- Destructor ---\n    ~IntArray() {\n        delete[] data_;\n        std::cout << \"Dtor\\n\";\n    }\n\n    // --- Copy Constructor ---\n    IntArray(const IntArray& other)\n        : data_(new int[other.size_]), size_(other.size_) {\n        std::copy(other.data_, other.data_ + size_, data_);\n        std::cout << \"Copy ctor\\n\";\n    }\n\n    // --- Copy Assignment (copy-and-swap) ---\n    IntArray& operator=(const IntArray& other) {\n        IntArray temp(other);     // copy-construct\n        swap(*this, temp);        // swap\n        return *this;             // temp destroyed (releases old)\n    }\n\n    // --- Move Constructor ---\n    IntArray(IntArray&& other) noexcept\n        : data_(other.data_), size_(other.size_) {\n        other.data_ = nullptr;\n        other.size_ = 0;\n        std::cout << \"Move ctor\\n\";\n    }\n\n    // --- Move Assignment (move-and-swap) ---\n    IntArray& operator=(IntArray&& other) noexcept {\n        if (this != &other) {\n            delete[] data_;\n            data_ = other.data_;\n            size_ = other.size_;\n            other.data_ = nullptr;\n            other.size_ = 0;\n            std::cout << \"Move assign\\n\";\n        }\n        return *this;\n    }\n\n    friend void swap(IntArray& a, IntArray& b) noexcept {\n        using std::swap;\n        swap(a.data_, b.data_);\n        swap(a.size_, b.size_);\n    }\n\n    size_t size() const { return size_; }\n\nprivate:\n    int* data_;\n    size_t size_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13114-rule-of-zero",
      children: "13.11.4 Rule of Zero"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your class does not manage resources directly (no raw pointers, no manual new/delete), follow the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of Zero"
      }), ": let the compiler generate all special member functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Rule of Zero: no custom destructor, copy, or move needed\nclass Student {\n    std::string name_;\n    std::vector<int> scores_;\n    // Compiler-generated:\n    // - Destructor: destroys name_ and scores_\n    // - Copy ctor: copies name_ and scores_\n    // - Move ctor: moves name_ and scores_\n    // - Copy/move assign: member-wise copy/move\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13115-rule-of-five-decision-table",
      children: "13.11.5 Rule of Five Decision Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "If you define..."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "You should also define..."
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy ctor, copy assign, move ctor, move assign (or =delete them)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor, copy assign, move ctor, move assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor, copy ctor, move ctor, move assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor, copy ctor, copy assign, move assign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor, copy ctor, copy assign, move ctor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13116-default-and-delete",
      children: "13.11.6 =default and =delete"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class ExplicitFive {\npublic:\n    ExplicitFive() = default;\n    ~ExplicitFive() = default;\n    ExplicitFive(const ExplicitFive&) = default;\n    ExplicitFive& operator=(const ExplicitFive&) = default;\n    ExplicitFive(ExplicitFive&&) = default;\n    ExplicitFive& operator=(ExplicitFive&&) = default;\n};\n\nclass MoveOnly {\npublic:\n    MoveOnly() = default;\n    MoveOnly(const MoveOnly&) = delete;\n    MoveOnly& operator=(const MoveOnly&) = delete;\n    MoveOnly(MoveOnly&&) = default;\n    MoveOnly& operator=(MoveOnly&&) = default;\n};\n\nclass NonMovable {\npublic:\n    NonMovable() = default;\n    NonMovable(NonMovable&&) = delete;\n    NonMovable& operator=(NonMovable&&) = delete;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1312-stdmove-vs-stdforward-side-by-side-comparison",
      children: "13.12 std::move vs std::forward: Side-by-Side Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13121-detailed-comparison-table",
      children: "13.12.1 Detailed Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::forward<T>"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::forward<T>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type of cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional rvalue cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional rvalue cast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template parameter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single parameter (deduced or explicit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit template argument required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavior with lvalue"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            }), " when T = T&; returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            }), " when T = T"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Behavior with rvalue"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I know this object can be moved\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Preserve the caller's intent (value category)\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move constructor body, passing to sink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template functions forwarding arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Without template"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s = std::move(t)"
            }), " → fine"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::forward<T>(t)"
            }), " → requires T"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Misuse risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Casts const objects to && (ignored)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgets template argument (compile error)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13122-concrete-behavioral-difference",
      children: "13.12.2 Concrete Behavioral Difference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid using_move(T&& arg) {\n    sink(std::move(arg));      // UNCONDITIONAL: Always casts to &&\n}\n\ntemplate <typename T>\nvoid using_forward(T&& arg) {\n    sink(std::forward<T>(arg)); // CONDITIONAL: Only casts to && if original was rvalue\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nvoid sink(std::string& s)  { std::cout << \"lvalue\\n\"; }\nvoid sink(std::string&& s) { std::cout << \"rvalue\\n\"; }\n\ntemplate <typename T>\nvoid move_wrapper(T&& arg) {\n    sink(std::move(arg));      // always rvalue\n}\n\ntemplate <typename T>\nvoid forward_wrapper(T&& arg) {\n    sink(std::forward<T>(arg));  // preserves original category\n}\n\nint main() {\n    std::string s = \"hello\";\n\n    std::cout << \"Called with lvalue:\\n\";\n    move_wrapper(s);        // move says rvalue!\n    forward_wrapper(s);     // forward says lvalue (correct)\n\n    std::cout << \"Called with rvalue:\\n\";\n    move_wrapper(std::move(s));     // move says rvalue (correct)\n    forward_wrapper(std::move(s));  // forward says rvalue (correct)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Called with lvalue:\nrvalue\nlvalue\nCalled with rvalue:\nrvalue\nrvalue\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), " in a forwarding function always discards the lvalue-ness of the original argument → the caller's lvalue will be inadvertently moved from. This is WRONG. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward"
      }), " to preserve category."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1313-performance-analysis-move-vs-copy",
      children: "13.13 Performance Analysis: Move vs Copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13131-complexity-comparison",
      children: "13.13.1 Complexity Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Copy Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speedup Factor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector<int>"
            }), " (n elements)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) allocation + copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) pointer swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n (100x for n=1000)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            }), " (n characters)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) allocation + copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) pointer swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::unique_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not copyable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) pointer copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∞ (copy disallowed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::shared_ptr<T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) atomic increment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) atomic swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::array<int, N>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) (no benefit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x (same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (trivially copyable)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1x (same)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamicBuffer (custom class)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) heap alloc + copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) pointer steal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13132-detailed-performance-benchmark",
      children: "13.13.2 Detailed Performance Benchmark"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <chrono>\n\nclass Timer {\npublic:\n    Timer(const char* name) : name_(name), start_(std::chrono::steady_clock::now()) {}\n    ~Timer() {\n        auto end = std::chrono::steady_clock::now();\n        auto ms = std::chrono::duration_cast<std::chrono::microseconds>(end - start_).count();\n        std::cout << name_ << \": \" << ms << \" us\\n\";\n    }\nprivate:\n    const char* name_;\n    std::chrono::time_point<std::chrono::steady_clock> start_;\n};\n\nclass BigObject {\npublic:\n    BigObject() : data_(new int[1000000]) {\n        for (int i = 0; i < 1000000; ++i) data_[i] = i;\n    }\n    BigObject(const BigObject& other) : data_(new int[1000000]) {\n        std::copy(other.data_, other.data_ + 1000000, data_);\n    }\n    BigObject(BigObject&& other) noexcept : data_(other.data_) {\n        other.data_ = nullptr;\n    }\n    ~BigObject() { delete[] data_; }\nprivate:\n    int* data_;\n};\n\nint main() {\n    BigObject obj;\n\n    {\n        Timer t(\"COPY\");\n        BigObject copy(obj);\n    }\n    {\n        Timer t(\"MOVE\");\n        BigObject moved(std::move(obj));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "COPY: 2500 us\nMOVE: 0 us\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13133-dry-run-trace-copy-vs-move-for-stdstring",
      children: "13.13.3 Dry Run Trace: Copy vs Move for std::string"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::string a = \"Hello, this is a long string that goes on the heap\";\nstd::string b;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["COPY: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b = a;"
        })]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a (source)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b (dest)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Operations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x1000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x0, cap=0, len=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate new buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "malloc(64)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy 52 bytes to new buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memcpy(b.ptr, a.ptr, 52)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x1000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x2000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 malloc, 1 memcpy (52 bytes)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 1 heap allocation + 52-byte memcpy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["MOVE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b = std::move(a);"
        })]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a (source)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b (dest)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Operations"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x1000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x0, cap=0, len=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x1000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x1000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steal pointer (no alloc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=nullptr, cap=0, len=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null source"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=nullptr, cap=0, len=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ptr=0x1000, cap=64, len=52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 allocations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total: 0 heap allocations, 0 memcpy → just 3 pointer assignments"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13134-move-semantics-benefits--performance-comparison",
      children: "13.13.4 Move Semantics Benefits → Performance Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Copy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector<string>"
            }), " reallocation (n=1000)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 heap allocs + 1000 memcpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 pointer swaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1000x fewer bytes copied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            }), " assignment (100KB)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 alloc + 100KB memcpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointer assignments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20,000x faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr"
            }), " passing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 pointer copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables ownership transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "thread"
            }), " creation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 handle copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables async execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "swap(a, b)"
            }), " for large vector"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 deep copies → 3 allocs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointer swaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) → O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1314-edge-cases-and-gotchas",
      children: "13.14 Edge Cases and Gotchas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13141-moving-from-const-objects",
      children: "13.14.1 Moving from Const Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nint main() {\n    const std::string cs = \"I am immutable\";\n\n    // std::move on const object\n    std::string dest = std::move(cs);\n    // std::move(cs) returns const std::string&&\n    // String's move constructor takes string&&, not const string&&\n    // Falls back to copy constructor taking const string&\n    // Result: DEEP COPY, not move!\n\n    std::cout << \"cs unchanged: \" << cs << '\\n';  // still \"I am immutable\"\n    std::cout << \"dest: \" << dest << '\\n';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), " on const objects degrades to copy. The const rvalue reference ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const T&&"
      }), " binds to the copy constructor (", (0,jsx_runtime.jsx)(_components.code, {
        children: "const T&"
      }), "), not the move constructor (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13142-moving-from-a-base-class",
      children: "13.14.2 Moving from a Base Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nstruct Base {\n    virtual ~Base() = default;\n    Base() = default;\n    Base(Base&&) { std::cout << \"Base move\\n\"; }\n    Base(const Base&) { std::cout << \"Base copy\\n\"; }\n};\n\nstruct Derived : Base {\n    Derived() = default;\n    Derived(Derived&&) { std::cout << \"Derived move\\n\"; }\n    Derived(const Derived&) { std::cout << \"Derived copy\\n\"; }\n};\n\nint main() {\n    Derived d;\n\n    // Slicing through move\n    Base b = std::move(d);  // Calls Base move (base part only)\n    // Derived part is sliced off!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Moving a derived object through a base class reference slices the derived portion. Only the base sub-object is moved."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13143-mixed-move-and-copy-in-containers",
      children: "13.14.3 Mixed Move and Copy in Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n\nstruct Logger {\n    Logger(const std::string& n) : name(n) {}\n    Logger(const Logger& o) : name(o.name) {\n        std::cout << \"COPY \" << name << '\\n';\n    }\n    Logger(Logger&& o) noexcept : name(std::move(o.name)) {\n        std::cout << \"MOVE \" << name << '\\n';\n    }\n    std::string name;\n};\n\nint main() {\n    std::vector<Logger> vec;\n    vec.reserve(2);\n\n    Logger a(\"alice\");\n    Logger b(\"bob\");\n\n    std::cout << \"--- push_back lvalue (copy) ---\\n\";\n    vec.push_back(a);\n\n    std::cout << \"--- push_back rvalue (move) ---\\n\";\n    vec.push_back(Logger(\"charlie\"));\n\n    std::cout << \"--- push_back with std::move ---\\n\";\n    vec.push_back(std::move(b));\n\n    std::cout << \"--- After ---\\n\";\n    std::cout << \"a.name: \" << a.name << '\\n';\n    std::cout << \"b.name: \" << b.name << '\\n';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13144-move-operations-on-primitive-types",
      children: "13.14.4 Move Operations on Primitive Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int x = 42;\nint y = std::move(x);  // Same as int y = x; → no benefit\n// x is still 42 (no state change)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " For trivially copyable types (int, double, char, pointers, POD structs), moving is identical to copying. The move constructor is never generated → copying is the fastest possible operation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13145-stdmove-on-auto-return",
      children: "13.14.5 std::move on auto&& Return"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <string>\n\n// BAD: use std::forward, not std::move!\ntemplate <typename T>\nauto bad_return(T&& x) -> decltype(std::move(x)) {\n    return std::move(x);  // Always returns && → steals from lvalues!\n}\n\n// GOOD: preserve category\ntemplate <typename T>\ndecltype(auto) good_return(T&& x) {\n    return std::forward<T>(x);  // preserves original value category\n}\n\nint main() {\n    std::string s = \"hello\";\n    auto u = good_return(s);               // s is still \"hello\"\n    auto v = good_return(std::move(s));    // s is moved\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13146-move-in-return-statement-the-pitfall",
      children: "13.14.6 Move in Return Statement: The Pitfall"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <string>\n\n// BAD: inhibits NRVO\nstd::string bad() {\n    std::string s = \"very long string\";\n    return std::move(s);  // Prevents named return value optimization\n}\n\n// GOOD: allows NRVO or implicit move\nstd::string good() {\n    std::string s = \"very long string\";\n    return s;  // Compiler applies NRVO or implicit move\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++17 rule for return value:"
      }), " If the returned expression is a non-volatile automatic object (not a function parameter), the compiler first tries RVO. If RVO doesn't apply, it treats the return as an rvalue (implicit move). Explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), " prevents RVO."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13147-self-move-assignment",
      children: "13.14.7 Self-Move Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nstruct Weird {\n    std::string s;\n    Weird& operator=(Weird&& other) noexcept {\n        s = std::move(other.s);\n        return *this;\n    }\n};\n\nint main() {\n    Weird w{\"hello\"};\n    w = std::move(w);  // self-move assignment\n    std::cout << w.s << '\\n';  // unspecified but typically \"hello\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lesson:"
      }), " Always guard against self-assignment in move assignment. The standard library guarantees self-move-assignment leaves the object in a valid state, but custom classes must ensure this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1315-move-only-types-and-raii",
      children: "13.15 Move-Only Types and RAII"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13151-what-are-move-only-types",
      children: "13.15.1 What Are Move-Only Types?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move-only types can be moved but not copied. They typically represent unique ownership of a resource."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13152-examples-of-move-only-types",
      children: "13.15.2 Examples of Move-Only Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <memory>\n#include <thread>\n#include <fstream>\n\nint main() {\n    // std::unique_ptr → exclusive ownership\n    auto p = std::make_unique<int>(42);\n    // auto q = p;  // ERROR: copy deleted\n    auto q = std::move(p);  // OK: move transfers ownership\n\n    // std::thread → OS thread handle\n    std::thread t1([]{ std::cout << \"Hello\\n\"; });\n    // std::thread t2 = t1;  // ERROR: copy deleted\n    std::thread t3 = std::move(t1);\n    t3.join();\n\n    // std::fstream → file handle\n    std::ifstream file(\"test.txt\");\n    // std::ifstream file2 = file;  // ERROR: copy deleted\n    std::ifstream file3 = std::move(file);\n\n    // std::future → asynchronous result\n    auto fut = std::async(std::launch::async, []{ return 42; });\n    // auto fut2 = fut;  // ERROR: copy deleted\n    auto fut3 = std::move(fut);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13153-implementing-a-move-only-type",
      children: "13.15.3 Implementing a Move-Only Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass FileDescriptor {\npublic:\n    explicit FileDescriptor(int fd) : fd_(fd) {\n        std::cout << \"Acquired fd: \" << fd_ << '\\n';\n    }\n\n    ~FileDescriptor() {\n        if (fd_ >= 0) {\n            std::cout << \"Closed fd: \" << fd_ << '\\n';\n        }\n    }\n\n    // Move constructor: transfer ownership\n    FileDescriptor(FileDescriptor&& other) noexcept\n        : fd_(other.fd_) {\n        other.fd_ = -1;\n    }\n\n    // Move assignment\n    FileDescriptor& operator=(FileDescriptor&& other) noexcept {\n        if (this != &other) {\n            if (fd_ >= 0) {\n                std::cout << \"Closing old fd: \" << fd_ << '\\n';\n            }\n            fd_ = other.fd_;\n            other.fd_ = -1;\n        }\n        return *this;\n    }\n\n    // Delete copy\n    FileDescriptor(const FileDescriptor&) = delete;\n    FileDescriptor& operator=(const FileDescriptor&) = delete;\n\n    int get() const { return fd_; }\n    bool valid() const { return fd_ >= 0; }\n\nprivate:\n    int fd_;\n};\n\nint main() {\n    FileDescriptor fd1(42);\n    FileDescriptor fd2(std::move(fd1));\n    std::cout << \"fd1 valid: \" << fd1.valid() << '\\n';   // false\n    std::cout << \"fd2 valid: \" << fd2.valid() << '\\n';   // true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1316-real-world-applications",
      children: "13.16 Real-World Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13161-standard-library-containers",
      children: "13.16.1 Standard Library Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All standard library containers use move semantics extensively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <list>\n\nint main() {\n    // std::vector: move during reallocation\n    std::vector<std::string> words;\n    words.reserve(1);\n    words.emplace_back(\"hello\");\n    words.emplace_back(\"world\");  // may reallocate → uses noexcept move\n\n    // std::map: move nodes instead of copying\n    std::map<int, std::string> m;\n    m.insert({1, std::string(1000, 'a')});  // pair is moved in\n\n    // std::list: splice moves pointers\n    std::list<int> l1 = {1, 2, 3};\n    std::list<int> l2 = {4, 5, 6};\n    l1.splice(l1.end(), l2);  // O(1) pointer swap\n\n    // push_back vs emplace_back\n    std::vector<std::string> v;\n    v.reserve(3);\n\n    std::string s = \"very long string\";\n    v.push_back(s);              // copy\n    v.push_back(std::move(s));   // move\n    v.emplace_back(\"direct\");    // constructs in-place → zero copies!\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13162-stdswap-optimized-with-move",
      children: "13.16.2 std::swap Optimized with Move"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n\n// C++98 swap (three copies):\ntemplate <typename T>\nvoid swap_cpp98(T& a, T& b) {\n    T tmp = a;  // copy\n    a = b;      // copy\n    b = tmp;    // copy\n}\n\n// C++11 swap (three moves):\ntemplate <typename T>\nvoid swap_cpp11(T& a, T& b) {\n    T tmp = std::move(a);  // move\n    a = std::move(b);      // move\n    b = std::move(tmp);    // move\n}\n\nint main() {\n    std::string a(1000000, 'x');\n    std::string b(1000000, 'y');\n\n    // C++98 style: 3 deep copies = 3 heap allocations + memcpy\n    // C++11 style: 3 pointer swaps = 0 allocations\n    std::swap(a, b);  // fast: swaps pointers internally\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13163-move-semantics-in-multithreading",
      children: "13.16.3 Move Semantics in Multithreading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <thread>\n#include <vector>\n#include <functional>\n\nclass BigData {\npublic:\n    BigData(int n) : data_(new int[n]), size_(n) {}\n    BigData(BigData&& other) noexcept\n        : data_(other.data_), size_(other.size_) {\n        other.data_ = nullptr;\n        other.size_ = 0;\n    }\n    BigData(const BigData&) = delete;\n    ~BigData() { delete[] data_; }\n\n    void process() const {\n        std::cout << \"Processing \" << size_ << \" elements on thread \"\n                  << std::this_thread::get_id() << '\\n';\n    }\nprivate:\n    int* data_;\n    int size_;\n};\n\nint main() {\n    BigData bd(1000000);\n\n    // Move BigData into a thread (avoids copying 1M ints)\n    std::thread t([](BigData data) {\n        data.process();\n    }, std::move(bd));\n\n    t.join();\n    // bd is now empty (moved-from)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13164-move-semantics-in-directx--opengl-handles",
      children: "13.16.4 Move Semantics in DirectX / OpenGL Handles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game engines and graphics frameworks use move semantics for RAII wrappers around GPU resources:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class OpenGLTexture {\npublic:\n    OpenGLTexture() {\n        glGenTextures(1, &id_);\n    }\n\n    ~OpenGLTexture() {\n        if (id_ != 0) glDeleteTextures(1, &id_);\n    }\n\n    // Move: transfer GPU resource ownership\n    OpenGLTexture(OpenGLTexture&& other) noexcept\n        : id_(other.id_) {\n        other.id_ = 0;\n    }\n\n    OpenGLTexture& operator=(OpenGLTexture&& other) noexcept {\n        if (this != &other) {\n            if (id_ != 0) glDeleteTextures(1, &id_);\n            id_ = other.id_;\n            other.id_ = 0;\n        }\n        return *this;\n    }\n\n    OpenGLTexture(const OpenGLTexture&) = delete;\n    OpenGLTexture& operator=(const OpenGLTexture&) = delete;\n\nprivate:\n    unsigned int id_ = 0;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13165-move-semantics-in-parsers-and-compilers",
      children: "13.16.5 Move Semantics in Parsers and Compilers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <memory>\n\n// Abstract Syntax Tree node → move-heavy for efficiency\nclass ASTNode {\npublic:\n    explicit ASTNode(std::string type) : type_(std::move(type)) {}\n    ASTNode(std::string type, std::vector<ASTNode> children)\n        : type_(std::move(type)), children_(std::move(children)) {}\n\n    void add_child(ASTNode child) {\n        children_.push_back(std::move(child));\n    }\n\nprivate:\n    std::string type_;\n    std::vector<ASTNode> children_;\n};\n\nASTNode parse_expression(const std::string& expr) {\n    ASTNode left(\"integer\");\n    ASTNode right(\"integer\");\n    ASTNode binop(\"+\");\n    binop.add_child(std::move(left));\n    binop.add_child(std::move(right));\n    return binop;  // NRVO or implicit move\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13166-network-buffers",
      children: "13.16.6 Network Buffers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <cstring>\n\nclass NetworkPacket {\npublic:\n    NetworkPacket() = default;\n    explicit NetworkPacket(size_t size)\n        : data_(new char[size]), size_(size) {}\n\n    NetworkPacket(NetworkPacket&& other) noexcept\n        : data_(other.data_), size_(other.size_) {\n        other.data_ = nullptr;\n        other.size_ = 0;\n    }\n\n    NetworkPacket& operator=(NetworkPacket&& other) noexcept {\n        if (this != &other) {\n            delete[] data_;\n            data_ = other.data_;\n            size_ = other.size_;\n            other.data_ = nullptr;\n            other.size_ = 0;\n        }\n        return *this;\n    }\n\n    NetworkPacket(const NetworkPacket&) = delete;\n    NetworkPacket& operator=(const NetworkPacket&) = delete;\n\n    ~NetworkPacket() { delete[] data_; }\n\nprivate:\n    char* data_ = nullptr;\n    size_t size_ = 0;\n};\n\nclass NetworkQueue {\npublic:\n    void push(NetworkPacket pkt) {\n        queue_.push_back(std::move(pkt));\n    }\n\n    NetworkPacket pop() {\n        NetworkPacket pkt = std::move(queue_.front());\n        queue_.erase(queue_.begin());\n        return pkt;\n    }\n\nprivate:\n    std::vector<NetworkPacket> queue_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1317-comparison-tables",
      children: "13.17 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13171-value-categories-deep-comparison",
      children: "13.17.1 Value Categories Deep Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lvalue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prvalue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "xvalue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "glvalue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rvalue"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Has identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Movable from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can take address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x; x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(x)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(x)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(x)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binds to T&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binds to const T&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binds to T&&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polymorphic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "type known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dynamic type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "type known"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13172-stdmove-vs-stdforward-detailed-table",
      children: "13.17.2 std::move vs std::forward Detailed Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "std::forward<T>"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable move on a specific object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve original value category through template"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional: always returns &&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional: only returns && if T is not a reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Template param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (deduced)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required (must specify T)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns for T& lvalue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            }), " (rvalue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            }), " (lvalue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns for T rvalue"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            }), " (rvalue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            }), " (rvalue)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use in forwarding function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Discards lvalue category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Preserves category"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use in move ctor body"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "data_(std::move(other.data_))"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Needless complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be used on const"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, but no-op (copy fallback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implemented as"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<remove_reference_t<T>&&>(t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<T&&>(t)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13173-rule-of-five--member-function-summary",
      children: "13.17.3 Rule of Five → Member Function Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When Called"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "noexcept?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "~T()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object goes out of scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "implicit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T(const T&)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T b = a;"
            }), " (a is lvalue)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T& operator=(const T&)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a = b;"
            }), " (b is lvalue)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move constructor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T(T&&)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T b = std::move(a);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "yes"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Move assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T& operator=(T&&)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a = std::move(b);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "yes"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13174-reference-collapsing-summary-table",
      children: "13.17.4 Reference Collapsing Summary Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Original A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Original B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collapsed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue ref to lvalue ref"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rvalue ref to lvalue ref ⇒ lvalue ref"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lvalue ref to rvalue ref ⇒ lvalue ref"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rvalue ref to rvalue ref ⇒ rvalue ref"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " \"& wins\" → if either reference is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ", the result is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13175-move-semantics-benefits--performance-comparison",
      children: "13.17.5 Move Semantics Benefits → Performance Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Copy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Move"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector<string>"
            }), " reallocation (n=1000)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 heap allocs + 1000 memcpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000 pointer swaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1000x fewer bytes copied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            }), " assignment (100KB)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 alloc + 100KB memcpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointer assignments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20,000x faster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unique_ptr"
            }), " passing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 pointer copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables ownership transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "thread"
            }), " creation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 handle copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables async execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "swap(a, b)"
            }), " for large vector"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 deep copies → 3 allocs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 pointer swaps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) → O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1318-interview-corner",
      children: "13.18 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-stdmove-and-does-it-actually-move-anything",
      children: "Q1: What is std::move and does it actually move anything?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), " does NOT move anything. It is an unconditional cast to an rvalue reference (xvalue). It simply marks an object as \"available to be moved from.\" The actual move happens when a move constructor or move assignment operator receives the rvalue reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// std::move implementation (conceptual):\ntemplate <typename T>\ntypename std::remove_reference<T>::type&&\nmove(T&& t) noexcept {\n    return static_cast<typename std::remove_reference<T>::type&&>(t);\n}\n\n// Usage:\nstd::string s = \"hello\";\nstd::string t = std::move(s);\n// ^ std::move casts s to string&&, but the actual move is the move constructor\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), ", the source object is in a valid but unspecified state → it must still be destructible and assignable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-perfect-forwarding-why-do-we-need-stdforward-instead-of-stdmove",
      children: "Q2: Explain perfect forwarding. Why do we need std::forward instead of std::move?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Perfect forwarding preserves the value category (lvalue vs rvalue) of arguments through template function calls. We need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward"
      }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), ") because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move"
      }), " unconditionally casts to rvalue reference, which would incorrectly treat lvalue arguments as rvalues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid wrapper(T&& arg) {\n    // WRONG: std::move always casts to && → destroys lvalues\n    // sink(std::move(arg));\n\n    // CORRECT: std::forward<T> preserves original category\n    sink(std::forward<T>(arg));\n}\n\nvoid sink(int& x)  { /* lvalue */ }\nvoid sink(int&& x) { /* rvalue */ }\n\nint main() {\n    int a = 10;\n    wrapper(a);          // Should stay lvalue → forward preserves it\n    wrapper(20);         // Should stay rvalue → forward preserves it\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The mechanism: when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T = int&"
      }), " (lvalue argument), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward<int&>"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int&"
      }), " (via reference collapsing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int& && → int&"
      }), "). When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T = int"
      }), " (rvalue argument), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::forward<int>"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int&&"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-t-in-template-context-and-non-template-context",
      children: "Q3: What is the difference between T&& in template context and non-template context?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "template context"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " is deduced (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template<typename T> void f(T&&)"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forwarding reference"
      }), " (formerly \"universal reference\"). It can bind to both lvalues and rvalues through reference collapsing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-template context"
      }), " or where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " is already known (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "template<typename T> class C { void g(T&&); }"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "plain rvalue reference"
      }), ". It can only bind to rvalues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template <typename T>\nvoid f(T&&);        // Forwarding reference: binds to both lvalues and rvalues\n\nvoid g(int&&);      // Rvalue reference: binds only to rvalues\n\ntemplate <typename T>\nclass Wrapper {\n    void h(T&&);    // Rvalue reference (T is known from class)\n};\n\nint main() {\n    int x = 10;\n    f(x);            // OK: T = int&, param collapses to int&\n    f(20);           // OK: T = int, param is int&&\n    // g(x);         // ERROR: int&& cannot bind to lvalue\n    g(20);           // OK\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Also: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto&&"
      }), " is always a forwarding reference because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), " is deduced:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto&& r1 = x;   // int& && → int& (lvalue reference)\nauto&& r2 = 20;  // int&& (rvalue reference)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-why-should-move-constructors-be-noexcept-what-happens-if-they-arent",
      children: "Q4: Why should move constructors be noexcept? What happens if they aren't?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Move constructors should be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "noexcept"
      }), " primarily for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " reallocation. When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " grows its capacity, it needs to transfer existing elements to new memory. It checks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::is_nothrow_move_constructible<T>::value"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " has a noexcept move constructor → vector ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "moves"
        }), " elements (fast, O(1))"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " has a potentially-throwing move constructor → vector ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "copies"
        }), " elements instead (slow, O(n))"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The copy fallback maintains the strong exception guarantee: if a copy throws mid-reallocation, the original elements are intact. If a move throws mid-reallocation, the source elements are already modified, resulting in data loss."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Safe {\n    Safe(Safe&&) noexcept = default;\n};\nstruct Risky {\n    Risky(Risky&&) { /* may throw */ }\n};\n\nstd::vector<Safe> v1;   // Reallocation: uses cheap moves\nstd::vector<Risky> v2;  // Reallocation: uses expensive copies!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bonus:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::move_if_noexcept"
      }), " is the utility that makes this decision at compile time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-the-reference-collapsing-rules-and-why-are-they-important",
      children: "Q5: What are the reference collapsing rules and why are they important?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The reference collapsing rules determine what type results when a reference to a reference appears (which only happens through template instantiation, typedefs, or decltype). The four rules are:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collapsed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory aid:"
      }), " \"If either is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ", the result is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ".\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why they matter:"
      }), " Reference collapsing is the mechanism that makes forwarding references work. When you call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(x)"
      }), " with an lvalue, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " deduces as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int&"
      }), ", and the parameter type ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int& &&"
      }), " collapses to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int&"
      }), " → an lvalue reference. This allows the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&&"
      }), " syntax to bind to both lvalue and rvalue arguments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-difference-between-a-prvalue-and-an-xvalue",
      children: "Q6: What is the difference between a prvalue and an xvalue?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both are rvalues (they can be moved from), but they differ in identity:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "prvalue (pure rvalue)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "xvalue (expiring value)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Has identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f()"
            }), " return by value"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::move(x)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<T&&>(x)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can take address"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary (ends at full-expression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on original object"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A prvalue is a \"pure\" temporary with no name or address. An xvalue has a name/address but is about to expire (its resources can be reused)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The taxonomy: rvalue = prvalue ∪ xvalue; glvalue = lvalue ∪ xvalue."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-rule-of-five-when-should-i-apply-it",
      children: "Q7: What is the Rule of Five? When should I apply it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Rule of Five states that if you define (or =delete) any of the five special member functions, you should consider all of them:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Destructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy assignment operator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move assignment operator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You should apply the Rule of Five when your class manages a resource directly (raw pointer to heap memory, file handle, OS resource, etc.). If your class uses RAII wrappers like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::unique_ptr"
      }), ", follow the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of Zero"
      }), " instead → let the compiler generate all five."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Rule of Zero: uses RAII wrappers\nclass Student {\n    std::string name;\n    std::vector<int> scores;\n    // All five special members are correctly generated\n};\n\n// Rule of Five: manages raw resource\nclass RawBuffer {\n    int* data;\n    size_t size;\npublic:\n    ~RawBuffer();\n    RawBuffer(const RawBuffer&);\n    RawBuffer(RawBuffer&&) noexcept;\n    RawBuffer& operator=(const RawBuffer&);\n    RawBuffer& operator=(RawBuffer&&) noexcept;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-output-of-this-code-and-why",
      children: "Q8: What is the output of this code and why?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <utility>\n\nvoid foo(int&)  { std::cout << \"lvalue \"; }\nvoid foo(int&&) { std::cout << \"rvalue \"; }\n\ntemplate <typename T>\nvoid bar(T&& x) {\n    foo(x);\n    foo(std::move(x));\n    foo(std::forward<T>(x));\n}\n\nint main() {\n    int a = 10;\n    bar(20);\n    std::cout << '\\n';\n    bar(a);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rvalue rvalue rvalue\nlvalue rvalue lvalue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Explanation for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bar(20)"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T deduces as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " (rvalue argument)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is a named parameter → lvalue → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "foo(x)"
        }), " prints \"lvalue\" ... wait, that's wrong."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actually, let me trace carefully:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bar(20)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " (rvalue argument)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " has type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int&&"
        }), " but has a name → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is an lvalue expression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo(x)"
        }), " → lvalue → prints \"lvalue\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo(std::move(x))"
        }), " → rvalue → prints \"rvalue\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo(std::forward<int>(x))"
        }), " → rvalue (forward from rvalue) → prints \"rvalue\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bar(a)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int&"
        }), " (lvalue argument)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " has type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int&"
        }), " (collapsed) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is an lvalue expression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo(x)"
        }), " → lvalue → prints \"lvalue\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo(std::move(x))"
        }), " → rvalue → prints \"rvalue\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "foo(std::forward<int&>(x))"
        }), " → lvalue (forward from lvalue) → prints \"lvalue\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "lvalue rvalue rvalue\nlvalue rvalue lvalue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1319-chapter-quiz",
      children: "13.19 Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-choice",
      children: "Multiple Choice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::move"
          }), " actually do?\nA) Moves the object to a new memory location\nB) Casts its argument to an rvalue reference\nC) Creates a deep copy of the object\nD) Destroys the original object"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** `std::move` unconditionally casts its argument to an rvalue reference. It does not move anything → the move happens in the move constructor or move assignment operator that receives the rvalue reference."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "After a move operation, the source object should be:\nA) In its original state (unchanged)\nB) In a valid but unspecified state\nC) Completely destroyed\nD) In a null state"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The source object is left in a valid but unspecified state → it must be destructible and assignable, but its exact value is unspecified (typically empty/null)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why should move constructors be marked noexcept?\nA) It is required by the C++ standard\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector"
          }), " uses noexcept moves during reallocation; without noexcept, it copies instead\nC) It guarantees faster execution\nD) It prevents compilation errors with rvalue references"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** `std::vector` checks `std::is_nothrow_move_constructible` during reallocation. If the move constructor is noexcept, elements are moved (fast). If not, they are copied (slow) to maintain the strong exception guarantee."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between a forwarding reference ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&&"
          }), " and an rvalue reference ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&&"
          }), "?\nA) They are the same thing\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&&"
          }), " in a deduced context is a forwarding reference; in a non-deduced context it's an rvalue reference\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&&"
          }), " is always an rvalue reference\nD) Forwarding references use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&&&"
          }), " syntax"]
        }), "\n ", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** In a template with deduced `T` (e.g., `template<typename T> void f(T&&)`), `T&&` is a forwarding reference that binds to both lvalues and rvalues. In non-deduced contexts (e.g., `void f(int&&)` or when T is known from the class), it's a plain rvalue reference."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Rule of Five adds which two functions to the Rule of Three?\nA) Default constructor and destructor\nB) Move constructor and move assignment operator\nC) Copy constructor and move constructor\nD) Destructor and copy assignment"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The Rule of Five extends the Rule of Three by adding the move constructor and move assignment operator."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::forward<T>(arg)"
          }), " return when T is deduced as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int&"
          }), "?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int&&"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int&"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "const int&"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** When T is `<int&`, `std::forward<int&>(arg)` returns `<int&` (via reference collapsing: `<int& &&` → `int&`). This preserves the original lvalue category."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is an xvalue?\nA) An expression with no identity that cannot be moved\nB) An expression with identity whose resources can be reused\nC) An expression with no identity that can be moved\nD) A named rvalue reference"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** An xvalue (expiring value) has identity but its resources can be reused because it is about to expire. Examples: `std::move(x)`, `static_cast<T&&>(x)`."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Which of the following is NOT a valid reference collapsing rule?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T& & → T&"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T& && → T&"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&& & → T&&"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&& && → T&&"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** `T&& &` collapses to `T&` (not `T&&`). The rule is: if either reference is `&`, the result is `&`."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What happens if you call ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::move"
          }), " on a const object?\nA) The const is cast away and the object is moved\nB) The move constructor is called but the const object stays unchanged\nC) The copy constructor is called instead of the move constructor\nD) Compilation error"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** `std::move` on a const object produces `const T&&`, which cannot bind to a move constructor (which takes `T&&`). It falls back to the copy constructor (`const T&`), resulting in a deep copy."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is perfect forwarding?\nA) Passing all arguments by reference\nB) Preserving the value category of arguments through template function calls\nC) Forwarding arguments to a function that returns void\nD) Using std::move on all arguments to a function"
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Perfect forwarding preserves the value category (lvalue or rvalue) of each argument as it passes through a template function, using forwarding references and `std::forward`."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "true-or-false",
      children: "True or False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "std::move"
          }), " actually moves the object at runtime."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** `std::move` is just a cast to rvalue reference. The move operation happens in the move constructor or move assignment operator."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A move constructor should always be marked ", (0,jsx_runtime.jsx)(_components.code, {
            children: "noexcept"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**True** (with rare exceptions). Marking move constructors noexcept enables optimizations in `std::vector` and other containers. Only omit noexcept if the move genuinely can throw."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An rvalue reference ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int&&"
          }), " can bind to any ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), " expression."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** An rvalue reference binds only to rvalues (prvalues and xvalues). It cannot bind to lvalues. Use `std::move` to convert an lvalue to an xvalue."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::move"
          }), ", the source object is guaranteed to be empty."]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** The source is in a valid-but-unspecified state. It's typically empty (most implementations do this), but the standard only guarantees it's destructible and assignable."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Copy-and-swap assignment handles both copy and move assignment."
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**True.** When the parameter is taken by value, an lvalue argument triggers copy construction and an rvalue argument triggers move construction. Either way, swap exchanges resources, and the old state is destroyed."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1320-summary",
      children: "13.20 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move semantics, introduced in C++11, fundamentally transformed how C++ programs manage resources by enabling efficient transfer of ownership rather than expensive deep copying."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The core insights are:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Five value categories"
          }), " (lvalue, prvalue, xvalue, glvalue, rvalue) form a precise taxonomy that determines when moves are possible. Only rvalues (prvalues and xvalues) can be moved from."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Rvalue references (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            }), ")"]
          }), " bind exclusively to rvalues, providing the language mechanism to distinguish temporary from persistent objects and enabling move operations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Move constructors and move assignment operators"
          }), " transfer ownership of resources from a source object (left in valid-but-unspecified state) to a destination, typically in O(1) time via pointer swaps rather than O(n) deep copies."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            }), " on move operations"]
          }), " is critical for standard library optimizations → particularly ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector"
          }), " reallocation, which uses moves only when the move constructor is noexcept."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::move"
            })
          }), " is an unconditional cast to rvalue reference → it enables but does not perform the move."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::forward<T>"
            })
          }), " is a conditional cast that preserves the original value category through template functions, enabling the perfect forwarding pattern."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Forwarding references (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T&&"
            }), " in deduced context)"]
          }), " bind to both lvalues and rvalues through the mechanism of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "reference collapsing"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "T& & → T&"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T& && → T&"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&& & → T&"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&& && → T&&"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Rule of Five"
          }), " extends the Rule of Three to include move constructor and move assignment operator. However, the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rule of Zero"
          }), " (relying on RAII wrappers like string, vector, unique_ptr) is the preferred modern approach."]
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
        children: "Draw the C++11 value categories taxonomy. Give two examples of each category."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of this code? Explain why.\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "void f(int&) { std::cout << \"lvalue\\n\"; }\nvoid f(int&&) { std::cout << \"rvalue\\n\"; }\nint main() {\n    int x = 0;\n    f(x);\n    f(0);\n    f(std::move(x));\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto&&"
        }), " always form a forwarding reference?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::move_if_noexcept"
        }), " and when is it used?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::move"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::forward<T>"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain reference collapsing with one example for each of the four rules."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When should you use the Rule of Five vs the Rule of Zero?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return std::move(local);"
        }), " inhibit RVO?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What state is the source object in after a move? Why is this specified the way it is?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::move"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const"
        }), " object? Why?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a move-only dynamically-sized array class"
          }), " with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Default constructor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move constructor (noexcept)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Move assignment (noexcept)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deleted copy constructor and assignment"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "push_back"
            }), " method (simplified)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Track total allocations to verify moves don't reallocate"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a logging wrapper"
          }), " that counts calls to each of the five special member functions. Use it to determine whether ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector"
          }), " uses moves or copies for a given type during reallocation. Test with both noexcept and non-noexcept move constructors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Implement a simple ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::tuple"
            }), "-like class"]
          }), " using variadic templates and perfect forwarding:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "template <typename... Types>\nclass MyTuple {\npublic:\n    template <typename... Args>\n    MyTuple(Args&&... args);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a forwarding function"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "template <typename F, typename... Args> auto invoke(F&& f, Args&&... args)"
          }), " that calls ", (0,jsx_runtime.jsx)(_components.code, {
            children: "f(std::forward<Args>(args)...)"
          }), " and returns the result."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type-erased callable (mini std::function)."
          }), " Implement a class ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Function<Ret(Args...)>"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stores any callable via type erasure"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses perfect forwarding in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator()"
            }), " to forward arguments"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports move construction and assignment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate with lambdas, function pointers, and functors"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Move-optimized ring buffer."
          }), " Implement a ring buffer (circular queue) that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses move semantics to transfer elements in and out"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provides ", (0,jsx_runtime.jsx)(_components.code, {
              children: "push(T&&)"
            }), " for rvalue insertion and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pop()"
            }), " returning ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " via move"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guarantees O(1) push and pop"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles reallocation via noexcept moves when growing capacity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Perfect forwarding delegate."
          }), " Create a delegate system where:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "template <typename T>\nclass Property {\n    std::function<void(const T&)> on_changed;\npublic:\n    template <typename U>\n    void set(U&& value) {\n        // Perfect forward to stored value\n        // Notify on_changed with const reference\n    }\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-mini-projects",
      children: "Real-World Mini-Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build a simple JSON parser"
          }), " that uses move semantics for string and array values to avoid copies during parsing. Parse ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{\"name\": \"Alice\", \"scores\": [95, 87, 92]}"
          }), " and extract values using move operations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a thread-safe packet queue"
          }), " for a networking library using move semantics to transfer packet ownership between threads."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "end-of-chapter-13",
      children: "End of Chapter 13"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/oop-cpp/14-lambdas",
        children: "14-lambdas"
      }), " → lambda expressions, captures, generic lambdas, and functional programming in C++."]
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