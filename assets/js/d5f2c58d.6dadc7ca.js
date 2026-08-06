"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[802],{

/***/ 91910
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_16_capstone_project_jira_clone_02_database_schema_design_md_d5f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-16-capstone-project-jira-clone-02-database-schema-design-md-d5f.json
const site_docs_courses_learning_course_pro_dev_book_chapter_16_capstone_project_jira_clone_02_database_schema_design_md_d5f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/Database_Schema_Design","title":"🗄️ MySQL Database Schema Design","description":"🗺️ Mapping The Data Layer","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone","slug":"/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design","title":"🗄️ MySQL Database Schema Design","sidebar_label":"🗄️ MySQL Database Schema Design","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"🏗️ System Architecture & Features (Single-User Jira Clone)","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/01_System_Architecture_And_Features"},"next":{"title":"🖱️ UI/UX & jQuery Kanban Architecture","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design',
	title: '🗄️ MySQL Database Schema Design',
	sidebar_label: '🗄️ MySQL Database Schema Design',
	sidebar_position: 2
};
const contentTitle = '🗄️ MySQL Database Schema Design';

const assets = {

};



const toc = [{
  "value": "🗺️ Mapping The Data Layer",
  "id": "️-mapping-the-data-layer",
  "level": 3
}, {
  "value": "1. The Access Layer",
  "id": "1-the-access-layer",
  "level": 3
}, {
  "value": "2. The Project Planning Layer",
  "id": "2-the-project-planning-layer",
  "level": 3
}, {
  "value": "3. The Execution Engine (Tickets/Issues)",
  "id": "3-the-execution-engine-ticketsissues",
  "level": 3
}, {
  "value": "4. Tracking &amp; Logging",
  "id": "4-tracking--logging",
  "level": 3
}, {
  "value": "🛡️ Why This Single-Use Schema Is &quot;Pro&quot;",
  "id": "️-why-this-single-use-schema-is-pro",
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "️-mysql-database-schema-design",
        children: "🗄️ MySQL Database Schema Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-mapping-the-data-layer",
      children: "🗺️ Mapping The Data Layer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The database is the absolute source of truth. If the schema is designed flawlessly, the backend controllers become incredibly thin and simple. Since we are designing this strictly for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single-use"
      }), ", our database schema will be elegantly streamlined, completely avoiding the complexity of multi-tenancy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "workspaces"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "teams"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "roles"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assignee_id"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is the exact Entity-Relationship (ER) design for our Personal Project Management tool."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-access-layer",
      children: "1. The Access Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "users"
        }), " Table"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (PK)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "password_hash"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated_at"
        }), "\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Note: Even in a strictly single-user app, you must have a users table to handle secure authentication and session management.)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-the-project-planning-layer",
      children: "2. The Project Planning Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "projects"
        }), " Table"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (PK)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "user_id"
        }), " (FK -> users.id) - ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Associates the project with your account."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), " (VARCHAR) - e.g., \"SaaS Architecture Book\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), " (TEXT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated_at"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "requirements"
        }), " (Epics) Table"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (PK)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "project_id"
        }), " (FK -> projects.id)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), " (VARCHAR) - e.g., \"Chapter 16 Content\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), " (ENUM: 'draft', 'active', 'completed')"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated_at"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-the-execution-engine-ticketsissues",
      children: "3. The Execution Engine (Tickets/Issues)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the most critical table. It powers the Kanban board."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tasks"
        }), " Table (The Ticket)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (PK)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "project_id"
        }), " (FK -> projects.id)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "requirement_id"
        }), " (FK -> requirements.id) - ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Optional (Nullable) if it belongs to a larger Epic."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "type"
        }), " (ENUM: 'task', 'bug', 'story')"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "title"
        }), " (VARCHAR)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "description"
        }), " (TEXT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "status"
        }), " (ENUM: 'todo', 'in_progress', 'review', 'done') - ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Controls which Kanban column it appears in."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "priority"
        }), " (ENUM: 'low', 'medium', 'high', 'critical')"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "position"
        }), " (INT) - ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Crucial for jQuery drag-and-drop. Stores the specific vertical order of the card in the column."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated_at"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-tracking--logging",
      children: "4. Tracking & Logging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "task_notes"
        }), " Table"]
      }), " (Replaces complex multi-user comments)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " (PK)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "task_id"
        }), " (FK -> tasks.id)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "body"
        }), " (TEXT) - ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Your personal logs and debugging breadcrumbs."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "created_at"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "updated_at"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-why-this-single-use-schema-is-pro",
      children: "🛡️ Why This Single-Use Schema Is \"Pro\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminating Overhead:"
        }), " By removing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workspaces"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assignee_ids"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "roles"
        }), ", your Eloquent models and database joins are significantly faster. You are building exactly what you need for yourself (The YAGNI principle)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "position"
          }), " Column:"]
        }), " Without an integer column to track the exact index (1, 2, 3) of a task, when you refresh the page, the Kanban board would randomly scramble the order of the cards in the \"To Do\" column. This allows precise drag-and-drop memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ENUMs for Strict Validation:"
        }), " We use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ENUM"
        }), " for Status and Priority at the database level. Even if the frontend UI breaks, the database will violently reject a task status of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "super_done"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Step:"
      }), " With the data layer securely mapped mathematically, we can confidently move out of the database and design the physical User Interface that the browser will render."]
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