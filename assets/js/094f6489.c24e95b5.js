"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[74243],{

/***/ 64576
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_learning_course_pro_dev_book_chapter_14_the_developer_toolkit_03_quality_assurance_and_ci_cd_md_094_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-learning-course-pro-dev-book-chapter-14-the-developer-toolkit-03-quality-assurance-and-ci-cd-md-094.json
const site_docs_courses_learning_course_learning_course_pro_dev_book_chapter_14_the_developer_toolkit_03_quality_assurance_and_ci_cd_md_094_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/Quality_Assurance_And_CI_CD","title":"🛡️ Quality Assurance & CI/CD","description":"🚢 Launching Without Fear","source":"@site/docs/courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD.md","sourceDirName":"courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit","slug":"/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD","title":"🛡️ Quality Assurance & CI/CD","sidebar_label":"🛡️ Quality Assurance & CI/CD","sidebar_position":3},"sidebar":"coursesSidebar","previous":{"title":"⌨️ The Engineering Environment","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/02_The_Engineering_Environment"},"next":{"title":"🧩 Thinking In Components","permalink":"/ai-engineering-journey/learning-course/Learning_Course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/01_Thinking_In_Components"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD.md


const frontMatter = {
	slug: '/learning-course/Learning_Course/Pro-Dev-book/Chapter_14_The_Developer_Toolkit/03_Quality_Assurance_And_CI_CD',
	title: '🛡️ Quality Assurance & CI/CD',
	sidebar_label: '🛡️ Quality Assurance & CI/CD',
	sidebar_position: 3
};
const contentTitle = '🛡️ Quality Assurance & CI/CD';

const assets = {

};



const toc = [{
  "value": "🚢 Launching Without Fear",
  "id": "-launching-without-fear",
  "level": 3
}, {
  "value": "1. The Automated Testers (Pest / PHPUnit)",
  "id": "1-the-automated-testers-pest--phpunit",
  "level": 3
}, {
  "value": "2. The Enforcers (PHPStan / ESLint / Prettier)",
  "id": "2-the-enforcers-phpstan--eslint--prettier",
  "level": 3
}, {
  "value": "3. The CI/CD Pipeline (GitHub Actions)",
  "id": "3-the-cicd-pipeline-github-actions",
  "level": 3
}, {
  "value": "4. The Disaster Monitor (Sentry / Bugsnag)",
  "id": "4-the-disaster-monitor-sentry--bugsnag",
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
        id: "️-quality-assurance--cicd",
        children: "🛡️ Quality Assurance & CI/CD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-launching-without-fear",
      children: "🚢 Launching Without Fear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The defining characteristic of amateur code is fear. The developer is terrified to hit the \"Deploy\" button on a Friday because they have no idea if the new feature secretly broke the legacy billing system."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The defining characteristic of professional code is absolute confidence. This confidence is forged by a strict toolkit dedicated to Quality Assurance (QA) and Continuous Integration (CI)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-automated-testers-pest--phpunit",
      children: "1. The Automated Testers (Pest / PHPUnit)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automated testing is how you guarantee that the feature you wrote yesterday is not destroyed by the feature you wrote today."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pest PHP:"
        }), " The modern, beautifully expressive testing framework for Laravel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PHPUnit:"
        }), " The rock-solid, traditional standard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      }), " You do not need to practice \"Test-Driven Development (TDD)\" 100% of the time. But, if you are writing code that handles ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Money, Security, or Passwords"
      }), ", you must write an automated test proving it works."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you write a complex API calculation, write a Pest test that asserts: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"When User A has $5.00, and buys a $3.00 item, the balance is exactly $2.00.\""
      }), " Now, you can run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "php artisan test"
      }), " and the computer will verify your logic in 0.5 seconds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-the-enforcers-phpstan--eslint--prettier",
      children: "2. The Enforcers (PHPStan / ESLint / Prettier)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human code reviews are for discussing architecture. Robots should handle syntax arguments."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PHPStan (Static Analysis):"
        }), " This tool reads your entire Laravel codebase without running it. It will instantly flag if you passed an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "integer"
        }), " to a method expecting a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string"
        }), ", or if you called a method that doesn't exist. It acts as an automated Senior Reviewer catching fatal typos."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ESLint / Prettier:"
        }), " The standard for React/JavaScript. It forces the entire team to format their code exactly the same way, eliminating debates about spacing or brackets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to use it:"
      }), " Configure your IDE to run Prettier every time you hit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CMD+S"
      }), " (Save)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-the-cicd-pipeline-github-actions",
      children: "3. The CI/CD Pipeline (GitHub Actions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continuous Integration/Continuous Deployment (CI/CD) is the robot that stands between your code and the production server."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Actions:"
        }), " When you push your code to GitHub, Action scripts automatically boot up a temporary server, install your dependencies, run PHPStan, and run all your automated Pest tests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The Deployment:"
        }), " If (and only if) every single test passes, the GitHub Action securely connects to your live server (via Forge or Envoyer) and triggers the deployment. If a test fails, the deployment is violently aborted, saving your live application from crashing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-the-disaster-monitor-sentry--bugsnag",
      children: "4. The Disaster Monitor (Sentry / Bugsnag)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the code is live, you need a radar system to tell you the exact moment something goes wrong, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "before"
      }), " the customer complains on Twitter."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sentry:"
        }), " An error-tracking software that integrates natively with Laravel and React. If a user triggers a fatal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "500 Error"
        }), ", Sentry instantly sends you an alert in Slack containing the exact error message, the stack trace, the line of code that failed, and the browser the user was using."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Do not rely on \"Click Testing\" in the browser. Automate your confidence. Write unit tests for critical logic, employ static analysis to catch typos, use GitHub Actions to block bad deployments, and hook up Sentry so you are the very first person to know if the system bleeds."]
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