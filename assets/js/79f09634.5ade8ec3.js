"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5421],{

/***/ 12589
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_04_git_linux_cli_visual_notes_md_79f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-04-git-linux-cli-visual-notes-md-79f.json
const site_docs_courses_ai_engineering_placement_04_git_linux_cli_visual_notes_md_79f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/git-linux-cli/visual-notes","title":"Visual Notes — Git & Linux CLI","description":"One diagram, the full picture. Glance at this before reading the chapters and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/04-git-linux-cli/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/04-git-linux-cli","slug":"/ai-engineering-placement/04-git-linux-cli/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":68,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/04-git-linux-cli/visual-notes","title":"Visual Notes — Git & Linux CLI","sidebar_label":"Visual Notes","sidebar_position":68},"sidebar":"placementSidebar","previous":{"title":"Cron Automation — Scheduling, Systemd Timers, Backups, Ansible","permalink":"/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/09-cron-automation"},"next":{"title":"05 — FastAPI & Backend Engineering","permalink":"/ai-engineering-journey/ai-engineering-placement/05-fastapi-backend"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/04-git-linux-cli/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/04-git-linux-cli/visual-notes',
	title: 'Visual Notes — Git & Linux CLI',
	sidebar_label: 'Visual Notes',
	sidebar_position: 68
};
const contentTitle = 'Visual Notes — Git & Linux CLI';

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
        id: "visual-notes--git--linux-cli",
        children: "Visual Notes — Git & Linux CLI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. Glance at this before reading the chapters and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Git workflow diagram",
        src: (__webpack_require__(87980)/* ["default"] */ .A) + "",
        width: "1000",
        height: "600"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The lifecycle of a change — the mental model interviewers expect you to have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch"
        }), " — carve off a new line of work from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "git add"
        }), " — stage files into the index (the \"pre-commit\" area)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "git commit"
        }), " — take a snapshot; the unit git is built around."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "git push"
        }), " — send the snapshot to the remote."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pull request"
        }), " — propose the change for review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approved?"
        }), " — if yes, merge to main; if no, revise and re-push."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux & CLI"
        }), " — the shell that sits around everything: ssh, bash, file ops, permissions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git questions are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "guaranteed"
        }), " — every team uses it, and interviewers probe the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "mental model"
        }), ", not command flags."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three states (working tree → index → HEAD) and the difference between merge and rebase are the two most-recycled questions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three states"
        }), " — modified (working tree) → staged (index) → committed (HEAD). ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add"
        }), " then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit"
        }), " moves between them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Undo"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git restore <file>"
        }), " (un-modify), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git restore --staged <file>"
        }), " (un-stage), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git revert"
        }), " (history vs new commit)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge vs rebase"
        }), " — merge preserves history with a merge commit; rebase replays your commits on top for a linear history. Never rebase shared branches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remotes"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git pull"
        }), " (= fetch + merge); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git fetch"
        }), " only updates local tracking refs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branching"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git checkout -b feat/x"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git branch"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git merge --no-ff"
        }), " for feature branches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linux basics that come up"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cd"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grep"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chmod"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chown"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ps"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tar"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/01-git-basics",
          children: "01 — Git Basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/02-git-branching",
          children: "02 — Git Branching"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/03-git-workflow",
          children: "03 — Git Workflow"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/04-linux-commands",
          children: "04 — Linux Commands"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/04-git-linux-cli/07-ssh-and-remote-access",
          children: "07 — SSH & Remote Access"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Git is a snapshot graph; I move changes from the working tree through the index to commits, and merge/rebase to integrate them.\""
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

/***/ 87980
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9Im0wNC1mbG93LXRpdGxlIG0wNC1mbG93LWRlc2MiPg0KICAgICAgPHRpdGxlIGlkPSJtMDQtZmxvdy10aXRsZSI+R2l0IGJyYW5jaCB3b3JrZmxvdyBsaWZlY3ljbGU8L3RpdGxlPg0KICAgICAgPGRlc2MgaWQ9Im0wNC1mbG93LWRlc2MiPkZsb3djaGFydCBvZiBhIGdpdCBjaGFuZ2UgbGlmZWN5Y2xlOiBjcmVhdGUgYSBicmFuY2gsIHN0YWdlIGZpbGVzLCBjb21taXQsIHB1c2gsIG9wZW4gYSBwdWxsIHJlcXVlc3QsIGFuZCBvbiByZXZpZXcgYXBwcm92YWwgbWVyZ2UgdG8gdGhlIG1haW4gYnJhbmNoLjwvZGVzYz4NCg0KICAgICAgPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZmZmZmZmIi8+DQoNCiAgICAgIDwhLS0gQXJyb3dzIGZpcnN0IC0tPg0KICAgICAgPHBhdGggZD0iTSA1MDAgMTQ4IFYgMTgwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDxwYXRoIGQ9Ik0gNTAwIDIyOCBWIDI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQogICAgICA8cGF0aCBkPSJNIDUwMCAzMDggViAzNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPg0KICAgICAgPHBhdGggZD0iTSA1MDAgMzg4IFYgNDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCiAgICAgIDxwYXRoIGQ9Ik0gNTAwIDQ2OCBWIDUwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQoNCiAgICAgIDxkZWZzPg0KICAgICAgICA8bWFya2VyIGlkPSJhcnJvdyIgbWFya2VyV2lkdGg9IjgiIG1hcmtlckhlaWdodD0iNiIgcmVmWD0iNyIgcmVmWT0iMyIgb3JpZW50PSJhdXRvIj4NCiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjAgMCwgOCAzLCAwIDYiIGZpbGw9IiM0ZjVkNzUiLz4NCiAgICAgICAgPC9tYXJrZXI+DQogICAgICA8L2RlZnM+DQoNCiAgICAgIDwhLS0gU3RhcnQgLS0+DQogICAgICA8cmVjdCB4PSI0NDAiIHk9IjEwNCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0NCIgcng9IjIwIiBmaWxsPSIjZjVmNmY4IiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iNTAwIiB5PSIxMzAiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJyYW5jaDwvdGV4dD4NCg0KICAgICAgPCEtLSBTdGFnZSAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iMTgwIiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iMjAyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5naXQgYWRkPC90ZXh0Pg0KICAgICAgPHRleHQgeD0iNTAwIiB5PSIyMTgiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdGFnZSBmaWxlczwvdGV4dD4NCg0KICAgICAgPCEtLSBDb21taXQgKEZPQ0FMKSAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iMjYwIiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSI1MDAiIHk9IjI4MiIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Z2l0IGNvbW1pdDwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iMjk4IiBmaWxsPSIjMmU4NTU1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c25hcHNob3Q8L3RleHQ+DQoNCiAgICAgIDwhLS0gUHVzaCAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iMzQwIiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iMzYyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5naXQgcHVzaDwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iMzc4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dG8gcmVtb3RlPC90ZXh0Pg0KDQogICAgICA8IS0tIFB1bGwgcmVxdWVzdCAtLT4NCiAgICAgIDxyZWN0IHg9IjQwNCIgeT0iNDIwIiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iNDQyIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QdWxsIHJlcXVlc3Q8L3RleHQ+DQogICAgICA8dGV4dCB4PSI1MDAiIHk9IjQ1OCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnJldmlldzwvdGV4dD4NCg0KICAgICAgPCEtLSBNZXJnZSAoZW5kLWlzaCwgZGVjaXNpb24gYmxvY2spIC0tPg0KICAgICAgPHJlY3QgeD0iMzkyIiB5PSI1MDAiIHdpZHRoPSIyMTYiIGhlaWdodD0iNDgiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iNTAwIiB5PSI1MjIiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFwcHJvdmVkPzwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjUwMCIgeT0iNTM4IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bWVyZ2UgdG8gbWFpbjwvdGV4dD4NCg0KICAgICAgPCEtLSBTaWRlIG5vdGU6IExpbnV4L0NMSSAtLT4NCiAgICAgIDxyZWN0IHg9IjcyMCIgeT0iMjYwIiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjcyIiByeD0iNiIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMjApIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQsMyIvPg0KICAgICAgPHRleHQgeD0iODI4IiB5PSIyODYiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxpbnV4ICZhbXA7IENMSTwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjgyOCIgeT0iMzAyIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c3NoIMK3IGJhc2ggwrcgY3JvbjwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjgyOCIgeT0iMzE2IiBmaWxsPSIjN2E4Mzk5IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dGhlIHNoZWxsIGFyb3VuZCBnaXQ8L3RleHQ+DQoNCiAgICAgIDwhLS0gQ2FwdGlvbiAtLT4NCiAgICAgIDx0ZXh0IHg9IjEyMCIgeT0iMTYwIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMThlbSI+Rk9DQUwgU1RFUDwvdGV4dD4NCiAgICAgIDx0ZXh0IHg9IjIxMiIgeT0iMTYwIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc3R5bGU9Iml0YWxpYyI+VGhlIGNvbW1pdCBpcyB0aGUgc25hcHNob3QgdW5pdCDigJQgZXZlcnkgaW50ZXJ2aWV3IHF1ZXN0aW9uIGFib3V0IGdpdCByZXNvbHZlcyBiYWNrIHRvIGl0LjwvdGV4dD4NCg0KICAgICAgPCEtLSBMZWdlbmQgc3RyaXAgLS0+DQogICAgICA8bGluZSB4MT0iMTIwIiB5MT0iNTg0IiB4Mj0iODgwIiB5Mj0iNTg0IiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgICAgPHRleHQgeD0iMTIwIiB5PSI1NzIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+DQogICAgICA8cmVjdCB4PSIxOTYiIHk9IjU2NCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+DQogICAgICA8dGV4dCB4PSIyMjAiIHk9IjU3NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPkFDQ0VOVCA9IENPUkU8L3RleHQ+DQogICAgICA8cmVjdCB4PSIzMzYiIHk9IjU2NCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgICAgIDx0ZXh0IHg9IjM2MCIgeT0iNTc0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+UEFQRVIgPSBTVEVQPC90ZXh0Pg0KICAgICAgPHJlY3QgeD0iNDY0IiB5PSI1NjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wMikiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjIwKSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI0LDMiLz4NCiAgICAgIDx0ZXh0IHg9IjQ4OCIgeT0iNTc0IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+REFTSEVEID0gQ09OVEVYVDwvdGV4dD4NCiAgICA8L3N2Zz4=");
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