"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[42942],{

/***/ 42677
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_16_capstone_project_jira_clone_01_system_architecture_and_features_md_3fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-16-capstone-project-jira-clone-01-system-architecture-and-features-md-3fd.json
const site_docs_courses_learning_course_pro_dev_book_chapter_16_capstone_project_jira_clone_01_system_architecture_and_features_md_3fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/System_Architecture_And_Features","title":"🏗️ System Architecture & Features (Single-User Jira Clone)","description":"🎯 The Capstone Project: \\"ProManage\\"","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone","slug":"/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features","title":"🏗️ System Architecture & Features (Single-User Jira Clone)","sidebar_label":"🏗️ System Architecture & Features (Single-User Jira Clone)","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"⚛️ React & Inertia Translation","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation"},"next":{"title":"🗄️ MySQL Database Schema Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features',
	title: '🏗️ System Architecture & Features (Single-User Jira Clone)',
	sidebar_label: '🏗️ System Architecture & Features (Single-User Jira Clone)',
	sidebar_position: 1
};
const contentTitle = '🏗️ System Architecture & Features (Single-User Jira Clone)';

const assets = {

};



const toc = [{
  "value": "🎯 The Capstone Project: &quot;ProManage&quot;",
  "id": "-the-capstone-project-promanage",
  "level": 3
}, {
  "value": "🧱 The Tech Stack (The &quot;Boring&quot; Stack)",
  "id": "-the-tech-stack-the-boring-stack",
  "level": 3
}, {
  "value": "🚀 Core Features (Solo Edition)",
  "id": "-core-features-solo-edition",
  "level": 3
}, {
  "value": "1. Identity &amp; Access Management (IAM)",
  "id": "1-identity--access-management-iam",
  "level": 4
}, {
  "value": "2. Project Planning &amp; Requirements",
  "id": "2-project-planning--requirements",
  "level": 4
}, {
  "value": "3. The Execution Engine (Tasks, Bugs &amp; Issues)",
  "id": "3-the-execution-engine-tasks-bugs--issues",
  "level": 4
}, {
  "value": "4. The UI / UX Layer",
  "id": "4-the-ui--ux-layer",
  "level": 4
}, {
  "value": "🧠 The Pro Developer Approach",
  "id": "-the-pro-developer-approach",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
        id: "️-system-architecture--features-single-user-jira-clone",
        children: "🏗️ System Architecture & Features (Single-User Jira Clone)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-capstone-project-promanage",
      children: "🎯 The Capstone Project: \"ProManage\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To put all the principles of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Developer Master Guide"
      }), " into practice, we are going to design a complete, production-ready project management application from scratch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The goal is to build a Personal Project Management Tool (similar to a single-user Jira or Trello board) using a classic, robust tech stack: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTML, CSS, JavaScript (jQuery for DOM manipulation), PHP (or Laravel), and MySQL."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By designing this strictly for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single-use (one solo developer or user)"
      }), ", we eliminate the immense overhead of multi-tenancy (workspaces), complex role-based access control, and team management, allowing us to focus purely on the fast, efficient core mechanics of task execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-tech-stack-the-boring-stack",
      children: "🧱 The Tech Stack (The \"Boring\" Stack)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We are intentionally choosing stable, mature technologies. No experimental frameworks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend:"
        }), " HTML5, Vanilla CSS (or Tailwind CSS), Vanilla JS + jQuery (for drag-and-drop Kanban functionality and fast AJAX requests)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend:"
        }), " PHP (using the Laravel framework or a raw MVC architecture) to handle authentication, business logic, and database routing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database:"
        }), " MySQL (Relational database perfectly suited for highly structured project data)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-core-features-solo-edition",
      children: "🚀 Core Features (Solo Edition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To build a highly efficient personal tool, the MVP (Minimum Viable Product) must contain the following Domains:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-identity--access-management-iam",
      children: "1. Identity & Access Management (IAM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single User Authentication:"
        }), " A secure login system. Only you own and access the data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Isolation:"
        }), " Since it's single-user, we do not need complex workspace models or role checking."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-project-planning--requirements",
      children: "2. Project Planning & Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projects:"
        }), " Grouping mechanisms for tasks (e.g., \"Mobile App Rewrite\", \"Website Redesign\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements / Epics:"
        }), " Large, high-level business goals that contain multiple smaller tasks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-the-execution-engine-tasks-bugs--issues",
      children: "3. The Execution Engine (Tasks, Bugs & Issues)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Ticket:"
        }), " The core entity. A Ticket can be a \"Bug\", \"Feature\", or \"Task\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ticket Attributes:"
        }), " Priority (Low, Medium, High, Blocker), Status (To Do, In Progress, Review, Done), Estimate (Points/Hours)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notes/Log:"
        }), " A space to log personal updates or debugging traces directly on the ticket, replacing multi-user \"comments.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-the-ui--ux-layer",
      children: "4. The UI / UX Layer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Interactive Kanban Board:"
        }), " The heart of the application. Using jQuery UI's Sortable/Draggable, you click and drag a ticket from \"To Do\" to \"In Progress\". This triggers an asynchronous AJAX request to the server to instantly update your database without refreshing the page."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-pro-developer-approach",
      children: "🧠 The Pro Developer Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a Junior Developer received these requirements, they would immediately open ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.html"
      }), " and start typing out a navigation bar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As a Pro Developer, we will not touch HTML yet. We will design the Data Layer (The MySQL Schema) to prove mathematically that these features can exist and relate to one another securely."
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