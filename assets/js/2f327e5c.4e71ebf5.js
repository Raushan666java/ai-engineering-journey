"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[44640],{

/***/ 66005
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_06_prompt_engineering_for_learning_02_vibe_coding_with_context_md_2f3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-06-prompt-engineering-for-learning-02-vibe-coding-with-context-md-2f3.json
const site_docs_courses_learning_course_pro_dev_book_chapter_06_prompt_engineering_for_learning_02_vibe_coding_with_context_md_2f3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/Vibe_Coding_With_Context","title":"🧠 Vibe-Coding With Context","description":"🎵 What is \\"Vibe-Coding\\"?","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning","slug":"/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context","title":"🧠 Vibe-Coding With Context","sidebar_label":"🧠 Vibe-Coding With Context","sidebar_position":2},"sidebar":"course-learning-course","previous":{"title":"🗣️ The Senior Architect Prompt","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/01_The_Senior_Architect_Prompt"},"next":{"title":"❓ The Socratic Dialogue Prompting","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/03_The_Socratic_Dialogue_Prompting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_06_Prompt_Engineering_For_Learning/02_Vibe_Coding_With_Context',
	title: '🧠 Vibe-Coding With Context',
	sidebar_label: '🧠 Vibe-Coding With Context',
	sidebar_position: 2
};
const contentTitle = '🧠 Vibe-Coding With Context';

const assets = {

};



const toc = [{
  "value": "🎵 What is &quot;Vibe-Coding&quot;?",
  "id": "-what-is-vibe-coding",
  "level": 3
}, {
  "value": "🧱 The Danger of Contextless Vibes",
  "id": "-the-danger-of-contextless-vibes",
  "level": 3
}, {
  "value": "📜 The &quot;Context Block&quot; Technique",
  "id": "-the-context-block-technique",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-vibe-coding-with-context",
        children: "🧠 Vibe-Coding With Context"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-what-is-vibe-coding",
      children: "🎵 What is \"Vibe-Coding\"?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"Vibe-Coding\" is a modern paradigm enabled by tools like GitHub Copilot. It is the act of writing human-readable intent (comments) and allowing the AI to physically manifest that intent into syntax."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of writing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "public function store(Request $request) { ... }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You write the \"vibe\" or the narrative:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "// Validate the incoming lead request\n// Ensure the attached user has an active 'pro' subscription via Stripe\n// Dispatch the Lead processing job to the Redis queue\n// Return a 202 Accepted JSON response\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you hit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Enter"
      }), ", Copilot understands the entire flow and generates the corresponding PHP logic almost instantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-danger-of-contextless-vibes",
      children: "🧱 The Danger of Contextless Vibes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vibe-coding is powerful, but if you do not prime the AI with the correct architectural boundaries, it will hallucinate terribly. It will invent methods that do not exist on your Models, or use deprecated framework features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LLMs read the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "entire file"
      }), " from top to bottom before generating a suggestion. If your file is empty, the LLM is flying blind."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-context-block-technique",
      children: "📜 The \"Context Block\" Technique"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Professional developers prime their files before they ever write their first line of code. They place a massive, strictly defined Context Block at the very top of the PHP or React file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Context Block (Top of File):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-php",
        children: "<?php\n/**\n * ----------------------------------------------------\n * CONTEXT: SaaS Admin Panel - Lead Assignment\n * STACK: Laravel 10 / PHP 8.2 / MySQL 8\n * ----------------------------------------------------\n * ARCHITECTURAL CONSTRAINTS:\n * - All methods must use strict return types (e.g., : JsonResponse)\n * - Do not put business logic in the controller. Use Action classes.\n * - All database queries must inherently handle N+1 via Eager Loading.\n * - Authorization must be handled strictly via standard Laravel Policies.\n * - If an external API is called, it must be wrapped in a Try/Catch.\n * ----------------------------------------------------\n */\n\nnamespace App\\Http\\Controllers;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When Copilot begins to \"vibe-code\" the rest of your controller, it has already read those constraints. It knows ", (0,jsx_runtime.jsx)(_components.em, {
        children: "not"
      }), " to write business logic in your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "store()"
      }), " method. It knows it must type-hint ", (0,jsx_runtime.jsx)(_components.code, {
        children: ": JsonResponse"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You have effectively put guide rails on the AI, forcing it to generate Senior-level code automatically."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " AI is brilliant, but it relies on context. Do not let Copilot guess your architecture. Explicitly define your boundaries at the top of every single file, and watch the quality of the autocomplete instantly skyrocket."]
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