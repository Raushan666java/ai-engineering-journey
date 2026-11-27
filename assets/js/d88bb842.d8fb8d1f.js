"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["96990"], {
36455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_visual_notes_md_d88_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-03-data-structures-algorithms-visual-notes-md-d88.json
var site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_visual_notes_md_d88_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/data-structures-algorithms/visual-notes","title":"Visual Notes — Data Structures & Algorithms","description":"One-line answer for interviews: \'I solve problems by pattern-matching the structure — what to store, in what, and at what cost.\'","source":"@site/docs/courses/ai-engineering-placement/03-data-structures-algorithms/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/03-data-structures-algorithms","slug":"/ai-engineering-placement/03-data-structures-algorithms/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/03-data-structures-algorithms/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795160360000,"sidebarPosition":57,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/03-data-structures-algorithms/visual-notes","title":"Visual Notes — Data Structures & Algorithms","sidebar_label":"Visual Notes","sidebar_position":57,"description":"One-line answer for interviews: \'I solve problems by pattern-matching the structure — what to store, in what, and at what cost.\'"},"sidebar":"placementSidebar","previous":{"title":"Bit Manipulation and Math","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/18-bit-manipulation-and-math"},"next":{"title":"04 — Git, Linux & CLI","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/03-data-structures-algorithms/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/03-data-structures-algorithms/visual-notes',
	title: 'Visual Notes — Data Structures & Algorithms',
	sidebar_label: 'Visual Notes',
	sidebar_position: 57,
	description: 'One-line answer for interviews: \'I solve problems by pattern-matching the structure — what to store, in what, and at what cost.\''
};
const contentTitle = 'Visual Notes — Data Structures & Algorithms';

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
        id: "visual-notes--data-structures--algorithms",
        children: "Visual Notes — Data Structures & Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. Glance at this before reading the chapters and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "DSA topic map diagram",
        src: (__webpack_require__(23349)/* ["default"] */.A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Everything in DSA hangs off one root — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complexity analysis"
      }), " — with five branches:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arrays & strings"
        }), " — the workhorses: sliding window and two pointers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash maps & linked lists"
        }), " — the lookup game: hash maps for O(1) access, linked lists for order and splicing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stacks & queues"
        }), " — LIFO and FIFO: parse, undo, BFS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trees & graphs"
        }), " — the real world: BST, heap, trie, BFS/DFS, shortest paths, topological sort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic programming"
        }), " — the differentiator: overlapping subproblems and optimal substructure, 1D and 2D."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Arrays, hash maps, and trees appear in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "almost every phone screen"
        }), "; DP and graphs decide the on-site outcome."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The interview isn't about memorizing solutions — it's about ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "recognizing the pattern"
        }), " and picking the right structure in the first minute."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Big-O by structure"
        }), " — array index: O(1); array search: O(n); hash map insert/get: O(1) avg; BST search: O(log n); sort: O(n log n); DFS/BFS: O(V + E)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "When to use what"
        }), " — need fast lookup? hash map. Need order? array/linked list. Need fast min/max? heap. Need hierarchy? tree. Need connectivity? graph."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The two-pointer pattern"
        }), " — sorted arrays, palindrome checks, removing duplicates, container with most water."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sliding window"
        }), " — subarray/substring problems with a constraint: expand the right, shrink the left."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DP tell"
        }), " — \"number of ways\", \"minimum cost\", \"longest subsequence\" → likely DP. Write the recurrence, memoize, then convert to tabulation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BFS vs DFS"
        }), " — BFS for shortest path in unweighted graphs, DFS for connectivity and path existence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity",
          children: "01 — Time & Space Complexity"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/04-sliding-window",
          children: "04 — Sliding Window"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/05-two-pointers",
          children: "05 — Two Pointers"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/06-hash-maps-and-sets",
          children: "06 — Hash Maps and Sets"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/12-graphs-bfs-dfs",
          children: "12 — Graphs BFS/DFS"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/15-dynamic-programming-1d",
          children: "15 — Dynamic Programming 1D"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"I solve problems by pattern-matching the structure — what to store, in what, and at what cost.\""
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
23349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9Im0wMy10cmVlLXRpdGxlIG0wMy10cmVlLWRlc2MiPgogICAgICA8dGl0bGUgaWQ9Im0wMy10cmVlLXRpdGxlIj5EYXRhIHN0cnVjdHVyZXMgYW5kIGFsZ29yaXRobXMgdG9waWMgbWFwPC90aXRsZT4KICAgICAgPGRlc2MgaWQ9Im0wMy10cmVlLWRlc2MiPlRyZWUgcm9vdGVkIGF0IGNvbXBsZXhpdHkgYW5hbHlzaXMgd2l0aCBmaXZlIGJyYW5jaGVzOiBhcnJheXMgYW5kIHN0cmluZ3MsIGhhc2ggbWFwcyBhbmQgbGlua2VkIGxpc3RzLCBzdGFja3MgYW5kIHF1ZXVlcywgdHJlZXMgYW5kIGdyYXBocywgYW5kIGR5bmFtaWMgcHJvZ3JhbW1pbmcuPC9kZXNjPgoKICAgICAgPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTYwIiBmaWxsPSIjZmZmZmZmIi8+CgogICAgICA8IS0tIENvbm5lY3RvcnMgZHJhd24gYmVmb3JlIG5vZGVzIC0tPgogICAgICA8bGluZSB4MT0iNTAwIiB5MT0iMTQwIiB4Mj0iNTAwIiB5Mj0iMTc2IiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMTc2IiB4Mj0iODYwIiB5Mj0iMTc2IiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8bGluZSB4MT0iMTQwIiB5MT0iMTc2IiB4Mj0iMTQwIiB5Mj0iMjIwIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8bGluZSB4MT0iMzIwIiB5MT0iMTc2IiB4Mj0iMzIwIiB5Mj0iMjIwIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8bGluZSB4MT0iNTAwIiB5MT0iMTc2IiB4Mj0iNTAwIiB5Mj0iMjIwIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8bGluZSB4MT0iNjgwIiB5MT0iMTc2IiB4Mj0iNjgwIiB5Mj0iMjIwIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8bGluZSB4MT0iODYwIiB5MT0iMTc2IiB4Mj0iODYwIiB5Mj0iMjIwIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPgoKICAgICAgPCEtLSBSb290IG5vZGUgKEZPQ0FMKSAtLT4KICAgICAgPHJlY3QgeD0iMzgwIiB5PSI4OCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI1MDAiIHk9IjExMiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29tcGxleGl0eSBhbmFseXNpczwvdGV4dD4KICAgICAgPHRleHQgeD0iNTAwIiB5PSIxMjgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CaWctTyDCtyBzcGFjZSDCtyB0aW1lPC90ZXh0PgoKICAgICAgPCEtLSBDaGlsZCAxIOKAlCBBcnJheXMgJiBzdHJpbmdzIC0tPgogICAgICA8cmVjdCB4PSI2NCIgeT0iMjIwIiB3aWR0aD0iMTUyIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iMTQwIiB5PSIyNDIiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFycmF5cyAmYW1wOyBzdHJpbmdzPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNDAiIHk9IjI1OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNsaWRpbmcgd2luZG93IMK3IDIgcHRyczwvdGV4dD4KCiAgICAgIDwhLS0gQ2hpbGQgMiDigJQgSGFzaCAmIGxpbmtlZCAtLT4KICAgICAgPHJlY3QgeD0iMjQ0IiB5PSIyMjAiIHdpZHRoPSIxNTIiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSIzMjAiIHk9IjI0MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SGFzaCBtYXBzICZhbXA7IGxpc3RzPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMjAiIHk9IjI1OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmxvb2t1cCDCtyBsaW5raW5nPC90ZXh0PgoKICAgICAgPCEtLSBDaGlsZCAzIOKAlCBTdGFja3MgJiBxdWV1ZXMgLS0+CiAgICAgIDxyZWN0IHg9IjQyNCIgeT0iMjIwIiB3aWR0aD0iMTUyIiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHRleHQgeD0iNTAwIiB5PSIyNDIiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlN0YWNrcyAmYW1wOyBxdWV1ZXM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iMjU4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TElGTyDCtyBGSUZPPC90ZXh0PgoKICAgICAgPCEtLSBDaGlsZCA0IOKAlCBUcmVlcyAmIGdyYXBocyAtLT4KICAgICAgPHJlY3QgeD0iNjA0IiB5PSIyMjAiIHdpZHRoPSIxNTIiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8dGV4dCB4PSI2ODAiIHk9IjI0MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VHJlZXMgJmFtcDsgZ3JhcGhzPC90ZXh0PgogICAgICA8dGV4dCB4PSI2ODAiIHk9IjI1OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJTVCDCtyBCRlMgwrcgREZTPC90ZXh0PgoKICAgICAgPCEtLSBDaGlsZCA1IOKAlCBEeW5hbWljIHByb2dyYW1taW5nIC0tPgogICAgICA8cmVjdCB4PSI3ODQiIHk9IjIyMCIgd2lkdGg9IjE1MiIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9Ijg2MCIgeT0iMjQyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EeW5hbWljIHByb2dyYW1taW5nPC90ZXh0PgogICAgICA8dGV4dCB4PSI4NjAiIHk9IjI1OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjFEIMK3IDJEIMK3IG1lbW9pemF0aW9uPC90ZXh0PgoKICAgICAgPCEtLSBDYXB0aW9uIC0tPgogICAgICA8dGV4dCB4PSIxMjAiIHk9IjM1NiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE4ZW0iPklOVEVSVklFVyBBTkdMRTwvdGV4dD4KICAgICAgPHRleHQgeD0iMjEyIiB5PSIzNTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5BcnJheXMsIGhhc2ggbWFwcywgYW5kIHRyZWVzIGFwcGVhciBpbiBhbG1vc3QgZXZlcnkgcGhvbmUgc2NyZWVuOyBEUCBkZWNpZGVzIHRoZSBvbi1zaXRlIG91dGNvbWUuPC90ZXh0PgoKICAgICAgPCEtLSBMZWdlbmQgc3RyaXAgLS0+CiAgICAgIDxsaW5lIHgxPSIxMjAiIHkxPSI0MDAiIHgyPSI4ODAiIHkyPSI0MDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iNDI0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+TEVHRU5EPC90ZXh0PgogICAgICA8cmVjdCB4PSIxOTYiIHk9IjQxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjIyMCIgeT0iNDI2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gU1RBUlQgSEVSRTwvdGV4dD4KICAgICAgPHJlY3QgeD0iMzc2IiB5PSI0MTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDx0ZXh0IHg9IjQwMCIgeT0iNDI2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+UEFQRVIgPSBUT1BJQyBBUkVBPC90ZXh0PgogICAgPC9zdmc+");

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