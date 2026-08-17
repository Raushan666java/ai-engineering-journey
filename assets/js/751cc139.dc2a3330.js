"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85331],{

/***/ 49932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_06_operator_overloading_md_751_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-06-operator-overloading-md-751.json
const site_docs_courses_oop_cpp_06_operator_overloading_md_751_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/06-operator-overloading","title":"Chapter 6: Operator Overloading","description":"Previous Templates","source":"@site/docs/courses/oop-cpp/06-operator-overloading.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/06-operator-overloading","permalink":"/ai-engineering-journey/oop-cpp/06-operator-overloading","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-operator-overloading","slug":"/oop-cpp/06-operator-overloading","title":"Chapter 6: Operator Overloading","sidebar_label":"Chapter 6: Operator Overloading","sidebar_position":6},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 5: Polymorphism","permalink":"/ai-engineering-journey/oop-cpp/05-polymorphism"},"next":{"title":"Chapter 7: Templates","permalink":"/ai-engineering-journey/oop-cpp/07-templates"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/06-operator-overloading.md


const frontMatter = {
	id: '06-operator-overloading',
	slug: '/oop-cpp/06-operator-overloading',
	title: 'Chapter 6: Operator Overloading',
	sidebar_label: 'Chapter 6: Operator Overloading',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Operator Overloading';

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
  "value": "6.1 Rules and Constraints",
  "id": "61-rules-and-constraints",
  "level": 2
}, {
  "value": "Real-World Analogy --- The Piano Keyboard",
  "id": "real-world-analogy-----the-piano-keyboard",
  "level": 3
}, {
  "value": "Fundamental Rules",
  "id": "fundamental-rules",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Golden Rule",
  "id": "golden-rule",
  "level": 3
}, {
  "value": "6.2 Syntax and Fundamentals",
  "id": "62-syntax-and-fundamentals",
  "level": 2
}, {
  "value": "Real-World Analogy --- Function with a Special Name",
  "id": "real-world-analogy-----function-with-a-special-name",
  "level": 3
}, {
  "value": "Numbered Steps for Writing an Operator Overload",
  "id": "numbered-steps-for-writing-an-operator-overload",
  "level": 3
}, {
  "value": "Generic Syntax Template",
  "id": "generic-syntax-template",
  "level": 3
}, {
  "value": "Example --- Basic Structure",
  "id": "example-----basic-structure",
  "level": 3
}, {
  "value": "Dry Run --- Operator Resolution",
  "id": "dry-run-----operator-resolution",
  "level": 3
}, {
  "value": "6.3 Member vs Non-Member Overloads",
  "id": "63-member-vs-non-member-overloads",
  "level": 2
}, {
  "value": "Real-World Analogy --- Two Doors to the Same Room",
  "id": "real-world-analogy-----two-doors-to-the-same-room",
  "level": 3
}, {
  "value": "Comprehensive Comparison Table",
  "id": "comprehensive-comparison-table",
  "level": 3
}, {
  "value": "Code Example --- Symmetric Conversion",
  "id": "code-example-----symmetric-conversion",
  "level": 3
}, {
  "value": "Decision Flowchart",
  "id": "decision-flowchart",
  "level": 3
}, {
  "value": "Dry Run --- Resolution for Mixed Types",
  "id": "dry-run-----resolution-for-mixed-types",
  "level": 3
}, {
  "value": "6.4 Overloading Arithmetic Operators",
  "id": "64-overloading-arithmetic-operators",
  "level": 2
}, {
  "value": "Real-World Analogy --- A Cash Register",
  "id": "real-world-analogy-----a-cash-register",
  "level": 3
}, {
  "value": "Numbered Steps for Arithmetic Overloads",
  "id": "numbered-steps-for-arithmetic-overloads",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Full Code --- Complex Number Arithmetic",
  "id": "full-code-----complex-number-arithmetic",
  "level": 3
}, {
  "value": "Dry Run --- Operator Resolution for Complex Arithmetic",
  "id": "dry-run-----operator-resolution-for-complex-arithmetic",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "WHY Complexity Matters",
  "id": "why-complexity-matters",
  "level": 3
}, {
  "value": "6.5 Overloading Comparison Operators",
  "id": "65-overloading-comparison-operators",
  "level": 2
}, {
  "value": "Real-World Analogy --- A Weighing Scale",
  "id": "real-world-analogy-----a-weighing-scale",
  "level": 3
}, {
  "value": "Numbered Steps for Comparison Overloads",
  "id": "numbered-steps-for-comparison-overloads",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Full Code --- Fraction with Comparisons",
  "id": "full-code-----fraction-with-comparisons",
  "level": 3
}, {
  "value": "Dry Run --- Comparison of <code>1/2</code> and <code>3/4</code>",
  "id": "dry-run-----comparison-of-12-and-34",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "WHY Derive <code>!=</code> from <code>==</code>",
  "id": "why-derive--from-",
  "level": 3
}, {
  "value": "6.6 Overloading Increment and Decrement",
  "id": "66-overloading-increment-and-decrement",
  "level": 2
}, {
  "value": "Real-World Analogy --- Odometer vs Snapshot",
  "id": "real-world-analogy-----odometer-vs-snapshot",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Full Code --- Custom Iterator-Like Counter",
  "id": "full-code-----custom-iterator-like-counter",
  "level": 3
}, {
  "value": "Dry Run --- Prefix vs Postfix",
  "id": "dry-run-----prefix-vs-postfix",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "WHY Prefer Prefix",
  "id": "why-prefer-prefix",
  "level": 3
}, {
  "value": "6.7 Overloading Stream Operators",
  "id": "67-overloading-stream-operators",
  "level": 2
}, {
  "value": "Real-World Analogy --- A Factory Assembly Line",
  "id": "real-world-analogy-----a-factory-assembly-line",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Full Code --- Date with Stream I/O",
  "id": "full-code-----date-with-stream-io",
  "level": 3
}, {
  "value": "Dry Run --- Stream Operations",
  "id": "dry-run-----stream-operations",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "WHY Stream Operators Must Be Non-Members",
  "id": "why-stream-operators-must-be-non-members",
  "level": 3
}, {
  "value": "6.8 Overloading Subscript <code>[]</code>",
  "id": "68-overloading-subscript-",
  "level": 2
}, {
  "value": "Real-World Analogy --- A Mailbox Array",
  "id": "real-world-analogy-----a-mailbox-array",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Full Code --- SafeArray with Subscript",
  "id": "full-code-----safearray-with-subscript",
  "level": 3
}, {
  "value": "Dry Run --- Subscript Operator Resolution",
  "id": "dry-run-----subscript-operator-resolution",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "WHY Return a Reference",
  "id": "why-return-a-reference",
  "level": 3
}, {
  "value": "6.9 Overloading Function Call <code>()</code>",
  "id": "69-overloading-function-call-",
  "level": 2
}, {
  "value": "Real-World Analogy --- A Coffee Machine with Presets",
  "id": "real-world-analogy-----a-coffee-machine-with-presets",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Full Code --- Functor Examples",
  "id": "full-code-----functor-examples",
  "level": 3
}, {
  "value": "Dry Run --- Adder Functor",
  "id": "dry-run-----adder-functor",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "WHY Functors Over Function Pointers",
  "id": "why-functors-over-function-pointers",
  "level": 3
}, {
  "value": "6.10 Type Conversion Operators",
  "id": "610-type-conversion-operators",
  "level": 2
}, {
  "value": "Real-World Analogy --- A Universal Adapter",
  "id": "real-world-analogy-----a-universal-adapter",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-4",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Full Code --- Safe Conversions",
  "id": "full-code-----safe-conversions",
  "level": 3
}, {
  "value": "Dry Run --- Conversion Resolution",
  "id": "dry-run-----conversion-resolution",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "WHY Mark <code>operator bool()</code> Explicit",
  "id": "why-mark-operator-bool-explicit",
  "level": 3
}, {
  "value": "6.11 Overloading Assignment <code>=</code> and <code>new</code>/<code>delete</code>",
  "id": "611-overloading-assignment--and-newdelete",
  "level": 2
}, {
  "value": "6.11.1 Assignment Operator <code>=</code>",
  "id": "6111-assignment-operator-",
  "level": 3
}, {
  "value": "Real-World Analogy --- Copying a Document",
  "id": "real-world-analogy-----copying-a-document",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 3
}, {
  "value": "Full Code --- String with Assignment",
  "id": "full-code-----string-with-assignment",
  "level": 3
}, {
  "value": "6.11.2 Overloading <code>new</code> and <code>delete</code>",
  "id": "6112-overloading-new-and-delete",
  "level": 3
}, {
  "value": "Real-World Analogy --- A Custom Locker System",
  "id": "real-world-analogy-----a-custom-locker-system",
  "level": 3
}, {
  "value": "Numbered Steps",
  "id": "numbered-steps-6",
  "level": 3
}, {
  "value": "Full Code --- Class-Specific Allocator",
  "id": "full-code-----class-specific-allocator",
  "level": 3
}, {
  "value": "Dry Run --- Assignment Operator",
  "id": "dry-run-----assignment-operator",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 3
}, {
  "value": "WHY Assignment Returns <code>T&amp;</code>",
  "id": "why-assignment-returns-t",
  "level": 3
}, {
  "value": "Returning a reference enables <code>a = b = c</code>, which evaluates right-to-left: <code>b = c</code> returns <code>T&amp;</code> referring to <code>b</code>, then <code>a = b</code>. Returning by value would require an extra copy. Returning <code>void</code> would break the pattern entirely.",
  "id": "returning-a-reference-enables-a--b--c-which-evaluates-right-to-left-b--c-returns-t-referring-to-b-then-a--b-returning-by-value-would-require-an-extra-copy-returning-void-would-break-the-pattern-entirely",
  "level": 2
}, {
  "value": "6.12 Operator Overloading Limitations",
  "id": "612-operator-overloading-limitations",
  "level": 2
}, {
  "value": "Real-World Analogy --- Traffic Rules",
  "id": "real-world-analogy-----traffic-rules",
  "level": 3
}, {
  "value": "Numbered Limitations",
  "id": "numbered-limitations",
  "level": 3
}, {
  "value": "The Short-Circuit Trap",
  "id": "the-short-circuit-trap",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-9",
  "level": 3
}, {
  "value": "6.13 Operators That Cannot Be Overloaded",
  "id": "613-operators-that-cannot-be-overloaded",
  "level": 2
}, {
  "value": "Comprehensive Table with Reasons",
  "id": "comprehensive-table-with-reasons",
  "level": 3
}, {
  "value": "Deep Reasoning for Each",
  "id": "deep-reasoning-for-each",
  "level": 3
}, {
  "value": "<code>::</code> --- Scope Resolution",
  "id": "-----scope-resolution",
  "level": 4
}, {
  "value": "<code>.</code> --- Direct Member Access",
  "id": "-----direct-member-access",
  "level": 4
}, {
  "value": "<code>?:</code> --- Ternary Conditional",
  "id": "-----ternary-conditional",
  "level": 4
}, {
  "value": "<code>sizeof</code> --- Size Of",
  "id": "sizeof-----size-of",
  "level": 4
}, {
  "value": "Code Example --- Dangerous Toys (If These Could Be Overloaded)",
  "id": "code-example-----dangerous-toys-if-these-could-be-overloaded",
  "level": 3
}, {
  "value": "When Attempting to Overload",
  "id": "when-attempting-to-overload",
  "level": 3
}, {
  "value": "6.14 Return Type Conventions",
  "id": "614-return-type-conventions",
  "level": 2
}, {
  "value": "Comprehensive Table",
  "id": "comprehensive-table",
  "level": 3
}, {
  "value": "Why These Conventions Exist",
  "id": "why-these-conventions-exist",
  "level": 3
}, {
  "value": "Anti-Pattern --- Wrong Return Type",
  "id": "anti-pattern-----wrong-return-type",
  "level": 3
}, {
  "value": "6.15 Operator Overloading Guidelines",
  "id": "615-operator-overloading-guidelines",
  "level": 2
}, {
  "value": "Guideline 1 --- When in Doubt, Do as the Ints Do",
  "id": "guideline-1-----when-in-doubt-do-as-the-ints-do",
  "level": 3
}, {
  "value": "Guideline 2 --- Implement <code>+</code> in Terms of <code>+=</code>",
  "id": "guideline-2-----implement--in-terms-of-",
  "level": 3
}, {
  "value": "Guideline 3 --- Provide <code>const</code> and Non-<code>const</code> Overloads",
  "id": "guideline-3-----provide-const-and-non-const-overloads",
  "level": 3
}, {
  "value": "Guideline 4 --- Prefer Non-Member for Symmetric Operators",
  "id": "guideline-4-----prefer-non-member-for-symmetric-operators",
  "level": 3
}, {
  "value": "Guideline 5 --- Never Overload <code>&amp;&amp;</code>, <code>||</code>, or <code>,</code>",
  "id": "guideline-5-----never-overload---or-",
  "level": 3
}, {
  "value": "Guideline 6 --- Always Handle Self-Assignment",
  "id": "guideline-6-----always-handle-self-assignment",
  "level": 3
}, {
  "value": "Guideline 7 --- Keep <code>operator bool()</code> Explicit",
  "id": "guideline-7-----keep-operator-bool-explicit",
  "level": 3
}, {
  "value": "Guideline 8 --- Don&#39;t Overload Operators for Unrelated Semantics",
  "id": "guideline-8-----dont-overload-operators-for-unrelated-semantics",
  "level": 3
}, {
  "value": "Guideline 9 --- Provide <code>operator!=</code> Alongside <code>operator==</code>",
  "id": "guideline-9-----provide-operator-alongside-operator",
  "level": 3
}, {
  "value": "Guideline 10 --- Document Non-Standard Semantics",
  "id": "guideline-10-----document-non-standard-semantics",
  "level": 3
}, {
  "value": "6.16 Applications in Real Systems",
  "id": "616-applications-in-real-systems",
  "level": 2
}, {
  "value": "6.16.1 <code>std::string</code> --- The Reference Model",
  "id": "6161-stdstring-----the-reference-model",
  "level": 3
}, {
  "value": "Internal Complexity",
  "id": "internal-complexity",
  "level": 4
}, {
  "value": "6.16.2 <code>std::complex</code> --- Mathematical Precision",
  "id": "6162-stdcomplex-----mathematical-precision",
  "level": 3
}, {
  "value": "Why <code>std::complex</code> Overloads All Arithmetic",
  "id": "why-stdcomplex-overloads-all-arithmetic",
  "level": 4
}, {
  "value": "6.16.3 <code>std::vector</code> --- Container Access",
  "id": "6163-stdvector-----container-access",
  "level": 3
}, {
  "value": "Iterator Operator Overloading",
  "id": "iterator-operator-overloading",
  "level": 4
}, {
  "value": "Comparison Table --- std::string vs std::complex vs std::vector",
  "id": "comparison-table-----stdstring-vs-stdcomplex-vs-stdvector",
  "level": 3
}, {
  "value": "Why These Types Succeed",
  "id": "why-these-types-succeed",
  "level": 3
}, {
  "value": "6.17 Interview Corner",
  "id": "617-interview-corner",
  "level": 2
}, {
  "value": "Q1: When should you implement an operator as a member function vs a non-member function?",
  "id": "q1-when-should-you-implement-an-operator-as-a-member-function-vs-a-non-member-function",
  "level": 3
}, {
  "value": "Q2: Why are <code>operator&lt;&lt;</code> and <code>operator&gt;&gt;</code> for streams always implemented as non-member functions?",
  "id": "q2-why-are-operator-and-operator-for-streams-always-implemented-as-non-member-functions",
  "level": 3
}, {
  "value": "Q3: Explain the difference between prefix and postfix <code>++</code> in terms of implementation and performance.",
  "id": "q3-explain-the-difference-between-prefix-and-postfix--in-terms-of-implementation-and-performance",
  "level": 3
}, {
  "value": "Q4: What is the copy-and-swap idiom and why is it useful for <code>operator=</code>?",
  "id": "q4-what-is-the-copy-and-swap-idiom-and-why-is-it-useful-for-operator",
  "level": 3
}, {
  "value": "Q5: How do you decide which operators to overload for a custom class?",
  "id": "q5-how-do-you-decide-which-operators-to-overload-for-a-custom-class",
  "level": 3
}, {
  "value": "Q6: What is the problem with overloading <code>operator&amp;</code> (address-of)?",
  "id": "q6-what-is-the-problem-with-overloading-operator-address-of",
  "level": 3
}, {
  "value": "Q7: How does C++20&#39;s <code>&lt;=&gt;</code> (spaceship operator) change operator overloading?",
  "id": "q7-how-does-c20s--spaceship-operator-change-operator-overloading",
  "level": 3
}, {
  "value": "Q8: How does operator overloading affect move semantics?",
  "id": "q8-how-does-operator-overloading-affect-move-semantics",
  "level": 3
}, {
  "value": "Q9: Why must <code>operator[]</code> return a reference? What happens if it returns by value?",
  "id": "q9-why-must-operator-return-a-reference-what-happens-if-it-returns-by-value",
  "level": 3
}, {
  "value": "Q10: Should you overload <code>operator&amp;&amp;</code> and <code>operator||</code>? Why or why not?",
  "id": "q10-should-you-overload-operator-and-operator-why-or-why-not",
  "level": 3
}, {
  "value": "6.18 Concept Comparison Tables",
  "id": "618-concept-comparison-tables",
  "level": 2
}, {
  "value": "Member vs Non-Member Decision Matrix",
  "id": "member-vs-non-member-decision-matrix",
  "level": 3
}, {
  "value": "Return Type Quick Reference",
  "id": "return-type-quick-reference",
  "level": 3
}, {
  "value": "Can&#39;t Overload Summary",
  "id": "cant-overload-summary",
  "level": 3
}, {
  "value": "6.19 Summary",
  "id": "619-summary",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 3
}, {
  "value": "Why Operator Overloading Matters",
  "id": "why-operator-overloading-matters",
  "level": 3
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-6-operator-overloading",
        children: "Chapter 6: Operator Overloading"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/05-polymorphism",
          children: "Polymorphism"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/07-templates",
          children: "Templates"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the rules and constraints of C++ operator overloading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement binary and unary operators as member and non-member functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between member and non-member overloads with rationale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overload arithmetic, comparison, increment/decrement, and stream operators"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement subscript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[]"
        }), ", function call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "()"
        }), ", and type conversion operators"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply correct return type conventions for each operator category"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify which operators cannot be overloaded and why"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze operator resolution through dry-run trace tables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply operator overloading in real-world systems like std::string, std::complex, std::vector"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on operator overloading best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Rules & Constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed precedence, associativity, arity; >=1 user-defined operand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"When in doubt, do as the ints do\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member vs Non-Member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*this as left operand vs explicit parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-member when left operand is not class type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Arithmetic (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+ - * /"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Return by value, implement via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), " for efficiency"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Binary ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), " should not be a friend unless needed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Comparison (", (0,jsx_runtime.jsx)(_components.code, {
              children: "== != < <= > >="
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Define ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), ", derive the rest"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Consistent semantics for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::find"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increment/Decrement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix returns ref; postfix returns copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer prefix --- it avoids a copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stream (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<< >>"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return stream reference for chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always non-member; often friend"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Subscript ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must return reference for assignment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i]=v"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide const and non-const overloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Function Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables functors and lambdas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store state for configurable behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type Conversion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator T()"
            }), " for implicit; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "explicit"
            }), " to prevent narrowing"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always mark ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator bool()"
            }), " explicit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-class allocation control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely needed; use for custom memory pools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can't Overload"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "::"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".*"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typeid"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast"
            }), " etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member access and type identity stay built-in"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Rules & Constraints] --> B[Member vs Non-Member]\n    B --> C[Arithmetic + - * /]\n    B --> D[Comparison == != < <= > >=]\n    B --> E[Increment ++ --]\n    B --> F[Stream << >>]\n    B --> G[Subscript []]\n    B --> H[Function Call ()]\n    B --> I[Type Conversion]\n    B --> J[Assignment = new delete]\n    B --> K[Limitations & Guidelines]\n    K --> L[Real-World Applications]\n    L --> M[Interview Corner]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-rules-and-constraints",
      children: "6.1 Rules and Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Operator overloading extends C++ expression syntax to user-defined types while preserving the language's fixed precedence, associativity, and arity rules."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----the-piano-keyboard",
      children: "Real-World Analogy --- The Piano Keyboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of C++ operators like the keys on a piano. The key labeled \"middle C\" always plays middle C --- its position, feel, and behavior are fixed by the instrument's design. Operator overloading is like a synthesizer that changes ", (0,jsx_runtime.jsx)(_components.em, {
        children: "what sound"
      }), " that key produces while keeping the key itself in the same place. You cannot:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move the key to a different position on the keyboard (change precedence)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make the key play two notes at once by pressing it alone (change arity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a new key between two existing ones (invent a new operator)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fundamental-rules",
      children: "Fundamental Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 1 --- At Least One User-Defined Operand"
      }), "\nYou cannot redefine operators on built-in types alone. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int + int"
      }), " is forever ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int + int"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 2 --- Fixed Precedence and Associativity"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b * c"
      }), " always multiplies before adding, regardless of what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " mean for your type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 3 --- Fixed Arity"
      }), "\nUnary operators stay unary; binary operators stay binary. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " is the only ternary operator and cannot be overloaded."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 4 --- No New Operators"
      }), "\nYou cannot create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**"
      }), " for exponentiation, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<>"
      }), " for spaceship, or any novel symbol."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule 5 --- Some Operators Are Off-Limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "::"
      }), " (scope resolution), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), " (member access), ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".*"
      }), " (member pointer access), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?:"
      }), " (ternary conditional), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeid"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static_cast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dynamic_cast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const_cast"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reinterpret_cast"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alignof"
      }), " cannot be overloaded."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overload resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = candidate functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler enumerates viable overloads and selects best match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per operator call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inlined if definition is visible; no runtime dispatch unless virtual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cognitive cost for reader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) where n = number of overloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each overload is a new contract the reader must learn"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "golden-rule",
      children: "Golden Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"When in doubt, do as the ints do.\""
        }), " --- If your overloaded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " does something surprising, you have violated the Principle of Least Surprise. An operator should mean what users expect it to mean based on its built-in behavior."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-syntax-and-fundamentals",
      children: "6.2 Syntax and Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----function-with-a-special-name",
      children: "Real-World Analogy --- Function with a Special Name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An operator is a function whose name is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator"
      }), " followed by the operator symbol. Think of it as a function that gets called with a special syntax. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b"
      }), " is really ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a.operator+(b)"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator+(a, b)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-writing-an-operator-overload",
      children: "Numbered Steps for Writing an Operator Overload"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the operator"
        }), " you want to overload (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decide member or non-member"
        }), ": If the operator must modify left operand or access its private data, prefer member. If left operand is not your class type, non-member is required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose the correct signature"
        }), ": Match arity and return type conventions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement the logic"
        }), ": Write the body using public interface or friend access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test with natural syntax"
        }), ": Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a + b"
        }), " compiles and produces correct results"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generic-syntax-template",
      children: "Generic Syntax Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Member function form\nReturnType operator@(ParameterList) { ... }\n\n// Non-member function form\nReturnType operator@(Param1, Param2) { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@"
      }), " is the operator symbol (+, -, ==, etc.) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ParameterList"
      }), " has one fewer parameter than the operator's arity (the left operand is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " for member functions)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-----basic-structure",
      children: "Example --- Basic Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Point {\npublic:\n    Point(int x = 0, int y = 0) : x_(x), y_(y) {}\n\n    // Member binary operator: p1 + p2\n    Point operator+(const Point& rhs) const {\n        return Point(x_ + rhs.x_, y_ + rhs.y_);\n    }\n\n    // Member compound assignment: p1 += p2\n    Point& operator+=(const Point& rhs) {\n        x_ += rhs.x_;\n        y_ += rhs.y_;\n        return *this;\n    }\n\n    // Non-member friend for stream output\n    friend std::ostream& operator<<(std::ostream& os, const Point& p) {\n        return os << \"(\" << p.x_ << \", \" << p.y_ << \")\";\n    }\n\nprivate:\n    int x_, y_;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(3, 5)\n(4, 7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----operator-resolution",
      children: "Dry Run --- Operator Resolution"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolved As"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p1 + p2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p1.operator+(p2)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Point"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member function, rhs as parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p1 += p2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p1.operator+=(p2)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Point&"
            }), " by reference"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Modifies ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), ", returns self"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout << p1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator<<(std::cout, p1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::ostream&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-member, friend access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-member-vs-non-member-overloads",
      children: "6.3 Member vs Non-Member Overloads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Choose member when the left operand is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        }), " and the operator modifies the object; choose non-member when the left operand is not the class type or symmetric conversion is desired."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----two-doors-to-the-same-room",
      children: "Real-World Analogy --- Two Doors to the Same Room"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A member operator is like a door in your own house --- you walk through it directly (your class, your control). A non-member operator is like a door in a shared building --- you need a key (friend declaration) to access private rooms."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-comparison-table",
      children: "Comprehensive Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Member Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Member Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T::operator@(rhs)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator@(lhs, rhs)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left operand"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), " (implicit)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First explicit parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Required for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (language mandates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compound assignment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (convention)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible but unusual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (only form allowed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed-type operations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Left operand must be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both operands can convert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetric promotion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left operand cannot convert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both operands convert equally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private member access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Direct access to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this->priv"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Requires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "friend"
            }), " declaration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (if declared virtual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arity minus 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full arity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-----symmetric-conversion",
      children: "Code Example --- Symmetric Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Meter {\npublic:\n    explicit Meter(double m) : value_(m) {}\n    double value() const { return value_; }\n\n    // Member: left must be Meter\n    Meter operator+(const Meter& rhs) const {\n        return Meter(value_ + rhs.value_);\n    }\n\nprivate:\n    double value_;\n};\n\n// Non-member: allows double + Meter as well as Meter + Meter\nMeter operator+(double lhs, const Meter& rhs) {\n    return Meter(lhs + rhs.value());\n}\n\nMeter operator+(const Meter& lhs, double rhs) {\n    return Meter(lhs.value() + rhs);\n}\n\nint main() {\n    Meter m1(10), m2(20);\n    Meter m3 = m1 + m2;        // OK: member\n    Meter m4 = 5.0 + m1;       // OK: non-member\n    Meter m5 = m1 + 3.0;       // OK: non-member\n    std::cout << m3.value() << \" \" << m4.value() << \" \" << m5.value() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "30 15 13\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-flowchart",
      children: "Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Is the operator one of =, (), [], ->, T() ?\n    -> YES -> Must be member\n    -> NO\nDoes the operator modify the left operand?\n    -> YES -> Prefer member (e.g., +=, -=, ++)\n    -> NO\nIs the left operand a stream or other non-class type?\n    -> YES -> Must be non-member (e.g., <<, >>)\n    -> NO\nDo you want symmetric conversion on both sides?\n    -> YES -> Use non-member\n    -> NO\nUse member (simpler, direct access)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----resolution-for-mixed-types",
      children: "Dry Run --- Resolution for Mixed Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Candidates Considered"
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
              children: "m1 + m2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Meter::operator+(Meter)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+(Meter, Meter)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match, no conversion needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5.0 + m1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+(double, Meter)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only viable; no member exists for double"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "m1 + 3.0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Meter::operator+(Meter)"
            }), " requires conversion 3.0->Meter; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+(Meter, double)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact match on rhs avoids conversion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-overloading-arithmetic-operators",
      children: "6.4 Overloading Arithmetic Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Implement compound assignment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+="
        }), " as a member, then implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " in terms of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+="
        }), " for DRY code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-cash-register",
      children: "Real-World Analogy --- A Cash Register"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adding two prices on a cash register (", (0,jsx_runtime.jsx)(_components.code, {
        children: "item1 + item2"
      }), ") produces a new total without modifying either item. Adding an item to an existing total (", (0,jsx_runtime.jsx)(_components.code, {
        children: "total += item"
      }), ") modifies the register's running total. The first creates a new value; the second changes the existing one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-arithmetic-overloads",
      children: "Numbered Steps for Arithmetic Overloads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide which operators are meaningful (+, -, *, /, %)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement compound assignment versions as members returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement binary versions as non-members returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " (by value)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make binary versions call the compound versions to avoid duplication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For mixed-type operations, provide overloads for both orderings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n    member operator+=(T rhs) -> T&:\n        this.data += rhs.data\n        return this\n\n    member operator-=(T rhs) -> T&:\n        this.data -= rhs.data\n        return this\n}\n\n// Non-member binary (calls compound)\nnon-member operator+(T lhs, T rhs) -> T:\n    temp = lhs      // copy\n    temp += rhs     // reuse compound\n    return temp\n\nnon-member operator-(T lhs, T rhs) -> T:\n    temp = lhs\n    temp -= rhs\n    return temp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----complex-number-arithmetic",
      children: "Full Code --- Complex Number Arithmetic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nclass Complex {\npublic:\n    Complex(double r = 0, double i = 0) : real_(r), imag_(i) {}\n\n    // Compound assignment --- members\n    Complex& operator+=(const Complex& rhs) {\n        real_ += rhs.real_;\n        imag_ += rhs.imag_;\n        return *this;\n    }\n\n    Complex& operator-=(const Complex& rhs) {\n        real_ -= rhs.real_;\n        imag_ -= rhs.imag_;\n        return *this;\n    }\n\n    Complex& operator*=(const Complex& rhs) {\n        double r = real_ * rhs.real_ - imag_ * rhs.imag_;\n        double i = real_ * rhs.imag_ + imag_ * rhs.real_;\n        real_ = r;\n        imag_ = i;\n        return *this;\n    }\n\n    Complex& operator/=(const Complex& rhs) {\n        double denom = rhs.real_ * rhs.real_ + rhs.imag_ * rhs.imag_;\n        double r = (real_ * rhs.real_ + imag_ * rhs.imag_) / denom;\n        double i = (imag_ * rhs.real_ - real_ * rhs.imag_) / denom;\n        real_ = r;\n        imag_ = i;\n        return *this;\n    }\n\n    double real() const { return real_; }\n    double imag() const { return imag_; }\n\nprivate:\n    double real_, imag_;\n};\n\n// Binary arithmetic --- non-members calling compound\nComplex operator+(Complex lhs, const Complex& rhs) {\n    lhs += rhs;    // calls operator+=\n    return lhs;\n}\n\nComplex operator-(Complex lhs, const Complex& rhs) {\n    lhs -= rhs;\n    return lhs;\n}\n\nComplex operator*(Complex lhs, const Complex& rhs) {\n    lhs *= rhs;\n    return lhs;\n}\n\nComplex operator/(Complex lhs, const Complex& rhs) {\n    lhs /= rhs;\n    return lhs;\n}\n\n// Unary minus\nComplex operator-(const Complex& c) {\n    return Complex(-c.real(), -c.imag());\n}\n\nstd::ostream& operator<<(std::ostream& os, const Complex& c) {\n    os << c.real();\n    if (c.imag() >= 0) os << \"+\" << c.imag() << \"i\";\n    else os << \"-\" << -c.imag() << \"i\";\n    return os;\n}\n\nint main() {\n    Complex a(3, 4), b(1, 2);\n    std::cout << \"a = \" << a << \"\\n\";\n    std::cout << \"b = \" << b << \"\\n\";\n    std::cout << \"a + b = \" << (a + b) << \"\\n\";\n    std::cout << \"a - b = \" << (a - b) << \"\\n\";\n    std::cout << \"a * b = \" << (a * b) << \"\\n\";\n    std::cout << \"a / b = \" << (a / b) << \"\\n\";\n    std::cout << \"-a = \" << (-a) << \"\\n\";\n\n    // Compound assignment modifies in place\n    Complex c(1, 1);\n    c += Complex(2, 2);\n    std::cout << \"c after +=: \" << c << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a = 3+4i\nb = 1+2i\na + b = 4+6i\na - b = 2+2i\na * b = -5+10i\na / b = 2.2-0.4i\n-a = -3-4i\nc after +=: 3+3i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----operator-resolution-for-complex-arithmetic",
      children: "Dry Run --- Operator Resolution for Complex Arithmetic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolved As"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intermediate State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+(a, b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lhs = copy of a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inside ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lhs += b"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lhs.operator+=(b)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lhs.real_ = 3+1=4, lhs.imag_ = 4+2=6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns lhs (by value)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex(4, 6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator<<(cout, result)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "prints \"4+6i\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c += Complex(2,2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "c.operator+=(Complex(2,2))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c.real_ = 1+2=3, c.imag_ = 1+2=3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator+"
            }), " (binary)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) for container-like types; O(1) for simple types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra (temporary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy + compound; copy dominates for large objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator+="
            }), " (compound)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) or O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modifies in place; no extra allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator*"
            }), " (complex multiply)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 multiplications, 2 additions, no branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator/"
            }), " (complex division)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 multiplications, 3 additions, 1 division"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-complexity-matters",
      children: "WHY Complexity Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Always prefer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+="
      }), " over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " when modifying an existing object. The expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a = a + b"
      }), " creates a temporary (costly for large types like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), "), while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a += b"
      }), " modifies directly. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " allocates a new buffer (O(n) memory), while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+="
      }), " may reuse existing capacity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-overloading-comparison-operators",
      children: "6.5 Overloading Comparison Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), ", then derive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">="
        }), " from them --- C++20 spaceship ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<=>"
        }), " simplifies this further."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-weighing-scale",
      children: "Real-World Analogy --- A Weighing Scale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A weighing scale compares two objects and tells you their relationship: equal weight, heavier, lighter, heavier-or-equal, lighter-or-equal, or not-equal. Comparison operators are the six ways to read this relationship."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-comparison-overloads",
      children: "Numbered Steps for Comparison Overloads"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator=="
        }), " --- the primary equality check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator<"
        }), " --- the primary ordering check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!="
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return !(lhs == rhs);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derive ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return rhs < lhs;"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<="
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return !(rhs < lhs);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Derive ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">="
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return !(lhs < rhs);"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(C++17) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), " for all six; (C++20) Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<=>"
        }), " for all six"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "non-member operator==(T lhs, T rhs) -> bool:\n    return lhs.field1 == rhs.field1 AND lhs.field2 == rhs.field2\n\nnon-member operator<(T lhs, T rhs) -> bool:\n    if lhs.field1 != rhs.field1:\n        return lhs.field1 < rhs.field1\n    return lhs.field2 < rhs.field2\n\nnon-member operator!=(T lhs, T rhs) -> bool:\n    return NOT (lhs == rhs)\n\nnon-member operator>(T lhs, T rhs) -> bool:\n    return rhs < lhs\n\nnon-member operator<=(T lhs, T rhs) -> bool:\n    return NOT (rhs < lhs)\n\nnon-member operator>=(T lhs, T rhs) -> bool:\n    return NOT (lhs < rhs)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----fraction-with-comparisons",
      children: "Full Code --- Fraction with Comparisons"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <numeric> // for gcd (C++17)\n\nclass Fraction {\npublic:\n    Fraction(int num = 0, int den = 1)\n        : num_(num), den_(den) {\n        if (den_ < 0) { num_ = -num_; den_ = -den_; }\n        normalize();\n    }\n\n    int num() const { return num_; }\n    int den() const { return den_; }\n\nprivate:\n    void normalize() {\n        int g = std::gcd(std::abs(num_), std::abs(den_));\n        num_ /= g;\n        den_ /= g;\n    }\n\n    int num_, den_;\n};\n\n// Equality\nbool operator==(const Fraction& lhs, const Fraction& rhs) {\n    return lhs.num() == rhs.num() && lhs.den() == rhs.den();\n}\n\n// Less-than (for sorting)\nbool operator<(const Fraction& lhs, const Fraction& rhs) {\n    return lhs.num() * rhs.den() < rhs.num() * lhs.den();\n}\n\n// Derived from ==\nbool operator!=(const Fraction& lhs, const Fraction& rhs) {\n    return !(lhs == rhs);\n}\n\n// Derived from <\nbool operator>(const Fraction& lhs, const Fraction& rhs) {\n    return rhs < lhs;\n}\n\nbool operator<=(const Fraction& lhs, const Fraction& rhs) {\n    return !(rhs < lhs);\n}\n\nbool operator>=(const Fraction& lhs, const Fraction& rhs) {\n    return !(lhs < rhs);\n}\n\nstd::ostream& operator<<(std::ostream& os, const Fraction& f) {\n    return os << f.num() << \"/\" << f.den();\n}\n\nint main() {\n    Fraction f1(1, 2), f2(3, 4), f3(2, 4);\n\n    std::cout << std::boolalpha;\n    std::cout << f1 << \" == \" << f3 << \" ? \" << (f1 == f3) << \"\\n\";\n    std::cout << f1 << \" != \" << f2 << \" ? \" << (f1 != f2) << \"\\n\";\n    std::cout << f1 << \" < \"  << f2 << \" ? \" << (f1 < f2)  << \"\\n\";\n    std::cout << f2 << \" > \"  << f1 << \" ? \" << (f2 > f1)  << \"\\n\";\n    std::cout << f1 << \" <= \" << f3 << \" ? \" << (f1 <= f3) << \"\\n\";\n    std::cout << f2 << \" >= \" << f3 << \" ? \" << (f2 >= f3) << \"\\n\";\n\n    // Sorting\n    Fraction arr[] = {{3,4}, {1,3}, {1,2}, {5,6}};\n    std::sort(std::begin(arr), std::end(arr));\n    std::cout << \"Sorted: \";\n    for (const auto& f : arr) std::cout << f << \" \";\n    std::cout << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1/2 == 2/4 ? true\n1/2 != 3/4 ? true\n1/2 < 3/4 ? true\n3/4 > 1/2 ? true\n1/2 <= 2/4 ? true\n3/4 >= 2/4 ? true\nSorted: 1/3 1/2 3/4 5/6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-----comparison-of-12-and-34",
      children: ["Dry Run --- Comparison of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1/2"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3/4"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolved As"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
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
              children: "f1 == f3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator==(f1, f3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "num=1==2? No; actually 1/2 vs 2/4 normalized = 1/2 == 1/2 -> true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f1 < f2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator<(f1, f2)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1", (0,jsx_runtime.jsx)(_components.em, {
              children: "4 < 3"
            }), "2 -> 4 < 6 -> true"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f1 != f2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator!=(f1, f2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "!(f1 == f2) -> !(1/2 == 3/4) -> !false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f2 > f1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator>(f2, f1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rhs < lhs -> f1 < f2 -> true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator=="
            }), " (Fraction)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two integer comparisons after normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator<"
            }), " (Fraction)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-multiplication: 2 multiplications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting N Fractions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N comparisons [N] O(1) each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Derived operators (", (0,jsx_runtime.jsx)(_components.code, {
              children: "!="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">="
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single negation of base comparison"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "why-derive--from-",
      children: ["WHY Derive ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Duplicating logic across all six operators violates DRY. If the equality check ever changes (e.g., adding epsilon-tolerance for floating-point fields), every operator would need updating. Deriving ensures consistency: change ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ", and all five others automatically follow."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-overloading-increment-and-decrement",
      children: "6.6 Overloading Increment and Decrement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), " returns a reference to the incremented object; postfix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), " returns a copy of the original value --- always prefer prefix for non-trivial types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----odometer-vs-snapshot",
      children: "Real-World Analogy --- Odometer vs Snapshot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " is like a car odometer --- it advances and you see the new value immediately. Postfix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " is like taking a photograph first, then advancing the odometer --- you keep the old value as a record."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), ": Take no parameters, increment, return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        }), " by reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Postfix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), ": Take a dummy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " parameter (unused), save a copy, increment via prefix, return the saved copy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--"
        }), ": Same as prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), " but decrement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Postfix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--"
        }), ": Same as postfix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), " but decrement"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n    member operator++() -> T&:         // prefix ++x\n        ++this.data\n        return this\n\n    member operator++(int) -> T:        // postfix x++\n        old = copy(this)\n        ++(*this)                       // call prefix\n        return old\n\n    member operator--() -> T&:         // prefix --x\n        --this.data\n        return this\n\n    member operator--(int) -> T:        // postfix x--\n        old = copy(this)\n        --(*this)                       // call prefix\n        return old\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----custom-iterator-like-counter",
      children: "Full Code --- Custom Iterator-Like Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n\nclass Counter {\npublic:\n    explicit Counter(int start = 0) : count_(start) {}\n\n    // Prefix ++\n    Counter& operator++() {\n        ++count_;\n        return *this;\n    }\n\n    // Postfix ++ (int is dummy parameter)\n    Counter operator++(int) {\n        Counter old(*this);\n        ++(*this);          // call prefix\n        return old;\n    }\n\n    // Prefix --\n    Counter& operator--() {\n        --count_;\n        return *this;\n    }\n\n    // Postfix --\n    Counter operator--(int) {\n        Counter old(*this);\n        --(*this);\n        return old;\n    }\n\n    int value() const { return count_; }\n\nprivate:\n    int count_;\n};\n\nint main() {\n    Counter c(10);\n\n    std::cout << \"Start: \" << c.value() << \"\\n\";\n    std::cout << \"Prefix ++c: \" << (++c).value() << \"\\n\";\n    std::cout << \"After prefix: \" << c.value() << \"\\n\";\n\n    Counter d(20);\n    std::cout << \"\\nStart: \" << d.value() << \"\\n\";\n    std::cout << \"Postfix d++: \" << (d++).value() << \"\\n\";\n    std::cout << \"After postfix: \" << d.value() << \"\\n\";\n\n    // Practical use in iteration\n    std::vector<int> nums = {10, 20, 30};\n    auto it = nums.begin();\n    std::cout << \"\\nIterator style:\\n\";\n    std::cout << \"*it++ = \" << *(it++) << \"\\n\";\n    std::cout << \"*it = \" << *it << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Start: 10\nPrefix ++c: 11\nAfter prefix: 11\n\nStart: 20\nPostfix d++: 20\nAfter postfix: 21\n\nIterator style:\n*it++ = 10\n*it = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----prefix-vs-postfix",
      children: "Dry Run --- Prefix vs Postfix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "c.value()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++c"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator++()"
            }), " called: count_ becomes 11, returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".value()"
            }), " called on result"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads returned object's count_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "d++"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator++(int)"
            }), " called: saves copy (20), calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++(*this)"
            }), " -> 21, returns old copy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21 (but returned value is 20)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct increment, no copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Postfix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + sizeof(T)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must copy original state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as prefix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Postfix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + sizeof(T)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as postfix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-prefer-prefix",
      children: "WHY Prefer Prefix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", the cost difference is negligible. But for an iterator walking a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::list"
      }), " node-by-node, postfix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " copies the iterator (a pointer + some state), while prefix does not. In tight loops, this matters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " Always use prefix unless you specifically need the old value. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for (auto it = v.begin(); it != v.end(); ++it)"
      }), " --- prefix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-overloading-stream-operators",
      children: "6.7 Overloading Stream Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Stream ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">>"
        }), " must be non-member functions returning a stream reference to support chaining; they typically need friend access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-factory-assembly-line",
      children: "Real-World Analogy --- A Factory Assembly Line"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), " as putting an object onto a conveyor belt (output stream) --- the belt keeps moving, and you can put more objects after it. ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      }), " is like taking raw materials off the belt to build an object --- the belt hands you pieces one at a time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-1",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Output ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          })]
        }), ": Accept ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::ostream&"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const T&"
        }), "; write to the stream; return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::ostream&"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Input ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">>"
          })]
        }), ": Accept ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::istream&"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        }), " (non-const); read from the stream into the object; return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::istream&"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Friend declaration"
        }), ": Declare both as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "friend"
        }), " inside the class if they need private member access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Output\nnon-member operator<<(ostream& os, const T& obj) -> ostream&:\n    os << obj.field1 << \" \" << obj.field2\n    return os\n\n// Input\nnon-member operator>>(istream& is, T& obj) -> istream&:\n    is >> obj.field1 >> obj.field2\n    return is\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----date-with-stream-io",
      children: "Full Code --- Date with Stream I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <iomanip>\n#include <sstream>\n\nclass Date {\npublic:\n    Date(int y = 1970, int m = 1, int d = 1)\n        : year_(y), month_(m), day_(d) {}\n\n    friend std::ostream& operator<<(std::ostream& os, const Date& dt);\n    friend std::istream& operator>>(std::istream& is, Date& dt);\n\nprivate:\n    int year_, month_, day_;\n};\n\nstd::ostream& operator<<(std::ostream& os, const Date& dt) {\n    os << std::setfill('0')\n       << dt.year_ << \"-\"\n       << std::setw(2) << dt.month_ << \"-\"\n       << std::setw(2) << dt.day_;\n    return os;\n}\n\nstd::istream& operator>>(std::istream& is, Date& dt) {\n    char dash1, dash2;\n    is >> dt.year_ >> dash1 >> dt.month_ >> dash2 >> dt.day_;\n    if (!is || dash1 != '-' || dash2 != '-') {\n        is.setstate(std::ios::failbit);\n    }\n    return is;\n}\n\nint main() {\n    Date d(2024, 12, 25);\n    std::cout << \"Date: \" << d << \"\\n\";\n\n    // Chaining\n    Date d1(2024, 1, 1), d2(2024, 12, 31);\n    std::cout << \"Range: [\" << d1 << \"] to [\" << d2 << \"]\\n\";\n\n    // Input\n    std::string input = \"2024-03-15\";\n    std::istringstream iss(input);\n    Date parsed;\n    if (iss >> parsed) {\n        std::cout << \"Parsed: \" << parsed << \"\\n\";\n    }\n\n    // String stream\n    std::ostringstream oss;\n    oss << d;\n    std::string str = oss.str();\n    std::cout << \"String: \" << str << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Date: 2024-12-25\nRange: [2024-01-01] to [2024-12-31]\nParsed: 2024-03-15\nString: 2024-12-25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----stream-operations",
      children: "Dry Run --- Stream Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stream State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout << d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes \"2024-12-25\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout"
            }), " (reference)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "oss << d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "oss buffer = \"2024-12-25\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "oss"
            }), " (reference)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iss >> parsed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads 2024, '-', 03, '-', 15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "iss"
            }), " (reference)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (iss)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "failbit not set -> true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout << parsed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writes \"2024-03-15\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator<<"
            }), " (simple)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = output length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted output per field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator>>"
            }), " (simple)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = input length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted input per field"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chaining N operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N*k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each op writes/reads independently"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-stream-operators-must-be-non-members",
      children: "WHY Stream Operators Must Be Non-Members"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The left operand of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::ostream&"
      }), ", not your class type. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator<<"
      }), " were a member of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Date"
      }), ", the call would be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d << std::cout"
      }), " --- backwards from the natural ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::cout << d"
      }), ". Non-member form fixes the operand order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "68-overloading-subscript-",
      children: ["6.8 Overloading Subscript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator[]"
        }), " must return a reference to support ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a[i] = value"
        }), "; provide const and non-const overloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-mailbox-array",
      children: "Real-World Analogy --- A Mailbox Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An apartment building has numbered mailboxes. You write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mailboxes[3]"
      }), " to access mailbox #3. You can both read what's inside (", (0,jsx_runtime.jsx)(_components.code, {
        children: "cout << mailboxes[3]"
      }), ") and put something inside (", (0,jsx_runtime.jsx)(_components.code, {
        children: "mailboxes[3] = \"letter\""
      }), "). This read-write duality is exactly what ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " enables."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-2",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Non-const version returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        }), " --- enables both reading and writing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Const version returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const T&"
        }), " --- enables reading-only on const objects"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add bounds checking (or document that it's unchecked, like raw arrays)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For associative containers, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[]"
        }), " may create entries on access (like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "std::map"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n    member operator[](size_t index) -> ValueType&:\n        if index >= size: throw out_of_range\n        return data[index]\n\n    member operator[](size_t index) const -> const ValueType&:\n        if index >= size: throw out_of_range\n        return data[index]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----safearray-with-subscript",
      children: "Full Code --- SafeArray with Subscript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <stdexcept>\n#include <string>\n\nclass SafeArray {\npublic:\n    SafeArray(size_t size)\n        : size_(size), data_(new int[size_]())\n    {}\n\n    ~SafeArray() { delete[] data_; }\n\n    // Non-const subscript --- read/write\n    int& operator[](size_t index) {\n        if (index >= size_) {\n            throw std::out_of_range(\"Index \" + std::to_string(index)\n                + \" out of range [0, \" + std::to_string(size_) + \")\");\n        }\n        return data_[index];\n    }\n\n    // Const subscript --- read only\n    const int& operator[](size_t index) const {\n        if (index >= size_) {\n            throw std::out_of_range(\"Index \" + std::to_string(index)\n                + \" out of range [0, \" + std::to_string(size_) + \")\");\n        }\n        return data_[index];\n    }\n\n    size_t size() const { return size_; }\n\nprivate:\n    size_t size_;\n    int* data_;\n\n    // Prevent copying\n    SafeArray(const SafeArray&) = delete;\n    SafeArray& operator=(const SafeArray&) = delete;\n};\n\nint main() {\n    SafeArray arr(5);\n\n    // Write via subscript\n    for (size_t i = 0; i < arr.size(); ++i) {\n        arr[i] = static_cast<int>(i * 10);\n    }\n\n    // Read via subscript\n    std::cout << \"Array contents: \";\n    for (size_t i = 0; i < arr.size(); ++i) {\n        std::cout << arr[i] << \" \";\n    }\n    std::cout << \"\\n\";\n\n    // Modifying existing element\n    arr[2] = 99;\n    std::cout << \"After arr[2] = 99: \" << arr[2] << \"\\n\";\n\n    // Const access\n    const SafeArray& carr = arr;\n    std::cout << \"First element: \" << carr[0] << \"\\n\";\n    // carr[0] = 5; // ERROR: const reference returned\n\n    // Bounds check\n    try {\n        arr[100] = 0;\n    } catch (const std::out_of_range& e) {\n        std::cout << \"Exception: \" << e.what() << \"\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array contents: 0 10 20 30 40\nAfter arr[2] = 99: 99\nFirst element: 0\nException: Index 100 out of range [0, 5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----subscript-operator-resolution",
      children: "Dry Run --- Subscript Operator Resolution"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overload Selected"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i] = i*10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int& operator[](size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference to data_[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write: modifies array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout << arr[i]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int& operator[](size_t)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference to data_[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read: prints value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "carr[0]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int& operator[](size_t) const"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const ref to data_[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[100]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Checks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "100 >= 5"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Throws ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::out_of_range"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception thrown"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            }), " (bounded)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single bounds check + pointer arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            }), " (unbounded)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just pointer arithmetic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounds check overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single integer comparison + conditional"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-return-a-reference",
      children: "WHY Return a Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without a reference return, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[i] = value"
      }), " would modify a temporary copy. The expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[i]"
      }), " must be an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "lvalue"
      }), " (something that can appear on the left side of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      }), "). Returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int&"
      }), " makes it an lvalue; returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " makes it an rvalue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "69-overloading-function-call-",
      children: ["6.9 Overloading Function Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "()"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator()"
        }), " creates functors (function objects) that can maintain state between calls and be used with STL algorithms."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-coffee-machine-with-presets",
      children: "Real-World Analogy --- A Coffee Machine with Presets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A coffee machine remembers your settings (strength, size, temperature). Every time you press the brew button ", (0,jsx_runtime.jsx)(_components.code, {
        children: "()"
      }), ", it uses the stored settings to make coffee. The machine itself is a \"function object\" --- stateful, reusable, customizable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-3",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator()"
        }), " with desired parameters and return type"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store configuration in the object's member variables"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The object can now be called like a function: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "myFunctor(args)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use with STL algorithms that accept callables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n    member operator()(Params...) -> ReturnType:\n        // use this->state to compute result\n        return computed_value\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----functor-examples",
      children: "Full Code --- Functor Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <string>\n\n// Functor with state\nclass Adder {\npublic:\n    explicit Adder(int inc) : increment_(inc) {}\n\n    int operator()(int x) const {\n        return x + increment_;\n    }\n\nprivate:\n    int increment_;\n};\n\n// Stateless functor for STL\nclass EvenFirst {\npublic:\n    bool operator()(int a, int b) const {\n        if ((a % 2) != (b % 2)) {\n            return (a % 2) == 0;  // evens before odds\n        }\n        return a < b;              // otherwise ascending\n    }\n};\n\nint main() {\n    // Functor with state\n    Adder add5(5);\n    Adder add10(10);\n\n    std::cout << \"add5(3) = \" << add5(3) << \"\\n\";\n    std::cout << \"add10(3) = \" << add10(3) << \"\\n\";\n\n    // Functor as callable argument\n    std::vector<int> nums = {1, 2, 3, 4, 5};\n    std::cout << \"Plus 10: \";\n    std::transform(nums.begin(), nums.end(), nums.begin(), add10);\n    for (int n : nums) std::cout << n << \" \";\n    std::cout << \"\\n\";\n\n    // Functor for custom sort\n    std::vector<int> data = {3, 1, 4, 2, 5};\n    std::sort(data.begin(), data.end(), EvenFirst{});\n    std::cout << \"Even-first sort: \";\n    for (int n : data) std::cout << n << \" \";\n    std::cout << \"\\n\";\n\n    // Lambda (syntactic sugar for functor)\n    auto multiplier = [](int a, int b) { return a * b; };\n    std::cout << \"Lambda: multiplier(6, 7) = \" << multiplier(6, 7) << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add5(3) = 8\nadd10(3) = 13\nPlus 10: 11 12 13 14 15\nEven-first sort: 2 4 1 3 5\nLambda: multiplier(6, 7) = 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----adder-functor",
      children: "Dry Run --- Adder Functor"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
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
              children: "Adder add5(5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor: increment_ = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add5 object created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "add5(3)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator()(3)"
            }), " called; returns 3 + 5"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "add10(3)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator()(3)"
            }), " called on different instance; returns 3 + 10"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::transform(..., add10)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["For each element ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n"
            }), ", calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "add10(n)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{11, 12, 13, 14, 15}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator()(int)"
            }), " (Adder)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::transform"
            }), " with functor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One functor call per element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom sort with comparator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N log N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparator called for each comparison"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-functors-over-function-pointers",
      children: "WHY Functors Over Function Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Functors can store state (configuration, counters, cached values), while function pointers carry zero state. STL algorithms inline functor calls better because the compiler sees the complete type, not just a pointer. Lambdas in C++11+ are syntactic sugar that compile to anonymous functors."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "610-type-conversion-operators",
      children: "6.10 Type Conversion Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Conversion operators ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator T()"
        }), " define implicit conversions from your type to T --- always mark single-argument conversions and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator bool()"
        }), " as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "explicit"
        }), " in modern C++."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-universal-adapter",
      children: "Real-World Analogy --- A Universal Adapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A universal power adapter converts the plug shape from one standard to another. It works automatically (implicitly) when you plug in, but you need a physical switch (", (0,jsx_runtime.jsx)(_components.code, {
        children: "explicit"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "static_cast"
      }), ") for dangerous conversions that could damage equipment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-4",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decide which target types are safe for implicit conversion"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For safe targets, define ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator TargetType() const"
        }), " --- implicit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For risky or narrowing targets, prefix with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "explicit"
        }), " (C++11+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always mark ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator bool()"
        }), " as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "explicit"
        }), " to prevent unintended arithmetic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Provide ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static_cast"
        }), " as the escape hatch for explicit conversions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n    // Implicit conversion to U\n    member operator U() const -> U:\n        return U(field1, field2)\n\n    // Explicit conversion to V (C++11+)\n    explicit member operator V() const -> V:\n        return static_cast<V>(field1)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----safe-conversions",
      children: "Full Code --- Safe Conversions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nclass Percentage {\npublic:\n    explicit Percentage(double value) : value_(value) {}\n\n    // Safe: implicit double conversion (no narrowing for most uses)\n    operator double() const {\n        return value_;\n    }\n\n    // EXPLICIT: prevent accidental int truncation\n    explicit operator int() const {\n        return static_cast<int>(value_ + 0.5);  // round, not truncate\n    }\n\n    // EXPLICIT bool: prevent accidental integer promotion\n    explicit operator bool() const {\n        return value_ > 0.0;\n    }\n\n    // String representation\n    std::string toString() const {\n        return std::to_string(value_) + \"%\";\n    }\n\nprivate:\n    double value_;\n};\n\nint main() {\n    Percentage pct(75.3);\n\n    // Implicit double conversion OK\n    double d = pct;\n    std::cout << \"Double: \" << d << \"\\n\";\n\n    // Explicit int requires static_cast\n    int i = static_cast<int>(pct);\n    std::cout << \"Int (rounded): \" << i << \"\\n\";\n\n    // Explicit bool --- works in boolean context\n    if (pct) {\n        std::cout << pct.toString() << \" is positive\\n\";\n    }\n\n    Percentage zero(0.0);\n    if (!zero) {\n        std::cout << \"Zero is falsy\\n\";\n    }\n\n    // This would fail: int x = pct; // ERROR if explicit\n    // This would fail: pct + 5;     // ERROR if explicit bool\n\n    // Multiple conversion targets\n    Percentage a(50.0), b(25.0);\n    double sum = a + b;   // both convert to double, then added\n    std::cout << \"Sum: \" << sum << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Double: 75.3\nInt (rounded): 75\n75.300000% is positive\nZero is falsy\nSum: 75\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----conversion-resolution",
      children: "Dry Run --- Conversion Resolution"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conversion Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double d = pct"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator double()"
            }), " called"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit, safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast<int>(pct)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator int()"
            }), " called"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit, must cast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (pct)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator bool()"
            }), " called, result true"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "condition true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit OK in bool context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both convert to double via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "operator double()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only common type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = pct"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No viable conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile error"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator int()"
            }), " is explicit"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator double()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read member, return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator int()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read, round, return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator bool()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic via conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert both operands, then built-in op"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "why-mark-operator-bool-explicit",
      children: ["WHY Mark ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator bool()"
      }), " Explicit"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "explicit"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator bool()"
      }), " enables a cascade of unintended promotions: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float"
      }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
        children: "double"
      }), ". This means ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pct + 5"
      }), " would compile (converting the object to bool, then to int), producing garbage. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "explicit operator bool()"
      }), " restricts usage to boolean contexts (conditions in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "611-overloading-assignment--and-newdelete",
      children: ["6.11 Overloading Assignment ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator="
        }), " must be a member function returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        }), " to support chaining; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator new"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "delete"
        }), " control per-class memory allocation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6111-assignment-operator-",
      children: ["6.11.1 Assignment Operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----copying-a-document",
      children: "Real-World Analogy --- Copying a Document"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you copy a document (a = b), you want the copy to be independent of the original --- changes to one should not affect the other. This is deep copying. Shallow copying (just sharing a pointer) is like giving someone a link to your Google Doc instead of an actual copy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-5",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-assignment check"
        }), ": Guard against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = a"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release old resources"
        }), ": Delete existing allocated memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allocate and copy"
        }), ": Deep-copy the source's resources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*this"
          })]
        }), ": By reference for chaining (", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = b = c"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class T {\n    member operator=(const T& other) -> T&:\n        if this != &other:              // self-assignment check\n            delete this.resource        // release old\n            this.resource = copy(other.resource)  // deep copy\n        return this\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----string-with-assignment",
      children: "Full Code --- String with Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstring>\n\nclass MyString {\npublic:\n    MyString(const char* s = \"\")\n        : size_(std::strlen(s))\n    {\n        data_ = new char[size_ + 1];\n        std::memcpy(data_, s, size_ + 1);\n    }\n\n    ~MyString() { delete[] data_; }\n\n    // Copy assignment\n    MyString& operator=(const MyString& other) {\n        if (this != &other) {\n            delete[] data_;                     // release old\n            size_ = other.size_;\n            data_ = new char[size_ + 1];        // allocate new\n            std::memcpy(data_, other.data_, size_ + 1);  // copy\n        }\n        return *this;                           // return for chaining\n    }\n\n    // Copy-and-swap idiom (strong exception safety)\n    void swap(MyString& other) noexcept {\n        std::swap(data_, other.data_);\n        std::swap(size_, other.size_);\n    }\n\n    MyString& operator=(MyString other) {  // pass by value (copy)\n        swap(other);\n        return *this;\n    }\n\n    const char* c_str() const { return data_; }\n\nprivate:\n    char* data_;\n    size_t size_;\n};\n\nint main() {\n    MyString s1(\"Hello\");\n    MyString s2(\"World\");\n    MyString s3(\"C++\");\n\n    s1 = s2;            // basic assignment\n    std::cout << \"s1 = \" << s1.c_str() << \"\\n\";\n\n    s1 = s2 = s3;       // chaining\n    std::cout << \"s1 = \" << s1.c_str() << \"\\n\";\n    std::cout << \"s2 = \" << s2.c_str() << \"\\n\";\n\n    s1 = s1;            // self-assignment (must be safe)\n    std::cout << \"Self-assignment: \" << s1.c_str() << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "s1 = World\ns1 = C++\ns2 = C++\nSelf-assignment: C++\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6112-overloading-new-and-delete",
      children: ["6.11.2 Overloading ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----a-custom-locker-system",
      children: "Real-World Analogy --- A Custom Locker System"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of using the school's general storage room (global heap), a sports club installs its own lockers (custom pool) sized for sports equipment. Members (", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator new"
      }), ") get a locker from this custom pool, and returning equipment (", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator delete"
      }), ") puts the locker back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-6",
      children: "Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static void* operator new(size_t size)"
        }), " --- allocates memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Declare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static void operator delete(void* ptr)"
        }), " --- deallocates memory"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The class automatically uses these for all allocations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Useful for memory pooling, alignment control, or tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "full-code-----class-specific-allocator",
      children: "Full Code --- Class-Specific Allocator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <cstdlib>\n\nstruct Tracked {\n    static int alloc_count;\n    static int dealloc_count;\n\n    int id = 0;\n\n    static void* operator new(size_t size) {\n        ++alloc_count;\n        std::cout << \"Tracked::new(\" << size << \") --- allocation #\"\n                  << alloc_count << \"\\n\";\n        return std::malloc(size);\n    }\n\n    static void operator delete(void* ptr) {\n        ++dealloc_count;\n        std::cout << \"Tracked::delete --- deallocation #\"\n                  << dealloc_count << \"\\n\";\n        std::free(ptr);\n    }\n};\n\nint Tracked::alloc_count = 0;\nint Tracked::dealloc_count = 0;\n\nint main() {\n    Tracked* p1 = new Tracked();\n    Tracked* p2 = new Tracked();\n\n    delete p1;\n    delete p2;\n\n    std::cout << \"Total allocations: \" << Tracked::alloc_count << \"\\n\";\n    std::cout << \"Total deallocations: \" << Tracked::dealloc_count << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Tracked::new(4) --- allocation #1\nTracked::new(4) --- allocation #2\nTracked::delete --- deallocation #1\nTracked::delete --- deallocation #2\nTotal allocations: 2\nTotal deallocations: 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-----assignment-operator",
      children: "Dry Run --- Assignment Operator"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 = s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s1=\"Hello\", s2=\"World\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Self-check: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&s1 != &s2"
            }), " true"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delete[] s1.data_ (frees \"Hello\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s1.data_ = dangling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "allocate new char[6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s1.data_ = new buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memcpy \"World\\0\" into s1.data_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s1 = \"World\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return *this"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chaining enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 = s1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s1 = same"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Self-check: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "this == &other"
            }), " true"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No-op, safe"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator="
            }), " (copy)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = length of string; must allocate + copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator="
            }), " (copy-and-swap)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy + 2 pointer swaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-assignment check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pointer comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator new"
            }), " (trivial)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to malloc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "operator delete"
            }), " (trivial)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward to free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom pool allocator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-allocated block, O(1) list operations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "why-assignment-returns-t",
      children: ["WHY Assignment Returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "returning-a-reference-enables-a--b--c-which-evaluates-right-to-left-b--c-returns-t-referring-to-b-then-a--b-returning-by-value-would-require-an-extra-copy-returning-void-would-break-the-pattern-entirely",
      children: ["Returning a reference enables ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a = b = c"
      }), ", which evaluates right-to-left: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b = c"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T&"
      }), " referring to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a = b"
      }), ". Returning by value would require an extra copy. Returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " would break the pattern entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "612-operator-overloading-limitations",
      children: "6.12 Operator Overloading Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Operator overloading cannot change operator fundamentals (precedence, associativity, arity), cannot add new operators, and several operators are permanently off-limits to preserve language safety."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-----traffic-rules",
      children: "Real-World Analogy --- Traffic Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can customize your car (paint, wheels, sound system) --- that's operator overloading. But you cannot change the rules of the road: red means stop, you drive on the right side, speed limits apply. The language's operator rules are the rules of the road."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-limitations",
      children: "Numbered Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot change precedence"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a + b * c"
        }), " always multiplies first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot change associativity"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a - b - c"
        }), " always groups left-to-right"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot change arity"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " is always binary; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!"
        }), " is always unary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot create new operator tokens"
        }), ": No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<>"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<=>"
        }), " (until C++20, which made ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<=>"
        }), " a built-in token)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot overload operators on built-in types alone"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int + int"
        }), " is fixed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot guarantee short-circuit evaluation"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " lose short-circuit semantics when overloaded"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot overload operator with all built-in operands"
        }), ": At least one user-defined type required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot make operators virtual by default"
        }), ": Virtual dispatch for operators requires explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtual"
        }), " declaration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Cannot have non-member ", (0,jsx_runtime.jsx)(_components.code, {
            children: "="
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "()"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[]"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "->"
          })]
        }), ": These must be members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cannot control implicit conversion sequences"
        }), ": Conversion operators participate in standard rank-based overload resolution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-short-circuit-trap",
      children: "The Short-Circuit Trap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n\nstruct Guard {\n    bool value_;\n    explicit Guard(bool v) : value_(v) {}\n\n    bool operator&&(const Guard& other) const {\n        std::cout << \"Both evaluated!\\n\";\n        return value_ && other.value_;\n    }\n};\n\nint main() {\n    Guard a(false), b(true);\n\n    // Built-in short-circuit: b is never evaluated\n    bool builtin = false && (std::cout << \"Won't print\\n\", true);\n\n    // Overloaded: BOTH operands evaluated before operator&& runs\n    Guard result = a && b;  // prints \"Both evaluated!\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Both evaluated!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), " are fully evaluated before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Guard::operator&&"
      }), " executes. The short-circuit behavior of built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " is lost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-9",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No new operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some domains (regex, matrix) lack natural syntax"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use named functions: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a.dot(b)"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a * b"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed precedence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a << b + c"
            }), " parses as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(a << b) + c"
            }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a << (b + c)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add parentheses explicitly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lost short-circuit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Overloaded ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), " and `"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Must be member"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " cannot be non-member"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Language design ensures left operand = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), " for these"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "613-operators-that-cannot-be-overloaded",
      children: "6.13 Operators That Cannot Be Overloaded"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The operators ", (0,jsx_runtime.jsx)(_components.code, {
          children: "::"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?:"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeid"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alignof"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static_cast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dynamic_cast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const_cast"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reinterpret_cast"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "noexcept"
        }), " cannot be overloaded --- they preserve core language safety and identity semantics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-table-with-reasons",
      children: "Comprehensive Table with Reasons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason It Cannot Be Overloaded"
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
            children: "The left operand is a namespace or class name, not an expression with a value. Overloading would require changing name lookup rules --- the foundation of C++'s type system."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct member access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must always refer to an actual member of the object. Overloading would break the fundamental guarantee that ", (0,jsx_runtime.jsx)(_components.code, {
              children: "obj.member"
            }), " accesses exactly that member."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer-to-member access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " --- must always resolve to an actual member. The whole point is compile-time member resolution."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arity 3. C++ has no mechanism for ternary operator overloading; introducing one would require rewriting the expression parser. Also, short-circuit behavior is essential."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must return the actual compile-time size in bytes. Overloading would break template metaprogramming, array allocation, and serialization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typeid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime type identification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must return the actual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::type_info"
            }), " for the object's dynamic type. Overloading would break RTTI --- a core safety feature."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "alignof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must return actual alignment. Overloading would break memory allocation and placement new correctness."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static type conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conversion between related types must be known at compile time. Overloading would interfere with implicit conversion sequences."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic type conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe downcasting depends on the actual vtable structure. Overloading would break type safety."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const-correctness enforcement. Overloading would let user code subvert const guarantees."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reinterpret_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reinterpret conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit-level reinterpretation depends on actual object representation. Overloading would create an inconsistent type system."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception specification query"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Must reflect the actual noexceptness of an expression. Overloading would break ", (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            }), "-based SFINAE and move optimizations."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "##"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "These operate at the preprocessor level (token manipulation), not on runtime values. Operator overloading is a compile-time/runtime feature."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " (dot)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++ member access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Unlike ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " (which can be overloaded), direct ", (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " access is an invariant of the language's type system."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deep-reasoning-for-each",
      children: "Deep Reasoning for Each"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "-----scope-resolution",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "::"
      }), " --- Scope Resolution"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Cannot overload: must always mean \"look up name in this scope\"\nstd::vector<int> v;    // :: finds std namespace\nMyClass::Nested n;     // :: finds nested type\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "::"
      }), " were overloadable, type lookup would become ambiguous --- is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A::B"
      }), " a member of A's scope, or a call to A's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator::"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "-----direct-member-access",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), " --- Direct Member Access"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct S { int x; };\nS s;\ns.x = 42;  // Must mean actual member x\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), " operator has one operand that is an object and the other a member name --- not a value. The second \"operand\" is not an expression; it's an identifier resolved at compile time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "-----ternary-conditional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "?:"
      }), " --- Ternary Conditional"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Built-in: only one branch evaluated\nint result = (condition) ? expr_true : expr_false;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If overloaded, both branches would be evaluated before the operator runs --- defeating the purpose of a conditional."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "sizeof-----size-of",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " --- Size Of"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "template<typename T>\nvoid copy_array(T* dst, const T* src) {\n    std::memcpy(dst, src, sizeof(T) * N);  // Must be actual size\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Template code universally assumes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(T)"
      }), " is the actual object size. Overloading would silently break all template libraries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-----dangerous-toys-if-these-could-be-overloaded",
      children: "Code Example --- Dangerous Toys (If These Could Be Overloaded)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// THIS CODE IS ILLUSTRATIVE --- overloads would NOT compile\n// Showing why the prohibition exists\n\nstruct Dangerous {\n    // If sizeof could be overloaded...\n    // int operator sizeof() { return 1; }  // ERROR: illegal\n};\n\n// What would break:\n// int buf[sizeof(Dangerous)];  // array could be wrong size\n// new Dangerous;               // allocator could get wrong size\n// memcpy(&a, &b, sizeof(a));  // could copy wrong amount\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-attempting-to-overload",
      children: "When Attempting to Overload"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct S {\n    // int operator.(int) { return 0; }   // ERROR\n    // int operator::(int) { return 0; }  // ERROR\n    // int operator?:(bool, int) { return 0; }  // ERROR\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each of these produces a compiler error: \"cannot overload the unoverloadable.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "614-return-type-conventions",
      children: "6.14 Return Type Conventions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Return type conventions signal intent --- references for lvalue semantics, values for rvalue semantics, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), " for comparisons, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void"
        }), " for side-effect-only operators."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comprehensive-table",
      children: "Comprehensive Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Type Convention"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic binary"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates a new object; returning reference would alias a temporary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic compound"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Modifies and returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), " --- enables ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a = b += c"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unary arithmetic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negation/identity produce new values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increment prefix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            }), " (prefix)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns the object itself after modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increment postfix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            }), " (postfix)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " by value"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns the original state before modification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["These are predicates; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), " is the only sensible return type"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ", `"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "!`"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), ", `"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "^", (0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "~", (0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "<<", (0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), ">>`"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            }), " by value"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise compound"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&="
            }), ", `"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["=", (0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "^=", (0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "<<=", (0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), ">>=`"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::ostream&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns stream for chaining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::istream&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns stream for chaining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            }), " (non-const), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const T&"
            }), " (const)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lvalue access; enables ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i] = v"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on semantics --- what the functor computes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer-like access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address-of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T*"
            }), " or smart pointer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns pointer to the object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), " for chaining"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator T()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicitly returns the converted value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator new"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns raw memory pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator delete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frees memory, nothing to return"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-these-conventions-exist",
      children: "Why These Conventions Exist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T&"
        }), " (reference)"]
      }), " signals that the returned value is an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "lvalue"
      }), " --- it has an identity, an address, and can be assigned to. Used for operators that modify the object (", (0,jsx_runtime.jsx)(_components.code, {
        children: "+="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      }), ", prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " (value)"]
      }), " signals that the returned value is an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "rvalue"
      }), " --- a temporary that may be moved or copied. Used for operators that compute new values (", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), ", postfix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        })]
      }), " signals a predicate --- the operator checks a condition but does not produce a meaningful value beyond true/false."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anti-pattern-----wrong-return-type",
      children: "Anti-Pattern --- Wrong Return Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Bad {\n    int value_;\n    \n    // WRONG: returning void breaks chaining\n    void operator+=(const Bad& rhs) { value_ += rhs.value_; }\n    \n    // WRONG: returning by value for prefix ++\n    Bad operator++() { ++value_; return *this; }\n    // This copies, ignoring the convention\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "615-operator-overloading-guidelines",
      children: "6.15 Operator Overloading Guidelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Follow the Principle of Least Surprise --- an overloaded operator should mean what users expect from its built-in counterpart."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guideline-1-----when-in-doubt-do-as-the-ints-do",
      children: "Guideline 1 --- When in Doubt, Do as the Ints Do"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " operator doesn't behave like built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), ", your users will be confused. The built-in operators define the contract."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// GOOD: + creates a new object, += modifies in place\nMoney operator+(Money a, const Money& b) { return a += b; }\nMoney& operator+=(const Money& b) { amount_ += b.amount_; return *this; }\n\n// BAD: + modifies the left operand\nMoney operator+(Money& a, const Money& b) { return a += b; }  // side effect!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "guideline-2-----implement--in-terms-of-",
      children: ["Guideline 2 --- Implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " in Terms of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+="
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The binary version is a non-member that copies, applies compound, and returns the copy. This avoids code duplication and ensures consistent behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Member\nT& T::operator+=(const T& rhs) { /* modify *this */ return *this; }\n\n// Non-member (one implementation for all binary operators)\nT operator+(T lhs, const T& rhs) { lhs += rhs; return lhs; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "guideline-3-----provide-const-and-non-const-overloads",
      children: ["Guideline 3 --- Provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " and Non-", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " Overloads"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For subscript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), " and dereference ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), ", both versions are needed for full usability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "T& operator[](size_t i) { return data_[i]; }\nconst T& operator[](size_t i) const { return data_[i]; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guideline-4-----prefer-non-member-for-symmetric-operators",
      children: "Guideline 4 --- Prefer Non-Member for Symmetric Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operators with symmetric operands (", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " --- when both sides can convert) should be non-members to allow left-side conversions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// BAD: String(\"hello\") == \"world\" OK, but \"world\" == String(\"hello\") fails\nclass String { bool operator==(const String&) const; };\n\n// GOOD: both directions work via implicit conversion\nbool operator==(const String& a, const String& b);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "guideline-5-----never-overload---or-",
      children: ["Guideline 5 --- Never Overload ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: ","
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These operators lose their special semantics when overloaded:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " lose short-circuit evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ","
        }), " loses left-to-right evaluation order"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guideline-6-----always-handle-self-assignment",
      children: "Guideline 6 --- Always Handle Self-Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "T& T::operator=(const T& other) {\n    if (this != &other) {  // self-assignment check\n        // copy logic\n    }\n    return *this;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or use copy-and-swap (strong exception safety):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "T& T::operator=(T other) {  // copy passed by value\n    swap(other);\n    return *this;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "guideline-7-----keep-operator-bool-explicit",
      children: ["Guideline 7 --- Keep ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator bool()"
      }), " Explicit"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "explicit operator bool() const { return valid_; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This prevents unintended promotion to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " while allowing boolean context usage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guideline-8-----dont-overload-operators-for-unrelated-semantics",
      children: "Guideline 8 --- Don't Overload Operators for Unrelated Semantics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " for string concatenation is fine (it's associative, commutative-adjacent). Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " for set union is questionable (union is more like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|"
      }), "). Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " for database connection is wrong."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "guideline-9-----provide-operator-alongside-operator",
      children: ["Guideline 9 --- Provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator!="
      }), " Alongside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator=="
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Even with C++20's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<=>"
      }), ", it's good practice to ensure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), " is available and consistent with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guideline-10-----document-non-standard-semantics",
      children: "Guideline 10 --- Document Non-Standard Semantics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If your operator must deviate from built-in behavior, document it explicitly. Users reading ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (a == b)"
      }), " assume equality, not approximate fuzzy matching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "616-applications-in-real-systems",
      children: "6.16 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The C++ standard library's core types (std::string, std::complex, std::vector) demonstrate operator overloading done right --- intuitive, consistent, and powerful."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6161-stdstring-----the-reference-model",
      children: ["6.16.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), " --- The Reference Model"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), " is arguably the best example of operator overloading in the standard library. Every operator is intuitive:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Semantics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Non-member, returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append in place"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Member, returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "string&"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality check"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Non-member returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexicographic ordering"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Non-member returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char&"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const char&"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ostream&"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istream&"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n\nint main() {\n    std::string s1 = \"Hello, \";\n    std::string s2 = \"World!\";\n\n    // + for concatenation\n    std::string s3 = s1 + s2;\n    std::cout << s3 << \"\\n\";       // Output: Hello, World!\n\n    // += for append\n    s1 += \"C++\";\n    std::cout << s1 << \"\\n\";       // Output: Hello, C++\n\n    // [] for character access\n    s1[0] = 'h';\n    std::cout << s1 << \"\\n\";       // Output: hello, C++\n\n    // == and < for comparison\n    std::cout << std::boolalpha;\n    std::cout << (s1 == s2) << \"\\n\"; // false\n\n    // Mixed string + literal\n    std::string s4 = s1 + \" rocks!\";\n    std::cout << s4 << \"\\n\";       // Output: hello, C++ rocks!\n\n    // Iterator-style with ++ on iterators (not string itself)\n    for (auto it = s4.begin(); it != s4.end(); ++it) {\n        std::cout << *it;\n    }\n    std::cout << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hello, World!\nHello, C++\nhello, C++\nfalse\nhello, C++ rocks!\nhello, C++ rocks!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-complexity",
      children: "Internal Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 + s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocates new buffer, copies both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 += s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) or O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May reallocate if capacity exceeded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1 == s2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(n, m))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character-by-character comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s1[n]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct pointer arithmetic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6162-stdcomplex-----mathematical-precision",
      children: ["6.16.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::complex"
      }), " --- Mathematical Precision"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::complex"
      }), " demonstrates operator overloading for mathematical types where every arithmetic operator is defined with exact semantics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <complex>\n\nint main() {\n    std::complex<double> a(3.0, 4.0);\n    std::complex<double> b(1.0, 2.0);\n\n    std::cout << \"a = \" << a << \"\\n\";\n    std::cout << \"b = \" << b << \"\\n\";\n    std::cout << \"a + b = \" << (a + b) << \"\\n\";\n    std::cout << \"a - b = \" << (a - b) << \"\\n\";\n    std::cout << \"a * b = \" << (a * b) << \"\\n\";\n    std::cout << \"a / b = \" << (a / b) << \"\\n\";\n    std::cout << \"-a = \" << (-a) << \"\\n\";\n    std::cout << \"conj(a) = \" << std::conj(a) << \"\\n\";\n    std::cout << \"abs(a) = \" << std::abs(a) << \"\\n\";\n\n    // Mixed with double\n    std::cout << \"a + 1.0 = \" << (a + 1.0) << \"\\n\";\n    std::cout << \"2.0 * a = \" << (2.0 * a) << \"\\n\";\n\n    // Chaining\n    std::complex<double> c = a * b + a;\n    std::cout << \"a * b + a = \" << c << \"\\n\";\n\n    // Comparison (C++20: == and != only)\n    std::cout << std::boolalpha;\n    std::cout << \"a == a ? \" << (a == a) << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a = (3,4)\nb = (1,2)\na + b = (4,6)\na - b = (2,2)\na * b = (-5,10)\na / b = (2.2,-0.4)\n-a = (-3,-4)\nconj(a) = (3,-4)\nabs(a) = 5\na + 1.0 = (4,4)\n2.0 * a = (6,8)\na * b + a = (-2,14)\na == a ? true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "why-stdcomplex-overloads-all-arithmetic",
      children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::complex"
      }), " Overloads All Arithmetic"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::complex<double>"
      }), " without operator overloading would require:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Without operator overloading:\nComplexAdd(a, ComplexMul(b, c));  // confusing, non-standard\n\n// With operator overloading:\na + b * c;  // natural math notation\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6163-stdvector-----container-access",
      children: ["6.16.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " --- Container Access"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "std::vector"
      }), " demonstrates subscript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), ", assignment, and comparison operators for containers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    // operator[] for access\n    std::vector<int> v = {10, 20, 30, 40, 50};\n    v[2] = 99;                    // write via []\n    std::cout << \"v[2] = \" << v[2] << \"\\n\";  // read via []\n\n    // operator= for assignment\n    std::vector<int> v2;\n    v2 = v;                       // deep copy\n    std::cout << \"v2 size: \" << v2.size() << \"\\n\";\n\n    // operator== for comparison\n    std::vector<int> v3 = {10, 20, 99, 40, 50};\n    std::cout << std::boolalpha;\n    std::cout << \"v == v2 ? \" << (v == v2) << \"\\n\";\n    std::cout << \"v == v3 ? \" << (v == v3) << \"\\n\";\n\n    // operator< for ordering\n    std::cout << \"v < v3 ? \" << (v < v3) << \"\\n\";\n\n    // Iterators use ++ and * (operator overloading in iterator classes)\n    std::cout << \"Elements: \";\n    for (auto it = v.begin(); it != v.end(); ++it) {\n        std::cout << *it << \" \";\n    }\n    std::cout << \"\\n\";\n\n    // Sorting relies on operator<\n    std::vector<int> unsorted = {5, 3, 1, 4, 2};\n    std::sort(unsorted.begin(), unsorted.end());\n    std::cout << \"Sorted: \";\n    for (int x : unsorted) std::cout << x << \" \";\n    std::cout << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "v[2] = 99\nv2 size: 5\nv == v2 ? true\nv == v3 ? true\nv < v3 ? false\nElements: 10 20 99 40 50\nSorted: 1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iterator-operator-overloading",
      children: "Iterator Operator Overloading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Iterators are the unsung heroes of operator overloading. Every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), " on an iterator is an overloaded operator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Simplified iterator concept\ntemplate<typename T>\nclass VectorIterator {\n    T* ptr_;\npublic:\n    VectorIterator& operator++() { ++ptr_; return *this; }       // prefix\n    VectorIterator operator++(int) { auto old = *this; ++ptr_; return old; }  // postfix\n    T& operator*() { return *ptr_; }                             // dereference\n    bool operator!=(const VectorIterator& other) const { return ptr_ != other.ptr_; }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table-----stdstring-vs-stdcomplex-vs-stdvector",
      children: "Comparison Table --- std::string vs std::complex vs std::vector"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::string"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::complex"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::vector"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex addition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not defined (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insert"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex add-assign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element-wise equality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexicographic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not defined (C++17)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexicographic element-wise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char&"
            }), " at position"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not defined"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            }), " at position"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream output (C++20? prior: format)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not on string (on iterators)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not on vector (on iterators)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via iterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via smart pointer?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via iterator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-these-types-succeed",
      children: "Why These Types Succeed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each type asks: \"Does this operator make intuitive sense for what this type represents?\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "string + string"
        }), " = concatenation -> intuitive (joins sequences)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "complex + complex"
        }), " = addition -> intuitive (mathematical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "vector + vector"
        }), " = ? -> ambiguous (append? element-wise add? union?) -> NOT defined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the Principle of Least Surprise in action."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "617-interview-corner",
      children: "6.17 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-when-should-you-implement-an-operator-as-a-member-function-vs-a-non-member-function",
      children: "Q1: When should you implement an operator as a member function vs a non-member function?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Operator must be ", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Member"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++ language mandates these as members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Operator modifies ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*="
            }), ", prefix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Member"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Natural: left operand is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*this"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Left operand is not class type (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-member"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cout << obj"
            }), " --- left is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ostream"
            }), ", not your class"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Symmetric conversion desired (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-member"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both operands can undergo implicit conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Private access needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-member friend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Friend declaration grants access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code snippet illustrating the decision:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Rational {\n    int num_, den_;\npublic:\n    // Member: modifies *this\n    Rational& operator+=(const Rational& rhs) {\n        num_ = num_ * rhs.den_ + rhs.num_ * den_;\n        den_ *= rhs.den_;\n        return *this;\n    }\n\n    // Friend non-member: symmetric conversion\n    friend Rational operator+(Rational lhs, const Rational& rhs) {\n        return lhs += rhs;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q2-why-are-operator-and-operator-for-streams-always-implemented-as-non-member-functions",
      children: ["Q2: Why are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator<<"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator>>"
      }), " for streams always implemented as non-member functions?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Because the left operand is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::ostream&"
      }), ", not your class type. If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), " were a member, the call would be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "myObj << std::cout"
      }), ", which is backwards from natural usage ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::cout << myObj"
      }), ". As a non-member, both operands are explicit parameters, so the natural order works. They typically need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "friend"
      }), " status to access private members."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// CORRECT --- non-member\nstd::ostream& operator<<(std::ostream& os, const MyClass& obj) {\n    os << obj.private_field;  // needs friend\n    return os;\n}\n\n// WRONG --- backwards syntax\n// class MyClass { std::ostream& operator<<(std::ostream& os); };\n// Usage: myObj << cout;  // non-standard!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-explain-the-difference-between-prefix-and-postfix--in-terms-of-implementation-and-performance",
      children: ["Q3: Explain the difference between prefix and postfix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " in terms of implementation and performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " increments the object and returns a reference to it. Postfix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " saves a copy of the original, increments the object, and returns the saved copy (by value). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " dummy parameter distinguishes them in the signature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefix: O(1) with no copy --- just increment and return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Postfix: O(1) + copy construction --- must create a temporary"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For simple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", the difference is negligible. For iterators in tight loops, the copy cost adds up."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Prefix --- efficient\nIterator& Iterator::operator++() {\n    ++ptr_;\n    return *this;\n}\n\n// Postfix --- must copy\nIterator Iterator::operator++(int) {\n    Iterator old = *this;  // copy\n    ++ptr_;                // increment via prefix\n    return old;            // return original\n}\n\n// Prefer prefix in loops:\nfor (auto it = v.begin(); it != v.end(); ++it)  // OK (no copy)\nfor (auto it = v.begin(); it != v.end(); it++)  // works, but copies\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-what-is-the-copy-and-swap-idiom-and-why-is-it-useful-for-operator",
      children: ["Q4: What is the copy-and-swap idiom and why is it useful for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator="
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Copy-and-swap is a technique that implements copy assignment by passing the source by value (creating a copy), then swapping the contents of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*this"
      }), " with the copy. The copy's destructor then cleans up the old resources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strong exception safety"
        }), ": If the copy construction throws, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*this"
        }), " is unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code reuse"
        }), ": The copy constructor and swap function do all the work"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-assignment safety"
        }), ": The copy-and-swap pattern handles ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = a"
        }), " automatically (the extra copy is wasteful but safe)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No code duplication"
        }), ": One implementation handles both copy and move if the parameter is passed by value"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class MyString {\n    char* data_;\n    size_t size_;\npublic:\n    // Copy constructor\n    MyString(const MyString& other)\n        : size_(other.size_), data_(new char[other.size_ + 1])\n    {\n        std::memcpy(data_, other.data_, size_ + 1);\n    }\n\n    // Destructor\n    ~MyString() { delete[] data_; }\n\n    // Swap (noexcept is important for exception safety)\n    friend void swap(MyString& a, MyString& b) noexcept {\n        std::swap(a.data_, b.data_);\n        std::swap(a.size_, b.size_);\n    }\n\n    // Copy-assign via copy-and-swap\n    MyString& operator=(MyString other) {  // pass by value = copy\n        swap(*this, other);\n        return *this;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-decide-which-operators-to-overload-for-a-custom-class",
      children: "Q5: How do you decide which operators to overload for a custom class?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use this decision framework:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Is the operator semantically meaningful?"
          }), " Would a user naturally write ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a + b"
          }), " for this type? If not, don't overload. Use named functions instead."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Does the operator preserve mathematical laws?"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), " should be commutative (or document if not). ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " should be reflexive, symmetric, transitive."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Does the operator interact with the standard library?"
          }), " If users will sort your type, provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "operator<"
          }), ". If they'll compare, provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "operator=="
          }), ". If they'll stream, provide ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">>"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Would a named function be clearer?"
          }), " For types where operator meaning is ambiguous, prefer ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dot()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cross()"
          }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "append()"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// GOOD: operator+ is intuitive for vectors\nVector3D a, b;\nVector3D c = a + b;  // vector addition\n\n// BAD: what does matrix + database mean?\n// Database operator+(const Database& other);  // ambiguous!\n\n// GOOD: named function is clearer\nMatrix Database::mergeWith(const Database& other);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-what-is-the-problem-with-overloading-operator-address-of",
      children: ["Q6: What is the problem with overloading ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator&"
      }), " (address-of)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Overloading ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator&"
      }), " changes the behavior of the unary ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " operator, which normally returns the address of the object. This can break templates and smart pointers that rely on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " returning a raw pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Tricky {\n    int value;\n    Tricky* operator&() {\n        return reinterpret_cast<Tricky*>(0xDEADBEEF);  // lies about address\n    }\n};\n\nTricky t;\nTricky* ptr = &t;  // ptr = 0xDEADBEEF, not actual address!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is why standard library smart pointers provide ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::addressof()"
      }), " --- a helper that obtains the real address even when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator&"
      }), " is overloaded."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q7-how-does-c20s--spaceship-operator-change-operator-overloading",
      children: ["Q7: How does C++20's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<=>"
      }), " (spaceship operator) change operator overloading?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " C++20 introduces the three-way comparison operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<=>"
      }), " that can auto-generate all six comparison operators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">="
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <compare>\n\nstruct Point {\n    int x, y;\n    auto operator<=>(const Point&) const = default;  // generates all six\n};\n\nint main() {\n    Point a{1, 2}, b{3, 4};\n    std::cout << std::boolalpha;\n    std::cout << (a < b) << \"\\n\";   // true: generated from <=>\n    std::cout << (a == b) << \"\\n\";  // false: generated from <=>\n    std::cout << (a != b) << \"\\n\";  // true: generated\n    std::cout << (a <= b) << \"\\n\";  // true: generated\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "true\nfalse\ntrue\ntrue\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "= default"
      }), ", the compiler generates member-wise ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<=>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), ". For custom ordering:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Point {\n    int x, y;\n    std::strong_ordering operator<=>(const Point& other) const {\n        if (auto cmp = x <=> other.x; cmp != 0) return cmp;\n        return y <=> other.y;\n    }\n    bool operator==(const Point& other) const = default;\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-does-operator-overloading-affect-move-semantics",
      children: "Q8: How does operator overloading affect move semantics?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Move semantics interact with operator overloading primarily through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator="
      }), " and rvalue reference overloads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "class Buffer {\n    int* data_;\n    size_t size_;\npublic:\n    // Move assignment (in addition to copy assignment)\n    Buffer& operator=(Buffer&& other) noexcept {\n        if (this != &other) {\n            delete[] data_;\n            data_ = other.data_;\n            size_ = other.size_;\n            other.data_ = nullptr;\n            other.size_ = 0;\n        }\n        return *this;\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With the copy-and-swap pattern (passing by value), move assignment comes for free:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Buffer& operator=(Buffer other) noexcept {  // copies if lvalue, moves if rvalue\n    swap(*this, other);\n    return *this;\n}\n// Usage:\nBuffer a, b;\na = b;           // copy (lvalue)\na = std::move(b); // move (xvalue)\na = Buffer(100);  // move (prvalue)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q9-why-must-operator-return-a-reference-what-happens-if-it-returns-by-value",
      children: ["Q9: Why must ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " return a reference? What happens if it returns by value?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator[]"
      }), " must return a reference to make ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[i] = value"
      }), " work. If it returned by value, the expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[i] = value"
      }), " would modify a temporary copy, not the actual array element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct BadArray {\n    int data_[10];\n    int operator[](size_t i) const { return data_[i]; }\n    // No non-const overload --- cannot write arr[i] = v\n    // If it returns int, then arr[0] = 5 compiles but modifies a temporary\n};\n\n// Const and non-const overloads:\nstruct GoodArray {\n    int data_[10];\n    int& operator[](size_t i) { return data_[i]; }        // read/write\n    const int& operator[](size_t i) const { return data_[i]; }  // read-only\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q10-should-you-overload-operator-and-operator-why-or-why-not",
      children: ["Q10: Should you overload ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator&&"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "operator||"
      }), "? Why or why not?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Generally no. The built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), " have short-circuit semantics: if the left operand determines the result, the right operand is never evaluated. Overloaded versions always evaluate both operands before calling the operator function. This breaks expected behavior and can mask bugs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Built-in: short-circuits\nif (ptr && ptr->isValid()) { /* safe: ptr never dereferenced if null */ }\n\n// Overloaded: both evaluated before operator call\nif (safe_ptr && ptr->isValid()) { /* ptr might be dereferenced anyway! */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you must overload them, document the non-short-circuiting behavior explicitly. Most code is better served by named functions like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logical_and()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "618-concept-comparison-tables",
      children: "6.18 Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "member-vs-non-member-decision-matrix",
      children: "Member vs Non-Member Decision Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Member"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-Member"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Friend Needed?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[N]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[N]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[N]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator->"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[N]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator T()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[N]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Convention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If non-member, yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Convention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If non-member, yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Preferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if private access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator=="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Preferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only if private access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator<<"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[N] Wrong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y] Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "return-type-quick-reference",
      children: "Return Type Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modified self"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            }), " (prefix), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            }), " (prefix)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modified self"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++"
            }), " (postfix), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--"
            }), " (postfix)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ", `"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), " (stream)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ostream&"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "istream&"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const T&"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modified self"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "operator T()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converted value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cant-overload-summary",
      children: "Can't Overload Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
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
            children: "Name lookup foundation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type system invariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member pointer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuit + arity 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template metaprogramming essential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "typeid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTTI foundation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "alignof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocation correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time conversion safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamic_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime type safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Const correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "reinterpret_cast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reinterpret cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Representation invariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "noexcept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception spec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "noexcept-SFINAE"
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
            children: "Token level, not expression"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "619-summary",
      children: "6.19 Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operator overloading integrates user-defined types into C++'s expression syntax while respecting the language's fixed precedence, associativity, and arity rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rules"
          }), ": At least one user-defined operand; no new operators; fixed precedence/associativity/arity; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "::"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "."
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "?:"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sizeof"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "typeid"
          }), ", casts, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "alignof"
          }), " cannot be overloaded."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Member vs Non-Member"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "="
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "()"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[]"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "->"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T()"
          }), " must be members. Compound assignment (", (0,jsx_runtime.jsx)(_components.code, {
            children: "+="
          }), ") should be members. Non-members enable symmetric conversion. Stream operators must be non-members."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Arithmetic"
          }), ": Implement compound (", (0,jsx_runtime.jsx)(_components.code, {
            children: "+="
          }), ") first, then binary (", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), ") by copying and applying compound. Return by value for binary, by reference for compound."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Comparison"
          }), ": Define ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<"
          }), " as primaries; derive ", (0,jsx_runtime.jsx)(_components.code, {
            children: "!="
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<="
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">="
          }), " from them. C++20 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<=>"
          }), " auto-generates all six."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Increment"
          }), ": Prefix returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&"
          }), " (no copy); postfix returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T"
          }), " (old value by copy). Prefer prefix."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stream"
          }), ": Return stream reference for chaining. Friend for private access. Non-member by necessity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subscript"
          }), ": Return ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&"
          }), " (lvalue) for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a[i] = v"
          }), ". Provide const overload for read-only access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Function Call"
          }), ": Creates stateful functors usable with STL algorithms. Lambdas are syntactic sugar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conversion"
          }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "explicit operator bool()"
          }), " to prevent accidental arithmetic promotion. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "explicit"
          }), " for narrowing conversions."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Assignment"
          }), ": Return ", (0,jsx_runtime.jsx)(_components.code, {
            children: "T&"
          }), ". Handle self-assignment. Copy-and-swap provides strong exception safety."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Guidelines"
          }), ": \"When in doubt, do as the ints do.\" Implement ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), " in terms of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+="
          }), ". Don't overload ", (0,jsx_runtime.jsx)(_components.code, {
            children: "&&"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "||"
          }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), ". Document non-standard semantics."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-operator-overloading-matters",
      children: "Why Operator Overloading Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operator overloading transforms user-defined types from \"data containers\" into \"types with meaning.\" ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::string"
      }), " without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " is just a character buffer; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::complex"
      }), " without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " is just a pair of doubles. The operators are what make these types ", (0,jsx_runtime.jsx)(_components.em, {
        children: "feel"
      }), " like language primitives. Judicious use produces elegant, readable code. Overuse produces confusion. The balance is the mark of an experienced C++ developer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which operators must be implemented as member functions? Why does the language require this?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference in return type between prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), " and postfix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), "? What performance implication does this have?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why can't you overload ", (0,jsx_runtime.jsx)(_components.code, {
          children: "::"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?:"
        }), "? What fundamental language properties would break?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator<<"
        }), " for stream output must be a non-member function."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the copy-and-swap idiom and what advantages does it provide for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator="
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why should ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operator bool()"
        }), " always be marked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "explicit"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does C++20's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<=>"
        }), " operator simplify comparison operator overloading?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInteger class"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BigInteger"
          }), " class using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<int>"
          }), " of digits. Overload ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">>"
          }), ", prefix/postfix ", (0,jsx_runtime.jsx)(_components.code, {
            children: "++"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "explicit operator bool()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "explicit operator long long()"
          }), ". Handle carries and borrows correctly. Test with values exceeding ", (0,jsx_runtime.jsx)(_components.code, {
            children: "long long"
          }), " range."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Matrix class"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Matrix"
          }), " class with overloaded ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), " (matrix multiplication), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*="
          }), " (scalar), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "()(i,j)"
          }), " for element access, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          }), " for pretty printing, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " for equality. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "friend"
          }), " where needed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Polynomial class"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Polynomial"
          }), " class storing coefficients in a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::map<int, double>"
          }), " (exponent -> coefficient). Overload ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "()"
          }), " for evaluation (substitute x value). Bonus: Overload ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[]"
          }), " to get/set coefficient by exponent."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Smart pointer with operators"
          }), ": Implement a simplified ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SharedPtr<T>"
          }), " that overloads ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "->"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bool()"
          }), " (explicit), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          }), " (nullptr comparison), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "!"
          }), ". Include reference counting."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom iterator with full operator overloads"
        }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Range"
        }), " class that represents a half-open interval ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[start, end)"
        }), " and provides a forward iterator. The iterator must overload ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++"
        }), " (prefix and postfix), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "->"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "=="
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!="
        }), ". Demonstrate range-for support."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "Range r(0, 10);\nfor (auto x : r) {  // requires begin() and end() returning iterators\n    std::cout << x << \" \";  // 0 1 2 3 4 5 6 7 8 9\n}\n"
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