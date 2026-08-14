"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[7107],{

/***/ 94829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_06_prompt_engineering_for_learning_01_the_senior_architect_prompt_md_748_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-06-prompt-engineering-for-learning-01-the-senior-architect-prompt-md-748.json
const site_docs_courses_learning_course_pro_dev_book_chapter_06_prompt_engineering_for_learning_01_the_senior_architect_prompt_md_748_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/The_Senior_Architect_Prompt","title":"🗣️ The Senior Architect Prompt","description":"🎯 Precision Extraction","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning","slug":"/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt","title":"🗣️ The Senior Architect Prompt","sidebar_label":"🗣️ The Senior Architect Prompt","sidebar_position":1},"sidebar":"course-learning-course","previous":{"title":"🧑‍🏫 Treating AI As A Senior Reviewer","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_05_Proper_AI_Usage/03_Treating_AI_As_A_Senior_Reviewer"},"next":{"title":"🧠 Vibe-Coding With Context","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt',
	title: '🗣️ The Senior Architect Prompt',
	sidebar_label: '🗣️ The Senior Architect Prompt',
	sidebar_position: 1
};
const contentTitle = '🗣️ The Senior Architect Prompt';

const assets = {

};



const toc = [{
  "value": "🎯 Precision Extraction",
  "id": "-precision-extraction",
  "level": 3
}, {
  "value": "❌ The Lazy Junior Prompt",
  "id": "-the-lazy-junior-prompt",
  "level": 3
}, {
  "value": "✅ The Senior Architect Prompt",
  "id": "-the-senior-architect-prompt",
  "level": 3
}, {
  "value": "Example 1: The Database Bottleneck",
  "id": "example-1-the-database-bottleneck",
  "level": 4
}, {
  "value": "📝 The Power of Constraints",
  "id": "-the-power-of-constraints",
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
        id: "️-the-senior-architect-prompt",
        children: "🗣️ The Senior Architect Prompt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-precision-extraction",
      children: "🎯 Precision Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When developers interact with AI, their output is a direct reflection of their prompting precision. A junior developer uses AI as a code-generating vending machine. A professional developer uses AI as a highly specialized, contextual architectural consultant."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The difference lies entirely in the prompt structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-lazy-junior-prompt",
      children: "❌ The Lazy Junior Prompt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prompt:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Write a checkout controller for Laravel.\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Problem:"
        }), " This prompt provides zero context. The AI does not know if your application is a multi-tenant SaaS, a simple blog, or a high-frequency trading platform. It will generate the most generic, middle-of-the-road code possible—usually pulling from outdated StackOverflow examples. It will write logic tightly coupled to the controller, violating SOLID principles, and it won't handle edge cases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-senior-architect-prompt",
      children: "✅ The Senior Architect Prompt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A professional never asks for raw code. A professional extracts wisdom using a strict formula:\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "[ROLE] + [CONTEXT] + [CONSTRAINTS] + [LEARNING GOAL]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-1-the-database-bottleneck",
      children: "Example 1: The Database Bottleneck"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Act as a Principal Laravel Database Engineer.\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context:"
        }), " ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["\"I am building a SaaS app for Lead Distribution. Attached is my ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LeadAssignmentController"
          }), " where I loop through 5,000 leads and assign them to staff.\""]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constraints:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Database is MySQL. The system expects 50,000 requests per minute during peak hours. This must be handled asynchronously.\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Goal:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Do not rewrite my code. Point out exactly where this current logic will lock the database at scale. Explain the theory behind using Redis queues and chunking to solve this, and provide a 3-step refactoring plan.\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice the difference? The AI is forced to act as a mentor. It is blocked from generating the code (so your brain still gets to do the physical work), and it is forced to explain ", (0,jsx_runtime.jsx)(_components.em, {
        children: "why"
      }), " the architecture is flawed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-power-of-constraints",
      children: "📝 The Power of Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LLMs are \"people pleasers.\" If you do not constrain them, they will give you the easiest, most bloated answer. You must violently constrain the model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Use strictly typed return values in PHP 8.2.\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Assume the external API will fail 10% of the time, write the pessimistic fallback logic.\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Do not use any external packages; only use native Laravel Facades.\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Optimize for readability over performance.\""
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " The quality of the code you ship is inextricably linked to the quality of the constraints you set. Stop asking AI to write code. Start demanding that AI evaluate your constraints."]
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