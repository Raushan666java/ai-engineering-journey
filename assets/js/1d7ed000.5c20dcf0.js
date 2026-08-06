"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20852],{

/***/ 77365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_10_senior_engineer_thinking_03_the_readability_mandate_md_1d7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-10-senior-engineer-thinking-03-the-readability-mandate-md-1d7.json
const site_docs_courses_learning_course_pro_dev_book_chapter_10_senior_engineer_thinking_03_the_readability_mandate_md_1d7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/The_Readability_Mandate","title":"📖 The Readability Mandate","description":"🕵️‍♂️ Cleverness Is The Enemy","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking","slug":"/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate","title":"📖 The Readability Mandate","sidebar_label":"📖 The Readability Mandate","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"🌧️ Pessimistic Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design"},"next":{"title":"🚀 Standing Out in the Market","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_11_Career_Growth/01_Standing_Out_In_The_Market"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate',
	title: '📖 The Readability Mandate',
	sidebar_label: '📖 The Readability Mandate',
	sidebar_position: 3
};
const contentTitle = '📖 The Readability Mandate';

const assets = {

};



const toc = [{
  "value": "🕵️‍♂️ Cleverness Is The Enemy",
  "id": "️️-cleverness-is-the-enemy",
  "level": 3
}, {
  "value": "🕒 The Future Developer Penalty",
  "id": "-the-future-developer-penalty",
  "level": 3
}, {
  "value": "The Pro Principle: Explicit &gt; Implicit",
  "id": "the-pro-principle-explicit--implicit",
  "level": 4
}, {
  "value": "🏷️ Variable Naming Conventions",
  "id": "️-variable-naming-conventions",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-the-readability-mandate",
        children: "📖 The Readability Mandate"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️️-cleverness-is-the-enemy",
      children: "🕵️‍♂️ Cleverness Is The Enemy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the great ego-traps in software engineering occurs during the transition from Junior to Mid-Level. You discover powerful, \"clever\" language features: ternaries nested inside ternaries, advanced bitwise operators, array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reduce"
      }), " functions loaded with closures, and regex patterns that parse HTML."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You write a 15-line procedural script using just one hyper-dense, unreadable line of code. You feel like an absolute genius."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "However, a Senior Architect looks at that one line of code, deletes it, and replaces it with 15 lines of incredibly boring, verbose code. Why?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-future-developer-penalty",
      children: "🕒 The Future Developer Penalty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code is read 10 to 20 times more often than it is written."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you write a hyper-clever line of code, you are doing your ego a favor today, but you are inflicting a massive \"Cognitive Tax\" on the Future Developer (which is usually just you, 6 months later, at 11:00 PM on a Friday trying to fix a production bug)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If it takes 45 seconds for someone to parse what your code does, it is bad code.\nIf someone has to stop and perform mental acrobatics to track the state of a nested ternary operator, it is bad code."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-pro-principle-explicit--implicit",
      children: "The Pro Principle: Explicit > Implicit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The Bad Code (Implicit & Clever):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-php",
            children: "return $users->filter(fn($u) => $u->o->c > 5 ? $u->t = true : $u->t = false)->pluck('e');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The Pro Code (Explicit & Boring):"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-php",
            children: "$highlyActiveUsers = $users->filter(function ($user) {\n    return $user->orders->count() > 5;\n});\n\nforeach ($highlyActiveUsers as $user) {\n    $user->is_top_tier = true;\n}\n\nreturn $highlyActiveUsers->pluck('email');\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It takes the Pro Code 8 lines instead of 1. It is technically more verbose. But any developer, regardless of their skill level, can read it in 2 seconds and know exactly what business logic is executing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-variable-naming-conventions",
      children: "🏷️ Variable Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hardest problem in computer science is not cache invalidation; it is naming things."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pro Developers name their variables explicitly. They never use single-letter variables (unless it's a simple index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$i"
      }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$data"
        }), " $\\rightarrow$ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Bad."
        }), " What is the data? This gives zero context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$payload"
        }), " $\\rightarrow$ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Better."
        }), " Implies it came from a request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "$validatedLeadSubmission"
        }), " $\\rightarrow$ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Pro."
        }), " You know exactly what state the data is in, and what entity it belongs to."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Write code for humans, not for the compiler. The compiler will optimize it into bytecode anyway. Your job is to make sure your team can maintain the codebase without suffering severe cognitive fatigue."]
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