"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[80727],{

/***/ 21108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_01_thinking_in_components_md_d7d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-15-the-art-of-reusable-components-01-thinking-in-components-md-d7d.json
const site_docs_courses_learning_course_pro_dev_book_chapter_15_the_art_of_reusable_components_01_thinking_in_components_md_d7d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/Thinking_In_Components","title":"🧩 Thinking In Components","description":"🏗️ The end of Copy/Paste Architecture","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components","slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components","title":"🧩 Thinking In Components","sidebar_label":"🧩 Thinking In Components","sidebar_position":1},"sidebar":"course-learning-course","previous":{"title":"🛡️ Quality Assurance & CI/CD","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD"},"next":{"title":"🔪 Laravel Blade Components","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/02_Laravel_Blade_Components"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components',
	title: '🧩 Thinking In Components',
	sidebar_label: '🧩 Thinking In Components',
	sidebar_position: 1
};
const contentTitle = '🧩 Thinking In Components';

const assets = {

};



const toc = [{
  "value": "🏗️ The end of Copy/Paste Architecture",
  "id": "️-the-end-of-copypaste-architecture",
  "level": 3
}, {
  "value": "🧠 The Component Philosophy (WHAT &amp; WHY)",
  "id": "-the-component-philosophy-what--why",
  "level": 3
}, {
  "value": "🌐 The Universal Truth Across Frameworks",
  "id": "-the-universal-truth-across-frameworks",
  "level": 3
}, {
  "value": "1. Vanilla HTML/CSS/JS (The BEM Methodology)",
  "id": "1-vanilla-htmlcssjs-the-bem-methodology",
  "level": 4
}, {
  "value": "2. Laravel (Blade Components)",
  "id": "2-laravel-blade-components",
  "level": 4
}, {
  "value": "3. React / Vue / Inertia (The JavaScript Era)",
  "id": "3-react--vue--inertia-the-javascript-era",
  "level": 4
}, {
  "value": "🛑 The Pro Engineer&#39;s Checklist",
  "id": "-the-pro-engineers-checklist",
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
        id: "-thinking-in-components",
        children: "🧩 Thinking In Components"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-the-end-of-copypaste-architecture",
      children: "🏗️ The end of Copy/Paste Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When junior developers build their first web application, they typically open a file, write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<form>"
      }), ", and manually type out every single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<label>"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<input>"
      }), ", and error message ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<div class=\"text-danger\">"
      }), " for every single field."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When they need to build an Edit page, they copy all 200 lines of that exact HTML and paste it into a new file."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Trap:"
        }), " What happens when the Product Manager decides that all input fields need rounded corners? Or every required label needs a red asterisk? The developer has to manually search and replace HTML across 45 different files. They will miss one. The UI will become inconsistent. The technical debt compounds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Pro Developer's Solution:"
        }), " They never write raw HTML elements for complex UI more than once. They build a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Component"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-component-philosophy-what--why",
      children: "🧠 The Component Philosophy (WHAT & WHY)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A reusable component is a single, centralized building block of code."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is written ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "once"
      }), ". It is used ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "everywhere"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Centralized Updates:"
        }), " If you change the padding on your Primary Button component, that padding instantly updates on the Login page, the Dashboard, and the Checkout page simultaneously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encapsulation:"
        }), " A component manages its own complexity. An ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<Input />"
        }), " component internally handles the label rendering, the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "old()"
        }), " value repopulation, and the error syntax. The developer using the component never has to think about those details."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Interface / Prop Model:"
        }), " You do not modify a component's internal code to use it differently. You pass it \"Props\" (Properties). You tell it: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Render yourself as a 'Password' type and use the label 'Confirm Password'.\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-universal-truth-across-frameworks",
      children: "🌐 The Universal Truth Across Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"Thinking in Components\" is not a Laravel feature. It is not a React feature. It is a fundamental shift in software engineering architecture that applies to every tier of the stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-vanilla-htmlcssjs-the-bem-methodology",
      children: "1. Vanilla HTML/CSS/JS (The BEM Methodology)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before frameworks existed, CSS architects used BEM (Block, Element, Modifier) to simulate components. Instead of styling an anchor tag directly, they styled ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".btn"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".btn--primary"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".btn--large"
      }), ". You applied the \"Component\" class to the raw HTML to guarantee consistency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-laravel-blade-components",
      children: "2. Laravel (Blade Components)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Laravel formalized this with Blade Components. You create a physical PHP/Blade file (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input.blade.php"
      }), "), and you summon it using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<x-form.input />"
      }), " tag. It acts conceptually identical to a front-end framework but renders entirely on the absolute security of the server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-react--vue--inertia-the-javascript-era",
      children: "3. React / Vue / Inertia (The JavaScript Era)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["React's entire existence is predicated on components. A function returns an isolated block of JSX. You summon the component using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<Input name=\"email\" />"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-pro-engineers-checklist",
      children: "🛑 The Pro Engineer's Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are a Senior or aspiring Senior developer, print this checklist and tape it to your monitor:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NO RAW INPUTS:"
        }), " Never write a raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<input>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<select>"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<textarea>"
        }), " in a parent view ever again."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NO RAW ERRORS:"
        }), " Never write repetitive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@error"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<span class=\"error\">"
        }), " tags in your forms. Error handling must be encapsulated safely ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inside"
        }), " the input component."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNIVERSAL FORMS:"
        }), " Never write a Create Form and an Edit Form separately. Build ONE dynamic form that handles both states."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Treating HTML as throwaway code is an amateur mistake. Treat your UI elements exactly like you treat your backend database Logic: Do Not Repeat Yourself (DRY). Build the lego block once, and spend the rest of your project simply snapping them together."]
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