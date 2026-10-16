"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5331],{

/***/ 8623
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_learning_course_pro_dev_book_chapter_13_project_management_03_breaking_down_the_monolith_md_a7a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-learning-course-pro-dev-book-chapter-13-project-management-03-breaking-down-the-monolith-md-a7a.json
const site_docs_courses_learning_course_pro_dev_book_chapter_13_project_management_03_breaking_down_the_monolith_md_a7a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management/Breaking_Down_The_Monolith","title":"🪓 Breaking Down The Monolith","description":"🏔️ The Paralysis of the Blank Screen","source":"@site/docs/courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith.md","sourceDirName":"courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management","slug":"/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith","title":"🪓 Breaking Down The Monolith","sidebar_label":"🪓 Breaking Down The Monolith","sidebar_position":3},"sidebar":"course-learning-course","previous":{"title":"🗡️ The Scope Creep Killer","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/02_The_Scope_Creep_Killer"},"next":{"title":"📉 Project Planning Pitfalls","permalink":"/ai-engineering-journey/learning-course/Pro-Dev-book/Chapter_13_Project_Management/04_Project_Planning_Pitfalls"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith.md


const frontMatter = {
	slug: '/learning-course/Pro-Dev-book/Chapter_13_Project_Management/03_Breaking_Down_The_Monolith',
	title: '🪓 Breaking Down The Monolith',
	sidebar_label: '🪓 Breaking Down The Monolith',
	sidebar_position: 3
};
const contentTitle = '🪓 Breaking Down The Monolith';

const assets = {

};



const toc = [{
  "value": "🏔️ The Paralysis of the Blank Screen",
  "id": "️-the-paralysis-of-the-blank-screen",
  "level": 3
}, {
  "value": "🔬 The Micro-Tasking Framework",
  "id": "-the-micro-tasking-framework",
  "level": 3
}, {
  "value": "Example: Breaking down &quot;Build the User Dashboard.&quot;",
  "id": "example-breaking-down-build-the-user-dashboard",
  "level": 4
}, {
  "value": "🏆 The Psychology of Velocity",
  "id": "-the-psychology-of-velocity",
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
        id: "-breaking-down-the-monolith",
        children: "🪓 Breaking Down The Monolith"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-the-paralysis-of-the-blank-screen",
      children: "🏔️ The Paralysis of the Blank Screen"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One of the most intimidating experiences for a developer is looking at a massive, singular Jira ticket labeled: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Build the User Dashboard.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where do you even start? Should you write the frontend UI? Should you create the database migrations? Is there a Service class needed?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because the task is a \"Monolith\"—a massive, unbroken chunk of work—your brain cannot process the starting point. This leads directly to procrastination, or the \"Morning Blank Stare.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Professional developers never attempt to build a Monolith. They act as butchers, chopping the enormous task into tiny, digestible cuts of meat."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-micro-tasking-framework",
      children: "🔬 The Micro-Tasking Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you write a single line of code for a large feature, you must break the ticket down into tasks so small that they feel almost trivially easy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a task takes longer than 90 minutes to complete, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "it is legally too large."
      }), " It must be sliced again."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-breaking-down-build-the-user-dashboard",
      children: "Example: Breaking down \"Build the User Dashboard.\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 1: The Scaffolding (15 minutes)."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DashboardController"
            }), ", add the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Route::get('/dashboard')"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "web.php"
            }), ", and return a blank ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dashboard.blade.php"
            }), " view. Verify it simply loads without a 404 error."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Boom. Dopamine hit. Move task to Done."
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 2: The Data Layer (30 minutes)."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Write the Eloquent query in the controller to fetch the user's active subscriptions and most recent 5 invoices. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dd()"
            }), " the result to the screen to prove the data is fundamentally correct."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Boom. Dopamine hit. Move task to Done."
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 3: The UI Layout (45 minutes)."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find a Tailwind CSS grid layout. Hardcode dummy stats into the boxes. Make sure it looks responsive on mobile."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Boom. Dopamine hit. Move task to Done."
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 4: The Integration (30 minutes)."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Take the Eloquent query from Task 2, loop over it in the Blade template from Task 3, replacing the dummy data with live variables."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "The Dashboard is now built."
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-the-psychology-of-velocity",
      children: "🏆 The Psychology of Velocity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Micro-Tasking Framework leverages human psychology."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you have a massive task (\"Build Dashboard\"), your brain looks at it and thinks, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"This will take 8 hours. I don't have the energy right now.\""
      }), " You delay."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When your task is simply, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Create an empty Controller and return a view,\""
      }), " your brain thinks, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"I can do that in 5 minutes easily.\""
      }), " You start immediately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once you start, an object in motion stays in motion. Completing that tiny 5-minute task provides a microscopic hit of dopamine and a sense of accomplishment. That momentum carries you effortlessly into the next 30-minute task."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Complex software is nothing more than hundreds of extremely simple tasks stacked on top of one another. Never look at the mountain. Just look at the very next 15-minute step right in front of your feet."]
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



/***/ }

}]);