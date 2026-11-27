"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["19947"], {
19656(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_05_fastapi_backend_visual_notes_md_04e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-05-fastapi-backend-visual-notes-md-04e.json
var site_docs_courses_ai_engineering_placement_05_fastapi_backend_visual_notes_md_04e_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/fastapi-backend/visual-notes","title":"Visual Notes — FastAPI Backend","description":"One-line answer for interviews: \'FastAPI validates every request with Pydantic, runs route logic through dependency injection, and reads/writes via","source":"@site/docs/courses/ai-engineering-placement/05-fastapi-backend/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/05-fastapi-backend","slug":"/ai-engineering-placement/05-fastapi-backend/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/05-fastapi-backend/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795160360000,"sidebarPosition":80,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/05-fastapi-backend/visual-notes","title":"Visual Notes — FastAPI Backend","sidebar_label":"Visual Notes","sidebar_position":80,"description":"One-line answer for interviews: \'FastAPI validates every request with Pydantic, runs route logic through dependency injection, and reads/writes via"},"sidebar":"placementSidebar","previous":{"title":"API Deployment — Docker, CI/CD, and Production Readiness","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend/10-api-deployment"},"next":{"title":"06 — Docker, Kubernetes & Cloud","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/05-fastapi-backend/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/05-fastapi-backend/visual-notes',
	title: 'Visual Notes — FastAPI Backend',
	sidebar_label: 'Visual Notes',
	sidebar_position: 80,
	description: 'One-line answer for interviews: \'FastAPI validates every request with Pydantic, runs route logic through dependency injection, and reads/writes via'
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
    ...(0,lib/* .useMDXComponents */.R)(),
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
        src: (__webpack_require__(91126)/* ["default"] */.A) + "",
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
91126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2MjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9Im0wNS1hcmNoLXRpdGxlIG0wNS1hcmNoLWRlc2MiPgogICAgICA8dGl0bGUgaWQ9Im0wNS1hcmNoLXRpdGxlIj5GYXN0QVBJIGJhY2tlbmQgcmVxdWVzdCBhcmNoaXRlY3R1cmU8L3RpdGxlPgogICAgICA8ZGVzYyBpZD0ibTA1LWFyY2gtZGVzYyI+QXJjaGl0ZWN0dXJlIHNob3dpbmcgYSBjbGllbnQgc2VuZGluZyBhbiBIVFRQIHJlcXVlc3QgdG8gRmFzdEFQSSwgd2hpY2ggdmFsaWRhdGVzIHdpdGggUHlkYW50aWMsIGFwcGxpZXMgZGVwZW5kZW5jeSBpbmplY3Rpb24sIHJlYWRzIGFuZCB3cml0ZXMgdGhyb3VnaCBTUUxBbGNoZW15IHRvIFBvc3RncmVTUUwsIGFuZCByZXR1cm5zIGEgSlNPTiByZXNwb25zZS48L2Rlc2M+CgogICAgICA8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI2MjAiIGZpbGw9IiNmZmZmZmYiLz4KCiAgICAgIDwhLS0gQXJyb3dzIGJlZm9yZSBib3hlcyAtLT4KICAgICAgPCEtLSBDbGllbnQgLT4gRmFzdEFQSSAobWFpbiBmbG93LCBhY2NlbnQpIC0tPgogICAgICA8cGF0aCBkPSJNIDI2MCAyMjAgSCAzODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93LWFjY2VudCkiLz4KICAgICAgPCEtLSBGYXN0QVBJIC0+IFB5ZGFudGljIC0tPgogICAgICA8cGF0aCBkPSJNIDQ2MCAxNDggViAyMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgogICAgICA8IS0tIEZhc3RBUEkgLT4gU1FMQWxjaGVteSAtLT4KICAgICAgPHBhdGggZD0iTSA2ODAgMTc2IEggNzYwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICAgICAgPCEtLSBTUUxBbGNoZW15IC0+IFBvc3RncmVTUUwgLS0+CiAgICAgIDxwYXRoIGQ9Ik0gODIwIDE3NiBWIDI0NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CgogICAgICA8ZGVmcz4KICAgICAgICA8bWFya2VyIGlkPSJhcnJvdyIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iNiIgcmVmWD0iNyIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj4KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLCA4IDMsIDAgNiIgZmlsbD0iIzRmNWQ3NSIvPgogICAgICAgIDwvbWFya2VyPgogICAgICAgIDxtYXJrZXIgaWQ9ImFycm93LWFjY2VudCIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iNiIgcmVmWD0iNyIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj4KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLCA4IDMsIDAgNiIgZmlsbD0iIzJlODU1NSIvPgogICAgICAgIDwvbWFya2VyPgogICAgICA8L2RlZnM+CgogICAgICA8IS0tIFpvbmU6IENsaWVudCAtLT4KICAgICAgPHJlY3QgeD0iNjAiIHk9Ijk2IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjIzMiIgcng9IjgiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wMikiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KICAgICAgPHJlY3QgeD0iNzIiIHk9IjEwMCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIvPgogICAgICA8dGV4dCB4PSIxMDQiIHk9IjEwOSIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjQwKSIgZm9udC1zaXplPSI3IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkNMSUVOVDwvdGV4dD4KCiAgICAgIDwhLS0gQ2xpZW50IG5vZGUgLS0+CiAgICAgIDxyZWN0IHg9Ijg0IiB5PSIxOTIiIHdpZHRoPSIxOTIiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDc3LDkzLDExNywwLjEwKSIgc3Ryb2tlPSIjN2E4Mzk5IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMTgwIiB5PSIyMTgiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJyb3dzZXIgLyBjbGllbnQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iMjM2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmV0Y2ggwrcgYXhpb3MgwrcgY3VybDwvdGV4dD4KCiAgICAgIDwhLS0gWm9uZTogQVBJIC0tPgogICAgICA8cmVjdCB4PSIzNjAiIHk9Ijk2IiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjIzMiIgcng9IjgiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wMikiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KICAgICAgPHJlY3QgeD0iMzcyIiB5PSIxMDAiIHdpZHRoPSI0OCIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiLz4KICAgICAgPHRleHQgeD0iMzk2IiB5PSIxMDkiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC40MCkiIGZvbnQtc2l6ZT0iNyIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5BUEk8L3RleHQ+CgogICAgICA8IS0tIEZhc3RBUEkgKEZPQ0FMKSAtLT4KICAgICAgPHJlY3QgeD0iMzg0IiB5PSIxMjgiIHdpZHRoPSIyOTYiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iNTMyIiB5PSIxNTQiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZhc3RBUEkgYXBwPC90ZXh0PgogICAgICA8dGV4dCB4PSI1MzIiIHk9IjE3MiIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnJvdXRlcyDCtyBtaWRkbGV3YXJlIMK3IERJPC90ZXh0PgoKICAgICAgPCEtLSBQeWRhbnRpYyB2YWxpZGF0aW9uIC0tPgogICAgICA8cmVjdCB4PSIzODQiIHk9IjIxNiIgd2lkdGg9IjI5NiIgaGVpZ2h0PSI1NiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjUzMiIgeT0iMjQyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QeWRhbnRpYyBzY2hlbWFzPC90ZXh0PgogICAgICA8dGV4dCB4PSI1MzIiIHk9IjI2MCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnZhbGlkYXRlIMK3IHNlcmlhbGl6ZTwvdGV4dD4KCiAgICAgIDwhLS0gWm9uZTogRGF0YSAtLT4KICAgICAgPHJlY3QgeD0iNzQwIiB5PSI5NiIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIyMzIiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuMDIpIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMC44Ii8+CiAgICAgIDxyZWN0IHg9Ijc1MiIgeT0iMTAwIiB3aWR0aD0iNTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIi8+CiAgICAgIDx0ZXh0IHg9Ijc4MCIgeT0iMTA5IiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuNDApIiBmb250LXNpemU9IjciIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+REFUQTwvdGV4dD4KCiAgICAgIDwhLS0gU1FMQWxjaGVteSAtLT4KICAgICAgPHJlY3QgeD0iNzYwIiB5PSIxMjgiIHdpZHRoPSIxODAiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI4NTAiIHk9IjE1MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U1FMQWxjaGVteTwvdGV4dD4KICAgICAgPHRleHQgeD0iODUwIiB5PSIxNjgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PUk0gwrcgc2Vzc2lvbnM8L3RleHQ+CgogICAgICA8IS0tIFBvc3RncmVTUUwgKHN0b3JlKSAtLT4KICAgICAgPHJlY3QgeD0iNzYwIiB5PSIyNDQiIHdpZHRoPSIxODAiIGhlaWdodD0iNTYiIHJ4PSI2IiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuMDUpIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI4NTAiIHk9IjI3MCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UG9zdGdyZVNRTDwvdGV4dD4KICAgICAgPHRleHQgeD0iODUwIiB5PSIyODgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50YWJsZXMgwrcgaW5kZXhlczwvdGV4dD4KCiAgICAgIDwhLS0gUmVzcG9uc2UgYXJyb3cgKGRhc2hlZCwgYm90dG9tKSAtLT4KICAgICAgPHBhdGggZD0iTSAxODAgMjQ4IFYgNDIwIEggNTMyIFYgMzAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwzIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgogICAgICA8cmVjdCB4PSIzNDQiIHk9IjQwOCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIvPgogICAgICA8dGV4dCB4PSIzNjQiIHk9IjQxNyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkpTT048L3RleHQ+CgogICAgICA8IS0tIENhcHRpb24gLS0+CiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iNTQ0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+Rk9DQUwgTk9ERTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjEyIiB5PSI1NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5GYXN0QVBJIHN0aXRjaGVzIHZhbGlkYXRpb24sIGRlcGVuZGVuY3kgaW5qZWN0aW9uLCBhbmQgYXN5bmMgREIgYWNjZXNzIGludG8gb25lIHJlcXVlc3QgbGlmZWN5Y2xlLjwvdGV4dD4KCiAgICAgIDwhLS0gTGVnZW5kIHN0cmlwIC0tPgogICAgICA8bGluZSB4MT0iMTIwIiB5MT0iNTg4IiB4Mj0iODgwIiB5Mj0iNTg4IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIxMjAiIHk9IjU3NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD4KICAgICAgPHJlY3QgeD0iMTk2IiB5PSI1NjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMjAiIHk9IjU3OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkFDQ0VOVCA9IE1BSU4gRkxPVzwvdGV4dD4KICAgICAgPHJlY3QgeD0iMzY4IiB5PSI1NjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wNSkiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjM5MiIgeT0iNTc4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+U0hBREVEID0gU1RPUkU8L3RleHQ+CiAgICAgIDxyZWN0IHg9IjUyOCIgeT0iNTY4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI1NTIiIHk9IjU3OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gQ09NUE9ORU5UPC90ZXh0PgogICAgPC9zdmc+");

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