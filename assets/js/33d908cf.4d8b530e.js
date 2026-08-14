"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8979],{

/***/ 94960
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_devops_16_networking_md_33d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-devops-16-networking-md-33d.json
const site_docs_courses_devops_16_networking_md_33d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/devops/16-networking","title":"Chapter 16: Container Networking","description":"Previous SRE Principles","source":"@site/docs/courses/devops/16-networking.md","sourceDirName":"courses/devops","slug":"/devops/16-networking","permalink":"/ai-engineering-journey/devops/16-networking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"id":"16-networking","slug":"/devops/16-networking","title":"Chapter 16: Container Networking","sidebar_label":"Chapter 16: Container Networking","sidebar_position":25},"sidebar":"course-devops","previous":{"title":"Chapter 15: Database DevOps","permalink":"/ai-engineering-journey/devops/15-database-devops"},"next":{"title":"Chapter 17: SRE Principles","permalink":"/ai-engineering-journey/devops/17-sre"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/devops/16-networking.md


const frontMatter = {
	id: '16-networking',
	slug: '/devops/16-networking',
	title: 'Chapter 16: Container Networking',
	sidebar_label: 'Chapter 16: Container Networking',
	sidebar_position: 25
};
const contentTitle = 'Chapter 16: Container Networking';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "16.1 Container Networking Models",
  "id": "161-container-networking-models",
  "level": 3
}, {
  "value": "16.2 CNI (Container Network Interface)",
  "id": "162-cni-container-network-interface",
  "level": 3
}, {
  "value": "16.3 CNI Plugins Compared",
  "id": "163-cni-plugins-compared",
  "level": 3
}, {
  "value": "16.4 Service Mesh",
  "id": "164-service-mesh",
  "level": 3
}, {
  "value": "16.5 Ingress Controllers",
  "id": "165-ingress-controllers",
  "level": 3
}, {
  "value": "16.6 DNS in Kubernetes",
  "id": "166-dns-in-kubernetes",
  "level": 3
}, {
  "value": "16.7 Network Policies",
  "id": "167-network-policies",
  "level": 3
}, {
  "value": "16.8 mTLS",
  "id": "168-mtls",
  "level": 3
}, {
  "value": "16.9 Egress Controls",
  "id": "169-egress-controls",
  "level": 3
}, {
  "value": "16.10 API Gateways",
  "id": "1610-api-gateways",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: NetworkPolicy Generator",
  "id": "example-1-networkpolicy-generator",
  "level": 3
}, {
  "value": "Example 2: Service Mesh Traffic Splitter",
  "id": "example-2-service-mesh-traffic-splitter",
  "level": 3
}, {
  "value": "Example 3: Network Topology Mapper",
  "id": "example-3-network-topology-mapper",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Load Balancer Configuration Validator",
  "id": "load-balancer-configuration-validator",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    summary: "summary",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "chapter-16-container-networking",
        children: "Chapter 16: Container Networking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/15-database-devops",
          children: "Database DevOps"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/devops/17-sre",
          children: "SRE Principles"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "lesson-visuals",
      "aria-label": "Visual learning resources",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.header, {
        children: [(0,jsx_runtime.jsx)(_components.span, {
          children: "VISUAL LEARNING"
        }), (0,jsx_runtime.jsx)(_components.h2, {
          children: "See it. Review it. Remember it."
        })]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/16-networking/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/16-networking/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/16-networking/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/16-networking/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/devops/16-networking/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/devops/16-networking/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain container networking models: CNI, bridge, overlay, and their implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare CNI plugins: Flannel, Calico, Weave, and Cilium"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy and configure a service mesh (Istio, Linkerd) for traffic management and security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure ingress controllers including NGINX, Traefik, HAProxy, and Envoy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement network policies, mTLS, egress controls, and API gateways"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Kubernetes DNS, service discovery, and CoreDNS configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply network security patterns to microservice architectures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container Networking Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge, overlay, host, MACVLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose based on isolation and performance needs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNI Plugins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flannel, Calico, Weave, Cilium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calico for policy; Cilium for eBPF performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Istio, Linkerd for traffic management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sidecar proxies enable mTLS without code changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress Controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NGINX, Traefik, HAProxy, Envoy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NGINX is most widely adopted; Envoy powers Istio"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual TLS for service-to-service security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service meshes implement mTLS transparently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes-native firewall rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deny-by-default when policy is applied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Egress Controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict outbound traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use NetworkPolicy egress rules and egress gateways"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Container Networking] --> B[Bridge]\n    A --> C[Overlay/VXLAN]\n    A --> D[Host]\n    A --> E[MACVLAN]\n    B & C & D & E --> F[CNI Plugins]\n    F --> G[Calico]\n    F --> H[Cilium]\n    F --> I[Flannel]\n    G & H & I --> J[Service Mesh]\n    J --> K[Istio]\n    J --> L[Linkerd]\n    A --> M[DNS/CoreDNS]\n    A --> N[Network Policies]\n    N --> O[mTLS]\n    N --> P[Egress Controls]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "161-container-networking-models",
      children: "16.1 Container Networking Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Container networking enables communication between containers on the same host and across hosts. Multiple networking models exist:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bridge Networking"
      }), " — Default Docker networking:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates a virtual bridge (docker0) on the host"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assigns IP addresses from a private subnet (172.17.0.0/16)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NAT enables outbound connectivity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containers communicate via IP or DNS names (--link)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Port mapping (-p 8080:80) exposes container ports on the host"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overlay Networking"
      }), " — Encapsulates container traffic across hosts:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses VXLAN (Virtual Extensible LAN) or similar tunneling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulates Layer 2 frames in UDP packets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables multi-host container communication without physical network changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker overlay, Flannel VXLAN, Calico IPIP, and Weave use this model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trade-off: encapsulation adds ~5-10% CPU overhead"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Networking"
      }), " — Container uses the host's network stack:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No network isolation between container and host"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No NAT overhead — full native performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ports cannot be remapped (container port = host port)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for latency-sensitive workloads (e.g., real-time services)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security consideration: container has full host network access"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MACVLAN/IPVLAN"
      }), " — Assigns MAC or IP addresses from the physical network:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containers appear as separate hosts with their own IPs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best performance (no NAT, no encapsulation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires physical network configuration (switch port allocation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MACVLAN: each container gets a unique MAC (may exceed switch MAC limits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPVLAN: containers share the host MAC, get unique IPs"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multi-Host"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (without overlay)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (encap overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MACVLAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (network team)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "162-cni-container-network-interface",
      children: "16.2 CNI (Container Network Interface)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CNI is a specification and library for configuring network interfaces in Linux containers. Kubernetes uses CNI plugins for pod networking."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CNI Specification Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ADD"
        }), " — Add container to network: allocate IP, create interface, configure routes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DEL"
        }), " — Remove container from network: clean up IP allocation, delete interface"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CHECK"
        }), " — Verify container network is correctly configured (idempotent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VERSION"
        }), " — Report CNI specification version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plugin Categories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Main plugins"
        }), " — Bridge, VLAN, MACVLAN, IPVLAN, IPvlan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPAM plugins"
        }), " — host-local (static pool), dhcp (external DHCP), whereabout (dynamic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Meta plugins"
        }), " — tuning (sysctl), portmap (port forwarding), bandwidth (traffic shaping), firewall (iptables rules)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Third-party plugins"
        }), " — Flannel, Calico, Weave, Cilium, Antrea"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CNI Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"cniVersion\": \"1.0.0\",\n  \"name\": \"mynet\",\n  \"plugins\": [\n    {\n      \"type\": \"bridge\",\n      \"bridge\": \"cni-bridge\",\n      \"ipam\": {\n        \"type\": \"host-local\",\n        \"ranges\": [\n          [{\"subnet\": \"10.244.0.0/16\"}]\n        ]\n      }\n    },\n    {\n      \"type\": \"portmap\",\n      \"capabilities\": {\"portMappings\": true}\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "163-cni-plugins-compared",
      children: "16.3 CNI Plugins Compared"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flannel"
      }), " — Simplest overlay network:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses VXLAN encapsulation (default), host-gw, or UDP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No network policy support"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simple deployment: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kubectl apply -f kube-flannel.yml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: basic connectivity, small clusters, development"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Calico"
      }), " — Full-featured CNI with advanced policy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses BGP for routing (no encapsulation in pure L3 mode)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports VXLAN and IPIP overlay modes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fine-grained network policies (Kubernetes NetworkPolicy + Calico extensions)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "eBPF mode for improved performance (replaces kube-proxy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service graph for observability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: security-conscious, production environments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weave Net"
      }), " — Mesh-based overlay:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in DNS-based service discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default encryption (NaCl cryptography)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports partial connectivity and firewall traversal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple setup but lower performance than Calico or Cilium"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: small to medium clusters requiring encryption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cilium"
      }), " — eBPF-based networking and security:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replaces kube-proxy with eBPF for high-performance service handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L3-L7 network policies (HTTP, gRPC, Kafka, DNS-aware policies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hubble for observability (flow logs, service map, metrics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transparent encryption (WireGuard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cluster mesh for multi-cluster networking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: performance-sensitive, security-conscious, advanced policy environments"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Plugin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Multi-Cluster"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flannel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Calico"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (L3-L4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (WireGuard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (eBPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (NaCl)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cilium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (L3-L7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (WireGuard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (eBPF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Cluster Mesh)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "164-service-mesh",
      children: "16.4 Service Mesh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A service mesh manages inter-service communication in a microservice architecture. It adds observability, traffic management, and security without modifying application code."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Plane"
        }), " — Sidecar proxies (Envoy) deployed alongside each service. Handle all traffic in/out of the service. Enforce routing, retries, timeouts, circuit breaking, and mTLS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Control Plane"
        }), " — Manages proxy configuration, certificate issuance, policy distribution, and telemetry collection."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Istio"
      }), " — Most feature-rich service mesh:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pilot"
        }), " — Traffic management: virtual services, destination rules, service discovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Citadel"
        }), " — Security: mTLS certificate issuance and rotation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Galley"
        }), " — Configuration validation and distribution"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses Envoy as the default proxy (sidecar injection via mutating webhook)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Istio VirtualService for traffic splitting\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: api-routes\nspec:\n  hosts:\n    - api\n  http:\n    - match:\n        - headers:\n            version:\n              exact: v2\n      route:\n        - destination:\n            host: api\n            subset: v2\n    - route:\n        - destination:\n            host: api\n            subset: v1\n          weight: 90\n        - destination:\n            host: api\n            subset: v2\n          weight: 10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linkerd"
      }), " — Lighter-weight service mesh:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rust-based proxy (linkerd-proxy) instead of Envoy — 1/10th the resource usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simpler to install and operate (one command, no complex CRDs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Features: mTLS, HTTP/gRPC load balancing, retries, timeouts, metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limited traffic management compared to Istio"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Best for: teams wanting service mesh benefits without complexity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "165-ingress-controllers",
      children: "16.5 Ingress Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ingress controllers implement the Kubernetes Ingress specification and provide HTTP routing, TLS termination, and traffic management at the cluster edge."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NGINX Ingress Controller"
      }), " — Most widely adopted:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses NGINX as the reverse proxy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path-based routing, host-based routing, TLS termination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Annotations for rate limiting, CORS, rewrite, authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High performance (NGINX C-based core)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extensive community and ecosystem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: api-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rate-limit: \"10r/s\"\n    nginx.ingress.kubernetes.io/cors-enabled: \"true\"\nspec:\n  ingressClassName: nginx\n  tls:\n    - hosts:\n        - api.example.com\n      secretName: api-tls\n  rules:\n    - host: api.example.com\n      http:\n        paths:\n          - path: /v1\n            pathType: Prefix\n            backend:\n              service:\n                name: api-v1\n                port:\n                  number: 8080\n          - path: /v2\n            pathType: Prefix\n            backend:\n              service:\n                name: api-v2\n                port:\n                  number: 8080\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Traefik"
      }), " — Dynamic, auto-discovering reverse proxy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatically detects services from Kubernetes, Docker, Consul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in dashboard and metrics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automatic HTTPS with Let's Encrypt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware for rate limiting, circuit breaking, authentication"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "HAProxy Ingress"
      }), " — High-performance ingress:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced load balancing algorithms (least connections, first, source)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Health checks, rate limiting, connection queuing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Low resource usage at high throughput"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Envoy"
      }), " — High-performance proxy:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foundation for Istio and other service meshes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be used as standalone ingress controller (Envoy Gateway project)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Feature-rich but complex to configure manually"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L7 routing, load balancing, circuit breaking, retries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "166-dns-in-kubernetes",
      children: "16.6 DNS in Kubernetes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreDNS is the default DNS service for Kubernetes. It provides service discovery within the cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS Naming Convention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "service.namespace.svc.cluster.local"
        }), " — Full DNS name"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "service.namespace"
        }), " — Within cluster"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "service"
        }), " — Within the same namespace"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CoreDNS Configuration:"
      }), "\nCoreDNS configuration is stored in a ConfigMap (", (0,jsx_runtime.jsx)(_components.code, {
        children: "coredns"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kube-system"
      }), "). Custom entries, stub domains, and upstream DNS resolvers can be configured."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "167-network-policies",
      children: "16.7 Network Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network policies enforce firewall rules for Kubernetes pods. They control ingress and egress traffic based on pod selectors, namespace selectors, and IP blocks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Default Behavior:"
      }), " By default, all pods can communicate freely. A policy applied to a pod restricts its traffic to only what the policy allows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: api-network-policy\nspec:\n  podSelector:\n    matchLabels:\n      app: api\n  policyTypes:\n    - Ingress\n    - Egress\n  ingress:\n    - from:\n        - podSelector:\n            matchLabels:\n              app: frontend\n      ports:\n        - port: 8080\n  egress:\n    - to:\n        - podSelector:\n            matchLabels:\n              app: database\n      ports:\n        - port: 5432\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Policy Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "podSelector"
        }), " — Selects pods within the same namespace"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "namespaceSelector"
        }), " — Selects entire namespaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ipBlock"
        }), " — Selects specific CIDR ranges (external IPs)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple rules are OR'd (any matching rule allows traffic)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rules within a rule are AND'd (all conditions must match)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "168-mtls",
      children: "16.8 mTLS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mutual TLS encrypts and authenticates service-to-service communication:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both client and server present certificates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Communication is encrypted in transit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identity is verified at both ends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Certificates rotate automatically (in service meshes or cert-manager)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No application code changes required with service mesh sidecars"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "169-egress-controls",
      children: "16.9 Egress Controls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Egress controls restrict outbound traffic from the cluster:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NetworkPolicy egress rules"
        }), " — Kubernetes-native egress restrictions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Egress gateway"
        }), " — Istio egress gateways for controlled external traffic through dedicated proxy instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT gateway"
        }), " — Cloud provider NAT for controlled outbound access from private subnets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proxy/Firewall"
        }), " — Explicit proxy for external access logging and control"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1610-api-gateways",
      children: "16.10 API Gateways"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API gateways provide a single entry point for external API traffic:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kong"
        }), " — Built on OpenResty/Lua. Plugin ecosystem (authentication, rate limiting, caching, logging, IP restriction)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kong Gateway"
        }), " — Kubernetes-native via Ingress Controller and Gateway API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apigee (GCP)"
        }), " — Full-featured API management with developer portal, analytics, monetization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS API Gateway"
        }), " — AWS-managed gateway with Lambda integration, caching, throttling, WAF"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Azure API Management"
        }), " — Enterprise gateway with developer portal, policy engine, versioning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-networkpolicy-generator",
      children: "Example 1: NetworkPolicy Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface NetworkRule {\n  direction: 'ingress' | 'egress';\n  targets: Array<{ type: 'pod' | 'namespace' | 'ip'; value: string }>;\n  ports: number[];\n  protocol: 'TCP' | 'UDP';\n}\n\ninterface NetworkPolicyConfig {\n  name: string;\n  namespace: string;\n  podSelector: Record<string, string>;\n  rules: NetworkRule[];\n}\n\nclass NetworkPolicyGenerator {\n  generate(config: NetworkPolicyConfig): string {\n    const ingress = config.rules.filter(r => r.direction === 'ingress');\n    const egress = config.rules.filter(r => r.direction === 'egress');\n\n    const policy: Record<string, unknown> = {\n      apiVersion: 'networking.k8s.io/v1',\n      kind: 'NetworkPolicy',\n      metadata: { name: config.name, namespace: config.namespace },\n      spec: {\n        podSelector: { matchLabels: config.podSelector },\n        policyTypes: [] as string[],\n      },\n    };\n\n    if (ingress.length > 0) {\n      (policy.spec as Record<string, unknown>).policyTypes = [...(policy.spec as Record<string, unknown>).policyTypes as string[], 'Ingress'];\n      (policy.spec as Record<string, unknown>).ingress = ingress.map(this.buildRule);\n    }\n\n    if (egress.length > 0) {\n      (policy.spec as Record<string, unknown>).policyTypes = [...(policy.spec as Record<string, unknown>).policyTypes as string[], 'Egress'];\n      (policy.spec as Record<string, unknown>).egress = egress.map(this.buildRule);\n    }\n\n    return JSON.stringify(policy, null, 2);\n  }\n\n  private buildRule(rule: NetworkRule): Record<string, unknown> {\n    const ruleObj: Record<string, unknown> = {};\n\n    if (rule.targets.length > 0) {\n      const from = rule.direction === 'ingress' ? 'from' : 'to';\n      ruleObj[from] = rule.targets.map(t => {\n        if (t.type === 'pod') return { podSelector: { matchLabels: { app: t.value } } };\n        if (t.type === 'namespace') return { namespaceSelector: { matchLabels: { name: t.value } } };\n        return { ipBlock: { cidr: t.value } };\n      });\n    }\n\n    if (rule.ports.length > 0) {\n      ruleObj.ports = rule.ports.map(p => ({ port: p, protocol: rule.protocol }));\n    }\n\n    return ruleObj;\n  }\n\n  generateDefaultDeny(namespace: string): string {\n    return JSON.stringify({\n      apiVersion: 'networking.k8s.io/v1',\n      kind: 'NetworkPolicy',\n      metadata: { name: 'default-deny-all', namespace },\n      spec: {\n        podSelector: {},\n        policyTypes: ['Ingress', 'Egress'],\n      },\n    }, null, 2);\n  }\n}\n\nconst generator = new NetworkPolicyGenerator();\nconst config: NetworkPolicyConfig = {\n  name: 'api-policy',\n  namespace: 'production',\n  podSelector: { app: 'api' },\n  rules: [\n    { direction: 'ingress', targets: [{ type: 'pod', value: 'frontend' }], ports: [8080], protocol: 'TCP' },\n    { direction: 'egress', targets: [{ type: 'pod', value: 'database' }], ports: [5432], protocol: 'TCP' },\n    { direction: 'egress', targets: [{ type: 'ip', value: '8.8.8.8/32' }], ports: [53], protocol: 'UDP' },\n  ],\n};\n\nconsole.log(generator.generate(config));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-service-mesh-traffic-splitter",
      children: "Example 2: Service Mesh Traffic Splitter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface VirtualServiceRule {\n  headers?: Record<string, string>;\n  weight: number;\n  destination: { host: string; subset: string };\n}\n\nclass ServiceMeshConfigBuilder {\n  buildTrafficSplit(name: string, host: string, rules: VirtualServiceRule[]): string {\n    const http = rules.map(rule => {\n      const route = { destination: rule.destination, weight: rule.weight };\n      if (rule.headers) {\n        return { match: [{ headers: Object.fromEntries(Object.entries(rule.headers).map(([k, v]) => [k, { exact: v }])) }], route: [route] };\n      }\n      return { route: [route] };\n    });\n\n    const vs = {\n      apiVersion: 'networking.istio.io/v1beta1',\n      kind: 'VirtualService',\n      metadata: { name },\n      spec: { hosts: [host], http },\n    };\n\n    const dr = {\n      apiVersion: 'networking.istio.io/v1beta1',\n      kind: 'DestinationRule',\n      metadata: { name: `${name}-dr` },\n      spec: {\n        host,\n        subsets: rules.map(r => ({\n          name: r.destination.subset,\n          labels: { version: r.destination.subset },\n        })),\n      },\n    };\n\n    return JSON.stringify({ virtualService: vs, destinationRule: dr }, null, 2);\n  }\n\n  buildCanary(name: string, host: string, stableSubset: string, canarySubset: string, canaryWeight: number): string {\n    return this.buildTrafficSplit(name, host, [\n      { weight: 100 - canaryWeight, destination: { host, subset: stableSubset } },\n      { headers: { 'X-Canary': 'true' }, weight: canaryWeight, destination: { host, subset: canarySubset } },\n    ]);\n  }\n}\n\nconst builder = new ServiceMeshConfigBuilder();\nconsole.log(builder.buildCanary('api-canary', 'api', 'v1', 'v2', 10));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-network-topology-mapper",
      children: "Example 3: Network Topology Mapper"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ServiceEndpoint {\n  name: string;\n  namespace: string;\n  ports: number[];\n  protocol: string;\n  ingress: boolean;\n  egress: Array<{ target: string; port: number; protocol: string }>;\n}\n\nclass NetworkTopologyMapper {\n  private services: ServiceEndpoint[] = [];\n\n  addService(svc: ServiceEndpoint): void {\n    this.services.push(svc);\n  }\n\n  buildDependencyGraph(): string {\n    let graph = '```mermaid\\nflowchart LR\\n';\n\n    for (const svc of this.services) {\n      const id = svc.name.replace(/[^a-zA-Z0-9]/g, '');\n      if (svc.ingress) {\n        graph += `    Ingress -->|\":${svc.ports[0]}\"| ${id}[${svc.name}]\\n`;\n      }\n\n      for (const egress of svc.egress) {\n        const targetId = egress.target.replace(/[^a-zA-Z0-9]/g, '');\n        graph += `    ${id} -->|\":${egress.port}\"| ${targetId}[${egress.target}]\\n`;\n      }\n    }\n\n    graph += '```\\n';\n    return graph;\n  }\n\n  buildServiceDepList(): string {\n    let report = '# Service Dependency Report\\n\\n';\n\n    for (const svc of this.services) {\n      report += `## ${svc.name}\\n`;\n      report += `- Namespace: ${svc.namespace}\\n`;\n      report += `- Ports: ${svc.ports.join(', ')}\\n`;\n      report += `- External access: ${svc.ingress ? 'Yes' : 'No (internal only)'}\\n`;\n\n      if (svc.egress.length > 0) {\n        report += '- Dependencies:\\n';\n        for (const dep of svc.egress) {\n          report += `  - ${dep.target}:${dep.port}/${dep.protocol}\\n`;\n        }\n      }\n\n      report += '\\n';\n    }\n\n    return report;\n  }\n}\n\nconst mapper = new NetworkTopologyMapper();\nmapper.addService({ name: 'frontend', namespace: 'prod', ports: [80, 443], protocol: 'TCP', ingress: true, egress: [{ target: 'api', port: 8080, protocol: 'HTTP' }] });\nmapper.addService({ name: 'api', namespace: 'prod', ports: [8080], protocol: 'TCP', ingress: false, egress: [{ target: 'database', port: 5432, protocol: 'PostgreSQL' }, { target: 'cache', port: 6379, protocol: 'Redis' }] });\nmapper.addService({ name: 'database', namespace: 'prod', ports: [5432], protocol: 'TCP', ingress: false, egress: [] });\nmapper.addService({ name: 'cache', namespace: 'prod', ports: [6379], protocol: 'TCP', ingress: false, egress: [] });\n\nconsole.log(mapper.buildServiceDepList());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default Docker networking, NAT-based, single host"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN tunneling for multi-host communication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sidecar proxies for traffic mgmt and security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS external routing controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual certificate-based service authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container Network Interface specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NetworkPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kubernetes-native firewall rules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNI Plugins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flannel(simple), Calico(policy), Cilium(eBPF)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Mesh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Istio(feature-rich), Linkerd(lightweight)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ingress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NGINX, Traefik, HAProxy, Envoy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreDNS, service.namespace.svc.cluster.local"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutual TLS with automatic cert rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NetworkPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "podSelector, ingress, egress, port rules"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP ingress routing for web apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-cloud networking via overlays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mTLS for zero-trust compliance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service mesh traffic management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancer-configuration-validator",
      children: "Load Balancer Configuration Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Network load balancer misconfigurations are a common source of outages. The following tool validates health checks, SSL settings, routing rules, and timeout configurations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface HealthCheckConfig {\n  protocol: string;\n  port: number;\n  path: string;\n  intervalSeconds: number;\n  timeoutSeconds: number;\n  healthyThreshold: number;\n  unhealthyThreshold: number;\n}\n\ninterface ListenerRule {\n  sourcePort: number;\n  targetPort: number;\n  protocol: string;\n  sslEnabled: boolean;\n  sslCertArn?: string;\n}\n\ninterface LBConfig {\n  name: string;\n  listeners: ListenerRule[];\n  healthChecks: HealthCheckConfig[];\n  backendPool: string[];\n  algorithm: 'round-robin' | 'least-connections' | 'ip-hash';\n}\n\ninterface ValidationReport {\n  valid: boolean;\n  errors: string[];\n  warnings: string[];\n}\n\nclass LoadBalancerValidator {\n  validate(config: LBConfig): ValidationReport {\n    const errors: string[] = [];\n    const warnings: string[] = [];\n\n    for (const listener of config.listeners) {\n      if (listener.sslEnabled && !listener.sslCertArn) {\n        errors.push(`Listener ${listener.sourcePort}: SSL enabled but no certificate ARN specified`);\n      }\n      if (listener.sourcePort === listener.targetPort && listener.protocol === 'TCP') {\n        warnings.push(`Listener ${listener.sourcePort}: TCP passthrough, no health-check routing`);\n      }\n    }\n\n    for (const hc of config.healthChecks) {\n      if (hc.intervalSeconds < hc.timeoutSeconds) {\n        errors.push(`Health check interval (${hc.intervalSeconds}s) must be >= timeout (${hc.timeoutSeconds}s)`);\n      }\n      if (hc.healthyThreshold < 2) warnings.push(`Health check healthy threshold too low (${hc.healthyThreshold})`);\n      if (hc.unhealthyThreshold > 10) warnings.push(`Health check unhealthy threshold too high (${hc.unhealthyThreshold})`);\n    }\n\n    if (config.backendPool.length === 0) {\n      errors.push('Backend pool is empty — no targets to route traffic to');\n    }\n    if (config.backendPool.length === 1) {\n      warnings.push('Only one backend target — no redundancy');\n    }\n\n    return { valid: errors.length === 0, errors, warnings };\n  }\n\n  autoFix(config: LBConfig): LBConfig {\n    const fixed = JSON.parse(JSON.stringify(config)) as LBConfig;\n    for (const listener of fixed.listeners) {\n      if (listener.sslEnabled && !listener.sslCertArn) {\n        listener.sslCertArn = 'arn:aws:acm:us-east-1:123456789012:certificate/pending';\n      }\n    }\n    for (const hc of fixed.healthChecks) {\n      if (hc.intervalSeconds < hc.timeoutSeconds) hc.intervalSeconds = hc.timeoutSeconds + 5;\n      if (hc.healthyThreshold < 2) hc.healthyThreshold = 2;\n    }\n    return fixed;\n  }\n}\n\nconst config: LBConfig = {\n  name: 'web-lb',\n  listeners: [{ sourcePort: 443, targetPort: 8080, protocol: 'HTTPS', sslEnabled: true, sslCertArn: '' }],\n  healthChecks: [{ protocol: 'HTTP', port: 8080, path: '/health', intervalSeconds: 10, timeoutSeconds: 15, healthyThreshold: 1, unhealthyThreshold: 15 }],\n  backendPool: ['web-1', 'web-2'],\n  algorithm: 'round-robin',\n};\n\nconst validator = new LoadBalancerValidator();\nconsole.log('Validation:', JSON.stringify(validator.validate(config), null, 2));\nconst fixed = validator.autoFix(config);\nconsole.log('Auto-fixed SSL cert:', fixed.listeners[0].sslCertArn);\nconsole.log('Auto-fixed interval:', fixed.healthChecks[0].intervalSeconds);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What this demonstrates:"
      }), " Automated load balancer validation catches SSL, health check, and redundancy misconfigurations before they cause production outages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Question 1: Which CNI plugin uses eBPF?"
      }), "**A)** Flannel", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Calico", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Cilium", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Weave", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: C)** Cilium</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Question 2: How does a service mesh proxy intercept traffic?"
        }), "**A)** DNS redirection", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Sidecar proxy intercepts all in/out traffic", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Application code modification", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Virtual IP addresses", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Sidecar proxy intercepts all in/out traffic</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
          children: [(0,jsx_runtime.jsx)(_components.summary, {
            children: "Question 3: What does mTLS provide beyond TLS?"
          }), "**A)** Faster encryption", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Mutual client and server authentication", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Lower latency", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Compression", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Mutual client and server authentication</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Question 4: What is the default pod communication behavior in Kubernetes?"
            }), "**A)** Deny all", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** Allow all", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** Only same namespace", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Only specific ports", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** Allow all</details>\n", (0,jsx_runtime.jsxs)(_components.details, {
              children: [(0,jsx_runtime.jsx)(_components.summary, {
                children: "Question 5: Which ingress controller is most widely adopted?"
              }), "**A)** Traefik", (0,jsx_runtime.jsx)(_components.br, {}), "**B)** NGINX", (0,jsx_runtime.jsx)(_components.br, {}), "**C)** HAProxy", (0,jsx_runtime.jsx)(_components.br, {}), "**D)** Envoy", (0,jsx_runtime.jsx)(_components.br, {}), (0,jsx_runtime.jsx)(_components.br, {}), "**Answer: B)** NGINX</details>\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "// networking\n// cicd-infrastructure-automation implementation"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'networking', data: { topic: 'cicd-infrastructure-automation' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "summary",
                children: "Summary"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Container networking spans multiple models and implementation options with trade-offs between isolation, performance, and complexity. CNI plugins (Flannel, Calico, Cilium, Weave) provide standardized network configuration for Kubernetes with varying levels of policy support and performance. Service meshes (Istio, Linkerd) add traffic management, mTLS security, and observability to inter-service communication through sidecar proxies. Ingress controllers (NGINX, Traefik, HAProxy, Envoy) manage external traffic routing into the cluster. Network policies enforce Kubernetes-native firewall rules for least-privilege pod communication. The choice of networking technologies depends on security requirements, performance needs, and operational maturity."
              }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exercises",
                children: "Exercises"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "review-questions",
                children: "Review Questions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does VXLAN overlay networking enable multi-host container communication?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Compare Calico and Flannel: what capabilities does Calico provide beyond Flannel?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does a service mesh sidecar proxy intercept traffic without application modification?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "What is the difference between an ingress controller and a service mesh?"
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "How does mTLS establish trust between two services without a pre-shared secret?"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "application-problems",
                children: "Application Problems"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Deploy a Kubernetes cluster with Calico as the CNI plugin. Create NetworkPolicies that allow web-tier pods to access API-tier pods on port 8080, but deny all other traffic to the API tier. Verify connectivity with test pods."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Install Istio on a Kubernetes cluster. Enable automatic sidecar injection. Deploy a microservice application and enable mTLS. Verify encrypted communication using tcpdump or Hubble."
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Configure an NGINX ingress controller with TLS termination. Route traffic to two different services based on host headers (api.example.com -> api-service, app.example.com -> web-service)."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "challenge-problem",
                children: "Challenge Problem"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Design a complete network architecture for a multi-tenant Kubernetes platform hosting 50 microservices for 10 teams. Requirements: each team operates in isolated namespaces with strict egress controls (only approved external endpoints), inter-service communication uses mTLS, traffic shaping enables 10% canary deployments, network policies enforce least-privilege communication, and ingress is handled through a shared gateway with per-service TLS. Select and justify: CNI plugin, service mesh, ingress controller, certificate management approach, and DNS strategy. Provide the network topology diagram and key configuration examples."
              }), "\n"]
            })]
          })]
        })]
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