"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[93673],{

/***/ 12716
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_49_interview_php_md_c0b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-49-interview-php-md-c0b.json
const site_docs_courses_laravel_49_interview_php_md_c0b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/49-interview-php","title":"Chapter 49: PHP Interview Q&A","description":"Previous MySQL & Database Interview Q&A","source":"@site/docs/courses/laravel/49-interview-php.md","sourceDirName":"courses/laravel","slug":"/laravel/49-interview-php","permalink":"/ai-engineering-journey/laravel/49-interview-php","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":49,"frontMatter":{"id":"49-interview-php","slug":"/laravel/49-interview-php","title":"Chapter 49: PHP Interview Q&A","sidebar_label":"Chapter 49: PHP Interview Q&A","sidebar_position":49},"sidebar":"course-laravel","previous":{"title":"Chapter 48: Manufacturing Interview Q&A","permalink":"/ai-engineering-journey/laravel/48-interview-manufacturing"},"next":{"title":"MySQL & Database Interview Q&A","permalink":"/ai-engineering-journey/laravel/50-interview-mysql"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/49-interview-php.md


const frontMatter = {
	id: '49-interview-php',
	slug: '/laravel/49-interview-php',
	title: 'Chapter 49: PHP Interview Q&A',
	sidebar_label: 'Chapter 49: PHP Interview Q&A',
	sidebar_position: 49
};
const contentTitle = 'Chapter 49: PHP Interview Q&A';

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "1. PHP Fundamentals",
  "id": "1-php-fundamentals",
  "level": 2
}, {
  "value": "Q1: What is PHP and how does it differ from JavaScript on the backend?",
  "id": "q1-what-is-php-and-how-does-it-differ-from-javascript-on-the-backend",
  "level": 3
}, {
  "value": "Q2: How do PHP variables work? What are the type system basics?",
  "id": "q2-how-do-php-variables-work-what-are-the-type-system-basics",
  "level": 3
}, {
  "value": "Q3: What are the primitive types in PHP?",
  "id": "q3-what-are-the-primitive-types-in-php",
  "level": 3
}, {
  "value": "Q4: What is type juggling and how can it cause bugs?",
  "id": "q4-what-is-type-juggling-and-how-can-it-cause-bugs",
  "level": 3
}, {
  "value": "Q5: What are the different array types in PHP?",
  "id": "q5-what-are-the-different-array-types-in-php",
  "level": 3
}, {
  "value": "Q6: How do <code>isset()</code>, <code>empty()</code>, and <code>is_null()</code> differ?",
  "id": "q6-how-do-isset-empty-and-is_null-differ",
  "level": 3
}, {
  "value": "Q7: Explain the string concatenation operator and how it differs from JavaScript.",
  "id": "q7-explain-the-string-concatenation-operator-and-how-it-differs-from-javascript",
  "level": 3
}, {
  "value": "Q8: What is the difference between single and double quotes in PHP?",
  "id": "q8-what-is-the-difference-between-single-and-double-quotes-in-php",
  "level": 3
}, {
  "value": "Q9: What operators does PHP support for array comparison?",
  "id": "q9-what-operators-does-php-support-for-array-comparison",
  "level": 3
}, {
  "value": "Q10: How do <code>++$i</code> and <code>$i++</code> differ in PHP?",
  "id": "q10-how-do-i-and-i-differ-in-php",
  "level": 3
}, {
  "value": "Q11: How does the <code>switch</code> statement work in PHP? What is the fallthrough behavior?",
  "id": "q11-how-does-the-switch-statement-work-in-php-what-is-the-fallthrough-behavior",
  "level": 3
}, {
  "value": "Q12: What is the null coalescing operator <code>??</code>?",
  "id": "q12-what-is-the-null-coalescing-operator-",
  "level": 3
}, {
  "value": "Q13: What is the spaceship operator <code>&lt;=&gt;</code>?",
  "id": "q13-what-is-the-spaceship-operator-",
  "level": 3
}, {
  "value": "Q14: How do you define and call a function in PHP?",
  "id": "q14-how-do-you-define-and-call-a-function-in-php",
  "level": 3
}, {
  "value": "Q15: What are strict types and how do you enable them?",
  "id": "q15-what-are-strict-types-and-how-do-you-enable-them",
  "level": 3
}, {
  "value": "Q16: How does variable scope work in PHP?",
  "id": "q16-how-does-variable-scope-work-in-php",
  "level": 3
}, {
  "value": "Q17: What are variable variables?",
  "id": "q17-what-are-variable-variables",
  "level": 3
}, {
  "value": "Q18: How does the <code>foreach</code> loop work with arrays and objects?",
  "id": "q18-how-does-the-foreach-loop-work-with-arrays-and-objects",
  "level": 3
}, {
  "value": "Q19: What is <code>list()</code> or short array destructuring?",
  "id": "q19-what-is-list-or-short-array-destructuring",
  "level": 3
}, {
  "value": "Q20: How do you pass arguments by reference?",
  "id": "q20-how-do-you-pass-arguments-by-reference",
  "level": 3
}, {
  "value": "Q21: What are variadic functions in PHP?",
  "id": "q21-what-are-variadic-functions-in-php",
  "level": 3
}, {
  "value": "Q22: What is the difference between <code>require</code>, <code>require_once</code>, <code>include</code>, and <code>include_once</code>?",
  "id": "q22-what-is-the-difference-between-require-require_once-include-and-include_once",
  "level": 3
}, {
  "value": "Q23: How do you work with dates and times in PHP?",
  "id": "q23-how-do-you-work-with-dates-and-times-in-php",
  "level": 3
}, {
  "value": "Q24: What are PHP errors and exceptions? How do they differ?",
  "id": "q24-what-are-php-errors-and-exceptions-how-do-they-differ",
  "level": 3
}, {
  "value": "Q25: What is the <code>@</code> error control operator?",
  "id": "q25-what-is-the--error-control-operator",
  "level": 3
}, {
  "value": "2. Object-Oriented PHP",
  "id": "2-object-oriented-php",
  "level": 2
}, {
  "value": "Q26: How do you define a class with properties and methods?",
  "id": "q26-how-do-you-define-a-class-with-properties-and-methods",
  "level": 3
}, {
  "value": "Q27: What is constructor promotion in PHP 8?",
  "id": "q27-what-is-constructor-promotion-in-php-8",
  "level": 3
}, {
  "value": "Q28: Explain <code>public</code>, <code>protected</code>, and <code>private</code> visibility.",
  "id": "q28-explain-public-protected-and-private-visibility",
  "level": 3
}, {
  "value": "Q29: How does inheritance work in PHP?",
  "id": "q29-how-does-inheritance-work-in-php",
  "level": 3
}, {
  "value": "Q30: What are abstract classes and when should you use them?",
  "id": "q30-what-are-abstract-classes-and-when-should-you-use-them",
  "level": 3
}, {
  "value": "Q31: What is an interface and how does it differ from an abstract class?",
  "id": "q31-what-is-an-interface-and-how-does-it-differ-from-an-abstract-class",
  "level": 3
}, {
  "value": "Q32: What are traits and why would you use them?",
  "id": "q32-what-are-traits-and-why-would-you-use-them",
  "level": 3
}, {
  "value": "Q33: How does trait conflict resolution work?",
  "id": "q33-how-does-trait-conflict-resolution-work",
  "level": 3
}, {
  "value": "Q34: What is the <code>final</code> keyword used for?",
  "id": "q34-what-is-the-final-keyword-used-for",
  "level": 3
}, {
  "value": "Q35: What are magic methods in PHP?",
  "id": "q35-what-are-magic-methods-in-php",
  "level": 3
}, {
  "value": "Q36: What does <code>__clone</code> do?",
  "id": "q36-what-does-__clone-do",
  "level": 3
}, {
  "value": "Q37: How does <code>__serialize</code> / <code>__unserialize</code> work?",
  "id": "q37-how-does-__serialize--__unserialize-work",
  "level": 3
}, {
  "value": "Q38: What is the static keyword and late static binding?",
  "id": "q38-what-is-the-static-keyword-and-late-static-binding",
  "level": 3
}, {
  "value": "Q39: How does <code>instanceof</code> work?",
  "id": "q39-how-does-instanceof-work",
  "level": 3
}, {
  "value": "Q40: What is the <code>::class</code> constant?",
  "id": "q40-what-is-the-class-constant",
  "level": 3
}, {
  "value": "Q41: What is an anonymous class?",
  "id": "q41-what-is-an-anonymous-class",
  "level": 3
}, {
  "value": "Q42: How does type hinting work for object parameters?",
  "id": "q42-how-does-type-hinting-work-for-object-parameters",
  "level": 3
}, {
  "value": "3. Advanced PHP",
  "id": "3-advanced-php",
  "level": 2
}, {
  "value": "Q43: What are namespaces and how do you use them?",
  "id": "q43-what-are-namespaces-and-how-do-you-use-them",
  "level": 3
}, {
  "value": "Q44: How do <code>use</code>, <code>use function</code>, and <code>use const</code> differ?",
  "id": "q44-how-do-use-use-function-and-use-const-differ",
  "level": 3
}, {
  "value": "Q45: How does exception handling work in PHP?",
  "id": "q45-how-does-exception-handling-work-in-php",
  "level": 3
}, {
  "value": "Q46: What is <code>set_exception_handler</code> and when would you use it?",
  "id": "q46-what-is-set_exception_handler-and-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q47: What is the SPL (Standard PHP Library) and what are its most useful classes?",
  "id": "q47-what-is-the-spl-standard-php-library-and-what-are-its-most-useful-classes",
  "level": 3
}, {
  "value": "Q48: How do generators work and why are they useful?",
  "id": "q48-how-do-generators-work-and-why-are-they-useful",
  "level": 3
}, {
  "value": "Q49: What is the difference between <code>yield</code> and <code>yield from</code>?",
  "id": "q49-what-is-the-difference-between-yield-and-yield-from",
  "level": 3
}, {
  "value": "Q50: What are closures and how do they capture variables?",
  "id": "q50-what-are-closures-and-how-do-they-capture-variables",
  "level": 3
}, {
  "value": "Q51: How do arrow functions differ from closures?",
  "id": "q51-how-do-arrow-functions-differ-from-closures",
  "level": 3
}, {
  "value": "Q52: What are callables and how are they used?",
  "id": "q52-what-are-callables-and-how-are-they-used",
  "level": 3
}, {
  "value": "Q53: What is <code>array_map</code>, <code>array_filter</code>, and <code>array_reduce</code>?",
  "id": "q53-what-is-array_map-array_filter-and-array_reduce",
  "level": 3
}, {
  "value": "Q54: How do you handle file uploads in PHP?",
  "id": "q54-how-do-you-handle-file-uploads-in-php",
  "level": 3
}, {
  "value": "Q55: What is output buffering?",
  "id": "q55-what-is-output-buffering",
  "level": 3
}, {
  "value": "Q56: How does PHP handle sessions?",
  "id": "q56-how-does-php-handle-sessions",
  "level": 3
}, {
  "value": "Q57: What are resources in PHP?",
  "id": "q57-what-are-resources-in-php",
  "level": 3
}, {
  "value": "4. PHP 8+ Features",
  "id": "4-php-8-features",
  "level": 2
}, {
  "value": "Q58: What are named arguments?",
  "id": "q58-what-are-named-arguments",
  "level": 3
}, {
  "value": "Q59: What are attributes and how do you define custom ones?",
  "id": "q59-what-are-attributes-and-how-do-you-define-custom-ones",
  "level": 3
}, {
  "value": "Q60: What are readonly properties and classes?",
  "id": "q60-what-are-readonly-properties-and-classes",
  "level": 3
}, {
  "value": "Q61: What are enums in PHP 8.1?",
  "id": "q61-what-are-enums-in-php-81",
  "level": 3
}, {
  "value": "Q62: What are union and intersection types?",
  "id": "q62-what-are-union-and-intersection-types",
  "level": 3
}, {
  "value": "Q63: How does the <code>match</code> expression differ from <code>switch</code>?",
  "id": "q63-how-does-the-match-expression-differ-from-switch",
  "level": 3
}, {
  "value": "Q64: What is the <code>nullsafe</code> operator?",
  "id": "q64-what-is-the-nullsafe-operator",
  "level": 3
}, {
  "value": "Q65: What is the <code>str_contains</code>, <code>str_starts_with</code>, and <code>str_ends_with</code> functions?",
  "id": "q65-what-is-the-str_contains-str_starts_with-and-str_ends_with-functions",
  "level": 3
}, {
  "value": "Q66: How does <code>mixed</code> type work?",
  "id": "q66-how-does-mixed-type-work",
  "level": 3
}, {
  "value": "Q67: What are first-class callable syntax and <code>...$args</code> improvements?",
  "id": "q67-what-are-first-class-callable-syntax-and-args-improvements",
  "level": 3
}, {
  "value": "Q68: What is <code>fibers</code> in PHP 8.1?",
  "id": "q68-what-is-fibers-in-php-81",
  "level": 3
}, {
  "value": "Q69: What is the <code>never</code> return type?",
  "id": "q69-what-is-the-never-return-type",
  "level": 3
}, {
  "value": "Q70: What are <code>array_is_list</code> and array spread in PHP 8.1/8.2?",
  "id": "q70-what-are-array_is_list-and-array-spread-in-php-8182",
  "level": 3
}, {
  "value": "Q71: What are random extension improvements in PHP 8.2/8.3?",
  "id": "q71-what-are-random-extension-improvements-in-php-8283",
  "level": 3
}, {
  "value": "Q72: What are PHP 8.4 property hooks?",
  "id": "q72-what-are-php-84-property-hooks",
  "level": 3
}, {
  "value": "5. Composer &amp; Autoloading",
  "id": "5-composer--autoloading",
  "level": 2
}, {
  "value": "Q73: What is Composer and why is it essential for modern PHP?",
  "id": "q73-what-is-composer-and-why-is-it-essential-for-modern-php",
  "level": 3
}, {
  "value": "Q74: How does PSR-4 autoloading work?",
  "id": "q74-how-does-psr-4-autoloading-work",
  "level": 3
}, {
  "value": "Q75: What is the difference between <code>composer install</code> and <code>composer update</code>?",
  "id": "q75-what-is-the-difference-between-composer-install-and-composer-update",
  "level": 3
}, {
  "value": "Q76: What sections exist in <code>composer.json</code>?",
  "id": "q76-what-sections-exist-in-composerjson",
  "level": 3
}, {
  "value": "Q77: How do you specify PHP version constraints?",
  "id": "q77-how-do-you-specify-php-version-constraints",
  "level": 3
}, {
  "value": "Q78: What is <code>composer.lock</code> and why should you commit it?",
  "id": "q78-what-is-composerlock-and-why-should-you-commit-it",
  "level": 3
}, {
  "value": "Q79: What is the autoloader optimization for production?",
  "id": "q79-what-is-the-autoloader-optimization-for-production",
  "level": 3
}, {
  "value": "Q80: How do Composer scripts work?",
  "id": "q80-how-do-composer-scripts-work",
  "level": 3
}, {
  "value": "Q81: What is the difference between <code>require</code> and <code>require-dev</code>?",
  "id": "q81-what-is-the-difference-between-require-and-require-dev",
  "level": 3
}, {
  "value": "Q82: What is a custom repository in Composer?",
  "id": "q82-what-is-a-custom-repository-in-composer",
  "level": 3
}, {
  "value": "Q83: What is the difference between PSR-0 and PSR-4?",
  "id": "q83-what-is-the-difference-between-psr-0-and-psr-4",
  "level": 3
}, {
  "value": "6. Design Patterns",
  "id": "6-design-patterns",
  "level": 2
}, {
  "value": "Q84: How do you implement a Singleton in PHP?",
  "id": "q84-how-do-you-implement-a-singleton-in-php",
  "level": 3
}, {
  "value": "Q85: How do you implement a Factory pattern in PHP?",
  "id": "q85-how-do-you-implement-a-factory-pattern-in-php",
  "level": 3
}, {
  "value": "Q86: How do you implement the Repository pattern?",
  "id": "q86-how-do-you-implement-the-repository-pattern",
  "level": 3
}, {
  "value": "Q87: How do you implement the Strategy pattern?",
  "id": "q87-how-do-you-implement-the-strategy-pattern",
  "level": 3
}, {
  "value": "Q88: How do you implement the Observer pattern in PHP?",
  "id": "q88-how-do-you-implement-the-observer-pattern-in-php",
  "level": 3
}, {
  "value": "Q89: What is the Dependency Injection pattern and how does PHP implement it?",
  "id": "q89-what-is-the-dependency-injection-pattern-and-how-does-php-implement-it",
  "level": 3
}, {
  "value": "Q90: What is the Adapter pattern in PHP?",
  "id": "q90-what-is-the-adapter-pattern-in-php",
  "level": 3
}, {
  "value": "Q91: What is the Decorator pattern in PHP?",
  "id": "q91-what-is-the-decorator-pattern-in-php",
  "level": 3
}, {
  "value": "Q92: What is the Chain of Responsibility pattern?",
  "id": "q92-what-is-the-chain-of-responsibility-pattern",
  "level": 3
}, {
  "value": "Q93: What is the DTO (Data Transfer Object) pattern?",
  "id": "q93-what-is-the-dto-data-transfer-object-pattern",
  "level": 3
}, {
  "value": "7. Laravel-Era PHP",
  "id": "7-laravel-era-php",
  "level": 2
}, {
  "value": "Q94: How does Laravel&#39;s service container resolve dependencies?",
  "id": "q94-how-does-laravels-service-container-resolve-dependencies",
  "level": 3
}, {
  "value": "Q95: What is dependency injection and how does Laravel implement it?",
  "id": "q95-what-is-dependency-injection-and-how-does-laravel-implement-it",
  "level": 3
}, {
  "value": "Q96: How do Laravel facades work under the hood?",
  "id": "q96-how-do-laravel-facades-work-under-the-hood",
  "level": 3
}, {
  "value": "Q97: What are contracts in Laravel?",
  "id": "q97-what-are-contracts-in-laravel",
  "level": 3
}, {
  "value": "Q98: What is contextual binding and how does it solve real problems?",
  "id": "q98-what-is-contextual-binding-and-how-does-it-solve-real-problems",
  "level": 3
}, {
  "value": "Q99: How does Laravel&#39;s pipeline work and why is it powerful?",
  "id": "q99-how-does-laravels-pipeline-work-and-why-is-it-powerful",
  "level": 3
}, {
  "value": "Q100: How does the service provider boot order work?",
  "id": "q100-how-does-the-service-provider-boot-order-work",
  "level": 3
}, {
  "value": "Q101: How does <code>app()-&gt;bind()</code> vs <code>app()-&gt;singleton()</code> affect shared state?",
  "id": "q101-how-does-app-bind-vs-app-singleton-affect-shared-state",
  "level": 3
}, {
  "value": "Q102: What is the <code>defer</code> property on service providers?",
  "id": "q102-what-is-the-defer-property-on-service-providers",
  "level": 3
}, {
  "value": "Q103: How do you implement the service container pattern without Laravel?",
  "id": "q103-how-do-you-implement-the-service-container-pattern-without-laravel",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
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
        id: "chapter-49-php-interview-qa",
        children: "Chapter 49: PHP Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/48-interview-manufacturing",
          children: "Manufacturing Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/50-interview-mysql",
          children: "MySQL & Database Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the most frequently asked PHP interview questions across fundamentals, object-oriented programming, advanced features, PHP 8+ syntax, Composer, design patterns, and Laravel-era PHP concepts. Each answer includes practical code examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP interview questions covering fundamentals, OOP, advanced features, PHP 8+, Composer, design patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP syntax, OOP principles, type system, Composer autoloading, design patterns, PHP 8 features"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q&A format with practical code examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PHP fundamentals, OOP, Composer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts]\n    B[Interview Questions]\n    C[Code Examples]\n    D[Best Practices]\n    E[Common Pitfalls]\n    A --> B\n    B --> C\n    C --> D\n    D --> E\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-php-fundamentals",
      children: "1. PHP Fundamentals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/49-interview-php.png",
        alt: "PHP Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-php-and-how-does-it-differ-from-javascript-on-the-backend",
      children: "Q1: What is PHP and how does it differ from JavaScript on the backend?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. Unlike JavaScript (which runs in the browser or via Node.js), PHP executes entirely on the server, generates HTML sent to the client, and is naturally synchronous and blocking per-request. PHP's shared-nothing architecture means each request starts fresh with no in-memory state, unlike Node.js which maintains a persistent process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// PHP: runs once per request, outputs directly\n<?php echo \"Hello from the server at \" . date('Y-m-d H:i:s'); ?>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-do-php-variables-work-what-are-the-type-system-basics",
      children: "Q2: How do PHP variables work? What are the type system basics?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP is a dynamically typed language. Variables are prefixed with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$"
      }), ", require no explicit type declaration, and can change type at runtime. PHP 8 introduces union types in function signatures but the underlying engine still juggles types internally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$name = \"Alice\";           // string\n$age = 30;                 // int\n$rate = 99.9;              // float\n$active = true;            // bool\n$items = [1, 2, 3];        // array\n$result = null;            // null\n$obj = new stdClass();     // object\n\n$age = \"thirty\";           // allowed → type changed at runtime\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-are-the-primitive-types-in-php",
      children: "Q3: What are the primitive types in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP has 10 primitive types: 4 scalar (", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), "), 4 compound (", (0,jsx_runtime.jsx)(_components.code, {
        children: "array"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "object"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callable"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iterable"
      }), "), and 2 special (", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resource"
      }), "). PHP 8 added ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mixed"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "never"
      }), " as pseudo-types, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " can now appear as standalone types in union type declarations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function log(mixed $data): void { var_dump($data); }\nfunction abort(): never { exit('Fatal'); }\nfunction find(string $id): User|null { /* ... */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-type-juggling-and-how-can-it-cause-bugs",
      children: "Q4: What is type juggling and how can it cause bugs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP automatically coerces types when operators expect specific types. This \"type juggling\" can lead to surprising comparisons, especially with loose equality (", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), "). Always use strict comparison (", (0,jsx_runtime.jsx)(_components.code, {
        children: "==="
      }), ") unless coercion is intentional."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "var_dump(\"42\" == 42);    // true (juggled)\nvar_dump(\"42\" === 42);   // false (strict)\nvar_dump(0 == \"abc\");    // true (PHP 7, \"abc\" cast to 0)\nvar_dump(0 == \"abc\");    // false (PHP 8, string-to-int comparison is numeric)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-are-the-different-array-types-in-php",
      children: "Q5: What are the different array types in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP has one array type → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array"
      }), " → which can be either indexed (sequential integer keys) or associative (string keys). Both can mix within the same array. PHP 8.1 adds ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_is_list()"
      }), " to distinguish sequential arrays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$indexed = ['a', 'b', 'c'];\n$assoc = ['name' => 'Alice', 'age' => 30];\n$mixed = [0 => 'x', 'y' => 'z'];\n\nvar_dump(array_is_list($indexed)); // true (PHP 8.1+)\nvar_dump(array_is_list($assoc));   // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-how-do-isset-empty-and-is_null-differ",
      children: ["Q6: How do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isset()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "empty()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_null()"
      }), " differ?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isset()"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " if a variable is set and not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "empty()"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " if a variable is falsy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "''"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'0'"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), "). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_null()"
      }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " only if the variable is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " or unset (with a warning)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$x = 0;\nvar_dump(isset($x));    // true (0 is set)\nvar_dump(empty($x));    // true (0 is falsy)\nvar_dump(is_null($x));  // false (0 is not null)\n\n$y = null;\nvar_dump(isset($y));    // false\nvar_dump(empty($y));    // true\nvar_dump(is_null($y));  // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-the-string-concatenation-operator-and-how-it-differs-from-javascript",
      children: "Q7: Explain the string concatenation operator and how it differs from JavaScript."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), " (dot) for string concatenation, unlike JavaScript's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), ". PHP uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " only for numeric addition. Complex strings can use double-quoted interpolation or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sprintf()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$greeting = 'Hello, ' . 'World!';\n$score = \"You scored: {$points}/100\";\n$formatted = sprintf('Hello %s, you have %d new messages', $name, $count);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-difference-between-single-and-double-quotes-in-php",
      children: "Q8: What is the difference between single and double quotes in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Single-quoted strings are literal → only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\\\"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\'"
      }), " are interpreted as escape sequences. Double-quoted strings interpret variable interpolation (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$var"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{$var}"
      }), ") and escape sequences (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\n"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\t"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\$"
      }), ", etc.). Double quotes are slightly slower but rarely a concern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$name = 'Alice';\necho 'Hello $name';     // Hello $name (literal)\necho \"Hello $name\";     // Hello Alice (interpolated)\necho \"Line1\\nLine2\";    // newline in output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-operators-does-php-support-for-array-comparison",
      children: "Q9: What operators does PHP support for array comparison?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " union merges arrays (left-hand keys take precedence). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), " loose equality checks same key/value pairs regardless of order. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "==="
      }), " strict equality requires same key/value pairs in same order and same types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$a = ['a', 'b'];\n$b = [0 => 'a', 1 => 'b'];\n$c = [1 => 'b', 0 => 'a'];\n\nvar_dump($a == $c);   // true (same key/value)\nvar_dump($a === $b);  // true (same order)\nvar_dump($a === $c);  // false (different order)\n\n$d = $a + ['x', 'y']; // ['a', 'b'] → union ignores right duplicates\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q10-how-do-i-and-i-differ-in-php",
      children: ["Q10: How do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++$i"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$i++"
      }), " differ in PHP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++$i"
      }), " (pre-increment) increments the variable and returns the new value. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$i++"
      }), " (post-increment) returns the current value then increments. The same applies to decrement operators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$i = 5;\necho ++$i;  // 6 (i becomes 6, returns 6)\necho $i;    // 6\n\n$j = 5;\necho $j++;  // 5 (returns 5, then j becomes 6)\necho $j;    // 6\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q11-how-does-the-switch-statement-work-in-php-what-is-the-fallthrough-behavior",
      children: ["Q11: How does the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " statement work in PHP? What is the fallthrough behavior?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " compares loosely (", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), "). Each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "case"
      }), " execution falls through to the next unless terminated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), ". Missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " is a common bug. PHP 8.0 introduces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "match"
      }), " which is strict (", (0,jsx_runtime.jsx)(_components.code, {
        children: "==="
      }), ") and returns values without fallthrough."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$status = 2;\nswitch ($status) {\n    case 1:\n        echo 'Pending';\n        break;\n    case 2:\n        echo 'Active';\n        // break missing → falls through!\n    case 3:\n        echo 'Archived';  // also runs when status is 2\n        break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q12-what-is-the-null-coalescing-operator-",
      children: ["Q12: What is the null coalescing operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "??"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "??"
      }), " operator returns the left operand if it exists and is not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), "; otherwise returns the right operand. It suppresses undefined-key notices. PHP 7.4 introduced the null coalescing assignment ", (0,jsx_runtime.jsx)(_components.code, {
        children: "??="
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$username = $_GET['user'] ?? 'Guest';        // avoids undefined index notice\n$count = $cache['visits'] ?? $this->count(); // function short-circuit\n$data['key'] ??= 'default';                   // assigns only if null\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q13-what-is-the-spaceship-operator-",
      children: ["Q13: What is the spaceship operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<=>"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The spaceship operator performs combined comparison: returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-1"
      }), " if left < right, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " if equal, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1"
      }), " if left > right. It's essential for custom sort callbacks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function sortUsers(User $a, User $b): int {\n    return $a->score <=> $b->score;  // ascending\n}\n\n$users = ['Charlie', 'Alice', 'Bob'];\nusort($users, fn($a, $b) => $a <=> $b); // ['Alice', 'Bob', 'Charlie']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-do-you-define-and-call-a-function-in-php",
      children: "Q14: How do you define and call a function in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Functions are defined with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "function"
      }), " keyword, can have type hints for parameters and return types, and support default values, variadic arguments, and nullable types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function calculateTotal(float $price, int $qty = 1, ?float $discount = null): float\n{\n    $total = $price * $qty;\n    if ($discount !== null) {\n        $total *= (1 - $discount / 100);\n    }\n    return $total;\n}\n\necho calculateTotal(29.99, 3);                 // 89.97\necho calculateTotal(100, 1, 15.0);             // 85.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-what-are-strict-types-and-how-do-you-enable-them",
      children: "Q15: What are strict types and how do you enable them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "declare(strict_types=1)"
      }), " placed at the top of a PHP file enforces strict type checking for function calls within that file. Without it, PHP coerces argument types → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " arguments accept ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float"
      }), " and coerce ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"42\""
      }), " strings silently. Strict types throw a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TypeError"
      }), " on mismatch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "declare(strict_types=1);\n\nfunction sum(int $a, int $b): int {\n    return $a + $b;\n}\n\nsum(3, 4);      // 7\nsum(3, 4.5);    // TypeError: must be of type int\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-does-variable-scope-work-in-php",
      children: "Q16: How does variable scope work in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP has function scope → variables defined outside a function are not accessible inside unless explicitly ", (0,jsx_runtime.jsx)(_components.code, {
        children: "global"
      }), " or passed via parameters. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "global"
      }), " keyword imports a reference to the outer scope. Static variables persist across function calls within the same request."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$counter = 0;\n\nfunction increment(): int {\n    static $count = 0;   // persists across calls\n    global $counter;     // imports outer scope\n    $counter++;\n    return ++$count;\n}\n\necho increment(); // 1 (count=1, counter=1)\necho increment(); // 2 (count=2, counter=2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-what-are-variable-variables",
      children: "Q17: What are variable variables?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Variable variables use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$$name"
      }), " to access a variable whose name is the value of another variable. They are rarely used in modern PHP due to readability concerns → use arrays or dynamic access instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$name = 'color';\n$color = 'red';\necho $$name;       // red (accesses $color)\necho ${$name};     // red (explicit syntax)\n\n// Prefer arrays:\n$props = ['color' => 'red'];\necho $props[$name]; // red\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q18-how-does-the-foreach-loop-work-with-arrays-and-objects",
      children: ["Q18: How does the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "foreach"
      }), " loop work with arrays and objects?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "foreach"
      }), " iterates over arrays and traversable objects. By default it copies the array (unless the array is a reference or has large internals). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&$value"
      }), " for by-reference iteration to modify the original."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$items = ['a', 'b', 'c'];\nforeach ($items as $key => $value) {\n    echo \"$key: $value\\n\";\n}\n\n// Modify in place\nforeach ($items as &$value) {\n    $value = strtoupper($value);\n}\nunset($value); // break the reference → important!\n\nvar_dump($items); // ['A', 'B', 'C']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q19-what-is-list-or-short-array-destructuring",
      children: ["Q19: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list()"
      }), " or short array destructuring?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list()"
      }), " and its short ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[]"
      }), " syntax unpack array values into variables. Works for indexed and associative arrays (PHP 7.1+). Nested destructuring is also supported."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$user = ['Alice', 30, 'alice@example.com'];\n[$name, $age, $email] = $user;\n\n// Associative (PHP 7.1+)\n$data = ['name' => 'Bob', 'age' => 25];\n['name' => $name, 'age' => $age] = $data;\n\n// Nested\n$matrix = [[1, 2], [3, 4]];\nforeach ($matrix as [$a, $b]) {\n    echo \"$a + $b = \" . ($a + $b) . \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-pass-arguments-by-reference",
      children: "Q20: How do you pass arguments by reference?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Prepend ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " to the parameter in the function definition. The caller passes the variable normally; any mutation inside the function affects the original variable. References prevent copying large data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function appendFooter(string &$content): void {\n    $content .= \"\\n<hr><p>Footer</p>\";\n}\n\n$html = \"<h1>Title</h1>\";\nappendFooter($html);\necho $html; // contains footer text\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-what-are-variadic-functions-in-php",
      children: "Q21: What are variadic functions in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Variadic functions use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "..."
      }), " (splat operator) in the parameter list to accept any number of arguments, which are collected into an array. The splat operator also unpacks arrays when calling a function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function sumAll(int ...$numbers): int {\n    return array_sum($numbers);\n}\n\necho sumAll(1, 2, 3, 4, 5); // 15\n\n// Unpacking when calling\n$args = [10, 20, 30];\necho sumAll(...$args); // 60\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q22-what-is-the-difference-between-require-require_once-include-and-include_once",
      children: ["Q22: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require_once"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "include"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "include_once"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " All four import a PHP file. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require"
      }), " causes a fatal error if the file is missing; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "include"
      }), " emits a warning and continues. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_once"
      }), " variants use an internal tracker to prevent the same file from being loaded more than once, which avoids redeclaration errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "require 'config.php';          // fatal if missing\ninclude 'sidebar.php';         // warning if missing\nrequire_once 'vendor/autoload.php'; // load once, fatal if missing\ninclude_once 'helpers.php';    // load once, warning if missing\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-how-do-you-work-with-dates-and-times-in-php",
      children: "Q23: How do you work with dates and times in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateTime"
      }), " class (and its immutable sibling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateTimeImmutable"
      }), ") provide object-oriented date manipulation. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Carbon"
      }), " is the community standard in Laravel, extending ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DateTimeImmutable"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$now = new DateTimeImmutable('now', new DateTimeZone('UTC'));\n$future = $now->modify('+7 days');\necho $future->format('Y-m-d H:i:s');\n\n$interval = $now->diff(new DateTimeImmutable('2026-01-01'));\necho $interval->days; // days until Jan 1 2026\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-what-are-php-errors-and-exceptions-how-do-they-differ",
      children: "Q24: What are PHP errors and exceptions? How do they differ?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Errors (E_WARNING, E_NOTICE, E_PARSE) are legacy PHP-level issues. Exceptions are objects you can throw and catch. Since PHP 7, most errors can be caught via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Error"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Throwable"
      }), ". Exceptions should represent recoverable application problems; errors represent runtime problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "try {\n    $result = divide(10, 0);\n} catch (DivisionByZeroError $e) {\n    echo \"Math error: \" . $e->getMessage();\n} catch (Throwable $e) {\n    echo \"Something went wrong: \" . $e->getMessage();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q25-what-is-the--error-control-operator",
      children: ["Q25: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@"
      }), " error control operator?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@"
      }), " operator suppresses errors and warnings from an expression. It is generally discouraged because it masks real problems makes debugging difficult. Use proper error handling instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$content = @file_get_contents('missing.txt');\nif ($content === false) {\n    // Handle failure explicitly\n    $content = 'Fallback content';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-object-oriented-php",
      children: "2. Object-Oriented PHP"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-how-do-you-define-a-class-with-properties-and-methods",
      children: "Q26: How do you define a class with properties and methods?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Classes use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "class"
      }), " keyword. Properties have visibility modifiers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), "). Methods are functions inside the class. PHP 8.0+ supports constructor promotion for concise property declarations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User\n{\n    public function __construct(\n        private string $name,\n        private int $age,\n        private array $roles = []\n    ) {}\n\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    public function hasRole(string $role): bool\n    {\n        return in_array($role, $this->roles, true);\n    }\n}\n\n$user = new User('Alice', 30, ['admin']);\necho $user->getName(); // Alice\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-what-is-constructor-promotion-in-php-8",
      children: "Q27: What is constructor promotion in PHP 8?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Constructor promotion combines property declaration, constructor parameter, and assignment into one syntax. Public, protected, or private on the parameter automatically creates and assigns the property. It reduces boilerplate significantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Before PHP 8\nclass Order {\n    private string $id;\n    private float $total;\n    public function __construct(string $id, float $total) {\n        $this->id = $id;\n        $this->total = $total;\n    }\n}\n\n// PHP 8\nclass Order {\n    public function __construct(\n        private string $id,\n        private float $total\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q28-explain-public-protected-and-private-visibility",
      children: ["Q28: Explain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " visibility."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), " → accessible from anywhere. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "protected"
      }), " → accessible only within the class itself and its child classes. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "private"
      }), " → accessible only within the defining class, not from children. This applies to both properties and methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class ParentClass {\n    public $pub = 1;\n    protected $prot = 2;\n    private $priv = 3;\n}\n\nclass Child extends ParentClass {\n    public function show(): void {\n        echo $this->pub;   // 1 (ok)\n        echo $this->prot;  // 2 (ok)\n        echo $this->priv;  // undefined! (private to parent)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-how-does-inheritance-work-in-php",
      children: "Q29: How does inheritance work in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP supports single class inheritance using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extends"
      }), ". A child class inherits all public and protected methods/properties from the parent. The child can override methods, call parent methods with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parent::"
      }), ", and add new functionality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Animal {\n    public function __construct(protected string $name) {}\n    public function speak(): string { return '...'; }\n}\n\nclass Dog extends Animal {\n    public function speak(): string {\n        return \"{$this->name} says Woof!\";\n    }\n}\n\nclass Cat extends Animal {\n    public function speak(): string {\n        return parent::speak() . \" Actually, {$this->name} says Meow!\";\n    }\n}\n\n$dog = new Dog('Rex');\necho $dog->speak(); // Rex says Woof!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q30-what-are-abstract-classes-and-when-should-you-use-them",
      children: "Q30: What are abstract classes and when should you use them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Abstract classes (declared ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abstract"
      }), ") cannot be instantiated directly. They define a base template with some implemented methods and some abstract method signatures that children must implement. Use when classes share state or behavior but need to enforce certain method contracts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "abstract class PaymentGateway\n{\n    public function __construct(protected array $config) {}\n\n    abstract public function charge(float $amount, array $payload): array;\n\n    public function formatAmount(float $amount): string\n    {\n        return number_format($amount, 2);\n    }\n}\n\nclass StripeGateway extends PaymentGateway\n{\n    public function charge(float $amount, array $payload): array\n    {\n        return ['status' => 'success', 'amount' => $this->formatAmount($amount)];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-what-is-an-interface-and-how-does-it-differ-from-an-abstract-class",
      children: "Q31: What is an interface and how does it differ from an abstract class?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " An interface defines a contract → method signatures without any implementation. A class can implement multiple interfaces (unlike classes which extend only one). Abstract classes can have properties, implemented methods, and constructor logic. Use interfaces when you only want to enforce a shape, not share logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface LoggerInterface {\n    public function log(string $message, string $level = 'info'): void;\n}\n\ninterface Cacheable {\n    public function cacheKey(): string;\n    public function ttl(): int;\n}\n\nclass UserService implements LoggerInterface, Cacheable {\n    public function log(string $message, string $level = 'info'): void {\n        // implementation\n    }\n    public function cacheKey(): string { return 'users'; }\n    public function ttl(): int { return 3600; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q32-what-are-traits-and-why-would-you-use-them",
      children: "Q32: What are traits and why would you use them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Traits are reusable code snippets that can be composed into classes, solving PHP's single-inheritance limitation. A trait cannot be instantiated alone → it's mixed into a class. Traits can have properties, methods, abstract methods, and even use other traits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "trait Timestampable\n{\n    public function __construct(\n        private ?DateTimeImmutable $createdAt = null,\n        private ?DateTimeImmutable $updatedAt = null\n    ) {\n        $this->createdAt ??= new DateTimeImmutable();\n    }\n\n    public function markUpdated(): void\n    {\n        $this->updatedAt = new DateTimeImmutable();\n    }\n}\n\ntrait SoftDeletes\n{\n    private ?DateTimeImmutable $deletedAt = null;\n\n    public function delete(): void\n    {\n        $this->deletedAt = new DateTimeImmutable();\n    }\n}\n\nclass Post\n{\n    use Timestampable, SoftDeletes;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q33-how-does-trait-conflict-resolution-work",
      children: "Q33: How does trait conflict resolution work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When two traits define the same method, PHP requires explicit resolution. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "insteadof"
      }), " to choose one trait's method, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), " to alias a method (keeping both available under different names)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "trait A { public function greet(): string { return 'Hi from A'; } }\ntrait B { public function greet(): string { return 'Hi from B'; } }\n\nclass Greeter {\n    use A, B {\n        A::greet insteadof B;  // use A's greet as the default\n        B::greet as greetFromB; // alias B's greet\n    }\n}\n\n$g = new Greeter();\necho $g->greet();      // Hi from A\necho $g->greetFromB(); // Hi from B\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q34-what-is-the-final-keyword-used-for",
      children: ["Q34: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " keyword used for?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "final"
      }), " prevents a method from being overridden in child classes, or prevents a class from being extended at all. Use it when the implementation is complete and should not be altered by subclasses → it signals design intent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "final class Configuration\n{\n    public static function get(string $key): mixed { /* ... */ }\n}\n\nclass PaymentProcessor {\n    final public function process(): void { /* core logic not meant to change */ }\n}\n\n// class ExtendedConfig extends Configuration {} // Fatal error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-what-are-magic-methods-in-php",
      children: "Q35: What are magic methods in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Magic methods are special methods prefixed with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__"
      }), " that PHP calls implicitly. Key ones: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__construct"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__destruct"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__get"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__set"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__call"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__callStatic"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__toString"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__invoke"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__clone"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__isset"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__unset"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__sleep"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__wakeup"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__serialize"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__unserialize"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class MagicBag\n{\n    private array $data = [];\n\n    public function __get(string $name): mixed\n    {\n        return $this->data[$name] ?? null;\n    }\n\n    public function __set(string $name, mixed $value): void\n    {\n        $this->data[$name] = $value;\n    }\n\n    public function __call(string $name, array $args): mixed\n    {\n        if (str_starts_with($name, 'get')) {\n            $prop = lcfirst(substr($name, 3));\n            return $this->data[$prop] ?? null;\n        }\n        throw new BadMethodCallException(\"$name not found\");\n    }\n\n    public function __toString(): string\n    {\n        return json_encode($this->data);\n    }\n\n    public function __invoke(string $key): mixed\n    {\n        return $this->data[$key] ?? null;\n    }\n}\n\n$bag = new MagicBag();\n$bag->name = 'Alice';\necho $bag->name;    // Alice (via __get)\necho $bag->getName(); // Alice (via __call)\necho $bag('name');  // Alice (via __invoke)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q36-what-does-__clone-do",
      children: ["Q36: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__clone"
      }), " do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__clone"
      }), " is called after an object is cloned with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clone"
      }), ". It allows deep-copying referenced properties; otherwise PHP performs a shallow copy (references remain shared)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class UserPreferences\n{\n    public function __construct(\n        public array $settings = []\n    ) {}\n\n    public function __clone(): void\n    {\n        $this->settings = array_merge([], $this->settings); // deep copy array\n    }\n}\n\n$original = new UserPreferences(['theme' => 'dark']);\n$clone = clone $original;\n$clone->settings['theme'] = 'light';\n\nprint_r($original->settings['theme']); // dark (unchanged)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q37-how-does-__serialize--__unserialize-work",
      children: ["Q37: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__serialize"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__unserialize"
      }), " work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Added in PHP 7.4, these replace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__sleep"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__wakeup"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__serialize"
      }), " returns an array of data to be serialized. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__unserialize"
      }), " receives that array and restores the object state. They are cleaner and avoid the ambiguous return value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__sleep"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SessionUser\n{\n    public function __construct(\n        private int $id,\n        private string $name,\n        private string $passwordHash\n    ) {}\n\n    public function __serialize(): array\n    {\n        return ['id' => $this->id, 'name' => $this->name];\n    }\n\n    public function __unserialize(array $data): void\n    {\n        $this->id = $data['id'];\n        $this->name = $data['name'];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-what-is-the-static-keyword-and-late-static-binding",
      children: "Q38: What is the static keyword and late static binding?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static::"
      }), " enables late static binding → the referenced class is determined at runtime based on the actual class called, not the class where the method is defined. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "self::"
      }), " always resolves to the class where the method is written."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Base {\n    public static function who(): string { return __CLASS__; }\n    public static function testSelf(): string { return self::who(); }\n    public static function testStatic(): string { return static::who(); }\n}\n\nclass Child extends Base {\n    public static function who(): string { return __CLASS__; }\n}\n\necho Child::testSelf();   // Base (self resolves at compile time)\necho Child::testStatic(); // Child (static resolves at runtime)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q39-how-does-instanceof-work",
      children: ["Q39: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instanceof"
      }), " work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instanceof"
      }), " checks whether an object is an instance of a class, or implements an interface, or extends a parent class. It also supports class name strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User {}\ninterface Notifiable {}\nclass AdminUser extends User implements Notifiable {}\n\n$admin = new AdminUser();\n\nvar_dump($admin instanceof AdminUser);  // true\nvar_dump($admin instanceof User);       // true\nvar_dump($admin instanceof Notifiable); // true\nvar_dump($admin instanceof DateTime);   // false\n\n// Dynamic class name check\n$class = 'User';\nvar_dump($admin instanceof $class); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q40-what-is-the-class-constant",
      children: ["Q40: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "::class"
      }), " constant?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ClassName::class"
      }), " returns the fully qualified class name as a string. It's resolved at compile time, making refactoring safe (IDE rename updates it). It's widely used in Laravel for service container bindings and route controller definitions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "namespace App\\Models;\n\nclass Product {}\n\n// Anywhere:\n$name = Product::class;         // 'App\\Models\\Product'\napp()->bind(Product::class, fn() => new Product());\n\n// Route resolution\nRoute::get('/products', [ProductController::class, 'index']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q41-what-is-an-anonymous-class",
      children: "Q41: What is an anonymous class?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Anonymous classes are defined inline without a name, useful for one-off objects, mocks in tests, or simple implementations. They can extend classes, implement interfaces, and use traits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface Greeter {\n    public function greet(string $name): string;\n}\n\nfunction sayHello(Greeter $greeter, string $name): void {\n    echo $greeter->greet($name);\n}\n\nsayHello(new class implements Greeter {\n    public function greet(string $name): string {\n        return \"Hey there, $name!\";\n    }\n}, 'Alice'); // Hey there, Alice!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q42-how-does-type-hinting-work-for-object-parameters",
      children: "Q42: How does type hinting work for object parameters?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP supports type hinting for classes, interfaces, arrays, callables, iterables, and primitives (int, float, string, bool, void, never, mixed). Nullable types use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?Type"
      }), " syntax. Union types (PHP 8) allow multiple types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function processUser(User $user): void {}          // class type\nfunction sendTo(Notifiable $notifiable): void {}    // interface type\nfunction items(?array $data): void {}                // nullable\nfunction output(int|string $value): void {}          // union (PHP 8)\nfunction handle(mixed $input): int|false {}          // mixed + union return\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-advanced-php",
      children: "3. Advanced PHP"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q43-what-are-namespaces-and-how-do-you-use-them",
      children: "Q43: What are namespaces and how do you use them?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Namespaces organize code into logical groups, prevent class name collisions, and follow the directory structure. Declared with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace"
      }), " at the top of a file. Fully qualified names start with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// src/Payments/StripeGateway.php\nnamespace App\\Payments;\n\nclass StripeGateway {}\n\n// src/Controllers/PaymentController.php\nnamespace App\\Controllers;\n\nuse App\\Payments\\StripeGateway;\n\nclass PaymentController {\n    public function __construct(\n        private StripeGateway $gateway\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q44-how-do-use-use-function-and-use-const-differ",
      children: ["Q44: How do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use function"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use const"
      }), " differ?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use"
      }), " imports classes/interfaces/traits. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use function"
      }), " imports functions. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use const"
      }), " imports constants. All can alias with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), ". Grouped imports (PHP 7) reduce repetition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use App\\Models\\{User, Post, Comment};\nuse function App\\Helpers\\{formatDate, slugify};\nuse const App\\Config\\{MAX_RETRIES, TIMEOUT};\nuse App\\Exceptions\\HttpException as HttpError;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-how-does-exception-handling-work-in-php",
      children: "Q45: How does exception handling work in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try"
      }), " blocks wrap risky code. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "catch"
      }), " blocks handle specific exception types (multiple allowed). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finally"
      }), " runs regardless of exception. PHP 8.0+ lets you capture the exception as nullable and use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "match"
      }), "-style catch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class PaymentFailedException extends \\RuntimeException {}\n\ntry {\n    $payment = $gateway->charge(100);\n} catch (PaymentFailedException $e) {\n    log::error('Payment failed: ' . $e->getMessage());\n    throw $e; // re-throw\n} catch (\\HttpException $e) {\n    // handle HTTP issues\n} finally {\n    $this->em->close(); // always execute\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q46-what-is-set_exception_handler-and-when-would-you-use-it",
      children: ["Q46: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "set_exception_handler"
      }), " and when would you use it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "set_exception_handler"
      }), " sets a global catch-all for uncaught exceptions, allowing a centralized error response (e.g., JSON error for an API). It's called as the last resort before PHP terminates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "set_exception_handler(function (\\Throwable $e): void {\n    http_response_code(500);\n    header('Content-Type: application/json');\n    echo json_encode([\n        'error' => $e->getMessage(),\n        'file' => $e->getFile(),\n        'line' => $e->getLine(),\n    ]);\n});\n\n// Any uncaught exception now renders JSON\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-what-is-the-spl-standard-php-library-and-what-are-its-most-useful-classes",
      children: "Q47: What is the SPL (Standard PHP Library) and what are its most useful classes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " SPL provides data structures, iterators, file handling, and interfaces. Key classes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArrayObject"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplStack"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplQueue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplPriorityQueue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplFileInfo"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplObjectStorage"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DirectoryIterator"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use \\SplQueue;\n\n$queue = new SplQueue();\n$queue->enqueue('task1');\n$queue->enqueue('task2');\n\necho $queue->dequeue(); // task1 (FIFO)\n\n// SplObjectStorage → map objects to data\n$storage = new SplObjectStorage();\n$user = new User('Alice');\n$storage[$user] = ['visits' => 42];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q48-how-do-generators-work-and-why-are-they-useful",
      children: "Q48: How do generators work and why are they useful?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Generators use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " to produce values lazily without building the entire result set in memory. The function pauses at each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " and resumes when the next value is requested. Critical for processing large datasets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function processLargeFile(string $path): \\Generator\n{\n    $handle = fopen($path, 'r');\n    while (($line = fgets($handle)) !== false) {\n        yield trim($line);\n    }\n    fclose($handle);\n}\n\n// Memory: O(1) → only one line in memory at a time\nforeach (processLargeFile('huge.log') as $line) {\n    if (str_contains($line, 'ERROR')) {\n        echo $line . \"\\n\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q49-what-is-the-difference-between-yield-and-yield-from",
      children: ["Q49: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield"
      }), " emits a single value (and optionally a key). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yield from"
      }), " delegates to another generator, traversable, or array, yielding all its values transparently. It also supports recursion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function countUpTo(int $max): \\Generator\n{\n    for ($i = 1; $i <= $max; $i++) {\n        yield $i;\n    }\n}\n\nfunction combined(): \\Generator\n{\n    yield from countUpTo(3);    // delegate to another generator\n    yield 'separator';\n    yield from [7, 8, 9];       // delegate to array\n}\n\nforeach (combined() as $value) {\n    echo \"$value \"; // 1 2 3 separator 7 8 9\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q50-what-are-closures-and-how-do-they-capture-variables",
      children: "Q50: What are closures and how do they capture variables?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Closures are anonymous functions that can capture variables from the surrounding scope via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use"
      }), ". By default, captured variables are copied (value capture); use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " for reference capture. PHP 7.4 introduced arrow functions which implicitly capture by value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$multiplier = 3;\n\n$times = function (int $n) use ($multiplier): int {\n    return $n * $multiplier;\n};\n\necho $times(5); // 15\n\n// Reference capture\n$counter = 0;\n$increment = function () use (&$counter): void {\n    $counter++;\n};\n$increment();\necho $counter; // 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q51-how-do-arrow-functions-differ-from-closures",
      children: "Q51: How do arrow functions differ from closures?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Arrow functions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "fn"
      }), ") are a shorter syntax for closures that automatically capture outer variables by value and cannot use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "use"
      }), ". They are limited to a single expression (the return value). They cannot modify captured variables or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " reference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$numbers = [1, 2, 3, 4, 5];\n\n// Closure:\n$even = array_filter($numbers, function (int $n): bool {\n    return $n % 2 === 0;\n});\n\n// Arrow function (PHP 7.4+):\n$even = array_filter($numbers, fn(int $n): bool => $n % 2 === 0);\n\n// Implicit parent scope access:\n$factor = 2;\n$doubled = array_map(fn(int $n) => $n * $factor, $numbers);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-what-are-callables-and-how-are-they-used",
      children: "Q52: What are callables and how are they used?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A callable is anything that can be called as a function: a closure, a function name string, an array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[$object, 'method']"
      }), ", an invokable object, or a static call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "['ClassName', 'method']"
      }), ". Functions accepting callables use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callable"
      }), " type hint or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_callable()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function execute(callable $callback, mixed ...$args): mixed\n{\n    return $callback(...$args);\n}\n\necho execute(fn($a, $b) => $a + $b, 5, 3); // 8\necho execute('strtoupper', 'hello');        // HELLO\necho execute(['MathHelper', 'square'], 4);  // 16 (static method)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q53-what-is-array_map-array_filter-and-array_reduce",
      children: ["Q53: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_map"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_filter"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_reduce"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " These are higher-order array functions. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_map"
      }), " transforms each element. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_filter"
      }), " keeps elements passing a truth test. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_reduce"
      }), " iteratively accumulates a value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$items = [1, 2, 3, 4, 5];\n\n$doubled = array_map(fn(int $n): int => $n * 2, $items);\n// [2, 4, 6, 8, 10]\n\n$even = array_filter($items, fn(int $n): bool => $n % 2 === 0);\n// [2, 4] (keys preserved)\n\n$sum = array_reduce($items, fn(int $carry, int $n): int => $carry + $n, 0);\n// 15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-how-do-you-handle-file-uploads-in-php",
      children: "Q54: How do you handle file uploads in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Files arrive in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$_FILES"
      }), " superglobal. Each file is an array with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tmp_name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "size"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "type"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "move_uploaded_file()"
      }), " to relocate safely. Always validate extension, MIME type, and size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['avatar'])) {\n    $file = $_FILES['avatar'];\n\n    if ($file['error'] !== UPLOAD_ERR_OK) {\n        throw new \\RuntimeException('Upload failed');\n    }\n\n    $allowed = ['jpg', 'png', 'gif'];\n    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));\n\n    if (!in_array($ext, $allowed, true)) {\n        throw new \\RuntimeException('Invalid file type');\n    }\n\n    $dest = sys_get_temp_dir() . '/' . bin2hex(random_bytes(16)) . '.' . $ext;\n    move_uploaded_file($file['tmp_name'], $dest);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q55-what-is-output-buffering",
      children: "Q55: What is output buffering?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ob_start()"
      }), " captures all output (echo, HTML, etc.) into a buffer instead of sending it immediately. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ob_get_clean()"
      }), " retrieves and discards the buffer. Used for template rendering, preventing header errors, and manipulating response content."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "ob_start();\necho '<h1>Hello</h1>';\necho '<p>World</p>';\n$content = ob_get_clean();\n\n// Transform or discard output\n$content = str_replace('Hello', 'Hi', $content);\necho $content;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-how-does-php-handle-sessions",
      children: "Q56: How does PHP handle sessions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Sessions use a server-side storage (files by default) identified by a cookie (usually ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PHPSESSID"
      }), "). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "session_start()"
      }), " loads the session data into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$_SESSION"
      }), ". Session data persists across requests. For APIs, token-based auth (JWT, Sanctum) is preferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "session_start();\n\nif (!isset($_SESSION['visits'])) {\n    $_SESSION['visits'] = 0;\n}\n$_SESSION['visits']++;\n\necho \"You've visited {$_SESSION['visits']} times.\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-what-are-resources-in-php",
      children: "Q57: What are resources in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Resources are a special type holding a reference to an external resource (file handle, database connection, curl handle). They are automatically garbage collected when no longer referenced. PHP 8 deprecated the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "is_resource()"
      }), " emphasis; many resources became objects in modern PHP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$file = fopen('data.csv', 'r');    // $file is a resource\n$ch = curl_init('https://api.example.com');  // curl handle\n\n// Most modern extensions return objects instead\n$conn = new mysqli('localhost', 'user', 'pass', 'db');\n$redis = new Redis();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-php-8-features",
      children: "4. PHP 8+ Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-what-are-named-arguments",
      children: "Q58: What are named arguments?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Named arguments (PHP 8) let you pass arguments by parameter name instead of position. This makes self-documenting calls, skips optional parameters, and doesn't break when parameter order changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function createUser(\n    string $name,\n    string $email,\n    bool $isAdmin = false,\n    bool $isActive = true\n): User { /* ... */ }\n\n// Named → clear and skip defaults\ncreateUser(\n    name: 'Alice',\n    email: 'alice@example.com',\n    isAdmin: true,\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-what-are-attributes-and-how-do-you-define-custom-ones",
      children: "Q59: What are attributes and how do you define custom ones?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Attributes (PHP 8) are structured metadata for classes, methods, properties, etc. Built-in: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Attribute]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Route]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Deprecated]"
      }), ". Custom attributes are classes with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#[Attribute]"
      }), " attribute."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "#[Attribute(\\Attribute::TARGET_METHOD | \\Attribute::TARGET_CLASS)]\nclass Route\n{\n    public function __construct(\n        public string $method,\n        public string $path\n    ) {}\n}\n\n#[Route('GET', '/users')]\nclass ListUsersController\n{\n    #[Route('POST', '/users')]\n    public function store(): void {}\n}\n\n// Reading attributes at runtime\n$reflection = new ReflectionMethod(ListUsersController::class, 'store');\n$attrs = $reflection->getAttributes(Route::class);\nforeach ($attrs as $attr) {\n    $route = $attr->newInstance();\n    echo \"{$route->method} {$route->path}\"; // POST /users\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-what-are-readonly-properties-and-classes",
      children: "Q60: What are readonly properties and classes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "readonly"
      }), " (PHP 8.1 on properties, PHP 8.2 on classes) ensures a property can only be set once. Readonly classes implicitly make all properties readonly. Attempting to modify a readonly property throws an error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// PHP 8.1 → readonly properties\nclass UserDto\n{\n    public function __construct(\n        public readonly string $name,\n        public readonly int $age,\n    ) {}\n}\n\n$dto = new UserDto('Alice', 30);\n// $dto->name = 'Bob'; // Error\n\n// PHP 8.2 → readonly class\nreadonly class Config\n{\n    public function __construct(\n        public string $dbHost,   // implicitly readonly\n        public int $port,\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q61-what-are-enums-in-php-81",
      children: "Q61: What are enums in PHP 8.1?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Enums are first-class types with optional backed (string/int) values. They can have methods, implement interfaces, and use traits. Pure enums have no scalar value; backed enums map to a database- or API-friendly value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "enum OrderStatus: string\n{\n    case Pending = 'pending';\n    case Paid = 'paid';\n    case Shipped = 'shipped';\n    case Cancelled = 'cancelled';\n\n    public function label(): string\n    {\n        return match ($this) {\n            self::Pending => 'Awaiting Payment',\n            self::Paid => 'Payment Received',\n            self::Shipped => 'On Its Way',\n            self::Cancelled => 'Order Cancelled',\n        };\n    }\n\n    public function isActive(): bool\n    {\n        return $this !== self::Cancelled;\n    }\n}\n\n// Usage\n$status = OrderStatus::Paid;\necho $status->value;      // 'paid'\necho $status->label();     // 'Payment Received'\necho $status->isActive();  // true\n\n// Backed enum from DB\n$status = OrderStatus::from($row['status']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-what-are-union-and-intersection-types",
      children: "Q62: What are union and intersection types?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Union types (PHP 8.0) accept any of the listed types, separated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|"
      }), ". Intersection types (PHP 8.1) accept types satisfying all listed types, separated by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " can be standalone in unions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Union → string OR int\nfunction parseId(string|int $id): string {\n    return (string) $id;\n}\n\n// Nullable union\nfunction find(?int $id): User|null { /* ... */ }\n\n// Intersection → must satisfy both\nfunction log(LoggerInterface&LogLevelAware $logger): void {\n    // $logger must implement both interfaces\n}\n\n// DNF types (PHP 8.2)\nfunction format((Countable&Traversable)|array $data): string { /* ... */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q63-how-does-the-match-expression-differ-from-switch",
      children: ["Q63: How does the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "match"
      }), " expression differ from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "match"
      }), " (PHP 8.0) is an expression that returns a value, uses strict comparison (", (0,jsx_runtime.jsx)(_components.code, {
        children: "==="
      }), "), supports multiple comma-separated arms, throws ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnhandledMatchError"
      }), " if no arm matches. No fallthrough → it never needs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$statusCode = 404;\n\n$message = match ($statusCode) {\n    200, 201 => 'OK or Created',\n    301, 302 => 'Redirect',\n    404 => 'Not Found',\n    500 => 'Server Error',\n    default => 'Unknown',\n};\n\necho $message; // Not Found\n\n// vs switch:\nswitch ($statusCode) {\n    case 200: $msg = 'OK'; break;\n    default: $msg = 'Unknown';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q64-what-is-the-nullsafe-operator",
      children: ["Q64: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nullsafe"
      }), " operator?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?->"
      }), " (PHP 8.0) short-circuits method/property chains when an intermediate value is null. Instead of nested null checks, the chain stops and returns null at the first null encounter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User {\n    public function __construct(\n        public ?Address $address = null\n    ) {}\n}\nclass Address {\n    public function __construct(\n        public ?string $city = null\n    ) {}\n}\n\n$user = new User();\n// Without nullsafe:\n$city = $user->address !== null ? $user->address->city : null;\n\n// With nullsafe:\n$city = $user?->address?->city; // null (short-circuits)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q65-what-is-the-str_contains-str_starts_with-and-str_ends_with-functions",
      children: ["Q65: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "str_contains"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "str_starts_with"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "str_ends_with"
      }), " functions?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Added in PHP 8.0, these functions provide boolean string checks without needing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strpos"
      }), " !== false comparisons. They are fast, intuitive, and encode intent directly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$url = 'https://example.com/api/users';\n\nvar_dump(str_contains($url, 'api'));    // true\nvar_dump(str_starts_with($url, 'https')); // true\nvar_dump(str_ends_with($url, 'users'));   // true\n\n// Before PHP 8:\nvar_dump(strpos($url, 'api') !== false);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q66-how-does-mixed-type-work",
      children: ["Q66: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mixed"
      }), " type work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mixed"
      }), " (PHP 8.0) is a pseudo-type meaning the parameter or return can be any type. It's equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string|int|float|bool|null|array|object|callable|resource"
      }), ". Use it only when truly anything is acceptable → prefer explicit union types for clarity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function logValue(mixed $value): void\n{\n    match (true) {\n        is_string($value) => echo \"String: $value\",\n        is_int($value) => echo \"Int: $value\",\n        is_array($value) => echo 'Array: ' . json_encode($value),\n        default => echo gettype($value),\n    };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q67-what-are-first-class-callable-syntax-and-args-improvements",
      children: ["Q67: What are first-class callable syntax and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "...$args"
      }), " improvements?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP 8.1 lets you create callables from any function/method using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(...)"
      }), " syntax. This avoids verbose closures when passing functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$numbers = ['1', '2', '3'];\n\n// Before PHP 8.1:\n$ints = array_map(function (string $s) { return intval($s); }, $numbers);\n\n// PHP 8.1:\n$ints = array_map(intval(...), $numbers); // [1, 2, 3]\n\n// Works with methods too:\n$upper = array_map(strtoupper(...), ['a', 'b']); // ['A', 'B']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q68-what-is-fibers-in-php-81",
      children: ["Q68: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fibers"
      }), " in PHP 8.1?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Fibers are interruptible functions for cooperative multitasking → a function can suspend (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Fiber::suspend()"
      }), ") and the caller can resume it (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$fiber->resume()"
      }), "). They enable non-blocking code without callbacks or async/await keywords (which PHP does not have). Used internally by Laravel Octane and ReactPHP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$fiber = new Fiber(function (): void {\n    $value = Fiber::suspend('waiting');\n    echo \"Resumed with: $value\";\n});\n\n$result = $fiber->start();\necho $result; // 'waiting'\n\n$fiber->resume('hello'); // output: Resumed with: hello\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q69-what-is-the-never-return-type",
      children: ["Q69: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "never"
      }), " return type?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "never"
      }), " (PHP 8.1) indicates a function that never returns → it either throws an exception or calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exit()"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "die()"
      }), ". The type checker enforces no return value and no reachable point after the call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "function abort(string $message): never\n{\n    http_response_code(500);\n    echo json_encode(['error' => $message]);\n    exit;\n}\n\nfunction redirect(string $url): never\n{\n    header(\"Location: $url\");\n    exit;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q70-what-are-array_is_list-and-array-spread-in-php-8182",
      children: ["Q70: What are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_is_list"
      }), " and array spread in PHP 8.1/8.2?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_is_list()"
      }), " (PHP 8.1) determines if an array has sequential 0-based integer keys. Array spread (", (0,jsx_runtime.jsx)(_components.code, {
        children: "..."
      }), ") inside arrays (PHP 8.1) unpacks arrays inline, like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array_merge"
      }), " but in expression context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "var_dump(array_is_list(['a', 'b', 'c'])); // true\nvar_dump(array_is_list(['a' => 'v', 'b' => 'v'])); // false\n\n// Array spread (PHP 8.1)\n$base = [1, 2, 3];\n$merged = [...$base, 4, 5, ...$more]; // [1, 2, 3, 4, 5, ...]\n\n// Before PHP 8.1\n$merged = array_merge($base, [4, 5], $more);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q71-what-are-random-extension-improvements-in-php-8283",
      children: "Q71: What are random extension improvements in PHP 8.2/8.3?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PHP 8.2 introduced a new random extension with dedicated classes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\Random\\Randomizer"
      }), " with methods like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getBytesFromString()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shuffleArray()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pickArrayKeys()"
      }), ". PHP 8.3 added ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Randomizer::getFloat()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nextFloat()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "$random = new \\Random\\Randomizer();\n\n// Generate a random password from a character set\n$password = $random->getBytesFromString(\n    'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',\n    12\n);\n\n// Shuffle an array (preserves keys)\n$shuffled = $random->shuffleArray([1, 2, 3, 4, 5]);\n\n// Pick random keys\n$keys = $random->pickArrayKeys(['a' => 1, 'b' => 2, 'c' => 3], 2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q72-what-are-php-84-property-hooks",
      children: "Q72: What are PHP 8.4 property hooks?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Property hooks (PHP 8.4) add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "get"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "set"
      }), " behavior directly on properties, similar to C#. They eliminate boilerplate getter/setter methods while keeping property-access syntax. Still in active RFC discussion → check version availability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class User\n{\n    public string $name {\n        get => ucfirst($this->name);\n        set(string $value) {\n            if (strlen($value) < 2) {\n                throw new \\InvalidArgumentException('Name too short');\n            }\n            $this->name = trim($value);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-composer--autoloading",
      children: "5. Composer & Autoloading"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q73-what-is-composer-and-why-is-it-essential-for-modern-php",
      children: "Q73: What is Composer and why is it essential for modern PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Composer is the dependency manager for PHP. It declares libraries your project depends on, resolves versions, and generates an autoloader. It's essential because it standardizes package management, enables the Packagist ecosystem (150k+ packages), and powers PSR-4 autoloading."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize a project\ncomposer init\n\n# Require a package\ncomposer require laravel/framework\n\n# Install all dependencies from composer.lock (deterministic)\ncomposer install\n\n# Update to latest compatible versions\ncomposer update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q74-how-does-psr-4-autoloading-work",
      children: "Q74: How does PSR-4 autoloading work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PSR-4 maps namespace prefixes to directory paths. Composer generates a classmap and autoloader from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "autoload"
      }), " section of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), ". When PHP encounters ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Models\\User"
      }), ", the autoloader converts it to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Models\\User.php"
      }), " and prepends the mapped directory prefix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"autoload\": {\n        \"psr-4\": {\n            \"App\\\\\": \"src/\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With that config, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App\\Models\\User"
      }), " resolves to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/Models/User.php"
      }), ". The namespace segment after the prefix must match the directory structure exactly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// src/Models/User.php\nnamespace App\\Models;\n\nclass User {}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q75-what-is-the-difference-between-composer-install-and-composer-update",
      children: ["Q75: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer install"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer update"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer install"
      }), " reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.lock"
      }), " and installs the exact versions recorded there. Use it for deployment → produces identical dependency sets across environments. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer update"
      }), " reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), ", resolves the latest compatible versions, writes them to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.lock"
      }), ", and installs. Use it when adding/changing dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# First time: creates composer.lock\ncomposer install\n\n# Development: refresh all deps\ncomposer update\n\n# Update a single package\ncomposer update laravel/framework\n\n# Production: exact versions from lock\ncomposer install --no-dev --optimize-autoloader\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q76-what-sections-exist-in-composerjson",
      children: ["Q76: What sections exist in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Key sections: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require"
      }), " (runtime deps), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require-dev"
      }), " (dev-only), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "autoload"
      }), " (PSR-4/PSR-0/classmap/files), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts"
      }), " (lifecycle hooks), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extra"
      }), " (framework metadata), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config"
      }), " (platform, preferred-install), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "repositories"
      }), " (custom package sources). Laravel typically adds ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extra.laravel.dont-discover"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extra.laravel.dumps"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"name\": \"app/project\",\n    \"require\": {\n        \"php\": \"^8.2\",\n        \"laravel/framework\": \"^11.0\"\n    },\n    \"require-dev\": {\n        \"pestphp/pest\": \"^3.0\"\n    },\n    \"autoload\": {\n        \"psr-4\": {\n            \"App\\\\\": \"app/\"\n        }\n    },\n    \"autoload-dev\": {\n        \"psr-4\": {\n            \"Tests\\\\\": \"tests/\"\n        }\n    },\n    \"scripts\": {\n        \"post-autoload-dump\": [\n            \"Illuminate\\\\Foundation\\\\ComposerScripts::postAutoloadDump\"\n        ]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q77-how-do-you-specify-php-version-constraints",
      children: "Q77: How do you specify PHP version constraints?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use semantic versioning operators: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^"
      }), " (compatible with major), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~"
      }), " (approximately → minor bumps), ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!="
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " (any), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), " (OR). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "^8.2"
      }), " means >=8.2.0 and <9.0.0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"require\": {\n        \"php\": \"^8.2\",\n        \"laravel/framework\": \"^11.0\",\n        \"spatie/laravel-permission\": \"^6.0|^7.0\",\n        \"monolog/monolog\": \"~3.0\"\n    },\n    \"config\": {\n        \"platform\": {\n            \"php\": \"8.2.0\"\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q78-what-is-composerlock-and-why-should-you-commit-it",
      children: ["Q78: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.lock"
      }), " and why should you commit it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.lock"
      }), " records the exact version of every installed package and its dependencies. Committing it ensures everyone (devs, CI, deployment) gets identical packages. Without it, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer install"
      }), " falls back to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.json"
      }), " and may resolve different versions. Always commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer.lock"
      }), " for applications (not libraries)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Good → lock file committed\ngit add composer.json composer.lock\n\n# Deployment → deterministic install\ncomposer install --no-dev --optimize-autoloader --no-interaction\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q79-what-is-the-autoloader-optimization-for-production",
      children: "Q79: What is the autoloader optimization for production?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--optimize-autoloader"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-o"
      }), ") converts PSR-4/PSR-0 prefixes into a classmap, producing a single array lookup instead of filesystem checks. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--classmap-authoritative"
      }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-a"
      }), ") skips filesystem checks entirely, assuming the classmap is complete. Use in production for faster autoloading."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Standard production install\ncomposer install --no-dev --optimize-autoloader\n\n# Maximum performance (no filesystem fallback)\ncomposer install --no-dev --classmap-authoritative\n\n# Development\ncomposer dump-autoload\ncomposer dump-autoload -o  # same as --optimize\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q80-how-do-composer-scripts-work",
      children: "Q80: How do Composer scripts work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Composer scripts run PHP callables or shell commands at lifecycle events: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-install-cmd"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-install-cmd"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-update-cmd"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-update-cmd"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pre-autoload-dump"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "post-autoload-dump"
      }), ", and custom scripts via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer run-script"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"scripts\": {\n        \"post-autoload-dump\": [\n            \"Illuminate\\\\Foundation\\\\ComposerScripts::postAutoloadDump\",\n            \"php artisan package:discover --ansi\"\n        ],\n        \"test\": \"php vendor/bin/pest\",\n        \"lint\": \"php vendor/bin/phpstan analyse\",\n        \"check\": [\"@lint\", \"@test\"],\n        \"post-root-package-install\": [\n            \"php -r \\\"copy('.env.example', '.env');\\\"\"\n        ]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q81-what-is-the-difference-between-require-and-require-dev",
      children: ["Q81: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require-dev"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require"
      }), " lists packages needed in production (framework, database driver, logging). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "require-dev"
      }), " lists packages only for development and testing (PHPUnit/Pest, debugbar, ide-helper, PHPStan). Running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer install --no-dev"
      }), " in production skips dev dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"require\": {\n        \"laravel/framework\": \"^11.0\",\n        \"predis/predis\": \"^2.0\"\n    },\n    \"require-dev\": {\n        \"pestphp/pest\": \"^3.0\",\n        \"barryvdh/laravel-debugbar\": \"^3.0\",\n        \"laravel/sail\": \"^1.0\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q82-what-is-a-custom-repository-in-composer",
      children: "Q82: What is a custom repository in Composer?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Custom repositories tell Composer where to find packages that aren't on Packagist. Common types: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vcs"
      }), " (GitHub, GitLab, Bitbucket), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), " (local directory), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "composer"
      }), " (custom Packagist instance), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "artifact"
      }), " (zip archives)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n    \"repositories\": [\n        {\n            \"type\": \"vcs\",\n            \"url\": \"https://github.com/myorg/private-package\"\n        },\n        {\n            \"type\": \"path\",\n            \"url\": \"./packages/*\"\n        },\n        {\n            \"type\": \"composer\",\n            \"url\": \"https://satis.example.com\"\n        }\n    ],\n    \"require\": {\n        \"myorg/private-package\": \"^1.0\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q83-what-is-the-difference-between-psr-0-and-psr-4",
      children: "Q83: What is the difference between PSR-0 and PSR-4?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PSR-0 maps namespace to directory using underscores as directory separators (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Some_Class"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Some/Class.php"
      }), "). PSR-4 is simpler → it strips the namespace prefix before mapping to the directory. PSR-4 is the modern standard. PSR-0 is effectively deprecated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// PSR-0:\n// Vendor_Package_ClassName → Vendor/Package/ClassName.php\n\n// PSR-4:\n// \"Vendor\\\\Package\\\\\" → \"src/\"\n// Vendor\\Package\\ClassName → src/ClassName.php\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-design-patterns",
      children: "6. Design Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q84-how-do-you-implement-a-singleton-in-php",
      children: "Q84: How do you implement a Singleton in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Singleton pattern ensures only one instance exists. It uses a private constructor, a static ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getInstance()"
      }), " method, and prevents cloning/unserialization. Modern PHP often uses the service container instead (bind as singleton), making the raw pattern less common."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class DatabaseConnection\n{\n    private static ?self $instance = null;\n    private \\PDO $pdo;\n\n    private function __construct()\n    {\n        $this->pdo = new \\PDO('mysql:host=localhost;dbname=app', 'user', 'pass');\n    }\n\n    public static function getInstance(): self\n    {\n        return self::$instance ??= new self();\n    }\n\n    public function getPdo(): \\PDO\n    {\n        return $this->pdo;\n    }\n\n    private function __clone(): void {}\n    public function __wakeup(): void { throw new \\RuntimeException('Cannot unserialize singleton'); }\n}\n\n$db = DatabaseConnection::getInstance();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q85-how-do-you-implement-a-factory-pattern-in-php",
      children: "Q85: How do you implement a Factory pattern in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A Factory centralizes object creation, encapsulating complex instantiation logic. Parameterized factories switch on input to return different concrete implementations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface NotificationSender\n{\n    public function send(string $recipient, string $message): bool;\n}\n\nclass EmailSender implements NotificationSender { /* ... */ }\nclass SmsSender implements NotificationSender { /* ... */ }\nclass PushSender implements NotificationSender { /* ... */ }\n\nclass NotificationFactory\n{\n    public function make(string $channel): NotificationSender\n    {\n        return match ($channel) {\n            'email' => new EmailSender(),\n            'sms' => new SmsSender(),\n            'push' => new PushSender(),\n            default => throw new \\InvalidArgumentException(\"Unknown channel: $channel\"),\n        };\n    }\n}\n\n$factory = new NotificationFactory();\n$sender = $factory->make('email');\n$sender->send('alice@example.com', 'Welcome!');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q86-how-do-you-implement-the-repository-pattern",
      children: "Q86: How do you implement the Repository pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Repository pattern abstracts data access behind a collection-like interface. Your business logic depends on the interface, not the specific ORM or storage engine. This allows swapping implementations (Eloquent, file-based, external API) without changing callers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface UserRepositoryInterface\n{\n    public function find(int $id): ?User;\n    public function findByEmail(string $email): ?User;\n    public function save(User $user): User;\n    public function delete(int $id): bool;\n}\n\nclass EloquentUserRepository implements UserRepositoryInterface\n{\n    public function find(int $id): ?User\n    {\n        return User::find($id);\n    }\n\n    public function findByEmail(string $email): ?User\n    {\n        return User::where('email', $email)->first();\n    }\n\n    public function save(User $user): User\n    {\n        $user->save();\n        return $user;\n    }\n\n    public function delete(int $id): bool\n    {\n        return User::destroy($id) > 0;\n    }\n}\n\n// In a service provider:\n$this->app->bind(UserRepositoryInterface::class, EloquentUserRepository::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q87-how-do-you-implement-the-strategy-pattern",
      children: "Q87: How do you implement the Strategy pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Strategy defines interchangeable algorithms. Each strategy implements the same interface, and the context selects one at runtime. Common uses: pricing calculations, shipping cost, file export formats."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface PriceCalculatorInterface\n{\n    public function calculate(float $basePrice): float;\n}\n\nclass RegularPrice implements PriceCalculatorInterface\n{\n    public function calculate(float $basePrice): float\n    {\n        return $basePrice;\n    }\n}\n\nclass DiscountPrice implements PriceCalculatorInterface\n{\n    public function __construct(private float $percent) {}\n\n    public function calculate(float $basePrice): float\n    {\n        return $basePrice * (1 - $this->percent / 100);\n    }\n}\n\nclass PremiumPrice implements PriceCalculatorInterface\n{\n    public function calculate(float $basePrice): float\n    {\n        return $basePrice * 1.5; // 50% premium\n    }\n}\n\nclass OrderCalculator\n{\n    public function __construct(\n        private PriceCalculatorInterface $strategy\n    ) {}\n\n    public function calculateTotal(float $base): float\n    {\n        return $this->strategy->calculate($base);\n    }\n}\n\n$order = new OrderCalculator(new DiscountPrice(20));\necho $order->calculateTotal(100); // 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q88-how-do-you-implement-the-observer-pattern-in-php",
      children: "Q88: How do you implement the Observer pattern in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Observer (or publish-subscribe) lets one object notify multiple dependents of state changes. PHP has built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplSubject"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SplObserver"
      }), " interfaces. For decoupled systems, event dispatchers (like Laravel's) are preferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class Newsletter implements \\SplSubject\n{\n    private \\SplObjectStorage $observers;\n    private string $latestIssue = '';\n\n    public function __construct()\n    {\n        $this->observers = new \\SplObjectStorage();\n    }\n\n    public function attach(\\SplObserver $observer): void\n    {\n        $this->observers->attach($observer);\n    }\n\n    public function detach(\\SplObserver $observer): void\n    {\n        $this->observers->detach($observer);\n    }\n\n    public function notify(): void\n    {\n        foreach ($this->observers as $observer) {\n            $observer->update($this);\n        }\n    }\n\n    public function publishIssue(string $issue): void\n    {\n        $this->latestIssue = $issue;\n        $this->notify();\n    }\n\n    public function getLatestIssue(): string\n    {\n        return $this->latestIssue;\n    }\n}\n\nclass EmailNotifier implements \\SplObserver\n{\n    public function update(\\SplSubject $subject): void\n    {\n        $issue = $subject->getLatestIssue();\n        echo \"Sending email notification for: $issue\\n\";\n    }\n}\n\nclass SlackNotifier implements \\SplObserver\n{\n    public function update(\\SplSubject $subject): void\n    {\n        $issue = $subject->getLatestIssue();\n        echo \"Posting to Slack about: $issue\\n\";\n    }\n}\n\n$newsletter = new Newsletter();\n$newsletter->attach(new EmailNotifier());\n$newsletter->attach(new SlackNotifier());\n$newsletter->publishIssue('PHP 8.4 Released!');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q89-what-is-the-dependency-injection-pattern-and-how-does-php-implement-it",
      children: "Q89: What is the Dependency Injection pattern and how does PHP implement it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Dependency Injection passes an object's dependencies into it rather than having the object create them. Constructor injection is most common. PHP's reflection-based containers (like Laravel's) auto-resolve type-hinted parameters. Manual DI without a container is straightforward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Without DI (tight coupling)\nclass ReportGenerator\n{\n    private \\PDO $pdo;\n    public function __construct()\n    {\n        $this->pdo = new \\PDO('mysql:host=localhost;dbname=reports', 'root', '');\n    }\n}\n\n// With DI (decoupled, testable)\nclass ReportGenerator\n{\n    public function __construct(\n        private \\PDO $pdo,\n        private ReportFormatter $formatter,\n        private LoggerInterface $logger\n    ) {}\n}\n\n// Wiring manually:\n$pdo = new \\PDO('mysql:host=localhost;dbname=reports', 'user', 'pass');\n$formatter = new CsvReportFormatter();\n$logger = new FileLogger();\n$generator = new ReportGenerator($pdo, $formatter, $logger);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q90-what-is-the-adapter-pattern-in-php",
      children: "Q90: What is the Adapter pattern in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Adapter converts one interface to another that the client expects. Useful when integrating third-party libraries that don't match your application's interface contracts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Your app interface\ninterface PaymentProcessor\n{\n    public function pay(float $amount): array;\n}\n\n// Third-party library (incompatible)\nclass StripeSdk\n{\n    public function createCharge(float $amount, string $currency): object\n    {\n        return (object) ['id' => 'ch_123', 'status' => 'succeeded'];\n    }\n}\n\n// Adapter\nclass StripeAdapter implements PaymentProcessor\n{\n    public function __construct(private StripeSdk $sdk) {}\n\n    public function pay(float $amount): array\n    {\n        $result = $this->sdk->createCharge($amount, 'usd');\n        return [\n            'id' => $result->id,\n            'status' => $result->status,\n            'amount' => $amount,\n        ];\n    }\n}\n\n$processor = new StripeAdapter(new StripeSdk());\n$result = $processor->pay(50.00);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q91-what-is-the-decorator-pattern-in-php",
      children: "Q91: What is the Decorator pattern in PHP?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Decorator adds behavior to an object dynamically without altering its class. The decorator wraps the original object, implementing the same interface while delegating and extending."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface BookingCost\n{\n    public function cost(): float;\n    public function description(): string;\n}\n\nclass BaseBooking implements BookingCost\n{\n    public function cost(): float { return 100.0; }\n    public function description(): string { return 'Room booking'; }\n}\n\nclass BreakfastDecorator implements BookingCost\n{\n    public function __construct(private BookingCost $booking) {}\n\n    public function cost(): float\n    {\n        return $this->booking->cost() + 25.0;\n    }\n\n    public function description(): string\n    {\n        return $this->booking->description() . ', breakfast included';\n    }\n}\n\nclass LateCheckoutDecorator implements BookingCost\n{\n    public function __construct(private BookingCost $booking) {}\n\n    public function cost(): float\n    {\n        return $this->booking->cost() + 15.0;\n    }\n\n    public function description(): string\n    {\n        return $this->booking->description() . ', late checkout';\n    }\n}\n\n$booking = new BaseBooking();\n$booking = new BreakfastDecorator($booking);\n$booking = new LateCheckoutDecorator($booking);\n\necho $booking->description(); // Room booking, breakfast included, late checkout\necho $booking->cost();        // 140.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q92-what-is-the-chain-of-responsibility-pattern",
      children: "Q92: What is the Chain of Responsibility pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Chain of Responsibility passes a request along a chain of handlers until one handles it. Each handler decides to process or pass to the next. Laravel's middleware pipeline is a classic example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "abstract class ValidationHandler\n{\n    private ?ValidationHandler $next = null;\n\n    public function setNext(ValidationHandler $handler): ValidationHandler\n    {\n        $this->next = $handler;\n        return $handler;\n    }\n\n    public function handle(array $data): ?string\n    {\n        $error = $this->validate($data);\n        if ($error !== null) {\n            return $error;\n        }\n        return $this->next?->handle($data);\n    }\n\n    abstract protected function validate(array $data): ?string;\n}\n\nclass RequiredFieldsHandler extends ValidationHandler\n{\n    protected function validate(array $data): ?string\n    {\n        $fields = ['name', 'email', 'age'];\n        foreach ($fields as $field) {\n            if (empty($data[$field])) {\n                return \"$field is required\";\n            }\n        }\n        return null;\n    }\n}\n\nclass EmailFormatHandler extends ValidationHandler\n{\n    protected function validate(array $data): ?string\n    {\n        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {\n            return 'Invalid email format';\n        }\n        return null;\n    }\n}\n\nclass AgeRangeHandler extends ValidationHandler\n{\n    protected function validate(array $data): ?string\n    {\n        if ($data['age'] < 18 || $data['age'] > 120) {\n            return 'Age must be between 18 and 120';\n        }\n        return null;\n    }\n}\n\n// Build chain\n$handler = new RequiredFieldsHandler();\n$handler->setNext(new EmailFormatHandler())\n        ->setNext(new AgeRangeHandler());\n\n$error = $handler->handle(['name' => 'Alice', 'email' => 'alice@test.com', 'age' => 30]);\nvar_dump($error); // null (all pass)\n\n$error2 = $handler->handle(['name' => 'Bob', 'email' => 'not-an-email', 'age' => 150]);\nvar_dump($error2); // 'Invalid email format' (stops at second handler)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q93-what-is-the-dto-data-transfer-object-pattern",
      children: "Q93: What is the DTO (Data Transfer Object) pattern?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A DTO is a simple object that carries data between processes or layers, typically with no business logic. PHP 8's readonly properties and constructor promotion make DTOs concise. They provide type safety and structure compared to plain arrays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "readonly class CreateUserDTO\n{\n    public function __construct(\n        public string $name,\n        public string $email,\n        public string $password,\n        public ?string $role = null,\n    ) {}\n}\n\nclass UserService\n{\n    public function register(CreateUserDTO $dto): User\n    {\n        $user = User::make([\n            'name' => $dto->name,\n            'email' => $dto->email,\n            'password' => bcrypt($dto->password),\n            'role' => $dto->role ?? 'user',\n        ]);\n\n        $user->save();\n        return $user;\n    }\n}\n\n// Usage: clear, typed, immutable\n$dto = new CreateUserDTO(\n    name: 'Alice',\n    email: 'alice@example.com',\n    password: 'secure-pass-123',\n);\n$user = (new UserService())->register($dto);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-laravel-era-php",
      children: "7. Laravel-Era PHP"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q94-how-does-laravels-service-container-resolve-dependencies",
      children: "Q94: How does Laravel's service container resolve dependencies?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The container uses PHP's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReflectionClass"
      }), " to inspect constructor type-hints. It recursively resolves each dependency, building a tree of objects. Bindings tell the container how to resolve interfaces or configure complex objects. This auto-resolution powers constructor injection throughout Laravel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Auto-resolution: no binding needed for concrete classes\nclass UserController\n{\n    public function __construct(\n        private UserService $service,  // resolved automatically\n        private Request $request       // resolved automatically\n    ) {}\n\n    public function index(): JsonResponse\n    {\n        return response()->json($this->service->listAll());\n    }\n}\n\n// Manual binding for interfaces or shared instances\n$this->app->bind(UserRepositoryInterface::class, EloquentRepository::class);\n$this->app->singleton(LoggerInterface::class, FileLogger::class);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q95-what-is-dependency-injection-and-how-does-laravel-implement-it",
      children: "Q95: What is dependency injection and how does Laravel implement it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Dependency injection means a class receives its dependencies rather than creating them. Laravel implements this through its auto-resolving container → constructor type-hints are automatically resolved. You can also use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app()->make()"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resolve()"
      }), " helper, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app()->call()"
      }), " for method injection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Constructor injection (most common)\nclass InvoiceController\n{\n    public function __construct(\n        private InvoiceService $invoiceService,\n        private LoggerInterface $logger\n    ) {}\n}\n\n// Method injection in controllers\nclass HomeController\n{\n    public function __invoke(Request $request): View\n    {\n        // $request is injected automatically\n        return view('home', ['visitor' => $request->ip()]);\n    }\n}\n\n// Manual resolution\n$service = app()->make(PaymentService::class);\n$result = resolve(PaymentService::class);\n\n// Method injection via container\nclass Pipeline\n{\n    public function process(DataTransformer $transformer): void {\n        // $transformer injected\n    }\n}\n\napp()->call([$pipeline, 'process']);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q96-how-do-laravel-facades-work-under-the-hood",
      children: "Q96: How do Laravel facades work under the hood?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Facades provide a static-like interface to classes resolved from the container. Each facade extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Support\\Facades\\Facade"
      }), " and implements ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getFacadeAccessor()"
      }), " to return the container binding key. When you call a static method, the facade resolves the underlying instance from the container and proxies the call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// User code:\nCache::get('key');\nCache::put('key', 'value', 3600);\n\n// Behind the scenes → simplified:\nclass Cache extends Facade\n{\n    protected static function getFacadeAccessor(): string\n    {\n        return 'cache'; // container binding key\n    }\n}\n\n// The __callStatic magic resolves and delegates:\npublic static function __callStatic(string $method, array $args): mixed\n{\n    $instance = static::getFacadeRoot(); // resolve from container\n    return $instance->$method(...$args);\n}\n\n// Equivalent without facade:\napp('cache')->get('key');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q97-what-are-contracts-in-laravel",
      children: "Q97: What are contracts in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Contracts are interfaces that define Laravel's core services. Using contracts instead of facades or concrete classes decouples your code from Laravel's implementation. The contract is the interface; the implementation is bound in the container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Contracts\\Cache\\Repository as CacheContract;\nuse Illuminate\\Contracts\\Mail\\Mailer;\nuse Illuminate\\Contracts\\Queue\\Queue;\n\nclass NewsletterService\n{\n    public function __construct(\n        private CacheContract $cache,  // contract, not facade\n        private Mailer $mailer,\n        private Queue $queue\n    ) {}\n\n    public function sendCampaign(string $campaignId): void\n    {\n        $campaign = $this->cache->get(\"campaign:$campaignId\");\n\n        // Actually: Cache::get() is a facade call\n        // Contract approach: inject CacheContract\n        // Both work → contracts make testing and swapping easier\n    }\n}\n\n// In a service provider:\n$this->app->bind(\n    \\Illuminate\\Contracts\\Cache\\Repository::class,\n    \\Illuminate\\Cache\\RedisStore::class\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q98-what-is-contextual-binding-and-how-does-it-solve-real-problems",
      children: "Q98: What is contextual binding and how does it solve real problems?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Contextual binding lets you resolve the same interface differently based on which class requests it. Laravel's container provides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "when()"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "needs()"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "give()"
      }), " for this. Essential when different classes need different implementations or primitive values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "interface PaymentGateway\n{\n    public function charge(float $amount): array;\n}\n\nclass StripeGateway implements PaymentGateway { /* ... */ }\nclass PayPalGateway implements PaymentGateway { /* ... */ }\n\n// Contextual binding\n$this->app\n    ->when(TenantBillingController::class)\n    ->needs(PaymentGateway::class)\n    ->give(StripeGateway::class);\n\n$this->app\n    ->when(EnterpriseBillingController::class)\n    ->needs(PaymentGateway::class)\n    ->give(PayPalGateway::class);\n\n// Contextual primitives\n$this->app\n    ->when(ReportController::class)\n    ->needs('$perPage')\n    ->give(50);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q99-how-does-laravels-pipeline-work-and-why-is-it-powerful",
      children: "Q99: How does Laravel's pipeline work and why is it powerful?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Pipeline pattern sends an object through a series of callable \"pipes,\" each of which can inspect, modify, or short-circuit the object. It's the engine behind middleware and is available to developers via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app(Pipeline::class)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Pipeline\\Pipeline;\n\n$result = app(Pipeline::class)\n    ->send($request)\n    ->through([\n        ThrottleRequests::class,\n        VerifyCsrfToken::class,\n        EncryptCookies::class,\n    ])\n    ->then(fn ($request) => $nextController($request));\n\n// Custom pipes\n$pipeline = app(Pipeline::class)\n    ->send($orderData)\n    ->through([\n        ValidateOrderPipe::class,\n        CalculateTaxPipe::class,\n        ApplyDiscountPipe::class,\n        SaveOrderPipe::class,\n    ])\n    ->thenReturn();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q100-how-does-the-service-provider-boot-order-work",
      children: "Q100: How does the service provider boot order work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel registers all service providers, then boots them. During ", (0,jsx_runtime.jsx)(_components.code, {
        children: "register()"
      }), ", providers only bind services → no usage of other providers' bindings (risky). During ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boot()"
      }), ", all providers are registered, so you can safely use any binding, call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$this->app->make()"
      }), ", register routes, or register event listeners."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class AppServiceProvider extends ServiceProvider\n{\n    public function register(): void\n    {\n        // Safe: only bind things\n        $this->app->singleton(BillingService::class);\n        $this->app->bind(PaymentGateway::class, StripeGateway::class);\n    }\n\n    public function boot(): void\n    {\n        // Safe: all providers already registered\n        $this->app->make(BillingService::class)->setup();\n\n        // Route model binding\n        Route::model('team', Team::class);\n\n        // Gates\n        Gate::define('edit-post', fn(User $user, Post $post) =>\n            $user->id === $post->user_id\n        );\n\n        // Macros\n        Builder::macro('search', function (string $term) {\n            return $this->where('name', 'like', \"%{$term}%\");\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q101-how-does-app-bind-vs-app-singleton-affect-shared-state",
      children: ["Q101: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app()->bind()"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app()->singleton()"
      }), " affect shared state?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bind()"
      }), " resolves a new instance every time → each resolution gets a fresh object. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "singleton()"
      }), " shares one instance across all resolutions within the same request. Use singleton for stateless services (logger, cache manager, payment gateway) where creating multiple instances wastes resources. Use bind for stateful services where each caller needs isolated state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Singleton → same instance everywhere\napp()->singleton(Logger::class, fn() => new FileLogger('app.log'));\n\n// bind → new instance each time\napp()->bind(Calculator::class, fn() => new Calculator());\n\nclass Logger\n{\n    private array $entries = [];\n\n    public function log(string $msg): void\n    {\n        $this->entries[] = $msg; // shared state!\n    }\n}\n\napp()->make(Logger::class)->log('First');\napp()->make(Logger::class)->log('Second');\n\n// singleton: both calls manipulate the same entries array (both entries present)\n// bind: each gets a new Logger (each has only its own entry)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q102-what-is-the-defer-property-on-service-providers",
      children: ["Q102: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defer"
      }), " property on service providers?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$defer"
      }), " property and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "provides()"
      }), " method let a service provider register lazily → it's only loaded when one of its listed bindings is actually resolved. This improves performance by skipping unnecessary provider bootstrapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "use Illuminate\\Contracts\\Support\\DeferrableProvider;\n\nclass AnalyticsServiceProvider extends ServiceProvider implements DeferrableProvider\n{\n    public function register(): void\n    {\n        $this->app->singleton(Analytics::class, function () {\n            return new Analytics(config('services.analytics.key'));\n        });\n    }\n\n    public function provides(): array\n    {\n        return [Analytics::class];\n    }\n}\n\n// This provider only registers when something resolves Analytics\n// Until then, it's never loaded → saving memory and boot time\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q103-how-do-you-implement-the-service-container-pattern-without-laravel",
      children: "Q103: How do you implement the service container pattern without Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A simple dependency injection container uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReflectionClass"
      }), " to auto-resolve constructor parameters. This demonstrates the core concept behind Laravel's container in about 50 lines of PHP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "class SimpleContainer\n{\n    private array $bindings = [];\n    private array $instances = [];\n\n    public function bind(string $abstract, callable|string|null $concrete = null): void\n    {\n        $this->bindings[$abstract] = $concrete ?? $abstract;\n    }\n\n    public function singleton(string $abstract, callable|string|null $concrete = null): void\n    {\n        $this->bind($abstract, function () use ($abstract, $concrete) {\n            return $this->instances[$abstract] ??= $this->resolve($concrete ?? $abstract);\n        });\n    }\n\n    public function make(string $abstract): mixed\n    {\n        if (isset($this->instances[$abstract])) {\n            return $this->instances[$abstract];\n        }\n\n        return $this->resolve(\n            isset($this->bindings[$abstract])\n                ? $this->bindings[$abstract]\n                : $abstract\n        );\n    }\n\n    private function resolve(callable|string $concrete): mixed\n    {\n        if ($concrete instanceof \\Closure) {\n            return $concrete($this);\n        }\n\n        $reflection = new \\ReflectionClass($concrete);\n\n        if (!$reflection->isInstantiable()) {\n            throw new \\RuntimeException(\"Class $concrete is not instantiable\");\n        }\n\n        $constructor = $reflection->getConstructor();\n\n        if ($constructor === null) {\n            return $reflection->newInstance();\n        }\n\n        $params = $constructor->getParameters();\n        $dependencies = [];\n\n        foreach ($params as $param) {\n            $type = $param->getType();\n            if ($type instanceof \\ReflectionNamedType && !$type->isBuiltin()) {\n                $dependencies[] = $this->make($type->getName());\n            }\n        }\n\n        return $reflection->newInstanceArgs($dependencies);\n    }\n}\n\n// Usage\n$container = new SimpleContainer();\n$container->bind(LoggerInterface::class, FileLogger::class);\n$container->singleton(CacheService::class);\n\n$service = $container->make(UserService::class);\n// All dependencies auto-resolved recursively\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This chapter is a living document. As PHP evolves and the ecosystem grows, revisit these questions to stay current. The best interviews test not just knowledge, but the ability to reason about tradeoffs → and the best answers explain ", (0,jsx_runtime.jsx)(_components.em, {
          children: "why"
        }), " over ", (0,jsx_runtime.jsx)(_components.em, {
          children: "what"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key PHP concepts for interview preparation."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define variable and parameter types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union types + mixed + void + never"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP in PHP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-oriented programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classes, inheritance, interfaces, traits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSR-4 autoloading + package management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP 8 Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern PHP capabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named arguments, enums, readonly classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory, Repository, Strategy, Singleton"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Quick reference for PHP interview topics."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int, float, string, bool, array, object, null, mixed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class, abstract, interface, trait, final, readonly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP 8.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enums, readonly classes, json_validate, override attribute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "require, autoload, scripts, repositories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory, Repository, Strategy, Singleton, Observer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-Off"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Type System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strictness vs flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code organization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inheritance vs composition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reuse vs version conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHP 8 Features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern PHP development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New features vs backward compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patterns vs over-engineering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Test your PHP interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the correct way to enable strict typing in PHP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) error_reporting(E_STRICT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) declare(strict_types=1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) strict_types()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) enable_strict()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) declare(strict_types=1)</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " Which PHP 8 feature allows a class to have a single value type?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) readonly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Enums"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Named arguments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Union types"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) Enums</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " What does Composer's PSR-4 autoloading use to find classes?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) Namespace-to-directory mapping"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) Class name hashing"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) File modification timestamps"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) PHP include path"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>A) Namespace-to-directory mapping</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What is the purpose of the readonly keyword in PHP 8.1+?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Make a class uninstantiable"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Make properties writable only once"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Prevent method overriding"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Disable type checking"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Answer</summary>B) Make properties writable only once</details>\n"
                  })
                })]
              })
            })]
          })
        })]
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