"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[56625],{

/***/ 56747
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_information_security_01_cryptography_fundamentals_md_219_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-information-security-01-cryptography-fundamentals-md-219.json
const site_docs_courses_information_security_01_cryptography_fundamentals_md_219_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/information-security/01-cryptography-fundamentals","title":"Chapter 1: Cryptography Fundamentals","description":"Exam Weightage: 4–6 Qs in IBPS SO IT Officer Mains (Professional Knowledge — Cryptography section)","source":"@site/docs/courses/information-security/01-cryptography-fundamentals.md","sourceDirName":"courses/information-security","slug":"/information-security/01-cryptography-fundamentals","permalink":"/ai-engineering-journey/information-security/01-cryptography-fundamentals","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-cryptography-fundamentals","slug":"/information-security/01-cryptography-fundamentals","title":"Chapter 1: Cryptography Fundamentals","sidebar_label":"Chapter 1: Cryptography Fundamentals","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Information Security & Cryptography — IBPS SO & Govt Exam Prep","permalink":"/ai-engineering-journey/information-security/index"},"next":{"title":"Chapter 2: Network Security","permalink":"/ai-engineering-journey/information-security/02-network-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/information-security/01-cryptography-fundamentals.md


const frontMatter = {
	id: '01-cryptography-fundamentals',
	slug: '/information-security/01-cryptography-fundamentals',
	title: 'Chapter 1: Cryptography Fundamentals',
	sidebar_label: 'Chapter 1: Cryptography Fundamentals',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Cryptography Fundamentals';

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
  "value": "1.1 Symmetric Encryption",
  "id": "11-symmetric-encryption",
  "level": 3
}, {
  "value": "1.1.1 DES (Data Encryption Standard)",
  "id": "111-des-data-encryption-standard",
  "level": 4
}, {
  "value": "1.1.2 3DES (Triple DES)",
  "id": "112-3des-triple-des",
  "level": 4
}, {
  "value": "1.1.3 AES (Advanced Encryption Standard)",
  "id": "113-aes-advanced-encryption-standard",
  "level": 4
}, {
  "value": "1.1.4 Comparison Table",
  "id": "114-comparison-table",
  "level": 4
}, {
  "value": "1.2 Asymmetric Encryption",
  "id": "12-asymmetric-encryption",
  "level": 3
}, {
  "value": "1.2.1 RSA (Rivest–Shamir–Adleman)",
  "id": "121-rsa-rivestshamiradleman",
  "level": 4
}, {
  "value": "1.2.2 Diffie-Hellman (DH) Key Exchange",
  "id": "122-diffie-hellman-dh-key-exchange",
  "level": 4
}, {
  "value": "1.2.3 Symmetric vs Asymmetric — Exam Focus",
  "id": "123-symmetric-vs-asymmetric--exam-focus",
  "level": 4
}, {
  "value": "1.3 Stream Ciphers vs Block Ciphers",
  "id": "13-stream-ciphers-vs-block-ciphers",
  "level": 3
}, {
  "value": "1.3.1 Block Ciphers",
  "id": "131-block-ciphers",
  "level": 4
}, {
  "value": "1.3.2 Stream Ciphers",
  "id": "132-stream-ciphers",
  "level": 4
}, {
  "value": "1.4 Block Cipher Modes of Operation",
  "id": "14-block-cipher-modes-of-operation",
  "level": 3
}, {
  "value": "1.4.1 ECB (Electronic Codebook)",
  "id": "141-ecb-electronic-codebook",
  "level": 4
}, {
  "value": "1.4.2 CBC (Cipher Block Chaining)",
  "id": "142-cbc-cipher-block-chaining",
  "level": 4
}, {
  "value": "1.4.3 CFB (Cipher Feedback)",
  "id": "143-cfb-cipher-feedback",
  "level": 4
}, {
  "value": "1.4.4 OFB (Output Feedback)",
  "id": "144-ofb-output-feedback",
  "level": 4
}, {
  "value": "1.4.5 CTR (Counter Mode)",
  "id": "145-ctr-counter-mode",
  "level": 4
}, {
  "value": "1.5 Hash Functions",
  "id": "15-hash-functions",
  "level": 3
}, {
  "value": "1.5.1 MD5 (Message Digest 5)",
  "id": "151-md5-message-digest-5",
  "level": 4
}, {
  "value": "1.5.2 SHA-1 (Secure Hash Algorithm 1)",
  "id": "152-sha-1-secure-hash-algorithm-1",
  "level": 4
}, {
  "value": "1.5.3 SHA-256 (Secure Hash Algorithm 2)",
  "id": "153-sha-256-secure-hash-algorithm-2",
  "level": 4
}, {
  "value": "1.5.4 Applications of Hash Functions",
  "id": "154-applications-of-hash-functions",
  "level": 4
}, {
  "value": "1.6 Solved MCQs (Exam Style)",
  "id": "16-solved-mcqs-exam-style",
  "level": 3
}, {
  "value": "📝 Solved Examples (20 MCQs)",
  "id": "-solved-examples-20-mcqs",
  "level": 2
}, {
  "value": "TypeScript Implementation: AES-256-GCM Encryption/Decryption Utility",
  "id": "typescript-implementation-aes-256-gcm-encryptiondecryption-utility",
  "level": 3
}, {
  "value": "TypeScript Implementation: Blockchain Hash Chain",
  "id": "typescript-implementation-blockchain-hash-chain",
  "level": 3
}, {
  "value": "Mermaid Diagram: Post-Quantum Cryptography Timeline",
  "id": "mermaid-diagram-post-quantum-cryptography-timeline",
  "level": 3
}, {
  "value": "Mermaid Diagram: AES Encryption Flow",
  "id": "mermaid-diagram-aes-encryption-flow",
  "level": 3
}, {
  "value": "Quantum Cryptography Basics",
  "id": "quantum-cryptography-basics",
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
        id: "chapter-1-cryptography-fundamentals",
        children: "Chapter 1: Cryptography Fundamentals"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exam Weightage:"
        }), " 4–6 Qs in IBPS SO IT Officer Mains (Professional Knowledge — Cryptography section)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Topics:"
        }), " Symmetric vs Asymmetric, DES, AES, RSA, Diffie-Hellman, Hash Functions, Block Cipher Modes"]
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
        href: "../../assets/images/lessons/information-security/01-cryptography-fundamentals/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/information-security/01-cryptography-fundamentals/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/information-security/01-cryptography-fundamentals/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/information-security/01-cryptography-fundamentals/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/information-security/01-cryptography-fundamentals/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/information-security/01-cryptography-fundamentals/visual-explanation.png",
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
        children: "Distinguish between symmetric and asymmetric encryption across key management, performance, and use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the internal architecture of DES, 3DES, and AES."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe RSA key generation, encryption, and decryption using modular arithmetic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk through the Diffie-Hellman key exchange protocol and its vulnerability to MITM."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare stream ciphers vs block ciphers with examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze ECB, CBC, CFB, OFB, and CTR modes — their strengths, weaknesses, and typical use cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify properties and applications of hash functions (MD5, SHA-1, SHA-256)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve exam-style MCQs on algorithm parameters (key sizes, block sizes, rounds)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-symmetric-encryption",
      children: "1.1 Symmetric Encryption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Symmetric encryption uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single shared secret key"
      }), " for both encryption and decryption. Both sender and receiver must possess the same key, which must be securely distributed beforehand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "111-des-data-encryption-standard",
      children: "1.1.1 DES (Data Encryption Standard)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Size:"
        }), " 56 bits (64-bit key with 8 parity bits)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Size:"
        }), " 64 bits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rounds:"
        }), " 16 Feistel rounds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design:"
        }), " Feistel network structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Deprecated due to short key length (brute-force feasible with modern hardware)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attack:"
        }), " In 1999, the EFF's Deep Crack broke DES in ~22 hours; today it can be broken in minutes with FPGA clusters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DES Structure:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initial Permutation (IP) — reorders bits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "16 rounds of Feistel function (expansion, XOR with round key, S-box substitution, P-box permutation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final Permutation (IP⁻¹) — inverse of IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Round key generation: 56-bit key produces sixteen 48-bit round keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "112-3des-triple-des",
      children: "1.1.2 3DES (Triple DES)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Applies DES three times: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Encrypt–Decrypt–Encrypt (EDE)"
        }), " with either two keys (112-bit) or three keys (168-bit)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Effective security ≈ 80 bits for 2-key, ≈ 112 bits for 3-key"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Deprecated by NIST in 2023 (phased out by 2030)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slower than AES due to triple pass"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3DES-EDE formula:"
      }), " C = E_{K3}(D_{K2}(E_{K1}(P)))"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "113-aes-advanced-encryption-standard",
      children: "1.1.3 AES (Advanced Encryption Standard)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Size:"
        }), " 128 bits (fixed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Sizes:"
        }), " 128, 192, or 256 bits"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rounds:"
        }), " 10 (128-bit key), 12 (192-bit), 14 (256-bit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " Substitution-Permutation Network (SPN), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " Feistel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Algorithm:"
        }), " Rijndael (designed by Daemen and Rijmen)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AES Round Operations (per round except last):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SubBytes"
        }), " — non-linear S-box substitution (16x16 lookup table)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ShiftRows"
        }), " — byte transposition (each row shifted left by 0,1,2,3 positions)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MixColumns"
        }), " — matrix multiplication over GF(2⁸); mixes each column"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AddRoundKey"
        }), " — XOR with 128-bit round key derived via key expansion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security:"
      }), " AES-128 requires 2¹²⁸ brute-force attempts — considered infeasible with classical computation. AES-256 is approved for TOP SECRET data by NSA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "114-comparison-table",
      children: "1.1.4 Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DES"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3DES"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AES"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "112/168 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128/192/256 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Block Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48 (3×16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/12/14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feistel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feistel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Current Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insecure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure (standard)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (hardware accelerated)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Symmetric[Same Key]\n        direction LR\n        S1[\"Plaintext P\"] --> SE[\"Encrypt E(K,P)\"]\n        K[\"Shared Key K\"] --> SE\n        K --> SD[\"Decrypt E(K,P)\"]\n        SE --> C[\"Ciphertext C\"] --> SD\n        SD --> S2[\"Plaintext P\"]\n    end\n    style Symmetric fill:#e3f2fd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-asymmetric-encryption",
      children: "1.2 Asymmetric Encryption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Asymmetric (public-key) cryptography uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "key pair"
      }), ": a public key (shared openly) and a private key (kept secret). What one encrypts, only the other can decrypt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-rsa-rivestshamiradleman",
      children: "1.2.1 RSA (Rivest–Shamir–Adleman)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Generation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose two large primes p and q (e.g., 2048-bit modulus → p,q ≈ 1024 bits each)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute n = p × q (modulus)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute φ(n) = (p−1)(q−1) (Euler's totient)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1 (common e = 65537)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute d ≡ e⁻¹ mod φ(n) (modular inverse — private exponent)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public key = (e, n); Private key = (d, n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " C = Mᵉ mod n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption:"
      }), " M = Cᵈ mod n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Basis:"
      }), " Integer factorization problem — given n = p×q, factoring large n (1024+ bits) is computationally infeasible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Key Sizes (2025):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSA-2048: minimum acceptable (equivalent to 112-bit symmetric)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSA-3072: recommended (equivalent to 128-bit symmetric)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSA-4096: high security (equivalent to 192-bit symmetric), but slower"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Much slower than symmetric encryption (100–1000×)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximum message length ≤ key size (typically encrypt only symmetric keys / hashes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerable to quantum attack via Shor's algorithm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-diffie-hellman-dh-key-exchange",
      children: "1.2.2 Diffie-Hellman (DH) Key Exchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Allow two parties to agree on a shared secret key over an insecure channel."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Protocol (simplified):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agree on public parameters: a large prime p and a generator g (primitive root mod p)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice chooses private a, computes A = gᵃ mod p, sends A to Bob"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob chooses private b, computes B = gᵇ mod p, sends B to Alice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice computes shared secret: s = Bᵃ mod p = g^(ab) mod p"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob computes shared secret: s = Aᵇ mod p = g^(ab) mod p"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Basis:"
      }), " Discrete Logarithm Problem (DLP) — given gᵃ mod p, finding a is computationally infeasible for large p (2048+ bits)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Weakness:"
      }), " Vulnerable to Man-in-the-Middle (MITM) attack if not combined with authentication (hence ECDHE used in TLS, which adds ephemeral keys + signing)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elliptic Curve DH (ECDH):"
      }), " Uses elliptic curve groups instead of prime fields. Same protocol, smaller key sizes (256-bit ECC ≈ 3072-bit RSA). Used in TLS 1.3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-symmetric-vs-asymmetric--exam-focus",
      children: "1.2.3 Symmetric vs Asymmetric — Exam Focus"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symmetric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Asymmetric"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single shared secret"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public-private pair"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problematic (secure channel needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves key distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (Gbps hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (Kbps software)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Key size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128–256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2048–4096 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk data encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key exchange, signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES, ChaCha20, DES, 3DES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA, ECC, DH, DSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (without MAC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (digital signatures)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-repudiation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hybrid Encryption (best practice):"
      }), " Use asymmetric (RSA/ECDH) to exchange a symmetric session key, then use symmetric (AES) for bulk data. Used in TLS, PGP, HTTPS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Asymmetric[Asymmetric Key Exchange]\n        direction LR\n        A[\"Alice: a (private)<br/>A = g^a mod p\"] -- \"A\" --> B[\"Bob: b (private)<br/>B = g^b mod p\"]\n        B -- \"B\" --> A\n        A --> S1[\"s = B^a mod p<br/>= g^(ab) mod p\"]\n        B --> S2[\"s = A^b mod p<br/>= g^(ab) mod p\"]\n        S1 --> Key[\"Shared Secret Key K\"]\n        S2 --> Key\n    end\n    style Asymmetric fill:#fff3e0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-stream-ciphers-vs-block-ciphers",
      children: "1.3 Stream Ciphers vs Block Ciphers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-block-ciphers",
      children: "1.3.1 Block Ciphers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt data in fixed-size blocks (64 or 128 bits)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Require a mode of operation for data longer than one block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Examples: AES (128-bit blocks), DES (64-bit blocks)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Padding needed"
        }), " when plaintext is not a multiple of block size (PKCS#7, ANSI X.923)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-stream-ciphers",
      children: "1.3.2 Stream Ciphers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt data one bit or byte at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a keystream (pseudo-random) and XOR with plaintext"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No padding required — suitable for real-time communication"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC4"
        }), " (Ron's Code 4): historically popular (WEP, SSL), now broken (biases in keystream)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ChaCha20"
        }), ": modern stream cipher (used in TLS 1.3, SSH), designed by Bernstein. Immune to RC4's weaknesses. 256-bit key, 96-bit nonce."]
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Cipher"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stream Cipher"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing unit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block (64/128 bits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit/byte"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Padding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block-wide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (1 bit error → 1 bit plaintext error)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast with AES-NI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast with SIMD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES, DES, Blowfish"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ChaCha20, RC4, Salsa20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk encryption, file encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time audio/video, TLS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-block-cipher-modes-of-operation",
      children: "1.4 Block Cipher Modes of Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "141-ecb-electronic-codebook",
      children: "1.4.1 ECB (Electronic Codebook)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each block encrypted independently with the same key"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problem:"
        }), " Identical plaintext blocks produce identical ciphertext blocks — leaks patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exam tip:"
        }), " NEVER use ECB for anything except single-block messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example failure:"
        }), " Encrypting an image of a penguin in ECB reveals the penguin's silhouette"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " Cᵢ = E(K, Pᵢ)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption:"
      }), " Pᵢ = D(K, Cᵢ)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "142-cbc-cipher-block-chaining",
      children: "1.4.2 CBC (Cipher Block Chaining)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each plaintext block XORed with previous ciphertext block before encryption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires an Initialization Vector (IV) for the first block"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "IV must be random and never reused with the same key"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption is serial"
        }), " (cannot parallelize); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "decryption is parallelizable"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Padding oracle attacks possible if error messages leak padding validity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " Cᵢ = E(K, Pᵢ ⊕ Cᵢ₋₁); C₀ = IV"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption:"
      }), " Pᵢ = D(K, Cᵢ) ⊕ Cᵢ₋₁"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "143-cfb-cipher-feedback",
      children: "1.4.3 CFB (Cipher Feedback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Converts block cipher into a stream cipher"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypts the IV/ciphertext to produce keystream, then XOR with plaintext"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-synchronizing:"
        }), " if ciphertext byte corrupted, recovery after one block"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mostly replaced by CTR mode"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " Cᵢ = Pᵢ ⊕ E(K, Cᵢ₋₁); C₀ = IV"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption:"
      }), " Pᵢ = Cᵢ ⊕ E(K, Cᵢ₋₁)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "144-ofb-output-feedback",
      children: "1.4.4 OFB (Output Feedback)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generates keystream independent of plaintext/ciphertext"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keystream generated by repeatedly encrypting the previous keystream block"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error propagation:"
        }), " bit error in ciphertext → same bit error in plaintext"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Not self-synchronizing:"
        }), " must resync if keystream falls out of sync"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " Oᵢ = E(K, Oᵢ₋₁); Cᵢ = Pᵢ ⊕ Oᵢ; O₀ = IV"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "145-ctr-counter-mode",
      children: "1.4.5 CTR (Counter Mode)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypts successive counter values (incremented 1, 2, 3, ...) to produce keystream"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fully parallelizable"
        }), " (both encryption and decryption)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random access: any block can be decrypted independently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nonce + counter is used as input; nonce must be unique per session"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current recommended mode (alongside GCM which adds authentication)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " Cᵢ = Pᵢ ⊕ E(K, Nonce || Counterᵢ)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parallel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Random Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Prop."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stream?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CBC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypt only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ (padding oracle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CFB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrypt only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (use GCM for auth)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph ECB_Mode[ECB Mode]\n        P1[\"P1\"] --> E1[\"E(K, P1)\"] --> C1[\"C1\"]\n        P2[\"P2\"] --> E2[\"E(K, P2)\"] --> C2[\"C2\"]\n        P3[\"P3\"] --> E3[\"E(K, P3)\"] --> C3[\"C3\"]\n    end\n    subgraph CBC_Mode[CBC Mode]\n        P1b[\"P1\"] --> X1[\"⊕ IV\"] --> E1b[\"E(K, ...)\"] --> C1b[\"C1\"]\n        C1b --> X2[\"⊕\"] \n        P2b[\"P2\"] --> X2 --> E2b[\"E(K, ...)\"] --> C2b[\"C2\"]\n        C2b --> X3[\"⊕\"]\n        P3b[\"P3\"] --> X3 --> E3b[\"E(K, ...)\"] --> C3b[\"C3\"]\n    end\n    style ECB_Mode fill:#ffebee\n    style CBC_Mode fill:#e8f5e9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-hash-functions",
      children: "1.5 Hash Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A cryptographic hash function H maps an arbitrary-length message M to a fixed-length digest h = H(M) with these properties:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exam Significance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-image resistance"
            }), " (one-way)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given h, finding M such that H(M) = h is infeasible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protects stored passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Second pre-image resistance"
            }), " (weak collision)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Given M₁, finding M₂ ≠ M₁ with H(M₁) = H(M₂) is infeasible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Collision resistance"
            }), " (strong collision)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding any M₁ ≠ M₂ with H(M₁) = H(M₂) is infeasible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for signatures"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "151-md5-message-digest-5",
      children: "1.5.1 MD5 (Message Digest 5)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " 128 bits (32 hex chars)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Designer:"
        }), " Ron Rivest"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Broken"
        }), " — collision resistance defeated (2004, Wang et al.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can find collisions in under 1 second on modern hardware"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Still used for:"
        }), " Checksums (non-security), but NOT recommended"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "152-sha-1-secure-hash-algorithm-1",
      children: "1.5.2 SHA-1 (Secure Hash Algorithm 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " 160 bits (40 hex chars)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Designer:"
        }), " NSA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Broken"
        }), " — SHAttered attack (2017, Google/Microsoft): first practical collision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attack cost:"
        }), " ~110 GPU-years → ~$75K at cloud rates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NIST deprecated SHA-1 for digital signatures in 2011"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "153-sha-256-secure-hash-algorithm-2",
      children: "1.5.3 SHA-256 (Secure Hash Algorithm 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output:"
        }), " 256 bits (64 hex chars)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Designer:"
        }), " NSA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secure"
        }), " (as of 2025)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal:"
        }), " 64 rounds of compression function (Merkle-Damgård construction)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Block size:"
        }), " 512 bits processed per round"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security level:"
        }), " 128 bits (birthday bound = 2¹²⁸)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SHA-2 Family:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Block Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-224"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "224 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "112 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-384"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "384 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "192 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SHA-512"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "256 bits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024 bits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Takeaways for Exams:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MD5 = 128-bit output, broken, collision attack feasible in seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA-1 = 160-bit output, broken, SHAttered collision demonstrated in 2017"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA-256 = 256-bit output, secure, 64 rounds, block size 512 bits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SHA-512 = 512-bit output, 80 rounds, block size 1024 bits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Birthday attack: for n-bit hash, collision can be found in ~2^(n/2) attempts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "154-applications-of-hash-functions",
      children: "1.5.4 Applications of Hash Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password storage:"
        }), " Store hash(password) instead of plaintext; add salt to prevent rainbow table attacks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Digital signatures:"
        }), " Hash the message, then sign the hash (instead of the full message)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message integrity:"
        }), " Compare received hash with computed hash to detect tampering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Blockchain:"
        }), " Chain of blocks linked via previous block hash (Bitcoin uses SHA-256 double hash)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git:"
        }), " Commit IDs are SHA-1 hashes (Git 2.0+ transitioning to SHA-256)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    M[\"Message (arbitrary length)\"] --> H[\"Hash Function\"]\n    H --> D1[\"128-bit (MD5)\"]\n    H --> D2[\"160-bit (SHA-1)\"]\n    H --> D3[\"256-bit (SHA-256)\"]\n    H --> D4[\"512-bit (SHA-512)\"]\n    D1 -.-> B1[\"❌ Broken\"]\n    D2 -.-> B2[\"❌ Broken\"]\n    D3 -.-> B3[\"✅ Secure\"]\n    D4 -.-> B4[\"✅ Secure\"]\n    style D1 fill:#ef9a9a\n    style D2 fill:#ef9a9a\n    style D3 fill:#a5d6a7\n    style D4 fill:#a5d6a7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-solved-mcqs-exam-style",
      children: "1.6 Solved MCQs (Exam Style)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " In CBC mode of AES, if one bit of the ciphertext block C₂ gets corrupted during transmission, which plaintext blocks will be affected during decryption?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Only P₂", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) P₂ and P₃", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) P₂ only if the error occurs in C₂'s last bit", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) P₁, P₂, and P₃"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) P₂ and P₃"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " In CBC decryption, Pᵢ = D(K, Cᵢ) ⊕ Cᵢ₋₁. If C₂ is corrupted, P₂ decryption produces garbage (because D(K, C₂) is wrong). Additionally, P₃ = D(K, C₃) ⊕ C₂ — since C₂ is used in XOR, P₃ will have a bit error at the same position as the corrupted bit in C₂. Block P₄ onward are unaffected because they depend on C₃ (uncorrupted)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which of the following is NOT a property of a cryptographic hash function?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Pre-image resistance", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Collision resistance", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Reversibility", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Deterministic output"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Reversibility"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Hash functions are one-way (pre-image resistant). Given a digest h, finding any message M such that H(M) = h should be computationally infeasible. Reversibility is explicitly NOT a property — that would make them useless for integrity checking and password storage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the effective key length of 3DES when using two keys?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 56 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 112 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 128 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 168 bits"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 112 bits"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " With two keys (K₁ and K₂), 3DES-EDE uses E(K₁, D(K₂, E(K₁, P))). Although the total key material is 112 bits, the meet-in-the-middle attack reduces effective security to ~80 bits. Therefore, NIST considers 3DES to provide only 80 bits of security despite 112-bit key length. After 2023, NIST deprecated 3DES entirely."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In Diffie-Hellman key exchange, which mathematical problem provides security?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Integer Factorization Problem", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Discrete Logarithm Problem", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Subset Sum Problem", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Traveling Salesman Problem"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Discrete Logarithm Problem"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Diffie-Hellman's security relies on the difficulty of computing discrete logarithms in a finite cyclic group (Zp* or elliptic curve group). Given gᵃ mod p and g, it is computationally infeasible to find a for sufficiently large prime p (2048+ bits). RSA, on the other hand, relies on the integer factorization problem (factoring n = p × q)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " AES-256 uses how many rounds?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 10", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 12", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 14", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 16"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 14"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " AES round count depends on key size: AES-128 → 10 rounds, AES-192 → 12 rounds, AES-256 → 14 rounds. The block size is always 128 bits regardless of key size. Each round consists of SubBytes, ShiftRows, MixColumns, and AddRoundKey (except the final round which omits MixColumns)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " Which block cipher mode is vulnerable to padding oracle attacks?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) CTR", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) GCM", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) CBC", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) OFB"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) CBC"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " CBC mode uses PKCS#7 padding when the plaintext length is not a multiple of the block size. If an implementation distinguishes between valid and invalid padding (e.g., by returning different error messages), an attacker can iteratively modify ciphertext bytes and observe responses to recover plaintext byte by byte. This is the padding oracle attack, demonstrated against SSL/TLS (POODLE attack). GCM (Galois/Counter mode) provides authentication and does not use padding."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " What is the output length of SHA-256?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 128 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 160 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 256 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 512 bits"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 256 bits"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " SHA-256 produces a 256-bit (32-byte) digest. MD5 = 128 bits, SHA-1 = 160 bits, SHA-256 = 256 bits, SHA-512 = 512 bits. Despite the name, SHA-256 processes data in 512-bit blocks (not 256-bit blocks) and uses 64 rounds in its compression function."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " Which of the following modes allow parallel encryption?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) CBC and CFB", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) ECB and CTR", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) OFB and CFB", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) CBC and OFB"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) ECB and CTR"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " ECB encrypts each block independently, so all blocks can be encrypted in parallel. CTR mode encrypts counter values (independent of plaintext), so all keystream blocks can be generated in parallel, then XORed with plaintext blocks. CBC and CFB require the previous ciphertext block to encrypt the current block, making them inherently serial."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " The Feistel structure is used in which of the following ciphers?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) AES", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) DES", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) ChaCha20", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) RSA"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) DES"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " DES uses a 16-round Feistel network where each round splits the block into left and right halves. AES uses a Substitution-Permutation Network (SPN) — not Feistel. ChaCha20 is a stream cipher (ARX construction), and RSA is an asymmetric algorithm (not a block cipher)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " In RSA, what does φ(n) represent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) n/2", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) The number of integers coprime to n", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) The private exponent", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) The public modulus"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) The number of integers coprime to n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Euler's totient function φ(n) = (p−1)(q−1) for n = p×q where p and q are distinct primes. It represents the count of integers between 1 and n that are coprime to n. It is used to compute the private exponent d = e⁻¹ mod φ(n). The security of RSA depends on the difficulty of computing φ(n) without knowing p and q (equivalent to factoring n)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-solved-examples-20-mcqs",
      children: "📝 Solved Examples (20 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Alice and Bob use Diffie-Hellman with p = 23, g = 5. Alice chooses a = 6. What is A = g^a mod p?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 8", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 16", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 2", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) 8"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " A = g^a mod p = 5^6 mod 23"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step-by-step:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^1 mod 23 = 5"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^2 mod 23 = 25 mod 23 = 2"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^3 mod 23 = 2×5 mod 23 = 10"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^4 mod 23 = 10×5 mod 23 = 50 mod 23 = 4"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^5 mod 23 = 4×5 mod 23 = 20"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^6 mod 23 = 20×5 mod 23 = 100 mod 23 = 8"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Alice's public value A = 8."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " In AES-256, how many bytes of key material are generated during the key expansion for all rounds?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 16 bytes", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 60 bytes", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 240 bytes", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 256 bytes"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 240 bytes"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " Total round key bytes = (rounds + 1) × block_size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        }), " AES-256 has 14 rounds. Each round needs a 128-bit (16-byte) round key. Including the initial key, we have (14 + 1) × 16 = 240 bytes of expanded key material."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The key expansion starts with the 256-bit (32-byte) cipher key and expands it into 15 round keys (the initial key plus keys for each of the 14 rounds)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the birthday attack complexity against SHA-256?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 2^128", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 2^64", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 2^256", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 2^32"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) 2^128"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " Birthday bound for n-bit hash = 2^(n/2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " SHA-256 produces a 256-bit digest. By the birthday paradox, a collision can be found in approximately 2^(256/2) = 2^128 attempts. This is why SHA-256 provides 128-bit security against collision attacks (not 256-bit). Pre-image resistance remains at 2^256."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Comparison:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "MD5 (128-bit): birthday attack in 2^64 — BROKEN (practical collisions in 2^18)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-1 (160-bit): birthday attack in 2^80 — BROKEN (SHAttered at 2^63)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-256 (256-bit): birthday attack in 2^128 — SECURE"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In RSA, given p = 11, q = 17, e = 7, what is the private exponent d?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 23", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 77", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 91", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 103"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: D) 103"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " d = e^(-1) mod φ(n), where n = p×q, φ(n) = (p−1)(q−1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step-by-step:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "n = 11 × 17 = 187"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "φ(n) = (11−1)(17−1) = 10 × 16 = 160"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Find d such that e×d ≡ 1 mod 160"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "7 × d ≡ 1 mod 160"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "d = 7^(-1) mod 160"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Using extended Euclidean algorithm:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "160 = 7 × 22 + 6"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "7 = 6 × 1 + 1"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "6 = 1 × 6 + 0"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Back-substitute: 1 = 7 − 6 = 7 − (160 − 7×22) = 7×23 − 160\nThus d ≡ 23 mod 160 → d = 23? No, d = 23 × 7 mod 160... let me recheck."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "7d ≡ 1 mod 160\nUsing extended Euclid:\n160 = 7×22 + 6\n7 = 6×1 + 1\n6 = 1×6 + 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "1 = 7 − 6 = 7 − (160 − 7×22) = 7×23 − 160×1\nSo 7×23 = 1 + 160 → 7×23 ≡ 1 mod 160\nd = 23"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Wait — 7 × 23 = 161 = 1 mod 160. So d = 23. None of the options match 23."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Let me recalculate. e = 7, φ(n) = 160.\n7 × 23 = 161 ≡ 1 mod 160. So d = 23. The options given don't include 23. Let me check again."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Actually, the problem says p=11, q=17, so φ(n) = (11-1)(17-1) = 10×16 = 160.\n7 × 23 = 161 ≡ 1 (mod 160). So d = 23."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "But option A is 23. Yes! A) 23."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) 23?"
        }), " No wait, I wrote 103 as D. Let me recheck: 23 matches option A."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Actually, looking at the options: A) 23, B) 77, C) 91, D) 103. 23 is A."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Answer: A) 23"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which block cipher mode provides authentication in addition to encryption?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ECB", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) CBC", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) CTR", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) GCM"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: D) GCM (Galois/Counter Mode)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " GCM is an authenticated encryption (AEAD) mode that combines CTR mode for encryption with Galois field authentication tag. It provides:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confidentiality"
          }), " (via CTR encryption)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrity and authentication"
          }), " (via GHASH — Galois field multiplication)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Additional Authenticated Data (AAD) can be authenticated without encryption"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "ECB, CBC, and CTR provide only confidentiality. To add authentication to CTR or CBC, you need a separate MAC (e.g., Encrypt-then-MAC)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " A message M = 5 is encrypted with RSA public key (e=3, n=33). What is the ciphertext?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 15", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 26", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 125", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 5"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 26"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " C = M^e mod n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C = 5^3 mod 33"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "5^3 = 125"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "125 ÷ 33 = 3 remainder 26"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "C = 26"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "To decrypt: M = C^d mod n. First find d:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "n = 33 = 3 × 11 → p=3, q=11"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "φ(n) = 2 × 10 = 20"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "d = e^(-1) mod 20 = 3^(-1) mod 20 = 7 (since 3×7=21≡1 mod 20)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "M = 26^7 mod 33 = 5 ✓"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " How many S-boxes does DES use in each round?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 4", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 6", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 8", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 16"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 8"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " DES uses 8 S-boxes (S1 through S8), each mapping 6 input bits to 4 output bits. The 48-bit result after XOR with the round key is divided into eight 6-bit groups, each fed into a different S-box. The 32-bit output from all S-boxes is then permuted by the P-box. Each S-box is a 4×16 lookup table with non-linear substitution properties."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "DES parameters you must memorize:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Key size: 56 bits (effective) / 64 bits (with parity)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Block size: 64 bits"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rounds: 16"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "S-boxes: 8 (6→4 bits each)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Feistel structure (not SPN like AES)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " In SHA-256, the compression function runs for how many rounds?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 16", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 32", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 64", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 80"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 64"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " SHA-256 uses 64 rounds of compression in its Merkle-Damgård construction. SHA-512 uses 80 rounds. Each round processes a 32-bit word (SHA-256) using bitwise operations, modular addition, and logical functions. The message schedule expands 16 input words into 64 words (one per round)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Comparison:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "MD5: 64 rounds (4 rounds × 16 steps)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-1: 80 rounds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-256: 64 rounds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-512: 80 rounds"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " You have a 2 MB file. Which encryption approach has the lowest computational overhead?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) RSA-2048 encrypting the entire file", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) ECDH key exchange + AES-256-GCM", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) SHA-256 hashing", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Diffie-Hellman key exchange"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) SHA-256 hashing"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Hashing is the fastest operation here — it produces a fixed 256-bit digest and does not involve encryption keys. For encrypting 2 MB of data, hybrid encryption (ECDH + AES-256-GCM) is the practical approach:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "RSA cannot encrypt 2 MB directly (max message length ≤ key size ∼ 256 bytes for RSA-2048)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "RSA the full file would require splitting into blocks, each encrypted with slow asymmetric math (100–1000× slower than symmetric)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "ECDH + AES is efficient: key exchange (fast), then AES-256-GCM (hardware-accelerated via AES-NI)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Hashing is fastest but does NOT provide confidentiality — only integrity"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " What is the effective security level of AES-128 against a quantum attacker using Grover's algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 128 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 64 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 256 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 32 bits"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 64 bits"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " Grover's algorithm reduces security of a symmetric cipher with k-bit key to 2^(k/2) quantum operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Grover's quantum search algorithm can find an AES-128 key in approximately 2^64 operations (square root of 2^128), effectively halving the security level. This means:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "AES-128: 2^128 classical → 2^64 quantum (INSECURE against quantum)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "AES-192: 2^192 classical → 2^96 quantum (MARGINAL)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "AES-256: 2^256 classical → 2^128 quantum (SECURE against quantum)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This is why post-quantum cryptography initiatives recommend AES-256 as the minimum symmetric cipher for long-term security. For asymmetric ciphers, Shor's algorithm is even more devastating — it breaks RSA and ECC completely in polynomial time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q11."
      }), " In CBC mode encryption, if the IV is reused with the same key for two different messages, which security property is compromised?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Integrity", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Confidentiality (identical plaintext prefixes leak)", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Non-repudiation", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Availability"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Confidentiality (identical plaintext prefixes leak)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " In CBC, C₁ = E(K, P₁ ⊕ IV). If the same IV is used with the same key, then for two messages M and M' where the first plaintext blocks P₁ and P₁' are identical, C₁ will equal C₁'. The attacker can detect identical prefixes across encrypted messages. This is a pattern leakage similar to ECB's weakness, though limited to the first block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best practice:"
        }), " IV must be random and unique per encryption. Never reuse an IV with the same key. CTR mode has the same requirement — nonce reuse is catastrophic (allows XOR of ciphertexts to cancel keystream)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q12."
      }), " A stream cipher generates keystream 0x3A and plaintext is 0x7F. What is the ciphertext?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 0x45", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 0x3A", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 0x7F", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 0xB9"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) 0x45"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " Ciphertext = Plaintext ⊕ Keystream"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "0x7F ⊕ 0x3A"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Binary: 0111 1111 ⊕ 0011 1010"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "= 0100 0101"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "= 0x45"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Decryption uses the same keystream: Plaintext = Ciphertext ⊕ Keystream = 0x45 ⊕ 0x3A = 0x7F ✓"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q13."
      }), " What is the minimum recommended RSA key size in 2025 for adequate security?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 1024 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 2048 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 3072 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 4096 bits"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 2048 bits"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " As of 2025:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSA-1024:"
          }), " FACTORED by academic groups (estimate < $100K cloud cost) — INSECURE"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSA-2048:"
          }), " Minimum acceptable — equivalent to 112-bit symmetric security — APPROVED"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSA-3072:"
          }), " Recommended — equivalent to 128-bit symmetric — PREFERRED"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSA-4096:"
          }), " High security — equivalent to 192-bit symmetric — OVERKILL for most"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "NIST SP 800-57 specifies that RSA-2048 is acceptable through 2030. For new systems, RSA-3072 or ECC-256 (which provides equivalent security at much smaller key sizes) is recommended. Many organizations are moving to ECC or post-quantum candidates (CRYSTALS-Kyber, Dilithium) for long-term security."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14."
      }), " Which mode converts a block cipher into a stream cipher and does NOT require padding?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) ECB", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) CBC", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) CFB", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) All of the above require padding"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) CFB"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " CFB (Cipher Feedback) mode converts a block cipher into a self-synchronizing stream cipher by encrypting the IV/ciphertext to produce keystream, then XORing with plaintext. Since it operates as a stream cipher:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No padding is required (data can be any length)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Encryption is serial (cannot parallelize)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Decryption can parallelize"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Other stream-like modes: OFB, CTR. All three (CFB, OFB, CTR) eliminate the need for padding. ECB and CBC are pure block modes that require padding."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q15."
      }), " A 3DES-EDE with three independent keys provides what effective security level?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 56 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 112 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 168 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 80 bits"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 112 bits — but with meet-in-the-middle, effective ≈ 112 bits for 3-key"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "3-key 3DES: key material = 3 × 56 = 168 bits"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Meet-in-the-middle attack reduces effective security to ≈ 112 bits"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "2-key 3DES: key material = 112 bits, effective ≈ 80 bits (even lower)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Despite 112-bit effective security for 3-key, NIST deprecated 3DES in 2023 and will phase it out by 2030. The 64-bit block size makes it vulnerable to Sweet32 birthday attacks (collision after ∼ 2^32 blocks encrypted). Always use AES instead."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q16."
      }), " What is the probability that two randomly chosen 256-bit hash values collide? (Assume uniform distribution)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 1/2^128", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 1/2^256", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 1/2^64", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 1/2^32"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) 1/2^256"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formula:"
        }), " For n-bit hash, P(collision between two specific values) = 1/2^n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " For two specific hash values chosen at random, the probability they are equal is 1/2^256 (astronomically small). However, the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "birthday paradox"
        }), " changes the question: if you have a set of k hash values, the probability that ANY two collide is ≈ k²/2^(n+1). This reaches 50% when k ≈ 2^(n/2) = 2^128."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exam tip:"
        }), " Distinguish between:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"Probability that a given hash matches another given hash\" = 1/2^n"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "\"Birthday attack complexity\" = 2^(n/2)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q17."
      }), " Which of the following hash algorithms is quantum-resistant?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) SHA-256", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) MD5", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) SHA-1", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) None of the above"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) SHA-256"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " Hash functions are partially quantum-resistant because:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Grover's algorithm reduces pre-image resistance from 2^n to 2^(n/2)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-256 with 256-bit output → 2^128 pre-image resistance against quantum (still secure)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collision resistance against quantum: 2^(n/3) via Brassard-Høyer-Tapp algorithm → 2^85 for SHA-256 (still secure)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MD5 (128-bit output, already broken classically) and SHA-1 (160-bit, broken classically) are insecure regardless of quantum considerations. SHA-256 and SHA-512 are recommended for post-quantum use. Note that asymmetric algorithms (RSA, ECDSA) are completely broken by Shor's algorithm — this is why NIST is standardizing post-quantum signature schemes (CRYSTALS-Dilithium, FALCON, SPHINCS+)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q18."
      }), " In AES, MixColumns operation is omitted in which round?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) First round only", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Last round only", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Both first and last rounds", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) All rounds include MixColumns"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Last round only"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The AES round structure:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Each round except last:"
          }), " SubBytes → ShiftRows → MixColumns → AddRoundKey (4 operations)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Final round:"
          }), " SubBytes → ShiftRows → AddRoundKey (MixColumns omitted)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Before first round:"
          }), " AddRoundKey (initial key addition)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Omission of MixColumns in the final round makes AES decrypt structurally similar to encrypt (the cipher is symmetric in structure). This does NOT reduce security. Total rounds: AES-128 = 10, AES-192 = 12, AES-256 = 14."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q19."
      }), " What is the output size of SHA-3-256?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 256 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) 512 bits", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 1600 bits (state size)", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 1088 bits (rate)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: A) 256 bits"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " SHA-3-256 produces a 256-bit output. The naming convention for SHA-3 (Keccak) is explicit:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-3-224 → 224-bit output"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-3-256 → 256-bit output"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-3-384 → 384-bit output"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "SHA-3-512 → 512-bit output"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "SHA-3 uses a sponge construction (not Merkle-Damgård like SHA-2). The 1600-bit state is divided into:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rate (r):"
          }), " How many bits are absorbed/squeezed per operation (1088 for SHA-3-256)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Capacity (c):"
          }), " Security parameter = 2 × output length (512 for SHA-3-256)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "SHA-3 is not vulnerable to length extension attacks (unlike SHA-256)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q20."
      }), " In the context of post-quantum cryptography, which family of cryptographic algorithms is a NIST-selected standard for public-key encryption?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) RSA", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) ECC", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) CRYSTALS-Kyber", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) AES"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) CRYSTALS-Kyber"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " In August 2024, NIST selected CRYSTALS-Kyber (now standardized as ML-KEM — Module Lattice-Based Key Encapsulation Mechanism) as the primary post-quantum public-key encryption/KEM standard. Key facts:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Based on:"
          }), " Module Learning With Errors (MLWE) problem — believed quantum-hard"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key sizes:"
          }), " KYBER-512 (≈ AES-128 equivalent), KYBER-768 (AES-192), KYBER-1024 (AES-256)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance:"
          }), " Roughly comparable to ECC in speed, but larger keys/ciphertexts"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "For digital signatures, NIST selected CRYSTALS-Dilithium (ML-DSA) and FALCON (FN-DSA). SPHINCS+ (SLH-DSA) is a stateless hash-based backup. These will replace RSA and ECC over the next decade."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-aes-256-gcm-encryptiondecryption-utility",
      children: "TypeScript Implementation: AES-256-GCM Encryption/Decryption Utility"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * AES-256-GCM Encryption Utility\n * Provides authenticated encryption with associated data (AEAD)\n * Uses Node.js crypto module\n */\nimport * as crypto from 'crypto';\n\nconst ALGORITHM = 'aes-256-gcm';\nconst IV_LENGTH = 12;  // 96-bit IV (recommended for GCM)\nconst TAG_LENGTH = 16; // 128-bit authentication tag\nconst KEY_LENGTH = 32; // 256-bit key\n\ninterface EncryptedData {\n  ciphertext: string;   // hex-encoded\n  iv: string;           // hex-encoded\n  tag: string;          // hex-encoded\n  aad?: string;         // hex-encoded additional authenticated data\n}\n\n/**\n * Encrypt plaintext using AES-256-GCM\n */\nfunction encrypt(\n  plaintext: string,\n  key: Buffer,\n  aad?: Buffer\n): EncryptedData {\n  const iv = crypto.randomBytes(IV_LENGTH);\n  const cipher = crypto.createCipheriv(ALGORITHM, key, iv, { authTagLength: TAG_LENGTH });\n\n  if (aad) cipher.setAAD(aad);\n\n  const encrypted = Buffer.concat([\n    cipher.update(plaintext, 'utf8'),\n    cipher.final()\n  ]);\n  const tag = cipher.getAuthTag();\n\n  return {\n    ciphertext: encrypted.toString('hex'),\n    iv: iv.toString('hex'),\n    tag: tag.toString('hex'),\n    aad: aad?.toString('hex')\n  };\n}\n\n/**\n * Decrypt ciphertext using AES-256-GCM with authentication tag verification\n */\nfunction decrypt(\n  data: EncryptedData,\n  key: Buffer,\n  aad?: Buffer\n): string {\n  const decipher = crypto.createDecipheriv(\n    ALGORITHM,\n    key,\n    Buffer.from(data.iv, 'hex'),\n    { authTagLength: TAG_LENGTH }\n  );\n\n  decipher.setAuthTag(Buffer.from(data.tag, 'hex'));\n  if (aad) decipher.setAAD(aad);\n\n  const decrypted = Buffer.concat([\n    decipher.update(Buffer.from(data.ciphertext, 'hex')),\n    decipher.final()  // throws if authentication fails\n  ]);\n\n  return decrypted.toString('utf8');\n}\n\n// Hybrid encryption: RSA wraps the AES key\ninterface HybridEncryptedMessage {\n  encryptedKey: string;  // RSA-encrypted AES key (hex)\n  encryptedData: EncryptedData;\n}\n\n/**\n * Encrypt using hybrid RSA-AES (encrypt AES key with RSA, data with AES-GCM)\n */\nfunction hybridEncrypt(\n  plaintext: string,\n  rsaPublicKey: string\n): HybridEncryptedMessage {\n  const aesKey = crypto.randomBytes(KEY_LENGTH);\n  const encryptedKey = crypto.publicEncrypt(rsaPublicKey, aesKey);\n  const encryptedData = encrypt(plaintext, aesKey);\n\n  return {\n    encryptedKey: encryptedKey.toString('hex'),\n    encryptedData\n  };\n}\n\nfunction hybridDecrypt(\n  message: HybridEncryptedMessage,\n  rsaPrivateKey: string\n): string {\n  const aesKey = crypto.privateDecrypt(\n    rsaPrivateKey,\n    Buffer.from(message.encryptedKey, 'hex')\n  );\n  return decrypt(message.encryptedData, aesKey);\n}\n\n// Usage example\nfunction demo() {\n  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {\n    modulusLength: 2048\n  });\n\n  const original = 'Confidential banking data: A/C 12345, Balance ₹50,00,000';\n  const encrypted = hybridEncrypt(original, publicKey.export({ type: 'pkcs1', format: 'pem' }));\n  const decrypted = hybridDecrypt(encrypted, privateKey.export({ type: 'pkcs1', format: 'pem' }));\n\n  console.log('Original:', original);\n  console.log('Encrypted AES key:', encrypted.encryptedKey.slice(0, 64) + '...');\n  console.log('IV:', encrypted.encryptedData.iv);\n  console.log('Tag:', encrypted.encryptedData.tag);\n  console.log('Decrypted:', decrypted);\n  console.log('Match:', original === decrypted); // true\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-implementation-blockchain-hash-chain",
      children: "TypeScript Implementation: Blockchain Hash Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Blockchain Hash Chain Simulator\n * Demonstrates cryptographic chaining using SHA-256\n */\n\ninterface Block {\n  index: number;\n  timestamp: number;\n  data: string;\n  previousHash: string;\n  hash: string;\n  nonce: number;\n}\n\nfunction calculateHash(index: number, timestamp: number, data: string, previousHash: string, nonce: number): string {\n  return crypto\n    .createHash('sha256')\n    .update(`${index}${timestamp}${data}${previousHash}${nonce}`)\n    .digest('hex');\n}\n\nclass SimpleBlockchain {\n  chain: Block[] = [];\n\n  constructor() {\n    this.chain.push(this.createGenesisBlock());\n  }\n\n  private createGenesisBlock(): Block {\n    return {\n      index: 0,\n      timestamp: Date.now(),\n      data: 'Genesis Block',\n      previousHash: '0',\n      hash: '',\n      nonce: 0\n    };\n  }\n\n  addBlock(data: string, difficulty: number = 4): Block {\n    const previousBlock = this.chain[this.chain.length - 1];\n    const newBlock = this.mineBlock(\n      previousBlock.index + 1,\n      Date.now(),\n      data,\n      previousBlock.hash,\n      difficulty\n    );\n    this.chain.push(newBlock);\n    return newBlock;\n  }\n\n  private mineBlock(\n    index: number,\n    timestamp: number,\n    data: string,\n    previousHash: string,\n    difficulty: number\n  ): Block {\n    const block: Block = { index, timestamp, data, previousHash, hash: '', nonce: 0 };\n    const target = '0'.repeat(difficulty);\n\n    do {\n      block.nonce++;\n      block.hash = calculateHash(index, timestamp, data, previousHash, block.nonce);\n    } while (!block.hash.startsWith(target));\n\n    return block;\n  }\n\n  validateChain(): boolean {\n    for (let i = 1; i < this.chain.length; i++) {\n      const current = this.chain[i];\n      const previous = this.chain[i - 1];\n\n      if (current.previousHash !== previous.hash) return false;\n\n      const computedHash = calculateHash(\n        current.index, current.timestamp, current.data,\n        current.previousHash, current.nonce\n      );\n      if (computedHash !== current.hash) return false;\n    }\n    return true;\n  }\n\n  tamperWithBlock(index: number, newData: string): void {\n    if (index > 0 && index < this.chain.length) {\n      this.chain[index].data = newData;\n    }\n  }\n}\n\n// Demo: tampering detection\nconst bc = new SimpleBlockchain();\nbc.addBlock('Transaction: Alice → Bob 10 BTC');\nbc.addBlock('Transaction: Bob → Charlie 5 BTC');\n\nconsole.log('Chain valid:', bc.validateChain()); // true\n\nbc.tamperWithBlock(1, 'Transaction: Alice → Eve 1000 BTC');\nconsole.log('After tamper - Chain valid:', bc.validateChain()); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-diagram-post-quantum-cryptography-timeline",
      children: "Mermaid Diagram: Post-Quantum Cryptography Timeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title Post-Quantum Cryptography Evolution\n    2016 : NIST Post-Quantum Cryptography Standardization Process Begins\n    2017 : NIST Round 1: 69 Submissions Received\n    2019 : NIST Round 2: 26 Candidates Advance\n    2020 : NIST Round 3: 7 Finalists Selected\n    2022 : NIST Announces First 4 Selected Algorithms\n         : CRYSTALS-Kyber (KEM)\n         : CRYSTALS-Dilithium (Signatures)\n         : FALCON (Signatures)\n         : SPHINCS+ (Signatures)\n    2024 : NIST Final Standards Published\n         : FIPS 203 (ML-KEM)\n         : FIPS 204 (ML-DSA)\n         : FIPS 205 (SLH-DSA)\n    2025-2030 : Migration Period\n         : Hybrid certificates (RSA+Kyber)\n         : TLS 1.3 hybrid key exchange\n    2030+ : Full Post-Quantum Transition Expected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-diagram-aes-encryption-flow",
      children: "Mermaid Diagram: AES Encryption Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph AES_Encrypt[AES-128 Encryption (10 Rounds)]\n        PT[\"Plaintext (128 bits)\"] --> AK[\"AddRoundKey<br/>(XOR with Round Key 0)\"]\n        AK --> R1[\"Round 1-9\"]\n        R1 --> SB[\"SubBytes<br/>(S-box substitution)\"]\n        SB --> SR[\"ShiftRows<br/>(Byte transposition)\"]\n        SR --> MC[\"MixColumns<br/>(Matrix multiply over GF(2^8))\"]\n        MC --> AK2[\"AddRoundKey<br/>(XOR with Round Key i)\"]\n        AK2 --> R10[\"Round 10 (Final)\"]\n        R10 --> SB2[\"SubBytes\"]\n        SB2 --> SR2[\"ShiftRows\"]\n        SR2 --> AK3[\"AddRoundKey<br/>(XOR with Round Key 10)\"]\n        AK3 --> CT[\"Ciphertext (128 bits)\"]\n    end\n    style AES_Encrypt fill:#e8f5e9\n    style CT fill:#a5d6a7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quantum-cryptography-basics",
      children: "Quantum Cryptography Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Quantum Key Distribution (QKD):"
      }), " Uses quantum mechanics principles (no-cloning theorem, Heisenberg uncertainty) to establish a shared secret key with unconditional security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BB84 Protocol (Bennett-Brassard 1984):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice sends photons encoded in one of two bases (rectilinear +/× or diagonal ×/×)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob measures each photon in a randomly chosen basis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alice and Bob compare bases over public channel (discard mismatches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remaining bits form the raw key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bob publishes a subset to estimate error rate (detects eavesdropping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Information reconciliation + privacy amplification → final shared key"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "QKD Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distance limited (~100-200 km fiber; satellites needed for longer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Requires specialized hardware (single-photon sources/detectors)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No amplification possible (quantum repeaters still experimental)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Currently expensive (commercial systems available from ID Quantique, Toshiba)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Quantum Cryptography (PQC) vs QKD:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PQC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "QKD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical hardness (lattice, code, hash-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum physics principles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard computers (software change)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized quantum optics hardware"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited (internet-based)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (< 200 km without repeaters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maturity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standards published (2024)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial but limited deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Threat model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resists quantum computer attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information-theoretically secure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-exercise-bank-30-questions",
      children: "📖 Exercise Bank (30 Questions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Encrypt the message \"HELLO\" using Caesar cipher with shift = 3."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Compute 2's complement of 10110110 (8 bits). Verify by adding to original."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Given p = 7, q = 13, e = 5 for RSA. Find n, φ(n), and d."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Encrypt M = 2 using RSA with (e=5, n=35). Show ciphertext."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " A TLS session uses AES-256-GCM. How many bytes of IV are sent per record? What is the tag size?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6."
      }), " For SHA-256, how many bits of security does it provide against collision attacks? Against pre-image attacks?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q7."
      }), " In CBC mode, if ciphertext block C3 is corrupted during transmission, which plaintext blocks are affected upon decryption?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q8."
      }), " Convert hexadecimal string \"A3B4C5\" to binary and count the number of 1s."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q9."
      }), " Calculate the keystream byte if plaintext = 0x9A and ciphertext = 0x3F in a stream cipher."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q10."
      }), " A 1 MB file is encrypted with AES-128-CBC. How many blocks are encrypted? (AES block size = 16 bytes)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q11."
      }), " Explain why ECB mode should not be used for encrypting images. Provide a real-world example."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q12."
      }), " In Diffie-Hellman, if p = 13, g = 2, Alice's private key a = 5, Bob's private key b = 7, compute the shared secret."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q13."
      }), " Compare the computational complexity of RSA encryption vs AES encryption on a 1 KB message."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14."
      }), " What is the purpose of the nonce in CTR mode? Why must it be unique per key?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q15."
      }), " Given RSA modulus n = 221 and public exponent e = 7, find p, q, and d."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q16."
      }), " In SHA-512, what are the block size, output size, and number of rounds?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q17."
      }), " What is the birthday bound for SHA-384? How many attempts to find a collision with 50% probability?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q18."
      }), " A password hashing system uses SHA-256 without salting. Explain why this is insecure. What should be used instead?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q19."
      }), " In OFB mode, why does the keystream not depend on the plaintext or ciphertext?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q20."
      }), " Explain how hybrid encryption works in PGP. List the symmetric and asymmetric algorithms used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q21."
      }), " What is forward secrecy? Which TLS 1.3 key exchange mechanism provides it?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q22."
      }), " Convert the IP address 192.168.1.1 to its 32-bit binary equivalent."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q23."
      }), " In AES, what is the difference between SubBytes and ShiftRows in terms of what they operate on?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q24."
      }), " If an HMAC-SHA256 tag is 256 bits, how many bits of security does it provide against forgery?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q25."
      }), " A certificate chain has 3 certificates: Leaf → Intermediate → Root. How many signatures need to be verified to validate the leaf?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q26."
      }), " In DHE key exchange, what additional property does the \"E\" (Ephemeral) provide compared to static DH?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q27."
      }), " Show how the expression X + X'Y simplifies using Boolean algebra laws."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q28."
      }), " What is the avalanche effect in cryptography? Demonstrate with a 1-bit change in SHA-256 input."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q29."
      }), " Compare Argon2id vs bcrypt vs PBKDF2 for password hashing. Which is recommended in 2025?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q30."
      }), " In a side-channel attack, what information is leaked by the time taken for RSA decryption?"]
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
        }), " Caesar(HELLO, 3): KHOOR. Each letter shifted by 3 (H→K, E→H, L→O, L→O, O→R)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A2."
        }), " 10110110 → 1's complement = 01001001 → 2's complement = 01001010. Verify: 10110110 + 01001010 = 1 00000000 (overflow discarded → 0) ✓"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A3."
        }), " n = 7×13 = 91, φ(n) = 6×12 = 72, d = e^(-1) mod 72 = 5^(-1) mod 72 = 29 (since 5×29 = 145 ≡ 1 mod 72)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A4."
        }), " C = 2^5 mod 35 = 32 mod 35 = 32"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A5."
        }), " IV = 12 bytes (96 bits), Tag = 16 bytes (128 bits). Total overhead per record = 28 bytes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A6."
        }), " Collision resistance: 2^128 (birthday bound). Pre-image resistance: 2^256. Grover's quantum: 2^64 (collision) / 2^128 (pre-image)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A7."
        }), " P₃ is corrupted (bit error at same position as C₃ error). P₄ is fully garbled (C₃ input to P₄ decryption). P₅+ unaffected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A8."
        }), " A3B4C5₁₆ = 1010 0011 1011 0100 1100 0101₂ → 15 ones"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A9."
        }), " XOR property: keystream = plaintext ⊕ ciphertext = 0x9A ⊕ 0x3F = 0xA5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A10."
        }), " 1 MB = 1,048,576 bytes. Blocks = 1,048,576 / 16 = 65,536 blocks. Each encrypted independently in CBC (but chained)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A11."
        }), " ECB encrypts each block independently. Identical plaintext blocks produce identical ciphertext blocks. An image encrypted with ECB still reveals the silhouette/pattern because areas of same color encrypt to same ciphertext blocks. Famous example: \"ECB Penguin\" (the Tux penguin image)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A12."
        }), " Alice's public A = 2^5 mod 13 = 32 mod 13 = 6. Bob's public B = 2^7 mod 13 = 128 mod 13 = 11. Shared secret s = B^a mod 13 = 11^5 mod 13. 11^2 = 121 ≡ 4 mod 13, 11^4 ≡ 4^2 = 16 ≡ 3 mod 13, 11^5 = 11^4 × 11 = 3×11 = 33 ≡ 7 mod 13. Alice computes same: 6^7 mod 13 = 7."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A13."
        }), " RSA-2048 encrypts ~117 bytes per operation (2048-bit modulus, OAEP padding). AES-256 encrypts 16 bytes per round at nanosecond speeds (AES-NI). RSA is 100-1000× slower per byte. For 1 KB: RSA needs ~9 encryptions vs AES needs 64 block encryptions. AES is orders of magnitude faster."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A14."
        }), " The nonce ensures uniqueness of the counter input (nonce || counter). If nonce is reused with same key, the keystream is identical for both messages. Attacker can XOR ciphertexts to cancel keystream and recover plaintext. The nonce provides uniqueness, not secrecy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A15."
        }), " n = 221 = 13 × 17 (p=13, q=17). φ(n) = 12×16 = 192. d = 7^(-1) mod 192. Extended Euclid: 192 = 7×27 + 3, 7 = 3×2 + 1, 3 = 1×3 + 0. 1 = 7 − 3×2 = 7 − (192−7×27)×2 = 7×55 − 192×2. So d = 55."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A16."
        }), " Block size: 1024 bits (128 bytes). Output: 512 bits (64 bytes). Rounds: 80."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A17."
        }), " SHA-384 output = 384 bits. Birthday bound = 2^(384/2) = 2^192 attempts. This provides 192-bit security against collision attacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A18."
        }), " Without salt: the same password always produces the same hash. Attacker pre-computes rainbow table and reverses all hashes. With salt: each password gets a unique random salt, hash = H(salt || password). Rainbow tables become infeasible. Use Argon2id (memory-hard, time-hard, parallel-hard) in 2025."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A19."
        }), " OFB generates keystream by repeatedly encrypting the previous keystream block: Oᵢ = E(K, Oᵢ₋₁). The keystream is completely independent of plaintext and ciphertext. Advantages: no error propagation (bit error → same bit error in plaintext); can precompute keystream. Disadvantage: not self-synchronizing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A20."
        }), " PGP hybrid: (1) Generate random 256-bit session key. (2) Encrypt message with AES-256 (symmetric). (3) Encrypt session key with recipient's RSA-4096 public key. (4) Optionally sign hash with sender's ECDSA private key. Algorithms: AES-256, Twofish (symmetric); RSA, ECDH (asymmetric); SHA-256 (hash)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A21."
        }), " Forward secrecy: compromise of long-term private key does not compromise past session keys. TLS 1.3 uses ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) where ephemeral key pairs are generated per session and discarded. Even if server's long-term signing key is leaked, past session keys remain secure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A22."
        }), " 192 = 11000000, 168 = 10101000, 1 = 00000001, 1 = 00000001 → 11000000.10101000.00000001.00000001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A23."
        }), " SubBytes operates on each byte independently (non-linear S-box substitution). ShiftRows operates on the block's rows (byte transposition — row 0 shifts 0, row 1 shifts 1, row 2 shifts 2, row 3 shifts 3). They operate on different aspects: value substitution vs position permutation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A24."
        }), " HMAC-SHA256 security = 256 bits (output length). Forgery requires either 2^256 exhaustive search (key recovery) or 2^128 birthday attack on collision (birthday bound). The security is min(key_size, output_size/2 for birthday, output_size for direct)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A25."
        }), " Two signatures: (1) Intermediate CA signs the leaf certificate. (2) Root CA signs the intermediate CA certificate. Root is self-signed (trusted anchor, not verified). So 2 signature verifications needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A26."
        }), " DHE generates ephemeral (temporary) DH key pairs for each session. The private keys are discarded after the session. This provides forward secrecy — past session keys cannot be recovered even if the long-term authentication key is compromised. Static DH uses fixed keys and lacks forward secrecy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A27."
        }), " X + X'Y = (X+X')(X+Y) [Distributive] = 1·(X+Y) [Complement X+X'=1] = X+Y [Identity]. This is a key simplification identity for Boolean algebra exams."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A28."
        }), " Avalanche effect: a small change in input (1 bit) causes ~50% of output bits to change. For SHA-256: changing 1 bit in input changes ~128 bits of the 256-bit output on average. Demonstration: SHA-256(\"Hello\") vs SHA-256(\"hEllo\") — compare in hex, most bits differ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A29."
        }), " Argon2id is the recommended password hashing function in 2025 (winner of PHC). It is memory-hard (GPU/ASIC resistant), time-hard (configurable iterations), and side-channel resistant. bcrypt is adequate (Blowfish-based, 72-byte limit, not memory-hard). PBKDF2 is weakest (no memory-hardness, easily parallelized on GPU). OWASP recommends Argon2id as primary, bcrypt as fallback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A30."
        }), " RSA decryption time varies with the private key bits and the message. A timing side-channel measures how long decryption takes — differences may reveal bits of d (private exponent). Mitigation: constant-time modular exponentiation or RSA blinding (multiply ciphertext by r^e before decryption, then divide by r)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Symmetric encryption"
          }), " (AES, DES, 3DES) uses one shared key for encrypt/decrypt. Fast (hardware accelerated) but key distribution is challenging."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DES"
          }), " is obsolete (56-bit key). ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3DES"
          }), " is deprecated. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AES"
          }), " is the current standard (128/192/256-bit keys, 128-bit blocks, 10/12/14 rounds, SPN structure)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Asymmetric encryption"
          }), " (RSA, ECC) uses public-private key pairs. RSA security relies on integer factorization; ECC relies on elliptic curve discrete log. Hybrid encryption combines asymmetric key exchange with symmetric bulk encryption."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Diffie-Hellman"
          }), " key exchange establishes a shared secret over an insecure channel. Security depends on the discrete logarithm problem. Vulnerable to MITM without authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Block ciphers"
          }), " operate on fixed-size blocks with padding; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "stream ciphers"
          }), " operate on bit/byte streams without padding. ECB leaks patterns, CBC requires random IV, CTR is parallelizable. GCM (CTR + authentication tag) is the current recommended mode."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hash functions"
          }), " (MD5-broken, SHA-1-broken, SHA-256-secure) produce fixed-length digests. Properties: pre-image resistance, second pre-image resistance, collision resistance. Birthday attack: 2^(n/2) complexity for collision."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key sizes comparison:"
          }), " RSA-2048 ≈ ECC-224 ≈ AES-112; RSA-3072 ≈ ECC-256 ≈ AES-128; RSA-4096 ≈ ECC-384 ≈ AES-192."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For encryption:"
        }), " Always use AES-256-GCM or AES-256-CTR + HMAC. Never use ECB. Never reuse IV/nonce with the same key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For hashing:"
        }), " Use SHA-256 or SHA-512. Never use MD5 or SHA-1 for security-critical operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For key exchange:"
        }), " Use ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) for forward secrecy. Use TLS 1.3 which mandates it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For passwords:"
        }), " Use a dedicated password hashing function (bcrypt, Argon2, PBKDF2) — not a general-purpose hash."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For exam prep:"
        }), " Memorize algorithm parameters (key/block sizes, rounds) and know which algorithms are broken. Focus on conceptual difference between symmetric/asymmetric, ECB failure mode, birthday attack bound, and the specific properties of hash functions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz-5-mcqs",
      children: "Chapter Quiz (5 MCQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which of the following correctly matches the algorithm to its structure?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) AES — Feistel network", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) DES — Substitution-Permutation Network", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) AES — Substitution-Permutation Network", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Both DES and AES — Feistel network"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) AES — Substitution-Permutation Network"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " AES uses an SPN structure (SubBytes, ShiftRows, MixColumns, AddRoundKey), whereas DES uses a Feistel network (split block into L/R halves, apply round function to right half, XOR with left half, swap). SPN ciphers are generally faster in hardware because all operations can be applied to the entire block at once."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " In CTR mode, the encryption of block i can be expressed as:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) Cᵢ = E(K, Pᵢ ⊕ Counterᵢ)", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) Cᵢ = Pᵢ ⊕ E(K, Counterᵢ)", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Cᵢ = Pᵢ ⊕ E(K, Cᵢ₋₁)", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) Cᵢ = E(K, Cᵢ₋₁) ⊕ Pᵢ"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: B) Cᵢ = Pᵢ ⊕ E(K, Counterᵢ)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " CTR mode encrypts counter values to produce a keystream, which is then XORed with plaintext: Cᵢ = Pᵢ ⊕ E(K, Nonce || Counterᵢ). Option A would be ECB-like (encrypting plaintext directly). Option C describes CFB mode. Option D describes OFB mode."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which hash function has the smallest output size among those that are still considered secure?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) SHA-256", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) SHA-384", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) SHA-512", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) SHA-224"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: D) SHA-224"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " SHA-224 produces a 224-bit digest and is still considered secure (112-bit security level). SHA-256 is also secure but produces a larger output. SHA-384 (192-bit security) and SHA-512 (256-bit security) are larger still. MD5 (128-bit) and SHA-1 (160-bit) are both broken and not considered secure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the primary reason ECB mode is insecure for encrypting multi-block messages?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) It is slower than other modes", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) It requires a random IV", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) Identical plaintext blocks produce identical ciphertext blocks", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) It cannot handle messages longer than 64 bytes"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) Identical plaintext blocks produce identical ciphertext blocks"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " ECB's fatal flaw is that each plaintext block is encrypted independently. If two plaintext blocks are identical (e.g., repeated patterns in images, documents, or structured data), their ciphertext blocks will also be identical. This leaks significant information about the plaintext structure. The classic demonstration is the \"ECB penguin\" image where the encrypted image still reveals the outline of the penguin."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The birthday attack on a hash function with output size n bits reduces the expected number of attempts to find a collision from approximately 2ⁿ to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A) 2", (0,jsx_runtime.jsx)(_components.br, {}), "\nB) n", (0,jsx_runtime.jsx)(_components.br, {}), "\nC) 2^(n/2)", (0,jsx_runtime.jsx)(_components.br, {}), "\nD) 2^(2n)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer: C) 2^(n/2)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explanation:"
        }), " The birthday paradox states that in a set of roughly √(2×2ⁿ) ≈ 2^(n/2) randomly chosen items, there is a >50% probability of two items colliding. For a hash function with n-bit output, this means a collision can be found in ~2^(n/2) attempts rather than ~2ⁿ attempts required for a pre-image. This is why hash functions need output sizes of at least 256 bits (128-bit birthday bound)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Chapter:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/courses/information-security/02-network-security/",
          children: "Chapter 2 — Network Security"
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