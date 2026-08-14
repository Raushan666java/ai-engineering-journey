"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[62329],{

/***/ 99825
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_visual_notes_md_2d7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-visual-notes-md-2d7.json
const site_docs_courses_ai_engineering_placement_02_sql_and_databases_visual_notes_md_2d7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/visual-notes","title":"Visual Notes — SQL & Databases","description":"One diagram, the full picture. Glance at this before reading the chapters and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":37,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/02-sql-and-databases/visual-notes","title":"Visual Notes — SQL & Databases","sidebar_label":"Visual Notes","sidebar_position":37},"sidebar":"placementSidebar","previous":{"title":"PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced"},"next":{"title":"03 — Data Structures & Algorithms","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/02-sql-and-databases/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/02-sql-and-databases/visual-notes',
	title: 'Visual Notes — SQL & Databases',
	sidebar_label: 'Visual Notes',
	sidebar_position: 37
};
const contentTitle = 'Visual Notes — SQL & Databases';

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
        id: "visual-notes--sql--databases",
        children: "Visual Notes — SQL & Databases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. Glance at this before reading the chapters and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "SQL execution order diagram",
        src: (__webpack_require__(18701)/* ["default"] */ .A) + "",
        width: "1000",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A SELECT query does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " run in the order you write it. The engine:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FROM & JOINs"
        }), " — build the working set of rows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHERE"
        }), " — filter rows (no aggregates allowed here)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GROUP BY"
        }), " — collapse rows into groups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HAVING"
        }), " — filter the groups (aggregates are allowed here)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SELECT"
        }), " — compute the final columns and expressions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ORDER BY"
        }), " — sort the result."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LIMIT / OFFSET"
        }), " — return only the requested page."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Why is my query slow?\" is the single most-asked SQL interview question — the answer lives in this order plus indexes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Knowing that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE"
        }), " runs before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT"
        }), " explains why you cannot reference an alias in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE"
        }), " but can in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HAVING"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ORDER BY"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHERE vs HAVING"
        }), " — WHERE filters rows before grouping; HAVING filters groups after grouping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JOIN types"
        }), " — INNER (only matches), LEFT (all left rows, NULLs for missing), FULL (all rows from both), CROSS (cartesian product)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Window functions"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)"
        }), " for rankings, running totals, and \"top N per group\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Indexes"
        }), " — B-tree by default; use them for WHERE/JOIN/ORDER BY columns; avoid wrapping columns in functions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHERE YEAR(d) = 2026"
        }), " kills the index; use a range instead)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACID"
        }), " — Atomicity, Consistency, Isolation, Durability; the why behind transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Query order cheat"
        }), " — FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/01-sql-basics",
          children: "01 — SQL Basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/03-joins",
          children: "03 — Joins"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/05-window-functions",
          children: "05 — Window Functions"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/07-indexes-and-performance",
          children: "07 — Indexes & Performance"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/09-transactions-and-acid",
          children: "09 — Transactions & ACID"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"SQL reads in logical order — not written order — and every performance question starts with the execution plan.\""
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

/***/ 18701
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9Im0wMi1mbG93LXRpdGxlIG0wMi1mbG93LWRlc2MiPg0KICAgICAgPHRpdGxlIGlkPSJtMDItZmxvdy10aXRsZSI+U1FMIHF1ZXJ5IGV4ZWN1dGlvbiBvcmRlcjwvdGl0bGU+DQogICAgICA8ZGVzYyBpZD0ibTAyLWZsb3ctZGVzYyI+Rmxvd2NoYXJ0IG9mIFNRTCBsb2dpY2FsIHByb2Nlc3Npbmcgb3JkZXI6IEZST00gYW5kIEpPSU4sIFdIRVJFLCBHUk9VUCBCWSwgSEFWSU5HLCBTRUxFQ1QsIE9SREVSIEJZLCB0aGVuIExJTUlUIGFuZCBPRkZTRVQsIGVuZGluZyB3aXRoIHRoZSByZXN1bHQgc2V0LjwvZGVzYz4NCg0KICAgICAgPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjQwIiBmaWxsPSIjZmZmZmZmIi8+DQoNCiAgICAgIDwhLS0gQXJyb3dzIGZpcnN0IChiZWhpbmQgbm9kZXMpIC0tPg0KICAgICAgPCEtLSBTdGFydCAtPiBGUk9NIC0tPg0KICAgICAgPHBhdGggZD0iTSA1MjAgMTMyIFYgMTY0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDwhLS0gRlJPTSAtPiBXSEVSRSAtLT4NCiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDIwNCBWIDIzNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQogICAgICA8IS0tIFdIRVJFIC0+IEdST1VQIEJZIC0tPg0KICAgICAgPHBhdGggZD0iTSA1MjAgMjc2IFYgMzA4IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDwhLS0gR1JPVVAgQlkgLT4gSEFWSU5HIC0tPg0KICAgICAgPHBhdGggZD0iTSA1MjAgMzQ4IFYgMzgwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDwhLS0gSEFWSU5HIC0+IFNFTEVDVCAtLT4NCiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDQyMCBWIDQ1MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQogICAgICA8IS0tIFNFTEVDVCAtPiBPUkRFUiBCWSAtLT4NCiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDQ5MiBWIDUyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQogICAgICA8IS0tIE9SREVSIEJZIC0+IExJTUlUIC0tPg0KICAgICAgPHBhdGggZD0iTSA1MjAgNTY0IFYgNTk2IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCg0KICAgICAgPGRlZnM+DQogICAgICAgIDxtYXJrZXIgaWQ9ImFycm93IiBtYXJrZXJXaWR0aD0iOCIgbWFya2VySGVpZ2h0PSI2IiByZWZYPSI3IiByZWZZPSIzIiBvcmllbnQ9ImF1dG8iPg0KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLCA4IDMsIDAgNiIgZmlsbD0iIzRmNWQ3NSIvPg0KICAgICAgICA8L21hcmtlcj4NCiAgICAgIDwvZGVmcz4NCg0KICAgICAgPCEtLSBTdGFydCAob3ZhbCkgLS0+DQogICAgICA8cmVjdCB4PSI0NDAiIHk9Ijg4IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjQ0IiByeD0iMjAiIGZpbGw9IiNmNWY2ZjgiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSI1MjAiIHk9IjExNCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+V3JpdGUgcXVlcnk8L3RleHQ+DQoNCiAgICAgIDwhLS0gU3RlcDogRlJPTSAvIEpPSU4gLS0+DQogICAgICA8cmVjdCB4PSI0MDQiIHk9IjE2NCIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSI1MjAiIHk9IjE4OSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RlJPTSAvIEpPSU48L3RleHQ+DQogICAgICA8dGV4dCB4PSI4MTYiIHk9IjE4OSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEgwrcgZ2F0aGVyIHRhYmxlczwvdGV4dD4NCg0KICAgICAgPCEtLSBTdGVwOiBXSEVSRSAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iMjM2IiB3aWR0aD0iMjMyIiBoZWlnaHQ9IjQwIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iMjYxIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XSEVSRTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjgxNiIgeT0iMjYxIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MiDCtyBmaWx0ZXIgcm93czwvdGV4dD4NCg0KICAgICAgPCEtLSBTdGVwOiBHUk9VUCBCWSAoRk9DQUwpIC0tPg0KICAgICAgPHJlY3QgeD0iNDA0IiB5PSIzMDgiIHdpZHRoPSIyMzIiIGhlaWdodD0iNDAiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iMzMzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HUk9VUCBCWTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjgxNiIgeT0iMzMzIiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MyDCtyBncm91cCByb3dzPC90ZXh0Pg0KDQogICAgICA8IS0tIFN0ZXA6IEhBVklORyAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iMzgwIiB3aWR0aD0iMjMyIiBoZWlnaHQ9IjQwIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iNDA1IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IQVZJTkc8L3RleHQ+DQogICAgICA8dGV4dCB4PSI4MTYiIHk9IjQwNSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQgwrcgZmlsdGVyIGdyb3VwczwvdGV4dD4NCg0KICAgICAgPCEtLSBTdGVwOiBTRUxFQ1QgLS0+DQogICAgICA8cmVjdCB4PSI0MDQiIHk9IjQ1MiIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSI1MjAiIHk9IjQ3NyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0VMRUNUPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iODE2IiB5PSI0NzciIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41IMK3IHBpY2sgY29sdW1uczwvdGV4dD4NCg0KICAgICAgPCEtLSBTdGVwOiBPUkRFUiBCWSAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iNTI0IiB3aWR0aD0iMjMyIiBoZWlnaHQ9IjQwIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iNTQ5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PUkRFUiBCWTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjgxNiIgeT0iNTQ5IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NiDCtyBzb3J0IHJvd3M8L3RleHQ+DQoNCiAgICAgIDwhLS0gU3RlcDogTElNSVQgLyBPRkZTRVQgLS0+DQogICAgICA8cmVjdCB4PSI0MDQiIHk9IjU5NiIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSI1MjAiIHk9IjYyMSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TElNSVQgLyBPRkZTRVQ8L3RleHQ+DQogICAgICA8dGV4dCB4PSI4MTYiIHk9IjYyMSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjcgwrcgcGFnZSByb3dzPC90ZXh0Pg0KDQogICAgICA8IS0tIFdyaXR0ZW4tb3JkZXIgcmVtaW5kZXIgLS0+DQogICAgICA8dGV4dCB4PSIxNDAiIHk9IjExMiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPldSSVRURU48L3RleHQ+DQogICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMTI0IiB4Mj0iMTQwIiB5Mj0iMjM2IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4yNSkiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iMTQwIiB5PSIxNjAiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5TRUxFQ1Q8L3RleHQ+DQogICAgICA8dGV4dCB4PSIxNDAiIHk9IjE3NiIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPkZST008L3RleHQ+DQogICAgICA8dGV4dCB4PSIxNDAiIHk9IjE5MiIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPldIRVJFPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iMTQwIiB5PSIyMDgiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5HUk9VUCBCWTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMjI0IiBmaWxsPSIjN2E4Mzk5IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSI+T1JERVIgQlk8L3RleHQ+DQogICAgICA8dGV4dCB4PSIxNTYiIHk9IjI2OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkVYRUNVVEVEPC90ZXh0Pg0KICAgICAgPGxpbmUgeDE9IjE0MCIgeTE9IjI4MCIgeDI9IjE0MCIgeTI9IjYyMCIgc3Ryb2tlPSJyZ2JhKDQ2LDEzMyw4NSwwLjM1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSIxNTYiIHk9IjMzMCIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPkZST00g4oaSIEpPSU48L3RleHQ+DQogICAgICA8dGV4dCB4PSIxNTYiIHk9IjQwMiIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPldIRVJFPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iMTU2IiB5PSI0NzQiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5HUk9VUCBCWTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjE1NiIgeT0iNTQ2IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSI+SEFWSU5HPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iMTU2IiB5PSI2MTgiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5TRUxFQ1Q8L3RleHQ+DQoNCiAgICAgIDwhLS0gTGVnZW5kIHN0cmlwIC0tPg0KICAgICAgPGxpbmUgeDE9IjEyMCIgeTE9Ijc2IiB4Mj0iODgwIiB5Mj0iNzYiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSIxMjAiIHk9IjY0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+TEVHRU5EPC90ZXh0Pg0KICAgICAgPHJlY3QgeD0iMTk2IiB5PSI1NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSIyMjAiIHk9IjY2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+R1JFRU4gPSBFWEVDVVRJT04gT1JERVI8L3RleHQ+DQogICAgICA8cmVjdCB4PSI0MDAiIHk9IjU2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHJ4PSIyIiBmaWxsPSIjZjVmNmY4Ii8+DQogICAgICA8dGV4dCB4PSI0MjQiIHk9IjY2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+R1JFWSA9IFdSSVRURU4gT1JERVI8L3RleHQ+DQogICAgPC9zdmc+");
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