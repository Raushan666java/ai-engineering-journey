"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40997],{

/***/ 35025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_learning_course_pro_dev_book_chapter_13_project_management_06_designing_with_project_management_md_d3a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-learning-course-pro-dev-book-chapter-13-project-management-06-designing-with-project-management-md-d3a.json
const site_docs_courses_learning_course_learning_course_pro_dev_book_chapter_13_project_management_06_designing_with_project_management_md_d3a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/Designing_With_Project_Management","title":"🎨 Designing With Project Management","description":"🖼️ Design is NOT a Coding Task","source":"@site/docs/courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management.md","sourceDirName":"courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management","slug":"/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"slug":"/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management","title":"🎨 Designing With Project Management","sidebar_label":"🎨 Designing With Project Management","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"⏱️ Estimations & Deadlines","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/05_Estimations_And_Deadlines"},"next":{"title":"🗺️ Requirements & Architecture Tools","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/01_Requirements_And_Architecture_Tools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management.md


const frontMatter = {
	slug: '/learning-course/Learning_Course/Pro-Dev-book/Chapter_13_Project_Management/06_Designing_With_Project_Management',
	title: '🎨 Designing With Project Management',
	sidebar_label: '🎨 Designing With Project Management',
	sidebar_position: 6
};
const contentTitle = '🎨 Designing With Project Management';

const assets = {

};



const toc = [{
  "value": "🖼️ Design is NOT a Coding Task",
  "id": "️-design-is-not-a-coding-task",
  "level": 3
}, {
  "value": "🧱 The &quot;Design First, Code Second&quot; Workflow",
  "id": "-the-design-first-code-second-workflow",
  "level": 3
}, {
  "value": "1. The Wireframing Phase (Low Fidelity)",
  "id": "1-the-wireframing-phase-low-fidelity",
  "level": 4
}, {
  "value": "2. The Mockup Phase (High Fidelity)",
  "id": "2-the-mockup-phase-high-fidelity",
  "level": 4
}, {
  "value": "3. The Coding Phase (The Execution)",
  "id": "3-the-coding-phase-the-execution",
  "level": 4
}, {
  "value": "⏳ Time-Boxing the Design Phase",
  "id": "-time-boxing-the-design-phase",
  "level": 3
}, {
  "value": "🧩 Using Component Libraries to Cheat",
  "id": "-using-component-libraries-to-cheat",
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
        id: "-designing-with-project-management",
        children: "🎨 Designing With Project Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-design-is-not-a-coding-task",
      children: "🖼️ Design is NOT a Coding Task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the most destructive habits of a solo developer or small team is treating \"Design\" as something you do ", (0,jsx_runtime.jsx)(_components.em, {
        children: "while"
      }), " you are writing the code."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you open your IDE, create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Dashboard.jsx"
      }), " file, and start randomly typing Tailwind classes to figure out what the dashboard should look like, you have abandoned project management. You are combining two incredibly high-cognitive-load tasks—Architectural Logic and Visual Aesthetics—into a single blurry mess."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design must be treated as a distinct, managed phase of the project that occurs ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " a single line of frontend code is written."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-design-first-code-second-workflow",
      children: "🧱 The \"Design First, Code Second\" Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To manage a project efficiently, you must separate the UI/UX design from the engineering."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-the-wireframing-phase-low-fidelity",
      children: "1. The Wireframing Phase (Low Fidelity)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before creating a beautiful, colorful UI, you must figure out the structural layout of the application."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Tool:"
        }), " Excalidraw, Balsamiq, or a physical piece of paper."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Goal:"
        }), " Draw boxes. Where does the sidebar go? Where is the \"Submit\" button? What 3 columns of data surround the user?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Status:"
        }), " Create a distinct ticket on your board: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Wireframe User Dashboard Layout\""
        }), ". Move it to Done before touching anything else."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-the-mockup-phase-high-fidelity",
      children: "2. The Mockup Phase (High Fidelity)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the functional structure is approved, you build the actual aesthetic look of the page."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Tool:"
        }), " Figma or Penpot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Goal:"
        }), " Choose your exact font (e.g., Inter), exact colors (e.g., Tailwind Slate-900), and button roundedness. Build the exact screen the user will see."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Status:"
        }), " Create a ticket: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Design High-Fidelity Dashboard in Figma\""
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-the-coding-phase-the-execution",
      children: "3. The Coding Phase (The Execution)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only when the Figma design is 100% frozen do you open your IDE."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Goal:"
        }), " You are no longer \"designing.\" You are simply a bricklayer, translating the exact pixels from Figma into Tailwind/CSS code. You don't have to think about \"Does this blue look good?\" because that decision was already made in the Design Phase."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-time-boxing-the-design-phase",
      children: "⏳ Time-Boxing the Design Phase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Developers who have an eye for design often fall into the trap of \"Pixel Pushing\"—spending 6 hours tweaking the drop-shadow on a modal window while the backend authentication system remains fundamentally broken."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Design is an infinite process; it is never truly \"finished.\" Therefore, you must aggressively manage the design phase using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Time-Boxing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Rule:"
        }), " Allocate a strict time limit for the MVP design (e.g., ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"I have 4 hours to design the Core Application structure in Figma\""
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When the 4-hour alarm rings, you must stop designing. The design is now frozen. You build whatever is on the canvas. You can add a new ticket to the backlog for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Polish UI Shadows in Phase 2\""
        }), ", but the current design phase is over."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-using-component-libraries-to-cheat",
      children: "🧩 Using Component Libraries to Cheat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are acting as a solo developer and lack deep UI/UX skills, do not waste 3 weeks trying to invent a new design system from scratch."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Project Management is about resource allocation. Use your resources efficiently."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adopt an existing system:"
        }), " Use robust UI kits like ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tailwind UI"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "shadcn/ui"
        }), " (for React), or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Flowbite"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "These libraries have already made the thousands of micro-decisions regarding padding, font-weight, and color harmony."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "By adopting a UI kit, you effectively bypass the High-Fidelity Design phase and jump straight into assembling the logic, saving you hundreds of hours."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Never design in the browser while writing logic. Separate the tasks on your Kanban board. Sketch the layout first, design the aesthetic in Figma second, and strictly translate it into code last. If you are strapped for time, adopt a premade UI library and focus heavily on the backend architecture."]
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