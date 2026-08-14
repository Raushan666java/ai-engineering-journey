"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[65854],{

/***/ 55620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_10_senior_engineer_thinking_02_pessimistic_design_md_0d8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-10-senior-engineer-thinking-02-pessimistic-design-md-0d8.json
const site_docs_courses_learning_course_pro_dev_book_chapter_10_senior_engineer_thinking_02_pessimistic_design_md_0d8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/Pessimistic_Design","title":"🌧️ Pessimistic Design","description":"🛡️ Defending the Castle","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking","slug":"/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design","title":"🌧️ Pessimistic Design","sidebar_label":"🌧️ Pessimistic Design","sidebar_position":2},"sidebar":"course-learning-course","previous":{"title":"🏛️ System Design and Scaling","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling"},"next":{"title":"📖 The Readability Mandate","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/03_The_Readability_Mandate"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design',
	title: '🌧️ Pessimistic Design',
	sidebar_label: '🌧️ Pessimistic Design',
	sidebar_position: 2
};
const contentTitle = '🌧️ Pessimistic Design';

const assets = {

};



const toc = [{
  "value": "🛡️ Defending the Castle",
  "id": "️-defending-the-castle",
  "level": 3
}, {
  "value": "🛑 Predicting Catastrophe",
  "id": "-predicting-catastrophe",
  "level": 3
}, {
  "value": "1. The External API Outage",
  "id": "1-the-external-api-outage",
  "level": 4
}, {
  "value": "2. The Double-Click Disaster",
  "id": "2-the-double-click-disaster",
  "level": 4
}, {
  "value": "3. The Null Object Explosion",
  "id": "3-the-null-object-explosion",
  "level": 4
}, {
  "value": "📉 Graceful Degradation",
  "id": "-graceful-degradation",
  "level": 3
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
        id: "️-pessimistic-design",
        children: "🌧️ Pessimistic Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-defending-the-castle",
      children: "🛡️ Defending the Castle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Junior developers program for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Happy Path.\""
      }), "\nThey write logic that assumes the user behaves perfectly, the specific data requested always exists, the network never drops a packet, and the external APIs respond instantly with a 200 OK status."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Senior Engineers program for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Disaster Path.\""
      }), "\nThey practice ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pessimistic Design"
      }), ". They assume the the user is actively trying to exploit the form, the database connection is hanging by a thread, and external APIs are completely offline."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A professional system is designed not just to succeed, but to fail gracefully."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-predicting-catastrophe",
      children: "🛑 Predicting Catastrophe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Whenever you design architecture, you must constantly ask \"What If?\" questions and implement systemic safeguards."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-the-external-api-outage",
      children: "1. The External API Outage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Risk:"
        }), " Your SaaS app relies on Stripe to finalize a user's subscription upgrade. Stripe's API goes down for 45 minutes on Black Friday."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Pessimistic Design:"
        }), " Wrap the API call in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "try/catch"
        }), " block explicitly catching ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ConnectionExceptions"
        }), ". If it fails, do not show a terrifying 500 error. Catch it, log the failure to Sentry, display a friendly React Toast: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"We are experiencing payment delays. Please try again in an hour\""
        }), ", and optionally persist the pending cart state to a Redis cache so the user doesn't lose their data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-the-double-click-disaster",
      children: "2. The Double-Click Disaster"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Risk:"
        }), " A mobile user experiences lag and furiously taps the \"Submit Payment\" button four times in 500 milliseconds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Pessimistic Design:"
        }), " Implementing Idempotency. On the frontend, disable the submit button immediately upon the first click. On the backend, use pessimistic database locking (", (0,jsx_runtime.jsx)(_components.code, {
          children: "$model->lockForUpdate()"
        }), ") or generate a unique idempotent request key attached to the form submission so the server explicitly rejects duplicate payloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-the-null-object-explosion",
      children: "3. The Null Object Explosion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Risk:"
        }), " A controller retrieves an order via an ID passed in the URL. A user decides to manually alter the URL to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/orders/99999"
        }), ", which doesn't exist. The controller attempts to run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$order->user->email"
        }), ", triggering an attempt to read a property on a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " object."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Pessimistic Design:"
        }), " Use strict failure methods. In Laravel, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "findOrFail($id)"
        }), ". This will instantly throw a 404 Exception rather than continuing the execution chain and crashing the app later. Use PHP 8's Nullsafe operator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "$order?->user?->email"
        }), ") to prevent fatal object errors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-graceful-degradation",
      children: "📉 Graceful Degradation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a non-critical microservice goes offline (e.g., the recommendation engine sidebar on an e-commerce site), the core application (the checkout cart) should remain entirely unaffected."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pessimistic design means isolating dependencies. If the algorithm cannot generate recommendations within 100ms, the system should abandon the attempt, render a blank sidebar, and allow the user to continue checking out."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Your code will fail. The difference between an amateur and a professional is predicting exactly ", (0,jsx_runtime.jsx)(_components.em, {
        children: "where"
      }), " it will fail, and placing safety nets beneath those systems to ensure the failure is invisible to the user."]
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