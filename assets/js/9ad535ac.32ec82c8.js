"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8952],{

/***/ 65421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_06_cloud_networking_md_9ad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-06-cloud-networking-md-9ad.json
const site_docs_courses_cloud_computing_06_cloud_networking_md_9ad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/06-cloud-networking","title":"Chapter 6: Cloud Networking","description":"Previous Cloud Database Services | Next Cloud Security","source":"@site/docs/courses/cloud-computing/06-cloud-networking.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/06-cloud-networking","permalink":"/ai-engineering-journey/cloud-computing/06-cloud-networking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-cloud-networking","slug":"/cloud-computing/06-cloud-networking","title":"Chapter 6: Cloud Networking","sidebar_label":"Chapter 6: Cloud Networking","sidebar_position":6},"sidebar":"course-cloud-computing","previous":{"title":"Chapter 5: Cloud Database Services","permalink":"/ai-engineering-journey/cloud-computing/05-cloud-database"},"next":{"title":"Chapter 7: Cloud Security","permalink":"/ai-engineering-journey/cloud-computing/07-cloud-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/06-cloud-networking.md


const frontMatter = {
	id: '06-cloud-networking',
	slug: '/cloud-computing/06-cloud-networking',
	title: 'Chapter 6: Cloud Networking',
	sidebar_label: 'Chapter 6: Cloud Networking',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Cloud Networking';

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
  "value": "6.1 VPC Architecture",
  "id": "61-vpc-architecture",
  "level": 3
}, {
  "value": "6.2 Security Groups vs Network ACLs",
  "id": "62-security-groups-vs-network-acls",
  "level": 3
}, {
  "value": "6.3 Load Balancers",
  "id": "63-load-balancers",
  "level": 3
}, {
  "value": "6.4 Hybrid Connectivity",
  "id": "64-hybrid-connectivity",
  "level": 3
}, {
  "value": "6.5 DNS and Route 53",
  "id": "65-dns-and-route-53",
  "level": 3
}, {
  "value": "6.6 VPC Peering and Transit Gateway",
  "id": "66-vpc-peering-and-transit-gateway",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 6.1: VPC with Public and Private Subnets",
  "id": "example-61-vpc-with-public-and-private-subnets",
  "level": 3
}, {
  "value": "Example 6.2: TypeScript Network Architecture Validator",
  "id": "example-62-typescript-network-architecture-validator",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "TypeScript: CIDR Calculator",
  "id": "typescript-cidr-calculator",
  "level": 3
}, {
  "value": "TypeScript: VPC Subnet &amp; NAT Gateway Calculator",
  "id": "typescript-vpc-subnet--nat-gateway-calculator",
  "level": 3
}, {
  "value": "TypeScript: Traffic Flow Monitor",
  "id": "typescript-traffic-flow-monitor",
  "level": 3
}, {
  "value": "TypeScript: Subnet Calculator &amp; Peering Validator",
  "id": "typescript-subnet-calculator--peering-validator",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-6-cloud-networking",
        children: "Chapter 6: Cloud Networking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/05-cloud-database",
          children: "Chapter 5: Cloud Database Services"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/07-cloud-security",
          children: "Chapter 7: Cloud Security"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/cloud-computing/06-cloud-networking/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/06-cloud-networking/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/06-cloud-networking/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/06-cloud-networking/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/06-cloud-networking/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/06-cloud-networking/visual-explanation.png",
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
        children: "Design Virtual Private Cloud (VPC) architectures with subnets, route tables, and gateways."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure security groups and network ACLs for traffic filtering."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement load balancers to distribute traffic across multiple targets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Establish private connectivity between on-premises and cloud networks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design global network architectures using Direct Connect, VPN, and peering."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure DNS resolution and routing policies with Route 53."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply traffic shaping and bandwidth management strategies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshoot network connectivity using cloud-native diagnostic tools."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VPC Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual network in the cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation through CIDR + subnets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful instance-level firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow rules only, evaluated as a whole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network ACLs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless subnet-level firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow/deny rules, evaluated in order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB, NLB ? distribute traffic across targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks + auto-scaling integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted tunnels via public internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple site-to-site connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated private bandwidth to cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent latency, higher capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route 53 ? global DNS resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing policies: latency, geo, weighted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Peering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect VPCs across accounts/regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-transitive, no overlapping CIDRs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Cloud Networking] --> B[VPC and Subnets]\nA --> C[Security: SGs + NACLs]\nA --> D[Load Balancers]\nA --> E[Hybrid Connectivity]\nB --> F[Route Tables + IGW + NAT]\nC --> G[Tiered Security Architecture]\nD --> H[ALB / NLB / GLB]\nE --> I[VPN / Direct Connect / Peering]\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-vpc-architecture",
      children: "6.1 VPC Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Virtual Private Cloud (VPC) is a logically isolated section of the cloud where you launch resources."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CIDR Notation:"
      }), " Defines the IP address range for the VPC (e.g., 10.0.0.0/16 = 65,536 addresses). Choose CIDR blocks that don't overlap with on-premises networks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"VPC - 10.0.0.0/16\"\nsubgraph \"Public Subnet A - 10.0.1.0/24\"\nWEB1[Web Server 1]\nWEB2[Web Server 2]\nALB[Application Load Balancer]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    subgraph \"Private Subnet A - 10.0.2.0/24\"\n        APP1[App Server 1]\n        APP2[App Server 2]\n    end\n    \n    subgraph \"DB Subnet A - 10.0.3.0/24\"\n        DB1[RDS Primary]\n        DB2[RDS Standby]\n    end\n    \n    IGW[Internet Gateway]\n    NAT[NAT Gateway]\n    \n    IGW --> ALB\n    APP1 --> NAT\n    APP2 --> NAT\n    NAT --> IGW\nend\n\nINTERNET[Internet] --> IGW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key VPC Components:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Internet Gateway (IGW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows inbound/outbound internet access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NAT Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows private subnets to reach internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route Table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls traffic between subnets and gateways"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-subnet association"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Peering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connects VPCs privately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct, non-transitive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transit Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub for connecting multiple VPCs/on-prem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Central routing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-security-groups-vs-network-acls",
      children: "6.2 Security Groups vs Network ACLs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Network Perimeter\"\nSUBNET[Subnet Boundary]\nACL[Network ACL - Stateless]\nSG[Security Group - Stateful]\nINSTANCE[EC2 Instance]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    TRAFFIC[Incoming Traffic] --> ACL\n    ACL -- \"Allow/Deny rules<br/>Evaluated by number\" --> SG\n    SG -- \"Allow rules only<br/>Evaluated as a whole\" --> INSTANCE\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Group"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network ACL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance-level (ENI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful (return traffic auto-allowed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateless (must allow both directions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow and Deny"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All rules evaluated together"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rules evaluated in number order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deny all inbound, allow all outbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow all inbound and outbound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance-level micro-segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet-level guard rails"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface SecurityGroupRule {\nprotocol: \"tcp\" | \"udp\" | \"icmp\";\nfromPort: number;\ntoPort: number;\nsource: string;\ndescription: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface SecurityGroup {\ngroupName: string;\ndescription: string;\nvpcId: string;\ningressRules: SecurityGroupRule[];\negressRules: SecurityGroupRule[];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "function createWebSecurityGroup(vpcId: string): SecurityGroup {\nreturn {\ngroupName: \"web-sg\",\ndescription: \"Web tier security group\",\nvpcId: vpcId,\ningressRules: [\n{\nprotocol: \"tcp\",\nfromPort: 80,\ntoPort: 80,\nsource: \"0.0.0.0/0\",\ndescription: \"HTTP from anywhere\",\n},\n{\nprotocol: \"tcp\",\nfromPort: 443,\ntoPort: 443,\nsource: \"0.0.0.0/0\",\ndescription: \"HTTPS from anywhere\",\n},\n{\nprotocol: \"tcp\",\nfromPort: 22,\ntoPort: 22,\nsource: \"10.0.0.0/8\",\ndescription: \"SSH from internal network\",\n},\n],\negressRules: [\n{\nprotocol: \"tcp\",\nfromPort: 443,\ntoPort: 443,\nsource: \"0.0.0.0/0\",\ndescription: \"Allow outbound HTTPS\",\n},\n],\n};\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "function createAppSecurityGroup(vpcId: string): SecurityGroup {\nreturn {\ngroupName: \"app-sg\",\ndescription: \"Application tier ? only accessible from web tier\",\nvpcId: vpcId,\ningressRules: [\n{\nprotocol: \"tcp\",\nfromPort: 3000,\ntoPort: 3000,\nsource: \"sg-web-sg\", // Reference to web SG\ndescription: \"App traffic from web tier only\",\n},\n],\negressRules: [],\n};\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-load-balancers",
      children: "6.3 Load Balancers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud load balancers distribute traffic across multiple targets (EC2 instances, Lambda, IP addresses)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Types of Load Balancers (AWS):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALB (Application)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, HTTPS, gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web apps, microservices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLB (Network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP, UDP, TLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput, static IP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GLB (Gateway)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual appliances, firewall"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancing Algorithms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Round Robin:"
        }), " Default. Distributes evenly across targets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Least Outstanding Requests:"
        }), " Sends to targets with fewest pending requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weighted:"
        }), " Routes based on target weights (canary deployments)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nsequenceDiagram\nparticipant Client as Client\nparticipant ALB as ALB\nparticipant TG1 as Target Group 1 v1\nparticipant TG2 as Target Group 2 v2 (Canary)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client->>ALB: HTTP Request\nALB->>ALB: Evaluate listener rules\n\nalt 90% Traffic\n    ALB->>TG1: Forward to v1\n    TG1-->>ALB: Response\nelse 10% Traffic\n    ALB->>TG2: Forward to v2 (canary)\n    TG2-->>ALB: Response\nend\n\nALB-->>Client: HTTP Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-hybrid-connectivity",
      children: "6.4 Hybrid Connectivity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN vs Direct Connect:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Site-to-Site VPN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direct Connect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Over public internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated private line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bandwidth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to 1.25 Gbps per tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 Mbps to 100 Gbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (internet dependent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent, low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPSec encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private (can add encryption)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weeks to months"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (per hour + data out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (port hours + data out)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No SLA on VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.99% availability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"On-Premises\"\nDC[Data Center]\nCGW[Customer Gateway]\nROUTER[Router]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"Cloud (AWS)\"\n    VGW[Virtual Private Gateway]\n    VPC[VPC]\nend\n\nsubgraph \"VPN Connection\"\n    T1[Tunnel 1 - Primary]\n    T2[Tunnel 2 - Secondary]\nend\n\nDC --> ROUTER\nROUTER --> CGW\nCGW --> T1\nCGW --> T2\nT1 --> VGW\nT2 --> VGW\nVGW --> VPC\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-dns-and-route-53",
      children: "6.5 DNS and Route 53"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon Route 53"
      }), " provides DNS resolution, domain registration, and health checking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Routing Policies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route to a single resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic A record"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route to multiple resources with weights"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canary deployments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route to lowest-latency region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Geolocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route based on user location"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content restrictions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route to primary, fail to secondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disaster recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return multiple healthy records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple load balancing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DNS Resolution Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nsequenceDiagram\nparticipant User as User Browser\nparticipant Recursive as Recursive Resolver\nparticipant Root as Root DNS\nparticipant TLD as TLD (.com)\nparticipant Route53 as Route 53 (example.com)\nparticipant ALB as ALB IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User->>Recursive: example.com?\nRecursive->>Root: Where is .com?\nRoot-->>Recursive: Go to .com TLD servers\nRecursive->>TLD: Where is example.com?\nTLD-->>Recursive: Go to ns-xxx.awsdns-xx.com\nRecursive->>Route53: example.com?\nRoute53-->>Recursive: ALB IP address (latency-based)\nRecursive->>ALB: HTTP request\nALB-->>User: HTTP response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-vpc-peering-and-transit-gateway",
      children: "6.6 VPC Peering and Transit Gateway"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC Peering:"
      }), " Direct network connection between two VPCs. Non-transitive ? if VPC A peers with B and B peers with C, A cannot reach C through B."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transit Gateway:"
      }), " A hub that connects multiple VPCs and on-premises networks through a central router."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Transit Gateway Hub\"\nTG[Transit Gateway]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"VPC A - Production\"\n    A1[App]\nend\n\nsubgraph \"VPC B - Staging\"\n    B1[App]\nend\n\nsubgraph \"VPC C - Shared Services\"\n    C1[Logging]\n    C2[Monitoring]\n    C3[AD]\nend\n\nsubgraph \"On-Premises\"\n    DC[Data Center]\nend\n\nA1 --> TG\nB1 --> TG\nC1 --> TG\nC2 --> TG\nC3 --> TG\nDC --> TG\n\nTG --> TG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-61-vpc-with-public-and-private-subnets",
      children: "Example 6.1: VPC with Public and Private Subnets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\bash\naws ec2 create-vpc --cidr-block 10.0.0.0/16\naws ec2 create-subnet --vpc-id vpc-xxx --cidr-block 10.0.1.0/24\naws ec2 create-internet-gateway\naws ec2 attach-internet-gateway --vpc-id vpc-xxx --internet-gateway-id igw-xxx\naws ec2 create-route-table --vpc-id vpc-xxx\naws ec2 create-route --route-table-id rtb-xxx --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxx\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-62-typescript-network-architecture-validator",
      children: "Example 6.2: TypeScript Network Architecture Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface SubnetConfig {\nname: string;\ncidr: string;\navailabilityZone: string;\nisPublic: boolean;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface VPCPeerConfig {\nsourceVpc: string;\ndestinationVpc: string;\nsourceCidr: string;\ndestCidr: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class NetworkArchitect {\nprivate subnets: SubnetConfig[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addSubnet(config: SubnetConfig): void {\nif (this.cidrOverlaps(config.cidr)) {\nthrow new Error(\"CIDR overlaps with existing subnet: \" + config.cidr);\n}\nthis.subnets.push(config);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private cidrOverlaps(cidr: string): boolean {\nreturn this.subnets.some((s) => s.cidr === cidr);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "validatePeering(config: VPCPeerConfig): string[] {\nconst issues: string[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "if (config.sourceCidr === config.destCidr) {\n  issues.push(\"VPCs cannot peer with overlapping CIDR blocks\");\n}\n\nreturn issues;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "generateRouteTable(): Record<string, string> {\nconst routes: Record<string, string> = {};\nfor (const subnet of this.subnets) {\nroutes[subnet.name] = subnet.isPublic ? \"igw-xxx\" : \"nat-xxx\";\n}\nreturn routes;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "generateNatGateway(count: number): string[] {\nconst azs = [...new Set(this.subnets.map((s) => s.availabilityZone))];\nreturn Array.from({ length: Math.min(count, azs.length) }, (_, i) =>\n\"nat-\" + azs[i]\n);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const architect = new NetworkArchitect();\narchitect.addSubnet({\nname: \"web\",\ncidr: \"10.0.1.0/24\",\navailabilityZone: \"us-east-1a\",\nisPublic: true,\n});\narchitect.addSubnet({\nname: \"app\",\ncidr: \"10.0.2.0/24\",\navailabilityZone: \"us-east-1a\",\nisPublic: false,\n});\narchitect.addSubnet({\nname: \"db\",\ncidr: \"10.0.3.0/24\",\navailabilityZone: \"us-east-1b\",\nisPublic: false,\n});"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.log(\"Route table:\", architect.generateRouteTable());\nconsole.log(\"NAT Gateways:\", architect.generateNatGateway(2));\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A well-designed VPC with tiered subnets, stateful security groups, and stateless NACLs provides defense-in-depth for cloud workloads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use VPC endpoints (Gateway and Interface) to privately access AWS services like S3 and DynamoDB without traversing the public internet ? eliminates the need for NAT gateways for service access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " VPC Peering is non-transitive. If you need hub-and-spoke routing between multiple VPCs and on-premises, use Transit Gateway. Peering alone cannot route through intermediate VPCs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual private cloud network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR-isolated segment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All cloud resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance-level stateful firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow rules, auto-return traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance micro-segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NACL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet-level stateless firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbered allow/deny rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet guard rails"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ALB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7 application load balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP/HTTPS aware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web traffic distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L4 network load balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCP/UDP, static IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted tunnel over internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick setup, variable latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch office connectivity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated private line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud DNS service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global routing policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VPC Design"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CIDR, subnets, route tables, IGW, NAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan CIDR to avoid overlaps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Groups (stateful), NACLs (stateless)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SG allow only, NACL allow+deny"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Load Balancing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALB (L7), NLB (L4), GLB (L3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks are mandatory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN, Direct Connect, Transit Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DX for prod, VPN for backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route 53 routing policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency-based for global apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Peering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Peering, Transit Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TG for hub-and-spoke"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Enterprise"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPC Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-account strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Environment separation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tiered architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD security scanning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Micro-segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero trust networking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blue/green deployments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High availability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VPN/DX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build pipeline connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted data in transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data center integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transit Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hub-and-spoke"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared services access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-account networking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the key difference between a Security Group and a Network ACL?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SGs are cheaper than NACLs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) SGs are stateful and allow-only; NACLs are stateless with allow/deny"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) SGs apply to subnets; NACLs apply to instances"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) SGs are stateful and allow-only; NACLs are stateless with allow/deny.** Security Groups automatically allow return traffic; NACLs require explicit rules for both directions. SGs support only allow rules; NACLs support both allow and deny with numbered evaluation.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which AWS load balancer type operates at Layer 4 (TCP/UDP)?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Application Load Balancer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Network Load Balancer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Gateway Load Balancer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Classic Load Balancer"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Network Load Balancer.** NLB operates at the transport layer (L4) and is designed for high-throughput TCP/UDP traffic requiring static IP addresses.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why might you choose Direct Connect over Site-to-Site VPN?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Direct Connect is cheaper"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Direct Connect provides consistent low latency and higher bandwidth"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Direct Connect is easier to set up"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) VPN does not encrypt traffic"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Direct Connect provides consistent low latency and higher bandwidth.** Direct Connect uses a dedicated private line, offering consistent performance from 50 Mbps to 100 Gbps. VPN uses the public internet with variable performance and lower bandwidth limits.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the limitation of VPC Peering?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It requires a VPN connection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It is non-transitive ? traffic cannot route through an intermediate VPC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It only works within the same region"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It only works between accounts in the same organization"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) It is non-transitive ? traffic cannot route through an intermediate VPC.** If VPC A is peered with B and B with C, A cannot reach C through B. For hub-and-spoke routing, use Transit Gateway.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which Route 53 routing policy is best for distributing traffic globally to the lowest-latency region?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Simple routing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Weighted routing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Latency-based routing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Geolocation routing"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Latency-based routing.** Latency-based routing directs traffic to the region that provides the lowest latency for the user. Geolocation routing routes based on the user's physical location, which is not the same as latency.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cidr-calculator",
      children: "TypeScript: CIDR Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function cidrRange(cidr: string): { network: string; broadcast: string; count: number } {\n  const [base, bits] = cidr.split(\"/\");\n  const mask = ~(2 ** (32 - parseInt(bits)) - 1) >>> 0;\n  const ip = base.split(\".\").reduce((acc, oct) => (acc << 8) + parseInt(oct), 0) >>> 0;\n  const network = ip & mask;\n  const count = 2 ** (32 - parseInt(bits));\n  const broadcast = network | (count - 1);\n  const toIp = (n: number) => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(\".\");\n  return { network: toIp(network), broadcast: toIp(broadcast), count };\n}\n\nfunction availableSubnets(vpcCidr: string, subnetSize: number): string[] {\n  const { network, count } = cidrRange(vpcCidr);\n  const ips = network.split(\".\").reduce((acc, oct) => (acc << 8) + parseInt(oct), 0) >>> 0;\n  const subnetsPerVpc = count / subnetSize;\n  return Array.from({ length: subnetsPerVpc }, (_, i) => {\n    const start = ips + i * subnetSize;\n    const bits = 32 - Math.log2(subnetSize);\n    return `${[(start >>> 24) & 255, (start >>> 16) & 255, (start >>> 8) & 255, start & 255].join(\".\")}/${bits}`;\n  });\n}\n// console.log(availableSubnets(\"10.0.0.0/16\", 256)); // 256 /24 subnets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-vpc-subnet--nat-gateway-calculator",
      children: "TypeScript: VPC Subnet & NAT Gateway Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SubnetPlan {\n  cidr: string;\n  az: string;\n  type: \"public\" | \"private\" | \"database\";\n  availableIPs: number;\n  natGatewayRequired: boolean;\n  natGatewayMonthlyCost: number;\n}\n\nclass VPCDesigner {\n  private vpcCIDR: string;\n  private azs: string[];\n\n  constructor(vpcCIDR: string, azs: string[]) {\n    this.vpcCIDR = vpcCIDR;\n    this.azs = azs;\n  }\n\n  private cidrToMask(cidr: string): number { return parseInt(cidr.split(\"/\")[1]); }\n\n  private maskToIPs(mask: number): number { return Math.pow(2, 32 - mask) - 5; }\n\n  private generateSubnetCIDR(baseCIDR: string, index: number, newMask: number): string {\n    const baseMask = this.cidrToMask(baseCIDR);\n    const baseIP = 0;\n    const blockSize = Math.pow(2, 32 - newMask);\n    const baseBlock = Math.pow(2, 32 - baseMask);\n    const offset = index * blockSize;\n    const octets = [\n      (baseIP + (offset >> 24)) & 255,\n      (baseIP + (offset >> 16)) & 255,\n      (baseIP + (offset >> 8)) & 255,\n      (baseIP + offset) & 255,\n    ];\n    return `${octets.join(\".\")}/${newMask}`;\n  }\n\n  designSubnets(publicPerAZ: number, privatePerAZ: number, subnetMask: number): SubnetPlan[] {\n    const plans: SubnetPlan[] = [];\n    let index = 0;\n\n    for (const az of this.azs) {\n      for (let p = 0; p < publicPerAZ; p++) {\n        plans.push({\n          cidr: this.generateSubnetCIDR(this.vpcCIDR, index++, subnetMask),\n          az, type: \"public\",\n          availableIPs: this.maskToIPs(subnetMask),\n          natGatewayRequired: false,\n          natGatewayMonthlyCost: 0,\n        });\n      }\n      for (let p = 0; p < privatePerAZ; p++) {\n        plans.push({\n          cidr: this.generateSubnetCIDR(this.vpcCIDR, index++, subnetMask),\n          az, type: \"private\",\n          availableIPs: this.maskToIPs(subnetMask),\n          natGatewayRequired: true,\n          natGatewayMonthlyCost: 32.40,\n        });\n      }\n    }\n    return plans;\n  }\n\n  calculateMonthlyNATCost(subnets: SubnetPlan[]): number {\n    const uniqueAZs = new Set(subnets.filter((s) => s.natGatewayRequired).map((s) => s.az));\n    return uniqueAZs.size * 32.40 + uniqueAZs.size * 0.045 * 730;\n  }\n\n  summarize(subnets: SubnetPlan[]): { totalIPs: number; publicSubnets: number; privateSubnets: number; natCost: number } {\n    return {\n      totalIPs: subnets.reduce((s, n) => s + n.availableIPs, 0),\n      publicSubnets: subnets.filter((s) => s.type === \"public\").length,\n      privateSubnets: subnets.filter((s) => s.type === \"private\").length,\n      natCost: this.calculateMonthlyNATCost(subnets),\n    };\n  }\n}\n\nconst designer = new VPCDesigner(\"10.0.0.0/16\", [\"us-east-1a\", \"us-east-1b\", \"us-east-1c\"]);\nconst subnets = designer.designSubnets(1, 2, 24);\nconsole.log(\"VPC design:\", JSON.stringify(designer.summarize(subnets), null, 2));\nconsole.log(\"Subnet plan:\", subnets.map((s) => `${s.cidr} (${s.az}, ${s.type})`).join(\", \"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-traffic-flow-monitor",
      children: "TypeScript: Traffic Flow Monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface FlowRecord {\n  sourceIP: string;\n  destIP: string;\n  sourcePort: number;\n  destPort: number;\n  protocol: \"TCP\" | \"UDP\";\n  bytes: number;\n  packets: number;\n  timestamp: number;\n  action: \"allow\" | \"deny\";\n}\n\nclass TrafficFlowMonitor {\n  private flows: FlowRecord[] = [];\n  private alertThresholds = { deniedPercent: 20, bandwidthPerSecond: 1e9 };\n\n  recordFlow(flow: FlowRecord): void {\n    this.flows.push(flow);\n    this.checkAlerts();\n  }\n\n  private checkAlerts(): void {\n    const window = this.flows.filter((f) => Date.now() - f.timestamp < 60000);\n    const denied = window.filter((f) => f.action === \"deny\").length;\n    const deniedPercent = window.length > 0 ? (denied / window.length) * 100 : 0;\n    const bandwidth = window.reduce((s, f) => s + f.bytes, 0) / 60;\n\n    if (deniedPercent > this.alertThresholds.deniedPercent) {\n      console.log(`ALERT: ${deniedPercent.toFixed(1)}% traffic denied (threshold: ${this.alertThresholds.deniedPercent}%)`);\n    }\n    if (bandwidth > this.alertThresholds.bandwidthPerSecond) {\n      console.log(`ALERT: Bandwidth ${(bandwidth / 1e9).toFixed(2)} Gbps exceeds threshold`);\n    }\n  }\n\n  getTopTalkers(limit: number = 5): { ip: string; bytes: number }[] {\n    const aggregated: Record<string, number> = {};\n    this.flows.forEach((f) => { aggregated[f.sourceIP] = (aggregated[f.sourceIP] || 0) + f.bytes; });\n    return Object.entries(aggregated)\n      .map(([ip, bytes]) => ({ ip, bytes }))\n      .sort((a, b) => b.bytes - a.bytes)\n      .slice(0, limit);\n  }\n}\n\nconst monitor = new TrafficFlowMonitor();\nfor (let i = 0; i < 100; i++) {\n  monitor.recordFlow({\n    sourceIP: `10.0.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,\n    destIP: \"10.0.1.100\", sourcePort: 30000 + i, destPort: 443,\n    protocol: \"TCP\", bytes: Math.random() * 10000, packets: Math.ceil(Math.random() * 20),\n    timestamp: Date.now() - Math.floor(Math.random() * 30000),\n    action: Math.random() > 0.85 ? \"deny\" : \"allow\",\n  });\n}\nconsole.log(\"Top talkers:\", JSON.stringify(monitor.getTopTalkers(), null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-subnet-calculator--peering-validator",
      children: "TypeScript: Subnet Calculator & Peering Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class SubnetCalculator {\n  calculate(cidr: string, subnetSize: number): { totalIPs: number; usableIPs: number; subnetMask: string; maxSubnets: number } {\n    const maskBits = 32 - Math.log2(subnetSize);\n    const [, prefix] = cidr.split(\"/\");\n    const totalIPs = Math.pow(2, 32 - parseInt(prefix));\n    const usable = Math.max(0, subnetSize - 5); // AWS reserves 5 IPs per subnet\n    const maxSubnets = Math.floor(totalIPs / subnetSize);\n    return { totalIPs, usableIPs: usable, subnetMask: `${Math.ceil(maskBits)}`, maxSubnets };\n  }\n}\n\nclass PeeringValidator {\n  validate(peerings: { vpcId: string; cidr: string; peerVpcId: string; peerCidr: string }[]): { valid: boolean; overlaps: { vpc1: string; vpc2: string; overlappingCIDR: string }[] } {\n    const overlaps: { vpc1: string; vpc2: string; overlappingCIDR: string }[] = [];\n    for (let i = 0; i < peerings.length; i++) {\n      for (let j = i + 1; j < peerings.length; j++) {\n        const [a1, b1] = peerings[i].cidr.split(\"/\").map(Number);\n        const [a2, b2] = peerings[j].cidr.split(\"/\").map(Number);\n        const minBits = Math.min(b1, b2);\n        const mask1 = a1 >>> (32 - minBits);\n        const mask2 = a2 >>> (32 - minBits);\n        if (mask1 === mask2) {\n          overlaps.push({ vpc1: peerings[i].vpcId, vpc2: peerings[j].vpcId, overlappingCIDR: `${Math.min(b1, b2)}-bit overlap` });\n        }\n      }\n    }\n    return { valid: overlaps.length === 0, overlaps };\n  }\n}\n\nconst sc = new SubnetCalculator();\nconsole.log(\"Subnet (/20 ? /24):\", JSON.stringify(sc.calculate(\"10.0.0.0/20\", 256)));\n\nconst pv = new PeeringValidator();\nconst result = pv.validate([\n  { vpcId: \"vpc-1\", cidr: \"10.0.0.0/16\", peerVpcId: \"vpc-2\", peerCidr: \"10.0.0.0/24\" },\n  { vpcId: \"vpc-3\", cidr: \"10.1.0.0/16\", peerVpcId: \"vpc-4\", peerCidr: \"10.1.0.0/24\" },\n]);\nconsole.log(\"Overlap check:\", result.overlaps.length > 0 ? `Overlap detected: ${result.overlaps[0].vpc1} ? ${result.overlaps[0].vpc2}` : \"No overlaps\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cloud networking\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cloud networking', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// cloud networking - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud networking' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- VPCs isolate cloud resources within user-defined IP address ranges.\n- Security groups (stateful) and NACLs (stateless) provide layered firewall protection.\n- Load balancers distribute traffic and perform health checks across targets.\n- VPN and Direct Connect provide secure hybrid connectivity to on-premises.\n- Transit Gateway enables hub-and-spoke routing across VPCs and on-prem networks.\n- Route 53 offers latency, geo, weighted, and failover routing policies.\n- Multi-AZ architecture is essential for high availability in cloud networking.\n- A VPC provides network isolation with CIDR-defined IP ranges and subnet segmentation.\n- Security Groups are stateful instance-level firewalls; NACLs are stateless subnet-level firewalls.\n- ALB (L7) and NLB (L4) distribute traffic across targets with health check integration.\n- VPN provides quick encrypted connectivity; Direct Connect offers dedicated high-bandwidth links.\n- Transit Gateway enables hub-and-spoke routing across multiple VPCs and on-premises.\n- Route 53 routing policies (latency, weighted, geo, failover) enable global traffic management.\n- VPC Peering is non-transitive; use Transit Gateway for complex multi-VPC connectivity.\n\n## Exercises\n\n### Review Questions\n\n1. Explain the difference between Security Groups and Network ACLs in terms of state and rule evaluation.\n2. When would you use an NLB instead of an ALB?\n3. Describe the architecture of a three-tier VPC with public, private, and database subnets.\n4. Compare Site-to-Site VPN vs Direct Connect in terms of latency, bandwidth, and setup time.\n5. What is the purpose of a NAT Gateway in a VPC?\n6. Explain the different Route 53 routing policies and when to use each.\n7. What is Transit Gateway and when would you use it instead of VPC Peering?\n\n### Application Problems\n\n1. Design a VPC architecture for a global e-commerce application with web, app, and database tiers across two Availability Zones.\n\n2. A company has 20 VPCs across 4 AWS accounts. Propose a networking strategy that allows all VPCs to communicate and share services like Active Directory and logging.\n\n3. Write a TypeScript function that calculates monthly networking cost given NAT Gateway hours, data transfer volume, and Direct Connect port hours.\n\n4. Design a hybrid network architecture for connecting a corporate data center to AWS with both primary (high-bandwidth) and backup (low-cost) connectivity options.\n\n5. Configure a load balancing strategy for a global web application that requires canary deployments, health-based routing, and geographic traffic distribution.\n\n### Challenge Problem\n\nDesign a multi-region network architecture for a global SaaS platform with the following requirements: 1) Primary region us-east-1, DR region eu-west-2, 2) Active-active web tier across both regions, 3) Database writes only in primary with cross-region replication, 4) Private connectivity between on-premises data center and both cloud regions, 5) Latency-based global traffic distribution, 6) Centralized inspection and logging across all VPCs, 7) No overlapping CIDR blocks. Propose specific services, configurations, and a traffic flow diagram.\n"
      })
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