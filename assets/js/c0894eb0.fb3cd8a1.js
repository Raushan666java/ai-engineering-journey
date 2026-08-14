"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[31516],{

/***/ 84839
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_visual_notes_md_c08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-visual-notes-md-c08.json
const site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_visual_notes_md_c08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/visual-notes","title":"Visual Notes — Container-to-Cloud Deployment Stack","description":"One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews.","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":95,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes","title":"Visual Notes — Container-to-Cloud Deployment Stack","sidebar_label":"Visual Notes","sidebar_position":95},"sidebar":"placementSidebar","previous":{"title":"GCP Vertex AI — Unified ML Platform, AutoML, MLOps","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/13-gcp-vertex-ai"},"next":{"title":"07 — System Design","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes',
	title: 'Visual Notes — Container-to-Cloud Deployment Stack',
	sidebar_label: 'Visual Notes',
	sidebar_position: 95
};
const contentTitle = 'Visual Notes — Container-to-Cloud Deployment Stack';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "visual-notes--container-to-cloud-deployment-stack",
        children: "Visual Notes — Container-to-Cloud Deployment Stack"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "One diagram, the full picture. This page is meant to be glanced at before reading the chapters, and again before interviews."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Container-to-Cloud Deployment Stack",
        src: (__webpack_require__(36406)/* ["default"] */ .A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "what-the-diagram-shows",
      children: "What the diagram shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Developer zone"
        }), " — Code and a Dockerfile become an image, then a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker build"
        }), " pushes it to a container registry. Everything reproducible starts here."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orchestration zone"
        }), " — Kubernetes schedules pods, services and ingress. The HPA scales replicas, rolling updates replace releases with zero downtime."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud zone"
        }), " — EKS/GKE/AKS run the cluster; managed AI services and serverless functions absorb the spikey work; CI/CD ships the change end-to-end."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Walk me through how a container reaches production\" is a top-3 DevOps question — have this diagram memorised."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowing which cloud primitive maps to which layer proves you can run AI workloads, not just write them."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quick-revision",
      children: "Quick revision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Image = build once, tag with hash; container = running image; registry = the source of truth for versions."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep recreating pods declaratively: never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker exec"
        }), " to patch — change the manifest, not the running pod."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Probes: liveness (resurrect), readiness (route traffic), startup (slow apps)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HPA scales on metrics; VPA rightsizes requests; autoscaling is the interview favourite."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serverless (Lambda) trades cold starts for zero idle cost — pair with RAG/embeddings at modest QPS."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "related-chapters",
      children: "Related chapters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/01-docker-basics",
          children: "Docker basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/04-kubernetes-basics",
          children: "Kubernetes basics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/10-ci-cd-pipelines",
          children: "CI/CD pipelines"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/11-serverless-lambda",
          children: "Serverless Lambda"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-line answer for interviews:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"My image is built once, versioned in a registry, and orchestrated by Kubernetes regardless of which cloud runs it.\""
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

/***/ 36406
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjA2X2RvY2tldi10aXRsZSAwNl9kb2NrZXYtZGVzYyI+DQo8dGl0bGUgaWQ9IjA2X2RvY2tldi10aXRsZSI+Q29udGFpbmVyLXRvLUNsb3VkIGRlcGxveW1lbnQgc3RhY2s8L3RpdGxlPg0KPGRlc2MgaWQ9IjA2X2RvY2tldi1kZXNjIj5ab25lcyBmcm9tIGRldmVsb3BlciBsYXB0b3AgdGhyb3VnaCBEb2NrZXIgYW5kIEt1YmVybmV0ZXMgdG8gY2xvdWQgc2VydmljZXMsIGVuZGluZyB3aXRoIENJL0NELjwvZGVzYz4NCjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MCIgZmlsbD0iI2ZmZmZmZiIvPg0KPHBhdGggZD0iTSAyNDAgMTc0IEggMzAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjVkNzUiIHN0cm9rZS13aWR0aD0iMSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4NCjxwYXRoIGQ9Ik0gNTIwIDE3NCBIIDU4MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGY1ZDc1IiBzdHJva2Utd2lkdGg9IjEiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIi8+DQo8cmVjdCB4PSI0MCIgeT0iOTYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMzI4IiByeD0iOCIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+DQo8dGV4dCB4PSI1MiIgeT0iMTE2IiBmaWxsPSIjN2E4Mzk5IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+REVWRUxPUEVSPC90ZXh0Pg0KPHJlY3QgeD0iNTYiIHk9IjE0OCIgd2lkdGg9IjE2OCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSIxNDAiIHk9IjE3NSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29kZSArIERvY2tlcmZpbGU8L3RleHQ+DQo8dGV4dCB4PSIxNDAiIHk9IjE4OSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnB5dGhvbjozLjEyLXNsaW08L3RleHQ+DQo8cmVjdCB4PSI1NiIgeT0iMjE2IiB3aWR0aD0iMTY4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjE0MCIgeT0iMjQzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CdWlsZCAmYW1wOyBwdXNoIGltYWdlPC90ZXh0Pg0KPHRleHQgeD0iMTQwIiB5PSIyNTciIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kb2NrZXIgYnVpbGQgwrcgcmVnaXN0cnk8L3RleHQ+DQo8cmVjdCB4PSIzMDAiIHk9Ijk2IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjMyOCIgcng9IjgiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wMikiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIwLjgiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPg0KPHRleHQgeD0iMzEyIiB5PSIxMTYiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5PUkNIRVNUUkFUSU9OPC90ZXh0Pg0KPHJlY3QgeD0iMzE2IiB5PSIxNDgiIHdpZHRoPSIxODgiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSJyZ2JhKDQ2LDEzMyw4NSwwLjA4KSIgc3Ryb2tlPSIjMmU4NTU1IiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQxMCIgeT0iMTc1IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5LdWJlcm5ldGVzIGNsdXN0ZXI8L3RleHQ+DQo8dGV4dCB4PSI0MTAiIHk9IjE4OSIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBvZHMgwrcgc2VydmljZXMgwrcgaW5ncmVzczwvdGV4dD4NCjxyZWN0IHg9IjMxNiIgeT0iMjE2IiB3aWR0aD0iMTg4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9IjQxMCIgeT0iMjQzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TY2FsaW5nICZhbXA7IHJvbGxpbmc8L3RleHQ+DQo8dGV4dCB4PSI0MTAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhQQSDCtyByZXBsaWNhcyDCtyBwcm9iZXM8L3RleHQ+DQo8cmVjdCB4PSI1ODAiIHk9Ijk2IiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjMyOCIgcng9IjgiIGZpbGw9InJnYmEoMjYsMjcsMzUsMC4wMikiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIwLjgiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPg0KPHRleHQgeD0iNTkyIiB5PSIxMTYiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5DTE9VRDwvdGV4dD4NCjxyZWN0IHg9IjU5NiIgeT0iMTQ4IiB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc3MCIgeT0iMTc1IiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BV1MgwrcgQXp1cmUgwrcgR0NQPC90ZXh0Pg0KPHRleHQgeD0iNzcwIiB5PSIxODkiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FQzIgwrcgRUtTIMK3IEFLUyDCtyBHS0U8L3RleHQ+DQo8cmVjdCB4PSI1OTYiIHk9IjIxNiIgd2lkdGg9IjM0OCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+DQo8dGV4dCB4PSI3NzAiIHk9IjI0MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFuYWdlZCBBSSBzZXJ2aWNlczwvdGV4dD4NCjx0ZXh0IHg9Ijc3MCIgeT0iMjU3IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TGFtYmRhIMK3IFZlcnRleCBBSTwvdGV4dD4NCjxyZWN0IHg9IjU5NiIgeT0iMjg0IiB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4NCjx0ZXh0IHg9Ijc3MCIgeT0iMzExIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DSS9DRCBwaXBlbGluZXM8L3RleHQ+DQo8dGV4dCB4PSI3NzAiIHk9IjMyNSIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdpdEh1YiBBY3Rpb25zIMK3IEFyZ29DRDwvdGV4dD4NCjxyZWN0IHg9IjIzMCIgeT0iMTUwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQiIGZpbGw9IiNmZmZmZmYiLz4NCjx0ZXh0IHg9IjI3MCIgeT0iMTYyIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cHVzaDwvdGV4dD4NCjxyZWN0IHg9IjUxMCIgeT0iMTUwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQiIGZpbGw9IiNmZmZmZmYiLz4NCjx0ZXh0IHg9IjU1MCIgeT0iMTYyIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZGVwbG95PC90ZXh0Pg0KPHRleHQgeD0iMTIwIiB5PSI0NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xOGVtIj5JTlRFUlZJRVcgQU5HTEU8L3RleHQ+PHRleHQgeD0iMjEyIiB5PSI0NDQiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIj5UaGUgaW50ZXJ2aWV3IHF1ZXN0aW9uIGlzIGFsd2F5cyAiaG93IGRvZXMgYSBjb250YWluZXIgZ2V0IGZyb20geW91ciBsYXB0b3AgdG8gcHJvZHVjdGlvbj8iIOKAlCB0aGlzIGlzIHRoYXQgc3RvcnkuPC90ZXh0Pg0KPGxpbmUgeDE9IjEyMCIgeTE9IjUwMCIgeDI9Ijg4MCIgeTI9IjUwMCIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIxMjAiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE0ZW0iPkxFR0VORDwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjUwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0icmdiYSg0NiwxMzMsODUsMC4wOCkiIHN0cm9rZT0iIzJlODU1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjI0IiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5BQ0NFTlQgPSBGT0NBTDwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjUwNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiByeD0iMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSIzODQiIHk9IjUxNiIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjA2ZW0iPlBBUEVSID0gU1RFUDwvdGV4dD4NCjwvc3ZnPg==");
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