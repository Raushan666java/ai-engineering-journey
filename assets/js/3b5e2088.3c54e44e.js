"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[97604],{

/***/ 88150
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_learning_course_pro_dev_book_chapter_09_debugging_like_a_pro_03_binary_search_the_system_md_3b5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-learning-course-pro-dev-book-chapter-09-debugging-like-a-pro-03-binary-search-the-system-md-3b5.json
const site_docs_courses_learning_course_learning_course_pro_dev_book_chapter_09_debugging_like_a_pro_03_binary_search_the_system_md_3b5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/Binary_Search_The_System","title":"🔪 Binary Search The System","description":"🔍 Locating the Needle in the Haystack","source":"@site/docs/courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System.md","sourceDirName":"courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro","slug":"/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System","title":"🔪 Binary Search The System","sidebar_label":"🔪 Binary Search The System","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"🔬 Isolate & Reproduce 100%","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/02_Isolate_And_Reproduce_100_Percent"},"next":{"title":"🏛️ System Design and Scaling","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_10_Senior_Engineer_Thinking/01_System_Design_And_Scaling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System.md


const frontMatter = {
	slug: '/learning-course/Learning_Course/Pro-Dev-book/Chapter_09_Debugging_Like_A_Pro/03_Binary_Search_The_System',
	title: '🔪 Binary Search The System',
	sidebar_label: '🔪 Binary Search The System',
	sidebar_position: 3
};
const contentTitle = '🔪 Binary Search The System';

const assets = {

};



const toc = [{
  "value": "🔍 Locating the Needle in the Haystack",
  "id": "-locating-the-needle-in-the-haystack",
  "level": 3
}, {
  "value": "🪓 Slicing the Application in Half",
  "id": "-slicing-the-application-in-half",
  "level": 3
}, {
  "value": "The Scenario: &quot;The Contact Form isn&#39;t sending emails.&quot;",
  "id": "the-scenario-the-contact-form-isnt-sending-emails",
  "level": 4
}, {
  "value": "🕵️‍♂️ Ruthlessly Verify Your Assumptions",
  "id": "️️-ruthlessly-verify-your-assumptions",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
        id: "-binary-search-the-system",
        children: "🔪 Binary Search The System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-locating-the-needle-in-the-haystack",
      children: "🔍 Locating the Needle in the Haystack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you have successfully isolated and reproduced a bug, you are staring at a massive, interconnected system consisting of a database, a backend framework, a frontend SPA, and a browser client."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "How do you find the exact line of code causing the failure?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Junior developers read the code linearly, from top to bottom, hoping to stumble upon the flaw.\nPro Developers use a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary Search Algorithm."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-slicing-the-application-in-half",
      children: "🪓 Slicing the Application in Half"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Binary Search works by constantly dividing the search area in half until the target is found. You apply this exact logic to debugging an architectural flow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "the-scenario-the-contact-form-isnt-sending-emails",
      children: "The Scenario: \"The Contact Form isn't sending emails.\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Slice the Network Boundary (Frontend vs. Backend)"
      }), "\nDo not look at the React component. Do not look at the Laravel Mailable class.\nOpen the Browser Network Tab. Fill out the contact form and hit Submit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Observation A:"
        }), " The request is never sent, or the payload is empty array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{}"
        }), ".\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Conclusion:"
            }), " The backend is innocent. The bug is entirely in your React form state mapping."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Observation B:"
        }), " The request is sent with the perfect payload (", (0,jsx_runtime.jsx)(_components.code, {
          children: "{name: 'John', email: 'john@test.com'}"
        }), "), but the server returns a 500 Error.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Conclusion:"
            }), " The frontend is completely innocent. Move to the Backend."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Slice the Application Layer (Controller vs. Service vs. DB)"
      }), "\nYou are now in Laravel. The request made it to the server. Where did it die?\nGo to the very first line of your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ContactController@store"
      }), " method. Insert a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dd($request->all());"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Observation A:"
        }), " The dump prints out.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Conclusion:"
            }), " The router and the middleware let the request through. The bug is deeper down the call stack (in the validation or the Service class)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "Observation B:"
        }), " You see a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "403 Forbidden"
        }), " Exception instead of your generic 500 error.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Conclusion:"
            }), " The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FormRequest"
            }), " authorization blocked the user before the controller method was even hit. Your ", (0,jsx_runtime.jsx)(_components.code, {
              children: "authorize()"
            }), " method is returning ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️️-ruthlessly-verify-your-assumptions",
      children: "🕵️‍♂️ Ruthlessly Verify Your Assumptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The longest debugging sessions always involve a foundational assumption that you swore was true, but wasn't."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "\"I know the User ID is 5. I checked it earlier.\""
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Never trust your memory, and never trust the state of the universe from 5 minutes ago."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you slice the system in half, verify the variables manually. Dump the variable to the screen. Log it to a file. Prove mathematically that \"User 5\" exists at the exact millisecond before the function is called. The bug loves to hide directly behind the phrase, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Oh, I already know that part works perfectly.\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " To find a bug quickly, stop guessing. Cut the application architecture in half, prove which half is guilty by verifying variables, and repeat until you are staring at the exact line of failing code."]
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