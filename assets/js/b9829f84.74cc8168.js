"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[98075],{

/***/ 42580
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_09_debugging_like_a_pro_01_the_pro_debugging_framework_md_b98_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-09-debugging-like-a-pro-01-the-pro-debugging-framework-md-b98.json
const site_docs_courses_learning_course_pro_dev_book_chapter_09_debugging_like_a_pro_01_the_pro_debugging_framework_md_b98_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/The_Pro_Debugging_Framework","title":"🛠️ The Pro Debugging Framework","description":"🧩 Puzzles, Not Failures","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro","slug":"/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework","title":"🛠️ The Pro Debugging Framework","sidebar_label":"🛠️ The Pro Debugging Framework","sidebar_position":1},"sidebar":"course-learning-course","previous":{"title":"🛑 The Anti-Burnout Breadcrumbs","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_08_Productivity_Without_Burnout/03_The_Anti_Burnout_Breadcrumbs"},"next":{"title":"🔬 Isolate & Reproduce 100%","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/01_The_Pro_Debugging_Framework',
	title: '🛠️ The Pro Debugging Framework',
	sidebar_label: '🛠️ The Pro Debugging Framework',
	sidebar_position: 1
};
const contentTitle = '🛠️ The Pro Debugging Framework';

const assets = {

};



const toc = [{
  "value": "🧩 Puzzles, Not Failures",
  "id": "-puzzles-not-failures",
  "level": 3
}, {
  "value": "🔬 The 4-Step Scientific Method",
  "id": "-the-4-step-scientific-method",
  "level": 3
}, {
  "value": "1. Form a Hypothesis",
  "id": "1-form-a-hypothesis",
  "level": 4
}, {
  "value": "2. Design an Experiment",
  "id": "2-design-an-experiment",
  "level": 4
}, {
  "value": "3. Run the Experiment &amp; Observe",
  "id": "3-run-the-experiment--observe",
  "level": 4
}, {
  "value": "4. Draw a Conclusion &amp; Fix the Root Cause",
  "id": "4-draw-a-conclusion--fix-the-root-cause",
  "level": 4
}, {
  "value": "🚫 The &quot;Patching the Symptom&quot; Anti-Pattern",
  "id": "-the-patching-the-symptom-anti-pattern",
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
        id: "️-the-pro-debugging-framework",
        children: "🛠️ The Pro Debugging Framework"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-puzzles-not-failures",
      children: "🧩 Puzzles, Not Failures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A junior developer sees a red \"Whoops, looks like something went wrong\" error screen in Laravel and their mind immediately goes into a state of panic or defense. They assume the universe (or the framework) is broken, or that they are an imposter."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Pro Developer sees a red error screen and smiles. They know unequivocally that computers are deterministic machines. The computer is doing ", (0,jsx_runtime.jsx)(_components.em, {
        children: "exactly"
      }), " what they instructed it to do; the only problem is that their mental model of those instructions is currently flawed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A bug is not a failure; it is simply a puzzle with missing information."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-4-step-scientific-method",
      children: "🔬 The 4-Step Scientific Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Debugging is not a chaotic process of randomly changing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if(...)"
      }), " statements to see if the error magically disappears. Professional debugging is the rigorous application of the Scientific Method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-form-a-hypothesis",
      children: "1. Form a Hypothesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Based on the error message (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Undefined offset: 1"
      }), "), you hypothesize: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"My code is trying to access the second element of an array, but the array only has one element.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-design-an-experiment",
      children: "2. Design an Experiment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You ask yourself, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"How can I prove that the array only has one element at this exact moment in the code execution?\""
      }), "\nYou design the experiment by inserting a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dd($array)"
      }), " right above the failing line."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-run-the-experiment--observe",
      children: "3. Run the Experiment & Observe"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You refresh the page. The output shows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ 0 => \"hello\" ]"
      }), ". Your hypothesis was correct. The array does not contain an index ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-draw-a-conclusion--fix-the-root-cause",
      children: "4. Draw a Conclusion & Fix the Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now you investigate ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why"
      }), " the array is smaller than expected. You trace the array back to its origin (perhaps a database query that filtered out inactive users). You fix the underlying query, not the symptom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-patching-the-symptom-anti-pattern",
      children: "🚫 The \"Patching the Symptom\" Anti-Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Junior developers are notorious for patching symptoms instead of curing the disease."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "The Symptom:"
        }), " A user object is unexpectedly ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " when trying to call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$user->name"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "The Junior Fix:"
        }), " They wrap the call in an if statement: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if ($user) { echo $user->name; }"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This clears the red error screen, but it introduces a massive logical hole in the system. ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Why"
      }), " was the user null? Did the authentication middleware fail? Was the foreign key deleted from the database?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By sweeping the error under the rug with an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if ($user)"
      }), " check, you guarantee that a far more destructive bug will surface weeks later in a completely unrelated part of the application."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Do not swat at the leaves of the debugging tree. Hack at the root. Force yourself to understand the core reason the program entered an invalid state before you ever write the patch."]
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