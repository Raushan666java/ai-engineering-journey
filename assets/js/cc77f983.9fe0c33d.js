"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1455],{

/***/ 32830
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_20_zero_trust_architecture_md_cc7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-20-zero-trust-architecture-md-cc7.json
const site_docs_courses_cyber_security_20_zero_trust_architecture_md_cc7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/20-zero-trust-architecture","title":"Chapter 20: Zero Trust & Enterprise Security Architecture","description":"Learning Objectives","source":"@site/docs/courses/cyber-security/20-zero-trust-architecture.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/20-zero-trust-architecture","permalink":"/ai-engineering-journey/cyber-security/20-zero-trust-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":19,"frontMatter":{"id":"20-zero-trust-architecture","slug":"/cyber-security/20-zero-trust-architecture","title":"Chapter 20: Zero Trust & Enterprise Security Architecture","sidebar_label":"Chapter 20: Zero Trust & Enterprise Security Architecture","sidebar_position":19},"sidebar":"coursesSidebar","previous":{"title":"Chapter 19: Blockchain, Smart Contract & DeFi Security","permalink":"/ai-engineering-journey/cyber-security/19-blockchain-defi-security"},"next":{"title":"Chapter 21: Social Media Security & Account Takeover Prevention","permalink":"/ai-engineering-journey/cyber-security/21-social-media-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/20-zero-trust-architecture.md


const frontMatter = {
	id: '20-zero-trust-architecture',
	slug: '/cyber-security/20-zero-trust-architecture',
	title: 'Chapter 20: Zero Trust & Enterprise Security Architecture',
	sidebar_label: 'Chapter 20: Zero Trust & Enterprise Security Architecture',
	sidebar_position: 19
};
const contentTitle = 'Chapter 20: Zero Trust & Enterprise Security Architecture';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "20.1 The History and Evolution of Zero Trust",
  "id": "201-the-history-and-evolution-of-zero-trust",
  "level": 2
}, {
  "value": "20.1.1 The Perimeter Security Paradigm",
  "id": "2011-the-perimeter-security-paradigm",
  "level": 3
}, {
  "value": "20.1.2 John Kindervag and Forrester (2010)",
  "id": "2012-john-kindervag-and-forrester-2010",
  "level": 3
}, {
  "value": "20.1.3 Google BeyondCorp (2011–2014)",
  "id": "2013-google-beyondcorp-20112014",
  "level": 3
}, {
  "value": "20.1.4 NIST SP 800-207 (2020)",
  "id": "2014-nist-sp-800-207-2020",
  "level": 3
}, {
  "value": "20.1.5 CISA Zero Trust Maturity Model (2021–2023)",
  "id": "2015-cisa-zero-trust-maturity-model-20212023",
  "level": 3
}, {
  "value": "20.2 Zero Trust Core Principles",
  "id": "202-zero-trust-core-principles",
  "level": 2
}, {
  "value": "20.2.1 Never Trust, Always Verify",
  "id": "2021-never-trust-always-verify",
  "level": 3
}, {
  "value": "20.2.2 Assume Breach",
  "id": "2022-assume-breach",
  "level": 3
}, {
  "value": "20.2.3 Least Privilege Access",
  "id": "2023-least-privilege-access",
  "level": 3
}, {
  "value": "20.2.4 Microsegmentation",
  "id": "2024-microsegmentation",
  "level": 3
}, {
  "value": "20.2.5 Continuous Validation",
  "id": "2025-continuous-validation",
  "level": 3
}, {
  "value": "20.3 NIST SP 800-207 Architecture",
  "id": "203-nist-sp-800-207-architecture",
  "level": 2
}, {
  "value": "20.3.1 The Seven Logical Components",
  "id": "2031-the-seven-logical-components",
  "level": 3
}, {
  "value": "20.3.2 Policy Engine, Administrator, and Enforcement Point",
  "id": "2032-policy-engine-administrator-and-enforcement-point",
  "level": 3
}, {
  "value": "20.3.3 Control Plane vs. Data Plane Separation",
  "id": "2033-control-plane-vs-data-plane-separation",
  "level": 3
}, {
  "value": "20.4 SASE: Secure Access Service Edge",
  "id": "204-sase-secure-access-service-edge",
  "level": 2
}, {
  "value": "20.4.1 The SASE Framework",
  "id": "2041-the-sase-framework",
  "level": 3
}, {
  "value": "20.4.2 SD-WAN (Software-Defined WAN)",
  "id": "2042-sd-wan-software-defined-wan",
  "level": 3
}, {
  "value": "20.4.3 SSE (Security Service Edge)",
  "id": "2043-sse-security-service-edge",
  "level": 3
}, {
  "value": "20.4.4 SASE Policy Enforcer Implementation",
  "id": "2044-sase-policy-enforcer-implementation",
  "level": 3
}, {
  "value": "20.5 ZTNA: Zero Trust Network Access",
  "id": "205-ztna-zero-trust-network-access",
  "level": 2
}, {
  "value": "20.5.1 What is ZTNA?",
  "id": "2051-what-is-ztna",
  "level": 3
}, {
  "value": "20.5.2 Client-to-Service vs. Service-Initiated ZTNA",
  "id": "2052-client-to-service-vs-service-initiated-ztna",
  "level": 3
}, {
  "value": "20.5.3 Identity-Aware Proxy",
  "id": "2053-identity-aware-proxy",
  "level": 3
}, {
  "value": "20.5.4 ZTNA Vendor Comparison",
  "id": "2054-ztna-vendor-comparison",
  "level": 3
}, {
  "value": "20.6 Microsegmentation: East-West Traffic Isolation",
  "id": "206-microsegmentation-east-west-traffic-isolation",
  "level": 2
}, {
  "value": "20.6.1 The Problem with Flat Networks",
  "id": "2061-the-problem-with-flat-networks",
  "level": 3
}, {
  "value": "20.6.2 Microsegmentation Approaches",
  "id": "2062-microsegmentation-approaches",
  "level": 3
}, {
  "value": "20.6.3 Microsegmentation Policy Generator",
  "id": "2063-microsegmentation-policy-generator",
  "level": 3
}, {
  "value": "20.7 IAM in Zero Trust",
  "id": "207-iam-in-zero-trust",
  "level": 2
}, {
  "value": "20.7.1 Identity Federation: SAML and OIDC",
  "id": "2071-identity-federation-saml-and-oidc",
  "level": 3
}, {
  "value": "20.7.2 Continuous Authentication",
  "id": "2072-continuous-authentication",
  "level": 3
}, {
  "value": "20.7.3 Risk-Based Conditional Access",
  "id": "2073-risk-based-conditional-access",
  "level": 3
}, {
  "value": "20.8 BeyondCorp: Google&#39;s Zero Trust Implementation",
  "id": "208-beyondcorp-googles-zero-trust-implementation",
  "level": 2
}, {
  "value": "20.8.1 Architecture Overview",
  "id": "2081-architecture-overview",
  "level": 3
}, {
  "value": "20.8.2 Full BeyondCorp Setup Guide Reference",
  "id": "2082-full-beyondcorp-setup-guide-reference",
  "level": 3
}, {
  "value": "20.8.3 BeyondCorp Trust Engine Implementation",
  "id": "2083-beyondcorp-trust-engine-implementation",
  "level": 3
}, {
  "value": "20.9 NIST SP 800-207 Trust Algorithm",
  "id": "209-nist-sp-800-207-trust-algorithm",
  "level": 2
}, {
  "value": "20.9.1 Continuous Trust Scoring",
  "id": "2091-continuous-trust-scoring",
  "level": 3
}, {
  "value": "20.10 Endpoint Security in Zero Trust",
  "id": "2010-endpoint-security-in-zero-trust",
  "level": 2
}, {
  "value": "20.10.1 Device Health Attestation",
  "id": "20101-device-health-attestation",
  "level": 3
}, {
  "value": "20.10.2 TPM and Confidential Computing",
  "id": "20102-tpm-and-confidential-computing",
  "level": 3
}, {
  "value": "20.10.3 Access Token Validation and Introspection",
  "id": "20103-access-token-validation-and-introspection",
  "level": 3
}, {
  "value": "20.11 Security Policy as Code",
  "id": "2011-security-policy-as-code",
  "level": 2
}, {
  "value": "20.11.1 OPA-Style Policy Engine",
  "id": "20111-opa-style-policy-engine",
  "level": 3
}, {
  "value": "20.12 Vendor Comparison",
  "id": "2012-vendor-comparison",
  "level": 2
}, {
  "value": "20.12.1 Major Zero Trust Vendors",
  "id": "20121-major-zero-trust-vendors",
  "level": 3
}, {
  "value": "20.12.2 Decision Framework",
  "id": "20122-decision-framework",
  "level": 3
}, {
  "value": "20.13 Zero Trust Implementation Roadmap",
  "id": "2013-zero-trust-implementation-roadmap",
  "level": 2
}, {
  "value": "Phase 1: Foundation (Months 1–3)",
  "id": "phase-1-foundation-months-13",
  "level": 3
}, {
  "value": "Phase 2: Access Control (Months 4–6)",
  "id": "phase-2-access-control-months-46",
  "level": 3
}, {
  "value": "Phase 3: Continuous Validation (Months 7–9)",
  "id": "phase-3-continuous-validation-months-79",
  "level": 3
}, {
  "value": "Phase 4: Optimization (Months 10–12)",
  "id": "phase-4-optimization-months-1012",
  "level": 3
}, {
  "value": "20.14 CISA Zero Trust Maturity Model Assessment",
  "id": "2014-cisa-zero-trust-maturity-model-assessment",
  "level": 2
}, {
  "value": "20.14.1 Self-Assessment Questionnaire",
  "id": "20141-self-assessment-questionnaire",
  "level": 3
}, {
  "value": "20.14.2 Scoring",
  "id": "20142-scoring",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Implement a Risk Score Aggregator",
  "id": "exercise-1-implement-a-risk-score-aggregator",
  "level": 3
}, {
  "value": "Exercise 2: Multi-Cloud Microsegmentation",
  "id": "exercise-2-multi-cloud-microsegmentation",
  "level": 3
}, {
  "value": "Exercise 3: Session Risk Monitor",
  "id": "exercise-3-session-risk-monitor",
  "level": 3
}, {
  "value": "Exercise 4: SASE Traffic Routing Simulator",
  "id": "exercise-4-sase-traffic-routing-simulator",
  "level": 3
}, {
  "value": "Exercise 5: Policy as Code - GitOps Workflow",
  "id": "exercise-5-policy-as-code---gitops-workflow",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    input: "input",
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
        id: "chapter-20-zero-trust--enterprise-security-architecture",
        children: "Chapter 20: Zero Trust & Enterprise Security Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/cyber-security/20-zero-trust-architecture/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/20-zero-trust-architecture/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/20-zero-trust-architecture/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/20-zero-trust-architecture/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cyber-security/20-zero-trust-architecture/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cyber-security/20-zero-trust-architecture/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trace"
        }), " the historical evolution of Zero Trust from Forrester's 2010 initiative through NIST SP 800-207 and industry adoption at Google BeyondCorp."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explain"
        }), " the seven core principles of Zero Trust—never trust/always verify, assume breach, least privilege, microsegmentation, and continuous validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagram"
        }), " the NIST SP 800-207 logical architecture including the Policy Engine (PE), Policy Administrator (PA), and Policy Enforcement Point (PEP)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Differentiate"
        }), " between the control plane and data plane in a Zero Trust architecture and describe their separation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analyze"
        }), " the SASE framework as the convergence of SD-WAN and SSE (CASB, SWG, ZTNA) and evaluate its role in enterprise security."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implement"
        }), " a working Zero Trust Policy Engine in TypeScript that evaluates user, device, location, and behavioral context before granting access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design"
        }), " a microsegmentation policy generator that translates service dependencies into concrete firewall rule sets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Construct"
        }), " a continuous trust score algorithm that follows the NIST SP 800-077 guidance for attribute-based validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare"
        }), " major Zero Trust vendors—Zscaler, Palo Alto Networks, Cloudflare, and Microsoft—across ZTNA, SASE, and microsegmentation capabilities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assess"
        }), " an organization's Zero Trust maturity using the CISA Zero Trust Maturity Model (Traditional → Advanced → Optimal)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "201-the-history-and-evolution-of-zero-trust",
      children: "20.1 The History and Evolution of Zero Trust"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2011-the-perimeter-security-paradigm",
      children: "20.1.1 The Perimeter Security Paradigm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For decades, enterprise security followed the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "castle-and-moat"
      }), " model. A hardened perimeter (firewalls, VPNs, IDS/IPS) protected internal resources, while anything inside the network was implicitly trusted. Once an attacker breached the perimeter—through a phishing email, a compromised VPN credential, or an insider threat—they could move laterally with little resistance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This model collapsed under three converging pressures:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pressure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud migration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resources moved outside the corporate network perimeter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile workforce"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users accessed corporate data from untrusted networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sophisticated attacks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced persistent threats (APTs) repeatedly bypassed perimeter defenses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2012-john-kindervag-and-forrester-2010",
      children: "20.1.2 John Kindervag and Forrester (2010)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The term ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust"
      }), " was coined in 2010 by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "John Kindervag"
      }), ", then a principal analyst at Forrester Research. In his seminal report ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"No More Chewy Centers: Introducing The Zero Trust Model Of Information Security\""
      }), ", Kindervag argued that organizations must eliminate the concept of trust from their networks entirely."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "\"Zero Trust is not about making the network trust users and devices; it is about eliminating trust altogether.\""
        }), " — John Kindervag"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kindervag's original model centered on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust network"
      }), " concept, which used next-generation firewalls (NGFWs) as the primary enforcement point. All traffic—regardless of source—had to pass through inspection, logging, and policy evaluation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2013-google-beyondcorp-20112014",
      children: "20.1.3 Google BeyondCorp (2011–2014)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In 2011, Google began developing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BeyondCorp"
      }), ", an internal initiative to enable employees to work from any untrusted network without a traditional VPN. The project was motivated by a sophisticated attack (Operation Aurora) that exploited VPN trust."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BeyondCorp's key innovations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device inventory"
        }), ": Every device was catalogued, managed, and continuously attested."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User identity"
        }), ": Authentication shifted from network-level to application-level."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access proxy"
        }), ": A centralized proxy brokered every request, evaluating both user and device context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No privileged network"
        }), ": The corporate network was treated as untrusted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google published a series of papers between 2014 and 2018 detailing their architecture, which became the de facto reference implementation for Zero Trust."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2014-nist-sp-800-207-2020",
      children: "20.1.4 NIST SP 800-207 (2020)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "National Institute of Standards and Technology (NIST)"
      }), " published Special Publication ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "800-207: Zero Trust Architecture"
      }), " in August 2020. This document standardized Zero Trust terminology and provided a logical architecture that vendors and enterprises could implement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key NIST SP 800-207 contributions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Seven logical components of a Zero Trust architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Formal definitions for Policy Engine (PE), Policy Administrator (PA), and Policy Enforcement Point (PEP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trust algorithm concept based on multiple attribute sources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deployment scenario guidance: macro-segmentation, micro-segmentation, and agent-based models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2015-cisa-zero-trust-maturity-model-20212023",
      children: "20.1.5 CISA Zero Trust Maturity Model (2021–2023)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cybersecurity and Infrastructure Security Agency (CISA)"
      }), " published its ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust Maturity Model"
      }), " in 2021 (updated 2023), providing a government-focused roadmap."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model defines five pillars across three maturity levels:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pillar"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User authentication and governance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint inventory and health"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation and encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applications & Workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control and runtime protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification and DLP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maturity levels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traditional"
        }), ": Manual processes, VPN-based access, static perimeter rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), ": Automated policy, basic microsegmentation, device health checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimal"
        }), ": Fully automated, continuous validation, real-time risk scoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "202-zero-trust-core-principles",
      children: "20.2 Zero Trust Core Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2021-never-trust-always-verify",
      children: "20.2.1 Never Trust, Always Verify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No entity—user, device, application, or network—is trusted by default. Every access request must be authenticated, authorized, and validated before granting access. Verification occurs continuously throughout the session, not just at login."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Principle: Never trust, always verify\ninterface AccessRequest {\n  userId: string;\n  deviceId: string;\n  resourceId: string;\n  ipAddress: string;\n  geolocation: { latitude: number; longitude: number };\n  timestamp: Date;\n  behaviorProfile: {\n    typicalAccessHours: [number, number]; // 24h format\n    typicalIpRange: string;\n    recentFailedAttempts: number;\n  };\n}\n\ninterface VerificationResult {\n  allowed: boolean;\n  trustScore: number;\n  requiredSteps: string[]; // e.g., [\"MFA\", \"device_attestation\"]\n  sessionToken?: string;\n  expirySeconds: number;\n}\n\nfunction verifyAccess(request: AccessRequest): VerificationResult {\n  // No implicit trust — every attribute is evaluated\n  const trustScore = calculateTrustScore(request);\n\n  const requiredSteps: string[] = [];\n\n  if (trustScore < 0.3) {\n    requiredSteps.push(\"MFA\", \"device_attestation\", \"manager_approval\");\n  } else if (trustScore < 0.6) {\n    requiredSteps.push(\"MFA\", \"device_attestation\");\n  } else if (trustScore < 0.8) {\n    requiredSteps.push(\"MFA\");\n  }\n\n  return {\n    allowed: requiredSteps.length === 0 || trustScore > 0.3,\n    trustScore,\n    requiredSteps,\n    sessionToken: trustScore > 0.3 ? crypto.randomUUID() : undefined,\n    expirySeconds: Math.floor(trustScore * 3600),\n  };\n}\n\nfunction calculateTrustScore(request: AccessRequest): number {\n  let score = 0.0;\n\n  // Check if access time is within typical hours\n  const currentHour = request.timestamp.getHours();\n  const [start, end] = request.behaviorProfile.typicalAccessHours;\n  const timeScore = (currentHour >= start && currentHour <= end) ? 0.3 : 0.05;\n  score += timeScore;\n\n  // Check IP reputation\n  const ipOctets = request.ipAddress.split(\".\").slice(0, 2).join(\".\");\n  const profileOctets = request.behaviorProfile.typicalIpRange.split(\".\").slice(0, 2).join(\".\");\n  score += ipOctets === profileOctets ? 0.3 : 0.05;\n\n  // Failed attempts penalty\n  score -= request.behaviorProfile.recentFailedAttempts * 0.1;\n\n  // Device known? (simplified)\n  score += request.deviceId ? 0.2 : 0.0;\n\n  return Math.max(0, Math.min(1, score));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2022-assume-breach",
      children: "20.2.2 Assume Breach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zero Trust architectures operate under the assumption that the network is already compromised. Every request is treated as potentially malicious, and lateral movement is aggressively contained."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implications of assume breach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All traffic is encrypted end-to-end, even inside the data center."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sessions are short-lived and require re-authentication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "East-west (internal) traffic is inspected just as thoroughly as north-south (external) traffic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continuous logging and monitoring are mandatory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2023-least-privilege-access",
      children: "20.2.3 Least Privilege Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users and devices receive only the minimum permissions needed to perform their functions. Unlike traditional role-based access control (RBAC), Zero Trust adds ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contextual"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "temporal"
      }), " constraints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LeastPrivilegePolicy {\n  principal: string;\n  resource: string;\n  action: \"read\" | \"write\" | \"admin\" | \"delete\";\n  constraints: {\n    timeWindow?: [string, string];  // e.g., [\"09:00\", \"17:00\"]\n    geoFence?: string;              // e.g., \"US\" or \"HQ-Building-A\"\n    maxSessions?: number;\n    requireDeviceAttestation?: boolean;\n    sessionTimeoutSeconds: number;\n    allowedMethods?: string[];      // e.g., [\"API\", \"UI\", \"CLI\"]\n  };\n}\n\ninterface LeastPrivilegeEngine {\n  policies: Map<string, LeastPrivilegePolicy[]>;\n\n  evaluate(\n    principal: string,\n    resource: string,\n    action: LeastPrivilegePolicy[\"action\"],\n    context: Record<string, string>\n  ): boolean;\n\n  generateToken(policy: LeastPrivilegePolicy): string;\n\n  revokeExcessPermissions(principal: string): void;\n}\n\nclass ZeroTrustLeastPrivilegeEngine implements LeastPrivilegeEngine {\n  policies = new Map<string, LeastPrivilegePolicy[]>();\n\n  addPolicy(policy: LeastPrivilegePolicy): void {\n    const existing = this.policies.get(policy.principal) ?? [];\n    existing.push(policy);\n    this.policies.set(policy.principal, existing);\n  }\n\n  evaluate(\n    principal: string,\n    resource: string,\n    action: LeastPrivilegePolicy[\"action\"],\n    context: Record<string, string>\n  ): boolean {\n    const userPolicies = this.policies.get(principal);\n    if (!userPolicies) return false;\n\n    return userPolicies.some((policy) => {\n      if (policy.resource !== resource) return false;\n      if (policy.action !== action && policy.action !== \"admin\") return false;\n\n      // Time window check\n      if (policy.constraints.timeWindow) {\n        const now = new Date();\n        const [start, end] = policy.constraints.timeWindow;\n        const currentMinutes = now.getHours() * 60 + now.getMinutes();\n        const [startH, startM] = start.split(\":\").map(Number);\n        const [endH, endM] = end.split(\":\").map(Number);\n        const startTotal = startH * 60 + startM;\n        const endTotal = endH * 60 + endM;\n        if (currentMinutes < startTotal || currentMinutes > endTotal) return false;\n      }\n\n      // Geo-fence check\n      if (policy.constraints.geoFence && context[\"geo\"] !== policy.constraints.geoFence) {\n        return false;\n      }\n\n      // Device attestation\n      if (policy.constraints.requireDeviceAttestation && context[\"device_attested\"] !== \"true\") {\n        return false;\n      }\n\n      return true;\n    });\n  }\n\n  generateToken(policy: LeastPrivilegePolicy): string {\n    const payload = {\n      principal: policy.principal,\n      resource: policy.resource,\n      action: policy.action,\n      exp: Math.floor(Date.now() / 1000) + policy.constraints.sessionTimeoutSeconds,\n      jti: crypto.randomUUID(),\n    };\n    // In production: sign with RS256 via a proper key management system\n    return Buffer.from(JSON.stringify(payload)).toString(\"base64url\");\n  }\n\n  revokeExcessPermissions(principal: string): void {\n    // Remove all admin-level policies unless explicitly authorized\n    const userPolicies = this.policies.get(principal);\n    if (userPolicies) {\n      this.policies.set(\n        principal,\n        userPolicies.filter((p) => p.action !== \"admin\")\n      );\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2024-microsegmentation",
      children: "20.2.4 Microsegmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microsegmentation divides the network into isolated zones, each with its own security controls. This prevents lateral movement: even if an attacker compromises one segment, they cannot access others."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2025-continuous-validation",
      children: "20.2.5 Continuous Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trust is never permanent. A user who passes authentication at 9:00 AM may exhibit suspicious behavior at 9:15 AM. Zero Trust systems continuously re-evaluate trust based on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Behavioral anomalies (e.g., impossible travel)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Device posture changes (e.g., missing security patches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Threat intelligence feeds (e.g., IP reputation updates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Session context (e.g., unusual data access patterns)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "203-nist-sp-800-207-architecture",
      children: "20.3 NIST SP 800-207 Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2031-the-seven-logical-components",
      children: "20.3.1 The Seven Logical Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NIST SP 800-207 defines seven logical components that together form a Zero Trust architecture:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abbreviation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes the final access decision based on policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Administrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establishes and revokes sessions based on PE decisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Enforcement Point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces access (allow/deny/inspect) at the communication path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IdP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages user identities and authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Access Policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rules governing access to resources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public Key Infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PKI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues and manages certificates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM / Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collects and analyzes telemetry for continuous validation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2032-policy-engine-administrator-and-enforcement-point",
      children: "20.3.2 Policy Engine, Administrator, and Enforcement Point"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "policy decision continuum"
      }), " is the heart of NIST ZTA:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PEP"
        }), " intercepts a request and forwards it to the PA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PA"
        }), " translates the PEP request into a format the PE can evaluate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PE"
        }), " evaluates the request against all policies and returns a decision (allow/deny/redirect)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PA"
        }), " conveys the decision back to the PEP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PEP"
        }), " enforces the decision."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as User/Device\n    participant PEP as Policy Enforcement Point\n    participant PA as Policy Administrator\n    participant PE as Policy Engine\n    participant CDM as CDM System\n    participant IdP as Identity Provider\n    participant SIEM as Threat Intel / SIEM\n\n    User->>PEP: Access Request (resource, user, device, context)\n    PEP->>PA: Forward request (encrypted)\n    PA->>PE: Evaluate against policies\n    PE->>CDM: Query device posture\n    PE->>IdP: Verify identity & MFA status\n    PE->>SIEM: Check threat intelligence\n    SIEM-->>PE: Risk score / threat context\n    IdP-->>PE: Authentication assurance\n    CDM-->>PE: Device health attestation\n    PE-->>PA: Decision: Allow / Deny / MFA Required\n    PA-->>PEP: Enforce decision + session token\n    PEP-->>User: Access granted (or denied)\n\n    Note over PEP,PE: All communication via encrypted<br/>control plane (no data plane access)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2033-control-plane-vs-data-plane-separation",
      children: "20.3.3 Control Plane vs. Data Plane Separation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A fundamental architectural requirement of ZTA is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "separation of the control plane from the data plane"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Plane"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Components"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control Plane"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Engine, Policy Administrator, IdP, SIEM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Plane"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Enforcement Point, gateways, proxies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key rule:"
      }), " Control plane components must never reside on the same network segment as data plane components. This prevents an attacker who compromises a gateway from modifying policies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ControlPlaneMessage {\n  type: \"policy_decision\" | \"session_revoke\" | \"certificate_rotate\";\n  timestamp: Date;\n  source: string;\n  signature: string; // Cryptographic signature from PE\n  payload: {\n    sessionId?: string;\n    userId?: string;\n    resourceId?: string;\n    decision?: \"allow\" | \"deny\" | \"mfa_required\" | \"redirect_to_captive\";\n    reason?: string;\n    ttlSeconds: number;\n  };\n}\n\ninterface DataPlaneMessage {\n  type: \"access_request\" | \"health_report\" | \"telemetry\";\n  sourcePepId: string;\n  timestamp: Date;\n  payload: Record<string, unknown>;\n}\n\n// The PEP only speaks to the PA — never directly to the PE\nclass PolicyEnforcementPoint {\n  private paEndpoint: string;\n  private pepId: string;\n  private privateKey: CryptoKey;\n\n  async intercept(request: AccessRequest): Promise<ControlPlaneMessage> {\n    // Package request for control plane\n    const dataPlaneMsg: DataPlaneMessage = {\n      type: \"access_request\",\n      sourcePepId: this.pepId,\n      timestamp: new Date(),\n      payload: { ...request },\n    };\n\n    // Send to PA (control plane) — NOT to PE directly\n    const response = await fetch(`${this.paEndpoint}/evaluate`, {\n      method: \"POST\",\n      body: JSON.stringify(dataPlaneMsg),\n      headers: { \"Content-Type\": \"application/json\" },\n    });\n\n    const decision: ControlPlaneMessage = await response.json();\n    return decision;\n  }\n\n  async enforce(decision: ControlPlaneMessage): Promise<void> {\n    switch (decision.payload.decision) {\n      case \"allow\":\n        // Establish encrypted tunnel\n        break;\n      case \"deny\":\n        this.terminateConnection(decision.payload.sessionId);\n        break;\n      case \"mfa_required\":\n        this.redirectToMfa(decision.payload.sessionId);\n        break;\n    }\n  }\n\n  private terminateConnection(sessionId?: string): void {\n    // Close TCP/TLS session\n    console.log(`[PEP ${this.pepId}] Terminating session ${sessionId}`);\n  }\n\n  private redirectToMfa(sessionId?: string): void {\n    console.log(`[PEP ${this.pepId}] Redirecting session ${sessionId} to MFA`);\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "204-sase-secure-access-service-edge",
      children: "20.4 SASE: Secure Access Service Edge"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2041-the-sase-framework",
      children: "20.4.1 The SASE Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure Access Service Edge (SASE)"
      }), " was introduced by Gartner in 2019. It converges wide-area networking (WAN) with network security services into a single, cloud-delivered platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────┐\n│                    SASE Platform                       │\n├───────────────────┬─────────────────────────────────┤\n│   SD-WAN Layer     │        SSE Layer                  │\n│   (Networking)     │   (Security Service Edge)         │\n├───────────────────┼─────────────────────────────────┤\n│  • WAN optimization │  • ZTNA (Zero Trust Access)       │\n│  • Bandwidth mgmt   │  • CASB (Cloud Access Broker)    │\n│  • Traffic steering │  • SWG (Secure Web Gateway)      │\n│  • QoS              │  • FWaaS (Firewall as a Service) │\n│  • Last-mile mgmt   │  • DLP (Data Loss Prevention)    │\n└───────────────────┴─────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2042-sd-wan-software-defined-wan",
      children: "20.4.2 SD-WAN (Software-Defined WAN)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SD-WAN decouples the network control plane from the hardware, enabling:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic traffic routing based on application requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cost-effective utilization of MPLS, broadband, and LTE links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centralized policy management across all branch locations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2043-sse-security-service-edge",
      children: "20.4.3 SSE (Security Service Edge)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSE is the security half of SASE, comprising four core services:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ZTNA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity-aware access to private applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CASB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shadow IT discovery and cloud app governance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SWG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL filtering, TLS inspection, malware blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FWaaS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next-generation firewall capabilities delivered as a service"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    subgraph Users[\"Users & Branches\"]\n        A[Remote User]\n        B[Branch Office]\n        C[Mobile Device]\n    end\n\n    subgraph SASE[\"SASE Platform<br/>(Global PoP Network)\"]\n        direction LR\n        subgraph SDWAN[\"SD-WAN\"]\n            S1[Traffic Steering]\n            S2[QoS & Optimization]\n        end\n        subgraph SSE[\"Security Service Edge\"]\n            ZTNA[ZTNA Gateway]\n            CASB[CASB Broker]\n            SWG[Secure Web Gateway]\n            FW[FWaaS]\n        end\n    end\n\n    subgraph Destinations[\"Destinations\"]\n        D1[SaaS Apps<br/>Salesforce, Slack]\n        D2[Private Apps<br/>Internal DC]\n        D3[Internet<br/>Public Websites]\n    end\n\n    A --> SASE\n    B --> SASE\n    C --> SASE\n    SDWAN --> SSE\n    SSE --> D1\n    SSE --> D2\n    SSE --> D3\n\n    style SASE fill:#1a2035,stroke:#4a90d9,stroke-width:2px\n    style SSE fill:#2d1b69,stroke:#7c5cbf,stroke-width:2px\n    style SDWAN fill:#1a3a5c,stroke:#4a90d9,stroke-width:2px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2044-sase-policy-enforcer-implementation",
      children: "20.4.4 SASE Policy Enforcer Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface SasePolicy {\n  id: string;\n  name: string;\n  priority: number;\n  matchCriteria: {\n    userGroups?: string[];\n    devicePosture?: string[];\n    geoLocation?: string[];\n    destinationApp?: string[];\n    destinationCategory?: string[];\n    sourceIpRanges?: string[];\n    timeRange?: { start: string; end: string };\n  };\n  action: \"allow\" | \"deny\" | \"isolate\" | \"redirect_to_proxy\" | \"inspect_tls\";\n  logging: \"none\" | \"metadata\" | \"full\";\n}\n\ninterface SaseTrafficContext {\n  userId: string;\n  userGroups: string[];\n  deviceId: string;\n  devicePosture: string[];\n  sourceIp: string;\n  geolocation: string;\n  destinationUrl: string;\n  destinationApp: string;\n  tlsVersion: string;\n  requestMethod: string;\n}\n\nclass SasePolicyEnforcer {\n  private policies: SasePolicy[] = [];\n\n  addPolicy(policy: SasePolicy): void {\n    this.policies.push(policy);\n    this.policies.sort((a, b) => b.priority - a.priority);\n  }\n\n  evaluate(context: SaseTrafficContext): SasePolicy | null {\n    for (const policy of this.policies) {\n      if (this.matches(policy.matchCriteria, context)) {\n        return policy;\n      }\n    }\n    return null; // Default deny\n  }\n\n  private matches(\n    criteria: SasePolicy[\"matchCriteria\"],\n    context: SaseTrafficContext\n  ): boolean {\n    // User group match\n    if (criteria.userGroups && criteria.userGroups.length > 0) {\n      const hasGroup = criteria.userGroups.some((g) => context.userGroups.includes(g));\n      if (!hasGroup) return false;\n    }\n\n    // Device posture match\n    if (criteria.devicePosture && criteria.devicePosture.length > 0) {\n      const hasPosture = criteria.devicePosture.some((p) =>\n        context.devicePosture.includes(p)\n      );\n      if (!hasPosture) return false;\n    }\n\n    // Geo match\n    if (criteria.geoLocation && criteria.geoLocation.length > 0) {\n      if (!criteria.geoLocation.includes(context.geolocation)) return false;\n    }\n\n    // Destination app match\n    if (criteria.destinationApp && criteria.destinationApp.length > 0) {\n      if (!criteria.destinationApp.includes(context.destinationApp)) return false;\n    }\n\n    // Time range match\n    if (criteria.timeRange) {\n      const now = new Date();\n      const mins = now.getHours() * 60 + now.getMinutes();\n      const [sH, sM] = criteria.timeRange.start.split(\":\").map(Number);\n      const [eH, eM] = criteria.timeRange.end.split(\":\").map(Number);\n      const startMins = sH * 60 + sM;\n      const endMins = eH * 60 + eM;\n      if (mins < startMins || mins > endMins) return false;\n    }\n\n    return true;\n  }\n\n  enforce(policy: SasePolicy, context: SaseTrafficContext): void {\n    console.log(`[SASE] Enforcing policy \"${policy.name}\" on ${context.userId}`);\n    switch (policy.action) {\n      case \"allow\":\n        this.routeToDestination(context);\n        break;\n      case \"deny\":\n        this.blockTraffic(context);\n        break;\n      case \"isolate\":\n        this.isolateSession(context);\n        break;\n      case \"redirect_to_proxy\":\n        this.redirectToProxy(context);\n        break;\n      case \"inspect_tls\":\n        this.performTlsInspection(context);\n        break;\n    }\n\n    if (policy.logging === \"metadata\") {\n      this.logMetadata(context, policy);\n    } else if (policy.logging === \"full\") {\n      this.logFullPacket(context, policy);\n    }\n  }\n\n  private routeToDestination(context: SaseTrafficContext): void {\n    // In production: establish optimal path via SD-WAN\n    console.log(`Routing ${context.userId} -> ${context.destinationApp}`);\n  }\n\n  private blockTraffic(context: SaseTrafficContext): void {\n    console.log(`Blocked traffic from ${context.userId} to ${context.destinationUrl}`);\n  }\n\n  private isolateSession(context: SaseTrafficContext): void {\n    // Route through an isolated browser/isolation environment\n    console.log(`Isolating session for ${context.userId}`);\n  }\n\n  private redirectToProxy(context: SaseTrafficContext): void {\n    // Route through forward proxy for content inspection\n    console.log(`Redirecting ${context.userId} to forward proxy`);\n  }\n\n  private performTlsInspection(context: SaseTrafficContext): void {\n    // Decrypt, inspect, re-encrypt\n    console.log(`TLS inspection on traffic from ${context.userId}`);\n  }\n\n  private logMetadata(context: SaseTrafficContext, policy: SasePolicy): void {\n    console.log(`[SASE LOG] ${context.userId} | ${context.destinationApp} | ${policy.action}`);\n  }\n\n  private logFullPacket(context: SaseTrafficContext, policy: SasePolicy): void {\n    // Full packet capture for security analysis\n    console.log(`[SASE FULL LOG] ${JSON.stringify(context)} applied ${policy.name}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "205-ztna-zero-trust-network-access",
      children: "20.5 ZTNA: Zero Trust Network Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2051-what-is-ztna",
      children: "20.5.1 What is ZTNA?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zero Trust Network Access (ZTNA)"
      }), " is the technology that replaces traditional VPNs. Instead of placing users on the network, ZTNA creates per-session, encrypted connections to individual applications. The user never gets network-level access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2052-client-to-service-vs-service-initiated-ztna",
      children: "20.5.2 Client-to-Service vs. Service-Initiated ZTNA"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Client-Initiated ZTNA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Service-Initiated ZTNA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Connection start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User's device connects to cloud gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connector in data center initiates outbound connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "User visibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User sees the application connector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User sees nothing (application is invisible)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed devices with installed agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party access, contractor scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare Access (WARP), Zscaler ZPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appgate, Twingate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2053-identity-aware-proxy",
      children: "20.5.3 Identity-Aware Proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The core of ZTNA is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "identity-aware proxy"
      }), "—a reverse proxy that authenticates every request before routing it to the application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IdentityAwareProxyConfig {\n  upstreamService: string;\n  allowedDomains: string[];\n  sessionDuration: number;\n  mfaRequired: boolean;\n  deviceAttestationRequired: boolean;\n}\n\ninterface ProxySession {\n  sessionId: string;\n  userId: string;\n  deviceId: string;\n  createdAt: Date;\n  expiresAt: Date;\n  attributes: Record<string, string>;\n}\n\nclass IdentityAwareProxy {\n  private sessions = new Map<string, ProxySession>();\n  private configs = new Map<string, IdentityAwareProxyConfig>();\n\n  registerApplication(appId: string, config: IdentityAwareProxyConfig): void {\n    this.configs.set(appId, config);\n  }\n\n  async handleRequest(\n    appId: string,\n    authToken: string,\n    deviceCert: string,\n    request: Request\n  ): Promise<Response> {\n    // 1. Validate token\n    const session = await this.validateToken(authToken);\n    if (!session) {\n      return new Response(\"Unauthorized\", { status: 401 });\n    }\n\n    // 2. Validate device certificate\n    const deviceValid = await this.validateDeviceCertificate(deviceCert);\n    if (!deviceValid) {\n      return new Response(\"Device not attested\", { status: 403 });\n    }\n\n    // 3. Check configuration\n    const config = this.configs.get(appId);\n    if (!config) {\n      return new Response(\"Application not found\", { status: 404 });\n    }\n\n    // 4. Verify domain\n    const url = new URL(request.url);\n    if (\n      config.allowedDomains.length > 0 &&\n      !config.allowedDomains.includes(url.hostname)\n    ) {\n      return new Response(\"Domain not allowed\", { status: 403 });\n    }\n\n    // 5. MFA check if needed\n    if (config.mfaRequired && !session.attributes[\"mfa_verified\"]) {\n      return new Response(\"MFA required\", { status: 302, headers: { Location: \"/mfa\" } });\n    }\n\n    // 6. Proxy request to upstream\n    return this.proxyToUpstream(config.upstreamService, request);\n  }\n\n  private async validateToken(token: string): Promise<ProxySession | null> {\n    // Decode JWT, verify signature, check expiry\n    try {\n      const payload = JSON.parse(\n        Buffer.from(token.split(\".\")[1], \"base64url\").toString()\n      );\n      const session = this.sessions.get(payload.jti);\n      if (!session) return null;\n      if (session.expiresAt < new Date()) {\n        this.sessions.delete(session.sessionId);\n        return null;\n      }\n      return session;\n    } catch {\n      return null;\n    }\n  }\n\n  private async validateDeviceCertificate(certPem: string): Promise<boolean> {\n    // Verify certificate chain against internal CA\n    // Check revocation status via OCSP\n    try {\n      const certLines = certPem.split(\"\\n\").filter((l) => !l.includes(\"---\"));\n      const decoded = Buffer.from(certLines.join(\"\"), \"base64\").toString();\n      // In production: use Node.js crypto.X509Certificate\n      return decoded.includes(\"DEVICE_CA\");\n    } catch {\n      return false;\n    }\n  }\n\n  private async proxyToUpstream(\n    upstream: string,\n    request: Request\n  ): Promise<Response> {\n    const upstreamUrl = new URL(request.url);\n    upstreamUrl.hostname = upstream;\n\n    const proxyHeaders = new Headers(request.headers);\n    proxyHeaders.set(\"X-Forwarded-For\", \"identity-aware-proxy\");\n    proxyHeaders.delete(\"Cookie\"); // Strip session cookies for security\n\n    const proxyRequest = new Request(upstreamUrl.toString(), {\n      method: request.method,\n      headers: proxyHeaders,\n      body: request.body,\n    });\n\n    return fetch(proxyRequest);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2054-ztna-vendor-comparison",
      children: "20.5.4 ZTNA Vendor Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vendor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ZTNA Product"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Differentiator"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zscaler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler Private Access (ZPA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App connector in data center; user never touches the network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloudflare"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-initiated (WARP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global edge network; integrates with Argo Tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Appgate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appgate SDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service-initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source protocol; supports legacy apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Palo Alto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-powered threat prevention integrated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microsoft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Entra (Azure AD) App Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service-initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep Office 365 integration; Conditional Access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "206-microsegmentation-east-west-traffic-isolation",
      children: "20.6 Microsegmentation: East-West Traffic Isolation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2061-the-problem-with-flat-networks",
      children: "20.6.1 The Problem with Flat Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a traditional flat network, an attacker who compromises a single web server can use that server as a pivot point to reach database servers, Active Directory, or backup systems—all on the same L2/L3 network segment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2062-microsegmentation-approaches",
      children: "20.6.2 Microsegmentation Approaches"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Granularity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kernel-level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eBPF / kernel modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calico eBPF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-pod, per-process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overlay-based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VXLAN / Geneve tunnels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VMware NSX, Illumio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-VM, per-container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Host-based"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local firewall rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows Firewall, iptables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-host"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "K8s Network Policies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNI plugins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calico, Cilium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-namespace, per-pod"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Overlay[\"Overlay Network (VXLAN)\"]\n        direction TB\n        O1[VM1: Web Frontend] -->|VXLAN Tunnel| VTEP1[VTEP]\n        O2[VM2: API Server] -->|VXLAN Tunnel| VTEP2[VTEP]\n        O3[VM3: Database] -->|VXLAN Tunnel| VTEP3[VTEP]\n    end\n\n    subgraph Underlay[\"Physical Underlay\"]\n        direction TB\n        S1[Top-of-Rack Switch]\n        S2[Spine Switch]\n        S3[Core Router]\n    end\n\n    VTEP1 --> S1\n    VTEP2 --> S1\n    VTEP3 --> S3\n    S1 --> S2\n    S3 --> S2\n\n    style Overlay fill:#1a3a2c,stroke:#4caf50,stroke-width:2px\n    style Underlay fill:#2d1b69,stroke:#7c5cbf,stroke-width:2px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2063-microsegmentation-policy-generator",
      children: "20.6.3 Microsegmentation Policy Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ServiceDependency {\n  sourceService: string;\n  destService: string;\n  protocol: \"tcp\" | \"udp\" | \"icmp\";\n  port: number;\n  description: string;\n}\n\ninterface FirewallRule {\n  ruleId: string;\n  sourceIpRange: string;\n  destIpRange: string;\n  protocol: \"tcp\" | \"udp\" | \"icmp\";\n  port: number | string; // single port, range, or \"any\"\n  action: \"allow\" | \"deny\";\n  log: boolean;\n  description: string;\n}\n\ninterface ServiceDefinition {\n  name: string;\n  ipRange: string;\n  labels: Record<string, string>;\n}\n\nclass MicrosegmentationPolicyEngine {\n  private services: Map<string, ServiceDefinition> = new Map();\n\n  registerService(svc: ServiceDefinition): void {\n    this.services.set(svc.name, svc);\n  }\n\n  generateFirewallRules(\n    dependencies: ServiceDependency[]\n  ): FirewallRule[] {\n    const rules: FirewallRule[] = [];\n    const defaultDenyRule: FirewallRule = {\n      ruleId: \"default-deny\",\n      sourceIpRange: \"0.0.0.0/0\",\n      destIpRange: \"0.0.0.0/0\",\n      protocol: \"tcp\",\n      port: \"any\",\n      action: \"deny\",\n      log: true,\n      description: \"Default deny: all east-west traffic not explicitly allowed\",\n    };\n\n    for (const dep of dependencies) {\n      const source = this.services.get(dep.sourceService);\n      const dest = this.services.get(dep.destService);\n\n      if (!source || !dest) {\n        console.warn(`Unknown service in dependency: ${dep.sourceService} -> ${dep.destService}`);\n        continue;\n      }\n\n      const rule: FirewallRule = {\n        ruleId: `rule-${dep.sourceService}-to-${dep.destService}-${dep.port}`,\n        sourceIpRange: source.ipRange,\n        destIpRange: dest.ipRange,\n        protocol: dep.protocol,\n        port: dep.port,\n        action: \"allow\",\n        log: true,\n        description: dep.description,\n      };\n\n      rules.push(rule);\n    }\n\n    // Default deny is always the last rule\n    rules.push(defaultDenyRule);\n    return rules;\n  }\n\n  generateKubernetesNetworkPolicy(\n    namespace: string,\n    dependencies: ServiceDependency[]\n  ): Record<string, unknown> {\n    const ingressRules: Array<Record<string, unknown>> = [];\n    const egressRules: Array<Record<string, unknown>> = [];\n\n    for (const dep of dependencies) {\n      egressRules.push({\n        to: [{ namespaceSelector: {}, podSelector: { matchLabels: { app: dep.destService } } }],\n        ports: [{ protocol: dep.protocol.toUpperCase(), port: dep.port }],\n      });\n\n      ingressRules.push({\n        from: [{ namespaceSelector: {}, podSelector: { matchLabels: { app: dep.sourceService } } }],\n        ports: [{ protocol: dep.protocol.toUpperCase(), port: dep.port }],\n      });\n    }\n\n    return {\n      apiVersion: \"networking.k8s.io/v1\",\n      kind: \"NetworkPolicy\",\n      metadata: { name: \"zero-trust-policy\", namespace },\n      spec: {\n        podSelector: {},\n        policyTypes: [\"Ingress\", \"Egress\"],\n        ingress: ingressRules,\n        egress: egressRules,\n      },\n    };\n  }\n}\n\n// Example usage\nconst engine = new MicrosegmentationPolicyEngine();\n\nengine.registerService({ name: \"web-frontend\", ipRange: \"10.0.1.0/24\", labels: { app: \"web\" } });\nengine.registerService({ name: \"api-server\", ipRange: \"10.0.2.0/24\", labels: { app: \"api\" } });\nengine.registerService({ name: \"database\", ipRange: \"10.0.3.0/24\", labels: { app: \"db\" } });\nengine.registerService({ name: \"cache\", ipRange: \"10.0.4.0/24\", labels: { app: \"cache\" } });\n\nconst deps: ServiceDependency[] = [\n  { sourceService: \"web-frontend\", destService: \"api-server\", protocol: \"tcp\", port: 443, description: \"HTTPS API calls\" },\n  { sourceService: \"api-server\", destService: \"database\", protocol: \"tcp\", port: 5432, description: \"PostgreSQL queries\" },\n  { sourceService: \"api-server\", destService: \"cache\", protocol: \"tcp\", port: 6379, description: \"Redis cache lookups\" },\n];\n\nconst rules = engine.generateFirewallRules(deps);\nconsole.log(JSON.stringify(rules, null, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "207-iam-in-zero-trust",
      children: "20.7 IAM in Zero Trust"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2071-identity-federation-saml-and-oidc",
      children: "20.7.1 Identity Federation: SAML and OIDC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zero Trust requires ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "federated identity"
      }), " so that access decisions can be made without siloed credentials."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML 2.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OASIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML Assertions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise SSO, legacy apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OIDC (OpenID Connect)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IETF RFC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT (JSON Web Token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern apps, mobile, APIs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2072-continuous-authentication",
      children: "20.7.2 Continuous Authentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlike traditional \"authenticate once\" models, Zero Trust continuously verifies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keyboard/mouse dynamics"
        }), ": Behavioral biometrics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keystroke timing"
        }), ": Pattern analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gait analysis"
        }), ": For mobile users"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction signing"
        }), ": Step-up authentication for high-risk operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2073-risk-based-conditional-access",
      children: "20.7.3 Risk-Based Conditional Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface RiskAssessment {\n  userId: string;\n  overallRiskScore: number; // 0.0 - 1.0\n  riskFactors: {\n    factor: string;\n    score: number;\n    weight: number;\n  }[];\n  assessedAt: Date;\n}\n\ninterface ConditionalAccessPolicy {\n  name: string;\n  riskThreshold: number; // Score above this triggers action\n  action: \"block\" | \"require_mfa\" | \"require_device_attestation\" | \"limit_session\" | \"allow\";\n  sessionConstraints?: {\n    maxDurationMinutes: number;\n    allowCopyPaste: boolean;\n    allowDownload: boolean;\n    requireWatermark: boolean;\n  };\n}\n\nclass ConditionalAccessEngine {\n  private policies: ConditionalAccessPolicy[] = [];\n\n  addPolicy(policy: ConditionalAccessPolicy): void {\n    this.policies.push(policy);\n  }\n\n  evaluate(assessment: RiskAssessment): ConditionalAccessPolicy[] {\n    const triggered: ConditionalAccessPolicy[] = [];\n\n    // Sort by most restrictive first\n    const sorted = [...this.policies].sort(\n      (a, b) => b.riskThreshold - a.riskThreshold\n    );\n\n    for (const policy of sorted) {\n      if (assessment.overallRiskScore >= policy.riskThreshold) {\n        triggered.push(policy);\n      }\n    }\n\n    return triggered;\n  }\n\n  assessRisk(context: {\n    userId: string;\n    ipAddress: string;\n    geolocation: string;\n    deviceId: string;\n    osPatchLevel: string;\n    mfaMethod: string;\n    recentFailedAttempts: number;\n    abnormalAccessPatterns: string[];\n    resourceSensitivity: \"low\" | \"medium\" | \"high\" | \"critical\";\n  }): RiskAssessment {\n    const factors: RiskAssessment[\"riskFactors\"] = [];\n\n    // IP reputation (simulated)\n    const ipScore = context.ipAddress.startsWith(\"10.\") ? 0.0 : 0.3;\n    factors.push({ factor: \"ip_reputation\", score: ipScore, weight: 0.2 });\n\n    // Geolocation risk\n    const geoRisk = context.geolocation === context.geolocation ? 0.1 : 0.4;\n    factors.push({ factor: \"geo_anomaly\", score: geoRisk, weight: 0.15 });\n\n    // Device patch level\n    const patchScore = context.osPatchLevel === \"current\" ? 0.0 : 0.5;\n    factors.push({ factor: \"device_patch_status\", score: patchScore, weight: 0.2 });\n\n    // MFA strength\n    const mfaScores: Record<string, number> = {\n      none: 1.0,\n      sms: 0.5,\n      totp: 0.2,\n      hardware_key: 0.0,\n      biometric: 0.0,\n    };\n    const mfaScore = mfaScores[context.mfaMethod] ?? 0.5;\n    factors.push({ factor: \"mfa_strength\", score: mfaScore, weight: 0.25 });\n\n    // Behavioral anomaly\n    const behaviorScore = context.abnormalAccessPatterns.length * 0.2;\n    factors.push({ factor: \"behavioral_anomaly\", score: Math.min(1, behaviorScore), weight: 0.2 });\n\n    // Resource sensitivity multiplier\n    const sensitivityMultipliers: Record<string, number> = {\n      low: 0.8,\n      medium: 1.0,\n      high: 1.2,\n      critical: 1.5,\n    };\n    const multiplier = sensitivityMultipliers[context.resourceSensitivity] ?? 1.0;\n\n    const totalWeight = factors.reduce((sum, f) => sum + f.weight, 0);\n    const weightedScore =\n      factors.reduce((sum, f) => sum + f.score * f.weight, 0) / totalWeight;\n\n    return {\n      userId: context.userId,\n      overallRiskScore: Math.min(1, weightedScore * multiplier),\n      riskFactors: factors,\n      assessedAt: new Date(),\n    };\n  }\n}\n\n// Example usage\nconst caEngine = new ConditionalAccessEngine();\n\ncaEngine.addPolicy({\n  name: \"High Risk - Block\",\n  riskThreshold: 0.8,\n  action: \"block\",\n});\n\ncaEngine.addPolicy({\n  name: \"Elevated Risk - Require Hardware MFA\",\n  riskThreshold: 0.5,\n  action: \"require_mfa\",\n  sessionConstraints: {\n    maxDurationMinutes: 15,\n    allowCopyPaste: false,\n    allowDownload: false,\n    requireWatermark: true,\n  },\n});\n\ncaEngine.addPolicy({\n  name: \"Medium Risk - Standard Session\",\n  riskThreshold: 0.3,\n  action: \"limit_session\",\n  sessionConstraints: {\n    maxDurationMinutes: 60,\n    allowCopyPaste: true,\n    allowDownload: false,\n    requireWatermark: false,\n  },\n});\n\nconst assessment = caEngine.assessRisk({\n  userId: \"alice@example.com\",\n  ipAddress: \"198.51.100.42\",\n  geolocation: \"RU\",\n  deviceId: \"device-abc-123\",\n  osPatchLevel: \"6-months-behind\",\n  mfaMethod: \"sms\",\n  recentFailedAttempts: 3,\n  abnormalAccessPatterns: [\"impossible_travel_alert\", \"new_device\"],\n  resourceSensitivity: \"critical\",\n});\n\nconst actions = caEngine.evaluate(assessment);\nconsole.log(\"Risk Score:\", assessment.overallRiskScore.toFixed(2));\nconsole.log(\"Actions:\", actions.map((a) => `${a.name} -> ${a.action}`).join(\", \"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "208-beyondcorp-googles-zero-trust-implementation",
      children: "20.8 BeyondCorp: Google's Zero Trust Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2081-architecture-overview",
      children: "20.8.1 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google's BeyondCorp architecture consists of four core components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device Inventory Service (DIS)"
        }), ": Tracks every managed device, its state, and its user assignments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate Authority (CA)"
        }), ": Issues short-lived device certificates used for authentication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Proxy (AP)"
        }), ": Verifies every request against user identity and device state before proxying."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trust Engine"
        }), ": Continuously evaluates the trust level of each user/device combination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n    User([Employee Device])\n    subgraph BeyondCorp[\"BeyondCorp Architecture\"]\n        direction TB\n        AP[Access Proxy]\n        TE[Trust Engine]\n        CA[Certificate Authority<br/>Short-lived device certs]\n        DIS[Device Inventory Service]\n        PIP[Policy Information Point<br/>HR, IT, Security DBs]\n        PDP[Policy Decision Point]\n    end\n    subgraph Resources[\"Corporate Resources\"]\n        R1[Internal Web Apps]\n        R2[Source Repos]\n        R3[Admin Consoles]\n    end\n\n    User -->|mTLS + OIDC| AP\n    AP -->|Query device state| DIS\n    AP -->|Evaluate trust| TE\n    TE -->|Check patch level, disk encryption, OS| DIS\n    DIS --> CA\n    AP -->|Policy check| PDP\n    PDP --> PIP\n    AP -->|Access| Resources\n\n    style BeyondCorp fill:#1a2035,stroke:#ea4335,stroke-width:2px\n    style Resources fill:#1a3a2c,stroke:#34a853,stroke-width:2px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2082-full-beyondcorp-setup-guide-reference",
      children: "20.8.2 Full BeyondCorp Setup Guide Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device inventory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy fleet management (Google Endpoint Management, JAMF, Intune). Catalog every device with unique ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Certificate authority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stand up internal PKI. Issue device certificates with 24-hour TTL. Auto-renew via MDM agent."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trust engine"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define trust levels (low/medium/high) based on: OS patch, disk encryption, screen lock, firewall enabled, antivirus running"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access proxy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy Google Identity-Aware Proxy (IAP), Cloudflare Access, or custom nginx/envoy proxy. Enforce mTLS."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map users to groups. Map groups to applications. Add device trust requirements per application tier."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSO integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure OIDC/SAML federation. Enforce phishing-resistant MFA (Titan keys or WebAuthn)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gradual rollout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with low-risk apps (HR portals, expense reports). Expand to engineering tools, then to production."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Continuous monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy SIEM integration. Monitor access patterns. Alert on device health degradation during a session."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2083-beyondcorp-trust-engine-implementation",
      children: "20.8.3 BeyondCorp Trust Engine Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DeviceRecord {\n  deviceId: string;\n  assignedUser: string;\n  osVersion: string;\n  osPatchLevel: \"current\" | \"behind\" | \"critical\";\n  diskEncryptionEnabled: boolean;\n  firewallEnabled: boolean;\n  screenLockEnabled: boolean;\n  antivirusRunning: boolean;\n  lastCheckin: Date;\n  certificateExpiry: Date;\n}\n\ninterface UserContext {\n  userId: string;\n  groups: string[];\n  department: string;\n  clearanceLevel: \"standard\" | \"elevated\" | \"privileged\";\n  mfaDeviceEnrolled: boolean;\n  recentTravelAlert: boolean;\n}\n\ntype TrustLevel = \"low\" | \"medium\" | \"high\";\n\nclass BeyondCorpTrustEngine {\n  private deviceInventory = new Map<string, DeviceRecord>();\n\n  registerDevice(device: DeviceRecord): void {\n    this.deviceInventory.set(device.deviceId, device);\n  }\n\n  updateDevice(deviceId: string, updates: Partial<DeviceRecord>): void {\n    const existing = this.deviceInventory.get(deviceId);\n    if (existing) {\n      this.deviceInventory.set(deviceId, { ...existing, ...updates });\n    }\n  }\n\n  evaluateTrust(deviceId: string, user: UserContext): TrustLevel {\n    const device = this.deviceInventory.get(deviceId);\n    if (!device) return \"low\";\n\n    let score = 0;\n\n    // Device health checks (max 60 points)\n    if (device.diskEncryptionEnabled) score += 15;\n    if (device.firewallEnabled) score += 15;\n    if (device.screenLockEnabled) score += 10;\n    if (device.antivirusRunning) score += 10;\n\n    // Patch level (max 30 points)\n    switch (device.osPatchLevel) {\n      case \"current\":\n        score += 30;\n        break;\n      case \"behind\":\n        score += 10;\n        break;\n      case \"critical\":\n        score -= 20; // Negative score for unpatched critical vulns\n        break;\n    }\n\n    // Certificate health (max 10 points)\n    const certDaysRemaining = Math.round(\n      (device.certificateExpiry.getTime() - Date.now()) / (1000 * 60 * 60 * 24)\n    );\n    if (certDaysRemaining > 7) score += 10;\n    else if (certDaysRemaining > 1) score += 5;\n    else score += 0;\n\n    // Checkin recency (max 10 points)\n    const hoursSinceCheckin =\n      (Date.now() - device.lastCheckin.getTime()) / (1000 * 60 * 60);\n    if (hoursSinceCheckin < 1) score += 10;\n    else if (hoursSinceCheckin < 24) score += 5;\n    else score += 0;\n\n    // User risk factors (conditional)\n    if (user.recentTravelAlert) score -= 15;\n    if (!user.mfaDeviceEnrolled) score -= 10;\n\n    // Group-based bonus\n    if (user.clearanceLevel === \"privileged\") score += 5;\n\n    // Map score to trust level\n    if (score >= 70) return \"high\";\n    if (score >= 40) return \"medium\";\n    return \"low\";\n  }\n\n  allowAccess(\n    deviceId: string,\n    user: UserContext,\n    requiredTrustLevel: TrustLevel\n  ): boolean {\n    const actualLevel = this.evaluateTrust(deviceId, user);\n    const levels: Record<TrustLevel, number> = { low: 0, medium: 1, high: 2 };\n    return levels[actualLevel] >= levels[requiredTrustLevel];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "209-nist-sp-800-207-trust-algorithm",
      children: "20.9 NIST SP 800-207 Trust Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2091-continuous-trust-scoring",
      children: "20.9.1 Continuous Trust Scoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NIST SP 800-207 trust algorithm combines multiple attribute sources into a continuous score that evolves over time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface TrustAttribute {\n  name: string;\n  source: \"idp\" | \"cdm\" | \"threat_intel\" | \"behavioral\" | \"environmental\";\n  value: unknown;\n  confidence: number; // 0.0 - 1.0, how reliable is this source\n  timestamp: Date;\n}\n\ninterface TrustScoreResult {\n  score: number; // 0.0 - 1.0\n  attributes: TrustAttribute[];\n  weightContributions: { name: string; contribution: number }[];\n  evaluatedAt: Date;\n  decision: \"allow\" | \"deny\" | \"indeterminate\";\n  sessionTtlSeconds: number;\n}\n\nclass NistTrustAlgorithm {\n  private readonly ATTRIBUTE_WEIGHTS: Record<string, number> = {\n    identity_assurance: 0.25,\n    device_health: 0.20,\n    location_context: 0.10,\n    behavioral_biometrics: 0.15,\n    threat_intelligence: 0.15,\n    resource_sensitivity: 0.15,\n  };\n\n  evaluate(\n    attributes: TrustAttribute[],\n    sensitivityLevel: \"standard\" | \"sensitive\" | \"critical\"\n  ): TrustScoreResult {\n    // 1. Validate inputs\n    if (attributes.length === 0) {\n      return {\n        score: 0,\n        attributes: [],\n        weightContributions: [],\n        evaluatedAt: new Date(),\n        decision: \"deny\",\n        sessionTtlSeconds: 0,\n      };\n    }\n\n    // 2. Group attributes by category\n    const grouped = this.groupByCategory(attributes);\n\n    // 3. Calculate weighted score\n    const contributions: { name: string; contribution: number }[] = [];\n    let totalScore = 0;\n    let totalWeight = 0;\n\n    for (const [category, attrs] of Object.entries(grouped)) {\n      const weight = this.ATTRIBUTE_WEIGHTS[category] ?? 0.1;\n\n      // Take the most recent attribute in each category\n      const latest = attrs.sort(\n        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()\n      )[0];\n\n      // Calculate category score based on attribute\n      const categoryScore = this.scoreAttribute(category, latest);\n      const weightedContribution = categoryScore * weight * latest.confidence;\n\n      contributions.push({\n        name: category,\n        contribution: weightedContribution,\n      });\n\n      totalScore += weightedContribution;\n      totalWeight += weight * latest.confidence;\n    }\n\n    // 4. Normalize\n    const normalizedScore = totalWeight > 0 ? totalScore / totalWeight : 0;\n\n    // 5. Apply sensitivity modifier\n    const modifiers: Record<string, number> = {\n      standard: 1.0,\n      sensitive: 0.8,\n      critical: 0.6,\n    };\n    const finalScore = normalizedScore * (modifiers[sensitivityLevel] ?? 1.0);\n\n    // 6. Determine decision\n    const decision =\n      finalScore >= 0.7\n        ? \"allow\"\n        : finalScore >= 0.4\n          ? \"indeterminate\"\n          : \"deny\";\n\n    // 7. Calculate session TTL based on score\n    const sessionTtl = decision === \"allow\" ? Math.floor(finalScore * 3600) : 0;\n\n    return {\n      score: Math.round(finalScore * 100) / 100,\n      attributes,\n      weightContributions: contributions,\n      evaluatedAt: new Date(),\n      decision,\n      sessionTtlSeconds: sessionTtl,\n    };\n  }\n\n  private groupByCategory(\n    attributes: TrustAttribute[]\n  ): Record<string, TrustAttribute[]> {\n    const grouped: Record<string, TrustAttribute[]> = {};\n    for (const attr of attributes) {\n      if (!grouped[attr.name]) grouped[attr.name] = [];\n      grouped[attr.name].push(attr);\n    }\n    return grouped;\n  }\n\n  private scoreAttribute(\n    category: string,\n    attribute: TrustAttribute\n  ): number {\n    // Simplified scoring - in production, each category has a complex scoring model\n    switch (category) {\n      case \"identity_assurance\": {\n        const method = attribute.value as string;\n        const scores: Record<string, number> = {\n          hardware_mfa: 1.0,\n          totp: 0.8,\n          sms_otp: 0.4,\n          password_only: 0.2,\n          none: 0.0,\n        };\n        return scores[method] ?? 0.5;\n      }\n\n      case \"device_health\": {\n        const health = attribute.value as Record<string, boolean>;\n        let score = 0;\n        if (health.disk_encrypted) score += 0.25;\n        if (health.firewall_active) score += 0.25;\n        if (health.antivirus_running) score += 0.25;\n        if (health.screen_lock) score += 0.25;\n        return score;\n      }\n\n      case \"location_context\": {\n        const location = attribute.value as {\n          geo: string;\n          ip_reputation: \"good\" | \"suspicious\" | \"malicious\";\n        };\n        if (location.ip_reputation === \"malicious\") return 0.0;\n        if (location.ip_reputation === \"suspicious\") return 0.3;\n        return 0.9;\n      }\n\n      case \"threat_intelligence\": {\n        const threats = attribute.value as { activeAlerts: number };\n        if (threats.activeAlerts > 5) return 0.0;\n        if (threats.activeAlerts > 2) return 0.3;\n        return 1.0;\n      }\n\n      default:\n        return 0.5;\n    }\n  }\n}\n\n// Example usage\nconst algorithm = new NistTrustAlgorithm();\n\nconst attributes: TrustAttribute[] = [\n  {\n    name: \"identity_assurance\",\n    source: \"idp\",\n    value: \"hardware_mfa\",\n    confidence: 0.95,\n    timestamp: new Date(),\n  },\n  {\n    name: \"device_health\",\n    source: \"cdm\",\n    value: {\n      disk_encrypted: true,\n      firewall_active: true,\n      antivirus_running: true,\n      screen_lock: false,\n    },\n    confidence: 0.85,\n    timestamp: new Date(),\n  },\n  {\n    name: \"location_context\",\n    source: \"environmental\",\n    value: { geo: \"US\", ip_reputation: \"good\" },\n    confidence: 0.9,\n    timestamp: new Date(),\n  },\n  {\n    name: \"threat_intelligence\",\n    source: \"threat_intel\",\n    value: { activeAlerts: 0 },\n    confidence: 0.8,\n    timestamp: new Date(),\n  },\n];\n\nconst result = algorithm.evaluate(attributes, \"sensitive\");\nconsole.log(\"NIST Trust Score:\", result.score);\nconsole.log(\"Decision:\", result.decision);\nconsole.log(\"Session TTL:\", result.sessionTtlSeconds, \"seconds\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2010-endpoint-security-in-zero-trust",
      children: "20.10 Endpoint Security in Zero Trust"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20101-device-health-attestation",
      children: "20.10.1 Device Health Attestation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before granting access, Zero Trust systems must verify device health. This goes beyond simple antivirus checks to include hardware-level verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface DeviceHealthReport {\n  deviceId: string;\n  timestamp: Date;\n  tpmMeasurements: {\n    bootRomHash: string;\n    osKernelHash: string;\n    secureBootEnabled: boolean;\n    tpmFirmwareVersion: string;\n  };\n  osInfo: {\n    osType: string;\n    osVersion: string;\n    patchLevel: string;\n    lastPatchDate: Date;\n  };\n  securityControls: {\n    diskEncryption: boolean;\n    firewallEnabled: boolean;\n    screenLockEnabled: boolean;\n    biometricEnabled: boolean;\n    antivirusEnabled: boolean;\n    antivirusDefinitionsUpToDate: boolean;\n    remoteManagementEnabled: boolean;\n    debuggingModeEnabled: boolean;\n  };\n  processes: Array<{\n    name: string;\n    signed: boolean;\n    memoryUsage: number;\n  }>;\n  certificates: Array<{\n    thumbprint: string;\n    issuer: string;\n    notAfter: Date;\n    revoked: boolean;\n  }>;\n}\n\nclass DeviceHealthAttestationVerifier {\n  private readonly EXPECTED_TPM_BOOT_HASH = \"a1b2c3d4e5f6...\";\n  private readonly MINIMUM_PATCH_DAYS = 30;\n  private readonly ALLOWED_OS_VERSIONS = new Set([\n    \"Windows 11 23H2\",\n    \"Windows 11 24H2\",\n    \"macOS 14 Sonoma\",\n    \"macOS 15 Sequoia\",\n    \"Ubuntu 22.04\",\n    \"Ubuntu 24.04\",\n  ]);\n\n  verify(report: DeviceHealthReport): {\n    passed: boolean;\n    score: number;\n    findings: Array<{ check: string; passed: boolean; severity: \"critical\" | \"high\" | \"medium\" | \"low\" }>;\n  } {\n    const findings: Array<{\n      check: string;\n      passed: boolean;\n      severity: \"critical\" | \"high\" | \"medium\" | \"low\";\n    }> = [];\n    let passedChecks = 0;\n    let totalChecks = 0;\n\n    // 1. TPM attestation\n    totalChecks++;\n    const tpmOk =\n      report.tpmMeasurements.bootRomHash === this.EXPECTED_TPM_BOOT_HASH &&\n      report.tpmMeasurements.secureBootEnabled;\n    findings.push({\n      check: \"TPM Boot Integrity\",\n      passed: tpmOk,\n      severity: \"critical\",\n    });\n    if (tpmOk) passedChecks++;\n\n    // 2. OS version check\n    totalChecks++;\n    const osOk = this.ALLOWED_OS_VERSIONS.has(report.osInfo.osVersion);\n    findings.push({\n      check: \"OS Version Allowed\",\n      passed: osOk,\n      severity: \"high\",\n    });\n    if (osOk) passedChecks++;\n\n    // 3. Patch recency\n    totalChecks++;\n    const daysSincePatch = Math.round(\n      (Date.now() - report.osInfo.lastPatchDate.getTime()) / (1000 * 60 * 60 * 24)\n    );\n    const patchOk = daysSincePatch <= this.MINIMUM_PATCH_DAYS;\n    findings.push({\n      check: \"Patch Recency\",\n      passed: patchOk,\n      severity: \"critical\",\n    });\n    if (patchOk) passedChecks++;\n\n    // 4. Disk encryption\n    totalChecks++;\n    findings.push({\n      check: \"Disk Encryption\",\n      passed: report.securityControls.diskEncryption,\n      severity: \"high\",\n    });\n    if (report.securityControls.diskEncryption) passedChecks++;\n\n    // 5. Firewall\n    totalChecks++;\n    findings.push({\n      check: \"Firewall Active\",\n      passed: report.securityControls.firewallEnabled,\n      severity: \"high\",\n    });\n    if (report.securityControls.firewallEnabled) passedChecks++;\n\n    // 6. Screen lock\n    totalChecks++;\n    findings.push({\n      check: \"Screen Lock\",\n      passed: report.securityControls.screenLockEnabled,\n      severity: \"medium\",\n    });\n    if (report.securityControls.screenLockEnabled) passedChecks++;\n\n    // 7. Antivirus\n    totalChecks++;\n    const avOk =\n      report.securityControls.antivirusEnabled &&\n      report.securityControls.antivirusDefinitionsUpToDate;\n    findings.push({\n      check: \"Antivirus Active + Up-to-Date\",\n      passed: avOk,\n      severity: \"high\",\n    });\n    if (avOk) passedChecks++;\n\n    // 8. Debugging mode\n    totalChecks++;\n    const noDebug = !report.securityControls.debuggingModeEnabled;\n    findings.push({\n      check: \"Debugging Mode Disabled\",\n      passed: noDebug,\n      severity: \"medium\",\n    });\n    if (noDebug) passedChecks++;\n\n    // 9. Certificate revocation\n    totalChecks++;\n    const allCertsValid = report.certificates.every((c) => !c.revoked);\n    findings.push({\n      check: \"Device Certificates Not Revoked\",\n      passed: allCertsValid,\n      severity: \"critical\",\n    });\n    if (allCertsValid) passedChecks++;\n\n    // Calculate score\n    const score = totalChecks > 0 ? passedChecks / totalChecks : 0;\n\n    return {\n      passed: score >= 0.7, // 70% threshold for basic access\n      score,\n      findings,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20102-tpm-and-confidential-computing",
      children: "20.10.2 TPM and Confidential Computing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern Zero Trust leverages hardware security features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TPM 2.0"
        }), ": Measured boot ensures the OS hasn't been tampered with."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trusted Execution Environments (TEE)"
        }), ": Intel SGX, AMD SEV, and ARM TrustZone provide hardware-enforced isolation for sensitive workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confidential Computing"
        }), ": Encrypts data in use (not just at rest and in transit), ensuring that even the host OS cannot access application memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20103-access-token-validation-and-introspection",
      children: "20.10.3 Access Token Validation and Introspection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface AccessToken {\n  iss: string;           // Issuer\n  sub: string;           // Subject (user ID)\n  aud: string[];         // Audience (target services)\n  exp: number;           // Expiration timestamp\n  iat: number;           // Issued at timestamp\n  jti: string;           // JWT ID (unique token identifier)\n  clientId: string;      // OAuth2 client\n  scope: string;         // Requested permissions\n  amr: string[];         // Authentication methods used\n  deviceId: string;\n  sessionId: string;\n  trustLevel: string;\n  geo: string;\n}\n\ninterface TokenIntrospectionResponse {\n  active: boolean;\n  tokenType: string;\n  sub?: string;\n  iss?: string;\n  exp?: number;\n  iat?: number;\n  clientId?: string;\n  scope?: string;\n  deviceAttested?: boolean;\n  riskScore?: number;\n  error?: string;\n}\n\nclass TokenValidationService {\n  private readonly ISSUER = \"https://auth.enterprise.com/\";\n  private readonly JWKS_URI = \"https://auth.enterprise.com/.well-known/jwks.json\";\n  private revokedTokens = new Set<string>();\n  private readonly MAX_CLOCK_SKEW_SECONDS = 300;\n\n  async validate(token: string, expectedAudience: string): Promise<TokenIntrospectionResponse> {\n    try {\n      // 1. Decode without verification first to inspect header\n      const parts = token.split(\".\");\n      if (parts.length !== 3) {\n        return { active: false, tokenType: \"invalid\", error: \"Malformed token\" };\n      }\n\n      const header = JSON.parse(\n        Buffer.from(parts[0], \"base64url\").toString()\n      );\n      const payload: AccessToken = JSON.parse(\n        Buffer.from(parts[1], \"base64url\").toString()\n      );\n\n      // 2. Verify issuer\n      if (payload.iss !== this.ISSUER) {\n        return { active: false, tokenType: \"jwt\", error: \"Invalid issuer\" };\n      }\n\n      // 3. Verify audience\n      if (!payload.aud.includes(expectedAudience)) {\n        return { active: false, tokenType: \"jwt\", error: \"Invalid audience\" };\n      }\n\n      // 4. Check expiration (with clock skew tolerance)\n      const now = Math.floor(Date.now() / 1000);\n      if (payload.exp < now - this.MAX_CLOCK_SKEW_SECONDS) {\n        return { active: false, tokenType: \"jwt\", error: \"Token expired\" };\n      }\n\n      // 5. Check if token was not issued in the future\n      if (payload.iat > now + this.MAX_CLOCK_SKEW_SECONDS) {\n        return { active: false, tokenType: \"jwt\", error: \"Token issued in future\" };\n      }\n\n      // 6. Check revocation\n      if (this.revokedTokens.has(payload.jti)) {\n        return { active: false, tokenType: \"jwt\", error: \"Token revoked\" };\n      }\n\n      // 7. Verify signature (in production, use JWKS)\n      // const key = await this.fetchSigningKey(header.kid);\n      // const verified = verifyRS256(token, key);\n      const verified = true; // Simplified for example\n\n      if (!verified) {\n        return { active: false, tokenType: \"jwt\", error: \"Invalid signature\" };\n      }\n\n      // 8. Return full introspection response\n      return {\n        active: true,\n        tokenType: \"bearer\",\n        sub: payload.sub,\n        iss: payload.iss,\n        exp: payload.exp,\n        iat: payload.iat,\n        clientId: payload.clientId,\n        scope: payload.scope,\n        deviceAttested: payload.amr.includes(\"hwk\") || payload.amr.includes(\"swk\"),\n        riskScore: payload.trustLevel === \"high\" ? 0.1 : 0.6,\n      };\n    } catch (err) {\n      return {\n        active: false,\n        tokenType: \"jwt\",\n        error: `Validation error: ${(err as Error).message}`,\n      };\n    }\n  }\n\n  revokeToken(jti: string): void {\n    this.revokedTokens.add(jti);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2011-security-policy-as-code",
      children: "20.11 Security Policy as Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20111-opa-style-policy-engine",
      children: "20.11.1 OPA-Style Policy Engine"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zero Trust policies must be machine-readable, version-controlled, and automatically testable. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy as code"
      }), " (pioneered by Open Policy Agent / OPA) enables this."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ─── AST (Abstract Syntax Tree) for policy language ───\n\ntype PolicyValue =\n  | { type: \"string\"; value: string }\n  | { type: \"number\"; value: number }\n  | { type: \"boolean\"; value: boolean }\n  | { type: \"array\"; value: PolicyValue[] }\n  | { type: \"object\"; value: Record<string, PolicyValue> };\n\ninterface PolicyRule {\n  name: string;\n  condition: PolicyExpression;\n  effect: \"allow\" | \"deny\" | \"require_mfa\" | \"log\";\n  priority: number;\n}\n\ntype PolicyExpression =\n  | { operator: \"eq\"; left: string; right: PolicyValue }\n  | { operator: \"neq\"; left: string; right: PolicyValue }\n  | { operator: \"gt\"; left: string; right: PolicyValue }\n  | { operator: \"lt\"; left: string; right: PolicyValue }\n  | { operator: \"in\"; left: string; right: PolicyValue }\n  | { operator: \"and\"; expressions: PolicyExpression[] }\n  | { operator: \"or\"; expressions: PolicyExpression[] }\n  | { operator: \"not\"; expression: PolicyExpression };\n\ninterface PolicyDocument {\n  apiVersion: string;\n  metadata: { name: string; description: string };\n  rules: PolicyRule[];\n  defaultEffect: \"allow\" | \"deny\";\n}\n\n// ─── Context for policy evaluation ───\n\ninterface EvaluationContext {\n  user: {\n    id: string;\n    groups: string[];\n    department: string;\n    clearance: string;\n  };\n  device: {\n    id: string;\n    os: string;\n    patchLevel: string;\n    attested: boolean;\n  };\n  request: {\n    resource: string;\n    action: string;\n    method: string;\n    ipAddress: string;\n    geolocation: string;\n    timestamp: Date;\n  };\n  environment: {\n    threatLevel: \"low\" | \"medium\" | \"high\" | \"critical\";\n    businessHours: boolean;\n  };\n}\n\n// ─── Policy Parser and Evaluator ───\n\nclass PolicyEngine {\n  private documents: PolicyDocument[] = [];\n\n  loadPolicy(document: PolicyDocument): void {\n    this.validatePolicy(document);\n    this.documents.push(document);\n  }\n\n  private validatePolicy(doc: PolicyDocument): void {\n    if (!doc.rules || doc.rules.length === 0) {\n      throw new Error(`Policy ${doc.metadata.name} has no rules`);\n    }\n    for (const rule of doc.rules) {\n      if (!rule.name || !rule.effect) {\n        throw new Error(`Invalid rule in policy ${doc.metadata.name}`);\n      }\n    }\n  }\n\n  evaluate(context: EvaluationContext): {\n    decision: \"allow\" | \"deny\";\n    matchedRule: string | null;\n    matchedPolicy: string | null;\n    reasons: string[];\n  } {\n    // Sort rules by priority across all documents\n    const allRules = this.documents.flatMap((doc) =>\n      doc.rules.map((rule) => ({ doc, rule }))\n    ).sort((a, b) => b.rule.priority - a.rule.priority);\n\n    for (const { doc, rule } of allRules) {\n      const matched = this.evaluateExpression(rule.condition, context);\n      if (matched) {\n        return {\n          decision: rule.effect === \"allow\" ? \"allow\" : \"deny\",\n          matchedRule: rule.name,\n          matchedPolicy: doc.metadata.name,\n          reasons: [`Matched rule \"${rule.name}\" in policy \"${doc.metadata.name}\"`],\n        };\n      }\n    }\n\n    // Default effect\n    const defaultEffect = this.documents[this.documents.length - 1]?.defaultEffect ?? \"deny\";\n    return {\n      decision: defaultEffect,\n      matchedRule: null,\n      matchedPolicy: null,\n      reasons: [\"No matching rule, applied default effect\"],\n    };\n  }\n\n  private evaluateExpression(\n    expr: PolicyExpression,\n    context: EvaluationContext\n  ): boolean {\n    switch (expr.operator) {\n      case \"eq\": {\n        const left = this.resolvePath(expr.left, context);\n        const right = this.policyValueToPrimitive(expr.right);\n        return left === right;\n      }\n      case \"neq\": {\n        const left = this.resolvePath(expr.left, context);\n        const right = this.policyValueToPrimitive(expr.right);\n        return left !== right;\n      }\n      case \"gt\": {\n        const left = Number(this.resolvePath(expr.left, context));\n        const right = (expr.right as { type: \"number\"; value: number }).value;\n        return left > right;\n      }\n      case \"lt\": {\n        const left = Number(this.resolvePath(expr.left, context));\n        const right = (expr.right as { type: \"number\"; value: number }).value;\n        return left < right;\n      }\n      case \"in\": {\n        const left = this.resolvePath(expr.left, context);\n        const arr = (expr.right as { type: \"array\"; value: PolicyValue[] }).value;\n        return arr.some((v) => this.policyValueToPrimitive(v) === left);\n      }\n      case \"and\":\n        return expr.expressions.every((e) => this.evaluateExpression(e, context));\n      case \"or\":\n        return expr.expressions.some((e) => this.evaluateExpression(e, context));\n      case \"not\":\n        return !this.evaluateExpression(expr.expression, context);\n      default:\n        return false;\n    }\n  }\n\n  private resolvePath(path: string, context: EvaluationContext): unknown {\n    const keys = path.split(\".\");\n    let value: Record<string, unknown> | unknown = context as unknown as Record<string, unknown>;\n    for (const key of keys) {\n      if (value && typeof value === \"object\") {\n        value = (value as Record<string, unknown>)[key];\n      } else {\n        return undefined;\n      }\n    }\n    return value;\n  }\n\n  private policyValueToPrimitive(v: PolicyValue): unknown {\n    switch (v.type) {\n      case \"string\": return v.value;\n      case \"number\": return v.value;\n      case \"boolean\": return v.value;\n      default: return v.value;\n    }\n  }\n}\n\n// ─── Example Policy ───\n\nconst policy: PolicyDocument = {\n  apiVersion: \"ztp/v1\",\n  metadata: {\n    name: \"production-access\",\n    description: \"Zero Trust policy for production environment access\",\n  },\n  rules: [\n    {\n      name: \"block-suspicious-geo\",\n      condition: {\n        operator: \"or\",\n        expressions: [\n          { operator: \"eq\", left: \"request.geolocation\", right: { type: \"string\", value: \"RU\" } },\n          { operator: \"eq\", left: \"request.geolocation\", right: { type: \"string\", value: \"CN\" } },\n          { operator: \"eq\", left: \"request.geolocation\", right: { type: \"string\", value: \"IR\" } },\n        ],\n      },\n      effect: \"deny\",\n      priority: 100,\n    },\n    {\n      name: \"require-mfa-for-sensitive-actions\",\n      condition: {\n        operator: \"eq\", left: \"request.action\", right: { type: \"string\", value: \"admin\" },\n      },\n      effect: \"require_mfa\",\n      priority: 90,\n    },\n    {\n      name: \"device-must-be-attested\",\n      condition: {\n        operator: \"eq\", left: \"device.attested\", right: { type: \"boolean\", value: true },\n      },\n      effect: \"allow\",\n      priority: 80,\n    },\n    {\n      name: \"allow-managed-devices-standard-access\",\n      condition: {\n        operator: \"and\",\n        expressions: [\n          { operator: \"eq\", left: \"device.attested\", right: { type: \"boolean\", value: true } },\n          { operator: \"eq\", left: \"request.action\", right: { type: \"string\", value: \"read\" } },\n          { operator: \"in\", left: \"user.groups\", right: { type: \"array\", value: [{ type: \"string\", value: \"engineering\" }, { type: \"string\", value: \"devops\" }] } },\n        ],\n      },\n      effect: \"allow\",\n      priority: 70,\n    },\n  ],\n  defaultEffect: \"deny\",\n};\n\n// ─── Evaluation Example ───\n\nconst engine = new PolicyEngine();\nengine.loadPolicy(policy);\n\nconst result = engine.evaluate({\n  user: { id: \"alice\", groups: [\"engineering\"], department: \"eng\", clearance: \"standard\" },\n  device: { id: \"d-001\", os: \"macOS\", patchLevel: \"current\", attested: true },\n  request: {\n    resource: \"prod-api\",\n    action: \"read\",\n    method: \"GET\",\n    ipAddress: \"203.0.113.42\",\n    geolocation: \"US\",\n    timestamp: new Date(),\n  },\n  environment: { threatLevel: \"low\", businessHours: true },\n});\n\nconsole.log(\"Policy Decision:\", result.decision);\nconsole.log(\"Matched Rule:\", result.matchedRule);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2012-vendor-comparison",
      children: "20.12 Vendor Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20121-major-zero-trust-vendors",
      children: "20.12.1 Major Zero Trust Vendors"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Capability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zscaler"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Palo Alto Networks"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloudflare"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microsoft"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ZTNA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZPA (App Connector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma Access (GP Client)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare Access (WARP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entra App Proxy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SASE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler Internet Access (ZIA) + ZPA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma SASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Entra Net + Defender"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SWG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZIA (built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma Access (PAN-OS NGFW SWG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defender for Cloud Apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CASB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler CASB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma CASB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare CASB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Defender CASB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microsegmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler Private Access (app-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prisma SD-WAN + VM-Series"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare Tunnel (app-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Azure Network Security Groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler IdP or 3rd party"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palo Alto IdP or 3rd party"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare Zero Trust + 3rd party"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Entra ID (native)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-only (no on-prem)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud + physical appliances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-only (global edge)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud + hybrid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pricing model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user + per-GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user + throughput-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user + per-request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-user (E5 licensing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key differentiator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest SASE footprint (150+ PoPs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-powered threat prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global edge network (310+ cities)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep Microsoft ecosystem integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20122-decision-framework",
      children: "20.12.2 Decision Framework"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Vendor"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud-first startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare (fastest deployment, simple pricing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large enterprise, Windows-heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Entra (native Office 365 integration)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regulated industry (finance, healthcare)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler (most mature, FedRAMP authorized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hybrid data center + cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palo Alto Prisma (NGFW integration)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Price-sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloudflare (free tier for small teams)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full replacement of MPLS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palo Alto Prisma SD-WAN or Zscaler"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2013-zero-trust-implementation-roadmap",
      children: "20.13 Zero Trust Implementation Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-foundation-months-13",
      children: "Phase 1: Foundation (Months 1–3)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory all users, devices, and applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset register"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy MDM/UEM (Intune, JAMF, Workspace ONE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stand up identity provider (Entra ID, Okta)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSO/MFA for all apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create device health baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device attestation policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Define data classification tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data sensitivity matrix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-access-control-months-46",
      children: "Phase 2: Access Control (Months 4–6)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy ZTNA for all internal web applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN replacement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement conditional access policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk-based access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Roll out device certificate PKI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-lived device certs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement microsegmentation for critical tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "East-west traffic rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy SASE for branch office connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SD-WAN + SSE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-continuous-validation-months-79",
      children: "Phase 3: Continuous Validation (Months 7–9)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy UEBA (User and Entity Behavior Analytics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavioral baselines"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate threat intelligence feeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated risk scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement session monitoring and revocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous trust"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy DLP for sensitive data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data loss prevention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conduct Zero Trust penetration test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security validation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-optimization-months-1012",
      children: "Phase 4: Optimization (Months 10–12)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Activity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automate policy as code in CI/CD pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitOps for security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement confidential computing for sensitive workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-enforced isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy AI-based anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictive risk scoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Achieve CISA ZT Maturity Model \"Optimal\" level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity assessment report"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2014-cisa-zero-trust-maturity-model-assessment",
      children: "20.14 CISA Zero Trust Maturity Model Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20141-self-assessment-questionnaire",
      children: "20.14.1 Self-Assessment Questionnaire"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rate each capability as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traditional (T)"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced (A)"
      }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimal (O)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Identity Pillar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " T: Password-based auth, manual provisioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " A: MFA enforced, automated lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " O: Continuous authentication, risk-based step-up, phishing-resistant MFA"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Device Pillar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " T: Basic asset inventory, manual compliance checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " A: MDM deployed, automated patch management, device health checks at login"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " O: Continuous device attestation, TPM-based health, zero touch enrollment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Pillar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " T: VPN-based access, flat network, perimeter firewall"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " A: Macro-segmentation, ZTNA for some apps, traffic encryption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " O: Full microsegmentation, SASE, all traffic encrypted + inspected"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application Pillar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " T: On-prem apps, manual access reviews, no application security testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " A: Cloud migration started, automated access reviews, basic API security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " O: All apps behind ZTNA, runtime protection, policy as code, automated CI/CD security"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Pillar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " T: No data classification, perimeter-only DLP"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " A: Data classification implemented, basic DLP at cloud gateways"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " O: Full data discovery + classification, encryption at rest/transit/use, automated DLP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20142-scoring",
      children: "20.14.2 Scoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Traditional = 1 point per item\nAdvanced   = 3 points per item\nOptimal    = 5 points per item\n\nScore interpretation:\n  5-9:   Early stage (significant perimeter dependency)\n  10-19: Transitioning (partial Zero Trust deployment)\n  20-24: Advanced (most Zero Trust capabilities implemented)\n  25:    Optimal (fully mature Zero Trust architecture)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement continuous trust scoring based on NIST SP 800-207"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the NistTrustAlgorithm class to evaluate identity, device, location, and behaviour for every access request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy identity-aware proxy to replace VPNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set up Cloudflare Access or Zscaler ZPA to broker per-application sessions instead of network-level access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enforce microsegmentation with default-deny east-west rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the MicrosegmentationPolicyEngine to generate firewall rules; apply default-deny on all internal traffic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separate control plane from data plane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure Policy Engine and Policy Administrator run on isolated infrastructure from PEP gateways"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Require device attestation for every endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrate TPM 2.0 measured boot and MDM health checks into the trust score calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply risk-based conditional access policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure tiered policies: block at risk > 0.8, require MFA at risk > 0.5, limit session at risk > 0.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Measure Zero Trust maturity using CISA framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assess your organisation across 5 pillars (Identity, Device, Network, App, Data) from Traditional to Optimal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Trust"
        }), " originated with John Kindervag at Forrester in 2010, was operationalized by Google BeyondCorp (2011–2014), standardized by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NIST SP 800-207"
        }), " (2020), and organized into maturity tiers by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CISA"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The five core principles—", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never trust/always verify, assume breach, least privilege, microsegmentation, and continuous validation"
        }), "—form the philosophical foundation of every Zero Trust implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIST SP 800-207"
        }), " defines a logical architecture with seven components, centered on the Policy Engine (PE), Policy Administrator (PA), and Policy Enforcement Point (PEP), with strict ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "control plane / data plane separation"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SASE"
        }), " converges SD-WAN with SSE (CASB, SWG, ZTNA, FWaaS) into a single cloud-delivered platform, eliminating the distinction between network and security teams."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ZTNA"
        }), " replaces VPNs with identity-aware, per-session application access. Two models dominate: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "client-initiated"
        }), " (Zscaler, Cloudflare) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "service-initiated"
        }), " (Appgate, Microsoft Entra)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Microsegmentation"
        }), " prevents lateral movement by isolating east-west traffic. Approaches range from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kernel-level"
        }), " (eBPF/Calico) to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "overlay-based"
        }), " (NSX/Illumio)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IAM"
        }), " in Zero Trust extends beyond SSO to include ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "continuous authentication"
        }), " (behavioral biometrics) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "risk-based conditional access"
        }), " that adapts in real time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Device health attestation"
        }), " leveraging ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TPM 2.0"
        }), ", secure boot, and confidential computing provides hardware-rooted assurance that endpoints are trustworthy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy as code"
        }), " (OPA-style) enables version-controlled, automatically tested security policies that integrate into CI/CD pipelines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CISA Zero Trust Maturity Model"
        }), " provides a structured assessment across five pillars (Identity, Device, Network, Application, Data) and three maturity levels (Traditional → Advanced → Optimal)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Who coined the term \"Zero Trust\"?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "John Kindervag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google BeyondCorp team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gartner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which NIST publication defines the Zero Trust logical architecture?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-207"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST SP 800-171"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NIST CSF 1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the NIST ZTA model, which component makes the final access decision?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Enforcement Point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Administrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity Provider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does SASE stand for?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Access Service Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Application Service Environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security and Access Service Edge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure Architecture for Service Endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is NOT a core principle of Zero Trust?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never trust, always verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assume breach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust but verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary function of microsegmentation?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improve network throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent lateral movement by isolating east-west traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace all firewall rules with a single perimeter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidate data center servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the BeyondCorp model, what does the Access Proxy do?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminates VPN connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifies every request against user identity and device state before proxying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides DHCP and DNS services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes traffic based on BGP metrics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which of the following is a client-initiated ZTNA solution?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appgate SDP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microsoft Entra App Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zscaler Private Access (ZPA)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both B and C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What hardware component provides measured boot attestation in Zero Trust endpoint security?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TPM 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSD controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "According to the CISA Zero Trust Maturity Model, which is the highest maturity level?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Solution"
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-1-implement-a-risk-score-aggregator",
        children: "Exercise 1: Implement a Risk Score Aggregator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NistTrustAlgorithm"
        }), " class to support ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "temporal decay"
        }), "—attributes older than a configurable threshold should contribute less to the overall trust score. Use a half-life formula where the attribute weight decays exponentially."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-2-multi-cloud-microsegmentation",
        children: "Exercise 2: Multi-Cloud Microsegmentation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Extend the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MicrosegmentationPolicyEngine"
        }), " to generate firewall rules for multiple cloud providers simultaneously. Add a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cloudProvider"
        }), " field to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ServiceDependency"
        }), " and generate separate rule sets for AWS (Security Groups), Azure (NSGs), and GCP (Firewall Rules)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-3-session-risk-monitor",
        children: "Exercise 3: Session Risk Monitor"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SessionRiskMonitor"
        }), " class that periodically re-assesses an active session's risk score. If the score drops below a threshold, the session should be terminated or require step-up authentication. The monitor should consume device telemetry, threat intelligence, and behavioral data at configurable intervals."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-4-sase-traffic-routing-simulator",
        children: "Exercise 4: SASE Traffic Routing Simulator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SaseTrafficSimulator"
        }), " that generates random user traffic patterns and routes them through the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SasePolicyEnforcer"
        }), ". Measure and report the percentage of traffic allowed, denied, redirected, or isolated per hour. Log all policy violations with user, resource, and policy details."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "exercise-5-policy-as-code---gitops-workflow",
        children: "Exercise 5: Policy as Code - GitOps Workflow"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PolicyGitOps"
        }), " class that watches a Git repository for policy changes, validates the policy YAML/JSON against a schema, deploys new policies to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PolicyEngine"
        }), ", and rolls back if the success rate drops below a threshold. Include a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dryRun"
        }), " mode that evaluates new policies against historical traffic logs before deploying."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Zero Trust is not a product you buy; it is a security strategy you implement. The journey starts with a single step: stop trusting implicitly, start verifying continuously.\""
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