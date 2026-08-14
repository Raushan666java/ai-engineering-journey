"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61316],{

/***/ 34401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_laravel_52_interview_css_md_2a2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-laravel-52-interview-css-md-2a2.json
const site_docs_courses_laravel_52_interview_css_md_2a2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/laravel/52-interview-css","title":"CSS Interview Q&A","description":"Previous JavaScript Interview Q&A","source":"@site/docs/courses/laravel/52-interview-css.md","sourceDirName":"courses/laravel","slug":"/laravel/52-interview-css","permalink":"/ai-engineering-journey/laravel/52-interview-css","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":52,"frontMatter":{"id":"52-interview-css","slug":"/laravel/52-interview-css","title":"CSS Interview Q&A","sidebar_label":"CSS Interview Q&A","sidebar_position":52},"sidebar":"course-laravel","previous":{"title":"HTML Interview Q&A","permalink":"/ai-engineering-journey/laravel/51-interview-html"},"next":{"title":"Chapter 53: JavaScript Interview Q&A","permalink":"/ai-engineering-journey/laravel/53-interview-javascript"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/laravel/52-interview-css.md


const frontMatter = {
	id: '52-interview-css',
	slug: '/laravel/52-interview-css',
	title: 'CSS Interview Q&A',
	sidebar_label: 'CSS Interview Q&A',
	sidebar_position: 52
};
const contentTitle = 'CSS Interview Q&A';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Selectors &amp; Specificity",
  "id": "selectors--specificity",
  "level": 2
}, {
  "value": "Q1: How does the CSS cascade determine which rule wins?",
  "id": "q1-how-does-the-css-cascade-determine-which-rule-wins",
  "level": 3
}, {
  "value": "Q2: How is specificity calculated?",
  "id": "q2-how-is-specificity-calculated",
  "level": 3
}, {
  "value": "Q3: What is the difference between a pseudo-class and a pseudo-element?",
  "id": "q3-what-is-the-difference-between-a-pseudo-class-and-a-pseudo-element",
  "level": 3
}, {
  "value": "Q4: How does <code>:is()</code> and <code>:where()</code> affect specificity?",
  "id": "q4-how-does-is-and-where-affect-specificity",
  "level": 3
}, {
  "value": "Q5: What is the <code>:has()</code> pseudo-class and how is it used?",
  "id": "q5-what-is-the-has-pseudo-class-and-how-is-it-used",
  "level": 3
}, {
  "value": "Q6: How do you select all elements except the last child?",
  "id": "q6-how-do-you-select-all-elements-except-the-last-child",
  "level": 3
}, {
  "value": "Q7: What does <code>[attr~=value]</code> vs <code>[attr|=value]</code> match?",
  "id": "q7-what-does-attrvalue-vs-attrvalue-match",
  "level": 3
}, {
  "value": "Q8: What is the difference between <code>nth-child</code> and <code>nth-of-type</code>?",
  "id": "q8-what-is-the-difference-between-nth-child-and-nth-of-type",
  "level": 3
}, {
  "value": "Q9: How do you select an element that contains a specific class in a space-separated list?",
  "id": "q9-how-do-you-select-an-element-that-contains-a-specific-class-in-a-space-separated-list",
  "level": 3
}, {
  "value": "Q10: What is the difference between the cascade, specificity, and inheritance?",
  "id": "q10-what-is-the-difference-between-the-cascade-specificity-and-inheritance",
  "level": 3
}, {
  "value": "Box Model &amp; Layout",
  "id": "box-model--layout",
  "level": 2
}, {
  "value": "Q11: Explain the CSS box model.",
  "id": "q11-explain-the-css-box-model",
  "level": 3
}, {
  "value": "Q12: What is the difference between <code>display: none</code> and <code>visibility: hidden</code>?",
  "id": "q12-what-is-the-difference-between-display-none-and-visibility-hidden",
  "level": 3
}, {
  "value": "Q13: Explain the <code>position</code> property values.",
  "id": "q13-explain-the-position-property-values",
  "level": 3
}, {
  "value": "Q14: How does <code>z-index</code> work and what creates a stacking context?",
  "id": "q14-how-does-z-index-work-and-what-creates-a-stacking-context",
  "level": 3
}, {
  "value": "Q15: What does <code>float</code> do and how do you clear it?",
  "id": "q15-what-does-float-do-and-how-do-you-clear-it",
  "level": 3
}, {
  "value": "Q16: What is the difference between <code>overflow: hidden</code> and <code>overflow: clip</code>?",
  "id": "q16-what-is-the-difference-between-overflow-hidden-and-overflow-clip",
  "level": 3
}, {
  "value": "Q17: How does <code>margin: auto</code> center an element horizontally?",
  "id": "q17-how-does-margin-auto-center-an-element-horizontally",
  "level": 3
}, {
  "value": "Q18: What is margin collapsing and when does it happen?",
  "id": "q18-what-is-margin-collapsing-and-when-does-it-happen",
  "level": 3
}, {
  "value": "Q19: What is <code>display: flow-root</code>?",
  "id": "q19-what-is-display-flow-root",
  "level": 3
}, {
  "value": "Q20: What is the difference between <code>inline</code>, <code>block</code>, and <code>inline-block</code>?",
  "id": "q20-what-is-the-difference-between-inline-block-and-inline-block",
  "level": 3
}, {
  "value": "Flexbox &amp; Grid",
  "id": "flexbox--grid",
  "level": 2
}, {
  "value": "Q21: What is the difference between Flexbox and CSS Grid?",
  "id": "q21-what-is-the-difference-between-flexbox-and-css-grid",
  "level": 3
}, {
  "value": "Q22: Explain <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.",
  "id": "q22-explain-flex-grow-flex-shrink-and-flex-basis",
  "level": 3
}, {
  "value": "Q23: How does <code>align-items</code> differ from <code>justify-content</code>?",
  "id": "q23-how-does-align-items-differ-from-justify-content",
  "level": 3
}, {
  "value": "Q24: What does <code>gap</code> replace in Flexbox and Grid?",
  "id": "q24-what-does-gap-replace-in-flexbox-and-grid",
  "level": 3
}, {
  "value": "Q25: How do you create a responsive grid that adapts the number of columns automatically?",
  "id": "q25-how-do-you-create-a-responsive-grid-that-adapts-the-number-of-columns-automatically",
  "level": 3
}, {
  "value": "Q26: What is <code>fr</code> unit in CSS Grid?",
  "id": "q26-what-is-fr-unit-in-css-grid",
  "level": 3
}, {
  "value": "Q27: How do you center an element both horizontally and vertically with Flexbox?",
  "id": "q27-how-do-you-center-an-element-both-horizontally-and-vertically-with-flexbox",
  "level": 3
}, {
  "value": "Q28: What is the difference between <code>auto-fill</code> and <code>auto-fit</code> in Grid?",
  "id": "q28-what-is-the-difference-between-auto-fill-and-auto-fit-in-grid",
  "level": 3
}, {
  "value": "Q29: How do you create a sticky footer with Flexbox?",
  "id": "q29-how-do-you-create-a-sticky-footer-with-flexbox",
  "level": 3
}, {
  "value": "Q30: What is the <code>order</code> property in Flexbox?",
  "id": "q30-what-is-the-order-property-in-flexbox",
  "level": 3
}, {
  "value": "Q31: How do you create a masonry-like layout with CSS Grid?",
  "id": "q31-how-do-you-create-a-masonry-like-layout-with-css-grid",
  "level": 3
}, {
  "value": "Q32: What is the difference between <code>align-content</code> and <code>align-items</code> in Flexbox?",
  "id": "q32-what-is-the-difference-between-align-content-and-align-items-in-flexbox",
  "level": 3
}, {
  "value": "Q33: How does <code>flex: 0 0 auto</code> differ from <code>flex: 1 1 auto</code>?",
  "id": "q33-how-does-flex-0-0-auto-differ-from-flex-1-1-auto",
  "level": 3
}, {
  "value": "Q34: What is <code>grid-template-areas</code> and how do you use it?",
  "id": "q34-what-is-grid-template-areas-and-how-do-you-use-it",
  "level": 3
}, {
  "value": "Q35: How do you align a single item differently from others in Flexbox?",
  "id": "q35-how-do-you-align-a-single-item-differently-from-others-in-flexbox",
  "level": 3
}, {
  "value": "Responsive Design",
  "id": "responsive-design",
  "level": 2
}, {
  "value": "Q36: What is a media query and what are common breakpoints?",
  "id": "q36-what-is-a-media-query-and-what-are-common-breakpoints",
  "level": 3
}, {
  "value": "Q37: What is the difference between <code>em</code> and <code>rem</code>?",
  "id": "q37-what-is-the-difference-between-em-and-rem",
  "level": 3
}, {
  "value": "Q38: What is the mobile-first approach to responsive design?",
  "id": "q38-what-is-the-mobile-first-approach-to-responsive-design",
  "level": 3
}, {
  "value": "Q39: How do you make images responsive?",
  "id": "q39-how-do-you-make-images-responsive",
  "level": 3
}, {
  "value": "Q40: What are container queries?",
  "id": "q40-what-are-container-queries",
  "level": 3
}, {
  "value": "Q41: What is the difference between <code>vw</code>, <code>vh</code>, <code>vmin</code>, and <code>vmax</code>?",
  "id": "q41-what-is-the-difference-between-vw-vh-vmin-and-vmax",
  "level": 3
}, {
  "value": "Q42: What are <code>min()</code>, <code>max()</code>, and <code>clamp()</code> in CSS?",
  "id": "q42-what-are-min-max-and-clamp-in-css",
  "level": 3
}, {
  "value": "Q43: What is the <code>prefers-color-scheme</code> media query?",
  "id": "q43-what-is-the-prefers-color-scheme-media-query",
  "level": 3
}, {
  "value": "Q44: What is the <code>prefers-reduced-motion</code> media query?",
  "id": "q44-what-is-the-prefers-reduced-motion-media-query",
  "level": 3
}, {
  "value": "Q45: How do you handle landscape vs portrait orientation?",
  "id": "q45-how-do-you-handle-landscape-vs-portrait-orientation",
  "level": 3
}, {
  "value": "Animations &amp; Transitions",
  "id": "animations--transitions",
  "level": 2
}, {
  "value": "Q46: What is the difference between CSS transitions and animations?",
  "id": "q46-what-is-the-difference-between-css-transitions-and-animations",
  "level": 3
}, {
  "value": "Q47: Which CSS properties are safe to animate for performance?",
  "id": "q47-which-css-properties-are-safe-to-animate-for-performance",
  "level": 3
}, {
  "value": "Q48: What are the sub-properties of <code>transform</code> and how do they compose?",
  "id": "q48-what-are-the-sub-properties-of-transform-and-how-do-they-compose",
  "level": 3
}, {
  "value": "Q49: How do you create a smooth height transition on an element with unknown content height?",
  "id": "q49-how-do-you-create-a-smooth-height-transition-on-an-element-with-unknown-content-height",
  "level": 3
}, {
  "value": "Q50: What is <code>will-change</code> and when should you use it?",
  "id": "q50-what-is-will-change-and-when-should-you-use-it",
  "level": 3
}, {
  "value": "Q51: What is the difference between <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, and <code>cubic-bezier</code>?",
  "id": "q51-what-is-the-difference-between-ease-linear-ease-in-ease-out-and-cubic-bezier",
  "level": 3
}, {
  "value": "Q52: How do you pause and resume a CSS animation?",
  "id": "q52-how-do-you-pause-and-resume-a-css-animation",
  "level": 3
}, {
  "value": "Q53: How do you animate on scroll without JavaScript?",
  "id": "q53-how-do-you-animate-on-scroll-without-javascript",
  "level": 3
}, {
  "value": "CSS Frameworks &amp; Tailwind",
  "id": "css-frameworks--tailwind",
  "level": 2
}, {
  "value": "Q54: What is utility-first CSS and how is it different from semantic CSS?",
  "id": "q54-what-is-utility-first-css-and-how-is-it-different-from-semantic-css",
  "level": 3
}, {
  "value": "Q55: How does Tailwind&#39;s <code>@apply</code> directive work and when should you use it?",
  "id": "q55-how-does-tailwinds-apply-directive-work-and-when-should-you-use-it",
  "level": 3
}, {
  "value": "Q56: How does Tailwind purge unused styles?",
  "id": "q56-how-does-tailwind-purge-unused-styles",
  "level": 3
}, {
  "value": "Q57: What are the downsides of utility-first CSS?",
  "id": "q57-what-are-the-downsides-of-utility-first-css",
  "level": 3
}, {
  "value": "Q58: How do you customize Tailwind&#39;s theme?",
  "id": "q58-how-do-you-customize-tailwinds-theme",
  "level": 3
}, {
  "value": "Q59: What is the difference between Tailwind and Bootstrap?",
  "id": "q59-what-is-the-difference-between-tailwind-and-bootstrap",
  "level": 3
}, {
  "value": "Q60: How do you handle dark mode in Tailwind?",
  "id": "q60-how-do-you-handle-dark-mode-in-tailwind",
  "level": 3
}, {
  "value": "Q61: What is CSS Layers (<code>@layer</code>) and how does it help framework integration?",
  "id": "q61-what-is-css-layers-layer-and-how-does-it-help-framework-integration",
  "level": 3
}, {
  "value": "Laravel Frontend",
  "id": "laravel-frontend",
  "level": 2
}, {
  "value": "Q62: How do you set up Tailwind CSS in a Laravel project?",
  "id": "q62-how-do-you-set-up-tailwind-css-in-a-laravel-project",
  "level": 3
}, {
  "value": "Q63: How does Vite work with Laravel to compile frontend assets?",
  "id": "q63-how-does-vite-work-with-laravel-to-compile-frontend-assets",
  "level": 3
}, {
  "value": "Q64: What is PostCSS and what role does it play in Laravel frontend?",
  "id": "q64-what-is-postcss-and-what-role-does-it-play-in-laravel-frontend",
  "level": 3
}, {
  "value": "Q65: How do you handle multiple CSS entry points in Laravel Vite?",
  "id": "q65-how-do-you-handle-multiple-css-entry-points-in-laravel-vite",
  "level": 3
}, {
  "value": "Q66: How do you use Blade components with Tailwind classes?",
  "id": "q66-how-do-you-use-blade-components-with-tailwind-classes",
  "level": 3
}, {
  "value": "Q67: How do you extract common Tailwind patterns in Laravel?",
  "id": "q67-how-do-you-extract-common-tailwind-patterns-in-laravel",
  "level": 3
}, {
  "value": "Q68: How does hot module replacement work in Laravel with Vite?",
  "id": "q68-how-does-hot-module-replacement-work-in-laravel-with-vite",
  "level": 3
}, {
  "value": "Q69: How do you version assets for cache busting in Laravel?",
  "id": "q69-how-do-you-version-assets-for-cache-busting-in-laravel",
  "level": 3
}, {
  "value": "Q70: How would you integrate a third-party CSS library (like SweetAlert2 or Flatpickr) in Laravel with Vite?",
  "id": "q70-how-would-you-integrate-a-third-party-css-library-like-sweetalert2-or-flatpickr-in-laravel-with-vite",
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
        id: "css-interview-qa",
        children: "CSS Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/51-interview-html",
          children: "HTML Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/laravel/53-interview-javascript",
          children: "JavaScript Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A curated collection of CSS interview questions covering fundamental concepts, layout systems, responsive design, animations, modern frameworks, and Laravel frontend integration. Each answer includes practical code examples to illustrate the concept in action."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
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
        href: "../../assets/images/lessons/laravel/52-interview-css/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/52-interview-css/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/52-interview-css/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/52-interview-css/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/laravel/52-interview-css/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/laravel/52-interview-css/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "CSS interview questions covering selectors, box model, layout, responsive design, animations, preprocessors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Concepts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS specificity, box model, Flexbox, Grid, responsive design, transitions, animations, custom properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning Approach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Q&A format with practical CSS examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skills Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS3, HTML basics"
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
      id: "selectors--specificity",
      children: "Selectors & Specificity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/52-interview-css.png",
        alt: "CSS Interview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-how-does-the-css-cascade-determine-which-rule-wins",
      children: "Q1: How does the CSS cascade determine which rule wins?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The cascade assigns a weight to every declaration based on origin, specificity, and source order. The winning declaration is the one with the highest weight per property. Origin priority: user-agent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "< user "
      }), "< author ", (0,jsx_runtime.jsx)(_components.code, {
        children: "< author !important "
      }), "< user !important `< user-agent !important. When origins match, specificity decides. When specificity ties, the last declaration in source order wins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* user-agent (lowest priority) */\np { color: black; }\n\n/* author (normal priority) */\np { color: blue; }\n\n/* author !important (overrides everything except user !important) */\np { color: red !important; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-is-specificity-calculated",
      children: "Q2: How is specificity calculated?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Specificity is a four-part value ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a, b, c, d)"
      }), " computed as: inline styles = 1 for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), ", each ID selector = 1 for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), ", each class/attribute/pseudo-class = 1 for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), ", each element/pseudo-element = 1 for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), ". The larger the tuple lexicographically, the higher the specificity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* specificity (0, 0, 0, 1) → one element */\np { color: blue; }\n\n/* specificity (0, 1, 0, 0) → one ID */\n#sidebar { color: green; }\n\n/* specificity (0, 0, 1, 0) → one class */\n.highlight { color: yellow; }\n\n/* specificity (0, 0, 1, 1) → one class + one element */\np.highlight { color: orange; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-difference-between-a-pseudo-class-and-a-pseudo-element",
      children: "Q3: What is the difference between a pseudo-class and a pseudo-element?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A pseudo-class (", (0,jsx_runtime.jsx)(_components.code, {
        children: ":hover"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":nth-child"
      }), ") selects elements in a particular ", (0,jsx_runtime.jsx)(_components.em, {
        children: "state"
      }), " → it uses a single colon. A pseudo-element (", (0,jsx_runtime.jsx)(_components.code, {
        children: "::before"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "::first-line"
      }), ") selects a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "part"
      }), " of an element → CSS3 uses double colons. Pseudo-classes add to the specificity ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " column; pseudo-elements add to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "d"
      }), " column."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* pseudo-class → state-based */\nbutton:hover { background: #0056b3; }\nli:nth-child(odd) { background: #f5f5f5; }\n\n/* pseudo-element → part-based */\nblockquote::first-letter { font-size: 3em; float: left; }\n.card::before { content: \"★\"; color: gold; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-how-does-is-and-where-affect-specificity",
      children: ["Q4: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":is()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":where()"
      }), " affect specificity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":is()"
      }), " takes the specificity of its ", (0,jsx_runtime.jsx)(_components.em, {
        children: "most specific argument"
      }), " → it never lowers specificity. ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":where()"
      }), " always contributes ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zero"
      }), " specificity, regardless of its arguments. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":is()"
      }), " to group selectors without losing weight; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":where()"
      }), " for reset/theme defaults you want to be easily overridable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* :is() takes highest specificity inside → here (0, 1, 0) from #nav */\n:is(nav, #nav, .menu) a { color: blue; }\n\n/* :where() always yields zero specificity → easy to override */\n:where(nav, #nav, .menu) a { color: gray; }\n/* this single element selector beats the :where() rule above */\na { color: black; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-what-is-the-has-pseudo-class-and-how-is-it-used",
      children: ["Q5: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":has()"
      }), " pseudo-class and how is it used?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":has()"
      }), " is a relational pseudo-class → it selects an element based on its ", (0,jsx_runtime.jsx)(_components.em, {
        children: "descendants"
      }), " or ", (0,jsx_runtime.jsx)(_components.em, {
        children: "siblings"
      }), ". Often called \"the parent selector.\" It checks if the element ", (0,jsx_runtime.jsx)(_components.em, {
        children: "has"
      }), " a matching child, descendant, or subsequent sibling. Supported in all modern browsers as of 2024."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* style a card that contains an image */\n.card:has(img) { border: 2px solid blue; }\n\n/* style a form group that has an invalid input */\n.field:has(input:invalid) label { color: red; }\n\n/* style an h2 that is immediately followed by a paragraph */\nh2:has(+ p) { margin-bottom: 0; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-select-all-elements-except-the-last-child",
      children: "Q6: How do you select all elements except the last child?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":not(:last-child)"
      }), " to exclude the final sibling. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":not()"
      }), " pseudo-class accepts any selector list in modern CSS. It has the same specificity as the selector inside it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* every list item except the last */\nli:not(:last-child) { border-bottom: 1px solid #ddd; }\n\n/* every input except submit buttons */\ninput:not([type=\"submit\"]) { border: 1px solid #ccc; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q7-what-does-attrvalue-vs-attrvalue-match",
      children: ["Q7: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[attr~=value]"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[attr|=value]"
      }), " match?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~="
      }), " matches if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " is one of the space-separated words in the attribute. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|="
      }), " matches if the attribute equals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " or starts with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value-"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~="
      }), " is for space-delimited lists (like class); ", (0,jsx_runtime.jsx)(_components.code, {
        children: "|="
      }), " is for hyphenated prefixes (like language codes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* ~= matches a word in a space-separated list */\n[data-tags~=\"featured\"] { background: gold; }\n\n/* |= matches value or value- prefix */\n[lang|=\"en\"] { font-family: sans-serif; }\n/* matches lang=\"en\", lang=\"en-US\", lang=\"en-GB\" */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q8-what-is-the-difference-between-nth-child-and-nth-of-type",
      children: ["Q8: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nth-child"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nth-of-type"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":nth-child(n)"
      }), " counts all siblings regardless of type. ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":nth-of-type(n)"
      }), " counts only siblings of the same element type. If you have mixed elements in a container, ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":nth-child"
      }), " might skip types while ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":nth-of-type"
      }), " always counts within the same tag."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* selects the 2nd child regardless of type */\ndiv p:nth-child(2) { color: red; }\n\n/* selects the 2nd <p> among its siblings */\ndiv p:nth-of-type(2) { color: blue; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-select-an-element-that-contains-a-specific-class-in-a-space-separated-list",
      children: "Q9: How do you select an element that contains a specific class in a space-separated list?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use the attribute selector ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[class~=\"value\"]"
      }), " or simply ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".value"
      }), ". The class selector ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".value"
      }), " is equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[class~=\"value\"]"
      }), " → both match when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), " appears as a whole word in the class attribute."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* equivalent selectors */\n.card.featured { border-color: gold; }\n[class~=\"featured\"] { border-color: gold; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-the-difference-between-the-cascade-specificity-and-inheritance",
      children: "Q10: What is the difference between the cascade, specificity, and inheritance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The cascade resolves conflicts between declarations targeting the same element using origin + specificity + order. Specificity is one component of the cascade → a four-part weight based on selector types. Inheritance is separate: certain properties (color, font-family) are automatically inherited from parent to child unless overridden. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inherit"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "initial"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unset"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "revert"
      }), " keywords explicitly control this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".parent { color: red; font-size: 16px; border: 1px solid black; }\n/* child inherits color and font-size, but NOT border */\n.child { color: inherit; /* explicitly inherits even if normally not inherited */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "box-model--layout",
      children: "Box Model & Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-explain-the-css-box-model",
      children: "Q11: Explain the CSS box model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Every element is a rectangular box composed of four layers from inside-out: content, padding, border, and margin. The total width of an element in the standard box model is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "content + padding + border + margin"
      }), ". With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "box-sizing: border-box"
      }), ", the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), " property includes content + padding + border, making layout math predictable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* standard box model → width applies to content only */\n.standard {\n  box-sizing: content-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  /* total width = 200 + 40 + 10 = 250px */\n}\n\n/* border-box → width includes padding and border */\n.better {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  /* total width = 200px (content shrinks to 150px) */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q12-what-is-the-difference-between-display-none-and-visibility-hidden",
      children: ["Q12: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: none"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "visibility: hidden"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: none"
      }), " removes the element from the document flow entirely → it takes no space and is not rendered. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "visibility: hidden"
      }), " hides the element visually but preserves its space in the layout. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: none"
      }), " affects accessibility (screen readers skip it); ", (0,jsx_runtime.jsx)(_components.code, {
        children: "visibility: hidden"
      }), " may still be read."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".hidden-element { display: none; }       /* invisible, no box, no space */\n.invisible-element { visibility: hidden; } /* invisible, box still occupies space */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q13-explain-the-position-property-values",
      children: ["Q13: Explain the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " property values."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), " → default, follows normal flow, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "left"
      }), " ignored. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "relative"
      }), " → offset from its normal position without affecting other elements. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "absolute"
      }), " → removed from flow, positioned relative to the nearest positioned ancestor. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fixed"
      }), " → removed from flow, positioned relative to the viewport. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sticky"
      }), " → toggles between relative and fixed based on scroll threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".relative-box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}\n\n.absolute-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.fixed-header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n\n.sticky-nav {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q14-how-does-z-index-work-and-what-creates-a-stacking-context",
      children: ["Q14: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "z-index"
      }), " work and what creates a stacking context?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "z-index"
      }), " controls the stack order of positioned elements (elements whose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " is not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static"
      }), "). A stacking context is a group of elements whose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "z-index"
      }), " values are compared relative to each other. New contexts are created by: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "position"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "z-index"
      }), " value, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "opacity < 1"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transform"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contain: paint"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isolation: isolate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* creates a new stacking context */\n.card {\n  position: relative;\n  z-index: 1;\n  isolation: isolate; /* also creates a context */\n}\n\n/* child z-index is scoped within the parent's context */\n.card-overlay {\n  position: absolute;\n  z-index: 999; /* still behind a sibling's context with z-index: 1 */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q15-what-does-float-do-and-how-do-you-clear-it",
      children: ["Q15: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float"
      }), " do and how do you clear it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "float"
      }), " pushes an element to the left or right, allowing content to wrap around it. Floated elements are removed from normal flow. Parents of floated elements collapse because they don't account for the floated children. Clearing methods: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clear: both"
      }), " on a following element, the \"clearfix\" hack on the parent, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: flow-root"
      }), " on the parent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* modern clearfix → no hack needed */\n.container {\n  display: flow-root;\n}\n\n.sidebar {\n  float: left;\n  width: 250px;\n}\n\n.main {\n  float: left;\n  width: calc(100% - 250px);\n}\n/* better to use flexbox or grid for layout instead of float */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q16-what-is-the-difference-between-overflow-hidden-and-overflow-clip",
      children: ["Q16: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "overflow: hidden"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "overflow: clip"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Both clip overflowing content. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "overflow: hidden"
      }), " creates a new BFC and allows programmatic scrolling (JavaScript can still scroll the content). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "overflow: clip"
      }), " does not create a BFC and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "forbids"
      }), " any scrolling, including programmatic. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clip"
      }), " when you want to guarantee content stays clipped regardless of user interaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".hidden-box {\n  overflow: hidden; /* can be scrolled via JS */\n}\n\n.clip-box {\n  overflow: clip; /* no scrolling possible, including JS */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q17-how-does-margin-auto-center-an-element-horizontally",
      children: ["Q17: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin: auto"
      }), " center an element horizontally?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When a block-level element has a defined width, setting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin-left: auto"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin-right: auto"
      }), " makes the browser distribute remaining space equally on both sides, centering the element. This only works for horizontal centering. For vertical centering with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), ", the element needs to be in a flex or grid context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".centered {\n  width: 300px;\n  margin: 0 auto; /* left + right auto = horizontal center */\n}\n\n/* vertical + horizontal centering with flex */\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-what-is-margin-collapsing-and-when-does-it-happen",
      children: "Q18: What is margin collapsing and when does it happen?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Vertical margins of adjacent block-level elements collapse → the larger margin wins instead of adding together. Margins also collapse between parent and first/last child when there's no padding, border, or inline content separating them. Flex and grid items do NOT collapse margins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* margins collapse: space between boxes is 30px, not 50px */\n.box-a { margin-bottom: 30px; }\n.box-b { margin-top: 20px; }\n/* resulting margin = max(30, 20) = 30px */\n\n/* prevent collapse by adding a border or padding to the parent */\n.parent { padding: 1px; }\n/* or use overflow: hidden on the parent */\n.parent { overflow: hidden; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q19-what-is-display-flow-root",
      children: ["Q19: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: flow-root"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: flow-root"
      }), " creates a new Block Formatting Context (BFC) without hacks. It contains floats, prevents margin collapsing with children, and isolates the element from external floats. It's the cleanest way to contain children that use floats or to prevent margin collapse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* classic clearfix hack → not needed anymore */\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* modern replacement */\n.container {\n  display: flow-root;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q20-what-is-the-difference-between-inline-block-and-inline-block",
      children: ["Q20: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inline"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "block"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inline-block"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "block"
      }), " elements take full width, start on new lines, respect all box properties. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inline"
      }), " elements flow within text, ignore width/height, and only respect horizontal margin/padding. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inline-block"
      }), " flows inline but behaves like a block for the box model → it respects width, height, and all margins/padding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "span {\n  display: inline; /* default for span → width/height ignored */\n}\n\nspan.button {\n  display: inline-block; /* sits inline but respects dimensions */\n  width: 80px;\n  height: 32px;\n  padding: 4px 12px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flexbox--grid",
      children: "Flexbox & Grid"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-what-is-the-difference-between-flexbox-and-css-grid",
      children: "Q21: What is the difference between Flexbox and CSS Grid?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Flexbox is one-dimensional → it distributes items along a single axis (row ", (0,jsx_runtime.jsx)(_components.em, {
        children: "or"
      }), " column). Grid is two-dimensional → it controls rows ", (0,jsx_runtime.jsx)(_components.em, {
        children: "and"
      }), " columns simultaneously. Use Flexbox for component-level layout (nav bars, centering, inline form elements). Use Grid for page-level layout (overall page structure, gallery grids, dashboard panels)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* flexbox → one-dimensional row */\n.nav {\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n}\n\n/* grid → two-dimensional layout */\n.page-layout {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 250px 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q22-explain-flex-grow-flex-shrink-and-flex-basis",
      children: ["Q22: Explain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-grow"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-shrink"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-basis"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " These three properties control how flex items size within a container. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-grow"
      }), " (default 0) → proportion of remaining space the item should absorb. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-shrink"
      }), " (default 1) → how much the item shrinks when space is tight. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-basis"
      }), " (default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto"
      }), ") → the initial main-size of the item before space is distributed. The shorthand ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 1"
      }), " means ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 1 1 0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".flex-container {\n  display: flex;\n}\n\n.item-grow {\n  flex: 1;          /* grow: 1, shrink: 1, basis: 0 */\n}\n\n.item-fixed {\n  flex: 0 0 200px;  /* never grow, never shrink, basis 200px */\n}\n\n.item-auto {\n  flex: 1 1 auto;   /* grow, shrink, basis = content width */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q23-how-does-align-items-differ-from-justify-content",
      children: ["Q23: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-items"
      }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "justify-content"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "justify-content"
      }), " distributes space along the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "main axis"
      }), " (direction of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-direction"
      }), "). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-items"
      }), " controls alignment along the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "cross axis"
      }), " (perpendicular to the main axis). In a default row layout, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "justify-content"
      }), " controls horizontal spacing, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-items"
      }), " controls vertical alignment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".flex-container {\n  display: flex;\n  justify-content: center;     /* main axis: horizontal center */\n  align-items: stretch;        /* cross axis: stretch to fill height */\n}\n\n/* center both axes → the classic centering trick */\n.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q24-what-does-gap-replace-in-flexbox-and-grid",
      children: ["Q24: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), " replace in Flexbox and Grid?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), " replaces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin"
      }), " based spacing between items in both flex and grid layouts. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), " only applies ", (0,jsx_runtime.jsx)(_components.em, {
        children: "between"
      }), " items, never at the edges. In flexbox, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), " works on the main axis. In grid, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "row-gap"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "column-gap"
      }), " (shorthand ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), ") apply between rows and columns respectively. Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), " avoids the \"margin on the last item\" problem."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".flex-container {\n  display: flex;\n  gap: 16px; /* space between items, no margin hacks needed */\n  flex-wrap: wrap;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px 16px; /* row-gap column-gap */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-how-do-you-create-a-responsive-grid-that-adapts-the-number-of-columns-automatically",
      children: "Q25: How do you create a responsive grid that adapts the number of columns automatically?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fill"
      }), " keeps empty column tracks; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), " collapses them. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "minmax(250px, 1fr)"
      }), " ensures each column is at least 250px but can stretch equally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".responsive-grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  /* creates as many 280px-min columns as fit, no media queries needed */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q26-what-is-fr-unit-in-css-grid",
      children: ["Q26: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr"
      }), " unit in CSS Grid?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr"
      }), " stands for \"fraction\" → it distributes available space proportionally after fixed-size tracks are accounted for. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1fr"
      }), " means one fraction of the remaining space. Unlike ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr"
      }), " does not include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gap"
      }), " in its calculation, making it more predictable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".sidebar-layout {\n  display: grid;\n  grid-template-columns: 250px 1fr; /* sidebar fixed, content takes rest */\n}\n\n.three-columns {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr; /* 2:1:1 ratio */\n  gap: 16px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-how-do-you-center-an-element-both-horizontally-and-vertically-with-flexbox",
      children: "Q27: How do you center an element both horizontally and vertically with Flexbox?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Apply ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: flex; justify-content: center; align-items: center"
      }), " to the parent container. This works regardless of the child's dimensions and is the most reliable centering technique."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q28-what-is-the-difference-between-auto-fill-and-auto-fit-in-grid",
      children: ["Q28: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fill"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), " in Grid?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Both automatically generate as many tracks as fit in the container. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fill"
      }), " keeps the column track placeholders even if they're empty → preserving the grid structure. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), " collapses empty tracks to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), ", allowing items to stretch to fill the entire row. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "auto-fit"
      }), " for responsive galleries where you want items to expand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* auto-fill → keeps empty column placeholders */\n.grid-fill {\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n}\n\n/* auto-fit → collapses empty tracks, items stretch */\n.grid-fit {\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q29-how-do-you-create-a-sticky-footer-with-flexbox",
      children: "Q29: How do you create a sticky footer with Flexbox?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Set the body or wrapper to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "display: flex; flex-direction: column; min-height: 100vh"
      }), ". Give the main content area ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 1"
      }), ". The footer stays at the bottom on short pages and pushes down on long pages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  margin: 0;\n}\n\n.main-content {\n  flex: 1; /* takes all available space */\n}\n\n.footer {\n  padding: 1rem;\n  background: #333;\n  color: white;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q30-what-is-the-order-property-in-flexbox",
      children: ["Q30: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order"
      }), " property in Flexbox?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order"
      }), " (default 0) changes the visual order of flex items without affecting the source order. Items are laid out in ascending ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order"
      }), " value. Items with the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order"
      }), " keep their source order. Use sparingly → it can confuse keyboard navigation and screen readers since tab order follows source order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".flex-container {\n  display: flex;\n}\n\n.item-first { order: -1; }   /* appears first regardless of source order */\n.item-last  { order: 1; }    /* appears last */\n.item-default { order: 0; }  /* between -1 and 1 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q31-how-do-you-create-a-masonry-like-layout-with-css-grid",
      children: "Q31: How do you create a masonry-like layout with CSS Grid?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CSS Grid doesn't natively support masonry (items of varying heights filling gaps). You can approximate it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grid-template-rows: masonry"
      }), " (Firefox-only behind a flag) or by setting explicit row spans on items. For production, use a JavaScript library like Masonry or columns-based layout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* approximation with explicit spans */\n.masonry-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.masonry-item {\n  break-inside: avoid;\n}\n\n.masonry-item.tall {\n  grid-row: span 2;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q32-what-is-the-difference-between-align-content-and-align-items-in-flexbox",
      children: ["Q32: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-content"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-items"
      }), " in Flexbox?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-items"
      }), " aligns items within a single line on the cross axis. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-content"
      }), " distributes space between ", (0,jsx_runtime.jsx)(_components.em, {
        children: "multiple lines"
      }), " (rows) when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-wrap: wrap"
      }), " creates multiple lines. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-content"
      }), " has no effect when there's only one line. In CSS Grid, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-content"
      }), " positions the entire grid within the container."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".multi-line-flex {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between; /* distributes rows vertically */\n  align-items: center;          /* aligns items within each row */\n  height: 400px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q33-how-does-flex-0-0-auto-differ-from-flex-1-1-auto",
      children: ["Q33: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 0 0 auto"
      }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 1 1 auto"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 0 0 auto"
      }), " → item starts at content width, never grows, can shrink if needed. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 1 1 auto"
      }), " → item starts at content width, can grow to fill space, can shrink. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex-basis: auto"
      }), " means the initial size is the content's intrinsic size. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: 0 0 auto"
      }), " is the default shorthand (equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flex: initial"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".no-grow {\n  flex: 0 0 auto; /* flex: initial → content sized, won't grow */\n}\n\n.grow-if-space {\n  flex: 1 1 auto; /* flex: auto → content sized, grows to fill */\n}\n\n.even-split {\n  flex: 1;        /* flex: 1 1 0 → no basis, all items split equally */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q34-what-is-grid-template-areas-and-how-do-you-use-it",
      children: ["Q34: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grid-template-areas"
      }), " and how do you use it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grid-template-areas"
      }), " lets you name regions of your grid and place items using those names instead of line numbers. The syntax uses ASCII art strings where each name represents a grid cell. Dots (", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), ") create empty cells. Each string is a row; each whitespace-separated name is a column."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".layout {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header  header  header\"\n    \"sidebar main    aside\"\n    \"footer  footer  footer\";\n  min-height: 100vh;\n}\n\nheader { grid-area: header; }\nnav    { grid-area: sidebar; }\nmain   { grid-area: main; }\naside  { grid-area: aside; }\nfooter { grid-area: footer; }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q35-how-do-you-align-a-single-item-differently-from-others-in-flexbox",
      children: "Q35: How do you align a single item differently from others in Flexbox?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-self"
      }), " on the individual flex item to override the container's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "align-items"
      }), " for that item. For horizontal alignment, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin-left: auto"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin-right: auto"
      }), " on the item."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".container {\n  display: flex;\n  align-items: center; /* all items centered vertically */\n}\n\n.item-top {\n  align-self: flex-start; /* this item aligns to top */\n}\n\n.spacer {\n  margin-left: auto;  /* pushes this item to the right */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "responsive-design",
      children: "Responsive Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q36-what-is-a-media-query-and-what-are-common-breakpoints",
      children: "Q36: What is a media query and what are common breakpoints?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A media query applies CSS conditionally based on device characteristics (usually viewport width). Common breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1280px+ (wide). However, prefer content-based breakpoints → add a breakpoint where the design breaks, not at arbitrary device widths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* mobile-first approach → base styles for mobile */\n.grid { display: flex; flex-direction: column; }\n\n/* tablet */\n@media (min-width: 768px) {\n  .grid { display: grid; grid-template-columns: repeat(2, 1fr); }\n}\n\n/* desktop */\n@media (min-width: 1024px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q37-what-is-the-difference-between-em-and-rem",
      children: ["Q37: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "em"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rem"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "em"
      }), " is relative to the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "parent element's"
      }), " font-size. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rem"
      }), " (root em) is relative to the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "root element's"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "html"
      }), ") font-size. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rem"
      }), " avoids compounding → nested elements with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "em"
      }), " multiply each level. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rem"
      }), " for most spacing and sizing; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "em"
      }), " when you want a value to scale with a component's own font-size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "html { font-size: 16px; }\n\n.parent { font-size: 1.25em; }  /* = 20px */\n.child-em { font-size: 1.5em; } /* = 30px (20 * 1.5) → compounded */\n.child-rem { font-size: 1.5rem; } /* = 24px (16 * 1.5) → no compounding */\n\n.consistent-spacing {\n  margin: 1rem;     /* always relative to root */\n  padding: 0.75rem;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q38-what-is-the-mobile-first-approach-to-responsive-design",
      children: "Q38: What is the mobile-first approach to responsive design?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Mobile-first means writing base CSS for the smallest screen first, then using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min-width"
      }), " media queries to enhance for larger screens. This ensures the mobile experience is lean and performant, and large-screen enhancements layer on top. The alternative (desktop-first with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max-width"
      }), ") loads heavier styles on mobile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* mobile-first → base is mobile */\n.card {\n  width: 100%;\n  padding: 1rem;\n}\n\n/* tablet and up */\n@media (min-width: 768px) {\n  .card {\n    width: 50%;\n    padding: 1.5rem;\n  }\n}\n\n/* desktop and up */\n@media (min-width: 1024px) {\n  .card {\n    width: 33.333%;\n    padding: 2rem;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q39-how-do-you-make-images-responsive",
      children: "Q39: How do you make images responsive?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max-width: 100%"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "height: auto"
      }), " so images never exceed their container and maintain aspect ratio. For art direction (different crops on different screens), use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<picture>"
      }), " element. For resolution switching (different pixel densities), use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "srcset"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "w"
      }), " descriptors and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* universal responsive image */\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- art direction → different crops -->\n<picture>\n  <source media=\"(min-width: 1024px)\" srcset=\"hero-wide.webp\">\n  <source media=\"(min-width: 768px)\" srcset=\"hero-tablet.webp\">\n  <img src=\"hero-mobile.webp\" alt=\"Hero image\">\n</picture>\n\n<!-- resolution switching -->\n<img\n  src=\"photo-400.jpg\"\n  srcset=\"photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w\"\n  sizes=\"(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px\"\n  alt=\"Responsive photo\">\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q40-what-are-container-queries",
      children: "Q40: What are container queries?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Container queries (using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@container"
      }), ") allow styling elements based on their ", (0,jsx_runtime.jsx)(_components.em, {
        children: "parent container's"
      }), " size rather than the viewport. This makes truly reusable components that adapt to wherever they're placed. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "container-type: inline-size"
      }), " on the container, then query with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@container (min-width: 400px)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* define a containment context */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* style based on container width, not viewport */\n@container card (min-width: 400px) {\n  .card {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    gap: 1rem;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q41-what-is-the-difference-between-vw-vh-vmin-and-vmax",
      children: ["Q41: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vw"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vh"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmin"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmax"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1vw = 1%"
      }), " of viewport width. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1vh = 1%"
      }), " of viewport height. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmin"
      }), " = the smaller of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vw"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vh"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmax"
      }), " = the larger of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vw"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vh"
      }), ". These are useful for full-screen layouts, but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "100vh"
      }), " can cause issues on mobile browsers with dynamic toolbars → use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "100dvh"
      }), " (dynamic viewport height) for mobile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".hero {\n  height: 100vh;       /* classic full-screen → may overflow on mobile */\n  height: 100dvh;      /* dynamic viewport height → better for mobile */\n}\n\n.full-width {\n  width: 100vw;        /* full viewport width */\n  margin-left: calc(-50vw + 50%); /* negates parent padding */\n}\n\n.giant-text {\n  font-size: min(5vw, 3rem); /* responsive, capped at 3rem */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q42-what-are-min-max-and-clamp-in-css",
      children: ["Q42: What are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clamp()"
      }), " in CSS?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " These comparison functions enable responsive sizing without media queries. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min(a, b)"
      }), " = the smaller value. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max(a, b)"
      }), " = the larger value. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clamp(min, preferred, max)"
      }), " = a value that's never below ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min"
      }), " or above ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max"
      }), ", ideally ", (0,jsx_runtime.jsx)(_components.code, {
        children: "preferred"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clamp()"
      }), " for fluid typography and spacing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* fluid typography → scales between 1rem and 3rem based on viewport */\n.fluid-text {\n  font-size: clamp(1rem, 2.5vw + 0.5rem, 3rem);\n}\n\n/* responsive width with bounds */\n.container {\n  width: min(90%, 1200px); /* 90% or 1200px, whichever is smaller */\n}\n\n/* padding that scales but has limits */\n.card {\n  padding: clamp(1rem, 3vw, 2rem);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q43-what-is-the-prefers-color-scheme-media-query",
      children: ["Q43: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefers-color-scheme"
      }), " media query?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " It detects whether the user's system is set to light or dark mode. Use it to automatically provide appropriate color schemes without requiring a manual toggle. Combine with CSS custom properties for clean theme switching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ":root {\n  --bg: #ffffff;\n  --text: #1a1a1a;\n  --primary: #2563eb;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #1a1a1a;\n    --text: #f0f0f0;\n    --primary: #60a5fa;\n  }\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q44-what-is-the-prefers-reduced-motion-media-query",
      children: ["Q44: What is the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prefers-reduced-motion"
      }), " media query?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " It detects if the user has requested reduced motion in their system accessibility settings. Disable or simplify animations when this is active. This is an accessibility requirement, not optional."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".animated-element {\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-element {\n    transition: none;          /* disable transitions */\n  }\n\n  * {\n    animation-duration: 0.01ms !important; /* disable animations */\n    animation-iteration-count: 1 !important;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q45-how-do-you-handle-landscape-vs-portrait-orientation",
      children: "Q45: How do you handle landscape vs portrait orientation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "orientation"
      }), " media feature: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "portrait"
      }), " (height > width) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "landscape"
      }), " (width > height). On mobile, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dvh"
      }), " units or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "window.innerHeight"
      }), " to handle dynamic toolbar heights that change when the user scrolls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@media (orientation: landscape) {\n  .sidebar {\n    width: 250px;\n  }\n}\n\n@media (orientation: portrait) {\n  .sidebar {\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animations--transitions",
      children: "Animations & Transitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q46-what-is-the-difference-between-css-transitions-and-animations",
      children: "Q46: What is the difference between CSS transitions and animations?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Transitions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "transition"
      }), ") animate ", (0,jsx_runtime.jsx)(_components.em, {
        children: "between"
      }), " two states → they need a trigger (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: ":hover"
      }), ") and only define start/end. Animations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@keyframes"
      }), ") can have multiple keyframe stops, run automatically, loop, reverse, and pause. Use transitions for simple state changes; use animations for complex multi-step or continuous motion."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* transition → hover in/out */\n.button {\n  background: blue;\n  color: white;\n  transition: background 0.3s ease;\n}\n.button:hover {\n  background: darkblue;\n}\n\n/* animation → multi-step, auto-running */\n@keyframes pulse {\n  0%   { transform: scale(1); opacity: 0.7; }\n  50%  { transform: scale(1.05); opacity: 1; }\n  100% { transform: scale(1); opacity: 0.7; }\n}\n.pulse {\n  animation: pulse 2s ease-in-out infinite;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q47-which-css-properties-are-safe-to-animate-for-performance",
      children: "Q47: Which CSS properties are safe to animate for performance?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transform"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "opacity"
      }), " are GPU-accelerated and don't trigger layout or paint on each frame. Animating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "width"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "height"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "left"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "margin"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "padding"
      }), " triggers layout recalculations and repaints, causing jank. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transform: translate()"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "top"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "left"
      }), " for positioning animations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* BAD → triggers layout on every frame */\n.bad-animation {\n  animation: move-bad 0.3s ease;\n}\n@keyframes move-bad {\n  from { left: 0; }\n  to   { left: 100px; }\n}\n\n/* GOOD → GPU-accelerated */\n.good-animation {\n  animation: move-good 0.3s ease;\n}\n@keyframes move-good {\n  from { transform: translateX(0); }\n  to   { transform: translateX(100px); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q48-what-are-the-sub-properties-of-transform-and-how-do-they-compose",
      children: ["Q48: What are the sub-properties of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transform"
      }), " and how do they compose?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Common transform functions: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "translate()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rotate()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scale()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "skew()"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "matrix()"
      }), ". Multiple functions are applied right-to-left (last function applied first). For individual control, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "translate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rotate"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scale"
      }), " as separate properties in modern CSS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* multiple transforms → applied right to left */\n.composed {\n  transform: translateX(50px) rotate(45deg) scale(1.2);\n  /* 1. scale to 1.2x, 2. rotate 45°, 3. move 50px right */\n}\n\n/* individual transform properties (modern browsers) */\n.individual {\n  translate: 50px 0;\n  rotate: 45deg;\n  scale: 1.2;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q49-how-do-you-create-a-smooth-height-transition-on-an-element-with-unknown-content-height",
      children: "Q49: How do you create a smooth height transition on an element with unknown content height?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " CSS cannot transition ", (0,jsx_runtime.jsx)(_components.code, {
        children: "height: auto"
      }), " directly. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "max-height"
      }), " transition by setting a max value larger than the actual content, or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "grid-template-rows: 0fr"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1fr"
      }), " for a clean CSS-only solution without JavaScript."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* max-height trick → close enough */\n.accordion-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.accordion.open .accordion-content {\n  max-height: 500px; /* larger than any content */\n}\n\n/* modern grid trick → exact */\n.accordion-content {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition: grid-template-rows 0.3s ease;\n}\n.accordion.open .accordion-content {\n  grid-template-rows: 1fr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q50-what-is-will-change-and-when-should-you-use-it",
      children: ["Q50: What is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "will-change"
      }), " and when should you use it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "will-change"
      }), " hints to the browser that an element will change a property, allowing it to optimize ahead of time (e.g., promote to a compositor layer). Use it ", (0,jsx_runtime.jsx)(_components.em, {
        children: "sparingly"
      }), " and only on properties that benefit from GPU acceleration (", (0,jsx_runtime.jsx)(_components.code, {
        children: "transform"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "opacity"
      }), "). Applying it to everything wastes memory and can actually hurt performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* use on elements you're about to animate */\n.sliding-panel {\n  will-change: transform;\n  transition: transform 0.3s ease;\n}\n\n/* remove after animation completes via JS */\n/* element.style.willChange = 'auto'; */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q51-what-is-the-difference-between-ease-linear-ease-in-ease-out-and-cubic-bezier",
      children: ["Q51: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "linear"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease-in"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease-out"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cubic-bezier"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " These are timing functions that control the rate of change during an animation. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "linear"
      }), " → constant speed. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease"
      }), " → slow start, fast middle, slow end (default). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease-in"
      }), " → slow start, fast end. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease-out"
      }), " → fast start, slow end. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cubic-bezier(x1, y1, x2, y2)"
      }), " → custom curve. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ease-out"
      }), " is generally best for UI transitions (feels responsive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".button {\n  transition: transform 0.2s ease-out; /* natural feel */\n}\n\n.bounce-in {\n  animation: bounce 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  /* overshoot effect */\n}\n\n@keyframes bounce {\n  0%   { transform: scale(0); }\n  50%  { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q52-how-do-you-pause-and-resume-a-css-animation",
      children: "Q52: How do you pause and resume a CSS animation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "animation-play-state: paused"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "running"
      }), ". This can be toggled via a class or JavaScript. The animation picks up from where it paused → no snapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".spinner {\n  animation: spin 1s linear infinite;\n}\n\n.spinner.paused {\n  animation-play-state: paused;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q53-how-do-you-animate-on-scroll-without-javascript",
      children: "Q53: How do you animate on scroll without JavaScript?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "animation-timeline: scroll()"
      }), " (Chrome 115+) to drive an animation based on scroll position. Combine with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "animation-range"
      }), " to control when the animation starts and ends. This is a newer feature → check browser support for your target audience."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "@keyframes fade-in {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n.scroll-animate {\n  animation: fade-in 1s ease-out;\n  animation-timeline: view();\n  animation-range: entry 0% entry 100%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "css-frameworks--tailwind",
      children: "CSS Frameworks & Tailwind"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q54-what-is-utility-first-css-and-how-is-it-different-from-semantic-css",
      children: "Q54: What is utility-first CSS and how is it different from semantic CSS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Utility-first CSS uses small, single-purpose classes (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "text-center"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p-4"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bg-blue-500"
      }), ") applied directly in HTML. Semantic CSS uses meaningful class names (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".card"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".hero-title"
      }), ") with custom styles in stylesheets. Utility-first eliminates context-switching between HTML and CSS files, reduces naming fatigue, and produces smaller CSS bundles through purging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- semantic approach -->\n<div class=\"card\">\n  <h2 class=\"card-title\">Hello</h2>\n  <p class=\"card-body\">World</p>\n</div>\n\n<!-- utility-first (Tailwind) -->\n<div class=\"rounded-lg shadow-md p-6 bg-white\">\n  <h2 class=\"text-xl font-bold text-gray-900\">Hello</h2>\n  <p class=\"text-gray-600 mt-2\">World</p>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q55-how-does-tailwinds-apply-directive-work-and-when-should-you-use-it",
      children: ["Q55: How does Tailwind's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@apply"
      }), " directive work and when should you use it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@apply"
      }), " inlines utility classes into a custom CSS class using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@layer components"
      }), ". Use it sparingly for abstracting repeated utility patterns into reusable component classes. Overusing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@apply"
      }), " defeats the purpose of utility-first by recreating the same abstraction problems as semantic CSS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* use @apply sparingly → only for highly repeated patterns */\n@layer components {\n  .btn-primary {\n    @apply inline-flex items-center px-4 py-2 bg-blue-600 text-white\n           font-medium rounded-md hover:bg-blue-700\n           focus:outline-none focus:ring-2 focus:ring-blue-500\n           transition-colors duration-200;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q56-how-does-tailwind-purge-unused-styles",
      children: "Q56: How does Tailwind purge unused styles?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Tailwind scans your source files for class names, then removes any CSS not found in those files. It uses regular expressions to find complete class names → dynamic class names built via string concatenation can be purged accidentally. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "safelist"
      }), " option in the config for classes you need to keep but can't statically detect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// tailwind.config.js\nmodule.exports = {\n  content: [\n    './resources/**/*.blade.php',\n    './resources/**/*.js',\n    './resources/**/*.vue',\n  ],\n  safelist: [\n    'bg-red-500',\n    'bg-green-500',\n    { pattern: /^bg-(red|green|blue)-(500|700)$/ },\n  ],\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q57-what-are-the-downsides-of-utility-first-css",
      children: "Q57: What are the downsides of utility-first CSS?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Longer HTML with many classes can be hard to read. Design changes may require touching HTML instead of CSS. Team unfamiliarity can slow onboarding. Components built with utility classes are tightly coupled to the framework (migrating away from Tailwind means rewriting HTML). Use component abstractions (Vue, React, Blade components) to keep templates clean."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<!-- blade component abstracts utilities -->\n<x-button variant=\"primary\" size=\"lg\">Submit</x-button>\n\n<!-- renders to: -->\n<button class=\"inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200\">\n  Submit\n</button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q58-how-do-you-customize-tailwinds-theme",
      children: "Q58: How do you customize Tailwind's theme?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Extend or override the default theme in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tailwind.config.js"
      }), " under the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), " key. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extend"
      }), " to add new values without replacing defaults. Replace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme"
      }), " properties directly to fully customize. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "theme()"
      }), " in your CSS to reference theme values."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        brand: {\n          50: '#eff6ff',\n          500: '#3b82f6',\n          700: '#1d4ed8',\n        },\n      },\n      fontFamily: {\n        display: ['Inter', 'system-ui', 'sans-serif'],\n      },\n      spacing: {\n        '18': '4.5rem',\n        '88': '22rem',\n      },\n    },\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q59-what-is-the-difference-between-tailwind-and-bootstrap",
      children: "Q59: What is the difference between Tailwind and Bootstrap?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Bootstrap provides pre-built components (buttons, modals, navbars) with opinionated styles. Tailwind provides low-level utilities to build custom designs without fighting pre-built styles. Bootstrap uses semantic classes with component-specific CSS; Tailwind uses utility classes composed in HTML. Bootstrap is faster for quick prototypes; Tailwind produces more unique, custom-looking results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- Bootstrap → pre-built component -->\n<button class=\"btn btn-primary btn-lg\">Click Me</button>\n\n<!-- Tailwind → compose from utilities -->\n<button class=\"bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors\">Click Me</button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q60-how-do-you-handle-dark-mode-in-tailwind",
      children: "Q60: How do you handle dark mode in Tailwind?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Tailwind has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dark:"
      }), " variant that applies styles when the user's system is in dark mode. Configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "darkMode: 'class'"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tailwind.config.js"
      }), " to toggle based on a class instead of system preference → useful for manual theme toggles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// tailwind.config.js\nmodule.exports = {\n  darkMode: 'class', // or 'media' for system preference\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- system preference (default) -->\n<div class=\"bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100\">\n  <h1 class=\"text-2xl font-bold\">Title</h1>\n</div>\n\n<!-- class-based → toggle with JavaScript -->\n<html class=\"dark\">\n  ...\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q61-what-is-css-layers-layer-and-how-does-it-help-framework-integration",
      children: ["Q61: What is CSS Layers (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@layer"
      }), ") and how does it help framework integration?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@layer"
      }), " lets you explicitly control the cascade order of groups of styles, overriding specificity. Layer order wins over specificity → a rule in a later layer beats a rule in an earlier layer even if the earlier rule has higher specificity. Tailwind itself uses layers to ensure utilities always override base and component styles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* layer order determines priority: base < components < utilities */\n@layer base {\n  a { @apply text-blue-600 underline; }\n}\n\n@layer components {\n  .card { @apply p-6 rounded-lg shadow; }\n}\n\n@layer utilities {\n  .text-balance { text-wrap: balance; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "laravel-frontend",
      children: "Laravel Frontend"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q62-how-do-you-set-up-tailwind-css-in-a-laravel-project",
      children: "Q62: How do you set up Tailwind CSS in a Laravel project?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Laravel ships with Tailwind and Vite pre-configured in new installations. Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install"
      }), " to install dependencies. For existing projects, install via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install tailwindcss @tailwindcss/vite"
      }), " and add the Vite plugin to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vite.config.js"
      }), ". Import Tailwind in your main CSS file."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install tailwindcss @tailwindcss/vite\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// vite.config.js\nimport { defineConfig } from 'vite';\nimport laravel from 'laravel-vite-plugin';\nimport tailwindcss from '@tailwindcss/vite';\n\nexport default defineConfig({\n  plugins: [\n    laravel({\n      input: ['resources/css/app.css', 'resources/js/app.js'],\n      refresh: true,\n    }),\n    tailwindcss(),\n  ],\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/* resources/css/app.css */\n@import \"tailwindcss\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q63-how-does-vite-work-with-laravel-to-compile-frontend-assets",
      children: "Q63: How does Vite work with Laravel to compile frontend assets?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Vite is a fast build tool that serves assets during development (HMR via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run dev"
      }), ") and bundles for production (", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), "). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "laravel-vite-plugin"
      }), " handles entry point resolution, hot module replacement, and injecting the correct script/link tags. Use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@vite()"
      }), " Blade directive to load the compiled assets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<!-- layouts/app.blade.php -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>{{ config('app.name') }}</title>\n    @vite(['resources/css/app.css', 'resources/js/app.js'])\n</head>\n<body>\n    {{ $slot }}\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q64-what-is-postcss-and-what-role-does-it-play-in-laravel-frontend",
      children: "Q64: What is PostCSS and what role does it play in Laravel frontend?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " PostCSS is a CSS processor that transforms CSS with JavaScript plugins. Tailwind CSS itself is a PostCSS plugin (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tailwindcss/postcss"
      }), "). PostCSS handles: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@import"
      }), " inlining, vendor prefixing (autoprefixer), nesting, and custom media queries. In modern Laravel, Tailwind is configured as a Vite plugin through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@tailwindcss/vite"
      }), " rather than a PostCSS plugin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// postcss.config.js (legacy approach before @tailwindcss/vite)\nexport default {\n  plugins: {\n    '@tailwindcss/postcss': {},\n    autoprefixer: {},\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q65-how-do-you-handle-multiple-css-entry-points-in-laravel-vite",
      children: "Q65: How do you handle multiple CSS entry points in Laravel Vite?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Pass an array of entry points to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input"
      }), " option in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vite.config.js"
      }), ". Each entry point generates its own compiled file. Add each to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@vite()"
      }), " directive if you need them on every page, or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@vite()"
      }), " on specific pages for page-specific CSS/JS bundles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// vite.config.js → multiple entry points\nexport default defineConfig({\n  plugins: [\n    laravel({\n      input: [\n        'resources/css/app.css',\n        'resources/css/admin.css',\n        'resources/js/app.js',\n        'resources/js/admin.js',\n      ],\n      refresh: true,\n    }),\n  ],\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "<!-- global → on every page -->\n@vite(['resources/css/app.css', 'resources/js/app.js'])\n\n<!-- admin layout only -->\n@vite(['resources/css/admin.css', 'resources/js/admin.js'])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q66-how-do-you-use-blade-components-with-tailwind-classes",
      children: "Q66: How do you use Blade components with Tailwind classes?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Create a Blade component that accepts variant props and applies the correct Tailwind classes. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@props"
      }), " to define accepted attributes, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$attributes->merge()"
      }), " for merging additional classes onto the root element. This keeps your views clean while using utility-first CSS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- resources/views/components/button.blade.php --}}\n@props([\n    'variant' => 'primary',\n    'size' => 'md',\n])\n\n@php\n$base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';\n\n$variants = [\n    'primary' => 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',\n    'secondary' => 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',\n    'danger' => 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',\n];\n\n$sizes = [\n    'sm' => 'px-3 py-1.5 text-sm',\n    'md' => 'px-4 py-2 text-sm',\n    'lg' => 'px-6 py-3 text-base',\n];\n@endphp\n\n<button {{ $attributes->merge([\n    'class' => \"$base {$variants[$variant]} {$sizes[$size]}\"\n]) }}>\n    {{ $slot }}\n</button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- usage --}}\n<x-button variant=\"primary\" size=\"lg\">Submit</x-button>\n<x-button variant=\"secondary\" size=\"sm\" class=\"ml-2\">Cancel</x-button>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q67-how-do-you-extract-common-tailwind-patterns-in-laravel",
      children: "Q67: How do you extract common Tailwind patterns in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use Blade components (", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-"
      }), " components) or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@apply"
      }), " in CSS for truly repetitive patterns. For theme values, define them in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tailwind.config.js"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "extend"
      }), ". For dynamic conditional classes, use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Illuminate\\Support\\Facades\\Blade"
      }), " directive or the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@class"
      }), " directive in Blade."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- @class directive → conditional classes --}}\n<div @class([\n    'p-4 rounded-lg',\n    'bg-green-100 text-green-800' => $status === 'success',\n    'bg-red-100 text-red-800' => $status === 'error',\n    'bg-gray-100 text-gray-800' => $status === 'info',\n])>\n    {{ $message }}\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q68-how-does-hot-module-replacement-work-in-laravel-with-vite",
      children: "Q68: How does hot module replacement work in Laravel with Vite?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run dev"
      }), " to start the Vite dev server. Vite watches your source files and pushes updates to the browser via WebSocket on change → CSS updates are instant without page reload; JS updates via HMR preserve state. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@vite()"
      }), " Blade directive automatically detects the dev server and loads from it. Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "APP_URL"
      }), " correctly in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " for proper asset URLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# terminal 1 → Vite dev server with HMR\nnpm run dev\n\n# terminal 2 → Laravel dev server\nphp artisan serve\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-env",
        children: "# .env → ensure APP_URL matches your dev server\nAPP_URL=http://localhost:8000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q69-how-do-you-version-assets-for-cache-busting-in-laravel",
      children: "Q69: How do you version assets for cache busting in Laravel?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Vite automatically handles cache busting through content hashing in filenames. When you run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), ", Vite appends a content hash to the output filename (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app-abc123.css"
      }), "). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@vite()"
      }), " directive reads the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "build/manifest.json"
      }), " generated by Vite and resolves the hashed filename automatically. No manual versioning needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# production build → generates hashed filenames\nnpm run build\n\n# output in public/build/\n# manifest.json maps \"resources/css/app.css\" -> \"build/assets/app-abc123.css\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-blade",
        children: "{{-- @vite() reads manifest.json automatically for production --}}\n@vite(['resources/css/app.css', 'resources/js/app.js'])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q70-how-would-you-integrate-a-third-party-css-library-like-sweetalert2-or-flatpickr-in-laravel-with-vite",
      children: "Q70: How would you integrate a third-party CSS library (like SweetAlert2 or Flatpickr) in Laravel with Vite?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Install the package via npm and import its CSS in your JavaScript entry point. Vite processes the imported CSS and includes it in the bundle. For lazy-loading, use dynamic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "import()"
      }), " which code-splits the CSS automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install flatpickr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// resources/js/app.js\nimport flatpickr from 'flatpickr';\nimport 'flatpickr/dist/flatpickr.min.css'; // CSS bundled automatically\n\n// lazy-load a heavy component only when needed\ndocument.getElementById('load-chart')?.addEventListener('click', async () => {\n  const { Chart } = await import('chart.js');\n  new Chart(/* ... */);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Compare key CSS concepts for interview preparation."]
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
            children: "CSS Specificity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determine which rule takes precedence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline > ID > Class > Element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Box Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element sizing calculation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "content-box vs border-box"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-dimensional layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flex containers + flex items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSS Grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-dimensional layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid tracks + grid areas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSS variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic theming + scope inheritance"
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
        }), " Quick reference for CSS interview topics."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Selectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element, class, ID, attribute, pseudo-class, pseudo-element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Box Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "content, padding, border, margin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Positioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "static, relative, absolute, fixed, sticky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "justify-content, align-items, flex-direction, flex-wrap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grid-template-columns, grid-template-rows, grid-area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Media Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@media (min-width: 768px) { ... }"
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
            children: "Specificity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rule conflict resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictability vs flexibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Box Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Element dimensions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive vs traditional sizing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Layout System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexbox (1D) vs Grid (2D)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Responsive Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-device support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breakpoints vs fluidity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Animations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual effects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance vs visual richness"
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
        }), " Test your CSS interview knowledge."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1:"
      }), " What is the correct order of CSS specificity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Element > Class > ID > Inline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Inline > ID > Class > Element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ID > Inline > Class > Element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Class > ID > Element > Inline"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>B) Inline > ID > Class > Element</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Q2:"
          }), " What is the difference between content-box and border-box?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) No difference"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) border-box includes padding and border in width"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) content-box is always smaller"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) border-box excludes padding"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>B) border-box includes padding and border in width</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Q3:"
              }), " When should CSS Grid be preferred over Flexbox?"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A) For one-dimensional layouts"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "B) For two-dimensional layouts (rows and columns)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "C) For small elements only"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "D) For animations"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.details, {
              children: (0,jsx_runtime.jsxs)(_components.summary, {
                children: ["Answer</summary>B) For two-dimensional layouts (rows and columns)</details>\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4:"
                  }), " What CSS feature enables dynamic theming?"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "A) Variables (Sass)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "B) Custom properties (CSS variables)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "C) Preprocessor mixins"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "D) Class toggling"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.details, {
                  children: (0,jsx_runtime.jsx)(_components.summary, {
                    children: "Answer</summary>B) Custom properties (CSS variables)</details>\n"
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