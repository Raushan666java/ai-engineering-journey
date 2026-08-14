"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61720],{

/***/ 7746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cloud_computing_07_cloud_security_md_912_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cloud-computing-07-cloud-security-md-912.json
const site_docs_courses_cloud_computing_07_cloud_security_md_912_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cloud-computing/07-cloud-security","title":"Chapter 7: Cloud Security","description":"Previous Cloud Networking | Next Serverless Computing","source":"@site/docs/courses/cloud-computing/07-cloud-security.md","sourceDirName":"courses/cloud-computing","slug":"/cloud-computing/07-cloud-security","permalink":"/ai-engineering-journey/cloud-computing/07-cloud-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-cloud-security","slug":"/cloud-computing/07-cloud-security","title":"Chapter 7: Cloud Security","sidebar_label":"Chapter 7: Cloud Security","sidebar_position":7},"sidebar":"course-cloud-computing","previous":{"title":"Chapter 6: Cloud Networking","permalink":"/ai-engineering-journey/cloud-computing/06-cloud-networking"},"next":{"title":"Chapter 8: Serverless Computing","permalink":"/ai-engineering-journey/cloud-computing/08-serverless"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cloud-computing/07-cloud-security.md


const frontMatter = {
	id: '07-cloud-security',
	slug: '/cloud-computing/07-cloud-security',
	title: 'Chapter 7: Cloud Security',
	sidebar_label: 'Chapter 7: Cloud Security',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Cloud Security';

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
  "value": "7.1 Shared Responsibility Model",
  "id": "71-shared-responsibility-model",
  "level": 3
}, {
  "value": "7.2 Identity and Access Management (IAM)",
  "id": "72-identity-and-access-management-iam",
  "level": 3
}, {
  "value": "7.3 Data Encryption",
  "id": "73-data-encryption",
  "level": 3
}, {
  "value": "7.4 Network Security Services",
  "id": "74-network-security-services",
  "level": 3
}, {
  "value": "7.5 Secrets Management",
  "id": "75-secrets-management",
  "level": 3
}, {
  "value": "7.6 Compliance Frameworks",
  "id": "76-compliance-frameworks",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 7.1: IAM Role for EC2 with S3 Access",
  "id": "example-71-iam-role-for-ec2-with-s3-access",
  "level": 3
}, {
  "value": "Example 7.2: KMS Encryption Workflow",
  "id": "example-72-kms-encryption-workflow",
  "level": 3
}, {
  "value": "Example 7.3: GuardDuty Finding Types",
  "id": "example-73-guardduty-finding-types",
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
  "value": "TypeScript: IAM Policy Analyzer",
  "id": "typescript-iam-policy-analyzer",
  "level": 3
}, {
  "value": "TypeScript: WAF Rule Engine",
  "id": "typescript-waf-rule-engine",
  "level": 3
}, {
  "value": "TypeScript: IAM Policy Diff Checker &amp; Encryption Validator",
  "id": "typescript-iam-policy-diff-checker--encryption-validator",
  "level": 3
}, {
  "value": "Pulumi: KMS Key and Encryption Setup",
  "id": "pulumi-kms-key-and-encryption-setup",
  "level": 2
}, {
  "value": "Automated Incident Response Flow",
  "id": "automated-incident-response-flow",
  "level": 2
}, {
  "value": "Real-World Case Study: Capital One Data Breach (2019)",
  "id": "real-world-case-study-capital-one-data-breach-2019",
  "level": 2
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
        id: "chapter-7-cloud-security",
        children: "Chapter 7: Cloud Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/06-cloud-networking",
          children: "Chapter 6: Cloud Networking"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/cloud-computing/08-serverless",
          children: "Chapter 8: Serverless Computing"
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
        href: "../../assets/images/lessons/cloud-computing/07-cloud-security/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/07-cloud-security/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/07-cloud-security/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/07-cloud-security/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/cloud-computing/07-cloud-security/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/cloud-computing/07-cloud-security/visual-explanation.png",
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
        children: "Apply the shared responsibility model to determine security boundaries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure IAM users, groups, roles, and policies for least-privilege access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement encryption at rest and in transit using KMS and TLS."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design network security controls including WAF, Shield, and GuardDuty."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage secrets securely using dedicated secret management services."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement compliance frameworks aligned with SOC 2, PCI DSS, and HIPAA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy identity federation using IAM Identity Center and SAML."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor security events using CloudTrail, Config, and Security Hub."
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
            children: "Shared Responsibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS secures the cloud, you secure what is in it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never assume default security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity-based access control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege, roles over users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS for keys, TLS for transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt everything by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF, Shield, NACLs, Security Groups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in depth at every layer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Manager vs Parameter Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralize, rotate, audit all secrets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2, PCI DSS, HIPAA on cloud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use compliance programs to validate controls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail, Config, GuardDuty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect anomalies before they become breaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated remediation playbooks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare runbooks ahead of incidents"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nflowchart LR\nA[Cloud Security Foundations] --> B[Shared Responsibility Model]\nA --> C[Identity and Access Management]\nA --> D[Data Protection]\nA --> E[Network Security]\nA --> F[Monitoring and Detection]\nB --> G[Customer vs Provider Controls]\nC --> H[Policies, Roles, Federation]\nD --> I[Encryption: KMS, TLS, Secrets]\nE --> J[WAF, Shield, Security Groups]\nF --> K[CloudTrail, GuardDuty, Security Hub]\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-shared-responsibility-model",
      children: "7.1 Shared Responsibility Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security in the cloud is a partnership:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Responsible"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Customer Responsible"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data centers, access controls, surveillance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servers, storage, networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hypervisor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtualization layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS and Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patching, configuration, firewalls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation, DDoS protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security Groups, NACLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IAM service availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User management, permissions, MFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption, access control, backups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Customer Responsibility (Security IN the Cloud)\"\nC1[Customer Data]\nC2[Platform & Applications]\nC3[Identity & Access Management]\nC4[OS, Network, Firewall Config]\nC5[Client-Side Encryption]\nend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subgraph \"AWS Responsibility (Security OF the Cloud)\"\n    A1[Physical Security]\n    A2[Hardware & Network Infrastructure]\n    A3[Hypervisor Isolation]\n    A4[Compliance Certifications]\n    A5[Global Infrastructure]\nend\n\nsubgraph \"Shared\"\n    S1[Network Protection - DDoS]\n    S2[Availability Zones]\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-identity-and-access-management-iam",
      children: "7.2 Identity and Access Management (IAM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core IAM Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User:"
        }), " A permanent identity tied to a person or service account."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Group:"
        }), " A collection of users. Assign policies to groups, not individuals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role:"
        }), " A temporary identity that can be assumed by users, services, or federated identities."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " A JSON document defining permissions (Allow/Deny)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource-Based Policy:"
        }), " Attached to a resource (e.g., S3 bucket policy)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IAM Policy Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\json\n{\n\"Version\": \"2012-10-17\",\n\"Statement\": [\n{\n\"Effect\": \"Allow\",\n\"Action\": [\"s3:GetObject\", \"s3:ListBucket\"],\n\"Resource\": [\n\"arn:aws:s3:::company-data\",\n\"arn:aws:s3:::company-data/*\"\n],\n\"Condition\": {\n\"IpAddress\": {\n\"aws:SourceIp\": \"10.0.0.0/8\"\n}\n}\n}\n]\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "IAM Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grant least privilege ? start with minimum permissions, add as needed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use IAM roles instead of long-term access keys for applications."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable MFA for all human users."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use conditions (SourceIp, MFA, time) to restrict access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use permission boundaries to delegate administration safely."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply service control policies (SCPs) for guard rails across accounts."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface IAMPolicy {\nversion: \"2012-10-17\";\nstatement: IAMStatement[];\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface IAMStatement {\neffect: \"Allow\" | \"Deny\";\naction: string[];\nresource: string[];\ncondition?: Record<string, Record<string, string>>;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class IAMPolicyBuilder {\nprivate statements: IAMStatement[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "allowRead(bucket: string, ipRange?: string): this {\nconst stmt: IAMStatement = {\neffect: \"Allow\",\naction: [\"s3:GetObject\", \"s3:ListBucket\"],\nresource: [\n\"arn:aws:s3:::\" + bucket,\n\"arn:aws:s3:::\" + bucket + \"/*\",\n],\n};\nif (ipRange) {\nstmt.condition = {\nIpAddress: { \"aws:SourceIp\": ipRange },\n};\n}\nthis.statements.push(stmt);\nreturn this;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "allowWrite(bucket: string): this {\nthis.statements.push({\neffect: \"Allow\",\naction: [\"s3:PutObject\"],\nresource: [\"arn:aws:s3:::\" + bucket + \"/*\"],\n});\nreturn this;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "denyDelete(bucket: string): this {\nthis.statements.push({\neffect: \"Deny\",\naction: [\"s3:DeleteObject\"],\nresource: [\"arn:aws:s3:::\" + bucket + \"/*\"],\n});\nreturn this;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): IAMPolicy {\nreturn { version: \"2012-10-17\", statement: this.statements };\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const policy = new IAMPolicyBuilder()\n.allowRead(\"company-data\", \"10.0.0.0/8\")\n.allowWrite(\"company-data\")\n.denyDelete(\"company-data\")\n.build();"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.log(JSON.stringify(policy, null, 2));\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-data-encryption",
      children: "7.3 Data Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption at Rest:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Encryption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Custom Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-S3 (AES-256)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSE-KMS or SSE-C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket-level or object-level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EBS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabled by default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-volume or snapshot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabled for new instances"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can encrypt existing DBs via snapshot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DynamoDB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent, no application changes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption in Transit:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TLS 1.2/1.3:"
        }), " Default for all AWS API endpoints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ALB Listener:"
        }), " Terminates TLS, re-encrypts to targets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC Peering:"
        }), " Traffic stays within AWS backbone (no internet)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\nsequenceDiagram\nparticipant Client as Client\nparticipant ALB as ALB (TLS Terminator)\nparticipant App as App Server\nparticipant DB as RDS (KMS Encrypted)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client->>ALB: HTTPS (TLS 1.3)\nALB->>ALB: Decrypt TLS, attach X-Forwarded-For\nALB->>App: HTTP (internal VPC)\nApp->>App: Read/Write data\nApp->>DB: TLS-encrypted connection\nDB->>DB: KMS decrypts for operations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Management Service (KMS):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create, rotate, and manage encryption keys."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with 50+ AWS services."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports automatic yearly key rotation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Envelope encryption: KMS key encrypts data keys, data keys encrypt your data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-network-security-services",
      children: "7.4 Network Security Services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS WAF (Web Application Firewall):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protects against SQL injection, XSS, and OWASP Top 10 attacks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate-based rules for DDoS mitigation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP reputation lists from AWS and third parties."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates with ALB, CloudFront, API Gateway."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS Shield:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shield Standard:"
        }), " Free, protects against common DDoS attacks (SYN floods, UDP reflection)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shield Advanced:"
        }), " Paid, includes DDoS cost protection, dedicated DDoS response team, advanced real-time metrics."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\mermaid\ngraph TB\nsubgraph \"Defense in Depth\"\nINTERNET[Internet Traffic]\nWAF[AWS WAF - L7 Filtering]\nShield[AWS Shield - DDoS Protection]\nNACL[Network ACL - Subnet Level]\nSG[Security Group - Instance Level]\nAPP[Application]"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    INTERNET --> WAF\n    WAF --> Shield\n    Shield --> NACL\n    NACL --> SG\n    SG --> APP\nend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS GuardDuty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intelligent threat detection using ML and integrated threat intelligence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyzes CloudTrail, VPC Flow Logs, and DNS logs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects: compromised credentials, crypto-mining, port scanning, data exfiltration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can trigger automated remediation via EventBridge and Lambda."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-secrets-management",
      children: "7.5 Secrets Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS Secrets Manager vs Systems Manager Parameter Store:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Secrets Manager"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter Store (Standard)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Secret Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 KB (4 KB for advanced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-Rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (RDS, Redshift, DocumentDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-Account Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource-based policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Price"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ".40/secret/month + rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free standard, .05/advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database passwords, API keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config values, AMI IDs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface DatabaseCredentials {\nusername: string;\npassword: string;\nhost: string;\nport: number;\ndatabase: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class SecretsManagerClient {\nprivate secrets: Map<string, string> = new Map();"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async getSecret(secretId: string): Promise<string | null> {\nreturn this.secrets.get(secretId) || null;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async rotateSecret(secretId: string): Promise<void> {\nconst current = this.secrets.get(secretId);\nif (current) {\nconst parsed = JSON.parse(current) as DatabaseCredentials;\nparsed.password = this.generatePassword(32);\nthis.secrets.set(secretId, JSON.stringify(parsed));\nconsole.log(\"Secret rotated:\", secretId);\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async getDatabaseCredentials(secretId: string): Promise<DatabaseCredentials | null> {\nconst secret = await this.getSecret(secretId);\nreturn secret ? (JSON.parse(secret) as DatabaseCredentials) : null;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private generatePassword(length: number): string {\nconst chars = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*\";\nlet password = \"\";\nfor (let i = 0; i < length; i++) {\npassword += chars.charAt(Math.floor(Math.random() * chars.length));\n}\nreturn password;\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "async function connectToDatabase(): Promise<void> {\nconst secretsManager = new SecretsManagerClient();"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "await secretsManager.getDatabaseCredentials(\"prod/db/credentials\");\nconsole.log(\"Connected to database with rotated credentials\");\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-compliance-frameworks",
      children: "7.6 Compliance Frameworks"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Requirements"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AWS Support"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service organization controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security, availability, processing integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2 reports for 140+ services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PCI DSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credit card data handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt card data, restrict access, audit logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCI-compliant services list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HIPAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protected health information (PHI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAA required, encrypted storage, access controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BAA with AWS, HIPAA-eligible services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FedRAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US government data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party assessment, continuous monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FedRAMP authorized at multiple levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ISO 27001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information security management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk assessment, controls, improvement cycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO 27001 certified regions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-71-iam-role-for-ec2-with-s3-access",
      children: "Example 7.1: IAM Role for EC2 with S3 Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\json\n{\n\"Effect\": \"Allow\",\n\"Action\": [\"s3:GetObject\", \"s3:PutObject\"],\n\"Resource\": \"arn:aws:s3:::my-app-bucket/*\"\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-72-kms-encryption-workflow",
      children: "Example 7.2: KMS Encryption Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\bash\naws kms create-key --description \"App encryption key\"\naws kms encrypt --key-id alias/my-key --plaintext fileb://secret.txt\naws kms decrypt --ciphertext-blob fileb://encrypted.txt\n\\\\"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-73-guardduty-finding-types",
      children: "Example 7.3: GuardDuty Finding Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\\\\\typescript\ninterface GuardDutyFinding {\nid: string;\nseverity: number;\ntype: string;\nresource: { type: string; instanceDetails?: any };\ncreatedAt: string;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "function classifyFinding(severity: number): \"CRITICAL\" | \"HIGH\" | \"MEDIUM\" | \"LOW\" {\nif (severity >= 8) return \"CRITICAL\";\nif (severity >= 5) return \"HIGH\";\nif (severity >= 2) return \"MEDIUM\";\nreturn \"LOW\";\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "const findings: GuardDutyFinding[] = [\n{ id: \"f1\", severity: 8, type: \"CryptoCurrency:EC2/BitcoinTool.B\", resource: { type: \"EC2\" }, createdAt: \"2025-01-15\" },\n{ id: \"f2\", severity: 4, type: \"Recon:EC2/PortProbeUnprotected\", resource: { type: \"EC2\" }, createdAt: \"2025-01-15\" },\n];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "for (const finding of findings) {\nconsole.log(finding.id, classifyFinding(finding.severity), finding.type);\n}\n\\\\"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Security in the cloud follows the shared responsibility model ? the provider secures infrastructure, but you must secure your data, identities, and application configuration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use IAM roles instead of access keys for every workload ? EC2 instances, Lambda functions, and even CI/CD pipelines can assume roles. Long-term access keys should be rare exceptions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " An unencrypted S3 bucket with public access enabled is the most common cloud security breach. Enable \"Block Public Access\" at the account level and never disable it without strong justification."]
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
            children: "IAM User"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permanent identity for a person"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human administrators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IAM Role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary identity assumed by entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STS tokens, auto-rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applications, cross-account"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managed key creation and rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Envelope encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data encryption at rest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotating secrets storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-rotation support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web application firewall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L7 filtering, OWASP protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API and web app protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shield"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS mitigation service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard free, Advanced paid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production workloads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GuardDuty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-powered threat detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail + DNS + VPC analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continuous monitoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized security findings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-account aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance posture"
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
              children: "IAM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users, groups, roles, policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least privilege, MFA, conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Encryption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMS, SSE, TLS, envelope encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt at rest and in transit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WAF, Shield, SG, NACL, VPC endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defense in depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secrets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Manager, Parameter Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralize, rotate, audit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOC 2, PCI DSS, HIPAA, FedRAMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know which certs apply"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitoring"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CloudTrail, Config, GuardDuty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect, alert, respond"
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
            children: "IAM Roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service-to-service auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD pipeline permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced credential surface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-account access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMS Encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data protection at rest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted build artifacts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key rotation policies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compliance (HIPAA/PCI)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WAF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bot protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OWASP prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDoS mitigation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secrets Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration centralization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated rotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audit trails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password policies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GuardDuty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIEM integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the shared responsibility model state about security?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The cloud provider is responsible for all security"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The customer is responsible for all security"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Security is shared: provider secures infrastructure, customer secures data and configurations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Third-party auditors are responsible"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Security is shared: provider secures infrastructure, customer secures data and configurations.** AWS is responsible for the security of the cloud (physical, hardware, hypervisor); customers are responsible for security in the cloud (data, IAM, OS, network config).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which IAM entity is best for granting an EC2 instance access to S3?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) IAM User with access keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) IAM Role attached to the EC2 instance profile"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) S3 bucket policy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Security Group rule"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) IAM Role attached to the EC2 instance profile.** Roles provide temporary credentials that auto-rotate. Access keys would be long-term credentials embedded in the instance, which is a security risk.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary purpose of AWS KMS?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Monitoring API calls"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Creating and managing encryption keys"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Blocking web application attacks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Detecting compromised credentials"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Creating and managing encryption keys.** KMS (Key Management Service) creates, rotates, and manages encryption keys for use with 50+ AWS services. It uses envelope encryption where KMS keys encrypt data keys that encrypt your data.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which AWS service provides ML-powered threat detection across CloudTrail, VPC Flow Logs, and DNS logs?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) WAF"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Shield"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) GuardDuty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Inspector"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) GuardDuty.** GuardDuty uses machine learning and integrated threat intelligence to analyze CloudTrail events, VPC Flow Logs, and DNS logs for suspicious activity like compromised credentials, crypto-mining, and port scanning.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why should you never use long-term IAM access keys for applications running on EC2?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They cost more than IAM roles"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Access keys are long-lived credentials that can be stolen and used indefinitely"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) IAM roles have higher performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Access keys can only be used by human users"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Access keys are long-lived credentials that can be stolen and used indefinitely.** IAM roles provide temporary security credentials that auto-rotate. If an EC2 instance with an access key is compromised, the attacker can use it until it is manually revoked.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-iam-policy-analyzer",
      children: "TypeScript: IAM Policy Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface IAMStatement {\n  effect: \"Allow\" | \"Deny\";\n  actions: string[];\n  resources: string[];\n  conditions?: Record<string, Record<string, string>>;\n}\n\ninterface IAMPolicy {\n  name: string;\n  statements: IAMStatement[];\n}\n\nclass IAMPolicyAnalyzer {\n  private highRiskActions = [\n    \"iam:*\", \"iam:Create*\", \"iam:Delete*\", \"iam:PutRolePolicy\",\n    \"s3:PutBucketPolicy\", \"s3:PutBucketAcl\", \"s3:*\",\n    \"organizations:*\", \"lambda:Create*\", \"lambda:UpdateFunctionCode\",\n  ];\n\n  analyze(policy: IAMPolicy): { findings: { severity: string; message: string; action: string }[]; score: number } {\n    const findings: { severity: string; message: string; action: string }[] = [];\n\n    for (const stmt of policy.statements) {\n      if (stmt.effect !== \"Allow\") continue;\n\n      for (const action of stmt.actions) {\n        if (action === \"*\" || action.startsWith(\"*\")) {\n          findings.push({ severity: \"CRITICAL\", message: \"Wildcard action grants full access\", action });\n        }\n\n        const isHighRisk = this.highRiskActions.some((hr) => {\n          if (hr.endsWith(\"*\")) return action.startsWith(hr.replace(\"*\", \"\"));\n          return action === hr;\n        });\n\n        if (isHighRisk) {\n          const resourceRisk = stmt.resources.includes(\"*\") || stmt.resources.includes(\"arn:aws:*\");\n          findings.push({\n            severity: resourceRisk ? \"CRITICAL\" : \"HIGH\",\n            message: `High-risk action ${action} on ${resourceRisk ? \"all resources\" : \"specific resources\"}`,\n            action,\n          });\n        }\n      }\n\n      if (stmt.resources.includes(\"*\") && !stmt.conditions) {\n        findings.push({\n          severity: \"MEDIUM\", message: \"Wide resource access without condition constraints\",\n          action: stmt.resources[0],\n        });\n      }\n    }\n\n    const score = Math.max(0, 100 - findings.reduce((penalty, f) => {\n      return penalty + (f.severity === \"CRITICAL\" ? 25 : f.severity === \"HIGH\" ? 15 : 5);\n    }, 0));\n\n    return { findings, score };\n  }\n\n  remediate(policy: IAMPolicy): IAMPolicy {\n    return {\n      name: policy.name + \"-hardened\",\n      statements: policy.statements.map((stmt) => ({\n        ...stmt,\n        actions: stmt.actions.filter((a) => !this.highRiskActions.includes(a)).slice(0, 50),\n        resources: stmt.resources.map((r) => r === \"*\" ? \"arn:aws:s3:::my-bucket/*\" : r),\n      })),\n    };\n  }\n}\n\nconst analyzer = new IAMPolicyAnalyzer();\nconst policy: IAMPolicy = {\n  name: \"dev-access\",\n  statements: [\n    { effect: \"Allow\", actions: [\"s3:*\", \"ec2:Describe*\"], resources: [\"*\"] },\n    { effect: \"Allow\", actions: [\"iam:CreateUser\"], resources: [\"arn:aws:iam::*:user/*\"], conditions: { \"StringEquals\": { \"aws:PrincipalTag/role\": \"admin\" } } },\n  ],\n};\nconst result = analyzer.analyze(policy);\nconsole.log(\"Security score:\", result.score, \"/ 100\");\nresult.findings.forEach((f) => console.log(`[${f.severity}] ${f.message}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-waf-rule-engine",
      children: "TypeScript: WAF Rule Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface WAFRule {\n  name: string;\n  priority: number;\n  action: \"allow\" | \"block\" | \"count\";\n  matchType: \"ip-set\" | \"sql-injection\" | \"xss\" | \"rate-limit\" | \"header-match\";\n  pattern?: RegExp;\n  threshold?: number;\n  windowSeconds?: number;\n}\n\ninterface Request {\n  sourceIP: string;\n  path: string;\n  headers: Record<string, string>;\n  body: string;\n  method: string;\n}\n\nclass WAFEngine {\n  private rules: WAFRule[] = [];\n  private requestCounts: Map<string, { count: number; windowStart: number }> = new Map();\n\n  addRule(rule: WAFRule): void { this.rules.push(rule); }\n\n  private isSqlInjection(body: string): boolean {\n    return /(\\bSELECT\\b.*\\bFROM\\b|\\bUNION\\b.*\\bSELECT\\b|\\bDROP\\b.*\\bTABLE\\b|--|;--|' OR '1'='1)/i.test(body);\n  }\n\n  private isXSS(body: string): boolean {\n    return /<script[\\s>]|javascript:|onerror\\s*=|onload\\s*=|alert\\(|eval\\(/i.test(body);\n  }\n\n  private isRateLimited(ip: string, threshold: number, windowSec: number): boolean {\n    const now = Date.now();\n    const entry = this.requestCounts.get(ip) || { count: 0, windowStart: now };\n    if (now - entry.windowStart > windowSec * 1000) { entry.count = 0; entry.windowStart = now; }\n    entry.count++;\n    this.requestCounts.set(ip, entry);\n    return entry.count > threshold;\n  }\n\n  evaluate(req: Request): { action: \"allow\" | \"block\" | \"count\"; matchedRule?: string; reasons: string[] } {\n    const sortedRules = [...this.rules].sort((a, b) => a.priority - b.priority);\n    const reasons: string[] = [];\n\n    for (const rule of sortedRules) {\n      switch (rule.matchType) {\n        case \"sql-injection\":\n          if (this.isSqlInjection(req.body) || this.isSqlInjection(req.path)) {\n            reasons.push(`SQL injection pattern detected (rule: ${rule.name})`);\n            return { action: rule.action, matchedRule: rule.name, reasons };\n          }\n          break;\n        case \"xss\":\n          if (this.isXSS(req.body) || this.isXSS(req.path)) {\n            reasons.push(`XSS pattern detected (rule: ${rule.name})`);\n            return { action: rule.action, matchedRule: rule.name, reasons };\n          }\n          break;\n        case \"rate-limit\":\n          if (rule.threshold && rule.windowSeconds && this.isRateLimited(req.sourceIP, rule.threshold, rule.windowSeconds)) {\n            reasons.push(`Rate limit exceeded: ${rule.threshold} req/${rule.windowSeconds}s (rule: ${rule.name})`);\n            return { action: rule.action, matchedRule: rule.name, reasons };\n          }\n          break;\n      }\n    }\n    return { action: \"allow\", reasons };\n  }\n}\n\nconst waf = new WAFEngine();\nwaf.addRule({ name: \"block-sqli\", priority: 1, action: \"block\", matchType: \"sql-injection\" });\nwaf.addRule({ name: \"block-xss\", priority: 2, action: \"block\", matchType: \"xss\" });\nwaf.addRule({ name: \"rate-limit-100\", priority: 3, action: \"block\", matchType: \"rate-limit\", threshold: 100, windowSeconds: 60 });\n\nconst requests: Request[] = [\n  { sourceIP: \"10.0.1.1\", path: \"/login\", headers: {}, body: \"username=admin&password=1234\", method: \"POST\" },\n  { sourceIP: \"10.0.1.2\", path: \"/search\", headers: {}, body: \"q=' OR '1'='1\", method: \"POST\" },\n  { sourceIP: \"10.0.1.3\", path: \"/comment\", headers: {}, body: \"<script>alert('xss')</script>\", method: \"POST\" },\n];\nrequests.forEach((r) => {\n  const result = waf.evaluate(r);\n  console.log(`${r.method} ${r.path} from ${r.sourceIP}: ${result.action}${result.matchedRule ? \" (\" + result.matchedRule + \")\" : \"\"}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-iam-policy-diff-checker--encryption-validator",
      children: "TypeScript: IAM Policy Diff Checker & Encryption Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface PolicyStatement { effect: string; actions: string[]; resources: string[]; }\ninterface Policy { name: string; statements: PolicyStatement[]; }\n\nclass PolicyDiffChecker {\n  diff(desired: Policy, actual: Policy): { missing: PolicyStatement[]; excessive: PolicyStatement[] } {\n    const missing: PolicyStatement[] = [];\n    const excessive: PolicyStatement[] = [];\n    for (const ds of desired.statements) {\n      const match = actual.statements.find(as =>\n        as.effect === ds.effect && as.actions.every(a => ds.actions.includes(a))\n      );\n      if (!match) missing.push(ds);\n    }\n    for (const as of actual.statements) {\n      const match = desired.statements.find(ds =>\n        ds.effect === as.effect && as.actions.every(a => ds.actions.includes(a))\n      );\n      if (!match) excessive.push(as);\n    }\n    return { missing, excessive };\n  }\n}\n\nclass EncryptionValidator {\n  check(config: { s3Encryption: boolean; s3TLS: boolean; ebsEncryption: boolean; rdsEncryption: boolean; kmsEnabled: boolean; tlsVersion: string }): { pass: boolean; failures: string[] } {\n    const failures: string[] = [];\n    if (!config.s3Encryption) failures.push(\"S3 default encryption disabled\");\n    if (!config.s3TLS) failures.push(\"S3 HTTPS-only not enforced\");\n    if (!config.ebsEncryption) failures.push(\"EBS encryption not enabled\");\n    if (!config.rdsEncryption) failures.push(\"RDS encryption at rest disabled\");\n    if (!config.kmsEnabled) failures.push(\"KMS customer-managed keys not configured\");\n    if (config.tlsVersion < \"1.2\") failures.push(`TLS ${config.tlsVersion} too old, minimum 1.2 required`);\n    return { pass: failures.length === 0, failures };\n  }\n}\n\nconst pdc = new PolicyDiffChecker();\nconst diff = pdc.diff(\n  { name: \"desired\", statements: [{ effect: \"Allow\", actions: [\"s3:GetObject\"], resources: [\"arn:aws:s3:::bucket/*\"] }] },\n  { name: \"actual\", statements: [{ effect: \"Allow\", actions: [\"s3:*\", \"iam:*\"], resources: [\"*\"] }] }\n);\nconsole.log(\"Policy issues:\", diff.excessive.length > 0 ? `${diff.excessive.length} excessive permissions found` : \"OK\");\n\nconst ev = new EncryptionValidator();\nconst check = ev.check({ s3Encryption: true, s3TLS: true, ebsEncryption: false, rdsEncryption: true, kmsEnabled: true, tlsVersion: \"1.0\" });\nconsole.log(\"Encryption check:\", check.pass ? \"PASS\" : `FAIL: ${check.failures.join(\"; \")}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cloud security\n// iaas-paas-saas-cloud-native implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cloud security', data: { topic: 'iaas-paas-saas-cloud-native' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n\n// cloud security - additional TS implementations\n\ninterface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\n  private store: Map<string, CacheEntry> = new Map()\n  constructor(private defaultTTL: number = 60000) {}\n  set(key: string, value: unknown, ttl?: number): void {\n    this.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n  }\n  get(key: string): unknown | undefined {\n    const entry = this.store.get(key)\n    if (!entry) return undefined\n    if (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\n    return entry.value\n  }\n  delete(key: string): boolean { return this.store.delete(key) }\n  clear(): void { this.store.clear() }\n  size(): number { return this.store.size }\n  keys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\n  private entries: string[] = []\n  log(level: string, msg: string, meta?: Record<string, unknown>): void {\n    const entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\n    this.entries.push(entry)\n    console.log(entry)\n  }\n  info(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\n  warn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\n  error(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\n  getLogs(): string[] { return [...this.entries] }\n  clear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\n  let hash = 0\n  for (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\n  return Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\n  const cache = new Cache(5000)\n  cache.set('key1', 'cloud-services demo')\n  const log = new Logger()\n  log.info('Cache demo started', { course: 'cloud-computing', chapter: 'cloud security' })\n  const v = cache.get(\"key1\")\n  console.log('Cached:', v)\n  console.log('Hash:', computeHash('cloud-services'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }\n## Summary\n\n- The shared responsibility model defines clear boundaries for provider and customer security obligations.\n- IAM roles with temporary credentials are preferred over long-term access keys.\n- Encryption at rest (KMS) and in transit (TLS) protects data throughout its lifecycle.\n- Defense in depth combines WAF, Shield, Security Groups, and NACLs for network security.\n- Secrets Manager centralizes and auto-rotates sensitive credentials.\n- GuardDuty provides ML-based threat detection across multiple log sources.\n- Compliance frameworks (SOC 2, PCI DSS, HIPAA) are supported through AWS compliance programs.\n\n## Exercises\n\n### Review Questions\n\n1. Explain the shared responsibility model with specific examples of customer vs provider responsibilities.\n2. What are the differences between IAM Users, Groups, Roles, and Policies?\n3. Describe envelope encryption and how KMS uses it for scalable encryption.\n4. How do WAF, Shield, Security Groups, and NACLs work together for defense in depth?\n5. Compare Secrets Manager vs Parameter Store for storing application secrets.\n6. What types of threats does GuardDuty detect?\n\n### Application Problems\n\n1. Design an IAM architecture for a three-tier application with separate web, app, and database tiers. Each tier should only have the permissions it needs.\n\n2. Write a TypeScript function that evaluates the security posture of an S3 bucket policy and reports any public access risks.\n\n3. A healthcare application needs to comply with HIPAA on AWS. List all the AWS services and configurations required for HIPAA compliance.\n\n4. Design an encryption strategy for a data lake containing sensitive financial records, including key management, key rotation, and access control.\n\n5. Implement an incident response automation that triggers when GuardDuty detects a crypto-mining finding on an EC2 instance.\n\n### Challenge Problem\n\nDesign a comprehensive security architecture for a multi-account AWS organization serving 100,000 users. Requirements: 1) Centralized logging and monitoring across all accounts, 2) Automated incident response for common threats, 3) Encryption of all data at rest and in transit, 4) Network isolation between environments, 5) Compliance with SOC 2 Type II, 6) Secrets management with rotation for all databases, 7) IAM federation with corporate SSO, and 8) Automated security scanning in CI/CD pipelines. Propose specific services, configurations, and an architecture diagram.\n\n## AWS CDK: IAM Roles and Policies\n\nDefine IAM infrastructure as TypeScript with the AWS CDK:\n\n```typescript\nimport * as iam from \"aws-cdk-lib/aws-iam\";\nimport * as cdk from \"aws-cdk-lib\";\n\nclass SecurityStack extends cdk.Stack {\n  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {\n    super(scope, id, props);\n\n    const webAppRole = new iam.Role(this, \"WebAppRole\", {\n      assumedBy: new iam.ServicePrincipal(\"ec2.amazonaws.com\"),\n      description: \"Role for web application EC2 instances\",\n      managedPolicies: [\n        iam.ManagedPolicy.fromAwsManagedPolicyName(\"AmazonSSMManagedInstanceCore\"),\n      ],\n    });\n\n    webAppRole.addToPolicy(new iam.PolicyStatement({\n      effect: iam.Effect.ALLOW,\n      actions: [\"s3:GetObject\", \"s3:ListBucket\"],\n      resources: [\"arn:aws:s3:::app-assets\", \"arn:aws:s3:::app-assets/*\"],\n      conditions: { StringEquals: { \"aws:ResourceAccount\": [this.account] } },\n    }));\n\n    webAppRole.addToPolicy(new iam.PolicyStatement({\n      effect: iam.Effect.DENY,\n      actions: [\"s3:DeleteBucket\", \"rds:DeleteDBInstance\"],\n      resources: [\"*\"],\n    }));\n\n    const readonlyRole = new iam.Role(this, \"ReadOnlyRole\", {\n      assumedBy: new iam.AccountPrincipal(this.account),\n      managedPolicies: [\n        iam.ManagedPolicy.fromAwsManagedPolicyName(\"ReadOnlyAccess\"),\n      ],\n    });\n\n    new iam.CfnInstanceProfile(this, \"WebAppInstanceProfile\", {\n      roles: [webAppRole.roleName],\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pulumi-kms-key-and-encryption-setup",
      children: "Pulumi: KMS Key and Encryption Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as aws from \"@pulumi/aws\";\n\nconst appKey = new aws.kms.Key(\"app-encryption-key\", {\n  description: \"Application encryption key with automatic rotation\",\n  deletionWindowInDays: 30,\n  enableKeyRotation: true,\n  policy: {\n    Version: \"2012-10-17\",\n    Statement: [\n      {\n        Effect: \"Allow\",\n        Principal: { AWS: \"*\" },\n        Action: \"kms:*\",\n        Resource: \"*\",\n        Condition: {\n          StringEquals: {\n            \"kms:CallerAccount\": aws.config.require(\"accountId\"),\n          },\n        },\n      },\n    ],\n  },\n});\n\nconst s3Bucket = new aws.s3.Bucket(\"encrypted-assets\", {\n  bucket: \"encrypted-app-assets-prod\",\n  serverSideEncryptionConfiguration: {\n    rule: {\n      applyServerSideEncryptionByDefault: {\n        kmsMasterKeyId: appKey.arn,\n        sseAlgorithm: \"aws:kms\",\n      },\n      bucketKeyEnabled: true,\n    },\n  },\n});\n\nconst logBucket = new aws.s3.Bucket(\"access-logs\", {\n  bucket: \"app-access-logs-prod\",\n  acl: \"log-delivery-write\",\n  forceDestroy: false,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automated-incident-response-flow",
      children: "Automated Incident Response Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant GD as GuardDuty\n    participant EB as EventBridge\n    participant Lambda as Remediation Function\n    participant SNS as SNS Topic\n    participant SecHub as Security Hub\n    \n    GD->>EB: Finding detected (e.g., CryptoCurrency)\n    EB->>Lambda: Trigger remediation\n    Lambda->>Lambda: Isolate instance (modify SG)\n    Lambda->>Lambda: Create forensic snapshot\n    Lambda->>SNS: Send alert to security team\n    Lambda->>SecHub: Update finding status\n    SNS->>SNS: PagerDuty / Slack / Email\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-case-study-capital-one-data-breach-2019",
      children: "Real-World Case Study: Capital One Data Breach (2019)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 2019 Capital One breach illustrates what happens when cloud security fundamentals are missed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Incident:"
      }), " A former AWS employee exploited a misconfigured web application firewall (WAF) to access Capital One's S3 data. The attacker used a Server-Side Request Forgery (SSRF) attack against a vulnerable EC2 instance to reach the AWS metadata service, assumed an IAM role with excessive permissions, and exfiltrated 140,000 SSNs and 80,000 bank account numbers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WAF Misconfiguration:"
        }), " The WAF did not block SSRF-style attacks against the metadata service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overly Permissive IAM Role:"
        }), " The EC2 role had S3 read access to all buckets, not just the required subset"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Network Controls:"
        }), " No VPC endpoint or IMDSv2 enforcement on the vulnerable instance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Data Perimeter:"
        }), " Lack of S3 bucket policies restricting access to trusted identities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediations Applied:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMDSv2 enforced on all EC2 instances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S3 bucket policies with aws:SourceIp and aws:PrincipalOrgID conditions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WAF rules updated to block metadata service endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IAM permission boundaries implemented across all roles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPC endpoints for S3 with bucket policy restrictions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Lesson:"
      }), " Cloud security failures are almost never about the provider's infrastructure security ? they are about misconfiguration of customer-controlled services. Following the principle of least privilege and implementing defense in depth at every layer would have prevented this breach."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IAM Audit:"
          }), " Write a TypeScript function that reads a set of IAM policies and identifies any that violate least privilege by granting wildcard actions (\"*\") on sensitive services (IAM, S3, KMS)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Encryption Strategy:"
          }), " Design an encryption strategy for a multi-region application that needs customer-managed keys in each region, automatic key rotation, and the ability to revoke access to specific regions in case of a compliance incident."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Incident Response Playbook:"
          }), " Create a step-by-step incident response playbook for a detected S3 bucket with public read access that contains customer PII. Include containment, investigation, remediation, and post-mortem phases with specific actions and responsible teams."]
        }), "\n"]
      }), "\n"]
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