"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[58609],{

/***/ 6290
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_14_the_developer_toolkit_01_requirements_and_architecture_tools_md_882_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-14-the-developer-toolkit-01-requirements-and-architecture-tools-md-882.json
const site_docs_courses_learning_course_pro_dev_book_chapter_14_the_developer_toolkit_01_requirements_and_architecture_tools_md_882_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/Requirements_And_Architecture_Tools","title":"🗺️ Requirements & Architecture Tools","description":"🏗️ Getting the Ideas Out of Your Head","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit","slug":"/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools","title":"🗺️ Requirements & Architecture Tools","sidebar_label":"🗺️ Requirements & Architecture Tools","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"🎨 Designing With Project Management","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management"},"next":{"title":"⌨️ The Engineering Environment","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/02_The_Engineering_Environment"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools',
	title: '🗺️ Requirements & Architecture Tools',
	sidebar_label: '🗺️ Requirements & Architecture Tools',
	sidebar_position: 1
};
const contentTitle = '🗺️ Requirements & Architecture Tools';

const assets = {

};



const toc = [{
  "value": "🏗️ Getting the Ideas Out of Your Head",
  "id": "️-getting-the-ideas-out-of-your-head",
  "level": 3
}, {
  "value": "1. The &quot;Source of Truth&quot; (Notion / Obsidian)",
  "id": "1-the-source-of-truth-notion--obsidian",
  "level": 3
}, {
  "value": "2. The Visual Architect (Excalidraw / Whimsical)",
  "id": "2-the-visual-architect-excalidraw--whimsical",
  "level": 3
}, {
  "value": "3. The Task Engine (Trello / GitHub Projects)",
  "id": "3-the-task-engine-trello--github-projects",
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
        id: "️-requirements--architecture-tools",
        children: "🗺️ Requirements & Architecture Tools"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-getting-the-ideas-out-of-your-head",
      children: "🏗️ Getting the Ideas Out of Your Head"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The primary mission of the planning phase is to translate abstract business requirements (e.g., \"I need a booking system\") into concrete, actionable technical artifacts (e.g., \"I need a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bookings"
      }), " database table with a polymorphic relation to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "services"
      }), "\")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You cannot do this in an IDE. You need a specific stack of tools designed to capture, organize, and visualize requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-source-of-truth-notion--obsidian",
      children: "1. The \"Source of Truth\" (Notion / Obsidian)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every project must have a single \"Source of Truth\" document. If a requirement is not written in this document, it does not exist."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notion:"
        }), " The industry standard for project documentation. It is exceptional because it handles text, tables, and Kanban boards seamlessly. You can create a master \"Project Wiki\" that holds:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The MVP Feature List."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "API Credentials (Stripe keys, AWS keys)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Server IP addresses and deployment scripts."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Obsidian:"
        }), " A fantastic offline, Markdown-based alternative if you prefer your documentation to live locally and be heavily interlinked."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      }), " When a client sends an email asking for a feature, you copy that email, paste it into the Notion workspace, and tag it as \"Draft.\" Do not leave requirements stranded in email threads or Slack messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-the-visual-architect-excalidraw--whimsical",
      children: "2. The Visual Architect (Excalidraw / Whimsical)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You cannot build a complex database or a robust user flow without drawing it first. Text is too linear; architecture is multidimensional."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excalidraw:"
        }), " A free, open-source virtual whiteboard. It looks like hand-drawn sketches, which prevents you from over-focusing on perfect \"design\" and keeps your focus purely on \"logic.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Whimsical:"
        }), " A slightly more structured tool brilliant for fast flowcharts and wireframes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Database Schemas:"
        }), " Draw every table as a box. Draw arrows between the boxes to represent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasOne"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "belongsToMany"
        }), ", or polymorphic relationships. Seeing it visually instantly reveals fatal flaws (like circular dependencies)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "User Flows:"
        }), " Draw the exact journey: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Landing Page"
        }), " $\\rightarrow$ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Login Form"
        }), " $\\rightarrow$ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Redirect Context"
        }), " $\\rightarrow$ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Dashboard"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-the-task-engine-trello--github-projects",
      children: "3. The Task Engine (Trello / GitHub Projects)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the architecture is drawn and the MVP features are listed in Notion, they must be converted into physical tasks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Projects:"
        }), " If your code lives in GitHub, this is the best option. You can link a Kanban task directly to a Pull Request. When the PR merges, the task automatically moves to \"Done.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trello / Linear:"
        }), " Trello is the simplest Kanban board of all time. Linear is a beautiful, hyper-fast issue tracker favored by modern startups."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      }), " Take one feature from Notion (e.g., \"User Authentication\"). Break it into 3 micro-tasks in GitHub Projects. Place them in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Backlog"
      }), ". Move exactly ", (0,jsx_runtime.jsx)(_components.em, {
        children: "one"
      }), " task into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "In Progress"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Do not use sticky notes on your desk. Use Notion for the unchangeable rules, Excalidraw for visualizing the database, and GitHub Projects to govern the exact micro-tasks you must execute today."]
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