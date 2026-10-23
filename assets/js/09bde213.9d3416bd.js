"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[4261],{

/***/ 395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_applied_ai_index_md_09b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-applied-ai-index-md-09b.json
const site_docs_courses_applied_ai_index_md_09b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/applied-ai/index","title":"Applied AI Engineering","description":"Course Overview","source":"@site/docs/courses/applied-ai/index.md","sourceDirName":"courses/applied-ai","slug":"/applied-ai","permalink":"/ai-engineering-journey/applied-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"index","slug":"/applied-ai","title":"Applied AI Engineering","sidebar_label":"Applied AI Engineering","sidebar_position":5},"sidebar":"course-applied-ai","previous":{"title":"Chapter 4: Generative AI","permalink":"/ai-engineering-journey/applied-ai/04-generative-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/applied-ai/index.md


const frontMatter = {
	id: 'index',
	slug: '/applied-ai',
	title: 'Applied AI Engineering',
	sidebar_label: 'Applied AI Engineering',
	sidebar_position: 5
};
const contentTitle = 'Applied AI Engineering';

const assets = {

};



const toc = [{
  "value": "Course Overview",
  "id": "course-overview",
  "level": 2
}, {
  "value": "Chapter List",
  "id": "chapter-list",
  "level": 2
}, {
  "value": "Version",
  "id": "version",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "applied-ai-engineering",
        children: "Applied AI Engineering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-overview",
      children: "Course Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This course bridges the gap between ML theory and production AI systems. It covers the three most in-demand applied skills: LLM orchestration with LangChain, computer vision with OpenCV, and generative AI (GANs, VAEs, diffusion models). Every chapter ships complete, runnable code."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Audience:"
      }), " ML engineers, AI application developers, data scientists moving into production."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites:"
      }), " Python, basic deep learning concepts (neural networks, loss functions, backpropagation)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-list",
      children: "Chapter List"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/applied-ai/01-introduction",
              children: "Introduction to Applied AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production AI landscape, when to use which tool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/applied-ai/02-langchain",
              children: "LangChain & LLM Orchestration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chains, agents, RAG, vector stores, OpenAI integration, streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/applied-ai/03-opencv",
              children: "OpenCV & Computer Vision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image I/O, transformations, feature detection, face detection, video"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/applied-ai/04-generative-ai",
              children: "Generative AI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GANs, VAEs, diffusion models, prompt engineering, production deployment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version",
      children: "Version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0 — June 2026"]
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