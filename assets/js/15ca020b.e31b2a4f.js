"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[72065],{

/***/ 61770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_information_security_04_digital_signatures_pki_md_15c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-information-security-04-digital-signatures-pki-md-15c.json
const site_docs_courses_information_security_04_digital_signatures_pki_md_15c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/information-security/04-digital-signatures-pki","title":"Chapter 4: Digital Signatures & PKI","description":"Exam Weightage: 3–5 Qs in IBPS SO IT Officer Mains (Digital signatures, certificates, authentication protocols)","source":"@site/docs/courses/information-security/04-digital-signatures-pki.md","sourceDirName":"courses/information-security","slug":"/information-security/04-digital-signatures-pki","permalink":"/ai-engineering-journey/information-security/04-digital-signatures-pki","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-digital-signatures-pki","slug":"/information-security/04-digital-signatures-pki","title":"Chapter 4: Digital Signatures & PKI","sidebar_label":"Chapter 4: Digital Signatures & PKI","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Cyber Threats & Attacks","permalink":"/ai-engineering-journey/information-security/03-cyber-threats-attacks"},"next":{"title":"Chapter 5: Banking & Payment Security","permalink":"/ai-engineering-journey/information-security/05-banking-payment-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/information-security/04-digital-signatures-pki.md


const frontMatter = {
	id: '04-digital-signatures-pki',
	slug: '/information-security/04-digital-signatures-pki',
	title: 'Chapter 4: Digital Signatures & PKI',
	sidebar_label: 'Chapter 4: Digital Signatures & PKI',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Digital Signatures & PKI';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "4.1 Digital Signatures",
  "id": "41-digital-signatures",
  "level": 3
}, {
  "value": "4.1.1 Digital Signature Process — Signing",
  "id": "411-digital-signature-process--signing",
  "level": 4
}, {
  "value": "4.1.2 Digital Signature Process — Verification",
  "id": "412-digital-signature-process--verification",
  "level": 4
}, {
  "value": "4.1.3 Properties Provided by Digital Signatures",
  "id": "413-properties-provided-by-digital-signatures",
  "level": 4
}, {
  "value": "4.1.4 Why Sign the Hash, Not the Message?",
  "id": "414-why-sign-the-hash-not-the-message",
  "level": 4
}, {
  "value": "4.1.5 Digital Signature Algorithms",
  "id": "415-digital-signature-algorithms",
  "level": 4
}, {
  "value": "4.2 PKI (Public Key Infrastructure)",
  "id": "42-pki-public-key-infrastructure",
  "level": 3
}, {
  "value": "4.2.1 PKI Components",
  "id": "421-pki-components",
  "level": 4
}, {
  "value": "4.2.2 Certificate Revocation Mechanisms",
  "id": "422-certificate-revocation-mechanisms",
  "level": 4
}, {
  "value": "4.2.3 PKI Hierarchy",
  "id": "423-pki-hierarchy",
  "level": 4
}, {
  "value": "4.2.4 Certificate Validation Process",
  "id": "424-certificate-validation-process",
  "level": 4
}, {
  "value": "4.3 X.509 Digital Certificates",
  "id": "43-x509-digital-certificates",
  "level": 3
}, {
  "value": "4.3.1 X.509 v3 Certificate Structure",
  "id": "431-x509-v3-certificate-structure",
  "level": 4
}, {
  "value": "4.3.2 Important X.509 v3 Extensions",
  "id": "432-important-x509-v3-extensions",
  "level": 4
}, {
  "value": "4.4 OAuth 2.0",
  "id": "44-oauth-20",
  "level": 3
}, {
  "value": "4.4.1 OAuth 2.0 Roles",
  "id": "441-oauth-20-roles",
  "level": 4
}, {
  "value": "4.4.2 OAuth 2.0 Grant Types",
  "id": "442-oauth-20-grant-types",
  "level": 4
}, {
  "value": "4.4.3 Authorization Code Grant Flow",
  "id": "443-authorization-code-grant-flow",
  "level": 4
}, {
  "value": "4.5 SAML (Security Assertion Markup Language)",
  "id": "45-saml-security-assertion-markup-language",
  "level": 3
}, {
  "value": "4.5.1 SAML 2.0 Components",
  "id": "451-saml-20-components",
  "level": 4
}, {
  "value": "4.5.2 SAML SSO Flow (SP-Initiated)",
  "id": "452-saml-sso-flow-sp-initiated",
  "level": 4
}, {
  "value": "4.6 Kerberos",
  "id": "46-kerberos",
  "level": 3
}, {
  "value": "4.6.1 Kerberos Components",
  "id": "461-kerberos-components",
  "level": 4
}, {
  "value": "4.6.2 Kerberos Authentication Flow (6 steps)",
  "id": "462-kerberos-authentication-flow-6-steps",
  "level": 4
}, {
  "value": "4.6.3 Kerberos Security Properties",
  "id": "463-kerberos-security-properties",
  "level": 4
}, {
  "value": "4.6.4 Kerberos Limitations",
  "id": "464-kerberos-limitations",
  "level": 4
}, {
  "value": "4.7 Solved MCQs (Exam Style)",
  "id": "47-solved-mcqs-exam-style",
  "level": 3
}, {
  "value": "📝 Solved Examples (20 MCQs)",
  "id": "-solved-examples-20-mcqs",
  "level": 2
}, {
  "value": "TypeScript Implementation: JWT Token Handler with OAuth 2.0",
  "id": "typescript-implementation-jwt-token-handler-with-oauth-20",
  "level": 3
}, {
  "value": "TypeScript Implementation: PKI Certificate Chain Validator",
  "id": "typescript-implementation-pki-certificate-chain-validator",
  "level": 3
}, {
  "value": "Mermaid Diagram: PKI Hierarchy and Trust Chain",
  "id": "mermaid-diagram-pki-hierarchy-and-trust-chain",
  "level": 3
}, {
  "value": "Post-Quantum Cryptography — Detailed Overview",
  "id": "post-quantum-cryptography--detailed-overview",
  "level": 3
}, {
  "value": "📖 Exercise Bank (30 Questions)",
  "id": "-exercise-bank-30-questions",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Chapter Quiz (5 MCQs)",
  "id": "chapter-quiz-5-mcqs",
  "level": 2
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
    h4: "h4",
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
        id: "chapter-4-digital-signatures--pki",
        children: "Chapter 4: Digital Signatures & PKI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exam Weightage:"
        }), " 3–5 Qs in IBPS SO IT Officer Mains (Digital signatures, certificates, authentication protocols)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Topics:"
        }), " Digital signature process, PKI (CA, RA, VA, CRL), X.509 certificates, Certificate trust chain, OAuth 2.0, SAML, Kerberos"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter you will be able to:"
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
        href: "../../assets/images/lessons/information-security/04-digital-signatures-pki/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/information-security/04-digital-signatures-pki/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/information-security/04-digital-signatures-pki/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/information-security/04-digital-signatures-pki/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/information-security/04-digital-signatures-pki/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/information-security/04-digital-signatures-pki/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the digital signature process: signing (hash + encrypt with private key) and verification (decrypt with public key + compare hash)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the PKI hierarchy: Certificate Authority (CA), Registration Authority (RA), Validation Authority (VA), Certificate Revocation List (CRL), and OCSP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interpret X.509 certificate structure (version, serial number, issuer, subject, validity, public key, extensions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace a certificate trust chain from leaf certificate through intermediate CAs to root CA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between OAuth 2.0 grant types and their use cases (authorization code, implicit, client credentials, resource owner password)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe SAML 2.0 flow (Identity Provider, Service Provider, assertion, SSO)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Kerberos authentication (AS, TGS, SS, ticket granting, authenticator)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve exam-style MCQs on PKI components, certificate validation, and authentication protocols."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-digital-signatures",
      children: "4.1 Digital Signatures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A digital signature provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integrity"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "authentication"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "non-repudiation"
      }), " for digital messages or documents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "411-digital-signature-process--signing",
      children: "4.1.1 Digital Signature Process — Signing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hash the message:"
        }), " Compute the cryptographic hash H(M) using a hash function (SHA-256). Hash is fixed-size regardless of message length."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encrypt hash with private key:"
        }), " Encrypt the hash using the sender's private key → this produces the digital signature S = E(K_priv, H(M))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attach signature:"
        }), " Send the message M along with the digital signature S."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      }), " Signature = Encrypt(K_sender_private, Hash(message))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "412-digital-signature-process--verification",
      children: "4.1.2 Digital Signature Process — Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decrypt signature with public key:"
        }), " Receiver decrypts S using the sender's public key → obtains hash₁ = Decrypt(K_sender_public, S)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute hash locally:"
        }), " Receiver computes hash₂ = Hash(M) from the received message."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare hashes:"
        }), " If hash₁ = hash₂, signature is valid → message is authentic and untampered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formula:"
      }), " Hash(message) = Decrypt(K_sender_public, Signature) → if equal, signature verified"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "413-properties-provided-by-digital-signatures",
      children: "4.1.3 Properties Provided by Digital Signatures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attack if absent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message has not been modified in transit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tampering undetected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirms identity of signer (only signer's public key can verify)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impersonation possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-repudiation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signer cannot deny signing the message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signer can claim forgery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unforgeability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the private key holder can create a valid signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anyone can forge signatures"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "414-why-sign-the-hash-not-the-message",
      children: "4.1.4 Why Sign the Hash, Not the Message?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance:"
        }), " Asymmetric encryption is slow (100–1000× slower than symmetric). Signing a 256-bit hash is much faster than signing a multi-MB message."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message size:"
        }), " Hash is fixed-size (SHA-256 = 256 bits). Without hash, signature size grows with message."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security:"
        }), " Hash provides pre-image and collision resistance; signing the hash inherits these properties."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "415-digital-signature-algorithms",
      children: "4.1.5 Digital Signature Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hash Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Sizes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-PSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048–4096 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure (widely used)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256–521 bits (ECC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure (efficient)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EdDSA (Ed25519)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-512 (internal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-bit curve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (modern standard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-1/SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024–3072 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated (slow)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Signing[Signing Process]\n        M[\"Message\"] --> H[\"Hash (SHA-256)\"]\n        H --> E[\"Encrypt Hash<br/>with Sender's<br/>Private Key\"]\n        E --> S[\"Digital Signature\"]\n        M --> S\n    end\n    subgraph Verification[Verification Process]\n        R[\"Received Message\"] --> H2[\"Hash (SHA-256)\"]\n        R --> S2[\"Digital Signature\"]\n        S2 --> D[\"Decrypt Signature<br/>with Sender's<br/>Public Key\"]\n        H2 --> C[\"Compare\"]\n        D --> C\n        C --> V[\"✅ Valid if match<br/>❌ Invalid if mismatch\"]\n    end\n    style Signing fill:#e8f5e9\n    style Verification fill:#e3f2fd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-pki-public-key-infrastructure",
      children: "4.2 PKI (Public Key Infrastructure)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PKI is the framework of policies, hardware, software, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "421-pki-components",
      children: "4.2.1 PKI Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues and signs digital certificates (trust anchor). Root CA is self-signed; subordinate CAs are signed by root."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registration Authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifies applicant identity before requesting certificate issuance from CA. Performs identity proofing (document validation, domain verification)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation Authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides real-time certificate status (is certificate valid/revoked?). Implements OCSP or retrieves CRL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Revocation List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed list of revoked certificate serial numbers. Published periodically by CA. Clients download CRL to check revocation status."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OCSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online Certificate Status Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time protocol to query VA for certificate status (good, revoked, unknown). More current than CRL but introduces latency."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate Practice Statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Published policy document detailing CA's operational practices."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HSM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Security Module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tamper-resistant hardware for secure key generation, storage, and signing operations."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "422-certificate-revocation-mechanisms",
      children: "4.2.2 Certificate Revocation Mechanisms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CRL"
            }), " (RFC 5280)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic list of revoked certificates issued by CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, no real-time queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outdated between CRL publishing intervals; large download size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delta CRL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only new revocations since last full CRL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller downloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additional complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OCSP"
            }), " (RFC 6960)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time query → response with certificate status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current status, small response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy (CA knows which certificates you're checking); adds latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OCSP Stapling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server fetches OCSP response and \"staples\" it to TLS handshake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No client→CA query; no CA tracking; faster"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server must fetch OCSP response periodically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRLite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregated CRL with Bloom filter (Firefox)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact, efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex implementation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "423-pki-hierarchy",
      children: "4.2.3 PKI Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                  ┌─────────────────┐\n                  │   Root CA       │ (Self-signed, offline, highest security)\n                  │   \"Trust Anchor\"│\n                  └────────┬────────┘\n                           │\n                  ┌────────┴────────┐\n                  │ Intermediate CA1│ (Signed by Root CA)\n                  │ (Policy CA)     │\n                  └────────┬────────┘\n                           │\n                  ┌────────┴────────┐\n                  │ Intermediate CA2│ (Signed by CA1)\n                  │ (Issuing CA)    │\n                  └────────┬────────┘\n                           │\n            ┌──────────────┼──────────────┐\n            │              │              │\n   ┌────────┴──────┐ ┌────┴──────┐ ┌────┴──────┐\n   │ Server Cert   │ │ Client    │ │ Code       │\n   │ (SSL/TLS)     │ │ Cert      │ │ Signing    │\n   └───────────────┘ └───────────┘ └───────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trust model:"
      }), " The Root CA's public key is pre-installed in browsers/OS trust stores. Any certificate signed (directly or through intermediates) by a trusted root forms a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trust chain"
      }), " and is inherently trusted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "424-certificate-validation-process",
      children: "4.2.4 Certificate Validation Process"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build chain from leaf certificate → intermediate CA(s) → root CA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify each certificate's digital signature (parent's public key decrypts child's signature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check certificate validity period (notBefore ≤ now ≤ notAfter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check revocation status (CRL or OCSP) — verify certificate hasn't been revoked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check key usage extensions (e.g., TLS Web Server Authentication for HTTPS certificates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify domain name matches certificate's Subject Alternative Names (SAN)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Leaf[\"Leaf Certificate<br/>(www.example.com)\"] --> CA1[\"Intermediate CA<br/>(R3)\"]\n    CA1 --> Root[\"Root CA<br/>(ISRG Root X1)<br/>Self-signed\"]\n    Root --> Trust[\"Trusted Root Store<br/>(OS/Browser)\"]\n    Leaf --> V1[\"1. Verify signature<br/>using CA1's public key\"]\n    CA1 --> V2[\"2. Verify signature<br/>using Root's public key\"]\n    Root --> V3[\"3. Root verified<br/>against trust store\"]\n    V1 --> Chain[\"✅ Trust Chain Valid\"]\n    V2 --> Chain\n    V3 --> Chain\n    Chain --> Check[\"4. Validity period ✅<br/>5. Revocation check ✅<br/>6. Key usage ✅<br/>7. Domain match ✅\"]\n    style Root fill:#fff9c4\n    style Trust fill:#c8e6c9\n    style Chain fill:#a5d6a7\n    style Check fill:#a5d6a7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-x509-digital-certificates",
      children: "4.3 X.509 Digital Certificates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "X.509 is the standard defining the format of public key certificates. Version 3 (v3) is the current standard."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "431-x509-v3-certificate-structure",
      children: "4.3.1 X.509 v3 Certificate Structure"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Certificate format version (1, 2, or 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v3 (most common)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serial Number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique integer assigned by CA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "04:8E:71:..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signature Algorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm used by CA to sign the certificate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256WithRSAEncryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Issuer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA that issued the certificate (DN — Distinguished Name)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CN = ISRG Root X1, O = Internet Security Research Group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Period: notBefore to notAfter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024-01-01 to 2025-01-01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subject"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity the certificate is issued to (DN)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CN = ", (0,jsx_runtime.jsx)(_components.a, {
              href: "http://www.example.com",
              children: "www.example.com"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subject Public Key Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public key algorithm + public key value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA 2048-bit / ECDSA P-256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Issuer Unique ID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional v2/v3 (deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subject Unique ID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional v2/v3 (deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extensions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v3 only — additional properties (key usage, SAN, basic constraints, CRL distribution points, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signature"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA's digital signature covering all above fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256-byte RSA signature"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "432-important-x509-v3-extensions",
      children: "4.3.2 Important X.509 v3 Extensions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Extension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exam Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indicates if certificate is a CA and max chain depth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CA:TRUE"
            }), " for CAs, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CA:FALSE"
            }), " for end-entity"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricts cryptographic operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "digitalSignature, keyEncipherment, keyCertSign, cRLSign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extended Key Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose of the public key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "serverAuth, clientAuth, codeSigning, emailProtection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subject Alternative Name (SAN)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain names/IPs the certificate covers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must match accessed domain (CN field is legacy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CRL Distribution Points"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL where CRL can be downloaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "http://crl.example.com/root.crl",
              children: "http://crl.example.com/root.crl"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authority Information Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL for OCSP responder + CA issuer URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ocsp.example.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Certificate Policies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPS references"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OID identifying policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subject Key Identifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique identifier for subject's public key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20-byte hash (usually SHA-1 of public key)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authority Key Identifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Links to issuing CA's Subject Key Identifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For chain building"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-oauth-20",
      children: "4.4 OAuth 2.0"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " an authentication protocol (though often used for authentication via OpenID Connect)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "441-oauth-20-roles",
      children: "4.4.1 OAuth 2.0 Roles"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Owner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity that can grant access to a protected resource"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server hosting protected resources"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google API, Facebook Graph API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application requesting access on behalf of resource owner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web app, mobile app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server issuing access tokens after authenticating resource owner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accounts.google.com"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "442-oauth-20-grant-types",
      children: "4.4.2 OAuth 2.0 Grant Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Grant Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access Token Delivery"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Refresh Token?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server-side web apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization code → exchanged for token (server-to-server)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most secure — token never exposed to browser"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implicit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-page apps (browser-only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token in URL fragment (deprecated in favor of PKCE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token exposed in URL; less secure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Owner Password Credentials"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusted apps (first-party)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directly exchange username + password for token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires credentials exposure; avoid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client Credentials"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Machine-to-machine (no user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client ID + Secret → direct token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No user involvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Devices without browser (TV, CLI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User completes login on separate device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device displays code, user enters on another device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization Code + PKCE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile apps, SPAs (current best practice)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code challenge + verifier (no client secret needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents authorization code interception"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "443-authorization-code-grant-flow",
      children: "4.4.3 Authorization Code Grant Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client redirects user to Authorization Server: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "authorize?response_type=code&client_id=APP&redirect_uri=CALLBACK&scope=email"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User authenticates and consents"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Authorization Server redirects to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CALLBACK?code=AUTH_CODE"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /token?code=AUTH_CODE&client_id=APP&client_secret=SECRET"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Authorization Server returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{\"access_token\":\"...\", \"refresh_token\":\"...\", \"expires_in\":3600}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Client uses access_token to call Resource Server API: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET /api/user"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authorization: Bearer access_token"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PKCE (Proof Key for Code Exchange):"
      }), " Mobile/SPA clients generate a random ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code_verifier"
      }), ", hash it to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code_challenge"
      }), ", send challenge in authorize request, and send verifier in token request. Server verifies SHA-256(verifier) = challenge. This prevents authorization code interception attacks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-saml-security-assertion-markup-language",
      children: "4.5 SAML (Security Assertion Markup Language)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SAML 2.0 is an XML-based framework for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "451-saml-20-components",
      children: "4.5.1 SAML 2.0 Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity Provider (IdP)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticates users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates and issues SAML assertions (e.g., Azure AD, Okta, Keycloak)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Service Provider (SP)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides service to user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trusts IdP for authentication (e.g., Salesforce, AWS, SaaS apps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML Assertion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML document containing auth/attribute/decision statements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed by IdP, contains user identity, attributes, and conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SAML Request/Response"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML messages exchanged between SP and IdP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AuthnRequest (SP→IdP), Response (IdP→SP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subject"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entity being authenticated (usually a user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NameID element in assertion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "452-saml-sso-flow-sp-initiated",
      children: "4.5.2 SAML SSO Flow (SP-Initiated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User accesses SP resource (unauthenticated)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SP generates ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SAML AuthnRequest"
        }), " (XML, signed) and redirects user to IdP"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User authenticates to IdP (password, 2FA, certificate)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IdP generates ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SAML Response"
        }), " containing signed assertion with user identity"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser posts SAML Response back to SP via HTTP POST binding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SP validates XML signature, extracts user identity, creates local session"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User is logged in to SP (SSO achieved)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference from OAuth 2.0:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SAML is primarily for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "authentication"
        }), " (proving identity)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OAuth 2.0 is primarily for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "authorization"
        }), " (granting API access)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenID Connect bridges this: OAuth 2.0 + ID token (JWT) for authentication"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SAML 2.0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "OAuth 2.0"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication / SSO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization / API access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XML (heavy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON (lightweight)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML Assertion (XML signed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token (JWT or opaque)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser redirect (HTTP POST/Redirect binding)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST API + Bearer tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise SSO (many SPs, one IdP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party API access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile friendly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (XML parsing, browser redirect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (native app support, PKCE)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-kerberos",
      children: "4.6 Kerberos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kerberos is a network authentication protocol that uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secret-key cryptography"
      }), " (symmetric) and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trusted third party"
      }), " (Key Distribution Center — KDC) to authenticate clients to services without transmitting passwords over the network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "461-kerberos-components",
      children: "4.6.1 Kerberos Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key Distribution Center"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs on authentication server; contains AS + TGS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validates user credentials and issues Ticket Granting Ticket (TGT)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TGS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket Granting Service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues service tickets (ST) for specific services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provides the actual service (file server, print server)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TGT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket Granting Ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted ticket proving authentication, allows requesting service tickets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ST"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service Ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ticket for accessing a specific service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authenticator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-generated message proving knowledge of session key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents replay attacks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "462-kerberos-authentication-flow-6-steps",
      children: "4.6.2 Kerberos Authentication Flow (6 steps)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AS-REQ (Client → AS):"
        }), " Client sends username to Authentication Service (in cleartext)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AS-REP (AS → Client):"
        }), " AS retrieves user's password hash (from database), generates:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TGT:"
            }), " Encrypted with KDC's secret key — contains client identity, TGS session key, expiration"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TGS Session Key:"
            }), " Encrypted with user's password hash (derived from password)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Client decrypts TGS session key (using password hash), discards password from memory"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TGS-REQ (Client → TGS):"
        }), " Client requests service ticket for service S:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sends TGT (encrypted with KDC's key — client cannot see/modify)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Sends ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authenticator"
            }), " (client ID + timestamp) encrypted with TGS session key"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TGS-REP (TGS → Client):"
        }), " TGS decrypts TGT (verifies client identity), validates authenticator, generates:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Service Ticket (ST):"
            }), " Encrypted with service S's secret key — contains client identity, service session key"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Service Session Key:"
            }), " Encrypted with TGS session key"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AP-REQ (Client → SS):"
        }), " Client requests access to service S:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sends ST (encrypted with service's secret key — client cannot see/modify)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sends new Authenticator encrypted with service session key"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AP-REP (SS → Client, optional):"
        }), " Service decrypts ST (confirms identity), validates authenticator, optionally sends response encrypted with service session key"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client                  KDC (AS+TGS)                Service Server\n  │                         │                          │\n  │──── AS-REQ (user) ──────▶│                          │\n  │◀──── AS-REP (TGT + TGS session key) ──────────────│\n  │                         │                          │\n  │──── TGS-REQ (TGT + authenticator) ────────────────▶│\n  │◀──── TGS-REP (ST + service session key) ──────────│\n  │                         │                          │\n  │──── AP-REQ (ST + authenticator) ──────────────────▶│\n  │◀──── AP-REP (optional) ───────────────────────────┤\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "463-kerberos-security-properties",
      children: "4.6.3 Kerberos Security Properties"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Achieved"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No password transmission"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password never sent over network; used only to decrypt TGS session key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replay prevention"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticator contains timestamp (+/- 5 min skew tolerance); reused authenticators detected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mutual authentication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both client and service prove knowledge of session key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single Sign-On (SSO)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TGT obtained once per login; multiple service tickets can be requested without re-entering password"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confidentiality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tickets encrypted with keys known only to KDC and respective services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forwardable tickets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TGT can be forwarded to other services for delegation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "464-kerberos-limitations",
      children: "4.6.4 Kerberos Limitations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Limitation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clock synchronization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all hosts to have synchronized clocks (within 5 min default skew)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single point of failure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KDC must be available for authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dictionary attack on password"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AS-REP for TGS session key encrypted with password hash — offline brute-force possible if attacker captures AS-REP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not suitable for internet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designed for local network; TCP/UDP port 88 must be open"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Kerberos_Flow[Kerberos Authentication]\n        direction TB\n        C[\"Client\"] --> AS[\"AS<br/>(Authentication Service)\"]\n        AS --> TGT[\"Ticket Granting Ticket<br/>+ TGS Session Key\"]\n        TGT --> C\n        C --> TGS[\"TGS<br/>(Ticket Granting Service)\"]\n        TGS --> ST[\"Service Ticket<br/>+ Service Session Key\"]\n        ST --> C\n        C --> SS[\"SS<br/>(Service Server)\"]\n        SS --> OK[\"✅ Access Granted\"]\n    end\n    style Kerberos_Flow fill:#fce4ec\n    style AS fill:#ffcc80\n    style TGS fill:#ffb74d\n    style SS fill:#81c784\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-solved-mcqs-exam-style",
      children: "4.7 Solved MCQs (Exam Style)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " In a digital signature scheme, which key does the signer use to create the signature?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Recipient's public key", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Recipient's private key", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Signer's public key", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Signer's private key"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: D) Signer's private key"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The digital signature is created by encrypting the hash of the message with the SIGNER's private key. This ensures non-repudiation: only the signer possesses their private key, so only they could have created the signature. The recipient verifies by decrypting with the signer's PUBLIC key. If the decrypted hash matches the locally computed hash, the signature is valid."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " In Kerberos, the Ticket Granting Ticket (TGT) is encrypted with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The client's password hash", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The service server's secret key", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The KDC's secret key", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The TGS session key"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) The KDC's secret key"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The TGT is encrypted with the KDC's secret key (known only to the KDC). The client cannot decrypt the TGT — they can only present it to the TGS. This prevents tampering with TGT contents. The TGT contains: client ID, TGS session key, expiration time, and other metadata. The TGS session key (a separate component of the AS-REP) is encrypted with the client's password hash so the client can decrypt it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which OAuth 2.0 grant type is recommended for mobile applications?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Implicit grant", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Resource Owner Password Credentials", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Authorization Code with PKCE", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Client Credentials"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Authorization Code with PKCE"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Authorization Code with PKCE (Proof Key for Code Exchange) is the recommended grant for mobile apps and SPAs. PKCE prevents authorization code interception attacks by requiring the client to prove possession of the code_verifier. The Implicit grant (historically used for SPAs) exposes the access token in the URL fragment and is now deprecated in favor of PKCE. Client Credentials is for machine-to-machine. ROPC exposes user passwords to the client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the primary purpose of a Certificate Revocation List (CRL)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) To issue new certificates", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) To list certificates that have been revoked before their expiration", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) To validate the signature on a certificate", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) To store backup copies of private keys"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) To list certificates that have been revoked before their expiration"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " CRL is a signed list of certificate serial numbers that have been revoked by the CA before their scheduled expiration. Reasons for revocation include: private key compromise, CA compromise, cessation of operation, affiliation change, or superseded certificate. Clients download and cache the CRL to verify that a certificate has not been revoked before accepting it. OCSP provides a real-time alternative."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which X.509 v3 extension indicates whether a certificate is a CA certificate?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Key Usage", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Extended Key Usage", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Basic Constraints", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Subject Alternative Name"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Basic Constraints"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The Basic Constraints extension indicates whether the certificate is a CA (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CA:TRUE"
        }), ") or an end-entity (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CA:FALSE"
        }), "). It also includes an optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pathLenConstraint"
        }), " specifying the maximum number of subordinate CA certificates allowed in the chain. Key Usage restricts the cryptographic operations, Extended Key Usage specifies the certificate's purpose (server auth, client auth), and SAN lists domain names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " In Kerberos, what prevents replay attacks?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The TGT expiration time", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The authenticator timestamp", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The service ticket lifetime", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The encryption algorithm"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The authenticator timestamp"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The authenticator contains the client ID and a timestamp, encrypted with the session key. The service server checks that the timestamp is within the allowed time skew (typically ±5 minutes) and that no authenticator with the same timestamp has been received before. If an attacker captures and re-sends the authenticator, the server will reject it because the timestamp is now outside the acceptable window or has been seen before."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " Which statement about SAML assertions is TRUE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) They are typically encoded as JSON", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) They are always unsigned", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) They contain statements about authentication, attributes, and authorization decisions", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) They are issued by the Service Provider"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) They contain statements about authentication, attributes, and authorization decisions"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " A SAML assertion is an XML document signed by the Identity Provider (IdP) that contains three types of statements: (1) Authentication Statement — when and how the subject was authenticated, (2) Attribute Statement — additional attributes about the subject (email, role, department), and (3) Authorization Decision Statement — whether the subject is authorized to access a specific resource. Assertions are always signed (not unsigned) and are XML-based (not JSON)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " In the digital signature verification process, which operation is performed using the signer's public key?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Hashing the received message", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Decrypting the received signature", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Encrypting the received message", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Generating a new signature"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Decrypting the received signature"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The recipient decrypts the received digital signature using the signer's PUBLIC key. This reveals hash₁ = Decrypt(K_public, Signature). The recipient then computes hash₂ = Hash(received message) independently. If hash₁ = hash₂, the signature is valid. This confirms: (1) the message was signed by the holder of the corresponding private key (authentication), (2) the message hasn't been modified (integrity), and (3) the signer cannot deny signing (non-repudiation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " What is the purpose of the OCSP stapling extension in TLS?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) To reduce TLS handshake latency by 50%", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) To allow the server to provide a time-stamped OCSP response during the handshake", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) To encrypt the server's certificate", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) To compress the handshake messages"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) To allow the server to provide a time-stamped OCSP response during the handshake"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " OCSP stapling (formally: TLS Certificate Status Request extension) allows the web server to periodically fetch an OCSP response from the CA and \"staple\" it to the TLS handshake. Benefits: (1) client does not need to contact the CA directly (reduces latency), (2) privacy improved (CA cannot track which websites the client visits), (3) reduces load on CA's OCSP responders. The OCSP response is signed by the CA and timestamped."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " Which of the following is NOT a standard OAuth 2.0 grant type?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Authorization Code", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) SAML Bearer Assertion", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Client Credentials", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Device Code"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) SAML Bearer Assertion"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " SAML Bearer Assertion is NOT a standard OAuth 2.0 grant type defined in RFC 6749. It is an extension (RFC 7522) that allows exchanging a SAML assertion for an OAuth access token. The standard grant types (RFC 6749) are: Authorization Code, Implicit, Resource Owner Password Credentials, and Client Credentials. Device Code is defined in RFC 8628 (Device Authorization Grant)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-solved-examples-20-mcqs",
      children: "📝 Solved Examples (20 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " In a digital signature scheme, if an attacker wants to forge a signature on a message, what must they possess?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The signer's public key", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The signer's private key", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The recipient's private key", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The hash of the message"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The signer's private key"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " A digital signature can only be created by the holder of the private key corresponding to the public key used for verification. For RSA signatures: Signature = Encrypt(Hash(message), K_private). The private key is the \"signing key\" — it must be kept secret. The public key is the \"verification key\" — anyone can verify. Without the private key, forging a signature requires solving the RSA problem (factoring n) or finding a hash collision — both computationally infeasible for proper key sizes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The security property \"non-repudiation\" relies on this: only the signer could have created the signature, so they cannot deny it."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " In an X.509 certificate, which extension indicates whether the certificate can be used to sign other certificates?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Key Usage", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Extended Key Usage", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Basic Constraints", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Subject Alternative Name"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Basic Constraints"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The Basic Constraints extension contains:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "CA:TRUE"
          }), " — This is a CA certificate; can sign other certificates"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "CA:FALSE"
          }), " — This is an end-entity certificate; cannot sign other certificates"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "pathLenConstraint"
          }), ": Maximum number of subordinate CAs below this CA"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Key Usage (", (0,jsx_runtime.jsx)(_components.code, {
          children: "keyCertSign"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cRLSign"
        }), ") must also be set for CA certificates. Extended Key Usage specifies purposes like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "serverAuth"
        }), " (TLS), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clientAuth"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "codeSigning"
        }), ". SAN lists domain names (for HTTPS certificates)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In OAuth 2.0 Authorization Code flow, where is the access token delivered?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) In the URL fragment after redirect", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) In the authorization response redirect URL as a query parameter (code)", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Directly to the client via server-to-server POST", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) In an HTTP header from the authorization server"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Directly to the client via server-to-server POST"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The Authorization Code flow delivers the access token through a secure server-to-server exchange:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["User authorizes → Authorization Server redirects to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "callback?code=AUTH_CODE"
          }), " (authorization code, not token)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Client sends ", (0,jsx_runtime.jsx)(_components.code, {
            children: "POST /token"
          }), " with the code + client credentials (client_id + client_secret) DIRECTLY to the authorization server"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Authorization Server returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{\"access_token\":\"...\", \"refresh_token\":\"...\"}"
          }), " in the HTTPS response body"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The token is never exposed to the browser — this is why Authorization Code is more secure than Implicit grant (which returned token in URL fragment)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In Kerberos, what prevents an attacker from replaying a captured Service Ticket (ST)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The ST has a short lifetime", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The ST contains a timestamp in the authenticator", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The ST is encrypted and the attacker cannot decrypt it", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The service server checks for duplicate authenticator timestamps"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: D) The service server checks for duplicate authenticator timestamps"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The authenticator (encrypted with the service session key) contains a timestamp. The service server:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Decrypts the authenticator using the service session key"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Checks the timestamp is within the allowed time skew (typically ±5 minutes)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Caches previously seen authenticator timestamps"
          }), " — rejects duplicates"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Even if an attacker captures the ST (which they can't decrypt) and the authenticator, replaying them will fail because the service already recorded that timestamp. Additionally, ticket lifetime limits the window. Both factors combine: timestamp uniqueness + short ticket lifetime."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the trust anchor in a PKI hierarchy?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The Certificate Revocation List", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The Root CA's public key (self-signed certificate)", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The intermediate CA's certificate", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The end-entity certificate"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The Root CA's public key (self-signed certificate)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The trust anchor is the Root CA certificate that is trusted by fiat — it's self-signed and its public key is pre-installed in the trust store (browser, OS, or application). For example:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Browsers ship with ~100-150 root CA certificates pre-installed"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Microsoft Windows: root certificates via Microsoft Root Certificate Program"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Apple: Apple Root Certificate Program"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mozilla: Mozilla CA Certificate Program"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "All trust flows from this anchor. Intermediate and leaf certificates are verified by tracing a chain back to a trusted root. If the root is compromised, all certificates under it are untrusted."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " In SAML 2.0 SP-initiated SSO, who creates the SAML assertion?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The Service Provider", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The Identity Provider", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The Certificate Authority", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The browser"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The Identity Provider (IdP)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " In SP-initiated SSO:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "User attempts to access SP resource (unauthenticated)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SP generates AuthnRequest (signed XML) → redirects user to IdP"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "User authenticates to IdP (password, 2FA, cert)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IdP creates the SAML assertion"
          }), " — XML document containing:\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Authentication Statement (when/how user authenticated)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Attribute Statement (user identity, email, roles)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Conditions (validity period, audience restriction)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IdP's digital signature (over entire assertion)"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Assertion delivered to SP via browser POST binding"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SP validates signature, extracts identity, creates session"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The assertion is always created by the IdP (the trusted authentication source)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " What is the key size for an ECDSA signature using the P-256 curve?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 256 bits (signature is 64 bytes)", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 512 bits (signature is 64 bytes)", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 256 bits (signature is 32 bytes)", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 128 bits"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 512 bits (signature is 64 bytes)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " For ECDSA with curve P-256 (secp256r1):"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Private key: 256 bits (32 bytes) — random integer mod n"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Public key: 512 bits (64 bytes) — two 256-bit coordinates (x, y), uncompressed"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Signature: 512 bits (64 bytes)"
          }), " — two 256-bit integers (r, s) per signature"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The signature is 2 × the key size because ECDSA produces two values (r, s), each of order n (256-bit for P-256). EdDSA (Ed25519) produces a 64-byte signature for a comparable security level with deterministic signing (no RNG dependency)."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Exam comparison:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Algorithm"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Private Key"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Signature Size"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RSA-2048"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2048 bits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2048 bits (256 bytes)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "ECDSA P-256"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "256 bits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512 bits (64 bytes)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Ed25519"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "256 bits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512 bits (64 bytes)"
            })]
          })]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " What does OCSP Responder do when queried about a certificate status?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Returns the certificate's public key", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Returns the certificate's serial number, status (good/revoked/unknown), and a signed response", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Returns the full certificate chain", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Returns the CA's private key"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Returns the certificate's serial number, status (good/revoked/unknown), and a signed response"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " OCSP (Online Certificate Status Protocol, RFC 6960) response format:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate ID:"
          }), " Hash of issuer DN + issuer public key + certificate serial number"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Status:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "good"
          }), " (certificate valid, not revoked), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "revoked"
          }), " (revoked with revocation date/reason), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unknown"
          }), " (responder doesn't know)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ThisUpdate / NextUpdate:"
          }), " Time range"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Responder's digital signature:"
          }), " Provides authentication and integrity"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The response is ASN.1 DER-encoded and signed by the CA (or authorized responder). Response size: ~500-1000 bytes. OCSP stapling (TLS extension) improves privacy and reduces latency."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " In OAuth 2.0, what is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scope"
      }), " parameter in the authorization request?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) To limit the validity period of the token", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) To specify the permissions the client is requesting", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) To encrypt the authorization request", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) To identify the client application"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) To specify the permissions the client is requesting"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scope"
        }), " parameter defines the specific permissions the client needs. Examples:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "scope=openid profile email"
          }), " — OpenID Connect scopes (identity)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "scope=read write"
          }), " — basic read/write access"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "scope=https://www.googleapis.com/auth/drive.file"
          }), " — Google API scope"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Scopes are agreed between the authorization server and resource server. The resource owner (user) sees the requested scopes during consent. Authorization server issues an access token limited to the approved scopes. OAuth scope is one of the key differences from SAML (which uses attributes rather than scopes)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " What happens if an intermediate CA certificate in a trust chain has expired?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) All leaf certificates under it are still valid", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) All leaf certificates under it become invalid", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Only the intermediate CA certificate is affected", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The Root CA automatically renews the intermediate"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) All leaf certificates under it become invalid (chain fails)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Certificate chain validation requires ALL certificates in the chain to be within their validity period (notBefore ≤ now ≤ notAfter). If the intermediate CA certificate has expired:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The leaf certificate may still be valid (current date within leaf's validity)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "But the intermediate CA's signature on the leaf is \"expired\" — there is no valid chain"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The root CA's certificate is typically valid for 20-30 years (root CAs are long-lived)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Solution: The intermediate CA must get a new certificate from the root CA before expiry"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This is why certificate lifecycle management is critical — organizations must renew intermediate CAs well before expiry to avoid cascading failures."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q11."
      }), " In Kerberos, the TGS session key is encrypted with which key in the AS-REP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The KDC's master key", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The client's password hash", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The service server's secret key", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The TGT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The client's password hash"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " In the AS-REP, the KDC sends two components:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TGT:"
          }), " Encrypted with the KDC's secret key (client cannot decrypt this)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TGS Session Key + metadata:"
          }), " Encrypted with the client's password hash (derived from user's password)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The client decrypts component 2 using their password (hash). The TGS session key is used to secure communication with the TGS. The password is then discarded from memory. The TGT is presented to the TGS, which decrypts it using the KDC's secret key."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This design means: (1) password never travels over network, (2) only the correct password allows decryption of the TGS session key, (3) KDC can verify identity without storing passwords."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q12."
      }), " What is the primary purpose of the Registration Authority (RA) in PKI?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) To sign digital certificates", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) To verify the identity of certificate applicants before forwarding to CA", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) To revoke certificates", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) To publish CRLs"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) To verify the identity of certificate applicants before forwarding to CA"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The RA (Registration Authority) handles identity verification and registration:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Accepts certificate requests"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Validates applicant identity (documents, domain control verification, email verification)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Approves or rejects requests"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Forwards approved requests to the CA for actual certificate issuance"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "May handle revocation requests"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The RA does NOT issue/sign certificates (that's the CA's role) and typically does NOT run the OCSP responder (VA's role). Separating RA from CA provides security through separation of duties — even if RA is compromised, the CA's signing keys remain secure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q13."
      }), " In the context of digital signatures, what is the \"hash-then-sign\" paradigm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Sign the hash of the message instead of the full message", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Hash the signature after signing", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Sign the message, then hash the result", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Both hash and sign independently"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) Sign the hash of the message instead of the full message"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Hash-then-sign is the standard approach:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compute hash:"
          }), " h = H(M) — produces fixed-size digest (e.g., 256 bits for SHA-256)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sign hash:"
          }), " σ = E(K_private, h)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verification:"
          }), " h' = D(K_public, σ), then compare h' with H(M)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Why not sign the full message?"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance:"
          }), " Asymmetric signing is 100-1000× slower than symmetric. Signing a 256-bit hash is far faster than signing a multi-MB message"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Size:"
          }), " Signature is fixed-size regardless of message length"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security:"
          }), " Hash collision resistance prevents two different messages from producing the same signature"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compatibility:"
          }), " Hashed message can be signed once but verified by multiple parties without re-signing"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14."
      }), " What is the role of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aud"
      }), " (audience) claim in a JWT access token?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Identifies the token issuer", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Identifies the intended recipient of the token", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Identifies the token expiration time", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Identifies the user"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Identifies the intended recipient of the token"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " JWT claims:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "iss"
          }), " (issuer): Who created/signed the token (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
            children: "accounts.google.com"
          }), ")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "aud"
            }), " (audience):"]
          }), " Intended recipient — the resource server that should accept this token. Prevents token reuse across different services"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "sub"
          }), " (subject): The user/entity the token is about"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "exp"
          }), " (expiration): Token expiry timestamp"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "iat"
          }), " (issued at): When token was created"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "jti"
          }), " (JWT ID): Unique identifier for token"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aud"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://api.example.com"
        }), ", another service receiving this token should reject it because the audience doesn't match. This prevents a token issued for one API from being used against a different API (token replay across services)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q15."
      }), " In OpenID Connect, the ID Token is typically encoded in which format?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) XML", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) JSON Web Token (JWT)", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) SAML assertion", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Binary DER"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) JSON Web Token (JWT)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " OpenID Connect extends OAuth 2.0 for authentication. The ID Token is a JWT (JSON Web Token) containing:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "iss"
          }), ": Identity Provider URL"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "sub"
          }), ": Unique user identifier"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "aud"
          }), ": Client ID"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "exp"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "iat"
          }), ": Expiration and issue times"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "nonce"
          }), ": Mitigates replay attacks"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "auth_time"
          }), ": When authentication occurred"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "email"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "name"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "picture"
          }), ": User info claims (requested via scopes)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The JWT is signed by the IdP using RS256 (RSA with SHA-256) or ES256 (ECDSA with P-256). The client validates the signature using the IdP's public key (obtained from its JWKS endpoint)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q16."
      }), " A Root CA certificate has Basic Constraints: CA:TRUE, pathLenConstraint:2. How many levels of subordinate CAs can exist below it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 0", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 1", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 2", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Unlimited"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 2"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pathLenConstraint"
        }), " specifies the maximum number of CA certificates that can follow this certificate in the chain (NOT including the leaf end-entity certificate). With pathLenConstraint=2:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Root CA (pathLen=2) → Intermediate CA1 (pathLen=1) → Intermediate CA2 (pathLen=0) → End-entity cert"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "That's 2 levels of CA below root, plus the leaf"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "If pathLenConstraint is not specified, there is no limit. The constraint prevents CA key compromise from affecting too many downstream certificates."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q17."
      }), " In OAuth 2.0, what is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refresh_token"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) To obtain a new access token without requiring user re-authentication", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) To refresh the user's session timeout", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) To extend the lifetime of the current access token", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) To invalidate the previous access token"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) To obtain a new access token without requiring user re-authentication"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Access tokens have limited lifetimes (typically 1 hour). When the access token expires, the client can use the refresh token to get a new access token:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /token\n  grant_type=refresh_token\n  refresh_token=xxxxx\n  client_id=app\n  client_secret=secret\n\nResponse: { \"access_token\": \"new_token\", \"expires_in\": 3600 }\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Refresh tokens are long-lived (days/weeks/months) and should be stored securely (server-side, not in browser/localStorage). They provide persistent access without requiring the user to re-authenticate. Some authorization servers rotate refresh tokens (old one invalidated upon use)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q18."
      }), " Which cryptographic algorithm family is used in CRYSTALS-Kyber (ML-KEM), the NIST-selected post-quantum KEM?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Hash-based signatures", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Code-based cryptography", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Lattice-based cryptography", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Multivariate cryptography"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Lattice-based cryptography"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " CRYSTALS-Kyber (standardized as ML-KEM in FIPS 203) is based on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Module Learning With Errors (MLWE)"
        }), " problem — a lattice-based cryptographic assumption. Key properties:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security:"
          }), " Believed to be computationally hard for both classical and quantum computers"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficiency:"
          }), " Fast key generation, encapsulation, and decapsulation (comparable to ECDH)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key sizes:"
          }), " Public key ~800 bytes (Kyber-512), ciphertext ~768 bytes — larger than ECC but practical"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NIST selection:"
          }), " Primary KEM for general public-key encryption (August 2024)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NIST also selected: CRYSTALS-Dilithium (ML-DSA, lattice-based signatures), FALCON (FN-DSA, lattice-based, smaller signatures), and SPHINCS+ (SLH-DSA, hash-based, conservative backup)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q19."
      }), " In a certificate chain validation, what is checked at each CA level?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The CA's public key only", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The parent CA's digital signature on the child CA's certificate", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The child CA's signature on the parent CA", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The leaf certificate's private key"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The parent CA's digital signature on the child CA's certificate"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Certificate chain validation proceeds bottom-up:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Start with leaf certificate → extract \"Issuer DN\" → find intermediate CA cert"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify leaf cert's signature using intermediate CA's public key"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Extract intermediate CA's \"Issuer DN\" → find next CA in chain"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify intermediate CA's signature using next CA's public key"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Repeat until reaching Root CA"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify Root CA's signature using its own public key"
          }), " (self-signed — trust anchor)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Check all certificates are still within validity period"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Check revocation status (CRL/OCSP) for each cert"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Verify key usage extensions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Each signature verification proves the child's certificate was issued by the parent and hasn't been modified."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q20."
      }), " What is the primary difference between OAuth 2.0 and OpenID Connect?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) OAuth 2.0 is for authorization; OpenID Connect adds authentication on top", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) OpenID Connect is for authorization; OAuth 2.0 is for authentication", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) They are interchangeable", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) OpenID Connect uses XML; OAuth 2.0 uses JSON"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) OAuth 2.0 is for authorization; OpenID Connect adds authentication on top"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        })
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Aspect"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "OAuth 2.0"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "OpenID Connect (OIDC)"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Primary purpose"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Authorization (API access)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Authentication (verify identity)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Token type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Access Token (opaque/JWT)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Access Token + ID Token (JWT)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "User identity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Not standardized"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Standardized in ID Token (sub, email, name)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "User info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Custom API call"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Standard ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/userinfo"
              }), " endpoint"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Standard"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "RFC 6749"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "RFC 7519 + OIDC Core"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Protocol flow"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Various grants"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Authorization Code + PKCE (mandatory)"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["OIDC = OAuth 2.0 + ID Token (JWT) + UserInfo endpoint + standardized scopes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "openid"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), "). OIDC is the modern standard for social login (Google, Apple, Microsoft login)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-jwt-token-handler-with-oauth-20",
      children: "TypeScript Implementation: JWT Token Handler with OAuth 2.0"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * JWT Token Handler\n * Implements JWT creation, validation, and OAuth 2.0 token management\n */\nimport * as crypto from 'crypto';\n\ninterface JWTHeader {\n  alg: 'RS256' | 'ES256' | 'HS256';\n  typ: 'JWT';\n  kid?: string;\n}\n\ninterface JWTPayload {\n  iss: string;        // issuer\n  sub: string;        // subject (user ID)\n  aud: string;        // audience\n  exp: number;        // expiration (epoch seconds)\n  iat: number;        // issued at\n  nbf?: number;       // not before\n  jti?: string;       // unique token ID\n  scope?: string;     // permissions\n  [key: string]: any;\n}\n\ninterface OAuthToken {\n  access_token: string;\n  token_type: 'Bearer';\n  expires_in: number;\n  refresh_token?: string;\n  scope?: string;\n  id_token?: string;  // OpenID Connect\n}\n\nclass JWTManager {\n  private readonly algorithm = 'sha256';\n  private readonly rsaKeyPair: crypto.KeyPairKeyObjectResult;\n\n  constructor() {\n    this.rsaKeyPair = crypto.generateKeyPairSync('rsa', {\n      modulusLength: 2048,\n      publicKeyEncoding: { type: 'spki', format: 'pem' },\n      privateKeyEncoding: { type: 'pkcs8', format: 'pem' }\n    });\n  }\n\n  private base64UrlEncode(buffer: Buffer): string {\n    return buffer\n      .toString('base64')\n      .replace(/=/g, '')\n      .replace(/\\+/g, '-')\n      .replace(/\\//g, '_');\n  }\n\n  private base64UrlDecode(str: string): Buffer {\n    str = str.replace(/-/g, '+').replace(/_/g, '/');\n    while (str.length % 4) str += '=';\n    return Buffer.from(str, 'base64');\n  }\n\n  createJWT(payload: JWTPayload): string {\n    const header: JWTHeader = { alg: 'RS256', typ: 'JWT' };\n\n    const headerEncoded = this.base64UrlEncode(Buffer.from(JSON.stringify(header)));\n    const payloadEncoded = this.base64UrlEncode(Buffer.from(JSON.stringify(payload)));\n    const signingInput = `${headerEncoded}.${payloadEncoded}`;\n\n    const signature = crypto.sign(\n      this.algorithm,\n      Buffer.from(signingInput),\n      this.rsaKeyPair.privateKey\n    );\n\n    const signatureEncoded = this.base64UrlEncode(signature);\n    return `${signingInput}.${signatureEncoded}`;\n  }\n\n  verifyJWT(token: string): JWTPayload | null {\n    const parts = token.split('.');\n    if (parts.length !== 3) return null;\n\n    const [headerEncoded, payloadEncoded, signatureEncoded] = parts;\n    const signingInput = `${headerEncoded}.${payloadEncoded}`;\n\n    const isValid = crypto.verify(\n      this.algorithm,\n      Buffer.from(signingInput),\n      this.rsaKeyPair.publicKey,\n      this.base64UrlDecode(signatureEncoded)\n    );\n\n    if (!isValid) return null;\n\n    const payload: JWTPayload = JSON.parse(\n      this.base64UrlDecode(payloadEncoded).toString('utf8')\n    );\n\n    // Check expiration\n    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {\n      return null; // expired\n    }\n\n    return payload;\n  }\n\n  // Generate OAuth token response\n  createOAuthToken(subject: string, audience: string, scopes: string[]): OAuthToken {\n    const now = Math.floor(Date.now() / 1000);\n    const accessToken = this.createJWT({\n      iss: 'auth.example.com',\n      sub: subject,\n      aud: audience,\n      exp: now + 3600,        // 1 hour\n      iat: now,\n      jti: crypto.randomBytes(16).toString('hex'),\n      scope: scopes.join(' ')\n    });\n\n    const refreshToken = crypto.randomBytes(32).toString('hex');\n\n    return {\n      access_token: accessToken,\n      token_type: 'Bearer',\n      expires_in: 3600,\n      refresh_token: refreshToken,\n      scope: scopes.join(' ')\n    };\n  }\n\n  decodeHeader(token: string): JWTHeader | null {\n    try {\n      const headerEncoded = token.split('.')[0];\n      return JSON.parse(this.base64UrlDecode(headerEncoded).toString('utf8'));\n    } catch {\n      return null;\n    }\n  }\n\n  getPublicKeyPEM(): string {\n    return this.rsaKeyPair.publicKey;\n  }\n}\n\n// Demo\nconst jwtManager = new JWTManager();\nconst tokenResponse = jwtManager.createOAuthToken(\n  'user_abc123',\n  'api.example.com',\n  ['read:profile', 'write:orders']\n);\n\nconsole.log('=== OAuth 2.0 Token Response ===');\nconsole.log(`Access Token: ${tokenResponse.access_token.slice(0, 64)}...`);\nconsole.log(`Token Type: ${tokenResponse.token_type}`);\nconsole.log(`Expires In: ${tokenResponse.expires_in}s`);\nconsole.log(`Scope: ${tokenResponse.scope}`);\n\nconst decoded = jwtManager.decodeHeader(tokenResponse.access_token);\nconsole.log('\\n=== JWT Header ===');\nconsole.log(JSON.stringify(decoded, null, 2));\n\nconst verified = jwtManager.verifyJWT(tokenResponse.access_token);\nconsole.log('\\n=== JWT Verification ===');\nconsole.log(`Valid: ${verified !== null}`);\nif (verified) {\n  console.log(`Subject: ${verified.sub}`);\n  console.log(`Audience: ${verified.aud}`);\n  console.log(`Scope: ${verified.scope}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-pki-certificate-chain-validator",
      children: "TypeScript Implementation: PKI Certificate Chain Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * PKI Certificate Chain Validator\n * Validates certificate chains, checks expiration, revocation, and key usage\n */\n\ninterface X509Certificate {\n  serialNumber: string;\n  issuer: string;\n  subject: string;\n  notBefore: Date;\n  notAfter: Date;\n  isCA: boolean;\n  keyUsage: string[];\n  publicKeyPEM: string;\n  signatureHex: string;\n  parentSignatureHex?: string;\n}\n\ninterface ValidationResult {\n  valid: boolean;\n  chain: X509Certificate[];\n  errors: string[];\n  warnings: string[];\n}\n\nclass PKIValidator {\n  private trustedRoots: Map<string, X509Certificate> = new Map();\n\n  addTrustedRoot(cert: X509Certificate): void {\n    this.trustedRoots.set(cert.subject, cert);\n  }\n\n  private verifySignature(child: X509Certificate, parent: X509Certificate): boolean {\n    // Simplified: In production, actual RSA/ECDSA signature verification against parent's public key\n    // Here we simulate: child stores parent's signature, parent verifies it\n    const dataToVerify = `${child.subject}|${child.serialNumber}|${child.publicKeyPEM}`;\n    const expectedSig = crypto\n      .createHash('sha256')\n      .update(dataToVerify)\n      .digest('hex')\n      .slice(0, 32);\n\n    return child.parentSignatureHex === expectedSig;\n  }\n\n  validateChain(leafCert: X509Certificate): ValidationResult {\n    const result: ValidationResult = {\n      valid: false,\n      chain: [leafCert],\n      errors: [],\n      warnings: []\n    };\n\n    const now = new Date();\n    let currentCert = leafCert;\n\n    // Step 1: Check leaf certificate validity\n    if (currentCert.notAfter < now) {\n      result.errors.push(`Leaf certificate expired on ${currentCert.notAfter}`);\n      return result;\n    }\n    if (currentCert.notBefore > now) {\n      result.errors.push(`Leaf certificate not yet valid (starts ${currentCert.notBefore})`);\n      return result;\n    }\n\n    // Step 2: Check if leaf is end-entity (not a CA, unless it's a cross-cert)\n    if (currentCert.isCA) {\n      result.warnings.push('Leaf certificate has CA:TRUE — expected end-entity cert');\n    }\n\n    // Step 3: Build and verify chain\n    const maxChainDepth = 10;\n    let depth = 0;\n\n    while (depth < maxChainDepth) {\n      // Look for issuer in trusted roots\n      const issuer = this.trustedRoots.get(currentCert.issuer);\n\n      if (issuer) {\n        // Found trusted root\n        if (!this.verifySignature(currentCert, issuer)) {\n          result.errors.push(`Signature verification failed: ${currentCert.subject} ← ${issuer.subject}`);\n          return result;\n        }\n\n        // Verify root is valid\n        if (issuer.notAfter < now) {\n          result.errors.push(`Root CA expired: ${issuer.subject}`);\n          return result;\n        }\n\n        // Verify root key usage\n        if (!issuer.keyUsage.includes('keyCertSign')) {\n          result.errors.push(`Root CA missing keyCertSign: ${issuer.subject}`);\n          return result;\n        }\n\n        result.chain.push(issuer);\n        result.valid = true;\n        return result;\n      }\n\n      // If root not found, we need intermediate CAs\n      // In production, fetch from AIA (Authority Information Access) extension\n      result.errors.push(`Trust anchor not found for issuer: ${currentCert.issuer}`);\n      return result;\n    }\n\n    result.errors.push('Maximum chain depth exceeded');\n    return result;\n  }\n\n  // Simulate OCSP check\n  checkRevocation(cert: X509Certificate): 'good' | 'revoked' | 'unknown' {\n    // In production: query OCSP responder at URL from AIA extension\n    // Use OCSP nonce for freshness\n    return 'good';\n  }\n}\n\n// Demo\nconst validator = new PKIValidator();\n\nconst rootCA: X509Certificate = {\n  serialNumber: '01',\n  issuer: 'Root CA',\n  subject: 'Root CA',\n  notBefore: new Date('2020-01-01'),\n  notAfter: new Date('2040-01-01'),\n  isCA: true,\n  keyUsage: ['keyCertSign', 'cRLSign'],\n  publicKeyPEM: '-----BEGIN PUBLIC KEY-----\\n...root pub key...\\n-----END PUBLIC KEY-----',\n  signatureHex: '00000000000000000000000000000000'\n};\n\nvalidator.addTrustedRoot(rootCA);\n\nconst leafCert: X509Certificate = {\n  serialNumber: 'A1B2C3',\n  issuer: 'Root CA',\n  subject: 'CN=www.example.com',\n  notBefore: new Date('2024-01-01'),\n  notAfter: new Date('2025-01-01'),\n  isCA: false,\n  keyUsage: ['digitalSignature', 'keyEncipherment'],\n  publicKeyPEM: '-----BEGIN PUBLIC KEY-----\\n...leaf pub key...\\n-----END PUBLIC KEY-----',\n  signatureHex: crypto.createHash('sha256').update('CN=www.example.com|A1B2C3|-----BEGIN PUBLIC KEY-----\\n...leaf pub key...\\n-----END PUBLIC KEY-----').digest('hex').slice(0, 32),\n  parentSignatureHex: crypto.createHash('sha256').update('CN=www.example.com|A1B2C3|-----BEGIN PUBLIC KEY-----\\n...leaf pub key...\\n-----END PUBLIC KEY-----').digest('hex').slice(0, 32)\n};\n\nconst result = validator.validateChain(leafCert);\nconsole.log('=== Certificate Chain Validation ===');\nconsole.log(`Valid: ${result.valid}`);\nconsole.log(`Chain length: ${result.chain.length}`);\nconsole.log(`Errors: ${result.errors.length ? result.errors.join(', ') : 'None'}`);\nconsole.log(`Warnings: ${result.warnings.length ? result.warnings.join(', ') : 'None'}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-diagram-pki-hierarchy-and-trust-chain",
      children: "Mermaid Diagram: PKI Hierarchy and Trust Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph PKI_Hierarchy[PKI Hierarchy]\n        Root[\"🔒 Root CA<br/>(Self-signed)<br/>Trust Anchor<br/>20-30 year lifetime\"] --> ICA1[\"Intermediate CA 1<br/>(Policy CA)<br/>10 year lifetime\"]\n        Root --> ICA2[\"Intermediate CA 2<br/>(Issuing CA)<br/>5 year lifetime\"]\n        ICA1 --> ICA3[\"Intermediate CA 3<br/>(Subordinate)\"]\n        ICA2 --> Leaf1[\"Leaf: Server Cert<br/>www.example.com<br/>1-2 year lifetime\"]\n        ICA2 --> Leaf2[\"Leaf: Code Signing<br/>App v1.0<br/>3 year lifetime\"]\n        ICA3 --> Leaf3[\"Leaf: Client Cert<br/>user@example.com<br/>1 year lifetime\"]\n    end\n    subgraph Validation[Certificate Validation]\n        V_Start[\"Start\"] --> V_Leaf[\"1. Check leaf validity<br/>notBefore < now < notAfter\"]\n        V_Leaf --> V_Sig[\"2. Verify parent signature<br/>on leaf certificate\"]\n        V_Sig --> V_Chain[\"3. Walk up chain<br/>verifying each signature\"]\n        V_Chain --> V_Root[\"4. Root in trust store?\"]\n        V_Root -->|\"Yes\"| V_Revoke[\"5. Check revocation<br/>(CRL / OCSP)\"]\n        V_Revoke --> V_KeyUsage[\"6. Verify key usage\"]\n        V_KeyUsage --> V_SAN[\"7. Match domain (SAN)\"]\n        V_SAN --> V_Done[\"✅ Certificate Valid\"]\n    end\n    style Root fill:#fff9c4\n    style Validation fill:#e3f2fd\n    style V_Done fill:#a5d6a7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-quantum-cryptography--detailed-overview",
      children: "Post-Quantum Cryptography — Detailed Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Post-Quantum Cryptography?"
      }), " Shor's algorithm (1994) can solve integer factorization and discrete logarithms in polynomial time on a sufficiently large quantum computer. This breaks RSA, ECDSA, ECDH, DSA, and all current public-key cryptography. Grover's algorithm halves the security of symmetric ciphers (AES-128 → 64-bit quantum security)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NIST Post-Quantum Cryptography Standardization (2024 Finalists):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signature/ Ciphertext"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-KEM (Kyber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice-based KEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "800-1184 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "768-1088 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML-DSA (Dilithium)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice-based signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1184-2592 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2044-4595 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIPS 205"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SLH-DSA (SPHINCS+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash-based signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-128 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7856-49856 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FN-DSA (FALCON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lattice-based signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~897 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~617 bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Quantum Migration Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid certificates:"
        }), " X.509 certificates with two public keys (classical + post-quantum)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid TLS:"
        }), " TLS 1.3 key exchange using both ECDHE and ML-KEM (combined shared secret)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithm agility:"
        }), " Systems designed to switch algorithms as standards evolve"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Crypto-agile libraries:"
        }), " Libraries supporting multiple algorithms (e.g., OpenSSL 3.x with provider architecture)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timeline expectations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025-2027:"
        }), " Hybrid implementations in TLS, SSH, code signing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2028-2030:"
        }), " Transition to pure post-quantum for most applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2030+:"
        }), " Full post-quantum ecosystem expected"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-exercise-bank-30-questions",
      children: "📖 Exercise Bank (30 Questions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " In RSA digital signatures, explain why signing the hash (not the message) is both a performance and security requirement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " An X.509 certificate has Basic Constraints: CA:TRUE, pathLenConstraint: 1. How many intermediate CAs can be below it? What is the maximum chain length?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " In OAuth 2.0 Authorization Code + PKCE flow, what prevents an attacker who intercepts the authorization code from exchanging it for an access token?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " For Kerberos authentication, list all messages exchanged between Client, AS, TGS, and Service Server. Indicate what each message contains and what key encrypts each component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " A company's root CA private key is compromised. Describe the complete recovery process including: revoking all certificates, issuing new root, re-issuing intermediates, and updating trust stores."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " In SAML 2.0, what is the difference between IdP-initiated SSO and SP-initiated SSO? Which is more commonly used?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " Calculate the size of an X.509 certificate bundle for a chain of 3 certificates (root + intermediate + leaf) assuming each certificate is approximately 2 KB. How does OCSP staple size compare?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " In OpenID Connect, what is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nonce"
      }), " parameter in the authentication request? How does it prevent replay attacks?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " A digital signature scheme uses ECDSA with P-256. The signature is r || s (64 bytes total). What is the probability that two different messages produce the same signature?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " In PKI, what is the difference between CRL (Certificate Revocation List) and Delta CRL? When would you use Delta CRL?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q11."
      }), " Explain the OAuth 2.0 Client Credentials grant. Give a real-world example where this grant type is appropriate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q12."
      }), " In Kerberos cross-realm authentication, how does a user in Realm A authenticate to a service in Realm B?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q13."
      }), " A certificate has Extended Key Usage: serverAuth and clientAuth. What is this certificate permitted to do? What would happen if it only had codeSigning?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14."
      }), " Compare the security properties of the three digital signature algorithms: RSA-PSS, ECDSA, and EdDSA (Ed25519). Which provides the best performance per bit of security?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q15."
      }), " In the context of PKI, what is the purpose of the Subject Key Identifier (SKI) and Authority Key Identifier (AKI) extensions? How do they assist in chain building?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q16."
      }), " For OAuth 2.0, list the complete Authorization Code flow with PKCE including all HTTP requests and responses. Indicate which requests include the client_secret and which use the code_verifier."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q17."
      }), " What is the role of the Key Derivation Function (KDF) in the TLS handshake? How does the Pre-Master Secret become the Master Secret and then session keys?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q18."
      }), " In SAML 2.0, what is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Conditions"
      }), " element in a SAML assertion? What conditions can be specified?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q19."
      }), " A JWT token has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alg: none"
      }), " in its header. What attack does this enable? How should servers defend against this?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q20."
      }), " Compare OCSP vs CRL for certificate revocation checking across: freshness, bandwidth, privacy, scalability, and latency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q21."
      }), " In the context of digital signatures, what is existential forgery vs selective forgery? Which is relevant to hash function collision resistance?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q22."
      }), " Explain how a Certificate Transparency (CT) log works. Why is CT important for HTTPS certificate security?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q23."
      }), " In the Kerberos protocol, what is the purpose of the pre-authentication timestamp? What attack does it prevent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q24."
      }), " For OpenID Connect, what is the difference between the Authorization Code flow and the Implicit flow (now deprecated)? Why is PKCE mandatory for OIDC?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q25."
      }), " A client registered with OAuth 2.0 as a \"public client\" (no client_secret). What security considerations apply? Why can't public clients use the Authorization Code grant without PKCE?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q26."
      }), " In post-quantum cryptography, explain why CRYSTALS-Kyber is a KEM (Key Encapsulation Mechanism) rather than a direct encryption algorithm. How does KEM + DEM (Data Encapsulation Mechanism) work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q27."
      }), " What is a Hardware Security Module (HSM)? How does it protect private keys in PKI? At what security level are HSMs evaluated (FIPS 140-2/3)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q28."
      }), " In the Web of Trust (PGP), how does key signing work? What prevents an attacker from signing a fake key? How does the \"trust path\" concept differ from PKI hierarchy?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q29."
      }), " For TLS 1.3 CertificateRequest, what information does the server send? When would a server request a client certificate (mutual TLS)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q30."
      }), " Describe the CRYSTALS-Dilithium (ML-DSA) signature algorithm in terms of: underlying hard problem, signature size for each security level, and comparison with RSA-3072 signatures."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer Key:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer Key"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A1."
        }), " Performance: asymmetric signing is 100-1000× slower than symmetric hashing. Signing a fixed 256-bit hash instead of a multi-MB message saves enormous CPU. Security: signing the hash inherits the hash's collision resistance — if M₁ and M₂ have same hash, they produce the same signature, so collision resistance prevents signature forgery across different messages."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2."
        }), " pathLenConstraint=1 means 1 intermediate CA level allowed below this CA. Maximum chain: Root (pathLen=1) → Intermediate (pathLen=0) → Leaf. Total 3 certificates in chain. The intermediate cannot issue another CA certificate because pathLen=0 limits it to issuing end-entity certs only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A3."
        }), " PKCE binds the authorization code to the client via code_verifier. When exchanging code for token, the client must present the code_verifier. The authorization server computes SHA-256(verifier) and compares with the stored code_challenge. An attacker who intercepts only the authorization code cannot provide the verifier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A4."
        }), " (1) AS-REQ: Client → AS (username in cleartext). (2) AS-REP: AS → Client (TGT encrypted with KDC key + TGS session key encrypted with client password hash). (3) TGS-REQ: Client → TGS (TGT + Authenticator encrypted with TGS session key). (4) TGS-REP: TGS → Client (ST encrypted with service key + service session key encrypted with TGS session key). (5) AP-REQ: Client → SS (ST + Authenticator encrypted with service session key). (6) AP-REP: SS → Client (optional, encrypted with service session key)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A5."
        }), " Recovery: (1) Immediately revoke old root CA cert (publish CRL). (2) Generate new root key pair in HSM. (3) Create new root self-signed certificate (new key, new subject if needed). (4) Issue new intermediate CA certs from new root. (5) Re-issue all leaf certificates from new intermediates. (6) Distribute new root cert to all trust stores (browsers, OS, apps). (7) Remove old root from trust stores after original expiry. This can take weeks/months for full deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A6."
        }), " SP-initiated: user accesses SP first → SP redirects to IdP → auth → assertion back to SP. More common for user-facing apps. IdP-initiated: user accesses IdP first → clicks on SP → IdP pushes assertion to SP. Used for enterprise portals (user logs into Okta, clicks Salesforce tile). SP-initiated is more common and better supported."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A7."
        }), " 3 × 2 KB = 6 KB for the full chain. OCSP staple: ~500-1000 bytes (certID + status + signature + timestamps). OCSP stapling saves ~5 KB of bandwidth and eliminates the client→CA OCSP query."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A8."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nonce"
        }), " is a random value generated by the client (RP) and included in the authentication request. The IdP includes the same nonce in the ID Token. Client verifies nonce matches. This prevents replay attacks: if an attacker captures an ID Token, they can't replay it because the nonce value won't match (each request has a unique nonce)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A9."
        }), " Probability that two different messages produce the same ECDSA signature: For P-256, r and s are each 256-bit values. A signature collision would require the same (r, s) pair, which depends on both the message hash AND the randomly generated k (ephemeral key). Probability ≈ 1/2^512 (extremely low). However, if k is reused across signatures, the private key can be recovered (Sony PS3 incident, Android Bitcoin wallet bug)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A10."
        }), " Full CRL: complete list of all revoked certificates. Size grows linearly with revocations. Delta CRL: only certificates revoked since the last full CRL was issued. Smaller and fresher. Use case: Delta CRL between full CRL updates — reduces download size. Clients must have both the base CRL and the delta CRL for complete revocation status."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A11."
        }), " Client Credentials grant: client authenticates itself (client_id + client_secret) and receives an access token directly — no user involved. Use case: server-to-server API calls, cron jobs, microservice-to-microservice auth. Example: A backend reporting service authenticates to the analytics API to fetch data daily. No user session needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A12."
        }), " Cross-realm Kerberos: (1) User obtains TGT from Realm A's KDC. (2) User requests TGT for Realm B from Realm A's KDC (referral ticket). (3) User presents referral TGT to Realm B's KDC to obtain service ticket for Realm B's service. (4) Requires a trust relationship (shared key) between Realm A's and Realm B's KDCs. Microsoft Active Directory domains implement this as domain trusts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A13."
        }), " With serverAuth + clientAuth: can be used both as TLS server cert (HTTPS) and TLS client cert (mutual TLS). With only codeSigning: cannot be used for TLS at all — only for code signing (signing executables, drivers). Browsers would reject a codeSigning-only cert used for HTTPS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A14."
        }), " RSA-PSS: largest key/signature sizes (256 bytes for 2048-bit), proven security, slowest. ECDSA (P-256): small (64-byte signature), efficient, requires secure RNG (nonce k). EdDSA (Ed25519): best overall — tiny (32-byte key, 64-byte sig), fast, deterministic (no RNG needed), side-channel resistant. Security equivalence: Ed25519 ≈ ECDSA P-256 ≈ RSA-3072."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A15."
        }), " SKI: unique identifier for the subject's public key (usually SHA-1 hash of public key). AKI: identifies the issuer's public key (references issuer's SKI). During chain building, the validator matches AKI of child cert with SKI of potential parent cert — this narrows the search for the correct issuer certificate. Accelerates chain building especially when multiple CAs have similar DNs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A16."
        }), " (1) GET /authorize?response_type=code&client_id=app&redirect_uri=cb&code_challenge_method=S256&code_challenge=h2Dz... (2) 302 redirect to cb?code=AUTH_CODE. (3) POST /token with code=CODE&code_verifier=VERIFIER&client_id=app&redirect_uri=cb (no secret for public client). (4) Response: {access_token, token_type, expires_in}. Step 3 must include code_verifier; client_secret is NOT used for PKCE public clients."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A17."
        }), " TLS KDF: Pre-Master Secret ( PMS) → Master Secret (MS, 48 bytes) via PRF: MS = PRF(PMS, \"master secret\", ClientRandom + ServerRandom). Then key material derived from MS: encryption keys, MAC keys, IVs for both directions. TLS 1.3 uses HKDF (HKDF-Extract → HKDF-Expand) with labeled derivation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A18."
        }), " SAML Conditions element specifies: (1) NotBefore/NotOnOrAfter — assertion validity period, (2) AudienceRestriction — which SP can accept this assertion, (3) OneTimeUse — assertion can only be used once, (4) ProxyRestriction — prevents re-authentication delegation. Without conditions, an assertion could be reused indefinitely across any service."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A19."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alg: none"
        }), " means the JWT has no signature. An attacker can modify the payload (change sub, role to \"admin\"), remove the signature, and set alg to none. Defenses: (1) Always reject tokens with alg: none, (2) Validate algorithm against a whitelist (only RS256, ES256), (3) Use a JWT library that rejects unsigned tokens by default."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A20."
        }), " CRL: less fresh (hours/days update cycle), high bandwidth (full list), privacy OK (public list), scalable (download once), higher latency (must fetch CRL before validating). OCSP: fresh (real-time), low bandwidth (single request), privacy concern (CA sees query), less scalable (CA server load), lower latency (immediate for cached responses). OCSP Stapling is best — combines freshness + privacy + scalability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A21."
        }), " Existential forgery: attacker can forge a signature on SOME message (possibly garbage). Selective forgery: attacker can forge a signature on a SPECIFIC message. Hash collision resistance prevents existential forgery because attacker cannot find two messages with the same hash. Without collision resistance: attacker finds M₁ and M₂ with H(M₁)=H(M₂), gets M₁ signed, then claims the signature is for M₂ (existential forgery)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A22."
        }), " CT logs are append-only public ledgers of TLS certificates. CAs must submit all certificates to CT logs. Logs issue Signed Certificate Timestamps (SCTs). Browsers require SCTs for TLS certificates to be trusted. CT detects mis-issuance (CAs issuing certs for domains without authorization). Prevents incidents like DigiNotar (2011) where a CA was compromised and issued fake Google certificates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A23."
        }), " Pre-authentication timestamp: The client sends a timestamp encrypted with the user's password hash in the AS-REQ. The KDC decrypts to verify the client knows the password BEFORE issuing the TGT. Prevents offline dictionary attack on the AS-REP — without it, the AS-REP (containing TGS session key encrypted with password hash) could be captured and brute-forced offline."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A24."
        }), " Implicit flow: access token returned in URL fragment, no client authentication, no refresh token. Vulnerable to: token interception (XSS, URL leakage), man-in-the-fragment attacks. PKCE is mandatory for OIDC to ensure only the legitimate client can exchange the code for tokens, even without a client_secret (public clients)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A25."
        }), " Public clients (mobile apps, SPAs) cannot securely store a client_secret — it would be extractable from the app binary or browser. Without PKCE, an attacker could intercept the authorization code and exchange it for a token. PKCE provides cryptographic binding between the initial request and token exchange using code_verifier, making the code useless to an interceptor even without a client_secret."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A26."
        }), " Kyber is a KEM because lattice-based encryption is not directly practical — ciphertexts would be large and decryption would be complex. KEM generates a shared secret (encapsulation) that's used as input to a symmetric DEM (AES-GCM). KEM: Alice gets Bob's public key → encapsulates → generates shared key K + ciphertext C. Bob decapsulates (C + private key) → same K. Then K is used with AES-GCM (DEM) for bulk data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A27."
        }), " HSM is a tamper-resistant hardware device that generates, stores, and manages cryptographic keys. Private keys never leave the HSM in plaintext. All signing/decryption operations happen inside the HSM. FIPS 140-2/3 security levels: Level 2 (tamper-evident coating), Level 3 (tamper-resistant, zeroization upon tamper), Level 4 (environmentally sealed, complete protection). CA root private keys are typically stored in HSMs at Level 3+."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A28."
        }), " In Web of Trust: Alice signs Bob's public key if she verifies his identity (e.g., sees his passport). Bob's key accumulates signatures. Carol trusts Alice and encounters Bob's key signed by Alice → Carol considers Bob's key valid if there's a trust path. Trust path ≠ PKI hierarchy — it's a decentralized graph, not a tree. Attacker would need to get their key signed by a trusted introducer. The strength is decentralization; the weakness is no global standard for identity verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A29."
        }), " TLS 1.3 CertificateRequest contains a list of acceptable Certificate Authorities (Distinguished Names). The server signals it wants the client to present a certificate. Used in mutual TLS (mTLS) for: API-to-API authentication, IoT device authentication, zero-trust network access. The client responds with Certificate + CertificateVerify (proves possession of private key by signing handshake transcript)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A30."
        }), " Dilithium (ML-DSA): hardness based on Module Learning With Errors (MLWE). ML-DSA-65 (≈ AES-128): public key ~1184 bytes, signature ~2044 bytes. ML-DSA-87 (≈ AES-256): public key ~1760 bytes, signature ~3366 bytes. RSA-3072: public key ~426 bytes, signature ~384 bytes. Dilithium signatures are ~5-8× larger than RSA signatures. However, key generation and signing are much faster."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digital signatures"
          }), " provide integrity, authentication, and non-repudiation. Process: Hash message → encrypt hash with signer's private key. Verification: decrypt signature with public key → compare hashes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PKI hierarchy"
          }), " establishes trust: Root CA (self-signed, trusted anchor) → Intermediate CAs → End-entity certificates. Trust flows downward. Certificate validation includes: chain building, signature verification, validity period, revocation checking (CRL/OCSP), and key usage."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "X.509 v3 certificate"
          }), " structure: Version, Serial Number, Signature Algorithm, Issuer, Validity, Subject, Subject Public Key Info, Extensions (Basic Constraints, Key Usage, SAN, CRL Distribution Points), and CA's signature."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Revocation:"
          }), " CRL (periodic list — scalable but not real-time), OCSP (real-time query — current but adds latency), OCSP Stapling (best — server provides cached OCSP response)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OAuth 2.0"
          }), " is an authorization framework. Authorization Code + PKCE is the recommended grant for mobile/SPA. Client Credentials for machine-to-machine. Access tokens (usually JWT) are bearer tokens — possession = authorization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SAML 2.0"
          }), " is XML-based SSO authentication protocol. IdP authenticates user and issues signed assertion. SP validates assertion and grants access. Heavier than OAuth but widely adopted in enterprise."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kerberos"
          }), " uses symmetric key crypto with KDC (AS + TGS). Protocol: AS-REQ/AS-REP (TGT), TGS-REQ/TGS-REP (ST), AP-REQ/AP-REP (service access). Password never transmitted. Authenticator with timestamp prevents replay. Requires time synchronization."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For exam:"
        }), " Know the digital signature flow (private key signs, public key verifies). Understand PKI component roles (CA issues, RA verifies, VA validates). Memorize X.509 extensions (Basic Constraints for CA vs end-entity). Differentiate OAuth (authorization) from SAML (authentication). Know Kerberos flows — especially what each ticket is encrypted with."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For deployment:"
        }), " Use OCSP stapling for TLS certificate status. Implement automated certificate lifecycle management (ACME — Let's Encrypt). For APIs, use OAuth 2.0 with JWT access tokens. For enterprise SSO, use SAML 2.0 or OpenID Connect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For security:"
        }), " Ensure certificate private keys are stored in HSMs. Implement CRL distribution points in issued certificates. Set appropriate key usage extensions (never allow key signing on end-entity certs). Use short-lived certificates when possible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcqs",
      children: "Chapter Quiz (5 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " In Kerberos, the service ticket (ST) is encrypted with which key?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The client's password hash", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The TGS session key", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The service server's secret key", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The KDC's master key"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) The service server's secret key"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The service ticket (ST) is encrypted with the service server's long-term secret key (known only to the KDC and the service server). This prevents the client from viewing or modifying the ticket contents. The ST contains the client identity and the service session key. The service decrypts the ST to verify the client's identity and to obtain the service session key for subsequent encrypted communication with the client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " The trust chain for an HTTPS certificate ends at which entity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) The Intermediate CA", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The leaf certificate's subject", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The Root CA (self-signed)", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The Web server"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) The Root CA (self-signed)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The trust chain forms a path from the leaf certificate (website) through one or more intermediate CAs to the Root CA. The Root CA is self-signed and its public key is embedded in the browser's/OS's trust store as a trust anchor. Certificate validation fails if the chain cannot be traced to a trusted root. The root CA's self-signed certificate is the terminal point."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which OAuth 2.0 grant type involves the client sending the user's credentials directly to the authorization server?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Authorization Code", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Implicit", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Resource Owner Password Credentials", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Client Credentials"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Resource Owner Password Credentials (ROPC)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " In the ROPC grant, the client directly collects the user's username and password and sends them to the authorization server in exchange for an access token. This is the least secure OAuth grant because the client has access to the user's credentials (password should never be shared with any third party). ROPC should only be used when there is a high degree of trust between the client and the authorization server (e.g., first-party apps)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the primary difference between a digital signature and an HMAC?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Digital signatures use asymmetric keys; HMAC uses symmetric keys", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Digital signatures are faster; HMAC is slower", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Digital signatures cannot be used for message integrity", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) HMAC provides non-repudiation; digital signatures do not"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) Digital signatures use asymmetric keys; HMAC uses symmetric keys"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Digital signatures use asymmetric cryptography (signer's private key to sign, signer's public key to verify). HMAC (Hash-based Message Authentication Code) uses a shared symmetric key known to both parties. Because the HMAC key is shared, HMAC does NOT provide non-repudiation — either party could have created the HMAC. Digital signatures provide non-repudiation because only the signer possesses the private key."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which of the following correctly describes the OCSP response format?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) JSON object with status field", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) XML document signed by the CA", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) ASN.1 DER-encoded response signed by the CA", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Plain text with certificate serial number and status"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) ASN.1 DER-encoded response signed by the CA"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " OCSP responses are encoded in ASN.1 DER (Distinguished Encoding Rules) format, signed by the CA or an authorized OCSP responder. The response contains: certificate ID (hash of issuer name + issuer public key + serial number), certificate status (good, revoked, unknown), thisUpdate, nextUpdate, and the responder's digital signature. The DER encoding is compact binary format — not XML or JSON."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Chapter:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/information-security/05-banking-payment-security/",
          children: "Chapter 5 — Banking & Payment Security"
        })]
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