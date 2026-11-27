"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["44258"], {
84179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_02_sql_and_databases_visual_notes_md_2d7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-02-sql-and-databases-visual-notes-md-2d7.json
var site_docs_courses_ai_engineering_placement_02_sql_and_databases_visual_notes_md_2d7_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/sql-and-databases/visual-notes","title":"Visual Notes — SQL & Databases","description":"One-line answer for interviews: \'SQL reads in logical order — not written order — and every performance question starts with the execution plan.\'","source":"@site/docs/courses/ai-engineering-placement/02-sql-and-databases/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/02-sql-and-databases","slug":"/ai-engineering-placement/02-sql-and-databases/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/02-sql-and-databases/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795160360000,"sidebarPosition":37,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/02-sql-and-databases/visual-notes","title":"Visual Notes — SQL & Databases","sidebar_label":"Visual Notes","sidebar_position":37,"description":"One-line answer for interviews: \'SQL reads in logical order — not written order — and every performance question starts with the execution plan.\'"},"sidebar":"placementSidebar","previous":{"title":"PostgreSQL Advanced — JSONB, Full-Text Search, Partitioning, Extensions, PL/pgSQL","permalink":"/ai-engineering-journey/ai-engineering-placement/02-sql-and-databases/10-postgresql-advanced"},"next":{"title":"03 — Data Structures & Algorithms","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/02-sql-and-databases/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/02-sql-and-databases/visual-notes',
	title: 'Visual Notes — SQL & Databases',
	sidebar_label: 'Visual Notes',
	sidebar_position: 37,
	description: 'One-line answer for interviews: \'SQL reads in logical order — not written order — and every performance question starts with the execution plan.\''
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
    ...(0,lib/* .useMDXComponents */.R)(),
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
        src: (__webpack_require__(96189)/* ["default"] */.A) + "",
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
96189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9Im0wMi1mbG93LXRpdGxlIG0wMi1mbG93LWRlc2MiPgogICAgICA8dGl0bGUgaWQ9Im0wMi1mbG93LXRpdGxlIj5TUUwgcXVlcnkgZXhlY3V0aW9uIG9yZGVyPC90aXRsZT4KICAgICAgPGRlc2MgaWQ9Im0wMi1mbG93LWRlc2MiPkZsb3djaGFydCBvZiBTUUwgbG9naWNhbCBwcm9jZXNzaW5nIG9yZGVyOiBGUk9NIGFuZCBKT0lOLCBXSEVSRSwgR1JPVVAgQlksIEhBVklORywgU0VMRUNULCBPUkRFUiBCWSwgdGhlbiBMSU1JVCBhbmQgT0ZGU0VULCBlbmRpbmcgd2l0aCB0aGUgcmVzdWx0IHNldC48L2Rlc2M+CgogICAgICA8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI2NDAiIGZpbGw9IiNmZmZmZmYiLz4KCiAgICAgIDwhLS0gQXJyb3dzIGZpcnN0IChiZWhpbmQgbm9kZXMpIC0tPgogICAgICA8IS0tIFN0YXJ0IC0+IEZST00gLS0+CiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDEzMiBWIDE2NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgICAgIDwhLS0gRlJPTSAtPiBXSEVSRSAtLT4KICAgICAgPHBhdGggZD0iTSA1MjAgMjA0IFYgMjM2IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICAgICAgPCEtLSBXSEVSRSAtPiBHUk9VUCBCWSAtLT4KICAgICAgPHBhdGggZD0iTSA1MjAgMjc2IFYgMzA4IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICAgICAgPCEtLSBHUk9VUCBCWSAtPiBIQVZJTkcgLS0+CiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDM0OCBWIDM4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgICAgIDwhLS0gSEFWSU5HIC0+IFNFTEVDVCAtLT4KICAgICAgPHBhdGggZD0iTSA1MjAgNDIwIFYgNDUyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICAgICAgPCEtLSBTRUxFQ1QgLT4gT1JERVIgQlkgLS0+CiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDQ5MiBWIDUyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CiAgICAgIDwhLS0gT1JERVIgQlkgLT4gTElNSVQgLS0+CiAgICAgIDxwYXRoIGQ9Ik0gNTIwIDU2NCBWIDU5NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+CgogICAgICA8ZGVmcz4KICAgICAgICA8bWFya2VyIGlkPSJhcnJvdyIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iNiIgcmVmWD0iNyIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj4KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMCAwLCA4IDMsIDAgNiIgZmlsbD0iIzRmNWQ3NSIvPgogICAgICAgIDwvbWFya2VyPgogICAgICA8L2RlZnM+CgogICAgICA8IS0tIFN0YXJ0IChvdmFsKSAtLT4KICAgICAgPHJlY3QgeD0iNDQwIiB5PSI4OCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI0NCIgcng9IjIwIiBmaWxsPSIjZjVmNmY4IiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI1MjAiIHk9IjExNCIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+V3JpdGUgcXVlcnk8L3RleHQ+CgogICAgICA8IS0tIFN0ZXA6IEZST00gLyBKT0lOIC0tPgogICAgICA8cmVjdCB4PSI0MDQiIHk9IjE2NCIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iMTg5IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GUk9NIC8gSk9JTjwvdGV4dD4KICAgICAgPHRleHQgeD0iODE2IiB5PSIxODkiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xIMK3IGdhdGhlciB0YWJsZXM8L3RleHQ+CgogICAgICA8IS0tIFN0ZXA6IFdIRVJFIC0tPgogICAgICA8cmVjdCB4PSI0MDQiIHk9IjIzNiIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iMjYxIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XSEVSRTwvdGV4dD4KICAgICAgPHRleHQgeD0iODE2IiB5PSIyNjEiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yIMK3IGZpbHRlciByb3dzPC90ZXh0PgoKICAgICAgPCEtLSBTdGVwOiBHUk9VUCBCWSAoRk9DQUwpIC0tPgogICAgICA8cmVjdCB4PSI0MDQiIHk9IjMwOCIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI1MjAiIHk9IjMzMyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R1JPVVAgQlk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjgxNiIgeT0iMzMzIiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MyDCtyBncm91cCByb3dzPC90ZXh0PgoKICAgICAgPCEtLSBTdGVwOiBIQVZJTkcgLS0+CiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iMzgwIiB3aWR0aD0iMjMyIiBoZWlnaHQ9IjQwIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iNTIwIiB5PSI0MDUiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhBVklORzwvdGV4dD4KICAgICAgPHRleHQgeD0iODE2IiB5PSI0MDUiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40IMK3IGZpbHRlciBncm91cHM8L3RleHQ+CgogICAgICA8IS0tIFN0ZXA6IFNFTEVDVCAtLT4KICAgICAgPHJlY3QgeD0iNDA0IiB5PSI0NTIiIHdpZHRoPSIyMzIiIGhlaWdodD0iNDAiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI1MjAiIHk9IjQ3NyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0VMRUNUPC90ZXh0PgogICAgICA8dGV4dCB4PSI4MTYiIHk9IjQ3NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjUgwrcgcGljayBjb2x1bW5zPC90ZXh0PgoKICAgICAgPCEtLSBTdGVwOiBPUkRFUiBCWSAtLT4KICAgICAgPHJlY3QgeD0iNDA0IiB5PSI1MjQiIHdpZHRoPSIyMzIiIGhlaWdodD0iNDAiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI1MjAiIHk9IjU0OSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T1JERVIgQlk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjgxNiIgeT0iNTQ5IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NiDCtyBzb3J0IHJvd3M8L3RleHQ+CgogICAgICA8IS0tIFN0ZXA6IExJTUlUIC8gT0ZGU0VUIC0tPgogICAgICA8cmVjdCB4PSI0MDQiIHk9IjU5NiIgd2lkdGg9IjIzMiIgaGVpZ2h0PSI0MCIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjUyMCIgeT0iNjIxIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MSU1JVCAvIE9GRlNFVDwvdGV4dD4KICAgICAgPHRleHQgeD0iODE2IiB5PSI2MjEiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43IMK3IHBhZ2Ugcm93czwvdGV4dD4KCiAgICAgIDwhLS0gV3JpdHRlbi1vcmRlciByZW1pbmRlciAtLT4KICAgICAgPHRleHQgeD0iMTQwIiB5PSIxMTIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5XUklUVEVOPC90ZXh0PgogICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMTI0IiB4Mj0iMTQwIiB5Mj0iMjM2IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4yNSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIxNDAiIHk9IjE2MCIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPlNFTEVDVDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTQwIiB5PSIxNzYiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5GUk9NPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNDAiIHk9IjE5MiIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPldIRVJFPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNDAiIHk9IjIwOCIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPkdST1VQIEJZPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNDAiIHk9IjIyNCIgZmlsbD0iIzdhODM5OSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPk9SREVSIEJZPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTYiIHk9IjI2OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkVYRUNVVEVEPC90ZXh0PgogICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMjgwIiB4Mj0iMTQwIiB5Mj0iNjIwIiBzdHJva2U9InJnYmEoNDYsMTMzLDg1LDAuMzUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMTU2IiB5PSIzMzAiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5GUk9NIOKGkiBKT0lOPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTYiIHk9IjQwMiIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPldIRVJFPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTYiIHk9IjQ3NCIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPkdST1VQIEJZPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTYiIHk9IjU0NiIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiPkhBVklORzwvdGV4dD4KICAgICAgPHRleHQgeD0iMTU2IiB5PSI2MTgiIGZpbGw9IiMyZTg1NTUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIj5TRUxFQ1Q8L3RleHQ+CgogICAgICA8IS0tIExlZ2VuZCBzdHJpcCAtLT4KICAgICAgPGxpbmUgeDE9IjEyMCIgeTE9Ijc2IiB4Mj0iODgwIiB5Mj0iNzYiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iNjQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+CiAgICAgIDxyZWN0IHg9IjE5NiIgeT0iNTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIyMjAiIHk9IjY2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+R1JFRU4gPSBFWEVDVVRJT04gT1JERVI8L3RleHQ+CiAgICAgIDxyZWN0IHg9IjQwMCIgeT0iNTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmNWY2ZjgiLz4KICAgICAgPHRleHQgeD0iNDI0IiB5PSI2NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkdSRVkgPSBXUklUVEVOIE9SREVSPC90ZXh0PgogICAgPC9zdmc+");

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