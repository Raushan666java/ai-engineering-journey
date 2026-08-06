"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[76591],{

/***/ 64334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_13_project_management_04_project_planning_pitfalls_md_8b1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-13-project-management-04-project-planning-pitfalls-md-8b1.json
const site_docs_courses_learning_course_pro_dev_book_chapter_13_project_management_04_project_planning_pitfalls_md_8b1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management/Project_Planning_Pitfalls","title":"📉 Project Planning Pitfalls","description":"⚠️ The Architecture of Failure","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management","slug":"/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls","title":"📉 Project Planning Pitfalls","sidebar_label":"📉 Project Planning Pitfalls","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"🪓 Breaking Down The Monolith","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith"},"next":{"title":"⏱️ Estimations & Deadlines","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/05_Estimations_And_Deadlines"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls',
	title: '📉 Project Planning Pitfalls',
	sidebar_label: '📉 Project Planning Pitfalls',
	sidebar_position: 4
};
const contentTitle = '📉 Project Planning Pitfalls';

const assets = {

};



const toc = [{
  "value": "⚠️ The Architecture of Failure",
  "id": "️-the-architecture-of-failure",
  "level": 3
}, {
  "value": "🚧 Pitfall 1: The &quot;Happy Path&quot; Estimation",
  "id": "-pitfall-1-the-happy-path-estimation",
  "level": 3
}, {
  "value": "🕳️ Pitfall 2: Technical Debt as an Afterthought",
  "id": "️-pitfall-2-technical-debt-as-an-afterthought",
  "level": 3
}, {
  "value": "🔀 Pitfall 3: The &quot;Pivot&quot; Paralysis",
  "id": "-pitfall-3-the-pivot-paralysis",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
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
        id: "-project-planning-pitfalls",
        children: "📉 Project Planning Pitfalls"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-the-architecture-of-failure",
      children: "⚠️ The Architecture of Failure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most software projects do not fail because the developers forgot how to write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop, or because the framework had a bug in it. Projects fail before a single line of code is ever committed to the repository. They fail during the planning phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Junior Developer jumps straight into the IDE because they are anxious to start coding. A Pro Developer understands that an hour spent in rigorous planning saves three weeks of frantic, high-stress rewriting."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must become aware of the most common project planning pitfalls and actively build systems to avoid them."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-pitfall-1-the-happy-path-estimation",
      children: "🚧 Pitfall 1: The \"Happy Path\" Estimation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most common planning mistake is estimating a feature based exclusively on the \"Happy Path\"—the scenario where the user clicks the right buttons, the database connects instantly, and the third-party API is lightning fast."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "The Illusion:"
        }), " \"Building the Stripe checkout will take 4 hours. It's just a simple API call.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "The Reality:"
        }), " You spend 4 hours building the initial API call. Then you spend 6 hours handling the Webhook for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payment_failed"
        }), ". Then 4 hours managing the edge case where a user closes the browser window while the payment is processing. The 4-hour task actually took 14 hours."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Fix:"
      }), " When planning a feature, mandate that 50% of the allocated time is explicitly designated for Edge Cases, Error Handling, and Validation. If the Happy Path takes 4 hours, the feature officially takes 8 hours."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-pitfall-2-technical-debt-as-an-afterthought",
      children: "🕳️ Pitfall 2: Technical Debt as an Afterthought"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "During the planning phase, product managers (or the solo developer's ego) want to stack the sprint exclusively with shiny new features."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you do not plan for technical debt, technical debt will eventually plan your failure. In a Laravel app, if you ignore refactoring your fat controllers for 6 months, simply adding a new column to a database table might suddenly take 3 days of unraveling spaghetti code."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Fix:"
      }), " Adopt the \"20% Tax\" rule. Every week, regardless of how urgent the feature requests are, 20% of your development time is strictly allocated to refactoring, updating dependencies, or increasing test coverage. Do not ask permission for this tax; bake it silently into your estimations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-pitfall-3-the-pivot-paralysis",
      children: "🔀 Pitfall 3: The \"Pivot\" Paralysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Midway through a project, you discover a new technology (e.g., you are building a React SPA, but you suddenly read an article saying Next.js App Router is the future). You decide to pivot the entire architecture."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pivoting architecture mid-project is a death sentence for momentum. You will waste three weeks migrating the codebase, only to realize the new technology introduces its own set of unique bugs you don't know how to fix yet."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Fix:"
      }), " The \"Boring Technology\" Mandate. When planning a project with a deadline, you are only allowed to use technologies you have already deployed to production. If you want to learn Next.js, do it on a weekend side-project. Use the boring, stable stack you are a master of to deliver the business value on time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " The planning phase is where you identify the traps before you step in them. Assume everything will take twice as long, actively budget time for code maintenance, and ruthlessly stick to the technology you already know."]
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