"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[57552],{

/***/ 43985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_visual_notes_md_2be_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-17-ai-security-guardrails-visual-notes-md-2be.json
const site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_visual_notes_md_2be_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/visual-notes","title":"Visual Notes — Defense-in-Depth for AI","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":227,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/17-ai-security-guardrails/visual-notes","title":"Visual Notes — Defense-in-Depth for AI","sidebar_label":"Visual Notes","sidebar_position":227},"sidebar":"placementSidebar","previous":{"title":"AI Alignment & Constitutional AI","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai"},"next":{"title":"18 — Multimodal AI & Voice","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/17-ai-security-guardrails/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/17-ai-security-guardrails/visual-notes',
	title: 'Visual Notes — Defense-in-Depth for AI',
	sidebar_label: 'Visual Notes',
	sidebar_position: 227
};
const contentTitle = 'Visual Notes — Defense-in-Depth for AI';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "visual-notes--defense-in-depth-for-ai",
        children: "Visual Notes — Defense-in-Depth for AI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Defense-in-Depth for AI",
        src: (__webpack_require__(8164)/* ["default"] */ .A) + "",
        width: "1000",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inbound"
        }), " — Input filtering and prompt-injection defense catch hostile prompts before the model sees them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model"
        }), " — Guardrails constrain behaviour; output validation rejects bad or unsafe generations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outbound"
        }), " — PII protection scrubs sensitive data, and audit logging records every action."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security and compliance are now first-class AI interview topics — prompt injection is the new SQL injection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Showing a layered (defense-in-depth) posture beats listing a single tool."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prompt injection ≠ SQL/command injection: it is malicious instructions inside otherwise benign input."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layered defense: input filtering, output validation, allowlists, human review."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never echo secrets into context; secrets live in a vault, injected at call time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limits and budgets contain blast radius of abuse."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get consent, document retention, minimise PII — compliance by design."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/02-prompt-injection-defense",
          children: "Prompt injection defense"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/03-content-filtering",
          children: "Content filtering"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/05-secret-and-key-management",
          children: "Secret management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/08-data-leakage-pii",
          children: "Data leakage PII"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Filter inputs → defend against injection → validate outputs → strip PII → log everything for audit.\""
      })]
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

/***/ 8164
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjE3X2FpX3Nldi10aXRsZSAxN19haV9zZXYtZGVzYyI+DQo8dGl0bGUgaWQ9IjE3X2FpX3Nldi10aXRsZSI+QUkgc2VjdXJpdHkg4oCUIGRlZmVuc2UgaW4gZGVwdGggYXJvdW5kIHRoZSBtb2RlbDwvdGl0bGU+DQo8ZGVzYyBpZD0iMTdfYWlfc2V2LWRlc2MiPklucHV0IGZpbHRlcmluZywgcHJvbXB0LWluamVjdGlvbiBkZWZlbnNlLCBvdXRwdXQgdmFsaWRhdGlvbiwgUElJIHByb3RlY3Rpb24gYW5kIGF1ZGl0IGxvZ2dpbmcuPC9kZXNjPg0KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjQwIiBmaWxsPSIjZmZmZmZmIi8+DQo8cmVjdCB4PSIxMjAiIHk9Ijg0IiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+DQo8bGluZSB4MT0iMTIwIiB5MT0iMTQ4IiB4Mj0iODgwIiB5Mj0iMTQ4IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIxMTIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MNTwvdGV4dD4NCjx0ZXh0IHg9IjI2MCIgeT0iMTE0IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5BdWRpdCAmYW1wOyBjb21wbGlhbmNlPC90ZXh0Pg0KPHRleHQgeD0iODYwIiB5PSIxMTQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0iZW5kIiBsZXR0ZXItc3BhY2luZz0iMC4wOGVtIj5sb2dzIMK3IGV2YWxzIMK3IHJldmlldzwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMTQ4IiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIvPg0KPGxpbmUgeDE9IjEyMCIgeTE9IjIxMiIgeDI9Ijg4MCIgeTI9IjIxMiIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMTc2IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSIgZm9udC13ZWlnaHQ9IjYwMCI+TDQ8L3RleHQ+DQo8dGV4dCB4PSIyNjAiIHk9IjE3OCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+T3V0cHV0IHNhZmV0eTwvdGV4dD4NCjx0ZXh0IHg9Ijg2MCIgeT0iMTc4IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+dG94aWNpdHkgwrcgcG9saWN5IGZpbHRlcjwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMjEyIiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+DQo8bGluZSB4MT0iMTIwIiB5MT0iMjc2IiB4Mj0iODgwIiB5Mj0iMjc2IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIyNDAiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MMzwvdGV4dD4NCjx0ZXh0IHg9IjI2MCIgeT0iMjQyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5Nb2RlbCBib3VuZGFyeTwvdGV4dD4NCjx0ZXh0IHg9Ijg2MCIgeT0iMjQyIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+c2FuZGJveCDCtyB0b29sIGFsbG93bGlzdDwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMjc2IiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+DQo8bGluZSB4MT0iMTIwIiB5MT0iMzQwIiB4Mj0iODgwIiB5Mj0iMzQwIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIzMDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MMjwvdGV4dD4NCjx0ZXh0IHg9IjI2MCIgeT0iMzA2IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5Qcm9tcHQgZGVmZW5zZTwvdGV4dD4NCjx0ZXh0IHg9Ijg2MCIgeT0iMzA2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+aW5qZWN0aW9uIMK3IGphaWxicmVhazwvdGV4dD4NCjxyZWN0IHg9IjEyMCIgeT0iMzQwIiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+DQo8bGluZSB4MT0iMTIwIiB5MT0iNDA0IiB4Mj0iODgwIiB5Mj0iNDA0IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KPHRleHQgeD0iMTQwIiB5PSIzNjgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MMTwvdGV4dD4NCjx0ZXh0IHg9IjI2MCIgeT0iMzcwIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5JbnB1dCBmaWx0ZXJpbmc8L3RleHQ+DQo8dGV4dCB4PSI4NjAiIHk9IjM3MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJlbmQiIGxldHRlci1zcGFjaW5nPSIwLjA4ZW0iPlBJSSDCtyBtYWx3YXJlIMK3IHNwYW08L3RleHQ+DQo8dGV4dCB4PSIxMjAiIHk9IjUyNCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE4ZW0iPklOVEVSVklFVyBBTkdMRTwvdGV4dD48dGV4dCB4PSIyMTIiIHk9IjUyNCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiPkV2ZXJ5IHByb2R1Y3Rpb24gTExNIG5lZWRzIGEgZ3VhcmRyYWlsIHN0b3J5OiB0aGlzIHN0YWNrIGlzIGl0LjwvdGV4dD4NCjxsaW5lIHgxPSIxMjAiIHkxPSI1ODAiIHgyPSI4ODAiIHkyPSI1ODAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI1OTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI1ODYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNTk2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI1ODYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI1OTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+DQo8L3N2Zz4=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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