"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["28265"], {
43853(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_visual_notes_md_2be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-17-ai-security-guardrails-visual-notes-md-2be.json
var site_docs_courses_ai_engineering_placement_17_ai_security_guardrails_visual_notes_md_2be_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/ai-security-guardrails/visual-notes","title":"Visual Notes — Defense-in-Depth for AI","description":"One-line answer for interviews: \'Filter inputs → defend against injection → validate outputs → strip PII → log everything for audit.\'","source":"@site/docs/courses/ai-engineering-placement/17-ai-security-guardrails/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/17-ai-security-guardrails","slug":"/ai-engineering-placement/17-ai-security-guardrails/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/17-ai-security-guardrails/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":227,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/17-ai-security-guardrails/visual-notes","title":"Visual Notes — Defense-in-Depth for AI","sidebar_label":"Visual Notes","sidebar_position":227,"description":"One-line answer for interviews: \'Filter inputs → defend against injection → validate outputs → strip PII → log everything for audit.\'"},"sidebar":"placementSidebar","previous":{"title":"AI Alignment & Constitutional AI","permalink":"/ai-engineering-journey/ai-engineering-placement/17-ai-security-guardrails/10-alignment-constitutional-ai"},"next":{"title":"18 — Multimodal AI & Voice","permalink":"/ai-engineering-journey/ai-engineering-placement/18-multimodal-ai-voice"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/17-ai-security-guardrails/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/17-ai-security-guardrails/visual-notes',
	title: 'Visual Notes — Defense-in-Depth for AI',
	sidebar_label: 'Visual Notes',
	sidebar_position: 227,
	description: 'One-line answer for interviews: \'Filter inputs → defend against injection → validate outputs → strip PII → log everything for audit.\''
};
const contentTitle = 'Visual Notes — Defense-in-Depth for AI';

const assets = {

};



const toc = [{
  "value": "What the diagram shows",
  "id": "what-the-diagram-shows",
  "level": 2
}, {
  "value": "Why this matters for placement",
  "id": "why-this-matters-for-placement",
  "level": 2
}, {
  "value": "Quick revision",
  "id": "quick-revision",
  "level": 2
}, {
  "value": "Related chapters",
  "id": "related-chapters",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
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
        src: (__webpack_require__(65147)/* ["default"] */.A) + "",
        width: "1000",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security and compliance are now first-class AI interview topics — prompt injection is the new SQL injection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Showing a layered (defense-in-depth) posture beats listing a single tool."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
65147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjE3X2FpX3Nldi10aXRsZSAxN19haV9zZXYtZGVzYyI+Cjx0aXRsZSBpZD0iMTdfYWlfc2V2LXRpdGxlIj5BSSBzZWN1cml0eSDigJQgZGVmZW5zZSBpbiBkZXB0aCBhcm91bmQgdGhlIG1vZGVsPC90aXRsZT4KPGRlc2MgaWQ9IjE3X2FpX3Nldi1kZXNjIj5JbnB1dCBmaWx0ZXJpbmcsIHByb21wdC1pbmplY3Rpb24gZGVmZW5zZSwgb3V0cHV0IHZhbGlkYXRpb24sIFBJSSBwcm90ZWN0aW9uIGFuZCBhdWRpdCBsb2dnaW5nLjwvZGVzYz4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjQwIiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjEyMCIgeT0iODQiIHdpZHRoPSI3NjAiIGhlaWdodD0iNjQiIGZpbGw9IiNmNWY2ZjgiLz4KPGxpbmUgeDE9IjEyMCIgeTE9IjE0OCIgeDI9Ijg4MCIgeTI9IjE0OCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iMTQwIiB5PSIxMTIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MNTwvdGV4dD4KPHRleHQgeD0iMjYwIiB5PSIxMTQiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiPkF1ZGl0ICZhbXA7IGNvbXBsaWFuY2U8L3RleHQ+Cjx0ZXh0IHg9Ijg2MCIgeT0iMTE0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+bG9ncyDCtyBldmFscyDCtyByZXZpZXc8L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iMTQ4IiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIvPgo8bGluZSB4MT0iMTIwIiB5MT0iMjEyIiB4Mj0iODgwIiB5Mj0iMjEyIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjE3NiIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iIGZvbnQtd2VpZ2h0PSI2MDAiPkw0PC90ZXh0Pgo8dGV4dCB4PSIyNjAiIHk9IjE3OCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+T3V0cHV0IHNhZmV0eTwvdGV4dD4KPHRleHQgeD0iODYwIiB5PSIxNzgiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0iZW5kIiBsZXR0ZXItc3BhY2luZz0iMC4wOGVtIj50b3hpY2l0eSDCtyBwb2xpY3kgZmlsdGVyPC90ZXh0Pgo8cmVjdCB4PSIxMjAiIHk9IjIxMiIgd2lkdGg9Ijc2MCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2Y1ZjZmOCIvPgo8bGluZSB4MT0iMTIwIiB5MT0iMjc2IiB4Mj0iODgwIiB5Mj0iMjc2IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjI0MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iIGZvbnQtd2VpZ2h0PSI0MDAiPkwzPC90ZXh0Pgo8dGV4dCB4PSIyNjAiIHk9IjI0MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiI+TW9kZWwgYm91bmRhcnk8L3RleHQ+Cjx0ZXh0IHg9Ijg2MCIgeT0iMjQyIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+c2FuZGJveCDCtyB0b29sIGFsbG93bGlzdDwvdGV4dD4KPHJlY3QgeD0iMTIwIiB5PSIyNzYiIHdpZHRoPSI3NjAiIGhlaWdodD0iNjQiIGZpbGw9IiNmNWY2ZjgiLz4KPGxpbmUgeDE9IjEyMCIgeTE9IjM0MCIgeDI9Ijg4MCIgeTI9IjM0MCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iMTQwIiB5PSIzMDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIiBmb250LXdlaWdodD0iNDAwIj5MMjwvdGV4dD4KPHRleHQgeD0iMjYwIiB5PSIzMDYiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiPlByb21wdCBkZWZlbnNlPC90ZXh0Pgo8dGV4dCB4PSI4NjAiIHk9IjMwNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJlbmQiIGxldHRlci1zcGFjaW5nPSIwLjA4ZW0iPmluamVjdGlvbiDCtyBqYWlsYnJlYWs8L3RleHQ+CjxyZWN0IHg9IjEyMCIgeT0iMzQwIiB3aWR0aD0iNzYwIiBoZWlnaHQ9IjY0IiBmaWxsPSIjZjVmNmY4Ii8+CjxsaW5lIHgxPSIxMjAiIHkxPSI0MDQiIHgyPSI4ODAiIHkyPSI0MDQiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjE0MCIgeT0iMzY4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSIgZm9udC13ZWlnaHQ9IjQwMCI+TDE8L3RleHQ+Cjx0ZXh0IHg9IjI2MCIgeT0iMzcwIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIj5JbnB1dCBmaWx0ZXJpbmc8L3RleHQ+Cjx0ZXh0IHg9Ijg2MCIgeT0iMzcwIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9ImVuZCIgbGV0dGVyLXNwYWNpbmc9IjAuMDhlbSI+UElJIMK3IG1hbHdhcmUgwrcgc3BhbTwvdGV4dD4KPHRleHQgeD0iMTIwIiB5PSI1MjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSI1MjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5FdmVyeSBwcm9kdWN0aW9uIExMTSBuZWVkcyBhIGd1YXJkcmFpbCBzdG9yeTogdGhpcyBzdGFjayBpcyBpdC48L3RleHQ+CjxsaW5lIHgxPSIxMjAiIHkxPSI1ODAiIHgyPSI4ODAiIHkyPSI1ODAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI1OTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI1ODYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNTk2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI1ODYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI1OTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+Cjwvc3ZnPg==");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
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

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
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

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);