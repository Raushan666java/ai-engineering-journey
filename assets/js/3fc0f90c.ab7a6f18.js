"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[32561],{

/***/ 57974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_16_capstone_project_jira_clone_03_ui_ux_and_kanban_board_design_md_3fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-16-capstone-project-jira-clone-03-ui-ux-and-kanban-board-design-md-3fc.json
const site_docs_courses_learning_course_pro_dev_book_chapter_16_capstone_project_jira_clone_03_ui_ux_and_kanban_board_design_md_3fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/UI_UX_And_Kanban_Board_Design","title":"🖱️ UI/UX & jQuery Kanban Architecture","description":"🖌️ Designing The Interface","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone","slug":"/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design","title":"🖱️ UI/UX & jQuery Kanban Architecture","sidebar_label":"🖱️ UI/UX & jQuery Kanban Architecture","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"🗄️ MySQL Database Schema Design","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/02_Database_Schema_Design"},"next":{"title":"Laravel 13 with AI & Automation → Complete University Textbook","permalink":"/ai-engineering-journey/laravel/index"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_16_Capstone_Project_Jira_Clone/03_UI_UX_And_Kanban_Board_Design',
	title: '🖱️ UI/UX & jQuery Kanban Architecture',
	sidebar_label: '🖱️ UI/UX & jQuery Kanban Architecture',
	sidebar_position: 3
};
const contentTitle = '🖱️ UI/UX & jQuery Kanban Architecture';

const assets = {

};



const toc = [{
  "value": "🖌️ Designing The Interface",
  "id": "️-designing-the-interface",
  "level": 3
}, {
  "value": "1. The HTML Structure (The Skeleton)",
  "id": "1-the-html-structure-the-skeleton",
  "level": 3
}, {
  "value": "2. The CSS Architecture (Flexbox &amp; Grid)",
  "id": "2-the-css-architecture-flexbox--grid",
  "level": 3
}, {
  "value": "3. The jQuery / AJAX Engine",
  "id": "3-the-jquery--ajax-engine",
  "level": 3
}, {
  "value": "🧠 The Pro Implementation Breakdown",
  "id": "-the-pro-implementation-breakdown",
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
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "️-uiux--jquery-kanban-architecture",
        children: "🖱️ UI/UX & jQuery Kanban Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-designing-the-interface",
      children: "🖌️ Designing The Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a project management application, the primary interaction occurs on a single interface: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Kanban Board"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Because we are building this personal tool without a heavy framework like React or Vue, we will use precise ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTML5 data attributes"
      }), ", vanilla ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSS Grid/Flexbox"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jQuery AJAX"
      }), " to create a lightning-fast, highly responsive single-page feel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-html-structure-the-skeleton",
      children: "1. The HTML Structure (The Skeleton)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We will use semantic HTML and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data-*"
      }), " attributes. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data-id"
      }), " attributes are critical; they act as the connective tissue between the frontend UI and the MySQL database IDs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- The Kanban Board Container -->\n<div class=\"kanban-board\" data-project-id=\"9\">\n\n    <!-- Column: TO DO -->\n    <div class=\"kanban-column\" data-status=\"todo\">\n        <h3 class=\"column-header\">To Do <span class=\"badge\">2</span></h3>\n        \n        <!-- The Sortable List -->\n        <ul class=\"task-list\">\n            <li class=\"task-card\" data-task-id=\"105\">\n                <span class=\"tag-bug\">Bug</span>\n                <p>Fix MySQL connection timeout</p>\n                <div class=\"card-footer\">\n                    <span class=\"priority-high\">High</span>\n                </div>\n            </li>\n            <!-- More tasks... -->\n        </ul>\n    </div>\n\n    <!-- Column: IN PROGRESS -->\n    <div class=\"kanban-column\" data-status=\"in_progress\">\n        <!-- ... -->\n    </div>\n\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-the-css-architecture-flexbox--grid",
      children: "2. The CSS Architecture (Flexbox & Grid)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do not use absolute positioning for a Kanban board. Let CSS Flexbox handle the responsive columns."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: ".kanban-board {\n    display: flex;\n    overflow-x: auto;\n    align-items: flex-start;\n    gap: 1.5rem;\n    padding: 2rem;\n}\n\n.kanban-column {\n    background-color: #f4f5f7; /* Signature light gray board color */\n    border-radius: 8px;\n    width: 320px;\n    flex-shrink: 0; /* Prevents columns from shrinking on small screens */\n    display: flex;\n    flex-direction: column;\n}\n\n.task-list {\n    min-height: 150px; /* Required so users can drag into an empty column */\n    padding: 0.5rem;\n}\n\n.task-card {\n    background-color: white;\n    border-radius: 4px;\n    padding: 1rem;\n    margin-bottom: 0.5rem;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12);\n    cursor: grab; /* Indicates dragging is possible */\n    transition: transform 0.1s ease;\n}\n\n.task-card:active {\n    cursor: grabbing;\n    transform: scale(1.05); /* Micro-interaction on pickup */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-the-jquery--ajax-engine",
      children: "3. The jQuery / AJAX Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is where the magic happens. A Junior Developer forces themselves to drag the card, click \"Save,\" and wait for the page to refresh."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Pro Developer uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jQuery UI Sortable"
      }), " to allow dragging the card, and immediately fires a silent asynchronous ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), " request to update the personal database behind the scenes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "$(function() {\n    // 1. Initialize Drag and Drop across all task lists\n    $(\".task-list\").sortable({\n        connectWith: \".task-list\",\n        placeholder: \"task-placeholder\", // Renders a ghost box where the card will land\n        \n        // 2. The Stop Event (Fires when the user drops the card)\n        update: function(event, ui) {\n            // Check if the item was moved to a new list or just reordered\n            if (this === ui.item.parent()[0]) {\n                \n                let taskId = ui.item.data('task-id');\n                let newStatus = ui.item.closest('.kanban-column').data('status');\n                \n                // Get the new index order of all cards in this column\n                let newOrderArray = $(this).sortable('toArray', {attribute: 'data-task-id'});\n\n                // 3. Fire the hidden AJAX request to the server\n                $.ajax({\n                    url: '/api/tasks/update-status',\n                    method: 'POST',\n                    data: {\n                        _token: $('meta[name=\"csrf-token\"]').attr('content'),\n                        task_id: taskId,\n                        status: newStatus,\n                        order: newOrderArray // We send the whole array to update `position` in DB\n                    },\n                    success: function(response) {\n                        // Optional: Show a subtle green toast notification \"Saved\"\n                        console.log(\"Database synced flawlessly.\");\n                    },\n                    error: function() {\n                        // Pessimistic Design: If the server crashes, reject the drop visually\n                        alert(\"Network error. Could not move task.\");\n                        $(\".task-list\").sortable(\"cancel\"); \n                    }\n                });\n            }\n        }\n    }).disableSelection();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-pro-implementation-breakdown",
      children: "🧠 The Pro Implementation Breakdown"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Why is this \"Seniors-Level\" jQuery logic?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "connectWith"
          })
        }), ": This allows cards to be passed freely between completely different ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<ul>"
        }), " lists (moving from \"To Do\" to \"In Progress\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "newOrderArray"
          })
        }), ": We don't just send the status; we send an array of ALL task IDs in that column. The PHP backend receives this and updates the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "position"
        }), " integer in the database for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "every"
        }), " card to ensure the vertical order matches perfectly on the next page refresh."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Pessimistic Reversion (", (0,jsx_runtime.jsx)(_components.code, {
            children: "sortable(\"cancel\")"
          }), ")"]
        }), ": If you drop the card in \"Done\", but the local server crashes and the AJAX request fails, the code physically snaps the card back to its original column so the UI never falls out of sync with the Database."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " You do not need a bloated React application to build a complex personal dashboard. With semantic HTML data variables, Flexbox UI design, and 30 lines of precisely written jQuery asynchronous logic, you can build a lightning-fast, highly responsive project management suite."]
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