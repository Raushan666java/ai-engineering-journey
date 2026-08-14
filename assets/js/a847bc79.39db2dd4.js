"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[11550],{

/***/ 22234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_09_debugging_like_a_pro_02_isolate_and_reproduce_100_percent_md_a84_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-09-debugging-like-a-pro-02-isolate-and-reproduce-100-percent-md-a84.json
const site_docs_courses_learning_course_pro_dev_book_chapter_09_debugging_like_a_pro_02_isolate_and_reproduce_100_percent_md_a84_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/Isolate_And_Reproduce_100_Percent","title":"🔬 Isolate & Reproduce 100%","description":"🛑 Stop Guessing, Start Proving","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro","slug":"/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent","title":"🔬 Isolate & Reproduce 100%","sidebar_label":"🔬 Isolate & Reproduce 100%","sidebar_position":2},"sidebar":"course-learning-course","previous":{"title":"🛠️ The Pro Debugging Framework","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework"},"next":{"title":"🔪 Binary Search The System","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent',
	title: '🔬 Isolate & Reproduce 100%',
	sidebar_label: '🔬 Isolate & Reproduce 100%',
	sidebar_position: 2
};
const contentTitle = '🔬 Isolate & Reproduce 100%';

const assets = {

};



const toc = [{
  "value": "🛑 Stop Guessing, Start Proving",
  "id": "-stop-guessing-start-proving",
  "level": 3
}, {
  "value": "🔍 Achieving 100% Reproducibility",
  "id": "-achieving-100-reproducibility",
  "level": 3
}, {
  "value": "1. Gather the Variables",
  "id": "1-gather-the-variables",
  "level": 4
}, {
  "value": "2. Local Replication",
  "id": "2-local-replication",
  "level": 4
}, {
  "value": "👻 Hunting Intermittent Bugs",
  "id": "-hunting-intermittent-bugs",
  "level": 3
}, {
  "value": "1. Race Conditions",
  "id": "1-race-conditions",
  "level": 4
}, {
  "value": "2. Third-Party Delays (Timeouts)",
  "id": "2-third-party-delays-timeouts",
  "level": 4
}, {
  "value": "3. State Mutation Mutations",
  "id": "3-state-mutation-mutations",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-isolate--reproduce-100",
        children: "🔬 Isolate & Reproduce 100%"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-stop-guessing-start-proving",
      children: "🛑 Stop Guessing, Start Proving"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The single most fundamental rule of debugging is that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "you cannot fix what you cannot reliably reproduce."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a client emails you to say, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"The checkout page froze,\""
      }), " your first instinct might be to open the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CheckoutController.php"
      }), " and stare at the code, hoping a bug jumps out at you. This is a profound waste of time. You cannot debug a ghost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you touch your IDE, you must transform the vague complaint into a deterministic, reproducible series of actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-achieving-100-reproducibility",
      children: "🔍 Achieving 100% Reproducibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your goal is to find the exact, absolute minimum sequence of steps that triggers the error every single time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-gather-the-variables",
      children: "1. Gather the Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must ask the user (or check your error reporting tool like Sentry) for the exact state of the universe when the bug occurred."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What browser were they using? (Safari handles Date objects differently than Chrome)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What specific account were they logged into? (Is it a permission issue?)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What exact text did they type into the input field? (Did they copy/paste a weird invisible unicode character?)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-local-replication",
      children: "2. Local Replication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open your local development environment. Attempt to mimic the exact state of the universe."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seed the database with a user wielding the exact same roles as the affected client."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click the buttons in the exact sequence reported."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the error occurs on your local machine, you have won 90% of the battle. The fix is now trivial."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-hunting-intermittent-bugs",
      children: "👻 Hunting Intermittent Bugs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The terror of every developer is the bug that only happens \"sometimes.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a bug is intermittent, it is almost certainly one of three things:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-race-conditions",
      children: "1. Race Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If two users perform an action at the exact same millisecond, and your database logic requires checking inventory ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " assigning it, the second user might bypass the check before the first user's transaction commits."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Solution:"
        }), " Look for missing pessimistic locks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "lockForUpdate()"
        }), ") or missing database constraints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-third-party-delays-timeouts",
      children: "2. Third-Party Delays (Timeouts)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your code assumes a Stripe API call will finish in 500ms, but Stripe occasionally takes 10 seconds, your frontend might timeout or a background job might fail."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Solution:"
        }), " Implement exponential backoff, retry mechanisms on jobs, and wrap external API calls in robust ", (0,jsx_runtime.jsx)(_components.code, {
          children: "try/catch"
        }), " blocks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-state-mutation-mutations",
      children: "3. State Mutation Mutations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you have a global state object (like a massive Vuex/Zustand store or a server-side Singleton), another part of the app might be silently modifying the data array before the failing component tries to read it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Solution:"
        }), " Isolate the component. Do not mutate state directly; always return new copies of the object."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " A bug is a lock. A 100% reproducible sequence of steps is the key. Never attempt to pick a lock when you can just find the key."]
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