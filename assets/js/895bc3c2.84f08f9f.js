"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30522],{

/***/ 37548
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_10_senior_engineer_thinking_01_system_design_and_scaling_md_895_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-10-senior-engineer-thinking-01-system-design-and-scaling-md-895.json
const site_docs_courses_learning_course_pro_dev_book_chapter_10_senior_engineer_thinking_01_system_design_and_scaling_md_895_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/System_Design_And_Scaling","title":"🏛️ System Design and Scaling","description":"🤔 The Transition from Coder to Architect","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking","slug":"/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling","title":"🏛️ System Design and Scaling","sidebar_label":"🏛️ System Design and Scaling","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"🔪 Binary Search The System","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System"},"next":{"title":"🌧️ Pessimistic Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/02_Pessimistic_Design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling',
	title: '🏛️ System Design and Scaling',
	sidebar_label: '🏛️ System Design and Scaling',
	sidebar_position: 1
};
const contentTitle = '🏛️ System Design and Scaling';

const assets = {

};



const toc = [{
  "value": "🤔 The Transition from Coder to Architect",
  "id": "-the-transition-from-coder-to-architect",
  "level": 3
}, {
  "value": "📈 1. What Happens at 100x Scale?",
  "id": "-1-what-happens-at-100x-scale",
  "level": 3
}, {
  "value": "Example: The Notification Loop",
  "id": "example-the-notification-loop",
  "level": 4
}, {
  "value": "🔗 2. Is this Easily Deletable/Replaceable? (Coupling)",
  "id": "-2-is-this-easily-deletablereplaceable-coupling",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "️-system-design-and-scaling",
        children: "🏛️ System Design and Scaling"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-transition-from-coder-to-architect",
      children: "🤔 The Transition from Coder to Architect"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To cross the threshold into true Senior-level engineering, you must step away from syntax and begin thinking in systems. You are no longer writing scripts; you are building cities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A junior developer views an application as a collection of functions that return data. A Senior Architect views an application as a complex web of interconnected nodes (Databases, Redis Caches, SQS Queues, WebSockets, Load Balancers) that must communicate under extreme duress without failing."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Whenever you are tasked with building a feature, you must ask one critical question before writing any code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1-what-happens-at-100x-scale",
      children: "📈 1. What Happens at 100x Scale?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code that works flawlessly for 10 users on your local machine will often cause a catastrophic server crash when deployed to 1,000 users in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-the-notification-loop",
      children: "Example: The Notification Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A product manager asks you to send a \"System Maintenance\" email to all active users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The Junior (Level 4) Solution:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-php",
            children: "$users = User::where('active', true)->get();\nforeach ($users as $user) {\n    Mail::to($user)->send(new MaintenanceEmail());\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Why this fails at scale:"
            }), " If there are 100,000 active users, loading 100,000 Eloquent models into RAM will instantly trigger a PHP Fatal Memory Exhaustion error. If it somehow survives that, the script will timeout after 30 seconds, having only sent 50 emails."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Senior Architect (Level 1) Solution:"
          }), "\nThe Architect recognizes this is a Background Processing problem."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-php",
            children: "User::where('active', true)->chunkById(1000, function ($users) {\n    $users->each(function ($user) {\n        Mail::to($user)->queue(new MaintenanceEmail());\n    });\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "Why this scales:"
            }), " By using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chunkById()"
            }), ", the database only loads a tiny, memory-safe fraction of users at a time. By using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->queue()"
            }), ", the web server instantly hands the job off to an asynchronous Redis queue worker, returning a fast success response to the admin panel while the emails process heavily in the background."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2-is-this-easily-deletablereplaceable-coupling",
      children: "🔗 2. Is this Easily Deletable/Replaceable? (Coupling)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code is not permanent. Business requirements shift wildly every quarter. If the company decides to switch their primary SMS provider from Twilio to Vonage, how painful will that transition be?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tight Coupling (Bad):"
        }), " Hardcoding the Twilio API credentials and custom logic directly into the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OrderController@ship"
        }), " method. If you switch providers, you have to rewrite the entire checkout shipping logic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loose Coupling (Pro):"
        }), " Using Interfaces. You define an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SmsProviderInterface"
        }), " that mandates a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "send()"
        }), " method. You then bind ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TwilioSmsProvider"
        }), " to that interface in the Service Container. The controller simply calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(new SmsProvider())->send()"
        }), ". If you switch to Vonage, you simply write a new Vonage class and change one line in the Service Provider. The controller code never has to change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " The core job of a Senior Architect is not to build features, but to build resilient systems that gracefully handle massive volumes of data while remaining flexible enough to be rewritten without destroying the infrastructure."]
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