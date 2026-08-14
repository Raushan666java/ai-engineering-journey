"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30022],{

/***/ 36638
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_05_fastapi_backend_visual_notes_md_04e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-05-fastapi-backend-visual-notes-md-04e.json
const site_docs_courses_ai_engineering_placement_05_fastapi_backend_visual_notes_md_04e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/fastapi-backend/visual-notes","title":"Visual Notes — FastAPI Backend","description":"One diagram, the full picture. Glance at this before reading the chapters and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/05-fastapi-backend/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/05-fastapi-backend","slug":"/ai-engineering-placement/05-fastapi-backend/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":80,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/05-fastapi-backend/visual-notes","title":"Visual Notes — FastAPI Backend","sidebar_label":"Visual Notes","sidebar_position":80},"sidebar":"placementSidebar","previous":{"title":"API Deployment — Docker, CI/CD, and Production Readiness","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/10-api-deployment"},"next":{"title":"06 — Docker, Kubernetes & Cloud","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/05-fastapi-backend/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/05-fastapi-backend/visual-notes',
	title: 'Visual Notes — FastAPI Backend',
	sidebar_label: 'Visual Notes',
	sidebar_position: 80
};
const contentTitle = 'Visual Notes — FastAPI Backend';

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
    code: "code",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "visual-notes--fastapi-backend",
        children: "Visual Notes — FastAPI Backend"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. Glance at this before reading the chapters and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "FastAPI architecture diagram",
        src: (__webpack_require__(69027)/* ["default"] */ .A) + "",
        width: "1000",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One request, end to end, through three zones:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLIENT"
        }), " — a browser or API caller sends an HTTP request (JSON)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FastAPI"
        }), " receives it. It validates the payload with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pydantic schemas"
        }), ", runs logic, and builds the response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DATA"
        }), " — talking to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SQLAlchemy (ORM)"
        }), " which turns Python calls into SQL for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The response — serialized JSON — is returned to the client."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The accent flow (client → FastAPI → Pydantic → SQLAlchemy → PostgreSQL) is the happy path every request takes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Describe the architecture of an API you built\" is a near-certain system-design question."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FastAPI specifically is asked about because it's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "async-first and typed"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async def"
        }), " endpoints and Pydantic validation are the two features candidates must explain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FastAPI basics"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@app.get(\"/items\")"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async def"
        }), ", path parameters, query parameters, request bodies via Pydantic models."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pydantic"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BaseModel"
        }), " subclasses define the schema; FastAPI validates the incoming JSON against it and gives you typed objects (and 422 errors on mismatch)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency injection"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Depends()"
        }), " for reusable logic (auth, DB session, config); the framework resolves it per-request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQLAlchemy"
        }), " — models map Python classes to tables; a session wraps a unit of work; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "async_session"
        }), " for async apps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auth"
        }), " — JWT tokens and OAuth2; protect routes with a dependency that decodes the token."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment"
        }), " — run with a production server (Uvicorn), behind a reverse proxy (Nginx), with environment variables for secrets."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/02-fastapi-basics",
          children: "02 — FastAPI Basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/03-pydantic-and-validation",
          children: "03 — Pydantic & Validation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/04-dependency-injection",
          children: "04 — Dependency Injection"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/06-database-with-sqlalchemy",
          children: "06 — Database with SQLAlchemy"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/10-api-deployment",
          children: "10 — API Deployment"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"FastAPI validates every request with Pydantic, runs route logic through dependency injection, and reads/writes via SQLAlchemy — all async and typed.\""
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

/***/ 69027
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9Im0wNS1hcmNoLXRpdGxlIG0wNS1hcmNoLWRlc2MiPg0KICAgICAgPHRpdGxlIGlkPSJtMDUtYXJjaC10aXRsZSI+RmFzdEFQSSBiYWNrZW5kIHJlcXVlc3QgYXJjaGl0ZWN0dXJlPC90aXRsZT4NCiAgICAgIDxkZXNjIGlkPSJtMDUtYXJjaC1kZXNjIj5BcmNoaXRlY3R1cmUgc2hvd2luZyBhIGNsaWVudCBzZW5kaW5nIGFuIEhUVFAgcmVxdWVzdCB0byBGYXN0QVBJLCB3aGljaCB2YWxpZGF0ZXMgd2l0aCBQeWRhbnRpYywgYXBwbGllcyBkZXBlbmRlbmN5IGluamVjdGlvbiwgcmVhZHMgYW5kIHdyaXRlcyB0aHJvdWdoIFNRTEFsY2hlbXkgdG8gUG9zdGdyZVNRTCwgYW5kIHJldHVybnMgYSBKU09OIHJlc3BvbnNlLjwvZGVzYz4NCg0KICAgICAgPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjIwIiBmaWxsPSIjZmZmZmZmIi8+DQoNCiAgICAgIDwhLS0gQXJyb3dzIGJlZm9yZSBib3hlcyAtLT4NCiAgICAgIDwhLS0gQ2xpZW50IC0+IEZhc3RBUEkgKG1haW4gZmxvdywgYWNjZW50KSAtLT4NCiAgICAgIDxwYXRoIGQ9Ik0gMjYwIDIyMCBIIDM4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3ctYWNjZW50KSIvPg0KICAgICAgPCEtLSBGYXN0QVBJIC0+IFB5ZGFudGljIC0tPg0KICAgICAgPHBhdGggZD0iTSA0NjAgMTQ4IFYgMjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDwhLS0gRmFzdEFQSSAtPiBTUUxBbGNoZW15IC0tPg0KICAgICAgPHBhdGggZD0iTSA2ODAgMTc2IEggNzYwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDwhLS0gU1FMQWxjaGVteSAtPiBQb3N0Z3JlU1FMIC0tPg0KICAgICAgPHBhdGggZD0iTSA4MjAgMTc2IFYgMjQ0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCg0KICAgICAgPGRlZnM+DQogICAgICAgIDxtYXJrZXIgaWQ9ImFycm93IiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiByZWZYPSI3IiByZWZZPSIzIiBvcmllbnQ9ImF1dG8iPg0KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLCA4IDMsIDAgNiIgZmlsbD0iIzRmNWQ3NSIvPg0KICAgICAgICA8L21hcmtlcj4NCiAgICAgICAgPG1hcmtlciBpZD0iYXJyb3ctYWNjZW50IiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiByZWZYPSI3IiByZWZZPSIzIiBvcmllbnQ9ImF1dG8iPg0KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLCA4IDMsIDAgNiIgZmlsbD0iIzJlODU1NSIvPg0KICAgICAgICA8L21hcmtlcj4NCiAgICAgIDwvZGVmcz4NCg0KICAgICAgPCEtLSBab25lOiBDbGllbnQgLS0+DQogICAgICA8cmVjdCB4PSI2MCIgeT0iOTYiIHdpZHRoPSIyNDAiIGhlaWdodD0iMjMyIiByeD0iOCIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjAuOCIvPg0KICAgICAgPHJlY3QgeD0iNzIiIHk9IjEwMCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIvPg0KICAgICAgPHRleHQgeD0iMTA0IiB5PSIxMDkiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC40MCkiIGZvbnQtc2l6ZT0iNyIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5DTElFTlQ8L3RleHQ+DQoNCiAgICAgIDwhLS0gQ2xpZW50IG5vZGUgLS0+DQogICAgICA8cmVjdCB4PSI4NCIgeT0iMTkyIiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0icmdiYSg3Nyw5MywxMTcsMC4xMCkiIHN0cm9rZT0iIzdhODM5OSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSIxODAiIHk9IjIxOCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QnJvd3NlciAvIGNsaWVudDwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iMjM2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmV0Y2ggwrcgYXhpb3MgwrcgY3VybDwvdGV4dD4NCg0KICAgICAgPCEtLSBab25lOiBBUEkgLS0+DQogICAgICA8cmVjdCB4PSIzNjAiIHk9Ijk2IiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjIzMiIgcng9IjgiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wMikiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4NCiAgICAgIDxyZWN0IHg9IjM3MiIgeT0iMTAwIiB3aWR0aD0iNDgiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIi8+DQogICAgICA8dGV4dCB4PSIzOTYiIHk9IjEwOSIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjQwKSIgZm9udC1zaXplPSI3IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkFQSTwvdGV4dD4NCg0KICAgICAgPCEtLSBGYXN0QVBJIChGT0NBTCkgLS0+DQogICAgICA8cmVjdCB4PSIzODQiIHk9IjEyOCIgd2lkdGg9IjI5NiIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iNTMyIiB5PSIxNTQiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZhc3RBUEkgYXBwPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iNTMyIiB5PSIxNzIiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yb3V0ZXMgwrcgbWlkZGxld2FyZSDCtyBESTwvdGV4dD4NCg0KICAgICAgPCEtLSBQeWRhbnRpYyB2YWxpZGF0aW9uIC0tPg0KICAgICAgPHJlY3QgeD0iMzg0IiB5PSIyMTYiIHdpZHRoPSIyOTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iNTMyIiB5PSIyNDIiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlB5ZGFudGljIHNjaGVtYXM8L3RleHQ+DQogICAgICA8dGV4dCB4PSI1MzIiIHk9IjI2MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnZhbGlkYXRlIMK3IHNlcmlhbGl6ZTwvdGV4dD4NCg0KICAgICAgPCEtLSBab25lOiBEYXRhIC0tPg0KICAgICAgPHJlY3QgeD0iNzQwIiB5PSI5NiIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIyMzIiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuMDIpIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMC44Ii8+DQogICAgICA8cmVjdCB4PSI3NTIiIHk9IjEwMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIvPg0KICAgICAgPHRleHQgeD0iNzgwIiB5PSIxMDkiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC40MCkiIGZvbnQtc2l6ZT0iNyIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5EQVRBPC90ZXh0Pg0KDQogICAgICA8IS0tIFNRTEFsY2hlbXkgLS0+DQogICAgICA8cmVjdCB4PSI3NjAiIHk9IjEyOCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI0OCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSI4NTAiIHk9IjE1MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U1FMQWxjaGVteTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9Ijg1MCIgeT0iMTY4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T1JNIMK3IHNlc3Npb25zPC90ZXh0Pg0KDQogICAgICA8IS0tIFBvc3RncmVTUUwgKHN0b3JlKSAtLT4NCiAgICAgIDxyZWN0IHg9Ijc2MCIgeT0iMjQ0IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjU2IiByeD0iNiIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjA1KSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9Ijg1MCIgeT0iMjcwIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qb3N0Z3JlU1FMPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iODUwIiB5PSIyODgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50YWJsZXMgwrcgaW5kZXhlczwvdGV4dD4NCg0KICAgICAgPCEtLSBSZXNwb25zZSBhcnJvdyAoZGFzaGVkLCBib3R0b20pIC0tPg0KICAgICAgPHBhdGggZD0iTSAxODAgMjQ4IFYgNDIwIEggNTMyIFYgMzAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KICAgICAgPHJlY3QgeD0iMzQ0IiB5PSI0MDgiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiLz4NCiAgICAgIDx0ZXh0IHg9IjM2NCIgeT0iNDE3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+SlNPTjwvdGV4dD4NCg0KICAgICAgPCEtLSBDYXB0aW9uIC0tPg0KICAgICAgPHRleHQgeD0iMTIwIiB5PSI1NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5GT0NBTCBOT0RFPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iMjEyIiB5PSI1NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5GYXN0QVBJIHN0aXRjaGVzIHZhbGlkYXRpb24sIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCBhbmQgYXN5bmMgREIgYWNjZXNzIGludG8gb25lIHJlcXVlc3QgbGlmZWN5Y2xlLjwvdGV4dD4NCg0KICAgICAgPCEtLSBMZWdlbmQgc3RyaXAgLS0+DQogICAgICA8bGluZSB4MT0iMTIwIiB5MT0iNTg4IiB4Mj0iODgwIiB5Mj0iNTg4IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iMTIwIiB5PSI1NzYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+DQogICAgICA8cmVjdCB4PSIxOTYiIHk9IjU2OCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSIyMjAiIHk9IjU3OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkFDQ0VOVCA9IE1BSU4gRkxPVzwvdGV4dD4NCiAgICAgIDxyZWN0IHg9IjM2OCIgeT0iNTY4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuMDUpIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iMzkyIiB5PSI1NzgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5TSEFERUQgPSBTVE9SRTwvdGV4dD4NCiAgICAgIDxyZWN0IHg9IjUyOCIgeT0iNTY4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iNTUyIiB5PSI1NzgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IENPTVBPTkVOVDwvdGV4dD4NCiAgICA8L3N2Zz4=");
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