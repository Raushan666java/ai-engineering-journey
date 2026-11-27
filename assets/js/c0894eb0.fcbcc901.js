"use strict";
(self["webpackChunksite"] = self["webpackChunksite"] || []).push([["23821"], {
54965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_visual_notes_md_c08_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-06-docker-kubernetes-cloud-visual-notes-md-c08.json
var site_docs_courses_ai_engineering_placement_06_docker_kubernetes_cloud_visual_notes_md_c08_namespaceObject = JSON.parse('{"id":"courses/ai-engineering-placement/docker-kubernetes-cloud/visual-notes","title":"Visual Notes — Container-to-Cloud Deployment Stack","description":"One-line answer for interviews: \'My image is built once, versioned in a registry, and orchestrated by Kubernetes regardless of which cloud runs it.\'","source":"@site/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes.md","sourceDirName":"courses/ai-engineering-placement/06-docker-kubernetes-cloud","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/Raushan666java/ai-engineering-journey/tree/main/site/docs/docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes.md","tags":[],"version":"current","lastUpdatedAt":1795167173000,"sidebarPosition":95,"frontMatter":{"id":"visual-notes","slug":"/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes","title":"Visual Notes — Container-to-Cloud Deployment Stack","sidebar_label":"Visual Notes","sidebar_position":95,"description":"One-line answer for interviews: \'My image is built once, versioned in a registry, and orchestrated by Kubernetes regardless of which cloud runs it.\'"},"sidebar":"placementSidebar","previous":{"title":"GCP Vertex AI — Unified ML Platform, AutoML, MLOps","permalink":"/ai-engineering-journey/ai-engineering-placement/06-docker-kubernetes-cloud/13-gcp-vertex-ai"},"next":{"title":"07 — System Design","permalink":"/ai-engineering-journey/ai-engineering-placement/07-system-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/courses/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes.md


const frontMatter = {
	id: 'visual-notes',
	slug: '/ai-engineering-placement/06-docker-kubernetes-cloud/visual-notes',
	title: 'Visual Notes — Container-to-Cloud Deployment Stack',
	sidebar_label: 'Visual Notes',
	sidebar_position: 95,
	description: 'One-line answer for interviews: \'My image is built once, versioned in a registry, and orchestrated by Kubernetes regardless of which cloud runs it.\''
};
const contentTitle = 'Visual Notes — Container-to-Cloud Deployment Stack';

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
        src: (__webpack_require__(21274)/* ["default"] */.A) + "",
        width: "1000",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-matters-for-placement",
      children: "Why this matters for placement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Walk me through how a container reaches production\" is a top-3 DevOps question — have this diagram memorised."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowing which cloud primitive maps to which layer proves you can run AI workloads, not just write them."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
21274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9IjA2X2RvY2tldi10aXRsZSAwNl9kb2NrZXYtZGVzYyI+Cjx0aXRsZSBpZD0iMDZfZG9ja2V2LXRpdGxlIj5Db250YWluZXItdG8tQ2xvdWQgZGVwbG95bWVudCBzdGFjazwvdGl0bGU+CjxkZXNjIGlkPSIwNl9kb2NrZXYtZGVzYyI+Wm9uZXMgZnJvbSBkZXZlbG9wZXIgbGFwdG9wIHRocm91Z2ggRG9ja2VyIGFuZCBLdWJlcm5ldGVzIHRvIGNsb3VkIHNlcnZpY2VzLCBlbmRpbmcgd2l0aCBDSS9DRC48L2Rlc2M+CjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjU2MCIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNIDI0MCAxNzQgSCAzMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cGF0aCBkPSJNIDUyMCAxNzQgSCA1ODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRmNWQ3NSIgc3Ryb2tlLXdpZHRoPSIxIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIvPgo8cmVjdCB4PSI0MCIgeT0iOTYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMzI4IiByeD0iOCIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+Cjx0ZXh0IHg9IjUyIiB5PSIxMTYiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5ERVZFTE9QRVI8L3RleHQ+CjxyZWN0IHg9IjU2IiB5PSIxNDgiIHdpZHRoPSIxNjgiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSIxNDAiIHk9IjE3NSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29kZSArIERvY2tlcmZpbGU8L3RleHQ+Cjx0ZXh0IHg9IjE0MCIgeT0iMTg5IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cHl0aG9uOjMuMTItc2xpbTwvdGV4dD4KPHJlY3QgeD0iNTYiIHk9IjIxNiIgd2lkdGg9IjE2OCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9IjE0MCIgeT0iMjQzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CdWlsZCAmYW1wOyBwdXNoIGltYWdlPC90ZXh0Pgo8dGV4dCB4PSIxNDAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRvY2tlciBidWlsZCDCtyByZWdpc3RyeTwvdGV4dD4KPHJlY3QgeD0iMzAwIiB5PSI5NiIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIzMjgiIHJ4PSI4IiBmaWxsPSJyZ2JhKDI2LDI3LDM1LDAuMDIpIiBzdHJva2U9InJnYmEoMjYsMjcsMzUsMC4xMCkiIHN0cm9rZS13aWR0aD0iMC44IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4KPHRleHQgeD0iMzEyIiB5PSIxMTYiIGZpbGw9IiM3YTgzOTkiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5PUkNIRVNUUkFUSU9OPC90ZXh0Pgo8cmVjdCB4PSIzMTYiIHk9IjE0OCIgd2lkdGg9IjE4OCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI0MTAiIHk9IjE3NSIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+S3ViZXJuZXRlcyBjbHVzdGVyPC90ZXh0Pgo8dGV4dCB4PSI0MTAiIHk9IjE4OSIgZmlsbD0iIzJlODU1NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBvZHMgwrcgc2VydmljZXMgwrcgaW5ncmVzczwvdGV4dD4KPHJlY3QgeD0iMzE2IiB5PSIyMTYiIHdpZHRoPSIxODgiIGhlaWdodD0iNTIiIHJ4PSI2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxYTFiMjMiIHN0cm9rZS13aWR0aD0iMSIvPgo8dGV4dCB4PSI0MTAiIHk9IjI0MyIgZmlsbD0iIzFhMWIyMyIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgc2Fucy1zZXJpZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2NhbGluZyAmYW1wOyByb2xsaW5nPC90ZXh0Pgo8dGV4dCB4PSI0MTAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhQQSDCtyByZXBsaWNhcyDCtyBwcm9iZXM8L3RleHQ+CjxyZWN0IHg9IjU4MCIgeT0iOTYiIHdpZHRoPSIzODAiIGhlaWdodD0iMzI4IiByeD0iOCIgZmlsbD0icmdiYSgyNiwyNywzNSwwLjAyKSIgc3Ryb2tlPSJyZ2JhKDI2LDI3LDM1LDAuMTApIiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCA0Ii8+Cjx0ZXh0IHg9IjU5MiIgeT0iMTE2IiBmaWxsPSIjN2E4Mzk5IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMTRlbSI+Q0xPVUQ8L3RleHQ+CjxyZWN0IHg9IjU5NiIgeT0iMTQ4IiB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNzcwIiB5PSIxNzUiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFXUyDCtyBBenVyZSDCtyBHQ1A8L3RleHQ+Cjx0ZXh0IHg9Ijc3MCIgeT0iMTg5IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RUMyIMK3IEVLUyDCtyBBS1MgwrcgR0tFPC90ZXh0Pgo8cmVjdCB4PSI1OTYiIHk9IjIxNiIgd2lkdGg9IjM0OCIgaGVpZ2h0PSI1MiIgcng9IjYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjx0ZXh0IHg9Ijc3MCIgeT0iMjQzIiBmaWxsPSIjMWExYjIzIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iNjAwIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NYW5hZ2VkIEFJIHNlcnZpY2VzPC90ZXh0Pgo8dGV4dCB4PSI3NzAiIHk9IjI1NyIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxhbWJkYSDCtyBWZXJ0ZXggQUk8L3RleHQ+CjxyZWN0IHg9IjU5NiIgeT0iMjg0IiB3aWR0aD0iMzQ4IiBoZWlnaHQ9IjUyIiByeD0iNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWExYjIzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHRleHQgeD0iNzcwIiB5PSIzMTEiIGZpbGw9IiMxYTFiMjMiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNJL0NEIHBpcGVsaW5lczwvdGV4dD4KPHRleHQgeD0iNzcwIiB5PSIzMjUiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HaXRIdWIgQWN0aW9ucyDCtyBBcmdvQ0Q8L3RleHQ+CjxyZWN0IHg9IjIzMCIgeT0iMTUwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQiIGZpbGw9IiNmZmZmZmYiLz4KPHRleHQgeD0iMjcwIiB5PSIxNjIiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wdXNoPC90ZXh0Pgo8cmVjdCB4PSI1MTAiIHk9IjE1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjZmZmZmZmIi8+Cjx0ZXh0IHg9IjU1MCIgeT0iMTYyIiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZGVwbG95PC90ZXh0Pgo8dGV4dCB4PSIxMjAiIHk9IjQ0NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0iJ0dlaXN0IE1vbm8nLCBtb25vc3BhY2UiIGxldHRlci1zcGFjaW5nPSIwLjE4ZW0iPklOVEVSVklFVyBBTkdMRTwvdGV4dD48dGV4dCB4PSIyMTIiIHk9IjQ0NCIgZmlsbD0iIzRmNWQ3NSIgZm9udC1zaXplPSI4IiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiPlRoZSBpbnRlcnZpZXcgcXVlc3Rpb24gaXMgYWx3YXlzICJob3cgZG9lcyBhIGNvbnRhaW5lciBnZXQgZnJvbSB5b3VyIGxhcHRvcCB0byBwcm9kdWN0aW9uPyIg4oCUIHRoaXMgaXMgdGhhdCBzdG9yeS48L3RleHQ+CjxsaW5lIHgxPSIxMjAiIHkxPSI1MDAiIHgyPSI4ODAiIHkyPSI1MDAiIHN0cm9rZT0icmdiYSgyNiwyNywzNSwwLjEwKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTIwIiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4xNGVtIj5MRUdFTkQ8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI1MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9InJnYmEoNDYsMTMzLDg1LDAuMDgpIiBzdHJva2U9IiMyZTg1NTUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIyNCIgeT0iNTE2IiBmaWxsPSIjNGY1ZDc1IiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSInR2Vpc3QgTW9ubycsIG1vbm9zcGFjZSIgbGV0dGVyLXNwYWNpbmc9IjAuMDZlbSI+QUNDRU5UID0gRk9DQUw8L3RleHQ+PHJlY3QgeD0iMzYwIiB5PSI1MDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFhMWIyMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzg0IiB5PSI1MTYiIGZpbGw9IiM0ZjVkNzUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IidHZWlzdCBNb25vJywgbW9ub3NwYWNlIiBsZXR0ZXItc3BhY2luZz0iMC4wNmVtIj5QQVBFUiA9IFNURVA8L3RleHQ+Cjwvc3ZnPg==");

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